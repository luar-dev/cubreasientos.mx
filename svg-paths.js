class seatCoverDesign {
    constructor({
        year,
        make,
        model,
        version,
        style,
        colors = [],
        sewing
    }) {
        this.year = year,
        this.make = make,
        this.model = model,
        this.version = version,
        this.style = style,
        this.colors = colors,
        this.sewing = sewing
    }

}
    
const seatCoverDesign


seatCoverDesign.prototype.changeSingleColor = function (id_selectedColor) {

        /* Save the ID of the selected(onClick) color */
        let selectedColor = document.getElementById(id_selectedColor);
    
        /* fills paths */
        let headrest__area = document.getElementById('id_headrest__fills');
        let back__area = document.getElementById('id_back__fills');
        let seat__area = document.getElementById('id_seat__fills');
        
        /* paths */
        let headrest__paths = document.getElementById('id_headrest__paths');
        let back__paths = document.getElementById('id_back__paths');
        let seat__paths = document.getElementById('id_seat__paths');

        /* remove all current classes used for CSS */
        headrest__area.classList.remove(
            'headrest__fills--white',
            'headrest__fills--black',
            'headrest__fills--gray',
            'headrest__fills--beige');
        back__area.classList.remove(
            'back__fills--white',
            'back__fills--black',
            'back__fills--gray',
            'back__fills--beige');
        seat__area.classList.remove(
            'seat__fills--white',
            'seat__fills--black',
            'seat__fills--gray',
            'seat__fills--beige');
    
        headrest__paths.classList.remove(
            'headrest__paths--black',
            'headrest__paths--white');
        back__paths.classList.remove(
            'back__paths--black',
            'back__paths--white');
        seat__paths.classList.remove(
            'seat__paths--black',
            'seat__paths--white');

        /* apply class for CSS depending on selected(onClick) color */
        if (selectedColor.id === 'ID_wrapColors__black') {
    
            headrest.classList.add('headrest__fills--black');
            backArea.classList.add('back__fills--black');
            seatArea.classList.add('seat__fills--black');
    
            headrest__paths.classList.add('headrest__paths--white');
            back__paths.classList.add('back__paths--white');
            seat__paths.classList.add('seat__paths--white');
    
        } else if (selectedColor.id === 'ID_wrapColors__gray') {
    
            headrest.classList.add('headrest__fills--gray');
            backArea.classList.add('back__fills--gray');
            seatArea.classList.add('seat__fills--gray');
    
            headrest__paths.classList.add('headrest__paths--black');
            back__paths.classList.add('back__paths--black');
            seat__paths.classList.add('seat__paths--black');
    
        } else if (selectedColor.id === 'ID_wrapColors__beige') {
    
            headrest.classList.add('headrest__fills--beige');
            backArea.classList.add('back__fills--beige');
            seatArea.classList.add('seat__fills--beige');
    
            headrest__paths.classList.add('headrest__paths--black');
            back__paths.classList.add('back__paths--black');
            seat__paths.classList.add('seat__paths--black');
    
        }

    }

};

function selectArea(id) {
    return document.getElementById(id).innerText;
}

function setNumColors(id) {
    let setColors = document.getElementById(id);
    let singleColor = document.getElementById('id_step2-areas__1-color');
    let twoColors = document.getElementById('id_step2-areas__2-color');

    let pressedButton1Color = document.getElementById('id_step1__options--1');
    let pressedButton2Color = document.getElementById('id_step1__options--2');

    if (setColors.id === 'id_step1__options--1') {

        singleColor.classList.remove('step2-areas__1-color--hidden');
        singleColor.classList.add('step2-areas__1-color');

        twoColors.classList.remove('step2-areas__2-color');
        twoColors.classList.add('step2-areas__2-color--hidden');

        pressedButton1Color.classList.remove('step1__options--1', 'step1__options--1--selected');
        pressedButton1Color.classList.add('step1__options--1--selected');
        pressedButton2Color.classList.remove('step1__options--2', 'step1__options--2--selected');
        pressedButton2Color.classList.add('step1__options--2');

    } else if(setColors.id === 'id_step1__options--2') {

        singleColor.classList.remove('step2-areas__1-color');
        singleColor.classList.add('step2-areas__1-color--hidden');

        twoColors.classList.remove('step2-areas__2-color--hidden');
        twoColors.classList.add('step2-areas__2-color');

        pressedButton1Color.classList.remove('step1__options--1', 'step1__options--1--selected');
        pressedButton1Color.classList.add('step1__options--1');
        pressedButton2Color.classList.remove('step1__options--2', 'step1__options--2--selected');
        pressedButton2Color.classList.add('step1__options--2--selected');

    }
}


const customSeatCoverDesign1 = new seatCoverDesign {
    style: "Classic",
    colors: ["black", "beige"],
    year: 2019,
    make: "Nissan",
    model: "Sentra",
    version: "Sense",
    sewing: "double",
}

);



