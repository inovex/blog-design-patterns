import { coffeeList } from '../data.js';

class OverlappingSidebar {
  constructor(coffeeList) {
    coffeeList.forEach((coffee) => {
      const item = this.addItemToList({ name: coffee.name, info: coffee.orderId, imgSrc: coffee.image });

      const highlightItemAndOpenSidebar = (event) => {
        this.highlightActiveListItem(event);
        this.openSidebar(coffee);
      }
      item.addEventListener('click', highlightItemAndOpenSidebar);
      item.addEventListener('keypress', highlightItemAndOpenSidebar);
    });
  }

  highlightActiveListItem(event) {
    document.querySelectorAll('main > ul > li').forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  openSidebar({ name, orderId, paymentType, executedBy, image, description }) {
    const detailsTempClone = document.querySelector('#details-template').content.cloneNode(true);
    const detailsTempCloneImg = detailsTempClone.querySelector('img.product');
    const detailsTempCloneName = detailsTempClone.querySelector('.name');
    const detailsTempClonePaymentBadge = detailsTempClone.querySelector('.payment-badge');
    const detailsTempCloneEmail = detailsTempClone.querySelector('.header .email');
    const detailsTempCloneOrderId = detailsTempClone.querySelector('.header .order-id');
    const detailsTempCloneAbout = detailsTempClone.querySelector('.info .about');
    const detailsTempCloneDesc = detailsTempClone.querySelector('.info .description');
    const detailsTempCloneClose = detailsTempClone.querySelector('.close');
    const detailsEl = document.querySelector('dialog');


    detailsEl.show();
    detailsTempCloneImg.src = image;
    detailsTempCloneImg.width = 170;
    detailsTempCloneImg.height = 170;
    detailsTempCloneName.textContent = name;
    detailsTempCloneEmail.textContent = executedBy.mail;
    detailsTempCloneOrderId.textContent = `Order ID: ${orderId}`;
    detailsTempCloneAbout.textContent = `About ${name}`;
    detailsTempCloneDesc.textContent = description;
    detailsTempClonePaymentBadge.textContent = paymentType;
    detailsEl.querySelector('.empty-content')?.remove();
    detailsTempCloneClose.addEventListener('click', (event) => {
      document.querySelectorAll('main > ul > li').forEach((item) => item.classList.remove('active'));
      detailsEl.close();
    });
    detailsEl.replaceChildren(detailsTempClone);
    this.animateBorderOnImgLoad(detailsTempCloneImg);
  }

  addItemToList({ name, info, imgSrc }) {
    const itemTempClone = document.querySelector('#item-template').content.cloneNode(true);
    const itemTempCloneLiEl = itemTempClone.querySelector('li');
    const itemTempCloneImg = itemTempClone.querySelector('li img');
    const itemTempCloneFirstBox = itemTempClone.querySelector('li .name');
    const itemTempCloneSecondBox = itemTempClone.querySelector('li .info');
    const itemListEl = document.querySelector('main > ul');

    itemTempCloneImg.src = imgSrc;
    itemTempCloneImg.width = 30;
    itemTempCloneImg.height = 30;
    itemTempCloneFirstBox.textContent = name;
    itemTempCloneSecondBox.textContent = info;
    itemListEl.appendChild(itemTempClone);
    return itemTempCloneLiEl;
  }

  animateBorderOnImgLoad(image) {
    image.addEventListener('load', () => {
      image.classList.add('border-animate');
      setTimeout(() => {
        image.classList.remove('border-animate');
      }, 800);
    })
  }
}

// Helper functions

async function init() {
  new OverlappingSidebar(coffeeList);
  // TODO, add other demos here
}

init();
