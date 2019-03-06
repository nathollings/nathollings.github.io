    document.getElementsByName('html').style.backgroundColor = rgba(0,0,0, 1);
    // Custom rain
    var letters = "shiftSHIFT5hiftSHIFT5h!ft$HIFT｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split('');
    // var letters = "shiftSHIFT5hiftSHIFT5h!ft$HIFT[]{}!@#$%^&*()_-+=".split('');
    
    var fontSize = 12;
    var width = rain.width = window.innerWidth;
    var height = rain.height = window.innerHeight;
    ctx = rain.getContext('2d');
    var columns = rain.width / fontSize;
    var chars = []; // init the chars 
    
    function setColoumns() {
        
        ctx.fillStyle='rgba(0,0,0, 0.08)';
        ctx.fillRect(0,0,width,height);
        columns = rain.width / fontSize;
        chars = []; // init the chars 
        for(var x = 0; x < columns; x++){
          if(Math.random() > 0.900)
            chars[x] = 1
          else if(Math.random() > 0.400 && Math.random() > 0.800) 
            chars[x] = Math.floor(Math.random()*(rain.height/fontSize))
          else 
            chars[x] = rain.height    
        }
    }

    setColoumns();

    ctx.fillStyle='rgba(0,0,0, 1)';
    ctx.fillRect(0,0,width,height);

    function draw() {
      

        ctx.fillStyle='rgba(0,0,0, 0.08)';
        ctx.fillRect(0,0,width,height);
      
        ctx.font = fontSize + "px Aerial"

      // var colorKey = Math.floor(Math.random()*colors.length)
      // ctx.fillStyle=colors[colorKey];
      
// loop over the chars 
      for(var i = 0; i < chars.length; i++){
        ctx.fillStyle="#2ba02b";
        // var colorKey = Math.floor(Math.random()*colors.length)

        // ctx.fillStyle=colors[colorKey];
        var char = chars[i];
        var letter = letters[Math.floor(Math.random()*letters.length)];
        // var letter = "BILLABLE HOURS!";

        if (true) {
          randm = Math.random();
          if((char*fontSize > rain.height && randm > 0.970) || (randm < 0.130 && randm > 0.101 )) {
            chars[i] = 0;
          }
          else if((char*fontSize > rain.height && randm > 0.670 && randm < 0.800) || (randm < 0.100)) {
            chars[i] =  Math.floor(Math.random()*(rain.height/fontSize))
          }else if(randm > 0.470) {
            chars[i]++;
          }else if(randm > 0.800) {
            chars[i]++;
            chars[i]++;
          }
          else{
            chars[i]++;
            ctx.fillStyle='rgba(0,0,0, 1)';
            ctx.fillRect(i*fontSize,(char*fontSize)-(fontSize),fontSize,fontSize);
          }
          ctx.fillStyle="#2ba02b";
          // colorKey
          // ctx.fillStyle=colors[colorKey];
          ctx.fillText(letter, (i*(fontSize)), char*fontSize);
        }
      }


    };

    setInterval(draw, 50);

    window.onresize = function() {
        width = rain.width = window.innerWidth;
        height = rain.height = window.innerHeight;
        setColoumns();
    }