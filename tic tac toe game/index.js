var count=1;
function fill(control)
{
    if(count<=9)
    {
      if(count%2==1)
       document.getElementById(control.id).innerHTML="X";
      else
        document.getElementById(control.id).innerHTML="O";
      count=count+1;
      if(checkWin())
      {
        if(count%2==1)
          alert("Second player is the winner");
        else
          alert("First player is the winner");
        reset();
      }
      if(count==10)
      {
        alert("Draw!");
        reset();
      }
    }

}
//reset function
function reset()
{
  for(var i=1;i<=9;i++)
  {
    document.getElementById('div'+i).innerHTML="";
  }
  count=1;
}
function checkWin()
{
  if(checkCondition('div1','div2','div3') || checkCondition('div4','div5','div6') || checkCondition('div7','div8','div9') || checkCondition('div1','div4','div7') || checkCondition('div2','div5','div8') || checkCondition('div1','div5','div9') || checkCondition('div3','div5','div7') || checkCondition('div3','div6','div9'))
    return true;
}

function checkCondition(div1,div2,div3)
{
  if(getData(div1)==getData(div2) && getData(div2)==getData(div3) && getData(div1)!="" && getData(div2)!="" && getData(div3)!="")
  {
    return true;
  }
}
function getData(div)
{
  return document.getElementById(div).innerHTML
}
