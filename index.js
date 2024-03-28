const NUMBER_OF_RANDOM_ITEMS = 8;

class OverlappingSidebar {
  constructor() {
    // fill list with items
    for (let i = 0; i < NUMBER_OF_RANDOM_ITEMS; i++) {
      const name = `Name ${i + 1}`;
      const info = `Info ${i + 1}`;
      const item = this.addItemToList({ name, info, imgSrc: `https://i.pravatar.cc/30?img=${i + 1}` });
      item.addEventListener('click', (event) => {
        this.highlightActiveListItem(event);
        this.openSidebar({ name, info, imgSrc: `https://i.pravatar.cc/200?img=${i + 1}` });
      });
      item.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.highlightActiveListItem(event);
          openSidebar({ name, info, imgSrc: `https://i.pravatar.cc/200?img=${i + 1}` });
        }
      });
    }
  }

  highlightActiveListItem(event) {
    document.querySelectorAll('main > ul > li').forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  openSidebar({ name, info, imgSrc }) {
    const detailsTempClone = document.querySelector('#details-template').content.cloneNode(true);
    const detailsTempCloneImg = detailsTempClone.querySelector('img');
    const detailsTempCloneFirstBox = detailsTempClone.querySelector('.name');
    const detailsTempCloneSecondBox = detailsTempClone.querySelector('.info');
    const detailsTempCloneClose = detailsTempClone.querySelector('.close');
    const detailsEl = document.querySelector('dialog');


    detailsEl.show();
    detailsTempCloneImg.src = imgSrc;
    detailsTempCloneImg.width = 170;
    detailsTempCloneImg.height = 170;
    detailsTempCloneFirstBox.textContent = name;
    detailsTempCloneSecondBox.textContent = info;
    detailsEl.querySelector('.empty-content')?.remove();
    detailsTempCloneClose.addEventListener('click', (event) => {
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


const demoWithOverlappingSidebar = new OverlappingSidebar();
// TODO, add other demos here
