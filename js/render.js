import { projectsData, knowledgeBaseData } from "./data.js";

const EXTERNAL_LINK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 1rem; height: 1rem; fill: currentColor"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></svg>`;
let projectVersionList = new Map();

export function renderProjects() {
    const main = document.getElementById("main");
    if (!main) return;

    const html = projectsData
        .map((category) => {
            const cardsHtml = category.projects.map(renderProjectCard).join("");

            return `
        <article class="project-type">
          <div class="project-type__header-line"></div>
          <h2 class="project-type__header">${category.category}</h2>
          <div class="project-type__header-line"></div>
          ${cardsHtml}
        </article>`;
        })
        .join("");

    main.insertAdjacentHTML("afterbegin", html);

    renderKnowledgeBase();
    
    // Запускаем после загрузки DOM
    document.addEventListener("DOMContentLoaded", fetchProjectsReleaseVersions);
}

function renderKnowledgeBase() {
    const knowledgeContainer = document.querySelector(".project-type:last-child .info-container");
    if (!knowledgeContainer) return;

    const html = `
    <div class="info-container__other-skills" style="margin: 10px 0">
      ${renderCertificates()}
      ${renderEnglishLevel()}
      ${renderCodewarsBadge()}
    </div>`;

    knowledgeContainer.insertAdjacentHTML("beforeend", html);
}

function renderCertificates() {
    const certsHtml = knowledgeBaseData.certificates
        .map(
            (cert) => `
        <a class="button button_link button_certificate" style="transform: none" href="${cert.url}" target="_blank">
          <img width="24" height="24" src="https://img.icons8.com/fluency/48/guarantee.png" alt="guarantee" />
          ${cert.title}
          ${EXTERNAL_LINK_SVG}
        </a>`,
        )
        .join("");

    return `
    <div class="recursive-mirror recursive-mirror_full-width">
      <div class="recursive-mirror recursive-mirror_full-width">
        <div class="recursive-mirror recursive-mirror_full-width" style="display: block">
          <div class="project-type__header-line"></div>
          <p class="project-type__header" style="font-size: larger">Certificates</p>
          <div class="project-type__header-line"></div>
          <div class="info-container__other-skills" style="padding: 10px 5px 5px 5px; gap: 10px">
            ${certsHtml}
          </div>
        </div>
      </div>
    </div>`;
}

function renderEnglishLevel() {
    return `
    <div class="recursive-mirror">
      <div class="recursive-mirror">
        <div class="button_non-effect recursive-mirror">
          <p>English: ${knowledgeBaseData.englishLevel}</p>
          <div class="bulb bulb_green"></div>
        </div>
      </div>
    </div>`;
}

function renderCodewarsBadge() {
    return `
    <div class="recursive-mirror">
      <div class="recursive-mirror">
        <div class="button_non-effect recursive-mirror">
          <a class="centerer" href="${knowledgeBaseData.codewarsUrl}" target="_blank">
            <img alt="Codewars" src="${knowledgeBaseData.codewarsBadgeSrc}" />
          </a>
        </div>
      </div>
    </div>`;
}

function renderProjectCard(project) {
    const difficultyModifier = project.difficulty
        ? ` difficulty-tag_theme_${project.difficulty}`
        : "";
    const highlightedModifier = project.highlighted ? " info-container_highlighted" : "";
    const iconLightTheme = project.icon.lightTheme ? " icon_light-theme" : "";

    return `
    <article class="info-container${highlightedModifier}">
      <details>
        <summary class="info-container__summary">
          <div class="icon icon_square">
            <img class="icon_square${iconLightTheme}" src="${project.icon.src}" alt="${project.icon.alt}" />
          </div>
          <h3 class="info-container__name">${project.name} (${project.year})${project.extraName || ""}</h3>
          ${renderSourceLink(project.sourceUrl)}
          ${renderActionButton(project.actionButton)}
          ${difficultyModifier ? `<div class="difficulty-tag${difficultyModifier}" title="Сложность проекта"></div>` : ""}
        </summary>
      </details>
      <div class="detailts-content">
        <div class="info-container__description">
          <p class="stack-description" id="${project.stackId}">Используемый стек:</p>
          ${renderVersion(project)}
          ${renderTerminal(project.terminal)}
          ${project.description || ""}
        </div>
        ${renderVideo(project.video)}
        ${renderGallery(project.gallery)}
      </div>
    </article>`;
}

