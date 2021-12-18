const box1 = _$('#box1');
const box2 = _$('#box2');
const btn = _$('button');
const result= _$('#result');
var words= _$('#words');
const body= _$('body');
const container = _$('#container');
box1.addEventListener('input',(e)=>{
var smallLetter = e.target._value().toLowerCase();
 box1._value(smallLetter);
 box1.focus();
})
var start = () => {
   let wordBox = [];
 let word = box1._value();
var res='';
  if(word.length < 2){  
   body._css({'backgroundColor':''});
 return null;
  }
  
for(var i =0; i< word.length;++i){
 wordBox.push(word[i])
}
box2._value('');
for(var i =0; i< word.length;++i){
  res +=  wordBox.pop();
  box2.value= res.toLowerCase()
}
  if(word === box2.value){
   result._text('"'+ word +'" is Palindrome');
 words.innerHTML += `<li> ${word}</li>`;
   body._css({'backgroundColor':'green'});
result.className='';
}else{
      result._text('"'+ word +'" is not Palindrome');
   body._css({'backgroundColor':'red'});
result.className='run'
setTimeout(()=>{
 result.className='';
}, 600);
  }
}
btn.onclick = start;

_log('welcome')