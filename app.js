(()=>{"use strict";var e,t={497:(e,t,i)=>{var s=i(440),a=i.n(s);const r={type:a().AUTO,width:800,height:700,physics:{default:"arcade",arcade:{gravity:-200,debug:!0}},scene:{preload:function(){this.load.image("background2","assets/background2.jpg"),this.load.image("newpipe","assets/newpipe.png"),this.load.spritesheet("doremon","assets/doremon.jpg",{frameWidth:32,frameHeight:48}),this.load.image("base2","assets/base2.png"),this.load.image("platform","assets/platformm.png");this.load.plugin("rexvirtualjoystickplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",!0),this.load.image("doracake","assets/doracake.jpg"),this.load.audio("sound","assets/song.mp3")},create:function(){m=this.sound.add("sound",{loop:!0}),m.play(),m.setVolume(.2),this.add.image(0,0,"background2").setOrigin(0);const e=this.add.image(400,700,"base2").setOrigin(.5,1);e.setScale(1);const t=this.physics.add.image(400,e.y-e.displayHeight,"platform").setOrigin(.5,1);t.displayWidth=800,t.displayHeight=55,u=this.physics.add.group();for(let e=0;e<o;e++){const e=u.create(0,0,"newpipe").setOrigin(1,0),t=u.create(0,0,"newpipe").setOrigin(0,0);v(e,t),e.body.velocity.y=n,t.body.velocity.y=n}l=this.physics.add.sprite(.1*r.width,r.height/2,"doremon").setOrigin(0),l.setScale(2),l.setBounce(.2),l.setCollideWorldBounds(!0),l.body.gravity.y=500,this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("doremon",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"doremon",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("doremon",{start:5,end:8}),frameRate:10,repeat:-1}),c=this.input.keyboard.createCursorKeys(),d=this.plugins.get("rexvirtualjoystickplugin").add(this,{x:99,y:550,radius:70,base:this.add.circle(0,0,50,8947848),thumb:this.add.circle(0,0,30,13421772)}),p=d.createCursorKeys(),g=this.add.text(16,16,"Score: 0",{fontSize:"32px",fill:"#fff"}),(y=this.physics.add.group({key:"doracake",repeat:4,setXY:{x:12,y:0,stepX:70}})).children.iterate((function(e){e.setBounceY(a().Math.FloatBetween(.4,.8)),e.body.gravity.y=300})),this.physics.add.collider(l,h),this.physics.add.collider(y,h),this.physics.add.overlap(l,y,(function(e,t){!function(e,t,i){i.disableBody(!0,!0),f+=10,g.setText("Score:"+f),0===e.countActive(!0)&&e.children.iterate((function(e){e.enableBody(!0,e.x,0,!0,!0)}))}(y,0,t)})),this.physics.world.enable(y),y.setVelocityY(100)},update:function(){w(),c.left.isDown||p.left.isDown?(l.setVelocityX(-160),l.anims.play("left",!0)):c.right.isDown||p.right.isDown?(l.setVelocityX(160),l.anims.play("right",!0)):(l.setVelocityX(0),l.anims.play("turn"));(c.up.isDown||p.up.isDown)&&l.body.touching.down&&l.setVelocityY(-330);if(l.y>r.height||l.y<0){this.physics.pause(),l.setTint(16711680),l.x=.1*r.width,l.y=r.height/2,l.body.velocity.y=0;this.add.text(r.width/2,r.height/2,"GAME OVER",{fontSize:"64px",fill:"#ffffff"}).setOrigin(.5)}}}},n=200,o=4;let d=null,l=null,h=null,c=null,p=null,u=null;var y,g,f=0;let m;const b=[150,250];function v(e,t){const i=function(){let e=0;return u.getChildren().forEach((function(t){e=Math.min(t.x,e)})),e}(),s=a().Math.Between(...b),n=a().Math.Between(20,r.height-s),o=a().Math.Between(...b);e.x=o,e.y=i-n,t.x=e.x+o,t.y=e.y}function w(){const e=[];u.getChildren().forEach((t=>{t.getBounds().top>=800&&(e.push(t),2===e.length&&v(...e))}))}new(a().Game)(r)}},i={};function s(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,e=[],s.O=(t,i,a,r)=>{if(!i){var n=1/0;for(h=0;h<e.length;h++){for(var[i,a,r]=e[h],o=!0,d=0;d<i.length;d++)(!1&r||n>=r)&&Object.keys(s.O).every((e=>s.O[e](i[d])))?i.splice(d--,1):(o=!1,r<n&&(n=r));if(o){e.splice(h--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[i,a,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={524:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var a,r,[n,o,d]=i,l=0;if(n.some((t=>0!==e[t]))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(d)var h=d(s)}for(t&&t(i);l<n.length;l++)r=n[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(h)},i=self.webpackChunkaltudemypackage=self.webpackChunkaltudemypackage||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var a=s.O(void 0,[121],(()=>s(497)));a=s.O(a)})();