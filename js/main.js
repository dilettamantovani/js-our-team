const team = [
    {
        name: 'Wayne Barnett',
        title: 'Founder and CEO',
        picture: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        title: 'Chief Editor',
        picture: 'img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        title: 'Office Manager',
        picture: 'img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        title: 'Social Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        title: 'Developer',
        picture: 'img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        title: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const col_4 = document.createElement('div');
    col_4.classList.add('col-4', 'px-5', 'my-3');
    col_4.innerHTML = 
        `<div class="card">
            <img src="${teamMember.picture}" class="card-img-top" alt="Team Member Pro-Pic">
            <div class="card-body">
                <h6 class="card-title text-center fw-semibold text-secondary">${teamMember.name}</h6>
                <p class="card-text text-center text-secondary">${teamMember.title}</p>
            </div>
        </div>`;
    document.querySelector('#wrapper').appendChild(col_4);

    console.log(col_4);
}