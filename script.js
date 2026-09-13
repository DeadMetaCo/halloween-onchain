const toast=document.getElementById('toast');let toastTimer;function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}document.querySelectorAll('.placeholder-link').forEach(el=>{el.addEventListener('click',()=>showToast(el.dataset.label||'COMING SOON'))});const doorMessage=document.getElementById('doorMessage');document.querySelectorAll('.door').forEach(door=>{door.addEventListener('click',()=>{doorMessage.textContent=door.dataset.message})});const pumpkin=document.getElementById('pumpkinTrigger');const secret=document.getElementById('secret');let pumpkinClicks=0;let clickReset;pumpkin.addEventListener('click',()=>{pumpkinClicks+=1;clearTimeout(clickReset);clickReset=setTimeout(()=>pumpkinClicks=0,900);if(pumpkinClicks>=3){pumpkinClicks=0;secret.classList.add('show');showToast('YOU WERE PAYING ATTENTION.');setTimeout(()=>secret.classList.remove('show'),1300)}});


const copyContract = document.getElementById("copyContract");
if (copyContract) {
  copyContract.addEventListener("click", async () => {
    const ca = copyContract.dataset.contract;
    try {
      await navigator.clipboard.writeText(ca);
      showToast("CONTRACT COPIED");
    } catch {
      showToast(ca);
    }
  });
}
