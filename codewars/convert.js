<!DOCTYPE html>
<html lang="en">
  <head>

    <title>Document</title>
  </head>
  <body>
    


    <script>

    // function rgb(r, g, b) {
    //   if (r > 255) r = 255;
    //   if (g > 255) g = 255;
    //   if (b > 255) b = 255;

    //   if (r <= 0) r = '00';
    //   if (g <= 0) g = '00';
    //   if (b <= 0) b = '00';
      
    //   if (r < 100) r += '0';
    //   if (g.toString(16) < 100) g += '0';
    //   if (b.toString(16) < 100) b += '0';
      
    //   let converted =  (r).toString(16) + (g).toString(16) + (b).toString(16);
    //   console.log(converted.toString().toUpperCase());
    // }

    // rgb(15,15,15);

      function rgb(r,g,b) {
        return toHex(r) + toHex(g) + toHex(b);
      }

      function toHex (d) {
        if(d < 0 ) {return "00";}
        if(d > 255 ) {return "FF";}

        return ('0' + (Number(d).toString(16))).slice(-2).toUpperCase();
      }

      console.log(rgb(15,15,15));

    </script>
  </body>
</html>