function renderSourceLink(url) {
    if (!url) return "";
    return `
    <a class="button button_link" href="${url}" target="_blank">
      <p class="aligned-text">
        Source
        ${EXTERNAL_LINK_SVG}
      </p>
    </a>`;
}

function renderActionButton(button) {
    if (!button) return "";
    return `
    <a class="button button_link button_open-theme" href="${button.href}" target="_blank">
      <p class="aligned-text">${button.label}</p>
    </a>`;
}

function renderVersion(project) {
    if (!project.version) return "";

    const elementId = project.version.elementId;
    projectVersionList.set(elementId, project.repository);

    return `
    <div>
      <div class="project-version">
        <p id="${elementId}">Version: ${project.version.number}</p>
        <div id="${elementId}-bulb"class="bulb bulb_${project.version.status}"></div>
      </div>
    </div>`;
}

async function fetchProjectsReleaseVersions() {
    const owner = "Hi-Tech-Mechanic";
    const cacheDuration = 1000 * 60 * 60 * 4; // 4 часа в миллисекундах

    for (let [elementId, repo] of projectVersionList) {
        var versionElement = document.getElementById(elementId);

        if (!versionElement) return;

        const cacheKey = elementId;
        const cacheTimeKey = elementId + "-" + "cached-time";

        const cachedVersion = localStorage.getItem(cacheKey);
        const cacheTime = localStorage.getItem(cacheTimeKey);

        // Если есть кэш и он не устарел, используем его
        if (cachedVersion && cacheTime && Date.now() - cacheTime < cacheDuration) {
            versionElement.textContent = cachedVersion;
            continue;
        }

        try {
            // URL для получения последнего релиза
            var apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
                // Если статус 404, значит в репозитории еще нет созданных релизов (Releases)
            }

            const data = await response.json();

            // Удаляем букву v в начале если есть
            var version = data.tag_name.replace(/v/g, "");
            version = `Version: ${version}`;

            versionElement.textContent = version;

            localStorage.setItem(cacheKey, version);
            localStorage.setItem(cacheTimeKey, Date.now().toString());
        } catch (error) {
            console.error("Не удалось получить версию:", error);
            versionElement.textContent = "Неизвестно";
            versionElement.classList.add("error");

            // Меняем лампочку на красную
            var bulbElement = document.getElementById(`${elementId}-bulb`);
            bulbElement.className = "bulb bulb_red";
        }
    }
}

function renderTerminal(terminal) {
    if (!terminal) return "";
    return `
    <details>
      <summary id="${terminal.summaryId}">${terminal.summaryText}</summary>
    </details>
    <div class="terminal-code" id="${terminal.contentId}"></div>`;
}

function renderVideo(video) {
    if (!video) return "";
    const height = video.height || "100%";
    const sourcesHtml = video.sources
        .map((s) => `<source src="${s.src}" type="${s.type}" />`)
        .join("");

    return `
    <div class="info-container__video">
      <video controls poster="${video.poster}" width="100%" height="${height}" preload="metadata">
        ${sourcesHtml}
        Ваш браузер не поддерживает видео. Попробуйте скачать видео
        <a href="${video.fallbackLink}">по этой ссылке</a>
        и открыть его на своём устройстве.
      </video>
    </div>`;
}

function renderGallery(gallery) {
    if (!gallery) return "";
    const fontClass = gallery.fontClass ? ` ${gallery.fontClass}` : "";
    const cardsHtml = gallery.images
        .map(
            (img) => `
        <div class="promo-card">
          <div class="promo-card__animated-border">
            <img class="image" src="${img.src}" alt="" />
          </div>
          <span>${img.caption}</span>
        </div>`,
        )
        .join("");

    return `<div class="${gallery.gridClass}${fontClass}">${cardsHtml}</div>`;
}

// Init: render before other scripts query the DOM
renderProjects();
