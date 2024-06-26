const taskButtons = document.querySelectorAll(".job-list-box .start-chat-btn");

function clickTask(index) {
  if (!taskButtons[index]) return;
  taskButtons[index].click();
  setTimeout(() => {
    if (!document.querySelector(".greet-boss-container")) return;
	  document.querySelector(".greet-boss-container .icon-close").click();
	  console.log(`已投${index + 1}份简历🤖`);
	  clickTask(index + 1);
  }, Math.random() * 3 * 1000 + 3000);
}

clickTask(0)
