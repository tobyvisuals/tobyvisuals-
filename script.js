const modal = document.getElementById('modal');

const projects = {
  first: {
    title: 'THE FIRST CUT',
    type: 'CINEMATIC / 2026',
    number: '01',
    text: 'The opening project in the Toby Visuals archive. This page is ready for the real film, project notes, editing decisions and credits.'
  },
  night: {
    title: 'NIGHT MOTION',
    type: 'MUSIC / EXPERIMENT',
    number: '02',
    text: 'A music-driven concept built around rhythm, movement and atmosphere.'
  },
  unfiltered: {
    title: 'UNFILTERED',
    type: 'DOCUMENTARY / STORY',
    number: '03',
    text: 'A documentary-style project focused on natural moments and story-first editing.'
  }
};

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const project = projects[card.dataset.project];
    if (!project || !modal) return;

    modal.classList.add('open');
    modal.querySelector('#modalTitle').textContent = project.title;
    modal.querySelector('#modalType').textContent = project.type;
    modal.querySelector('#modalNumber').textContent = project.number;
    modal.querySelector('#modalText').textContent = project.text;
  });
});

document.querySelector('.close')?.addEventListener('click', () => {
  modal?.classList.remove('open');
});

modal?.addEventListener('click', event => {
  if (event.target === modal) modal.classList.remove('open');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') modal?.classList.remove('open');
});

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(item => {
      item.classList.remove('selected');
    });

    button.classList.add('selected');

    const filter = button.dataset.filter;

    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle(
        'hidden',
        filter !== 'all' && card.dataset.category !== filter
      );
    });
  });
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });
}
