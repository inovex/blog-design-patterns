import { coffeeList } from '../data.js';

class ReservedSidebar {
  constructor(coffeeList) {
    coffeeList.forEach((coffee, i) => {
      const item = this.addItemToList({ name: coffee.name, info: coffee.orderId, imgSrc: coffee.image });

      item.addEventListener('click', (event) => {
        this.highlightActiveListItem(event);
        this.replaceSidebarContent({ name: coffee.name, info: coffee.orderId, imgSrc: coffee.image });
      });
      item.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.highlightActiveListItem(event);
          openSidebar({ name: coffee.name, info: coffee.orderId, imgSrc: coffee.image });
        }
      });
    });
  }

  highlightActiveListItem(event) {
    document.querySelectorAll('main > ul > li').forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  replaceSidebarContent({name, info, imgSrc}) {
    const detailsTempClone = document.querySelector('#details-template').content.cloneNode(true);
    const detailsTempCloneImg = detailsTempClone.querySelector('img');
    const detailsTempCloneFirstBox = detailsTempClone.querySelector('.name');
    const detailsTempCloneSecondBox = detailsTempClone.querySelector('.info');
    const detailsEl = document.querySelector('aside');

    detailsTempCloneImg.src = imgSrc;
    detailsTempCloneImg.width = 250;
    detailsTempCloneImg.height = 250;
    detailsTempCloneFirstBox.textContent = name;
    detailsTempCloneSecondBox.textContent = info;
    detailsEl.replaceChildren(detailsTempClone);
    animateBorderOnImgLoad(detailsTempCloneImg);
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
  new ReservedSidebar(coffeeList);
  // TODO, add other demos here
}

init();