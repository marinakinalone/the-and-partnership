console.log("hello")
const cars = [{
    image: "bil1.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 199 kr. Etableringsgebyr: 1 990 kr.",
    footer2: "Totalpris: 265 931 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 72 001 kr / 60 mnd. / 100 000 km",
    brand: "",
    model: "",
    price: ""
    },{
    image: "bil2.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 499 kr. Etableringsgebyr: 1 990 kr. Totalpris: 308 669 kr",
    footer2: "vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 96 739 kr / 60 mnd. / 100 000 km",
    brand: "",
    model: "",
    price: ""
    },{
    image: "bil3.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 199 kr. Etableringsgebyr: 1 990 kr.   ",
    footer2: "Totalpris: 265 951 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 72 021 kr / 60 mnd. / 100 000 km",
    brand: "",
    model: "",
    price: ""
    },{
    image: "bil4.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 499 kr. Etableringsgebyr: 1 990 kr.    ",
    footer2: "Totalpris: 307 925 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 95 995 kr / 60 mnd. / 100 000 km  ",
    brand: "",
    model: "",
    price: ""
    }]

const setCarImg = (fileName) => {
    const car = document.getElementById('car')
    const url = `./img/` + fileName
    car.src = url
}

const setFooterInfo = (footer1, footer2) => {
    const footerLine1 = document.getElementById('footer-line1')
    const footerLine2 = document.getElementById('footer-line2')
    footerLine1.textContent = footer1
    footerLine2.textContent = footer2
}


const getCarState = (car) => {
    setCarImg(car.image);
    setFooterInfo(car.footer1, car.footer2)
}

const setStateAnimation = (cars) => {
    getCarState(cars[0])
    let i = 1;
    const changeState = () => {
        getCarState(cars[i])
        console.log(i)
        i = (i + 1) % cars.length;
        console.log(i)
    } 
    setInterval(changeState, 2000)

}
setStateAnimation(cars)
