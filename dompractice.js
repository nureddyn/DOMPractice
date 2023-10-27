document.querySelector('title').textContent = 'DOM Practice';
document.querySelector('.parent').style.width = '500px';
document.querySelector('.parent').style.height = '450px';
document.querySelector('.parent').style.backgroundColor = 'red';


document.querySelectorAll('.child').forEach(child => {
  child.style.width = '100%';
  child.style.height = '50px';
  child.style.backgroundColor = 'blue';
  child.style.margin = '30px 0 30px 0';
  child.style.textAlign = 'center';
  child.style.color = '#E0D635';
});

document.querySelectorAll('.grandchild').forEach((grandChild, index) => {
    grandChild.style.width = '100%';
    grandChild.style.height = '7px';
    grandChild.style.marginTop = '10px';
    grandChild.textContent = `${index + 1}`;
});

document.querySelectorAll('.grandchild')[13].style.color = 'pink';
document.querySelectorAll('.grandchild')[13].style.fontStyle = 'italic';
document.querySelectorAll('.grandchild')[13].style.color = 'purple';

document.querySelectorAll('.grandchild')[8].parentElement.style.position = 'relative';
const blackShip = document.querySelectorAll('.grandchild')[8];
blackShip.style.color = 'black';
blackShip.style.fontSize = '9rem';
blackShip.style.textAlign = 'right';
blackShip.style.transform = 'scale(-1, 1)';
blackShip.style.position = 'absolute';
blackShip.style.top = '30px';
blackShip.style.left = '500px';