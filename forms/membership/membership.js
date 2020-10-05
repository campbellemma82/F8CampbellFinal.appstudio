
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmitMember.onclick=function ( ){
members = inptMember.value
if (members.includes(inptMember.value))
  memberLabel.value = "You are a member " + inptMember.value 
else {
  memberLabel.value = "You are not a member"
  members.push(inptmember.value)
  console.log(members)}
  
  }

