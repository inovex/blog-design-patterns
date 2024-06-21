import { coffeeList } from '../data.js';

class ReservedSidebar {
  constructor(coffeeList) {
    coffeeList.forEach((coffee, i) => {
      const item = this.addItemToList({ name: coffee.name, quantity: coffee.quantity, info: coffee.orderId, imgSrc: coffee.image });

      const highlightItemAndReplaceSidebarContent = (event) => {
        this.highlightActiveListItem(event);
        this.replaceSidebarContent(coffee);
      }
      item.addEventListener('click', highlightItemAndReplaceSidebarContent);
      item.addEventListener('keypress', highlightItemAndReplaceSidebarContent);
    });
  }

  highlightActiveListItem(event) {
    document.querySelectorAll('main > ul > li').forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  replaceSidebarContent({ name, orderId, quantity, paymentType, executedBy, image, description }) {
    const detailsTempClone = document.querySelector('#details-template').content.cloneNode(true);
    const detailsTempCloneImg = detailsTempClone.querySelector('img.product');
    const detailsTempCloneName = detailsTempClone.querySelector('.name');
    const detailsTempClonePaymentBadge = detailsTempClone.querySelector('.payment-badge');
    const detailsTempCloneEmail = detailsTempClone.querySelector('.header .email');
    const detailsTempCloneOrderId = detailsTempClone.querySelector('.header .order-id');
    const detailsTempCloneQuantity = detailsTempClone.querySelector('.header .quantity');
    const detailsTempCloneAbout = detailsTempClone.querySelector('.info .about');
    const detailsTempCloneDesc = detailsTempClone.querySelector('.info .description');
    const detailsEl = document.querySelector('aside');

    detailsTempCloneImg.src = image;
    detailsTempCloneImg.width = 250;
    detailsTempCloneImg.height = 250;
    detailsTempCloneName.textContent = name;
    detailsTempCloneEmail.textContent = executedBy.mail;
    detailsTempCloneOrderId.textContent = `Order ID: ${orderId}`;
      detailsTempCloneQuantity.textContent = `Quantity: ${quantity}`;
      detailsTempCloneAbout.textContent = `About ${name}`;
    detailsTempCloneDesc.textContent = description;
    detailsTempClonePaymentBadge.textContent = paymentType;
    detailsEl.replaceChildren(detailsTempClone);
    animateBorderOnImgLoad(detailsTempCloneImg);
  }

  addItemToList({ name, quantity, info, imgSrc }) {
    const itemTempClone = document.querySelector('#item-template').content.cloneNode(true);
    const itemTempCloneLiEl = itemTempClone.querySelector('li');
    const itemTempCloneImg = itemTempClone.querySelector('li img');
    const itemTempCloneFirstBox = itemTempClone.querySelector('li .name');
    const itemTempCloneSecondBox = itemTempClone.querySelector('li .info');
    const itemTempCloneThirdBox = itemTempClone.querySelector('li .quantity');
    const itemListEl = document.querySelector('main > ul');

    itemTempCloneImg.src = imgSrc;
    itemTempCloneImg.width = 30;
    itemTempCloneImg.height = 30;
    itemTempCloneFirstBox.textContent = name;
    itemTempCloneSecondBox.textContent = info;
    itemTempCloneThirdBox.textContent = quantity;
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
  new ReservedSidebar(coffeeList);
  // TODO, add other demos here
}

init();
