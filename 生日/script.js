const 文字欄 = document.querySelector(".文字欄");  //選取特定元素
const 輸入區域 = document.querySelector(".輸入區域");
const 繼續 = document.querySelector(".繼續");
const 重新 = document.querySelector(".重新");
const imgElement = document.getElementById("imgElement");
const video = document.getElementById("myVideo");

document.getElementById("imgElement").style.display = "none";
document.getElementById("myVideo").style.display = "none";

function 日期(){  //依輸入文字確認是否執行下一動作
	const userInput = 文字欄.value.trim();  // 移除前後空白
    if(userInput ===""){  //內容不得為空白
        return;
    }
	if(userInput ==="0416"){//輸入正確隱藏
		文字欄.style.display ="none";
		輸入區域.style.display ="none";
		imgElement.src = "images/1.jpg";
        imgElement.style.display = "block"
	}
}

文字欄.addEventListener("input",function(){
	日期();
});

// 準備好圖片的路徑清單
	const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg","images/5.jpg"];
	const images2 = ["images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];
	const images3 = ["images/run1.jpg", "images/run2.jpg", "images/run3.jpg"];
	let currentIndex = 0;
    let num= 0;

	繼續.addEventListener("click",function(){ 
      // 切換到下一張
	if(num<=4){
		if (num === 0) currentIndex = 0;
      		currentIndex = (currentIndex + 1) % images.length;//取images集合的數量決定顯示那一張圖片
      		imgElement.src = images[currentIndex];
		num=num+1;
	}
	else if(num<=10 && num>3){
		currentIndex = (currentIndex + 1) % images2.length;//取images2集合的數量決定顯示那一張圖片
      		imgElement.src = images2[currentIndex];
		num=num+1;
	}
	else if(num>10 &&num<20){
		currentIndex = (currentIndex + 1) % images3.length;//取images3集合的數量決定顯示那一張圖片
      		imgElement.src = images3[currentIndex];
		num=num+1;
	}
	if(num==20){
		currentIndex =0;
		num=num+1;
      	imgElement.src = "images/end.jpg";	
	}
	else if(num==21){
		imgElement.src = "";	
		num=0;
		繼續.style.display ="none";
		video.style.display = "block"
		video.play();
	}
    });

	重新.addEventListener("click",function(){
		currentIndex = 0;
    	num = 0;
    	imgElement.src = images[0];
    	document.getElementById("imgElement").style.display = "none";
		document.getElementById("myVideo").style.display = "none";
		文字欄.style.display ="block";
		輸入區域.style.display ="block";
		繼續.style.display ="block";
		文字欄.value="";
		
	});

	video.addEventListener("ended", function () {
		alert("影片播放完畢！");
	});