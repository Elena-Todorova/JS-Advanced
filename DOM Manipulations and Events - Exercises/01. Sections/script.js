function create(input) {
   let patentElement = document.getElementById('content');

   let elements = input;

   for (const el of elements) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(el);

      div.appendChild(p);
      p.appendChild(text);
      p.style.display ='none';
      div.addEventListener('click', function(){
         p.style.display = 'block';
      });
      patentElement.appendChild(div);
      
   }
}