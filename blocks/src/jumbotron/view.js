import fetchContent from "../../shared_utils/fetchContent.js";

const SECTION_OPENED = new Event("sectionOpened");
const SECTION_CLOSED = new Event("sectionClosed");

window.addEventListener("load", init);

function init() {
	loadJumbotronBlocks().forEach(jumbotronBlock => {
		addEventListenersToJumbotron(jumbotronBlock);
		loadSectionBlocks(jumbotronBlock).forEach(sectionBlock => {
			addEventListenersToSection(sectionBlock, jumbotronBlock);
		})
		addEventListenersToBackButton(getJumbotronBackButton(jumbotronBlock), jumbotronBlock);
	})
}

function loadJumbotronBlocks() {
	return document.querySelectorAll(".wp-block-blaze-jumbotron");
}

function getJumbotronBackButton(jumbotronBlock) {
	return jumbotronBlock.querySelector(".jumbotron__back-button")
}

function loadSectionBlocks(jumbotronBlock) {
	return jumbotronBlock.querySelectorAll(".wp-block-blaze-section");
}

function getContentDiv(sectionBlock) {
	return sectionBlock.querySelector(".section__content");
}

function getSectionContainer(sectionBlock) {
	return sectionBlock.querySelector(".section__container");
}

function getSectionLabel(sectionBlock) {
	return sectionBlock.querySelector(".section__label");
}

function getSourcePageSlug(sectionBlock) {
	return getContentDiv(sectionBlock).getAttribute("data-source-page-slug");
}

function isOpen(sectionBlock) {
	return sectionBlock.classList.contains("is-opened");
}

function getCurrentlyOpenSection(jumbotronBlock) {
	return jumbotronBlock.querySelector(".section.is-opened");
}

function addEventListenersToJumbotron(jumbotronBlock) {
	jumbotronBlock.addEventListener("sectionOpened", () => {
		jumbotronBlock.classList.add("is-section-opened");
	})

	jumbotronBlock.addEventListener("sectionClosed", () => {
		jumbotronBlock.classList.remove("is-section-opened");
	});

	new ResizeObserver(() => {
		jumbotronBlock.style.setProperty("--jumbotron-rendered-width", `calc(${jumbotronBlock.clientWidth}px - 2 * var(--jumbotron-padding))`);
		jumbotronBlock.style.setProperty("--jumbotron-rendered-height", `calc(${jumbotronBlock.clientHeight}px - 2 * var(--jumbotron-padding))`);
	}).observe(jumbotronBlock)
}

function addEventListenersToSection(sectionBlock, parentJumbotron) {
	sectionBlock.addEventListener("click", () => {
		if (isOpen(sectionBlock)) return;
		parentJumbotron.dispatchEvent(SECTION_OPENED)
		sectionBlock.dispatchEvent(SECTION_OPENED);
	});

	sectionBlock.addEventListener("sectionOpened", async () => {
		sectionBlock.classList.add("is-opened");
		toggleSectionZIndex(sectionBlock);

		const contentDiv = getContentDiv(sectionBlock);

		let fetchedContent;

		if (!sectionBlock.alreadyFetchedContent) {
			try {
				fetchedContent = await fetchContent(getSourcePageSlug(sectionBlock));
			} catch (_e) {
				fetchedContent = "Oops! There was an error.";
			} finally {
				contentDiv.innerHTML = `<div class="section__content__fetched-content">${fetchedContent}</div>`;
				sectionBlock.alreadyFetchedContent = true;
			}
		}
	});

	sectionBlock.addEventListener("sectionClosed", () => {
		toggleSectionZIndex(sectionBlock);
		sectionBlock.classList.remove("is-opened");
	});

	sectionBlock.addEventListener("mouseover", () => {
		getSectionLabel(sectionBlock).classList.add("is-label-hovered");
	})

	sectionBlock.addEventListener("mouseout", () => {
		getSectionLabel(sectionBlock).classList.remove("is-label-hovered");
	})
}

function addEventListenersToBackButton(backButton, parentJumbotron) {
	backButton.addEventListener("click", () => {
		parentJumbotron.dispatchEvent(SECTION_CLOSED);
		getCurrentlyOpenSection(parentJumbotron).dispatchEvent(SECTION_CLOSED);
	})
}

function toggleSectionZIndex(sectionBlock) {
	const container = getSectionContainer(sectionBlock);
	if (sectionBlock.opened) {
		container.addEventListener("transitionend", function listener() {
			container.style.setProperty("z-index", 0);
			container.removeEventListener("transitionend", listener);
			sectionBlock.opened = false;
		})
	} else {
		container.style.setProperty("z-index", 200);
		sectionBlock.opened = true;
	}
}