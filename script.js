const form = document.querySelector('.formClass');
const nextBtn = document.querySelector('.nextBtnfirst');
const backBtn = document.querySelector('.backBtn');
const allInp = document.querySelectorAll('.first input');
const submitBtn = document.querySelector('.submitBtn');
const container = document.querySelector('.container');

const ligthBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')
const body = document.querySelector('body')



// Declare the submit function
function submit() {
    const inputs = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        id: document.getElementById('IDno').value,
        occu: document.getElementById('occupation').value,
        expiryDt: document.getElementById('expiry').value,
        place: document.getElementById('state').value,
    };

    const tabElements = {
        tabName: document.querySelector('.tbName'),
        tabage: document.querySelector('.tbAge'),
        tabId: document.querySelector('.tbIDno'),
        tabOccu: document.querySelector('.tbOccupation'),
        tabexpiry: document.querySelector('.tbEpiry'),
        tabeplace: document.querySelector('.tbPlace'),
    };

    const words = inputs.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedValue = words.join(' ');

    tabElements.tabName.innerHTML = capitalizedValue;
    tabElements.tabage.innerHTML = calculateAge(inputs.age);
    tabElements.tabId.innerHTML = inputs.id;
    tabElements.tabOccu.innerHTML = inputs.occu;
    tabElements.tabexpiry.innerHTML = inputs.expiryDt;
    tabElements.tabeplace.innerHTML = inputs.place;
}
//Age calculating 
function calculateAge(birthDate) {
    const dobDate = new Date(birthDate);
    const currentDate = new Date();
    const timeDiff = currentDate - dobDate;
    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
    return Math.floor(timeDiff / millisecondsInYear);
}


//next Button 
nextBtn.addEventListener('click', () => {
    allInp.forEach(input => {
        if (input.value == "") {
            form.classList.remove('secActive');
        } else {
            form.classList.add('secActive');
        }
    });
});
//back button
backBtn.addEventListener('click', () => {
    form.classList.remove('secActive');
});
//submit button
submitBtn.addEventListener('click', () => {
    container.classList.add('submitActive');
        setTimeout(()=>{
            submit();
        },1000)
});

//dark button
darkBtn.addEventListener('click', ()=>{
    body.classList.add('dark')
})
//light button
ligthBtn.addEventListener('click',()=>{
    body.classList.remove('dark')
})