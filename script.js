const menuButton = document.querySelector('.menu-button');
const navWrap = document.querySelector('.nav-wrap');

if (menuButton && navWrap) {
  menuButton.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-dashboard]').forEach((dashboard) => {
  const tabs = dashboard.querySelectorAll('[role="tab"]');
  const panels = dashboard.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => item.setAttribute('aria-selected', 'false'));
      panels.forEach((panel) => panel.classList.remove('active'));
      tab.setAttribute('aria-selected', 'true');
      const panel = dashboard.querySelector(`#${tab.getAttribute('aria-controls')}`);
      panel?.classList.add('active');
    });
  });
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

document.querySelectorAll('[data-result-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const result = document.getElementById(button.getAttribute('aria-controls'));
    if (!result) return;

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    button.textContent = isOpen ? 'Show result' : 'Hide result';
    result.hidden = isOpen;
  });
});
