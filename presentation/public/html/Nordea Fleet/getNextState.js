const cars = [
  {
    image: "bil1.jpg",
    model: "Citroën ë-Berlingo fra kr. 3.199,-",
    bubble: "bubble1.png",
    footer: "footer1.png",
    footerInfo: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 199 kr. Etableringsgebyr: 1 990 kr. Totalpris: 265 931 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 72 001 kr / 60 mnd. / 100 000 km"
  },
    {
      image: "bil2.jpg",
      model: "Peugeot e-Expert fra kr. 3.499,-",
      bubble: "bubble2.png",
      footer: "footer2.png",
      footerInfo: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 499 kr. Etableringsgebyr: 1 990 kr. Totalpris: 308 669 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 96 739 kr / 60 mnd. / 100 000 km"
    },
    {
      image: "bil3.jpg",
      model: "Peugeot e-parter fra kr. 3.199,-",
      bubble: "bubble3.png",
      footer: "footer3.png",
      footerInfo: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 199 kr. Etableringsgebyr: 1 990 kr. Totalpris: 265 951 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 72 021 kr / 60 mnd. / 100 000 km"
    },
    {
      image: "bil4.jpg",
      model: "Opel Vivaro-e fra kr. 3.499,-",
      bubble: "bubble4.png",
      footer: "footer4.png",
      footerInfo: "Inklusive frakt, lev. og reg.omk Oslo, Månedspris fra 3 499 kr. Etableringsgebyr: 1 990 kr. Totalpris: 307 925 kr vil variere med rentenivået. Priseksempel 5 års leasing: Startleie 95 995 kr / 60 mnd. / 100 000 km"
    },

  ];

  const displayTime = 5000;

  const setImgSrc = (fileName, id, altText = "") => {
    const element = document.getElementById(id);
    const url = `./` + fileName;
    element.src = url;
    element.alt = altText
  };

  const toggleClass = (element, className) => {
    element.classList.toggle(className)
  }

  const getCarState = (car, i) => {
    const element = document.getElementById("bubble")
    const index = i === 0 ? cars.length :  i;
    toggleClass(element, `bubble-${index}`)
    toggleClass(element, "tinRightIn")
    toggleClass(element, `bubble-${i + 1}`)
    setImgSrc(car.image, "car", car.model);
    setImgSrc(car.bubble, "bubble", car.price);
    setImgSrc(car.footer, "footer", car.footerInfo)
    setTimeout(() => {
        toggleClass(element, "tinRightIn")
        console.log(element.className)
    }, displayTime - 100);
  };

  const setStateAnimation = (cars) => {
    toggleClass(document.getElementById("bubble"), "bubble-4")
    getCarState(cars[0], 0);
    let i = 1;
    const changeState = () => {
      getCarState(cars[i], i);
      console.log(i)
      i = (i + 1) % cars.length;
    };
    setInterval(changeState, displayTime);
  };
  setStateAnimation(cars);