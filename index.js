class RockPaperScissor {
 constructor(){
  this.progress=document.querySelector("#progress")
  this.progressBar=document.querySelector("#progress-bar")
  this.game=document.querySelector("#game")
  this.start=document.querySelector("#start")
  this.exit=document.querySelector("#exit")
  this.fon=document.querySelector("#fon")
  this.begin=document.querySelector("#begin")
  this.enter=document.querySelector("#enter")
  this.name=document.querySelector("#name")
  this.playerName=document.querySelector("#playerName")
  this.playerImg=document.querySelector("#playerImg")
  this.compImg=document.querySelector("#compImg")
  this.player=document.querySelector("#player")
  this.draw=document.querySelector("#draw")
  this.comp=document.querySelector("#comp")
  this.end=document.querySelector("#end")
  this.win=document.querySelector("#win")
  this.images = {
    r: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwuVFxLNdwAgPvkB9beREEzcMgzDdvsKAKZud0HggUv75vDPDaZBbSeMrHPc6iAqC_Ps&usqp=CAU",
    p: "https://preview.redd.it/dandys-world-styled-rock-paper-scissors-v0-uaxd6k131wyd1.png?width=640&crop=smart&auto=webp&s=7a7b88700de4ecde5dfda28ff4bdf9a9f5353fd8",
    s: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ23lnAutjCcsgkmEz6PUdrDe03Db3by4L_BokgAnILR-YKMm-yAwFQI6KKCvjTzdwT_o&usqp=CAU",
  }
  this.pointC=0
  this.pointD=0
  this.pointP=0
 }
 
 Progress(){
  let progressEl=0
  setInterval(()=>{
    if(progressEl<100){
       progressEl+=1
       this.progressBar.style.width=`${progressEl}%`
       this.progressBar.textContent=`${progressEl}%`
    }else{
      setTimeout(() => {
        this.progress.style.display="none"
        this.game.style.display="block"
      },1000);
    }
  },30)
 }

 Start(){
  this.exit.onclick=()=>{window.close()};
  this.start.onclick=()=>{
    this.start.style.display="none"
    this.exit.style.display="none"
    this.fon.style.display="none"
    this.begin.style.display="block"
    
   this.PlayerName()
   this.Again()
  
  }
 }
 
 PlayerName(){
  this.name.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
      this.playerName.innerHTML=this.name.value
      this.name.value=""
      this.name.style.display="none"
      this.enter.style.display="none"
    }
  })
 }

 Again(){
  this.pointC=0
  this.pointD=0
  this.pointP=0

  this.player.textContent=this.pointP
  this.draw.textContent=this.pointD
  this.comp.textContent=this.pointC

  this.playerImg.src="https://www.metacritic.com/a/img/resize/e76fd0bf13753bb0b8a120b97913db6be5acbcc1/catalog/provider/2/2/2-33743aadea123a4eae41b2145df3a109.jpg?auto=webp&fit=crop&height=675&width=1200"
  this.compImg.src="https://www.metacritic.com/a/img/resize/e76fd0bf13753bb0b8a120b97913db6be5acbcc1/catalog/provider/2/2/2-33743aadea123a4eae41b2145df3a109.jpg?auto=webp&fit=crop&height=675&width=1200"

 }

 CompRandom(){
  let arr=["r","p","s"]
  let randomEl=arr[Math.floor(Math.random()*arr.length)]
  return this.images[randomEl]
 }

 Control(){
  document.querySelector("#rock").onclick=()=>{
    this.playerImg.src=this.images.r
    setTimeout(()=>{
      this.compImg.src=this.CompRandom()
    },500)
    this.Score()
  }
  document.querySelector("#paper").onclick=()=>{
    this.playerImg.src=this.images.p
    setTimeout(()=>{
      this.compImg.src=this.CompRandom()
    },500)
    this.Score()
  }
  document.querySelector("#scissor").onclick=()=>{
    this.playerImg.src=this.images.s
    setTimeout(()=>{
      this.compImg.src=this.CompRandom()
    },500)
    this.Score()
  }
 }

 Score(){
  if(
   (this.playerImg.src==this.images.p && this.compImg.src==this.images.r) ||
   (this.playerImg.src==this.images.r && this.compImg.src==this.images.s) ||
   (this.playerImg.src==this.images.s && this.compImg.src==this.images.p)
  ){
     this.pointP++
     this.player.textContent=this.pointP
  }
  else if(this.playerImg.src===this.compImg.src){
    this.pointD++
    this.draw.textContent=this.pointD
  }
  else{
    this.pointC++
    this.comp.textContent=this.pointC
  }
  
  if(this.pointP===6){
    this.EndGame("You Win!")
  }else if(this.pointC===6){
   this.EndGame("You Lose!")
  }
 }
 
 EndGame(message){
    this.begin.style.display="none"
    this.end.style.display="block"
    this.win.textContent=message
    this.win.style.color=message=="You Win!" ? "blue" : "red"

    document.querySelector("#exitGame").onclick=()=>{location.reload()}
    document.querySelector("#again").onclick=()=>{
      this.end.style.display="none"
      this.begin.style.display="block"
      this.Again()
    }
 }


}
const app=new RockPaperScissor()
app.Progress()
app.Start()
app.Control()




