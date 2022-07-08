console.log("hello")
const cars = [{
    image: "bil1.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 199 kr. Etableringsgebyr: 1 990 kr.",
    footer2: "Totalpris: 265 931 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 72 001 kr / 60 mnd. / 100 000 km",
    bubble: "copy1.png"
    },{
    image: "bil2.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 499 kr. Etableringsgebyr: 1 990 kr. Totalpris: 308 669 kr",
    footer2: "vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 96 739 kr / 60 mnd. / 100 000 km",
    bubble: "copy2.png"
    },{
    image: "bil3.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 199 kr. Etableringsgebyr: 1 990 kr.   ",
    footer2: "Totalpris: 265 951 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 72 021 kr / 60 mnd. / 100 000 km",
    bubble: "copy3.png"
    },{
    image: "bil4.jpg",
    footer1: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 499 kr. Etableringsgebyr: 1 990 kr.    ",
    footer2: "Totalpris: 307 925 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 95 995 kr / 60 mnd. / 100 000 km  ",
    bubble: "copy4.png"
    }]

const displayTime = 5000;

const setImgSrc = (fileName, id) => {
    const element = document.getElementById(id)
    const url = `./` + fileName
    element.src = url
}

const setFooterInfo = (footer1, footer2) => {
    const footerLine1 = document.getElementById('footer-line1')
    const footerLine2 = document.getElementById('footer-line2')
    footerLine1.textContent = footer1
    footerLine2.textContent = footer2
}


const getCarState = (car) => {
    document.getElementById('bubble').classList.toggle('tinRightIn')
    setImgSrc(car.image, 'car');
    setImgSrc(car.bubble, 'bubble')
    setFooterInfo(car.footer1, car.footer2)
    setTimeout(() => {
        document.getElementById('bubble').classList.toggle('tinRightIn')
    }, displayTime - 500)

}

const setStateAnimation = (cars) => {
    getCarState(cars[0])
    let i = 1;
    const changeState = () => {
        getCarState(cars[i])
        i = (i + 1) % cars.length;
    } 
    setInterval(changeState, displayTime)

}
setStateAnimation(cars)
