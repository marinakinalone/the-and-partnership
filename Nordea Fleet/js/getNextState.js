const cars = [
    {
      image: "bil1.jpg",
      footer: "footer1.png",
      bubble: "bubble1.png",
    },
    {
      image: "bil2.jpg",
      footer: "footer2.png",
      bubble: "bubble2.png",
    },
    {
      image: "bil3.jpg",
      footer: "footer3.png",
      bubble: "bubble3.png",
    },
    {
      image: "bil4.jpg",
      footer: "footer4.png",
      bubble: "bubble4.png",
    },
  ];

  const displayTime = 5000;

  const setImgSrc = (fileName, id) => {
    const element = document.getElementById(id);
    const url = `./` + fileName;
    element.src = url;
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
    setImgSrc(car.image, "car");
    setImgSrc(car.bubble, "bubble");
    setImgSrc(car.footer, "footer")
    setTimeout(() => {
        toggleClass(element, "tinRightIn")
        console.log(element.className)
    }, displayTime - 100);
  };

  const setStateAnimation = (cars) => {
    toggleClass(document.getElementById("bubble"), `bubble-4`)
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