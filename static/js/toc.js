var svg = '<svg class="toc-marker " width="200 " height="200 " xmlns="http://www.w3.org/1000/svg "><path stroke="#444 " stroke-width="3 " fill="transparent " stroke-dasharray="1, 0, 26, 26" stroke-linecap="round " stroke-linejoin="round " transform="translate(-0.5, -0.5) " d="M 43 16 L 43 42" opacity="1" stroke-dashoffset="1"></path></svg>';
var toc = document.querySelector('.toc');
toc.innerHTML = svg;
console.log(tableOfContents)
console.log(toc)
var longform = document.querySelector( 'article' );


// console.log(headers.length)
    // Create a list for the ToC entries
    tocList = document.createElement("ul");

    // Get the section tags - ToC entries

   
   
    for (i = 0; i < tableOfContents.length; i++){     
      id_name = tableOfContents[i].heading;
      console.log(id_name)
      tocListItem = document.createElement("li");
      tocEntry = document.createElement("a");
      tocEntry.setAttribute("href","#"+id_name.replace(/\s/g, ''));
      tocEntry.innerText=id_name;
      child = tableOfContents[i].sub_sections;
      tocListItem.appendChild(tocEntry);
      tocList.appendChild(tocListItem);


      if (child.length != 0){
      for (j = 0; j < child.length; j++){
        tocList1 = document.createElement("ul"); 
        tocListItem1 = document.createElement("li");
        tocEntry1 = document.createElement("a");
        tocEntry1.setAttribute("href","#"+child[j].replace(/\s/g, ''));
        tocEntry1.innerText=child[j];
        tocListItem1.appendChild(tocEntry1);
        tocList1.appendChild(tocListItem1);
        tocListItem.appendChild(tocList1);
      }}
   
    
    
    toc.appendChild(tocList);
    }
var tocPath = document.querySelector( '.toc-marker path' );
var tocItems;

// Factor of screen size that the element must cross
// before it's considered visible
var TOP_MARGIN = 0,
    BOTTOM_MARGIN = 0;

var pathLength;

var lastPathStart,
		lastPathEnd;

window.addEventListener( 'resize', drawPath, false );
window.addEventListener( 'scroll', sync, false );

drawPath();

function drawPath() {
  
  tocItems = [].slice.call( toc.querySelectorAll( 'li' ) );

  // Cache element references and measurements
  tocItems = tocItems.map( function( item ) {
    var anchor = item.querySelector( 'a' );
    var target = document.getElementById( anchor.getAttribute( 'href' ).slice( 1 ) );

    return {
      listItem: item,
      anchor: anchor,
      target: target
    };
  } );

  // Remove missing targets
  tocItems = tocItems.filter( function( item ) {
    return !!item.target;
  } );

  var path = [];
  var pathIndent;

  tocItems.forEach( function( item, i ) {

    var x = item.anchor.offsetLeft - 5,
        y = item.anchor.offsetTop,
        height = item.anchor.offsetHeight;

    if( i === 0 ) {
      path.push( 'M', x, y, 'L', x, y + height );
      item.pathStart = 0;
    }
    else {
      // Draw an additional line when there's a change in
      // indent levels
      if( pathIndent !== x ) path.push( 'L', pathIndent, y );

      path.push( 'L', x, y );
      
      // Set the current path so that we can measure it
      tocPath.setAttribute( 'd', path.join( ' ' ) );
      item.pathStart = tocPath.getTotalLength() || 0;
      
      path.push( 'L', x, y + height );
    }
    
    pathIndent = x;
    
    tocPath.setAttribute( 'd', path.join( ' ' ) );
    item.pathEnd = tocPath.getTotalLength();

  } );
  
  pathLength = tocPath.getTotalLength();
  
  sync();
  
}

function sync() {
  
  var windowHeight = window.innerHeight;
  
  var pathStart = pathLength,
      pathEnd = 0;
  
  var visibleItems = 0;

  tocItems.forEach( function( item ) {

    var targetBounds = item.target.getBoundingClientRect();
    
    if( targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * ( 1 - BOTTOM_MARGIN ) ) {
      pathStart = Math.min( item.pathStart, pathStart );
      pathEnd = Math.max( item.pathEnd, pathEnd );
      
      visibleItems += 1;
      
      item.listItem.classList.add( 'visible' );
    }
    else {
      item.listItem.classList.remove( 'visible' );
    }
 
    
  } );
  
  // Specify the visible path or hide the path altogether
  // if there are no visible items
  if( visibleItems > 0 && pathStart < pathEnd ) {
    if( pathStart !== lastPathStart || pathEnd !== lastPathEnd ) {
      tocPath.setAttribute( 'stroke-dashoffset', '1' );
      tocPath.setAttribute( 'stroke-dasharray', '1, '+ pathStart +', '+ ( pathEnd - pathStart ) +', ' + pathLength );
      tocPath.setAttribute( 'opacity', 1 );
    }
  }
  else {
    tocPath.setAttribute( 'opacity', 0 );
  }
  
  lastPathStart = pathStart;
  lastPathEnd = pathEnd;

}




mark=document.querySelectorAll('mark');


// mark[0].style.cssText = "font-weight: bolder; background: linear-gradient(104deg, rgba(255, 250, 205, 0) 0.9%, rgba(255, 250, 205, 1.25) 2.4%, rgba(255, 250, 205, 0.5) 5.8%, rgba(255, 250, 205, 0.1) 93%, rgba(255, 250, 205, 0.7) 96%, rgba(130, 255, 1732, 0) 98%), linear-gradient(183deg, rgba(255, 250, 205, 0) 0%, rgba(255, 250, 205, 0.3) 7.9%, rgba(255, 250, 205, 0) 15%); border-radius: 1em 0 1em 0;   -webkit-box-decoration-break: clone; margin: 0; text-shadow: -6px 6px 4.9px rgba(255,250,205,0.7), 21px -18.1px 7.3px rgba(255, 255, 255,1), -18.1px -27.3px 30px rgba(255, 255, 255,1);"
for (var i = 0; i <= mark.length-1; i++) {
angle = Math.floor(Math.random() * 10) + 100; // returns a random integer from 100 to 200
stop1 = Math.random()+0.7;
stop2 = Math.random()+2.1;
stop3 = (Math.random()*1.2)+93;
stop4 = (Math.random()*1.5)+95;
txt = "font-weight: bolder; background: linear-gradient("+ angle +"deg" +", rgba(255, 250, 205, 0)"+ stop1+"%," + "rgba(255, 250, 205, 1.25) 2.4%, rgba(255, 250, 205, 0.5) 5.8%, rgba(255, 250, 205, 0.1)" + stop3 + "%, rgba(255, 250, 205, 0.7)" + stop4 + "%, rgba(130, 255, 1732, 0) 98%), linear-gradient(183deg, rgba(255, 250, 205, 0) 0%, rgba(255, 250, 205, 0.3) 7.9%, rgba(255, 250, 205, 0) 15%); border-radius: 1em 0 1em 0;   -webkit-box-decoration-break: clone; margin: 0; text-shadow: -6px 6px 4.9px rgba(255,250,205,0.7), 21px -18.1px 7.3px rgba(255, 255, 255,1), -18.1px -27.3px 30px rgba(255, 255, 255,1);"

mark[i].style.cssText = txt;
}

