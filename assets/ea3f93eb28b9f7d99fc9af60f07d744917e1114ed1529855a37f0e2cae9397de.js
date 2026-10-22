
const RASTER_ASSETS=["assets/4fecef4fe77be79fc037c4ea1fc482629148f12aea84a1ad5be9b2ce2e7f826a.webp","assets/f04e8fe8b1921c5a5927e43c6a2872ecbcd630cdc48ac06f42d4e0dd67fdc3fe.webp","assets/34ccf7b929069b99edb6d482d2cf3f17b969b4983a513233a3918334e9b9a9be.webp","assets/98f73a44057fb574d4d82405a68d6c53b75f18dc01a143e1e52160b891298742.webp","assets/2c3b24bbf4808f091badbb0190ce265edc6978a8437cb47f9087c9e96423f776.webp","assets/47abd430f1c706eaa03c5d3988be0d38f087e495445c29a0730d2dbe2cf6ce7c.webp","assets/f377191efa3c0f0cb6886752fdcc79a1b7275711427a168fe8dc937654e3bbe9.webp","assets/e69acd69390f0c189eec99cd0f8a4d1006bbf528257defcc349e1942826f7ee7.webp","assets/0ede7a34303b9efa7d2d2ec871c40821fcebee61ff1859044fd044d4ff3bcecd.webp","assets/e45a338997f14798ff17f016a7f155023a979a41c24e348570722f278c00b295.webp","assets/42333c3f8d2379cedd19450b71f4ffb25c3d1578fbec5f073a2a75a983c94e82.webp","assets/97c93689269b778b89e5a3a374b96da33a44878ae8f8ae5698d0790b58ef87aa.webp","assets/250573314d2a931d6c4d051e796b8faa2a8bef27bd81d5a42d8b04baf709e780.webp","assets/fb52ffb14dd57e894d88d7fa436fd9ac3bcec2abe1beab234a7fd8625d746c0d.webp","assets/13871b6c2e17831a6681de30c27458b527243df9028fe29ce689c9f0a8232edd.webp","assets/339f2ddbd4bcab4958dff33a9ef15baacf2875dbfb58c808bf96f00739fa8981.webp","assets/8ef1663a4b948696c99e4cbd8227a8d03e292ce98a0c383ad2ac859b2ee92403.webp","assets/8ef2fb4d96434c418dba45325330dcd241aec8431ed723baa6e6373b918b1df8.webp","assets/19d21bba6cc0403b0a1523079353fe8efbf5fb7a2a50544b86e1015e52da8465.webp","assets/46e1c2fb7ca79421500b9af3abdc9eff1eda1d9e3a642fc2a32f4b4cdedc98f2.webp","assets/f196c54922419843e98e5541664d817ea2f6ae416c59d0a166f33e08eb07822f.webp","assets/c30d7bae9aeb902862f4430807eeda33fc387d25891128450b1b195582c621ad.webp","assets/0f940eaf1a3113f1a0b953e27d24f104fe7cb3090daad7bfc45073bd1386cc38.webp","assets/1ca33534d0670a2f2daf0d8097824703fe53e34b4e38d5f6c67a72188723e801.webp","assets/c73e7f2e2ca51c8cb3a2bfc85e96476c070c81db08d46f915d71fd5b9a67c6c7.webp","assets/6e516df9cafa249edded15668ecb48fe3ac33583abf76c9c48c7d6f8835c7bed.webp","assets/c3ea625c2c4c951c4827108f65f9c5be2a123afca05edcd5a5a4109efa1867db.webp","assets/1cccdc292f3d004ca12401382472eaed6a7073b721bf1687905f62522c8d3211.webp","assets/fd5a20daa26202863244ef050165d96db7ba84095b570cb07a8cdb9c94076ab2.webp","assets/9cd4de07641be088a55f91e5450ca8fd468044479417cb98e69d483ebcbf688d.webp","assets/20cec0f6b1f9a0937c3e01fe7dd349e734f9140c9d739ab43746a47601aad8ff.webp","assets/7d97eb77db62ddbb2d6db5801e5df3b1a8acc839975ac8ee2fd251f967f8729c.webp","assets/6cbabfd0d05fedd34c2ee84651f954966ea618f78932e254b781e7b979ec0ee2.webp","assets/439ff746e070124d9171c85b0f0922278932f034054e1209cfe2f7ea1f842fbf.webp","assets/002e71ae296ea4b9a35611559b657c93db1ef5cf22ce9bf24e2e9f405a2f3bed.webp","assets/60856d63a03180f961e7e9810fa665eaae03d26cfd5b39c9f0bfb8d2f87da0a0.webp"];function resolveGameArt(text){return text.replace(/songzi-raster:([0-9]+)/g,(_,i)=>RASTER_ASSETS[+i]);}
let songziGetCARD_DOCUMENTCache;function songziGetCARD_DOCUMENT(){return songziGetCARD_DOCUMENTCache??(songziGetCARD_DOCUMENTCache=resolveGameArt("\u003c!doctype html>\u003chtml lang=\"zh-CN\">\u003cmeta charset=\"utf-8\">\u003cmeta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\u003ctitle>小松子的秘密花园 · 森林守卫\u003c/title>\u003cstyle>\n:root{color-scheme:dark;--gold:#dfc381;--cream:#f4eed3;--ink:#13271e}*{box-sizing:border-box}body{margin:0;background:#0a1914;color:var(--cream);font-family:'Microsoft YaHei','PingFang SC',sans-serif}button{font:inherit;cursor:pointer}button:disabled{cursor:default}header{max-width:1450px;margin:auto;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d5bf7730}.brand{font-size:18px;font-weight:900}.brand span{color:#bdde8e}.version{font-size:11px;letter-spacing:2px;color:#c6c8a1}main{max-width:1450px;padding:24px 28px;margin:auto}.heading{display:flex;justify-content:space-between;align-items:center;gap:20px}.eyebrow{font-size:10px;letter-spacing:3px;color:#98b18c}h1{font-size:clamp(24px,3vw,36px);margin:8px 0}p{font-size:13px;line-height:1.8;color:#b6c5a9;margin:7px 0}.tabs{display:flex;gap:5px;background:#07140f;padding:5px;border-radius:10px;flex-shrink:0}.tabs button{border:0;border-radius:7px;padding:11px 16px;background:none;color:#b3c5a7;font-size:12px}.tabs button.active{background:#c7df95;color:#183422;font-weight:900}.arena{position:relative;margin-top:20px;min-height:730px;border-radius:20px;border:1px solid #c7b67844;overflow:hidden;isolation:isolate;background:#183d2d;box-shadow:0 15px 50px #0005}.landscape{position:absolute;inset:0;z-index:-3;pointer-events:none}.landscape svg{width:100%;height:100%;object-fit:cover}.arena:after{content:'';position:absolute;inset:0;pointer-events:none;z-index:-1;background:radial-gradient(ellipse at 63% 40%,transparent 5%,#03130b55 80%),linear-gradient(0deg,#06140dc9,transparent 35% 70%,#081d1444)}.forest-light{position:absolute;inset:-50%;background:conic-gradient(from -30deg at 55% 5%,transparent 0deg 10deg,#fff9b419 11deg 18deg,transparent 19deg 30deg,#fff9b412 31deg 40deg,transparent 41deg 360deg);pointer-events:none;z-index:-2}.pile-zone{position:absolute;left:0;top:0;bottom:0;width:240px;border-right:1px solid #d3c47633;background:linear-gradient(90deg,#10271ec9,#122c2377,transparent);z-index:3}.pile-title{position:absolute;top:26px;left:25px;font-size:12px;letter-spacing:2px;color:#dccb91}.pile-title strong{font-size:24px;color:#fff2b9;letter-spacing:0;margin-right:5px}.pile{position:absolute;top:120px;left:24px;width:205px;height:420px;perspective:900px}.pile-base{position:absolute;bottom:95px;left:0;width:225px;height:52px;border-radius:50%;background:radial-gradient(ellipse,#010b08bb,transparent 70%);transform:rotate(-8deg);pointer-events:none}.pile .pack-object{position:absolute;left:var(--px);top:var(--py);z-index:var(--z);transform:rotateZ(var(--rot)) rotateY(-12deg);filter:brightness(var(--shade));transition:filter .2s,translate .2s}.pile .pack-object:hover:not(:disabled){filter:brightness(1.2);translate:10px -7px}.pile .pack-object:disabled{filter:brightness(.75)}.pile-footer{position:absolute;bottom:30px;left:25px;right:20px;font-size:11px;color:#abc099;line-height:1.9}.text-button{border:0;border-bottom:1px solid #bdc39166;background:none;color:#d7d5a0;font-size:11px;padding:5px 0;margin-top:8px}.table{margin-left:240px;position:relative;min-height:730px;padding:30px 24px 25px;display:flex;align-items:center;justify-content:center;flex-direction:column;perspective:1200px}.scene-title{position:absolute;top:27px;left:0;right:0;text-align:center;font-size:11px;letter-spacing:3px;color:#e0dca7;pointer-events:none}.summon-floor{position:absolute;width:440px;height:250px;left:50%;top:48%;transform:translate(-50%,-10%) rotateX(55deg);border-radius:50%;border:8px double #8b9a69;background:repeating-conic-gradient(#43513a 0deg 29deg,#72805a 30deg 31deg),radial-gradient(#567443,#233e2b);box-shadow:0 0 0 8px #263d2d,0 10px 0 12px #13291f,0 0 0 15px #71865c55,0 40px 60px #020c08aa;opacity:.85;z-index:-1}.summon-floor:after{content:'✦';position:absolute;inset:18px;border:2px solid #c5c67955;border-radius:50%;display:grid;place-items:center;color:#c3ce8d66;font-size:100px;background:radial-gradient(#283e2e,#253f2b99)}.empty-center{margin-top:-35px;text-align:center;z-index:1}.empty-sigil{font-size:60px;color:#d9d79766;text-shadow:0 0 30px #bfd87655;margin-bottom:18px}.empty-center strong{font-size:20px;letter-spacing:2px}.empty-center p{font-size:12px;color:#bac9a3}.center-slot{position:relative;perspective:1100px;width:180px;height:248px;margin-top:-55px;z-index:4}.pack-object{--depth:7px;position:relative;width:180px;height:248px;padding:0;appearance:none;border:0;background:none;transform-style:preserve-3d;transform:rotateX(-8deg) rotateY(-16deg) rotateZ(-3deg);color:#ead39a;outline-offset:10px}.pack-object:focus-visible{outline:3px solid #f7df98}.face{position:absolute;box-sizing:border-box;backface-visibility:hidden;pointer-events:none}.p-front{inset:0;transform:translateZ(7px);filter:drop-shadow(0 6px 5px #0004)}.p-front svg{width:100%;height:100%;overflow:visible}.p-back{inset:0;border:3px solid #8c6c35;border-radius:7px;background:linear-gradient(100deg,#334930,#526544,#263c28);transform:rotateY(180deg) translateZ(7px)}.p-right,.p-left{top:0;left:83px;width:14px;height:248px;background:repeating-linear-gradient(90deg,#9c8c50 0 1px,#3b4b2e 2px 3px);border:1px solid #ac9250}.p-right{transform:rotateY(90deg) translateZ(90px);filter:brightness(.7)}.p-left{transform:rotateY(-90deg) translateZ(90px)}.p-top,.p-bottom{top:117px;left:0;width:180px;height:14px;background:repeating-linear-gradient(90deg,#ad9458 0 3px,#6f693e 4px 5px);border:1px solid #c5ae6c}.p-top{transform:rotateX(90deg) translateZ(124px)}.p-bottom{transform:rotateX(-90deg) translateZ(124px)}.center-slot .pack-object{filter:drop-shadow(0 24px 18px #0009);animation:packIdle 4s ease-in-out infinite}.center-slot.ready .pack-object:hover{animation-play-state:paused;filter:drop-shadow(0 16px 20px #0009) brightness(1.12)}.pack-caption{position:absolute;top:calc(50% + 150px);left:0;right:0;text-align:center;z-index:4}.pack-caption b{display:block;font-size:15px;color:#f7e8b0;letter-spacing:3px}.pack-caption span{display:block;font-size:11px;color:#b9c8a2;margin-top:9px}.primary,.secondary{border:1px solid #d1b571;border-radius:8px;padding:12px 23px;background:linear-gradient(#e5d398,#b79d5a);color:#203322;font-weight:900;box-shadow:0 3px 0 #68552e;font-size:12px}.secondary{background:#193728;color:#e0d59c;border-color:#8c9864;box-shadow:none}.actions{display:flex;gap:12px;justify-content:center;margin-top:18px;flex-wrap:wrap}.meta{display:flex;justify-content:space-between;gap:16px;margin:16px 0 0;font-size:11px;color:#91a487}.meta b{color:#d2d9ae}.help{font-size:10px;color:#6f8e76;text-align:center;margin:20px 0}.pack-crack{position:absolute;inset:0;opacity:0;transform:translateZ(9px);pointer-events:none;background:linear-gradient(90deg,transparent 44%,#fffaaf 48%,white 50%,#fffaaf 52%,transparent 56%);clip-path:polygon(47% 0,58% 0,52% 25%,61% 42%,48% 62%,56% 80%,49% 100%,39% 100%,45% 80%,39% 62%,50% 42%,43% 25%)}.charging .pack-object{animation:charge 1.6s ease-in forwards;pointer-events:none}.charging .pack-crack{animation:crackOn 1.6s forwards}.charge-ring{position:absolute;width:340px;height:340px;left:50%;top:43%;transform:translate(-50%,-50%);border:2px dashed #efe8a988;border-radius:50%;box-shadow:0 0 30px #c7e48c33;pointer-events:none;opacity:0}.charging .charge-ring{animation:ringCharge 1.5s ease-in forwards}.flash{position:absolute;inset:0;pointer-events:none;z-index:30;background:radial-gradient(ellipse,#fff 0,#fffdde 24%,#ffe6a8b0 45%,transparent 75%);animation:flash 1s forwards}.rays{position:absolute;width:1200px;height:1200px;left:50%;top:45%;margin:-600px 0 0 -600px;pointer-events:none;background:repeating-conic-gradient(transparent 0 10deg,#ffe6a977 11deg 15deg,transparent 17deg 30deg);mask-image:radial-gradient(#000 10%,transparent 65%);animation:rays 2.6s ease-out forwards;z-index:2}.shockwave{position:absolute;left:50%;top:44%;width:90px;height:90px;border:4px solid #fff3bb;border-radius:50%;box-shadow:0 0 30px #ffe8a2;pointer-events:none;animation:shock 1s ease-out forwards;z-index:29}.impact{animation:impact .4s}.fx-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:26}.cards-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px 14px;width:100%;max-width:800px;z-index:5;position:relative;margin:45px auto 0;perspective:1100px}.card{--accent:#8ccfff;--deep:#1b4a78;position:relative;width:100%;aspect-ratio:0.68;padding:7px;border:2px solid var(--accent);border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--deep) 24%,#11251e 76%,var(--accent));color:#fff5d7;text-align:left;overflow:hidden;box-shadow:0 0 0 2px #06190f,0 13px 20px #0008;transform-style:preserve-3d;transition:box-shadow .2s;isolation:isolate}.card:after{content:'';position:absolute;inset:-100%;pointer-events:none;background:linear-gradient(115deg,transparent 40%,#fff8 49%,transparent 57%);transform:translateX(-65%);animation:foil 7s infinite}.card.sr{--accent:#d4a4ff;--deep:#603d83}.card.ssr{--accent:#ffd075;--deep:#8d4d1d;box-shadow:0 0 0 2px #734f28,0 0 15px #e7b55433,0 15px 22px #0009}.card .head{display:flex;justify-content:space-between;align-items:center;height:12%;font-size:8px;color:var(--accent);font-weight:900}.rarity{display:flex;gap:3px;align-items:center}.rarity b{font-family:Arial,sans-serif;font-size:clamp(16px,1.6vw,23px);font-style:italic;letter-spacing:-1px;text-shadow:1px 2px #183121}.rarity small{font-size:7px;border-left:1px solid currentColor;padding-left:4px}.art{height:57%;border:1px solid var(--accent);border-radius:4px 12px 4px 4px;background:radial-gradient(circle at 50% 35%,var(--accent),var(--deep));overflow:hidden}.art svg{width:100%;height:100%;filter:drop-shadow(0 5px 4px #15382599)}.card h3{font-size:clamp(11px,1.2vw,17px);margin:6% 0 3%;padding-left:5px;border-left:2px solid var(--accent);letter-spacing:-.4px;white-space:nowrap}.card .desc{font-size:clamp(7px,.65vw,10px);color:#d1d8be;white-space:nowrap}.stats{display:flex;justify-content:space-between;border-top:1px solid #ffffff26;padding-top:5%;margin-top:4%;font-size:clamp(7px,.7vw,10px);font-weight:900;color:var(--accent)}.card:hover{box-shadow:0 0 22px var(--accent),0 15px 20px #0008}.back{display:flex;align-items:center;justify-content:center;flex-direction:column;background:linear-gradient(115deg,#6c7844,#243f2b 45%,#1a3525);border:2px solid #cdb473;box-shadow:inset 0 0 0 4px #172d1f,inset 0 0 0 6px #97945a,0 14px 20px #0007}.back:before{content:'';position:absolute;inset:10px;border:1px solid #b9b36a99;border-radius:28px 4px;pointer-events:none}.seal{width:65%;aspect-ratio:1;border:2px solid #d6bb71;border-radius:50%;background:radial-gradient(circle,#aabf74,#49663c);box-shadow:0 4px 0 #142d1d,0 0 0 4px #233c28,0 0 0 6px #9c9759;z-index:1}.seal svg{width:100%;height:100%}.back strong{font-size:clamp(12px,1.3vw,18px);letter-spacing:2px;color:#ecdfb3;margin-top:12%;z-index:1}.back small{font-size:6px;color:#b8c293;letter-spacing:1px;margin-top:6%;z-index:1}.back .tap{font-size:8px;color:#e2d8ad;margin-top:12%}.back-pattern{position:absolute;inset:20px;border:1px solid #b9ac5c55;transform:rotate(45deg);border-radius:15px}.back:hover{box-shadow:0 0 25px var(--glow),inset 0 0 0 5px #193621}.arrival{animation:arrival .9s cubic-bezier(.15,.8,.25,1) both;animation-delay:var(--delay)}.pre-reveal{animation:cardCharge .65s ease-in forwards;pointer-events:none;box-shadow:0 0 40px var(--glow)}.reveal{animation:heroFlip .9s cubic-bezier(.2,.7,.3,1) both;pointer-events:none}.bloom{position:absolute;width:120px;height:120px;pointer-events:none;border-radius:50%;background:radial-gradient(circle,#fff,var(--glow) 18%,transparent 65%);animation:bloom .85s ease-out forwards;z-index:25}.reveal-ring{position:absolute;width:70px;height:70px;border:2px solid var(--glow);box-shadow:0 0 20px var(--glow);border-radius:50%;pointer-events:none;animation:revealRing 1s ease-out forwards;z-index:24}.reveal-banner{position:absolute;left:0;right:0;top:22px;text-align:center;font-size:14px;letter-spacing:4px;color:var(--glow);font-weight:900;pointer-events:none;animation:banner 1.4s forwards;z-index:28;text-shadow:0 0 18px var(--glow)}.revealed-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:25px auto 5px;z-index:6}.counter{font-size:11px;color:#d9d5a1;text-align:center;margin-top:17px}.overlay{position:fixed;inset:0;background:#06170eea;backdrop-filter:blur(12px);z-index:100;display:flex;align-items:center;justify-content:center;gap:55px;padding:50px 25px}.overlay[hidden]{display:none}.overlay .card{width:300px;flex-shrink:0}.overlay .card h3{font-size:24px}.overlay .head,.overlay .stats,.overlay .desc{font-size:12px}.overlay .rarity b{font-size:30px}.overlay .rarity small{font-size:10px}.detail{max-width:310px}.detail h2{font-size:30px}.detail p{font-size:13px;line-height:1.9}.close{position:absolute;right:25px;top:20px;width:40px;height:40px;border-radius:50%;border:1px solid #dae3b255;background:none;color:#eee9ce;font-size:24px}.skill-anim{animation:skill .8s ease-out}.collection .table{margin-left:0}.collection .pile-zone{display:none}.collection .cards-grid{max-width:1030px;gap:22px}.collection .summon-floor{display:none}.collection .scene-title{top:22px}.collection .table{min-height:730px}.all-done{text-align:center}.all-done strong{font-size:22px}\n@keyframes packIdle{50%{transform:rotateX(-12deg) rotateY(-10deg) rotateZ(-1deg) translateY(-7px)}}@keyframes charge{0%{transform:rotateX(-8deg) rotateY(-16deg) rotateZ(-3deg)}35%{transform:rotateX(-4deg) rotateY(10deg) scale(.93)}65%{transform:rotateX(-9deg) rotateY(-13deg) scale(1.04);filter:brightness(1.4)}75%{transform:rotate(-4deg) scale(1.07);filter:brightness(1.8)}84%{transform:rotate(4deg) scale(1.1);filter:brightness(2)}95%{transform:scale(1.18);filter:brightness(4);opacity:1}100%{transform:scale(1.5);filter:brightness(6);opacity:0}}@keyframes crackOn{50%{opacity:0}90%,100%{opacity:1;filter:drop-shadow(0 0 12px white)}}@keyframes ringCharge{0%{opacity:0;transform:translate(-50%,-50%) scale(1.4)}40%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) rotate(120deg) scale(.3)}}@keyframes flash{0%{opacity:0}10%,20%{opacity:1}100%{opacity:0}}@keyframes rays{0%{opacity:0;transform:rotate(-10deg) scale(.3)}15%{opacity:1}100%{opacity:0;transform:rotate(45deg) scale(1.5)}}@keyframes shock{0%{transform:translate(-50%,-50%)}100%{transform:translate(-50%,-50%) scale(10);opacity:0}}@keyframes impact{20%{translate:-6px 3px}45%{translate:6px -3px}70%{translate:-3px 2px}100%{translate:0 0}}@keyframes arrival{0%{transform:translate(var(--dx),var(--dy)) rotateY(160deg) rotateZ(var(--rot)) scale(.15);opacity:0;filter:brightness(3)}40%{opacity:1}75%{transform:translateY(-10px) rotateY(-8deg) scale(1.04)}100%{transform:none;filter:none}}@keyframes foil{0%,65%{transform:translateX(-65%)}95%,100%{transform:translateX(65%)}}@keyframes cardCharge{40%{transform:translateY(-12px) rotate(-2deg);filter:brightness(1.4)}75%{transform:translateY(-12px) rotate(2deg);filter:brightness(2)}100%{transform:translateY(-14px) rotateY(88deg) scale(1.08);filter:brightness(3)}}@keyframes heroFlip{0%{transform:translateY(-14px) rotateY(-90deg) scale(1.08);filter:brightness(3)}45%{transform:translateY(-18px) rotateY(12deg) scale(1.07);filter:brightness(1.3)}75%{transform:translateY(3px) rotateY(-4deg)}100%{transform:none;filter:none}}@keyframes bloom{0%{transform:translate(-50%,-50%) scale(.2);opacity:1}100%{transform:translate(-50%,-50%) scale(4);opacity:0}}@keyframes revealRing{from{transform:translate(-50%,-50%)}to{transform:translate(-50%,-50%) scale(4);opacity:0}}@keyframes banner{0%{opacity:0;letter-spacing:12px;filter:blur(4px)}25%,70%{opacity:1;letter-spacing:4px;filter:none}100%{opacity:0}}@keyframes skill{30%{transform:scale(1.09) rotate(-3deg);filter:brightness(1.5)}65%{transform:rotate(2deg)}}\n@media(min-width:1300px){.table{padding-left:40px;padding-right:40px}.arena,.table{min-height:810px}.cards-grid{gap:24px 20px}}@media(max-width:1000px){main{padding:20px 16px}.pile-zone{width:190px}.pile{left:8px;transform:scale(.8);transform-origin:top left}.pile-title{left:17px}.table{margin-left:190px;padding:25px 14px}.cards-grid{gap:14px 10px}.pile-footer{left:17px}.arena,.table{min-height:660px}.rarity small{display:none}.art{height:55%}.card h3{margin-top:8%}.meta{flex-wrap:wrap}}@media(max-width:700px){header{padding:18px}.brand{font-size:15px}.version{font-size:8px;letter-spacing:1px}.heading{align-items:flex-start;flex-direction:column;gap:12px}.arena{min-height:840px}.pile-zone{height:180px;bottom:auto;width:100%;border:0;border-bottom:1px solid #b4b66c33;background:linear-gradient(90deg,#102b20c9,transparent);overflow:hidden}.pile-title{top:14px;left:17px;font-size:10px}.pile-title strong{font-size:18px}.pile{top:42px;left:20px;transform:scale(.43);width:360px;height:350px}.pile-footer{top:48px;left:auto;right:17px;bottom:auto;width:40%;font-size:9px;line-height:1.6}.table{margin-left:0;margin-top:180px;min-height:660px;padding:25px 12px}.scene-title{top:19px;font-size:9px;letter-spacing:2px}.center-slot{margin-top:-30px}.summon-floor{width:330px;height:210px}.cards-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:14px 8px;margin-top:35px}.card{padding:4px;border-radius:7px;border-width:1px}.card .head{font-size:6px}.rarity b{font-size:13px}.card h3{font-size:clamp(8px,2.4vw,13px);padding-left:3px;margin-top:9%}.card .desc{font-size:clamp(5px,1.25vw,8px)}.stats{font-size:6px;padding-top:5%;margin-top:7%}.art{height:52%;border-radius:3px 7px 3px 3px}.back strong{font-size:clamp(9px,2.4vw,13px);letter-spacing:1px}.back small{font-size:4px;letter-spacing:0}.back .tap{font-size:6px}.back:before{inset:5px;border-radius:15px 3px}.seal{box-shadow:0 3px 0 #142d1d,0 0 0 2px #233c28,0 0 0 3px #9c9759;border-width:1px}.collection .table{margin-top:0;min-height:500px}.collection .cards-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;max-width:420px}.collection .card h3{font-size:16px}.collection .card .desc{font-size:9px}.collection .stats{font-size:9px}.collection .rarity b{font-size:22px}.collection .head{font-size:9px}.collection .art{height:56%}.overlay{flex-direction:column;gap:20px;overflow:auto;padding-top:65px}.overlay .card{width:235px}.overlay .card h3{font-size:20px}.overlay .desc,.overlay .stats{font-size:10px}.detail h2{display:none}.detail p{font-size:12px;margin:5px 0}.primary,.secondary{padding:11px 17px;font-size:11px}.pack-caption{top:calc(50% + 135px)}.revealed-actions{gap:8px}.reveal-banner{top:20px;font-size:11px;letter-spacing:2px}.collection .arena{min-height:500px}.meta{font-size:9px;gap:8px}.empty-center strong{font-size:17px}.empty-center p{font-size:11px}}@media(max-width:370px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:290px}.table{min-height:1150px}.arena{min-height:1330px}.card h3{font-size:14px}.card .desc{font-size:8px}.stats{font-size:9px}.rarity b{font-size:21px}.back strong{font-size:14px}.back small{font-size:6px}}\n@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}.flash,.rays,.fx-canvas,.bloom,.shockwave{display:none!important}}\n@media (max-width:700px){.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:420px;gap:20px 16px}.card .head{font-size:8px}.rarity b{font-size:21px}.card h3{font-size:clamp(13px,3.8vw,17px)}.card .desc{font-size:clamp(8px,2.1vw,10px)}.stats{font-size:9px}.art{height:56%}.back strong{font-size:17px}.back small{font-size:7px}.back .tap{font-size:9px}.table:has(.cards-grid){padding-bottom:30px;min-height:660px}}\n\n.card{transition:transform .23s cubic-bezier(.16,.8,.25,1),box-shadow .2s,filter .25s;will-change:transform}.card.hovered:not(:disabled),.card:focus-visible:not(:disabled){z-index:18;box-shadow:0 0 0 2px #fff8db,0 0 0 5px var(--glow),0 0 35px var(--glow),0 32px 35px #000b;outline:none}.card.hovered:after{inset:0;transform:none;animation:none;background:radial-gradient(circle at var(--mx,50%) var(--my,40%),#fff8,transparent 48%);mix-blend-mode:soft-light}.back.hovered .seal{animation:emblemBeat 1.3s ease-in-out infinite;filter:drop-shadow(0 0 10px var(--glow))}.card.hovered .tap{color:#fff7d1;letter-spacing:2px}.cards-grid:has(.hovered) .card:not(.hovered):not(.pre-reveal):not(.reveal){filter:brightness(.7);box-shadow:0 12px 18px #0008}.select-corners{position:absolute;inset:5px;pointer-events:none;border:1px solid #fff3ba88;border-radius:7px;opacity:0;transition:.2s;z-index:6;background:linear-gradient(#fff0ad,#fff0ad) left top/15px 2px no-repeat,linear-gradient(#fff0ad,#fff0ad) left top/2px 15px no-repeat,linear-gradient(#fff0ad,#fff0ad) right bottom/15px 2px no-repeat,linear-gradient(#fff0ad,#fff0ad) right bottom/2px 15px no-repeat}.hovered .select-corners{opacity:1;inset:3px}.pre-reveal{z-index:22!important;animation:anticipation .72s ease-in forwards!important;box-shadow:0 0 0 3px #fff4b7,0 0 60px var(--glow)!important}.pre-reveal .seal{animation:emblemBreak .72s ease-in forwards}.reveal{animation:heroUnveil 1.15s cubic-bezier(.12,.72,.22,1) both!important;z-index:22!important}.reveal-dim .card:not(.pre-reveal):not(.reveal):not(.hero-selected){filter:brightness(.52) saturate(.7)}.hero-selected{z-index:22!important}.reveal-dim .scene-title{opacity:.35}.reveal-dim .summon-floor{filter:brightness(.5)}.table{transition:background .4s}.aura-column{position:absolute;width:180px;height:650px;pointer-events:none;z-index:20;background:linear-gradient(90deg,transparent,var(--glow),#fff8,var(--glow),transparent);mask-image:linear-gradient(transparent,#000 30% 70%,transparent);mix-blend-mode:screen;animation:lightColumn 1.6s ease-out forwards;transform:translate(-50%,-50%)}.rune-wheel{position:absolute;width:260px;height:260px;pointer-events:none;z-index:19;transform:translate(-50%,-50%);color:var(--glow);animation:runeWheel 1.6s ease-out forwards;filter:drop-shadow(0 0 9px var(--glow))}.rune-wheel svg{width:100%;height:100%}.radial-spikes{position:absolute;width:380px;height:380px;pointer-events:none;z-index:23;background:repeating-conic-gradient(transparent 0deg 17deg,var(--glow) 18deg 19deg,transparent 21deg 30deg);mask-image:radial-gradient(transparent 15%,#000 25%,transparent 65%);animation:spikeBurst 1.15s ease-out forwards}.impact-disc{position:absolute;width:80px;height:80px;border:5px solid #fff9d7;border-radius:50%;box-shadow:0 0 15px var(--glow),inset 0 0 15px var(--glow);z-index:24;pointer-events:none;animation:discBurst .9s ease-out forwards}.rarity-callout{position:absolute;z-index:35;pointer-events:none;transform:translate(-50%,-50%);text-align:center;font-size:25px;font-weight:900;font-family:Arial,'Microsoft YaHei',sans-serif;font-style:italic;color:#fff3c6;text-shadow:0 2px 0 #473127,0 0 10px var(--glow),0 0 25px var(--glow);animation:rarityCallout 1.8s forwards;white-space:nowrap;letter-spacing:2px}.rarity-callout small{display:block;font-size:10px;letter-spacing:5px;margin-top:5px;font-style:normal}.energy-vortex{position:absolute;width:500px;height:500px;left:50%;top:43%;margin:-250px 0 0 -250px;border-radius:50%;pointer-events:none;background:repeating-conic-gradient(from 0deg,transparent 0deg 46deg,#f5e5a16b 48deg 52deg,transparent 55deg 90deg);mask-image:radial-gradient(transparent 17%,#000 29%,transparent 68%);animation:energyVortex 1.7s ease-in forwards;z-index:3}.energy-ring{position:absolute;width:420px;height:420px;left:50%;top:43%;border:2px solid #d9dc8e;box-shadow:0 0 24px #dbdf9c,inset 0 0 15px #dbdf9c;border-radius:50%;pointer-events:none;z-index:3;animation:energyRing 1.6s ease-in forwards}.pack-fragment{position:absolute;pointer-events:none;width:180px;height:248px;z-index:23;filter:drop-shadow(0 0 12px #ffeb9b);animation:fragmentFly 1.25s ease-out forwards}.pack-fragment svg{width:100%;height:100%}.bloom{width:150px;height:150px;animation:bloom 1.2s ease-out forwards}.flash{animation:cinematicFlash 1.15s ease-out forwards}.rays{animation:rays 3.2s ease-out forwards}.ssr.reveal{box-shadow:0 0 0 3px #fff0b0,0 0 45px #ffd075,0 0 95px #edac5c88}.sr.reveal{box-shadow:0 0 0 2px #eddbff,0 0 40px #c995ff,0 0 70px #bb91f955}\n@keyframes emblemBeat{50%{transform:scale(1.055);filter:brightness(1.3) drop-shadow(0 0 14px var(--glow))}}@keyframes emblemBreak{65%{transform:scale(1.13);filter:brightness(2)}100%{transform:scale(1.3);filter:brightness(4)}}@keyframes anticipation{0%{transform:translateY(-12px) scale(1.04)}35%{transform:translateY(-25px) rotate(-3deg) scale(1.1);filter:brightness(1.2)}65%{transform:translateY(-25px) rotate(3deg) scale(1.11);filter:brightness(1.6)}85%{transform:translateY(-28px) rotate(-2deg) scale(1.13);filter:brightness(2)}100%{transform:translateY(-30px) rotateY(90deg) scale(1.15);filter:brightness(4)}}@keyframes heroUnveil{0%{transform:translateY(-30px) rotateY(-90deg) scale(1.15);filter:brightness(4)}35%{transform:translateY(-35px) rotateY(18deg) rotateZ(-2deg) scale(1.18);filter:brightness(1.7)}58%{transform:translateY(-25px) rotateY(-7deg) scale(1.14);filter:brightness(1.1)}80%{transform:translateY(-10px) scale(1.05)}100%{transform:none;filter:none}}@keyframes lightColumn{0%{opacity:0;transform:translate(-50%,-50%) scaleX(.05)}18%{opacity:.8;transform:translate(-50%,-50%) scaleX(.7)}100%{opacity:0;transform:translate(-50%,-50%) scaleX(1.3)}}@keyframes runeWheel{0%{opacity:0;transform:translate(-50%,-50%) rotate(-45deg) scale(.3)}25%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) rotate(55deg) scale(1.5)}}@keyframes spikeBurst{0%{opacity:1;transform:translate(-50%,-50%) scale(.25)}100%{opacity:0;transform:translate(-50%,-50%) rotate(20deg) scale(1.4)}}@keyframes discBurst{0%{opacity:1;transform:translate(-50%,-50%) scale(.25)}100%{opacity:0;transform:translate(-50%,-50%) scale(5);border-width:1px}}@keyframes rarityCallout{0%{opacity:0;transform:translate(-50%,-40%) scale(1.5);filter:blur(5px)}22%,65%{opacity:1;transform:translate(-50%,-50%) scale(1);filter:none}100%{opacity:0;transform:translate(-50%,-90%) scale(.95)}}@keyframes energyVortex{0%{opacity:0;transform:rotate(-90deg) scale(1.3)}40%{opacity:.9}100%{opacity:0;transform:rotate(160deg) scale(.15)}}@keyframes energyRing{0%{opacity:0;transform:translate(-50%,-50%) rotateX(50deg) scale(1.3)}35%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) rotateX(0) scale(.1)}}@keyframes cinematicFlash{0%{opacity:0}8%,16%{opacity:1}45%{opacity:.5}100%{opacity:0}}@keyframes fragmentFly{0%{opacity:1;transform:translate(0,0) rotate(0)}65%{opacity:.9}100%{opacity:0;transform:translate(var(--fx),var(--fy)) rotate(var(--fr)) scale(.4)}}\n@media(max-width:700px){.card.hovered:not(:disabled){box-shadow:0 0 0 2px #fff8db,0 0 20px var(--glow),0 15px 22px #0008}.rarity-callout{font-size:20px}.rune-wheel{width:210px;height:210px}.aura-column{width:130px;height:430px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}.energy-ring,.energy-vortex,.aura-column,.radial-spikes,.rune-wheel,.impact-disc,.pack-fragment,.rarity-callout{display:none!important}}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* DEVICE_CARDS_START */\nhtml{-webkit-text-size-adjust:100%;text-size-adjust:100%}body{min-width:320px}button{touch-action:manipulation;-webkit-tap-highlight-color:transparent}.heading>div,.detail,#big{min-width:0}.heading h1{overflow-wrap:anywhere}.overlay{height:100vh;height:100dvh;padding-left:max(22px,env(safe-area-inset-left));padding-right:max(22px,env(safe-area-inset-right));padding-bottom:max(25px,env(safe-area-inset-bottom));overscroll-behavior:contain;-webkit-overflow-scrolling:touch}.close{min-width:48px;min-height:48px;right:max(18px,env(safe-area-inset-right));top:max(16px,env(safe-area-inset-top));z-index:110}.detail p{overflow-wrap:anywhere}.embedded-cards>body>header{display:none}.embedded-cards main{padding-top:16px}.card,.pack-object{-webkit-user-select:none;user-select:none}.cards-grid{min-width:0}.cards-grid .card{min-width:0}#actions{flex-wrap:wrap}#actions button{min-height:46px}.tabs button{min-height:44px}\n@media(min-width:1440px){.cards-grid{gap:23px 20px;max-width:900px}.overlay{gap:55px}.overlay .card{width:min(330px,32vw)}}\n@media(min-width:701px) and (max-width:1180px){main{padding:18px 18px 24px}.heading{gap:16px}.heading h1{font-size:26px;line-height:1.4}.heading p{font-size:13px;line-height:1.7}.tabs{flex-shrink:0}.tabs button{font-size:13px;padding:11px 14px}.pile-zone{width:180px}.table{margin-left:180px;padding:28px 17px;min-height:690px}.arena{min-height:690px}.pile{left:10px;top:100px;transform:scale(.72);transform-origin:top left}.pile-title{left:18px;top:23px;font-size:12px;letter-spacing:1px}.pile-footer{left:18px;right:12px;bottom:25px;font-size:12px;line-height:1.8}.cards-grid{grid-template-columns:repeat(4,minmax(0,1fr));max-width:820px;gap:18px 12px;margin-top:42px}.scene-title{font-size:11px;letter-spacing:1.5px}.overlay{gap:28px;padding-top:65px;align-items:center}.overlay .card{width:clamp(240px,32vw,300px)}.detail{max-width:300px}.detail h2{font-size:24px}.detail p{font-size:14px;line-height:1.8}.detail button{min-height:46px}.collection .table{min-height:690px;margin-left:0}.collection .cards-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.meta{flex-wrap:wrap;gap:12px;font-size:11px}#actions{position:sticky;bottom:0;z-index:40;padding:12px 0 max(12px,env(safe-area-inset-bottom));background:linear-gradient(#102b23ed,#102b23);margin-bottom:0}}\n/* In portrait mode the unopened packs become a short shelf above the table. */\n@media(min-width:701px) and (max-width:1100px) and (orientation:portrait){.heading{align-items:flex-start;flex-direction:column;gap:14px}.heading h1{font-size:28px}.heading .tabs{align-self:flex-end}.pile-zone{left:0;top:0;bottom:auto;width:100%;height:150px;border-right:0;border-bottom:1px solid #b4b66c55;background:linear-gradient(90deg,#102b20ed,#24453077);overflow:hidden}.pile-title{top:13px;left:20px}.pile{top:44px;left:22px;transform:scale(.38);transform-origin:top left}.pile-footer{top:45px;left:auto;right:25px;bottom:auto;width:calc(100% - 220px);font-size:13px;line-height:1.8}.table{margin-left:0;margin-top:150px;min-height:690px;padding:30px 22px}.arena{min-height:840px}.cards-grid{max-width:850px;gap:20px 14px}.center-slot{margin-top:-35px}.collection .pile-zone{display:none}.collection .table{margin-top:0;min-height:690px}.collection .arena{min-height:690px}.overlay .card{width:285px}.overlay{gap:30px}}\n@media(max-width:700px){header{padding:16px;flex-wrap:wrap;gap:10px}main{padding:16px 12px}.heading{gap:14px}.heading h1{font-size:24px;line-height:1.4}.heading p{font-size:13px;line-height:1.7}.tabs{display:flex;gap:8px;flex-wrap:wrap}.tabs button{min-height:44px;font-size:13px}.pile-zone{height:150px}.pile-title{top:14px;left:18px;font-size:12px;letter-spacing:1px}.pile{top:43px;left:18px;transform:scale(.38)}.pile-footer{right:16px;top:45px;bottom:auto;width:calc(100% - 190px);font-size:11px;line-height:1.8}.table{margin-top:150px;min-height:780px;padding:30px 16px}.arena{min-height:930px}.cards-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:500px;gap:23px 18px;margin-top:40px}.table:has(.cards-grid){min-height:0;padding-top:35px;padding-bottom:44px}.arena:has(.cards-grid){min-height:0}.card{padding:6px;border-width:2px;border-radius:10px}.scene-title{font-size:11px;letter-spacing:1px}.collection .table{margin-top:0;min-height:480px}.collection .arena{min-height:480px}.collection .cards-grid{max-width:500px;gap:23px 18px}.overlay{flex-direction:column;justify-content:flex-start;align-items:center;gap:22px;padding:70px 20px 30px;overflow:auto}.overlay .card{width:clamp(200px,60vw,285px)}.detail{width:100%;max-width:420px;text-align:left}.detail h2{font-size:24px}.detail p{font-size:14px;line-height:1.8}.detail button{min-height:48px;width:100%}.close{position:fixed}.meta{flex-wrap:wrap;gap:10px;line-height:1.8}.help{line-height:1.8;font-size:11px}#actions{position:sticky;bottom:0;z-index:40;margin-bottom:0;background:linear-gradient(#102b23e8,#102b23);padding:12px 0 max(12px,env(safe-area-inset-bottom));gap:10px}#actions button{min-height:46px;flex:1 1 170px;font-size:13px}.scene-title{padding:0 12px}.center-slot{margin-top:-28px}}\n@media(max-width:450px){.pile-footer{width:calc(100% - 155px);font-size:10px}.pile{transform:scale(.33)}.cards-grid,.collection .cards-grid{gap:19px 12px}.card{padding:4px}.heading h1{font-size:22px}}\n@media(min-width:701px) and (max-width:1180px){.cards-grid .card h3{font-size:14px}.cards-grid .stats{font-size:10px}.cards-grid .rarity b{font-size:21px}}\n@media(hover:none),(pointer:coarse){.tabs button,.primary,.secondary,.text-button{min-height:44px}.pack-object{touch-action:manipulation}.card{touch-action:pan-y pinch-zoom}.card:active:not(:disabled){filter:brightness(1.12);box-shadow:0 0 0 2px #f4e4ac,0 0 25px var(--glow)}.center-slot .pack-object:active{filter:brightness(1.15) drop-shadow(0 14px 12px #0008)}.detail .primary{min-height:48px}}\n\n/* DEVICE_CARDS_END */\n\u003c/style>\u003cheader>\u003cdiv class=\"brand\">✺ 小松子的\u003cspan>秘密花园\u003c/span>\u003c/div>\u003cdiv class=\"version\">FOREST GUARD / VOL.01\u003c/div>\u003c/header>\u003cmain>\u003cdiv class=\"heading\">\u003cdiv>\u003cdiv class=\"eyebrow\">THE FOREST AWAITS ITS GUARDIANS\u003c/div>\u003ch1 id=\"title\">从卡包堆，唤醒你的植物战队。\u003c/h1>\u003cp id=\"subtitle\">先选一包，让它飞到石台上；再点一次，开启八位伙伴的冒险。\u003c/p>\u003c/div>\u003cnav class=\"tabs\">\u003cbutton class=\"active\" id=\"packTab\">森林补给\u003c/button>\u003cbutton id=\"albumTab\">收藏册 \u003cspan id=\"count\">0 / 8\u003c/span>\u003c/button>\u003c/nav>\u003c/div>\u003csection class=\"arena\" id=\"arena\">\u003cdiv class=\"landscape\">\u003csvg viewBox=\"0 0 1400 900\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\">\u003cdefs>\u003clinearGradient id=\"sky\" x2=\"0\" y2=\"1\">\u003cstop stop-color=\"#315646\"/>\u003cstop offset=\".5\" stop-color=\"#608460\"/>\u003cstop offset=\"1\" stop-color=\"#1b3828\"/>\u003c/linearGradient>\u003cradialGradient id=\"sun\">\u003cstop stop-color=\"#f2df9f\" stop-opacity=\".7\"/>\u003cstop offset=\"1\" stop-color=\"#d7d891\" stop-opacity=\"0\"/>\u003c/radialGradient>\u003clinearGradient id=\"trunk\">\u003cstop stop-color=\"#152d23\"/>\u003cstop offset=\".45\" stop-color=\"#364e31\"/>\u003cstop offset=\"1\" stop-color=\"#152c23\"/>\u003c/linearGradient>\u003c/defs>\u003crect width=\"1400\" height=\"900\" fill=\"url(#sky)\"/>\u003ccircle cx=\"880\" cy=\"240\" r=\"390\" fill=\"url(#sun)\"/>\u003cg fill=\"#203f30\" opacity=\".45\">\u003cpath d=\"M240 0h35l-9 660h-55ZM430 0h40l-8 610h-50ZM1060 0h45l20 650h-70ZM1180 0h25l50 670h-55Z\"/>\u003cpath d=\"M0 480Q200 400 430 500Q720 380 960 460Q1200 380 1400 470V900H0Z\"/>\u003c/g>\u003cg fill=\"url(#trunk)\" stroke=\"#142c21\" stroke-width=\"6\">\u003cpath d=\"M0 0H170L139 190L160 390L125 640L230 740L160 765L74 701L0 770ZM1400 0H1280L1260 200L1280 410L1235 675L1140 750L1240 738L1320 690L1400 770Z\"/>\u003cpath d=\"M50 240L370 50L390 0L300 30L74 136ZM1330 200L1110 70L1020 0H1110L1360 100Z\"/>\u003c/g>\u003cg fill=\"#1b3929\">\u003cellipse cx=\"100\" cy=\"30\" rx=\"340\" ry=\"115\"/>\u003cellipse cx=\"390\" cy=\"0\" rx=\"230\" ry=\"95\"/>\u003cellipse cx=\"1280\" cy=\"15\" rx=\"320\" ry=\"110\"/>\u003cellipse cx=\"1070\" cy=\"0\" rx=\"190\" ry=\"75\"/>\u003c/g>\u003cg fill=\"none\" stroke=\"#66834a\" stroke-width=\"8\" opacity=\".7\">\u003cpath d=\"M111 130Q210 290 124 450M1302 95Q1180 240 1277 470\"/>\u003c/g>\u003cpath d=\"M0 710Q250 630 520 730Q950 610 1400 710V900H0Z\" fill=\"#244a30\"/>\u003cg fill=\"#496839\" stroke=\"#172f23\" stroke-width=\"3\">\u003cellipse cx=\"320\" cy=\"750\" rx=\"100\" ry=\"25\"/>\u003cellipse cx=\"1100\" cy=\"770\" rx=\"125\" ry=\"30\"/>\u003c/g>\u003cg fill=\"#598144\">\u003cpath d=\"M0 900V770L60 825L80 725L112 830L170 745L160 860L250 800L200 900ZM1400 900V750L1340 825L1320 725L1288 830L1230 745L1240 860L1150 800L1200 900Z\"/>\u003c/g>\u003cg fill=\"#d4c286\">\u003cpath d=\"M190 740Q200 700 227 740Z\"/>\u003cpath d=\"M1170 780Q1185 740 1200 780Z\"/>\u003c/g>\u003cg fill=\"#dce8a4\" opacity=\".65\">\u003ccircle cx=\"385\" cy=\"360\" r=\"2\"/>\u003ccircle cx=\"1080\" cy=\"310\" r=\"2\"/>\u003ccircle cx=\"715\" cy=\"190\" r=\"2\"/>\u003ccircle cx=\"1150\" cy=\"570\" r=\"2\"/>\u003ccircle cx=\"555\" cy=\"510\" r=\"2\"/>\u003c/g>\u003c/svg>\u003c/div>\u003cdiv class=\"forest-light\">\u003c/div>\u003caside class=\"pile-zone\">\u003cdiv class=\"pile-title\">\u003cstrong id=\"stockCount\">10\u003c/strong> 包森林守卫\u003c/div>\u003cdiv class=\"pile\" id=\"pile\">\u003c/div>\u003cdiv class=\"pile-footer\" id=\"pileFooter\">点击堆中的一包，把它移到中央石台。\u003cbr>\u003cbutton class=\"text-button\" id=\"restock\">补满 10 包 · 演示\u003c/button>\u003c/div>\u003c/aside>\u003cdiv class=\"table\" id=\"table\">\u003c/div>\u003c/section>\u003cdiv class=\"actions\" id=\"actions\">\u003c/div>\u003cdiv class=\"meta\">\u003cspan>第一弹 · \u003cb>森林守卫\u003c/b> / 每包 8 张植物卡\u003c/span>\u003cspan id=\"status\">10 包待开启 · 点击左侧卡包开始\u003c/span>\u003cspan>免费体验 / 固定样卡 / 无概率抽取\u003c/span>\u003c/div>\u003cdiv class=\"help\">本地演示 · 收藏保存在当前浏览器 · 角色立绘为矢量样稿\u003c/div>\u003c/main>\u003cdiv class=\"overlay\" id=\"overlay\" hidden>\u003cbutton class=\"close\" aria-label=\"关闭鉴赏\">×\u003c/button>\u003cdiv id=\"big\">\u003c/div>\u003cdiv class=\"detail\">\u003cdiv class=\"eyebrow\" id=\"detailRarity\">\u003c/div>\u003ch2 id=\"detailName\">\u003c/h2>\u003cp id=\"detailStory\">\u003c/p>\u003cp style=\"color:#d5dba6;margin:16px 0\">移动鼠标或拖动卡面，查看闪卡光泽。\u003c/p>\u003cbutton class=\"primary\" id=\"skill\">✦ 展示植物技能\u003c/button>\u003c/div>\u003c/div>\u003cscript>\nconst CARD_STORAGE=window.parent!==window?(typeof SONGZI_CARD_CONTEXT==='object'?'songzi-earned-cards-'+SONGZI_CARD_CONTEXT.profileId+'-'+SONGZI_CARD_CONTEXT.scope:'songzi-unbound-cards'):'songzi-cards';\n\nconst $=s=>document.querySelector(s);\nconst leaves='\u003cpath d=\"M96 170Q22 113 30 159Q52 192 96 182M99 171Q172 121 167 162Q145 190 99 182\" fill=\"#66ad38\" stroke=\"#173c2b\" stroke-width=\"5\"/>';\nfunction art(type){let body=type===0?'\u003cpath d=\"M99 165V110\" stroke=\"#20452b\" stroke-width=\"18\"/>\u003cpath d=\"M99 166V110\" stroke=\"#6cb83b\" stroke-width=\"10\"/>\u003cpath d=\"M106 53Q147 44 157 71L164 84L149 109Q109 118 78 104Q44 88 59 62Q72 43 106 53\" fill=\"#8cce44\" stroke=\"#173c2b\" stroke-width=\"5\"/>\u003cellipse cx=\"156\" cy=\"85\" rx=\"16\" ry=\"24\" fill=\"#4b8f32\" stroke=\"#173c2b\" stroke-width=\"5\"/>\u003cellipse cx=\"159\" cy=\"85\" rx=\"7\" ry=\"13\" fill=\"#193e2a\"/>\u003cellipse cx=\"98\" cy=\"70\" rx=\"6\" ry=\"10\" fill=\"#193e2a\"/>\u003ccircle cx=\"99\" cy=\"67\" r=\"2\" fill=\"white\"/>\u003cpath d=\"M55 57Q61 21 102 26Q129 28 139 51Z\" fill=\"#b17b38\" stroke=\"#173c2b\" stroke-width=\"5\"/>\u003cpath d=\"M62 48l13-13m4 17 15-22m4 21 14-17m3 18 10-9\" stroke=\"#704e29\" stroke-width=\"4\"/>\u003cpath d=\"M93 26q-5-17 10-19\" fill=\"none\" stroke=\"#173c2b\" stroke-width=\"6\"/>':type===1?'\u003cpath d=\"M77 167L63 184M125 168l15 16\" stroke=\"#183e45\" stroke-width=\"9\"/>\u003cpath d=\"M48 102L65 55L104 37L145 59L157 105L132 155L72 157Z\" fill=\"#8bdcec\" stroke=\"#183e45\" stroke-width=\"5\"/>\u003cpath d=\"M65 55L86 91L104 37L119 93L145 59M48 102L86 91L72 157L104 118L132 155L119 93L157 105\" fill=\"#bdffff55\" stroke=\"#d8ffff\" stroke-width=\"3\"/>\u003cellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"9\" fill=\"#193e45\"/>\u003cellipse cx=\"123\" cy=\"108\" rx=\"5\" ry=\"9\" fill=\"#193e45\"/>\u003cpath d=\"M92 130q13 11 25-2\" fill=\"none\" stroke=\"#193e45\" stroke-width=\"4\"/>\u003cpath d=\"M83 42L75 19L99 27L111 10L124 31L145 27L137 53\" fill=\"#d0ffff\" stroke=\"#183e45\" stroke-width=\"4\"/>':'\u003cpath d=\"M61 140Q14 96 38 45Q76 70 81 112M135 139Q188 93 164 40Q124 68 119 113\" fill=\"#f59036\" stroke=\"#493129\" stroke-width=\"5\"/>\u003cpath d=\"M54 112L47 75L75 102M144 111l13-38-31 28\" fill=\"#ffe38a\"/>\u003cpath d=\"M80 174L83 135M123 172l-4-36\" stroke=\"#493129\" stroke-width=\"10\"/>\u003cpath d=\"M72 143Q47 108 74 80L70 50L94 64Q133 46 149 80L137 123L152 146L119 143L102 158Z\" fill=\"#f9af48\" stroke=\"#493129\" stroke-width=\"5\"/>\u003cpath d=\"M79 85L68 59L95 68M118 62l17-24 5 34\" fill=\"#ffdb81\" stroke=\"#493129\" stroke-width=\"4\"/>\u003cpath d=\"M106 90l18-5\" stroke=\"#493129\" stroke-width=\"5\"/>\u003ccircle cx=\"116\" cy=\"96\" r=\"5\" fill=\"#493129\"/>\u003cpath d=\"M136 103l14 1-9 11\" fill=\"#493129\"/>\u003cpath d=\"M71 129l-15 16 22-1\" fill=\"#ffcf69\" stroke=\"#493129\" stroke-width=\"4\"/>';\nreturn '\u003csvg viewBox=\"0 0 200 200\" aria-hidden=\"true\">\u003ccircle cx=\"100\" cy=\"95\" r=\"74\" fill=\"#ffffff16\"/>\u003cpath d=\"M10 185Q100 160 190 185\" fill=\"none\" stroke=\"#ffffff30\" stroke-width=\"2\"/>'+leaves+body+'\u003c/svg>'}\nconst data=[{name:'松果豌豆射手',rarity:'R · 森林伙伴',cls:'',desc:'小小松果，大大勇气。',stat:'连发松果',power:'120',story:'戴上最喜欢的松果头盔，守好花园的第一道防线。它是小松子最忠诚的冒险伙伴。',color:'#b4e65b'},{name:'极光冰西瓜',rarity:'SR · 极地来客',cls:'rare',desc:'把北极的光，带进花园。',stat:'极光冰封',power:'240',story:'冰晶里藏着一整片极光。释放技能时，清亮的冰屑会随着寒风散落。',color:'#a5efff'},{name:'焰翼火龙草',rarity:'SSR · 闪耀珍藏',cls:'legend',desc:'每一簇火焰，都是勇气的形状。',stat:'焰翼绽放',power:'360',story:'张开金色的焰翼，照亮森林深处。平时喜欢晒太阳，战斗时是可靠的守护者。',color:'#ffd16c'}];\n\nconst forestEmblem='\u003csvg viewBox=\"0 0 120 120\" aria-hidden=\"true\">\u003cg stroke=\"#27462a\" stroke-width=\"3\" stroke-linejoin=\"round\">\u003cpath d=\"M59 96C20 84 13 54 27 24M61 96C100 84 107 54 93 24\" fill=\"none\" stroke=\"#e0cc7c\" stroke-width=\"4\"/>\u003cpath d=\"M30 78Q8 72 22 61Q36 61 36 76M25 58Q8 45 24 39Q38 43 31 58M90 78Q112 72 98 61Q84 61 84 76M95 58Q112 45 96 39Q82 43 89 58\" fill=\"#a6c65e\"/>\u003cpath d=\"M42 52Q40 37 60 33Q81 37 78 52L74 79L60 92L46 79Z\" fill=\"#d2a65e\"/>\u003cpath d=\"M41 52L79 52L75 40Q60 27 45 40Z\" fill=\"#805732\"/>\u003cpath d=\"M48 47L55 37M60 48L66 36M72 47L76 41M47 60l26 15M47 74l27-15\" fill=\"none\" stroke=\"#986b3b\"/>\u003cpath d=\"M59 33V24Q71 16 75 25Q72 34 59 32\" fill=\"#9bc953\"/>\u003cpath d=\"M60 6l3 8 9 1-7 5 1 8-6-5-7 5 2-8-7-5 9-1Z\" fill=\"#fff0ad\"/>\u003c/g>\u003c/svg>';\n\ndata[0].rarity='R · 稀有';data[0].color='#8ccfff';data[1].rarity='SR · 超稀有';data[1].color='#d4a4ff';data[2].rarity='SSR · 传说';\ndata.push(\n{name:'晨光向日葵',rarity:'R · 稀有',color:'#8ccfff',desc:'把第一束阳光送给你。',stat:'晨光补给',power:'100',story:'它在森林最早醒来，把清晨收集的阳光分给每一位伙伴。'},\n{name:'铁壁坚果',rarity:'R · 稀有',color:'#8ccfff',desc:'有我在，别害怕。',stat:'坚韧壁垒',power:'180',story:'厚厚的果壳上挂着勇气徽章。看起来严肃，其实最喜欢听小松子讲笑话。'},\n{name:'月影小喷菇',rarity:'SR · 超稀有',color:'#d4a4ff',desc:'夜晚也有小小守护者。',stat:'月光孢子',power:'210',story:'戴着星点菇帽的小小守卫，能在夜色里看见隐藏的足迹。'},\n{name:'荆棘仙人掌',rarity:'R · 稀有',color:'#8ccfff',desc:'每一根刺都瞄得准。',stat:'荆棘齐射',power:'160',story:'从沙地赶来的神射手，已经在森林里找到了新的好朋友。'},\n{name:'黄金双子樱桃',rarity:'SSR · 传说',color:'#ffd075',desc:'双倍默契，闪耀出击。',stat:'双星绽放',power:'380',story:'两颗金色樱桃永远一起行动，碰拳的瞬间，会绽放像太阳一样的光芒。'});\nfunction rank(i){return data[i].rarity.split(' · ')[0]}\nfunction newArt(i){if(i\u003c3)return art(i);let shape='';const eyes='\u003cellipse cx=\"84\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/>\u003cellipse cx=\"114\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/>\u003cpath d=\"M88 122q12 10 23-2\" fill=\"none\" stroke=\"#223d2b\" stroke-width=\"4\" stroke-linecap=\"round\"/>';\nif(i===3){let petals='';for(let k=0;k\u003c10;k++)petals+='\u003cellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate('+k*36+' 100 95)\"/>';shape='\u003cpath d=\"M100 170V115\" stroke=\"#3b6e30\" stroke-width=\"13\"/>'+leaves+petals+'\u003ccircle cx=\"100\" cy=\"95\" r=\"42\" fill=\"#9e672e\" stroke=\"#4e4727\" stroke-width=\"4\"/>\u003ccircle cx=\"100\" cy=\"94\" r=\"34\" fill=\"#f1b75a\"/>'+eyes;}\nif(i===4)shape=leaves+'\u003cpath d=\"M56 164Q33 113 59 55Q99 18 139 55Q164 113 144 164Q100 186 56 164Z\" fill=\"#b28248\" stroke=\"#4c4127\" stroke-width=\"5\"/>\u003cpath d=\"M65 59Q48 111 64 152M81 46Q66 98 79 167M130 58Q151 100 138 152\" fill=\"none\" stroke=\"#d6b16b\" stroke-width=\"5\"/>'+eyes+'\u003cpath d=\"M133 138l8 12 15 2-11 10 2 15-13-7-13 7 3-15-11-10 15-2Z\" fill=\"#ffe295\" stroke=\"#71582c\" stroke-width=\"3\"/>';\nif(i===5)shape='\u003cpath d=\"M65 170L71 100H126L139 170Q99 190 65 170Z\" fill=\"#d6c8eb\" stroke=\"#3b3353\" stroke-width=\"5\"/>'+eyes+'\u003cpath d=\"M30 100Q30 35 97 25Q164 29 174 99Q102 128 30 100Z\" fill=\"#7961bb\" stroke=\"#3b3353\" stroke-width=\"5\"/>\u003cpath d=\"M42 92Q99 112 161 91\" fill=\"none\" stroke=\"#b899e3\" stroke-width=\"5\"/>\u003ccircle cx=\"69\" cy=\"65\" r=\"10\" fill=\"#d2b2f0\"/>\u003ccircle cx=\"130\" cy=\"65\" r=\"13\" fill=\"#d2b2f0\"/>\u003cpath d=\"M101 40l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z\" fill=\"#fff1b3\"/>';\nif(i===6)shape=leaves+'\u003cpath d=\"M76 173V62Q77 35 100 36Q125 35 126 62V173Z\" fill=\"#6faa61\" stroke=\"#284c32\" stroke-width=\"5\"/>\u003cpath d=\"M78 124H50Q36 124 36 107V84Q37 74 48 74Q59 74 59 86V101H77M125 106H146V77Q146 63 157 63Q170 63 170 78V115Q170 130 125 130\" fill=\"#6faa61\" stroke=\"#284c32\" stroke-width=\"5\"/>\u003cpath d=\"M89 51V91M89 130v27M113 52V90M113 134v23\" stroke=\"#a2d18a\" stroke-width=\"4\"/>'+eyes+'\u003cpath d=\"M76 62l-12-6m61 13 12-8M36 95l-10-2m135-17 10-5m-45 81 10 4M76 144l-10 5\" stroke=\"#e3dfaa\" stroke-width=\"3\"/>';\nif(i===7)shape='\u003cpath d=\"M68 96Q70 35 119 26Q147 53 145 102M119 26Q95 10 81 30Q97 42 119 26Z\" fill=\"none\" stroke=\"#547239\" stroke-width=\"7\"/>\u003cpath d=\"M119 26Q148 7 164 35Q140 43 119 26Z\" fill=\"#9abb53\" stroke=\"#496237\" stroke-width=\"4\"/>\u003ccircle cx=\"64\" cy=\"126\" r=\"40\" fill=\"#f1b73e\" stroke=\"#76502b\" stroke-width=\"5\"/>\u003ccircle cx=\"139\" cy=\"127\" r=\"40\" fill=\"#f4c65a\" stroke=\"#76502b\" stroke-width=\"5\"/>\u003cpath d=\"M38 115Q43 98 57 98M114 115Q120 100 133 101\" stroke=\"#fff0ad\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\u003cg fill=\"#61452b\">\u003cellipse cx=\"59\" cy=\"128\" rx=\"4\" ry=\"7\"/>\u003cellipse cx=\"77\" cy=\"128\" rx=\"4\" ry=\"7\"/>\u003cellipse cx=\"127\" cy=\"128\" rx=\"4\" ry=\"7\"/>\u003cellipse cx=\"145\" cy=\"128\" rx=\"4\" ry=\"7\"/>\u003c/g>\u003cpath d=\"M58 143q9 7 17 0M127 143q9 7 17 0\" stroke=\"#61452b\" stroke-width=\"3\" fill=\"none\"/>';\nreturn '\u003csvg viewBox=\"0 0 200 200\" aria-hidden=\"true\">\u003ccircle cx=\"100\" cy=\"95\" r=\"75\" fill=\"#ffffff18\"/>'+shape+'\u003c/svg>'}\nfunction packSVG(number){return '\u003csvg viewBox=\"0 0 180 248\" aria-hidden=\"true\">\u003cdefs>\u003clinearGradient id=\"leather'+number+'\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\".7\">\u003cstop stop-color=\"#9bab6e\"/>\u003cstop offset=\".12\" stop-color=\"#4a6740\"/>\u003cstop offset=\".6\" stop-color=\"#263f2b\"/>\u003cstop offset=\".85\" stop-color=\"#3f5935\"/>\u003cstop offset=\"1\" stop-color=\"#9da46b\"/>\u003c/linearGradient>\u003clinearGradient id=\"trim'+number+'\" x2=\".3\" y2=\"1\">\u003cstop stop-color=\"#f1dda1\"/>\u003cstop offset=\".5\" stop-color=\"#b19252\"/>\u003cstop offset=\"1\" stop-color=\"#6d5930\"/>\u003c/linearGradient>\u003clinearGradient id=\"fold'+number+'\" x2=\"0\" y2=\"1\">\u003cstop stop-color=\"#efe0a2\"/>\u003cstop offset=\".2\" stop-color=\"#9f9a5f\"/>\u003cstop offset=\"1\" stop-color=\"#4f673d\"/>\u003c/linearGradient>\u003cpattern id=\"grain'+number+'\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\">\u003cpath d=\"M1 2l2 1m2 3 1-2M0 7l2-1\" stroke=\"#d9d998\" stroke-opacity=\".12\" stroke-width=\".6\"/>\u003c/pattern>\u003c/defs>\u003cpath d=\"M5 3L175 3L178 15L175 233L178 242L5 245L2 232L5 16Z\" fill=\"url(#leather'+number+')\" stroke=\"#aa9156\" stroke-width=\"2\"/>\u003cpath d=\"M6 4H174L170 22H10Z\" fill=\"url(#fold'+number+')\"/>\u003cpath d=\"M7 228L172 226L176 242L5 244Z\" fill=\"#8c8950\"/>\u003cpath d=\"M10 21L170 21L168 225L11 228Z\" fill=\"url(#grain'+number+')\"/>\u003cpath d=\"M11 24L166 24L164 222L14 225Z\" fill=\"none\" stroke=\"#c9b477\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\u003cpath d=\"M7 5L16 22L13 227L6 242M174 5L166 22L164 226L175 241\" fill=\"none\" stroke=\"#eee0a0\" stroke-opacity=\".4\"/>\u003cpath d=\"M18 31L40 31L18 53ZM162 31L140 31L162 53ZM18 217L40 217L18 195ZM162 217L140 217L162 195Z\" fill=\"url(#trim'+number+')\" stroke=\"#756238\"/>\u003cpath d=\"M24 72Q48 60 90 64Q131 60 157 72L153 179Q90 201 28 179Z\" fill=\"#1b3427\" stroke=\"#ad9e61\" stroke-width=\"2\"/>\u003cpath d=\"M30 78Q90 62 151 78L148 173Q90 191 34 173Z\" fill=\"#496140\" stroke=\"#7c8e54\"/>\u003csvg x=\"39\" y=\"70\" width=\"103\" height=\"103\" viewBox=\"0 0 120 120\">'+forestEmblem.replace(/\u003c\\/?svg[^>]*>/g,'')+'\u003c/svg>\u003ctext x=\"90\" y=\"197\" text-anchor=\"middle\" fill=\"#f3e0aa\" font-size=\"18\" font-weight=\"900\" font-family=\"Microsoft YaHei,sans-serif\">森林守卫\u003c/text>\u003ctext x=\"90\" y=\"211\" text-anchor=\"middle\" fill=\"#c9cf9d\" font-size=\"6.5\" letter-spacing=\"1.4\">FOREST GUARD · 8 CARDS\u003c/text>\u003ctext x=\"90\" y=\"14\" text-anchor=\"middle\" fill=\"#263a25\" font-size=\"7\" font-weight=\"900\" letter-spacing=\"2\">VOL.01 / '+String(number+1).padStart(2,'0')+'\u003c/text>\u003cpath d=\"M12 7v8m5-8v8m5-8v8m5-8v8m5-8v8m5-8v8m106-8v8m5-8v8m5-8v8m5-8v8m5-8v8M14 232v7m5-7v7m5-7v7m5-7v7m5-7v7m109-7v7m5-7v7m5-7v7m5-7v7m5-7v7\" stroke=\"#e8d795\" stroke-opacity=\".5\" stroke-width=\"1\"/>\u003c/svg>'}\nfunction packHTML(id,extra=''){return '\u003cbutton class=\"pack-object '+extra+'\" data-pack=\"'+id+'\" aria-label=\"森林守卫第'+(id+1)+'包，内含八张卡\">\u003cdiv class=\"face p-back\">\u003c/div>\u003cdiv class=\"face p-right\">\u003c/div>\u003cdiv class=\"face p-left\">\u003c/div>\u003cdiv class=\"face p-top\">\u003c/div>\u003cdiv class=\"face p-bottom\">\u003c/div>\u003cdiv class=\"face p-front\">'+packSVG(id)+'\u003c/div>\u003cdiv class=\"pack-crack\">\u003c/div>\u003c/button>'}\nfunction cardHTML(i,back=false){const d=data[i],r=rank(i),cls=r==='SSR'?'ssr':r==='SR'?'sr':'';if(back)return '\u003cbutton class=\"card back\" data-card=\"'+i+'\" style=\"--glow:'+d.color+'\" aria-label=\"第'+(i+1)+'张，点击翻卡\">\u003cdiv class=\"back-pattern\">\u003c/div>\u003cdiv class=\"seal\">'+forestEmblem+'\u003c/div>\u003cstrong>森林守卫\u003c/strong>\u003csmall>FOREST GUARD · VOL.01\u003c/small>\u003cdiv class=\"tap\">✦ 点击唤醒 ✦\u003c/div>\u003c/button>';return '\u003cbutton class=\"card '+cls+'\" data-card=\"'+i+'\" style=\"--glow:'+d.color+'\" aria-label=\"'+d.name+'，'+d.rarity+'，点击鉴赏\">\u003cdiv class=\"head\">\u003cspan class=\"rarity\">\u003cb>'+r+'\u003c/b>\u003csmall>'+d.rarity.split(' · ')[1]+'\u003c/small>\u003c/span>\u003cspan>01 / '+String(i+1).padStart(3,'0')+'\u003c/span>\u003c/div>\u003cdiv class=\"art\">'+newArt(i)+'\u003c/div>\u003ch3>'+d.name+'\u003c/h3>\u003cdiv class=\"desc\">'+d.desc+'\u003c/div>\u003cdiv class=\"stats\">\u003cspan>✦ '+d.stat+'\u003c/span>\u003cspan>⚡ '+d.power+'\u003c/span>\u003c/div>\u003c/button>'}\nlet stock=Array.from({length:10},(_,i)=>i),selected=null,mode='idle',scene=0,owned=[],revealed=new Set(),pending=new Set(),autoReveal=false,activeCard=0,view='packs';\ntry{const saved=JSON.parse(localStorage.getItem(CARD_STORAGE)||'[]');if(Array.isArray(saved))owned=[...new Set(saved.filter(i=>Number.isInteger(i)&&i>=0&&i\u003cdata.length))]}catch{}\nconst reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;\nfunction later(fn,delay,token=scene){setTimeout(()=>{if(token===scene)fn()},delay)}\nfunction updateCount(){const current=[0,4,8,9,10,11,12,13,15,16,17];$('#count').textContent=owned.filter(id=>current.includes(id)).length+' / 11';$('#stockCount').textContent=stock.length;$('#status').textContent=stock.length+' 包待开启 · 每包8项奖励';}\nfunction sound(level=0){try{const a=new(window.AudioContext||window.webkitAudioContext)();const t=a.currentTime;[0,4,7,12,16].slice(0,level+3).forEach((n,k)=>{const o=a.createOscillator(),g=a.createGain();o.type='triangle';o.connect(g);g.connect(a.destination);o.frequency.value=220*Math.pow(2,n/12);g.gain.setValueAtTime(0,t+k*.08);g.gain.linearRampToValueAtTime(.065,t+k*.08+.018);g.gain.exponentialRampToValueAtTime(.001,t+k*.08+.5);o.start(t+k*.08);o.stop(t+k*.08+.55)});setTimeout(()=>a.close(),1600)}catch{}}\nfunction effect(className,parent=$('#table'),duration=1800){const el=document.createElement('div');el.className=className;parent.appendChild(el);setTimeout(()=>el.remove(),duration);return el}\nfunction particles(color,amount=90,point){if(reduced())return;const parent=$('#table'),r=parent.getBoundingClientRect(),canvas=document.createElement('canvas');canvas.className='fx-canvas';const dpr=Math.min(devicePixelRatio||1,2);canvas.width=r.width*dpr;canvas.height=r.height*dpr;parent.appendChild(canvas);const ctx=canvas.getContext('2d');if(!ctx){canvas.remove();return}ctx.scale(dpr,dpr);const x=point?.x??r.width/2,y=point?.y??r.height*.43,ps=Array.from({length:amount},()=>{const a=Math.random()*Math.PI*2,v=100+Math.random()*450;return {vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:.7+Math.random()*.8}}),start=performance.now();function frame(now){const t=(now-start)/1000;ctx.clearRect(0,0,r.width,r.height);ctx.strokeStyle=color;ctx.shadowColor=color;ctx.shadowBlur=8;ctx.lineWidth=1.5;for(const p of ps){ctx.globalAlpha=Math.max(0,1-t/p.life);const xx=x+p.vx*t,yy=y+p.vy*t+65*t*t;ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(xx-p.vx*.025,yy-p.vy*.025);ctx.stroke()}if(t\u003c1.7&&canvas.isConnected)requestAnimationFrame(frame);else canvas.remove()}requestAnimationFrame(frame)}\nfunction drawPile(){updateCount();const pile=$('#pile');const visible=stock.filter(id=>id!==selected).slice(-10);pile.innerHTML='\u003cdiv class=\"pile-base\">\u003c/div>'+visible.map((id,k)=>packHTML(id)).join('');pile.querySelectorAll('.pack-object').forEach((el,k)=>{el.style.setProperty('--px',(k%3)*3+'px');el.style.setProperty('--py',k*13+'px');el.style.setProperty('--rot',(-7+(k%3)*2)+'deg');el.style.setProperty('--z',k+1);el.style.setProperty('--shade',.68+k/Math.max(1,visible.length-1)*.32);el.disabled=['flying','charging','cards'].includes(mode);el.onclick=()=>selectPack(+el.dataset.pack,el)});if(!visible.length&&stock.length===0)pile.innerHTML='\u003cp style=\"padding-top:70px;color:#d9daa9\">补给已全部开启\u003c/p>';}\nfunction floor(){return '\u003cdiv class=\"summon-floor\">\u003c/div>'}\nfunction idleTable(){return floor()+'\u003cdiv class=\"scene-title\">森林深处 · 守卫者的召唤石台\u003c/div>\u003cdiv class=\"empty-center\">\u003cdiv class=\"empty-sigil\">✦\u003c/div>\u003cstrong>'+(stock.length?'选择一包，召唤伙伴':'所有伙伴，已经归队')+'\u003c/strong>\u003cp>'+(stock.length?'点击左侧堆叠的卡包，让它飞到这里。':'补满演示包，可以再次体验开包。')+'\u003c/p>\u003c/div>'}\nfunction showPacks(){scene++;spotlightCount=0;view='packs';mode='idle';selected=null;pending.clear();autoReveal=false;$('#arena').classList.remove('collection');$('#table').classList.remove('impact','charging','reveal-dim');$('#packTab').classList.add('active');$('#albumTab').classList.remove('active');$('#title').textContent='从卡包堆，唤醒你的植物战队。';$('#subtitle').textContent='先选一包，让它飞到石台上；再点一次，开启八位伙伴的冒险。';$('#table').innerHTML=idleTable();$('#actions').innerHTML='';drawPile();}\nfunction selectPack(id,source){if(!['idle','ready'].includes(mode)||!stock.includes(id))return;const rect=source.getBoundingClientRect();scene++;const token=scene;selected=id;mode='flying';$('#table').innerHTML=floor()+'\u003cdiv class=\"scene-title\">森林守卫 · 第 '+String(id+1).padStart(2,'0')+' 包\u003c/div>\u003cdiv class=\"center-slot\">'+packHTML(id)+'\u003c/div>\u003cdiv class=\"pack-caption\">\u003cb>卡包抵达中\u003c/b>\u003cspan>放稳后，再点击卡包开启\u003c/span>\u003c/div>\u003cdiv class=\"charge-ring\">\u003c/div>';drawPile();$('#actions').innerHTML='';const el=$('.center-slot .pack-object'),target=el.getBoundingClientRect(),dx=rect.left+rect.width/2-target.left-target.width/2,dy=rect.top+rect.height/2-target.top-target.height/2;const finish=()=>{if(token!==scene)return;mode='ready';$('.center-slot').classList.add('ready');$('.pack-caption').innerHTML='\u003cb>点击卡包 · 开启八张植物卡\u003c/b>\u003cspan>森林守卫 / 每包 8 张\u003c/span>';el.onclick=openPack;drawPile();$('#status').textContent='第 '+(id+1)+' 包已就位 · 再次点击中央卡包开启';};if(reduced()||!el.animate){finish();return}const animation=el.animate([{transform:'translate('+dx+'px,'+dy+'px) rotateZ(-15deg) rotateY(-25deg) scale(.92)',filter:'drop-shadow(0 8px 6px #0008)'},{offset:.62,transform:'translate(0,-45px) rotateZ(5deg) rotateY(12deg) scale(1.06)',filter:'drop-shadow(0 40px 20px #0008)'},{transform:'rotateX(-8deg) rotateY(-16deg) rotateZ(-3deg)',filter:'drop-shadow(0 24px 18px #0009)'}],{duration:850,easing:'cubic-bezier(.2,.7,.25,1)',fill:'none'});animation.onfinish=finish;sound(0)}\nfunction openPack(){if(mode!=='ready'||selected===null)return;mode='charging';const token=scene,id=selected;$('.center-slot').classList.remove('ready');$('.center-slot .pack-object').disabled=true;$('#table').classList.add('charging');$('.pack-caption').innerHTML='\u003cb>阳光能量汇聚中…\u003c/b>\u003cspan>森林纹章正在苏醒\u003c/span>';drawPile();effect('energy-vortex',undefined,1900);effect('energy-ring',undefined,1900);gatherEnergy();sound(0);later(()=>sound(1),700,token);later(()=>{packShatter();effect('flash');effect('rays',undefined,3200);effect('shockwave');$('#table').classList.add('impact');particles('#ffe5a3',135);sound(2)},1450,token);later(()=>{stock=stock.filter(x=>x!==id);selected=null;mode='cards';showEight();drawPile()},2450,token)}\nfunction showEight(){revealed.clear();pending.clear();autoReveal=false;$('#table').classList.remove('charging','impact','reveal-dim');$('#table').innerHTML=floor()+'\u003cdiv class=\"scene-title\">森林守卫 · 八位伙伴等待唤醒\u003c/div>\u003cdiv class=\"cards-grid\">'+data.map((d,i)=>cardHTML(i,true)).join('')+'\u003c/div>\u003cdiv class=\"counter\" id=\"revealCount\">已揭晓 0 / '+data.length+'\u003c/div>';const grid=$('.cards-grid'),r=grid.getBoundingClientRect();document.querySelectorAll('#table .card').forEach((el,i)=>{let er=el.getBoundingClientRect();el.style.setProperty('--dx',(r.left+r.width/2-er.left-er.width/2)+'px');el.style.setProperty('--dy',(r.top+r.height/2-er.top-er.height/2)+'px');el.style.setProperty('--rot',(i-(data.length-1)/2)*12+'deg');el.style.setProperty('--delay',i*.09+'s');el.classList.add('arrival');el.disabled=true;later(()=>{el.disabled=false;el.classList.remove('arrival');el.onclick=()=>revealCard(i);bindSelection(el)},900+i*90)});$('#actions').innerHTML='\u003cbutton class=\"primary\" id=\"revealAll\">✦ 依次揭晓 '+data.length+' 项奖励\u003c/button>\u003cbutton class=\"secondary\" id=\"returnPile\">返回卡包堆\u003c/button>';$('#revealAll').onclick=revealAll;$('#returnPile').onclick=showPacks;particles('#e1dfa2',70);effect('rays',undefined,2400);}\nfunction bloomAt(el,color){const r=el.getBoundingClientRect(),tr=$('#table').getBoundingClientRect(),x=r.left+r.width/2-tr.left,y=r.top+r.height/2-tr.top;for(const name of ['bloom','reveal-ring']){const fx=effect(name,undefined,1100);fx.style.cssText='left:'+x+'px;top:'+y+'px;--glow:'+color}particles(color,rank(+el.dataset.card)==='SSR'?85:45,{x,y})}\nfunction revealCard(i){if(mode!=='cards')return;if(revealed.has(i)){inspect(i);return}if(pending.has(i))return;const el=$('#table [data-card=\"'+i+'\"]');if(!el||el.disabled)return;pending.add(i);el.onpointermove=null;el.onpointerleave=null;el.onfocus=null;el.onblur=null;el.style.transform='';el.classList.remove('hovered');el.classList.add('pre-reveal');el.disabled=true;const token=scene;sound(rank(i)==='SSR'?2:1);later(()=>{revealSpectacle(el,i);bloomAt(el,data[i].color);el.outerHTML=cardHTML(i);const front=$('#table [data-card=\"'+i+'\"]');front.classList.add('reveal');front.disabled=true;revealed.add(i);pending.delete(i);if(!rewardPresentation&&!owned.includes(i)){owned.push(i);owned.sort((a,b)=>a-b);try{localStorage.setItem(CARD_STORAGE,JSON.stringify(owned))}catch{}}updateCount();$('#revealCount').textContent='已揭晓 '+revealed.size+' / '+data.length;if(rank(i)==='SSR'){const banner=effect('reveal-banner',undefined,1600);banner.style.setProperty('--glow',data[i].color);banner.textContent='SSR 传说伙伴 · '+data[i].name;$('#table').classList.remove('impact');void $('#table').offsetWidth;$('#table').classList.add('impact')}later(()=>{front.classList.remove('reveal');front.disabled=false;front.onclick=()=>inspect(i);tilt(front)},1200,token);if(revealed.size===data.length){autoReveal=false;$('#actions').innerHTML='\u003cbutton class=\"primary\" id=\"nextPack\">继续选择下一包\u003c/button>\u003cbutton class=\"secondary\" id=\"collection\">查看植物收藏\u003c/button>';$('#nextPack').onclick=showPacks;$('#collection').onclick=showAlbum;$('#status').textContent='本包 '+data.length+' 项奖励全部揭晓 · 剩余 '+stock.length+' 包';}},720,token)}\nfunction revealAll(){if(mode!=='cards'||autoReveal)return;autoReveal=true;const b=$('#revealAll');if(b)b.disabled=true;const token=scene;function step(){if(mode!=='cards')return;const i=data.findIndex((_,i)=>!revealed.has(i)&&!pending.has(i));if(i\u003c0){autoReveal=false;return}const el=$('#table [data-card=\"'+i+'\"]');if(el?.disabled){later(step,150,token);return}revealCard(i);later(step,1850,token)}step()}\nfunction tilt(el){el.onpointermove=e=>{if(el.disabled||e.pointerType==='touch')return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(800px) rotateX('+(-y*13)+'deg) rotateY('+(x*17)+'deg)'};el.onpointerleave=()=>el.style.transform='';}\nfunction showAlbum(){scene++;spotlightCount=0;view='album';mode='album';selected=null;pending.clear();autoReveal=false;$('#arena').classList.add('collection');$('#table').classList.remove('charging','impact');$('#packTab').classList.remove('active');$('#albumTab').classList.add('active');$('#title').textContent='森林守卫，植物伙伴的收藏册。';$('#subtitle').textContent='每一位伙伴，都有自己的勇气与故事。';$('#table').innerHTML='\u003cdiv class=\"scene-title\">VOL.01 / FOREST GUARD / '+owned.filter(id=>[0,4,8,9,10,11,12,13,15,16,17].includes(id)).length+' OF 11'+'\u003c/div>'+(owned.length?'\u003cdiv class=\"cards-grid\">'+owned.filter(i=>i!==3).map(i=>cardHTML(i)).join('')+'\u003c/div>':'\u003cdiv class=\"empty-center\">\u003cdiv class=\"empty-sigil\">✦\u003c/div>\u003cstrong>第一位伙伴还在卡包里\u003c/strong>\u003cp>回到森林补给，开启你的第一包。\u003c/p>\u003c/div>');document.querySelectorAll('#table .card').forEach(el=>{el.onclick=()=>inspect(+el.dataset.card);tilt(el)});$('#actions').innerHTML='\u003cbutton class=\"primary\" id=\"backPacks\">回到卡包堆\u003c/button>';$('#backPacks').onclick=showPacks;updateCount()}\nfunction inspect(i){activeCard=i;$('#big').innerHTML=cardHTML(i);$('#overlay').hidden=false;$('#detailName').textContent=data[i].name;$('#detailRarity').textContent=data[i].rarity+' / 森林守卫';$('#detailStory').textContent=data[i].story;tilt($('#big .card'));$('.close').focus()}\nfunction closeDetail(){$('#overlay').hidden=true;const target=$('#table [data-card=\"'+activeCard+'\"]');if(target)target.focus()}\n$('.close').onclick=closeDetail;$('#overlay').onclick=e=>{if(e.target===$('#overlay'))closeDetail()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail()});$('#skill').onclick=()=>{const el=$('#big .card');el.classList.remove('skill-anim');void el.offsetWidth;el.classList.add('skill-anim');sound(2)};$('#restock').onclick=()=>{stock=Array.from({length:10},(_,i)=>i);showPacks()};$('#packTab').onclick=showPacks;$('#albumTab').onclick=showAlbum;\nlet spotlightCount=0;\nfunction bindSelection(el){let hovered=false;const enter=(event)=>{if(event?.pointerType==='touch')return;if(el.disabled||pending.has(+el.dataset.card))return;hovered=true;el.classList.add('hovered');el.style.transform='perspective(900px) translateY(-18px) scale(1.075) rotateX(5deg)';if(!el.querySelector('.select-corners')){const corners=document.createElement('span');corners.className='select-corners';el.appendChild(corners)}};const leave=()=>{if(el.disabled)return;hovered=false;el.classList.remove('hovered');el.style.transform=''};el.onpointerenter=enter;el.onpointermove=e=>{if(el.disabled||e.pointerType==='touch')return;if(!hovered)enter();const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');el.style.transform='perspective(900px) translateY(-18px) scale(1.075) rotateX('+((.5-y)*15)+'deg) rotateY('+((x-.5)*18)+'deg)'};el.onpointerleave=leave;el.onpointercancel=leave;el.onpointerup=e=>{if(e.pointerType==='touch')leave()};el.onfocus=enter;el.onblur=leave;el.onpointerdown=()=>{if(!el.disabled)el.classList.add('hovered')}}\nfunction revealSpectacle(el,i){const r=el.getBoundingClientRect(),tr=$('#table').getBoundingClientRect(),x=r.left+r.width/2-tr.left,y=r.top+r.height/2-tr.top,color=data[i].color,tier=rank(i),token=scene;spotlightCount++;$('#table').classList.add('reveal-dim');const shapes=tier==='SSR'?['aura-column','rune-wheel','radial-spikes','impact-disc']:tier==='SR'?['rune-wheel','radial-spikes','impact-disc']:['radial-spikes','impact-disc'];for(const type of shapes){const fx=effect(type,undefined,1900);fx.style.cssText='left:'+x+'px;top:'+y+'px;--glow:'+color;if(type==='rune-wheel')fx.innerHTML='\u003csvg viewBox=\"0 0 260 260\">\u003cg fill=\"none\" stroke=\"currentColor\">\u003ccircle cx=\"130\" cy=\"130\" r=\"113\" stroke-width=\"2\"/>\u003ccircle cx=\"130\" cy=\"130\" r=\"100\" stroke-width=\"1\" stroke-dasharray=\"4 13\"/>\u003ccircle cx=\"130\" cy=\"130\" r=\"80\" stroke-width=\"2\" stroke-dasharray=\"30 10\"/>\u003cpath d=\"M130 8L145 31H115ZM252 130L229 145V115ZM130 252L115 229H145ZM8 130L31 115V145Z\" stroke-width=\"2\"/>\u003cpath d=\"M50 50L210 210M50 210L210 50\" stroke-opacity=\".35\"/>\u003c/g>\u003c/svg>'}const tag=effect('rarity-callout',undefined,1900);tag.style.cssText='left:'+x+'px;top:'+(y+r.height*.45)+'px;--glow:'+color;tag.innerHTML=tier+'\u003csmall>'+data[i].rarity.split(' · ')[1]+'\u003c/small>';later(()=>{spotlightCount=Math.max(0,spotlightCount-1);if(!spotlightCount)$('#table').classList.remove('reveal-dim')},1700,token)}\nfunction gatherEnergy(){if(reduced())return;const parent=$('#table'),r=parent.getBoundingClientRect(),canvas=document.createElement('canvas');canvas.className='fx-canvas';const d=Math.min(devicePixelRatio||1,2);canvas.width=r.width*d;canvas.height=r.height*d;parent.appendChild(canvas);const ctx=canvas.getContext('2d');if(!ctx){canvas.remove();return}ctx.scale(d,d);const pts=Array.from({length:75},()=>({angle:Math.random()*Math.PI*2,radius:140+Math.random()*180,delay:Math.random()*.65})),start=performance.now();function frame(now){const t=(now-start)/1000;ctx.clearRect(0,0,r.width,r.height);for(const p of pts){let u=Math.max(0,Math.min(1,(t-p.delay)/.85)),rr=p.radius*(1-u),a=p.angle+u*2.5,x=r.width/2+Math.cos(a)*rr,y=r.height*.43+Math.sin(a)*rr*.8;ctx.globalAlpha=Math.sin(u*Math.PI);ctx.strokeStyle='#f6e8a5';ctx.shadowColor='#e7e7a3';ctx.shadowBlur=10;ctx.lineWidth=1+u*2;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(a-.15)*9,y+Math.sin(a-.15)*9);ctx.stroke()}if(t\u003c1.6&&canvas.isConnected)requestAnimationFrame(frame);else canvas.remove()}requestAnimationFrame(frame)}\nfunction packShatter(){const el=$('.center-slot .pack-object');if(!el||reduced())return;const r=el.getBoundingClientRect(),tr=$('#table').getBoundingClientRect();for(let i=0;i\u003c6;i++){const fx=effect('pack-fragment',undefined,1500),left=i%2*50,top=Math.floor(i/2)*33.34;fx.innerHTML=packSVG(selected??0);fx.style.cssText='left:'+(r.left-tr.left)+'px;top:'+(r.top-tr.top)+'px;clip-path:polygon('+left+'% '+top+'%,'+(left+50)+'% '+top+'%,'+(left+50)+'% '+(top+33.34)+'%,'+left+'% '+(top+33.34)+'%);--fx:'+((i%2?1:-1)*(150+Math.random()*160))+'px;--fy:'+((Math.floor(i/2)-1)*160-70)+'px;--fr:'+((i%2?1:-1)*(45+Math.random()*90))+'deg'}particles('#fff2b4',180)}\n\nshowPacks();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* PLANT_ART_START */\nconst IMPORTED_PLANT_ART={\"0\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:0\\\"/>\u003c/svg>\",\"3\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:1\\\"/>\u003c/svg>\",\"4\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:2\\\"/>\u003c/svg>\",\"8\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:3\\\"/>\u003c/svg>\",\"9\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:4\\\"/>\u003c/svg>\",\"10\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:5\\\"/>\u003c/svg>\",\"11\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:6\\\"/>\u003c/svg>\",\"12\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:7\\\"/>\u003c/svg>\",\"13\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:8\\\"/>\u003c/svg>\",\"14\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:9\\\"/>\u003c/svg>\",\"15\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:10\\\"/>\u003c/svg>\",\"16\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:11\\\"/>\u003c/svg>\",\"17\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-plant\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"8\\\" y=\\\"5\\\" width=\\\"184\\\" height=\\\"190\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:12\\\"/>\u003c/svg>\",\"18\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-costume\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"7\\\" y=\\\"4\\\" width=\\\"186\\\" height=\\\"192\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:13\\\"/>\u003c/svg>\",\"19\":\"\u003csvg viewBox=\\\"0 0 200 200\\\" class=\\\"imported-costume\\\" aria-hidden=\\\"true\\\">\u003cimage x=\\\"7\\\" y=\\\"4\\\" width=\\\"186\\\" height=\\\"192\\\" preserveAspectRatio=\\\"xMidYMax meet\\\" href=\\\"songzi-raster:14\\\"/>\u003c/svg>\"};\n// Display records are indexed by stable game IDs; rarity is enforced by the reward engine.\r\nconst artCharacters=[['土豆地雷','R','悄悄准备，勇敢出发。'],['回旋镖射手','SR','每一次归来，都有新收获。'],['冰冻生菜','R','静下心，想一想。'],['噬碑藤','R','找到藏起来的小秘密。'],['菜问','SSR','每一步都积攒力量。'],['双重射手','SR','和伙伴一起，再试一次。'],['双胞向日葵','R','双倍阳光，陪你成长。'],['卷心菜投手','R','抬头看看，办法就在前方。'],['寒冰射手','SSR','冷静思考，稳稳前进。'],['火炬树桩','SR','点亮今天的冒险。']];\r\nfor(let n=0;n\u003cartCharacters.length;n++){const [name,rarity,story]=artCharacters[n],id=n+8;data[id]={name,rarity:rarity+' · '+(rarity==='SSR'?'传说':rarity==='SR'?'超稀有':'稀有'),color:rarity==='SSR'?'#ffd075':rarity==='SR'?'#d4a4ff':'#8ccfff',desc:story,stat:'森林伙伴',power:'✦',story};}\r\nconst ACTIVE_CARD_IDS=[0,4,8,9,10,11,12,13,15,16,17];\r\n\nconst CARD_THEME_ART={\"id\":\"forest-guard-v01\",\"version\":1,\"packSVG\":\"\u003csvg viewBox=\\\"0 0 180 248\\\" aria-hidden=\\\"true\\\">\u003cimage width=\\\"180\\\" height=\\\"248\\\" preserveAspectRatio=\\\"xMidYMid meet\\\" href=\\\"songzi-raster:15\\\"/>\u003c/svg>\",\"back\":\"songzi-raster:16\"};const CARD_ROOM_BACKGROUND=\"songzi-raster:17\";\npackSVG=function(){return CARD_THEME_ART.packSVG};\nif(typeof cardHTML==='function'){const paintedCard=cardHTML;cardHTML=function(i,back=false){if(!back)return paintedCard(i,back);return '\u003cbutton class=\"card back\" data-card=\"'+i+'\" style=\"--glow:'+data[i].color+'\" aria-label=\"第'+(i+1)+'张，点击翻卡\">\u003cimg class=\"theme-card-back\" src=\"'+CARD_THEME_ART.back+'\" alt=\"森林守卫统一卡背\" draggable=\"false\">\u003c/button>'};}\nconst themeLegacyArt=newArt;newArt=function(id){return IMPORTED_PLANT_ART[id]||themeLegacyArt(id)};\nif(typeof document!=='undefined'){const cardArtStyle=document.createElement('style');cardArtStyle.textContent=\".landscape{background-image:var(--card-room);background-position:center;background-size:cover}.landscape>svg{display:none}.landscape:after{background:linear-gradient(#e9a5430d,#4c30134d)}\\n.arena{border:4px solid #8d5c32;box-shadow:inset 0 0 0 3px #f2cd83,0 7px 0 #533d27;background:#b57e45}\\n.pile-shelf{background:linear-gradient(#ae7442ee,#80532eee);border:3px solid #e0b171;box-shadow:inset 0 0 0 2px #654022,0 6px #5d4028}\\n.scene-title{background:#fff4d7dd;color:#674724;border:2px solid #c5a161;border-radius:16px;text-shadow:none;padding:8px 20px}\\n.primary{background:linear-gradient(#fff67a,#ffca23,#e99719);color:#4b3219;border:2px solid #91601e;box-shadow:inset 0 3px #ffffd7,0 5px #67491f;border-radius:22px}\\n.secondary{background:linear-gradient(#fff1c5,#debc7c);color:#5b4126;border:2px solid #9d7341;border-radius:18px}.card .art{background:radial-gradient(ellipse at 50% 40%,#fbffca,#a2cf70 70%,#53793b)}\\n.card .art svg{overflow:visible}.card .rarity{font-weight:900;letter-spacing:1px}.card:hover .art svg{filter:drop-shadow(0 0 7px #fff6a888)}\\n@media(hover:none){.card:hover .art svg{filter:none}}\\n\\n/* The delivered card back is identical for every hidden reward. */\\n.card.back{padding:0;border:0;background:transparent;box-shadow:0 10px 16px #32241d66;overflow:hidden}\\n.card.back:before,.card.back:after{display:none}.theme-card-back{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none}.card.back .tap{position:absolute;bottom:8%;left:12%;right:12%;font-size:11px;color:#315326;background:#fff7d9df;padding:5px;border-radius:12px;letter-spacing:1px}\\n.p-front{filter:drop-shadow(0 7px 5px #17392066)}.p-right,.p-left{background:linear-gradient(90deg,#167c30,#9edc63,#1b8b3c)!important}.p-top,.p-bottom{background:linear-gradient(#c2ed84,#248d3a)!important}\\n.landscape{z-index:0!important;background:none}.landscape>svg{display:none}.room-background{display:block;width:100%;height:100%;object-fit:contain;object-position:center;pointer-events:none}.arena{background:linear-gradient(#a46a3d,#c38d52);isolation:isolate}.forest-light{z-index:1;opacity:.25}.arena:after{display:none}\\n.room-mascot{position:absolute;right:4%;bottom:18%;width:13%;pointer-events:none;z-index:2}.room-mascot svg{display:block;width:100%;height:auto}\\n.embedded-cards,.embedded-cards body{height:100%;min-height:0;overflow:hidden;background:#bb854e}\\n.embedded-cards body{margin:0;min-width:0}.embedded-cards body>header,.embedded-cards .heading,.embedded-cards .meta,.embedded-cards .help{display:none!important}\\n.embedded-cards main{position:relative;width:100%;max-width:none;height:100vh;height:100dvh;margin:0;padding:0;overflow:hidden}\\n.embedded-cards .arena{position:absolute;inset:0;height:100%;min-height:0;margin:0;border:0;border-radius:0;box-shadow:none}\\n.embedded-cards .pile-zone{position:absolute;left:3%;top:11%;bottom:10%;width:24%;height:auto;display:block;background:none;border:0;padding:0;z-index:3}\\n.embedded-cards .pile-title{top:5px;left:5%;font-size:12px;color:#fff5ce;background:#76502edd;padding:8px 13px;border-radius:14px;letter-spacing:0}.embedded-cards .pile-title strong{font-size:21px}\\n.embedded-cards .pile{top:65px;left:8%;width:180px;height:365px;transform-origin:top left;transform:scale(.85)}\\n.embedded-cards .pile-footer{bottom:2px;left:5%;right:5%;font-size:11px;color:#fff0cc;background:#78512ac7;padding:8px;border-radius:12px}.embedded-cards .pile-base{display:none}\\n.embedded-cards .table{position:absolute;inset:0;margin:0;width:100%;height:100%;min-height:0;padding:10px 26px 65px;z-index:2;box-sizing:border-box}\\n.embedded-cards .scene-title,.embedded-cards .summon-floor{display:none}\\n.embedded-cards .center-slot{position:absolute;left:50%;top:var(--room-plinth-y,71%);width:180px;height:248px;transform:translate(-50%,-100%);margin:0;z-index:4}\\n.embedded-cards .center-slot .pack-object{width:180px;height:248px}\\n.embedded-cards .empty-center{position:absolute;left:34%;right:22%;top:calc(var(--room-plinth-y,71%) - 130px);margin:0;padding:15px 20px;background:#fff4ceeb;color:#614724;border:2px solid #c5a16c;border-radius:20px;box-shadow:0 4px #79563144}\\n.embedded-cards .empty-sigil{display:none}.embedded-cards .empty-center strong{font-size:21px;letter-spacing:1px}.embedded-cards .empty-center p{font-size:13px;color:#806540;line-height:1.7}\\n.embedded-cards .pack-caption{top:calc(var(--room-plinth-y,71%) + 24px);left:32%;right:22%;padding:8px 12px;background:#fff0c7e8;border-radius:16px;border:1px solid #ad814b}.embedded-cards .pack-caption b{font-size:15px;color:#61451e;letter-spacing:1px}.embedded-cards .pack-caption span{color:#80623a;font-size:12px;margin-top:4px}\\n.embedded-cards .actions{position:absolute;left:27%;right:4%;bottom:10px;z-index:10;margin:0;gap:9px}.embedded-cards .actions>button{min-height:44px;font-size:14px;padding:10px 18px}\\n.embedded-cards .arena:has(.cards-grid) .pile-zone,.embedded-cards .arena:has(.cards-grid) .room-mascot{display:none}\\n.embedded-cards .cards-grid{grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));width:min(94%,850px);height:calc(100% - 50px);max-width:850px;gap:10px 14px;margin:0 auto;align-items:center;justify-items:center}\\n.embedded-cards .cards-grid .card{width:auto;height:100%;max-width:100%;aspect-ratio:.68;justify-self:center}.embedded-cards .card h3{font-size:14px}.embedded-cards .card .desc{font-size:10px}.embedded-cards .card .stats{font-size:10px}\\n.embedded-cards .collection .table{padding:18px 20px 65px;overflow-y:auto;overscroll-behavior:contain}.embedded-cards .collection .cards-grid{height:auto;grid-template-rows:none;align-items:start}.embedded-cards .collection .cards-grid .card{width:100%;height:auto}.embedded-cards .counter{bottom:4px;background:#fff4d7dd;color:#4d6533;padding:4px 12px;border-radius:14px}\\n@media(max-width:1100px){.embedded-cards .pile{transform:scale(.72);left:2%}.embedded-cards .room-mascot{right:3%;width:15%;bottom:20%}.embedded-cards .pile-footer{font-size:10px}.embedded-cards .empty-center{left:31%;right:20%;padding:12px}.embedded-cards .empty-center strong{font-size:18px}.embedded-cards .empty-center p{font-size:11px}}\\n@media(max-width:700px){.embedded-cards .pile-zone{left:2%;top:10%;width:26%;bottom:16%}.embedded-cards .pile{transform:scale(.48);top:65px;left:1%}.embedded-cards .pile-title{font-size:10px;padding:6px}.embedded-cards .pile-title strong{font-size:16px}.embedded-cards .pile-footer{font-size:9px;padding:5px}.embedded-cards .center-slot{width:140px;height:193px}.embedded-cards .center-slot .pack-object{width:140px;height:193px}.embedded-cards .pack-caption{left:29%;right:14%;top:calc(var(--room-plinth-y,71%) + 16px)}.embedded-cards .pack-caption b{font-size:13px}.embedded-cards .pack-caption span{font-size:10px}.embedded-cards .room-mascot{right:1%;width:19%;bottom:18%}.embedded-cards .empty-center{left:29%;right:13%;top:calc(var(--room-plinth-y,71%) - 110px);padding:10px}.embedded-cards .empty-center strong{font-size:15px}.embedded-cards .empty-center p{font-size:10px}.embedded-cards .actions{left:4%;right:4%;bottom:10px}.embedded-cards .actions>button{font-size:12px;padding:9px 12px}.embedded-cards .cards-grid{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none;height:auto;max-height:100%;overflow-y:auto;align-items:start;padding:8px 0 15px;width:90%}.embedded-cards .cards-grid .card{height:auto;width:100%}.embedded-cards .table{padding:8px 10px 72px}.card.back .tap{font-size:10px}}\\n.embedded-cards .pile-footer{display:none}\\r\\n\\n/* ID specificity intentionally overrides the older sticky #actions rule. */\\n.embedded-cards #actions{position:absolute;top:auto;left:0;right:0;bottom:0;min-height:60px;height:auto;max-height:74px;margin:0;padding:8px 12px;background:transparent;box-shadow:none;z-index:12;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:nowrap;box-sizing:border-box}\\n.embedded-cards #actions:empty{display:none}.embedded-cards #actions>button{flex:0 1 auto;min-height:44px;margin:0}\\n.embedded-cards .table{margin-top:0;padding-top:28px;padding-bottom:82px}.embedded-cards .cards-grid{height:calc(100% - 22px);margin:0 auto;overflow:visible;gap:16px}\\n.card.back{overflow:visible}.theme-card-back{border-radius:15px}.card.back .tap{display:none}\\n.card.back.hovered,.card.back:focus-visible{z-index:9;box-shadow:0 0 0 2px var(--glow),0 0 20px 5px var(--glow),0 0 42px var(--glow)!important;box-shadow:0 0 0 2px var(--glow),0 0 20px 5px var(--glow),0 0 50px 8px color-mix(in srgb,var(--glow) 60%,transparent)!important}\\n.card.back.hovered .theme-card-back,.card.back:focus-visible .theme-card-back{filter:brightness(1.12) drop-shadow(0 0 10px var(--glow));transition:filter .18s}\\n.card.back .select-corners{z-index:3}.card.back.pre-reveal{box-shadow:0 0 25px 8px var(--glow)!important}\\n.rarity-flash,.rarity-shockwave,.rarity-starburst,.rarity-sparks{position:absolute;pointer-events:none;z-index:28;transform:translate(-50%,-50%)}\\n.rarity-flash{width:230px;height:230px;border-radius:50%;background:radial-gradient(circle,#fff 0 5%,var(--glow) 18%,transparent 68%);mix-blend-mode:screen;animation:rarityFlash .75s ease-out both}\\n.rarity-shockwave{width:100px;height:100px;border:7px solid var(--glow);border-radius:50%;box-shadow:0 0 16px var(--glow),inset 0 0 12px #fff7;animation:rarityShock 1.05s cubic-bezier(.12,.6,.2,1) both}\\n.rarity-shockwave.second{border-width:2px;animation-delay:110ms}.rarity-starburst{width:350px;height:350px;background:repeating-conic-gradient(from 8deg,transparent 0deg 14deg,var(--glow) 15deg 18deg,transparent 19deg 36deg);mask-image:radial-gradient(circle,transparent 12%,#000 25%,transparent 70%);animation:rarityStar 1.15s ease-out both;mix-blend-mode:screen}\\n.rarity-sparks{width:1px;height:1px}.rarity-sparks i{position:absolute;display:block;width:4px;height:24px;border-radius:50%;background:#fff8d5;box-shadow:0 0 9px 4px var(--glow);transform-origin:50% 0;animation:raritySpark .95s ease-out both;animation-delay:var(--delay)}\\n@keyframes rarityFlash{0%{opacity:0;transform:translate(-50%,-50%) scale(.1)}18%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) scale(2)}}\\n@keyframes rarityShock{0%{opacity:1;transform:translate(-50%,-50%) scale(.2)}100%{opacity:0;transform:translate(-50%,-50%) scale(calc(4 * var(--blast)))}}\\n@keyframes rarityStar{0%{opacity:0;transform:translate(-50%,-50%) rotate(-12deg) scale(.3)}20%{opacity:.9}100%{opacity:0;transform:translate(-50%,-50%) rotate(30deg) scale(1.7)}}\\n@keyframes raritySpark{0%{opacity:0;transform:rotate(var(--angle)) translateY(0) scale(.3)}15%{opacity:1}100%{opacity:0;transform:rotate(var(--angle)) translateY(calc(-1 * var(--length))) scale(.3)}}\\n.room-mascot{pointer-events:auto;cursor:pointer;transform-origin:50% 92%}.mascot-idle{animation:mascotSway 5s ease-in-out infinite}.mascot-greet{animation:mascotHello .9s ease-in-out!important}\\n@keyframes mascotSway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}@keyframes mascotHello{25%{transform:translateY(-9px) rotate(-4deg)}55%{transform:translateY(-3px) rotate(4deg)}100%{transform:none}}\\n@media(max-width:700px){.embedded-cards #actions{padding:8px;gap:7px}.embedded-cards #actions>button{font-size:12px;padding:9px 11px;min-width:0}.embedded-cards .table{padding:25px 15px 82px}.embedded-cards .cards-grid{height:auto;max-height:100%;overflow-y:auto;overflow-x:hidden;padding:15px 10px;gap:18px}.rarity-starburst{width:260px;height:260px}}\\n@media(prefers-reduced-motion:reduce){.rarity-flash,.rarity-shockwave,.rarity-starburst,.rarity-sparks{display:none}.mascot-idle,.mascot-greet{animation:none!important}.card.back.hovered .theme-card-back{transition:none}}\\n.embedded-cards .pile-zone{inset:0 auto 0 2%;width:27%;height:100%;pointer-events:none;background:none}\\n.embedded-cards .pile{top:calc(var(--room-plinth-y,71%) - 170px);left:8%;height:270px;transform:scale(.8);pointer-events:auto}\\n.embedded-cards .pile-title{top:auto;bottom:15px;left:10%;pointer-events:none}\\n@media(max-width:1100px){.embedded-cards .pile{top:calc(var(--room-plinth-y,71%) - 140px);transform:scale(.65);left:4%}}\\n@media(max-width:700px){.embedded-cards .pile{top:calc(var(--room-plinth-y,71%) - 105px);transform:scale(.48);left:0}.embedded-cards .pile-title{font-size:10px;bottom:70px;left:2%}}\\r\\n/* Four-item packs occupy one clear row; collection layout remains independent. */\\n.embedded-cards .table:has(.cards-grid>.card:nth-child(4):last-child):not(.collection .table) .cards-grid{grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:1fr;max-width:1000px;height:min(100%,360px);align-self:center;align-items:center}\\n.embedded-cards .table:has(.cards-grid>.card:nth-child(4):last-child):not(.collection .table){display:flex;align-items:center;justify-content:center}\\n@media(max-width:700px){.embedded-cards .table:has(.cards-grid>.card:nth-child(4):last-child):not(.collection .table) .cards-grid{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));height:100%;max-width:440px;overflow:visible}.embedded-cards .table:has(.cards-grid>.card:nth-child(4):last-child):not(.collection .table) .card{height:100%;width:auto;max-width:100%}}\\r\\n\";document.head.appendChild(cardArtStyle)}\n// This room is shared by selection, pack opening, card reveal and collection.\r\nif(typeof document!=='undefined'){\r\nconst landscape=document.querySelector('.landscape');if(landscape){landscape.innerHTML='\u003cimg class=\"room-background\" src=\"'+CARD_ROOM_BACKGROUND+'\" alt=\"\" draggable=\"false\">';landscape.style.backgroundImage='none'}\r\nconst arena=document.querySelector('#arena'); // Global companion belongs to the outer game shell.\r\nfunction fitCardRoom(){const el=document.querySelector('#arena');if(!el?.getBoundingClientRect)return;const r=el.getBoundingClientRect(),scale=Math.min(r.width/1672,r.height/941),h=941*scale,y=(r.height-h)/2+h*.71;el.style.setProperty('--room-plinth-y',y+'px')}\r\nwindow.fitCardRoom=fitCardRoom;window.addEventListener?.('resize',fitCardRoom);if(typeof ResizeObserver!=='undefined'&&arena){const roomResizeObserver=new ResizeObserver(fitCardRoom);roomResizeObserver.observe(arena)}fitCardRoom();\r\n}\r\n\nif(typeof drawPile==='function'){const stackedPile=drawPile;drawPile=function(){stackedPile();const pile=$('#pile');const packs=pile?.querySelectorAll?.('.pack-object')||[];packs.forEach((el,k)=>{const center=(packs.length-1)/2;el.style.setProperty('--px',k*9+'px');el.style.setProperty('--py',Math.abs(k-center)*4+'px');el.style.setProperty('--rot',((k-center)*24/Math.max(1,packs.length-1))+'deg')})};}\r\n// Keep the existing selection lift, tilt, reveal timing and saved result protocol.\r\nif(typeof revealSpectacle==='function'){\r\nconst earlierRevealSpectacle=revealSpectacle;\r\nrevealSpectacle=function(el,i){earlierRevealSpectacle(el,i);if(reduced())return;const tier=rank(i);if(!['SR','SSR'].includes(tier))return;const box=el.getBoundingClientRect(),table=$('#table').getBoundingClientRect(),x=box.left+box.width/2-table.left,y=box.top+box.height/2-table.top,color=data[i].color;\r\nfor(const type of ['rarity-flash','rarity-shockwave','rarity-shockwave second','rarity-starburst']){const fx=effect(type,undefined,1500);fx.style.cssText='left:'+x+'px;top:'+y+'px;--glow:'+color+';--blast:'+(tier==='SSR'?1.25:1)+';';}\r\nconst streaks=effect('rarity-sparks',undefined,1500);streaks.style.cssText='left:'+x+'px;top:'+y+'px;--glow:'+color;const count=tier==='SSR'?28:18;streaks.innerHTML=Array.from({length:count},(_,n)=>'\u003ci style=\"--angle:'+(360*n/count)+'deg;--length:'+(n%3===0?145:105)+'px;--delay:'+(n%4)*22+'ms\">\u003c/i>').join('');\r\nparticles(color,tier==='SSR'?150:95,{x,y});\r\n};\r\n}\r\n// Latest mascot preview: quiet single-image sway and an optional short greeting.\r\n\n/* PLANT_ART_END */\n// Only the embedded learning mode uses earned packs; standalone remains the free visual demo.\r\nconst ACCESSORY_CARD_CATALOG=[\n  {\n    \"id\": \"wear-a01-01\",\n    \"reviewKey\": \"A01-01\",\n    \"name\": \"叶徽牛仔帽\",\n    \"plantId\": 0,\n    \"plantName\": \"豌豆射手\",\n    \"theme\": \"西部小牛仔\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A01-01-叶徽牛仔帽-SR-卡面样例-v01.png\",\n    \"wearImage\": \"wear/A01-01-叶徽牛仔帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 146,\n      \"y\": 40,\n      \"width\": 143,\n      \"height\": 70\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 38,\n      \"y\": 124,\n      \"width\": 1479,\n      \"height\": 794\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a01-02\",\n    \"reviewKey\": \"A01-02\",\n    \"name\": \"红色三角领巾\",\n    \"plantId\": 0,\n    \"plantName\": \"豌豆射手\",\n    \"theme\": \"西部小牛仔\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A01-02-红色三角领巾-SR-卡面样例-v01.png\",\n    \"wearImage\": \"wear/A01-02-红色三角领巾-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 145,\n      \"y\": 189,\n      \"width\": 82,\n      \"height\": 62\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 79,\n      \"y\": 223,\n      \"width\": 1182,\n      \"height\": 832\n    },\n    \"imageSize\": {\n      \"width\": 1314,\n      \"height\": 1197\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a01-03\",\n    \"reviewKey\": \"A01-03\",\n    \"name\": \"盘绕套索与挂扣\",\n    \"plantId\": 0,\n    \"plantName\": \"豌豆射手\",\n    \"theme\": \"西部小牛仔\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A01-03-盘绕套索与挂扣-SR-卡面样例-v01.png\",\n    \"wearImage\": \"wear/A01-03-盘绕套索与挂扣-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 228,\n      \"y\": 217,\n      \"width\": 82,\n      \"height\": 85\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 64,\n      \"y\": 23,\n      \"width\": 1284,\n      \"height\": 1089\n    },\n    \"imageSize\": {\n      \"width\": 1374,\n      \"height\": 1145\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a01-04\",\n    \"reviewKey\": \"A01-04\",\n    \"name\": \"仙人掌纹木桶盆\",\n    \"plantId\": 0,\n    \"plantName\": \"豌豆射手\",\n    \"theme\": \"西部小牛仔\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A01-04-仙人掌纹木桶盆-SSR-卡面样例-v01.png\",\n    \"wearImage\": \"wear/A01-04-仙人掌纹木桶盆-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 253,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 174,\n      \"y\": 82,\n      \"width\": 1184,\n      \"height\": 819\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a02-01\",\n    \"reviewKey\": \"A02-01\",\n    \"name\": \"星星头箍\",\n    \"plantId\": 3,\n    \"plantName\": \"向日葵\",\n    \"theme\": \"星光领航员\",\n    \"slot\": \"head\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A02-01-星星头箍-SSR-独立卡-v02.png\",\n    \"wearImage\": \"wear/A02-01-星星头箍-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 60,\n      \"width\": 178,\n      \"height\": 70\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 120,\n      \"y\": 87,\n      \"width\": 1530,\n      \"height\": 743\n    },\n    \"imageSize\": {\n      \"width\": 1774,\n      \"height\": 887\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a02-02\",\n    \"reviewKey\": \"A02-02\",\n    \"name\": \"蓝色星图披肩\",\n    \"plantId\": 3,\n    \"plantName\": \"向日葵\",\n    \"theme\": \"星光领航员\",\n    \"slot\": \"body\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A02-02-蓝色星图披肩-SSR-独立卡-v02.png\",\n    \"wearImage\": \"wear/A02-02-蓝色星图披肩-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 160,\n      \"y\": 207,\n      \"width\": 132,\n      \"height\": 78\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 74,\n      \"y\": 66,\n      \"width\": 1365,\n      \"height\": 899\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a02-03\",\n    \"reviewKey\": \"A02-03\",\n    \"name\": \"小望远镜与支架\",\n    \"plantId\": 3,\n    \"plantName\": \"向日葵\",\n    \"theme\": \"星光领航员\",\n    \"slot\": \"item\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A02-03-小望远镜与支架-SSR-独立卡-v02.png\",\n    \"wearImage\": \"wear/A02-03-小望远镜与支架-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 244,\n      \"y\": 226,\n      \"width\": 85,\n      \"height\": 100\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 144,\n      \"y\": 51,\n      \"width\": 1063,\n      \"height\": 1103\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a02-04\",\n    \"reviewKey\": \"A02-04\",\n    \"name\": \"弯月观星盆\",\n    \"plantId\": 3,\n    \"plantName\": \"向日葵\",\n    \"theme\": \"星光领航员\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A02-04-弯月观星盆-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A02-04-弯月观星盆-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 253,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 161,\n      \"y\": 106,\n      \"width\": 1122,\n      \"height\": 899\n    },\n    \"imageSize\": {\n      \"width\": 1448,\n      \"height\": 1086\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a03-01\",\n    \"reviewKey\": \"A03-01\",\n    \"name\": \"圆顶骑士头盔\",\n    \"plantId\": 4,\n    \"plantName\": \"坚果\",\n    \"theme\": \"城堡小骑士\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A03-01-圆顶骑士头盔-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A03-01-圆顶骑士头盔-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 62,\n      \"width\": 175,\n      \"height\": 95\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 130,\n      \"y\": 43,\n      \"width\": 1136,\n      \"height\": 1066\n    },\n    \"imageSize\": {\n      \"width\": 1378,\n      \"height\": 1141\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a03-02\",\n    \"reviewKey\": \"A03-02\",\n    \"name\": \"蓝白肩披\",\n    \"plantId\": 4,\n    \"plantName\": \"坚果\",\n    \"theme\": \"城堡小骑士\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A03-02-蓝白肩披-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A03-02-蓝白肩披-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 160,\n      \"y\": 213,\n      \"width\": 157,\n      \"height\": 65\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 47,\n      \"y\": 119,\n      \"width\": 1442,\n      \"height\": 807\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a03-03\",\n    \"reviewKey\": \"A03-03\",\n    \"name\": \"叶纹圆盾\",\n    \"plantId\": 4,\n    \"plantName\": \"坚果\",\n    \"theme\": \"城堡小骑士\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A03-03-叶纹圆盾-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A03-03-叶纹圆盾-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 244,\n      \"y\": 223,\n      \"width\": 98,\n      \"height\": 105\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 138,\n      \"y\": 72,\n      \"width\": 1025,\n      \"height\": 1053\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a03-04\",\n    \"reviewKey\": \"A03-04\",\n    \"name\": \"草地石堡底座\",\n    \"plantId\": 4,\n    \"plantName\": \"坚果\",\n    \"theme\": \"城堡小骑士\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A03-04-草地石堡底座-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A03-04-草地石堡底座-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 238,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 42,\n      \"y\": 168,\n      \"width\": 1452,\n      \"height\": 731\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a04-01\",\n    \"reviewKey\": \"A04-01\",\n    \"name\": \"开孔矿灯帽\",\n    \"plantId\": 8,\n    \"plantName\": \"土豆地雷\",\n    \"theme\": \"地下探险家\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A04-01-开孔矿灯帽-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A04-01-开孔矿灯帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 116,\n      \"width\": 150,\n      \"height\": 69\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 121,\n      \"y\": 95,\n      \"width\": 1294,\n      \"height\": 832\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a04-02\",\n    \"reviewKey\": \"A04-02\",\n    \"name\": \"工具腰带\",\n    \"plantId\": 8,\n    \"plantName\": \"土豆地雷\",\n    \"theme\": \"地下探险家\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A04-02-工具腰带-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A04-02-工具腰带-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 160,\n      \"y\": 228,\n      \"width\": 169,\n      \"height\": 55\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 108,\n      \"y\": 108,\n      \"width\": 1373,\n      \"height\": 800\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a04-03\",\n    \"reviewKey\": \"A04-03\",\n    \"name\": \"地图与小铲\",\n    \"plantId\": 8,\n    \"plantName\": \"土豆地雷\",\n    \"theme\": \"地下探险家\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A04-03-地图与小铲-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A04-03-地图与小铲-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 246,\n      \"y\": 229,\n      \"width\": 79,\n      \"height\": 87\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 64,\n      \"y\": 62,\n      \"width\": 1192,\n      \"height\": 1043\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a04-04\",\n    \"reviewKey\": \"A04-04\",\n    \"name\": \"洞口剖面土台\",\n    \"plantId\": 8,\n    \"plantName\": \"土豆地雷\",\n    \"theme\": \"地下探险家\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A04-04-洞口剖面土台-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A04-04-洞口剖面土台-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 233,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 151,\n      \"y\": 104,\n      \"width\": 1244,\n      \"height\": 837\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a05-01\",\n    \"reviewKey\": \"A05-01\",\n    \"name\": \"叶形邮差帽\",\n    \"plantId\": 9,\n    \"plantName\": \"回旋镖射手\",\n    \"theme\": \"森林邮递员\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A05-01-叶形邮差帽-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A05-01-叶形邮差帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 68,\n      \"width\": 131,\n      \"height\": 72\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 202,\n      \"y\": 122,\n      \"width\": 1144,\n      \"height\": 810\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a05-02\",\n    \"reviewKey\": \"A05-02\",\n    \"name\": \"斜挎信件包\",\n    \"plantId\": 9,\n    \"plantName\": \"回旋镖射手\",\n    \"theme\": \"森林邮递员\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A05-02-斜挎信件包-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A05-02-斜挎信件包-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 150,\n      \"y\": 201,\n      \"width\": 105,\n      \"height\": 100\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 123,\n      \"y\": 57,\n      \"width\": 1100,\n      \"height\": 1091\n    },\n    \"imageSize\": {\n      \"width\": 1321,\n      \"height\": 1191\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a05-03\",\n    \"reviewKey\": \"A05-03\",\n    \"name\": \"三封种子信\",\n    \"plantId\": 9,\n    \"plantName\": \"回旋镖射手\",\n    \"theme\": \"森林邮递员\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A05-03-三封种子信-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A05-03-三封种子信-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 242,\n      \"y\": 221,\n      \"width\": 80,\n      \"height\": 76\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 146,\n      \"y\": 76,\n      \"width\": 1246,\n      \"height\": 864\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a05-04\",\n    \"reviewKey\": \"A05-04\",\n    \"name\": \"邮筒草坪底座\",\n    \"plantId\": 9,\n    \"plantName\": \"回旋镖射手\",\n    \"theme\": \"森林邮递员\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A05-04-邮筒草坪底座-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A05-04-邮筒草坪底座-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 255,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 31,\n      \"y\": 66,\n      \"width\": 1249,\n      \"height\": 1083\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a06-01\",\n    \"reviewKey\": \"A06-01\",\n    \"name\": \"低矮厨师帽\",\n    \"plantId\": 10,\n    \"plantName\": \"冰冻生菜\",\n    \"theme\": \"甜点小厨师\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A06-01-低矮厨师帽-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A06-01-低矮厨师帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 93,\n      \"width\": 142,\n      \"height\": 70\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 171,\n      \"y\": 36,\n      \"width\": 1163,\n      \"height\": 957\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a06-02\",\n    \"reviewKey\": \"A06-02\",\n    \"name\": \"格纹围兜\",\n    \"plantId\": 10,\n    \"plantName\": \"冰冻生菜\",\n    \"theme\": \"甜点小厨师\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A06-02-格纹围兜-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A06-02-格纹围兜-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 160,\n      \"y\": 219,\n      \"width\": 134,\n      \"height\": 74\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 157,\n      \"y\": 36,\n      \"width\": 1223,\n      \"height\": 935\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a06-03\",\n    \"reviewKey\": \"A06-03\",\n    \"name\": \"莓果冰点盘\",\n    \"plantId\": 10,\n    \"plantName\": \"冰冻生菜\",\n    \"theme\": \"甜点小厨师\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A06-03-莓果冰点盘-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A06-03-莓果冰点盘-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 244,\n      \"y\": 244,\n      \"width\": 91,\n      \"height\": 77\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 40,\n      \"y\": 12,\n      \"width\": 1462,\n      \"height\": 1012\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a06-04\",\n    \"reviewKey\": \"A06-04\",\n    \"name\": \"饼干纹圆碟\",\n    \"plantId\": 10,\n    \"plantName\": \"冰冻生菜\",\n    \"theme\": \"甜点小厨师\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A06-04-饼干纹圆碟-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A06-04-饼干纹圆碟-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 257,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 50,\n      \"y\": 105,\n      \"width\": 1433,\n      \"height\": 840\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a07-01\",\n    \"reviewKey\": \"A07-01\",\n    \"name\": \"软边探险帽\",\n    \"plantId\": 11,\n    \"plantName\": \"噬碑藤\",\n    \"theme\": \"遗迹考古家\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A07-01-软边探险帽-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A07-01-软边探险帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 155,\n      \"y\": 91,\n      \"width\": 157,\n      \"height\": 85\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 18,\n      \"y\": 59,\n      \"width\": 1494,\n      \"height\": 926\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a07-02\",\n    \"reviewKey\": \"A07-02\",\n    \"name\": \"卷轴斜挎带\",\n    \"plantId\": 11,\n    \"plantName\": \"噬碑藤\",\n    \"theme\": \"遗迹考古家\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A07-02-卷轴斜挎带-SR-独立卡-v02.png\",\n    \"wearImage\": \"wear/A07-02-卷轴斜挎带-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 115,\n      \"y\": 208,\n      \"width\": 95,\n      \"height\": 60\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 111,\n      \"y\": 16,\n      \"width\": 1365,\n      \"height\": 988\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a07-03\",\n    \"reviewKey\": \"A07-03\",\n    \"name\": \"小刷与化石盒\",\n    \"plantId\": 11,\n    \"plantName\": \"噬碑藤\",\n    \"theme\": \"遗迹考古家\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A07-03-小刷与化石盒-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A07-03-小刷与化石盒-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 243,\n      \"y\": 231,\n      \"width\": 85,\n      \"height\": 88\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 43,\n      \"y\": 47,\n      \"width\": 1248,\n      \"height\": 1120\n    },\n    \"imageSize\": {\n      \"width\": 1315,\n      \"height\": 1196\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a07-04\",\n    \"reviewKey\": \"A07-04\",\n    \"name\": \"沙地石板底座\",\n    \"plantId\": 11,\n    \"plantName\": \"噬碑藤\",\n    \"theme\": \"遗迹考古家\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A07-04-沙地石板底座-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A07-04-沙地石板底座-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 225,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 31,\n      \"y\": 143,\n      \"width\": 1478,\n      \"height\": 787\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a08-01\",\n    \"reviewKey\": \"A08-01\",\n    \"name\": \"红色短额带\",\n    \"plantId\": 12,\n    \"plantName\": \"菜问\",\n    \"theme\": \"功夫小师傅\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A08-01-红色短额带-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A08-01-红色短额带-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 105,\n      \"width\": 151,\n      \"height\": 61\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 97,\n      \"y\": 54,\n      \"width\": 1408,\n      \"height\": 936\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a08-02\",\n    \"reviewKey\": \"A08-02\",\n    \"name\": \"练功短褂\",\n    \"plantId\": 12,\n    \"plantName\": \"菜问\",\n    \"theme\": \"功夫小师傅\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A08-02-练功短褂-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A08-02-练功短褂-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 160,\n      \"y\": 202,\n      \"width\": 132,\n      \"height\": 101\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 77,\n      \"y\": 54,\n      \"width\": 1155,\n      \"height\": 1103\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a08-03\",\n    \"reviewKey\": \"A08-03\",\n    \"name\": \"木制练功桩\",\n    \"plantId\": 12,\n    \"plantName\": \"菜问\",\n    \"theme\": \"功夫小师傅\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A08-03-木制练功桩-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A08-03-木制练功桩-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 252,\n      \"y\": 222,\n      \"width\": 80,\n      \"height\": 113\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 111,\n      \"y\": 38,\n      \"width\": 839,\n      \"height\": 1360\n    },\n    \"imageSize\": {\n      \"width\": 1060,\n      \"height\": 1484\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a08-04\",\n    \"reviewKey\": \"A08-04\",\n    \"name\": \"竹纹练功台\",\n    \"plantId\": 12,\n    \"plantName\": \"菜问\",\n    \"theme\": \"功夫小师傅\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A08-04-竹纹练功台-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A08-04-竹纹练功台-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 256,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 71,\n      \"y\": 108,\n      \"width\": 1398,\n      \"height\": 829\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a09-01\",\n    \"reviewKey\": \"A09-01\",\n    \"name\": \"飞行帽与护目镜\",\n    \"plantId\": 13,\n    \"plantName\": \"双重射手\",\n    \"theme\": \"云端飞行员\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A09-01-飞行帽与护目镜-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A09-01-飞行帽与护目镜-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 145,\n      \"y\": 55,\n      \"width\": 152,\n      \"height\": 99\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 59,\n      \"y\": 24,\n      \"width\": 1207,\n      \"height\": 1147\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a09-02\",\n    \"reviewKey\": \"A09-02\",\n    \"name\": \"棕色短围巾\",\n    \"plantId\": 13,\n    \"plantName\": \"双重射手\",\n    \"theme\": \"云端飞行员\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A09-02-棕色短围巾-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A09-02-棕色短围巾-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 143,\n      \"y\": 188,\n      \"width\": 87,\n      \"height\": 62\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 32,\n      \"y\": 48,\n      \"width\": 1201,\n      \"height\": 1110\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a09-03\",\n    \"reviewKey\": \"A09-03\",\n    \"name\": \"双翼滑翔包\",\n    \"plantId\": 13,\n    \"plantName\": \"双重射手\",\n    \"theme\": \"云端飞行员\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A09-03-双翼滑翔包-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A09-03-双翼滑翔包-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 215,\n      \"y\": 211,\n      \"width\": 151,\n      \"height\": 93\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 33,\n      \"y\": 121,\n      \"width\": 1460,\n      \"height\": 800\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a09-04\",\n    \"reviewKey\": \"A09-04\",\n    \"name\": \"云纹停机坪\",\n    \"plantId\": 13,\n    \"plantName\": \"双重射手\",\n    \"theme\": \"云端飞行员\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A09-04-云纹停机坪-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A09-04-云纹停机坪-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 253,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 44,\n      \"y\": 57,\n      \"width\": 1449,\n      \"height\": 930\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a10-01\",\n    \"reviewKey\": \"A10-01\",\n    \"name\": \"麦穗草帽\",\n    \"plantId\": 15,\n    \"plantName\": \"卷心菜投手\",\n    \"theme\": \"丰收小农夫\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A10-01-麦穗草帽-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A10-01-麦穗草帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 130,\n      \"y\": 126,\n      \"width\": 153,\n      \"height\": 78\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 46,\n      \"y\": 113,\n      \"width\": 1471,\n      \"height\": 841\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a10-02\",\n    \"reviewKey\": \"A10-02\",\n    \"name\": \"叶片围裙\",\n    \"plantId\": 15,\n    \"plantName\": \"卷心菜投手\",\n    \"theme\": \"丰收小农夫\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A10-02-叶片围裙-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A10-02-叶片围裙-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 149,\n      \"y\": 246,\n      \"width\": 111,\n      \"height\": 70\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 169,\n      \"y\": 30,\n      \"width\": 1227,\n      \"height\": 936\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a10-03\",\n    \"reviewKey\": \"A10-03\",\n    \"name\": \"迷你收获篮\",\n    \"plantId\": 15,\n    \"plantName\": \"卷心菜投手\",\n    \"theme\": \"丰收小农夫\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A10-03-迷你收获篮-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A10-03-迷你收获篮-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 242,\n      \"y\": 244,\n      \"width\": 87,\n      \"height\": 86\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 78,\n      \"y\": 89,\n      \"width\": 1193,\n      \"height\": 986\n    },\n    \"imageSize\": {\n      \"width\": 1320,\n      \"height\": 1191\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a10-04\",\n    \"reviewKey\": \"A10-04\",\n    \"name\": \"菜畦木箱底座\",\n    \"plantId\": 15,\n    \"plantName\": \"卷心菜投手\",\n    \"theme\": \"丰收小农夫\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A10-04-菜畦木箱底座-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A10-04-菜畦木箱底座-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 268,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 94,\n      \"y\": 55,\n      \"width\": 1357,\n      \"height\": 957\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a11-01\",\n    \"reviewKey\": \"A11-01\",\n    \"name\": \"防寒耳罩帽\",\n    \"plantId\": 16,\n    \"plantName\": \"寒冰射手\",\n    \"theme\": \"极地科考员\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A11-01-防寒耳罩帽-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A11-01-防寒耳罩帽-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 145,\n      \"y\": 56,\n      \"width\": 149,\n      \"height\": 88\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 120,\n      \"y\": 8,\n      \"width\": 1129,\n      \"height\": 1133\n    },\n    \"imageSize\": {\n      \"width\": 1379,\n      \"height\": 1141\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a11-02\",\n    \"reviewKey\": \"A11-02\",\n    \"name\": \"蓝白保暖领套\",\n    \"plantId\": 16,\n    \"plantName\": \"寒冰射手\",\n    \"theme\": \"极地科考员\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A11-02-蓝白保暖领套-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A11-02-蓝白保暖领套-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 142,\n      \"y\": 188,\n      \"width\": 91,\n      \"height\": 67\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 65,\n      \"y\": 83,\n      \"width\": 1406,\n      \"height\": 884\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a11-03\",\n    \"reviewKey\": \"A11-03\",\n    \"name\": \"仪器包与温度计\",\n    \"plantId\": 16,\n    \"plantName\": \"寒冰射手\",\n    \"theme\": \"极地科考员\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A11-03-仪器包与温度计-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A11-03-仪器包与温度计-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 231,\n      \"y\": 217,\n      \"width\": 91,\n      \"height\": 103\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 61,\n      \"y\": 28,\n      \"width\": 1181,\n      \"height\": 1156\n    },\n    \"imageSize\": {\n      \"width\": 1312,\n      \"height\": 1199\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a11-04\",\n    \"reviewKey\": \"A11-04\",\n    \"name\": \"雪地科考平台\",\n    \"plantId\": 16,\n    \"plantName\": \"寒冰射手\",\n    \"theme\": \"极地科考员\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A11-04-雪地科考平台-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A11-04-雪地科考平台-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 260,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 64,\n      \"y\": 46,\n      \"width\": 1442,\n      \"height\": 959\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  },\n  {\n    \"id\": \"wear-a12-01\",\n    \"reviewKey\": \"A12-01\",\n    \"name\": \"避火船长帽檐\",\n    \"plantId\": 17,\n    \"plantName\": \"火炬树桩\",\n    \"theme\": \"灯塔守望员\",\n    \"slot\": \"head\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A12-01-避火船长帽檐-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A12-01-避火船长帽檐-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"head\",\n      \"x\": 160,\n      \"y\": 116,\n      \"width\": 176,\n      \"height\": 79\n    },\n    \"layer\": 40,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 41,\n      \"y\": 111,\n      \"width\": 1444,\n      \"height\": 782\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a12-02\",\n    \"reviewKey\": \"A12-02\",\n    \"name\": \"海蓝领带\",\n    \"plantId\": 17,\n    \"plantName\": \"火炬树桩\",\n    \"theme\": \"灯塔守望员\",\n    \"slot\": \"body\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A12-02-海蓝领带-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A12-02-海蓝领带-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 159,\n      \"y\": 224,\n      \"width\": 91,\n      \"height\": 63\n    },\n    \"layer\": 20,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 93,\n      \"y\": 108,\n      \"width\": 1085,\n      \"height\": 1108\n    },\n    \"imageSize\": {\n      \"width\": 1225,\n      \"height\": 1284\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a12-03\",\n    \"reviewKey\": \"A12-03\",\n    \"name\": \"救生圈与绳结\",\n    \"plantId\": 17,\n    \"plantName\": \"火炬树桩\",\n    \"theme\": \"灯塔守望员\",\n    \"slot\": \"item\",\n    \"rarity\": \"SR\",\n    \"cardImage\": \"cards/A12-03-救生圈与绳结-SR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A12-03-救生圈与绳结-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"plant\",\n      \"x\": 244,\n      \"y\": 231,\n      \"width\": 85,\n      \"height\": 92\n    },\n    \"layer\": 30,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 59,\n      \"y\": 5,\n      \"width\": 1136,\n      \"height\": 1247\n    },\n    \"imageSize\": {\n      \"width\": 1230,\n      \"height\": 1278\n    },\n    \"frontClip\": null,\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\"\n    ]\n  },\n  {\n    \"id\": \"wear-a12-04\",\n    \"reviewKey\": \"A12-04\",\n    \"name\": \"海浪码头底座\",\n    \"plantId\": 17,\n    \"plantName\": \"火炬树桩\",\n    \"theme\": \"灯塔守望员\",\n    \"slot\": \"base\",\n    \"rarity\": \"SSR\",\n    \"cardImage\": \"cards/A12-04-海浪码头底座-SSR-独立卡-v01.png\",\n    \"wearImage\": \"wear/A12-04-海浪码头底座-wear-v01.png\",\n    \"anchor\": {\n      \"space\": \"plant-stage-320x340\",\n      \"owner\": \"ground\",\n      \"x\": 160,\n      \"y\": 240,\n      \"width\": 221,\n      \"height\": 99\n    },\n    \"layer\": 0,\n    \"offsetX\": 0,\n    \"offsetY\": 0,\n    \"scale\": 1,\n    \"status\": \"transparent-raster-static-preview\",\n    \"sourceBounds\": {\n      \"x\": 72,\n      \"y\": 199,\n      \"width\": 1391,\n      \"height\": 731\n    },\n    \"imageSize\": {\n      \"width\": 1536,\n      \"height\": 1024\n    },\n    \"frontClip\": {\n      \"startY\": 0.54\n    },\n    \"gaps\": [\n      \"静态挂点初值；动作、不同生长阶段与iPad待校准\",\n      \"前缘为原图54%以下的裁片叠层，非独立重绘前缘\"\n    ]\n  }\n];\r\nvar rewardPresentation=false;\r\nowned=owned.filter(i=>[0,4,8,9,10,11,12,13,15,16,17].includes(i));\r\nif(window.parent===window){\r\nconst freeCatalog=data.map(d=>({...d})),freeArt=newArt,freePacks=showPacks,freeAlbum=showAlbum,freeEight=showEight,freeReveal=revealCard;let freeIds=null;\r\nshowPacks=function(){data.splice(0,data.length,...freeCatalog.map(d=>({...d})));freeIds=null;rewardPresentation=false;freePacks()};\r\nshowAlbum=function(){data.splice(0,data.length,...freeCatalog.map(d=>({...d})));freeIds=null;rewardPresentation=false;owned=owned.filter(id=>ACTIVE_CARD_IDS.includes(id));freeAlbum()};\r\nnewArt=function(i){return freeArt(freeIds?freeIds[i]:i)};\r\nshowEight=function(){rewardPresentation=true;freeIds=Array.from({length:8},()=>ACTIVE_CARD_IDS[Math.floor(Math.random()*ACTIVE_CARD_IDS.length)]);data.splice(0,data.length,...freeIds.map(id=>({...freeCatalog[id]})));freeEight();};\r\nrevealCard=function(i){if(mode==='cards'&&freeIds&&!revealed.has(i)&&!pending.has(i)){const id=freeIds[i];if(!owned.includes(id))owned.push(id);try{localStorage.setItem(CARD_STORAGE,JSON.stringify(owned))}catch{}}freeReveal(i)};showPacks();updateCount();\r\n}\r\n\r\nif(window.parent!==window){\r\nconst bridgeContext=typeof SONGZI_CARD_CONTEXT==='object'?SONGZI_CARD_CONTEXT:null;\r\nconst postToLearning=message=>{if(bridgeContext)window.parent.postMessage({...message,...bridgeContext},'*')};\r\nconst acceptsLearningMessage=e=>bridgeContext&&e.source===window.parent&&e.data&&['profileId','pageToken','frameToken','scope'].every(k=>e.data[k]===bridgeContext[k]);\r\nowned=[];\r\ndocument.documentElement?.classList?.add?.('embedded-cards');window.fitCardRoom?.();\r\nconst earned=new Map(),catalogData=data.map(d=>({...d}));let nextEarnedIndex=0,pendingEarned=null,currentOpenIndex=null,liveSnapshot=null,liveResult=null;\r\nconst baseInspect=inspect;inspect=function(i){baseInspect(i);if(rewardPresentation&&data[i]?.rewardType!=='plant')$('#skill').textContent='✦ 已存入收藏';else $('#skill').textContent='✦ 展示植物技能';};\r\nconst basePacks=showPacks,baseAlbum=showAlbum,baseEight=showEight,baseOpen=openPack,baseArt=newArt,baseCard=cardHTML,baseCount=updateCount;\r\nupdateCount=function(){baseCount();if(liveSnapshot)$('#count').textContent=Object.keys(liveSnapshot.counts).filter(k=>[0,4,8,9,10,11,12,13,15,16,17].includes(Number(k))&&liveSnapshot.counts[k]>0).length+' / 11';$('#status').textContent=stock.length+' 包待开启 · 每包4项奖励';};\r\nfunction restoreCatalog(){rewardPresentation=false;data.splice(0,data.length,...catalogData.map(d=>({...d})));if(liveSnapshot)owned=Object.keys(liveSnapshot.counts).filter(k=>[0,4,8,9,10,11,12,13,15,16,17].includes(Number(k))&&liveSnapshot.counts[k]>0).map(Number);}\r\nfunction itemArt(kind){return '\u003csvg viewBox=\"0 0 200 200\" aria-hidden=\"true\">\u003cpath d=\"M45 20h110l12 14v140l-14 8H44l-12-13V35Z\" fill=\"'+(kind==='skip'?'#79ac71':'#967bc1')+'\" stroke=\"#e9d28d\" stroke-width=\"7\"/>\u003cpath d=\"M48 39h104v124H48Z\" fill=\"#183e35\" stroke=\"#b9c58d\" stroke-width=\"3\"/>'+(kind==='skip'?'\u003cpath d=\"M67 70l39 31-39 31ZM109 70l39 31-39 31Z\" fill=\"#efd591\"/>':'\u003cpath d=\"M134 83a39 39 0 1 0-4 50\" fill=\"none\" stroke=\"#efd591\" stroke-width=\"12\"/>\u003cpath d=\"M118 58l25 4-1 28Z\" fill=\"#efd591\"/>')+'\u003c/svg>'}\r\nfunction rewardShape(row){if(row.type==='accessory')return {name:row.name,rarity:row.rarity+' · 部件',color:row.rarity==='SSR'?'#ffd075':'#d4a4ff',desc:'新部件 · 可用于对应植物',stat:'已存入装扮',power:'×1',story:row.effect,asset:-1,rewardType:'accessory',accessoryId:row.accessoryId,cardImage:row.cardImage};const color=row.rarity==='SSR'?'#ffd075':row.rarity==='SR'?'#d4a4ff':'#8ccfff';if(row.type==='plant')return {...catalogData[row.plantId],name:row.name,rarity:row.rarity+' · '+(row.rarity==='SSR'?'传说':row.rarity==='SR'?'超稀有':'稀有'),color,desc:row.duplicate?'重复伙伴 · 外观成长':'新伙伴 · 可布置到花盆',stat:row.duplicate?'重复收藏':'首次获得',power:row.quantity,story:row.effect,asset:row.plantId,rewardType:'plant'};return {name:row.name,rarity:row.rarity+' · '+(['leaf','leafCard'].includes(row.type)?'叶片补给':'完整道具卡'),color,desc:'获得 '+row.quantity+(['leaf','leafCard'].includes(row.type)?' 片叶片':' 张道具卡'),stat:'已存入背包',power:'+'+row.quantity,story:row.effect,asset:-1,itemId:row.itemId,rewardType:row.type};}\r\nnewArt=function(i){const item=data[i];if(item?.rewardType){if(item.rewardType==='accessory')return '\u003csvg viewBox=\"0 0 200 280\" aria-hidden=\"true\">\u003cimage href=\"assets/wearables-raster-v1/'+item.cardImage+'\" width=\"200\" height=\"280\" preserveAspectRatio=\"xMidYMid meet\"/>\u003c/svg>';if(['item','function'].includes(item.rewardType))return itemArt(item.itemId);if(['leaf','leafCard'].includes(item.rewardType))return '\u003csvg viewBox=\"0 0 200 200\">\u003cpath d=\"M45 146Q18 47 161 24Q186 137 55 158Z\" fill=\"#77bc48\" stroke=\"#356f31\" stroke-width=\"7\"/>\u003cpath d=\"M37 174L144 50M65 142L56 91M91 112L133 113\" stroke=\"#e3eeaa\" stroke-width=\"8\" fill=\"none\" stroke-linecap=\"round\"/>\u003c/svg>';if(item.rewardType==='decoration')return '\u003csvg viewBox=\"0 0 200 200\">\u003cpath d=\"M60 200Q140 130 70 90Q20 55 110 0H155Q65 65 115 90Q185 150 105 200\" fill=\"#d2bf89\" stroke=\"#657d45\" stroke-width=\"5\"/>\u003cg fill=\"#f0d778\" stroke=\"#67834b\" stroke-width=\"3\">\u003ccircle cx=\"36\" cy=\"92\" r=\"13\"/>\u003ccircle cx=\"148\" cy=\"57\" r=\"13\"/>\u003ccircle cx=\"165\" cy=\"145\" r=\"15\"/>\u003c/g>\u003cg fill=\"#fff2b9\">\u003ccircle cx=\"36\" cy=\"92\" r=\"5\"/>\u003ccircle cx=\"148\" cy=\"57\" r=\"5\"/>\u003ccircle cx=\"165\" cy=\"145\" r=\"6\"/>\u003c/g>\u003c/svg>';let svg=baseArt(item.asset);if(item.rewardType==='skin')svg=baseArt(18);return svg;}let svg=baseArt(i);if(i===3&&liveSnapshot?.skin.unlocked&&liveSnapshot.skin.equipped!==false)svg=(typeof themeLegacyArt==='function'?themeLegacyArt(3):svg).replaceAll('#ffcf57','#c1a0ff').replaceAll('#f1b75a','#a9d9ff');if(i===0&&liveSnapshot?.cosmeticChoices?.[0]==='cowboy')svg=baseArt(19);return svg;};\r\ncardHTML=function(i,back=false){let html=baseCard(i,back);const effectId=rewardPresentation?data[i]?.asset:i;if(!back&&liveSnapshot?.effects[effectId]&&liveSnapshot.cosmeticChoices?.[effectId]!=='base')html=html.replace('class=\"card ','class=\"card '+(liveSnapshot.effects[effectId]==='aura'?'duplicate-aura ':'duplicate-shimmer '));return html;};\r\nshowPacks=function(){restoreCatalog();basePacks();postToLearning({type:'songzi:view',view:'packs'},'*')};showAlbum=function(){restoreCatalog();for(const id of liveSnapshot?.accessoryOwned||[]){const c=ACCESSORY_CARD_CATALOG.find(c=>c.id===id);if(!c)continue;const index=data.length;data.push(rewardShape({type:'accessory',accessoryId:id,name:c.name,rarity:c.rarity,cardImage:c.cardImage,effect:'已收藏，可在对应植物的装扮中使用'}));owned.push(index)}baseAlbum();postToLearning({type:'songzi:view',view:'album'},'*')};\r\nopenPack=function(){if(mode!=='ready'||selected===null)return;currentOpenIndex=selected;const id=earned.get(selected);if(!id)return;mode='waiting';$('.center-slot .pack-object').disabled=true;$('.pack-caption').innerHTML='\u003cb>植物伙伴准备中…\u003c/b>\u003cspan>正在保存这包奖励\u003c/span>';postToLearning({type:'songzi:openRequest',id},'*');};\r\nshowEight=function(){if(!liveResult)return;rewardPresentation=true;data.splice(0,data.length,...liveResult.rows.map(rewardShape));baseEight();$('.scene-title').textContent='森林守卫 · 本包 4 张卡牌';$('#status').textContent=(liveResult.forced?'SSR保底已触发 · ':'')+'奖励已保存，可慢慢揭晓';};\r\nstock=[];selected=null;showPacks();$('#restock').hidden=true;$('#restock').onclick=()=>{};$('#pileFooter').innerHTML='学习获得的卡包会放在这里。\u003cbr>前三格为植物卡；集齐当前卡池植物后可出现功能卡。第4格优先获得未收集部件，全部收齐后为叶片卡。';\r\nfunction applySnapshot(value){if(!value||typeof value.counts!=='object')return;liveSnapshot=value;try{localStorage.setItem(CARD_STORAGE,JSON.stringify(Object.keys(value.counts).filter(k=>value.counts[k]>0).map(Number)))}catch{}if(!rewardPresentation){owned=Object.keys(value.counts).filter(k=>[0,4,8,9,10,11,12,13,15,16,17].includes(Number(k))&&value.counts[k]>0).map(Number);updateCount()}}\r\nwindow.addEventListener('message',e=>{if(!acceptsLearningMessage(e))return;const m=e.data;\r\nif(m.type==='songzi:restore'&&Array.isArray(m.packs)){applySnapshot(m.rewardSnapshot);if(!liveSnapshot&&Array.isArray(m.owned))owned=m.owned.filter(i=>Number.isInteger(i)&&[0,4,8,9,10,11,12,13,15,16,17].includes(i));for(const id of m.packs){if(typeof id!=='string'||[...earned.values()].includes(id))continue;const index=nextEarnedIndex++;earned.set(index,id);stock.push(index)}stock=stock.filter(index=>m.packs.includes(earned.get(index)));if(mode==='idle')showPacks()}\r\nif(m.type==='songzi:grantPack'&&typeof m.id==='string'&&m.id.length\u003c150){pendingEarned=m.id;postToLearning({type:'songzi:grantReady',id:m.id},'*')}\r\nif(m.type==='songzi:confirmPack'&&m.id===pendingEarned){if(![...earned.values()].includes(m.id)){const index=nextEarnedIndex++;earned.set(index,m.id);stock.push(index)}pendingEarned=null;showPacks()}\r\nif(m.type==='songzi:rewardResult'&&earned.get(currentOpenIndex)===m.id){applySnapshot(m.snapshot);liveResult=m.result;if(!liveResult?.rows||![4,8].includes(liveResult.rows.length))return;stock=stock.filter(i=>i!==currentOpenIndex);if(mode==='waiting'){mode='ready';selected=currentOpenIndex;$('.center-slot .pack-object').disabled=false;baseOpen();}}\r\nif(m.type==='songzi:rewardError'&&earned.get(currentOpenIndex)===m.id&&mode==='waiting'){mode='ready';$('.center-slot .pack-object').disabled=false;$('.pack-caption').innerHTML='\u003cb>暂时未能打开，请重试\u003c/b>\u003cspan>\u003c/span>';}\r\nif(m.type==='songzi:showAlbum')showAlbum();if(m.type==='songzi:showPacks')showPacks();\r\n});\r\nconst style=document.createElement('style');style.textContent='.duplicate-shimmer{box-shadow:0 0 0 3px #dfb9ff,0 0 24px #cfa0ff88!important}.duplicate-aura{box-shadow:0 0 0 3px #ffe3a0,0 0 35px #ffd56eaa,0 0 70px #edb85a66!important}.duplicate-aura .art{background:radial-gradient(circle,#fff0ab,#9c5a21)!important}';document.head.appendChild(style);\r\npostToLearning({type:'songzi:ready'},'*');\r\n}\r\n\nconst tightGlowStyle=document.createElement(\"style\");tightGlowStyle.textContent=\"/* Tight glow follows visible card alpha. */\\n.card.back,.card.back.hovered,.card.back:focus-visible,.card.back.pre-reveal{box-shadow:none!important;outline:none!important;background:transparent!important}\\n.card.back .select-corners{display:none!important}\\n.card.back.hovered .theme-card-back,.card.back:focus-visible .theme-card-back{filter:brightness(1.22) saturate(1.16) drop-shadow(0 0 1px #fffef0) drop-shadow(0 0 3px #fff4c9) drop-shadow(0 0 7px var(--glow)) drop-shadow(0 0 14px var(--glow))!important;transition:filter .16s ease-out}\\n.card.back.pre-reveal .theme-card-back{filter:brightness(1.38) saturate(1.2) drop-shadow(0 0 2px #fff) drop-shadow(0 0 5px #fff5c0) drop-shadow(0 0 12px var(--glow)) drop-shadow(0 0 22px var(--glow))!important}\\n@media(prefers-reduced-motion:reduce){.card.back.hovered .theme-card-back,.card.back:focus-visible .theme-card-back{transition:none}}\\n\";document.head.appendChild(tightGlowStyle);\n\u003c/script>\u003c/html>"));}

const SONGZI_CONFIG={"version":"reward-v3-accessory-2026-10-21","status":"integrated_logic_verified_pending_visual_acceptance","pack":{"plantSlots":[{"R":0.9,"SR":0.09,"SSR":0.01},{"R":0.8,"SR":0.18,"SSR":0.02},{"normal":{"R":0.7,"SR":0.25,"SSR":0.05},"whenFirstTwoAreR":{"R":0,"SR":0.95,"SSR":0.05}}],"ssrPityPack":10,"pityForcedSlot":3,"supply":{"mode":"accessory","legacy":"old opened packs retain saved results"},"price":200,"withinRarity":"uniform","allowDuplicatesWithinPack":true,"resolvePlants":"sequential","pityTiming":"snapshot_misses_at_pack_start; force_third_if_misses>=9; reset_at_pack_end_if_any_SSR","pityPerPool":true,"exchangeResetsPity":false,"accessory":{"rarityWeights":{"SR":0.8333333333333334,"SSR":0.16666666666666666},"noDuplicates":true,"allCollectedLeaves":1}},"duplicate":{"exclusiveFragments":2,"fragmentCap":30,"leaves":{"R":1,"SR":3,"SSR":10},"milestones":[10,20,30],"milestoneMode":"cumulative_not_spent","exchangeGrantsFragments":false,"missingArtPolicy":"record_progress_without_claiming_unavailable_art"},"exchange":{"R":10,"SR":30,"SSR":80},"items":{"starterEach":1,"dailyUsesEach":1,"expire":false,"timeZone":"Asia/Hong_Kong","reset":"daily_use_allowance_only","skipAcrossSessions":true,"refreshTargetsShareAllowance":true,"consumeRefreshIfNoAlternative":false,"initialGrantRef":"reward-v2:starter-items"},"unresolved":["SSR专属背景/边框/造型素材逐项待确认，暂只记录成长","牛仔豌豆重复获得解锁保留，不重复当成30片新皮肤","园丁向日葵与森林花径正式获取方式待定，现有家长体验解锁入口","四五年级新池与旧池定向成长仍未开放"],"approvedBy":"家长在本聊天确认按模拟后的方案实行，随后指定寒冰射手与火炬树桩互换稀有度","catalog":[{"id":0,"name":"松果豌豆射手","rarity":"R"},{"id":4,"name":"铁壁坚果","rarity":"R"},{"id":8,"name":"土豆地雷","rarity":"R"},{"id":10,"name":"冰冻生菜","rarity":"R"},{"id":11,"name":"噬碑藤","rarity":"R"},{"id":15,"name":"卷心菜投手","rarity":"R"},{"id":9,"name":"回旋镖射手","rarity":"SR"},{"id":13,"name":"双重射手","rarity":"SR"},{"id":17,"name":"火炬树桩","rarity":"SR"},{"id":12,"name":"菜问","rarity":"SSR"},{"id":16,"name":"寒冰射手","rarity":"SSR"}],"excluded":{"mascotIds":[3,14],"legacyIds":[1,2,5,6,7],"costumeAssetIds":[18,19]},"earnings":{"packPrice":200,"sunPerCompletedQuestion":5,"sunPerNormalRound":20,"firstStageBonusSun":20,"firstChapterPacks":1,"dailyReviewBonusSun":10,"dailyRevisitBonusSun":10,"dailyDirectSSR":false,"dailyFreePacks":0},"migration":{"projectVersion":"songzi-integrated-2026-10-19","saveSchemaVersion":1,"strategy":"preserve_with_versioned_backup_and_migration","repeatReset":false,"historicalTestResetAuthorization":"此前家长测试档重建授权仅为历史记录；正常更新不再按程序版本号重置"}};
(function(global){'use strict';
const TOPICS={ten:{name:'10以内加减法',stage:'前置基础',example:'10 − 4'},add:{name:'两位数加减法',stage:'暂定已学 · 家长确认',example:'46 + 27'},time:{name:'时、分、秒',stage:'三上候选 · 家长确认',example:'2分＝多少秒'},length:{name:'长度单位',stage:'三上候选 · 家长确认',example:'3分米＝多少厘米'},triple:{name:'三位数加减法',stage:'三上候选 · 家长确认',example:'402 − 175'},multiply:{name:'多位数乘一位数',stage:'三上候选 · 家长确认',example:'23 × 3'}};
const blank=()=>({version:1,profile:{name:'小松子',textbook:'北师大版 · 数学三年级上册（封面已确认）',unit:'当前单元待确认',supplement:'知识与能力训练（配北师大版）；黄冈小状元（具体版本待确认）',topics:['ten','add'],questionCount:10,reminderDays:2,observation:'家长观察：10−4首次会回答5，提醒后能改为6；原因尚待观察。'},wallet:{sun:0,leaves:0},ledger:[],questions:[],sessions:[],reviews:{},packs:[],createdAt:new Date().toISOString()});
const pick=(a,r=Math.random)=>a[Math.floor(r()*a.length)];const integer=(a,b,r=Math.random)=>Math.floor(r()*(b-a+1))+a;
function makeQuestion(topic,r=Math.random,fact){let a,b,op,answer,text,unit='',hint,visual=null;if(topic==='ten'){if(fact){({a,b,op}=fact)}else{op=r()<.65?'-':'+';a=integer(op==='-'?3:0,10,r);b=integer(0,op==='-'?a:10-a,r)}answer=op==='-'?a-b:a+b;text=a+' '+(op==='-'?'−':'+')+' '+b+' = ?';hint=op==='-'?'从 '+a+' 个松果中拿走 '+b+' 个，再看剩下多少个。':'先放 '+a+' 个松果，再添 '+b+' 个，合起来是多少？';visual={a,b,op};}
else if(topic==='add'){op=r()<.5?'+':'-';a=integer(25,85,r);b=integer(11,op==='-'?a:99-a,r);answer=op==='+'?a+b:a-b;text='花园有 '+a+' 点阳光，'+(op==='+'?'又收集了 ':'种植物用了 ')+b+' 点。现在有多少点？';hint=op==='+'?'可以先加整十数，再加个位；个位满十时记得进一。':'可以先减整十数，再减个位；个位不够减时，从十位借一个十。';unit='点';}
else if(topic==='time'){a=integer(1,5,r);b=60;op='×';answer=a*60;text='向日葵需要 '+a+' 分钟成熟，相当于多少秒？';hint='1 分钟是 60 秒，'+a+' 分钟就是 '+a+' 个 60 秒。';unit='秒';}
else if(topic==='length'){a=integer(2,9,r);b=10;op='×';answer=a*10;text=a+' 分米的花圃边框，相当于多少厘米？';hint='1 分米 = 10 厘米。可以按 10 厘米一组来数。';unit='厘米';}
else if(topic==='triple'){op=r()<.5?'+':'-';a=integer(200,650,r);b=integer(100,op==='-'?a:999-a,r);answer=op==='+'?a+b:a-b;text=a+' '+(op==='+'?'+':'−')+' '+b+' = ?';hint='把相同数位对齐，从个位开始；逐位检查进位或退位。';}
else if(topic==='multiply'){a=integer(12,89,r);b=integer(2,5,r);op='×';answer=a*b;text='每排有 '+a+' 株植物，'+b+' 排一共有多少株？';hint='可以把 '+a+' 拆成整十数和个位，分别乘 '+b+'，再合起来。';unit='株';}
else throw Error('未知知识点');
return {id:'q-'+Date.now()+'-'+Math.floor(r()*1e9),topic,a,b,op,answer,text,unit,hint,visual,fact:topic+':'+a+op+b,source:'已学范围',attempts:[],hintCount:0,method:'未填写',checked:false,completed:false,createdAt:new Date().toISOString()};}
function stats(rows){let n=rows.length,first=rows.filter(q=>q.attempts?.[0]?.correct&&(q.attempts[0].hintsBefore??q.hintCount??0)===0).length,corrected=rows.filter(q=>q.attempts?.length>1&&q.completed).length,hinted=rows.filter(q=>q.hintCount>0).length,finished=rows.filter(q=>q.completed).length;return {n,first,corrected,hinted,finished,rate:n?first/n:null};}
function topicStats(db,now=Date.now(),days=30){let recent=db.questions.filter(q=>Date.parse(q.createdAt)>=now-days*864e5&&q.attempts.length);return Object.fromEntries(Object.keys(TOPICS).map(t=>[t,stats(recent.filter(q=>q.topic===t))]));}
function localDay(time=Date.now()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Hong_Kong',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(time))}
function updateReview(db,q,now=Date.now()){let old=db.reviews[q.fact],independent=q.attempts[0]?.correct&&q.hintCount===0,distinct=old?.lastSuccessDay!==localDay(now),streak=independent?((old?.streak||0)+(distinct?1:0)):0;const gap=independent?[1,3,7,14][Math.min(Math.max(streak-1,0),3)]:1;if(!old&&independent)return;db.reviews[q.fact]={fact:q.fact,topic:q.topic,a:q.a,b:q.b,op:q.op,streak,lastSuccessDay:independent?localDay(now):(old?.lastSuccessDay||null),dueAt:new Date(now+gap*864e5).toISOString(),lastAt:new Date(now).toISOString(),lastOutcome:independent?'独立首答正确':'需要再巩固'};}
function choose(db,index,sessionRows,r=Math.random,now=Date.now()){const build=(...args)=>(global.MathGarden?.makeQuestion||makeQuestion)(...args);const allowed=db.profile.topics.filter(t=>TOPICS[t]);if(!allowed.length)allowed.push('ten');const canReview=Object.values(db.reviews).filter(v=>allowed.includes(v.topic)&&Date.parse(v.dueAt)<=now&&!sessionRows.some(q=>q.fact===v.fact));if(index%3===1&&canReview.length){const v=canReview.sort((a,b)=>Date.parse(a.dueAt)-Date.parse(b.dueAt))[0];const q=build(v.topic,r,v);if(v.topic!=='ten'){const original=db.questions.findLast(x=>x.fact===v.fact);if(original)for(const key of ['a','b','op','answer','text','unit','hint','visual','diagram','variant','fact'])q[key]=original[key];}q.source='到期错题复习';return q;}
if(index>=3){const missed=sessionRows.find((q,i)=>i<=index-3&&!q.skipped&&(!q.attempts[0]?.correct||q.hintCount)&&!sessionRows.slice(i+1).some(v=>v.fact===q.fact));if(missed?.topic==='ten'){const q=build('ten',r,missed);q.source='间隔巩固 · 中间已隔至少两题';return q;}}
if(!db.questions.length&&index===0&&allowed.includes('ten')){const q=build('ten',r,{a:10,b:4,op:'-'});q.source='基础观察起点';return q;}
let topic;if(allowed.includes('ten')&&index%2===0)topic='ten';else{const ts=topicStats(db,now),options=allowed.filter(t=>t!=='ten');const pool=options.length?options:allowed;const weighted=pool.flatMap(t=>Array(ts[t].n>=3&&(ts[t].rate<.8||ts[t].hinted/ts[t].n>.3)?3:1).fill(t));topic=pick(weighted,r)}
let q;for(let k=0;k<20;k++){q=build(topic,r);if(!sessionRows.some(x=>x.fact===q.fact))break}q.source=topic==='ten'?'基础巩固':'已学范围练习';return q;}
function observations(rows){const out=[];const s=stats(rows);if(s.n<5)out.push('当前样本不足 5 题，先收集记录，不判断是否掌握。');const offset=rows.filter(q=>q.attempts[0]&&!q.attempts[0].correct&&Math.abs(q.attempts[0].value-q.answer)===1);if(offset.length)out.push('有 '+offset.length+' 题首次答案与正确答案相差 1；这只是记录特征，不能据此认定粗心或抢答。');if(s.corrected)out.push(s.corrected+' 题经过再次思考后完成，可结合是否使用提示查看。');let methods=rows.filter(q=>q.method&&q.method!=='未填写');if(!methods.length)out.push('解题方法尚未由孩子填写，不能仅凭用时推断他在数数或直接回忆。');return out;}
function valid(db){if(!db||db.version!==1||!db.profile||!Array.isArray(db.profile.topics)||!db.profile.topics.length||db.profile.topics.some(t=>!TOPICS[t])||!Array.isArray(db.questions)||!Array.isArray(db.sessions)||!Array.isArray(db.ledger)||!Array.isArray(db.packs)||typeof db.reviews!=='object'||!db.wallet||!Number.isFinite(db.wallet.sun)||db.wallet.sun<0||!Number.isFinite(db.wallet.leaves)||db.wallet.leaves<0)throw Error('备份格式不正确');if(db.questions.length>100000||db.questions.some(q=>!TOPICS[q.topic]||!Array.isArray(q.attempts)||!Number.isFinite(q.answer)||typeof q.text!=='string'||!q.attempts.every(a=>Number.isFinite(a.value)&&typeof a.correct==='boolean')))throw Error('题目记录格式不正确');db.profile.questionCount=[8,10,12].includes(Number(db.profile.questionCount))?Number(db.profile.questionCount):10;db.profile.reminderDays=Math.min(7,Math.max(1,Number(db.profile.reminderDays)||2));return db;}
const api={TOPICS,blank,makeQuestion,stats,topicStats,localDay,updateReview,choose,observations,valid};if(typeof module!=='undefined')module.exports=api;global.MathGarden=api;
})(typeof window!=='undefined'?window:globalThis);

(function(global){'use strict';
const catalog=[['松果豌豆射手','R'],['极光冰西瓜','SR'],['焰翼火龙草','SSR'],['晨光向日葵','R'],['铁壁坚果','R'],['月影小喷菇','SR'],['荆棘仙人掌','R'],['黄金双子樱桃','SSR']].map(([name,rarity],id)=>({id,key:'g3-forest-'+String(id+1).padStart(3,'0'),name,rarity}));
catalog[3].collectible=false;catalog[3].role='mascot';
const additions=[['土豆地雷','R'],['回旋镖射手','SR'],['冰冻生菜','R'],['噬碑藤','R'],['菜问','SSR'],['双重射手','SR'],['双胞向日葵','R'],['卷心菜投手','R'],['寒冰射手','SSR'],['火炬树桩','SR']];
for(const [name,rarity] of additions){const id=catalog.length;catalog.push({id,key:'g3-forest-'+String(id+1).padStart(3,'0'),name,rarity});}
catalog[14].collectible=false;catalog[14].role='mascot-variant';
for(const id of [1,2,5,6,7])catalog[id].legacy=true;
const active=c=>c.collectible!==false&&!c.legacy;

const CONFIG=typeof SONGZI_CONFIG!=='undefined'?SONGZI_CONFIG:require('./balance-config.json');
const POOLS={forest:{id:'forest',grade:3,region:'forest-home',name:'森林守卫',price:CONFIG.pack.price,plants:catalog.filter(active).map(c=>c.id),maxMisses:CONFIG.pack.ssrPityPack-1,enabled:true},river:{id:'river',grade:4,region:'river-islands',name:'河谷远征',enabled:false},stars:{id:'stars',grade:5,region:'star-ruins',name:'星海遗迹',enabled:false}};
function ensure(db){if(!db.rewardState)db.rewardState={version:3,pools:{forest:{misses:0,opened:0}},counts:{},skin:{id:'starlight-sunflower',target:3,name:'森林园丁向日葵',fragments:0,need:10,unlocked:false},decoration:{id:'forest-flower-path',name:'森林花径',fragments:0,need:10,unlocked:false},effects:{}};const s=db.rewardState;s.configVersion=CONFIG.version;s.exclusiveFragments??={};s.milestones??={};s.items??={skip:{fragments:0,count:0},refresh:{fragments:0,count:0},refreshUses:{},skipUses:{},log:[]};s.items.skipUses??={};if(!s.items.starterGranted){s.items.skip.count+=CONFIG.items.starterEach;s.items.refresh.count+=CONFIG.items.starterEach;s.items.starterGranted=CONFIG.items.initialGrantRef;}return s}
function snapshot(db){return JSON.parse(JSON.stringify(ensure(db)))}
function randomUnit(){if(global.crypto?.getRandomValues){const v=new Uint32Array(1);global.crypto.getRandomValues(v);return v[0]/4294967296}return Math.random()}
function gainPlant(db,id,changes=[]){const state=ensure(db),c=catalog[id],previous=state.counts[id]||0,duplicate=previous>0;state.counts[id]=previous+1;const leaves=duplicate?CONFIG.duplicate.leaves[c.rarity]:0;db.wallet.leaves+=leaves;const before=state.exclusiveFragments[id]||0,after=Math.min(CONFIG.duplicate.fragmentCap,before+(duplicate?CONFIG.duplicate.exclusiveFragments:0));state.exclusiveFragments[id]=after;state.milestones[id]=CONFIG.duplicate.milestones.filter(n=>after>=n);const reached=CONFIG.duplicate.milestones.filter(n=>before<n&&after>=n);let effect=duplicate?'重复伙伴 → '+leaves+'叶片 · 专属碎片 '+after+'/30':'新伙伴加入收藏，可在花盆中布置';for(const n of reached)changes.push(c.name+'专属成长达到'+n+'片，素材制作中');if(!duplicate)changes.push(c.name+'首次加入');return {type:'plant',plantId:id,name:c.name,rarity:c.rarity,duplicate,quantity:1,leaves,exclusiveFragments:after,fragmentGain:after-before,milestones:state.milestones[id],effect}}
function open(db,packId,r=randomUnit){
 const pack=db.packs.find(p=>p.id===packId);if(!pack)throw Error('找不到已兑换的卡包');
 if(pack.rewardResult)return {result:pack.rewardResult,snapshot:snapshot(db),replayed:true};
 if(pack.status!=='available')throw Error('该卡包已经开启');
 const pool=POOLS[pack.poolId||'forest'];if(!pool?.enabled)throw Error('卡池尚未开放');
 const saved=JSON.stringify({rewardState:db.rewardState,wallet:db.wallet,pack});
 try{
  const state=ensure(db),track=state.pools[pool.id]??={misses:0,opened:0},before=track.misses,forced=before>=pool.maxMisses;
  const roll=()=>{const x=r();if(!Number.isFinite(x)||x<0||x>=1)throw Error('随机数必须在0到1之间');return x};
  const pick=list=>{if(!list.length)throw Error('正式卡池条目缺失');return list[Math.floor(roll()*list.length)]};
  const tier=p=>{const x=roll();return x<p.R?'R':x<p.R+p.SR?'SR':'SSR'};
  const complete=pool.plants.every(id=>state.counts[id]>0),sr=pool.plants.filter(id=>catalog[id].rarity==='SR');
  const tiers=[tier(CONFIG.pack.plantSlots[0]),tier(CONFIG.pack.plantSlots[1])];
  tiers.push(forced?'SSR':tier(tiers.every(x=>x==='R')?CONFIG.pack.plantSlots[2].whenFirstTwoAreR:CONFIG.pack.plantSlots[2].normal));
  const baseline=tiers.map(t=>({type:'plant',id:pick(pool.plants.filter(id=>catalog[id].rarity===t))}));
  if(complete){
   let eligible=tiers.map((t,i)=>t==='SR'?i:-1).filter(i=>i>=0);
   if(!tiers.includes('SSR')&&eligible.length){const protect=pick(eligible);eligible=eligible.filter(i=>i!==protect)}
   for(let i=eligible.length-1;i>0;i--){const j=Math.floor(roll()*(i+1));[eligible[i],eligible[j]]=[eligible[j],eligible[i]]}
   let hasFunction=false;
   for(const i of eligible){const choice=pick(hasFunction?sr:[...sr,'skip','refresh']);if(typeof choice==='string'){baseline[i]={type:'function',id:choice};hasFunction=true}else baseline[i]={type:'plant',id:choice}}
  }
  const changes=[],rows=baseline.map((c,i)=>{if(c.type==='plant')return gainPlant(db,c.id,changes);state.items[c.id].count++;return {type:'function',itemId:c.id,name:c.id==='skip'?'题目跳过卡':'每日刷新卡',rarity:'SR',quantity:1,effect:'已存入道具背包'}});
  const owned=new Set([...(state.accessoryOwned||[]),...(db.wearableInventory?.owned||[])]);
  const published=global.WEARABLE_CATALOG;if(!Array.isArray(published)||!published.length)throw Error('正式部件名册未载入');
  const remaining=published.filter(c=>!owned.has(c.id));let candidates=remaining.filter(c=>c.plantId!==3&&state.counts[c.plantId]>0);if(!candidates.length)candidates=remaining;
  if(candidates.length){let target=roll()<CONFIG.pack.accessory.rarityWeights.SR?'SR':'SSR';let options=candidates.filter(c=>c.rarity===target);if(!options.length)options=candidates;const c=pick(options);owned.add(c.id);state.accessoryOwned=[...owned];rows.push({type:'accessory',accessoryId:c.id,cardId:c.reviewKey,plantId:c.plantId,slot:c.slot,name:c.name,rarity:c.rarity,quantity:1,cardImage:c.cardImage,effect:'新部件已收藏，可在对应植物的装扮中穿戴'})}
  else{db.wallet.leaves+=CONFIG.pack.accessory.allCollectedLeaves;rows.push({type:'leafCard',name:'叶片卡',rarity:'R',quantity:1,effect:'正式部件已收齐，获得1片叶片'})}
  state.accessoryCatalogVersion='wearables-raster-v1-48';
  track.misses=rows.some(c=>c.type==='plant'&&c.rarity==='SSR')?0:before+1;track.opened++;
  pack.status='opened';pack.poolId=pool.id;pack.cards=rows.filter(c=>c.type==='plant').map(c=>c.plantId);pack.openedAt=new Date().toISOString();
  const leaves=rows.reduce((n,row)=>n+(row.leaves||0)+(row.type==='leafCard'?row.quantity:0),0);
  pack.rewardResult={version:4,configVersion:CONFIG.version,packId,poolId:pool.id,rows,highRarity:rows.some(c=>c.rarity==='SSR')?'SSR':'SR',forced,missesBefore:before,missesAfter:track.misses,leaves,changes,functionEligible:complete,at:pack.openedAt};
  return {result:pack.rewardResult,snapshot:snapshot(db),replayed:false};
 }catch(e){const old=JSON.parse(saved);db.wallet=old.wallet;if(old.rewardState)db.rewardState=old.rewardState;else delete db.rewardState;for(const k of Object.keys(pack))delete pack[k];Object.assign(pack,old.pack);throw e}
}
function exchange(db,id){const c=catalog[id];if(!c||!active(c))throw Error('这位不参与卡牌兑换');const state=ensure(db);if(state.counts[id])throw Error('已经拥有这位伙伴');const cost=CONFIG.exchange[c.rarity];if(db.wallet.leaves<cost)throw Error('叶片还不够');db.wallet.leaves-=cost;state.counts[id]=1;db.ledger.push({at:new Date().toISOString(),resource:'leaves',amount:-cost,reason:'指定兑换 '+c.name,ref:'exchange:'+id});return snapshot(db)}
function grantPlant(db,id,ref){const c=catalog[id];if(!c||!active(c)||!ref)throw Error('植物奖励参数无效');const state=ensure(db);state.directGrants??={};if(state.directGrants[ref])return {...state.directGrants[ref],replayed:true};const result={...gainPlant(db,id),ref,at:new Date().toISOString()};state.directGrants[ref]=result;return result}
global.RewardEngine={CONFIG,catalog,POOLS,ensure,snapshot,open,exchange,grantPlant};if(typeof module!=='undefined')module.exports=global.RewardEngine;
})(typeof window!=='undefined'?window:globalThis);

(function(global){
function effect(state,id){return state.cosmeticChoices?.[id]==='base'?'':state.effects[id]||''}
function equip(db,id,choice){const s=RewardEngine.ensure(db);if(id===3){if(!['base','skin','twin'].includes(choice)||choice==='skin'&&!s.skin.unlocked)throw Error('这套吉祥物装扮还没有解锁。');s.skin.equipped=choice==='skin';s.skin.variant=choice==='twin'?'twin':'single';return;}
const c=RewardEngine.catalog[id];if(!c||c.collectible===false||!s.counts[id])throw Error('先邀请这位植物加入花园吧。');if(!['base','effect','cowboy'].includes(choice)||choice==='effect'&&!s.effects[id]||choice==='cowboy'&&(id!==0||(s.counts[0]||0)<2))throw Error('这套外观还没有解锁。');s.cosmeticChoices??={};s.cosmeticChoices[id]=choice;}
global.CosmeticEngine={effect,equip};if(typeof module!=='undefined')module.exports=global.CosmeticEngine;
})(typeof window!=='undefined'?window:globalThis);

// Temporary native vector previews; never claim these are extracted original PNGs.
(function(g){g.WEARABLE_CATALOG=[{"id":"wear-a01-01","reviewKey":"A01-01","name":"叶徽牛仔帽","plantId":0,"plantName":"豌豆射手","theme":"西部小牛仔","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A01-01-叶徽牛仔帽-SR-卡面样例-v01.png","wearImage":"assets/wearables/A01-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":146,"y":40,"width":143,"height":70},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"78\" rx=\"70\" ry=\"19\" fill=\"#ba8549\"/><path d=\"M35 71 44 27Q65 11 83 28Q103 8 118 30L127 71Q84 89 35 71Z\" fill=\"#ba8549\" /><path d=\"M37 59Q80 74 124 56L126 72Q80 91 35 72Z\" fill=\"#7b4730\" /><ellipse cx=\"82\" cy=\"63\" rx=\"13\" ry=\"13\" fill=\"#f4cd59\"/><path d=\"M82 64q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>","frontSvg":""},{"id":"wear-a01-02","reviewKey":"A01-02","name":"红色三角领巾","plantId":0,"plantName":"豌豆射手","theme":"西部小牛仔","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A01-02-红色三角领巾-SR-卡面样例-v01.png","wearImage":"assets/wearables/A01-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":145,"y":189,"width":82,"height":62},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"32\" rx=\"52\" ry=\"24\" fill=\"#d9423e\"/><ellipse cx=\"80\" cy=\"28\" rx=\"37\" ry=\"12\" fill=\"#61382d\"/><path d=\"M30 35 78 50 128 34 91 96 69 105Z\" fill=\"#d9423e\" /><path d=\"M124 33 153 20 142 52 157 79 124 59 113 40Z\" fill=\"#d9423e\" /></g></svg>","frontSvg":""},{"id":"wear-a01-03","reviewKey":"A01-03","name":"盘绕套索与挂扣","plantId":0,"plantName":"豌豆射手","theme":"西部小牛仔","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A01-03-盘绕套索与挂扣-SR-卡面样例-v01.png","wearImage":"assets/wearables/A01-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":228,"y":217,"width":82,"height":85},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"76\" cy=\"58\" rx=\"43\" ry=\"35\" fill=\"none\"/><g fill=\"none\" stroke=\"#cb9847\" stroke-width=\"10\"><ellipse cx=\"76\" cy=\"58\" rx=\"44\" ry=\"35\"/><ellipse cx=\"76\" cy=\"58\" rx=\"31\" ry=\"24\"/></g><rect x=\"101\" y=\"10\" width=\"22\" height=\"35\" rx=\"3\" fill=\"#865333\"/></g></svg>","frontSvg":""},{"id":"wear-a01-04","reviewKey":"A01-04","name":"仙人掌纹木桶盆","plantId":0,"plantName":"豌豆射手","theme":"西部小牛仔","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A01-04-仙人掌纹木桶盆-SSR-卡面样例-v01.png","wearImage":"assets/wearables/A01-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":253,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M17 37 29 91Q80 116 131 91L143 37Z\" fill=\"#976431\" /><ellipse cx=\"80\" cy=\"37\" rx=\"63\" ry=\"21\" fill=\"#dfb15d\"/><ellipse cx=\"80\" cy=\"34\" rx=\"51\" ry=\"12\" fill=\"#3a312e\"/><path d=\"M70 89V61m0 18q-16 0-16-16m16 10q17 0 17-20\" fill=\"none\" stroke=\"#542f1f\" stroke-width=\"8\" stroke-linecap=\"round\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><path d=\"M17 37 29 91Q80 116 131 91L143 37Z\" fill=\"#976431\" /><ellipse cx=\"80\" cy=\"37\" rx=\"63\" ry=\"21\" fill=\"#dfb15d\"/><ellipse cx=\"80\" cy=\"34\" rx=\"51\" ry=\"12\" fill=\"#3a312e\"/><path d=\"M70 89V61m0 18q-16 0-16-16m16 10q17 0 17-20\" fill=\"none\" stroke=\"#542f1f\" stroke-width=\"8\" stroke-linecap=\"round\"/></g></svg>"},{"id":"wear-a02-01","reviewKey":"A02-01","name":"星星头箍","plantId":3,"plantName":"向日葵","theme":"星光领航员","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A02-01-星星头箍-SR-独立卡-v01.png","wearImage":"assets/wearables/A02-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":60,"width":178,"height":70},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M12 90Q24 18 80 29Q137 15 149 90\" fill=\"none\" stroke=\"#e7b84e\" stroke-width=\"10\"/><path transform=\"translate(80 29)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#51bcf3\"/><path transform=\"translate(25 61)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#51bcf3\"/><path transform=\"translate(136 61)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#51bcf3\"/></g></svg>","frontSvg":""},{"id":"wear-a02-02","reviewKey":"A02-02","name":"蓝色星图披肩","plantId":3,"plantName":"向日葵","theme":"星光领航员","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A02-02-蓝色星图披肩-SR-独立卡-v01.png","wearImage":"assets/wearables/A02-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":160,"y":207,"width":132,"height":78},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M44 12Q80 30 116 12L148 83 102 100 80 59 58 100 12 83Z\" fill=\"#244f99\" /><path d=\"M44 12Q80 36 116 12L115 26Q80 47 45 26Z\" fill=\"#f5df9e\" /><path transform=\"translate(80 39)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#67c9ef\"/><path transform=\"translate(44 67)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#ffdd6f\"/><path transform=\"translate(117 69)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#ffdd6f\"/></g></svg>","frontSvg":""},{"id":"wear-a02-03","reviewKey":"A02-03","name":"小望远镜与支架","plantId":3,"plantName":"向日葵","theme":"星光领航员","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A02-03-小望远镜与支架-SR-独立卡-v01.png","wearImage":"assets/wearables/A02-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":244,"y":226,"width":85,"height":100},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"72\" y=\"51\" width=\"15\" height=\"49\" rx=\"6\" fill=\"#c89436\"/><ellipse cx=\"80\" cy=\"99\" rx=\"39\" ry=\"9\" fill=\"#d7ad4c\"/><g transform=\"rotate(-18 80 43)\"><rect x=\"24\" y=\"27\" width=\"101\" height=\"30\" rx=\"6\" fill=\"#234c91\"/><ellipse cx=\"125\" cy=\"42\" rx=\"16\" ry=\"24\" fill=\"#ddb445\"/><ellipse cx=\"128\" cy=\"42\" rx=\"11\" ry=\"18\" fill=\"#61c4ed\"/><path transform=\"translate(69 41)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#ffdd6f\"/></g></g></svg>","frontSvg":""},{"id":"wear-a02-04","reviewKey":"A02-04","name":"弯月观星盆","plantId":3,"plantName":"向日葵","theme":"星光领航员","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A02-04-弯月观星盆-SSR-独立卡-v01.png","wearImage":"assets/wearables/A02-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":253,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M17 37 29 91Q80 116 131 91L143 37Z\" fill=\"#254587\" /><ellipse cx=\"80\" cy=\"37\" rx=\"63\" ry=\"21\" fill=\"#e9c356\"/><ellipse cx=\"80\" cy=\"34\" rx=\"51\" ry=\"12\" fill=\"#3a312e\"/><path d=\"M85 58q-27 25-2 42q-43-5-35-31q8-23 37-11Z\" fill=\"#f4d274\" /><path transform=\"translate(107 79)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#ffdd6f\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><path d=\"M17 37 29 91Q80 116 131 91L143 37Z\" fill=\"#254587\" /><ellipse cx=\"80\" cy=\"37\" rx=\"63\" ry=\"21\" fill=\"#e9c356\"/><ellipse cx=\"80\" cy=\"34\" rx=\"51\" ry=\"12\" fill=\"#3a312e\"/><path d=\"M85 58q-27 25-2 42q-43-5-35-31q8-23 37-11Z\" fill=\"#f4d274\" /><path transform=\"translate(107 79)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#ffdd6f\"/></g></svg>"},{"id":"wear-a03-01","reviewKey":"A03-01","name":"圆顶骑士头盔","plantId":4,"plantName":"坚果","theme":"城堡小骑士","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A03-01-圆顶骑士头盔-SR-独立卡-v01.png","wearImage":"assets/wearables/A03-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":62,"width":175,"height":95},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M27 84 29 45Q34 8 80 9Q126 8 132 45L134 84 113 94 111 58H49L48 94Z\" fill=\"#b9c9d5\" /><path d=\"M32 52Q80 71 129 52L126 64Q80 80 34 64Z\" fill=\"#e6c16b\" /><path d=\"M60 24V46m20-23v26m20-24v22\" fill=\"none\" stroke=\"#526171\" stroke-width=\"7\"/><path d=\"M63 13Q38-7 13 11Q20 30 49 28Z\" fill=\"#367ed4\" /></g></svg>","frontSvg":""},{"id":"wear-a03-02","reviewKey":"A03-02","name":"蓝白肩披","plantId":4,"plantName":"坚果","theme":"城堡小骑士","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A03-02-蓝白肩披-SR-独立卡-v01.png","wearImage":"assets/wearables/A03-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":160,"y":213,"width":157,"height":65},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M44 12Q80 30 116 12L148 83 102 100 80 59 58 100 12 83Z\" fill=\"#447ec4\" /><path d=\"M44 12Q80 36 116 12L115 26Q80 47 45 26Z\" fill=\"#f5df9e\" /><path d=\"M17 75 57 91 81 58 104 91 142 76\" fill=\"none\" stroke=\"#f6f3df\" stroke-width=\"14\"/><ellipse cx=\"80\" cy=\"38\" rx=\"13\" ry=\"13\" fill=\"#e4bc55\"/></g></svg>","frontSvg":""},{"id":"wear-a03-03","reviewKey":"A03-03","name":"叶纹圆盾","plantId":4,"plantName":"坚果","theme":"城堡小骑士","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A03-03-叶纹圆盾-SR-独立卡-v01.png","wearImage":"assets/wearables/A03-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":244,"y":223,"width":98,"height":105},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"57\" rx=\"49\" ry=\"49\" fill=\"#c6d0d4\"/><ellipse cx=\"80\" cy=\"57\" rx=\"40\" ry=\"40\" fill=\"#c38a43\"/><path d=\"M81 59q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>","frontSvg":""},{"id":"wear-a03-04","reviewKey":"A03-04","name":"草地石堡底座","plantId":4,"plantName":"坚果","theme":"城堡小骑士","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A03-04-草地石堡底座-SSR-独立卡-v01.png","wearImage":"assets/wearables/A03-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":238,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#afb2a2\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#afb2a2\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#87b952\"/><path d=\"M25 61 30 85m32-9v23m35-23v22m32-36-2 24\" fill=\"none\" stroke=\"#717566\" stroke-width=\"3\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#afb2a2\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#afb2a2\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#87b952\"/><path d=\"M25 61 30 85m32-9v23m35-23v22m32-36-2 24\" fill=\"none\" stroke=\"#717566\" stroke-width=\"3\"/></g></svg>"},{"id":"wear-a04-01","reviewKey":"A04-01","name":"开孔矿灯帽","plantId":8,"plantName":"土豆地雷","theme":"地下探险家","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A04-01-开孔矿灯帽-SR-独立卡-v01.png","wearImage":"assets/wearables/A04-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":116,"width":150,"height":69},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"78\" rx=\"70\" ry=\"19\" fill=\"#b88544\"/><path d=\"M35 71 44 27Q65 11 83 28Q103 8 118 30L127 71Q84 89 35 71Z\" fill=\"#b88544\" /><path d=\"M37 59Q80 74 124 56L126 72Q80 91 35 72Z\" fill=\"#7b4730\" /><ellipse cx=\"80\" cy=\"56\" rx=\"24\" ry=\"24\" fill=\"#cfad59\"/><ellipse cx=\"80\" cy=\"56\" rx=\"17\" ry=\"17\" fill=\"#fff4a6\"/><ellipse cx=\"83\" cy=\"19\" rx=\"15\" ry=\"7\" fill=\"#402b24\"/></g></svg>","frontSvg":""},{"id":"wear-a04-02","reviewKey":"A04-02","name":"工具腰带","plantId":8,"plantName":"土豆地雷","theme":"地下探险家","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A04-02-工具腰带-SR-独立卡-v01.png","wearImage":"assets/wearables/A04-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":160,"y":228,"width":169,"height":55},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M14 35Q80 10 146 35L144 69Q80 45 16 70Z\" fill=\"#9a6038\" /><rect x=\"67\" y=\"35\" width=\"27\" height=\"29\" rx=\"3\" fill=\"#f3c75c\"/><rect x=\"75\" y=\"41\" width=\"12\" height=\"17\" rx=\"2\" fill=\"#8b552c\"/><rect x=\"109\" y=\"45\" width=\"28\" height=\"42\" rx=\"6\" fill=\"#ac733d\"/><path d=\"M32 31 18 8 11 33 20 41 20 87 31 87Z\" fill=\"#aab7be\" /></g></svg>","frontSvg":""},{"id":"wear-a04-03","reviewKey":"A04-03","name":"地图与小铲","plantId":8,"plantName":"土豆地雷","theme":"地下探险家","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A04-03-地图与小铲-SR-独立卡-v01.png","wearImage":"assets/wearables/A04-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":246,"y":229,"width":79,"height":87},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M18 20 99 13 105 91 17 98Z\" fill=\"#efcf83\" /><path d=\"M29 77 48 57 58 66 83 29\" fill=\"none\" stroke=\"#b8573d\" stroke-width=\"4\" stroke-dasharray=\"6 4\"/><path d=\"M120 57V99\" fill=\"none\" stroke=\"#87522c\" stroke-width=\"13\"/><path d=\"M103 51Q99 22 122 6Q145 24 140 53L122 66Z\" fill=\"#acbfc6\" /></g></svg>","frontSvg":""},{"id":"wear-a04-04","reviewKey":"A04-04","name":"洞口剖面土台","plantId":8,"plantName":"土豆地雷","theme":"地下探险家","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A04-04-洞口剖面土台-SSR-独立卡-v01.png","wearImage":"assets/wearables/A04-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":233,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#8d613a\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#8d613a\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#c39352\"/><ellipse cx=\"80\" cy=\"49\" rx=\"40\" ry=\"14\" fill=\"#604127\"/><ellipse cx=\"20\" cy=\"77\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/><ellipse cx=\"44\" cy=\"69\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/><ellipse cx=\"118\" cy=\"77\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/><ellipse cx=\"140\" cy=\"69\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#8d613a\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#8d613a\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#c39352\"/><ellipse cx=\"80\" cy=\"49\" rx=\"40\" ry=\"14\" fill=\"#604127\"/><ellipse cx=\"20\" cy=\"77\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/><ellipse cx=\"44\" cy=\"69\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/><ellipse cx=\"118\" cy=\"77\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/><ellipse cx=\"140\" cy=\"69\" rx=\"12\" ry=\"10\" fill=\"#b38048\"/></g></svg>"},{"id":"wear-a05-01","reviewKey":"A05-01","name":"叶形邮差帽","plantId":9,"plantName":"回旋镖射手","theme":"森林邮递员","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A05-01-叶形邮差帽-SR-独立卡-v01.png","wearImage":"assets/wearables/A05-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":68,"width":131,"height":72},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"78\" rx=\"70\" ry=\"19\" fill=\"#45963e\"/><path d=\"M35 71 44 27Q65 11 83 28Q103 8 118 30L127 71Q84 89 35 71Z\" fill=\"#45963e\" /><path d=\"M37 59Q80 74 124 56L126 72Q80 91 35 72Z\" fill=\"#765033\" /><path d=\"M39 48Q60-4 123 6Q122 37 77 54Z\" fill=\"#76ba4a\" /><ellipse cx=\"73\" cy=\"64\" rx=\"12\" ry=\"12\" fill=\"#efc96b\"/></g></svg>","frontSvg":""},{"id":"wear-a05-02","reviewKey":"A05-02","name":"斜挎信件包","plantId":9,"plantName":"回旋镖射手","theme":"森林邮递员","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A05-02-斜挎信件包-SR-独立卡-v01.png","wearImage":"assets/wearables/A05-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":150,"y":201,"width":105,"height":100},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M40 94Q5 1 110 14L132 31Q38 16 63 87Z\" fill=\"#754b2f\" /><rect x=\"37\" y=\"26\" width=\"87\" height=\"73\" rx=\"15\" fill=\"#9e643e\"/><rect x=\"32\" y=\"26\" width=\"96\" height=\"36\" rx=\"9\" fill=\"#9e643e\"/><rect x=\"69\" y=\"48\" width=\"23\" height=\"15\" rx=\"2\" fill=\"#edbc55\"/></g></svg>","frontSvg":""},{"id":"wear-a05-03","reviewKey":"A05-03","name":"三封种子信","plantId":9,"plantName":"回旋镖射手","theme":"森林邮递员","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A05-03-三封种子信-SR-独立卡-v01.png","wearImage":"assets/wearables/A05-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":242,"y":221,"width":80,"height":76},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><g transform=\"translate(-12 0)\"><rect x=\"30\" y=\"12\" width=\"72\" height=\"47\" rx=\"3\" fill=\"#ffedbc\"/><path d=\"M31 13 66 41 101 13\" fill=\"none\" stroke=\"#c29b5a\" stroke-width=\"3\"/><ellipse cx=\"65\" cy=\"37\" rx=\"8\" ry=\"9\" fill=\"#6cad40\"/></g><g transform=\"translate(40 5)\"><rect x=\"30\" y=\"12\" width=\"72\" height=\"47\" rx=\"3\" fill=\"#ffedbc\"/><path d=\"M31 13 66 41 101 13\" fill=\"none\" stroke=\"#c29b5a\" stroke-width=\"3\"/><ellipse cx=\"65\" cy=\"37\" rx=\"8\" ry=\"9\" fill=\"#6baadd\"/></g><g transform=\"translate(7 35)\"><rect x=\"30\" y=\"12\" width=\"72\" height=\"47\" rx=\"3\" fill=\"#ffedbc\"/><path d=\"M31 13 66 41 101 13\" fill=\"none\" stroke=\"#c29b5a\" stroke-width=\"3\"/><ellipse cx=\"65\" cy=\"37\" rx=\"8\" ry=\"9\" fill=\"#da656d\"/></g></g></svg>","frontSvg":""},{"id":"wear-a05-04","reviewKey":"A05-04","name":"邮筒草坪底座","plantId":9,"plantName":"回旋镖射手","theme":"森林邮递员","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A05-04-邮筒草坪底座-SSR-独立卡-v01.png","wearImage":"assets/wearables/A05-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":255,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#4d853f\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#4d853f\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#88b759\"/><rect x=\"89\" y=\"4\" width=\"54\" height=\"44\" rx=\"17\" fill=\"#d94d37\"/><rect x=\"111\" y=\"42\" width=\"9\" height=\"36\" rx=\"6\" fill=\"#8a5c36\"/><path d=\"M140 10V0h14v18Z\" fill=\"#e86643\" /></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#4d853f\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#4d853f\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#88b759\"/><rect x=\"89\" y=\"4\" width=\"54\" height=\"44\" rx=\"17\" fill=\"#d94d37\"/><rect x=\"111\" y=\"42\" width=\"9\" height=\"36\" rx=\"6\" fill=\"#8a5c36\"/><path d=\"M140 10V0h14v18Z\" fill=\"#e86643\" /></g></svg>"},{"id":"wear-a06-01","reviewKey":"A06-01","name":"低矮厨师帽","plantId":10,"plantName":"冰冻生菜","theme":"甜点小厨师","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A06-01-低矮厨师帽-SR-独立卡-v01.png","wearImage":"assets/wearables/A06-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":93,"width":142,"height":70},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"42\" y=\"49\" width=\"79\" height=\"39\" rx=\"6\" fill=\"#f8f1da\"/><ellipse cx=\"49\" cy=\"45\" rx=\"23\" ry=\"23\" fill=\"#fff6df\"/><ellipse cx=\"78\" cy=\"29\" rx=\"30\" ry=\"27\" fill=\"#fff6df\"/><ellipse cx=\"110\" cy=\"43\" rx=\"23\" ry=\"23\" fill=\"#fff6df\"/><rect x=\"40\" y=\"74\" width=\"84\" height=\"17\" rx=\"6\" fill=\"#df7191\"/><path transform=\"translate(68 68)\" d=\"M0-15 5-5 16-5 8 3 11 15 0 8-11 15-8 3-16-5-5-5Z\" fill=\"#e9ba62\"/></g></svg>","frontSvg":""},{"id":"wear-a06-02","reviewKey":"A06-02","name":"格纹围兜","plantId":10,"plantName":"冰冻生菜","theme":"甜点小厨师","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A06-02-格纹围兜-SR-独立卡-v01.png","wearImage":"assets/wearables/A06-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":160,"y":219,"width":134,"height":74},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M32 17Q80 47 128 17L145 78Q80 127 15 78Z\" fill=\"#f2bcc5\" /><path d=\"M30 46 130 69M26 68 118 90M55 30 50 95M88 36 86 106M118 29 120 91\" fill=\"none\" stroke=\"#f9f0df\" stroke-width=\"11\"/><path d=\"M80 41 62 29 62 55 80 46 100 58 101 29Z\" fill=\"#e67598\" /></g></svg>","frontSvg":""},{"id":"wear-a06-03","reviewKey":"A06-03","name":"莓果冰点盘","plantId":10,"plantName":"冰冻生菜","theme":"甜点小厨师","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A06-03-莓果冰点盘-SR-独立卡-v01.png","wearImage":"assets/wearables/A06-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":244,"y":244,"width":91,"height":77},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"88\" rx=\"67\" ry=\"16\" fill=\"#f3dfd5\"/><ellipse cx=\"80\" cy=\"80\" rx=\"57\" ry=\"11\" fill=\"#fff4e3\"/><ellipse cx=\"73\" cy=\"59\" rx=\"32\" ry=\"28\" fill=\"#f4a7bb\"/><ellipse cx=\"103\" cy=\"62\" rx=\"24\" ry=\"24\" fill=\"#fff4e6\"/><ellipse cx=\"70\" cy=\"34\" rx=\"13\" ry=\"15\" fill=\"#de4d48\"/><path d=\"M70 20q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /><ellipse cx=\"105\" cy=\"48\" rx=\"9\" ry=\"9\" fill=\"#426dad\"/></g></svg>","frontSvg":""},{"id":"wear-a06-04","reviewKey":"A06-04","name":"饼干纹圆碟","plantId":10,"plantName":"冰冻生菜","theme":"甜点小厨师","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A06-04-饼干纹圆碟-SSR-独立卡-v01.png","wearImage":"assets/wearables/A06-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":257,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#edc278\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#edc278\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#fff0cf\"/><ellipse cx=\"14\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"38\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"62\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"86\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"110\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"134\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><path d=\"M72 75 48 64 48 91 73 84 99 95 101 66 78 76Z\" fill=\"#ed82a0\" /></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#edc278\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#edc278\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#fff0cf\"/><ellipse cx=\"14\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"38\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"62\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"86\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"110\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><ellipse cx=\"134\" cy=\"60\" rx=\"12\" ry=\"16\" fill=\"#e3b15e\"/><path d=\"M72 75 48 64 48 91 73 84 99 95 101 66 78 76Z\" fill=\"#ed82a0\" /></g></svg>"},{"id":"wear-a07-01","reviewKey":"A07-01","name":"软边探险帽","plantId":11,"plantName":"噬碑藤","theme":"遗迹考古家","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A07-01-软边探险帽-SR-独立卡-v01.png","wearImage":"assets/wearables/A07-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":155,"y":91,"width":157,"height":85},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"78\" rx=\"70\" ry=\"19\" fill=\"#dbbe7f\"/><path d=\"M35 71 44 27Q65 11 83 28Q103 8 118 30L127 71Q84 89 35 71Z\" fill=\"#dbbe7f\" /><path d=\"M37 59Q80 74 124 56L126 72Q80 91 35 72Z\" fill=\"#8b5e38\" /><path d=\"M59 49q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>","frontSvg":""},{"id":"wear-a07-02","reviewKey":"A07-02","name":"卷轴斜挎带","plantId":11,"plantName":"噬碑藤","theme":"遗迹考古家","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A07-02-卷轴斜挎带-SR-独立卡-v02.png","wearImage":"assets/wearables/A07-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":115,"y":208,"width":95,"height":60},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M40 94Q5 1 110 14L132 31Q38 16 63 87Z\" fill=\"#754b2f\" /><rect x=\"31\" y=\"44\" width=\"99\" height=\"42\" rx=\"16\" fill=\"#d5af6e\"/><ellipse cx=\"31\" cy=\"65\" rx=\"14\" ry=\"21\" fill=\"#f3d497\"/><ellipse cx=\"31\" cy=\"65\" rx=\"7\" ry=\"13\" fill=\"#9b763e\"/><rect x=\"52\" y=\"42\" width=\"10\" height=\"49\" rx=\"1\" fill=\"#865b34\"/><rect x=\"99\" y=\"42\" width=\"10\" height=\"49\" rx=\"1\" fill=\"#865b34\"/></g></svg>","frontSvg":""},{"id":"wear-a07-03","reviewKey":"A07-03","name":"小刷与化石盒","plantId":11,"plantName":"噬碑藤","theme":"遗迹考古家","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A07-03-小刷与化石盒-SR-独立卡-v01.png","wearImage":"assets/wearables/A07-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":243,"y":231,"width":85,"height":88},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"37\" y=\"26\" width=\"87\" height=\"73\" rx=\"15\" fill=\"#96734d\"/><rect x=\"32\" y=\"26\" width=\"96\" height=\"36\" rx=\"9\" fill=\"#96734d\"/><rect x=\"69\" y=\"48\" width=\"23\" height=\"15\" rx=\"2\" fill=\"#edbc55\"/><rect x=\"47\" y=\"36\" width=\"65\" height=\"50\" rx=\"6\" fill=\"#dfca98\"/><ellipse cx=\"81\" cy=\"61\" rx=\"18\" ry=\"18\" fill=\"#b2935a\"/><path d=\"M82 61q-15-15-20 4q4 19 29 15\" fill=\"none\" stroke=\"#80623b\" stroke-width=\"3\"/><path d=\"M20 102 38 42\" fill=\"none\" stroke=\"#956138\" stroke-width=\"12\"/><path d=\"M20 46 17 18 48 24 40 52Z\" fill=\"#ead399\" /></g></svg>","frontSvg":""},{"id":"wear-a07-04","reviewKey":"A07-04","name":"沙地石板底座","plantId":11,"plantName":"噬碑藤","theme":"遗迹考古家","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A07-04-沙地石板底座-SSR-独立卡-v01.png","wearImage":"assets/wearables/A07-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":225,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#af966a\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#af966a\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#d4bc88\"/><path d=\"M31 75h17v13h-10m65-16h18v15\" fill=\"none\" stroke=\"#88734f\" stroke-width=\"4\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#af966a\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#af966a\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#d4bc88\"/><path d=\"M31 75h17v13h-10m65-16h18v15\" fill=\"none\" stroke=\"#88734f\" stroke-width=\"4\"/></g></svg>"},{"id":"wear-a08-01","reviewKey":"A08-01","name":"红色短额带","plantId":12,"plantName":"菜问","theme":"功夫小师傅","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A08-01-红色短额带-SR-独立卡-v01.png","wearImage":"assets/wearables/A08-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":105,"width":151,"height":61},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M17 40Q80 23 143 40L139 59Q80 44 20 61Z\" fill=\"#da4f40\" /><path d=\"M24 47 3 41 9 68 1 89 34 72Z\" fill=\"#d6473d\" /></g></svg>","frontSvg":""},{"id":"wear-a08-02","reviewKey":"A08-02","name":"练功短褂","plantId":12,"plantName":"菜问","theme":"功夫小师傅","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A08-02-练功短褂-SR-独立卡-v01.png","wearImage":"assets/wearables/A08-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":160,"y":202,"width":132,"height":101},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M43 13 65 22H95L118 13 143 36 125 53 120 103 78 91 37 103 34 54 17 36Z\" fill=\"#f3eed2\" /><path d=\"M66 23 80 35 95 23M80 36v56\" fill=\"none\" stroke=\"#578846\" stroke-width=\"7\"/><rect x=\"65\" y=\"49\" width=\"30\" height=\"7\" rx=\"2\" fill=\"#65944d\"/><rect x=\"65\" y=\"70\" width=\"30\" height=\"7\" rx=\"2\" fill=\"#65944d\"/></g></svg>","frontSvg":""},{"id":"wear-a08-03","reviewKey":"A08-03","name":"木制练功桩","plantId":12,"plantName":"菜问","theme":"功夫小师傅","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A08-03-木制练功桩-SR-独立卡-v01.png","wearImage":"assets/wearables/A08-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":252,"y":222,"width":80,"height":113},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"64\" y=\"8\" width=\"31\" height=\"90\" rx=\"6\" fill=\"#ad753b\"/><path d=\"M74 40h43m-38 25h40M72 93 43 105m46-12 31 12\" fill=\"none\" stroke=\"#885729\" stroke-width=\"13\" stroke-linecap=\"round\"/><path d=\"M64 24h31M64 80h31\" fill=\"none\" stroke=\"#e4d0a0\" stroke-width=\"6\"/></g></svg>","frontSvg":""},{"id":"wear-a08-04","reviewKey":"A08-04","name":"竹纹练功台","plantId":12,"plantName":"菜问","theme":"功夫小师傅","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A08-04-竹纹练功台-SSR-独立卡-v01.png","wearImage":"assets/wearables/A08-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":256,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#658343\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#658343\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#d5bf7a\"/><path d=\"M20 59H140M80 32V78M40 39 118 71\" fill=\"none\" stroke=\"#b4a263\" stroke-width=\"4\"/><path d=\"M80 55q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#829f4b\" /></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#658343\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#658343\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#d5bf7a\"/><path d=\"M20 59H140M80 32V78M40 39 118 71\" fill=\"none\" stroke=\"#b4a263\" stroke-width=\"4\"/><path d=\"M80 55q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#829f4b\" /></g></svg>"},{"id":"wear-a09-01","reviewKey":"A09-01","name":"飞行帽与护目镜","plantId":13,"plantName":"双重射手","theme":"云端飞行员","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A09-01-飞行帽与护目镜-SR-独立卡-v01.png","wearImage":"assets/wearables/A09-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":145,"y":47,"width":144,"height":78},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M26 93 25 49Q29 10 80 9Q131 10 135 49L134 94 110 99 109 56Q80 35 51 56L50 99Z\" fill=\"#976438\" /><path d=\"M27 93 27 50Q30 13 80 12Q130 13 133 50L133 93\" fill=\"none\" stroke=\"#f0e7ce\" stroke-width=\"8\"/><ellipse cx=\"58\" cy=\"33\" rx=\"23\" ry=\"16\" fill=\"#bdcdd3\"/><ellipse cx=\"105\" cy=\"33\" rx=\"23\" ry=\"16\" fill=\"#bdcdd3\"/><ellipse cx=\"58\" cy=\"33\" rx=\"16\" ry=\"11\" fill=\"#76c5e8\"/><ellipse cx=\"105\" cy=\"33\" rx=\"16\" ry=\"11\" fill=\"#76c5e8\"/></g></svg>","frontSvg":""},{"id":"wear-a09-02","reviewKey":"A09-02","name":"棕色短围巾","plantId":13,"plantName":"双重射手","theme":"云端飞行员","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A09-02-棕色短围巾-SR-独立卡-v01.png","wearImage":"assets/wearables/A09-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":143,"y":188,"width":87,"height":62},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"32\" rx=\"52\" ry=\"24\" fill=\"#bc7c43\"/><ellipse cx=\"80\" cy=\"28\" rx=\"37\" ry=\"12\" fill=\"#61382d\"/><path d=\"M30 35 78 50 128 34 91 96 69 105Z\" fill=\"#bc7c43\" /><path d=\"M124 33 153 20 142 52 157 79 124 59 113 40Z\" fill=\"#bc7c43\" /><path d=\"M40 47 73 61M96 64 118 48\" fill=\"none\" stroke=\"#f7ead2\" stroke-width=\"12\"/></g></svg>","frontSvg":""},{"id":"wear-a09-03","reviewKey":"A09-03","name":"双翼滑翔包","plantId":13,"plantName":"双重射手","theme":"云端飞行员","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A09-03-双翼滑翔包-SR-独立卡-v01.png","wearImage":"assets/wearables/A09-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":215,"y":211,"width":151,"height":93},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M46 25 10 15 3 58 42 72 57 49 106 49 120 72 155 55 147 15 111 25Z\" fill=\"#f4e3b9\" /><rect x=\"37\" y=\"26\" width=\"87\" height=\"73\" rx=\"15\" fill=\"#966039\"/><rect x=\"32\" y=\"26\" width=\"96\" height=\"36\" rx=\"9\" fill=\"#966039\"/><rect x=\"69\" y=\"48\" width=\"23\" height=\"15\" rx=\"2\" fill=\"#edbc55\"/><ellipse cx=\"80\" cy=\"57\" rx=\"15\" ry=\"15\" fill=\"#79c4e9\"/></g></svg>","frontSvg":""},{"id":"wear-a09-04","reviewKey":"A09-04","name":"云纹停机坪","plantId":13,"plantName":"双重射手","theme":"云端飞行员","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A09-04-云纹停机坪-SSR-独立卡-v01.png","wearImage":"assets/wearables/A09-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":253,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#9b7646\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#9b7646\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#f0edd8\"/><path d=\"M45 75 61 33H99L117 75Z\" fill=\"#9d9b89\" /><path d=\"M80 37V73\" fill=\"none\" stroke=\"#fff6df\" stroke-width=\"5\" stroke-dasharray=\"9 7\"/><ellipse cx=\"14\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/><ellipse cx=\"37\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/><ellipse cx=\"121\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/><ellipse cx=\"144\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#9b7646\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#9b7646\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#f0edd8\"/><path d=\"M45 75 61 33H99L117 75Z\" fill=\"#9d9b89\" /><path d=\"M80 37V73\" fill=\"none\" stroke=\"#fff6df\" stroke-width=\"5\" stroke-dasharray=\"9 7\"/><ellipse cx=\"14\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/><ellipse cx=\"37\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/><ellipse cx=\"121\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/><ellipse cx=\"144\" cy=\"62\" rx=\"16\" ry=\"14\" fill=\"#c6e9f4\"/></g></svg>"},{"id":"wear-a10-01","reviewKey":"A10-01","name":"麦穗草帽","plantId":15,"plantName":"卷心菜投手","theme":"丰收小农夫","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A10-01-麦穗草帽-SR-独立卡-v01.png","wearImage":"assets/wearables/A10-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":130,"y":126,"width":153,"height":78},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"78\" rx=\"70\" ry=\"19\" fill=\"#e2c371\"/><path d=\"M35 71 44 27Q65 11 83 28Q103 8 118 30L127 71Q84 89 35 71Z\" fill=\"#e2c371\" /><path d=\"M37 59Q80 74 124 56L126 72Q80 91 35 72Z\" fill=\"#92623c\" /><path d=\"M44 34 116 63M54 20 124 47M33 61 99 23\" fill=\"none\" stroke=\"#f5df99\" stroke-width=\"4\"/><path d=\"M113 51q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>","frontSvg":""},{"id":"wear-a10-02","reviewKey":"A10-02","name":"叶片围裙","plantId":15,"plantName":"卷心菜投手","theme":"丰收小农夫","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A10-02-叶片围裙-SR-独立卡-v01.png","wearImage":"assets/wearables/A10-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":149,"y":246,"width":111,"height":70},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M50 9 65 20 95 20 111 9 120 29 129 96Q80 115 30 96L40 29Z\" fill=\"#5eaa4b\" /><rect x=\"57\" y=\"51\" width=\"51\" height=\"31\" rx=\"6\" fill=\"#96cc71\"/><path d=\"M83 72q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#eff1d0\" /></g></svg>","frontSvg":""},{"id":"wear-a10-03","reviewKey":"A10-03","name":"迷你收获篮","plantId":15,"plantName":"卷心菜投手","theme":"丰收小农夫","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A10-03-迷你收获篮-SR-独立卡-v01.png","wearImage":"assets/wearables/A10-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":242,"y":244,"width":87,"height":86},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M25 51 34 98Q80 114 126 98L135 51Z\" fill=\"#bc8b48\" /><path d=\"M42 52Q39 6 80 10Q121 7 120 52\" fill=\"none\" stroke=\"#d9aa61\" stroke-width=\"10\"/><ellipse cx=\"56\" cy=\"47\" rx=\"20\" ry=\"20\" fill=\"#e06b3e\"/><path d=\"M88 46 110 82 123 30Z\" fill=\"#e6a048\" /><path d=\"M117 30q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /><path d=\"M48 36q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>","frontSvg":""},{"id":"wear-a10-04","reviewKey":"A10-04","name":"菜畦木箱底座","plantId":15,"plantName":"卷心菜投手","theme":"丰收小农夫","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A10-04-菜畦木箱底座-SSR-独立卡-v01.png","wearImage":"assets/wearables/A10-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":268,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"10\" y=\"32\" width=\"140\" height=\"65\" rx=\"6\" fill=\"#c79452\"/><path d=\"M10 48h140M10 72h140\" fill=\"none\" stroke=\"#8c673b\" stroke-width=\"4\"/><rect x=\"12\" y=\"30\" width=\"12\" height=\"68\" rx=\"1\" fill=\"#dfb778\"/><rect x=\"136\" y=\"30\" width=\"12\" height=\"68\" rx=\"1\" fill=\"#dfb778\"/><path d=\"M40 37q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /><path d=\"M80 37q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /><path d=\"M119 37q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><rect x=\"10\" y=\"32\" width=\"140\" height=\"65\" rx=\"6\" fill=\"#c79452\"/><path d=\"M10 48h140M10 72h140\" fill=\"none\" stroke=\"#8c673b\" stroke-width=\"4\"/><rect x=\"12\" y=\"30\" width=\"12\" height=\"68\" rx=\"1\" fill=\"#dfb778\"/><rect x=\"136\" y=\"30\" width=\"12\" height=\"68\" rx=\"1\" fill=\"#dfb778\"/><path d=\"M40 37q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /><path d=\"M80 37q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /><path d=\"M119 37q-24-34-30-6q4 23 30 16q30-6 26-29q-22-8-26 19\" fill=\"#75b94d\" /></g></svg>"},{"id":"wear-a11-01","reviewKey":"A11-01","name":"防寒耳罩帽","plantId":16,"plantName":"寒冰射手","theme":"极地科考员","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A11-01-防寒耳罩帽-SR-独立卡-v01.png","wearImage":"assets/wearables/A11-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":145,"y":51,"width":143,"height":76},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M26 93 25 49Q29 10 80 9Q131 10 135 49L134 94 110 99 109 56Q80 35 51 56L50 99Z\" fill=\"#305b92\" /><path d=\"M27 93 27 50Q30 13 80 12Q130 13 133 50L133 93\" fill=\"none\" stroke=\"#f0e7ce\" stroke-width=\"8\"/><ellipse cx=\"58\" cy=\"33\" rx=\"23\" ry=\"16\" fill=\"#bdcdd3\"/><ellipse cx=\"105\" cy=\"33\" rx=\"23\" ry=\"16\" fill=\"#bdcdd3\"/><ellipse cx=\"58\" cy=\"33\" rx=\"16\" ry=\"11\" fill=\"#76c5e8\"/><ellipse cx=\"105\" cy=\"33\" rx=\"16\" ry=\"11\" fill=\"#76c5e8\"/><ellipse cx=\"80\" cy=\"4\" rx=\"15\" ry=\"12\" fill=\"#f7f3e8\"/></g></svg>","frontSvg":""},{"id":"wear-a11-02","reviewKey":"A11-02","name":"蓝白保暖领套","plantId":16,"plantName":"寒冰射手","theme":"极地科考员","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A11-02-蓝白保暖领套-SR-独立卡-v01.png","wearImage":"assets/wearables/A11-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":142,"y":188,"width":91,"height":67},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"32\" rx=\"52\" ry=\"24\" fill=\"#3d6fad\"/><ellipse cx=\"80\" cy=\"28\" rx=\"37\" ry=\"12\" fill=\"#61382d\"/><path d=\"M30 35 78 50 128 34 91 96 69 105Z\" fill=\"#3d6fad\" /><path d=\"M124 33 153 20 142 52 157 79 124 59 113 40Z\" fill=\"#3d6fad\" /><path d=\"M40 36 71 47M95 48 121 36\" fill=\"none\" stroke=\"#f5f3e1\" stroke-width=\"16\"/><path d=\"M80 63v25m-12-18 24 12m-25 1 25-14\" fill=\"none\" stroke=\"#f6fbec\" stroke-width=\"4\"/></g></svg>","frontSvg":""},{"id":"wear-a11-03","reviewKey":"A11-03","name":"仪器包与温度计","plantId":16,"plantName":"寒冰射手","theme":"极地科考员","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A11-03-仪器包与温度计-SR-独立卡-v01.png","wearImage":"assets/wearables/A11-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":231,"y":217,"width":91,"height":103},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"37\" y=\"26\" width=\"87\" height=\"73\" rx=\"15\" fill=\"#e3e6d8\"/><rect x=\"32\" y=\"26\" width=\"96\" height=\"36\" rx=\"9\" fill=\"#e3e6d8\"/><rect x=\"69\" y=\"48\" width=\"23\" height=\"15\" rx=\"2\" fill=\"#edbc55\"/><rect x=\"41\" y=\"24\" width=\"11\" height=\"74\" rx=\"2\" fill=\"#385876\"/><rect x=\"106\" y=\"24\" width=\"11\" height=\"74\" rx=\"2\" fill=\"#385876\"/><rect x=\"17\" y=\"23\" width=\"18\" height=\"62\" rx=\"6\" fill=\"#a4daea\"/><ellipse cx=\"26\" cy=\"83\" rx=\"14\" ry=\"14\" fill=\"#dc6050\"/><rect x=\"23\" y=\"39\" width=\"6\" height=\"42\" rx=\"1\" fill=\"#dc6050\"/></g></svg>","frontSvg":""},{"id":"wear-a11-04","reviewKey":"A11-04","name":"雪地科考平台","plantId":16,"plantName":"寒冰射手","theme":"极地科考员","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A11-04-雪地科考平台-SSR-独立卡-v01.png","wearImage":"assets/wearables/A11-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":260,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#5e7c90\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#5e7c90\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#99d5e3\"/><path d=\"M11 54 29 41 46 47 66 37 87 46 109 35 145 48\" fill=\"none\" stroke=\"#f5f9eb\" stroke-width=\"13\"/><rect x=\"107\" y=\"7\" width=\"9\" height=\"42\" rx=\"6\" fill=\"#4d6c83\"/><rect x=\"104\" y=\"0\" width=\"16\" height=\"19\" rx=\"6\" fill=\"#f5ce65\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#5e7c90\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#5e7c90\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#99d5e3\"/><path d=\"M11 54 29 41 46 47 66 37 87 46 109 35 145 48\" fill=\"none\" stroke=\"#f5f9eb\" stroke-width=\"13\"/><rect x=\"107\" y=\"7\" width=\"9\" height=\"42\" rx=\"6\" fill=\"#4d6c83\"/><rect x=\"104\" y=\"0\" width=\"16\" height=\"19\" rx=\"6\" fill=\"#f5ce65\"/></g></svg>"},{"id":"wear-a12-01","reviewKey":"A12-01","name":"避火船长帽檐","plantId":17,"plantName":"火炬树桩","theme":"灯塔守望员","slot":"head","rarity":"SR","cardImage":"assets/wearables/cards/A12-01-避火船长帽檐-SR-独立卡-v01.png","wearImage":"assets/wearables/A12-01.svg","anchor":{"space":"plant-stage-320x340","owner":"head","x":160,"y":116,"width":176,"height":79},"layer":40,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"60\" rx=\"67\" ry=\"27\" fill=\"#f6edd6\"/><ellipse cx=\"80\" cy=\"53\" rx=\"53\" ry=\"17\" fill=\"#ffffff\"/><path d=\"M14 60Q80 93 146 60L142 78Q80 111 18 78Z\" fill=\"#386a9c\" /><ellipse cx=\"80\" cy=\"80\" rx=\"15\" ry=\"15\" fill=\"#dfbc5e\"/><path d=\"M80 70v20m-11-8q11 19 22 0\" fill=\"none\" stroke=\"#35618c\" stroke-width=\"4\"/></g></svg>","frontSvg":""},{"id":"wear-a12-02","reviewKey":"A12-02","name":"海蓝领带","plantId":17,"plantName":"火炬树桩","theme":"灯塔守望员","slot":"body","rarity":"SR","cardImage":"assets/wearables/cards/A12-02-海蓝领带-SR-独立卡-v01.png","wearImage":"assets/wearables/A12-02.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":159,"y":224,"width":91,"height":63},"layer":20,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"32\" rx=\"52\" ry=\"24\" fill=\"#396f9d\"/><ellipse cx=\"80\" cy=\"28\" rx=\"37\" ry=\"12\" fill=\"#61382d\"/><path d=\"M30 35 78 50 128 34 91 96 69 105Z\" fill=\"#396f9d\" /><path d=\"M124 33 153 20 142 52 157 79 124 59 113 40Z\" fill=\"#396f9d\" /><path d=\"M40 43 69 53M98 58 123 44\" fill=\"none\" stroke=\"#eaf1dd\" stroke-width=\"8\"/></g></svg>","frontSvg":""},{"id":"wear-a12-03","reviewKey":"A12-03","name":"救生圈与绳结","plantId":17,"plantName":"火炬树桩","theme":"灯塔守望员","slot":"item","rarity":"SR","cardImage":"assets/wearables/cards/A12-03-救生圈与绳结-SR-独立卡-v01.png","wearImage":"assets/wearables/A12-03.svg","anchor":{"space":"plant-stage-320x340","owner":"plant","x":244,"y":231,"width":85,"height":92},"layer":30,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"60\" rx=\"43\" ry=\"43\" fill=\"#f1ead6\"/><path d=\"M41 39 62 20 75 43 57 53ZM105 26 124 47 101 57 92 42ZM118 81 96 101 85 78 100 68ZM56 93 37 73 60 62 71 78Z\" fill=\"#e6674f\" /><ellipse cx=\"80\" cy=\"60\" rx=\"22\" ry=\"22\" fill=\"#b4d7bd\"/><ellipse cx=\"80\" cy=\"60\" rx=\"21\" ry=\"21\" fill=\"none\"/><path d=\"M80 17 96 4 108 11\" fill=\"none\" stroke=\"#c6a576\" stroke-width=\"7\"/></g></svg>","frontSvg":""},{"id":"wear-a12-04","reviewKey":"A12-04","name":"海浪码头底座","plantId":17,"plantName":"火炬树桩","theme":"灯塔守望员","slot":"base","rarity":"SSR","cardImage":"assets/wearables/cards/A12-04-海浪码头底座-SSR-独立卡-v01.png","wearImage":"assets/wearables/A12-04.svg","anchor":{"space":"plant-stage-320x340","owner":"ground","x":160,"y":240,"width":221,"height":99},"layer":0,"offsetX":0,"offsetY":0,"scale":1,"status":"temporary-vector-preview","gaps":["精修透明原画未制作","挂点为静态初值，动作及真机待校准"],"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><g stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#527eab\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#527eab\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#d3a262\"/><path d=\"M16 79q18-25 35-2t37-2 37 0 23-4\" fill=\"none\" stroke=\"#c3e7e8\" stroke-width=\"7\"/><rect x=\"7\" y=\"39\" width=\"16\" height=\"57\" rx=\"6\" fill=\"#926e3e\"/><rect x=\"136\" y=\"39\" width=\"16\" height=\"57\" rx=\"6\" fill=\"#926e3e\"/></g></svg>","frontSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 110\"><defs><clipPath id=\"rim\"><rect y=\"65\" width=\"160\" height=\"45\"/></clipPath></defs><g clip-path=\"url(#rim)\" stroke=\"#493b29\" stroke-width=\"2.4\" stroke-linejoin=\"round\"><ellipse cx=\"80\" cy=\"80\" rx=\"72\" ry=\"24\" fill=\"#527eab\"/><rect x=\"8\" y=\"55\" width=\"144\" height=\"24\" rx=\"3\" fill=\"#527eab\"/><ellipse cx=\"80\" cy=\"55\" rx=\"72\" ry=\"25\" fill=\"#d3a262\"/><path d=\"M16 79q18-25 35-2t37-2 37 0 23-4\" fill=\"none\" stroke=\"#c3e7e8\" stroke-width=\"7\"/><rect x=\"7\" y=\"39\" width=\"16\" height=\"57\" rx=\"6\" fill=\"#926e3e\"/><rect x=\"136\" y=\"39\" width=\"16\" height=\"57\" rx=\"6\" fill=\"#926e3e\"/></g></svg>"}];})(typeof window!=="undefined"?window:globalThis);

(function(global){
'use strict';
const slots=Object.freeze(['head','body','item','base']);
const catalog=global.WEARABLE_CATALOG;
if(!Array.isArray(catalog))throw Error('缺少部件目录');
const byId=new Map(catalog.map(x=>[x.id,x]));
function state(db){const s=db.gardenWearables;if(s===undefined)return {version:1,equipped:{}};if(!s||s.version!==1||!s.equipped||typeof s.equipped!=='object'||Array.isArray(s.equipped))throw Error('穿戴数据格式较新或损坏，已保留原文，请先备份');return s}
function equipped(db,plantId){const s=state(db),raw=s.equipped[plantId]||{},out={};for(const slot of slots){const c=byId.get(raw[slot]);if(c&&c.plantId===plantId&&c.slot===slot)out[slot]=c.id}return out}
function change(db,plantId,slot,id){if(!Number.isInteger(plantId)||!catalog.some(c=>c.plantId===plantId))throw Error('此植物尚无部件预览');if(!slots.includes(slot))throw Error('部件槽位无效');const c=id===null?null:byId.get(id);if(id!==null&&(!c||c.plantId!==plantId||c.slot!==slot))throw Error('此部件不适合当前植物或槽位');const s=state(db),old=s.equipped[plantId];if(old!==undefined&&(!old||typeof old!=='object'||Array.isArray(old)))throw Error('该植物穿戴记录损坏，已保留原文');db.gardenWearables={...s,equipped:{...s.equipped,[plantId]:{...old,[slot]:id}}};return equipped(db,plantId)}
function transaction(db,plantId,slot,id,persist){const had=Object.prototype.hasOwnProperty.call(db,'gardenWearables'),old=db.gardenWearables;try{const value=change(db,plantId,slot,id);if(persist()!==true)throw Error('穿戴未保存，本次操作已撤回');return value}catch(e){if(had)db.gardenWearables=old;else delete db.gardenWearables;throw e}}
function layers(db,plantId){const e=equipped(db,plantId);return slots.filter(s=>e[s]).map(s=>byId.get(e[s])).sort((a,b)=>a.layer-b.layer)}
global.GardenWear={version:1,slots,catalog,get:id=>byId.get(id),state,equipped,change,transaction,layers};
if(typeof module!=='undefined')module.exports=global.GardenWear;
})(typeof window!=='undefined'?window:globalThis);

const GardenLayout=(()=>{
 const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
 function ensure(db,owned){const allowed=new Set(owned);let g=db.gardenLayout;if(!g||g.version!==1){g=db.gardenLayout={version:1,slots:Array.from({length:20},(_,i)=>owned[i]??null),mascot:{x:.88,y:.57}}}const used=new Map();g.slots=Array.from({length:20},(_,i)=>{const id=g.slots?.[i],quantity=typeof plantObtainedTotal==='function'?Math.max(allowed.has(id)?1:0,plantObtainedTotal(db,id)):1;if(!Number.isInteger(id)||!allowed.has(id))return null;const n=used.get(id)||0;if(n>=quantity){g.unplacedCopies??=[];if(!g.unplacedCopies.some(x=>x.index===i&&x.id===id))g.unplacedCopies.push({index:i,id});return null}used.set(id,n+1);return id});if(!g.mascot||!Number.isFinite(g.mascot.x)||!Number.isFinite(g.mascot.y))g.mascot={x:.88,y:.57};g.mascot={x:clamp(g.mascot.x,0,1),y:clamp(g.mascot.y,0,1)};return g}
 function assign(db,owned,index,id){if(!Number.isInteger(index)||index<0||index>=20)throw Error('花盆位置无效');if(id!==null&&!owned.includes(id))throw Error('请先收集这位植物伙伴');const g=ensure(db,owned);if(id!==null&&g.slots[index]!==id){const quantity=typeof plantObtainedTotal==='function'?Math.max(1,plantObtainedTotal(db,id)):1,used=g.slots.filter(x=>x===id).length;if(used>=quantity){if(quantity===1){const from=g.slots.indexOf(id);g.slots[from]=g.slots[index]}else throw Error('已摆放全部'+quantity+'株，请先收回一株。')}}g.slots[index]=id;return g}

 // Hand-composed pockets around a winding clearing, rather than uniform rows.
 const potPlan=[[.08,.19],[.21,.06],[.16,.43],[.05,.68],[.24,.77],[.34,.31],[.44,.07],[.49,.43],[.38,.68],[.48,.94],[.60,.10],[.70,.30],[.59,.53],[.70,.76],[.60,.98],[.82,.08],[.95,.25],[.85,.50],[.96,.75],[.83,.96]];
 const decorPlan=[[.04,.01],[.28,.45],[.08,.98],[.35,.99],[.54,.25],[.77,.55],[.96,.01],[.95,.99],[.30,.12],[.53,.73],[.91,.37],[.13,.72]];
 function arrangement(w,h){const narrow=w<600,left=narrow?28:Math.max(45,w*.075),right=w-(narrow?28:Math.max(125,w*.12)),top=Math.max(narrow?200:180,h*(narrow?.34:.43)),bottom=h-(narrow?112:132),fieldW=right-left,fieldH=Math.max(220*(narrow?1:0),bottom-top),size=Math.max(50,Math.min(112,fieldW/(narrow?5.4:7.6),fieldH/(narrow?5.8:3.4)));
 const all=[...potPlan,...decorPlan].map(([x,y],i)=>({x:left+x*fieldW,y:top+y*fieldH,size:i<20?size:Math.max(44,size*.78),kind:i<20?'pot':'decor',index:i<20?i:i-20}));
 const bound=p=>{p.x=clamp(p.x,p.size/2+10,w-p.size/2-10);p.y=clamp(p.y,top,h-88-p.size/2);if(narrow&&p.x>w-112-p.size/2&&p.y<308+p.size/2)p.x=w-112-p.size/2;};
 for(let pass=0;pass<160;pass++){for(let i=0;i<all.length;i++){const a=all[i];for(let j=i+1;j<all.length;j++){const b=all[j],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||.01,min=(a.size+b.size)/2*1.03;if(d<min){const ux=d===.01?1:dx/d,uy=d===.01?0:dy/d,push=(min-d)*.52;a.x-=ux*push;a.y-=uy*push;b.x+=ux*push;b.y+=uy*push;}}}all.forEach(bound)}
 all.forEach(p=>p.z=10+Math.round(p.y/h*15));return {pots:all.slice(0,20),decor:all.slice(20)};
 }
 function positions(w,h){return arrangement(w,h).pots}
 function decorPositions(w,h){return arrangement(w,h).decor}
 function mascotPoint(w,h,mw,mh,p){return {x:clamp(w*p.x,mw/2+8,w-mw/2-8),y:clamp(h*p.y,mh/2+12,h-mh/2-85)}}
 return {ensure,assign,positions,decorPositions,arrangement,mascotPoint};
})();



const GardenDecor=(()=>{
 const slotCount=12;
 const categories=[{id:'all',name:'全部'},{id:'lighting',name:'灯饰'},{id:'nature',name:'自然景物'}];
 const catalog=[{id:'lantern',category:'lighting',assetKey:'decor.lantern',name:'萤火路灯'},{id:'decor-chime',assetKey:'latest.decor-chime',category:'lighting',name:'叶铃风铃',artPreview:true},{id:'decor-fountain',assetKey:'latest.decor-fountain',category:'nature',name:'莲叶小喷泉',artPreview:true},{id:'decor-mushroom',assetKey:'latest.decor-mushroom',category:'lighting',name:'摇摇蘑菇灯',artPreview:true}];
 function ownsLantern(db){return db.decorArtOwned?.includes('lantern')||!!db.chapterCollectibles?.owned?.D01}
 function available(db){return catalog.filter(c=>c.id==='lantern'?ownsLantern(db):db.testOnly||db.decorArtOwned?.includes(c.id)).map(c=>c.id)}
 function ensure(db){if(!db.gardenDecor||db.gardenDecor.version!==1)db.gardenDecor={version:1,slots:[]};const g=db.gardenDecor;if(!ownsLantern(db)&&g.slots?.includes('lantern')){g.legacyDefaultLanternSlots??=g.slots.map((id,i)=>id==='lantern'?i:null).filter(i=>i!==null);g.slots=g.slots.map(id=>id==='lantern'?null:id)}const seen=new Set(),valid=new Set(catalog.map(c=>c.id));g.slots=Array.from({length:slotCount},(_,i)=>{const id=g.slots?.[i];if(!valid.has(id)||seen.has(id))return null;seen.add(id);return id});return g}
 function assign(db,index,id){if(!Number.isInteger(index)||index<0||index>=slotCount)throw Error('装饰位置无效');if(id!==null&&!available(db).includes(id))throw Error('这件装饰还没有解锁');const g=ensure(db),old=g.slots[index],from=id===null?-1:g.slots.indexOf(id);if(from>=0&&from!==index)g.slots[from]=old;g.slots[index]=id;return g}
 return {catalog,categories,slotCount,available,ensure,assign};
})();

const GARDEN_ART=Object.fromEntries(Object.entries({"decor.lantern":"songzi-raster:18","ui.partners":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"178 110 664 662\"><image width=\"1774\" height=\"887\" href=\"songzi-raster:19\"/></svg>","ui.wardrobe":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"932 110 664 662\"><image width=\"1774\" height=\"887\" href=\"songzi-raster:19\"/></svg>","latest.pot-sprout":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"231 125 1074 818\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:20\"/></svg>","latest.pot-moss":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"132 130 1225 844\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:21\"/></svg>","latest.pot-moon":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"218 147 1099 737\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:22\"/></svg>","latest.pot-dawn":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"174 130 1188 791\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:23\"/></svg>","latest.decor-firefly":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"200 92 839 1204\"><image width=\"1145\" height=\"1374\" href=\"songzi-raster:18\"/></svg>","latest.decor-chime":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"101 29 821 1456\"><image width=\"1024\" height=\"1536\" href=\"songzi-raster:24\"/></svg>","latest.decor-fountain":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"101 135 1056 971\"><image width=\"1312\" height=\"1199\" href=\"songzi-raster:25\"/></svg>","latest.decor-mushroom":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"110 48 1066 1128\"><image width=\"1286\" height=\"1223\" href=\"songzi-raster:26\"/></svg>","mascot.head":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"11 83 1232 1083\"><image width=\"1254\" height=\"1254\" href=\"songzi-raster:27\"/></svg>","mascot.body":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"341 95 395 1355\"><image width=\"1024\" height=\"1536\" href=\"songzi-raster:28\"/></svg>","mascot.leafLeft":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"100 157 1365 681\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:29\"/></svg>","mascot.leafRight":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"58 173 1423 680\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:30\"/></svg>","mascot.base":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"67 368 1411 446\"><image width=\"1536\" height=\"1024\" href=\"songzi-raster:31\"/></svg>","ui.completedSunflower":"songzi-raster:32","mascot.happyHead":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"11 83 1232 1083\"><defs><clipPath id=\"mascot-expression-patches\"><rect x=\"481\" y=\"486\" width=\"210\" height=\"219\" rx=\"25\"/><rect x=\"780\" y=\"430\" width=\"178\" height=\"193\" rx=\"25\"/><rect x=\"628\" y=\"626\" width=\"247\" height=\"231\" rx=\"25\"/></clipPath></defs><image width=\"1254\" height=\"1254\" href=\"songzi-raster:27\"/><image width=\"1254\" height=\"1254\" preserveAspectRatio=\"none\" clip-path=\"url(#mascot-expression-patches)\" href=\"songzi-raster:33\"/></svg>"}).map(([k,v])=>[k,resolveGameArt(v)]));
(function(){const M=MathGarden;Object.assign(M.TOPICS,{mixed:{name:'混合运算',stage:'第一单元 · 目录待与实书逐项核对',example:'6 + 3 × 4'},space:{name:'我们生活的空间（一）',stage:'第四单元 · 目录待核对',example:'位置、方向与观察'},shape:{name:'认识图形',stage:'第五单元 · 目录待核对',example:'角与图形特征'},decimal:{name:'认识小数',stage:'第七单元 · 目录待核对',example:'2.5 + 1.2'},survey:{name:'调查与记录',stage:'第八单元 · 目录待核对',example:'读取花园调查表'}});
M.UNITS=[{id:'basic',title:'基础营地',world:'松果练习场',topics:['ten','add'],skills:'10以内加减法、两位数加减法'},{id:'u1',title:'一 · 混合运算',world:'豌豆补给站',topics:['mixed'],skills:'乘加乘减、除加除减、小括号'},{id:'u2',title:'二 · 测量（二）',world:'向日葵测量谷',topics:['length'],skills:'长度单位换算与长度计算（首版题型）'},{id:'u3',title:'三 · 大数加与减（二）',world:'坚果仓库',topics:['triple'],skills:'三位数加减、进退位（首版题型）'},{id:'u4',title:'四 · 我们生活的空间（一）',world:'侦察树屋',topics:['space'],skills:'位置关系、路线与方位（首版题型）'},{id:'u5',title:'五 · 认识图形',world:'几何花圃',topics:['shape'],skills:'角的识别、长方形与正方形特征'},{id:'u6',title:'六 · 乘除法的应用（二）',world:'植物集结地',topics:['multiply'],skills:'多位数乘一位数、整除与分组（首版题型）'},{id:'u7',title:'七 · 认识小数',world:'星光商店',topics:['decimal'],skills:'一位小数加减、元角换算'},{id:'u8',title:'八 · 调查与记录',world:'花园观察所',topics:['survey'],skills:'读表、比较、合计与差值'},{id:'review',title:'整册回顾',world:'森林守卫之路',topics:[],skills:'仅从家长已勾选的学习范围混合出题'}];
const old=M.makeQuestion,rand=(a,b,r)=>Math.floor(r()*(b-a+1))+a;let serial=0;
M.makeQuestion=function(topic,r=Math.random,fact){if(!['mixed','space','shape','decimal','survey','multiply','length'].includes(topic))return old(topic,r,fact);const q=old('ten',r);q.id='q-'+Date.now()+'-'+(++serial);q.topic=topic;q.visual=null;q.unit='';q.diagram='';const v=rand(0,2,r);q.variant=v;let a,b,c,answer,text,hint;
if(topic==='mixed'){a=rand(2,8,r);b=rand(2,8,r);c=rand(2,9,r);if(v===0){text=c+' + '+a+' × '+b+' = ?';answer=c+a*b;hint='先算乘法 '+a+' × '+b+'，再加 '+c+'。';}else if(v===1){text=(a*b)+' ÷ '+b+' + '+c+' = ?';answer=a+c;hint='先算除法，再算加法。'}else{text='('+a+' + '+b+') × '+c+' = ?';answer=(a+b)*c;hint='先算小括号里的加法，再做乘法。'}}
if(topic==='length'){a=rand(2,8,r);b=rand(1,8,r);if(v===0){text=a+' 米 '+b+' 厘米，一共是多少厘米？';answer=a*100+b;hint='1米 = 100厘米。先换算，再把多出的厘米加上。';q.unit='厘米'}else if(v===1){text=a+' 分米，相当于多少毫米？';answer=a*100;hint='1分米=10厘米，1厘米=10毫米。';q.unit='毫米'}else{text='长 '+(a*100+b*10)+' 厘米的绳子，剪下 '+b*10+' 厘米，还剩多少米？';answer=a;hint='先求剩下多少厘米，再按每100厘米换成1米。';q.unit='米'}}
if(topic==='multiply'){a=rand(12,49,r);b=rand(2,6,r);if(v===0){text='每排 '+a+' 株植物，'+b+' 排共多少株？';answer=a*b;hint='把 '+a+' 拆成整十数和个位，分别乘 '+b+' 再合起来。';q.unit='株'}else if(v===1){text=(a*b)+' 颗种子平均分成 '+b+' 袋，每袋多少颗？';answer=a;hint='可以先把种子数量拆开，分别除以 '+b+'，最后相加。';q.unit='颗'}else{text='有 '+a+' 组向日葵，每组 '+b+' 株，又种了 '+b+' 株。一共多少株？';answer=a*b+b;hint='先算原来的株数，再加上后来种的株数。';q.unit='株'}}
if(topic==='decimal'){a=rand(10,70,r);b=rand(1,Math.min(a,29),r);if(v===0){text=(a/10).toFixed(1)+' + '+(b/10).toFixed(1)+' = ?';answer=(a+b)/10;hint='把小数点对齐，十分位和十分位相加，满十向个位进一。'}else if(v===1){text=(a/10).toFixed(1)+' − '+(b/10).toFixed(1)+' = ?';answer=(a-b)/10;hint='小数点对齐，个位与个位、十分位与十分位分别计算。'}else{text=Math.floor(a/10)+' 元 '+a%10+' 角，用小数表示是多少元？';answer=a/10;hint='1角是0.1元，把元放在个位、角放在十分位。';q.unit='元'}}
if(topic==='shape'){if(v===0){text='一个长方形有几个直角？';answer=4;hint='沿着长方形的边走一圈，依次找四个角。';q.diagram='<svg viewBox="0 0 300 140" style="width:260px;max-width:100%"><rect x="40" y="20" width="210" height="100" fill="#deebc7" stroke="#4b7442" stroke-width="4"/><path d="M40 38h18v-18m174 0v18h18m0 64h-18v18m-174 0v-18h-18" stroke="#9b7e3e" fill="none" stroke-width="2"/></svg>'}else if(v===1){text='正方形的四条边一样长。一条边长 '+rand(3,9,r)+' 厘米，它有几条同样长的边？';answer=4;hint='正方形四条边都相等。'}else{text='钟面上3点整，时针和分针组成的较小的角是：输入1表示直角，2表示锐角，3表示钝角。';answer=1;hint='3点整，一根指针朝上，一根朝右，和长方形的一角一样。';q.diagram='<svg viewBox="0 0 180 150" style="width:200px"><circle cx="90" cy="75" r="60" fill="#f7f0d6" stroke="#4b7442" stroke-width="3"/><path d="M90 25V75H135" stroke="#426d3b" stroke-width="6" fill="none"/><text x="85" y="18" fill="#4b7442" font-size="12">12</text><text x="146" y="80" fill="#4b7442" font-size="12">3</text></svg>'}}
if(topic==='space'){a=rand(2,5,r);b=rand(1,4,r);if(v===0){text='侦察地图：树屋在起点的正北方。小松子从起点往北走，会先接近哪一处？输入1代表树屋，2代表南面的池塘。';answer=1;hint='先找到地图上“北”的箭头，再从起点往上看。'}else if(v===1){text='从起点向东走 '+a+' 格，再向北走 '+b+' 格。一共走了多少格？';answer=a+b;hint='问的是走过的格数，把两段路线相加。';q.unit='格'}else{text='小松子面向北，右手边是哪个方向？输入1代表东，2代表西。';answer=1;hint='在地图上，北在上，东在右，西在左。'}q.diagram='<svg viewBox="0 0 300 150" style="width:300px;max-width:100%"><path d="M150 135V25M40 80H260" stroke="#9ead7c" stroke-width="2"/><path d="M142 33l8-14 8 14" fill="#4b7442"/><text x="165" y="25" fill="#426d3b" font-size="14">北 · 树屋</text><text x="165" y="138" fill="#426d3b" font-size="14">南 · 池塘</text><text x="35" y="72" fill="#426d3b" font-size="14">西</text><text x="248" y="72" fill="#426d3b" font-size="14">东</text><circle cx="150" cy="80" r="7" fill="#deae4d"/></svg>'}
if(topic==='survey'){a=rand(3,9,r);b=rand(10,18,r);c=rand(2,8,r);q.diagram='<table style="color:#365633;margin:15px 0"><tr><th style="color:#365633">植物</th><th style="color:#365633">收集数量</th></tr><tr><td style="color:#365633">豌豆</td><td style="color:#365633">'+a+'</td></tr><tr><td style="color:#365633">向日葵</td><td style="color:#365633">'+b+'</td></tr><tr><td style="color:#365633">坚果</td><td style="color:#365633">'+c+'</td></tr></table>';if(v===0){text='根据调查表，三种植物一共收集了多少株？';answer=a+b+c;hint='把三行的数量相加。'}else if(v===1){text='向日葵比豌豆多多少株？';answer=b-a;hint='比较多多少，用较大的数量减去较小的数量。'}else{text='表中收集数量最多的那一种，有多少株？';answer=b;hint='逐行比较数量，找到最大的数。'}q.unit='株'}
q.a=a||0;q.b=b||0;q.op=topic;q.answer=answer;q.text=text;q.hint=hint;q.fact=topic+':'+text;return q;};
})();

(function(){const M=MathGarden;
// The page numbers belong to the photographed contents, not an inferred textbook edition.
M.CURRICULUM_SOURCE={status:'实书目录已核对',currentProgress:'未提供当前单元或页码',pageNote:'页码按家长提供的实书目录记录，不自动视为主教材页码。'};
const pages={u1:2,u2:13,u3:28,u4:41,u5:49,u6:64,u7:75,u8:90,review:99};
for(const u of M.UNITS){if(pages[u.id])u.page=pages[u.id];if(u.id==='review')u.title='总复习';}
for(const t of Object.values(M.TOPICS))t.stage=t.stage.replace('目录待与实书逐项核对','单元名称已核对').replace('目录待核对','单元名称已核对');
Object.assign(M.TOPICS,{campus:{name:'记录我们的校园',stage:'综合实践 · 实书目录第24页',example:'读校园示意图、测量与记录'},combination:{name:'搭配中的学问',stage:'数学好玩 · 实书目录第62页',example:'2件上衣配3条裤子'},calendar:{name:'探索年月日的秘密',stage:'综合实践 · 实书目录第95页',example:'月份天数、平年和闰年'}});
const extra=[{after:'u2',id:'campus',title:'综合实践 · 记录我们的校园',page:24,world:'花园测绘队',topics:['campus'],skills:'校园示意图、路线长度与数量记录（首版题型）'},{after:'u5',id:'combination',title:'数学好玩 · 搭配中的学问',page:62,world:'植物装扮屋',topics:['combination'],skills:'有序枚举、两类物品一一搭配（首版题型）'},{after:'u8',id:'calendar',title:'综合实践 · 探索年月日的秘密',page:95,world:'向日葵日历屋',topics:['calendar'],skills:'月份天数、平闰年与日历记录（首版题型）'}];
for(const e of extra)M.UNITS.splice(M.UNITS.findIndex(u=>u.id===e.after)+1,0,e);
M.isLeap=y=>y%400===0||(y%4===0&&y%100!==0);
const old=M.makeQuestion,rand=(a,b,r)=>Math.floor(r()*(b-a+1))+a;let serial=0;
M.makeQuestion=function(topic,r=Math.random,fact){if(!['campus','combination','calendar'].includes(topic))return old(topic,r,fact);const q=old('ten',r);q.id='practice-'+Date.now()+'-'+(++serial);q.topic=topic;q.visual=null;q.diagram='';q.unit='';q.variant=rand(0,2,r);const a=rand(2,4,r),b=rand(2,3,r);q.a=a;q.b=b;q.op=topic;
if(topic==='campus'){if(q.variant===0){q.text='校园示意图：从大门到花圃 '+a*10+' 米，从花圃到树屋 '+b*10+' 米。沿这条路线共走多少米？';q.answer=(a+b)*10;q.unit='米';q.hint='沿路线走过两段，把两段路的长度相加。'}else if(q.variant===1){q.text='校园记录表：花圃有 '+a+' 排植物，每排 '+b+' 株。应记录一共多少株？';q.answer=a*b;q.unit='株';q.hint='每一排都数一遍，或者用“每排株数 × 排数”。'}else{q.text='校园示意图上，花圃在大门的东边，树屋在花圃的北边。从花圃往北走会到哪里？输入1代表树屋，2代表大门。';q.answer=1;q.hint='先在图里找到花圃，沿着北箭头向上看。'}q.diagram='<svg viewBox="0 0 340 160" style="width:340px;max-width:100%"><path d="M45 120H200V35" fill="none" stroke="#8ca36b" stroke-width="5"/><g fill="#416839" font-size="14"><text x="10" y="148">大门</text><text x="177" y="148">花圃</text><text x="177" y="25">树屋</text><text x="295" y="30">北↑</text></g><g fill="#e1b459"><circle cx="45" cy="120" r="8"/><circle cx="200" cy="120" r="8"/><circle cx="200" cy="35" r="8"/></g>'+(q.variant===0?'<g fill="#5f7548" font-size="12"><text x="90" y="110">'+a*10+'米</text><text x="213" y="80">'+b*10+'米</text></g>':'')+'</svg>';}
if(topic==='combination'){const pairs=q.variant===0?['上衣','裤子']:q.variant===1?['花盆','植物']:['主食','饮品'];q.text='有 '+a+' 种'+pairs[0]+'和 '+b+' 种'+pairs[1]+'，每次各选一种，一共有多少种不同搭配？';q.answer=a*b;q.unit='种';q.hint='先固定一种'+pairs[0]+'，把它能配的'+pairs[1]+'逐个列出；再换下一种，避免重复或遗漏。';q.diagram='<div style="display:flex;gap:15px;flex-wrap:wrap;margin:15px 0"><div><strong>'+pairs[0]+'</strong>'+Array.from({length:a},(_,i)=>'<span style="display:block;margin:6px;background:#dbe6bf;padding:8px 14px;border-radius:6px">'+pairs[0]+(i+1)+'</span>').join('')+'</div><div><strong>'+pairs[1]+'</strong>'+Array.from({length:b},(_,i)=>'<span style="display:block;margin:6px;background:#ebdbad;padding:8px 14px;border-radius:6px">'+pairs[1]+(i+1)+'</span>').join('')+'</div></div>';}
if(topic==='calendar'){if(q.variant===0){const year=[2024,2025,2026,2028][rand(0,3,r)];q.year=year;q.text=year+' 年的二月有多少天？';q.answer=M.isLeap(year)?29:28;q.hint='先判断是不是闰年；闰年二月29天，平年二月28天。这道题的年份没有整百年份。';q.unit='天';}else if(q.variant===1){const month=rand(1,12,r);q.month=month;q.year=2026;q.text='2026 年 '+month+' 月有多少天？';q.answer=month===2?28:[4,6,9,11].includes(month)?30:31;q.hint='4、6、9、11月各30天；2月要看平闰年；其余月份31天。';q.unit='天';}else{q.text='植物观察日记从 '+a+' 月1日开始，连续记录到这个月5日，每天一条记录。包括开始和结束这两天，一共有多少条？';q.answer=5;q.hint='把1日、2日、3日、4日、5日逐个列出来，不要漏掉开始那一天。';q.unit='条';}q.diagram='<div style="display:grid;grid-template-columns:repeat(7,1fr);max-width:280px;gap:5px;margin:15px 0">'+['一','二','三','四','五','六','日'].map(t=>'<span style="padding:7px;text-align:center;background:#dce7bd">'+t+'</span>').join('')+'</div><p style="font-size:12px;color:#657848">日历知识提示：一年有12个月；2月的天数要单独判断。</p>';}
q.fact=topic+':'+q.text;return q;};
})();

(function(){const M=MathGarden;const levels=['','建立理解','课内巩固','综合应用','同范围迁移'];
const specs={ten:['数量与计算','缺失数量','情境与检验'],add:['加减计算','缺失数量','两步应用'],time:['单位换算','经过时间','倒推时间'],length:['单位换算','长度计算','测量应用'],triple:['加减计算','缺失数量','两步应用'],multiply:['乘法分组','平均分配','分组应用'],mixed:['乘加乘减','除加除减','括号与应用'],space:['相对位置','路线记录','方位判断'],shape:['图形特征','角的识别','图形推理'],decimal:['小数加减','元角换算','购物应用'],survey:['合计与比较','补全记录','数据决策'],campus:['路线测量','校园记录','路线规划'],combination:['两类搭配','有序枚举','条件搭配'],calendar:['月份天数','日历推理','跨日计数']};
const desc={ten:'始终在10以内，通过逆向、缺数和情境增加思考，不扩大数字范围。',add:'先不进退位，再进退位、缺数和两步关系，结果保持100以内。',triple:'从不进退位到连续进退位，再到逆向和两步关系。',mixed:'保持表内乘除基础，逐步增加括号、数量关系与两步情境。',shape:'由直接识别进入特征判断；不靠把文字变长增加难度。',space:'每道题明确观察者朝向或地图北向，并使用与题干一致的示意图。'};
M.BANK=Object.entries(specs).flatMap(([topic,names])=>names.flatMap((name,variant)=>[1,2,3,4].map(level=>({id:'v2:'+topic+':'+variant+':'+level,topic,variant,level,name,levelName:levels[level],goal:desc[topic]||'在当前知识点内，从直接信息走向数量关系、逆向推理与条件应用。'}))));M.LEVEL_NAMES=levels;
M.seeded=function(seed){let x=2166136261;for(const c of String(seed))x=Math.imul(x^c.charCodeAt(0),16777619);return()=>{x=(Math.imul(x,1664525)+1013904223)>>>0;return x/4294967296}};
let serial=0;const oldMake=M.makeQuestion;
function generate(entry,r=Math.random){const {topic:t,variant:v,level:l}=entry;const n=(a,b)=>Math.floor(r()*(b-a+1))+a,pick=a=>a[n(0,a.length-1)];let text='',hint='',answer=0,unit='',diagram='',a=0,b=0,op='',visual=null,calc='';
const arithmetic=(range)=>{let x,y,z;if(l===1){x=range===100?n(2,6)*10+n(2,4):n(2,6)*100+n(1,3)*10+n(2,4);y=range===100?n(1,2)*10+n(1,2):100+n(0,1)*10+n(1,2)}else if(range===100){x=n(42,75);y=n(16,Math.min(35,99-x))}else{x=pick([402,503,604,705,806]);y=n(126,298)}a=x;b=y;op=v===0&&r()<.5?'+':'-';if(op==='+'&&x+y>=range)op='-';z=op==='+'?x+y:x-y;const sym=op==='+'?'+':'−';if(v===0){text=x+' '+sym+' '+y+' = ?';answer=z;calc=x+' '+op+' '+y;hint='相同数位对齐，先算个位，再处理进位或退位。'}else if(v===1){text=op==='+'?x+' + □ = '+(x+y):'□ − '+y+' = '+x;answer=y; if(op==='-'){answer=x+y;if(answer>=range){text=x+' − □ = '+z;answer=y}}hint='先判断空格表示哪一部分，再用逆运算检查。';calc=String(answer)}else{const c=n(3,Math.min(l<3?9:19,x-y));if(l<=2){text='花园仓库原有 '+x+' 袋种子，上午运走 '+y+' 袋，下午又运来 '+c+' 袋。现在有多少袋？';answer=x-y+c;hint='先减去运走的，再加上运来的。';calc=x+'-'+y+'+'+c}else{text='仓库上午运走 '+y+' 袋种子，下午又运走 '+c+' 袋后，还剩 '+(x-y-c)+' 袋。仓库原有多少袋？';answer=x;hint='原来数量 = 剩下数量 + 两次运走的数量。';calc=(x-y-c)+'+'+y+'+'+c}unit='袋'}if(l===4&&v===0){text='一道减法题的差是 '+(x-y)+'，减数是 '+y+'。被减数是多少？';answer=x;calc=(x-y)+'+'+y;hint='被减数 = 差 + 减数。'}};
if(t==='ten'){a=n(l===1?3:6,10);b=n(1,a-1);op='-';if(v===0){if(l===4){const small=n(1,Math.floor((a-1)/2)),difference=a-2*small;text='两盒共有 '+a+' 颗松果，多的一盒比少的一盒多 '+difference+' 颗。多的一盒有几颗？';answer=a-small;hint='先从总数中拿走多出来的部分，把剩下的平均分成两盒，再还回多出来的部分。'}else{text=a+' − '+b+' = ?';answer=a-b;hint='把 '+a+' 分成拿走的 '+b+' 和剩下的部分。';visual={a,b,op};}}else if(v===1){text=l<3?a+' − □ = '+(a-b):'□ + '+b+' = '+a;answer=l<3?b:a-b;hint='想想总数、拿走的数和剩下的数之间有什么关系。';}else{const c=n(1,a-b);text=l<=2?'有 '+a+' 颗松果，送给伙伴 '+b+' 颗。还剩多少颗？':'原有 '+a+' 颗松果，先拿走 '+b+' 颗，再拿走 '+c+' 颗。最后剩多少颗？';answer=l<=2?a-b:a-b-c;hint='可以按顺序拿走，也可以先求一共拿走多少。';unit='颗'}calc=String(answer)}
if(t==='add'||t==='triple')arithmetic(t==='add'?100:1000);
if(t==='mixed'){a=n(2,7);b=n(2,7);const c=n(2,9);if(v===0){text=l===1?a+' × '+b+' + '+c+' = ?':c+' + '+a+' × '+b+' = ?';answer=a*b+c;calc=a+'*'+b+'+'+c;hint='先算乘法，再算加法。'}if(v===1){text=(a*b)+' ÷ '+b+' '+(l>=3?'−':'+')+' '+(l>=3?Math.min(c,a):c)+' = ?';answer=l>=3?a-Math.min(c,a):a+c;calc=String(answer);hint='先求商，再加减。'}if(v===2){text=l<=2?'('+a+' + '+b+') × '+c+' = ?':'原有 '+(a*c)+' 株植物，又种了 '+(b*c)+' 株，平均分到 '+c+' 块花圃里。每块多少株？';answer=l<=2?(a+b)*c:a+b;calc=l<=2?'('+a+'+'+b+')*'+c:'('+a*c+'+'+b*c+')/'+c;hint='先把括号内的数量合起来，再乘或除。';if(l>2)unit='株'}if(l===4&&v===0){text='每袋种子 '+a+' 颗。'+b+' 袋种子中取走 '+c+' 颗后，剩多少颗？';answer=a*b-c;if(answer<0){text='每袋种子 '+a+' 颗，'+b+' 袋另外加 '+c+' 颗，一共多少颗？';answer=a*b+c}calc=String(answer);hint='先求整袋共有多少，再处理零散增减。';unit='颗'}}
if(t==='multiply'){a=l===1?n(2,9):l===2?n(12,29):n(23,86);b=n(2,l>=3?6:4);if(v===0){text=a+' × '+b+' = ?';answer=a*b;hint='按整十数与个位拆开乘，再合并。';calc=a+'*'+b;}if(v===1){text='有 '+a*b+' 颗种子，平均分给 '+b+' 个小组。每组分到多少颗？';answer=a;hint='把总数按小组数平均分，可以用乘法验算。';unit='颗';calc=a*b+'/'+b;}if(v===2){let c=n(2,5);text=l<3?'每排 '+a+' 株植物，共 '+b+' 排，又补种 '+c+' 株。现在多少株？':'每袋 '+b+' 颗种子，'+a+' 袋种子用掉 '+c*b+' 颗后，还能装满多少袋？';answer=l<3?a*b+c:a-c;if(answer<0)answer=0;hint=l<3?'先算原来的总数，再加补种的株数。':'先想用掉的种子相当于几袋，再从总袋数中扣除。';unit=l<3?'株':'袋';calc=String(answer)}}
if(t==='length'){a=n(2,8);b=n(1,9);if(v===0){text=l<=2?a+' 分米 = 多少厘米？':a+' 米 '+b+' 厘米 = 多少厘米？';answer=l<=2?a*10:a*100+b;hint='把两部分换成相同单位后相加。';unit='厘米'}if(v===1){text=l<=2?'长 '+a*10+' 厘米的彩带，剪去 '+b+' 厘米，还剩多少厘米？':'有 '+a+' 米彩带，剪去 '+(b*10)+' 厘米。还剩多少厘米？';answer=l<=2?a*10-b:a*100-b*10;hint='先统一成厘米，再做减法。';unit='厘米'}if(v===2){text=l<=2?'两根绳分别长 '+a+' 分米和 '+b+' 分米，总长多少厘米？':'用长 '+a+' 米的绳子，剪出每段 '+b*10+' 厘米的短绳，最多剪出几段？';answer=l<=2?(a+b)*10:Math.floor(a*100/(b*10));hint=l<=2?'先加分米数，再换成厘米。':'统一单位后分组；只数完整的短绳段数。';unit=l<=2?'厘米':'段'}calc=String(answer)}
if(t==='time'){a=n(2,5);b=n(10,40);if(v===0){text=l<=2?a+' 分钟等于多少秒？':a+' 分 '+b+' 秒等于多少秒？';answer=l<=2?a*60:a*60+b;unit='秒';hint='每分钟60秒，零散秒数另加。'}if(v===1){text='植物 '+(l<=2?'9:10':'9:45')+' 开始生长，经过 '+b+' 分钟成熟。成熟时是9点后的第几分钟？（例如10:05填65）';answer=(l<=2?10:45)+b;unit='分钟';hint='这道题用9点后的总分钟数记录，把开始的分钟和经过分钟相加。'}if(v===2){text='从9点整到成熟还需要 '+(a*10+b)+' 分钟，现在已经过了 '+b+' 分钟。还需要多少分钟？';answer=a*10;unit='分钟';hint='总时间减去已经过的时间。'}calc=String(answer)}
if(t==='decimal'){a=n(l<=2?12:31,l<=2?48:87);b=n(2,Math.min(a-1,29));if(v===0){text=(a/10).toFixed(1)+' '+(l===1?'+':'−')+' '+(b/10).toFixed(1)+' = ?';answer=(l===1?a+b:a-b)/10;hint='小数点对齐，按对应数位计算。';calc=String(answer)}if(v===1){text=l<=2?Math.floor(a/10)+' 元 '+a%10+' 角，用小数表示是多少元？':(a/10).toFixed(1)+' 元相当于多少角？';answer=l<=2?a/10:a;hint='1元=10角，1角=0.1元。';unit=l<=2?'元':'角'}if(v===2){const price=(b/10).toFixed(1),paid=Math.ceil((a+b)/10);text=l<3?'一盆花 '+(a/10).toFixed(1)+' 元，一包种子 '+price+' 元。共多少元？':'买花用了 '+(a/10).toFixed(1)+' 元，买种子用了 '+price+' 元，付 '+paid+' 元。应找回多少元？';answer=l<3?(a+b)/10:Math.round((paid*10-a-b))/10;hint=l<3?'把两个价钱相加，注意小数点对齐。':'先算共花多少，再用付的钱减去总价。';unit='元'}calc=String(answer)}
if(t==='survey'){a=n(4,12);b=n(13,24);const c=n(2,9);diagram='<table><tr><th style="color:#42643b">植物</th><th style="color:#42643b">数量/株</th></tr>'+[['豌豆',a],['向日葵',b],['坚果',c]].map(([s,z])=>'<tr><td style="color:#42643b">'+s+'</td><td style="color:#42643b">'+z+'</td></tr>').join('')+'</table>';if(v===0){text=l<=2?'三种植物一共多少株？':'向日葵比另外两种植物的总数多几株？';if(l>2&&b<a+c){text='另外两种植物合起来比向日葵多几株？';answer=a+c-b}else answer=l<=2?a+b+c:b-a-c;hint='先确定要比较的两部分，再求和或求差。'}if(v===1){text='现在又种 '+(l<=2?3:7)+' 株豌豆。豌豆现在有多少株？';answer=a+(l<=2?3:7);hint='在原来的豌豆数量上增加。'}if(v===2){const target=b+c+5;text=l<=2?'数量最多的植物有多少株？':'希望每种植物都达到 '+target+' 株，向日葵和坚果合计还需补种多少株？';answer=l<=2?b:(target-b)+(target-c);hint=l<=2?'比较三行记录，找到最多的一行。':'分别算两种植物还差多少，再合计。'}unit='株';calc=String(answer)}
if(t==='combination'){a=n(2,l<=2?3:4);b=n(2,3);if(v===0){text='有 '+a+' 种花盆、'+b+' 种植物，每次各选一种，共有多少种搭配？';answer=a*b;hint='固定一种花盆，把它能配的植物依次列全。'}if(v===1){const extra=n(1,2);text='原有 '+a+' 种花盆和 '+b+' 种植物。新增 '+extra+' 种花盆后，共有多少种搭配？';answer=(a+extra)*b;hint='先求现在的花盆种类数，再逐一搭配。'}if(v===2){text=l<=2?'有 '+a+' 种花盆和 '+b+' 种植物，其中一种指定的搭配不能用。还能搭配几种？':'有 '+a+' 种花盆和 '+b+' 种植物，其中一种植物不能配某一种花盆，其余都可用。可行搭配共几种？';answer=a*b-1;hint='先数全部搭配，再只去掉被排除的那一种。'}unit='种';calc=String(answer)}
if(t==='calendar'){const year=pick([2024,2025,2026,2028]),month=pick([2,3,4,6,8,11]);a=year;b=month;const days=month===2?(M.isLeap(year)?29:28):[4,6,9,11].includes(month)?30:31;if(v===0){text=year+' 年 '+month+' 月有几天？';answer=days;unit='天';hint='2月先判断平闰年，其余月份按大月、小月判断。'}if(v===1){const before=n(12,22),after=n(2,5);text=l<=2?'观察日记从本月 '+before+' 日写到 '+(before+after)+' 日，每天一条，首尾两天都记录。共几条？':'观察日记从 '+year+' 年 '+month+' 月 '+before+' 日写到下月 '+after+' 日，每天一条，首尾都记录。共几条？';answer=l<=2?after+1:days-before+1+after;hint='包括开始那一天；跨月时把本月剩余天数与下月天数相加。';unit='条'}if(v===2){const weekday=n(1,7),shift=n(2,12);text='今天星期'+['','一','二','三','四','五','六','日'][weekday]+'，'+shift+' 天后是星期几？填1至7，7表示星期日。';answer=(weekday-1+shift)%7+1;hint='一周7天，先走过完整的一周，再数余下的天数。'}calc=String(answer)}
if(t==='space'||t==='campus'){a=n(2,l<=2?4:7);b=n(1,4);const grid='<svg viewBox="0 0 320 180" style="width:320px;max-width:100%"><g fill="none" stroke="#b3c28a"><path d="M30 30H270M30 70H270M30 110H270M30 150H270M30 30V150M90 30V150M150 30V150M210 30V150M270 30V150"/></g><path d="M90 110H210V30" fill="none" stroke="#4b7340" stroke-width="4"/><g fill="#4b7340" font-size="12"><text x="65" y="132">起点</text><text x="205" y="20">树屋</text><text x="280" y="35">北↑</text></g></svg>';diagram=grid;if(v===0){if(l<=2){text='地图北向朝上。起点到树屋的路线先向东，再向哪个方向？输入1表示北，2表示南。';answer=1;hint='沿绿色路线走，最后一段向图的上方。'}else{text='地图北向朝上。小松子先面向东，沿绿色路线走到拐角后转向树屋。他向哪边转？输入1表示左转，2表示右转。';answer=1;hint='把自己想成面向东站立，再想想北在自己的哪一侧。'}}if(v===1){diagram='';text='校园路线先向东走 '+a*10+' 米，再向北走 '+b*10+' 米'+(l>=3?'，原路返回起点':'')+'。共走多少米？';answer=(a+b)*10*(l>=3?2:1);hint='路线总长是实际走过的各段相加；原路返回时每段会走两次。';unit='米'}if(v===2){diagram='';if(l<=2){text='小松子面向北，向右转一次后面向哪里？输入1表示东，2表示西。';answer=1;hint='北在地图上方，右转面向东。'}else{text='小松子面向北，连续向右转 '+(a%3+2)+' 次，每次转一个直角。最后面向哪里？输入1表示北、2表示东、3表示南、4表示西。';answer=(a%3+2)%4+1;hint='依次按北、东、南、西、北记录，每转一次前进一个方向。'}}calc=String(answer)}
if(t==='shape'){const shapeSVG='<svg viewBox="0 0 270 140" style="width:270px;max-width:100%"><rect x="25" y="20" width="210" height="95" fill="#dfe8c9" stroke="#4c7141" stroke-width="3"/><path d="M25 36h16V20" fill="none" stroke="#b89550" stroke-width="2"/></svg>';if(v===0){diagram=shapeSVG;if(l<=2){text='图中的长方形有几个直角？';answer=4;hint='沿着边依次检查四个角。'}else{text='把两张同样的长方形完整重合在一起，只看外轮廓，有几个直角？';answer=4;hint='重合后外轮廓没有改变，不是把两张的角数直接相加。'}}if(v===1){const choice=n(1,3);const pts=choice===1?'90,20 90,90 155,90':choice===2?'120,25 90,90 155,90':'45,25 90,90 155,90';diagram='<svg viewBox="0 0 180 130" style="width:220px"><polyline points="'+pts+'" stroke="#4b7340" stroke-width="5" fill="none"/></svg>';text='观察图中的较小角。输入1表示直角，2表示锐角，3表示钝角。';answer=choice;hint='与直角比较：小于直角是锐角，大于直角且小于平角是钝角。'}if(v===2){text=l<=2?'一个四边形有几条边？':'一个四边形，四条边一样长，而且四个角都是直角。它是正方形还是普通长方形？输入1表示正方形，2表示仅能确定为长方形。';answer=l<=2?4:1;hint=l<=2?'四边形的边首尾相接，共四条。':'同时满足四边相等、四角直角，可判断为正方形。'}calc=String(answer)}
if(!text||!Number.isFinite(answer)||answer<0)throw Error('题型生成失败 '+entry.id);
const q=oldMake('ten',r);Object.assign(q,{id:'bank-'+Date.now()+'-'+(++serial),topic:t,text,answer,unit,hint,diagram,visual,a,b,op,variant:v,level:l,templateId:entry.id,bankVersion:2,skillId:t+':'+v,fact:entry.id+':'+text,calc:calc||String(answer),source:'分层题库'});return q;}
M.generateBank=generate;
M.makeQuestion=function(topic,r=Math.random,fact){if(fact&&topic==='ten')return oldMake(topic,r,fact);const entry=M.BANK.find(e=>e.topic===topic&&e.variant===0&&e.level===(topic==='ten'?1:2));return entry?generate(entry,r):oldMake(topic,r,fact)};
M.difficultyState=function(db,topic){db.difficulty??={};return db.difficulty[topic]??={level:topic==='ten'?1:2,lastChangeCount:0,events:[]}};
M.difficultyEvidence=function(db,topic){const state=M.difficultyState(db,topic);const rows=db.questions.slice(state.sinceIndex||0).filter(q=>q.topic===topic&&q.bankVersion===2&&!q.preview&&!q.reviewOnly&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status)&&q.completed&&q.level===state.level);const recent=rows.slice(-8);const independent=q=>q.attempts[0]?.correct&&q.hintCount===0;return {rows,recent,success:recent.filter(independent).length,unique:new Set(recent.map(q=>q.fact)).size,sessions:new Set(recent.map(q=>q.sessionId)).size,independent};};
const oldUpdate=M.updateReview;M.updateReview=function(db,q,now=Date.now()){oldUpdate(db,q,now);if(q.bankVersion!==2||q.preview||q.reviewOnly)return;const state=M.difficultyState(db,q.topic),e=M.difficultyEvidence(db,q.topic);if(q.difficultyApplied)return;q.difficultyApplied=true;const enough=e.rows.length>=4;let next=state.level,why='';if(e.recent.length>=6&&e.unique>=4&&e.sessions>=2&&e.success/e.recent.length>=.85&&enough&&state.level<4){next++;why='当前层稳定首答且无需提示，跨两次冒险后小步升级';}else if(e.recent.length>=2&&e.recent.slice(-2).every(x=>!e.independent(x))&&state.level>1){next--;why='连续两题需要订正或提示，下次先给支架练习';}if(next!==state.level){state.events.push({at:new Date(now).toISOString(),from:state.level,to:next,reason:why});state.level=next;state.sinceIndex=db.questions.length;state.lastChangeCount=0;}};
M.availableBank=(db,topic)=>M.BANK.filter(e=>e.topic===topic&&!['disabled','revise'].includes(db.bankReview?.[e.id]?.status));
const oldChoose=M.choose;M.choose=function(db,index,rows,r=Math.random,now=Date.now()){db.difficulty??={};const usable=db.profile.topics.filter(t=>M.availableBank(db,t).length);if(!usable.length)throw Error('当前范围题型全部停用');const scoped={...db,profile:{...db.profile,topics:usable}};if(index>=3){const prior=rows.find((q,i)=>i<=index-3&&!q.skipped&&q.bankVersion===2&&(!q.attempts[0]?.correct||q.hintCount)&&!rows.slice(i+1).some(x=>x.fact===q.fact)&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status));if(prior)return {...prior,id:'recheck-'+Date.now()+'-'+(++serial),attempts:[],skipped:false,skippedAt:null,hintCount:0,method:'未填写',checked:false,completed:false,difficultyApplied:false,source:'间隔巩固 · 已隔至少两题',reviewOnly:true,createdAt:new Date().toISOString()};}let selected=oldChoose(scoped,index,rows,r,now);if(selected.source==='到期错题复习'){const original=db.questions.findLast(q=>q.fact===selected.fact);if(original?.bankVersion===2&&!['disabled','revise'].includes(db.bankReview?.[original.templateId]?.status)){return {...original,id:'review-'+Date.now()+'-'+(++serial),attempts:[],skipped:false,skippedAt:null,hintCount:0,method:'未填写',checked:false,completed:false,difficultyApplied:false,createdAt:new Date().toISOString(),source:'到期错题复习',reviewOnly:true};}}
if(selected.source.includes('间隔巩固')&&selected.topic==='ten'){const original=rows.find(q=>q.fact===selected.fact);if(original?.bankVersion===2)return {...original,id:'recheck-'+Date.now()+'-'+(++serial),attempts:[],skipped:false,skippedAt:null,hintCount:0,completed:false,difficultyApplied:false,source:'间隔巩固',reviewOnly:true,createdAt:new Date().toISOString()};}
const topic=selected.topic,state=M.difficultyState(db,topic),ev=M.difficultyEvidence(db,topic);let target=state.level,band='当前层练习';if(index%6===0){target=Math.max(1,state.level-1);band='轻松热身';}else if(index%6===5&&ev.recent.length>=4&&ev.success/ev.recent.length>=.85&&ev.unique>=3&&state.level<4){target=state.level+1;band='小步挑战（不改变正式等级）';}const entries=M.availableBank(db,topic).filter(e=>e.level===target);const fallback=M.availableBank(db,topic).sort((a,b)=>Math.abs(a.level-target)-Math.abs(b.level-target));let q;for(let i=0;i<20;i++){const entry=entries.length?entries[Math.floor(r()*entries.length)]:fallback[0];q=generate(entry,r);if(!rows.some(x=>x.fact===q.fact))break;}if(selected.source==='基础观察起点'){const entry=M.BANK.find(e=>e.topic==='ten'&&e.variant===0&&e.level===1);if(M.availableBank(db,'ten').some(e=>e.id===entry.id)){q=generate(entry,r);Object.assign(q,{a:10,b:4,op:'-',answer:6,text:'10 − 4 = ?',hint:'把10分成拿走的4和剩下的部分。',visual:{a:10,b:4,op:'-'},calc:'10-4'});q.fact=entry.id+':'+q.text;}}q.source=selected.source==='基础观察起点'?'基础观察起点':band;q.selectionBand=band;q.selectionReason='本知识点当前L'+state.level+'；'+band;return q;};
})();

(function(global){const M=MathGarden;const chapterCache=new Map();
M.CHAPTER_BANKS=M.UNITS.filter(u=>u.id!=='review').map(u=>({id:u.id,title:u.title,topics:[...u.topics],levels:[1,2,3,4],sampleTarget:72}));
M.chapterSamples=function(db,unitId,level){const chapter=M.CHAPTER_BANKS.find(c=>c.id===unitId);if(!chapter)return[];const entries=M.BANK.filter(e=>chapter.topics.includes(e.topic)&&e.level===level&&!['disabled','revise'].includes(db.bankReview?.[e.id]?.status));const key=unitId+':'+level+':'+entries.map(e=>e.id).join('|');if(chapterCache.has(key))return chapterCache.get(key);const r=M.seeded('chapter-v1:'+key),unique=new Map();for(let i=0;i<1200&&unique.size<72&&entries.length;i++){const e=entries[i%entries.length],q=M.generateBank(e,r),identity=q.topic+':'+q.text+':'+q.answer;if(!unique.has(identity))unique.set(identity,q)}const result=[...unique.values()];chapterCache.set(key,result);return result;};
const previousChoose=M.choose;M.choose=function(db,index,rows,r=Math.random,now=Date.now()){const picked=previousChoose(db,index,rows,r,now);if(picked.reviewOnly||picked.source==='基础观察起点')return picked;const recent=db.questions.filter(q=>q.topic===picked.topic&&q.bankVersion===2&&!q.preview&&q.attempts?.length),entries=M.availableBank(db,picked.topic).filter(e=>e.level===picked.level);if(!entries.length)return picked;let best=picked,bestScore=Infinity;for(let i=0;i<36;i++){const e=entries[Math.floor(r()*entries.length)],q=M.generateBank(e,r);const matches=recent.filter(x=>x.text===q.text);const recentMatch=matches.filter(x=>Date.parse(x.createdAt)>=now-30*864e5).length;const inRound=rows.some(x=>x.text===q.text)?10000:0;const variantRepeats=recent.slice(-6).filter(x=>x.variant===q.variant).length;const score=inRound+recentMatch*100+matches.length*5+variantRepeats*3;if(score<bestScore){best=q;bestScore=score;}}for(const key of ['source','selectionBand','selectionReason'])best[key]=picked[key];best.rotationReason='优先近期少见的题型和题目；错题复习按间隔计划另行安排';return best;};
function dayKey(now=Date.now()){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Hong_Kong',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(now));const get=k=>parts.find(p=>p.type===k).value;return get('year')+'-'+get('month')+'-'+get('day')}
function eligible(db){const unique=new Map();for(const q of db.questions){if(!q.completed||q.preview||q.dailyKey||!q.attempts?.length||!M.TOPICS[q.topic]||!db.profile.topics.includes(q.topic))continue;if(q.templateId&&['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status))continue;const key=q.topic+':'+q.text+':'+q.answer;unique.set(key,q)}return [...unique.values()];}
function status(db,now=Date.now()){const key=dayKey(now),record=db.dailyChallenges?.[key],n=eligible(db).length;return {key,claimed:!!record?.claimedAt,available:!!record||n>=3,eligibleCount:n,target:record?.plan.length||Math.min(6,n),completed:record?.completedIds?.length||0};}
function prepare(db,now=Date.now()){db.dailyChallenges??={};const key=dayKey(now);if(db.dailyChallenges[key])return db.dailyChallenges[key];const pool=eligible(db);if(pool.length<3)throw Error('先完成一次冒险，积累至少3道不同的已做题，再开启每日挑战。');const r=M.seeded('daily:'+key+':'+(db.createdAt||'local'));const decorated=pool.map(q=>({q,priority:(!q.attempts[0].correct||q.hintCount?2:0)+r()})).sort((a,b)=>b.priority-a.priority);const chosen=[],topics=new Set();for(const row of decorated){if(chosen.length>=Math.min(6,pool.length))break;if(!topics.has(row.q.topic)){chosen.push(row.q);topics.add(row.q.topic)}}for(const row of decorated){if(chosen.length>=Math.min(6,pool.length))break;if(!chosen.includes(row.q))chosen.push(row.q)}const record={key,createdAt:new Date(now).toISOString(),plan:chosen.map(q=>({originalId:q.id,question:JSON.parse(JSON.stringify(q))})),completedIds:[],sessionId:'daily-session:'+key,claimedAt:null,packId:null};db.dailyChallenges[key]=record;return record;}
function question(db,key,index){const record=db.dailyChallenges?.[key],item=record?.plan[index];if(!item)throw Error('每日挑战题目不存在');const original=item.question;if(!db.profile.topics.includes(original.topic))throw Error('这道复习题已移出当前学习范围，请家长刷新题单。');if(original.templateId&&['disabled','revise'].includes(db.bankReview?.[original.templateId]?.status))throw Error('今日挑战含已暂停题目，请家长先检查该题型。');return {...JSON.parse(JSON.stringify(original)),id:'daily-q:'+key+':'+index,originalQuestionId:item.originalId,dailyKey:key,dailyOrdinal:index,attempts:[],skipped:false,skippedAt:null,hintCount:0,checked:false,method:'未填写',supportEvents:[],supportStage:-1,workedExampleSeen:false,completed:false,difficultyApplied:false,preview:false,reviewOnly:true,source:'每日挑战 · 已做题回顾',createdAt:new Date().toISOString()};}
function sync(db,key){const record=db.dailyChallenges?.[key];if(!record)return;record.completedIds=record.plan.flatMap((_,i)=>{const id='daily-q:'+key+':'+i;return db.questions.some(q=>q.id===id&&(q.completed||q.skipped)&&q.dailyKey===key)?[id]:[]});return record;}
function claim(db,key,now=Date.now()){const record=sync(db,key);if(!record)throw Error('没有本日挑战');if(record.claimedAt)return {sun:10,replayed:true};if(record.completedIds.length!==record.plan.length)throw Error('还有挑战题未完成');const ref='v2:daily-review:'+key;if(!db.ledger.some(x=>x.ref===ref)){db.wallet.sun+=10;db.ledger.push({ref,resource:'sun',amount:10,reason:'每日短复习完成',at:new Date(now).toISOString()})}record.sun=10;record.claimedAt=new Date(now).toISOString();return {sun:10,replayed:false}}

global.DailyChallenge={dayKey,eligible,status,prepare,question,sync,claim};if(typeof module!=='undefined')module.exports=global.DailyChallenge;
})(typeof window!=='undefined'?window:globalThis);

(function(){const M=MathGarden;
M.MIXED_SKILLS=[{id:'mul',name:'乘加与乘减',icon:'✿',goal:'先乘后加减'},{id:'div',name:'除加与除减',icon:'❧',goal:'先除后加减'},{id:'bracket',name:'小括号魔法',icon:'◉',goal:'先算括号里面'},{id:'order',name:'步骤侦察',icon:'⌕',goal:'判断顺序与找错'},{id:'missing',name:'补全能量',icon:'◇',goal:'填空与逆向思考'},{id:'story',name:'花园应用',icon:'⚑',goal:'读懂数量关系'}];
const entries=M.MIXED_SKILLS.flatMap(s=>[0,1,2].flatMap(variant=>[1,2,3,4].map(level=>({id:'mixed-v3:'+s.id+':'+variant+':'+level,topic:'mixed',chapterSkill:s.id,variant,level,name:s.name+' · '+['直接理解','变化练习','迁移应用'][variant],goal:s.goal,levelName:M.LEVEL_NAMES[level]}))));M.BANK.push(...entries);
const previousGenerate=M.generateBank,available=M.availableBank;M.availableBank=function(db,topic){return available(db,topic).filter(e=>!e.chapterSkill)};
let serial=0;
M.generateBank=function(e,r=Math.random){if(!e.chapterSkill)return previousGenerate(e,r);const l=e.level,v=e.variant,n=(a,b)=>a+Math.floor(r()*(b-a+1)),a=n(2,l===1?5:9),b=n(2,l===1?5:9),c=n(2,l<=2?9:20);let text,answer,hint,calc,unit='';const s=e.chapterSkill;
if(s==='mul'){const minus=v===1||(v===2&&l>=3),d=Math.min(c,a*b-1);text=minus?a+' × '+b+' − '+d+' = ?':v===2?c+' + '+a+' × '+b+' = ?':a+' × '+b+' + '+c+' = ?';answer=minus?a*b-d:a*b+c;hint='先算 '+a+' × '+b+' = '+a*b+'，再算'+(minus?'减法。':'加法。');calc=minus?a+'*'+b+'-'+d:c+'+'+a+'*'+b;}
if(s==='div'){const minus=v===1,d=Math.min(c,a-1);text=minus?a*b+' ÷ '+b+' − '+d+' = ?':v===2?c+' + '+a*b+' ÷ '+b+' = ?':a*b+' ÷ '+b+' + '+c+' = ?';answer=minus?a-d:a+c;hint='先算 '+a*b+' ÷ '+b+' = '+a+'，再做加减法。';calc=minus?a*b+'/'+b+'-'+d:c+'+'+a*b+'/'+b;}
if(s==='bracket'){if(v===0){text='('+a+' + '+b+') × '+c+' = ?';answer=(a+b)*c;calc='('+a+'+'+b+')*'+c;hint='先把括号里的两个数相加，再把和乘 '+c+'。';}else if(v===1){text='('+((a+b)*c)+' − '+b*c+') ÷ '+c+' = ?';answer=a;calc='('+((a+b)*c)+'-'+b*c+')/'+c;hint='先算括号内的差，再按 '+c+' 个一组分。';}else{text=a+' × ('+(b+c)+' − '+c+') = ?';answer=a*b;calc=a+'*('+ (b+c)+'-'+c+')';hint='括号改变了先后顺序，先算里面的减法。';}}
if(s==='order'){const expr=c+' + '+a+' × '+b,swap=r()<.5;if(v===0){const options=[c+' + '+a,a+' × '+b];if(swap)options.reverse();text=expr+' 中先算哪一步？填1表示 '+options[0]+'，填2表示 '+options[1]+'。';answer=swap?1:2;hint='没有括号时，乘法在加法前面。';}else if(v===1){const result=swap?a*b+c:(c+a)*b;text='小芽把 '+expr+' 算成了 '+result+'。这个结果正确吗？填1表示正确，填2表示错误。';answer=swap?1:2;hint='应先求乘积 '+a*b+'，再加 '+c+'，得到 '+(a*b+c)+'。';}else{const options=['('+c+' + '+a+') × '+b,c+' + '+a+' × '+b];if(swap)options.reverse();text='先算 '+c+' + '+a+'，再把结果乘 '+b+'，应选哪个算式？填1表示 '+options[0]+'，填2表示 '+options[1]+'。';answer=swap?2:1;hint='要先加，需要用小括号把加法括起来。';}calc=String(answer);}
if(s==='missing'){if(v===0){text='□ + '+a+' × '+b+' = '+(c+a*b)+'，□里填几？';answer=c;hint='先求乘积，再用总和减去乘积。';}else if(v===1){text='(□ + '+a+') × '+b+' = '+((c+a)*b)+'，□里填几？';answer=c;hint='先把结果除以 '+b+' 求括号里的和，再减 '+a+'。';}else{text=a*b+' ÷ □ + '+c+' = '+(a+c)+'，□里填几？';answer=b;hint='先减 '+c+' 求商，再用被除数除以商。';}calc=String(answer);}
if(s==='story'){unit='颗';if(v===0){text='有 '+a+' 袋种子，每袋 '+b+' 颗，又收到 '+c+' 颗。现在一共有多少颗种子？';answer=a*b+c;hint='先算整袋种子的总数，再加零散的种子。';calc=a+'*'+b+'+'+c;}else if(v===1){const used=Math.min(c,a*b-1);text='有 '+a+' 袋种子，每袋 '+b+' 颗，种下 '+used+' 颗后，还剩多少颗？';answer=a*b-used;hint='先求原来的总数，再减去种下的数量。';calc=a+'*'+b+'-'+used;}else{text='原有 '+a*c+' 颗种子，又收到 '+b*c+' 颗，合起来平均分给 '+c+' 个小组。每组分到多少颗？';answer=a+b;hint='先合计全部种子，再除以小组数。';calc='('+a*c+'+'+b*c+')/'+c;}}
const q=previousGenerate(M.BANK.find(e=>e.topic==='ten'&&e.level===1),r);return {...q,id:'mixed3-'+Date.now()+'-'+(++serial),topic:'mixed',text,answer,hint,calc,unit,visual:null,diagram:'',bankVersion:3,chapterSkill:s,skillId:'mixed:'+s,templateId:e.id,variant:v,level:l,selectionBand:M.LEVEL_NAMES[l],source:'混合运算 · '+M.MIXED_SKILLS.find(x=>x.id===s).name,fact:e.id+':'+text};};
M.mixedEntries=(db,skill,level)=>entries.filter(e=>(!skill||e.chapterSkill===skill)&&(!level||e.level===level)&&!['disabled','revise'].includes(db.bankReview?.[e.id]?.status));
M.mixedState=function(db,skill){db.mixedProgress??={};return db.mixedProgress[skill]??={level:1,sinceIndex:0,events:[]}};
M.mixedEvidence=function(db,skill){const state=M.mixedState(db,skill);return db.questions.slice(state.sinceIndex).filter(q=>q.chapterSkill===skill&&q.bankVersion===3&&q.completed&&!q.preview&&!q.reviewOnly&&!q.dailyKey&&q.level===state.level&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status)).slice(-8)};
const update=M.updateReview;M.updateReview=function(db,q,now=Date.now()){update(db,q,now);if(q.bankVersion!==3||q.reviewOnly||q.preview||q.dailyKey||q.skillApplied)return;const state=M.mixedState(db,q.chapterSkill),rows=M.mixedEvidence(db,q.chapterSkill),good=x=>x.attempts[0]?.correct&&!x.hintCount;let next=state.level;if(rows.length>=6&&new Set(rows.map(q=>q.text)).size>=4&&new Set(rows.map(q=>q.sessionId)).size>=2&&rows.filter(good).length/rows.length>=.85)next=Math.min(4,next+1);else if(rows.length>=2&&rows.slice(-2).every(q=>!good(q)))next=Math.max(1,next-1);q.skillApplied=true;if(next!==state.level){state.events.push({at:new Date(now).toISOString(),from:state.level,to:next});state.level=next;state.sinceIndex=db.questions.length;}};
M.chooseMixed=function(db,skill,index,rows,r=Math.random){const history=db.questions.filter(q=>q.chapterSkill===skill&&!q.preview&&!q.dailyKey),due=index%3===1?history.findLast(q=>db.reviews[q.fact]&&Date.parse(db.reviews[q.fact].dueAt)<=Date.now()&&!rows.some(x=>x.fact===q.fact)&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status)):null,miss=due||rows.find((q,i)=>i<=index-3&&!q.skipped&&(!q.attempts[0]?.correct||q.hintCount)&&!rows.slice(i+1).some(x=>x.fact===q.fact)&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status));if(miss)return {...miss,id:'mixed-repeat-'+Date.now()+'-'+(++serial),attempts:[],method:'未填写',supportEvents:[],supportStage:-1,workedExampleSeen:false,skipped:false,skippedAt:null,completed:false,hintCount:0,checked:false,reviewOnly:true,source:(due?'到期错题回顾 · ':'隔两题再试 · ')+M.MIXED_SKILLS.find(x=>x.id===skill).name};const state=M.mixedState(db,skill),pool=M.mixedEntries(db,skill,state.level);if(!pool.length)throw Error('本小关当前难度题型已暂停，请家长检查题库。');let best,score=Infinity;for(let i=0;i<60;i++){const e=pool[Math.floor(r()*pool.length)],q=M.generateBank(e,r),n=rows.some(x=>x.text===q.text)?1e6:0,recent=history.filter(x=>x.text===q.text),sc=n+recent.length*10+recent.filter(x=>Date.parse(x.createdAt)>Date.now()-30*864e5).length*100;if(sc<score){best=q;score=sc}}return best;};
})();

(function(){const M=MathGarden;
const plan={
basic:[['ten','十以内加减','ten','把数量关系想清楚'],['complement','凑十与补数','ten','寻找缺少的那一部分'],['twodigit','两位数加减','add','按数位计算与检查'],['basicstory','生活小应用','add','分步整理数量']],
u2:[['units','长度单位','length','米、分米、厘米与毫米'],['ruler','尺子读数','length','终点刻度减起点刻度'],['lengthcompare','长度比较','length','统一单位再比较'],['measurestory','测量应用','length','拼接、剪去与剩余']],
campus:[['campusroute','校园路线','campus','记录实际走过的长度'],['campusrecord','校园记录','campus','比较和整理测量记录'],['campusplan','路线规划','campus','选择更短的行走路线']],
u3:[['aligned','数位与计算','triple','相同数位对齐'],['carry','进位加法','triple','满十向前一位进一'],['borrow','退位减法','triple','不足减时向前借一'],['check','缺数与验算','triple','用逆运算检查'],['bigstory','两步应用','triple','先确定每一步求什么']],
u4:[['mapdirection','地图方向','space','北向朝上看方向'],['turn','面向与转向','space','跟随自己的朝向转动'],['track','路线追踪','space','一步一步找到终点'],['relative','相对位置','space','说清谁在谁的哪一边']],
u5:[['angle','认识角','shape','找到顶点与两条边'],['anglecompare','与直角比较','shape','区分锐角、直角与钝角'],['rectangle','长方形特征','shape','观察角与相对的边'],['square','正方形辨识','shape','四边相等且四角为直角']],
combination:[['pairs','两类搭配','combination','每类各选一种'],['enumerate','有序枚举','combination','按顺序列全不重复'],['restricted','条件搭配','combination','去掉不符合条件的组合']],
u6:[['groups','乘法分组','multiply','相同数量的几组'],['share','平均分配','multiply','每份同样多'],['times','倍数关系','multiply','比较一个数是另一个的几倍'],['multistory','两步应用','multiply','先分组再处理增减'],['inverse','逆向求数','multiply','从结果找回每份或份数']],
u7:[['decimalread','认识小数','decimal','理解十分之一'],['money','元角换算','decimal','价钱的不同表示'],['decimalcompare','小数比较','decimal','比较整数部分和十分位'],['decimalcalc','小数加减','decimal','小数点对齐'],['shopping','购物找零','decimal','合计价钱再算找回']],
u8:[['readtable','读表找数','survey','找到对应的一行'],['tabletotal','数据合计','survey','把需要的项目合起来'],['tabledifference','数据比较','survey','求多多少或少多少'],['tablemissing','补全记录','survey','利用合计找缺数']],
calendar:[['months','认识月份','calendar','大月、小月和二月'],['leap','平年与闰年','calendar','观察二月的天数'],['dates','经过日期','calendar','明确首尾是否都包含'],['week','星期推算','calendar','每七天重复一次']],
review:[['reviewcalc','计算回顾',['ten','add','mixed','triple','multiply','decimal'],'回顾已经学过的计算'],['reviewlife','生活应用',['length','campus','combination','calendar','decimal'],'把知识用到生活中'],['reviewvisual','图形与记录',['space','shape','survey'],'看图、读表再思考']]
};
M.CHAPTER_SKILLS=Object.entries(plan).flatMap(([unit,skills])=>skills.map(([key,name,topic,goal],i)=>({id:unit+'.'+key,key,unit,name,topics:Array.isArray(topic)?topic:[topic],goal,icon:['✿','◇','⌕','⚑','◉'][i%5]}))).concat(M.MIXED_SKILLS.map(s=>({...s,unit:'u1',topics:['mixed'],legacyMixed:true})));
const generic=M.CHAPTER_SKILLS.filter(s=>!s.legacyMixed),entries=generic.flatMap(s=>s.topics.flatMap(topic=>[0,1,2].flatMap(variant=>[1,2,3,4].map(level=>({id:'chapter-v4:'+s.id+':'+topic+':'+variant+':'+level,topic,chapterSkill:s.id,chapterUnit:s.unit,variant,level,name:s.name+' · '+['理解','巩固','应用'][variant],goal:s.goal,levelName:M.LEVEL_NAMES[level]})))));
M.BANK.push(...entries);M.chapterSpec=id=>M.CHAPTER_SKILLS.find(s=>s.id===id);
// Use only recognizable old question metadata for recommendations; do not manufacture new clear records.
M.questionChapterSkill=function(q){if(q.chapterSkill)return q.chapterSkill;const v=q.variant,u=q.unitId,t=q.topic;let key=null;if(u==='basic')key=t==='ten'?(v===1?'complement':'ten'):t==='add'?(v===2?'basicstory':'twodigit'):null;if(u==='u2'&&t==='length')key=v===0?'units':'measurestory';if(u==='campus'&&t==='campus'&&v===1)key='campusroute';if(u==='u3'&&t==='triple')key=v===1?'check':v===2?'bigstory':q.op==='+'?'carry':q.op==='-'?'borrow':'aligned';if(u==='u4'&&t==='space')key=v===0?'mapdirection':v===2?'turn':null;if(u==='u5'&&t==='shape')key=v===0?'rectangle':v===1?'anglecompare':q.level>=3?'square':null;if(u==='combination'&&t==='combination')key=v===2?'restricted':'pairs';if(u==='u6'&&t==='multiply')key=['groups','share','multistory'][v];if(u==='u7'&&t==='decimal')key=['decimalcalc','money','shopping'][v];if(u==='u8'&&t==='survey')key=v===0?(q.level<=2?'tabletotal':'tabledifference'):null;if(u==='calendar'&&t==='calendar')key=['months','dates','week'][v];return key?u+'.'+key:null};
M.chapterEntries=(db,id,level)=>{const spec=M.chapterSpec(id);if(!spec)return[];if(spec.legacyMixed)return M.mixedEntries(db,id,level);return entries.filter(e=>e.chapterSkill===id&&(!level||e.level===level)&&db.profile.topics.includes(e.topic)&&!['disabled','revise'].includes(db.bankReview?.[e.id]?.status))};
M.chapterState=function(db,id){if(M.chapterSpec(id)?.legacyMixed)return M.mixedState(db,id);db.chapterProgress??={};return db.chapterProgress[id]??={level:1,sinceIndex:0,events:[]}};
const previousGenerate=M.generateBank;let serial=0;
function generate(e,r=Math.random){if(!e.chapterUnit)return previousGenerate(e,r);const spec=M.chapterSpec(e.chapterSkill),k=spec.key,l=e.level,v=e.variant,n=(a,b)=>a+Math.floor(r()*(b-a+1)),pick=a=>a[n(0,a.length-1)];let a=n(2,9),b=n(2,9),c=n(2,9),text='',answer=0,hint='',unit='',diagram='',calc='',visual=null;
const base=()=>previousGenerate(M.BANK.find(x=>!x.chapterSkill&&x.topic===e.topic&&x.level===l&&x.variant===v),r);
if(spec.unit==='review'){const q=base();return {...q,id:'chapter-'+Date.now()+'-'+(++serial),chapterSkill:spec.id,bankVersion:4,templateId:e.id,skillId:spec.id,source:'总复习 · '+spec.name,level:l,fact:e.id+':'+q.text+':'+q.answer+':'+(q.diagram||'')}}
if(k==='ten'){a=n(3,10);b=n(1,a-1);const plus=(v===1)||(v===2&&r()<.5);text=plus?(a-b)+' + '+b+' = ?':a+' − '+b+' = ?';answer=plus?a:a-b;hint=plus?'想想把两部分合起来。':'想想拿走以后剩下的部分。';calc=plus?(a-b)+'+'+b:a+'-'+b;visual={a:plus?a-b:a,b,op:plus?'+':'-'}}
if(k==='complement'){b=n(1,9);a=l<=2?10:n(b+1,10);if(v===0){text=b+' + □ = '+a+'，□里填几？';answer=a-b}else if(v===1){text=a+' − □ = '+b+'，□里填几？';answer=a-b}else{text='两盒一共 '+a+' 颗松果，一盒有 '+b+' 颗，另一盒有多少颗？';answer=a-b;unit='颗'}hint='总数可以分成已知部分和缺少部分。';calc=a+'-'+b}
if(k==='twodigit'||k==='basicstory'){const q=base();text=q.text;answer=q.answer;hint=q.hint;unit=q.unit;calc=q.calc;if(k==='twodigit'&&v===2){a=n(31,65);b=n(11,29);text=a+' − '+b+' = ?';answer=a-b;hint='个位不足减时，向十位借一。';calc=a+'-'+b}}
if(k==='units'){const routes=l<3?[['分米','厘米',10],['厘米','毫米',10],['米','厘米',100]]:[['米','毫米',1000],['分米','毫米',100],['米','分米',10]],route=routes[v];a=n(1,9);if(l>=3&&v===2){text=a+' 米 '+b+' 分米一共是多少分米？';answer=a*10+b;calc=a+'*10+'+b}else{text=a+' '+route[0]+' = 多少'+route[1]+'？';answer=a*route[2];calc=a+'*'+route[2]}unit=route[1];hint='先回想两种长度单位之间的进率。'}
if(k==='ruler'){const start=l===1?0:n(1,5),length=n(2,8),end=start+length;diagram='<svg viewBox="0 0 420 110" style="width:420px;max-width:100%"><rect x="15" y="45" width="390" height="50" rx="5" fill="#ead39a" stroke="#887346"/>'+Array.from({length:16},(_,i)=>'<path d="M'+(22+i*24)+' 45v'+(i%5===0?24:14)+'" stroke="#655b38"/><text x="'+(22+i*24)+'" y="85" text-anchor="middle" font-size="12" fill="#514b30">'+i+'</text>').join('')+'<path d="M'+(22+start*24)+' 30H'+(22+end*24)+'" stroke="#57864b" stroke-width="10"/><text x="310" y="20" font-size="13" fill="#514b30">刻度单位：厘米</text></svg>';text='绿色小棒从 '+start+' 厘米刻度到 '+end+' 厘米刻度，长多少'+(v===2&&l>=3?'毫米':'厘米')+'？';answer=length*(v===2&&l>=3?10:1);unit=v===2&&l>=3?'毫米':'厘米';hint='用终点刻度减起点刻度，不把起点刻度算成长度。';calc='('+end+'-'+start+')*'+(unit==='毫米'?10:1)}
if(k==='lengthcompare'){const left=a*10+b,right=a*10+c;const reverse=v===1;text=(reverse?right+' 厘米与 '+a+' 分米 '+b+' 厘米':a+' 分米 '+b+' 厘米与 '+right+' 厘米')+'比较。填1表示左边长，2表示一样长，3表示右边长。';const x=reverse?right:left,y=reverse?left:right;answer=x>y?1:x===y?2:3;hint='先把两边都换成厘米，再比较数值。';calc=String(answer)}
if(k==='measurestory'){const total=a*10+b,cut=n(2,total-1);text=v===0?'两根绳分别长 '+a+' 分米和 '+b+' 厘米，接起来一共多少厘米？':v===1?'长 '+total+' 厘米的彩带，剪去 '+cut+' 厘米，还剩多少厘米？':'一根绳长 '+total+' 厘米，要分给两组。第一组取 '+cut+' 厘米，第二组得到剩下的部分，第二组有多少厘米？';answer=v===0?total:total-cut;hint=v===0?'先统一成厘米，再相加。':'总长减去已经用去的长度。';unit='厘米';calc=v===0?String(total):total+'-'+cut}
if(k==='campusroute'){const x=a*10,y=b*10;const back=l>=3&&v===2;diagram='<svg viewBox="0 0 350 135" style="width:350px;max-width:100%"><path d="M35 95H210V30" fill="none" stroke="#63844a" stroke-width="5"/><g fill="#43583a" font-size="14"><text x="15" y="120">校门</text><text x="90" y="85">'+x+'米</text><text x="222" y="75">'+y+'米</text><text x="190" y="20">花圃</text></g></svg>';text='从校门按图走到花圃'+(back?'，再原路返回校门':'')+'，一共走多少米？';answer=(x+y)*(back?2:1);unit='米';hint='沿实际路线把每一段相加；返回时同样的路再走一次。';calc='('+x+'+'+y+')*'+(back?2:1)}
if(k==='campusrecord'){const x=a*10+b,y=c*10;diagram=table([['教学楼到花圃',x],['花圃到操场',y]],'路线','长度/米');text=v===0?'两段路线合计长多少米？':v===1?'两段路线的长度相差多少米？':'从教学楼经过花圃到操场，再沿原路回来，共走多少米？';answer=v===0?x+y:v===1?Math.abs(x-y):(x+y)*2;hint=v===1?'较长的长度减去较短的长度。':'按记录中的路线累加实际长度。';unit='米';calc=v===0?x+'+'+y:v===1?String(Math.abs(x-y)):'('+x+'+'+y+')*2'}
if(k==='campusplan'){const first=a*10+b*10,second=first+c*5;diagram=table([['路线甲',first],['路线乙',second]],'路线','长度/米');text=v===0?'只走一次，哪条路线更短？填1表示路线甲，2表示路线乙。':v===1?'走较短路线比走较长路线少走多少米？':'沿较短路线去操场，再沿较长路线回来，共走多少米？';answer=v===0?1:v===1?second-first:first+second;unit=v===0?'':'米';hint='先比较两条路线长度，再按问题求差或求合计。';calc=String(answer)}
if(k==='aligned'){const x=n(3,6)*100+n(1,3)*10+n(1,3),y=n(1,2)*100+n(1,2)*10+n(1,2),minus=v===1; text=x+' '+(minus?'−':'+')+' '+y+' = ?';answer=minus?x-y:x+y;calc=x+(minus?'-':'+')+y;hint='个位对个位、十位对十位、百位对百位。'}
if(k==='carry'){const x=n(1,5)*100+n(3,8)*10+n(5,9),y=n(1,2)*100+n(2,5)*10+n(5,9);text=v===2?'仓库有 '+x+' 袋种子，又运来 '+y+' 袋，现在多少袋？':x+' + '+y+' = ?';answer=x+y;calc=x+'+'+y;hint='个位满十向十位进一，十位满十再向百位进一。';unit=v===2?'袋':''}
if(k==='borrow'){const x=n(4,8)*100+(l<=2?n(1,3)*10:0)+n(0,3),y=n(1,2)*100+n(4,8)*10+n(5,9);text=v===2?'原有 '+x+' 袋种子，运走 '+y+' 袋后还剩多少袋？':x+' − '+y+' = ?';answer=x-y;calc=x+'-'+y;hint='相同数位对齐，遇到不足减的数位向前一位借一。';unit=v===2?'袋':''}
if(k==='check'){const x=n(120,450),y=n(110,260);text=v===0?'□ + '+y+' = '+(x+y)+'，□里填几？':v===1?'□ − '+y+' = '+x+'，□里填几？':'差是 '+x+'，被减数是 '+(x+y)+'，减数是多少？';answer=v===1?x+y:v===0?x:y;hint='想想和、差及各部分的关系，用逆运算检查。';calc=String(answer)}
if(k==='bigstory'){const q=previousGenerate(M.BANK.find(x=>!x.chapterSkill&&x.topic==='triple'&&x.variant===2&&x.level===l),r);({text,answer,hint,unit,calc}=q)}
if(k==='mapdirection'||k==='relative'){const names=['北','东','南','西'],idx=n(0,3),labels=[['树屋',150,20],['花圃',270,90],['校门',150,155],['池塘',28,90]],target=labels[idx];diagram='<svg viewBox="0 0 320 180" style="width:320px;max-width:100%"><path d="M150 30V135M55 85H250" stroke="#a9b88a" stroke-dasharray="4 5"/><g fill="#43623b" font-size="14" text-anchor="middle">'+labels.map(([name,x,y])=>'<text x="'+x+'" y="'+y+'">'+name+'</text>').join('')+'<text x="150" y="92">营地</text><text x="285" y="22">北↑</text></g></svg>';const opposite=v===2; text='地图北向朝上。'+(opposite?'营地在'+target[0]+'的哪个方向？':target[0]+'在营地的哪个方向？')+'填1表示北、2表示东、3表示南、4表示西。';answer=(idx+(opposite?2:0))%4+1;hint='先找到参照的位置，再沿地图北、东、南、西判断。';calc=String(answer)}
if(k==='turn'){const start=n(0,3),steps=l===1?1:n(1,3),right=v!==1,names=['北','东','南','西'];text='小松子面向'+names[start]+'，连续向'+(right?'右':'左')+'转 '+steps+' 次，每次转一个直角。最后面向哪里？填1北、2东、3南、4西。';answer=(start+(right?steps:4-steps))%4+1;hint='按北、东、南、西记录每一次转向。';calc=String(answer)}
if(k==='track'){const east=n(2,6),west=n(1,east-1),north=n(1,5);text='从营地先向东走 '+east+' 格，再向北走 '+north+' 格，最后向西走 '+west+' 格。终点在营地的东侧还是西侧？填1东侧，2西侧。';if(v===1){text='先向东走 '+east+' 格，再向西走 '+west+' 格，离起点还有多少格？';answer=east-west;unit='格'}else if(v===2){text='先向北走 '+north+' 格，再向东走 '+east+' 格。原路返回时先向哪个方向走？填1西，2南。';answer=1}else answer=1;hint='按每段路线移动，返回时从最后一段倒着走。';calc=String(answer)}
if(k==='angle'||k==='anglecompare'){const choice=n(1,3),points=choice===1?'100,20 100,95 175,95':choice===2?'140,30 100,95 175,95':'35,30 100,95 175,95';diagram='<svg viewBox="0 0 210 130" style="width:240px;max-width:100%"><polyline points="'+points+'" fill="none" stroke="#4d793f" stroke-width="5"/><circle cx="100" cy="95" r="4" fill="#b68c42"/></svg>';if(k==='angle'&&v===0){text='图中标点的地方是角的顶点，一个角有几条边？';answer=2;hint='从顶点出发的两条边组成一个角。'}else if(k==='angle'&&v===1){text='一个角有几个顶点？';answer=1;hint='两条边相交的地方是顶点。'}else{text='观察图中较小的角。填1直角、2锐角、3钝角。';answer=choice;hint='与直角比较：小于直角是锐角，大于直角且小于平角是钝角。'}calc=String(answer)}
if(k==='rectangle'||k==='square'){const side=k==='square'?a*2:a*2+b,w=190,h=k==='square'?190:105;diagram='<svg viewBox="0 0 270 270" style="width:240px;max-width:100%"><rect x="35" y="25" width="'+w+'" height="'+h+'" fill="#e1e8c9" stroke="#547f44" stroke-width="4"/><text x="125" y="'+(h+51)+'" fill="#46623a" text-anchor="middle" font-size="14">'+(k==='square'?a+'厘米':side+'厘米')+'</text><text x="5" y="80" fill="#46623a" font-size="14">'+a+'</text><text x="2" y="98" fill="#46623a" font-size="11">厘米</text></svg>';if(v===0){text='图中的'+(k==='square'?'正方形':'长方形')+'有几个直角？';answer=4;hint='沿图形依次检查四个角。'}else if(v===1){text=k==='square'?'正方形的一条边长 '+a+' 厘米，与它相邻的一条边长多少厘米？':'长方形下面的边长 '+side+' 厘米，与它相对的上边长多少厘米？';answer=k==='square'?a:side;unit='厘米';hint=k==='square'?'正方形的四条边相等。':'长方形相对的边相等。'}else{text=k==='square'?'一个四边形四条边相等，四个角都是直角。它一定是正方形吗？填1是，2不是。':'一个四边形有四个直角，它一定是正方形吗？填1是，2不一定。';answer=k==='square'?1:2;hint='正方形既需要四个直角，也需要四条边相等。'}calc=String(answer)}
if(k==='pairs'||k==='enumerate'||k==='restricted'){a=n(2,l<=2?3:4);b=n(2,4);const extra=n(1,2);diagram=table([['花盆种类',a],['植物种类',b]],'类别','种数');text=k==='pairs'?'有 '+a+' 种花盆和 '+b+' 种植物，每次各选一种，一共有多少种搭配？':k==='enumerate'?'有 '+a+' 种花盆和 '+b+' 种植物。固定第一种花盆已经列出 '+b+' 种搭配，其余花盆还能列出多少种搭配？':'有 '+a+' 种花盆和 '+b+' 种植物，其中 '+extra+' 种指定搭配不能使用，其余都能用。共有多少种可用搭配？';answer=k==='pairs'?a*b:k==='enumerate'?(a-1)*b:a*b-extra;hint=k==='enumerate'?'每种花盆依次配齐，再扣除已经列出的第一种。':'先求全部搭配数，再按条件保留或去掉。';unit='种';calc=k==='pairs'?a+'*'+b:k==='enumerate'?'('+a+'-1)*'+b:a+'*'+b+'-'+extra}
if(k==='groups'||k==='share'||k==='times'||k==='multistory'||k==='inverse'){a=l===1?n(2,9):n(12,l===2?29:59);b=n(2,9);if(k==='groups'){text='每排 '+a+' 株植物，共 '+b+' 排，一共有多少株？';answer=a*b;unit='株';hint='每排数量乘排数。';calc=a+'*'+b}else if(k==='share'){text=a*b+' 颗种子平均分给 '+b+' 组，每组多少颗？';answer=a;unit='颗';hint='按组数平均分，也可以用乘法检查。';calc=a*b+'/'+b}else if(k==='times'){text='向日葵有 '+a*b+' 株，坚果有 '+a+' 株。向日葵的株数是坚果的几倍？';answer=b;unit='倍';hint='比较数除以作为一份的数。';calc=a*b+'/'+a}else if(k==='inverse'){text=v===1?'有 '+a*b+' 颗种子，每袋 '+b+' 颗，能装满多少袋？':'每袋种子同样多，'+b+' 袋一共 '+a*b+' 颗，每袋多少颗？';answer=a;unit=v===1?'袋':'颗';hint='总数除以已知的份数或每份数。';calc=a*b+'/'+b}else{text=v===1?'每袋 '+b+' 颗种子，'+a+' 袋种子用去 '+c*b+' 颗，还剩多少颗？':'每排 '+a+' 株植物，共 '+b+' 排，又补种 '+c+' 株。共多少株？';if(v===1&&c>a)c=a;text=v===1?'每袋 '+b+' 颗种子，'+a+' 袋种子用去 '+c*b+' 颗，还剩多少颗？':text;answer=v===1?(a-c)*b:a*b+c;unit=v===1?'颗':'株';hint='先求原有总数，再处理补充或使用的数量。';calc=v===1?'('+a+'-'+c+')*'+b:a+'*'+b+'+'+c}}
if(k==='decimalread'){a=n(1,l<=2?9:29);text=v===1?a+' 个0.1合起来，用小数表示是多少？':(a/10).toFixed(1)+' 里面有几个0.1？';answer=v===1?a/10:a;hint='10个0.1合起来是1。';unit=v===1?'':'个';calc=String(answer)}
if(k==='money'){a=n(1,8);b=n(1,9);text=v===1?(a+b/10).toFixed(1)+' 元一共是多少角？':a+' 元 '+b+' 角，用小数表示是多少元？';answer=v===1?a*10+b:a+b/10;unit=v===1?'角':'元';hint='1元是10角，1角是0.1元。';calc=v===1?a+'*10+'+b:a+'+'+b+'/10'}
if(k==='decimalcompare'){a=n(11,79);b=v===1?a:n(11,79);text=(a/10).toFixed(1)+' 与 '+(b/10).toFixed(1)+' 比较，填1左边大、2一样大、3右边大。';answer=a>b?1:a===b?2:3;hint='先比较整数部分，相同时再比较十分位。';calc=String(answer)}
if(k==='decimalcalc'){a=n(23,79);b=n(11,Math.min(a,29));const minus=v===1||l>=3; text=(a/10).toFixed(1)+' '+(minus?'−':'+')+' '+(b/10).toFixed(1)+' = ?';answer=(minus?a-b:a+b)/10;hint='把小数点对齐，按对应数位加减。';calc='('+a+(minus?'-':'+')+b+')/10'}
if(k==='shopping'){a=n(12,39);b=n(11,29);const paid=Math.ceil((a+b)/10)+n(0,2);text=v===0?'一盆花 '+(a/10).toFixed(1)+' 元，一包种子 '+(b/10).toFixed(1)+' 元，一共多少元？':'买花 '+(a/10).toFixed(1)+' 元，买种子 '+(b/10).toFixed(1)+' 元，付了 '+paid+' 元，应找回多少元？';answer=v===0?(a+b)/10:(paid*10-a-b)/10;unit='元';hint=v===0?'把两件商品的价钱相加。':'先合计花费，再用付的钱减去总价。';calc=v===0?'('+a+'+'+b+')/10':'('+paid+'*10-'+a+'-'+b+')/10'}
if(k.startsWith('table')||k==='readtable'){a=n(4,17);b=n(8,24);c=n(3,15);const names=['豌豆','向日葵','坚果'],values=[a,b,c],index=n(0,2);diagram=table(names.map((name,i)=>[name,k==='tablemissing'&&i===index?'□':values[i]]),'植物','数量/株');if(k==='readtable'){text=names[index]+'有多少株？';answer=values[index];hint='先找植物名称，再读对应数量。'}else if(k==='tabletotal'){text=v===1?'豌豆和坚果合计多少株？':'三种植物合计多少株？';answer=v===1?a+c:a+b+c;hint='只把问题要求的项目相加。'}else if(k==='tabledifference'){text='向日葵和豌豆的株数相差多少？';answer=Math.abs(a-b);hint='较大数量减去较小数量。'}else{text='三种植物合计 '+(a+b+c)+' 株，记录中□代表多少株？';answer=values[index];hint='用合计减去两项已知数量。'}unit='株';calc=String(answer)}
if(k==='months'||k==='leap'||k==='dates'||k==='week'){const year=pick([2024,2025,2026,2028,2030]),month=pick([2,3,4,6,8,11]),days=month===2?(M.isLeap(year)?29:28):[4,6,9,11].includes(month)?30:31;if(k==='months'){const m=v===0?pick([1,3,5,7,8,10,12]):v===1?pick([4,6,9,11]):month;text=year+'年'+m+'月有多少天？';answer=m===2?(M.isLeap(year)?29:28):[4,6,9,11].includes(m)?30:31;hint='大月31天，小月30天，二月还要看平年或闰年。';unit='天'}else if(k==='leap'){text=v===0?year+'年是闰年吗？填1是，2不是。':year+'年的2月有多少天？';answer=v===0?(M.isLeap(year)?1:2):(M.isLeap(year)?29:28);unit=v===0?'':'天';hint='这些年份都不是整百年，可以看年份能不能被4整除。'}else if(k==='dates'){const start=n(10,20),end=n(23,27);text=v===2?'观察日记从 '+year+'年'+month+'月'+start+'日写到下月'+b+'日，首尾两天都写，一共写几天？':'观察日记从本月'+start+'日写到'+end+'日，首尾两天都写，一共写几天？';answer=v===2?days-start+1+b:end-start+1;unit='天';hint='包含开始那一天；跨月时把两个月的天数分开计算。'}else{const day=n(1,7),shift=n(2,l<=2?8:20);text='今天星期'+['','一','二','三','四','五','六','日'][day]+'，'+shift+'天后星期几？填1至7，7表示星期日。';answer=(day-1+shift)%7+1;hint='一周7天，先去掉完整的周，再数剩余天数。'}calc=String(answer)}
if(!text||!Number.isFinite(answer)||answer<0)throw Error('小关题型生成失败：'+e.id);const seed=base();return {...seed,id:'chapter-'+Date.now()+'-'+(++serial),topic:e.topic,text,answer,hint,unit,diagram,visual,calc:calc||String(answer),a,b,variant:v,level:l,bankVersion:4,chapterSkill:spec.id,templateId:e.id,skillId:spec.id,source:M.UNITS.find(u=>u.id===spec.unit).title+' · '+spec.name,fact:e.id+':'+text+':'+answer+':'+diagram}}
function table(rows,label,value){return '<table><tr><th>'+label+'</th><th>'+value+'</th></tr>'+rows.map(([name,n])=>'<tr><td>'+name+'</td><td>'+n+'</td></tr>').join('')+'</table>'}
M.generateBank=generate;
M.chapterEvidence=function(db,id){const state=M.chapterState(db,id);return db.questions.slice(state.sinceIndex).filter(q=>q.chapterSkill===id&&q.bankVersion===4&&q.completed&&!q.skipped&&!q.preview&&!q.reviewOnly&&!q.dailyKey&&q.level===state.level&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status)).slice(-8)};
const previousUpdate=M.updateReview;M.updateReview=function(db,q,now=Date.now()){previousUpdate(db,q,now);if(q.bankVersion!==4||q.reviewOnly||q.preview||q.dailyKey||q.skipped||q.skillApplied)return;const state=M.chapterState(db,q.chapterSkill),rows=M.chapterEvidence(db,q.chapterSkill),good=q=>q.attempts[0]?.correct&&!q.hintCount;let next=state.level;if(rows.length>=6&&new Set(rows.map(q=>q.fact)).size>=4&&new Set(rows.map(q=>q.sessionId)).size>=2&&rows.filter(good).length/rows.length>=.85)next=Math.min(4,next+1);else if(rows.length>=2&&rows.slice(-2).every(q=>!good(q)))next=Math.max(1,next-1);q.skillApplied=true;if(next!==state.level){state.events.push({at:new Date(now).toISOString(),from:state.level,to:next});state.level=next;state.sinceIndex=db.questions.length}};
M.chooseChapter=function(db,id,index,rows,r=Math.random){const spec=M.chapterSpec(id);if(spec?.legacyMixed)return M.chooseMixed(db,id,index,rows,r);const pool=M.chapterEntries(db,id,M.chapterState(db,id).level);if(!pool.length)throw Error('本小关当前范围或难度题型暂停，请家长检查');const history=db.questions.filter(q=>q.chapterSkill===id&&!q.preview&&!q.dailyKey),miss=index%3===1?history.findLast(q=>db.reviews[q.fact]&&Date.parse(db.reviews[q.fact].dueAt)<=Date.now()&&!rows.some(x=>x.fact===q.fact)&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status)):null,repeat=miss||rows.find((q,i)=>i<=index-3&&!q.skipped&&(!q.attempts[0]?.correct||q.hintCount)&&!rows.slice(i+1).some(x=>x.fact===q.fact)&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status));if(repeat)return {...repeat,id:'chapter-revisit-'+Date.now()+'-'+(++serial),attempts:[],checked:false,method:'未填写',supportEvents:[],supportStage:-1,workedExampleSeen:false,completed:false,skipped:false,skippedAt:null,hintCount:0,reviewOnly:true,skillApplied:false,createdAt:new Date().toISOString(),source:'间隔回顾 · '+spec.name};let best,score=Infinity;for(let i=0;i<48;i++){const e=pool[Math.floor(r()*pool.length)],q=generate(e,r),n=rows.some(x=>x.text===q.text&&x.answer===q.answer&&x.diagram===q.diagram)?10000:0,recent=history.filter(x=>x.text===q.text&&x.answer===q.answer&&x.diagram===q.diagram),value=n+recent.length*10+recent.filter(x=>Date.parse(x.createdAt)>Date.now()-30*864e5).length*100;if(value<score){best=q;score=value}}return best};
M.CHAPTER_BANKS=M.UNITS.map(u=>({id:u.id,title:u.title,topics:u.id==='review'?[...new Set(M.CHAPTER_SKILLS.filter(s=>s.unit==='review').flatMap(s=>s.topics))]:[...u.topics],levels:[1,2,3,4],sampleTarget:72}));
M.chapterSamples=function(db,unit,level){const pool=M.CHAPTER_SKILLS.filter(s=>s.unit===unit).flatMap(s=>M.chapterEntries({...db,profile:{...db.profile,topics:unit==='review'?db.profile.topics:s.topics}},s.id,level)),r=M.seeded('chapter-audit:'+unit+':'+level),out=new Map();for(let i=0;i<1600&&out.size<72&&pool.length;i++){const q=M.generateBank(pool[i%pool.length],r),key=q.text+':'+q.answer+':'+q.diagram;if(!out.has(key))out.set(key,q)}return [...out.values()]};
})();

(function(global){const M=MathGarden;
const stageKey=s=>s?.chapterSkill?(s.chapterSkill.includes('.')?'skill:':'mixed:')+s.chapterSkill:M.UNITS.some(u=>u.id===s?.unit)&&s.unit!=='u1'?'unit:'+s.unit:null;
function stages(){return M.CHAPTER_SKILLS.map(s=>({key:(s.legacyMixed?'mixed:':'skill:')+s.id,unit:s.unit,skill:s.id,title:M.UNITS.find(u=>u.id===s.unit).title+' · '+s.name,topics:s.topics}))}
function available(db,stage){if(!stage)return false;const topics=stage.unit==='review'?stage.topics.filter(t=>db.profile.topics.includes(t)):stage.topics;if(!topics.length||topics.some(t=>!db.profile.topics.includes(t)))return false;if(stage.skill)return M.chapterEntries(db,stage.skill,M.chapterState(db,stage.skill).level).length>0;return topics.some(t=>M.availableBank(db,t).length)}
function ensure(db){return db.stageRewards??={first:{},daily:{}}}
function successful(db,s){if(s?.practiceOnly)return false;if(!stageKey(s)||s.preview||s.dailyKey||s.status!=='completed'||!Number.isInteger(s.target)||s.target<1)return false;const ids=new Set(s.questionIds);const rows=db.questions.filter(q=>ids.has(q.id)&&q.sessionId===s.id&&(q.completed||q.skipped)&&!q.preview&&!q.dailyKey),skips=rows.filter(q=>q.skipped&&!q.completed).length;return rows.length>=s.target&&skips<=1&&(!skips||s.skipUsed===true)}
function firstClaimed(db,key){return !!db.stageRewards?.first?.[key]}
function daily(db,now=Date.now()){const state=ensure(db),day=DailyChallenge.dayKey(now);if(state.daily[day])return state.daily[day];const history=db.questions.filter(q=>q.completed&&!q.preview&&!q.dailyKey&&q.attempts?.length&&!['disabled','revise'].includes(db.bankReview?.[q.templateId]?.status));const ranked=stages().filter(s=>available(db,s)).map(stage=>{const rows=history.filter(q=>stage.skill?M.questionChapterSkill(q)===stage.skill:q.unitId===stage.unit&&!q.chapterSkill).slice(-12),difficult=rows.filter(q=>!q.attempts[0].correct||q.hintCount>0);return {stage,rows,difficult,score:difficult.length/Math.max(rows.length,1),last:rows.at(-1)?.completedAt||rows.at(-1)?.createdAt||''}}).filter(x=>x.rows.length>=3&&x.difficult.length>0).sort((a,b)=>b.score-a.score||a.last.localeCompare(b.last)||a.stage.key.localeCompare(b.stage.key));if(!ranked.length)return null;const chosen=ranked[0],record={day,stageKey:chosen.stage.key,title:chosen.stage.title,selectedAt:new Date(now).toISOString(),evidenceCount:chosen.rows.length,supportCount:chosen.difficult.length,claimedAt:null,packId:null};state.daily[day]=record;return record}
function stamp(db,s,now=Date.now()){if(!stageKey(s)||s.preview||s.dailyKey)return;const record=daily(db,now);if(record&&!record.claimedAt&&record.stageKey===stageKey(s)&&available(db,stages().find(x=>x.key===record.stageKey))){s.rewardChallengeDay=record.day;s.rewardChallengeAssignedAt=new Date(now).toISOString()}}
function pack(db,id,source,meta,now){if(!db.packs.some(p=>p.id===id))db.packs.push({id,source,poolId:'forest',at:new Date(now).toISOString(),status:'available',cards:[],...meta})}
function grantSun(db,amount,ref,reason,now){if(db.ledger.some(x=>x.ref===ref))return false;db.wallet.sun+=amount;db.ledger.push({ref,resource:'sun',amount,reason,at:new Date(now).toISOString()});return true}
function settle(db,s,now=Date.now()){const grades=db.profile?.allowedAdventureGrades||['g3'],earning=db.profile?.earningGrade||(grades.includes('g3')?'g3':grades[0]||'g3');if(earning!=='g3')return [];if(!successful(db,s))return [];const key=stageKey(s),state=ensure(db),grants=[];state.chapters??={};if(!state.first[key]){const ref='v2:first:'+key;grantSun(db,20,ref,'知识点首次通关',now);state.first[key]={ref,sessionId:s.id,claimedAt:new Date(now).toISOString(),sun:20};grants.push({kind:'first',sun:20,title:'小关首通 +20阳光'})}const unit=stages().find(x=>x.key===key)?.unit,all=stages().filter(x=>x.unit===unit);if(unit&&all.length&&all.every(x=>state.first[x.key])&&!state.chapters[unit]){const id='v2:chapter:'+unit;pack(db,id,'chapter-complete',{unit,sessionId:s.id},now);state.chapters[unit]={packId:id,claimedAt:new Date(now).toISOString()};grants.push({kind:'chapter',packId:id,title:'整章通关卡包'})}const day=s.rewardChallengeDay,record=day&&state.daily[day];if(record&&record.stageKey===key&&!record.claimedAt&&Date.parse(s.rewardChallengeAssignedAt)>=Date.parse(record.selectedAt)){const ref='v2:revisit:'+day;grantSun(db,10,ref,'回访挑战完成',now);record.claimedAt=new Date(now).toISOString();record.sessionId=s.id;record.sun=10;grants.push({kind:'daily',sun:10,title:'回访挑战 +10阳光'})}return grants}
function reconcile(db,now=Date.now()){return db.sessions.flatMap(s=>settle(db,s,now))}

global.StageRewards={stages,stageKey,available,ensure,daily,stamp,settle,reconcile,successful,firstClaimed};
})(typeof window!=='undefined'?window:globalThis);

(function(global){const M=MathGarden,R=RewardEngine;
const ITEMS={skip:{name:'题目跳过卡',rarity:'R',need:0,weight:.10},refresh:{name:'每日刷新卡',rarity:'SR',need:0,weight:.05}};
const baseEnsure=R.ensure;function ensure(db){const state=baseEnsure(db);state.items??={skip:{fragments:0,count:0},refresh:{fragments:0,count:0},refreshUses:{},skipUses:{},log:[]};state.items.skipUses??={};return state.items}R.ensure=function(db){baseEnsure(db);ensure(db);return db.rewardState};
function random(){if(global.crypto?.getRandomValues){const v=new Uint32Array(1);global.crypto.getRandomValues(v);return v[0]/4294967296}return Math.random()}
function roll(r){const x=r();if(!Number.isFinite(x)||x<0||x>=1)throw Error('随机数无效');return x}
function useSkip(db,s,q,now=Date.now()){const bag=ensure(db);if(!s||s.status!=='active'||!q||q.completed||q.skipped)throw Error('当前没有可跳过的题目');if(s.skipUsed)throw Error('本轮已经使用过跳过卡');const day=DailyChallenge.dayKey(now);if(bag.skipUses[day])throw Error('今天已经使用过跳过卡');if(bag.skip.count<1)throw Error('还没有跳过卡');bag.skip.count--;bag.skipUses[day]={sessionId:s.id,questionId:q.id,at:new Date(now).toISOString()};s.skipUsed=true;q.skipped=true;q.skippedAt=new Date(now).toISOString();q.reviewOnly=true;q.source+=' · 使用跳过卡';const i=db.questions.findIndex(x=>x.id===q.id);if(i<0)db.questions.push(q);else db.questions[i]=q;if(!s.questionIds.includes(q.id))s.questionIds.push(q.id);M.updateReview(db,q,now);bag.log.push({type:'skip',at:new Date(now).toISOString(),sessionId:s.id,questionId:q.id});return q}
function refresh(db,type,now=Date.now()){const bag=ensure(db),day=DailyChallenge.dayKey(now);if(bag.refreshUses[day])throw Error('今天已经刷新过一次');if(bag.refresh.count<1)throw Error('还没有每日刷新卡');if(db.sessions.some(s=>s.status==='active'))throw Error('请先完成或结束当前任务，再刷新');let result;
if(type==='review'){const old=DailyChallenge.prepare(db,now);if(old.claimedAt||db.sessions.some(s=>s.dailyKey===day)||db.questions.some(q=>q.dailyKey===day))throw Error('今日挑战已经作答或领过奖励，不能刷新');const pool=DailyChallenge.eligible(db),oldIds=new Set(old.plan.map(x=>x.originalId)),newRows=pool.filter(q=>!oldIds.has(q.id));if(!newRows.length)throw Error('已做题还不足以换一组，先积累更多不同题目');const r=M.seeded('refresh:'+day+':'+db.createdAt),rank=pool.map(q=>({q,n:r()+(oldIds.has(q.id)?0:2)})).sort((a,b)=>b.n-a.n);old.plan=rank.slice(0,old.plan.length).map(x=>({originalId:x.q.id,question:JSON.parse(JSON.stringify(x.q))}));old.completedIds=[];old.refreshedAt=new Date(now).toISOString();result=old;
}else if(type==='stage'){const state=StageRewards.ensure(db),old=StageRewards.daily(db,now);if(!old||old.claimedAt)throw Error('当前没有可刷新的奖励关卡');if(db.sessions.some(s=>s.rewardChallengeDay===day))throw Error('今天的奖励关卡已经开始，不能刷新');delete state.daily[day];const original=old.stageKey,excluded=StageRewards.stages().find(s=>s.key===original),savedTopics=db.profile.topics;try{if(excluded.skill){const previous=db.questions;db.questions=previous.filter(q=>M.questionChapterSkill(q)!==excluded.skill);try{result=StageRewards.daily(db,now)}finally{db.questions=previous}}else{const previous=db.questions;db.questions=previous.filter(q=>q.unitId!==excluded.unit);try{result=StageRewards.daily(db,now)}finally{db.questions=previous}}}finally{db.profile.topics=savedTopics}if(!result){state.daily[day]=old;throw Error('暂无其他需要回访的关卡，不消耗刷新卡')}result.refreshedFrom=original;
}else throw Error('请选择刷新内容');bag.refresh.count--;bag.refreshUses[day]={type,at:new Date(now).toISOString()};bag.log.push({type:'refresh',target:type,at:new Date(now).toISOString()});return result}
global.ItemEngine={ITEMS,ensure,useSkip,refresh};
})(typeof window!=='undefined'?window:globalThis);

(function(root){
'use strict';
const VERSION='2026-10-19.1';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nums=s=>(String(s).match(/\d+(?:\.\d+)?/g)||[]).map(Number);
const fmt=n=>String(Math.round(n*1e8)/1e8);
const signs=s=>s.replace(/\*/g,'×').replace(/\//g,'÷').replace(/-/g,'−');
function expression(s){
 const tokens=String(s).replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').match(/\d+(?:\.\d+)?|[()+*/-]/g)||[];
 if(tokens.join('')!==String(s).replace(/\s/g,'').replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-'))throw Error('不支持的算式');
 let i=0;const steps=[];
 const atom=()=>{if(tokens[i]==='('){i++;const v=sum();if(tokens[i++]!==')')throw Error('括号不完整');return v;}const t=tokens[i++];if(!/^\d/.test(t||''))throw Error('缺少数');return Number(t)};
 const record=(a,op,b)=>{const v=op==='+'?a+b:op==='-'?a-b:op==='*'?a*b:a/b;if(!Number.isFinite(v))throw Error('无效运算');steps.push({a,op,b,value:v,text:fmt(a)+' '+signs(op)+' '+fmt(b)+' ＝ '+fmt(v)});return v};
 const product=()=>{let v=atom();while(['*','/'].includes(tokens[i])){const op=tokens[i++];v=record(v,op,atom())}return v};
 const sum=()=>{let v=product();while(['+','-'].includes(tokens[i])){const op=tokens[i++];v=record(v,op,product())}return v};
 const value=sum();if(i!==tokens.length)throw Error('算式未结束');return {value,steps};
}
function panel(title,body){return '<div class="support-panel"><strong>'+esc(title)+'</strong><div>'+body+'</div></div>'}
function lines(title,rows){return panel(title,rows.map(s=>'<p>'+esc(s)+'</p>').join(''))}
function table(headers,rows){return '<table class="support-table"><thead><tr>'+headers.map(s=>'<th>'+esc(s)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(s=>'<td>'+esc(s)+'</td>').join('')+'</tr>').join('')+'</tbody></table>'}
function dots(total,removed=0){return panel('每行最多5个；划线表示拿走', '<div class="support-dots" role="img" aria-label="原有'+total+'个，划去'+removed+'个">'+Array.from({length:total},(_,i)=>'<span class="support-dot '+(i<removed?'removed':'')+'">●'+(i<removed?'<b>／</b>':'')+'</span>').join('')+'</div>')}
function bars(labels){const rowH=55;return '<svg class="support-bars" viewBox="0 0 440 '+(labels.length*rowH+10)+'" role="img" aria-label="'+esc(labels.map(x=>x.label+' '+x.value).join('；'))+'">'+labels.map((x,i)=>'<rect x="10" y="'+(i*rowH+8)+'" width="420" height="38" rx="7" fill="#e2edda" stroke="#526c49"/><text x="24" y="'+(i*rowH+33)+'" font-size="17" fill="#263d28">'+esc(x.label+'：'+x.value)+'</text>').join('')+'</svg><small>数量卡片用于整理信息，宽度不表示数量大小。</small>'}
function place(a,b,decimal=false){const digits=decimal?['十位','个位','十分位']:['千位','百位','十位','个位'];const row=n=>{const str=decimal?Number(n).toFixed(1).padStart(4,' '):String(n).padStart(4,' ');return decimal?[str.at(-4).trim(),str.at(-3).trim(),str.at(-1)]:str.slice(-4).split('').map(x=>x.trim())};return table(digits,[row(a),row(b)])}
function exchangeTable(a,b,decimal=false){
 const scale=decimal?10:1,aa=Math.round(a*scale),bb=Math.round(b*scale),width=Math.max(String(aa).length,String(bb).length),original=String(aa).padStart(width,'0').split('').reverse().map(Number),other=String(bb).padStart(width,'0').split('').reverse().map(Number),changed=original.slice();
 if(changed[0]>=other[0])return place(a,b,decimal);let j=1;while(j<width&&changed[j]===0)j++;if(j===width)return place(a,b,decimal);changed[j]--;for(let k=j-1;k>0;k--)changed[k]=9;changed[0]+=10;
 const names=decimal?['十分位','个位','十位','百位']:['个位','十位','百位','千位'];return table(['数量',...names.slice(0,width).reverse()],[['原来',...original.slice().reverse()],['换开后',...changed.slice().reverse()],['减去',...other.slice().reverse()]]);
}
function tableData(html){return [...String(html||'').matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].slice(1).map(m=>[...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(x=>x[1].replace(/<[^>]+>/g,'').trim()))}
function columnTrace(a,b,op,decimal=false){
 const scale=decimal?10:1,aa=Math.round(a*scale),bb=Math.round(b*scale),width=Math.max(String(aa).length,String(bb).length),ad=String(aa).padStart(width,'0').split('').reverse().map(Number),bd=String(bb).padStart(width,'0').split('').reverse().map(Number),names=decimal?['十分位','个位','十位','百位']:['个位','十位','百位','千位'],unitNames=decimal?['十分之一','一','十','百']:['一','十','百','千'],out=[];
 let carry=0;
 for(let i=0;i<width;i++){
  if(op==='+'){const sum=ad[i]+bd[i]+carry;out.push(names[i]+'：'+ad[i]+'＋'+bd[i]+(carry?'＋进来的1':'')+'＝'+sum+'，写'+sum%10+(sum>=10?'，向前进1。':'。'));carry=Math.floor(sum/10)}
  else {if(ad[i]<bd[i]){let j=i+1;while(j<width&&ad[j]===0)j++;if(j===width)throw Error('减法无法退位');out.push(names[i]+'不够减，从'+names[j]+'逐位换到'+names[i]+'。');ad[j]--;for(let k=j-1;k>i;k--)ad[k]=9;ad[i]+=10;out.push('换完后：'+ad.map((x,k)=>x+'个'+unitNames[k]).reverse().join('、')+'。')}out.push(names[i]+'：'+ad[i]+'−'+bd[i]+'＝'+(ad[i]-bd[i])+'。')}
 }
 if(op==='+'&&carry)out.push('最前面还有进来的1，也要写上。');return out.join('');
}
function arithmetic(q,expr,first,guide,diagram,family='计算',prefix=''){
 const e=expression(expr);if(Math.abs(e.value-q.answer)>1e-7)throw Error('讲解与原题答案不一致：'+q.templateId+' '+expr+' '+e.value+' / '+q.answer);
 const step=e.steps[0];if(!step)throw Error('讲解缺少过程');
 let smallTask=step,decomposition='';
 if(step.op==='*'&&Number.isInteger(step.a)&&Number.isInteger(step.b)&&Math.max(step.a,step.b)>=10&&Math.min(step.a,step.b)<=9){const a=Math.max(step.a,step.b),b=Math.min(step.a,step.b),tens=Math.floor(a/10)*10,ones=a%10;guide='先把'+a+'拆成'+tens+'和'+ones+'，两部分都乘'+b+'，再合起来。';diagram=table(['拆开的部分','都乘'+b],[['整十部分',tens+' × '+b+' ＝ □'],['个位部分',ones+' × '+b+' ＝ □']]);smallTask={a:tens,op:'*',b,value:tens*b};decomposition=tens+'×'+b+'＝'+tens*b+'，'+ones+'×'+b+'＝'+ones*b+'，两部分合起来是'+step.value+'。';}
 if(step.op==='/'&&Number.isInteger(step.a)&&Number.isInteger(step.b)&&Number.isInteger(step.value)&&step.value>=10){let part=Math.floor(step.a/(step.b*10))*step.b*10;if(part===step.a)part=step.b*10;const rest=step.a-part;guide='把总数拆成'+part+'和'+rest+'，每部分都除以'+step.b+'，再合起来。';diagram=table(['总数的两部分','每部分平均分'],[part+'',rest+''].map(x=>[x,x+' ÷ '+step.b+' ＝ □']));smallTask={a:part,op:'/',b:step.b,value:part/step.b};decomposition=part+'÷'+step.b+'＝'+part/step.b+'，'+rest+'÷'+step.b+'＝'+rest/step.b+'，合起来是'+step.value+'。';}
 const column=e.steps.length===1&&['+','-'].includes(step.op)&&(Math.max(step.a,step.b)>10||q.topic==='decimal')&&Math.min(step.a,step.b)>=0?columnTrace(step.a,step.b,step.op,!Number.isInteger(step.a)||!Number.isInteger(step.b)||q.topic==='decimal'):'';
 const check=e.steps.length===1&&step.op==='-'?' 检查：'+fmt(e.value)+'＋'+fmt(step.b)+'＝'+fmt(step.a)+'。':e.steps.length===1&&step.op==='+'?' 检查：'+fmt(e.value)+'−'+fmt(step.b)+'＝'+fmt(step.a)+'。':'';
 return result(q,family,first,guide,diagram||lines('先处理这一小步',[fmt(step.a)+' '+signs(step.op)+' '+fmt(step.b)+' ＝ □']),prefix+column+decomposition+e.steps.map(s=>s.text).join('；')+'。所以本题答案是'+fmt(q.answer)+(q.unit||'')+'。'+check,{expression:expr,value:e.value},smallTask);
}
function result(q,family,first,guide,diagram,explanation,verification,step){
 return {version:VERSION,templateId:q.templateId,family,stages:[
 {id:'orient',title:'先找下一步',message:first,countsAsSupport:true},
 {id:'guided',title:'看图一起做',message:guide,diagram,countsAsSupport:true,...(step?{task:{text:fmt(step.a)+' '+signs(step.op)+' '+fmt(step.b)+' ＝ □',answer:step.value}}:{})},
 {id:'model',title:'带我做一遍',message:explanation,answer:q.answer,unit:q.unit||'',revealsAnswer:true,countsAsSupport:true}
 ],verification,notes:['支持后的成功不计为独立首答掌握；外部提醒未知时不推定无提示。']};
}
function conceptual(q,family,first,guide,diagram,answer,label,why){if(answer!==q.answer)throw Error('概念推导不一致 '+q.templateId);return result(q,family,first,guide,diagram,why+' 本题应答'+label+'。'+(label===String(answer)?'':'按题目约定填'+answer+'。'),{derivedAnswer:answer,reason:why})}
function buildSupport(q){
 const t=q.text,n=nums(t),key=(q.chapterSkill||'').split('.').at(-1),data=tableData(q.diagram),v=q.variant,l=q.level;
 const ar=(expr,first,guide,diagram,family,prefix)=>arithmetic(q,expr,first,guide,diagram,family,prefix);
 const co=(family,first,guide,diagram,answer,label,why)=>conceptual(q,family,first,guide,diagram,answer,label,why);
 // Every route derives a worked explanation from the actual question, not a diagnosis inferred from a wrong answer.
 if(/^[\d\s.+×÷−()\-]+\s*=\s*\?$/.test(t)){
  const raw=t.split('=')[0].trim(),e=expression(raw),s=e.steps[0];let first,guide,graphic;
  if(e.steps.length===1&&['+','-'].includes(s.op)&&Number.isInteger(s.a)&&Number.isInteger(s.b)&&Math.max(s.a,s.b)<=10){
   const total=s.op==='+'?s.a+s.b:s.a;first=s.op==='+'?'把两部分合起来。先看每部分有几个。':'从原来的数量中拿走一部分。要找的是剩下的数量。';
   guide=s.op==='+'?s.a+'个和'+s.b+'个合起来，一共有几个？':'图中划去'+s.b+'个。只数没划去的圆点。';graphic=s.op==='-'?dots(total,s.b):panel('把两部分合起来',lines('第一部分',[s.a+'个'])+dots(s.a)+lines('第二部分',[s.b+'个'])+dots(s.b));
  }else if(e.steps.length===1&&['+','-'].includes(s.op)){
   const decimal=!Number.isInteger(s.a)||!Number.isInteger(s.b)||q.topic==='decimal';first=decimal?'把小数点对齐，让相同数位上下对齐。':'把相同数位上下对齐，从个位算起。';
   const scale=decimal?10:1,a=Math.round(s.a*scale),b=Math.round(s.b*scale),onesA=a%10,onesB=b%10;
   guide=s.op==='+'?(onesA+'＋'+onesB+'＝'+(onesA+onesB)+'。'+(onesA+onesB>=10?'满10要换成前一位的1，别漏记。':'这一位不用进位。')):(onesA>=onesB?onesA+'够减'+onesB+'，这一位不用退位。':decimal?'十分位不够减，把1个一换成10个十分之一，再从个位减去换出的1。':'个位不够减，要向前一位换；遇到0时继续向前换。换出1个十，原来的十位要少1。');graphic=s.op==='-'?exchangeTable(s.a,s.b,decimal):place(s.a,s.b,decimal);
  }else{first=raw.includes('(')?'有小括号，先算括号里面。':'先算乘除，再算加减；同一级从左往右算。';guide='先完成框里的这一步，再把结果放回原式。';graphic=lines('当前一步',[fmt(s.a)+' '+signs(s.op)+' '+fmt(s.b)+' ＝ □'])}
  const out=ar(raw,first,guide,graphic,'按步骤计算');
  if(e.steps.length===1&&['+','-'].includes(s.op)&&Math.max(s.a,s.b)<=10&&Number.isInteger(s.a)&&Number.isInteger(s.b)&&s.op==='-'&&e.value>=5){out.stages[1].message='没划去的圆点中，一排有5个，另一排有'+(e.value-5)+'个。合起来有几个？';out.stages[1].task={text:'5 ＋ '+(e.value-5)+' ＝ □',answer:e.value};}
  if(e.steps.length===1&&['+','-'].includes(s.op)&&(Math.max(s.a,s.b)>10||q.topic==='decimal')){const decimal=!Number.isInteger(s.a)||!Number.isInteger(s.b)||q.topic==='decimal',scale=decimal?10:1,oa=Math.round(s.a*scale)%10,ob=Math.round(s.b*scale)%10,small=s.op==='+'?oa+ob:(oa>=ob?oa:oa+10)-ob;out.stages[1].task={text:(decimal?'十分位':'个位')+'先算：'+(s.op==='-'&&oa<ob?oa+10:oa)+' '+signs(s.op)+' '+ob+' ＝ □',answer:small};}
  return out;
 }
 // Missing-number relationships, including the mixed-operation stages.
 let m;
 if((m=t.match(/^□\s*([+−-])\s*(\d+)\s*=\s*(\d+)/))){const b=+m[2],sum=+m[3],minus=m[1]!== '+';return ar(minus?sum+'+'+b:sum+'-'+b,minus?'□是原来的总数。把剩下的和拿走的合起来。':'□是缺少的一部分。用总数减去已知部分。','先说清总数和两部分，再求□。',bars([{label:minus?'剩下':'总数',value:sum},{label:minus?'拿走':'已知部分',value:b}]),'缺数与逆运算')}
 if((m=t.match(/^(\d+)\s*([+−-])\s*□\s*=\s*(\d+)/))){const a=+m[1],b=+m[3];return ar(m[2]==='+'?b+'-'+a:a+'-'+b,'总数可以分成已知部分和缺少的部分。','用总数减去已知部分，求出□。',bars([{label:'总数',value:m[2]==='+'?b:a},{label:'已知部分',value:m[2]==='+'?a:b}]),'缺数与分合')}
 if(/□ \+ \d+ ×/.test(t)){return ar(n[2]+'-'+n[0]+'*'+n[1],'先求乘积，剩下的部分就是□。','先算乘法，再用右边的总数减去乘积。',lines('整体与两部分',['总数 '+n[2]+' ＝ □ ＋ '+n[0]+'×'+n[1]]),'混合缺数')}
 if(/^\(□/.test(t)){return ar('('+n[2]+'/'+n[1]+')-'+n[0],'先把乘法倒过来，求括号里面的和。','右边的总数先除以括号外的数，再减去已知的加数。',lines('倒着找回来',[n[2]+' ÷ '+n[1]+' ＝ 括号里的和','括号里的和 − '+n[0]+' ＝ □']),'混合缺数')}
 if(/÷ □/.test(t)){return ar(n[0]+'/('+n[2]+'-'+n[1]+')','先去掉后来加上的数量，求出商。','先用结果减去加上的数，再用被除数除以商。',lines('两步找除数',[n[2]+' − '+n[1]+' ＝ 商',n[0]+' ÷ 商 ＝ □']),'混合缺数')}
 if(/差是/.test(t)){const sub=/被减数是\s*\d/.test(t);return ar(sub?n[1]+'-'+n[0]:n[0]+'+'+n[1],sub?'减数是拿走的部分，用被减数减去差。':'被减数是原来的总数，把差和减数合起来。','用加减互逆的关系找缺少的数量。',bars([{label:'差',value:n[0]},{label:sub?'被减数':'减数',value:n[1]}]),'验算')}
 if(q.topic==='ten'){
  if(/多的一盒比少的一盒多/.test(t))return ar('('+n[0]+'-'+n[1]+')/2+'+n[1],'先拿开多出来的部分，剩下两盒一样多。','相同的两部分平均分成2份，再把多出的部分放回多的一盒。',bars([{label:'两盒合计',value:n[0]},{label:'多出来的部分',value:n[1]}]),'数量关系');
  if(/先拿走/.test(t))return ar(n[0]+'-'+n[1]+'-'+n[2],'先拿走一次，再从剩下的数量里拿走第二次。','按题目顺序处理，每次拿走后都看还剩多少。',dots(n[0],n[1]),'连续减法');
  if(/两盒一共|送给伙伴/.test(t))return ar(n[0]+'-'+n[1],'已知总数和其中一部分，要找另一部分。','从总数中去掉已知部分。',dots(n[0],n[1]),'数量分合');
 }
 if(/上午运走.*下午又运走/.test(t))return ar(n[2]+'+'+n[0]+'+'+n[1],'要求原来有多少，把两次运走的都放回去。','先用剩下的加上午运走的，再加下午运走的。',bars([{label:'剩下',value:n[2]},{label:'上午运走',value:n[0]},{label:'下午运走',value:n[1]}]),'两步逆向应用');
 if(/上午运走.*下午又运来/.test(t))return ar(n[0]+'-'+n[1]+'+'+n[2],'先看上午运走后剩多少，再加下午运来的。','按事情发生的顺序，先减再加。',bars([{label:'原有',value:n[0]},{label:'运走',value:n[1]},{label:'运来',value:n[2]}]),'两步应用');
 if(/仓库有.*又运来/.test(t))return ar(n[0]+'+'+n[1],'原来的和运来的合起来，就是现在的数量。','相同数位对齐，再把两部分相加。',place(n[0],n[1]),'进位应用');
 if(/原有.*运走.*还剩/.test(t))return ar(n[0]+'-'+n[1],'从原有的数量中去掉运走的数量。','相同数位对齐；不够减的数位需要向前换。',place(n[0],n[1]),'退位应用');
 // Measurement: convert before comparing or calculating.
 if(q.topic==='length'){
  if(key==='ruler')return ar('('+n[1]+'-'+n[0]+')*'+(/毫米/.test(t)?10:1),'长度是终点刻度减起点刻度，不是终点数字。','先求两端之间相差多少厘米。'+(/毫米/.test(t)?'再按1厘米＝10毫米换算。':''),q.diagram,'尺子读数');
  if(key==='lengthcompare'){
   const m=t.match(/^(.*?)与 (.*?)比较/),cv=s=>{let sum=0;for(const x of s.matchAll(/(\d+)\s*(分米|厘米)/g))sum+=+x[1]*(x[2]==='分米'?10:1);return sum},a=cv(m[1]),b=cv(m[2]),ans=a>b?1:a===b?2:3;
   return co('统一单位比较','先把两边都换成厘米。','1分米＝10厘米。换好单位再比较数值。',lines('都用厘米表示',[m[1]+' → □厘米',m[2]+' → □厘米']),ans,['','左边长','一样长','右边长'][ans],a+'厘米'+(a>b?'大于':a===b?'等于':'小于')+b+'厘米。');
  }
  if(/最多剪出/.test(t)){const total=n[0]*100,segments=Math.floor(total/n[1]),rest=total%n[1];const out=co('完整分段','先把总长换成厘米，再数能剪出几段完整的短绳。','总长用厘米表示，再除以每段长度；剩下不足一段的不计。',lines('每段都要一样长',['总长：'+n[0]+'米＝□厘米','每段：'+n[1]+'厘米']),segments,segments+'段',total+'厘米÷'+n[1]+'厘米＝'+segments+'余'+rest+'厘米，只算完整的'+segments+'段。');out.stages[1].task={text:n[0]+' × 100 ＝ □（厘米）',answer:total};return out;}
  if(/两根绳/.test(t)){const both=/分米和 \d+ 分米/.test(t),expr=both?'('+n[0]+'+'+n[1]+')*10':n[0]+'*10+'+n[1];return ar(expr,'先统一单位，再把两根绳的长度合起来。','1分米＝10厘米，先换成厘米。',lines('单位换算',['1分米＝10厘米',n[0]+'分米＝□厘米']),'测量应用')}
  if(/剪去|第一组取/.test(t))return ar((/有 \d+ 米彩带/.test(t)?n[0]+'*100':n[0])+'-'+n[1],'总长减去已经用去的长度，就是剩下的长度。','先检查两部分是否都是厘米，再相减。',bars([{label:'总长',value:n[0]+(/有 \d+ 米/.test(t)?'米':'厘米')},{label:'用去',value:n[1]+'厘米'}]),'测量应用');
  const units={米:1000,分米:100,厘米:10,毫米:1},target=(t.match(/多少\s*(分米|厘米|毫米|米)/)||[])[1],parts=[...t.matchAll(/(\d+)\s*(分米|厘米|毫米|米)/g)];
  if(target&&parts.length){const expr=parts.map(x=>x[1]+'*'+units[x[2]]+'/'+units[target]).join('+');return ar(expr,'先看要把哪种单位换成哪种单位。','每一部分都换成'+target+'，再把它们相加。',lines('常用长度关系',['1米＝10分米＝100厘米＝1000毫米','1分米＝10厘米；1厘米＝10毫米']),'单位换算')}
 }
 if(q.topic==='campus'&&key.startsWith('campus')){
  const vals=data.map(x=>Number(x[1]));if(key==='campusroute'){const distances=[...q.diagram.matchAll(/>(\d+)米</g)].map(x=>+x[1]);return ar('('+distances.join('+')+')*'+(/返回/.test(t)?2:1),'沿路线把实际走过的每一段加起来。','先算单程。'+(/返回/.test(t)?'原路返回，同样的路再走一遍。':''),q.diagram,'路线长度')}
  if(key==='campusplan'&&v===0){const a=vals[0]<vals[1]?1:2;return co('路线比较','在表中找到两条路线的长度。','长度数值较小的路线更短。',q.diagram,a,a===1?'路线甲':'路线乙',vals[0]+'米与'+vals[1]+'米相比，'+(a===1?'甲':'乙')+'更短。')}
  const diff=/相差|少走/.test(t),expr=diff?Math.max(...vals)+'-'+Math.min(...vals):'('+vals.join('+')+')*'+(/原路回来/.test(t)?2:1);return ar(expr,diff?'比较相差多少，用较长的减较短的。':'先把这次实际走的各段长度合起来。','看清是求总长还是差；来回要计两次。',q.diagram,'校园记录');
 }
 // Direction and rotation are derived independently from the stated reference point.
 if(q.topic==='space'||q.topic==='campus'){
  if(key==='mapdirection'||key==='relative'){const target=t.match(/。(.+?)在(.+?)的哪个方向/),pos={树屋:[0,1],花圃:[1,0],校门:[0,-1],池塘:[-1,0],营地:[0,0]},a=pos[target[1]],b=pos[target[2]],dx=a[0]-b[0],dy=a[1]-b[1],ans=dy>0?1:dx>0?2:dy<0?3:4;return co('参照位置','先找到“谁在谁的哪边”中的参照点。','把手指放在'+target[2]+'，再看'+target[1]+'在它的哪边。',q.diagram,ans,['','北','东','南','西'][ans],'从'+target[2]+'看，'+target[1]+'在'+['','北','东','南','西'][ans]+'边。')}
  if(/向东走.*向北走.*共走/.test(t))return ar('('+n[0]+'+'+n[1]+')*'+(/返回/.test(t)?2:1),'走过的总长度要把各段相加。','先算单程，若原路返回再乘2。',bars([{label:'向东',value:n[0]+'米'},{label:'向北',value:n[1]+'米'}]),'路线长度');
  if(key==='track'){
   if(v===2)return co('返回路线','原路返回，要从最后一段倒着走。','去时最后向东，返回时先向相反方向。',lines('先回最后一段',['去：起点 → 北 → 东','回：终点 → □ → 南']),1,'西','向东走的那一段，返回时应向西走。');
   const east=n[0],west=v===1?n[1]:n[2];if(v===1)return ar(east+'-'+west,'向东和向西相反，可以抵消一部分。','用向东的格数减去向西的格数。',bars([{label:'向东',value:east+'格'},{label:'向西',value:west+'格'}]),'路线追踪');
   const ans=east>west?1:2;return co('路线追踪','判断东西侧，只比较向东与向西的格数。','向北走改变南北位置，不改变东西位置。',lines('东西方向的移动',['向东 '+east+'格','向西 '+west+'格']),ans,ans===1?'东侧':'西侧','向东'+east+'格，向西'+west+'格，仍向'+(ans===1?'东':'西')+'偏'+Math.abs(east-west)+'格。');
  }
  if(/转/.test(t)&&/面向/.test(t)&&!/拐角/.test(t)){const dirs=['北','东','南','西'],start=dirs.indexOf((t.match(/面向([北东南西])/)||[])[1]),count=Number((t.match(/转\s*(\d+)\s*次/)||[])[1]||1),left=/向左/.test(t),path=[dirs[start]];for(let i=1;i<=count;i++)path.push(dirs[(start+(left?-i:i)+8)%4]);const end=path.at(-1),ans=/1表示东/.test(t)?(end==='东'?1:2):dirs.indexOf(end)+1;return co('面向与转向','把自己想成站在图里的小松子，跟着朝向转。','每次只转一个直角；'+(left?'左转按北、西、南、东循环。':'右转按北、东、南、西循环。'),lines('从起始方向开始',[path[0]+' → '+(count>1?'逐次转'+count+'次':'转1次')+' → □']),ans,end,path.join(' → ')+'，最后面向'+end+'。')}
  if(/拐角/.test(t))return co('路线转向','先沿图向东走，把自己想成面向东。','北在面向东的小松子的左边。',q.diagram,1,'左转','从向东改为向北，需要左转一个直角。');
  if(/起点到树屋/.test(t))return co('地图方向','先跟着绿色路线走到拐角。','北向朝上，看看最后一段向上还是向下。',q.diagram,1,'北','最后一段向图的上方，因此向北。');
 }
 // Geometry: use properties, not the apparent size of a drawing.
 if(q.topic==='shape'){
  if(/较小.*角/.test(t)){const pts=(q.diagram.match(/points="([^"]+)"/)||[])[1];if(!pts)throw Error('角图缺少顶点');const p=pts.trim().split(/\s+/).map(x=>x.split(',').map(Number)),u=p[0].map((x,i)=>x-p[1][i]),w=p[2].map((x,i)=>x-p[1][i]),dot=u[0]*w[0]+u[1]*w[1],ans=dot===0?1:dot>0?2:3;const reference=q.diagram.replace('</svg>','<path d="M'+p[1][0]+' '+(p[1][1]-30)+'V'+p[1][1]+'H'+(p[1][0]+30)+'" stroke="#925710" stroke-dasharray="4 3" stroke-width="2" fill="none"/></svg>');return co('角的比较','看两条边张开的大小，不比较边的长短。','虚线是直角参照；比较图中的角与直角张开的大小。',lines('直角作参照',['直角像书本的一角。'])+reference,ans,['','直角','锐角','钝角'][ans],dot===0?'两条边张开得和直角一样大。':dot>0?'图中的较小角比直角小，是锐角。':'图中的较小角比直角大、比平角小，是钝角。')}
  if(/几条边/.test(t)){const angle=/一个角/.test(t),ans=angle?2:4;return co('图形组成',angle?'从顶点出发，找组成角的边。':'沿图形外面走一圈，逐条数边。','每条边只数一次。',q.diagram||lines('沿着图形找边',[angle?'从同一顶点伸出的两条边':'四边形的边首尾相接']),ans,String(ans),angle?'一个角由一个顶点和两条边组成。':'四边形有4条边。')}
  if(/几个顶点/.test(t))return co('角的顶点','找两条边相接的地方。','角的两条边从同一个点出发。',q.diagram||lines('顶点',['两条边相接的位置是顶点。']),1,'1','一个角只有1个顶点。');
  if(/几个直角/.test(t))return co('直角计数','沿外轮廓依次找角。','每个角只数一次。'+(/重合/.test(t)?'完整重合后，外轮廓不变。':''),q.diagram||lines('四角',['左上、右上、右下、左下']),4,'4','长方形和正方形都有4个直角。'+(/重合/.test(t)?'重合不增加外轮廓的角数。':''));
  if(/边长.*多少厘米/.test(t)){const ans=n[0];return co('边的关系','先判断是正方形，还是长方形。',key==='square'?'正方形四条边一样长。':'长方形相对的两条边一样长。',q.diagram,ans,ans+'厘米','题目给出相关边长'+ans+'厘米，所求的边与它相等。')}
  const square=/四条边(?:相等|一样长)/.test(t),ans=square?1:2;return co('正方形判断','判断正方形，要同时检查边和角。','四条边都相等，并且四个角都是直角，才能确定是正方形。',lines('检查两条条件',['四条边相等？','四个角都是直角？']),ans,square?'是正方形':'不一定是正方形',square?'两条条件都满足。':'只有四个直角还不够，例如长6厘米、宽3厘米的长方形就不是正方形。');
 }
 if(q.topic==='combination'){
  const a=n[0],b=n[1],add=/新增/.test(t),enumerate=/固定第一种/.test(t),restrict=/不能/.test(t),removed=restrict?(/其中 (\d+) 种/.test(t)?+t.match(/其中 (\d+) 种/)[1]:1):0;
  const expr=add?'('+a+'+'+n[2]+')*'+b:enumerate?'('+a+'-1)*'+b:restrict?a+'*'+b+'-'+removed:a+'*'+b;
  const count=add?a+n[2]:a;const rows=Array.from({length:count},(_,i)=>['花盆'+(i+1),Array.from({length:b},(_,j)=>'植物'+(j+1)).join('、')+(enumerate&&i===0?'（题目说已列出）':'')]);return ar(expr,add?'先求现在有几种花盆。':'固定一种花盆，把能配的植物依次列全。',enumerate?'第一种已列出，只数其余花盆的搭配。':restrict?'先列全部，再按题目给出的数量去掉不可用搭配。':'每种花盆都配一遍，按行数，不重复不遗漏。',table(['固定的花盆','可搭配的植物'],rows)+(restrict?'<p>题目只给出不能用的搭配数量，未指定具体组合；本图不擅自划去某一种。</p>':''),'有序搭配');
 }
 if(q.topic==='multiply'||(q.topic==='mixed'&&/种子|植物/.test(t))){
  if(/平均分/.test(t)){if(/又种了|又收到/.test(t))return ar('('+n[0]+'+'+n[1]+')/'+n[2],'先合计全部数量，再平均分。','合计后除以份数，求每份有多少。',bars([{label:'原有',value:n[0]},{label:'增加',value:n[1]},{label:'平均份数',value:n[2]}]),'合并后平均分');return ar(n[0]+'/'+n[1],'总数平均分成几份，要求每份有多少。','每份同样多，用总数除以份数。',bars([{label:'总数',value:n[0]},{label:'平均分成',value:n[1]+'份'}]),'平均分')}
  if(/几倍/.test(t))return ar(n[0]+'/'+n[1],'把坚果的株数看作1份。','看向日葵的株数里有几个这样的一份。',bars([{label:'比较量',value:n[0]},{label:'1份',value:n[1]}]),'倍数关系');
  if(/同样多/.test(t))return ar(n[1]+'/'+n[0],'知道总数和袋数，求每袋的数量。','总数除以袋数，每袋同样多。',bars([{label:'总数',value:n[1]},{label:'份数',value:n[0]}]),'逆向求数');
  if(/能装满多少袋/.test(t)&&!/还能装满/.test(t))return ar(n[0]+'/'+n[1],'每袋装同样多，要求能分成几袋。','用总数除以每袋数量。',bars([{label:'总数',value:n[0]},{label:'每袋',value:n[1]}]),'按每份数分组');
  if(/还能装满/.test(t))return ar(n[1]+'-'+n[2]+'/'+n[0],'先求用掉的数量相当于几袋。','每袋颗数不变，原有袋数减去用掉的袋数。',lines('按袋来算',['用掉 '+n[2]+'颗 ÷ 每袋'+n[0]+'颗 ＝ 用掉□袋']),'分组应用');
  if(/每袋.*袋.*用去/.test(t))return ar(n[0]+'*'+n[1]+'-'+n[2],'先求原来所有袋子的总数量。','总数量减去用掉的数量，就是剩下的。',bars([{label:'每袋',value:n[0]},{label:'袋数',value:n[1]},{label:'用去',value:n[2]}]),'两步分组应用');
  if(/每袋种子/.test(t))return ar(n[0]+'*'+n[1]+(/取走/.test(t)?'-':'+')+n[2],'先用每袋颗数乘袋数。','再处理取走或增加的零散数量。',bars([{label:'每袋',value:n[0]},{label:'袋数',value:n[1]},{label:/取走/.test(t)?'取走':'增加',value:n[2]}]),'分组后增减');
  const groupsFirst=/有 \d+ 袋/.test(t),expr=n[0]+'*'+n[1]+(n.length>=3?(/种下/.test(t)?'-':'+')+n[2]:'');return ar(expr,'先看每组数量和一共有几组。','每组数量乘组数，求总数。'+(n.length>=3?'再处理增加或拿走的数量。':''),bars([{label:groupsFirst?'袋数':'每组',value:n[0]},{label:groupsFirst?'每袋':'组数',value:n[1]},...(n.length>=3?[{label:/种下/.test(t)?'种下':'增加',value:n[2]}]:[])]),'乘法分组');
 }
 if(q.topic==='mixed'&&key==='order'){
  if(v===0){const product=n[1]*n[2],opts=t.split('填1表示 ')[1].split('，填2表示 '),target=n[1]+' × '+n[2],ans=opts[0].trim()===target?1:2;return co('运算顺序','没有括号，先乘除后加减。','在两个选项中找到乘法那一步。',lines('先做乘法',[target+'＝□']),ans,target,'乘法应先算：'+target+'＝'+product+'。')}
  if(v===1){const correct=n[0]+n[1]*n[2],ans=correct===n[3]?1:2;return co('步骤检验','先按正确顺序自己算，再和小芽的结果比较。','先乘后加，不要直接按从左往右的顺序。',lines('先算乘法',[n[1]+'×'+n[2]+'＝□']),ans,ans===1?'正确':'错误',n[1]+'×'+n[2]+'＝'+n[1]*n[2]+'，再加'+n[0]+'得'+correct+'，'+(ans===1?'等于':'不等于')+'小芽写的'+n[3]+'。')}
  const options=t.split('填1表示 ')[1].split('，填2表示 '),ans=options[0].startsWith('(')?1:2;return co('括号含义','题目要先加后乘。','把需要先算的加法放在括号里。',lines('先做的运算要括起来',['('+n[0]+'＋'+n[1]+')×'+n[2]]),ans,'带小括号的算式','小括号保证先求'+n[0]+'与'+n[1]+'的和，再乘'+n[2]+'。');
 }
 if(q.topic==='decimal'){
  if(key==='decimalread'){const amount=n[0],compose=/个0.1合起来/.test(t);return ar(compose?amount+'/10':Math.floor(amount)+'*10+'+Math.round(amount*10)%10,'10个0.1合起来是1。',compose?'先数能组成几个1，剩下几个0.1。':'先看整数部分有几个0.1，再加十分位的几个0.1。',lines('一与十分之一',['1＝10个0.1',compose?amount+'个0.1 → □':amount.toFixed(1)+' → □个0.1']),'小数的组成',compose?'':Math.floor(amount)+'个一是'+Math.floor(amount)*10+'个0.1，另有'+Math.round(amount*10)%10+'个0.1；')}
  if(key==='decimalcompare'){const a=n[0],b=n[1],ans=a>b?1:a===b?2:3;return co('小数比较','先比较整数部分；相同再比较十分位。','对应数位比较，不比较数字长短。',place(a,b,true),ans,['','左边大','一样大','右边大'][ans],a.toFixed(1)+(a>b?'大于':a===b?'等于':'小于')+b.toFixed(1)+'。')}
  if(/元.*角/.test(t)&&!/买花|一盆花/.test(t)){const toJiao=/多少角/.test(t);return ar(toJiao?n[0]+'*10':n[0]+'+'+n[1]+'/10','先看要用元还是角表示。','1元＝10角，1角＝0.1元。',lines('元与角',['元放个位，角放十分位。']), '元角换算')}
  if(/一盆花|买花/.test(t)){const change=/找回/.test(t);return ar(change?n[2]+'-('+n[0]+'+'+n[1]+')':n[0]+'+'+n[1],change?'先求两件商品一共花多少钱。':'把两件商品的价钱合起来。',change?'付的钱减去总价，才是找回的钱。':'小数点对齐，相同数位相加。',bars([{label:'花',value:n[0]+'元'},{label:'种子',value:n[1]+'元'},...(change?[{label:'付出',value:n[2]+'元'}]:[])]),'购物应用')}
 }
 if(q.topic==='survey'){
  const values=data.map(x=>Number(x[1])),names=data.map(x=>x[0]);
  if(key==='readtable'){const name=t.split('有')[0],idx=names.indexOf(name),answer=values[idx];return co('读表找数','先找问题里的植物名称。','找到“'+name+'”这一行，再沿着这一行看数量。',q.diagram,answer,String(answer)+'株',name+'这一行记录的是'+answer+'株。')}
  if(key==='tablemissing'){const known=data.filter(x=>x[1]!=='□').map(x=>Number(x[1]));return ar(n[0]+'-'+known.join('-'),'总数里包含表中的三种植物。','用总数依次减去两项已知数量。',q.diagram,'补全记录')}
  if(/合计|一共/.test(t)){if(/还需补种/.test(t))return ar('('+n[0]+'-'+values[1]+')+('+n[0]+'-'+values[2]+')','先分别求向日葵和坚果各缺多少。','每种用目标减原有，再把两种缺少的合起来。',q.diagram,'数据决策');const wanted=/豌豆和坚果/.test(t)?[values[0],values[2]]:values;return ar(wanted.join('+'),'只合计问题要求的植物。','在表里找出要用的行，再把数量相加。',q.diagram,'数据合计')}
  if(/相差/.test(t))return ar(Math.max(values[0],values[1])+'-'+Math.min(values[0],values[1]),'相差多少，用较大数量减较小数量。','先比较向日葵和豌豆的数量。',q.diagram,'数据比较');
  if(/另外两种/.test(t)){const reverse=/另外两种植物合起来比/.test(t);return ar(reverse?'('+values[0]+'+'+values[2]+')-'+values[1]:values[1]+'-('+values[0]+'+'+values[2]+')','先把“另外两种”的数量合起来。','再看谁多，用较大总量减较小总量。',q.diagram,'合计后比较')}
  if(/现在又种/.test(t))return ar(values[0]+'+'+n[0],'只看豌豆原来的数量。','原有豌豆加新种的豌豆。',q.diagram,'数据更新');
  if(/最多/.test(t)){const ans=Math.max(...values);return co('数据最大值','逐行比较数量，不看表格顺序。','把最大数量所在的行找出来。',q.diagram,ans,String(ans)+'株',names.filter((_,i)=>values[i]===ans).join('、')+'最多，数量是'+ans+'株。')}
 }
 if(q.topic==='calendar'){
  if(/星期/.test(t)){const day=['日','一','二','三','四','五','六'].indexOf(t.match(/今天星期(.)/)[1]),shift=+t.match(/，\s*(\d+)\s*天后/)[1],rem=shift%7,idx=(day+rem)%7,ans=idx===0?7:idx,label='星期'+['日','一','二','三','四','五','六'][idx];return co('星期循环','过7天还是同一个星期几。','去掉整周，只向后数剩下的'+rem+'天；今天不算第1天。',lines('七天循环',['一 → 二 → 三 → 四 → 五 → 六 → 日 → 一']),ans,label,shift+'天＝'+Math.floor(shift/7)+'周零'+rem+'天，从今天往后数'+rem+'天是'+label+'。')}
  if(/首尾/.test(t)){const cross=/下月/.test(t);if(cross){const year=n[0],month=n[1],start=n[2],end=n[3],days=new Date(Date.UTC(year,month,0)).getUTCDate();return ar(days+'-'+start+'+1+'+end,'首尾都记录，开始那天也要算。','跨月分两段：本月从开始日到月底，再加下月的记录。',lines('分两段数',['本月：'+start+'日至'+days+'日','下月：1日至'+end+'日']),'跨月日期')};return ar(n[1]+'-'+n[0]+'+1','从开始日到结束日，首尾两天都要算。','结束日减开始日，再加开始的那一天。',lines('包括起点',[n[0]+'日、…、'+n[1]+'日']),'日期计数')}
  const year=n[0],month=/闰年吗/.test(t)?null:n[1],leap=year%400===0||(year%4===0&&year%100!==0),isLeap=/闰年吗/.test(t),ans=isLeap?(leap?1:2):month===2?(leap?29:28):[4,6,9,11].includes(month)?30:31;return co('月份与平闰年',isLeap||month===2?'先判断这一年是平年还是闰年。':'先查这个月是大月还是小月。','1、3、5、7、8、10、12月31天；4、6、9、11月30天；二月单独看平闰年。',lines('月份天数',['大月31天；小月30天','平年二月28天；闰年二月29天',...(month===2||isLeap?['非整百年份看能否被4整除；整百年份看能否被400整除。']:[])]),ans,isLeap?(leap?'是闰年':'不是闰年'):ans+'天',isLeap||month===2?year+'年是'+(leap?'闰年':'平年')+'。'+(isLeap?'':'所以二月有'+ans+'天。'):month+'月有'+ans+'天。');
 }
 if(q.topic==='time'){
  if(v===0)return ar(n[0]+'*60'+(n.length>1?'+'+n[1]:''),'先把分钟换成秒。','1分钟＝60秒，零散秒数再加上。',lines('分钟与秒',['1分＝60秒']),'时间换算');
  if(v===1){const mm=+t.match(/9:(\d+)/)[1],duration=+t.match(/经过 (\d+)/)[1];return ar(mm+'+'+duration,'这道题填写的是“9点以后累计多少分钟”。','把开始时距9点的分钟数与经过时间相加。超过60也保留总分钟数。',lines('从9点累计',['开始距9点：'+mm+'分钟','再经过：'+duration+'分钟']),'累计分钟')}
  return ar(n[1]+'-'+n[2],'从总共需要的时间里减去已经过的时间。','先找总共需要几分钟，再看已过几分钟。',bars([{label:'总共需要',value:n[1]+'分钟'},{label:'已过',value:n[2]+'分钟'}]),'剩余时间');
 }
 throw Error('题型尚未匹配：'+q.templateId+' '+t);
}
function support(q,attempted){
 const out=buildSupport(q),match=q.text.match(/^(\d+)\s*[−-]\s*(\d+)\s*=\s*\?/);if(match&&Number.isInteger(attempted)&&attempted>=0&&attempted<=10&&Number(match[1])<=10&&attempted!==q.answer){const a=Number(match[1]),b=Number(match[2]);out.stages[0].message='你填了'+attempted+'。把剩下的'+attempted+'和拿走的'+b+'合起来，能回到原来的'+a+'吗？';out.stages[0].task={text:attempted+' ＋ '+b+' ＝ □',answer:attempted+b};out.stages[0].afterTask='把合起来的数量与原来的'+a+'比较；若不一样，再看下一步的数量图。';}
 return out;
}
function attach(M){if(M.learningSupportVersion===VERSION)return M;M.learningSupport=support;M.learningSupportVersion=VERSION;for(const name of ['generateBank','makeQuestion','choose','chooseChapter','chooseMixed']){if(typeof M[name]!=='function')continue;const previous=M[name];M[name]=function(...args){const q=previous.apply(this,args);q.learningSupport=support(q);q.hint=q.learningSupport.stages[0].message;return q}}return M}
const api={version:VERSION,support,attach,expression,esc};if(typeof module!=='undefined')module.exports=api;root.SongziLearningSupport=api;
})(typeof window!=='undefined'?window:globalThis);

(function(global){const M=MathGarden;M.PROJECT_VERSION='songzi-integrated-2026-10-19';const blank=M.blank;M.blank=()=>({...blank(),projectVersion:M.PROJECT_VERSION});SongziLearningSupport.attach(M);
for(const key of ['choose','chooseChapter','chooseMixed']){const prev=M[key];M[key]=function(...args){const q=prev.apply(this,args);if(!q.attempts?.length){q.checked=false;q.method='未填写';q.supportEvents=[];q.supportStage=-1;q.workedExampleSeen=false;}return q}}
function analysis(rows){const attempted=rows.filter(q=>q.attempts?.length&&!q.preview),day=global.DailyChallenge?.dayKey||M.localDay;const firstSupport=q=>q.attempts[0].hintsBefore??q.hintCount??0,independent=q=>q.attempts[0].correct&&firstSupport(q)===0;const days=new Set(attempted.map(q=>day(Date.parse(q.createdAt))));return {n:attempted.length,first:attempted.filter(q=>q.attempts[0].correct).length,independent:attempted.filter(independent).length,assistedFirst:attempted.filter(q=>q.attempts[0].correct&&!independent(q)).length,corrected:attempted.filter(q=>q.completed&&q.attempts.length>1).length,withSupport:attempted.filter(q=>q.hintCount>0).length,worked:attempted.filter(q=>q.workedExampleSeen).length,skipped:rows.filter(q=>q.skipped&&!q.preview).length,days:days.size,unique:new Set(attempted.map(q=>q.topic+':'+q.text+':'+q.answer)).size,revisits:attempted.filter(q=>q.reviewOnly||q.dailyKey).length,insufficient:attempted.length<5||days.size<3,rate:attempted.length?attempted.filter(independent).length/attempted.length:null}}
M.learningAnalysis=analysis;M.independentFirst=q=>!!q.attempts?.[0]?.correct&&(q.attempts[0].hintsBefore??q.hintCount??0)===0;
})(typeof window!=='undefined'?window:globalThis);

(function(){
const M=MathGarden;M.SAVE_SCHEMA=1;
const previousBlank=M.blank;M.blank=()=>({...previousBlank(),saveSchemaVersion:M.SAVE_SCHEMA});
M.prepareSave=function(input){if(!input||typeof input!=='object')throw Error('存档格式不正确');const version=input.saveSchemaVersion??0;if(!Number.isInteger(version)||version<0)throw Error('存档版本不正确');if(version>M.SAVE_SCHEMA)throw Error('此存档来自较新版本，请更新游戏后再打开；原存档未覆盖。');const next=M.valid(JSON.parse(JSON.stringify(input)));if(version===0){next.saveSchemaVersion=1;next.migrationHistory??=[];next.migrationHistory.push({from:0,to:1,at:new Date().toISOString()})}return next};
})();

// Local persistence only. No network, PIN or card iframe state belongs in a child save.
const LocalProfiles=(()=>{
 const INDEX='songzi-profile-index-v1',LEGACY='songzi-math-v1',BACKUP='songzi-profile-legacy-original-v1',PREFIX='songzi-profile-';
 const multiply32=Math.imul;
 const hash=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=multiply32(h^s.charCodeAt(i),16777619);return (h>>>0).toString(16).padStart(8,'0')};
 const uid=()=>globalThis.crypto?.randomUUID?.()||'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const n=Math.random()*16|0;return (c==='x'?n:(n&3|8)).toString(16)});
 const key=id=>PREFIX+id+'-v1';
 function create(storage,{blank,prepare,onStatus=()=>{},now=()=>typeof performance!=='undefined'?performance.now():Date.now()}={}){
  let index=null,indexRaw=null,activeRaw=null,activeDataRaw=null,revision=0;const samples=[];
  let retentionWarning='';
  // Cache only validation summaries of exact immutable strings; never share mutable save objects.
  const validationCache=[],CACHE_LIMIT=8,CACHE_BYTES=32*1024*1024;let cacheBytes=0,cacheHits=0,cacheMisses=0,cacheHashes=0;
  function cachedEnvelope(raw,id){const i=validationCache.findIndex(e=>e.id===id&&e.raw===raw);if(i<0)return null;const entry=validationCache.splice(i,1)[0];validationCache.push(entry);return entry}
  function rememberEnvelope(raw,value){if(cachedEnvelope(raw,value.id)||raw.length*2>CACHE_BYTES)return;validationCache.push({raw,id:value.id,revision:value.revision});cacheBytes+=raw.length*2;while(validationCache.length>CACHE_LIMIT||cacheBytes>CACHE_BYTES)cacheBytes-=validationCache.shift().raw.length*2}
  function forgetEnvelope(id,revision){for(let i=validationCache.length-1;i>=0;i--)if(validationCache[i].id===id&&validationCache[i].revision===revision)cacheBytes-=validationCache.splice(i,1)[0].raw.length*2}
  function checkedEnvelope(raw,id,checksum=false){let entry=cachedEnvelope(raw,id);if(entry)cacheHits++;else{cacheMisses++;const parsed=decode(raw,id);entry=cachedEnvelope(raw,id)||{raw,id,revision:parsed.value.revision}}if(checksum&&entry.checksum===undefined){entry.checksum=hash(raw);cacheHashes++}return entry}
  function status(message=''){retentionWarning=message;try{onStatus(message)}catch{}}
  const policyKey=id=>key(id)+'-retention-v1';
  const retainedKey=(id,token,rev)=>key(id)+'-retained-v1-'+token+'-before-revision-'+rev;
  function readPolicy(id,createNew=false){const k=policyKey(id),raw=storage.getItem(k);let value;
   if(raw===null){if(!createNew)return null;value={format:1,id,token:uid(),entries:[]};writeVerified(k,JSON.stringify(value));return readPolicy(id)}
   value=JSON.parse(raw);validatePolicy(value,id);
   return {key:k,raw,value};
  }
  function validatePolicy(value,id){
   if(value?.format!==1||value.id!==id||typeof value.token!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(value.token)||!Array.isArray(value.entries)||new Set(value.entries.map(e=>e.revision)).size!==value.entries.length||value.entries.some(e=>!Number.isSafeInteger(e.revision)||e.revision<2||e.key!==retainedKey(id,value.token,e.revision)||typeof e.verified!=='boolean'||typeof e.beforeHash!=='string'||!Number.isSafeInteger(e.beforeLength)||(!e.verified&&typeof e.expected!=='string')))throw Error('恢复副本策略格式异常或较新，已保留全部数据。');
   if(value.preserved!==undefined&&(!Array.isArray(value.preserved)||value.preserved.some(k=>typeof k!=='string'||!k.startsWith(policyKey(id)+'-unconfirmed-'))))throw Error('未确认候选目录异常，保留全部副本');
  }
  function writePolicy(policy,next){if(storage.getItem(policy.key)!==policy.raw)throw Error('恢复策略已被其他页面更改');validatePolicy(next,next.id);const raw=JSON.stringify(next);writeVerified(policy.key,raw);return {key:policy.key,raw,value:next}}
  function checkRecovery(entry,id){const raw=storage.getItem(entry.key);if(raw===null)return null;if(raw.length!==entry.beforeLength)throw Error('恢复副本发生变化，保留副本并停止清理');const info=checkedEnvelope(raw,id,true);if(info.checksum!==entry.beforeHash||info.revision!==entry.revision-1)throw Error('恢复副本发生变化，保留副本并停止清理');return raw}
  // A write-ahead expected value confirms interrupted commits only by exact byte equality.
  function settlePolicy(id,clean=false,knownPolicy){let policy=knownPolicy||readPolicy(id);if(!policy)return null;if(storage.getItem(policy.key)!==policy.raw)throw Error('恢复策略已被其他页面更改');const current=storage.getItem(key(id)),head=checkedEnvelope(current,id);let changed=false;
   const entries=policy.value.entries.map(entry=>{if(!entry.verified&&entry.expected===current){if(checkRecovery(entry,id)===null)throw Error('待确认恢复副本缺失，停止清理');changed=true;const {expected,...rest}=entry;return {...rest,verified:true}}return entry});
   if(changed)policy=writePolicy(policy,{...policy.value,entries});
   if(!clean)return policy;
   const verified=policy.value.entries.filter(e=>e.verified).sort((a,b)=>b.revision-a.revision),expired=verified.slice(3);
   for(const entry of verified.slice(0,3))if(entry.revision>head.revision||checkRecovery(entry,id)===null)throw Error('最近恢复副本缺失或版本异常，停止清理');
   for(const entry of expired){if(head.revision<entry.revision||storage.getItem(key(id))!==current||storage.getItem(policy.key)!==policy.raw)throw Error('清理前档案或策略发生变化，保留多余副本');
    const raw=checkRecovery(entry,id);if(raw!==null){storage.removeItem(entry.key);if(storage.getItem(entry.key)!==null)throw Error('恢复副本清理未确认')}
    policy=writePolicy(policy,{...policy.value,entries:policy.value.entries.filter(e=>e.key!==entry.key)});
    forgetEnvelope(id,entry.revision-1);
   }
   return policy;
  }
  function maintainRetention(id,knownPolicy){try{const policy=settlePolicy(id,true,knownPolicy);status(policy?.value.preserved?.length||policy?.value.entries.some(e=>!e.verified)?'主档可读取；此前未确认的保存候选已保留，请导出检查。':'')}catch(error){status('主档已保存；恢复副本维护未完成，已保留可用副本，请稍后重试或导出。'+error.message)}}
  function parseIndex(raw){const v=JSON.parse(raw);if(v?.format!==1||!Array.isArray(v.profiles)||!v.profiles.length||v.profiles.length>100||new Set(v.profiles.map(p=>p.id)).size!==v.profiles.length||v.profiles.some(p=>typeof p.id!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(p.id)||typeof p.name!=='string'||!p.name.trim())||!v.profiles.some(p=>p.id===v.activeId&&!p.archived))throw Error('档案目录损坏或版本较新；原文保留，请导出恢复。');return v}
  function assertFormal(data){if(!data||data.testOnly)throw Error('测试档不能写入儿童正式档案。');return data}
  function decode(raw,id){const v=JSON.parse(raw);if(v?.profileFormat!==1||v.id!==id||!Number.isSafeInteger(v.revision)||v.revision<1)throw Error('儿童档案格式异常或较新；未覆盖原档。');const data=assertFormal(prepare(v.save));rememberEnvelope(raw,v);return {value:v,data}}
  function writeVerified(k,raw){storage.setItem(k,raw);if(storage.getItem(k)!==raw)throw Error('存档写入核对失败；原档未删除。')}
  function updateIndex(next){if(storage.getItem(INDEX)!==indexRaw)throw Error('其他页面已更改档案目录，请刷新后重试。');const raw=JSON.stringify(next);writeVerified(INDEX,raw);index=next;indexRaw=raw}
  function adopt(id,raw,parsed){const entry=index?.profiles.find(p=>p.id===id);if(entry)parsed.data.profile.name=entry.name;activeRaw=raw;activeDataRaw=JSON.stringify(parsed.data);revision=parsed.value.revision;maintainRetention(id);return parsed.data}
  // Only the timestamp appended by schema-0 preparation may differ on a retry.
  function migrationComparable(data,original){const copy=JSON.parse(JSON.stringify(data)),source=JSON.parse(original);if((source.saveSchemaVersion??0)===0){const history=copy.migrationHistory,offset=source.migrationHistory?.length??0;if(Array.isArray(history)&&history.length===offset+1&&history[offset].from===0&&history[offset].to===1)delete history[offset].at}return JSON.stringify(copy)}
  function boot(){
   const existing=storage.getItem(INDEX);if(existing!==null){index=parseIndex(existing);indexRaw=existing;const raw=storage.getItem(key(index.activeId));if(raw===null)throw Error('当前儿童档案缺失；请恢复备份，不会重建覆盖。');return adopt(index.activeId,raw,decode(raw,index.activeId))}
   const original=storage.getItem(LEGACY);
   if(original!==null){const old=storage.getItem(BACKUP);if(old!==null&&old!==original)throw Error('检测到不同的旧档备份，停止迁移以免覆盖。');writeVerified(BACKUP,original)}
   const data=assertFormal(original===null?blank():prepare(JSON.parse(original)));
   const id=original===null?uid():'legacy-'+hash(original),target=key(id),prior=storage.getItem(target);
   let raw=JSON.stringify({profileFormat:1,id,revision:1,save:data}),parsed;
   if(prior!==null){parsed=decode(prior,id);if(original===null||parsed.value.revision!==1||migrationComparable(parsed.value.save,original)!==migrationComparable(data,original))throw Error('检测到不同的未完成迁移副本，保留双方，请先恢复。');raw=prior}
   else{writeVerified(target,raw);parsed=decode(storage.getItem(target),id)}
   if(storage.getItem(LEGACY)!==original||storage.getItem(target)!==raw)throw Error('迁移期间存档发生变化，保留双方并停止启用。');
   const next={format:1,activeId:id,profiles:[{id,name:data.profile.name||'小松子',createdAt:new Date().toISOString(),archived:false}],migration:original===null?null:{source:LEGACY,backup:BACKUP,checksum:hash(original),target:id,verified:true}};
   updateIndex(next);return adopt(id,raw,parsed);
  }
  function commit(data){assertFormal(data);if(!index)throw Error('档案尚未初始化');const start=now(),dataRaw=JSON.stringify(data),serialized=now();if(storage.getItem(INDEX)!==indexRaw||storage.getItem(key(index.activeId))!==activeRaw)throw Error('另一页面已更新存档，已停止覆盖；请导出本次记录后刷新。');if(dataRaw===activeDataRaw){samples.push({kind:'unchanged',serializeMs:serialized-start,writeMs:0,totalMs:now()-start,bytes:dataRaw.length*2});return {changed:false,id:index.activeId,revision}}
   const nextRevision=revision+1,raw='{"profileFormat":1,"id":'+JSON.stringify(index.activeId)+',"revision":'+nextRevision+',"save":'+dataRaw+'}',writing=now();
   let policy=readPolicy(index.activeId,true);policy=settlePolicy(index.activeId,false,policy)||policy;
   const recoveryKey=retainedKey(index.activeId,policy.value.token,nextRevision),pending=policy.value.entries.find(e=>e.revision===nextRevision);
   if(pending&&pending.expected!==raw){if(pending.verified)throw Error('恢复副本版本冲突，停止保存');const preservedKey=policy.key+'-unconfirmed-'+uid();if(storage.getItem(preservedKey)!==null)throw Error('未确认候选备份键冲突');writeVerified(preservedKey,pending.expected);policy=writePolicy(policy,{...policy.value,preserved:[...(policy.value.preserved||[]),preservedKey],entries:policy.value.entries.map(e=>e===pending?{...e,expected:raw}:e)})}
   if(!pending){if(storage.getItem(recoveryKey)!==null)throw Error('发现未登记恢复副本，已保留且停止覆盖');const entry={revision:nextRevision,key:recoveryKey,verified:false,beforeHash:checkedEnvelope(activeRaw,index.activeId,true).checksum,beforeLength:activeRaw.length,expected:raw};policy=writePolicy(policy,{...policy.value,entries:[...policy.value.entries,entry]})}
   const recovery=storage.getItem(recoveryKey);if(recovery!==null&&recovery!==activeRaw)throw Error('恢复副本存在冲突，停止保存；请导出本次记录。');
   if(recovery===null)writeVerified(recoveryKey,activeRaw);
   if(storage.getItem(INDEX)!==indexRaw||storage.getItem(key(index.activeId))!==activeRaw||storage.getItem(policy.key)!==policy.raw)throw Error('备份期间其他页面已更新，停止覆盖；请导出本次记录。');
   writeVerified(key(index.activeId),raw);activeRaw=raw;activeDataRaw=dataRaw;revision=nextRevision;maintainRetention(index.activeId,policy);const end=now();samples.push({kind:'commit',serializeMs:serialized-start,writeMs:end-writing,totalMs:end-start,bytes:raw.length*2});if(samples.length>100)samples.shift();return {changed:true,id:index.activeId,revision,warning:retentionWarning}
  }
  function select(id){const start=now(),entry=index.profiles.find(p=>p.id===id&&!p.archived);if(!entry)throw Error('请选择未归档的儿童');const raw=storage.getItem(key(id));if(raw===null)throw Error('目标档案缺失，未切换');const parsed=decode(raw,id);updateIndex({...index,activeId:id});const data=adopt(id,raw,parsed);samples.push({kind:'select',totalMs:now()-start,bytes:raw.length*2});return data}
  function add(name,initial){name=String(name||'').trim();if(!name||name.length>20)throw Error('昵称请填1至20个字');if(index.profiles.length>=100)throw Error('本机档案已达到100个，请先导出整理');const id=uid(),data=assertFormal(initial===undefined?blank():prepare(initial));data.profile.name=name;const raw=JSON.stringify({profileFormat:1,id,revision:1,save:data});writeVerified(key(id),raw);decode(storage.getItem(key(id)),id);updateIndex({...index,profiles:[...index.profiles,{id,name,createdAt:new Date().toISOString(),archived:false}]});return id}
  function rename(id,name){name=String(name||'').trim();if(!name||name.length>20)throw Error('昵称请填1至20个字');if(!index.profiles.some(p=>p.id===id))throw Error('档案不存在');updateIndex({...index,profiles:index.profiles.map(p=>p.id===id?{...p,name}:p)})}
  function archive(id,value=true){if(id===index.activeId&&value)throw Error('请先切换到其他儿童，再归档此档案');if(!index.profiles.some(p=>p.id===id))throw Error('档案不存在');updateIndex({...index,profiles:index.profiles.map(p=>p.id===id?{...p,archived:value}:p)})}
  function backupActive(label='before-import'){const raw=storage.getItem(key(index.activeId));if(raw!==activeRaw)throw Error('存档已被其他页面修改，停止导入');writeVerified(key(index.activeId)+'-'+label,raw);return raw}
  return {boot,commit,select,add,rename,archive,backupActive,validationCacheStatus:()=>({entries:validationCache.length,utf16Bytes:cacheBytes,hits:cacheHits,misses:cacheMisses,hashes:cacheHashes}),retentionStatus:()=>({warning:retentionWarning,limit:3}),list:()=>index?index.profiles.map(p=>({...p})):[],activeId:()=>index?.activeId,raw:()=>activeRaw,samples:()=>samples.slice(),keys:{INDEX,LEGACY,BACKUP},key,hash};
 }
 return {create,key,hash,INDEX,LEGACY,BACKUP};
})();

/* Parent account REST adapter. No SDK, no automatic registration or configuration. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.SongziAccount=api})(globalThis,function(){
 'use strict';
 const fail=(code,message)=>Object.assign(new Error(message),{code});
 function config(value){
  const url=new URL(value.url);
  if(url.protocol!=='https:'||url.username||url.password||url.pathname!=='/'||url.search||url.hash)throw fail('CONFIG','项目地址须为HTTPS根地址。');
  const key=String(value.key||'').trim();
  let anon=false;try{anon=JSON.parse(atob(key.split('.')[1])).role==='anon'}catch{}
  if(!key.startsWith('sb_publishable_')&&!anon)throw fail('CONFIG','只接受publishable或anon公开密钥，不能使用管理密钥。');
  return {url:url.origin,key};
 }
 class Account {
  constructor({settings,fetch:fetcher=globalThis.fetch,sessionStore,onChange=()=>{},timeout=15000}){
   this.settings=config(settings);this.fetcher=fetcher;this.sessionStore=sessionStore;this.onChange=onChange;this.timeout=timeout;this.epoch=0;this.session=null;this.refreshing=null;this.controllers=new Set();
   this.sessionKey='songzi-account-session-v2:'+this.settings.url;
  }
  current(){return this.session?{id:this.session.user.id,email:this.session.user.email,name:this.session.user.name}:null}
  freeze(){this.epoch++;this.refreshing=null;this.sessionStore?.removeItem(this.sessionKey);for(const c of this.controllers)c.abort();this.controllers.clear();this.session=null;this.onChange(null)}
  check(epoch){if(epoch!==this.epoch)throw fail('IDENTITY_CHANGED','账号已变化，已忽略旧请求。')}
  async request(path,{body,token,method='POST'}={}){
   const controller=new AbortController();this.controllers.add(controller);
   let timer;const expired=new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(fail('TIMEOUT','云服务响应超时，本地记录保留。'))},this.timeout)});
   try{
    return await Promise.race([expired,(async()=>{
     const response=await this.fetcher(this.settings.url+path,{method,signal:controller.signal,headers:{apikey:this.settings.key,'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
     const raw=await response.text();let data=null;try{data=raw?JSON.parse(raw):null}catch{throw fail('RESPONSE','云服务返回格式不正确。')}
     if(!response.ok)throw Object.assign(fail(response.status===401?'AUTH_REQUIRED':response.status===400?'INVALID_REQUEST':(response.status>=400&&response.status<500&&![408,429].includes(response.status))?'PERMANENT':'HTTP_'+response.status,response.status===401?'登录已过期，请重新登录。':'云服务请求失败（'+response.status+'），本地记录保留。'),{status:response.status,serverCode:typeof data?.code==='string'?data.code:undefined});
     return data;
    })()]);
   }finally{clearTimeout(timer);this.controllers.delete(controller)}
  }
  keep(data,epoch){
   this.check(epoch);
   if(!data?.access_token||!data.refresh_token||!data.user?.id)throw fail('AUTH_RESPONSE','登录响应缺少有效会话。');
   const next={access_token:data.access_token,refresh_token:data.refresh_token,expires_at:data.expires_at||Math.floor(Date.now()/1000)+(data.expires_in||3600),user:{id:data.user.id,email:data.user.email,name:String(data.user.user_metadata?.display_name||data.user.user_metadata?.full_name||data.user.user_metadata?.name||data.user.email?.split("@")[0]||"家长").slice(0,40)}};
   // Tokens live only in this tab's sessionStorage; password is never persisted.
   this.sessionStore?.setItem(this.sessionKey,JSON.stringify(next));this.session=next;this.onChange(this.current());return this.current();
  }
  async signIn(email,password){
   this.freeze();const epoch=this.epoch;
   const data=await this.request('/auth/v1/token?grant_type=password',{body:{email:email.trim(),password}});
   return this.keep(data,epoch);
  }
  async signUp(email,password,nickname){
   const name=nickname===undefined?undefined:String(nickname).trim();if(name!==undefined&&(!name||name.length>20))throw fail('NICKNAME','昵称请填1—20字。');
   this.freeze();const epoch=this.epoch;const data=await this.request('/auth/v1/signup',{body:{email:email.trim(),password,...(name?{data:{display_name:name}}:{})}});this.check(epoch);if(data?.access_token){this.keep(data,epoch);return {message:'注册成功，已登录家长账号。'}}
   return {message:'注册请求已提交，请检查家长邮箱并完成验证后登录。'};
  }
  async restore(){
   const raw=this.sessionStore?.getItem(this.sessionKey);if(!raw)return null;
   const saved=JSON.parse(raw);this.freeze();if(!saved?.refresh_token||!saved.user?.id)throw fail('SESSION','本页登录状态异常，请重新登录。');
   this.session=saved;
   try{await this.refresh();return this.current()}catch(e){this.session=null;throw e}
  }
  async refresh(){
   if(this.refreshing)return this.refreshing;
   const saved=this.session,epoch=this.epoch;if(!saved)throw fail('AUTH_REQUIRED','请先登录家长账号。');
   const run=this.request('/auth/v1/token?grant_type=refresh_token',{body:{refresh_token:saved.refresh_token}}).then(data=>{
    if(data.user?.id!==saved.user.id)throw fail('IDENTITY_CHANGED','刷新响应账号不符。');return this.keep(data,epoch);
   });
   this.refreshing=run;try{return await run}finally{if(this.refreshing===run)this.refreshing=null}
  }
  async api(path,options={}){
   const epoch=this.epoch,owner=this.current()?.id;if(!owner)throw fail('AUTH_REQUIRED','请先登录家长账号。');
   if(this.session.expires_at*1000<Date.now()+30000)await this.refresh();this.check(epoch);
   try{const result=await this.request(path,{...options,token:this.session.access_token});this.check(epoch);return result}catch(e){
    this.check(epoch);if(e.status!==401)throw e;await this.refresh();this.check(epoch);
    const result=await this.request(path,{...options,token:this.session.access_token});this.check(epoch);return result;
   }
  }
  async signOut(){
   const token=this.session?.access_token;this.freeze();this.sessionStore?.removeItem(this.sessionKey);
   if(token)try{await this.request('/auth/v1/logout?scope=local',{token})}catch{throw fail('LOGOUT_LOCAL','本页已退出；云端会话撤销未确认。')}
  }
  list(){return this.api('/rest/v1/child_profiles?select=id,display_name&order=created_at',{method:'GET'})}
  async create(name,id){
   const owner=this.current()?.id;if(!owner)throw fail('AUTH_REQUIRED','请先登录家长账号。');
   // Caller supplies a stable UUID. Ambiguous retries can list the same ID instead of duplicating children.
   await this.api('/rest/v1/child_profiles',{body:{id,parent_id:owner,display_name:name}});return id;
  }
  async download(id){
   const rows=await this.api('/rest/v1/cloud_saves?select=revision,data&profile_id=eq.'+encodeURIComponent(id),{method:'GET'});
   return rows[0]||null;
  }
  upload(id,request){return this.api('/rest/v1/rpc/commit_save',{body:{p_profile:id,p_operation:request.operationId,p_base:request.baseRevision,p_data:request.data}})}
 }
 return {Account,config,fail};
});

/* Durable outbox atop the existing local save. Never overwrites a game profile. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.SongziCloudSync=api})(globalThis,function(){
 'use strict';
 const copy=value=>JSON.parse(JSON.stringify(value));
 const fail=(code,message)=>Object.assign(new Error(message),{code});
 class Store{
  constructor(storage,namespace=""){this.storage=storage;this.namespace=namespace}
  key(owner,local){return 'songzi-cloud-outbox-v2:'+encodeURIComponent(this.namespace)+':'+encodeURIComponent(owner)+':'+encodeURIComponent(local)}
  get(owner,local){
   const raw=this.storage.getItem(this.key(owner,local));if(raw===null)return null;
   const s=JSON.parse(raw);
   if(s?.format!==2||s.owner!==owner||s.local!==local||!s.cloud||!Number.isSafeInteger(s.revision)||s.revision<0||(!Number.isSafeInteger(s.generation)||s.generation<0))throw fail('STORAGE','云队列格式异常或较新，原文保留，请导出。');
   return s;
  }
  put(s){const key=this.key(s.owner,s.local),raw=JSON.stringify(s);this.storage.setItem(key,raw);if(this.storage.getItem(key)!==raw)throw fail('STORAGE','云队列写入未确认；本机主存档仍保留。')}
 }
 class Sync{
  constructor({account,store,validate,lock,status=()=>{},id=()=>crypto.randomUUID(),delay=3000}){
   Object.assign(this,{account,store,validate,lock,status,id,delay});this.enabled=new Map();this.latest=new Map();this.timers=new Map();this.busy=new Map();this.attempts=new Map();this.epoch=0;this.tail=Promise.resolve();
  }
  emit(local,state,message){this.status({local,state,message})}
  stop(){this.epoch++;for(const t of this.timers.values())clearTimeout(t);this.timers.clear();this.busy.clear();this.enabled.clear();this.latest.clear();this.attempts.clear()}
  identity(owner,epoch){if(epoch!==this.epoch||this.account.current()?.id!==owner)throw fail('IDENTITY_CHANGED','账号已变化，旧同步停止。')}
  exclusive(owner,local,fn){if(!this.lock)throw fail('LOCK_UNAVAILABLE','浏览器不支持跨页面同步锁，云同步暂停，本机可继续玩。');return this.lock('songzi-cloud:'+owner+':'+local,fn)}
  async bind(local,cloud,raw,revision=0){
   const owner=this.account.current()?.id,epoch=this.epoch;if(!owner)throw fail('AUTH_REQUIRED','请先登录。');
   await this.exclusive(owner,local,()=>{
    this.identity(owner,epoch);let s=this.store.get(owner,local);
    if(s&&s.cloud!==cloud)throw fail('BINDING','此本机档案已有其他云映射；请新建本机档案。');
    if(!s){s={format:2,owner,local,cloud,revision,generation:0,status:'local'};this.store.put(s)}
   });
   this.identity(owner,epoch);this.enabled.set(local,owner);this.mark(local,raw);return this.flush(local);
  }
  mark(local,raw){
   const owner=this.account.current()?.id;if(!owner||this.enabled.get(local)!==owner)return false;
   // Immutable serialized local envelope, already committed by LocalProfiles. No JSON work or I/O here.
   this.latest.set(local,raw);this.emit(local,'pending','本机已保存，等待云同步。');this.schedule(local,this.delay);return true;
  }
  schedule(local,delay){clearTimeout(this.timers.get(local));this.timers.set(local,setTimeout(()=>{this.timers.delete(local);this.flush(local).catch(()=>{})},delay))}
  async flush(local){
   if(this.busy.has(local))return this.busy.get(local);
   const owner=this.account.current()?.id,epoch=this.epoch;
   if(!owner||this.enabled.get(local)!==owner)return;
   const task=this.exclusive(owner,local,()=>{const run=this.tail.catch(()=>{}).then(()=>this.run(local,owner,epoch));this.tail=run;return run});this.busy.set(local,task);
   try{return await task}catch(e){
    if(epoch===this.epoch){this.emit(local,e.code==='AUTH_REQUIRED'?'auth-required':'error',e.message);if(!['AUTH_REQUIRED','IDENTITY_CHANGED','STORAGE','SAVE_VERSION','LOCK_UNAVAILABLE','SIZE','INVALID_REQUEST','PERMANENT','BINDING','RESPONSE'].includes(e.code)){const n=(this.attempts.get(local)||0)+1;this.attempts.set(local,n);this.schedule(local,Math.min(300000,2000*2**Math.min(n,7))*(.8+Math.random()*.4))}}
    throw e;
   }finally{if(this.busy.get(local)===task)this.busy.delete(local)}
  }
  async run(local,owner,epoch){
   this.identity(owner,epoch);let s=this.store.get(owner,local);if(!s)throw fail('BINDING','云档映射缺失。');
   const raw=this.latest.get(local);
   if(raw!==undefined&&raw!==s.raw){s.raw=raw;s.generation++;s.status=s.conflict?'conflict':'pending';this.store.put(s)}
   if(s.blocked){this.emit(local,'blocked','此请求需家长检查或升级，已暂停重试；原请求保留。');return}
   if(s.conflict){this.emit(local,'conflict','云端与本机有不同进度，已保留双方，请家长处理。');return}
   if(s.status==='synced'||!s.raw)return;
   if(!s.flight){
    const envelope=JSON.parse(s.raw);const data=this.validate(copy(envelope.save));
    if(data.testOnly)throw fail('SAVE_VERSION','测试记录不能上传。');
    if(new TextEncoder().encode(JSON.stringify(data)).length>1900000)throw fail('SIZE','存档超过当前云请求安全上限，未截断历史，请保留本机并导出。');
    s.flight={operationId:this.id(),baseRevision:s.revision,data,generation:s.generation};
   }
   // Exact request survives timeout/restart. Unknown queue data never gets silently replaced.
   s.status='syncing';this.store.put(s);const sent=copy(s.flight);
   this.emit(local,'syncing','本机已保存，正在同步云端。');
   let result;try{result=await this.account.upload(s.cloud,sent)}catch(error){this.identity(owner,epoch);if(['INVALID_REQUEST','PERMANENT'].includes(error.code)){s.blocked={code:error.code,status:error.status,serverCode:error.serverCode};s.status='blocked';this.store.put(s)}throw error}this.identity(owner,epoch);
   if(result?.conflict){s.conflict={remote:result.remote,localRaw:s.raw,operation:sent};s.status='conflict';this.store.put(s);this.emit(local,'conflict','发现不同进度，双方副本已保留；不会自动覆盖。');return}
   if(!Number.isSafeInteger(result?.revision)||result.revision!==sent.baseRevision+1)throw fail('RESPONSE','同步回执版本异常，原请求保留。');
   s.revision=result.revision;delete s.flight;s.status=s.generation===sent.generation?'synced':'pending';s.lastSuccess=new Date().toISOString();this.store.put(s);
   this.attempts.delete(local);
   if(this.latest.get(local)!==s.raw||s.status==='pending')this.schedule(local,0);
   this.emit(local,s.status,'本机已保存；云端已确认版本 '+s.revision+'。');return s;
  }
  async retry(local){const owner=this.account.current()?.id,epoch=this.epoch;await this.exclusive(owner,local,()=>{this.identity(owner,epoch);const s=this.store.get(owner,local);if(!s)throw fail('BINDING','映射缺失');delete s.blocked;this.store.put(s)});return this.flush(local)}
  async keepLocal(local){
   const owner=this.account.current()?.id,epoch=this.epoch;
   await this.exclusive(owner,local,()=>{
    this.identity(owner,epoch);const s=this.store.get(owner,local);if(!s?.conflict)throw fail('CONFLICT','没有待处理冲突。');
    if(s.conflict.remote){if(!Number.isSafeInteger(s.conflict.remote.revision)||s.conflict.remote.revision<1)throw fail('RESPONSE','冲突云版本异常，已停止。');this.validate(copy(s.conflict.remote.data))}
    // Preserve both sides permanently in a distinct backup key before leaving conflict state.
    const raw=JSON.stringify(s),key='songzi-cloud-conflict-v2:'+this.id();this.store.storage.setItem(key,raw);
    if(this.store.storage.getItem(key)!==raw)throw fail('STORAGE','冲突备份未确认，已停止。');
    if(this.latest.has(local)){s.raw=this.latest.get(local);s.generation++}s.revision=s.conflict.remote?.revision||0;delete s.conflict;delete s.flight;s.status='pending';this.store.put(s);
   });
   return this.flush(local);
  }
  export(local){const owner=this.account.current()?.id;return this.store.get(owner,local)}
 }
 return {Store,Sync};
});

const GardenSkins=(()=>{
const pots=[{id:'terracotta',name:'经典陶盆'},{id:'pot-sprout',name:'嫩芽陶盆'},{id:'pot-moss',name:'苔叶木桶盆'},{id:'pot-moon',name:'月光蘑菇盆'},{id:'pot-dawn',name:'晨曦树屋盆'}];
function ensure(db){db.gardenSkins??={version:1,owned:[],slots:Array(20).fill('terracotta')};const g=db.gardenSkins;g.owned=Array.isArray(g.owned)?g.owned.filter(id=>pots.some(p=>p.id===id)):[];g.slots=Array.from({length:20},(_,i)=>pots.some(p=>p.id===g.slots?.[i])?g.slots[i]:'terracotta');db.decorInteractions??={};return g}
function available(db,testing=false){const g=ensure(db);return pots.filter(p=>p.id==='terracotta'||testing||g.owned.includes(p.id)).map(p=>p.id)}
function equip(db,index,id,testing=false){if(!Number.isInteger(index)||index<0||index>=20||!available(db,testing).includes(id))throw Error('花盆皮肤尚未解锁');ensure(db).slots[index]=id;return id}
function previewUnlock(db){const g=ensure(db);g.owned=pots.filter(p=>p.id!=='terracotta').map(p=>p.id);g.previewGranted=true;db.decorArtOwned=['decor-chime','decor-fountain','decor-mushroom'];return g}
return {pots,ensure,available,equip,previewUnlock};
})();

// Local family gate, separate from learning backups; it does not encrypt learning data.
let parentUnlocked=false,parentTarget='parent',parentGateMode='unlock',parentTimer=null,parentBusy=false,parentGateEpoch=0;
const PARENT_ROUTES=new Set(['parent','bank','curve','rewards','chapters']),PARENT_PIN_KEY='songzi-parent-pin-v1';
function parentPinRecord(){try{const s=localStorage.getItem(PARENT_PIN_KEY);if(!s)return null;const value=JSON.parse(s);if(value.version!==1||typeof value.salt!=='string'||typeof value.hash!=='string')return {invalid:true};return value}catch{return {invalid:true}}}
async function parentPinHash(pin,salt){if(!globalThis.crypto?.subtle)throw Error('当前浏览器不支持密码验证，请用更新版本的浏览器打开。');const bytes=new TextEncoder().encode(pin),saltBytes=Uint8Array.from(salt.match(/.{2}/g)||[],x=>parseInt(x,16));const key=await crypto.subtle.importKey('raw',bytes,'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:saltBytes,iterations:150000},key,256);return Array.from(new Uint8Array(bits),x=>x.toString(16).padStart(2,'0')).join('')}
function parentPinSalt(){if(!globalThis.crypto?.getRandomValues)throw Error('当前浏览器不支持设置密码。');return Array.from(crypto.getRandomValues(new Uint8Array(16)),x=>x.toString(16).padStart(2,'0')).join('')}
function renderParentNav(view){const area=$('#parentNav');area.hidden=!(parentUnlocked&&PARENT_ROUTES.has(view));if(!area.hidden){area.innerHTML='<div class="parent-nav-links"><span class="parent-label">家长管理</span><button data-parent-view="parent" class="'+(view==='parent'?'active':'')+'">学习记录与设置</button><button data-parent-view="bank" class="'+(view==='bank'?'active':'')+'">全部题库</button><button data-parent-view="curve" class="'+(view==='curve'?'active':'')+'">难度规则</button></div><button data-parent-view="rewards">奖励与试开</button><div class="parent-nav-actions"><button id="changeParentPin">修改家长密码</button><button id="lockParentArea">退出家长区</button></div>';document.querySelectorAll('[data-parent-view]').forEach(b=>b.onclick=()=>go(b.dataset.parentView));$('#lockParentArea').onclick=()=>lockParentArea();$('#changeParentPin').onclick=()=>openParentGate(view,'change');}}
function touchParentSession(){if(!parentUnlocked)return;clearTimeout(parentTimer);parentTimer=setTimeout(()=>lockParentArea(),5*60*1000)}
function guardParentRoute(view){if(PARENT_ROUTES.has(view)){if(!parentUnlocked){openParentGate(view);return false}touchParentSession();}else if(parentUnlocked){parentUnlocked=false;clearTimeout(parentTimer);}return true}
function lockParentArea(){parentUnlocked=false;clearTimeout(parentTimer);parentGateEpoch++;$('#parentGate').hidden=true;go('home');}
function closeParentGate(){parentGateEpoch++;$('#parentGate').hidden=true;$('#parentPinForm').reset();if(tab==='learn'&&session)startClock();$('#parentEntry').focus()}
function openParentGate(target='parent',mode='unlock'){if(session)stopClock();parentTarget=PARENT_ROUTES.has(target)?target:'parent';const record=parentPinRecord();parentGateMode=mode==='change'?'change':record?'unlock':'setup';parentGateEpoch++;const setup=parentGateMode==='setup',change=parentGateMode==='change';$('#parentGateTitle').textContent=setup?'请家长设置专属密码':change?'修改家长密码':'进入家长区';$('#parentGateIntro').textContent=setup?'首次由家长设置6位数字密码。以后查看记录、题库和设置，都需要验证。':change?'先验证当前密码，再设置新的6位数字密码。':'请输入家长的6位数字密码。';$('#parentCurrentField').hidden=!change;$('#parentConfirmField').hidden=!(setup||change);$('#parentPinLabel').textContent=setup||change?'设置6位新密码':'家长密码';$('#parentPinForm').reset();$('#parentGateError').textContent=record?.invalid?'本浏览器的密码记录异常，不能直接进入。请联系维护者处理。':'';$('#parentPinSubmit').disabled=!!record?.invalid;$('#parentPinSubmit').textContent=setup?'保存并进入':change?'验证并修改':'验证并进入';$('#parentGate').hidden=false;(change?$('#parentCurrentPin'):$('#parentPin')).focus();}
async function submitParentPin(event){event.preventDefault();if(parentBusy)return;const pin=$('#parentPin').value,confirm=$('#parentPinConfirm').value,current=$('#parentCurrentPin').value,setup=parentGateMode==='setup',change=parentGateMode==='change';$('#parentGateError').textContent='';if(!/^\d{6}$/.test(pin)){ $('#parentGateError').textContent='请输入6位数字。';return}if((setup||change)&&pin!==confirm){$('#parentGateError').textContent='两次新密码不一致，请重新确认。';return}const epoch=parentGateEpoch;parentBusy=true;$('#parentPinSubmit').disabled=true;try{const record=parentPinRecord();if(record?.invalid)throw Error('密码记录异常，暂时无法进入。');if(change||!setup){const candidate=change?current:pin;if(!/^\d{6}$/.test(candidate)||!record||await parentPinHash(candidate,record.salt)!==record.hash)throw Error('密码不正确，请再试一次。');}if(epoch!==parentGateEpoch)return;if(setup||change){if(setup&&record)throw Error('密码已设置，请关闭后重新验证。');const salt=parentPinSalt(),hash=await parentPinHash(pin,salt);if(epoch!==parentGateEpoch)return;localStorage.setItem(PARENT_PIN_KEY,JSON.stringify({version:1,salt,hash}));const stored=parentPinRecord();if(stored?.hash!==hash)throw Error('密码未能保存，请检查浏览器存储权限。');}if(epoch!==parentGateEpoch)return;parentUnlocked=true;$('#parentGate').hidden=true;$('#parentPinForm').reset();touchParentSession();go(parentTarget);}catch(error){if(epoch===parentGateEpoch)$('#parentGateError').textContent=error.message||'暂时无法验证，请稍后重试。';}finally{parentBusy=false;$('#parentPinSubmit').disabled=false;}}
function initParentGate(){$('#parentEntry').onclick=()=>openParentGate();$('#parentGateClose').onclick=closeParentGate;$('#parentPinForm').onsubmit=submitParentPin;$('#parentGate').addEventListener('click',e=>{if(e.target===$('#parentGate'))closeParentGate()});document.addEventListener('pointerdown',touchParentSession);document.addEventListener('keydown',e=>{touchParentSession();if($('#parentGate').hidden)return;if(e.key==='Escape'){closeParentGate();return}if(e.key==='Tab'){const controls=[$('#parentGateClose'),...(!$('#parentCurrentField').hidden?[$('#parentCurrentPin')]:[]),$('#parentPin'),...(!$('#parentConfirmField').hidden?[$('#parentPinConfirm')]:[]),$('#parentPinSubmit')].filter(x=>!x.disabled);const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});document.addEventListener('visibilitychange',()=>{if(document.hidden&&parentUnlocked)lockParentArea()});}

'use strict';
const M=MathGarden,$=s=>document.querySelector(s),KEY='songzi-math-v1';let db,storageOK=true,session=null,q=null,tab='home',parentDays=7,activeSince=0,activeAccum=0,lastSavedAt=null,frameReady=false,frameMode='',grantPending=null,frameInitialized=false;
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const fmt=d=>new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Hong_Kong',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(d));
const cardToken=()=>globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
const CARD_PAGE_TOKEN=cardToken();let cardFrameToken='';
function cardSessionContext(){return {profileId:profileStore.activeId(),pageToken:CARD_PAGE_TOKEN,frameToken:cardFrameToken,scope:typeof isTesting==='function'&&isTesting()?'sandbox':'formal'}}
function acceptsCardMessage(event){const m=event.data,c=cardSessionContext();return storageOK&&frameInitialized&&!!cardFrameToken&&event.source===$('#cardFrame').contentWindow&&m&&['profileId','pageToken','frameToken','scope'].every(k=>m[k]===c[k])}
function postToCards(message){if(!frameInitialized||!cardFrameToken||!storageOK)return;$('#cardFrame').contentWindow.postMessage({...message,...cardSessionContext()},'*')}
function makeCardDocument(){cardFrameToken=cardToken();const tag='<scr'+'ipt>';return songziGetCARD_DOCUMENT().replace(tag,tag+'\nconst SONGZI_CARD_CONTEXT='+JSON.stringify(cardSessionContext()).replaceAll('<','\\u003c')+';\n')}
const profileStore=LocalProfiles.create(localStorage,{blank:()=>M.blank(),prepare:v=>M.prepareSave(v),onStatus:message=>{const area=$('#storageWarning');if(message){area.innerHTML='<div class="storage-warning" role="status">'+escapeHTML(message)+'</div>';area.dataset.retentionWarning='true'}else if(storageOK&&area.dataset.retentionWarning==='true'){area.innerHTML='';area.dataset.retentionWarning='false'}}});let profileActivityEpoch=0;
try{db=profileStore.boot()}catch(error){db=M.blank();storageOK=false;$('#storageWarning').innerHTML='<div class="storage-warning">'+escapeHTML(error.message)+' 请在家长区导出本次记录或恢复原档。</div>'}
function save(){if(!storageOK)return false;try{profileStore.commit(db);lastSavedAt=new Date().toISOString();try{if(typeof cloudSaved==='function')cloudSaved()}catch(error){if(typeof cloudMessage==='function')cloudMessage('本机已保存，云同步暂停：'+error.message)}return true}catch(error){storageOK=false;$('#storageWarning').innerHTML='<div class="storage-warning">保存失败：'+escapeHTML(error.message)+' 本次记录仍在页面中，请先导出备份；未覆盖其他儿童档案。</div>';return false}}
function wallet(){$('#sun').textContent=db.wallet.sun;$('#leaves').textContent=db.wallet.leaves}function notify(t){const e=document.createElement('div');e.className='toast';e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),4000)}
function credit(amount,reason,ref){if(db.ledger.some(x=>x.ref===ref))return;db.wallet.sun+=amount;db.ledger.push({id:'tx-'+Date.now()+'-'+Math.random(),at:new Date().toISOString(),amount,reason,ref});save();wallet()}
function due(){return Object.values(db.reviews).filter(r=>Date.parse(r.dueAt)<=Date.now()&&db.profile.topics.includes(r.topic))}
function safeCollection(){return [...new Set(db.packs.filter(p=>p.status==='opened').flatMap(p=>p.cards||[]))].filter(i=>Number.isInteger(i)&&i>=0&&i<RewardEngine.catalog.length&&RewardEngine.catalog[i].collectible!==false);/*legacy*/try{const a=JSON.parse(localStorage.getItem('songzi-cards')||'[]');return Array.isArray(a)?a.filter(x=>Number.isInteger(x)&&x>=0&&x<8):[]}catch{return[]}}
function go(view){if(!guardParentRoute(view))return;if(session&&view!=='learn'){stopClock();if(q&&!q.completed&&q.attempts.length)persistQuestion();}tab=view;renderParentNav(view);document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===view));wallet();({home,learn:renderLearn,shop,parent:renderParent,bank:renderBank,curve:renderCurve,rewards:renderRewards,chapters:renderChapters})[view]();}
function home(){const cards=safeCollection();$('#main').innerHTML='<section class="hero"><div><div class="eyebrow">SONGZI’S SECRET GARDEN</div><h1>小松子，<br>欢迎回到你的花园！</h1><p>植物伙伴正在等你。去冒险里帮助它们收集阳光，再带新的伙伴回家吧。</p><div class="actions"><button class="primary" id="start">✦ '+(session?'继续冒险':'出发去冒险')+'</button><button class="secondary" id="map">选择冒险关卡</button></div></div><div class="garden"><div class="plant">🌻<small>花园向导</small></div><div class="plant '+(cards.length?'':'empty')+'">🌱<small>'+cards.length+' / 8 伙伴</small></div><div class="plant">🌰<small>森林守卫</small></div></div></section><div class="grid"><div class="tile"><div class="icon">🌱</div><h3>照顾你的花园</h3><p>每一位新伙伴，都能让花园更热闹。</p></div><div class="tile"><div class="icon">☀</div><h3>帮助伙伴，收集阳光</h3><p>慢慢想，认真完成任务，就能收获阳光。</p></div><div class="tile"><div class="icon">✦</div><h3>发现新伙伴</h3><p>攒够200阳光币，可以打开一包植物卡。</p><button class="secondary" id="gardenCards">去抽卡</button></div></div><section class="panel"><h2>我的植物伙伴</h2><p>森林守卫 · 已收集 '+cards.length+' / 8 位伙伴</p><div class="progress"><span style="width:'+cards.length/8*100+'%"></span></div><p>遇到不会的题也没关系，让向日葵帮助你。</p></section>';$('#start').onclick=()=>{if(!session)startSession('adaptive');else go('learn')};$('#map').onclick=()=>go('learn');$('#gardenCards').onclick=()=>go('shop')}
function renderLearn(){if(session){renderQuestion();return}$('#main').innerHTML='<div class="eyebrow">CHOOSE YOUR ADVENTURE</div><h1>今天，去哪里冒险？</h1><p>选一片花园，帮助那里的植物伙伴。走过的路，也可以再走一次。</p><div class="actions"><button class="primary" id="adaptive">✦ 今日花园任务</button><button class="secondary" id="basic">松果练习场</button></div><div class="grid">'+M.UNITS.map(u=>{const enabled=u.topics.every(t=>db.profile.topics.includes(t)),completed=db.sessions.filter(s=>s.unit===u.id&&s.status==='completed').length;return '<div class="tile"><div class="eyebrow">'+escapeHTML(u.title)+'</div><h3 style="margin-top:12px">'+escapeHTML(u.world)+'</h3><p>'+escapeHTML(u.skills.replaceAll('（首版题型）',''))+'</p><span class="tag">'+(enabled?(completed?'✦ 已完成 '+completed+' 次':'等待你的探索'):'🔒 这片花园还在准备中')+'</span>'+(enabled?'<div class="actions"><button class="secondary" data-unit="'+u.id+'">'+(completed?'再去冒险':'进入花园')+'</button></div>':'')+'</div>'}).join('')+'</div>';$('#adaptive').onclick=()=>startSession('adaptive');$('#basic').onclick=()=>startSession('ten');document.querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>startSession(b.dataset.unit))}
function startSession(unit){if(session){go('learn');return}const u=M.UNITS.find(x=>x.id===unit),topics=unit==='ten'?['ten']:u&&u.id!=='review'?u.topics:db.profile.topics;if(!parentUnlocked&&topics.some(t=>!db.profile.topics.includes(t))){notify('这片花园还在准备中，请家长先开启。');return}if(!topics.some(t=>M.availableBank(db,t).length)){notify('本范围题型已全部暂停，请先在全部题库里放行。');return}session={id:'s-'+Date.now(),unit,title:unit==='adaptive'?'今日花园任务':unit==='ten'?'松果基础训练':u?.title||'整册回顾',topics:[...topics],preview:topics.some(t=>!db.profile.topics.includes(t)),target:db.profile.questionCount,questionIds:[],status:'active',startedAt:new Date().toISOString()};db.sessions.push(session);save();nextQuestion();go('learn')}
function pauseClock(){if(activeSince){activeAccum+=Date.now()-activeSince;activeSince=0}}function startClock(){if(!document.hidden&&q&&!q.completed&&!activeSince)activeSince=Date.now()}function stopClock(){pauseClock()}function elapsed(){return Math.round(activeAccum+(activeSince?Date.now()-activeSince:0))}document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseClock();else if(tab==='learn')startClock()});
function sessionRows(){return session.questionIds.map(id=>db.questions.find(q=>q.id===id)).filter(Boolean)}
function nextQuestion(){const rows=sessionRows();if(rows.length>=session.target){finishSession();return}const scoped={...db,profile:{...db.profile,topics:session.topics}},n=M.choose(scoped,rows.length,rows);q={...n,sessionId:session.id,unitId:session.unit,preview:session.preview};activeSince=0;activeAccum=0;startClock()}
function persistQuestion(){if(!q)return;const i=db.questions.findIndex(x=>x.id===q.id);if(i<0)db.questions.push(q);else db.questions[i]=q;save()}
function renderQuestion(){if(!q){renderLearn();return}const n=session.questionIds.length-(q.completed?1:0);$('#main').innerHTML='<div class="quest-top"><div><div class="eyebrow">'+escapeHTML(session.title)+'</div><h2 style="margin-top:10px">守护花园的第 '+(n+1)+' 个任务</h2></div><span class="pill">'+'完成每题 +5 ☀'+'</span></div><div class="route">'+Array.from({length:session.target},(_,i)=>'<span class="'+(i<n?'done':i===n?'active':'')+'">'+(i<n?'✓':i+1)+'</span>').join('')+'</div><div class="question"><span class="tag">'+escapeHTML(M.TOPICS[q.topic].name)+'</span><span class="tag">'+escapeHTML(q.source)+'</span>'+(q.level?'<span class="tag">'+M.LEVEL_NAMES[q.level]+'</span>':'')+(session.preview?'<span class="tag">未学单元预览</span>':'')+'<h2>'+escapeHTML(q.text)+'</h2>'+(q.diagram||'')+'<form id="answerForm"><div class="answerline"><input id="answer" inputmode="decimal" autocomplete="off" aria-label="填写答案" '+(q.completed?'disabled':'')+'><span>'+escapeHTML(q.unit)+'</span></div><label class="check"><input type="checkbox" id="checked" '+(q.checked?'checked':'')+'> 我检查了一遍题目和答案（可选）</label><div class="actions"><button class="primary" type="submit" '+(q.completed?'disabled':'')+'>确认提交</button><button class="secondary" type="button" id="hint">请植物提示一下</button></div></form><div id="feedback" aria-live="polite"></div><div id="hintArea"></div><div id="methodArea"></div></div><div class="actions"><button class="secondary" id="leaveQuest">保存进度，回花园</button><button class="secondary" id="endQuest">结束本次冒险</button></div><p class="small" style="text-align:center">不用抢答，没有时间限制。想一想，再提交。</p>';$('#answerForm').onsubmit=e=>{e.preventDefault();submit()};$('#hint').onclick=hint;$('#leaveQuest').onclick=()=>go('home');$('#endQuest').onclick=()=>{stopClock();persistQuestion();session.status='abandoned';session.endedAt=new Date().toISOString();session=null;q=null;save();go('home');notify('本次已作答记录保留，已获得阳光不会扣除。')};if(q.completed)showSuccess();else{startClock();$('#answer').focus();if(q.hintCount)renderHint()}}
function submit(){if(q.completed)return;const raw=$('#answer').value.trim();if(!/^(?:\d+)(?:\.\d+)?$/.test(raw)){notify('请填写一个数字答案。');return}const value=Number(raw);if(!Number.isFinite(value)||value>1000000){notify('请检查输入的数字。');return}const correct=Math.abs(value-q.answer)<1e-8;q.checked=$('#checked').checked;q.attempts.push({value,correct,activeMs:elapsed(),at:new Date().toISOString(),checked:q.checked,hintsBefore:q.hintCount});persistQuestion();if(correct){q.completed=true;q.completedAt=new Date().toISOString();q.activeMs=elapsed();stopClock();M.updateReview(db,q);if(!session.questionIds.includes(q.id))session.questionIds.push(q.id);credit(5,'完成数学任务',q.id);persistQuestion();showSuccess()}else{$('#feedback').innerHTML='<div class="feedback">先不急，答案还需要再想一想。'+(q.topic==='ten'?'可以想想拿走了几个，还剩几个。':'可以检查数量和运算顺序。')+'需要时，让植物给你一个提示。</div>';$('#answer').select();}}
function hint(){if(q.completed)return;q.hintCount++;persistQuestion();renderHint()}
function renderHint(){let visual='';if(q.visual){const v=q.visual,total=v.op==='-'?v.a:v.a+v.b;visual='<div class="dots">'+Array.from({length:total},(_,i)=>'<span class="dot '+(v.op==='-'&&i>=v.a-v.b?'removed':'')+'">'+(v.op==='-'&&i>=v.a-v.b?'×':'●')+'</span>').join('')+'</div>'}$('#hintArea').innerHTML='<div class="hintbox">🌻 '+escapeHTML(q.hint)+visual+'<div class="small">看过提示也能获得基础奖励。</div></div>'}
function showSuccess(){$('#answer').disabled=true;$('#answerForm button[type=submit]').disabled=true;$('#hint').disabled=true;$('#feedback').innerHTML='<div class="feedback">'+(q.attempts.length===1&&q.hintCount===0?'想清楚后完成了，植物获得了能量！':'你坚持想明白了，植物获得了能量！')+'<br><strong>'+' +5 ☀ 阳光币'+'</strong></div>';$('#methodArea').innerHTML='<p class="small">你刚才怎么想的？可以选，也可以直接继续。</p><div class="methods">'+['直接想出的','数一数','拆开计算','用逆运算检查','看图或提示','其他方法'].map(t=>'<button data-method="'+t+'" class="'+(q.method===t?'chosen':'')+'">'+t+'</button>').join('')+'</div><div class="actions"><button class="primary" id="next">'+(session.questionIds.length>=session.target?'收获本次奖励':'继续下个任务')+'</button></div>';document.querySelectorAll('[data-method]').forEach(b=>b.onclick=()=>{q.method=b.dataset.method;persistQuestion();document.querySelectorAll('[data-method]').forEach(x=>x.classList.toggle('chosen',x===b))});$('#next').onclick=()=>{q=null;nextQuestion();if(session)renderQuestion()}}
function finishSession(){if(!session)return;const finished=session;finished.status='completed';finished.endedAt=new Date().toISOString();credit(20,'完成整场冒险',finished.id);const rows=sessionRows(),st=M.stats(rows);session=null;q=null;stopClock();save();$('#main').innerHTML='<section class="hero"><div><div class="eyebrow">MISSION COMPLETE</div><h1>花园又恢复了一点生机！</h1><p>你完成了 '+rows.length+' 个任务，伙伴们已经收到你的帮助。</p><div class="reward">☀ +'+(rows.filter(q=>q.completed).length*5+20)+'</div><p>其中每题奖励 '+rows.filter(q=>q.completed).length*5+'，整场奖励 20，已全部计入余额。</p><div class="actions"><button class="primary" id="rewardShop">去植物补给站</button><button class="secondary" id="rewardHome">回花园休息</button></div></div><div class="garden"><div class="plant">🌻<small>谢谢小松子</small></div><div class="plant">🌱<small>慢慢想也很棒</small></div></div></section><div class="panel"><h2>今天的探索</h2><p>首次答对 '+st.first+' 题 · 改正后完成 '+st.corrected+' 题 · 使用提示 '+st.hinted+' 题。</p><p>每一题的首次答案、后续尝试和方法选择，已进入家长观察站。</p></div>';$('#rewardShop').onclick=()=>go('shop');$('#rewardHome').onclick=()=>go('home')}
function shop(){const c=safeCollection();$('#main').innerHTML='<section class="hero"><div><div class="eyebrow">FOREST GUARD / VOL.01</div><h1>把新伙伴，带回花园。</h1><p>每包有3张植物卡和1项补给奖励。重复的伙伴也会带来叶片与新外观。</p><div class="reward" style="font-size:32px">200 ☀ / 包</div><div class="actions"><button class="primary" id="buyPack" '+(db.wallet.sun<RewardEngine.CONFIG.pack.price?'disabled':'')+'>兑换一包 · 200 阳光币</button><button class="secondary" id="seeCards">查看收藏册</button></div><p class="small">当前 '+db.wallet.sun+' 阳光币'+(db.wallet.sun<RewardEngine.CONFIG.pack.price?' · 再获得 '+(RewardEngine.CONFIG.pack.price-db.wallet.sun)+' 即可兑换':' · 可以兑换')+'</p></div><div class="garden"><div class="plant">🌱<small>'+c.length+' / 8 已收集</small></div><div class="plant">🌻<small>森林守卫</small></div></div></section><div class="notice">完成冒险收集阳光，就能迎接新伙伴。没有时间限制，按自己的节奏来。</div>';$('#buyPack').onclick=()=>openCards('buy');$('#seeCards').onclick=()=>openCards('album');const waiting=db.packs.filter(p=>p.status==='available').length;if(waiting){const button=document.createElement('button');button.className='secondary';button.textContent='继续开启已兑换的 '+waiting+' 包';button.onclick=()=>openCards('packs');$('#buyPack').parentNode.appendChild(button)}}
function openCards(mode){if(mode==='buy'&&db.wallet.sun<RewardEngine.CONFIG.pack.price){notify('阳光币还不够，先去完成花园任务。');return}frameMode=mode;$('#cardOverlay').hidden=false;$('#cardStatus').textContent='正在准备卡牌页面；尚未扣币。';if(!frameInitialized){$('#cardFrame').srcdoc=makeCardDocument();frameInitialized=true}else if(frameReady)sendToCards();}
function sendToCards(){if(!frameReady)return;if(frameMode==='buy'){if(db.wallet.sun<RewardEngine.CONFIG.pack.price)return;const id='pack-'+profileStore.activeId()+'-'+Date.now()+'-'+Math.random().toString(36).slice(2);grantPending={id,status:'requested'};postToCards({type:'songzi:grantPack',id},'*')}else if(frameMode==='packs'){postToCards({type:'songzi:showPacks'},'*');$('#cardStatus').textContent='继续开启已兑换的补给 · 不会再次扣币'}else{postToCards({type:'songzi:showAlbum'},'*');$('#cardStatus').textContent='我的植物收藏 · 可放大鉴赏'}}
window.addEventListener('message',e=>{if(!acceptsCardMessage(e))return;const m=e.data;if(m.type==='songzi:ready'){frameReady=true;postToCards({type:'songzi:restore',rewardSnapshot:RewardEngine.snapshot(db),owned:safeCollection(),packs:db.packs.filter(x=>x.status==='available').map(x=>x.id)},'*');sendToCards()}if(m.type==='songzi:grantReady'&&grantPending?.id===m.id&&grantPending.status==='requested'){if(db.wallet.sun<RewardEngine.CONFIG.pack.price)return;grantPending.status='paid';db.wallet.sun-=RewardEngine.CONFIG.pack.price;db.ledger.push({at:new Date().toISOString(),amount:-RewardEngine.CONFIG.pack.price,reason:'兑换森林守卫卡包',ref:m.id});db.packs.push({id:m.id,at:new Date().toISOString(),status:'available',cards:[]});if(!save()){db.wallet.sun+=RewardEngine.CONFIG.pack.price;db.packs=db.packs.filter(p=>p.id!==m.id);db.ledger=db.ledger.filter(tx=>tx.ref!==m.id);grantPending.status='failed';wallet();notify('无法保存存档，本次兑换已取消，没有扣币。');return}wallet();postToCards({type:'songzi:confirmPack',id:m.id},'*');$('#cardStatus').textContent='已兑换 1 包 · 已扣 200 阳光币 · 左侧选包后再点击开启'}});
$('#closeCards').onclick=()=>{$('#cardOverlay').hidden=true;if(tab==='shop')shop();wallet()};
function download(name,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)}
function rowsFor(days=parentDays){return db.questions.filter(q=>q.attempts.length&&!q.preview&&(days===0||Date.parse(q.createdAt)>=Date.now()-days*864e5))}
function reportText(days){const rows=rowsFor(days),s=M.stats(rows),ts=Object.entries(M.TOPICS).map(([id,t])=>({id,name:t.name,...M.stats(rows.filter(q=>q.topic===id))})).filter(t=>t.n);return '# 小松子学习观察报告\n\n生成时间：'+fmt(Date.now())+'（香港时间）\n观察范围：'+(days?days+'天':'全部')+'\n教材：'+db.profile.textbook+'\n当前单元：'+db.profile.unit+'\n\n已作答 '+s.n+' 题；首次答对 '+s.first+' 题；改正后完成 '+s.corrected+' 题；使用提示 '+s.hinted+' 题。\n\n'+ts.map(t=>'- '+t.name+'：'+t.n+'题，独立首答正确率 '+Math.round(t.rate*100)+'%'+(t.n<5?'（样本较少）':'')).join('\n')+'\n\n观察：\n'+M.observations(rows).map(x=>'- '+x).join('\n')+'\n\n后续安排：优先已到期的复习点；首次答错或使用提示的题，次日再查；跨日独立首答正确后逐步延长到3、7、14天。不能据单次反应判断孩子的能力或原因。\n\n数据只来自实际记录，没有虚构样本。未学单元预览和基础营地均有单独题目标签。\n';}
function renderParent(){if(!parentUnlocked){openParentGate('parent');return}const rows=rowsFor(),s=M.stats(rows),ts=Object.entries(M.TOPICS).map(([id,t])=>({id,name:t.name,...M.stats(rows.filter(q=>q.topic===id))})).filter(t=>t.n),wrong=Object.values(db.reviews).sort((a,b)=>Date.parse(a.dueAt)-Date.parse(b.dueAt)),last=db.sessions.filter(s=>s.status==='completed').at(-1);$('#main').innerHTML='<div class="eyebrow">PARENT OBSERVATORY / LOCAL RECORDS</div><h1>家长观察站</h1><p>已进入家长区。首次答案和订正分开分析；用时只是参考，不据此给孩子贴标签。家长锁用于本机防止误入，学习记录未加密。</p><div class="actions"><select id="range" style="width:150px;margin:0"><option value="7">最近7天</option><option value="30">最近30天</option><option value="0">全部记录</option></select><button class="secondary" id="report">导出观察报告</button><button class="secondary" id="backup">导出完整备份</button><button class="secondary" id="csv">导出作答明细</button><button class="secondary" id="import">导入备份</button></div><div class="data-grid"><div class="metric"><b>'+s.n+'</b><span>已作答题目数（含未完成）</span></div><div class="metric"><b>'+(s.n?Math.round(s.rate*100)+'%':'—')+'</b><span>独立首答正确率 / '+s.first+' 题</span></div><div class="metric"><b>'+s.corrected+'</b><span>再次思考后完成题数</span></div><div class="metric"><b>'+s.hinted+'</b><span>曾使用提示的题数</span></div></div><div class="two-col"><section class="panel" style="margin-top:0"><h2>本期观察</h2>'+M.observations(rows).map(t=>'<p>• '+escapeHTML(t)+'</p>').join('')+'<p class="small">独立首答排除提交前的数学提示；提示后首提正确单列。最终完成不等于已经熟练掌握。</p><div class="notice">家长提供的观察：'+escapeHTML(db.profile.observation)+'<br>此观察未计入作答统计。</div></section><section class="panel" style="margin-top:0"><h2>学习提醒</h2><p>已到期复习点：'+due().length+' 个。</p><p>上次完成：'+(last?escapeHTML(fmt(last.endedAt)):'暂无完成记录')+'</p><p>页面打开时显示复习和间隔提醒。当前没有后台推送、定时通知或跨设备同步。</p><p class="small">当前共 '+db.sessions.length+' 场记录，其中 '+db.sessions.filter(x=>x.status==='abandoned').length+' 场主动结束。'+(storageOK?'本地保存正常。':'当前临时模式，请导出。')+'</p></section></div><section class="panel"><h2>知识点观察</h2>'+(ts.length?ts.map(t=>'<div class="chart-row"><span style="width:100px">'+escapeHTML(t.name)+'</span><div class="chart-bar"><span style="width:'+t.rate*100+'%"></span></div><span>'+Math.round(t.rate*100)+'%</span></div><p class="small">'+t.n+'题 / 提示'+t.hinted+'题'+(t.n<5?' · 样本少，仅作观察':'')+'</p>').join(''):'<div class="empty">开始真实作答后，这里会形成知识点记录。</div>')+'</section><section class="panel"><h2>错题与间隔复习</h2><p class="small">首次出错或借助提示后进入复习；同日重复答对不等同跨日掌握。到期题只在对应已学范围内进入自适应出题。</p><div class="table-scroll"><table><thead><tr><th>知识点 / 题目</th><th>下次复习</th><th>跨日独立成功次数</th><th>最近结果</th></tr></thead><tbody>'+(wrong.length?wrong.map(v=>{const orig=db.questions.find(q=>q.fact===v.fact);return '<tr><td>'+escapeHTML(M.TOPICS[v.topic]?.name)+'<br>'+escapeHTML(orig?.text||v.fact)+'</td><td>'+escapeHTML(fmt(v.dueAt))+'</td><td>'+v.streak+'</td><td>'+escapeHTML(v.lastOutcome)+'</td></tr>'}).join(''):'<tr><td colspan="4">暂无复习点，等待实际作答。</td></tr>')+'</tbody></table></div></section><section class="panel"><h2>作答过程明细</h2><p class="small">记录答案序列、提示、方法自述与提交前检查。用时排除了页面隐藏的时间，但仍可能含走神等时间，不能当成纯计算速度。</p>'+rows.slice(-40).reverse().map(q=>'<details><summary>'+escapeHTML(fmt(q.createdAt))+' · '+escapeHTML(q.text)+' · '+(M.independentFirst(q)?'独立首答正确':q.attempts[0].correct?'提示后首提正确':'首答未对')+(q.preview?' · 未学预览':'')+'</summary><p>答案：'+q.attempts.map(a=>escapeHTML(a.value)+(a.correct?' ✓':' ×')+'（'+(a.activeMs/1000).toFixed(1)+'秒）').join(' → ')+'；正确答案 '+q.answer+'</p><p>提示 '+q.hintCount+' 次；方法：'+escapeHTML(q.method)+'；提交前检查：'+(q.checked?'有勾选':'未勾选')+'；来源：'+escapeHTML(q.source)+'</p></details>').join('')+(!rows.length?'<div class="empty">还没有真实作答。</div>':'')+'</section><section class="panel"><h2>教材与已学范围设置</h2><p>教材已根据照片登记；本轮提供的实书目录已核对，并补入三个实践主题。当前单元仍需你指定。黄冈小状元只记为练习参考，不默认其题目和当前教材完全一致。</p><div class="two-col"><div><label class="field">教材版本<input type="text" id="textbook" value="'+escapeHTML(db.profile.textbook)+'"></label><label class="field">当前单元 / 页码<input type="text" id="unit" value="'+escapeHTML(db.profile.unit)+'"></label><label class="field">每次任务数<select id="qcount">'+[8,10,12].map(n=>'<option value="'+n+'">'+n+' 题</option>').join('')+'</select></label><label class="field">间隔提醒<select id="reminder">'+[1,2,3,5,7].map(n=>'<option value="'+n+'">上次完成后 '+n+' 天，页面内提醒</option>').join('')+'</select></label><p>'+escapeHTML(db.profile.supplement||'')+'</p></div><div>'+Object.entries(M.TOPICS).filter(([id])=>id!=='time').map(([id,t])=>'<label class="topic-check"><input type="checkbox" name="topic" value="'+id+'" '+(db.profile.topics.includes(id)?'checked':'')+'><span>'+escapeHTML(t.name)+'<small>'+escapeHTML(t.stage)+' · '+escapeHTML(t.example)+'</small></span></label>').join('')+'</div></div><button class="primary" id="saveSettings">保存学习范围</button></section><div class="source">课程依据：<a href="https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html" target="_blank" rel="noreferrer">教育部义务教育课程标准（2022年版）</a>。<br>单元目录以家长提供的实书照片为准；网络交叉参考：<a href="https://keben.szxuexiao.com/bsd3njsuxues2024.html" target="_blank" rel="noreferrer">北师大版新版三上目录</a>（第三方整理，实书目录已核对）。<br>原型代表性题型由规则生成并验算，非黄冈小状元原题库；不宣称现阶段已覆盖整册每节课和所有考试题型。</div>';$('#range').value=parentDays;$('#range').onchange=e=>{parentDays=+e.target.value;renderParent()};$('#qcount').value=db.profile.questionCount;$('#reminder').value=db.profile.reminderDays;$('#saveSettings').onclick=()=>{const topics=[...document.querySelectorAll('[name=topic]:checked')].map(x=>x.value);if(!topics.length){notify('请至少选择一个已学知识点。');return}db.profile.textbook=$('#textbook').value.trim()||db.profile.textbook;db.profile.unit=$('#unit').value.trim()||'当前单元待确认';db.profile.questionCount=+$('#qcount').value;db.profile.reminderDays=+$('#reminder').value;db.profile.topics=topics;save();notify('已保存。新冒险使用新范围，当前冒险保持原设置。')};$('#report').onclick=()=>download('小松子学习观察-'+M.localDay()+'.md',reportText(parentDays),'text/markdown;charset=utf-8');$('#backup').onclick=()=>download('小松子完整学习备份-'+M.localDay()+'.json',JSON.stringify(db,null,2),'application/json');$('#csv').onclick=()=>{const quote=s=>'"'+String(s??'').replaceAll('"','""')+'"';const lines=[['时间','题目','知识点','正确答案','第几次尝试','提交答案','是否正确','有效页面秒数','提示已用次数','方法自述','预览单元']];for(const q of rows)q.attempts.forEach((a,i)=>lines.push([a.at,q.text,M.TOPICS[q.topic].name,q.answer,i+1,a.value,a.correct,a.activeMs/1000,a.hintsBefore,q.method,q.preview]));download('小松子作答明细-'+M.localDay()+'.csv','\ufeff'+lines.map(l=>l.map(quote).join(',')).join('\r\n'),'text/csv;charset=utf-8')};$('#import').onclick=()=>$('#importFile').click();}
$('#importFile').onchange=async e=>{if(!parentUnlocked){openParentGate('parent');return}const file=e.target.files[0];e.target.value='';if(!file)return;if(file.size>20e6){notify('备份文件超过20MB，请检查。');return}try{const incoming=M.prepareSave(JSON.parse(await file.text()));if(incoming.testOnly&&!isTesting()){notify('这是测试存档，不能覆盖正式记录。');return}if(!parentUnlocked)return;if(!confirm('导入将替换本浏览器的学习记录。建议先导出当前备份。确定导入吗？'))return;db=incoming;session=null;q=null;storageOK=true;save();wallet();renderParent();notify('已导入学习记录。')}catch{notify('导入失败：备份格式或数据不正确。')}};
document.querySelectorAll('#nav button').forEach(b=>b.onclick=()=>go(b.dataset.view));window.addEventListener('beforeunload',()=>{if(session){session.status='interrupted';session.endedAt=new Date().toISOString();if(q&&q.attempts.length)persistQuestion();save()}});for(const s of db.sessions)if(s.status==='active')s.status='interrupted';initParentGate();wallet();go('home');

let bankFilters={topic:'all',level:'all',status:'all',keyword:'',page:0},bankExample=0;
function bankReview(id){return db.bankReview?.[id]||{status:'pending',note:''}}
function bankRows(){return M.BANK.filter(e=>(bankFilters.topic==='all'||e.topic===bankFilters.topic)&&(bankFilters.level==='all'||e.level===+bankFilters.level)&&(bankFilters.status==='all'||bankReview(e.id).status===bankFilters.status)&&(!bankFilters.keyword||(M.TOPICS[e.topic].name+' '+e.name+' '+e.id).includes(bankFilters.keyword)))}
function bankSample(entry,number=bankExample){return M.generateBank(entry,M.seeded(entry.id+':example:'+number))}
function renderBank(){if(!parentUnlocked){openParentGate('bank');return}const rows=bankRows(),pageSize=12,pages=Math.max(1,Math.ceil(rows.length/pageSize));bankFilters.page=Math.min(bankFilters.page,pages-1);const list=rows.slice(bankFilters.page*pageSize,(bankFilters.page+1)*pageSize);$('#main').innerHTML='<div class="eyebrow">PARENT QUESTION BANK / AUDIT MODE</div><h1>全部题库 · 家长审阅</h1><p>这里列出实际参与出题的全部 <b>'+M.BANK.length+'</b> 个“题型 × 难度”配置。每种配置可生成多组题，不把无限变化的数字题谎称为有限题目总数。审阅不计成绩、不发奖励。</p><div class="notice">旧版粗略模板已退出新题生成，历史作答仍保留。每题标注难度、题型编号、答案、提示和审核状态。“未审核”仅代表尚未由你逐项确认，不代表题目已经通过教学审定。单元是否已学仍在家长观察站设置。</div><section class="panel"><div class="two-col"><label class="field">知识点<select id="bankTopic"><option value="all">全部知识点（含未启用扩展项）</option>'+Object.entries(M.TOPICS).map(([id,t])=>'<option value="'+id+'">'+escapeHTML(t.name)+(id==='time'?' · 扩展项，非默认范围':'')+'</option>').join('')+'</select></label><label class="field">难度<select id="bankLevel"><option value="all">全部四层</option>'+[1,2,3,4].map(l=>'<option value="'+l+'">L'+l+' · '+M.LEVEL_NAMES[l]+'</option>').join('')+'</select></label><label class="field">审核状态<select id="bankStatus"><option value="all">全部状态</option><option value="pending">未审核</option><option value="approved">已认可</option><option value="revise">需修改</option><option value="disabled">已停用</option></select></label><label class="field">搜索题型名称 / 编号<input type="text" id="bankKeyword" value="'+escapeHTML(bankFilters.keyword)+'"></label></div><div class="actions"><button class="primary" id="bankFilter">筛选</button><button class="secondary" id="bankNextExamples">换一组示例</button><button class="secondary" id="bankExport">导出全部题型与示例</button><button class="secondary" id="bankCurve">查看难度规则</button></div><p class="small">本次筛选 '+rows.length+' 个配置；第 '+(bankFilters.page+1)+' / '+pages+' 页。示例组 '+(bankExample+1)+'，可重复生成用于核对。</p></section><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">'+list.map(e=>{const q=bankSample(e),review=bankReview(e.id);return '<article class="tile" style="background:#fff6df;color:#29472f"><span class="tag" style="color:#47623a;border-color:#b7c38d">L'+e.level+' · '+M.LEVEL_NAMES[e.level]+'</span><h3 style="margin-top:10px">'+escapeHTML(M.TOPICS[e.topic].name)+' / '+escapeHTML(e.name)+'</h3><p style="font-size:10px;color:#7a8664">'+e.id+'</p><p style="color:#567047">'+escapeHTML(e.goal)+'</p><div style="font-size:18px;font-weight:800;line-height:1.8;margin:15px 0">'+escapeHTML(q.text)+'</div>'+(q.diagram||'')+'<details open><summary style="color:#42643b">答案与教学提示</summary><p style="color:#42643b"><b>答案：'+q.answer+' '+escapeHTML(q.unit)+'</b></p><p style="color:#647b4f">'+escapeHTML(q.hint)+'</p>'+(q.learningSupport?.stages||[]).map(part=>'<details><summary>'+escapeHTML(part.title)+'</summary><p>'+escapeHTML(part.message)+'</p>'+(part.diagram||'')+(part.task?'<p>小步：'+escapeHTML(part.task.text)+'；答案 '+part.task.answer+'</p>':'')+'</details>').join('')+'</details><label class="field" style="color:#456139">审核<select data-review="'+e.id+'"><option value="pending" '+(review.status==='pending'?'selected':'')+'>未审核</option><option value="approved" '+(review.status==='approved'?'selected':'')+'>已认可</option><option value="revise" '+(review.status==='revise'?'selected':'')+'>需修改 · 暂停出题</option><option value="disabled" '+(review.status==='disabled'?'selected':'')+'>停用</option></select></label><label class="field" style="color:#456139">修改意见<input type="text" data-note="'+e.id+'" value="'+escapeHTML(review.note)+'" placeholder="例如：题干不清楚、范围不符、难度不足" maxlength="500"></label></article>'}).join('')+'</div><div class="actions"><button class="secondary" id="bankPrev" '+(bankFilters.page===0?'disabled':'')+'>上一页</button><span class="pill">'+(bankFilters.page+1)+' / '+pages+'</span><button class="secondary" id="bankNext" '+(bankFilters.page>=pages-1?'disabled':'')+'>下一页</button></div>';$('#bankTopic').value=bankFilters.topic;$('#bankLevel').value=bankFilters.level;$('#bankStatus').value=bankFilters.status;$('#bankFilter').onclick=()=>{bankFilters={topic:$('#bankTopic').value,level:$('#bankLevel').value,status:$('#bankStatus').value,keyword:$('#bankKeyword').value.trim(),page:0};renderBank()};$('#bankNextExamples').onclick=()=>{bankExample++;renderBank()};$('#bankPrev').onclick=()=>{bankFilters.page--;renderBank()};$('#bankNext').onclick=()=>{bankFilters.page++;renderBank()};$('#bankCurve').onclick=()=>go('curve');$('#bankExport').onclick=()=>download('小松子全部分层题库-'+M.localDay()+'.json',JSON.stringify({version:2,at:new Date().toISOString(),note:'生成式题库的全部配置与固定示例，不是所有数字组合的穷举。',templates:M.BANK.map(e=>({...e,review:bankReview(e.id),examples:[0,1,2].map(k=>bankSample(e,k))}))},null,2),'application/json');document.querySelectorAll('[data-review]').forEach(el=>el.onchange=()=>{db.bankReview??={};const id=el.dataset.review;db.bankReview[id]={...bankReview(id),status:el.value,at:new Date().toISOString()};save();notify(el.value==='revise'||el.value==='disabled'?'该题型难度配置已停止进入新任务。':'审核状态已保存。')});document.querySelectorAll('[data-note]').forEach(el=>el.onchange=()=>{db.bankReview??={};const id=el.dataset.note;db.bankReview[id]={...bankReview(id),note:el.value.trim(),at:new Date().toISOString()};save()})}
function renderCurve(){if(!parentUnlocked){openParentGate('curve');return}const current=Object.keys(M.TOPICS).map(t=>{const state=M.difficultyState(db,t),ev=M.difficultyEvidence(db,t);return '<tr><td>'+escapeHTML(M.TOPICS[t].name)+'</td><td>L'+state.level+' · '+M.LEVEL_NAMES[state.level]+'</td><td>'+ev.recent.length+'题 / 独立首答正确 '+ev.success+'题</td><td>'+escapeHTML(state.events.at(-1)?.reason||'尚未调级；基础计算从L1，其他从L2试探')+'</td></tr>'}).join('');save();$('#main').innerHTML='<div class="eyebrow">ADAPTIVE DIFFICULTY / TRANSPARENT RULES</div><h1>有台阶，也有回头路。</h1><p>按知识点分别维护等级，基础计算薄弱不会把所有三年级内容一起降级。只在已学范围内调节，不自动跨入未学单元，不用答题速度决定升降。</p><div class="grid">'+[1,2,3,4].map(l=>'<div class="tile"><span class="tag">L'+l+'</span><h3>'+M.LEVEL_NAMES[l]+'</h3><p>'+['','直接信息、单一关系，建立数量理解。','课内标准计算、进退位或同类关系。','两步情境、缺数和关系组织。','同一知识范围内的逆向、条件变化与解释。'][l]+'</p></div>').join('')+'</div><section class="panel"><h2>一场冒险的节奏</h2><p>第1题热身 → 中间以当前层练习、到期复习为主 → 近期已有4次独立成功时，第6题才尝试高一层 → 下一场重新以温和热身开始。样本不足时不硬塞挑战。</p><p>挑战题不会因失败额外扣奖励；使用提示、订正后完成照样得到基础奖励。</p></section><section class="panel"><h2>什么时候调整？</h2><p><b>升级：</b>最近最多8道当前层题至少有6题、覆盖至少4个不同题目，来自至少2次冒险；独立首答正确率不低于85%，一次只升一层。</p><p><b>回退支持：</b>当前层连续两题需要订正或提示，下次先退一层做支架练习；不显示失败惩罚。等级改变后重新积累证据，避免反复跳级。</p><p><b>不计升级证据：</b>未学预览、提示后的正确、旧版题目、原题重复复习；不会把“最后做对了”直接当成熟练。</p><div class="notice">这些是本产品的首版启发式阈值，尚未经过儿童样本校准。85%是可调整的观察起点，不是已被证明适用于小松子的目标线，也不会故意制造15%的错误。</div></section><section class="panel"><h2>目前各知识点等级</h2><div class="table-scroll"><table><tr><th>知识点</th><th>当前等级</th><th>当前层证据</th><th>最近调节理由</th></tr>'+current+'</table></div></section><section class="panel"><h2>参考机制</h2><p><a class="link" href="https://www.khanacademy.org/khan-for-educators/resources/teacher-essentials/safety-privacy-and-additional-resources/a/mastery-challenges-course-mastery" target="_blank" rel="noreferrer">Khan Academy 掌握度挑战</a>：借鉴掌握度、再次验证和间隔复习。</p><p><a class="link" href="https://www.aleks.com/about_aleks/research_behind" target="_blank" rel="noreferrer">ALEKS 研究说明</a>：借鉴知识准备程度与知识点分别追踪的思路；这里没有复刻其知识空间算法。</p><p><a class="link" href="https://www.nature.com/articles/s41467-019-12552-4" target="_blank" rel="noreferrer">85%规则研究</a>主要讨论特定学习模型与任务，不能直接证明小学数学的最佳正确率。本版阈值属于设计选择。</p></section><div class="actions"><button class="primary" id="curveBank">检查全部题库</button><button class="secondary" id="curveParent">家长观察站</button></div>';$('#curveBank').onclick=()=>go('bank');$('#curveParent').onclick=()=>go('parent')}

RewardEngine.ensure(db);
safeCollection=function(){return Object.keys(RewardEngine.ensure(db).counts).filter(k=>db.rewardState.counts[k]>0&&RewardEngine.catalog[k]&&RewardEngine.catalog[k].collectible!==false&&!RewardEngine.catalog[k].legacy).map(Number)};
const oldRewardOpenCards=openCards;openCards=function(mode){if(frameReady)postToCards({type:'songzi:restore',rewardSnapshot:RewardEngine.snapshot(db),owned:safeCollection(),packs:db.packs.filter(p=>p.status==='available').map(p=>p.id)},'*');oldRewardOpenCards(mode)};
window.addEventListener('message',e=>{if(!acceptsCardMessage(e)||e.data?.type!=='songzi:openRequest')return;const id=e.data.id;try{const original=db.packs.find(p=>p.id===id),before=original?JSON.parse(JSON.stringify(original)):null,previousState=JSON.parse(JSON.stringify(RewardEngine.ensure(db))),previousLeaves=db.wallet.leaves;const output=RewardEngine.open(db,id);if(!save()){db.rewardState=previousState;db.wallet.leaves=previousLeaves;if(original&&before){for(const key of Object.keys(original))delete original[key];Object.assign(original,before);}wallet();throw Error('存档未能保存，本次开包已取消，请先检查存储。');}wallet();postToCards({type:'songzi:rewardResult',id,result:output.result,snapshot:output.snapshot},'*');$('#cardStatus').textContent=(output.result.forced?'SSR保底已触发 · ':'')+'本包奖励已保存';}catch(error){postToCards({type:'songzi:rewardError',id},'*');notify(error.message||'暂时无法开启卡包')}});
function rewardProgressHTML(){const s=RewardEngine.ensure(db),p=s.pools.forest;return '<section class="panel"><h2>森林收藏的成长</h2><div class="grid"><div class="tile"><h3>SSR 收集进度</h3><p>连续 '+p.misses+' 包未遇到SSR。最多再 '+(5-p.misses)+' 包，高稀有位置必有一张SSR。</p><p class="small">普通包高稀有位置：SR 80% / SSR 20%。无时间限制，进度一直保留。</p></div><div class="tile"><h3>✦ 吉祥物装扮：森林园丁向日葵</h3><p>'+(s.skin.unlocked?'皮肤已合成，吉祥物会自动换装。':'碎片 '+s.skin.fragments+' / '+s.skin.need+' · 满额自动合成')+'</p><div class="progress"><span style="width:'+Math.min(100,s.skin.fragments/s.skin.need*100)+'%"></span></div></div><div class="tile"><h3>❀ 森林花径</h3><p>'+(s.decoration.unlocked?'花径已铺好，回花园看看。':'碎片 '+s.decoration.fragments+' / '+s.decoration.need+' · 满额自动铺设')+'</p><div class="progress"><span style="width:'+Math.min(100,s.decoration.fragments/s.decoration.need*100)+'%"></span></div></div></div></section>';}
const baseRewardShop=shop;shop=function(){baseRewardShop();$('#main').insertAdjacentHTML('beforeend',rewardProgressHTML()+'<section class="panel"><h2>用叶片迎接指定伙伴</h2><p>重复R得到1叶片，SR得到3叶片，SSR得到10叶片。已经拥有的植物不用再次兑换。</p><div class="grid">'+RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy&&!db.rewardState.counts[c.id]).map(c=>{const cost={R:10,SR:30,SSR:80}[c.rarity];return '<div class="tile"><span class="tag">'+c.rarity+'</span><h3>'+c.name+'</h3><p>'+cost+' 叶片 / 指定获得</p><button class="secondary" data-exchange="'+c.id+'" '+(db.wallet.leaves<cost?'disabled':'')+'>迎接这位伙伴</button></div>'}).join('')+'</div></section>');document.querySelectorAll('[data-exchange]').forEach(b=>b.onclick=()=>{try{const prior=RewardEngine.snapshot(db),leaves=db.wallet.leaves,ledgerSize=db.ledger.length;RewardEngine.exchange(db,+b.dataset.exchange);if(!save()){db.rewardState=prior;db.wallet.leaves=leaves;db.ledger.length=ledgerSize;throw Error('未能保存，已取消本次兑换。');}wallet();notify('新伙伴已加入花园。');shop()}catch(error){notify(error.message)}})};
const baseRewardHome=home;home=function(){baseRewardHome();const s=RewardEngine.ensure(db),garden=$('.garden');if(garden){garden.classList.toggle('reward-flower-path',s.decoration.unlocked);garden.classList.toggle('reward-star-skin',s.skin.unlocked&&!!s.counts[3]);garden.classList.toggle('reward-ssr-aura',Object.values(s.effects).includes('aura'));}const milestones=[];if(s.skin.unlocked)milestones.push('✦ 森林园丁向日葵皮肤已合成');if(s.decoration.unlocked)milestones.push('❀ 森林花径已经铺开');if(Object.values(s.effects).includes('aura'))milestones.push('☀ 传说伙伴的光环正在照亮花园');if(milestones.length)$('#main').insertAdjacentHTML('beforeend','<section class="panel"><h2>花园的新变化</h2>'+milestones.map(m=>'<p>'+m+'</p>').join('')+'<p class="small">这些变化自动保留，不需要浇水、施肥或领取。</p></section>')};
function renderRewards(){if(!parentUnlocked){openParentGate('rewards');return}$('#main').innerHTML='<section class="panel"><h1>奖励配置载入中</h1></section>'}

const rewardStyle=document.createElement('style');rewardStyle.textContent='.garden.reward-flower-path:after{content:"❀　✿　❀　✿　❀";position:absolute;bottom:4px;left:15%;right:15%;text-align:center;background:#c1b378;color:#fff0ae;border:3px solid #7d9556;border-radius:50%;font-size:27px;height:30px;line-height:25px;box-shadow:0 2px 0 #394f30}.garden.reward-star-skin .plant:first-child{filter:drop-shadow(0 0 12px #ccacff) hue-rotate(25deg);text-shadow:0 0 20px #c3b6ff}.garden.reward-ssr-aura{box-shadow:inset 0 0 55px #ffe48b66,0 0 20px #edd18c44}.garden.reward-ssr-aura:before{color:#d1c16b99;text-shadow:0 0 18px #fff1b5}';document.head.appendChild(rewardStyle);
save();if(tab==='home')home();

function seedParentTrialPacks(){if(!testingMode||!db.testOnly||db.parentTrialPacksVersion===1)return;for(let n=0;n<10;n++){const id='parent-trial-v1-'+profileStore.activeId()+'-'+n;if(!db.packs.some(p=>p.id===id))db.packs.push({id,status:'available',poolId:'forest',source:'parent-test-default',at:new Date().toISOString(),cards:[]})}db.parentTrialPacksVersion=1;}
let testingMode=false,formalDB=null;const TEST_STORAGE_KEY='songzi-math-sandbox-v1',formalSave=save,normalWallet=wallet,normalParentNav=renderParentNav;
function isTesting(){return testingMode}
function testStorageKey(){return TEST_STORAGE_KEY+'-'+profileStore.activeId()}
save=function(){if(!testingMode)return formalSave();try{db.testOnly=true;localStorage.setItem(testStorageKey(),JSON.stringify(db));return true}catch{notify('测试存档未能保存；正式记录未受影响。');return false}};
wallet=function(){if(testingMode){db.wallet.sun=1000000000;db.wallet.leaves=1000000000;}normalWallet();if(testingMode){$('#sun').textContent='∞';$('#leaves').textContent='∞';}const flag=$('#testModeFlag');if(flag)flag.hidden=!testingMode;};
function resetCardSession(){cardFrameToken='';$('#cardOverlay').hidden=true;$('#cardFrame').srcdoc='';frameInitialized=false;frameReady=false;grantPending=null;frameMode='';}
function setTestingMode(enabled){if(!parentUnlocked){openParentGate('parent');return false}if(enabled===testingMode)return true;if(session){stopClock();if(q&&q.attempts.length)persistQuestion();if(!storageOK){notify('当前记录未保存，已停止切换测试模式。');return false}session.status='interrupted';session.endedAt=new Date().toISOString();if(!save()){notify('当前记录未保存，已停止切换测试模式。');return false}session=null;q=null;}resetCardSession();if(enabled){formalDB=JSON.parse(JSON.stringify(db));let sandbox;try{const stored=localStorage.getItem(testStorageKey());sandbox=stored?M.prepareSave(JSON.parse(stored)):null;}catch{}if(!sandbox){sandbox=M.blank();sandbox.profile={...JSON.parse(JSON.stringify(db.profile)),topics:[...new Set(M.UNITS.flatMap(u=>u.topics))]};sandbox.testOnly=true;}sandbox.profile.topics=[...new Set(M.UNITS.flatMap(u=>u.topics))];db=sandbox;testingMode=true;RewardEngine.ensure(db);seedParentTrialPacks();save();}else{save();db=formalDB;formalDB=null;testingMode=false;}wallet();go('parent');notify(enabled?'测试模式已开启：资源无限，现有关卡全部开放。':'已返回正式进度，测试结果未混入正式记录。');return true;}
renderParentNav=function(view){normalParentNav(view);if(parentUnlocked&&PARENT_ROUTES.has(view)){$('#parentNav').insertAdjacentHTML('beforeend','<label class="test-switch"><input type="checkbox" id="testModeToggle" '+(testingMode?'checked':'')+'>测试模式 <span>独立存档 · 资源无限 · 现有关卡全开</span></label>');$('#testModeToggle').onchange=e=>setTestingMode(e.target.checked)}};
wallet();

const SCENE_LEGACY_SUNFLOWER="<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"95\" r=\"75\" fill=\"#ffffff18\"/><path d=\"M100 170V115\" stroke=\"#3b6e30\" stroke-width=\"13\"/><path d=\"M96 170Q22 113 30 159Q52 192 96 182M99 171Q172 121 167 162Q145 190 99 182\" fill=\"#66ad38\" stroke=\"#173c2b\" stroke-width=\"5\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(0 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(36 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(72 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(108 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(144 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(180 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(216 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(252 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(288 100 95)\"/><ellipse cx=\"100\" cy=\"42\" rx=\"16\" ry=\"29\" fill=\"#ffcf57\" stroke=\"#73582b\" stroke-width=\"3\" transform=\"rotate(324 100 95)\"/><circle cx=\"100\" cy=\"95\" r=\"42\" fill=\"#9e672e\" stroke=\"#4e4727\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"94\" r=\"34\" fill=\"#f1b75a\"/><ellipse cx=\"84\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/><ellipse cx=\"114\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/><path d=\"M88 122q12 10 23-2\" fill=\"none\" stroke=\"#223d2b\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>";const SCENE_PLANTS=["<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:0\"/></svg>","<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"95\" r=\"74\" fill=\"#ffffff16\"/><path d=\"M10 185Q100 160 190 185\" fill=\"none\" stroke=\"#ffffff30\" stroke-width=\"2\"/><path d=\"M96 170Q22 113 30 159Q52 192 96 182M99 171Q172 121 167 162Q145 190 99 182\" fill=\"#66ad38\" stroke=\"#173c2b\" stroke-width=\"5\"/><path d=\"M77 167L63 184M125 168l15 16\" stroke=\"#183e45\" stroke-width=\"9\"/><path d=\"M48 102L65 55L104 37L145 59L157 105L132 155L72 157Z\" fill=\"#8bdcec\" stroke=\"#183e45\" stroke-width=\"5\"/><path d=\"M65 55L86 91L104 37L119 93L145 59M48 102L86 91L72 157L104 118L132 155L119 93L157 105\" fill=\"#bdffff55\" stroke=\"#d8ffff\" stroke-width=\"3\"/><ellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"9\" fill=\"#193e45\"/><ellipse cx=\"123\" cy=\"108\" rx=\"5\" ry=\"9\" fill=\"#193e45\"/><path d=\"M92 130q13 11 25-2\" fill=\"none\" stroke=\"#193e45\" stroke-width=\"4\"/><path d=\"M83 42L75 19L99 27L111 10L124 31L145 27L137 53\" fill=\"#d0ffff\" stroke=\"#183e45\" stroke-width=\"4\"/></svg>","<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"95\" r=\"74\" fill=\"#ffffff16\"/><path d=\"M10 185Q100 160 190 185\" fill=\"none\" stroke=\"#ffffff30\" stroke-width=\"2\"/><path d=\"M96 170Q22 113 30 159Q52 192 96 182M99 171Q172 121 167 162Q145 190 99 182\" fill=\"#66ad38\" stroke=\"#173c2b\" stroke-width=\"5\"/><path d=\"M61 140Q14 96 38 45Q76 70 81 112M135 139Q188 93 164 40Q124 68 119 113\" fill=\"#f59036\" stroke=\"#493129\" stroke-width=\"5\"/><path d=\"M54 112L47 75L75 102M144 111l13-38-31 28\" fill=\"#ffe38a\"/><path d=\"M80 174L83 135M123 172l-4-36\" stroke=\"#493129\" stroke-width=\"10\"/><path d=\"M72 143Q47 108 74 80L70 50L94 64Q133 46 149 80L137 123L152 146L119 143L102 158Z\" fill=\"#f9af48\" stroke=\"#493129\" stroke-width=\"5\"/><path d=\"M79 85L68 59L95 68M118 62l17-24 5 34\" fill=\"#ffdb81\" stroke=\"#493129\" stroke-width=\"4\"/><path d=\"M106 90l18-5\" stroke=\"#493129\" stroke-width=\"5\"/><circle cx=\"116\" cy=\"96\" r=\"5\" fill=\"#493129\"/><path d=\"M136 103l14 1-9 11\" fill=\"#493129\"/><path d=\"M71 129l-15 16 22-1\" fill=\"#ffcf69\" stroke=\"#493129\" stroke-width=\"4\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:1\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:2\"/></svg>","<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"95\" r=\"75\" fill=\"#ffffff18\"/><path d=\"M65 170L71 100H126L139 170Q99 190 65 170Z\" fill=\"#d6c8eb\" stroke=\"#3b3353\" stroke-width=\"5\"/><ellipse cx=\"84\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/><ellipse cx=\"114\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/><path d=\"M88 122q12 10 23-2\" fill=\"none\" stroke=\"#223d2b\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M30 100Q30 35 97 25Q164 29 174 99Q102 128 30 100Z\" fill=\"#7961bb\" stroke=\"#3b3353\" stroke-width=\"5\"/><path d=\"M42 92Q99 112 161 91\" fill=\"none\" stroke=\"#b899e3\" stroke-width=\"5\"/><circle cx=\"69\" cy=\"65\" r=\"10\" fill=\"#d2b2f0\"/><circle cx=\"130\" cy=\"65\" r=\"13\" fill=\"#d2b2f0\"/><path d=\"M101 40l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z\" fill=\"#fff1b3\"/></svg>","<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"95\" r=\"75\" fill=\"#ffffff18\"/><path d=\"M96 170Q22 113 30 159Q52 192 96 182M99 171Q172 121 167 162Q145 190 99 182\" fill=\"#66ad38\" stroke=\"#173c2b\" stroke-width=\"5\"/><path d=\"M76 173V62Q77 35 100 36Q125 35 126 62V173Z\" fill=\"#6faa61\" stroke=\"#284c32\" stroke-width=\"5\"/><path d=\"M78 124H50Q36 124 36 107V84Q37 74 48 74Q59 74 59 86V101H77M125 106H146V77Q146 63 157 63Q170 63 170 78V115Q170 130 125 130\" fill=\"#6faa61\" stroke=\"#284c32\" stroke-width=\"5\"/><path d=\"M89 51V91M89 130v27M113 52V90M113 134v23\" stroke=\"#a2d18a\" stroke-width=\"4\"/><ellipse cx=\"84\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/><ellipse cx=\"114\" cy=\"105\" rx=\"5\" ry=\"8\" fill=\"#223d2b\"/><path d=\"M88 122q12 10 23-2\" fill=\"none\" stroke=\"#223d2b\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M76 62l-12-6m61 13 12-8M36 95l-10-2m135-17 10-5m-45 81 10 4M76 144l-10 5\" stroke=\"#e3dfaa\" stroke-width=\"3\"/></svg>","<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"95\" r=\"75\" fill=\"#ffffff18\"/><path d=\"M68 96Q70 35 119 26Q147 53 145 102M119 26Q95 10 81 30Q97 42 119 26Z\" fill=\"none\" stroke=\"#547239\" stroke-width=\"7\"/><path d=\"M119 26Q148 7 164 35Q140 43 119 26Z\" fill=\"#9abb53\" stroke=\"#496237\" stroke-width=\"4\"/><circle cx=\"64\" cy=\"126\" r=\"40\" fill=\"#f1b73e\" stroke=\"#76502b\" stroke-width=\"5\"/><circle cx=\"139\" cy=\"127\" r=\"40\" fill=\"#f4c65a\" stroke=\"#76502b\" stroke-width=\"5\"/><path d=\"M38 115Q43 98 57 98M114 115Q120 100 133 101\" stroke=\"#fff0ad\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/><g fill=\"#61452b\"><ellipse cx=\"59\" cy=\"128\" rx=\"4\" ry=\"7\"/><ellipse cx=\"77\" cy=\"128\" rx=\"4\" ry=\"7\"/><ellipse cx=\"127\" cy=\"128\" rx=\"4\" ry=\"7\"/><ellipse cx=\"145\" cy=\"128\" rx=\"4\" ry=\"7\"/></g><path d=\"M58 143q9 7 17 0M127 143q9 7 17 0\" stroke=\"#61452b\" stroke-width=\"3\" fill=\"none\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:3\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:4\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:5\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:6\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:7\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:8\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:9\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:10\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:11\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-plant\" aria-hidden=\"true\"><image x=\"8\" y=\"5\" width=\"184\" height=\"190\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:12\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-costume\" aria-hidden=\"true\"><image x=\"7\" y=\"4\" width=\"186\" height=\"192\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:13\"/></svg>","<svg viewBox=\"0 0 200 200\" class=\"imported-costume\" aria-hidden=\"true\"><image x=\"7\" y=\"4\" width=\"186\" height=\"192\" preserveAspectRatio=\"xMidYMax meet\" href=\"songzi-raster:14\"/></svg>"].map(resolveGameArt);const SCENE_PACK=resolveGameArt("<svg viewBox=\"0 0 180 248\" aria-hidden=\"true\"><image width=\"180\" height=\"248\" preserveAspectRatio=\"xMidYMid meet\" href=\"songzi-raster:15\"/></svg>");
function mapPlantId(index){return [0,13,10,15,4,11,9,16,12,17,8,14,0][index]??0}
function fireflies(){return Array.from({length:12},(_,i)=>'<i class="world-fly" style="--x:'+(12+i*7)%90+'%;--y:'+(22+i*11)%70+'%;--d:'+i*.7+'s"></i>').join('')}
function gardenLandscape(count,s){return '<svg viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="gardenSky" x2="0" y2="1"><stop stop-color="#789e84"/><stop offset="1" stop-color="#d7deac"/></linearGradient><linearGradient id="gardenGrass" x2="0" y2="1"><stop stop-color="#9ab96a"/><stop offset="1" stop-color="#436e42"/></linearGradient><linearGradient id="roof" x2="0" y2="1"><stop stop-color="#b37542"/><stop offset="1" stop-color="#6c4d32"/></linearGradient></defs><rect width="1200" height="720" fill="url(#gardenSky)"/><circle cx="850" cy="150" r="86" fill="#f8ecc0" opacity=".8"/><path d="M0 280Q160 170 370 275Q620 150 820 250Q1030 170 1200 260V500H0" fill="#5b8562"/><path d="M0 300Q230 260 430 340Q750 240 1200 310V720H0" fill="url(#gardenGrass)"/><path d="M1200 465Q1000 390 884 451Q805 500 922 537Q1080 566 1200 507" fill="#6baba1" stroke="#829f6d" stroke-width="14"/><path d="M1200 465Q1000 415 900 461Q856 487 927 509Q1050 536 1190 493" fill="#a1ccc0" opacity=".6"/><g stroke="#466140" stroke-width="5"><path d="M88 270V455M129 260V445M170 250V435M211 245V429M251 250V432M98 316L255 297M97 353L255 335" fill="none" stroke="#b1b17a" stroke-width="12"/></g><g stroke="#3d5435" stroke-linejoin="round"><path d="M270 191L285 389L343 407L366 160" fill="#6e6440" stroke-width="9"/><path d="M235 254L426 240L429 386L234 393Z" fill="#b9ac72" stroke-width="5"/><path d="M216 258L329 157L452 246L429 271L329 204L238 280Z" fill="url(#roof)" stroke-width="5"/><path d="M263 389V308Q263 283 287 283Q311 284 311 309V389" fill="#5b6b43" stroke-width="5"/><circle cx="298" cy="340" r="4" fill="#efcc7d"/><rect x="339" y="289" width="54" height="55" rx="5" fill="#e6d397" stroke-width="5"/><path d="M366 289V344M339 316H393" fill="none" stroke-width="4"/><path d="M238 391L223 409L447 402L431 386Z" fill="#8b8050" stroke-width="4"/></g><path d="M290 406Q416 440 455 488Q498 535 650 552Q769 570 760 720H530Q638 610 494 586Q337 554 306 488Q286 446 236 422" fill="'+(s.decoration.unlocked?'#d2c18d':'#9ea16b')+'" opacity=".95"/>'+(s.decoration.unlocked?'<g fill="#f2df87" stroke="#8c8f50" stroke-width="2">'+[0,1,2,3,4,5,6,7].map((_,i)=>'<circle cx="'+(330+i*47)+'" cy="'+(470+i*23)+'" r="9"/>').join('')+'</g>':'')+'<g fill="#486e42" stroke="#314f35" stroke-width="5"><path d="M0 460Q60 400 120 461Q161 399 215 456L212 480H0ZM1040 420Q1083 365 1125 418Q1165 363 1200 422V453H1030Z"/></g><g stroke="#35583b" stroke-width="7"><path d="M37 0L73 345L24 435L95 414L130 342L105 0" fill="#616546"/><path d="M1180 0L1137 303L1094 382L1159 358L1189 291L1200 0" fill="#5d6041"/></g><g fill="#365b3e" stroke="#2d4d36" stroke-width="4"><ellipse cx="55" cy="50" rx="155" ry="98"/><ellipse cx="195" cy="12" rx="180" ry="86"/><ellipse cx="1140" cy="29" rx="184" ry="107"/></g><g fill="#739957" opacity=".6"><ellipse cx="170" cy="35" rx="99" ry="36"/><ellipse cx="1089" cy="29" rx="101" ry="39"/></g>'+(count>=3?'<path d="M854 467Q920 428 980 470M860 485Q920 449 976 485M866 451L875 491M944 446L948 487" fill="none" stroke="#9f8f5c" stroke-width="10"/>':'<path d="M855 482L888 470M957 471L982 485" stroke="#6f7954" stroke-width="10"/>')+(count>=6?'<path d="M238 260Q329 287 427 252" fill="none" stroke="#c1be7b" stroke-width="3"/><path d="M250 266l9 22 11-18m22 4 9 23 11-21m24-1 9 22 11-24m22-5 9 20 10-25" fill="#e1b167"/>':'')+'<g fill="#3f663e"><path d="M0 720V602L56 652L62 584L107 667L156 622L147 720ZM1200 720V608L1156 655L1131 596L1093 667L1046 617L1058 720Z"/></g><g fill="#ebd78e"><circle cx="97" cy="606" r="6"/><circle cx="155" cy="655" r="5"/><circle cx="1070" cy="655" r="6"/><circle cx="1112" cy="607" r="5"/></g></svg>'}
function sceneSheet(title,html){$('#sceneSheetTitle').textContent=title;$('#sceneSheetContent').innerHTML=html;$('#sceneSheet').hidden=false;$('#sceneSheetClose').focus()}
function closeSceneSheet(){$('#sceneSheet').hidden=true}
$('#sceneSheetClose').onclick=closeSceneSheet;$('#sceneSheet').addEventListener('click',e=>{if(e.target===$('#sceneSheet'))closeSceneSheet()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#sceneSheet').hidden)closeSceneSheet()});
function sceneCollection(){const owned=safeCollection();sceneSheet('我的植物伙伴','<div class="scene-mini-plants">'+RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy).map(c=>'<button data-scene-card="'+c.id+'" aria-label="'+c.name+(owned.includes(c.id)?'':'，尚未拥有')+'"><div class="'+(owned.includes(c.id)?'':'not-owned')+'">'+SCENE_PLANTS[c.id]+'</div><span>'+c.name+'</span><span class="tag">'+(owned.includes(c.id)?c.rarity:'未发现')+'</span></button>').join('')+'</div><div class="actions"><button class="primary" id="sceneFullAlbum">打开卡牌收藏册</button></div>');document.querySelectorAll('[data-scene-card]').forEach(b=>b.onclick=()=>{if(!owned.includes(+b.dataset.sceneCard)){notify('冒险收集阳光，邀请这位伙伴加入吧。');return}closeSceneSheet();openCards('album')});$('#sceneFullAlbum').onclick=()=>{closeSceneSheet();openCards('album')}}
home=function(){const owned=safeCollection(),s=RewardEngine.ensure(db),plants=GardenLayout.ensure(db,owned).slots;$('#main').innerHTML='<section class="visual-world garden-world" aria-label="小松子的花园"><div class="world-art">'+gardenLandscape(owned.length,s)+'</div><div class="world-shade"></div>'+fireflies()+'<div class="garden-mascot" aria-label="向日葵吉祥物">'+scenePlantArt(3,s)+'<span>一起出发吧，小松子！</span></div><div class="scene-tools"><button class="round-tool" id="gardenCollection"><span>❧</span>我的伙伴</button><button class="round-tool" id="gardenGrowth"><span>✦</span>成长足迹</button></div>'+plants.map((id,i)=>gardenPotHTML(i,id,s)).join('')+gardenDecorHTML()+'<div class="scene-bottom"><button class="scene-cta" id="start">'+(session?'继续冒险':'出发冒险')+'　➜</button></div></section>';$('#start').onclick=()=>{if(session)go('learn');else startSession('adaptive')};$('#gardenCollection').onclick=sceneCollection;$('#gardenGrowth').onclick=()=>sceneSheet('花园的成长足迹',rewardProgressHTML()+'<p>认识3位伙伴，小桥修好；认识6位伙伴，树屋挂起彩旗。变化自动保留。</p>');document.querySelectorAll('[data-garden-plant]').forEach(b=>b.onclick=()=>{if(b.dataset.gardenPlant==='empty'){notify('这里留给下一位植物伙伴。');return}const id=+b.dataset.gardenPlant;b.classList.remove('bounce');void b.offsetWidth;b.classList.add('bounce','name-on');const old=b.querySelector('.plant-bubble');if(old)old.remove();const bubble=document.createElement('span');bubble.className='plant-bubble';bubble.textContent=['松果准备好啦！','今天的风很凉快。','勇气会照亮花园！','送你一束暖暖的阳光。','放心，我会守好这里。','嘘，听听森林的声音。','每一根刺都准备好啦！','一起闪闪发光吧！'][id]||'一起守护花园，继续冒险吧！';b.appendChild(bubble);setTimeout(()=>{bubble.remove();b.classList.remove('name-on')},2400)})};
function scenePlantArt(id,state){if(id===3&&state.skin.variant==='twin')return SCENE_PLANTS[14];if(id===3&&state.skin.unlocked&&state.skin.equipped!==false)return SCENE_PLANTS[18];if(id===0&&state.cosmeticChoices?.[0]==='cowboy')return SCENE_PLANTS[19];return SCENE_PLANTS[id]}
const MAP_TITLES={basic:'基础营地',u1:'混合运算',u2:'测量山谷',campus:'校园测绘',u3:'加减仓库',u4:'空间侦察',u5:'几何花圃',combination:'搭配小屋',u6:'乘除集结',u7:'小数商店',u8:'调查森林',calendar:'日历树屋',review:'森林总挑战'};
function mapPosition(i){const row=Math.floor(i/3),col=i%3;return {x:row%2===0?20+col*30:80-col*30,y:35+row*12,mx:row%2===0?20+col*30:80-col*30,my:35+row*12};}
renderLearn=function(){if(session&&!adventureMapOnly){renderQuestion();return}const units=M.UNITS,points=units.map((_,i)=>mapPosition(i));let route='';points.forEach((p,i)=>{route+=(i?' L ':'M ')+(p.x*11)+' '+(p.y*11.5)});$('#main').innerHTML='<section class="visual-world map-world"><div class="map-paper"><svg viewBox="0 0 1100 1150" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="#a8925b" stroke-opacity=".25"><path d="M20 140Q260 90 430 150T1090 150M20 1000Q300 1040 550 970T1090 1020"/><path d="M0 20Q100 100 80 240M1090 40Q1000 160 1040 270"/></g><path d="M1010 300Q890 450 1040 590Q1100 700 920 820" stroke="#91a8a1" stroke-width="45" fill="none" opacity=".45"/><path d="M1010 300Q890 450 1040 590Q1100 700 920 820" stroke="#d4e0cc" stroke-width="18" fill="none" opacity=".5"/><path class="legacy-map-route" d="'+route+'" fill="none" stroke="#9d8354" stroke-width="8" opacity=".25"/><path class="legacy-map-route" d="'+route+'" fill="none" stroke="#8e7445" stroke-width="3" stroke-dasharray="5 13"/>'+[0,1,2].map((_,i)=>'<path d="M'+(35+i*35)+' 660l30-70 30 70Z" fill="#87956f" opacity=".3"/>').join('')+'<path d="M820 1020l35-90 35 90 35-60 25 60" fill="#8c9b72" opacity=".35"/></svg><div class="map-heading"><small>THE FOREST ADVENTURE</small><h1>森林冒险手册</h1><p>沿着脚印，去找植物伙伴。</p></div><div class="map-grade-tabs"><button>三年级 · 森林</button><button id="gradeFour">四年级 🔒</button><button id="gradeFive">五年级 🔒</button></div>'+units.map((u,i)=>{const p=points[i],enabled=isTesting()||u.topics.every(t=>db.profile.topics.includes(t)),done=u.id==='u1'?M.MIXED_SKILLS.every(skill=>(db.mixedProgress?.[skill.id]?.level||1)>=3):db.sessions.some(s=>s.unit===u.id&&s.status==='completed');return '<button class="map-pin '+(enabled?'':'locked')+' '+(enabled&&!done&&i===0?'current':'')+'" data-map-unit="'+u.id+'" aria-label="'+escapeHTML(u.title)+(enabled?'':'，尚未开放')+'" style="--x:'+p.x+'%;--y:'+p.y+'%;--mobile-x:'+p.mx+'%;--mobile-y:'+p.my+'%"><span class="pin-island">'+(enabled?SCENE_PLANTS[mapPlantId(i)]:'♧')+'<span class="pin-number">'+(enabled?i===0?'✦':i:'🔒')+'</span>'+(done?'<span class="pin-check">★</span>':'')+'</span><span class="pin-title">'+MAP_TITLES[u.id]+'</span></button>'}).join('')+'<div class="compass">✥</div><div class="map-note"><button class="scene-cta" id="adaptive">'+(session?'继续冒险':'今日冒险')+'　➜</button></div></div></section>';$('#adaptive').onclick=()=>startSession('adaptive');$('#gradeFour').onclick=$('#gradeFive').onclick=()=>notify('新的年级地区还在建设中。');document.querySelectorAll('[data-map-unit]').forEach(b=>b.onclick=()=>{const u=units.find(u=>u.id===b.dataset.mapUnit),enabled=isTesting()||u.topics.every(t=>db.profile.topics.includes(t));if(!enabled){notify('这片区域等待家长开启。');return}sceneSheet(u.world,'<div style="text-align:center"><div style="width:120px;margin:auto">'+SCENE_PLANTS[0]+'</div><h3>'+escapeHTML(u.title)+'</h3><p>'+db.profile.questionCount+' 个小任务，植物伙伴在等你。</p><div class="actions" style="justify-content:center"><button class="scene-cta" id="mapDepart">出发　➜</button></div></div>');$('#mapDepart').onclick=()=>{closeSceneSheet();startSession(u.id)}})};
function vaultLandscape(){return '<svg viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true"><defs><radialGradient id="vaultGlow"><stop stop-color="#8fb879" stop-opacity=".5"/><stop offset="1" stop-color="#163c30" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="720" fill="#123a30"/><ellipse cx="600" cy="320" rx="500" ry="400" fill="url(#vaultGlow)"/><g fill="none" stroke="#49674b" stroke-width="15"><path d="M125 720V200Q125 50 300 50H900Q1075 50 1075 200V720"/><path d="M180 720V215Q180 110 310 110H890Q1020 110 1020 215V720" stroke="#72835a" stroke-width="5"/></g><path d="M0 620Q600 530 1200 620V720H0Z" fill="#263f2c"/><path d="M0 665Q600 575 1200 665M340 720L435 598M850 720L765 598M0 709Q600 619 1200 709" fill="none" stroke="#71845b" stroke-opacity=".35" stroke-width="3"/><g fill="#567b4f" opacity=".7"><path d="M100 170Q30 240 90 400Q160 300 100 170M1080 170Q1160 250 1100 400Q1030 300 1080 170"/></g><g fill="#e0cf8f"><path d="M260 130v70M940 130v70" stroke="#879765" stroke-width="2"/><rect x="245" y="195" width="30" height="42" rx="8" opacity=".7"/><rect x="925" y="195" width="30" height="42" rx="8" opacity=".7"/></g><g fill="none" stroke="#7b965c" stroke-width="5" opacity=".5"><path d="M130 350Q270 230 170 120M1060 350Q930 230 1030 120"/></g></svg>'}
function sceneShopAction(){const waiting=db.packs.filter(p=>p.status==='available').length;if(waiting){openCards('packs');return}if(db.wallet.sun>=RewardEngine.CONFIG.pack.price){openCards('buy');return}sceneSheet('去冒险，收集阳光','<div style="font-size:60px;text-align:center">☀</div><p style="text-align:center">一包补给需要200阳光币。帮助植物完成冒险，就能把伙伴带回家。</p><div class="actions" style="justify-content:center"><button class="scene-cta" id="sunAdventure">出发冒险　➜</button></div>');$('#sunAdventure').onclick=()=>{closeSceneSheet();go('learn')}}
shop=function(){const waiting=db.packs.filter(p=>p.status==='available').length,canBuy=db.wallet.sun>=RewardEngine.CONFIG.pack.price;$('#main').innerHTML='<section class="visual-world vault-world"><div class="world-art">'+vaultLandscape()+'</div>'+fireflies()+'<div class="scene-caption"><small>FOREST GUARD / VOL.01</small><h1>森林补给站</h1><p>一包惊喜，迎接新的植物伙伴。</p></div><div class="scene-tools"><span class="scene-badge">'+(waiting?waiting+' 包待开启':'☀ '+(isTesting()?'∞':db.wallet.sun))+'</span></div><div class="vault-orbit"></div><div class="vault-plinth"></div><button class="vault-pack" id="scenePack" aria-label="选择森林守卫补给">'+SCENE_PACK+'</button><div class="vault-title">森林守卫</div><div class="vault-side"><button class="round-tool" id="vaultAlbum"><span>▤</span>收藏册</button><button class="round-tool" id="vaultGrowth"><span>✦</span>成长记录</button><button class="round-tool" id="vaultLeaves"><span>❧</span>叶片小铺</button></div><div class="scene-bottom"><button class="scene-cta" id="sceneOpenPack">'+(waiting?'打开补给':canBuy?'兑换并开启':'收集阳光，迎接伙伴')+'<small>'+(waiting?waiting+' 包已就位':canBuy?'☀ 200 / 包':'去冒险收集阳光')+'</small></button></div></section>';$('#scenePack').onclick=$('#sceneOpenPack').onclick=sceneShopAction;$('#vaultAlbum').onclick=()=>openCards('album');$('#vaultGrowth').onclick=()=>sceneSheet('收藏与外观成长',rewardProgressHTML());$('#vaultLeaves').onclick=()=>{const missing=RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy&&!db.rewardState.counts[c.id]);sceneSheet('叶片小铺','<p>现有叶片：'+(isTesting()?'∞':db.wallet.leaves)+' ❧</p><div class="scene-mini-plants">'+missing.map(c=>{const cost={R:10,SR:30,SSR:80}[c.rarity];return '<button data-scene-exchange="'+c.id+'" '+(db.wallet.leaves<cost?'disabled':'')+'>'+SCENE_PLANTS[c.id]+'<span>'+c.name+'</span><span class="tag">❧ '+cost+'</span></button>'}).join('')+'</div>'+(!missing.length?'<p>森林伙伴都已加入你的收藏！</p>':''));document.querySelectorAll('[data-scene-exchange]').forEach(b=>b.onclick=()=>{const before=RewardEngine.snapshot(db),leaves=db.wallet.leaves,ledgerLength=db.ledger.length;try{RewardEngine.exchange(db,+b.dataset.sceneExchange);if(!save()){db.rewardState=before;db.wallet.leaves=leaves;db.ledger.length=ledgerLength;throw Error('未能保存，兑换已取消。')}wallet();closeSceneSheet();notify('新伙伴已加入花园。');shop()}catch(e){notify(e.message)}})}};
// Switching the three child destinations closes secondary sheets; protected routes stay gated.
const sceneGo=go;go=function(view){closeSceneSheet();sceneGo(view)};
if(['home','learn','shop'].includes(tab))go(tab);

const regularStartSession=startSession,regularNextQuestion=nextQuestion,regularFinish=finishSession,regularSubmit=submit,regularCredit=credit;
credit=function(amount,reason,ref){if(session?.dailyKey)return;return regularCredit(amount,reason,ref)};
function challengeEntry(){const s=DailyChallenge.status(db);sceneSheet('每日挑战','<div style="text-align:center"><div style="font-size:64px">☀</div><h3>'+(s.claimed?'今日补给已收到':'回顾旧知识，带回一包伙伴')+'</h3><p>'+(s.claimed?'明天有新的挑战。今天可以继续普通冒险。':s.available?s.target+' 道做过的题目，完成后赠送1包森林守卫。可以用提示，不限时。':'先完成一次冒险，积累至少3道不同的已做题。')+'</p><div class="actions" style="justify-content:center"><button class="scene-cta" id="beginDaily" '+(s.claimed?'disabled':'')+'>'+(s.available||isTesting()?'开始每日挑战':'先去冒险')+'</button></div></div>');$('#beginDaily').onclick=()=>{closeSceneSheet();if(!s.available&&!isTesting()){go('learn');return}startDaily()};}
function testDailyHistory(){if(!isTesting()||DailyChallenge.eligible(db).length>=3)return;for(const [topic,variant,level] of [['ten',0,1],['add',1,2],['mixed',2,2]]){const entry=M.BANK.find(e=>e.topic===topic&&e.variant===variant&&e.level===level),item=M.generateBank(entry,M.seeded('daily-sandbox:'+topic));Object.assign(item,{testSynthetic:true,completed:true,completedAt:new Date().toISOString(),sessionId:'sandbox-daily-seed',source:'测试模式 · 每日挑战样例',attempts:[{value:item.answer,correct:true,activeMs:0,at:new Date().toISOString()}]});db.questions.push(item);}save();}
function startDaily(){if(session){if(session.dailyKey){go('learn');return}notify('先完成或结束当前冒险，再来挑战。');go('learn');return}try{testDailyHistory();const record=DailyChallenge.prepare(db);if(record.claimedAt){notify('今日奖励已经领取，明天再来。');return}DailyChallenge.sync(db,record.key);record.plan.forEach((_,i)=>{if(!record.completedIds.includes('daily-q:'+record.key+':'+i))DailyChallenge.question(db,record.key,i)});const stored=db.sessions.find(s=>s.id===record.sessionId);session=stored||{id:record.sessionId,unit:'daily',dailyKey:record.key,title:'每日挑战 · 森林回顾',topics:[...new Set(record.plan.map(p=>p.question.topic))],preview:false,target:record.plan.length,questionIds:[],status:'active',startedAt:new Date().toISOString()};if(!stored)db.sessions.push(session);session.status='active';session.questionIds=[...record.completedIds];save();nextQuestion();if(session)go('learn')}catch(e){if(session?.dailyKey){stopClock();session=null;q=null}notify(e.message)}}
nextQuestion=function(){if(!session?.dailyKey){regularNextQuestion();return}const record=DailyChallenge.sync(db,session.dailyKey);session.questionIds=[...record.completedIds];if(record.completedIds.length>=record.plan.length){finishSession();return}const index=record.plan.findIndex((_,i)=>!record.completedIds.includes('daily-q:'+record.key+':'+i)),id='daily-q:'+record.key+':'+index;const existing=db.questions.find(item=>item.id===id);q=existing||{...DailyChallenge.question(db,record.key,index),sessionId:session.id,unitId:'daily'};activeSince=0;activeAccum=q.attempts.at(-1)?.activeMs||0;startClock();};
submit=function(){regularSubmit();if(q?.dailyKey){DailyChallenge.sync(db,q.dailyKey);save()}};
finishSession=function(){if(!session?.dailyKey){regularFinish();return}const finished=session,key=finished.dailyKey,oldClaim=JSON.parse(JSON.stringify(db.dailyChallenges[key])),oldPacks=db.packs.length;try{const grant=DailyChallenge.claim(db,key);finished.status='completed';finished.endedAt=new Date().toISOString();if(!save()){db.dailyChallenges[key]=oldClaim;db.packs.length=oldPacks;finished.status='active';throw Error('奖励暂未保存，请检查存储后再试。');}stopClock();session=null;q=null;$('#main').innerHTML='<section class="visual-world vault-world"><div class="world-art">'+vaultLandscape()+'</div><div class="scene-caption"><small>DAILY CHALLENGE COMPLETE</small><h1>今日挑战完成！</h1><p>旧知识又变得牢靠了一点。</p></div><div class="vault-orbit"></div><div class="vault-plinth"></div><div class="vault-pack">'+SCENE_PACK+'</div><div class="vault-title">'+(grant.replayed?'今日补给已保存':'森林守卫补给 × 1')+'</div><div class="scene-bottom"><button class="wood-sign" id="dailyHome">回花园</button><button class="scene-cta" id="dailyOpen">打开今日补给　➜</button></div></section>';$('#dailyOpen').onclick=()=>openCards('packs');$('#dailyHome').onclick=()=>go('home');wallet();}catch(e){notify(e.message);$('#main').innerHTML='<section class="panel"><h2>挑战已经完成，奖励等待保存</h2><p>'+escapeHTML(e.message)+'</p><button class="primary" id="retryDailyClaim">重试保存奖励</button></section>';$('#retryDailyClaim').onclick=finishSession;}};
function attachDailyButton(container,kind){const s=DailyChallenge.status(db);container.insertAdjacentHTML('beforeend','<button class="'+(kind==='map'?'map-daily-button':'round-tool')+'" id="dailyChallenge" '+(s.claimed?'disabled':'')+' aria-label="每日挑战，完成后奖励一卡包"><span>'+(s.claimed?'✓':'☀')+'</span> '+(s.claimed?'今日已完成':'每日挑战')+(kind==='map'?'<small>完成赠1包</small>':'')+'</button>');$('#dailyChallenge').onclick=challengeEntry;}
const dailyHomePage=home;home=function(){dailyHomePage();attachDailyButton($('.scene-tools'),'garden')};const dailyMapPage=renderLearn;renderLearn=function(){const running=!!session;dailyMapPage();if(!running)attachDailyButton($('.map-paper'),'map')};
function renderChapters(){if(!parentUnlocked){openParentGate('chapters');return}$('#main').innerHTML='<div class="eyebrow">CHAPTER BANKS / SEMESTER ROTATION</div><h1>章节题库与学期轮换</h1><p>每个章节独立关联题型、四层难度与历史记录。按近期题型使用次数及近30天出现情况避重，明确的错题复习仍允许原题回访。</p><div class="notice">以下按20个练习周、每周5次、每次6题规划约600次作答。这是容量观察口径，不代表学校课表，也不要求600道都不重复。图形识别等题型当前变化较少，会如实显示已有数量，不能用重复换编号虚增题库。</div><div class="grid">'+M.CHAPTER_BANKS.map(c=>{const n=M.BANK.filter(e=>M.CHAPTER_SKILLS.some(s=>s.unit===c.id&&s.id===e.chapterSkill)).length,rows=db.questions.filter(q=>q.unitId===c.id&&!q.dailyKey);return '<section class="tile"><h3>'+escapeHTML(c.title)+'</h3><p>'+n+'个分层配置 · '+rows.length+'次章节作答</p><p class="small">'+c.topics.map(t=>M.TOPICS[t].name).join('、')+'</p><button class="secondary" data-chapter-audit="'+c.id+'">检查本章练习册</button></section>'}).join('')+'</div><section class="panel"><h2>每日挑战规则</h2><p>按香港日期固定当天题单；仅取实际完成过的非预览题目，优先回顾曾需要订正或提示的题。至少3道不同历史题后开启，每日3～6题。当前版本使用原题回顾，不向未学内容扩展。</p><p>完成每题5阳光，整份复习额外10阳光，不发卡包也不叠加普通整轮20阳光；提示和订正不影响卡包奖励。退出后可以续做，当天领取后不重复发放，没有断签或补签要求。测试模式的数据与奖励单独保存。</p></section>';document.querySelectorAll('[data-chapter-audit]').forEach(b=>b.onclick=()=>chapterPaper(b.dataset.chapterAudit,1,0));}
function chapterPaper(id,level=1,page=0){const chapter=M.CHAPTER_BANKS.find(c=>c.id===id),rows=M.chapterSamples(db,id,level),pages=Math.max(1,Math.ceil(rows.length/6));sceneSheet(chapter.title+' · L'+level,'<p>本层抽样整理到 '+rows.length+' 道不同题目（上限72），不是全部参数组合的总量。'+(rows.length<30?'当前变化较少，后续需要扩充题型与图示。':'')+'</p><div class="actions">'+[1,2,3,4].map(l=>'<button class="secondary" data-paper-level="'+l+'">L'+l+' '+M.LEVEL_NAMES[l]+'</button>').join('')+'</div>'+rows.slice(page*6,page*6+6).map((q,i)=>'<details><summary>'+(page*6+i+1)+'. '+escapeHTML(q.text)+'</summary>'+(q.diagram||'')+'<p>答案：'+q.answer+' '+escapeHTML(q.unit)+'</p><p>'+escapeHTML(q.hint)+'</p><p class="small">'+q.templateId+'</p></details>').join('')+'<div class="actions"><button class="secondary" id="paperPrev" '+(page===0?'disabled':'')+'>上一页</button><span class="pill">'+(page+1)+' / '+pages+'</span><button class="secondary" id="paperNext" '+(page>=pages-1?'disabled':'')+'>下一页</button><button class="secondary" id="paperExport">导出本章四层题目样本</button></div>');document.querySelectorAll('[data-paper-level]').forEach(b=>b.onclick=()=>chapterPaper(id,+b.dataset.paperLevel,0));$('#paperPrev').onclick=()=>chapterPaper(id,level,page-1);$('#paperNext').onclick=()=>chapterPaper(id,level,page+1);$('#paperExport').onclick=()=>download(chapter.title+'-题库样本.json',JSON.stringify({chapter,levels:[1,2,3,4].map(l=>({level:l,questions:M.chapterSamples(db,id,l)}))},null,2),'application/json');}
const chapterParentNav=renderParentNav;renderParentNav=function(view){chapterParentNav(view);if(parentUnlocked&&PARENT_ROUTES.has(view)){$('#parentNav').insertAdjacentHTML('beforeend','<button class="secondary" id="chapterBanks">章节题库与每日挑战</button>');$('#chapterBanks').onclick=()=>go('chapters')}};
if(['home','learn','shop'].includes(tab))go(tab);

var adventureMapOnly=false,mixedChapterView=false;
const chapterHome=home;home=function(){chapterHome();adventureMapOnly=true;mixedChapterView=false;$('#start').onclick=()=>{mixedChapterView=false;adventureMapOnly=true;go('learn')};const daily=$('#dailyChallenge');if(daily)daily.onclick=()=>{mixedChapterView=false;adventureMapOnly=true;go('learn');challengeEntry()}};
const chapterStart=startSession;startSession=function(unit){adventureMapOnly=false;chapterStart(unit)};
const chapterDailyStart=startDaily;startDaily=function(){adventureMapOnly=false;chapterDailyStart()};
function openMixedChapter(){if(!isTesting()&&!db.profile.topics.includes('mixed')){notify('这片区域等待家长开启。');return}mixedChapterView=true;adventureMapOnly=true;closeSceneSheet();renderMixedChapter()}
function mixedStats(skill){const rows=db.questions.filter(q=>q.chapterSkill===skill&&!q.dailyKey&&q.completed&&!q.preview),rounds=db.sessions.filter(s=>s.chapterSkill===skill&&s.status==='completed').length;return {rows:rows.length,rounds,level:db.mixedProgress?.[skill]?.level||1}}
function mixedRoundLabel(skill){if(session?.chapterSkill!==skill||session.dailyKey)return '每轮 '+db.profile.questionCount+' 题';const ids=new Set(session.questionIds),rows=db.questions.filter(q=>ids.has(q.id)&&(q.completed||q.skipped)),skips=rows.filter(q=>q.skipped&&!q.completed).length;return '本轮进度 '+rows.length+' / '+session.target+' 题'+(skips?' · 跳过 '+skips+' 题':'')}
function renderMixedChapter(){$('#main').innerHTML='<section class="mixed-chapter"><div class="mixed-chapter-head"><div><small>FOREST CHAPTER 01</small><h1>豌豆补给站</h1><p>混合运算 · 选择一条探索小径</p></div><button class="wood-sign" id="mixedBack">↶ 返回地图</button></div><div class="mixed-trail">'+M.MIXED_SKILLS.map((s,i)=>{const st=mixedStats(s.id);return '<button class="mixed-skill" data-mixed-skill="'+s.id+'"><span class="mixed-skill-number">0'+(i+1)+'</span><span class="mixed-skill-art">'+s.icon+'</span><strong>'+s.name+'</strong><span>'+s.goal+'</span><div class="mixed-skill-meta"><span class="mixed-difficulty-label">难度 '+st.level+' / 4</span><span class="mixed-round-label">'+mixedRoundLabel(s.id)+'</span></div><small>'+(st.rounds?'已探索 '+st.rounds+' 轮 · 完成 '+st.rows+' 题':'新的探索小径')+'</small><em>'+(session?'选择小关':'开始一轮')+'　➜</em></button>'}).join('')+'</div><div class="mixed-chapter-footer"><span>每轮 '+db.profile.questionCount+' 题 · 随时可以休息 · 旧小关可以再探索</span>'+(session?'<button class="scene-cta" id="resumeMixed">继续当前任务 ➜</button>':'')+'</div></section>';$('#mixedBack').onclick=()=>{mixedChapterView=false;adventureMapOnly=true;go('learn')};if(session)$('#resumeMixed').onclick=()=>{adventureMapOnly=false;go('learn')};document.querySelectorAll('[data-mixed-skill]').forEach(b=>b.onclick=()=>startMixedSkill(b.dataset.mixedSkill));}
function startMixedSkill(skill){if(!isTesting()&&!db.profile.topics.includes('mixed')){notify('请家长先开启混合运算。');return}if(session){notify('先完成或结束当前任务，再选择新小关。');return}const spec=M.MIXED_SKILLS.find(s=>s.id===skill);if(!spec)return;const state=M.mixedState(db,skill);if(!M.mixedEntries(db,skill,state.level).length){notify('本小关题型已暂停，请家长检查题库。');return}session={id:'mixed-session-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),unit:'u1',chapterSkill:skill,title:'豌豆补给站 · '+spec.name,topics:['mixed'],preview:false,target:db.profile.questionCount,questionIds:[],status:'active',startedAt:new Date().toISOString()};db.sessions.push(session);mixedChapterView=true;adventureMapOnly=false;save();nextQuestion();go('learn')}
const chapterNext=nextQuestion;nextQuestion=function(){if(!session?.chapterSkill){chapterNext();return}const rows=sessionRows();if(rows.length>=session.target){finishSession();return}try{q={...M.chooseMixed(db,session.chapterSkill,rows.length,rows),sessionId:session.id,unitId:'u1',preview:false};activeSince=0;activeAccum=0;startClock()}catch(e){notify(e.message);session.status='interrupted';session=null;q=null;save();adventureMapOnly=true;renderMixedChapter()}};
const chapterFinish=finishSession;finishSession=function(){const finished=session,isMixed=!!finished?.chapterSkill;chapterFinish();if(!isMixed||session)return;const st=mixedStats(finished.chapterSkill),name=M.MIXED_SKILLS.find(s=>s.id===finished.chapterSkill).name;$('#main').innerHTML='<section class="mixed-chapter mixed-round-complete"><div class="mixed-complete-art">'+SCENE_PLANTS[0]+'</div><small>ONE MORE STEP IN THE FOREST</small><h1>本轮完成！</h1><p>'+name+' · 第 '+st.rounds+' 轮探索</p><div class="mixed-reward">☀ +'+(db.questions.filter(q=>finished.questionIds.includes(q.id)&&q.completed).length*5+20)+'</div><p>这条小径已经留下 '+st.rows+' 道完成记录。<br>还可以继续探索，也可以回花园休息。</p><div class="actions"><button class="scene-cta" id="mixedAgain">继续本小关 ➜</button><button class="wood-sign" id="mixedChoose">选择其他小关</button><button class="wood-sign" id="mixedRest">回花园休息</button></div></section>';$('#mixedAgain').onclick=()=>startMixedSkill(finished.chapterSkill);$('#mixedChoose').onclick=openMixedChapter;$('#mixedRest').onclick=()=>go('home')};
const chapterLearn=renderLearn;renderLearn=function(){if(mixedChapterView&&(!session||adventureMapOnly)){renderMixedChapter();return}chapterLearn();if(!session||adventureMapOnly){document.querySelectorAll('[data-map-unit]').forEach(b=>{if(b.dataset.mapUnit==='u1')b.onclick=openMixedChapter});}};
if(['home','learn'].includes(tab))go(tab);

function stagePackIcon(){return '<svg viewBox="0 0 28 34" aria-hidden="true"><path d="M5 2h18l2 4v24l-3 2H6l-3-3V6Z" fill="#b4c56d" stroke="#506b3e" stroke-width="2"/><path d="M7 7h14v20H7Z" fill="#315a3e" stroke="#efd18a"/><path d="M10 22Q7 12 19 11Q21 22 10 22M10 24l7-10" fill="#e6d186" stroke="#e6d186" stroke-width="1.2"/><path d="M5 5h18M5 29h18" stroke="#e9d699" stroke-width="2"/></svg>'}
function stageTransaction(action){const prior={stage:db.stageRewards?JSON.parse(JSON.stringify(db.stageRewards)):null,reward:db.rewardState?JSON.parse(JSON.stringify(db.rewardState)):null,wallet:{...db.wallet},packs:db.packs.slice()};try{const value=action();if(JSON.stringify(prior.stage)!==JSON.stringify(db.stageRewards)||JSON.stringify(prior.reward)!==JSON.stringify(db.rewardState)||JSON.stringify(prior.wallet)!==JSON.stringify(db.wallet)||prior.packs.length!==db.packs.length){if(!save())throw Error('奖励未能保存，本次发放已撤回。')}return {ok:true,value}}catch(e){if(prior.stage)db.stageRewards=prior.stage;else delete db.stageRewards;if(prior.reward)db.rewardState=prior.reward;else delete db.rewardState;db.wallet=prior.wallet;db.packs=prior.packs;notify(e.message);return {ok:false,value:null}}}
function rewardStageStatus(stage){const daily=db.stageRewards?.daily?.[DailyChallenge.dayKey()],first=!StageRewards.firstClaimed(db,stage.key),bonus=daily?.stageKey===stage.key&&!daily.claimedAt;return {first,bonus}}
function stageBadge(stage){if(!StageRewards.available(db,stage))return '';const s=rewardStageStatus(stage);if(!s.first&&!s.bonus)return '';return '<span class="stage-pack-badge '+(s.bonus?'bonus':'')+'" aria-label="'+(s.first?'首次通关奖励一卡包':'')+(s.bonus?'，限时挑战奖励1卡包和随机SSR':'')+'">'+stagePackIcon()+'<span>'+(s.bonus?'今日奖励':'首通奖励')+(s.first&&s.bonus?' ×2':' ×1')+'</span></span>'}
function openRewardStage(stage){if(!StageRewards.available(db,stage)){notify('这片区域等待家长开启，或题型暂时暂停。');return}if(stage.skill){openMixedChapter();const button=document.querySelector('[data-mixed-skill="'+stage.skill+'"]');if(button){button.classList.add('reward-stage-highlight');button.scrollIntoView?.({behavior:'smooth',block:'center'})}return}sceneSheet(stage.title,'<div class="reward-stage-choice"><div class="stage-choice-art">'+SCENE_PLANTS[0]+'</div><h3>'+escapeHTML(stage.title)+'</h3>'+stageBadge(stage)+'<p>本轮 '+db.profile.questionCount+' 题，完成后领取补给。<br>可以使用提示，订正后继续。</p><button class="scene-cta" id="rewardStageStart">'+(session?'继续当前任务':'开始本关')+' ➜</button></div>');$('#rewardStageStart').onclick=()=>{closeSceneSheet();startSession(stage.unit)}}
function addRewardNotice(){const record=db.stageRewards?.daily?.[DailyChallenge.dayKey()],stage=record&&StageRewards.stages().find(s=>s.key===record.stageKey),enabled=stage&&StageRewards.available(db,stage);$('.map-paper').insertAdjacentHTML('beforeend','<button id="todayStageReward" class="today-stage-reward" '+(!enabled?'disabled':'')+'>'+stagePackIcon()+'<span><strong>'+(record?(record.claimedAt?'今日奖励已领取':'限时挑战'):'限时挑战')+'</strong><small>'+escapeHTML(enabled?record.title:record?'本关暂未开放，请家长检查':'探索后，为你推荐值得再试的小关')+'</small></span><em>'+(enabled?(record.claimedAt?'查看关卡 ›':'选关领1包 ›'):'')+'</em></button>');$('#todayStageReward').onclick=()=>{if(enabled)openRewardStage(stage)}}
const rewardChapterPage=renderMixedChapter;renderMixedChapter=function(){stageTransaction(()=>StageRewards.reconcile(db));stageTransaction(()=>StageRewards.daily(db));rewardChapterPage();document.querySelectorAll('[data-mixed-skill]').forEach(button=>{const stage=StageRewards.stages().find(s=>s.skill===button.dataset.mixedSkill);button.insertAdjacentHTML('beforeend',stageBadge(stage))})};
const rewardMapPage=renderLearn;renderLearn=function(){stageTransaction(()=>StageRewards.reconcile(db));stageTransaction(()=>StageRewards.daily(db));rewardMapPage();if(!mixedChapterView&&(!session||adventureMapOnly)){addRewardNotice();document.querySelectorAll('[data-map-unit]').forEach(button=>{if(button.dataset.mapUnit==='u1'){const count=StageRewards.stages().filter(s=>s.unit==='u1'&&!StageRewards.firstClaimed(db,s.key)).length,record=db.stageRewards?.daily?.[DailyChallenge.dayKey()],bonus=record?.stageKey.startsWith('mixed:')&&!record.claimedAt;if((count||bonus)&&db.profile.topics.includes('mixed'))button.insertAdjacentHTML('beforeend','<span class="stage-pack-badge">'+stagePackIcon()+'<span>'+(bonus?'今日奖励':count+'份首通补给')+'</span></span>');return}const stage=StageRewards.stages().find(s=>s.unit===button.dataset.mapUnit);if(stage){button.insertAdjacentHTML('beforeend',stageBadge(stage));button.onclick=()=>openRewardStage(stage)}})}};
function stampRewardSession(before){if(session&&session!==before){stageTransaction(()=>StageRewards.stamp(db,session));save()}}
const rewardStartSession=startSession;startSession=function(unit){const before=session;rewardStartSession(unit);stampRewardSession(before)};
const rewardStartMixed=startMixedSkill;startMixedSkill=function(skill){const before=session;rewardStartMixed(skill);stampRewardSession(before)};
const rewardFinishSession=finishSession;finishSession=function(){const ended=session;rewardFinishSession();if(!ended||ended.dailyKey||!StageRewards.successful(db,ended))return;const tx=stageTransaction(()=>StageRewards.settle(db,ended));if(tx.ok&&tx.value.length){$('#main').insertAdjacentHTML('beforeend','<section class="stage-reward-receipt"><div class="receipt-packs">'+stagePackIcon()+'</div><div><strong>获得卡包 × '+tx.value.length+'</strong><p>'+tx.value.map(g=>g.title).join(' + ')+'</p></div><button class="scene-cta" id="openStageGifts">打开补给 ➜</button></section>');$('#openStageGifts').onclick=()=>openCards('packs')}};
stageTransaction(()=>StageRewards.reconcile(db));
if(['home','learn'].includes(tab))go(tab);

function itemArt(kind){return '<svg viewBox="0 0 200 200" aria-hidden="true"><path d="M45 20h110l12 14v140l-14 8H44l-12-13V35Z" fill="'+(kind==='skip'?'#79ac71':'#967bc1')+'" stroke="#e9d28d" stroke-width="7"/><path d="M48 39h104v124H48Z" fill="#183e35" stroke="#b9c58d" stroke-width="3"/>'+(kind==='skip'?'<path d="M67 70l39 31-39 31ZM109 70l39 31-39 31Z" fill="#efd591"/>':'<path d="M134 83a39 39 0 1 0-4 50" fill="none" stroke="#efd591" stroke-width="12"/><path d="M118 58l25 4-1 28Z" fill="#efd591"/>')+'</svg>'}
function itemTransaction(action){const before=JSON.parse(JSON.stringify(db)),sid=session?.id,priorQ=q?JSON.parse(JSON.stringify(q)):null;try{const value=action();if(!save())throw Error('道具使用未能保存，已撤回本次操作。');return {ok:true,value}}catch(e){db=before;session=sid?db.sessions.find(s=>s.id===sid):null;q=priorQ?(db.questions.find(x=>x.id===priorQ.id)||priorQ):null;notify(e.message);return {ok:false}}}
function itemBag(){const bag=ItemEngine.ensure(db),day=DailyChallenge.dayKey();if(isTesting()){bag.skip.count=Math.max(10,bag.skip.count);bag.refresh.count=Math.max(10,bag.refresh.count);save()}sceneSheet('我的道具','<div class="item-bag-grid">'+Object.entries(ItemEngine.ITEMS).map(([key,def])=>'<div class="item-bag-card"><div>'+itemArt(key)+'</div><strong>'+def.name+'</strong><p>'+bag[key].count+' 张'+'</p><small>'+(key==='skip'?'答题时使用，每日最多一张，跨轮共享。':'每天最多刷新一次，尚未开始时使用。')+'</small></div>').join('')+'</div><div class="actions"><button class="secondary" id="refreshReview" '+(bag.refreshUses[day]?'disabled':'')+'>刷新每日复习题单</button><button class="secondary" id="refreshRewardStage" '+(bag.refreshUses[day]?'disabled':'')+'>刷新回访挑战</button></div><p class="small">两个刷新入口共用每日一次额度。没有其他可换的题目或关卡时不消耗卡。跳过题目不会记作答对，也不会获得该题5阳光，稍后会安排复习。</p>');$('#refreshReview').onclick=()=>refreshWithItem('review');$('#refreshRewardStage').onclick=()=>refreshWithItem('stage')}
function refreshWithItem(type){if(session){notify('请先完成或结束当前任务，再刷新。');return}const tx=itemTransaction(()=>ItemEngine.refresh(db,type));if(tx.ok){closeSceneSheet();mixedChapterView=false;adventureMapOnly=true;go('learn');notify(type==='stage'?'回访挑战已更换。':'每日复习题单已换好。')}}
const itemsHome=home;home=function(){itemsHome();$('.scene-tools').insertAdjacentHTML('beforeend','<button class="round-tool" id="gardenItems"><span>▣</span>我的道具</button>');$('#gardenItems').onclick=itemBag};
const itemsShop=shop;shop=function(){itemsShop();$('.vault-side').insertAdjacentHTML('beforeend','<button class="round-tool" id="shopItems"><span>▣</span>道具背包</button>');$('#shopItems').onclick=itemBag};
const itemsQuestion=renderQuestion;renderQuestion=function(){itemsQuestion();if(!session||!q||q.completed||q.skipped)return;const bag=ItemEngine.ensure(db);if(isTesting())bag.skip.count=Math.max(10,bag.skip.count);$('.question').insertAdjacentHTML('beforeend','<div class="skip-item-row"><button class="secondary" id="useSkipCard" '+(session.skipUsed||bag.skip.count<1?'disabled':'')+'>▣ '+(session.skipUsed?'本轮已使用跳过卡':'使用跳过卡 · '+bag.skip.count+' 张')+'</button><span>每日限1张 · 跳过不计答对</span></div>');$('#useSkipCard').onclick=()=>{stopClock();const tx=itemTransaction(()=>ItemEngine.useSkip(db,session,q));if(!tx.ok){startClock();return}q=null;nextQuestion();if(session)renderQuestion()}};
const oldParentItems=renderParent;renderParent=function(){oldParentItems();if(parentUnlocked)$('#main').insertAdjacentHTML('beforeend','<section class="panel"><h2>道具记录</h2><p>跳过的题保留为未答对记录，不计入熟练证据。道具使用 '+ItemEngine.ensure(db).log.length+' 次。</p>'+db.questions.filter(q=>q.skipped).slice(-10).map(q=>'<p>'+escapeHTML(q.text)+' · 使用跳过卡 · '+escapeHTML(q.skippedAt)+'</p>').join('')+'</section>')};
if(['home','learn','shop'].includes(tab))go(tab);

stagePackIcon=function(){return '<span class="reward-pack-art">'+SCENE_PACK+'</span>'};
function rewardSSRArt(id){return '<span class="reward-ssr-art"><span class="reward-ssr-rim"></span><span class="reward-ssr-plant">'+(id===undefined?'<svg viewBox="0 0 100 120"><path d="M50 15L59 35 81 38 65 54 70 77 50 66 30 77 35 54 19 38 41 35Z" fill="#fff1b0"/><text x="50" y="106" text-anchor="middle" fill="#fff3cb" font-size="29" font-weight="bold">?</text></svg>':SCENE_PLANTS[id])+'</span><b>SSR</b></span>'}
function rewardLoot(packs=1,ssr=false,id){return '<span class="reward-loot"><span class="reward-loot-item">'+stagePackIcon()+'<b class="reward-quantity">×'+packs+'</b><small>森林守卫卡包</small></span>'+(ssr?'<span class="reward-loot-plus">＋</span><span class="reward-loot-item">'+rewardSSRArt(id)+'<b class="reward-quantity">×1</b><small>随机SSR植物</small></span>':'')+'</span>'}
stageTransaction=function(action){const prior={stage:db.stageRewards?JSON.parse(JSON.stringify(db.stageRewards)):null,reward:db.rewardState?JSON.parse(JSON.stringify(db.rewardState)):null,wallet:{...db.wallet},packs:db.packs.slice()};try{const value=action();if(JSON.stringify(prior.stage)!==JSON.stringify(db.stageRewards)||JSON.stringify(prior.reward)!==JSON.stringify(db.rewardState)||JSON.stringify(prior.wallet)!==JSON.stringify(db.wallet)||prior.packs.length!==db.packs.length){if(!save())throw Error('奖励未能保存，本次发放已撤回。')}return {ok:true,value}}catch(e){if(prior.stage)db.stageRewards=prior.stage;else delete db.stageRewards;if(prior.reward)db.rewardState=prior.reward;else delete db.rewardState;db.wallet=prior.wallet;db.packs=prior.packs;notify(e.message);return {ok:false,value:null}}};
stageBadge=function(stage){if(!StageRewards.available(db,stage))return '';const s=rewardStageStatus(stage);if(!s.first&&!s.bonus)return '';return '<span class="stage-pack-badge '+(s.bonus?'bonus':'')+'" aria-label="'+(s.bonus?'限时挑战奖励随机SSR和':'首通奖励')+(s.first&&s.bonus?'2':'1')+'卡包"><strong class="reward-badge-heading">'+(s.bonus?'限时挑战':'首次通关')+'</strong>'+rewardLoot(s.first&&s.bonus?2:1,s.bonus)+'</span>'};
addRewardNotice=function(){const record=db.stageRewards?.daily?.[DailyChallenge.dayKey()],stage=record&&(StageRewards.stages().find(s=>s.key===record.stageKey)||(record.claimedAt?StageRewards.stages().find(s=>s.unit===record.stageKey.replace('unit:','')):null)),enabled=stage&&StageRewards.available(db,stage);$('.map-paper').insertAdjacentHTML('beforeend','<button id="todayStageReward" class="today-stage-reward reward-hero" '+(!enabled?'disabled':'')+'><span class="reward-hero-copy"><span class="reward-time-tag">今日开放 · 每日1次</span><strong>'+(record?.claimedAt?'限时挑战 · 已完成':'限时挑战')+'</strong><small>'+escapeHTML(enabled?record.title:record?'本关暂未开放，请家长检查':'完成冒险后，为你开启挑战小径')+'</small><em>'+(enabled?(record.claimedAt?'查看挑战 ›':'选择关卡，赢取奖励 ›'):'探索后开启')+'</em></span>'+rewardLoot(1,true)+'</button>');$('#todayStageReward').onclick=()=>{if(enabled)openRewardStage(stage)}};
attachDailyButton=function(container,kind){const s=DailyChallenge.status(db);container.insertAdjacentHTML('beforeend','<button class="'+(kind==='map'?'map-daily-button daily-reward-tile':'round-tool')+'" id="dailyChallenge" '+(s.claimed?'disabled':'')+' aria-label="每日挑战，完成奖励1卡包">'+(kind==='map'?'<strong>'+(s.claimed?'今日已完成':'每日挑战')+'</strong>'+rewardLoot(1,false):'<span>☀</span> '+(s.claimed?'今日已完成':'每日挑战'))+'</button>');$('#dailyChallenge').onclick=challengeEntry};
const visualRewardMap=renderLearn;renderLearn=function(){visualRewardMap();if(!mixedChapterView&&(!session||adventureMapOnly)){document.querySelectorAll('[data-map-unit]').forEach(button=>{if(button.dataset.mapUnit!=='u1')return;button.querySelectorAll('.stage-pack-badge').forEach(b=>b.remove());const record=db.stageRewards?.daily?.[DailyChallenge.dayKey()],target=record&&!record.claimedAt&&record.stageKey.startsWith('mixed:')?StageRewards.stages().find(s=>s.key===record.stageKey):null,count=StageRewards.stages().filter(s=>s.unit==='u1'&&!StageRewards.firstClaimed(db,s.key)).length;if(target)button.insertAdjacentHTML('beforeend',stageBadge(target));else if(count&&db.profile.topics.includes('mixed'))button.insertAdjacentHTML('beforeend','<span class="stage-pack-badge"><strong class="reward-badge-heading">小关首通补给</strong>'+rewardLoot(count,false)+'</span>')});bindRewardHover()}};
const visualRewardFinish=finishSession;finishSession=function(){const ended=session,record=ended?.rewardChallengeDay&&db.stageRewards?.daily?.[ended.rewardChallengeDay],claimed=!!record?.claimedAt;visualRewardFinish();if(!ended||claimed)return;const after=db.stageRewards?.daily?.[ended.rewardChallengeDay];if(after?.claimedAt&&after.ssrReward){const first=db.stageRewards.first[StageRewards.stageKey(ended)]?.sessionId===ended.id,packs=first?2:1,plant=after.ssrReward;$('.stage-reward-receipt').innerHTML='<div class="reward-win-title"><strong>限时挑战完成！</strong><p>'+escapeHTML(plant.name)+(plant.duplicate?' · 重复转化 '+plant.leaves+' 叶片':' · 新SSR伙伴加入花园')+'</p></div>'+rewardLoot(packs,true,plant.plantId)+'<button class="scene-cta" id="openStageGifts">打开卡包 ➜</button><button class="wood-sign" id="viewSSRReward">查看SSR伙伴</button>';$('#openStageGifts').onclick=()=>openCards('packs');$('#viewSSRReward').onclick=()=>openCards('album');wallet()}};

function bindRewardHover(){document.querySelectorAll('.reward-hero,.daily-reward-tile,.map-pin,.mixed-skill').forEach(node=>{if(node.dataset.rewardHover)return;node.dataset.rewardHover='ready';node.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const box=node.getBoundingClientRect(),x=Math.max(0,Math.min(1,(e.clientX-box.left)/box.width)),y=Math.max(0,Math.min(1,(e.clientY-box.top)/box.height));node.style.setProperty('--hover-x',x*100+'%');node.style.setProperty('--hover-y',y*100+'%');node.style.setProperty('--tilt-x',(0.5-y)*5+'deg');node.style.setProperty('--tilt-y',(x-0.5)*6+'deg')});node.addEventListener('pointerleave',()=>{node.style.setProperty('--tilt-x','0deg');node.style.setProperty('--tilt-y','0deg')})})}
stageTransaction(()=>StageRewards.reconcile(db));
if(['home','learn'].includes(tab))go(tab);

var selectedChapter=null;
// Old chapter-level pending recommendations are reselected from identifiable historical skills.
const oldChapterDaily=StageRewards.daily;StageRewards.daily=function(db,now=Date.now()){const day=DailyChallenge.dayKey(now),old=db.stageRewards?.daily?.[day];if(old&&!old.claimedAt&&!StageRewards.stages().some(s=>s.key===old.stageKey)&&!db.sessions.some(s=>s.status==='active'&&s.rewardChallengeDay===day))delete db.stageRewards.daily[day];return oldChapterDaily(db,now)};

function chapterStage(id){return StageRewards.stages().find(s=>s.skill===id)}
function chapterSkills(unit){return M.CHAPTER_SKILLS.filter(s=>s.unit===unit)}
function chapterSkillStats(id){return {rows:db.questions.filter(q=>q.chapterSkill===id&&q.completed&&!q.skipped&&!q.dailyKey&&!q.preview).length,rounds:db.sessions.filter(s=>s.chapterSkill===id&&s.status==='completed').length,level:M.chapterState(db,id).level}}
function openChapter(unit){const u=M.UNITS.find(u=>u.id===unit);if(!u)return;if(!chapterSkills(unit).some(s=>StageRewards.available(db,chapterStage(s.id)))){notify('本章等待家长开启学习范围，或相关题型暂时暂停。');return}stopClock();selectedChapter=unit;mixedChapterView=true;adventureMapOnly=true;closeSceneSheet();go('learn')}
openMixedChapter=function(){openChapter('u1')};
function renderChapter(unit){const u=M.UNITS.find(u=>u.id===unit),skills=chapterSkills(unit);stageTransaction(()=>StageRewards.reconcile(db));stageTransaction(()=>StageRewards.daily(db));$('#main').innerHTML='<section class="mixed-chapter"><div class="mixed-chapter-head"><div><small>FOREST KNOWLEDGE TRAILS</small><h1>'+escapeHTML(u.world)+'</h1><p>'+escapeHTML(u.title)+' · '+skills.length+'条知识小径</p></div><button class="wood-sign" id="chapterBack">↶ 返回地图</button></div><div class="mixed-trail chapter-grid--'+skills.length+'">'+skills.map((s,i)=>{const st=chapterSkillStats(s.id),stage=chapterStage(s.id),enabled=StageRewards.available(db,stage),current=session?.chapterSkill===s.id&&!session.dailyKey;return '<button class="mixed-skill '+(enabled?'':'chapter-skill-locked')+'" data-chapter-skill="'+s.id+'" '+(s.legacyMixed?'data-mixed-skill="'+s.id+'"':'')+' '+(!enabled?'disabled':'')+'><span class="mixed-skill-number">'+String(i+1).padStart(2,'0')+'</span><span class="mixed-skill-art">'+s.icon+'</span><strong>'+escapeHTML(s.name)+'</strong><span>'+escapeHTML(s.goal)+'</span><div class="mixed-skill-meta"><span class="mixed-difficulty-label">难度 '+st.level+' / 4</span><span class="mixed-round-label">'+mixedRoundLabel(s.id)+'</span></div><small>'+(enabled?(st.rounds?'已探索 '+st.rounds+' 轮 · 完成 '+st.rows+' 题':'新的探索小径'):'等待开启已学范围或恢复题型')+'</small><em>'+(current?'继续本小关':'开始一轮')+' ➜</em>'+stageBadge(stage)+'</button>'}).join('')+'</div><div class="mixed-chapter-footer"><span>新一轮 '+db.profile.questionCount+' 题 · 可以反复探索 · 难度分别成长</span>'+(session?'<button class="scene-cta" id="chapterResume">继续当前任务 ➜</button>':'')+'</div></section>';$('#chapterBack').onclick=()=>{selectedChapter=null;mixedChapterView=false;adventureMapOnly=true;go('learn')};if(session)$('#chapterResume').onclick=()=>{adventureMapOnly=false;go('learn')};document.querySelectorAll('[data-chapter-skill]').forEach(b=>b.onclick=()=>startChapterSkill(b.dataset.chapterSkill));bindRewardHover()}
renderMixedChapter=function(){renderChapter('u1')};
const legacyMixedStart=startMixedSkill;startMixedSkill=function(id){selectedChapter=M.chapterSpec(id)?.unit||'u1';if(M.chapterSpec(id)?.legacyMixed){legacyMixedStart(id);return}startChapterSkill(id)};
function startChapterSkill(id){const spec=M.chapterSpec(id),stage=chapterStage(id);if(!spec||!StageRewards.available(db,stage)){notify('这个小关尚未开放或题型暂停。');return}if(session){if(session.chapterSkill===id){adventureMapOnly=false;go('learn')}else notify('先完成或结束当前任务，再选择其他小关。');return}if(spec.legacyMixed){startMixedSkill(id);return}const topics=spec.topics.filter(t=>db.profile.topics.includes(t));session={id:'chapter-session-'+Date.now()+'-'+Math.random().toString(36).slice(2,8),unit:spec.unit,chapterSkill:id,title:M.UNITS.find(u=>u.id===spec.unit).title+' · '+spec.name,topics,preview:false,target:db.profile.questionCount,questionIds:[],status:'active',startedAt:new Date().toISOString()};db.sessions.push(session);selectedChapter=spec.unit;mixedChapterView=true;adventureMapOnly=false;stageTransaction(()=>StageRewards.stamp(db,session));save();nextQuestion();if(session)go('learn')}
const previousChapterNext=nextQuestion;nextQuestion=function(){const spec=M.chapterSpec(session?.chapterSkill);if(!spec||spec.legacyMixed){previousChapterNext();return}const rows=sessionRows();if(rows.length>=session.target){finishSession();return}try{q={...M.chooseChapter(db,spec.id,rows.length,rows),sessionId:session.id,unitId:spec.unit,preview:false};activeSince=0;activeAccum=0;startClock()}catch(e){notify(e.message);stopClock();session.status='interrupted';session=null;q=null;save();adventureMapOnly=true;renderChapter(spec.unit)}};
const previousChapterFinish=finishSession;finishSession=function(){const ended=session,spec=M.chapterSpec(ended?.chapterSkill);if(!spec||spec.legacyMixed){previousChapterFinish();return}const rows=sessionRows();regularFinish();if(session)return;selectedChapter=spec.unit;const st=chapterSkillStats(spec.id),sun=rows.filter(q=>q.completed).length*5+20;$('#main').innerHTML='<section class="mixed-chapter mixed-round-complete"><div class="mixed-complete-art">'+SCENE_PLANTS[0]+'</div><small>ONE MORE STEP IN THE FOREST</small><h1>本轮完成！</h1><p>'+escapeHTML(spec.name)+' · 第'+st.rounds+'轮探索</p><div class="mixed-reward">☀ +'+sun+'</div><p>这条小径已经留下 '+st.rows+' 道完成记录。<br>可以继续探索，也可以回花园休息。</p><div class="actions"><button class="scene-cta" id="chapterAgain">继续本小关 ➜</button><button class="wood-sign" id="chapterChoose">选择其他小关</button><button class="wood-sign" id="chapterRest">回花园休息</button></div></section>';$('#chapterAgain').onclick=()=>startChapterSkill(spec.id);$('#chapterChoose').onclick=()=>openChapter(spec.unit);$('#chapterRest').onclick=()=>go('home');const tx=stageTransaction(()=>StageRewards.settle(db,ended));if(tx.ok&&tx.value.length){const plant=tx.value.find(g=>g.ssrReward)?.ssrReward;$('#main').insertAdjacentHTML('beforeend','<section class="stage-reward-receipt"><div class="reward-win-title"><strong>'+(plant?'限时挑战完成！':'首次通关！')+'</strong><p>'+tx.value.map(g=>escapeHTML(g.title)).join(' + ')+(plant?'<br>'+escapeHTML(plant.name)+(plant.duplicate?' · 重复转'+plant.leaves+'叶片':' · 新SSR伙伴加入'):'')+'</p></div>'+rewardLoot(tx.value.length,!!plant,plant?.plantId)+'<button class="scene-cta" id="chapterGiftOpen">打开卡包 ➜</button>'+(plant?'<button class="wood-sign" id="chapterGiftAlbum">查看SSR伙伴</button>':'')+'</section>');$('#chapterGiftOpen').onclick=()=>openCards('packs');if(plant)$('#chapterGiftAlbum').onclick=()=>openCards('album')}wallet()};
openRewardStage=function(stage){if(!StageRewards.available(db,stage)){notify('本小关暂未开放，请家长检查。');return}openChapter(stage.unit);const button=document.querySelector('[data-chapter-skill="'+stage.skill+'"]');if(button){button.classList.add('reward-stage-highlight');button.scrollIntoView?.({behavior:'smooth',block:'center'})}};
const previousAllHome=home;home=function(){selectedChapter=null;previousAllHome()};
const previousAllLearn=renderLearn;renderLearn=function(){if(selectedChapter&&(!session||adventureMapOnly)){renderChapter(selectedChapter);return}previousAllLearn();if(mixedChapterView||session&&!adventureMapOnly)return;document.querySelectorAll('[data-map-unit]').forEach(button=>{const unit=button.dataset.mapUnit,skills=chapterSkills(unit),enabled=skills.some(s=>StageRewards.available(db,chapterStage(s.id))),remaining=skills.filter(s=>StageRewards.available(db,chapterStage(s.id))&&!StageRewards.firstClaimed(db,chapterStage(s.id).key)).length,record=db.stageRewards?.daily?.[DailyChallenge.dayKey()],bonus=record&&!record.claimedAt?StageRewards.stages().find(s=>s.key===record.stageKey&&s.unit===unit):null;button.querySelectorAll('.stage-pack-badge').forEach(b=>b.remove());button.classList.toggle('locked',!enabled);const island=button.querySelector('.pin-island'),index=M.UNITS.findIndex(u=>u.id===unit),mastered=skills.length&&skills.every(s=>M.chapterState(db,s.id).level>=3);island.innerHTML=(enabled?SCENE_PLANTS[mapPlantId(index)]:'♧')+'<span class="pin-number">'+(enabled?index===0?'✦':index:'🔒')+'</span>'+(mastered?'<span class="pin-check">★</span>':'');button.setAttribute('aria-label',MAP_TITLES[unit]+'，'+skills.length+'个小关'+(enabled?'':'，尚未开放'));if(bonus)button.insertAdjacentHTML('beforeend',stageBadge(bonus));else if(remaining)button.insertAdjacentHTML('beforeend','<span class="stage-pack-badge"><strong class="reward-badge-heading">'+remaining+'份小关首通</strong>'+rewardLoot(remaining,false)+'</span>');button.onclick=()=>openChapter(unit)});bindRewardHover()};
if(['home','learn'].includes(tab))go(tab);

// A continuous horizontal route; the scene remains fixed behind the scroll viewport.
var adventureLayoutObserver=null;
function adventureRouteLayout(viewportWidth,count,availableHeight=360){
const height=Math.max(300,Math.min(440,availableHeight)),spacing=viewportWidth<600?220:245,padding=125,width=Math.max(viewportWidth,padding*2+80+Math.max(0,count-1)*spacing),center=height*.56,amplitude=height*.16;
const points=Array.from({length:count},(_,i)=>({x:padding+i*spacing,y:center+Math.sin(i*Math.PI/2-Math.PI/2)*amplitude}));
let path='';points.forEach((p,i)=>{if(!i)path='M'+p.x.toFixed(1)+' '+p.y.toFixed(1);else{const prev=points[i-1],half=(p.x-prev.x)/2;path+=' C'+(prev.x+half).toFixed(1)+' '+prev.y.toFixed(1)+' '+(p.x-half).toFixed(1)+' '+p.y.toFixed(1)+' '+p.x.toFixed(1)+' '+p.y.toFixed(1)}});
return {width,height,viewportWidth,points,path};
}
function updateRouteControls(viewport){const root=viewport.parentElement;if(!root?.querySelector)return;const prev=root.querySelector('[data-route-prev]'),next=root.querySelector('[data-route-next]');if(prev)prev.disabled=viewport.scrollLeft<=2;if(next)next.disabled=viewport.scrollLeft>=viewport.scrollWidth-viewport.clientWidth-2;}
function arrangeAdventureRoute(body){if(!body?.getBoundingClientRect)return;const viewport=body.parentElement?.classList?.contains('map-route-scroll')?body.parentElement:body,bounds=viewport.getBoundingClientRect(),width=bounds.width;if(width<1)return;const pins=[...body.querySelectorAll('[data-map-unit]')],layout=adventureRouteLayout(width,pins.length,bounds.height||360);body.style.width=layout.width+'px';body.style.height=layout.height+'px';body.dataset.direction='horizontal';pins.forEach((pin,i)=>{const p=layout.points[i];pin.style.setProperty('--route-x',p.x+'px');pin.style.setProperty('--route-y',p.y+'px');pin.classList.toggle('route-edge-right',i===pins.length-1)});const svg=body.querySelector('.responsive-route');svg.setAttribute('viewBox','0 0 '+layout.width+' '+layout.height);svg.querySelectorAll('path').forEach(path=>path.setAttribute('d',layout.path));updateRouteControls(viewport)}
function bindRouteScroll(viewport,prev,next){
const reduced=()=>typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
prev.onclick=()=>viewport.scrollBy({left:-Math.max(220,viewport.clientWidth*.7),behavior:reduced()?'auto':'smooth'});next.onclick=()=>viewport.scrollBy({left:Math.max(220,viewport.clientWidth*.7),behavior:reduced()?'auto':'smooth'});
viewport.addEventListener?.('scroll',()=>updateRouteControls(viewport),{passive:true});
let drag=null;viewport.addEventListener?.('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0||e.target.closest?.('button'))return;drag={x:e.clientX,left:viewport.scrollLeft,id:e.pointerId};viewport.setPointerCapture?.(e.pointerId)});
viewport.addEventListener?.('pointermove',e=>{if(!drag)return;const distance=e.clientX-drag.x;if(Math.abs(distance)>4){viewport.scrollLeft=drag.left-distance;e.preventDefault()}});
const release=()=>{if(drag&&viewport.hasPointerCapture?.(drag.id))viewport.releasePointerCapture(drag.id);drag=null};viewport.addEventListener?.('pointerup',release);viewport.addEventListener?.('pointercancel',release);
viewport.addEventListener?.('keydown',e=>{if(e.target!==viewport)return;if(e.key==='ArrowRight'){next.onclick();e.preventDefault()}if(e.key==='ArrowLeft'){prev.onclick();e.preventDefault()}});
}
function mountAdventureShell(){
const paper=$('.map-paper');if(!paper?.querySelector||paper.dataset.shellLayout)return;const heading=paper.querySelector('.map-heading'),grades=paper.querySelector('.map-grade-tabs'),daily=paper.querySelector('#dailyChallenge'),limited=paper.querySelector('#todayStageReward');if(!heading||!grades||!limited)return;paper.dataset.shellLayout='horizontal';
const top=document.createElement('div');top.className='map-topline';top.appendChild(heading);top.appendChild(grades);
const challenges=document.createElement('div');challenges.className='map-challenges';challenges.appendChild(limited);if(daily)challenges.appendChild(daily);
const viewport=document.createElement('div');viewport.className='map-route-scroll';viewport.tabIndex=0;viewport.setAttribute('aria-label','章节路线，向左右滑动探索');
const body=document.createElement('div');body.className='map-route-body';body.innerHTML='<svg class="responsive-route" preserveAspectRatio="none" aria-hidden="true"><path fill="none" stroke="#fff1c6" stroke-width="18"/><path fill="none" stroke="#b99051" stroke-width="4" stroke-dasharray="7 12"/></svg>';paper.querySelectorAll('[data-map-unit]').forEach(pin=>body.appendChild(pin));paper.querySelectorAll('.legacy-map-route').forEach(path=>path.remove());paper.querySelector('.compass')?.remove();viewport.appendChild(body);
const controls=document.createElement('div');controls.className='map-route-controls';const prev=document.createElement('button'),next=document.createElement('button');prev.dataset.routePrev='true';prev.textContent='‹';prev.setAttribute('aria-label','向左探索');next.dataset.routeNext='true';next.textContent='›';next.setAttribute('aria-label','向右探索');controls.appendChild(prev);controls.appendChild(next);
const stage=document.createElement('div');stage.className='map-route-stage';stage.appendChild(viewport);stage.appendChild(controls);paper.appendChild(top);paper.appendChild(challenges);paper.appendChild(stage);const note=paper.querySelector('.map-note');if(note)paper.appendChild(note);bindRouteScroll(viewport,prev,next);arrangeAdventureRoute(body);
if(typeof ResizeObserver!=='undefined'){adventureLayoutObserver?.disconnect();adventureLayoutObserver=new ResizeObserver(()=>arrangeAdventureRoute(body));adventureLayoutObserver.observe(viewport)}
}
const shellLearn=renderLearn;renderLearn=function(){shellLearn();if(!mixedChapterView&&(!session||adventureMapOnly))mountAdventureShell()};
const shellGo=go;go=function(view){adventureLayoutObserver?.disconnect();adventureLayoutObserver=null;shellGo(view)};
window.addEventListener('resize',()=>{const body=document.querySelector('.map-route-body');if(body?.querySelectorAll)arrangeAdventureRoute(body)});
if(['home','learn','shop'].includes(tab))go(tab);

function wardrobeChoices(id,s){if(id===3)return [{id:'base',name:'原始外观',unlocked:true},{id:'skin',name:'森林园丁',unlocked:!!s.skin.unlocked,requirement:'装扮碎片 '+s.skin.fragments+'/'+s.skin.need},{id:'twin',name:'双胞向日葵',unlocked:true}];const c=RewardEngine.catalog[id],rows=[{id:'base',name:'原始外观',unlocked:true}];if(id===0)rows.push({id:'cowboy',name:'牛仔豌豆射手',unlocked:(s.counts[0]||0)>=2,requirement:'再次获得豌豆射手后解锁'});return rows}
function wardrobeActive(id,s){return id===3?(s.skin.variant==='twin'?'twin':s.skin.unlocked&&s.skin.equipped!==false?'skin':'base'):(id===0&&s.cosmeticChoices?.[id]==='cowboy'?'cowboy':'base')}
function wardrobePreview(id,choice,s){const state={...s,skin:{...s.skin,unlocked:choice==='skin'?true:s.skin.unlocked,variant:choice==='twin'?'twin':'single',equipped:choice==='skin'},cosmeticChoices:{...s.cosmeticChoices,[id]:choice==='cowboy'?'cowboy':'base'}};return '<div class="wardrobe-preview">'+scenePlantArt(id,state)+'</div>'}
function plantWardrobe(selected,trying){const s=RewardEngine.ensure(db),owned=safeCollection();if(selected!==3&&!owned.includes(selected))selected=owned[0]??3;const mascot=selected===3,name=mascot?'向日葵吉祥物':RewardEngine.catalog[selected].name,active=wardrobeActive(selected,s),choices=wardrobeChoices(selected,s);if(!choices.some(c=>c.id===trying&&c.unlocked))trying=active;const choice=choices.find(c=>c.id===trying)||choices[0],current=choices.find(c=>c.id===active)||choices[0],changed=choice.id!==active,roster=[...owned,3];
sceneSheet('植物装扮','<div class="wardrobe-room"><aside class="wardrobe-sidebar"><h3><b>1</b> 选一位伙伴</h3><div class="wardrobe-roster" aria-label="选择植物">'+roster.map(id=>'<button class="wardrobe-pick '+(selected===id?'selected':'')+'" data-dress-plant="'+id+'" aria-pressed="'+(selected===id)+'">'+SCENE_PLANTS[id]+'<span>'+escapeHTML(id===3?'向日葵 · 吉祥物':RewardEngine.catalog[id].name)+'</span></button>').join('')+'</div></aside><section class="wardrobe-workspace"><div class="wardrobe-heading"><div><h3>'+escapeHTML(name)+'</h3><p>正在使用：'+current.name+'</p></div><span class="wardrobe-step"><b>2</b> 点选造型试穿</span></div><div class="wardrobe-options '+(choices.length===1?'wardrobe-single':'')+'">'+choices.map(c=>'<button class="wardrobe-option '+(trying===c.id?'selected ':'')+(!c.unlocked?'outfit-locked':'')+'" data-dress-choice="'+c.id+'" '+(!c.unlocked?'disabled':'')+' aria-pressed="'+(trying===c.id)+'"><span class="outfit-badge '+(active===c.id?'equipped':'')+'">'+(!c.unlocked?'未解锁':active===c.id?'✓ 正在使用':trying===c.id?'试穿中':'可换装')+'</span>'+wardrobePreview(selected,c.id,s)+'<strong>'+c.name+'</strong><span class="outfit-description">'+(!c.unlocked?c.requirement:trying===c.id?(changed?'下方确认后换上':'当前造型'): '点击试穿')+'</span></button>').join('')+'</div><div class="wardrobe-footer"><div class="wardrobe-selection" aria-live="polite"><strong>'+(changed?'准备换上：'+choice.name:'已穿上：'+current.name)+'</strong><small>'+(mascot?'向日葵是常驻吉祥物，不参与抽卡。':choices.length===1?'新装扮会随美术更新陆续加入。':'试穿不消耗道具，确认后保存到花园。')+'</small></div><button class="wardrobe-confirm" id="wardrobeApply" '+(!changed?'disabled':'')+'>'+(changed?'✓ 确认换装':'✓ 正在使用')+'</button></div></section></div>');
document.querySelectorAll('[data-dress-plant]').forEach(b=>b.onclick=()=>{plantWardrobe(+b.dataset.dressPlant);document.querySelector('[data-dress-plant="'+b.dataset.dressPlant+'"]')?.focus?.({preventScroll:true})});document.querySelectorAll('[data-dress-choice]').forEach(b=>b.onclick=()=>{if(b.disabled)return;plantWardrobe(selected,b.dataset.dressChoice);document.querySelector('[data-dress-choice="'+b.dataset.dressChoice+'"]')?.focus?.({preventScroll:true})});$('#wardrobeApply').onclick=()=>{if(!changed||!choice.unlocked)return;const tx=itemTransaction(()=>CosmeticEngine.equip(db,selected,choice.id));if(tx.ok){home();plantWardrobe(selected);notify('装扮已保存。')}};
}
const wardrobeHome=home;home=function(){wardrobeHome();$('.scene-tools').insertAdjacentHTML('afterbegin','<button class="round-tool wardrobe-entry" id="gardenWardrobe"><span>✿</span>植物装扮</button>');$('#gardenWardrobe').onclick=()=>plantWardrobe()};
if(tab==='home')home();


const ART_SCENES=Object.fromEntries(Object.entries({"garden":"songzi-raster:34","vault":"songzi-raster:17"}).map(([k,v])=>[k,resolveGameArt(v)]));
for(const [key,url]of Object.entries(ART_SCENES))document.documentElement?.style?.setProperty?.('--'+key+'-art','url("'+url+'")');
function sceneBackgroundImage(key){return '<img class="scene-background-image" src="'+ART_SCENES[key]+'" alt="" decoding="async" draggable="false">'}
gardenLandscape=function(){return sceneBackgroundImage('garden')};vaultLandscape=function(){return sceneBackgroundImage('vault')};
const brandMark=document.querySelector('.brand-mascot');if(brandMark)brandMark.innerHTML=SCENE_PLANTS[3];
var gardenPage=0;
const artHome=home;home=function(){const total=safeCollection().length;gardenPage=Math.max(0,Math.min(gardenPage,Math.max(0,Math.ceil(total/6)-1)));artHome();const world=$('.garden-world'),state=RewardEngine.ensure(db);if(total>=3)world.insertAdjacentHTML('beforeend','<div class="garden-growth-decor" aria-label="伙伴相聚彩旗">⚑　⚑　⚑</div>');};
const artShop=shop;shop=function(){artShop();const count=db.packs.filter(p=>p.status==='available').length;$('.vault-world').insertAdjacentHTML('beforeend','<div class="vault-stock">'+[0,1,2].map(i=>'<button data-shelf-pack="'+i+'" aria-label="选择森林守卫补给">'+SCENE_PACK+'</button>').join('')+'<span>'+(count?'待开卡包 '+count:'森林守卫补给')+'</span></div>');document.querySelectorAll('[data-shelf-pack]').forEach(b=>b.onclick=sceneShopAction)};
const artMap=renderLearn;renderLearn=function(){artMap();if(!mixedChapterView&&(!session||adventureMapOnly))$('.map-world').insertAdjacentHTML('afterbegin',sceneBackgroundImage('garden'))};
const artQuestion=renderQuestion;renderQuestion=function(){artQuestion();$('.question').insertAdjacentHTML('afterbegin','<div class="question-mascot" aria-label="向日葵陪你一起思考">'+scenePlantArt(3,RewardEngine.ensure(db))+'</div>')};
if(['home','learn','shop'].includes(tab))go(tab);

function sceneContainRect(width,height){const scale=Math.min(width/1672,height/941),w=1672*scale,h=941*scale;return {left:(width-w)/2,top:(height-h)/2,width:w,height:h}}
function fitGardenArtwork(world){if(world?.querySelector?.('[data-garden-pot]')){fitGardenPots(world);return;}if(!world?.getBoundingClientRect||!world.querySelectorAll)return;const {width,height}=world.getBoundingClientRect();if(!width||!height)return;const r=sceneContainRect(width,height),mobile=width<=750;world.querySelectorAll('[data-garden-plant]').forEach(b=>{const x=parseFloat(b.style.getPropertyValue(mobile?'--mobile-x':'--x')),y=parseFloat(b.style.getPropertyValue(mobile?'--mobile-y':'--y'));if(Number.isFinite(x)&&Number.isFinite(y)){b.style.left=(r.left+r.width*x/100)+'px';b.style.top=(r.top+r.height*y/100)+'px'}})}
var gardenFitObserver=null;
const fitHome=home;home=function(){gardenFitObserver?.disconnect();fitHome();const world=$('.garden-world');fitGardenArtwork(world);if(typeof ResizeObserver!=='undefined'&&world?.getBoundingClientRect){gardenFitObserver=new ResizeObserver(()=>fitGardenArtwork(world));gardenFitObserver.observe(world)}};
window.addEventListener('resize',()=>fitGardenArtwork(document.querySelector('.garden-world')));
if(tab==='home')home();

function fitUnifiedCardRoom(){const mount=document.querySelector('#unifiedCardMount'),room=document.querySelector('#cardOverlay');if(!mount?.getBoundingClientRect||!room?.classList?.contains?.('inline-card-room'))return;const r=mount.getBoundingClientRect();room.style.left=(r.left+(window.scrollX||0))+'px';room.style.top=(r.top+(window.scrollY||0))+'px';room.style.width=r.width+'px';room.style.height=r.height+'px'}
function updateUnifiedShopTools(){const buy=document.querySelector('#roomBuy');if(!buy)return;buy.disabled=db.wallet.sun<RewardEngine.CONFIG.pack.price;buy.textContent='☀ '+(isTesting()?'∞':String(RewardEngine.CONFIG.pack.price))+' 兑换卡包';const status=document.querySelector('#roomWallet');if(status)status.textContent=db.packs.filter(p=>p.status==='available').length+' 包待开启'}
function unifiedLeafShop(){const state=RewardEngine.ensure(db),missing=RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy&&!state.counts[c.id]);sceneSheet('叶片小铺','<p>现有叶片 '+(isTesting()?'∞':db.wallet.leaves)+'</p><div class="scene-mini-plants">'+missing.map(c=>'<button data-room-exchange="'+c.id+'" '+(db.wallet.leaves<{R:10,SR:30,SSR:80}[c.rarity]?'disabled':'')+'>'+SCENE_PLANTS[c.id]+'<span>'+escapeHTML(c.name)+'</span><span>❧ '+{R:10,SR:30,SSR:80}[c.rarity]+'</span></button>').join('')+'</div>'+(!missing.length?'<p>本期植物已全部加入收藏。</p>':''));document.querySelectorAll('[data-room-exchange]').forEach(b=>b.onclick=()=>{const tx=itemTransaction(()=>RewardEngine.exchange(db,+b.dataset.roomExchange));if(tx.ok){wallet();closeSceneSheet();notify('新伙伴已经加入花园。');if(frameReady)postToCards({type:'songzi:restore',rewardSnapshot:RewardEngine.snapshot(db),owned:safeCollection(),packs:db.packs.filter(p=>p.status==='available').map(p=>p.id)},'*')}})}
const roomOpenCards=openCards;
function openInlineCardMode(mode){const room=$('#cardOverlay');room.classList.add('inline-card-room');roomOpenCards(mode);room.hidden=false;fitUnifiedCardRoom();updateUnifiedShopTools()}
shop=function(){
$('#main').innerHTML='<section class="visual-world vault-world unified-vault" id="unifiedCardMount" aria-label="森林补给站"><span class="room-loading">正在准备森林补给站…</span></section>';
const head=$('#cardOverlay .shop-head');if(head?.querySelector&&!head.querySelector('#roomBuy'))head.insertAdjacentHTML('afterbegin','<div class="room-toolbar"><strong>森林补给站 <small id="roomWallet"></small></strong><div><button id="roomPacks">卡包</button><button id="roomAlbum">收藏册</button><button id="roomBuy">☀ 200 兑换卡包</button><button id="roomLeaves">叶片兑换</button><button id="roomItems">道具</button><button id="roomGrowth">成长</button></div></div>');
$('#roomPacks').onclick=()=>openInlineCardMode('packs');$('#roomAlbum').onclick=()=>openInlineCardMode('album');$('#roomBuy').onclick=()=>openInlineCardMode('buy');$('#roomLeaves').onclick=unifiedLeafShop;$('#roomItems').onclick=itemBag;$('#roomGrowth').onclick=()=>sceneSheet('收藏与外观成长',rewardProgressHTML());$('#closeCards').onclick=()=>openInlineCardMode('packs');
openInlineCardMode('packs');
};
openCards=function(mode){if(mode==='buy'&&db.wallet.sun<RewardEngine.CONFIG.pack.price){notify('阳光还不够，先去完成冒险吧。');return}if(tab!=='shop')go('shop');openInlineCardMode(mode)};
const roomWallet=wallet;wallet=function(){roomWallet();updateUnifiedShopTools()};
const roomGo=go;go=function(view){roomGo(view);if(tab!=='shop'){const room=$('#cardOverlay');room.hidden=true;room.classList.remove('inline-card-room')}};
window.addEventListener('resize',fitUnifiedCardRoom);
window.addEventListener('message',e=>{if(!acceptsCardMessage(e))return;if(e.data?.type==='songzi:ready')fitUnifiedCardRoom();if(e.data?.type==='songzi:view'){const album=e.data.view==='album';$('#roomAlbum').classList.toggle('active',album);$('#roomPacks').classList.toggle('active',!album)}if(['songzi:ready','songzi:openRequest','songzi:grantReady'].includes(e.data?.type))updateUnifiedShopTools()});
if(tab==='shop')shop();

function bindGardenMascot(){const mascot=document.querySelector('.garden-mascot');if(!mascot?.setAttribute)return;mascot.setAttribute('role','button');mascot.setAttribute('tabindex','0');mascot.setAttribute('aria-label','向日葵，点击打招呼');mascot.classList.add('garden-mascot-idle');const greet=()=>{mascot.classList.remove('garden-mascot-greet');void mascot.offsetWidth;mascot.classList.add('garden-mascot-greet');const text=mascot.querySelector?.('span');if(text)text.textContent='你好呀，小松子！';setTimeout(()=>{mascot.classList.remove('garden-mascot-greet');if(text)text.textContent='一起出发吧，小松子！'},950)};mascot.onclick=greet;mascot.onkeydown=e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();greet()}}}
const latestMascotHome=home;home=function(){latestMascotHome();bindGardenMascot()};
if(tab==='home')home();

// All new garden art passes through this adapter; scene and chooser share the same asset key.
function gardenArtImage(key,cssClass,viewBox='0 0 120 120'){const src=typeof GARDEN_ART==='undefined'?'':GARDEN_ART[key];if(!src)return '';if(src.startsWith('<svg '))return src.replace('<svg ','<svg class="'+cssClass+' imported-garden-art" aria-hidden="true" ');const box=viewBox.split(' ').map(Number);return '<svg class="'+cssClass+' imported-garden-art" viewBox="'+viewBox+'" aria-hidden="true"><image width="'+box[2]+'" height="'+box[3]+'" href="'+src+'" preserveAspectRatio="xMidYMax meet"/></svg>'}

function gardenDecorArt(id){const c=GardenDecor.catalog.find(c=>c.id===id);return c&&typeof gardenArtImage==='function'?gardenArtImage(c.assetKey,'decor-art'):''}
function gardenDecorHTML(){const g=GardenDecor.ensure(db);return g.slots.map((id,i)=>'<button class="garden-decor-point '+(id?'decor-filled':'decor-empty')+'" data-garden-decor="'+i+'" aria-label="装饰点 '+(i+1)+'，'+(id?GardenDecor.catalog.find(c=>c.id===id).name:'空位置')+'，点击布置">'+(id?gardenDecorArt(id):((typeof gardenArtImage==='function'?gardenArtImage('marker.decor-empty','decor-empty-art'):'')||'<span class="decor-empty-ring"><span>✧</span><b>＋</b></span>'))+'<span class="decor-point-label">装饰 '+(i+1)+'</span></button>').join('')}
function chooseGardenDecor(index,category='all'){const g=GardenDecor.ensure(db),available=GardenDecor.available(db);if(!GardenDecor.categories.some(c=>c.id===category))category='all';sceneSheet('布置第 '+(index+1)+' 个装饰点','<p class="garden-picker-note">选择装饰点缀花园，已摆放的装饰会移动或互换。</p><div class="decor-category-tabs" role="group" aria-label="装饰分类">'+GardenDecor.categories.map(c=>'<button data-decor-category="'+c.id+'" aria-pressed="'+(category===c.id)+'" class="'+(category===c.id?'active':'')+'">'+c.name+'</button>').join('')+'</div><div class="garden-picker decor-picker">'+GardenDecor.catalog.filter(c=>category==='all'||c.category===category).map(c=>{const at=g.slots.indexOf(c.id),current=g.slots[index]===c.id,locked=!available.includes(c.id),status=locked?decorUnlockText(c.id):current?'当前装饰点':at>=0?'已在 '+(at+1)+' 号装饰点':'未摆放';return '<button data-decor-choice="'+c.id+'" '+(locked?'disabled':'')+' class="'+(current?'selected ':'')+(at>=0?'plant-placed':'plant-available')+'" aria-pressed="'+current+'"><span class="picker-corner" aria-hidden="true">'+(locked?'◇':current?'✓':at>=0?'↗':'＋')+'</span><span class="picker-portrait">'+gardenDecorThumbnail(c.id)+'</span><strong>'+c.name+'</strong><small class="picker-status">'+status+'</small></button>'}).join('')+'</div><div class="actions"><button class="secondary" id="clearGardenDecor" '+(!g.slots[index]?'disabled':'')+'>移出装饰点</button><button class="secondary" id="cancelGardenDecor">返回花园</button></div>');const apply=id=>{const tx=itemTransaction(()=>GardenDecor.assign(db,index,id));if(tx.ok){closeSceneSheet();home();notify(id===null?'装饰已收回。':'装饰已摆好。')}};document.querySelectorAll('[data-decor-category]').forEach(b=>b.onclick=()=>chooseGardenDecor(index,b.dataset.decorCategory));document.querySelectorAll('[data-decor-choice]').forEach(b=>b.onclick=()=>{if(!b.disabled)apply(b.dataset.decorChoice)});$('#clearGardenDecor').onclick=()=>apply(null);$('#cancelGardenDecor').onclick=closeSceneSheet}
function fitGardenDecor(world,points){world.querySelectorAll('[data-garden-decor]').forEach(b=>{const p=points[+b.dataset.gardenDecor];b.style.left=p.x+'px';b.style.top=p.y+'px';b.style.width=p.size+'px';b.style.height=p.size+'px';b.style.zIndex=p.z})}

function gardenPotHTML(index,id,state){let html=gardenPotFallbackHTML(index,id,state);const imported=typeof gardenArtImage==='function'?gardenArtImage('container.pot','pot-vessel','0 0 120 95'):'';if(imported)html=html.replace(/<svg class="pot-vessel"[\s\S]*?<\/svg>/,imported);return html}
function gardenPotFallbackHTML(index,id,state){const c=RewardEngine.catalog[id],effect=c?CosmeticEngine.effect(state,id):null;return '<button class="garden-bed garden-pot '+(c?'occupied ':'empty ')+(effect==='aura'?'glow-ssr':effect?'glow-sr':'')+'" data-pot-skin="terracotta" data-garden-pot="'+index+'" data-garden-plant="'+(c?id:'empty')+'" aria-label="第'+(index+1)+'号花盆，'+(c?c.name:'空花盆')+'，点击布置" data-name="'+(c?c.name:'选择植物')+'"><svg class="pot-vessel" viewBox="0 0 120 95" aria-hidden="true"><defs><linearGradient id="potGlaze'+index+'"><stop stop-color="#f6ba6a"/><stop offset=".45" stop-color="#d28540"/><stop offset="1" stop-color="#9c5129"/></linearGradient></defs><ellipse cx="60" cy="83" rx="48" ry="8" fill="#365529" opacity=".28"/><path d="M20 29L31 77Q60 93 89 77L100 29Z" fill="url(#potGlaze'+index+')" stroke="#874322" stroke-width="3"/><path d="M33 43L39 71" stroke="#ffd69a" stroke-width="5" stroke-linecap="round" opacity=".6"/><ellipse cx="60" cy="29" rx="48" ry="17" fill="#edaa61" stroke="#874322" stroke-width="3"/><ellipse cx="60" cy="27" rx="39" ry="11" fill="#563c26"/><path d="M30 24Q60 13 89 24" fill="none" stroke="#9c7549" stroke-width="3"/></svg>'+(c?'<span class="pot-plant">'+scenePlantArt(id,state)+'</span>':'<span class="pot-add">+</span>')+'<span class="pot-number">'+String(index+1)+'</span></button>'}
function chooseGardenPot(index){const owned=safeCollection(),g=GardenLayout.ensure(db,owned),s=RewardEngine.ensure(db);sceneSheet('布置第 '+(index+1)+' 号花盆','<p class="garden-picker-note">选择伙伴住进来。每种植物可摆放的数量等于累计获得数量。</p><div class="garden-picker">'+owned.map(id=>{const c=RewardEngine.catalog[id],at=g.slots.indexOf(id);const current=g.slots[index]===id,status='已摆放 '+g.slots.filter(x=>x===id).length+' / 拥有 '+Math.max(1,plantObtainedTotal(db,id))+' 株'+(current?' · 当前花盆':'');return '<button data-pot-choice="'+id+'" data-placement="'+(current?'current':at>=0?'placed':'available')+'" class="'+(current?'selected ': '')+(at>=0?'plant-placed':'plant-available')+'" aria-pressed="'+current+'" aria-label="'+escapeHTML(c.name)+'，'+status+'"><span class="picker-corner" aria-hidden="true">'+(current?'✓':at>=0?'<svg viewBox="0 0 24 24"><path d="M5 8h14l-2 13H7Z" fill="#df9a55" stroke="#814c29" stroke-width="2"/><ellipse cx="12" cy="8" rx="9" ry="4" fill="#f4c17d" stroke="#814c29" stroke-width="2"/><ellipse cx="12" cy="7" rx="6" ry="2" fill="#6d492e"/></svg><b>'+(at+1)+'</b>':'+')+'</span><span class="picker-portrait">'+scenePlantArt(id,s)+'</span><strong>'+escapeHTML(c.name)+'</strong><small class="picker-status">'+status+'</small></button>' }).join('')+'</div>'+(!owned.length?'<p>还没有植物伙伴，去冒险赢取卡包吧！</p>':'')+'<div class="actions"><button class="secondary" id="clearGardenPot">移出花盆</button><button class="secondary" id="cancelGardenPot">返回花园</button></div>');const apply=id=>{const tx=itemTransaction(()=>GardenLayout.assign(db,safeCollection(),index,id));if(tx.ok){closeSceneSheet();home();notify(id===null?'花盆已腾空。':'植物已摆好。')}};document.querySelectorAll('[data-pot-choice]').forEach(b=>b.onclick=()=>apply(+b.dataset.potChoice));$('#clearGardenPot').onclick=()=>apply(null);$('#cancelGardenPot').onclick=closeSceneSheet}
function fitGardenPots(world){if(!world?.getBoundingClientRect||!world.querySelectorAll)return;const {width:w,height:h}=world.getBoundingClientRect();if(!w||!h)return;const layout=GardenLayout.arrangement(w,h),points=layout.pots;fitGardenDecor(world,layout.decor);world.querySelectorAll('[data-garden-pot]').forEach(b=>{const p=points[+b.dataset.gardenPot];b.style.left=p.x+'px';b.style.top=p.y+'px';b.style.width=p.size+'px';b.style.height=p.size+'px';b.style.zIndex=p.z});const mascot=world.querySelector?.('.garden-mascot');if(mascot?.getBoundingClientRect&&!mascot.classList.contains('mascot-dragging')){const rect=mascot.getBoundingClientRect(),p=GardenLayout.mascotPoint(w,h,rect.width,rect.height,GardenLayout.ensure(db,safeCollection()).mascot);mascot.style.left=p.x+'px';mascot.style.top=p.y+'px'}}
function bindGardenDrag(world){const mascot=world?.querySelector?.('.garden-mascot');if(!mascot?.addEventListener)return;mascot.setAttribute('aria-label','向日葵：拖动调整位置，点击打招呼，方向键微调');let drag=null,suppress=false;const greet=mascot.onclick;mascot.onclick=e=>{if(suppress){suppress=false;return}greet?.(e)};
 const place=(x,y)=>{const r=world.getBoundingClientRect(),m=mascot.getBoundingClientRect(),p=GardenLayout.mascotPoint(r.width,r.height,m.width,m.height,{x:x/r.width,y:y/r.height});mascot.style.left=p.x+'px';mascot.style.top=p.y+'px';return {x:p.x/r.width,y:p.y/r.height}};
 mascot.addEventListener('pointerdown',e=>{if(e.button!==undefined&&e.button!==0)return;const r=world.getBoundingClientRect(),m=mascot.getBoundingClientRect();drag={id:e.pointerId,x:e.clientX,y:e.clientY,cx:m.left-r.left+m.width/2,cy:m.top-r.top+m.height/2,moved:false,point:null};suppress=false;mascot.setPointerCapture?.(e.pointerId)});
 mascot.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.moved&&Math.hypot(dx,dy)<6)return;drag.moved=true;mascot.classList.add('mascot-dragging');drag.point=place(drag.cx+dx,drag.cy+dy);e.preventDefault()});
 const end=(e,cancel)=>{if(!drag||e.pointerId!==drag.id)return;const d=drag;drag=null;mascot.classList.remove('mascot-dragging');suppress=d.moved;if(d.moved&&!cancel){const tx=itemTransaction(()=>{GardenLayout.ensure(db,safeCollection()).mascot=d.point});if(!tx.ok)fitGardenPots(world)}else fitGardenPots(world);if(mascot.hasPointerCapture?.(e.pointerId))mascot.releasePointerCapture(e.pointerId)};
 mascot.addEventListener('pointerup',e=>end(e,false));mascot.addEventListener('pointercancel',e=>end(e,true));mascot.addEventListener('lostpointercapture',e=>{if(drag)end(e,true)});
 const keyGreeting=mascot.onkeydown;mascot.onkeydown=e=>{const delta={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]}[e.key];if(!delta){keyGreeting?.(e);return}e.preventDefault();const r=world.getBoundingClientRect(),m=mascot.getBoundingClientRect(),p=place(m.left-r.left+m.width/2+delta[0],m.top-r.top+m.height/2+delta[1]);const tx=itemTransaction(()=>{GardenLayout.ensure(db,safeCollection()).mascot=p});if(!tx.ok)fitGardenPots(world)}
}
function gardenToolIllustration(kind){const imported=typeof gardenArtImage==='function'?gardenArtImage('ui.'+(kind==='partners'?'partners':'wardrobe'),'garden-tool-art','0 0 110 100'):'';if(imported)return imported;const leaf='<path d="M46 47Q22 17 20 40Q21 57 44 59M46 47Q51 20 68 25Q76 46 46 57" fill="#50b42e" stroke="#245c22" stroke-width="3"/><path d="M44 68V48M44 55L30 43M45 49L60 36" stroke="#245c22" stroke-width="3" fill="none" stroke-linecap="round"/>';return '<svg class="garden-tool-art" viewBox="0 0 110 100" aria-hidden="true">'+(kind==='partners'?'<g transform="rotate(10 55 50)"><rect x="27" y="13" width="61" height="77" rx="8" fill="#cb853a" stroke="#492b15" stroke-width="4"/><path d="M36 17h46v66H36q-7 3-9 6V25q1-8 9-8" fill="#fff0bc" stroke="#9a5729" stroke-width="3"/><path d="M35 23h42v53H35" fill="#f8d88c" stroke="#d5a050" stroke-width="2"/><path d="M37 86h44" stroke="#ffeac0" stroke-width="3"/><g transform="translate(12 8) scale(.8)">'+leaf+'</g><path d="M29 23v54" stroke="#fff7d7" stroke-width="3" stroke-linecap="round"/></g>':'<g transform="rotate(-8 55 50)"><ellipse cx="55" cy="67" rx="48" ry="19" fill="#e7ad4b" stroke="#573417" stroke-width="4"/><path d="M27 61L32 34Q54 12 79 34L85 61Q59 78 27 61Z" fill="#ffe6a0" stroke="#573417" stroke-width="4"/><path d="M32 47Q58 58 81 45L84 59Q59 73 28 61Z" fill="#4caa35" stroke="#2a6324" stroke-width="3"/><path d="M38 35Q48 26 64 27" fill="none" stroke="#fff8d1" stroke-width="5" stroke-linecap="round"/><path d="M21 69Q57 84 91 66" fill="none" stroke="#ffe8a5" stroke-width="3"/><g transform="translate(29 56)"><path d="M0-7Q-10-18-13-7Q-22 1-10 6Q-9 20 1 10Q14 19 15 6Q27-2 15-8Q10-21 0-7" fill="#fffbe3" stroke="#6c692d" stroke-width="2"/><circle r="6" fill="#ffc83d" stroke="#9e7022" stroke-width="2"/></g></g>')+'</svg>'}
function gardenToolsOnly(){const tools=$('.garden-world .scene-tools');if(!tools)return;tools.innerHTML='<button class="round-tool garden-art-tool" id="gardenCollection" aria-label="伙伴，查看我的植物伙伴">'+gardenToolIllustration('partners')+'<span class="garden-tool-label">伙伴</span></button><button class="round-tool garden-art-tool wardrobe-entry" id="gardenWardrobe" aria-label="装扮，为植物更换外观">'+gardenToolIllustration('dress')+'<span class="garden-tool-label">装扮</span></button>';$('#gardenCollection').onclick=sceneCollection;$('#gardenWardrobe').onclick=()=>plantWardrobe()}
let gardenLayoutMounted=false;const twentyPotHome=home;home=function(){const priorLayout=JSON.stringify([db.gardenLayout,db.gardenDecor]);twentyPotHome();gardenToolsOnly();const world=$('.garden-world');document.querySelectorAll('[data-garden-pot]').forEach(b=>b.onclick=()=>chooseGardenPot(+b.dataset.gardenPot));document.querySelectorAll('[data-garden-decor]').forEach(b=>b.onclick=()=>chooseGardenDecor(+b.dataset.gardenDecor));fitGardenPots(world);bindGardenDrag(world);if(!gardenLayoutMounted||priorLayout!==JSON.stringify([db.gardenLayout,db.gardenDecor])){gardenLayoutMounted=true;save()}};
if(tab==='home')home();


// Runtime integration comes last so no legacy completion wrapper can issue old rewards.
function sunEntry(amount,reason,ref){if(db.ledger.some(x=>x.ref===ref))return false;db.wallet.sun+=amount;db.ledger.push({ref,resource:'sun',amount,reason,at:new Date().toISOString()});return true}
credit=function(amount,reason,ref){const tx=itemTransaction(()=>sunEntry(amount,reason,ref));if(tx.ok)wallet();return tx.ok};
function supportContent(){try{return SongziLearningSupport.support(q,q.attempts?.findLast(a=>!a.correct)?.value)}catch{return null}}
function supportEvent(stage,reason){q.supportEvents??=[];q.supportEvents.push({at:new Date().toISOString(),stage,reason,beforeAttempt:q.attempts.length});q.supportStage=stage;q.hintCount=(q.hintCount||0)+1;if(stage===2)q.workedExampleSeen=true;delete q.learningSupport;const index=db.questions.findIndex(x=>x.id===q.id);if(index<0)db.questions.push(q);else db.questions[index]=q}
function showLearningSupport(stage,reason='requested'){if(!q||q.completed)return;const support=supportContent();if(!support){notify('这道题的分步提示暂不可用，请先暂停并请家长查看。');return}const tx=itemTransaction(()=>supportEvent(stage,reason));if(tx.ok)renderHint()}
hint=function(){showLearningSupport(Math.min(2,(q.supportStage??-1)+1))};
renderHint=function(){if(!q)return;const support=supportContent();if(!support){$('#hintArea').innerHTML='<div class="hintbox">分步提示暂不可用，可以暂停并请家长查看。</div>';return}const stage=Math.max(0,Math.min(2,q.supportStage??0)),part=support.stages[stage];$('#hintArea').innerHTML='<section class="learning-help"><div class="support-progress">'+support.stages.map((s,i)=>'<span class="'+(i===stage?'active':'')+'">'+(i+1)+' '+s.title+'</span>').join('')+'</div><h3>'+escapeHTML(part.title)+'</h3><p>'+escapeHTML(part.message)+'</p>'+(part.diagram||'')+(part.task?'<div class="support-task"><label for="supportStepAnswer">先试这一小步：'+escapeHTML(part.task.text)+'</label><div class="actions"><input id="supportStepAnswer" inputmode="decimal" autocomplete="off" aria-label="小步答案"><button class="secondary" id="supportCheck">检查小步</button></div><p id="supportStepFeedback" aria-live="polite"></p></div>':'')+'<div class="actions">'+(stage<1?'<button class="secondary" id="supportGuided">看图一起做</button>':'')+(stage<2?'<button class="secondary" id="supportWorked">带我做一遍</button>':'<button class="secondary" id="supportReturn">我来填写原题</button>')+'</div><small>提示免费；小步练习不另计答题数或奖励。</small></section>';if(part.task)$('#supportCheck').onclick=()=>{const raw=$('#supportStepAnswer').value.trim();if(!/^\d+(\.\d+)?$/.test(raw)){notify('请填写小步答案。');return}const correct=Math.abs(Number(raw)-part.task.answer)<1e-8;const tx=itemTransaction(()=>{q.supportEvents.push({at:new Date().toISOString(),stage,reason:'step-attempt',value:Number(raw),correct,beforeAttempt:q.attempts.length})});if(tx.ok)$('#supportStepFeedback').textContent=correct?(part.afterTask||'这一小步完成了，再回到原题试一试。'):'这一小步还需要再看看。也可以直接点“带我做一遍”。'};if(stage<1)$('#supportGuided').onclick=()=>showLearningSupport(1);if(stage<2)$('#supportWorked').onclick=()=>showLearningSupport(2);else $('#supportReturn').onclick=()=>$('#answer').focus()};
submit=function(){if(!q||q.completed||q.skipped)return;const raw=$('#answer').value.trim();if(!/^\d+(?:\.\d+)?$/.test(raw)||!Number.isFinite(+raw)||+raw>1000000){notify('请填写一个数字答案。');return}const value=+raw,correct=Math.abs(value-q.answer)<1e-8,used=elapsed();const tx=itemTransaction(()=>{q.checked=$('#checked').checked;q.attempts.push({value,correct,activeMs:used,at:new Date().toISOString(),checked:q.checked,hintsBefore:q.hintCount||0,supportStageBefore:q.supportStage??-1,workedBefore:!!q.workedExampleSeen});if(correct){q.completed=true;q.completedAt=new Date().toISOString();q.activeMs=used;}else if(supportContent())supportEvent(0,'automatic-error-feedback');delete q.learningSupport;const i=db.questions.findIndex(x=>x.id===q.id);if(i<0)db.questions.push(q);else db.questions[i]=q;if(correct){M.updateReview(db,q);if(!session.questionIds.includes(q.id))session.questionIds.push(q.id);if(!q.preview)sunEntry(5,'完成数学任务',q.id)}});if(!tx.ok){startClock();return}wallet();if(correct){stopClock();showSuccess()}else{$('#feedback').innerHTML='<div class="feedback">答案还需要再想一想。我们先找下一步，也可以直接看完整示范。</div>';if(q.hintCount)renderHint();$('#answer').select()}};
finishSession=function(){if(!session)return;const ended=session,rows=sessionRows(),beforeSun=db.wallet.sun;stopClock();const tx=itemTransaction(()=>{ended.status='completed';ended.endedAt=new Date().toISOString();let grants=[];if(!ended.preview){if(ended.dailyKey){DailyChallenge.claim(db,ended.dailyKey);grants=typeof gradeEarns==='function'&&!gradeEarns('g3')?[]:[{kind:'review',sun:10,title:'每日短复习 +10阳光'}]}else{sunEntry(20,'完成整场冒险',ended.id);grants=StageRewards.settle(db,ended)}}return grants});if(!tx.ok){$('#main').innerHTML='<section class="panel"><h2>本轮等待保存</h2><p>奖励尚未发放，保存成功后再领取。</p><button class="primary" id="retryFinish">重试保存并完成</button></section>';$('#retryFinish').onclick=()=>{storageOK=true;finishSession()};return}const grants=tx.value,total=(typeof gradeEarns==='function'&&!gradeEarns('g3'))?0:rows.filter(q=>q.completed&&!q.preview).length*5+db.wallet.sun-beforeSun,packs=grants.filter(g=>g.packId).length,skill=ended.chapterSkill,unit=ended.unit;session=null;q=null;wallet();const st=M.learningAnalysis(rows);$('#main').innerHTML='<section class="mixed-chapter mixed-round-complete"><div class="mixed-complete-art">'+SCENE_PLANTS[3]+'</div><h1>本轮完成！</h1><p>'+escapeHTML(ended.title)+'</p><div class="mixed-reward">☀ +'+total+'</div><p>每题阳光 '+((typeof gradeEarns==='function'&&!gradeEarns('g3'))?'0 · 练习年级不发奖励':rows.filter(q=>q.completed&&!q.preview).length*5+(ended.dailyKey?' · 每日复习 +10':' · 整轮 +20'))+'</p>'+grants.map(g=>'<p>'+escapeHTML(g.title)+'</p>').join('')+(packs?'<div class="receipt-packs">'+rewardLoot(packs,false)+'</div>':'')+'<p>独立首答 '+st.independent+' 题 · 提示后首提正确 '+st.assistedFirst+' 题 · 订正完成 '+st.corrected+' 题</p><div class="actions">'+(skill?'<button class="scene-cta" id="integrationAgain">再练一轮</button>':'')+'<button class="wood-sign" id="integrationMap">返回冒险地图</button><button class="wood-sign" id="integrationHome">回花园休息</button><button class="scene-cta" id="integrationShop">'+(packs?'打开整章卡包':'去补给站')+'</button></div></section>';if(skill)$('#integrationAgain').onclick=()=>startChapterSkill(skill);$('#integrationMap').onclick=()=>{selectedChapter=null;mixedChapterView=false;adventureMapOnly=true;go('learn')};$('#integrationHome').onclick=()=>go('home');$('#integrationShop').onclick=()=>openCards('packs')};
function sunLoot(amount){return '<span class="reward-loot"><span class="reward-loot-item"><span class="reward-sun-art" aria-hidden="true">☀</span><b class="reward-quantity">＋'+amount+'</b><small>阳光</small></span></span>'}
stageBadge=function(stage){if(!StageRewards.available(db,stage))return '';const status=rewardStageStatus(stage);if(!status.first&&!status.bonus)return '';return '<span class="stage-pack-badge '+(status.bonus?'bonus':'')+'"><strong class="reward-badge-heading">'+(status.bonus?'回访挑战':'首次通关')+'</strong>'+sunLoot((status.first?20:0)+(status.bonus?10:0))+'</span>'};
addRewardNotice=function(){const record=StageRewards.daily(db),stage=record&&StageRewards.stages().find(s=>s.key===record.stageKey),enabled=stage&&StageRewards.available(db,stage);$('.map-paper').insertAdjacentHTML('beforeend','<button id="todayStageReward" class="today-stage-reward reward-hero" '+(!enabled?'disabled':'')+'><span class="reward-hero-copy"><span class="reward-time-tag">每日1次 · 不限作答时间</span><strong>'+(record?.claimedAt?'回访挑战 · 已完成':'回访挑战')+'</strong><small>'+escapeHTML(enabled?record.title:'完成冒险后，推荐需要巩固的小关')+'</small><em>'+(enabled?'查看小关 ›':'探索后开启')+'</em></span>'+sunLoot(10)+'</button>');$('#todayStageReward').onclick=()=>{if(enabled)openRewardStage(stage)}};
attachDailyButton=function(container,kind){const st=DailyChallenge.status(db);container.insertAdjacentHTML('beforeend','<button class="'+(kind==='map'?'map-daily-button daily-reward-tile':'round-tool')+'" id="dailyChallenge" '+(st.claimed?'disabled':'')+' aria-label="每日复习，完成额外获得10阳光"><strong>'+(st.claimed?'今日复习已完成':'每日复习')+'<small class="daily-task-description">温习做过的题目</small></strong>'+sunLoot(10)+'</button>');$('#dailyChallenge').onclick=challengeEntry};
challengeEntry=function(){const st=DailyChallenge.status(db);sceneSheet('每日短复习','<h3>回顾做过的题</h3><p>'+(st.claimed?'今日已领取复习奖励。':st.available?st.target+' 道已做题；每题5阳光，全部完成额外10阳光。':'先完成至少3道不同的题，再回来复习。')+'</p><button class="scene-cta" id="beginDaily" '+(st.claimed?'disabled':'')+'>'+(st.available||isTesting()?'开始复习':'先去冒险')+'</button>');$('#beginDaily').onclick=()=>{closeSceneSheet();if(st.available||isTesting())startDaily();else go('learn')}};
const integratedMap=renderLearn;renderLearn=function(){integratedMap();if(!mixedChapterView&&(!session||adventureMapOnly)){document.querySelectorAll('[data-map-unit]').forEach(button=>{button.querySelectorAll('.stage-pack-badge').forEach(b=>b.remove());const unit=button.dataset.mapUnit,all=StageRewards.stages().filter(s=>s.unit===unit),enabled=all.some(s=>StageRewards.available(db,s)),done=!!db.stageRewards?.chapters?.[unit];if(enabled&&!done)button.insertAdjacentHTML('beforeend','<span class="stage-pack-badge"><strong class="reward-badge-heading">整章通关</strong>'+rewardLoot(1,false)+'</span>')})}};

function analysisRows(days=parentDays,offset=0){const now=Date.now(),end=now-offset*864e5,start=days?end-days*864e5:0;return db.questions.filter(q=>!q.preview&&Date.parse(q.createdAt)>=start&&Date.parse(q.createdAt)<=end&&(q.attempts?.length||q.skipped||q.supportEvents?.length))}
function analysisHTML(rows){const st=M.learningAnalysis(rows),skills=new Map();for(const row of rows){const key=M.questionChapterSkill?.(row)||row.topic;const list=skills.get(key)||[];list.push(row);skills.set(key,list)}const groups=[...skills].map(([key,qs])=>({key,qs,stat:M.learningAnalysis(qs),name:M.chapterSpec(key)?.name||M.TOPICS[key]?.name||key}));const outcome=q=>q.skipped?'使用跳过卡':q.workedExampleSeen?'看过完整示范后完成':M.independentFirst(q)?'独立首答正确':q.attempts[0]?.correct?'提示后首提正确':q.completed?'订正后完成':'尚未完成';return '<section class="panel analysis-report"><h2>学习分析 · 首答与支持分开看</h2><div class="analysis-metrics">'+[['独立首答正确',st.independent],['提示后首提正确',st.assistedFirst],['订正后完成',st.corrected],['看过完整示范',st.worked],['练习天数',st.days],['跳过',st.skipped]].map(([label,n])=>'<div><b>'+n+'</b><span>'+label+'</span></div>').join('')+'</div><p>首次提交正确 '+st.first+'/'+st.n+'；其中无需数学提示的独立首答 '+st.independent+'/'+st.n+'。'+st.unique+' 种题面，原题回访 '+st.revisits+' 次。</p>'+(st.insufficient?'<div class="analysis-warning">数据不足：当前少于3个练习日或5次作答机会，仅作观察，不判断掌握。</div>':'')+'<div class="table-scroll"><table><tr><th>知识点</th><th>独立首答</th><th>提示后首提</th><th>订正</th><th>天数</th><th>观察</th></tr>'+groups.map(g=>'<tr><td>'+escapeHTML(g.name)+'</td><td>'+g.stat.independent+'/'+g.stat.n+'</td><td>'+g.stat.assistedFirst+'</td><td>'+g.stat.corrected+'</td><td>'+g.stat.days+'</td><td>'+(g.stat.insufficient?'样本不足':g.stat.withSupport?'安排间隔回顾':'继续跨日验证')+'</td></tr>').join('')+'</table></div><h3>常需支持的部分</h3>'+groups.filter(g=>g.stat.withSupport||g.qs.some(q=>q.attempts?.[0]&&!q.attempts[0].correct)).sort((a,b)=>b.stat.withSupport-a.stat.withSupport).slice(0,6).map(g=>'<p>'+escapeHTML(g.name)+'：'+g.stat.withSupport+'/'+g.stat.n+' 题借助支持，独立首答 '+g.stat.independent+'/'+g.stat.n+'。'+(g.stat.insufficient?'继续收集样本。':'在当前范围插入到期回访。')+'</p>').join('')+'<h3>最近的答题与提示过程</h3>'+rows.slice(-12).reverse().map(q=>'<details><summary>'+escapeHTML(q.text)+' · '+outcome(q)+'</summary><p>原题答案序列：'+q.attempts.map(a=>a.value+(a.correct?' ✓':' ×')).join(' → ')+'</p><p>方法自述：'+escapeHTML(q.method||'未填写')+'；检查勾选为孩子自报，不能等同实际检查。</p>'+(q.supportEvents||[]).map(e=>'<p>'+escapeHTML(fmt(e.at))+' · '+(['找下一步','图示带做','完整示范'][e.stage]||'支持')+' · '+(e.reason==='step-attempt'?'小步填写 '+e.value+(e.correct?' 正确':' 待检查'):e.reason==='automatic-error-feedback'?'错答后自动呈现数学线索':'主动查看')+'</p>').join('')+'</details>').join('')+'<p class="small">看过讲解、用过提示后的完成仍有基础奖励，但不计独立掌握。用时是有效页面停留时间；未记录的家长口头提醒属于未知支持，不能推断为没有提示。</p></section>'}
function compareHTML(days){const current=analysisRows(days),previous=analysisRows(days,days),keys=new Set(current.map(q=>(M.questionChapterSkill?.(q)||q.topic)+':'+(q.level||1)));return '<section class="panel"><h2>相同知识点与难度的前后观察</h2><p>最近'+days+'天与此前'+days+'天比较；题型范围变化、重复练习和样本量都会影响结果，不用总正确率直接断言进步。</p><div class="table-scroll"><table><tr><th>知识点 / 难度</th><th>此前独立首答</th><th>本期独立首答</th><th>样本状态</th></tr>'+[...keys].map(key=>{const qs=rows=>rows.filter(q=>(M.questionChapterSkill?.(q)||q.topic)+':'+(q.level||1)===key),a=M.learningAnalysis(qs(previous)),b=M.learningAnalysis(qs(current)),id=key.slice(0,key.lastIndexOf(':'));return '<tr><td>'+escapeHTML(M.chapterSpec(id)?.name||M.TOPICS[id]?.name||id)+' / L'+key.split(':').at(-1)+'</td><td>'+a.independent+'/'+a.n+'</td><td>'+b.independent+'/'+b.n+'</td><td>'+(a.insufficient||b.insufficient?'不足，暂不比较能力':'观察同类题的跨日稳定性')+'</td></tr>'}).join('')+'</table></div></section>'}
reportText=function(days){const rows=analysisRows(days),s=M.learningAnalysis(rows);return '# 小松子学习观察报告\n\n日期：'+fmt(Date.now())+'（香港时间）\n范围：'+(days?days+'天':'全部')+'\n教材：'+db.profile.textbook+'\n\n独立首答正确：'+s.independent+'/'+s.n+'；提示后首提正确：'+s.assistedFirst+'；订正：'+s.corrected+'；看过示范：'+s.worked+'；练习日：'+s.days+'；跳过：'+s.skipped+'。\n'+(s.insufficient?'数据不足，仅作观察，不作掌握结论。':'仍需结合相同知识点、相同难度的跨日表现。')+'\n\n'+M.CHAPTER_SKILLS.map(skill=>{const st=M.learningAnalysis(rows.filter(q=>M.questionChapterSkill(q)===skill.id));return st.n?'- '+skill.name+'：独立首答 '+st.independent+'/'+st.n+'，提示后首提 '+st.assistedFirst+'，订正 '+st.corrected+'，'+st.days+'个练习日'+(st.insufficient?'（样本不足）':''):''}).filter(Boolean).join('\n')+'\n\n家长观察（不计入成绩）：'+db.profile.observation+'\n\n提示免费，完整示范后填对不计独立掌握。中间小步不另计题量或发奖。方法与检查勾选为自报；外部口头支持未知。有效页面时间不是纯计算速度。\n到期复习仅从当前开启范围选择；同日订正与跨日稳定分开观察。\n'};
const integratedParent=renderParent;renderParent=function(){integratedParent();if(!parentUnlocked)return;$('#main').insertAdjacentHTML('beforeend',analysisHTML(analysisRows())+compareHTML(parentDays||30)+'<section class="panel"><h2>家长体验与当前待接入素材</h2><p>园丁向日葵和森林花径不再从新卡包掉落，正式获取路线待确定。当前可由家长用于体验解锁，不计学习成绩。</p><div class="actions"><button class="secondary" id="parentUnlockGardener">体验解锁园丁向日葵</button><button class="secondary" id="parentUnlockPath">体验解锁森林花径</button><button class="secondary" id="exportSupportEvents">导出学习与提示事件</button></div></section>');for(const [selector,key]of [['#parentUnlockGardener','skin'],['#parentUnlockPath','decoration']])$(selector).onclick=()=>{if(!parentUnlocked)return;const tx=itemTransaction(()=>{const v=RewardEngine.ensure(db)[key];v.unlocked=true;v.fragments=v.need;if(key==='skin')v.equipped=true;db.ledger.push({ref:'parent-unlock:'+key,resource:'experience',amount:0,reason:'家长体验解锁',at:new Date().toISOString()})});if(tx.ok){notify('体验内容已解锁，不影响学习成绩。');renderParent()}};$('#exportSupportEvents').onclick=()=>download('小松子-学习与提示事件.json',JSON.stringify({generatedAt:new Date().toISOString(),rangeDays:parentDays,summary:M.learningAnalysis(analysisRows()),questions:analysisRows()},null,2),'application/json')};
rewardProgressHTML=function(){const s=RewardEngine.ensure(db),p=s.pools.forest;return '<section class="panel"><h2>森林收藏成长</h2><p>连续 '+p.misses+' 包没有SSR；最迟再 '+Math.max(1,10-p.misses)+' 包触发保底，进度跨日保留。</p><p>重复植物 +2 专属碎片（累计封顶30）；10/20/30片分别记录背景、边框、造型的成长进度。尚未交付的美术只记录进度，不显示已经穿上或获得可用素材。</p><div class="scene-mini-plants">'+RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy&&s.counts[c.id]).map(c=>'<div class="growth-card">'+SCENE_PLANTS[c.id]+'<strong>'+escapeHTML(c.name)+'</strong><small>'+c.rarity+' · 专属碎片 '+(s.exclusiveFragments[c.id]||0)+'/30</small><small>'+[10,20,30].map(n=>(s.exclusiveFragments[c.id]>=n?'✓':'○')+n).join(' / ')+' · 素材待接入</small></div>').join('')+'</div><p class="small">牛仔豌豆保留已有的重复获得解锁条件；30片造型不会重复赠送同一牛仔素材。SSR专属素材逐项方案仍待确认。</p></section>'};
renderRewards=function(){if(!parentUnlocked){openParentGate('rewards');return}const c=RewardEngine.CONFIG;$('#main').innerHTML='<h1>数值与奖励 · 已接入配置</h1><section class="panel integrated-rules"><h2>每包4张卡牌 · 第4格部件 · '+c.pack.price+'阳光</h2><div class="table-scroll"><table><tr><th>植物位</th><th>R</th><th>SR</th><th>SSR</th></tr><tr><td>1</td><td>90%</td><td>9%</td><td>1%</td></tr><tr><td>2</td><td>80%</td><td>18%</td><td>2%</td></tr><tr><td>3：前两张有SR以上</td><td>70%</td><td>25%</td><td>5%</td></tr><tr><td>3：前两张全R</td><td>0%</td><td>95%</td><td>5%</td></tr></table></div><p>连续9包无SSR，第10包第3位必SSR；强保底在开包开始锁定，前两位出了SSR也不取消。植物位出了SSR，该包结束后植物保底计数归零；SSR部件不影响植物保底。各稀有度内等概率，允许同包重复。</p><p>第4格为未取得部件，SR/SSR为5:1，优先已拥有植物；部件收齐后发1叶片卡。当前池植物集齐后，SR植物位置可等权出现SR跳过/刷新，每包最多1张并保护SR以上植物与SSR保底。</p><p>完成题目5阳光，普通整轮20；小关首通20、整章首次1包；每日复习额外10、回访额外10。每日复习不再发卡包或普通整轮20，回访不再直接发SSR。</p><p>两种道具初始各1张，每种每日最多使用1次；库存不清空、不过期。跳过跨轮共享额度，刷新在复习和回访之间共享额度。</p></section><section class="panel"><h2>植物档位与指定兑换</h2>'+RewardEngine.catalog.filter(v=>v.collectible!==false&&!v.legacy).map(v=>'<p>'+escapeHTML(v.name)+' · '+v.rarity+' · '+c.exchange[v.rarity]+'叶片</p>').join('')+'</section><div class="actions"><button class="primary" id="trial5">试算10包 · 不改存档</button><button class="secondary" id="giftPack">发1包家长体验补给</button></div><div id="rewardTrial"></div>'+rewardProgressHTML()+'<section class="panel"><h2>最近开包收据</h2>'+db.packs.filter(p=>p.rewardResult).slice(-10).reverse().map(p=>'<details><summary>'+escapeHTML(fmt(p.openedAt))+' · '+p.rewardResult.highRarity+(p.rewardResult.forced?' · 保底':'')+'</summary>'+p.rewardResult.rows.map(r=>'<p>'+escapeHTML(r.name)+' ×'+r.quantity+' · '+escapeHTML(r.effect)+'</p>').join('')+'</details>').join('')+'</section>';$('#trial5').onclick=()=>{const sandbox={wallet:{sun:0,leaves:0},packs:[],ledger:[]},rows=[];for(let i=0;i<10;i++){sandbox.packs.push({id:'trial-'+i,status:'available'});rows.push(RewardEngine.open(sandbox,'trial-'+i).result)}$('#rewardTrial').innerHTML=rows.map((p,i)=>'<details><summary>第'+(i+1)+'包 · '+p.highRarity+(p.forced?' · 保底':'')+'</summary>'+p.rows.map(r=>'<p>'+r.name+' · '+escapeHTML(r.effect)+'</p>').join('')+'</details>').join('')};$('#giftPack').onclick=()=>{if(!parentUnlocked)return;const tx=itemTransaction(()=>db.packs.push({id:'gift-'+Date.now()+'-'+Math.random(),status:'available',poolId:'forest',source:'parent-gift',at:new Date().toISOString(),cards:[]}));if(tx.ok)openCards('packs')}};
const integratedQuestion=renderQuestion;renderQuestion=function(){integratedQuestion();if(q&&!q.completed){const button=$('#useSkipCard'),bag=ItemEngine.ensure(db),used=!!bag.skipUses[DailyChallenge.dayKey()];if(button){button.disabled=used||session.skipUsed||bag.skip.count<1;button.textContent=session.skipUsed?'本轮跳过卡已使用':used?'今日跳过卡已使用':'使用跳过卡 · '+bag.skip.count+' 张（每天1次）'}}};
if(['home','learn','shop','parent'].includes(tab))go(tab);

// Art-only additions do not alter plant packs, currencies or reward probabilities.
const previousDecorAvailable=GardenDecor.available;GardenDecor.available=function(db){return [...previousDecorAvailable(db).filter(id=>!id.startsWith('decor-')),...GardenDecor.catalog.filter(c=>c.artPreview&&(isTesting()||db.decorArtOwned?.includes(c.id))).map(c=>c.id)]};
// The original engine closes over available(), so gate art items there as well.
const previousDecorAssign=GardenDecor.assign;GardenDecor.assign=function(db,index,id){if(!Number.isInteger(index)||index<0||index>=GardenDecor.slotCount)throw Error('装饰位置无效');if(!GardenDecor.available(db).includes(id)&&id!==null)throw Error('装饰尚未解锁');const g=GardenDecor.ensure(db),old=g.slots[index],from=id===null?-1:g.slots.indexOf(id);if(from>=0&&from!==index)g.slots[from]=old;g.slots[index]=id;return g};
const oldDecorArt=gardenDecorArt;gardenDecorArt=function(id){const key=id==='lantern'?'decor-firefly':id,art=GARDEN_ART['latest.'+key];if(!art)return oldDecorArt(id);const effect=key==='decor-firefly'?'lantern':key==='decor-chime'?'chime':key==='decor-fountain'?'fountain':'mushroom';return '<span class="live-decor effect-'+effect+'">'+art+'<i class="decor-live-effect" aria-hidden="true"></i></span>'};
const artPotHTML=gardenPotHTML;gardenPotHTML=function(index,id,state){let html=artPotHTML(index,id,state);const skin=GardenSkins.ensure(db).slots[index],art=GARDEN_ART['latest.'+skin];if(!art)return html;const wrapped=art.replace('<svg ','<svg class="pot-vessel pot-art-back" '),front=art.replace('<svg ','<svg class="pot-vessel pot-art-front" ');return html.replace('data-pot-skin="terracotta"','data-pot-skin="'+skin+'"').replace(/<svg class="pot-vessel"[\s\S]*?<\/svg>/,wrapped+front)};
function choosePotSkin(index){const g=GardenSkins.ensure(db),available=GardenSkins.available(db,isTesting());sceneSheet('第 '+(index+1)+' 号花盆 · 换盆','<div class="pot-skin-grid">'+GardenSkins.pots.map(p=>'<button data-pot-equip="'+p.id+'" '+(!available.includes(p.id)?'disabled':'')+' aria-pressed="'+(g.slots[index]===p.id)+'">'+(GARDEN_ART['latest.'+p.id]||'<span class="classic-pot-icon">🪴</span>')+'<strong>'+p.name+'</strong><small>'+(g.slots[index]===p.id?'正在使用':available.includes(p.id)?'点击换盆':'完成第'+GardenSkins.pots.findIndex(v=>v.id===p.id)+'章获得')+'</small></button>').join('')+'</div><p>换盆只改变花盆外观，植物和位置保持不变。</p><button class="secondary" id="backPotPlacement">返回植物布置</button>');document.querySelectorAll('[data-pot-equip]').forEach(b=>b.onclick=()=>{const tx=itemTransaction(()=>GardenSkins.equip(db,index,b.dataset.potEquip,isTesting()));if(tx.ok){closeSceneSheet();home()}});$('#backPotPlacement').onclick=()=>chooseGardenPot(index)}
const placementPicker=chooseGardenPot;chooseGardenPot=function(index){placementPicker(index);$('#sceneSheetContent').insertAdjacentHTML('beforeend','<div class="actions"><button class="primary" id="changePotSkin">更换花盆</button></div>');$('#changePotSkin').onclick=()=>choosePotSkin(index)};
const artDecorPicker=chooseGardenDecor;chooseGardenDecor=function(index,category='all'){artDecorPicker(index,category);const id=GardenDecor.ensure(db).slots[index];$('#sceneSheetContent').insertAdjacentHTML('beforeend','<p class="small">在奖励年级首次整章通关，获得对应装饰；获得后可自由摆放。已摆放装饰可在花园点击互动，长按或按布置键更换。</p>')};
let decorGesture=null;
function bindLiveDecor(){document.querySelectorAll('[data-garden-decor]').forEach(b=>{const index=+b.dataset.gardenDecor,id=GardenDecor.ensure(db).slots[index];if(!['lantern','decor-chime','decor-fountain','decor-mushroom'].includes(id))return;b.setAttribute('aria-label',GardenDecor.catalog.find(c=>c.id===id).name+'，点击互动；长按布置，键盘按E布置');const update=()=>b.classList.toggle('decor-lamp-off',db.decorInteractions?.[id]?.off===true);update();b.onclick=()=>{if(b.dataset.held==='true'){b.dataset.held='false';return}if(id==='lantern'){const tx=itemTransaction(()=>{db.decorInteractions??={};db.decorInteractions[id]={off:!db.decorInteractions[id]?.off}});if(tx.ok)update()}else{b.classList.remove('decor-activated');void b.offsetWidth;b.classList.add('decor-activated');setTimeout(()=>b.classList.remove('decor-activated'),1100)}};b.onpointerdown=()=>{b.dataset.held='false';decorGesture=setTimeout(()=>{b.dataset.held='true';chooseGardenDecor(index)},650)};b.onpointerup=b.onpointercancel=b.onpointerleave=()=>clearTimeout(decorGesture);b.onkeydown=e=>{if(e.key.toLowerCase()==='e'){e.preventDefault();chooseGardenDecor(index)}};b.insertAdjacentHTML('beforeend','<span class="decor-edit" role="button" tabindex="0" aria-label="布置此装饰">✎</span>');const edit=b.querySelector('.decor-edit');if(edit){edit.onclick=e=>{e.stopPropagation();chooseGardenDecor(index)};edit.onkeydown=e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();e.stopPropagation();chooseGardenDecor(index)}}}})}
const newArtHome=home;home=function(){newArtHome();bindLiveDecor()};
const newArtParent=renderParent;renderParent=function(){newArtParent();if(!parentUnlocked)return;$('#main').insertAdjacentHTML('beforeend','<section class="panel"><h2>花盆与互动装饰</h2><p>奖励年级第1—4章整章首次通关获得对应花盆，第5—8章获得对应互动装饰。物品在各年级间共用，只领取一次。</p></section>')};

// Cosmetic-only transfer: the question reward has already been saved before this runs.
const sunTransferSeen=new Set(),sunTransferRuns=new Set();let sunAbsorbTimer=null;
const rewardSunArt='<svg viewBox="0 0 48 48" aria-hidden="true"><g stroke="#eda619" stroke-width="3" stroke-linecap="round"><path d="M24 3v5m0 32v5M3 24h5m32 0h5M9 9l4 4m22 22 4 4M9 39l4-4m22-22 4-4"/></g><circle cx="24" cy="24" r="12" fill="#ffda4d" stroke="#e6a31c" stroke-width="2"/><path d="M18 19q4-5 10-3" fill="none" stroke="#fff9c9" stroke-width="3" stroke-linecap="round"/></svg>';
function flyRewardSunlight(key,amount=5){
 if(sunTransferSeen.has(key)||document.hidden||typeof requestAnimationFrame!=='function')return;
 const source=document.querySelector('#feedback .correct-reward-sun'),dock=document.querySelector('#companionDock');
 if(!source?.getBoundingClientRect||!dock?.getBoundingClientRect)return;
 const from=source.getBoundingClientRect();if(!from.width||!dock.getBoundingClientRect().width)return;
 sunTransferSeen.add(key);if(sunTransferSeen.size>200)sunTransferSeen.delete(sunTransferSeen.values().next().value);
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){if(typeof expressCompanionJoy==='function')expressCompanionJoy();return;}
 const layer=document.createElement('div');layer.className='sun-transfer-layer';layer.setAttribute('aria-hidden','true');document.body.appendChild(layer);
 const particles=Array.from({length:amount},(_,i)=>{const el=document.createElement('span');el.className='sun-transfer-token';el.innerHTML=rewardSunArt;layer.appendChild(el);return {el,delay:i*110,offset:(i-(amount-1)/2)*15,done:false}});
 let frame=null,start=null;const finish=()=>{if(frame!==null)cancelAnimationFrame(frame);layer.remove();sunTransferRuns.delete(finish)};sunTransferRuns.add(finish);
 const absorb=()=>{if(typeof expressCompanionJoy==='function')expressCompanionJoy();dock.classList.remove('companion-sun-absorb');void dock.offsetWidth;dock.classList.add('companion-sun-absorb');clearTimeout(sunAbsorbTimer);sunAbsorbTimer=setTimeout(()=>dock.classList.remove('companion-sun-absorb'),400)};
 const tick=time=>{if(document.hidden||!dock.isConnected){finish();return}start??=time;const dest=dock.getBoundingClientRect(),sx=from.left+from.width/2,sy=from.top+from.height/2,tx=dest.left+dest.width*.5,ty=dest.top+dest.height*.4;
 for(const p of particles){if(p.done)continue;const elapsed=time-start-p.delay,t=Math.max(0,Math.min(1,elapsed/650)),u=1-t,cx=(sx+tx)/2+p.offset,cy=Math.min(sy,ty)-Math.min(125,Math.abs(tx-sx)*.14+50);const x=u*u*(sx+p.offset)+2*u*t*cx+t*t*tx,y=u*u*sy+2*u*t*cy+t*t*ty;p.el.style.transform='translate3d('+x+'px,'+y+'px,0) translate(-50%,-50%) scale('+(1-t*.55)+') rotate('+(t*100)+'deg)';p.el.style.opacity=String(elapsed<0?1:t>.9?(1-t)*10:1);if(t===1){p.done=true;p.el.remove();absorb()}}
 if(particles.every(p=>p.done)){finish();return}frame=requestAnimationFrame(tick)};
 frame=requestAnimationFrame(tick);
}
function clearSunTransfers(){for(const finish of [...sunTransferRuns])finish();clearTimeout(sunAbsorbTimer);document.querySelector('#companionDock')?.classList?.remove('companion-sun-absorb')}
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearSunTransfers()});window.addEventListener('pagehide',clearSunTransfers);

// Correct feedback advances only the saved question that scheduled it.
let answerAdvanceTimer=null,answerAdvanceToken=0;
function cancelAnswerAdvance(){clearTimeout(answerAdvanceTimer);answerAdvanceTimer=null;answerAdvanceToken++}
showSuccess=function(){cancelAnswerAdvance();if(!q||!session||!q.completed)return;const sid=session.id,qid=q.id,token=answerAdvanceToken;$('#answer').disabled=true;document.querySelectorAll('#answerForm button,#useSkipCard').forEach(b=>b.disabled=true);$('#feedback').innerHTML='<div class="feedback auto-correct" role="status"><span class="correct-reward-sparkles" aria-hidden="true">✦</span><span class="correct-reward-check" aria-hidden="true">✓</span><span class="correct-reward-copy"><b>'+(q.attempts.length===1?'答对了！':'订正完成！')+'</b><span class="correct-reward-sun"><svg viewBox="0 0 48 48" aria-hidden="true"><g stroke="#e6a31c" stroke-width="3" stroke-linecap="round"><path d="M24 3v5m0 32v5M3 24h5m32 0h5M9 9l4 4m22 22 4 4M9 39l4-4m22-22 4-4"/></g><circle cx="24" cy="24" r="12" fill="#ffd74d" stroke="#e6a31c" stroke-width="2"/><path d="M18 19q4-5 10-3" fill="none" stroke="#fff8bd" stroke-width="3" stroke-linecap="round"/></svg>获得阳光 <strong>+5</strong></span></span></div>';$('#methodArea').innerHTML='';const advance=()=>{if(token!==answerAdvanceToken||!session||session.id!==sid||!q||q.id!==qid||!q.completed||tab!=='learn')return;if(document.hidden||!$('#parentGate').hidden||!$('#sceneSheet').hidden){answerAdvanceTimer=setTimeout(advance,300);return}answerAdvanceTimer=null;flyRewardSunlight(sid+':'+qid,5);q=null;nextQuestion();if(session)renderQuestion()};answerAdvanceTimer=setTimeout(advance,850)};
const compactQuestion=renderQuestion;renderQuestion=function(){compactQuestion();document.querySelectorAll('.route > span.done').forEach((node,i)=>{node.innerHTML=gardenArtImage('ui.completedSunflower','completed-sunflower','0 0 44 44');node.setAttribute('aria-label','第'+(i+1)+'题已完成')});if(typeof refreshCompanion==='function')refreshCompanion();const question=document.querySelector('.question');if(!question?.querySelectorAll)return;question.classList.add('question-compact');const tags=[...question.querySelectorAll(':scope > .tag')],check=question.querySelector('.check');if(tags.length||check){const details=document.createElement('details');details.className='question-extras';const summary=document.createElement('summary');summary.textContent='题目信息与检查';details.appendChild(summary);tags.forEach(t=>details.appendChild(t));if(check)details.appendChild(check);question.appendChild(details)}};
const autoGo=go;go=function(view){cancelAnswerAdvance();autoGo(view);if(tab==='learn'&&q?.completed&&!adventureMapOnly&&!answerAdvanceTimer)showSuccess()};
window.addEventListener('beforeunload',cancelAnswerAdvance);

// One companion lives outside #main and the card iframe across all scene changes.
let companionReady=false,companionDrag=null,companionMoved=false,companionGreetTimer=null;
function companionState(){db.companion??={version:1,x:.9,y:.78,small:false,paused:false};return db.companion}
function companionBounds(width,height,state,w=innerWidth,h=innerHeight){return {x:Math.max(width/2,Math.min(w-width/2,state.x*w)),y:Math.max(height/2,Math.min(h-height/2,state.y*h))}}
function positionCompanion(){const dock=document.querySelector('#companionDock');if(!dock?.getBoundingClientRect)return;const s=companionState();dock.classList.remove('companion-small');const r=dock.getBoundingClientRect(),p=companionBounds(r.width||130,r.height||180,s);dock.style.left=p.x+'px';dock.style.top=p.y+'px';const critical=[...document.querySelectorAll('#answer,#answerForm .primary,#sceneSheetClose,#parentPin,#parentPinSubmit,#closeCards')].filter(e=>!e.hidden);const overlaps=critical.some(e=>{const b=e.getBoundingClientRect();return b.width>0&&p.x+r.width/2>b.left&&p.x-r.width/2<b.right&&p.y+r.height/2>b.top&&p.y-r.height/2<b.bottom});if(overlaps){dock.style.left=Math.max(r.width/2,innerWidth-r.width/2-12)+'px';dock.style.top=Math.max(r.height/2,innerHeight-r.height/2-12)+'px'}}
function refreshCompanion(){const dock=document.querySelector('#companionDock');if(!dock?.getBoundingClientRect)return;const s=companionState();dock.classList.toggle('companion-paused',document.hidden);dock.classList.toggle('companion-quiet',tab!=='home');const mode=wardrobeActive(3,RewardEngine.ensure(db)),rig=dock.querySelector('.companion-base-rig'),costume=dock.querySelector('.companion-costume');if(rig)rig.hidden=mode!=='base';if(costume){costume.hidden=mode==='base';if(costume.dataset.mode!==mode){costume.innerHTML=mode==='base'?'':scenePlantArt(3,RewardEngine.ensure(db));costume.dataset.mode=mode}}positionCompanion()}
function mountCompanion(){const dock=document.querySelector('#companionDock');if(!dock?.getBoundingClientRect)return;if(!companionReady){companionReady=true;const pieces={head:'head',body:'stem',leafLeft:'left-leaf',leafRight:'right-leaf',base:'base'};dock.querySelector('.companion-base-rig').innerHTML='<div class="companion-moving">'+Object.entries(pieces).filter(([key])=>key!=='base').map(([key,cls])=>'<span class="companion-piece '+cls+'" data-rig-part="'+key+'">'+GARDEN_ART['mascot.'+key]+'</span>').join('')+'</div><span class="companion-piece base" data-rig-part="base">'+GARDEN_ART['mascot.base']+'</span>';const handle=dock.querySelector('#companionHandle');handle.onpointerdown=e=>{if(e.button!==undefined&&e.button!==0)return;const r=dock.getBoundingClientRect();companionDrag={id:e.pointerId,x:e.clientX,y:e.clientY,cx:r.left+r.width/2,cy:r.top+r.height/2,previous:{...companionState()}};companionMoved=false;handle.setPointerCapture?.(e.pointerId)};handle.onpointermove=e=>{if(!companionDrag||e.pointerId!==companionDrag.id)return;const dx=e.clientX-companionDrag.x,dy=e.clientY-companionDrag.y;if(Math.hypot(dx,dy)>6)companionMoved=true;if(!companionMoved)return;e.preventDefault();const s=companionState();s.x=Math.max(0,Math.min(1,(companionDrag.cx+dx)/innerWidth));s.y=Math.max(0,Math.min(1,(companionDrag.cy+dy)/innerHeight));positionCompanion()};const end=(e,cancel)=>{if(!companionDrag||e.pointerId!==companionDrag.id)return;const previous=companionDrag.previous;companionDrag=null;if(cancel||!save())db.companion=previous;positionCompanion();handle.releasePointerCapture?.(e.pointerId)};handle.onpointerup=e=>end(e,false);handle.onpointercancel=e=>end(e,true);handle.onlostpointercapture=e=>end(e,true);const dance=()=>{clearTimeout(companionGreetTimer);dock.classList.remove('companion-greet');void dock.offsetWidth;dock.classList.add('companion-greet');companionGreetTimer=setTimeout(()=>dock.classList.remove('companion-greet'),1100)};handle.onclick=()=>{if(companionMoved){companionMoved=false;return}dance()};handle.onkeydown=e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();dance();return}const d={ArrowLeft:[-.025,0],ArrowRight:[.025,0],ArrowUp:[0,-.025],ArrowDown:[0,.025]}[e.key];if(d){e.preventDefault();itemTransaction(()=>{const s=companionState();s.x=Math.max(0,Math.min(1,s.x+d[0]));s.y=Math.max(0,Math.min(1,s.y+d[1]))});positionCompanion()}};dock.setAttribute('aria-label','向日葵陪伴');document.addEventListener('visibilitychange',refreshCompanion);window.addEventListener('resize',positionCompanion)}refreshCompanion()}
const companionHome=home;home=function(){companionHome();document.querySelector('.garden-mascot')?.remove?.();mountCompanion()};
const companionGo=go;go=function(view){companionGo(view);mountCompanion()};
const companionSheet=sceneSheet;sceneSheet=function(...args){companionSheet(...args);refreshCompanion()};
mountCompanion();

// Receiving sunlight changes only the original eyes/mouth; the rig stays unchanged.
let companionJoyTimer=null;
function endCompanionJoy(){clearTimeout(companionJoyTimer);const dock=document.querySelector('#companionDock');if(!dock)return;dock.classList.remove('companion-joy');const head=dock.querySelector('[data-rig-part="head"]');if(head)head.innerHTML=GARDEN_ART['mascot.head'];dock.setAttribute('aria-label','向日葵陪伴')}
function expressCompanionJoy(){const dock=document.querySelector('#companionDock');if(!dock?.getBoundingClientRect||document.hidden)return;const head=dock.querySelector('[data-rig-part="head"]');if(head&&GARDEN_ART['mascot.happyHead'])head.innerHTML=GARDEN_ART['mascot.happyHead'];dock.classList.add('companion-joy');dock.setAttribute('aria-label','向日葵收到阳光，开心大笑');clearTimeout(companionJoyTimer);companionJoyTimer=setTimeout(endCompanionJoy,1300)}
document.addEventListener('visibilitychange',()=>{if(document.hidden)endCompanionJoy()});window.addEventListener('pagehide',endCompanionJoy);

// Editable labels and native vector icons follow the art brief; no baked comparison image.
const NAV_ICONS={home:'<svg viewBox="0 0 48 48"><path d="M24 39V22M24 29C5 31 5 9 22 16L24 29C22 10 42 6 41 18Q40 31 24 29" fill="#69ad3a" stroke="#2d642d" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="41" rx="16" ry="3" fill="#a0804c"/></svg>',learn:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#e3bd72" stroke="#71532b" stroke-width="3"/><circle cx="24" cy="24" r="15" fill="#fff2c6" stroke="#7f9c52" stroke-width="2"/><path d="M31 12L27 28L16 36L20 20Z" fill="#4d8d45" stroke="#2d5f34" stroke-width="2"/><circle cx="24" cy="24" r="3" fill="#efcf7a"/></svg>',shop:'<svg viewBox="0 0 48 48"><path d="M9 3H39V45H9Z" fill="#63a644" stroke="#2e6135" stroke-width="3"/><path d="M11 9H37V39H11Z" fill="#d9eeb4" stroke="#fff6d0" stroke-width="2"/><path d="M12 5H36M12 43H36" stroke="#d9eeb4" stroke-width="2"/><path d="M24 32C8 30 18 13 24 23C28 8 41 27 24 32Z" fill="#4d8b39" stroke="#2e6135" stroke-width="2"/></svg>'};
function applyLatestNavigation(){document.querySelectorAll('#nav button[data-view]').forEach(b=>{const id=b.dataset.view;b.innerHTML='<span class="theme-nav-icon" aria-hidden="true">'+NAV_ICONS[id]+'</span><span>'+({home:'花园',learn:'冒险',shop:'抽卡',arena:'竞技场'}[id])+'</span>'})}
applyLatestNavigation();
const latestGo=go;go=function(view){latestGo(view);applyLatestNavigation()};
document.addEventListener('visibilitychange',()=>document.body.classList?.toggle('page-hidden',document.hidden));
if(['home','learn','shop','parent'].includes(tab))go(tab);


// Parent-only local profiles. Reload on selection to discard all per-child UI closures.
let profileReloadPending=false;
function profileManagementAllowed(){return parentUnlocked&&!isTesting()&&storageOK&&!profileReloadPending}
function profileMessage(message){const area=$('#profileStatus');if(area)area.textContent=message;notify(message)}
function profileAction(action){if(!profileManagementAllowed()){profileMessage(isTesting()?'请先退出测试模式，再管理儿童档案。':'请先进入家长区并确认存档正常。');return false}try{action();return true}catch(error){profileMessage('档案操作失败：'+error.message);return false}}
function selectChildProfile(id){return profileAction(()=>{
 if(id===profileStore.activeId())return;
 if(session){stopClock();if(q&&q.attempts.length)persistQuestion();session.status='interrupted';session.endedAt=new Date().toISOString()}
 if(!save())throw Error('当前记录未能保存，已停止切换；请先导出备份。');
 // Selection validates the target before committing the directory. Keep old db until reload.
 profileStore.select(id);profileActivityEpoch++;profileReloadPending=true;storageOK=false;
 resetCardSession();parentUnlocked=false;clearTimeout(parentTimer);
 $('#main').innerHTML='<section class="panel"><h2>正在切换儿童档案</h2><p>页面将刷新。若未自动刷新，请手动刷新以载入所选档案；本页已停止保存。</p></section>';
 window.location.reload();
 })}
function renderProfileManager(){if(!parentUnlocked)return;const blocked=!profileManagementAllowed(),active=profileStore.activeId();
 $('#main').insertAdjacentHTML('afterbegin','<section class="panel" id="profileManager"><h2>本机儿童档案</h2><p>切换前保存当前记录，然后刷新页面。家长密码由本机共用。</p>'+(isTesting()?'<p>测试模式中不能创建、改名、归档或切换正式档案。</p>':'')+'<p id="profileStatus" role="status" aria-live="polite"></p><div class="actions"><input id="profileNewName" maxlength="20" aria-label="新儿童昵称" placeholder="儿童昵称" '+(blocked?'disabled':'')+'><button class="secondary" id="profileAdd" '+(blocked?'disabled':'')+'>创建独立档案</button></div>'+profileStore.list().map(p=>'<div class="tile"><label>昵称 <input data-profile-name="'+p.id+'" maxlength="20" value="'+escapeHTML(p.name)+'" '+(blocked?'disabled':'')+'></label><p>'+(p.id===active?'当前儿童':p.archived?'已归档，记录保留':'可切换')+'</p><div class="actions"><button class="secondary" data-profile-select="'+p.id+'" '+(blocked||p.archived||p.id===active?'disabled':'')+'>选择并刷新</button><button class="secondary" data-profile-rename="'+p.id+'" '+(blocked?'disabled':'')+'>保存昵称</button><button class="secondary" data-profile-archive="'+p.id+'" '+(blocked||p.id===active?'disabled':'')+'>'+(p.archived?'恢复到列表':'归档保留记录')+'</button></div></div>').join('')+'</section>');
 $('#profileAdd').onclick=()=>profileAction(()=>{profileStore.add($('#profileNewName').value);renderParent();profileMessage('已创建独立空档，请选择并刷新后开始使用。')});
 document.querySelectorAll('[data-profile-select]').forEach(b=>b.onclick=()=>selectChildProfile(b.dataset.profileSelect));
 document.querySelectorAll('[data-profile-rename]').forEach(b=>b.onclick=()=>profileAction(()=>{const id=b.dataset.profileRename,name=document.querySelector('[data-profile-name="'+id+'"]').value;profileStore.rename(id,name);if(id===active)db.profile.name=name.trim();renderParent();profileMessage('昵称已保存。')}));
 document.querySelectorAll('[data-profile-archive]').forEach(b=>b.onclick=()=>profileAction(()=>{const id=b.dataset.profileArchive,p=profileStore.list().find(p=>p.id===id);profileStore.archive(id,!p.archived);renderParent();profileMessage('档案列表已更新，学习记录保留。')}));
}
const profileParentRender=renderParent;renderParent=function(){profileParentRender();renderProfileManager()};
const profileTestingMode=setTestingMode;setTestingMode=function(enabled){if(profileReloadPending||!storageOK){profileMessage('档案尚未准备好，请先导出记录并刷新。');return false}const before=isTesting(),result=profileTestingMode(enabled);if(before!==isTesting())profileActivityEpoch++;return result};
// Replace the historical single-save importer; guard asynchronous reads against mode/profile changes.
$('#importFile').onchange=async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;if(!parentUnlocked||profileReloadPending)return;if(file.size>20e6){notify('备份文件超过20MB，请检查。');return}const id=profileStore.activeId(),epoch=profileActivityEpoch,testing=isTesting();try{const incoming=M.prepareSave(JSON.parse(await file.text()));if(!parentUnlocked||profileReloadPending||epoch!==profileActivityEpoch||id!==profileStore.activeId()||testing!==isTesting())throw Error('读取期间档案或模式已变化，请重新选择文件。');if(incoming.testOnly&&!testing)throw Error('测试存档不能覆盖正式记录。');if(!storageOK)throw Error('当前存档状态异常，请先导出并恢复。');if(!confirm('仅替换当前儿童的记录。导入前会保留当前档案备份。确定导入吗？'))return;if(!testing)profileStore.backupActive('before-import-'+Date.now());const previous=db;db=incoming;if(testing)db.testOnly=true;else db.profile.name=profileStore.list().find(p=>p.id===id).name;if(!save()){db=previous;throw Error('保存未确认，原页面记录保留，请导出并检查恢复副本。')}session=null;q=null;resetCardSession();wallet();renderParent();notify('已导入当前档案记录。')}catch(error){notify('导入失败：'+error.message)}};
if(tab==='parent'&&parentUnlocked)renderParent();

const EARLY_CONTENT={"schema":"songzi.early-content/v1","packageVersion":"2026-10-21.batch1.2","status":"draft_for_review","enabled":false,"productionEligible":false,"productionQuestions":[],"interactionContract":{"contractVersion":"songzi.early-attempt-flow/v1","implementationStatus":"standalone_preview_only","states":["original_attempt_1","original_attempt_2","demonstration","post_demo_variant","prerequisite_fallback","completed"],"events":["original_attempt_submitted","hint_shown","demonstration_shown","variant_started","variant_submitted","prerequisite_fallback"],"eventFields":["eventId","eventType","sessionId","moduleId","questionId","contentVersion","variantId","attemptIndex","isCorrect","hintLevel","answerShown","postDemoVariant","supportCompleted","independentAttempt","independentEvidence","response","at"],"independentEvidenceRule":"Only a correct first original-question answer submitted before any hint or answer exposure counts as independent mastery evidence. A wrong first response is still logged as an independent attempt, not mastery.","variantRule":"A post-demonstration same-relation variant is recorded separately and never counted as independent mastery.","persistence":"preview_memory_only","productionEnabled":false},"grade1Baseline":"人民教育出版社2024修订一年级数学上下册候选；按整册路线逐单元映射","designRules":{"kindergartenAge":"5—6岁","grade1Scope":"人教版2024一年级上册第1、2单元候选示范；本包新增G06为6—10数量关系样题，不是整册完成声明","attemptPolicy":{"maxAttemptsPerOriginalQuestion":2,"afterFirstWrong":"只给本题对应的一层短提示，并记录attemptIndex=1","afterSecondWrong":"记录支持后未完成，展示完整示范，再出同关系、改变数量/对象/排列的变式","postDemonstrationVariantCountsAsIndependentMastery":false,"ifVariantNotCompleted":"暂停连续题，回到实物/图示先备活动","penalty":"无扣分、罚时或责备"},"presentation":"来源类型用于审校与追溯；不向儿童突出原创标签。来源未核的网络题不得称教材原题。","responsePolicy":"优先可操作、口述、数值输入或对象摆放；避免两选项猜题。每题最多两次。","preschoolLanguage":"K07/K08使用5—6岁友好短句：亲切邀请、熟悉物品/动物、明确可操作动作；保持数学关系准确，不用幼儿化语气掩盖任务。","grade1TextbookBoundary":"G07为课程主题引导的原创候选练习；未取得人教2024修订教材原页、页码和题号，不得称教材原题。官方历史主题页面仅作主题佐证。"},"sources":[{"id":"MOE-2024-CATALOG","title":"2024年义务教育国家课程教学用书目录（根据2022年版课程标准修订）","publisher":"教育部","url":"https://www.moe.gov.cn/srcsite/A26/s8001/202408/W020240805496325238752.pdf","usage":"确认人教版为正式候选之一；不表示全国只有这一版本。"},{"id":"PEP-2024-GRADE1-INTRO","title":"人教版义务教育数学（一～六年级）新教材简介","publisher":"人民教育出版社","url":"https://www.pep.com.cn/xw/zt/hd/12/xjcjs/xx/202409/t20240920_1995566.html","usage":"确认新版教材编排特点、上册5以内与6—10单元连续编排及配套资源类型；不作题干原文出处。"},{"id":"MOE-2024-LESSON-LIST","title":"2024年基础教育精品课遴选结果（学科课程类）","publisher":"教育部","url":"https://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A06/202506/W020250624684887950733.pdf","usage":"交叉核对人教一年级上册章节课名；不是教材练习题来源。"},{"id":"MOE-GUIDE-3-6","title":"3—6岁儿童学习与发展指南（数学认知）","publisher":"教育部","url":"https://www.moe.gov.cn/jyb_xwfb/xw_zt/moe_357/jyzt_2015nztzl/xueqianjiaoyu/yaowen/202104/W020210820338905908083.pdf","usage":"学前活动年龄与实物操作依据；不作为固定题量或筛查标准。"},{"id":"PEP-JINXUEDIAN","title":"人教金学典同步练习册·同步解析与测评（小学）","publisher":"人民教育出版社","url":"https://stkw.pep.com.cn/jfts/tbjxycp/xx/","usage":"官方配套资源候选；当前题目未从该书逐题转录。"},{"id":"PEP-2022-11-20-HISTORICAL","title":"人教社官网：一年级《11～20各数的认识》示范课活动记录","type":"publisher_historical_topic_reference","url":"https://www.pep.com.cn/rjyc/jyzx/xbrj/202208/t20220803_1978678.html","checkedAt":"2026-10-21","scope":"只证明人教版历史示范教学中出现过该主题，不证明2024修订教材册次、原题、页码或当前适用版本。"}],"modules":[{"id":"early.k.K07","legacyDraftId":"K07","stage":"kindergarten_5_6","title":"松果分家：部分和整体","unit":"实物活动模块","objective":"用实物把一个小集合分成两部分，并能把部分合回整体；可用摆放、指认或口述表达。","prerequisites":["能逐个点数到当前任务数量；不会时允许成人协助摆物，不要求读算式。"],"difficultyPolicy":"从5以内同一对象的分合到8—10以内多种分法；难度来自数量与自主表达，非速度。","sourceIds":["MOE-GUIDE-3-6"],"sourceType":"curriculum_guided_original_activity","productionEligible":false,"questions":[{"id":"early.k.K07.q01","tier":1,"type":"hands_on_part_whole","prompt":"松鼠豆豆捡到5颗松果。我们帮它把2颗放进小篮子吧！盘子里还住着几颗松果呢？","expectedResponse":{"kind":"count_or_point","value":3,"acceptableModes":["摆放后点数","口述","数字输入"]},"visual":{"type":"manipulable_objects","whole":5,"initialParts":[2,3],"showEquationBeforeResponse":false},"hints":["先陪豆豆把5颗松果摆出来。","把2颗送进小篮子，再数盘子里的松果。","5颗分成2颗和3颗，盘子里有3颗。"],"wrongFeedback":["我们找的是盘子里的松果哦，先看看篮子外面。","用小手指点一颗、数一颗，看看是不是3颗。"],"workedSolution":"豆豆有5颗松果，送走2颗到篮子里，盘子里还剩3颗。篮子和盘子合起来，还是5颗。","variantRule":{"sameRelation":"whole minus one part equals missing part","whole":6,"knownPart":4,"answer":2},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.k.K07.q02","tier":1,"type":"hands_on_make_two_parts","prompt":"4块积木要住进两间小房子。请你给每间房子都放上积木哦！再说说两间房子合起来有几块。","expectedResponse":{"kind":"open_partition","whole":4,"validPartPairs":[[1,3],[2,2],[3,1]],"acceptableModes":["摆放","指认","口述"]},"visual":{"type":"two_containers_and_objects","objectCount":4,"requireBothNonempty":true},"hints":["先给两间小房子各送一块积木。","看看手里还剩几块，挑一间房子放进去。","比如一间住1块、另一间住3块，合起来是4块。"],"wrongFeedback":["两间房子都要有积木哦，先一间放一块。","把两间房子的积木请出来，一起数数是不是4块。"],"workedSolution":"可以让一间房子住1块，另一间住3块；两间合起来是4块。也可以试试别的分法。","variantRule":{"sameRelation":"whole partitioned into two nonempty parts","whole":5,"validPartPairs":[[1,4],[2,3],[3,2],[4,1]]},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.k.K07.q03","tier":2,"type":"missing_part_from_picture","prompt":"小松鼠和小兔要分10颗小果子。图上小松鼠已经拿到6颗啦！小兔还能拿到几颗？摆一摆告诉我吧。","expectedResponse":{"kind":"count_or_place","value":4,"whole":10,"knownPart":6},"visual":{"type":"ten_frame_and_two_characters","knownPartVisible":6,"missingPartSlots":10,"showEquationBeforeResponse":false},"hints":["先看看果盘里一共有10颗小果子。","小松鼠拿走6颗啦，数数果盘里还空着几个位置。","10颗里分出6颗，还剩4颗给小兔。"],"wrongFeedback":["记得我们一共有10颗果子哦，不只看已经拿走的。","把小松鼠的和小兔的放在一起，看看能不能回到10颗。"],"workedSolution":"10颗小果子里，6颗给了小松鼠，还剩4颗给小兔；6颗和4颗正好是10颗。","variantRule":{"sameRelation":"whole minus known part","whole":9,"knownPart":5,"answer":4},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.k.K07.q04","tier":2,"type":"explain_same_whole","prompt":"5只小鸟一起玩“树上、地上”游戏。5只都飞到树上啦！地上还要摆几只小鸟呢？","expectedResponse":{"kind":"count_or_point","value":0,"whole":5,"knownPart":5,"acceptEmptySet":true},"visual":{"type":"two_group_mat","whole":5,"knownPart":5,"emptyPartUsesTextAndOutline":true},"hints":["先把5只小鸟都请出来。","树上已经有5只啦，看看地上还需要放小鸟吗？","5只都在树上，地上是0只；两边合起来还是5只。"],"wrongFeedback":["树上和地上的小鸟合起来，要还是原来的5只哦。","地上空空的也可以，不用为了摆满再添小鸟。"],"workedSolution":"5只小鸟都在树上，所以地上是0只；树上5只加地上0只，还是5只。","variantRule":{"sameRelation":"whole minus all equals zero part","whole":6,"knownPart":6,"answer":0},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false},{"id":"early.k.K08","legacyDraftId":"K08","stage":"kindergarten_5_6","title":"小兔加餐：添上与拿走","unit":"实物活动模块","objective":"在熟悉的生活情境中操作体验数量增加或减少，并用摆物、手势或口述表达变化后的数量。","prerequisites":["可逐个点数当前数量；允许成人读题，不要求先会列算式。"],"difficultyPolicy":"从5以内变动开始，再到10以内；保持每题一个动作和清楚的前后状态。","sourceIds":["MOE-GUIDE-3-6"],"sourceType":"curriculum_guided_original_activity","productionEligible":false,"questions":[{"id":"early.k.K08.q01","tier":1,"type":"add_objects_in_context","prompt":"小兔白白的盘子里有3片胡萝卜，又蹦来2片！现在盘子里一共有几片？我们摆一摆吧。","expectedResponse":{"kind":"count_or_place","value":5,"start":3,"change":2,"direction":"add"},"visual":{"type":"manipulable_before_after","startObjects":3,"changeObjects":2,"finalStateHidden":true},"hints":["先摆好白白原来的3片胡萝卜。","把新来的2片也请进盘子，再从头数一数。","3片加上新来的2片，现在有5片。"],"wrongFeedback":["新来的胡萝卜也要放进盘子一起数哦。","每片只点一次，我们慢慢数到最后一片。"],"workedSolution":"白白先有3片，又添上2片；合起来数一数，一共有5片。","variantRule":{"sameRelation":"start plus added objects","start":4,"change":1,"answer":5},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.k.K08.q02","tier":1,"type":"take_objects_in_context","prompt":"草地上有6只小鸭嘎嘎叫。2只摇摇摆摆去池塘玩啦！草地上还剩几只小鸭？","expectedResponse":{"kind":"count_or_place","value":4,"start":6,"change":2,"direction":"remove"},"visual":{"type":"manipulable_before_after","startObjects":6,"changeObjects":2,"removedObjectsRemainVisible":true},"hints":["先把草地上的6只小鸭摆出来。","请2只小鸭游去池塘，再数草地上的小鸭。","6只里有2只去玩了，草地上还剩4只。"],"wrongFeedback":["我们数草地上留下的小鸭，池塘里的先不算哦。","把去池塘的2只移开，再数数草地上的小鸭。"],"workedSolution":"6只小鸭中，2只游去了池塘，草地上还剩4只。","variantRule":{"sameRelation":"start minus removed objects","start":5,"change":1,"answer":4},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.k.K08.q03","tier":2,"type":"add_to_reach_target","prompt":"豆豆把7颗小豆子放进十格盘。还要请几颗豆子来做客，十格盘才刚好坐满10颗呢？","expectedResponse":{"kind":"count_or_place","value":3,"start":7,"target":10,"direction":"add"},"visual":{"type":"ten_frame","filledSlots":7,"totalSlots":10,"emptySlotsVisible":true},"hints":["数数十格盘一共有几个小格。","看看还有几个空位，每个空位请一颗豆子。","还空着3格，所以再请3颗豆子就满10颗啦。"],"wrongFeedback":["已经坐好的7颗不用再数成新来的豆子哦。","一个空格请一颗，数一数空格有几个。"],"workedSolution":"十格盘里已经有7颗，还空着3格；再放3颗，正好有10颗。","variantRule":{"sameRelation":"target minus current amount","start":6,"target":10,"answer":4},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.k.K08.q04","tier":2,"type":"describe_change","prompt":"盒子里有8块积木。你送给好朋友3块吧！请摆一摆：送出去几块？盒子里还住着几块？","expectedResponse":{"kind":"two_part_response","change":3,"remaining":5,"start":8},"visual":{"type":"before_after_mat","startObjects":8,"moveCount":3,"requireMoveAction":true},"hints":["先让8块积木都住进盒子。","把送给朋友的3块移到旁边，再数盒子里的。","送出去3块，盒子里还剩5块；3块和5块合起来是8块。"],"wrongFeedback":["这道题要找两个数：送出去几块、盒子里还剩几块。","把朋友手里的和盒子里的积木合起来，检查是不是8块。"],"workedSolution":"8块积木中送出去3块，盒子里还剩5块；3块和5块合起来还是8块。","variantRule":{"sameRelation":"removed plus remaining equals start","start":7,"change":2,"remaining":5},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false},{"id":"early.g1.G01","legacyDraftId":"G01","stage":"grade1","title":"1—5数与数量","unit":"上册第一单元：5以内数的认识和加、减法（候选）","objective":"按顺序点数小集合，用最后一个数词表示总数，并将1—5数字与集合对应。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO","MOE-2024-LESSON-LIST"],"questions":[{"id":"early.g1.G01.b01.q01","tier":1,"type":"count_set_open","prompt":"花圃里有几朵花？请一个一个点，最后输入总数。","parameters":{"count":4,"layout":"irregular_nonoverlap"},"answer":{"value":4},"visual":{"type":"countable_svg_set","count":4,"digitHiddenUntilResponse":true},"hints":["从一朵开始点，每点一朵说一个数。","点过的花移到已数区，避免重复。","依次点数是1、2、3、4，最后一个数词4就是总数。"],"wrongFeedback":{"countTooHigh":"只数花圃里的花，每朵只点一次。","countTooLow":"从没有点过的花继续点，直到都点过。"},"workedSolution":"逐朵点数4朵花，最后一个数词是4。","variantRule":{"sameRelation":"cardinality from count","count":3,"answer":3},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G01.b01.q02","tier":1,"type":"count_set_open","prompt":"这盆里有几颗种子？请一个一个点数，再输入总数。","parameters":{"count":5,"layout":"two_rows_spaced"},"answer":{"value":5},"visual":{"type":"countable_svg_set","count":5,"digitHiddenUntilResponse":true},"hints":["先从第一颗开始点。","每点过一颗就移到已数区，避免重复。","点数是1、2、3、4、5，最后一个数词5是总数。"],"wrongFeedback":{"countTooHigh":"同一颗不要数两次，按顺序逐颗点。","countTooLow":"看看还有没有没点过的种子。"},"workedSolution":"按顺序点数5颗种子，最后一个数词是5。","variantRule":{"sameRelation":"cardinality from count","count":4,"answer":4},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false,"productionEligible":false},{"id":"early.g1.G02","legacyDraftId":"G02","stage":"grade1","title":"5以内数的顺序与比较","unit":"上册第一单元：5以内数的认识和加、减法（候选）","objective":"用点数、配对或数序比较1—5的数量，理解多、少和相等。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO"],"questions":[{"id":"early.g1.G02.q01","tier":1,"type":"compare_sets_open","prompt":"左边有3个苹果，右边有5个苹果。哪边多？请先连线配对，再用一句话回答。","parameters":{"left":3,"right":5},"answer":{"relation":"right_more","difference":2},"visual":{"type":"two_sets_pairing","pairLines":true,"highlightUnpaired":true},"hints":["先让左右两边的苹果一一配对。","看最后哪一边有苹果没有伙伴。","右边多2个，所以右边多。"],"wrongFeedback":{"wrongDirection":"沿配对线看最后剩下的是哪一边。","sameWhenUnequal":"如果一边还有没配上的，两边就不一样多。"},"workedSolution":"配好3对后，右边还剩2个苹果，因此右边多。","variantRule":{"sameRelation":"compare two sets by pairing","left":2,"right":4,"answer":"right_more"},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G02.q02","tier":2,"type":"ordinal_position_open","prompt":"小兔从左往右排队：兔、猫、熊、鸟、鹿。第3个是谁？请说出动物名字，并从左边数给我看。","parameters":{"sequence":["兔","猫","熊","鸟","鹿"],"indexFromOne":3},"answer":{"value":"熊"},"visual":{"type":"ordered_objects","directionCue":"从左往右箭头","objectsEqualSize":true},"hints":["先找到从哪里开始数：看箭头。","从左边第一个开始，每只动物对应一个数词。","兔第1、猫第2、熊第3；第3个是熊。"],"wrongFeedback":{"countFromWrongSide":"按箭头方向从左边开始数。","confuseOrdinalCardinal":"题目问排第几，不是一共有几只。"},"workedSolution":"沿箭头从左向右数：兔1、猫2、熊3；第3个是熊。","variantRule":{"sameRelation":"ordinal position in ordered set","sequence":["猫","兔","鹿","熊","鸟"],"indexFromOne":3,"answer":"鹿"},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false,"productionEligible":false},{"id":"early.g1.G03","legacyDraftId":"G03","stage":"grade1","title":"整体与部分：5和10以内分与合起步","unit":"上册第一、二单元中的分合前置关系（候选）","objective":"通过两部分组成一个整体，表达5以内数的分与合；接受图示、摆放或算式前的口述表达。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO"],"questions":[{"id":"early.g1.G03.q01","tier":1,"type":"missing_part_numeric","prompt":"5个圆片分成2个和另一部分。另一部分是几个？","parameters":{"whole":5,"knownPart":2},"answer":{"value":3},"visual":{"type":"part_whole_bar","whole":5,"knownPart":2,"unknownPartBlank":true},"hints":["先看整体是几个圆片。","把2个放进已知的一组，数还空着几个位置。","5分成2和3，另一部分是3。"],"wrongFeedback":{"answerIsWhole":"5是全部圆片的总数，题目问空白部分。","miscount":"把已知的2个和你摆出的部分合起来检查是否等于5。"},"workedSolution":"整体5个中已知2个，空白部分是3个，因为2和3合起来是5。","variantRule":{"sameRelation":"whole partition into known and missing part","whole":4,"knownPart":1,"answer":3},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G03.q02","tier":2,"type":"generate_partition","prompt":"请用7颗星星摆出两组，第一组4颗；再说第二组几颗。","parameters":{"whole":7,"knownPart":4},"answer":{"value":3},"visual":{"type":"seven_object_partition_mat","knownPart":4,"emptyPartSlots":3,"moveable":true},"hints":["先把7颗星星都摆出来。","把4颗移到第一组，数剩下的。","7分成4和3，第二组是3颗。"],"wrongFeedback":{"wrongPart":"要回答第二组的数量，不是整体数量。","wholeNotConserved":"两组重新合起来点一次，应该还是7颗。"},"workedSolution":"7颗中4颗在第一组，余下3颗在第二组；4+3=7。","variantRule":{"sameRelation":"whole partition into known and missing part","whole":8,"knownPart":5,"answer":3},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false,"productionEligible":false},{"id":"early.g1.G04","legacyDraftId":"G04","stage":"grade1","title":"5以内加法的意义","unit":"上册第一单元：5以内数的认识和加、减法（候选）","objective":"把两个部分合并成一个整体，理解加法表示合起来；算式仅在相应符号已学后出现。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO","PEP-JINXUEDIAN"],"questions":[{"id":"early.g1.G04.q01","tier":1,"type":"add_sets_open","prompt":"篮子里有2个梨，桌上又放来1个。现在一共有几个梨？","parameters":{"partA":2,"partB":1},"answer":{"value":3},"visual":{"type":"join_two_sets","setA":2,"setB":1,"resultHidden":true},"hints":["先指出篮子里的2个梨。","把桌上的1个梨也移到一起，再点数。","2个和1个合起来是3个。"],"wrongFeedback":{"countOnlyOneSet":"新放来的梨也要和篮子里的合起来数。","doubleCount":"把两组靠开，逐个点一次。"},"workedSolution":"把2个梨和新来的1个梨合并，逐个数得3个。","variantRule":{"sameRelation":"combine two disjoint sets","partA":1,"partB":3,"answer":4},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G04.q02","tier":2,"type":"addition_with_zero","prompt":"盘子里有4颗草莓，又添上0颗。现在盘子里有几颗？","parameters":{"partA":4,"partB":0},"answer":{"value":4},"visual":{"type":"before_after_set","initial":4,"added":0,"emptyAddedSetText":"没有添草莓"},"hints":["先数盘子里原来的草莓。","看看这次有没有新的草莓放进来。","没有添新草莓，数量仍是4颗。"],"wrongFeedback":{"zeroMisread":"0表示这次没有添新的草莓。","countChanged":"前后比较，原来4颗都还在。"},"workedSolution":"添0颗表示没有增加，盘子里仍有4颗。","variantRule":{"sameRelation":"add zero leaves amount unchanged","partA":3,"partB":0,"answer":3},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false,"productionEligible":false},{"id":"early.g1.G05","legacyDraftId":"G05","stage":"grade1","title":"5以内减法的意义","unit":"上册第一单元：5以内数的认识和加、减法（候选）","objective":"体验从整体中去掉一部分或比较前后数量，理解减法情境；在已学后再连接算式。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO","PEP-JINXUEDIAN"],"questions":[{"id":"early.g1.G05.q01","tier":1,"type":"take_away_open","prompt":"树上原来有5只小鸟，飞走2只。树上还剩几只？请把飞走的小鸟移开。","parameters":{"start":5,"removed":2},"answer":{"value":3},"visual":{"type":"manipulable_take_away","initialObjects":5,"moveCount":2,"destinationVisible":true},"hints":["先摆出树上原来的5只。","把飞走的2只移到旁边，再数树上。","5只飞走2只，还剩3只。"],"wrongFeedback":{"countRemoved":"题目问树上还剩的数量，不是飞走的数量。","includedRemoved":"飞走的2只不再留在树上，要分开放。"},"workedSolution":"从5只中移走2只，树上留下3只。","variantRule":{"sameRelation":"remove a part from whole","start":4,"removed":1,"answer":3},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G05.q02","tier":2,"type":"take_all_zero_remains","prompt":"盒子里有3块积木，3块都拿出来。盒子里还剩几块？","parameters":{"start":3,"removed":3},"answer":{"value":0},"visual":{"type":"before_after_container","initialObjects":3,"moveAll":true,"emptyLabel":"空盒子"},"hints":["先摆出盒子里原来的3块。","把这3块都移到盒子外，再看盒子里。","全部拿走后盒子里没有积木，记作0。"],"wrongFeedback":{"zeroMisread":"0表示盒子里一块也没有，不表示题目没问。","removedConfusedWithRemaining":"拿出来的3块在盒子外，题目问盒内剩余。"},"workedSolution":"3块全部拿走，盒内没有积木，剩下0块。","variantRule":{"sameRelation":"remove all items leaves zero","start":5,"removed":5,"answer":0},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false,"productionEligible":false},{"id":"early.g1.G06","legacyDraftId":"G06","stage":"grade1","title":"6—10数量表示与组成","unit":"上册第二单元：6—10的认识和加、减法（候选）","objective":"在实物、图示与口述之间对应6—10的数量；通过分组表达整体和部分，不用选择题猜中作为掌握证据。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO","MOE-2024-LESSON-LIST"],"questions":[{"id":"early.g1.G06.q01","tier":1,"type":"count_set_open","prompt":"请数一数篮子里有几个橘子。可以一边点一边数。","parameters":{"count":6},"answer":{"value":6},"visual":{"type":"countable_object_row","symbol":"🍊","count":6,"moveToCountedArea":true},"hints":["从第一颗开始，一个一个点。","点过的橘子可以移到另一边，避免重复。","一共点到6颗，最后数到的数就是总数。"],"wrongFeedback":{"countOffByOne":"把点过的橘子移开，每颗只数一次。","skipped":"从第一颗开始按顺序点，看看有没有漏掉。"},"workedSolution":"按顺序逐个点数，6颗橘子都各数一次，所以一共有6颗。","variantRule":{"sameRelation":"cardinality from one-to-one counting","count":8,"answer":8},"sourceType":"original_design","textbookSource":null,"enabled":false,"productionEligible":false,"maxAttempts":2},{"id":"early.g1.G06.q02","tier":1,"type":"open_partition","prompt":"10颗星星分成两组，其中一组5颗。另一组有几颗？请说一说或摆一摆。","parameters":{"whole":10,"knownPart":5},"answer":{"value":5},"visual":{"type":"part_whole_frame","whole":10,"knownPart":5,"unknownPartBlank":true,"manipulable":true},"hints":["先摆出全部10颗星星。","把5颗放进第一组，数一数还剩几颗。","5颗和5颗合起来是10颗，另一组是5颗。"],"wrongFeedback":{"answeredWhole":"10是全部数量，题目问的是另一组。","partsDoNotMatch":"把两组重新合在一起点数，检查是不是10颗。"},"workedSolution":"10颗中一组有5颗，剩下5颗；5+5=10。","variantRule":{"sameRelation":"whole partition into known and missing part","whole":8,"knownPart":5,"answer":3},"sourceType":"original_design","textbookSource":null,"enabled":false,"productionEligible":false,"maxAttempts":2},{"id":"early.g1.G06.q03","tier":2,"type":"compare_sets_open","prompt":"左边有7个积木，右边有9个积木。请一一配对，再说哪边多、或两边一样多。","parameters":{"left":7,"right":9},"answer":{"relation":"right_more"},"visual":{"type":"pairable_two_rows","left":7,"right":9,"pairingInteraction":true,"nonColorCue":"unpaired objects stay visible"},"hints":["左边和右边各拿一个，配成一对。","配完以后，只看没有伙伴的积木在哪边。","右边多出2个，所以右边多。"],"wrongFeedback":{"equalDespiteExtra":"还有积木没有伙伴，两边不一样多。","wrongSide":"沿着配对线看最后剩下的积木在哪一边。"},"workedSolution":"7对7以后，右边还剩2个，因此右边多。","variantRule":{"sameRelation":"compare two sets by one-to-one pairing","left":6,"right":9,"answer":"right_more"},"sourceType":"original_design","textbookSource":null,"enabled":false,"productionEligible":false,"maxAttempts":2},{"id":"early.g1.G06.q04","tier":2,"type":"compose_to_ten_open","prompt":"盒子里有8颗珠子。还要放进几颗，盒子里才有10颗？","parameters":{"start":8,"target":10},"answer":{"value":2},"visual":{"type":"ten_frame_missing_part","whole":10,"knownPart":8,"emptySlots":2,"moveableCounters":true},"hints":["先在十格框里放8颗。","继续往空格放珠子，放到10颗就停。","从8数到10：9、10，还要2颗。"],"wrongFeedback":{"countedStartAsAdded":"8颗已经在盒子里，只数后来还要放的珠子。","overshoot":"放一颗数一颗，刚好到10就停。"},"workedSolution":"8颗已经有了，再放2颗到10颗；8+2=10。","variantRule":{"sameRelation":"complete a part to make ten","start":6,"target":10,"answer":4},"sourceType":"original_design","textbookSource":null,"enabled":false,"productionEligible":false,"maxAttempts":2}],"enabled":false,"productionEligible":false},{"id":"early.g1.G07","legacyDraftId":"G07","stage":"grade1","title":"11—20各数的认识：一捆十和几个一","unit":"一年级上册候选主题：11—20各数的认识；2024修订教材册次及范围仍待出版社原页核验","objective":"在物品、十格框与数词/数字之间表示11—20；理解十个一组成一个十，并用十和几个一表达其余数量。","prerequisites":["能逐个点数到10","能在实物或图示中辨认一组10个","可口述表达，不要求先掌握位值术语"],"difficultyPolicy":"从十和几个一的具体摆放开始，再到读写、数序与比较；不以速度或选择题猜答作为掌握证据。","sourceIds":["MOE-2024-CATALOG","PEP-2024-GRADE1-INTRO","MOE-2024-LESSON-LIST","PEP-2022-11-20-HISTORICAL"],"sourceType":"curriculum_guided_original_activity","productionEligible":false,"questions":[{"id":"early.g1.G07.q01","tier":1,"type":"represent_teens_with_ten_and_ones","prompt":"桌上有13根小木棒。请把10根捆成一捆，再说说旁边还剩几根。","parameters":{"count":13,"ten":10,"ones":3},"answer":{"value":13,"ten":1,"ones":3},"visual":{"type":"ten_frame_and_loose_counters","count":13,"groupOfTen":true,"showAnswerBeforeResponse":false},"hints":["先从13根里数出10根，放在一起。","把10根看成一捆，再数没有捆起来的木棒。","13根是1捆十和3根一；10加3就是13。"],"wrongFeedback":{"countedAllAsOnes":"先把10根放成一组，再数旁边的木棒。","onesMismatch":"一捆是10根，别忘了把剩下的几根也数进去。"},"workedSolution":"13根里，10根捆成1捆，旁边还剩3根，所以13是1个十和3个一。","variantRule":{"sameRelation":"represent teen number as one ten and ones","count":16,"ten":10,"ones":6,"answer":16},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G07.q02","tier":1,"type":"compose_ten_and_ones","prompt":"这里有1捆小棒和7根散开的小棒。一共有几根？请先看一看，再说出数字。","parameters":{"tens":1,"ones":7},"answer":{"value":17},"visual":{"type":"bundles_and_loose_counters","bundleValue":10,"bundles":1,"looseOnes":7,"digitHiddenUntilResponse":true},"hints":["先记住一捆里面有10根。","把10根和散开的7根接着数：11、12……","1捆十和7个一合起来是17根。"],"wrongFeedback":{"ignoredBundle":"一捆小棒也要算进去，一捆是10根。","offByTen":"先说出整捆的10根，再把7根接着数上去。"},"workedSolution":"一捆是10根，旁边还有7根；10加7是17，所以一共有17根。","variantRule":{"sameRelation":"compose one ten and loose ones","tens":1,"ones":4,"answer":14},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G07.q03","tier":2,"type":"compare_teens_by_ones","prompt":"小猫有14颗纽扣，小狗有17颗。两边都有一整组10颗，谁的散纽扣更多？所以谁的纽扣总数更多？","parameters":{"left":14,"right":17,"leftOnes":4,"rightOnes":7},"answer":{"relation":"right_more"},"visual":{"type":"paired_ten_frames_and_ones","sameTenVisible":true,"highlightOnes":true},"hints":["先看看两边整组的10颗是不是一样多。","整组一样时，再比旁边剩下的纽扣：4和7。","7比4多，所以17比14大，小狗的纽扣更多。"],"wrongFeedback":{"comparedOnlyOnesWithoutRelation":"先看两边都是1个十，再比较剩下的小棒。","wrongSide":"散纽扣多的一边，总数也多。"},"workedSolution":"14和17都有1个十；散开的部分是4和7，7比4多，所以17大于14。","variantRule":{"sameRelation":"compare teen numbers with equal tens","left":12,"right":18,"leftOnes":2,"rightOnes":8,"answer":"right_more"},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2},{"id":"early.g1.G07.q04","tier":2,"type":"complete_number_sequence_teens","prompt":"小兔从11开始往前跳：11、12、13、□、15。空格里该写哪个数？","parameters":{"sequence":[11,12,13,null,15],"missingIndex":3},"answer":{"value":14},"visual":{"type":"number_path_11_to_20","sequence":[11,12,13,null,15],"direction":"forward_one_step"},"hints":["小兔每次向前跳一格，数字也加1。","13后面一个数是什么？可以从13接着数。","13后面是14，所以空格写14。"],"wrongFeedback":{"skippedNumber":"从13开始接着往前数一步，不要多跳一格。","reversed":"小兔往前走，数会变大一个。"},"workedSolution":"按顺序数：11、12、13、14、15；空格是14。","variantRule":{"sameRelation":"fill one missing successor within 11 to 20","sequence":[15,16,null,18,19],"missingIndex":2,"answer":17},"sourceType":"original_design","enabled":false,"productionEligible":false,"textbookSource":null,"maxAttempts":2}],"enabled":false}]};

// Parent account controls; all gameplay saves finish before cloud work is scheduled.
var cloudAccount,cloudSync,cloudOwner,cloudNotice='',cloudChildren=[];
const CLOUD_SETTINGS='songzi-cloud-public-settings-v1';
const CLOUD_TEST_DEFAULT={url:'https://jtzuzeadyqtcnybfzyrf.supabase.co',key:'sb_publishable_sz8e823U4U-DNmVM7KbiJQ_hGe7N3_w'};
function cloudMessage(text){cloudNotice=text;const e=$('#cloudStatus');if(e)e.textContent=text}
function cloudSaved(){if(cloudSync&&!isTesting()&&storageOK&&!profileReloadPending)cloudSync.mark(profileStore.activeId(),profileStore.raw())}
function cloudGuard(){if(!profileManagementAllowed())throw Error('请在正式档案的家长区操作。');return {owner:cloudAccount?.current()?.id,local:profileStore.activeId(),epoch:profileActivityEpoch,account:cloudAccount}}
function cloudCheck(c){cloudGuard();if(c.account!==cloudAccount||c.owner!==cloudAccount?.current()?.id||c.local!==profileStore.activeId()||c.epoch!==profileActivityEpoch)throw Error('操作期间账号、档案或模式变化，请重新操作。')}
function cloudQueueKey(owner,local){return 'songzi-cloud-create-v1:'+encodeURIComponent(cloudAccount.settings.url)+':'+owner+':'+local}
function cloudDownloadFile(name,data){download(name,JSON.stringify(data,null,2),'application/json')}
async function cloudResume(){
 if(!cloudAccount?.current()||!storageOK||isTesting())return;
 const local=profileStore.activeId(),s=cloudSync.store.get(cloudOwner,local);
 if(s)await cloudSync.bind(local,s.cloud,profileStore.raw(),s.revision);
}
function cloudConfigure(settings){
 if(!String(settings.key||'').startsWith('sb_publishable_'))throw Error('本候选只接受publishable key。');
 const safe=SongziAccount.config(settings);cloudSync?.stop();cloudAccount?.freeze();cloudOwner=null;cloudChildren=[];
 cloudAccount=new SongziAccount.Account({settings:safe,sessionStore:sessionStorage,onChange:user=>{
  if(cloudOwner!==user?.id){cloudSync?.stop();if(typeof clearDecorReveal==='function')clearDecorReveal();cloudChildren=[];cloudOwner=user?.id||null}if(typeof updateHeaderAccount==='function')updateHeaderAccount()
 },fetch:(...args)=>fetch(...args)});
 cloudSync=new SongziCloudSync.Sync({account:cloudAccount,store:new SongziCloudSync.Store(localStorage,safe.url),validate:v=>M.prepareSave(v),lock:globalThis.navigator?.locks?(name,fn)=>navigator.locks.request(name,{mode:'exclusive'},fn):null,status:e=>cloudMessage(e.message)});
 localStorage.setItem(CLOUD_SETTINGS,JSON.stringify(safe));
}
async function cloudAction(fn){try{const c=cloudGuard();await fn(c)}catch(e){cloudMessage(e.message)}finally{if(parentUnlocked&&!profileReloadPending)renderParent()}}
async function cloudRefresh(c){const children=await cloudAccount.list();cloudCheck(c);cloudChildren=children}
async function cloudCreate(c){
 if(!c.owner)throw Error('请先登录家长账号。');
 const existing=cloudSync.store.get(c.owner,c.local);if(existing){await cloudSync.bind(c.local,existing.cloud,profileStore.raw(),existing.revision);return}
 const name=profileStore.list().find(p=>p.id===c.local).name,key=cloudQueueKey(c.owner,c.local);
 let id=localStorage.getItem(key);if(!id){id=crypto.randomUUID();localStorage.setItem(key,id);if(localStorage.getItem(key)!==id)throw Error('创建标识保存失败。')}
 const rows=await cloudAccount.list();cloudCheck(c);
 if(!rows.some(p=>p.id===id)){await cloudAccount.create(name,id);cloudCheck(c)}
 await cloudSync.bind(c.local,id,profileStore.raw());cloudCheck(c);await cloudRefresh(c);
}
async function cloudImport(c,id){
 const row=cloudChildren.find(p=>p.id===id);if(!row)throw Error('请先刷新云档案列表。');
 const remote=await cloudAccount.download(id);cloudCheck(c);if(!remote)throw Error('此云档案尚无存档。');
 if(!Number.isSafeInteger(remote.revision)||remote.revision<1)throw Error('云版本异常。');
 const data=M.prepareSave(remote.data);if(data.testOnly)throw Error('云端包含测试档，已停止。');
 // Creates a separate profile without changing the active profile or replacing any local save.
 const local=profileStore.add(String(row.display_name).slice(0,20),data);
 const state={format:2,owner:c.owner,local,cloud:id,revision:remote.revision,generation:0,status:'synced'};
 cloudSync.store.put(state);cloudMessage('已下载为独立本机档案，请在儿童档案列表选择并刷新。');
}
function renderCloudManager(){
 if(!parentUnlocked)return;
 const disabled=profileManagementAllowed()?'':'disabled',user=cloudAccount?.current();
 $('#main').insertAdjacentHTML('afterbegin','<section class="panel" id="cloudManager"><h2>家长账号与云备份（测试候选）</h2><p>本机先保存，云端异步备份。登录不会自动把未绑定的本机儿童记录上传。退出后本机档案仍保留。</p><p id="cloudStatus" role="status" aria-live="polite">'+escapeHTML(cloudNotice)+'</p>'+
 (!cloudAccount?'<label>Project URL <input id="cloudURL" type="url" placeholder="https://项目.supabase.co"></label><label>Publishable key <input id="cloudKey" autocomplete="off"></label><button id="cloudSetup" '+disabled+'>保存公开配置</button>':
 user?'<p>已登录：'+escapeHTML(user.email)+'</p><div class="actions"><button id="cloudLogout" '+disabled+'>退出账号</button><button id="cloudList" '+disabled+'>刷新云档案</button><button id="cloudBind" '+disabled+'>将当前儿童备份到此账号</button><button id="cloudRetry" '+disabled+'>手动重试同步</button><button id="cloudExport" '+disabled+'>导出队列与冲突副本</button><button id="cloudKeep" '+disabled+'>冲突时保留当前本机进度</button></div><div id="cloudChildren">'+cloudChildren.map(p=>'<p>'+escapeHTML(p.display_name)+' <button data-cloud-download="'+escapeHTML(p.id)+'" '+disabled+'>下载为新本机档案</button></p>').join('')+'</div>':
 '<label>家长邮箱 <input id="cloudEmail" type="email" autocomplete="username"></label><label>密码 <input id="cloudPassword" type="password" autocomplete="current-password"></label><div class="actions"><button id="cloudLogin" '+disabled+'>登录</button><button id="cloudRegister" '+disabled+'>注册</button></div>')+'</section>');
 const on=(id,fn)=>{const b=$(id);if(b)b.onclick=()=>cloudAction(fn)};
 if(!cloudAccount)on('#cloudSetup',async()=>{cloudConfigure({url:$('#cloudURL').value.trim(),key:$('#cloudKey').value.trim()});cloudMessage('公开配置已保存，请登录。')});
 else if(!user){for(const [id,method] of [['#cloudLogin','signIn'],['#cloudRegister','signUp']])on(id,async()=>{
  const email=$('#cloudEmail').value,password=$('#cloudPassword').value;$('#cloudPassword').value='';
  const result=await cloudAccount[method](email,password);cloudMessage(result.message||'登录成功。');
  if(cloudAccount.current()){await cloudResume();const c=cloudGuard();await cloudRefresh(c)}
 })}else{
 on('#cloudLogout',async()=>{await cloudAccount.signOut();cloudMessage('已退出；本机档案和待传队列保留。')});
 on('#cloudList',cloudRefresh);
 on('#cloudBind',async c=>{if(!confirm('将当前儿童的完整记录备份到当前家长账号？'))return;if(!save())throw Error('本机保存失败。');cloudCheck(c);await cloudCreate(c)});
 on('#cloudRetry',async c=>{cloudSaved();await cloudSync.retry(c.local)});
 on('#cloudExport',async c=>cloudDownloadFile('云同步队列与冲突-'+M.localDay()+'.json',cloudSync.export(c.local)));
 on('#cloudKeep',async c=>{if(!confirm('双方将先保留冲突备份，再尝试用当前本机进度更新云端。继续？'))return;cloudSaved();await cloudSync.keepLocal(c.local)});
 document.querySelectorAll('[data-cloud-download]').forEach(b=>b.onclick=()=>cloudAction(c=>cloudImport(c,b.dataset.cloudDownload)));
 }
}
const cloudParentRender=renderParent;renderParent=function(){cloudParentRender();renderCloudManager()};
// Boot is best-effort; no network or parsing is placed on the synchronous save path.
Promise.resolve().then(async()=>{const raw=localStorage.getItem(CLOUD_SETTINGS);cloudConfigure(raw?JSON.parse(raw):CLOUD_TEST_DEFAULT);await cloudAccount.restore();await cloudResume();if(parentUnlocked)renderParent()}).catch(e=>cloudMessage('云服务暂不可用：'+e.message));
globalThis.addEventListener('online',()=>{if(cloudAccount?.current()&&!isTesting())cloudResume().catch(e=>cloudMessage(e.message))});

// Independent playtest adapter. Approved wearable assets must be supplied before enabling equip.
const approvedWearAssets=new Map(); // Intentionally empty: no approved transparent wear assets delivered.
function plantBaseOptions(id){return GardenWear.catalog.filter(c=>c.plantId===id&&c.slot==='base')}
function choosePlantContainer(id,baseId){
 const card=baseId===null?null:GardenWear.get(baseId);
 if(baseId!==null&&(!card||card.plantId!==id||card.slot!=='base'))throw Error('只能使用当前植物自己的底座。');
 if(card&&!approvedWearAssets.has(card.id))throw Error('该底座的正式穿戴素材尚未交付，暂不能装备。');
 // A single base slot is the exclusive selection: null means normal pot; ID means base instead.
 GardenWear.transaction(db,id,'base',baseId,save);refreshGardenWear(id);home();
}
function openPlantContainer(id){
 const name=GardenWear.catalog.find(c=>c.plantId===id)?.plantName||RewardEngine.catalog[id]?.name||'植物';
 const current=GardenWear.equipped(db,id).base;
 sceneSheet(name+' · 花盆与底座','<p>花盆与专属底座只能选择一种。这里只列出'+escapeHTML(name)+'自己的底座，选择跟随植物移动。</p><div class="actions"><button id="useNormalPlantPot">使用普通花盆</button></div>'+plantBaseOptions(id).map(c=>'<section class="panel"><h3>'+escapeHTML(c.name)+'</h3><p>'+(!approvedWearAssets.has(c.id)?'正式穿戴素材待美术交付，暂不可用':current===c.id?'当前使用':'可选择')+'</p><button data-plant-base="'+c.id+'" '+(!approvedWearAssets.has(c.id)?'disabled':'')+'>选择专属底座</button></section>').join(''));
 $('#useNormalPlantPot').onclick=()=>{try{choosePlantContainer(id,null);closeSceneSheet()}catch(e){notify(e.message)}};
 document.querySelectorAll('[data-plant-base]').forEach(b=>b.onclick=()=>{try{choosePlantContainer(id,b.dataset.plantBase);closeSceneSheet()}catch(e){notify(e.message)}});
}
// Do not render substitute SVG shapes as approved art. Preserve saved selections for later recovery.
wearCurrent=function(id){const equipped=GardenWear.equipped(db,id);return Object.fromEntries(Object.entries(equipped).filter(([,value])=>approvedWearAssets.has(value)))};
openGardenWear=function(id){if(Number.isInteger(id))return openPlantContainer(id);sceneSheet('植物花盆与专属底座','<p>此前临时配饰素材已停用。请从各植物的花盆选项选择它自己的底座；正式透明配饰待美术交付。</p>')};
wearApply=function(){notify('临时配饰已停用，等待美术确认的正式素材。');return false};
const containerPlacementPicker=chooseGardenPot;
chooseGardenPot=function(index){containerPlacementPicker(index);const id=GardenLayout.ensure(db,safeCollection()).slots[index];if(Number.isInteger(id)&&plantBaseOptions(id).length){$('#sceneSheetContent').insertAdjacentHTML('beforeend','<div class="actions"><button id="plantContainerOptions">当前植物的花盆与专属底座</button></div>');$('#plantContainerOptions').onclick=()=>openPlantContainer(id)}};
if(typeof trialBar!=='undefined'){trialBar.innerHTML='<strong>家长试玩 · 独立测试档 · 首次默认10包</strong><p>配饰临时图已停用；点击植物花盆查看它自己的底座选项。正式素材未到的底座暂不可选。</p><button id="trialOpenPacks">打开我的卡包</button>';$('#trialOpenPacks').onclick=()=>openCards('packs')}
home();

// Current integrated bank only. New grades stay disabled until their actual bank integration.
const adventureGrades=[{id:'g3',name:'三年级上册',ready:true},{id:'k',name:'幼儿园（5—6岁）',ready:false},{id:'g1',name:'一年级',ready:false},{id:'g2',name:'二年级',ready:false}];
function allowedAdventureGrades(){const value=db.profile.allowedAdventureGrades;if(value===undefined)return ['g3'];if(!Array.isArray(value))return [];return adventureGrades.filter(g=>g.ready&&value.includes(g.id)).map(g=>g.id)}
function gradeEntryAllowed(){return allowedAdventureGrades().includes('g3')}
function saveAdventureGrades(ids){if(!parentUnlocked)throw Error('请先进入家长区。');if(session)throw Error('请先结束当前冒险，再调整开放年级。');const previous=db.profile.allowedAdventureGrades;db.profile.allowedAdventureGrades=adventureGrades.filter(g=>g.ready&&ids.includes(g.id)).map(g=>g.id);if(!save()){if(previous===undefined)delete db.profile.allowedAdventureGrades;else db.profile.allowedAdventureGrades=previous;throw Error('设置未保存，已恢复原开放范围。')}}
const gradeParentRender=renderParent;
renderParent=function(){gradeParentRender();if(!parentUnlocked)return;$('#main').insertAdjacentHTML('afterbegin','<section class="panel"><h2>开放的冒险年级</h2><p>按当前儿童独立保存；未接入的年级暂不可开放。测试档设置只影响测试档。</p>'+adventureGrades.map(g=>'<label style="display:block;padding:8px"><input type="checkbox" data-grade-allow="'+g.id+'" '+(allowedAdventureGrades().includes(g.id)?'checked ':'')+(!g.ready?'disabled ':'')+'>'+escapeHTML(g.name)+(g.ready?'':' · 题库未接入')+'</label>').join('')+'<button id="saveAdventureGrades">保存开放范围</button><p id="gradeAccessStatus" role="status"></p></section>');$('#saveAdventureGrades').onclick=()=>{try{const ids=Array.from(document.querySelectorAll('[data-grade-allow]')).filter(e=>e.checked&&!e.disabled).map(e=>e.dataset.gradeAllow);saveAdventureGrades(ids);$('#gradeAccessStatus').textContent='当前儿童的开放年级已保存。'}catch(e){$('#gradeAccessStatus').textContent=e.message}}};
const gradeLearnRender=renderLearn;
renderLearn=function(){if(!gradeEntryAllowed()&&!session){$('#main').innerHTML='<section class="panel"><h1>冒险年级</h1><p>家长尚未开放已接入的年级，请到家长区设置。</p></section>';return}gradeLearnRender();if(session&&!adventureMapOnly)return;$('#main').insertAdjacentHTML('afterbegin','<section class="panel"><label>冒险年级 <select id="adventureGrade">'+adventureGrades.map(g=>'<option value="'+g.id+'" '+(g.id==='g3'?'selected ':'')+(!g.ready||!allowedAdventureGrades().includes(g.id)?'disabled ':'')+'>'+escapeHTML(g.name)+(!g.ready?' · 尚未接入':'')+'</option>').join('')+'</select></label></section>')};
for(const key of ['startSession','startChapterSkill','openChapter']){
 const original=key==='startSession'?startSession:key==='startChapterSkill'?startChapterSkill:openChapter;
 const guarded=function(...args){if(!gradeEntryAllowed()){notify('此年级未开放，请家长设置学习范围。');return false}return original.apply(this,args)};
 if(key==='startSession')startSession=guarded;else if(key==='startChapterSkill')startChapterSkill=guarded;else openChapter=guarded;
}

const EarlyAttempt=(()=>{'use strict';

const clone = value => JSON.parse(JSON.stringify(value));

function expectedFor(question, variant = false) {
  if (!variant) return question.expectedResponse || question.answer;
  const rule = question.variantRule || {};
  if (Array.isArray(rule.validPartPairs)) return { kind: 'open_partition', validPartPairs: rule.validPartPairs };
  if (rule.remaining !== undefined && rule.change !== undefined) return { kind: 'two_part_response', change: rule.change, remaining: rule.remaining };
  return { value: rule.answer ?? rule.remaining ?? rule.sequence?.[rule.indexFromOne - 1] };
}

function normalizedAnswer(value) {
  if (typeof value === 'string') {
    const s = value.trim();
    try { return JSON.parse(s); } catch { return /^-?\d+$/.test(s) ? Number(s) : s; }
  }
  return value;
}

function matches(expected, raw) {
  const actual = normalizedAnswer(raw);
  if (expected.validPartPairs) {
    const pair = Array.isArray(actual) ? actual : typeof actual === 'string' ? actual.split(/[，,\s]+/).map(Number) : [];
    return pair.length === 2 && expected.validPartPairs.some(([a,b]) => Number(a) === Number(pair[0]) && Number(b) === Number(pair[1]));
  }
  if (expected.kind === 'two_part_response') {
    const obj = Array.isArray(actual) ? { change: actual[0], remaining: actual[1] } : actual && typeof actual === 'object' ? actual : {};
    return Number(obj.change) === expected.change && Number(obj.remaining) === expected.remaining;
  }
  const value = expected.value ?? expected.relation;
  return String(actual) === String(value);
}

function createSession({ question, moduleId, contentVersion, sessionId = `preview-${Date.now()}` }) {
  if (!question || !question.id || !moduleId || !contentVersion) throw new Error('question、moduleId、contentVersion均为必填');
  const events = [];
  let attempts = 0, hintLevel = 0, state = 'original', answerShown = false, variantAttempted = false;
  const emit = (eventType, data = {}) => events.push({
    eventId: `${sessionId}:${events.length + 1}`, eventType, sessionId, moduleId, questionId: question.id,
    contentVersion, variantId: data.variantId || null, attemptIndex: data.attemptIndex ?? null,
    isCorrect: data.isCorrect ?? null, hintLevel: data.hintLevel ?? hintLevel,
    answerShown: data.answerShown ?? answerShown, postDemoVariant: Boolean(data.postDemoVariant),
    supportCompleted: data.supportCompleted ?? null, independentAttempt: Boolean(data.independentAttempt), independentEvidence: Boolean(data.independentEvidence),
    response: data.response ?? null, at: new Date().toISOString()
  });
  function requestHint() {
    if (state !== 'original' || hintLevel >= 3) return null;
    hintLevel++;
    const h = question.hints?.[hintLevel - 1];
    answerShown ||= hintLevel === 3 || h?.kind === 'worked_example';
    emit('hint_shown', { hintLevel, answerShown });
    return clone(h || { level: hintLevel, text: '' });
  }
  function demonstrate() {
    state = 'demonstration'; answerShown = true;
    emit('demonstration_shown', { answerShown: true, supportCompleted: false, independentEvidence: false });
    state = 'variant';
    emit('variant_started', { postDemoVariant: true, answerShown: true });
    return { workedSolution: question.workedSolution, variantRule: clone(question.variantRule), expectedVariant: expectedFor(question, true) };
  }
  function submit(response) {
    if (state === 'done' || state === 'fallback') throw new Error(`当前状态不接受作答：${state}`);
    if (state === 'variant') {
      if (variantAttempted) throw new Error('同关系变式只允许一次尝试');
      variantAttempted = true;
      const isCorrect = matches(expectedFor(question, true), response);
      emit('variant_submitted', { variantId: `${question.id}.variant1`, attemptIndex: 1, isCorrect, postDemoVariant: true, answerShown: true, supportCompleted: isCorrect, independentEvidence: false, response: normalizedAnswer(response) });
      state = isCorrect ? 'done' : 'fallback';
      if (!isCorrect) emit('prerequisite_fallback', { variantId: `${question.id}.variant1`, postDemoVariant: true, supportCompleted: false, independentEvidence: false });
      return { state, isCorrect, independentEvidence: false, feedback: isCorrect ? '你把刚才的方法用到新题里了！这次记作“示范后变式完成”。' : '先停一下，我们用实物摆一摆，再看图一步一步做。' };
    }
    attempts++;
    const isCorrect = matches(expectedFor(question), response);
    const independentEvidence = attempts === 1 && hintLevel === 0 && !answerShown;
    emit('original_attempt_submitted', { attemptIndex: attempts, isCorrect, independentAttempt: attempts === 1 && hintLevel === 0 && !answerShown, independentEvidence: independentEvidence && isCorrect, response: normalizedAnswer(response), supportCompleted: isCorrect });
    if (isCorrect) { state = 'done'; return { state, isCorrect, independentEvidence, feedback: independentEvidence ? '答对了！这是独立首答。' : '答对了！这次是在提示后完成的。' }; }
    if (attempts === 1) {
      const hint = hintLevel === 0 ? requestHint() : null;
      return { state, isCorrect, independentEvidence: false, feedback: question.wrongFeedback?.firstTry || '再想一想，按提示把物品逐个点清楚。', hint };
    }
    return { state: 'variant', isCorrect: false, independentEvidence: false, ...demonstrate() };
  }
  return {
    get state() { return state; }, get attempts() { return attempts; }, get hintLevel() { return hintLevel; }, get events() { return clone(events); },
    requestHint, submit,
    snapshot() { return { state, attempts, hintLevel, answerShown, events: clone(events), productionEligible: false }; }
  };
}

return { createSession, matches, expectedFor };
})();
function earlyVisual(q,variant){const p=variant?q.variantRule:q.parameters||{},labels={quantity:'数量',targetQuantity:'要摆的数量',left:'左边',right:'右边',start:'原来',removed:'拿走',partA:'第一组',partB:'第二组',whole:'一共',knownPart:'已知一组',count:'这组物品',tens:'十',ones:'一'};const numbers=Object.entries(p).filter(([k,v])=>labels[k]&&Number.isInteger(v)&&v>=0&&v<=20);return '<div class="panel">'+numbers.map(([k,n])=>'<p>'+labels[k]+'：'+(n?'● '.repeat(n):'（空）')+'</p>').join('')+(Array.isArray(p.sequence)?'<p>顺序：'+p.sequence.map(escapeHTML).join(' → ')+'</p>':'')+'</div>'}
// Explicitly enabled in the independent parent playtest, not the production bank.
for(const g of adventureGrades)if(['k','g1'].includes(g.id))g.ready=true;
let earlyGrade='g3',earlyRun=null,earlyQuestion=null,earlyModule=null,earlyFeedback='';
function earlyAllowed(id){return allowedAdventureGrades().includes(id)}
const cuteGradeOrder=['k','g1','g2','g3','g4','g5'];
const cuteGradeIcons={k:'🌱',g1:'🌼',g2:'🍀',g3:'🌳',g4:'🍄',g5:'⭐'};
adventureGrades.find(g=>g.id==='k').name='幼儿园';adventureGrades.sort((a,b)=>cuteGradeOrder.indexOf(a.id)-cuteGradeOrder.indexOf(b.id));
function earlyTabs(){return '<div class="map-grade-tabs cute-grade-tabs" style="position:static;display:flex;flex-wrap:wrap;gap:8px">'+cuteGradeOrder.map(id=>{const g=adventureGrades.find(g=>g.id===id)||{id,name:id==='g4'?'四年级':'五年级',ready:false},available=g.ready&&earlyAllowed(id),selected=earlyGrade===id;return '<button class="cute-grade grade-'+id+'" data-early-grade="'+id+'" '+(!available?'disabled':'')+' aria-pressed="'+selected+'" title="'+escapeHTML(!g.ready?'内容准备中':!available?'等待家长开放':g.name)+'"><span class="grade-bud" aria-hidden="true">'+cuteGradeIcons[id]+'</span><span>'+escapeHTML(g.name)+'</span>'+(!available?'<span class="grade-lock" aria-hidden="true">🔒</span>':selected?'<span class="grade-picked" aria-hidden="true">✦</span>':'')+'</button>'}).join('')+'</div>'}
function bindEarlyTabs(){document.querySelectorAll('[data-early-grade]').forEach(b=>b.onclick=()=>{if(!earlyAllowed(b.dataset.earlyGrade))return;earlyGrade=b.dataset.earlyGrade;earlyRun=null;renderLearn()})}
function earlyStart(moduleId,questionId){
 if(!earlyAllowed(earlyGrade)||!['k','g1'].includes(earlyGrade)){notify('请家长先开放该年级。');return false}
 const m=EARLY_CONTENT.modules.find(m=>m.id===moduleId),q=m?.questions.find(q=>q.id===questionId);
 if(!q||!m.id.startsWith(earlyGrade==='k'?'early.k.':'early.g1.'))return false;
 earlyModule=m;earlyQuestion=q;earlyFeedback='';earlyRun=EarlyAttempt.createSession({question:q,moduleId:m.id,contentVersion:EARLY_CONTENT.packageVersion,sessionId:'early-'+cardToken()});renderEarlyQuestion();return true;
}
function persistEarly(){
 const previous=db.earlyLearning;
 if(previous&&previous.version!==1)throw Error('低龄学习记录版本较新，已保留。');
 const snapshot=earlyRun.snapshot(),rows=[...(previous?.runs||[])],id=earlyRun.events[0]?.sessionId;
 if(!id)return;
 const record={id,grade:earlyGrade,moduleId:earlyModule.id,questionId:earlyQuestion.id,contentVersion:EARLY_CONTENT.packageVersion,sourceType:earlyQuestion.sourceType,scope:'parent-playtest',...snapshot};
 const index=rows.findIndex(r=>r.id===id);if(index>=0)rows[index]=record;else rows.push(record);
 db.earlyLearning={version:1,runs:rows};if(!save()){if(previous===undefined)delete db.earlyLearning;else db.earlyLearning=previous;throw Error('学习记录未保存，请先导出当前测试档。')}
}
function earlyResponse(text){const v=text.trim();const words={'左边多':'left_more','右边多':'right_more','一样多':'equal','相同':'equal'};if(words[v])return words[v];if(/^\d+\s*[,，、 ]\s*\d+$/.test(v))return v.split(/[,，、 ]+/).map(Number);return v}
function earlyVariantText(q){const r=q.variantRule||{};if(r.validPartPairs)return '把'+r.whole+'个小物品分成两组，每组至少有1个。说出两组各有几个（例如：2,3）。';if(r.whole!==undefined&&r.knownPart!==undefined)return '一共有'+r.whole+'个小物品，已知一组有'+r.knownPart+'个，另一组有几个？';if(r.start!==undefined&&r.change!==undefined)return '原来有'+r.start+'个小物品，'+(r.direction==='remove'?'拿走':'添上')+r.change+'个，'+(r.direction==='remove'?'还剩几个？':'现在有几个？');if(r.start!==undefined&&r.removed!==undefined)return '原来有'+r.start+'个小物品，拿走'+r.removed+'个，还剩几个？';if(r.start!==undefined&&r.target!==undefined)return '现在有'+r.start+'个，还要添几个才到'+r.target+'个？';if(r.change!==undefined&&r.remaining!==undefined)return '拿走'+r.change+'个后还剩'+r.remaining+'个，开始有几个？（分别输入拿走数,剩余数）';if(r.count!==undefined)return '请数一数这组里有几个小物品。';if(r.left!==undefined&&r.right!==undefined)return '左边有'+r.left+'个，右边有'+r.right+'个，哪边多？';if(r.sequence)return '按顺序看：'+r.sequence.join('、')+'。从前往后第'+r.indexFromOne+'个是什么？';if(r.partA!==undefined&&r.partB!==undefined)return '把'+r.partA+'个和'+r.partB+'个小物品合在一起，一共有几个？';return '同关系新题：'+q.prompt}
function renderEarlyQuestion(){
 if(!earlyRun||!earlyAllowed(earlyGrade))return renderLearn();
 const q=earlyQuestion,variant=earlyRun.state==='variant',done=['done','fallback'].includes(earlyRun.state);
 const prompt=variant?earlyVariantText(q):q.prompt.replace(/\{(\w+)\}/g,(_,k)=>q.parameters?.[k]??'');
 const expected=EarlyAttempt.expectedFor(q,variant),pair=expected.validPartPairs||expected.kind==='two_part_response';
 $('#main').innerHTML='<section class="panel"><h1>'+escapeHTML(earlyModule.title)+'</h1><p>低龄首批体验内容 · 不计时、不扣分</p><h2>'+escapeHTML(prompt)+'</h2>'+earlyVisual(q,variant)+'<p>可以和家长一起用松果、积木摆一摆，再输入答案。</p><label>'+(pair?'请输入两个数，用逗号分开':'请输入数字或“左边多 / 右边多 / 一样多”')+'<input id="earlyAnswer" autocomplete="off" '+(done?'disabled':'')+'></label><div class="actions"><button id="earlySubmit" '+(done?'disabled':'')+'>提交</button><button id="earlyHint" '+(done||variant?'disabled':'')+'>给我一点提示</button><button id="earlyBack">返回年级小径</button></div><p id="earlyFeedback" role="status">'+escapeHTML(earlyFeedback)+'</p></section>';
 $('#earlySubmit').onclick=()=>{try{const input=$('#earlyAnswer').value;if(!input.trim())return;const result=earlyRun.submit(earlyResponse(input));earlyFeedback=result.workedSolution?'一起看：'+result.workedSolution:result.feedback;if(result.hint)earlyFeedback+=' '+(typeof result.hint==='string'?result.hint:result.hint.text||'');persistEarly();renderEarlyQuestion()}catch(e){notify(e.message)}};
 $('#earlyHint').onclick=()=>{try{const hint=earlyRun.requestHint();earlyFeedback=typeof hint==='string'?hint:hint?.text||'先仔细看一看，再摆一摆。';persistEarly();renderEarlyQuestion()}catch(e){notify(e.message)}};
 $('#earlyBack').onclick=()=>{earlyRun=null;renderLearn()};
}
const earlyExistingLearn=gradeLearnRender;
renderLearn=function(){
 if(earlyRun&&earlyAllowed(earlyGrade))return renderEarlyQuestion();
 if(earlyGrade==='g3'&&earlyAllowed('g3')){earlyExistingLearn();if(session&&!adventureMapOnly)return;const tabs=$('.map-grade-tabs');if(tabs){tabs.innerHTML=earlyTabs().replace(/^<div[^>]*>|<\/div>$/g,'');bindEarlyTabs()}return}
 $('#main').innerHTML='<section class="panel"><h1>森林冒险手册</h1>'+earlyTabs()+'<p>幼儿园与一年级目前为首批体验题，不是完整年级题库。请家长先开放相应年级。</p></section>'+(earlyAllowed(earlyGrade)?EARLY_CONTENT.modules.filter(m=>m.id.startsWith(earlyGrade==='k'?'early.k.':'early.g1.')).map(m=>'<section class="panel"><h2>'+escapeHTML(m.title)+'</h2>'+m.questions.map((q,i)=>'<button data-early-module="'+m.id+'" data-early-question="'+q.id+'">第'+(i+1)+'个小任务</button>').join('')+'</section>').join(''):'');bindEarlyTabs();document.querySelectorAll('[data-early-question]').forEach(b=>b.onclick=()=>earlyStart(b.dataset.earlyModule,b.dataset.earlyQuestion));
};

function earlyStageRewardBadge(moduleId){const claimed=!!db.earlyStageRewards?.first?.[moduleId];return '<span class="stage-pack-badge"><strong class="reward-badge-heading">'+(claimed?'首通已领取':'首次通关')+'</strong>'+(claimed?'<span>✓</span>':sunLoot(RewardEngine.CONFIG.earnings.firstStageBonusSun))+'</span>'}
function earlyChapterRewardBadge(){const done=!!db.earlyStageRewards?.chapters?.['early:'+earlyGrade+':first-batch'];return '<span class="stage-pack-badge"><strong class="reward-badge-heading">'+(done?'整章奖励已领取':'整章首次通关')+'</strong>'+(done?'<span>✓</span>':rewardLoot(RewardEngine.CONFIG.earnings.firstChapterPacks,false))+'</span>'}
function earlyTaskRewardBadge(){return '<span class="stage-pack-badge"><strong class="reward-badge-heading">完成任务</strong>'+sunLoot(RewardEngine.CONFIG.earnings.sunPerCompletedQuestion)+'</span>'}
// Share the existing grade-three forest shell, chapter grid and question classes.
let earlySelectedModule=null;
function earlyModules(){return EARLY_CONTENT.modules.filter(m=>m.id.startsWith(earlyGrade==='k'?'early.k.':'early.g1.'))}
function earlyModuleView(id){
 const m=earlyModules().find(m=>m.id===id);if(!m||!earlyAllowed(earlyGrade))return;
 earlySelectedModule=id;closeSceneSheet();
 $('#main').innerHTML='<section class="mixed-chapter"><div class="mixed-chapter-head"><div><small>FOREST KNOWLEDGE TRAILS</small><h1>'+escapeHTML(m.title)+'</h1><p>'+m.questions.length+'条知识小径 · 不用抢答，慢慢想</p></div><button class="wood-sign" id="earlyMapBack">↶ 返回地图</button></div><div class="mixed-trail chapter-grid--'+m.questions.length+'">'+m.questions.map((q,i)=>'<button class="mixed-skill" data-early-module="'+m.id+'" data-early-question="'+q.id+'"><span class="mixed-skill-number">'+String(i+1).padStart(2,'0')+'</span><span class="mixed-skill-art">'+['🌱','🍀','🌻','🌳'][i%4]+'</span><strong>第'+(i+1)+'个小任务</strong><span>'+escapeHTML(q.prompt.replace(/\{(\w+)\}/g,(_,k)=>q.parameters?.[k]??'')).slice(0,65)+'</span><small>一起看一看、摆一摆</small><em>开始一轮 ➜</em>'+earlyTaskRewardBadge()+'</button>').join('')+'</div></section>';
 $('#earlyMapBack').onclick=()=>{earlySelectedModule=null;renderLearn()};document.querySelectorAll('[data-early-question]').forEach(b=>b.onclick=()=>earlyStart(b.dataset.earlyModule,b.dataset.earlyQuestion));
}
function renderEarlyForest(){
 // Let the original renderer build its exact background, paper, header and responsive shell.
 selectedChapter=null;mixedChapterView=false;adventureMapOnly=true;earlyExistingLearn();
 const tabs=$('.map-grade-tabs');if(tabs)tabs.innerHTML=earlyTabs().replace(/^<div[^>]*>|<\/div>$/g,'');bindEarlyTabs();
 const title=$('.map-heading h1'),subtitle=$('.map-heading p');if(title)title.textContent='森林冒险手册';if(subtitle)subtitle.textContent=earlyGrade==='k'?'小小松果探险队，一起出发吧。':'沿着脚印，探索数字与数量。';
 const modules=earlyModules(),allowed=earlyAllowed(earlyGrade),body=$('.map-route-body');
 if(body){body.innerHTML='<svg class="responsive-route" preserveAspectRatio="none" aria-hidden="true"><path fill="none" stroke="#fff1c6" stroke-width="18"/><path fill="none" stroke="#b99051" stroke-width="4" stroke-dasharray="7 12"/></svg>'+modules.map((m,i)=>'<button class="map-pin '+(allowed?'':'locked')+'" data-map-unit="'+m.id+'" aria-label="'+escapeHTML(m.title)+'" '+(!allowed?'disabled':'')+'><span class="pin-island">'+(SCENE_PLANTS[mapPlantId(i)]||SCENE_PLANTS[0])+'<span class="pin-number">'+(allowed?i+1:'🔒')+'</span></span><span class="pin-title">'+escapeHTML(m.title)+'</span>'+earlyStageRewardBadge(m.id)+'</button>').join('');if(typeof arrangeAdventureRoute==='function')arrangeAdventureRoute(body)}
 const challenges=$('.map-challenges');if(challenges){challenges.innerHTML='<button class="today-stage-reward reward-hero" id="earlyForestStart" '+(!allowed?'disabled':'')+'><span class="reward-hero-copy"><strong>今日花园任务</strong><small>'+(allowed?'和植物伙伴一起看一看、摆一摆':'请家长先开放这个年级')+'</small><em>开始探索 ➜</em></span></button><div class="daily-reward-tile map-daily-button"><strong>🌱 成长小径</strong><small>走完本年级全部小径</small>'+earlyChapterRewardBadge()+'</div>';$('#earlyForestStart').onclick=()=>{if(allowed&&modules[0])earlyModuleView(modules[0].id)}}
 document.querySelectorAll('[data-map-unit]').forEach(b=>b.onclick=()=>{if(allowed)earlyModuleView(b.dataset.mapUnit)});
 const note=$('.map-note');if(note){note.innerHTML='';note.hidden=true}
}
const earlyForestOriginalRender=renderLearn;
renderLearn=function(){if(earlyRun&&earlyAllowed(earlyGrade))return renderEarlyQuestion();if(earlyGrade==='g3')return earlyForestOriginalRender();return renderEarlyForest()};
// Reuse the same question sheet and answer-line styling rather than a separate low-age panel.
const earlyQuestionSheet=renderEarlyQuestion;
renderEarlyQuestion=function(){earlyQuestionSheet();const main=$('#main'),panel=main.querySelector?.(':scope > section.panel');if(panel){panel.className='question';const back=$('#earlyBack');if(back)back.className='secondary';const submit=$('#earlySubmit');if(submit)submit.className='primary';const hint=$('#earlyHint');if(hint)hint.className='secondary';const input=$('#earlyAnswer');if(input)input.setAttribute('aria-label','填写答案');}$('#earlyBack').onclick=()=>{earlyRun=null;if(earlySelectedModule)earlyModuleView(earlySelectedModule);else renderLearn()}};

// New stages inherit the active grade-three earnings configuration.
function settleEarlyRewards(record){
 if(typeof gradeEarns==='function'&&!gradeEarns(record.grade))return;
 if(record.state!=='done'||!record.events.some(e=>e.isCorrect===true))return;
 const e=RewardEngine.CONFIG.earnings,s=db.earlyStageRewards??={version:1,first:{},chapters:{},rounds:{}};
 if(s.version!==1)throw Error('低龄奖励版本较新，请先保留备份。');
 const addSun=(amount,ref,reason)=>{if(db.ledger.some(row=>row.ref===ref))return false;db.wallet.sun+=amount;db.ledger.push({id:ref,ref,resource:'sun',amount,reason,at:new Date().toISOString()});return true};
 const completion='early:question:'+record.id;
 if(!addSun(e.sunPerCompletedQuestion,completion,'完成数学任务'))return;
 const m=EARLY_CONTENT.modules.find(m=>m.id===record.moduleId);if(!m)throw Error('低龄模块不存在');
 // A module is a small stage. Its published tasks form one round; repeated task cannot fill two places.
 const round=s.rounds[m.id]??={number:1,completed:[]};
 if(!round.completed.includes(record.questionId))round.completed.push(record.questionId);
 if(m.questions.every(q=>round.completed.includes(q.id))){
  addSun(e.sunPerNormalRound,'early:round:'+m.id+':'+round.number,'完成整场冒险');
  if(!s.first[m.id]){addSun(e.firstStageBonusSun,'early:first:'+m.id,'知识点首次通关');s.first[m.id]={at:new Date().toISOString(),run:record.id}}
  round.number++;round.completed=[];
  const grade=record.grade,modules=EARLY_CONTENT.modules.filter(m=>m.id.startsWith(grade==='k'?'early.k.':'early.g1.'));
  const chapter=m.id;
  if(!s.chapters[chapter]){
   for(let n=0;n<e.firstChapterPacks;n++){const id=chapter+':pack:'+n;if(!db.packs.some(p=>p.id===id))db.packs.push({id,poolId:'forest',status:'available',cards:[],source:'chapter-complete',at:new Date().toISOString(),earlyChapter:chapter})}
   if(typeof grantChapterCollectible==='function')grantChapterCollectible(grade,modules.findIndex(x=>x.id===m.id)+1,chapter);
   s.chapters[chapter]={at:new Date().toISOString(),moduleIds:[m.id]};
  }
 }
}
// Commit learning evidence, rewards, receipts and pack inventory together through the existing save.
persistEarly=function(){
 const previous=JSON.parse(JSON.stringify({earlyLearning:db.earlyLearning,earlyStageRewards:db.earlyStageRewards,wallet:db.wallet,ledger:db.ledger,packs:db.packs,chapterCollectibles:db.chapterCollectibles,gardenSkins:db.gardenSkins,decorArtOwned:db.decorArtOwned}));
 try{
  const prior=db.earlyLearning;if(prior&&prior.version!==1)throw Error('低龄记录版本较新，原文保留。');
  const snapshot=earlyRun.snapshot(),id=earlyRun.events[0]?.sessionId;if(!id)return;
  const record={id,grade:earlyGrade,moduleId:earlyModule.id,questionId:earlyQuestion.id,contentVersion:EARLY_CONTENT.packageVersion,sourceType:earlyQuestion.sourceType,scope:'parent-playtest',...snapshot};
  const runs=[...(prior?.runs||[])],index=runs.findIndex(row=>row.id===id);if(index<0)runs.push(record);else runs[index]=record;
  db.earlyLearning={version:1,runs};settleEarlyRewards(record);
  if(!save())throw Error('学习记录和奖励未保存，请保留页面并导出测试档。');wallet();
 }catch(error){for(const key of ['earlyLearning','earlyStageRewards','wallet','ledger','packs','chapterCollectibles','gardenSkins','decorArtOwned']){if(Object.prototype.hasOwnProperty.call(previous,key))db[key]=previous[key];else delete db[key]}throw error}
};

// Keep existing controls and listeners; move their DOM nodes into a small, ordered parent workspace.
let parentWorkspaceTab='settings';
function visibleAdventureGrades(){return cuteGradeOrder.filter(id=>adventureGrades.some(g=>g.id===id&&g.ready)&&earlyAllowed(id))}
earlyTabs=function(){return '<div class="map-grade-tabs cute-grade-tabs" style="position:static;display:flex;flex-wrap:wrap;gap:8px">'+visibleAdventureGrades().map(id=>{const g=adventureGrades.find(g=>g.id===id);return '<button class="cute-grade grade-'+id+'" data-early-grade="'+id+'" aria-pressed="'+(earlyGrade===id)+'"><span class="grade-bud" aria-hidden="true">'+cuteGradeIcons[id]+'</span><span>'+escapeHTML(g.name)+'</span>'+(earlyGrade===id?'<span class="grade-picked" aria-hidden="true">✦</span>':'')+'</button>'}).join('')+'</div>'};
const cleanLearnRenderer=renderLearn;
renderLearn=function(){const visible=visibleAdventureGrades();if(!visible.includes(earlyGrade)){earlyRun=null;earlyGrade=visible[0]||'none'}if(!visible.length){$('#main').innerHTML='<section class="panel"><h1>冒险暂未开放</h1><p>请家长在学习设置中选择开放的年级。</p></section>';return}return cleanLearnRenderer()};
function parentSectionGroup(node){
 if(node.id==='cloudManager'||node.id==='profileManager'||node.querySelector?.('[data-grade-allow]'))return 'settings';
 const title=node.querySelector?.('h2,h3')?.textContent||'';
 if(/设置|范围|档案|年级|提醒/.test(title))return 'settings';
 if(node.querySelector?.('#backup,#import,#csv,#report'))return 'backup';
 if(/观察|复习|分析|知识点|答题|记录|过程/.test(title))return 'records';
 return 'overview';
}
function arrangeParentWorkspace(){
 const main=$('#main');if(!main?.children||main.querySelector?.('.parent-workspace'))return;
 const children=Array.from(main.children),workspace=document.createElement('section');workspace.className='parent-workspace';
 const groups=[['settings','学习设置','年级开放、学习范围与儿童档案'],['overview','学习概览','本期表现与学习建议'],['records','详细记录','答题、提示与复习记录'],['backup','数据备份','导出报告、备份与恢复']];
 workspace.innerHTML='<header class="parent-workspace-header"><div><small>家长中心</small><h1>陪伴每一步成长</h1></div><span>当前儿童：'+escapeHTML(db.profile.name||'未命名')+'</span></header><nav class="parent-workspace-tabs" aria-label="家长功能分区">'+groups.map(([id,name])=>'<button type="button" data-parent-tab="'+id+'">'+name+'</button>').join('')+'</nav>'+groups.map(([id,name,note])=>'<div data-parent-pane="'+id+'"><div class="parent-pane-heading"><h2>'+name+'</h2><p>'+note+'</p></div><div data-parent-content="'+id+'"></div></div>').join('');
 main.appendChild(workspace);
 for(const child of children){if(child.tagName==='H1'||child.classList?.contains('eyebrow')){child.hidden=true;continue}const target=workspace.querySelector('[data-parent-content="'+parentSectionGroup(child)+'"]');target?.appendChild(child)}
 const select=id=>{parentWorkspaceTab=id;workspace.querySelectorAll('[data-parent-pane]').forEach(p=>p.hidden=p.dataset.parentPane!==id);workspace.querySelectorAll('[data-parent-tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.parentTab===id));b.classList.toggle('active',b.dataset.parentTab===id)})};
 workspace.querySelectorAll('[data-parent-tab]').forEach(b=>b.onclick=()=>select(b.dataset.parentTab));select(parentWorkspaceTab);
}
const cleanParentRenderer=renderParent;
renderParent=function(){cleanParentRenderer();if(parentUnlocked)arrangeParentWorkspace()};
const cleanParentGo=go;
go=function(view){document.body.classList.toggle('parent-clean',PARENT_ROUTES.has(view));return cleanParentGo(view)};

// First-open choice belongs to the current child profile, including the isolated parent sandbox.
function loadedGradeChoices(){return adventureGrades.filter(g=>g.ready).slice().sort((a,b)=>{const n=id=>id==='k'?0:Number(id.replace('g',''))||99;return n(a.id)-n(b.id)})}
function needsFirstGradeChoice(){return db.profile.gradeChoiceConfirmed!==1&&db.profile.allowedAdventureGrades===undefined}
function confirmFirstGrades(ids){
 const allowed=loadedGradeChoices().filter(g=>ids.includes(g.id)).map(g=>g.id);
 if(!allowed.length)throw Error('请至少选择一个年级。');
 const previous={...db.profile};db.profile={...db.profile,allowedAdventureGrades:allowed,gradeChoiceConfirmed:1};
 if(!save()){db.profile=previous;throw Error('年级选择未能保存，请保留页面并重试。')}
 earlyGrade=allowed[0];return allowed;
}
function showFirstGradeChoice(){
 if(!needsFirstGradeChoice())return;
 let overlay=document.querySelector('#firstGradeChoice');if(overlay)return;
 overlay=document.createElement('div');overlay.id='firstGradeChoice';overlay.className='first-grade-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-labelledby','firstGradeTitle');
 const options=loadedGradeChoices();
 overlay.innerHTML='<section class="first-grade-card"><span class="first-grade-sprout" aria-hidden="true">🌱</span><h1 id="firstGradeTitle">从哪里开始冒险？</h1><p>选好年级，植物伙伴就准备出发啦。可以多选，以后也能在家长区调整。</p><div class="first-grade-options">'+options.map(g=>'<label><input type="checkbox" data-first-grade="'+g.id+'"><span aria-hidden="true">'+(cuteGradeIcons[g.id]||'🌿')+'</span><strong>'+escapeHTML(g.name)+'</strong></label>').join('')+'</div><p id="firstGradeError" role="status" aria-live="polite">'+(options.length?'':'还没有可用题库，请先接入题库。')+'</p><button class="primary" id="firstGradeConfirm" '+(!options.length?'disabled':'')+'>选好了，出发！</button></section>';
 document.body.appendChild(overlay);$('#main').setAttribute('inert','');$('#nav').setAttribute('inert','');
 $('#firstGradeConfirm').onclick=()=>{try{const choices=Array.from(document.querySelectorAll('[data-first-grade]')).filter(e=>e.checked).map(e=>e.dataset.firstGrade);confirmFirstGrades(choices);overlay.remove();$('#main').removeAttribute('inert');$('#nav').removeAttribute('inert');go('home')}catch(e){$('#firstGradeError').textContent=e.message}};
 $('#firstGradeConfirm').focus();
}
const firstGradeGo=go;
go=function(view){if(needsFirstGradeChoice()){showFirstGradeChoice();return false}return firstGradeGo(view)};
const firstGradeStart=startSession;
startSession=function(...args){if(needsFirstGradeChoice()){showFirstGradeChoice();return false}return firstGradeStart(...args)};
const firstGradeEarlyStart=earlyStart;
earlyStart=function(...args){if(needsFirstGradeChoice()){showFirstGradeChoice();return false}return firstGradeEarlyStart(...args)};
showFirstGradeChoice();

sceneCollection=function(){
 const owned=safeCollection();
 sceneSheet('我的植物伙伴','<div class="scene-mini-plants rarity-collection">'+RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy).map(c=>{const found=owned.includes(c.id),rarity=['R','SR','SSR'].includes(c.rarity)?c.rarity:'R';return '<button class="plant-rarity-tile '+(found?'rarity-'+rarity:'rarity-unknown')+'" data-scene-card="'+c.id+'" aria-label="'+escapeHTML(c.name)+(found?'，'+rarity:'，尚未拥有')+'"><div class="'+(found?'':'not-owned')+'">'+SCENE_PLANTS[c.id]+'</div><span class="plant-rarity-name">'+escapeHTML(c.name)+'</span><span class="tag plant-rarity-badge">'+(found?'<i aria-hidden="true">'+({R:'✦',SR:'✧',SSR:'✵'}[rarity])+'</i><b>'+rarity+'</b>':'未发现')+'</span><small class="plant-quantity">累计获得 ×'+plantObtainedTotal(db,c.id)+'</small></button>'}).join('')+'</div><div class="actions"><button class="primary" id="sceneFullAlbum">打开卡牌收藏册</button></div>');
 document.querySelectorAll('[data-scene-card]').forEach(b=>b.onclick=()=>{if(!owned.includes(+b.dataset.sceneCard)){notify('冒险收集阳光，邀请这位伙伴加入吧。');return}closeSceneSheet();openCards('album')});$('#sceneFullAlbum').onclick=()=>{closeSceneSheet();openCards('album')};
};

function updateHeaderAccount(){
 const user=typeof cloudAccount!=='undefined'?cloudAccount?.current():null,button=$('#headerAccount');if(!button)return;
 const name=user?(user.name||user.email?.split('@')[0]||'家长'):null;
 button.textContent=user?'🌿 '+name:'🌱 登录 / 注册';button.title=user?'已登录，打开家长账号设置':'登录家长账号，备份成长记录';button.setAttribute('aria-label',user?'已登录：'+name+'，打开账号设置':'登录或注册家长账号');
}
$('#headerAccount').onclick=()=>openAccountDialog();
updateHeaderAccount();
let accountDialogMode='login',accountDialogBusy=false;
function closeAccountDialog(){if(accountDialogBusy)return;$('#accountDialog').remove();$('#headerAccount').focus()}
function openAccountDialog(mode='login'){
 if(accountDialogBusy)return;
 if(needsFirstGradeChoice()){showFirstGradeChoice();return}
 if(isTesting()){notify('请先退出家长测试模式，再登录真实账号。');return}
 accountDialogMode=mode;
 const old=document.querySelector('#accountDialog');if(old)old.remove();
 const user=cloudAccount?.current(),overlay=document.createElement('div');overlay.id='accountDialog';overlay.className='account-dialog-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-labelledby','accountDialogTitle');
 overlay.innerHTML='<section class="account-dialog-card"><button class="account-dialog-close" id="accountDialogClose" aria-label="关闭账号窗口">×</button><span class="account-dialog-icon" aria-hidden="true">🌱</span><h1 id="accountDialogTitle">'+(user?'我的账号':mode==='register'?'创建家长账号':'欢迎回到花园')+'</h1>'+(user?'<p>'+escapeHTML(user.name||user.email?.split('@')[0]||'家长')+'</p><p>已登录，儿童档案与云备份可在家长区管理。</p><button class="primary" id="accountDialogManage">管理档案与云备份</button><button class="secondary" id="accountDialogLogout">退出登录</button>':'<div class="account-dialog-tabs"><button id="accountTabLogin" aria-selected="'+(mode==='login')+'">登录</button><button id="accountTabRegister" aria-selected="'+(mode==='register')+'">注册</button></div><form id="accountDialogForm">'+(mode==='register'?'<label>昵称<input id="accountDialogNickname" type="text" autocomplete="nickname" required maxlength="20" placeholder="请输入昵称（1—20字）"></label>':'')+'<label>家长邮箱<input id="accountDialogEmail" type="email" autocomplete="email" required placeholder="请输入家长邮箱"></label><label>密码<input id="accountDialogPassword" type="password" autocomplete="'+(mode==='register'?'new-password':'current-password')+'" required minlength="6" placeholder="请输入密码"></label>'+(mode==='register'?'<label>确认密码<input id="accountDialogRepeat" type="password" autocomplete="new-password" required minlength="6" placeholder="请再次输入密码"></label>':'')+'<button class="primary" id="accountDialogSubmit" type="submit">'+(mode==='register'?'注册账号':'登录花园')+'</button></form><p class="account-dialog-note">使用家长邮箱。登录后不会自动上传未绑定的儿童档案。</p>')+'<p id="accountDialogStatus" role="status" aria-live="polite"></p></section>';
 document.body.appendChild(overlay);$('#accountDialogClose').onclick=closeAccountDialog;
 if(user){$('#accountDialogManage').onclick=()=>{closeAccountDialog();parentWorkspaceTab='settings';if(parentUnlocked)go('parent');else openParentGate('parent')};$('#accountDialogLogout').onclick=async()=>{accountDialogBusy=true;try{await cloudAccount.signOut();accountDialogBusy=false;updateHeaderAccount();openAccountDialog('login')}catch(e){$('#accountDialogStatus').textContent=e.message}finally{accountDialogBusy=false}};return}
 $('#accountTabLogin').onclick=()=>openAccountDialog('login');$('#accountTabRegister').onclick=()=>openAccountDialog('register');
 $('#accountDialogForm').onsubmit=async event=>{
  event.preventDefault();if(accountDialogBusy)return;
  if(isTesting()||!cloudAccount){$('#accountDialogStatus').textContent=isTesting()?'请退出测试模式后登录。':'账号服务尚未准备好，请稍后重试。';return}
  const email=$('#accountDialogEmail').value.trim(),password=$('#accountDialogPassword').value,repeat=mode==='register'?$('#accountDialogRepeat').value:password;
  const nickname=mode==='register'?$('#accountDialogNickname').value.trim():undefined;
  if(mode==='register'&&(!nickname||nickname.length>20)){$('#accountDialogStatus').textContent='请填写1—20字的昵称。';return}
  if(!email.includes('@')||password.length<6){$('#accountDialogStatus').textContent='请填写有效邮箱和至少6位密码。';return}
  if(password!==repeat){$('#accountDialogStatus').textContent='两次密码不一致，请重新确认。';return}
  $('#accountDialogPassword').value='';if(mode==='register')$('#accountDialogRepeat').value='';
  accountDialogBusy=true;$('#accountDialogSubmit').disabled=true;$('#accountDialogStatus').textContent=mode==='register'?'正在创建账号…':'正在登录…';
  try{
   const result=await cloudAccount[mode==='register'?'signUp':'signIn'](email,password,nickname);updateHeaderAccount();
   if(cloudAccount.current()){accountDialogBusy=false;closeAccountDialog();notify('登录成功，欢迎回到花园！');cloudResume().catch(e=>cloudMessage(e.message))}
   else $('#accountDialogStatus').textContent=result.message||'请检查家长邮箱，完成验证后登录。';
  }catch(e){$('#accountDialogStatus').textContent=e.message}finally{accountDialogBusy=false;$('#accountDialogSubmit').disabled=false}
 };
 $('#accountDialogEmail').focus();
}

// One earning grade per child; collectible ownership is shared across that child's grades.
const CHAPTER_COLLECTIBLES=[
 {code:'P01',id:'pot-sprout',name:'嫩芽陶盆',kind:'pot'},
 {code:'P02',id:'pot-moss',name:'苔叶木桶盆',kind:'pot'},
 {code:'P03',id:'pot-moon',name:'月光蘑菇盆',kind:'pot'},
 {code:'P04',id:'pot-dawn',name:'晨曦树屋盆',kind:'pot'},
 {code:'D01',id:'lantern',name:'萤火路灯',kind:'decor'},
 {code:'D02',id:'decor-chime',name:'叶铃风铃',kind:'decor'},
 {code:'D03',id:'decor-fountain',name:'莲叶小喷泉',kind:'decor'},
 {code:'D04',id:'decor-mushroom',name:'摇摇蘑菇灯',kind:'decor'}
];
function earningGrade(){return db.profile.earningGrade||((db.profile.allowedAdventureGrades||['g3']).includes('g3')?'g3':db.profile.allowedAdventureGrades?.[0]||'g3')}
function gradeEarns(grade){return grade===earningGrade()}
function collectibleOwned(item){return !!db.chapterCollectibles?.owned?.[item.code]||(item.kind==='pot'?db.gardenSkins?.owned?.includes(item.id):db.decorArtOwned?.includes(item.id))}
function grantChapterCollectible(grade,ordinal,chapter){
 if(!gradeEarns(grade)||!Number.isInteger(ordinal)||ordinal<1||ordinal>8)return null;
 const item=CHAPTER_COLLECTIBLES[ordinal-1];if(collectibleOwned(item))return null;
 const state=db.chapterCollectibles??={version:1,owned:{}};if(state.version!==1)throw Error('章节收藏记录版本较新，已保留原文。');
 if(item.kind==='pot'){GardenSkins.ensure(db);if(!db.gardenSkins.owned.includes(item.id))db.gardenSkins.owned.push(item.id)}
 else{db.decorArtOwned??=[];if(!db.decorArtOwned.includes(item.id))db.decorArtOwned.push(item.id)}
 state.owned[item.code]={grade,chapter,at:new Date().toISOString()};return item;
}
function chapterCollectibleLoot(grade,ordinal,includePack=true){
 if(!gradeEarns(grade))return '';
 const item=CHAPTER_COLLECTIBLES[ordinal-1],extra=item&&!collectibleOwned(item),art=extra?GARDEN_ART['latest.'+(item.id==='lantern'?'decor-firefly':item.id)]:'';
 return '<span class="chapter-collectible-loot">'+(includePack?rewardLoot(1,false):'')+(extra?'<span class="chapter-object-icon" title="'+escapeHTML(item.name)+'">'+(art||'<span>🌿</span>')+'<small>'+escapeHTML(item.name)+'</small></span>':'')+'</span>';
}
const earningSunEntry=sunEntry;
sunEntry=function(amount,reason,ref){if(amount>0&&!gradeEarns('g3'))return false;return earningSunEntry(amount,reason,ref)};
const earningStageSettle=StageRewards.settle;
StageRewards.settle=function(data,run,now){if(data!==db)return earningStageSettle(data,run,now);if(!gradeEarns('g3'))return [];const before={...(db.stageRewards?.chapters||{})},grants=earningStageSettle(data,run,now);for(const unit of Object.keys(db.stageRewards?.chapters||{}))if(!before[unit]){const ordinal=Number(unit.replace(/^u/,''));const item=grantChapterCollectible('g3',ordinal,unit);if(item){const grant=grants.find(g=>g.kind==='chapter');if(grant){grant.objectId=item.id;grant.title+=' + '+item.name}} }return grants};
const collectionStageTransaction=stageTransaction;
stageTransaction=function(action){const keys=['chapterCollectibles','gardenSkins','decorArtOwned'],prior=JSON.parse(JSON.stringify(Object.fromEntries(keys.filter(k=>db[k]!==undefined).map(k=>[k,db[k]]))));const result=collectionStageTransaction(action);if(!result.ok)for(const key of keys){if(key in prior)db[key]=prior[key];else delete db[key]}return result};
// Keep reward badges honest on all grade maps and low-age task lists.
const earningEarlyStageBadge=earlyStageRewardBadge,earningEarlyTaskBadge=earlyTaskRewardBadge;
earlyStageRewardBadge=function(moduleId){return gradeEarns(earlyGrade)?earningEarlyStageBadge(moduleId):''};
earlyTaskRewardBadge=function(){return gradeEarns(earlyGrade)?earningEarlyTaskBadge():''};
earlyChapterRewardBadge=function(){return ''}; // Rewards are now attached to each chapter node, not the whole batch.
const collectionForestRender=renderLearn;
renderLearn=function(){collectionForestRender();if(earlyRun||session&&!adventureMapOnly)return;document.querySelectorAll('[data-map-unit]').forEach(button=>{
 const unit=button.dataset.mapUnit,grade=unit.startsWith('early.k.')?'k':unit.startsWith('early.g1.')?'g1':'g3';
 const ordinal=grade==='g3'?Number(unit.replace(/^u/,'')):EARLY_CONTENT.modules.filter(m=>m.id.startsWith(grade==='k'?'early.k.':'early.g1.')).findIndex(m=>m.id===unit)+1;
 if(!gradeEarns(grade)){button.querySelectorAll('.stage-pack-badge').forEach(el=>el.remove());return}
 const claimed=grade==='g3'?db.stageRewards?.chapters?.[unit]:db.earlyStageRewards?.chapters?.[unit];
 if(!claimed&&ordinal>=1&&ordinal<=8){button.querySelectorAll('.stage-pack-badge').forEach(el=>el.remove());button.insertAdjacentHTML('beforeend','<span class="stage-pack-badge"><strong class="reward-badge-heading">整章通关</strong>'+chapterCollectibleLoot(grade,ordinal)+'</span>')}
 });};
const collectionParentRender=renderParent;
renderParent=function(){collectionParentRender();if(!parentUnlocked)return;const parent=$('[data-parent-content="settings"]')||$('#main');parent.insertAdjacentHTML('beforeend','<section class="panel"><h2>奖励年级</h2><p>仅这个年级发放答题与通关奖励；其他年级可以练习和记录进度。</p><select id="earningGradeSelect">'+loadedGradeChoices().map(g=>'<option value="'+g.id+'" '+(earningGrade()===g.id?'selected':'')+'>'+escapeHTML(g.name)+'</option>').join('')+'</select><button id="saveEarningGrade">保存奖励年级</button><p id="earningGradeStatus" role="status"></p></section>');$('#saveEarningGrade').onclick=()=>{try{if(session||earlyRun)throw Error('请先结束当前练习，再切换奖励年级。');const id=$('#earningGradeSelect').value;if(!loadedGradeChoices().some(g=>g.id===id))throw Error('该年级未载入。');const before=db.profile.earningGrade;db.profile.earningGrade=id;if(!save()){if(before===undefined)delete db.profile.earningGrade;else db.profile.earningGrade=before;throw Error('未保存，原设置保留。')}$('#earningGradeStatus').textContent='奖励年级已保存。'}catch(e){$('#earningGradeStatus').textContent=e.message}}};
const earningFirstGrades=confirmFirstGrades;
confirmFirstGrades=function(ids){const before=db.profile.earningGrade;if(before===undefined)db.profile.earningGrade=loadedGradeChoices().find(g=>ids.includes(g.id))?.id;try{return earningFirstGrades(ids)}catch(e){if(before===undefined)delete db.profile.earningGrade;else db.profile.earningGrade=before;throw e}};

const earningDailyClaim=DailyChallenge.claim;DailyChallenge.claim=function(data,...args){if(data===db&&!gradeEarns('g3'))return {sun:0,replayed:false,practiceOnly:true};return earningDailyClaim(data,...args)};

const collectibleMapRender=renderLearn;renderLearn=function(){collectibleMapRender();if(!gradeEarns(earlyGrade)&&!earlyRun){document.querySelectorAll('#main .reward-loot,#main .stage-pack-badge').forEach(el=>el.remove())}};

const earningStartSession=startSession;startSession=function(...args){const result=earningStartSession(...args);if(session)session.practiceOnly=!gradeEarns('g3');return result};
const earningStartChapter=startChapterSkill;startChapterSkill=function(...args){const result=earningStartChapter(...args);if(session)session.practiceOnly=!gradeEarns('g3');return result};

// Loaded chapters are open by default. Only explicit parent locks close them.
function chapterIsOpen(id){return !(db.profile.lockedChapters||[]).includes(id)}
function initializeChapterAccess(){
 if(db.profile.chapterAccessDefaults===1)return;
 const before={...db.profile};db.profile={...db.profile,topics:[...new Set(M.UNITS.flatMap(u=>u.topics))],chapterAccessDefaults:1};
 if(!save()){db.profile=before;notify('默认学习范围未保存，请先检查存档。')}
}
function saveChapterLocks(ids){
 if(!parentUnlocked)throw Error('请先进入家长区。');if(session||earlyRun)throw Error('请先结束当前练习，再调整关卡。');
 const known=[...M.UNITS.map(u=>u.id),...EARLY_CONTENT.modules.map(m=>m.id)],previous=db.profile.lockedChapters;
 db.profile.lockedChapters=[...new Set(ids.filter(id=>known.includes(id)))];
 if(!save()){if(previous===undefined)delete db.profile.lockedChapters;else db.profile.lockedChapters=previous;throw Error('锁定设置未保存，原设置保留。')}
}
const accessStageAvailable=StageRewards.available;
StageRewards.available=function(data,stage){if(data===db&&stage&&!chapterIsOpen(stage.unit))return false;return accessStageAvailable(data,stage)};
const accessChapterOpen=openChapter;
openChapter=function(unit){if(!chapterIsOpen(unit)){notify('本关已由家长锁定。');return false}return accessChapterOpen(unit)};
const accessChapterStart=startChapterSkill;
startChapterSkill=function(id){const unit=M.chapterSpec(id)?.unit;if(unit&&!chapterIsOpen(unit)){notify('本关已由家长锁定。');return false}return accessChapterStart(id)};
const accessSessionStart=startSession;
startSession=function(unit){if(!chapterIsOpen(unit)){notify('本关已由家长锁定。');return false}return accessSessionStart(unit)};
const accessEarlyStart=earlyStart;
earlyStart=function(moduleId,...args){if(!chapterIsOpen(moduleId)){notify('本关已由家长锁定。');return false}return accessEarlyStart(moduleId,...args)};
const accessEarlyModule=earlyModuleView;
earlyModuleView=function(id){if(!chapterIsOpen(id)){notify('本关已由家长锁定。');return false}return accessEarlyModule(id)};
const accessLearnRender=renderLearn;
renderLearn=function(){accessLearnRender();document.querySelectorAll('[data-map-unit]').forEach(button=>{if(!chapterIsOpen(button.dataset.mapUnit)){button.disabled=true;button.classList.add('locked');button.setAttribute('aria-label','家长已锁定本关')}})};
const accessParentRender=renderParent;
renderParent=function(){accessParentRender();if(!parentUnlocked)return;const area=$('[data-parent-content="settings"]')||$('#main');
 const groups=[['三年级',M.UNITS.map(u=>({id:u.id,title:u.title}))],['幼儿园',EARLY_CONTENT.modules.filter(m=>m.id.startsWith('early.k.'))],['一年级',EARLY_CONTENT.modules.filter(m=>m.id.startsWith('early.g1.'))]];
 area.insertAdjacentHTML('beforeend','<section class="panel"><h2>关卡开放与锁定</h2><p>已载入关卡默认全部开放。勾选需要锁定的关卡。</p>'+groups.map(([name,items])=>'<details><summary>'+name+'</summary>'+items.map(m=>'<label style="display:block;padding:8px"><input type="checkbox" data-chapter-lock="'+m.id+'" '+(!chapterIsOpen(m.id)?'checked':'')+'>'+escapeHTML(m.title)+'</label>').join('')+'</details>').join('')+'<button id="saveChapterLocks">保存关卡锁定</button><p id="chapterLocksStatus" role="status"></p></section>');
 $('#saveChapterLocks').onclick=()=>{try{saveChapterLocks(Array.from(document.querySelectorAll('[data-chapter-lock]')).filter(el=>el.checked).map(el=>el.dataset.chapterLock));$('#chapterLocksStatus').textContent='已保存，未勾选的关卡保持开放。'}catch(e){$('#chapterLocksStatus').textContent=e.message}};
};
initializeChapterAccess();

const WEAR_RASTER_CONFIG=[
  {
    "id": "wear-a01-01",
    "reviewKey": "A01-01",
    "name": "叶徽牛仔帽",
    "plantId": 0,
    "plantName": "豌豆射手",
    "theme": "西部小牛仔",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A01-01-叶徽牛仔帽-SR-卡面样例-v01.png",
    "wearImage": "wear/A01-01-叶徽牛仔帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 146,
      "y": 40,
      "width": 143,
      "height": 70
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 38,
      "y": 124,
      "width": 1479,
      "height": 794
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a01-02",
    "reviewKey": "A01-02",
    "name": "红色三角领巾",
    "plantId": 0,
    "plantName": "豌豆射手",
    "theme": "西部小牛仔",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A01-02-红色三角领巾-SR-卡面样例-v01.png",
    "wearImage": "wear/A01-02-红色三角领巾-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 145,
      "y": 189,
      "width": 82,
      "height": 62
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 79,
      "y": 223,
      "width": 1182,
      "height": 832
    },
    "imageSize": {
      "width": 1314,
      "height": 1197
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a01-03",
    "reviewKey": "A01-03",
    "name": "盘绕套索与挂扣",
    "plantId": 0,
    "plantName": "豌豆射手",
    "theme": "西部小牛仔",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A01-03-盘绕套索与挂扣-SR-卡面样例-v01.png",
    "wearImage": "wear/A01-03-盘绕套索与挂扣-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 228,
      "y": 217,
      "width": 82,
      "height": 85
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 64,
      "y": 23,
      "width": 1284,
      "height": 1089
    },
    "imageSize": {
      "width": 1374,
      "height": 1145
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a01-04",
    "reviewKey": "A01-04",
    "name": "仙人掌纹木桶盆",
    "plantId": 0,
    "plantName": "豌豆射手",
    "theme": "西部小牛仔",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A01-04-仙人掌纹木桶盆-SSR-卡面样例-v01.png",
    "wearImage": "wear/A01-04-仙人掌纹木桶盆-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 253,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 174,
      "y": 82,
      "width": 1184,
      "height": 819
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a02-01",
    "reviewKey": "A02-01",
    "name": "星星头箍",
    "plantId": 3,
    "plantName": "向日葵",
    "theme": "星光领航员",
    "slot": "head",
    "rarity": "SSR",
    "cardImage": "cards/A02-01-星星头箍-SSR-独立卡-v02.png",
    "wearImage": "wear/A02-01-星星头箍-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 60,
      "width": 178,
      "height": 70
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 120,
      "y": 87,
      "width": 1530,
      "height": 743
    },
    "imageSize": {
      "width": 1774,
      "height": 887
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a02-02",
    "reviewKey": "A02-02",
    "name": "蓝色星图披肩",
    "plantId": 3,
    "plantName": "向日葵",
    "theme": "星光领航员",
    "slot": "body",
    "rarity": "SSR",
    "cardImage": "cards/A02-02-蓝色星图披肩-SSR-独立卡-v02.png",
    "wearImage": "wear/A02-02-蓝色星图披肩-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 160,
      "y": 207,
      "width": 132,
      "height": 78
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 74,
      "y": 66,
      "width": 1365,
      "height": 899
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a02-03",
    "reviewKey": "A02-03",
    "name": "小望远镜与支架",
    "plantId": 3,
    "plantName": "向日葵",
    "theme": "星光领航员",
    "slot": "item",
    "rarity": "SSR",
    "cardImage": "cards/A02-03-小望远镜与支架-SSR-独立卡-v02.png",
    "wearImage": "wear/A02-03-小望远镜与支架-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 244,
      "y": 226,
      "width": 85,
      "height": 100
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 144,
      "y": 51,
      "width": 1063,
      "height": 1103
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a02-04",
    "reviewKey": "A02-04",
    "name": "弯月观星盆",
    "plantId": 3,
    "plantName": "向日葵",
    "theme": "星光领航员",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A02-04-弯月观星盆-SSR-独立卡-v01.png",
    "wearImage": "wear/A02-04-弯月观星盆-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 253,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 161,
      "y": 106,
      "width": 1122,
      "height": 899
    },
    "imageSize": {
      "width": 1448,
      "height": 1086
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a03-01",
    "reviewKey": "A03-01",
    "name": "圆顶骑士头盔",
    "plantId": 4,
    "plantName": "坚果",
    "theme": "城堡小骑士",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A03-01-圆顶骑士头盔-SR-独立卡-v01.png",
    "wearImage": "wear/A03-01-圆顶骑士头盔-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 62,
      "width": 175,
      "height": 95
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 130,
      "y": 43,
      "width": 1136,
      "height": 1066
    },
    "imageSize": {
      "width": 1378,
      "height": 1141
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a03-02",
    "reviewKey": "A03-02",
    "name": "蓝白肩披",
    "plantId": 4,
    "plantName": "坚果",
    "theme": "城堡小骑士",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A03-02-蓝白肩披-SR-独立卡-v01.png",
    "wearImage": "wear/A03-02-蓝白肩披-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 160,
      "y": 213,
      "width": 157,
      "height": 65
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 47,
      "y": 119,
      "width": 1442,
      "height": 807
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a03-03",
    "reviewKey": "A03-03",
    "name": "叶纹圆盾",
    "plantId": 4,
    "plantName": "坚果",
    "theme": "城堡小骑士",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A03-03-叶纹圆盾-SR-独立卡-v01.png",
    "wearImage": "wear/A03-03-叶纹圆盾-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 244,
      "y": 223,
      "width": 98,
      "height": 105
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 138,
      "y": 72,
      "width": 1025,
      "height": 1053
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a03-04",
    "reviewKey": "A03-04",
    "name": "草地石堡底座",
    "plantId": 4,
    "plantName": "坚果",
    "theme": "城堡小骑士",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A03-04-草地石堡底座-SSR-独立卡-v01.png",
    "wearImage": "wear/A03-04-草地石堡底座-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 238,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 42,
      "y": 168,
      "width": 1452,
      "height": 731
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a04-01",
    "reviewKey": "A04-01",
    "name": "开孔矿灯帽",
    "plantId": 8,
    "plantName": "土豆地雷",
    "theme": "地下探险家",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A04-01-开孔矿灯帽-SR-独立卡-v01.png",
    "wearImage": "wear/A04-01-开孔矿灯帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 116,
      "width": 150,
      "height": 69
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 121,
      "y": 95,
      "width": 1294,
      "height": 832
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a04-02",
    "reviewKey": "A04-02",
    "name": "工具腰带",
    "plantId": 8,
    "plantName": "土豆地雷",
    "theme": "地下探险家",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A04-02-工具腰带-SR-独立卡-v01.png",
    "wearImage": "wear/A04-02-工具腰带-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 160,
      "y": 228,
      "width": 169,
      "height": 55
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 108,
      "y": 108,
      "width": 1373,
      "height": 800
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a04-03",
    "reviewKey": "A04-03",
    "name": "地图与小铲",
    "plantId": 8,
    "plantName": "土豆地雷",
    "theme": "地下探险家",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A04-03-地图与小铲-SR-独立卡-v01.png",
    "wearImage": "wear/A04-03-地图与小铲-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 246,
      "y": 229,
      "width": 79,
      "height": 87
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 64,
      "y": 62,
      "width": 1192,
      "height": 1043
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a04-04",
    "reviewKey": "A04-04",
    "name": "洞口剖面土台",
    "plantId": 8,
    "plantName": "土豆地雷",
    "theme": "地下探险家",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A04-04-洞口剖面土台-SSR-独立卡-v01.png",
    "wearImage": "wear/A04-04-洞口剖面土台-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 233,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 151,
      "y": 104,
      "width": 1244,
      "height": 837
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a05-01",
    "reviewKey": "A05-01",
    "name": "叶形邮差帽",
    "plantId": 9,
    "plantName": "回旋镖射手",
    "theme": "森林邮递员",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A05-01-叶形邮差帽-SR-独立卡-v01.png",
    "wearImage": "wear/A05-01-叶形邮差帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 68,
      "width": 131,
      "height": 72
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 202,
      "y": 122,
      "width": 1144,
      "height": 810
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a05-02",
    "reviewKey": "A05-02",
    "name": "斜挎信件包",
    "plantId": 9,
    "plantName": "回旋镖射手",
    "theme": "森林邮递员",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A05-02-斜挎信件包-SR-独立卡-v01.png",
    "wearImage": "wear/A05-02-斜挎信件包-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 150,
      "y": 201,
      "width": 105,
      "height": 100
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 123,
      "y": 57,
      "width": 1100,
      "height": 1091
    },
    "imageSize": {
      "width": 1321,
      "height": 1191
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a05-03",
    "reviewKey": "A05-03",
    "name": "三封种子信",
    "plantId": 9,
    "plantName": "回旋镖射手",
    "theme": "森林邮递员",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A05-03-三封种子信-SR-独立卡-v01.png",
    "wearImage": "wear/A05-03-三封种子信-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 242,
      "y": 221,
      "width": 80,
      "height": 76
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 146,
      "y": 76,
      "width": 1246,
      "height": 864
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a05-04",
    "reviewKey": "A05-04",
    "name": "邮筒草坪底座",
    "plantId": 9,
    "plantName": "回旋镖射手",
    "theme": "森林邮递员",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A05-04-邮筒草坪底座-SSR-独立卡-v01.png",
    "wearImage": "wear/A05-04-邮筒草坪底座-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 255,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 31,
      "y": 66,
      "width": 1249,
      "height": 1083
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a06-01",
    "reviewKey": "A06-01",
    "name": "低矮厨师帽",
    "plantId": 10,
    "plantName": "冰冻生菜",
    "theme": "甜点小厨师",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A06-01-低矮厨师帽-SR-独立卡-v01.png",
    "wearImage": "wear/A06-01-低矮厨师帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 93,
      "width": 142,
      "height": 70
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 171,
      "y": 36,
      "width": 1163,
      "height": 957
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a06-02",
    "reviewKey": "A06-02",
    "name": "格纹围兜",
    "plantId": 10,
    "plantName": "冰冻生菜",
    "theme": "甜点小厨师",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A06-02-格纹围兜-SR-独立卡-v01.png",
    "wearImage": "wear/A06-02-格纹围兜-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 160,
      "y": 219,
      "width": 134,
      "height": 74
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 157,
      "y": 36,
      "width": 1223,
      "height": 935
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a06-03",
    "reviewKey": "A06-03",
    "name": "莓果冰点盘",
    "plantId": 10,
    "plantName": "冰冻生菜",
    "theme": "甜点小厨师",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A06-03-莓果冰点盘-SR-独立卡-v01.png",
    "wearImage": "wear/A06-03-莓果冰点盘-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 244,
      "y": 244,
      "width": 91,
      "height": 77
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 40,
      "y": 12,
      "width": 1462,
      "height": 1012
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a06-04",
    "reviewKey": "A06-04",
    "name": "饼干纹圆碟",
    "plantId": 10,
    "plantName": "冰冻生菜",
    "theme": "甜点小厨师",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A06-04-饼干纹圆碟-SSR-独立卡-v01.png",
    "wearImage": "wear/A06-04-饼干纹圆碟-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 257,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 50,
      "y": 105,
      "width": 1433,
      "height": 840
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a07-01",
    "reviewKey": "A07-01",
    "name": "软边探险帽",
    "plantId": 11,
    "plantName": "噬碑藤",
    "theme": "遗迹考古家",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A07-01-软边探险帽-SR-独立卡-v01.png",
    "wearImage": "wear/A07-01-软边探险帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 155,
      "y": 91,
      "width": 157,
      "height": 85
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 18,
      "y": 59,
      "width": 1494,
      "height": 926
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a07-02",
    "reviewKey": "A07-02",
    "name": "卷轴斜挎带",
    "plantId": 11,
    "plantName": "噬碑藤",
    "theme": "遗迹考古家",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A07-02-卷轴斜挎带-SR-独立卡-v02.png",
    "wearImage": "wear/A07-02-卷轴斜挎带-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 115,
      "y": 208,
      "width": 95,
      "height": 60
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 111,
      "y": 16,
      "width": 1365,
      "height": 988
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a07-03",
    "reviewKey": "A07-03",
    "name": "小刷与化石盒",
    "plantId": 11,
    "plantName": "噬碑藤",
    "theme": "遗迹考古家",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A07-03-小刷与化石盒-SR-独立卡-v01.png",
    "wearImage": "wear/A07-03-小刷与化石盒-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 243,
      "y": 231,
      "width": 85,
      "height": 88
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 43,
      "y": 47,
      "width": 1248,
      "height": 1120
    },
    "imageSize": {
      "width": 1315,
      "height": 1196
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a07-04",
    "reviewKey": "A07-04",
    "name": "沙地石板底座",
    "plantId": 11,
    "plantName": "噬碑藤",
    "theme": "遗迹考古家",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A07-04-沙地石板底座-SSR-独立卡-v01.png",
    "wearImage": "wear/A07-04-沙地石板底座-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 225,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 31,
      "y": 143,
      "width": 1478,
      "height": 787
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a08-01",
    "reviewKey": "A08-01",
    "name": "红色短额带",
    "plantId": 12,
    "plantName": "菜问",
    "theme": "功夫小师傅",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A08-01-红色短额带-SR-独立卡-v01.png",
    "wearImage": "wear/A08-01-红色短额带-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 105,
      "width": 151,
      "height": 61
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 97,
      "y": 54,
      "width": 1408,
      "height": 936
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a08-02",
    "reviewKey": "A08-02",
    "name": "练功短褂",
    "plantId": 12,
    "plantName": "菜问",
    "theme": "功夫小师傅",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A08-02-练功短褂-SR-独立卡-v01.png",
    "wearImage": "wear/A08-02-练功短褂-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 160,
      "y": 202,
      "width": 132,
      "height": 101
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 77,
      "y": 54,
      "width": 1155,
      "height": 1103
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a08-03",
    "reviewKey": "A08-03",
    "name": "木制练功桩",
    "plantId": 12,
    "plantName": "菜问",
    "theme": "功夫小师傅",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A08-03-木制练功桩-SR-独立卡-v01.png",
    "wearImage": "wear/A08-03-木制练功桩-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 252,
      "y": 222,
      "width": 80,
      "height": 113
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 111,
      "y": 38,
      "width": 839,
      "height": 1360
    },
    "imageSize": {
      "width": 1060,
      "height": 1484
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a08-04",
    "reviewKey": "A08-04",
    "name": "竹纹练功台",
    "plantId": 12,
    "plantName": "菜问",
    "theme": "功夫小师傅",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A08-04-竹纹练功台-SSR-独立卡-v01.png",
    "wearImage": "wear/A08-04-竹纹练功台-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 256,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 71,
      "y": 108,
      "width": 1398,
      "height": 829
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a09-01",
    "reviewKey": "A09-01",
    "name": "飞行帽与护目镜",
    "plantId": 13,
    "plantName": "双重射手",
    "theme": "云端飞行员",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A09-01-飞行帽与护目镜-SR-独立卡-v01.png",
    "wearImage": "wear/A09-01-飞行帽与护目镜-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 145,
      "y": 55,
      "width": 152,
      "height": 99
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 59,
      "y": 24,
      "width": 1207,
      "height": 1147
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a09-02",
    "reviewKey": "A09-02",
    "name": "棕色短围巾",
    "plantId": 13,
    "plantName": "双重射手",
    "theme": "云端飞行员",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A09-02-棕色短围巾-SR-独立卡-v01.png",
    "wearImage": "wear/A09-02-棕色短围巾-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 143,
      "y": 188,
      "width": 87,
      "height": 62
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 32,
      "y": 48,
      "width": 1201,
      "height": 1110
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a09-03",
    "reviewKey": "A09-03",
    "name": "双翼滑翔包",
    "plantId": 13,
    "plantName": "双重射手",
    "theme": "云端飞行员",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A09-03-双翼滑翔包-SR-独立卡-v01.png",
    "wearImage": "wear/A09-03-双翼滑翔包-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 215,
      "y": 211,
      "width": 151,
      "height": 93
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 33,
      "y": 121,
      "width": 1460,
      "height": 800
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a09-04",
    "reviewKey": "A09-04",
    "name": "云纹停机坪",
    "plantId": 13,
    "plantName": "双重射手",
    "theme": "云端飞行员",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A09-04-云纹停机坪-SSR-独立卡-v01.png",
    "wearImage": "wear/A09-04-云纹停机坪-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 253,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 44,
      "y": 57,
      "width": 1449,
      "height": 930
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a10-01",
    "reviewKey": "A10-01",
    "name": "麦穗草帽",
    "plantId": 15,
    "plantName": "卷心菜投手",
    "theme": "丰收小农夫",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A10-01-麦穗草帽-SR-独立卡-v01.png",
    "wearImage": "wear/A10-01-麦穗草帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 130,
      "y": 126,
      "width": 153,
      "height": 78
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 46,
      "y": 113,
      "width": 1471,
      "height": 841
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a10-02",
    "reviewKey": "A10-02",
    "name": "叶片围裙",
    "plantId": 15,
    "plantName": "卷心菜投手",
    "theme": "丰收小农夫",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A10-02-叶片围裙-SR-独立卡-v01.png",
    "wearImage": "wear/A10-02-叶片围裙-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 149,
      "y": 246,
      "width": 111,
      "height": 70
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 169,
      "y": 30,
      "width": 1227,
      "height": 936
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a10-03",
    "reviewKey": "A10-03",
    "name": "迷你收获篮",
    "plantId": 15,
    "plantName": "卷心菜投手",
    "theme": "丰收小农夫",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A10-03-迷你收获篮-SR-独立卡-v01.png",
    "wearImage": "wear/A10-03-迷你收获篮-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 242,
      "y": 244,
      "width": 87,
      "height": 86
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 78,
      "y": 89,
      "width": 1193,
      "height": 986
    },
    "imageSize": {
      "width": 1320,
      "height": 1191
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a10-04",
    "reviewKey": "A10-04",
    "name": "菜畦木箱底座",
    "plantId": 15,
    "plantName": "卷心菜投手",
    "theme": "丰收小农夫",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A10-04-菜畦木箱底座-SSR-独立卡-v01.png",
    "wearImage": "wear/A10-04-菜畦木箱底座-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 268,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 94,
      "y": 55,
      "width": 1357,
      "height": 957
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a11-01",
    "reviewKey": "A11-01",
    "name": "防寒耳罩帽",
    "plantId": 16,
    "plantName": "寒冰射手",
    "theme": "极地科考员",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A11-01-防寒耳罩帽-SR-独立卡-v01.png",
    "wearImage": "wear/A11-01-防寒耳罩帽-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 145,
      "y": 56,
      "width": 149,
      "height": 88
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 120,
      "y": 8,
      "width": 1129,
      "height": 1133
    },
    "imageSize": {
      "width": 1379,
      "height": 1141
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a11-02",
    "reviewKey": "A11-02",
    "name": "蓝白保暖领套",
    "plantId": 16,
    "plantName": "寒冰射手",
    "theme": "极地科考员",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A11-02-蓝白保暖领套-SR-独立卡-v01.png",
    "wearImage": "wear/A11-02-蓝白保暖领套-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 142,
      "y": 188,
      "width": 91,
      "height": 67
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 65,
      "y": 83,
      "width": 1406,
      "height": 884
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a11-03",
    "reviewKey": "A11-03",
    "name": "仪器包与温度计",
    "plantId": 16,
    "plantName": "寒冰射手",
    "theme": "极地科考员",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A11-03-仪器包与温度计-SR-独立卡-v01.png",
    "wearImage": "wear/A11-03-仪器包与温度计-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 231,
      "y": 217,
      "width": 91,
      "height": 103
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 61,
      "y": 28,
      "width": 1181,
      "height": 1156
    },
    "imageSize": {
      "width": 1312,
      "height": 1199
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a11-04",
    "reviewKey": "A11-04",
    "name": "雪地科考平台",
    "plantId": 16,
    "plantName": "寒冰射手",
    "theme": "极地科考员",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A11-04-雪地科考平台-SSR-独立卡-v01.png",
    "wearImage": "wear/A11-04-雪地科考平台-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 260,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 64,
      "y": 46,
      "width": 1442,
      "height": 959
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  },
  {
    "id": "wear-a12-01",
    "reviewKey": "A12-01",
    "name": "避火船长帽檐",
    "plantId": 17,
    "plantName": "火炬树桩",
    "theme": "灯塔守望员",
    "slot": "head",
    "rarity": "SR",
    "cardImage": "cards/A12-01-避火船长帽檐-SR-独立卡-v01.png",
    "wearImage": "wear/A12-01-避火船长帽檐-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "head",
      "x": 160,
      "y": 116,
      "width": 176,
      "height": 79
    },
    "layer": 40,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 41,
      "y": 111,
      "width": 1444,
      "height": 782
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a12-02",
    "reviewKey": "A12-02",
    "name": "海蓝领带",
    "plantId": 17,
    "plantName": "火炬树桩",
    "theme": "灯塔守望员",
    "slot": "body",
    "rarity": "SR",
    "cardImage": "cards/A12-02-海蓝领带-SR-独立卡-v01.png",
    "wearImage": "wear/A12-02-海蓝领带-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 159,
      "y": 224,
      "width": 91,
      "height": 63
    },
    "layer": 20,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 93,
      "y": 108,
      "width": 1085,
      "height": 1108
    },
    "imageSize": {
      "width": 1225,
      "height": 1284
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a12-03",
    "reviewKey": "A12-03",
    "name": "救生圈与绳结",
    "plantId": 17,
    "plantName": "火炬树桩",
    "theme": "灯塔守望员",
    "slot": "item",
    "rarity": "SR",
    "cardImage": "cards/A12-03-救生圈与绳结-SR-独立卡-v01.png",
    "wearImage": "wear/A12-03-救生圈与绳结-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "plant",
      "x": 244,
      "y": 231,
      "width": 85,
      "height": 92
    },
    "layer": 30,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 59,
      "y": 5,
      "width": 1136,
      "height": 1247
    },
    "imageSize": {
      "width": 1230,
      "height": 1278
    },
    "frontClip": null,
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准"
    ]
  },
  {
    "id": "wear-a12-04",
    "reviewKey": "A12-04",
    "name": "海浪码头底座",
    "plantId": 17,
    "plantName": "火炬树桩",
    "theme": "灯塔守望员",
    "slot": "base",
    "rarity": "SSR",
    "cardImage": "cards/A12-04-海浪码头底座-SSR-独立卡-v01.png",
    "wearImage": "wear/A12-04-海浪码头底座-wear-v01.png",
    "anchor": {
      "space": "plant-stage-320x340",
      "owner": "ground",
      "x": 160,
      "y": 240,
      "width": 221,
      "height": 99
    },
    "layer": 0,
    "offsetX": 0,
    "offsetY": 0,
    "scale": 1,
    "status": "transparent-raster-static-preview",
    "sourceBounds": {
      "x": 72,
      "y": 199,
      "width": 1391,
      "height": 731
    },
    "imageSize": {
      "width": 1536,
      "height": 1024
    },
    "frontClip": {
      "startY": 0.54
    },
    "gaps": [
      "静态挂点初值；动作、不同生长阶段与iPad待校准",
      "前缘为原图54%以下的裁片叠层，非独立重绘前缘"
    ]
  }
];

(function(g){
'use strict';
const NS='http://www.w3.org/2000/svg',order=['base','plant','body','item','head','foreground'];
let serial=0;
const set=(n,a)=>{for(const [k,v] of Object.entries(a))n.setAttribute(k,String(v));return n};
const make=(tag,a={})=>set(document.createElementNS(NS,tag),a);
// Caller owns plant markup and the profile save transaction; no account/reward API here.
function mount(stage,plantMarkup){
 stage.replaceChildren();set(stage,{viewBox:'0 0 320 340','data-wear-raster':'v1'});stage._wearPrefix='wear-raster-'+(++serial);
 for(const slot of order){const n=make('svg',{'data-wear-layer':slot});
  if(slot==='plant'){set(n,{x:40,y:20,width:240,height:250,viewBox:'0 0 200 200'});n.innerHTML=plantMarkup}
  else n.setAttribute('visibility','hidden');stage.append(n)}
}
function update(stage,items,assetRoot=''){
 if(!stage._wearPrefix)throw Error('Mount raster stage before update');
 for(const slot of order.filter(x=>x!=='plant')){
  const n=stage.querySelector('[data-wear-layer="'+slot+'"]'),c=items.find(c=>c.slot===(slot==='foreground'?'base':slot));
  if(!c||(slot==='foreground'&&!c.frontClip)){n.setAttribute('visibility','hidden');n.removeAttribute('data-wear-id');continue}
  const signature=JSON.stringify([c.id,c.anchor,c.offsetX,c.offsetY,c.scale,c.sourceBounds,c.frontClip,assetRoot]);
  if(n._wearSignature===signature){set(n,{visibility:'visible','data-wear-id':c.id});continue}
  const a=c.anchor,b=c.sourceBounds,w=a.width*c.scale,h=a.height*c.scale;
  if(!b||!c.imageSize)throw Error('Missing raster bounds '+c.id);
  set(n,{x:a.x+c.offsetX-w/2,y:a.y+c.offsetY-h/2,width:w,height:h,viewBox:[b.x,b.y,b.width,b.height].join(' '),preserveAspectRatio:'xMidYMid meet',visibility:'visible','data-wear-id':c.id});
  n.replaceChildren();const im=make('image',{width:c.imageSize.width,height:c.imageSize.height,href:assetRoot+c.wearImage});
  if(slot==='foreground'){
   const clipId=stage._wearPrefix+'-front',defs=make('defs'),clip=make('clipPath',{id:clipId});clip.append(make('rect',{x:b.x,y:b.y+b.height*c.frontClip.startY,width:b.width,height:b.height}));defs.append(clip);n.append(defs);im.setAttribute('clip-path','url(#'+clipId+')');
  }
  n.append(im);n._wearSignature=signature;
 }
}
g.GardenWearRaster={version:1,mount,update,order};
})(typeof window!=='undefined'?window:globalThis);

// Current delivered RGBA assets; reuse the original item identities and stored equips.
const WEAR_ASSET_ROOT='assets/wearables-raster-v1/';
for(const config of WEAR_RASTER_CONFIG){const existing=GardenWear.get(config.id);if(!existing)throw Error('穿戴ID不匹配：'+config.id);Object.assign(existing,config);approvedWearAssets.set(config.id,existing)}
function wearCollected(id){return db.rewardState?.accessoryOwned?.includes(id)===true||db.wearableInventory?.owned?.includes(id)===true}
function wearOwned(id){return isTesting()||wearCollected(id)}
wearCurrent=function(id){return Object.fromEntries(Object.entries(GardenWear.equipped(db,id)).filter(([,value])=>approvedWearAssets.has(value)&&wearOwned(value)))};
wearImageNode=function(slot,c,front=false){
 if(!c)return '<svg data-wear-layer="'+slot+'" visibility="hidden"></svg>';
 const a=c.anchor,b=c.sourceBounds,w=a.width*c.scale,h=a.height*c.scale,clip='wear-front-'+c.id;
 return '<svg data-wear-layer="'+slot+'" data-wear-id="'+c.id+'" x="'+(a.x+c.offsetX-w/2)+'" y="'+(a.y+c.offsetY-h/2)+'" width="'+w+'" height="'+h+'" viewBox="'+[b.x,b.y,b.width,b.height].join(' ')+'" preserveAspectRatio="xMidYMid meet">'+(front?'<defs><clipPath id="'+clip+'"><rect x="'+b.x+'" y="'+(b.y+b.height*(c.frontClip?.startY||.65))+'" width="'+b.width+'" height="'+b.height+'"/></clipPath></defs>':'')+'<image width="'+c.imageSize.width+'" height="'+c.imageSize.height+'" href="'+WEAR_ASSET_ROOT+c.wearImage+'" '+(front?'clip-path="url(#'+clip+')"':'')+'/></svg>';
};
updateWearStage=function(stage,id,state,force=false){
 const e=wearCurrent(id),signature=JSON.stringify([e,force]);if(stage.dataset.rasterSignature===signature)return;
 // Mount only the affected plant stage; SVG renderer caches unchanged image nodes.
 if(!stage._wearPrefix)GardenWearRaster.mount(stage,wearPlantInner(id,state,force));
 const plant=stage.querySelector('[data-wear-layer="plant"]');if(plant){const original=force||Object.keys(e).length>0;if(plant.dataset.wearOriginal!==String(original)){plant.innerHTML=wearPlantInner(id,state,force);plant.dataset.wearOriginal=String(original)}}
 GardenWearRaster.update(stage,Object.values(e).map(value=>GardenWear.get(value)),WEAR_ASSET_ROOT);
 stage.dataset.wearBase=String(Boolean(e.base));stage.dataset.rasterSignature=signature;
};
wearApply=function(id,slot,itemId){try{if(itemId&&!wearOwned(itemId))throw Error('请先获得这件配饰。');GardenWear.transaction(db,id,slot,itemId,save);refreshGardenWear(id);openGardenWear(id);return true}catch(e){notify(e.message);return false}};
const rasterSceneSheet=sceneSheet;
sceneSheet=function(...args){$('#sceneSheet').classList.remove('wear-room-modal');return rasterSceneSheet(...args)};
openGardenWear=function(selected){
 const plants=[...new Map(GardenWear.catalog.map(c=>[c.plantId,c.plantName]))];if(!plants.some(([id])=>id===selected))selected=plants[0][0];
 const equipped=wearCurrent(selected),names={head:'头饰',body:'服饰',item:'道具',base:'花盆 / 专属底座'};
 const selectedName=plants.find(([id])=>id===selected)[1];
 const parts=['base','head','body','item'].map(slot=>GardenWear.catalog.find(c=>c.plantId===selected&&c.slot===slot));
 sceneSheet('植物配饰','<div class="wear-room compact-wear-room"><div class="wear-plant-icons" role="group" aria-label="选择植物">'+plants.map(([id,name])=>'<button type="button" class="wear-plant-icon '+(id===selected?'selected':'')+'" data-raster-plant="'+id+'" title="'+escapeHTML(name)+'" aria-label="'+escapeHTML(name)+'" aria-pressed="'+(id===selected)+'">'+SCENE_PLANTS[id]+'</button>').join('')+'</div><div class="wear-row-scroll"><div class="wear-single-row"><section class="wear-slot wear-plant-preview"><h3>'+escapeHTML(selectedName)+'</h3><div id="wearRoomPreview">'+wearStageHTML(selected,RewardEngine.ensure(db),true)+'</div><small>当前搭配</small></section>'+parts.map(c=>'<section class="wear-slot '+(wearCollected(c.id)?'':'wear-part-unowned')+'"><h3>'+names[c.slot]+'</h3><img class="raster-wear-thumb" loading="lazy" src="'+WEAR_ASSET_ROOT+c.cardImage+'" alt="'+escapeHTML(c.name)+'"><p>'+escapeHTML(c.name)+'</p><span class="wear-part-rarity">'+c.rarity+'</span><div class="wear-part-actions"><button data-raster-equip="'+c.id+'" '+(!wearOwned(c.id)?'disabled':'')+'>'+(equipped[c.slot]===c.id?'已装备':wearOwned(c.id)?'装备':'尚未获得')+'</button><button class="secondary" data-raster-remove="'+c.slot+'" '+(!equipped[c.slot]?'disabled':'')+'>卸下</button></div>'+(c.slot==='base'?'<button class="secondary wear-pot-options" id="rasterWearBase">更换花盆</button>':'')+'</section>').join('')+'</div></div><p class="wear-note">开卡包收集部件，为植物搭配喜欢的装扮。</p></div>');
 $('#sceneSheet').classList.add('wear-room-modal');
 document.querySelectorAll('[data-raster-plant]').forEach(b=>b.onclick=()=>openGardenWear(Number(b.dataset.rasterPlant)));
 document.querySelectorAll('[data-raster-equip]').forEach(b=>b.onclick=()=>{const c=GardenWear.get(b.dataset.rasterEquip);wearApply(selected,c.slot,c.id)});
 document.querySelectorAll('[data-raster-remove]').forEach(b=>b.onclick=()=>wearApply(selected,b.dataset.rasterRemove,null));
 $('#rasterWearBase').onclick=()=>{const index=GardenLayout.ensure(db,safeCollection()).slots.indexOf(selected);if(index>=0)choosePotSkin(index);else openPlantContainer(selected)};
};
choosePlantContainer=function(id,baseId){const c=baseId===null?null:GardenWear.get(baseId);if(baseId!==null&&(!c||c.plantId!==id||c.slot!=='base'))throw Error('只能使用当前植物自己的底座。');if(c&&!wearOwned(c.id))throw Error('请先获得这个底座。');GardenWear.transaction(db,id,'base',baseId,save);refreshGardenWear(id);home()};
openPlantContainer=function(id){const e=wearCurrent(id),name=GardenWear.catalog.find(c=>c.plantId===id)?.plantName||'植物';sceneSheet(name+' · 花盆与底座','<p>普通花盆与该植物的专属底座互斥。</p><button id="useNormalPlantPot">使用普通花盆</button>'+plantBaseOptions(id).map(c=>'<section class="panel '+(wearCollected(c.id)?'':'wear-part-unowned')+'"><img class="raster-wear-thumb" loading="lazy" src="'+WEAR_ASSET_ROOT+c.cardImage+'" alt="'+escapeHTML(c.name)+'"><h3>'+escapeHTML(c.name)+'</h3><button data-raster-base="'+c.id+'" '+(!wearOwned(c.id)?'disabled':'')+'>'+(e.base===c.id?'正在使用':wearOwned(c.id)?'选择专属底座':'尚未获得')+'</button></section>').join(''));$('#useNormalPlantPot').onclick=()=>{try{choosePlantContainer(id,null);closeSceneSheet()}catch(e){notify(e.message)}};document.querySelectorAll('[data-raster-base]').forEach(b=>b.onclick=()=>{try{choosePlantContainer(id,b.dataset.rasterBase);closeSceneSheet()}catch(e){notify(e.message)}})};
const rasterPotPicker=choosePotSkin;
choosePotSkin=function(index){const id=GardenLayout.ensure(db,safeCollection()).slots[index];rasterPotPicker(index);if(Number.isInteger(id)&&plantBaseOptions(id).length){$('#sceneSheetContent').insertAdjacentHTML('beforeend','<button id="potOwnedBase">'+escapeHTML(GardenWear.catalog.find(c=>c.plantId===id).plantName)+'专属底座</button>');$('#potOwnedBase').onclick=()=>openPlantContainer(id)}document.querySelectorAll('[data-pot-equip]').forEach(b=>b.onclick=()=>{const tx=itemTransaction(()=>{if(Number.isInteger(id))GardenWear.change(db,id,'base',null);GardenSkins.equip(db,index,b.dataset.potEquip,isTesting())});if(tx.ok){const pot=document.querySelector('[data-garden-pot="'+index+'"]');if(pot){pot.querySelectorAll('.pot-vessel').forEach(n=>n.remove());const art=GARDEN_ART['latest.'+b.dataset.potEquip];if(art)pot.insertAdjacentHTML('afterbegin',art.replace('<svg ','<svg class="pot-vessel pot-art-back" ')+art.replace('<svg ','<svg class="pot-vessel pot-art-front" '));else pot.insertAdjacentHTML('afterbegin',gardenPotFallbackHTML(index,null,RewardEngine.ensure(db)).match(/<svg class="pot-vessel"[\s\S]*?<\/svg>/)?.[0]||'');pot.dataset.potSkin=b.dataset.potEquip;pot.classList.remove('wear-has-base')}if(Number.isInteger(id))refreshGardenWear(id);closeSceneSheet()}})};

// A duplicate plant is another placeable copy. Reward counts and legacy pack history overlap.
function plantObtainedTotal(data,id){
 const count=data.rewardState?.counts?.[id],earned=Number.isSafeInteger(count)&&count>0?count:0;
 const historical=(data.packs||[]).filter(p=>p.status==='opened').reduce((n,p)=>n+(p.cards||[]).filter(value=>value===id).length,0);
 return Math.max(earned,historical);
}
const legacyPlantCollection=safeCollection;
safeCollection=function(){const legacy=legacyPlantCollection();return RewardEngine.catalog.filter(c=>c.collectible!==false&&!c.legacy&&(plantObtainedTotal(db,c.id)>0||legacy.includes(c.id))).map(c=>c.id)};

const APPROVED_DECOR_ASSETS=[{"key": "decor-firefly", "code": "D01", "name": "萤火路灯", "kind": "decor", "rarity": "SR", "color": "#4a96d2", "effect": "lamp", "desc": "种子灯柔和呼吸，点击切换明暗。", "subject": "ONE small garden lantern post, curved honey-brown branch stem with just THREE broad green leaves, hanging amber seed-pod lantern on upper right, broad simple stone foot base. Flat clear 3/4 game garden view. Lamp centered near x68%,y35% of visible object bounds, gently luminous printed yellow glass but NO external glow, no fireflies, no scenery.", "width": 1145, "height": 1374, "bbox": [200, 92, 1039, 1296], "alphaRange": [0, 255], "object": "物件/D01-萤火路灯.png", "card": "卡面/D01-萤火路灯-奖励卡.svg", "formalId": null, "themeKey": "forest-guard", "groundAnchor": {"x": 0.5, "y": 1.0}, "effectAnchor": {"x": 0.74, "y": 0.45}, "interaction": "pointer-or-keyboard-click"}, {"key": "decor-chime", "code": "D02", "name": "叶铃风铃", "kind": "decor", "rarity": "R", "color": "#65a64a", "effect": "chime", "desc": "叶铃轻摆，点击摇响；声音默认关闭。", "subject": "ONE hanging leaf-themed garden wind chime: large simple green leaf cap, top hanging loop at horizontal center, THREE cream seed-shaped bells suspended on short strings, ONE green leaf pendulum lower center. Full chime complete, compact elegant silhouette. No stand, no trees or scene, no air lines, no text. Warm cream/green/brown, broad simple shapes.", "width": 1024, "height": 1536, "bbox": [101, 29, 922, 1485], "alphaRange": [0, 254], "object": "物件/D02-叶铃风铃.png", "card": "卡面/D02-叶铃风铃-奖励卡.svg", "formalId": null, "themeKey": "forest-guard", "groundAnchor": {"x": 0.5, "y": 1.0}, "effectAnchor": {"x": 0.5, "y": 0.04}, "interaction": "pointer-or-keyboard-click"}, {"key": "decor-fountain", "code": "D03", "name": "莲叶小喷泉", "kind": "decor", "rarity": "SSR", "color": "#9972cb", "effect": "fountain", "desc": "水面持续涟漪，点击泛起一圈水波。", "subject": "ONE low small garden fountain: round cream stone basin, gently elevated large green lotus-leaf bowl above central short stone pedestal, visible calm blue oval pool at about x50%,y42% of overall object bounds, ONE simple short blue water arc from a small leaf spout into bowl. Clear broad water shape with no tiny drops, no spray particles, no surrounding pond, no plants outside the object. Friendly clean 3/4 slightly elevated game garden view.", "width": 1312, "height": 1199, "bbox": [101, 135, 1157, 1106], "alphaRange": [0, 255], "object": "物件/D03-莲叶小喷泉.png", "card": "卡面/D03-莲叶小喷泉-奖励卡.svg", "formalId": null, "themeKey": "forest-guard", "groundAnchor": {"x": 0.5, "y": 1.0}, "effectAnchor": {"x": 0.5, "y": 0.45}, "interaction": "pointer-or-keyboard-click"}, {"key": "decor-mushroom", "code": "D04", "name": "摇摇蘑菇灯", "kind": "decor", "rarity": "CR", "color": "#d3a447", "effect": "mushroom", "desc": "蘑菇帽轻点，点击唤起暖光。", "subject": "ONE friendly garden mushroom-shaped lamp: stout cream stalk with a very simple oval amber window/lantern glow panel at x50%,y67% of overall visible bounds, broad muted-coral mushroom cap with THREE cream spots only, soft green moss foot base. Compact clean silhouette, no eyes or mouth (this is decor, not another plant character). No external glow, no sparkles, no scenery. Looks warm and playful, not luxurious ornate.", "width": 1286, "height": 1223, "bbox": [110, 48, 1176, 1176], "alphaRange": [0, 255], "object": "物件/D04-摇摇蘑菇灯.png", "card": "卡面/D04-摇摇蘑菇灯-奖励卡.svg", "formalId": null, "themeKey": "forest-guard", "groundAnchor": {"x": 0.5, "y": 1.0}, "effectAnchor": {"x": 0.5, "y": 0.67}, "interaction": "pointer-or-keyboard-click"}];
const APPROVED_DECOR_IDS=['lantern','decor-chime','decor-fountain','decor-mushroom'];
for(let i=0;i<APPROVED_DECOR_IDS.length;i++){const c=GardenDecor.catalog.find(c=>c.id===APPROVED_DECOR_IDS[i]);if(c)c.name=APPROVED_DECOR_ASSETS[i].name}
function decorUnlockText(id){const at=CHAPTER_COLLECTIBLES.findIndex(c=>c.kind==='decor'&&c.id===id);return at>=0?'奖励年级第'+(at+1)+'章整章通关获得':'尚未获得'}
function approvedDecorThumbnail(id){const at=APPROVED_DECOR_IDS.indexOf(id);if(at<0)return null;const c=APPROVED_DECOR_ASSETS[at],b=c.bbox;return '<svg viewBox="'+[b[0],b[1],b[2]-b[0],b[3]-b[1]].join(' ')+'" role="img" aria-label="'+escapeHTML(c.name)+'"><image href="assets/approved-decor-v1/'+c.object.split('/').pop()+'" width="'+c.width+'" height="'+c.height+'"/></svg>'}
function gardenDecorThumbnail(id){return approvedDecorThumbnail(id)||gardenDecorArt(id)}
for(const id of APPROVED_DECOR_IDS)GARDEN_ART['latest.'+(id==='lantern'?'decor-firefly':id)]=approvedDecorThumbnail(id);
// D01 current reference: two cached pixel buffers; only the bulb path changes colour.
let lanternPixelsPromise=null,lanternSourcePromise=null;
function lanternSource(){if(globalThis.SONGZI_LANTERN_V06)return Promise.resolve(globalThis.SONGZI_LANTERN_V06);if(!lanternSourcePromise)lanternSourcePromise=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='assets/interactive-v06/lantern-v06-source.js';script.onload=()=>globalThis.SONGZI_LANTERN_V06?resolve(globalThis.SONGZI_LANTERN_V06):reject(Error('路灯资源无效'));script.onerror=()=>{lanternSourcePromise=null;reject(Error('路灯资源未能加载'))};document.head.appendChild(script)});return lanternSourcePromise}

function lanternPixelBuffers(){
 if(lanternPixelsPromise)return lanternPixelsPromise;
 lanternPixelsPromise=new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>{try{
  const canvas=document.createElement('canvas');canvas.width=1145;canvas.height=1374;const ctx=canvas.getContext('2d',{willReadFrequently:true,alpha:true});if(!ctx)throw Error('无法创建路灯画布');ctx.drawImage(image,0,0);const on=ctx.getImageData(0,0,1145,1374),off=new ImageData(new Uint8ClampedArray(on.data),1145,1374);
  const bulb=new Path2D('M684 552 Q747 552 802 511 Q824 550 880 574 Q906 551 916 530 Q959 550 1007 546 Q1037 587 1036 640 Q1033 703 991 752 Q958 783 922 817 Q890 853 862 850 Q831 848 802 827 Q783 813 770 802 Q711 785 677 747 Q641 709 635 662 Q630 606 662 568Z');
  for(let y=510;y<855;y++)for(let x=630;x<1040;x++){if(!ctx.isPointInPath(bulb,x+.5,y+.5))continue;const i=(y*1145+x)*4;if(!off.data[i+3])continue;const l=.2126*on.data[i]+.7152*on.data[i+1]+.0722*on.data[i+2];off.data[i]=.4*l+59;off.data[i+1]=.4*l+54;off.data[i+2]=.4*l+43}resolve({on,off});
 }catch(e){reject(e)}};image.onerror=()=>reject(Error('路灯图片未能加载'));lanternSource().then(src=>{image.src=src},reject)});
 lanternPixelsPromise.catch(()=>{lanternPixelsPromise=null});return lanternPixelsPromise;
}
const currentDecorArt=gardenDecorArt;
gardenDecorArt=function(id){if(id!=='lantern'){const approved=approvedDecorThumbnail(id);if(!approved)return currentDecorArt(id);const effect=id==='decor-chime'?'chime':id==='decor-fountain'?'fountain':'mushroom';return '<span class="live-decor effect-'+effect+'">'+approved+'<i class="decor-live-effect" aria-hidden="true"></i></span>'}return '<span class="live-decor lantern-v06"><canvas width="1145" height="1374" data-lantern-v06 aria-label="萤火路灯"></canvas><span class="lantern-load-state" role="status">加载中…</span></span>'};
function paintLantern(button){const canvas=button.querySelector('[data-lantern-v06]');if(!canvas)return;const profile=profileStore.activeId(),epoch=profileActivityEpoch;
 lanternPixelBuffers().then(buffers=>{if(canvas.isConnected===false||profile!==profileStore.activeId()||epoch!==profileActivityEpoch)return;const ctx=canvas.getContext('2d',{willReadFrequently:true,alpha:true});if(!ctx)throw Error('路灯画布不可用');ctx.putImageData(db.decorInteractions?.lantern?.off?buffers.off:buffers.on,0,0);const text=button.querySelector('.lantern-load-state');if(text)text.hidden=true;button.setAttribute('aria-pressed',String(!db.decorInteractions?.lantern?.off))}).catch(()=>{const text=button.querySelector('.lantern-load-state');if(text)text.textContent='路灯暂未加载，点此重试';button.dataset.lanternLoadError='true'});
}
const currentBindDecor=bindLiveDecor;
bindLiveDecor=function(){currentBindDecor();document.querySelectorAll('[data-garden-decor]').forEach(button=>{const index=Number(button.dataset.gardenDecor);if(GardenDecor.ensure(db).slots[index]!=='lantern')return;button.classList.remove('decor-lamp-off');paintLantern(button);button.onclick=()=>{if(button.dataset.held==='true'){button.dataset.held='false';return}if(button.dataset.lanternLoadError==='true'){button.dataset.lanternLoadError='false';paintLantern(button);return}const tx=itemTransaction(()=>{db.decorInteractions??={};db.decorInteractions.lantern={off:!db.decorInteractions.lantern?.off}});if(tx.ok)paintLantern(button)}})};

// Presentation only. Actual ownership was committed before any call into this queue.
const decorRevealQueue=[],decorRevealSeen=new Set();let decorRevealActive=null,decorRevealFocus=null;
function decorRevealContext(){return [profileStore.activeId(),profileActivityEpoch,isTesting()?'test':'formal',cloudAccount?.current()?.id||'guest'].join(':')}
function acquiredDecorSnapshot(){return new Map(CHAPTER_COLLECTIBLES.filter(item=>collectibleOwned(item)).map(item=>[item.id,item]))}
function revealNewDecor(before,source){
 const context=decorRevealContext();for(const [id,item] of acquiredDecorSnapshot())if(!before.has(id)){
  const claim=db.chapterCollectibles?.owned?.[item.code];if(!claim)continue; // Excludes art-preview grants.
  enqueueDecorReveal({eventId:context+':'+item.code+':'+claim.at,context,id,name:item.name,kind:item.kind,quantity:1,source});
 }
}
function enqueueDecorReveal(event){if(!event||event.source==='pack'||!['pot','decor'].includes(event.kind)||!CHAPTER_COLLECTIBLES.some(x=>x.id===event.id)||event.quantity<1||decorRevealSeen.has(event.eventId))return false;decorRevealSeen.add(event.eventId);decorRevealQueue.push(event);showNextDecorReveal();return true}
function clearDecorReveal(){decorRevealQueue.length=0;decorRevealActive=null;const panel=document.querySelector('#decorAcquisition');panel?.remove();for(const id of ['#main','#nav','#parentNav']){const e=$(id);if(e&&e.dataset.revealInert==='true'){e.removeAttribute('inert');delete e.dataset.revealInert}}if(decorRevealFocus?.isConnected)decorRevealFocus.focus();decorRevealFocus=null}
function showNextDecorReveal(){
 if(decorRevealActive)return;const event=decorRevealQueue.shift();if(!event)return;if(event.context!==decorRevealContext())return showNextDecorReveal();
 decorRevealActive=event;decorRevealFocus=document.activeElement;
 const panel=document.createElement('div');panel.id='decorAcquisition';panel.className='decor-acquisition-overlay';panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-labelledby','decorAcquisitionTitle');
 const art=GARDEN_ART['latest.'+(event.id==='lantern'?'decor-firefly':event.id)]||'<span class="decor-acq-fallback">🌿</span>';
 panel.innerHTML='<section class="decor-acq-sheet"><button class="decor-acq-close" id="decorAcqClose" aria-label="关闭获得展示">×</button><p class="decor-acq-kicker">新的花园收藏</p><div class="decor-acq-art"><span class="decor-acq-rays" aria-hidden="true"></span><span class="decor-acq-glow" aria-hidden="true"></span><span class="decor-acq-object">'+art+'</span><i class="decor-acq-star s1" aria-hidden="true">✦</i><i class="decor-acq-star s2" aria-hidden="true">✧</i><i class="decor-acq-star s3" aria-hidden="true">✦</i></div><h2 id="decorAcquisitionTitle">'+escapeHTML(event.name)+'</h2><p>已获得 ×'+event.quantity+'</p><button class="primary" id="decorAcqContinue">继续</button></section>';
 document.body.appendChild(panel);panel.querySelectorAll('image').forEach(im=>im.addEventListener('error',()=>{const object=panel.querySelector('.decor-acq-object');if(object)object.innerHTML='<span class="decor-acq-fallback">🌿</span>'}));for(const id of ['#main','#nav','#parentNav']){const el=$(id);if(el&&!el.hasAttribute?.('inert')){el.setAttribute('inert','');el.dataset.revealInert='true'}}
 const close=()=>{const pending=decorRevealQueue.splice(0);clearDecorReveal();decorRevealQueue.push(...pending.filter(e=>e.context===decorRevealContext()));showNextDecorReveal()};$('#decorAcqClose').onclick=close;$('#decorAcqContinue').onclick=close;
 panel.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();close()}else if(e.key==='Tab'){e.preventDefault();(document.activeElement===$('#decorAcqContinue')?$('#decorAcqClose'):$('#decorAcqContinue')).focus()}};$('#decorAcqContinue').focus();
}
const revealItemTransaction=itemTransaction;
itemTransaction=function(action){const before=acquiredDecorSnapshot(),result=revealItemTransaction(action);if(result.ok)revealNewDecor(before,'local-transaction');return result};
const revealStageTransaction=stageTransaction;
stageTransaction=function(action){const before=acquiredDecorSnapshot(),result=revealStageTransaction(action);if(result.ok)revealNewDecor(before,'chapter');return result};
const revealEarlyPersist=persistEarly;
persistEarly=function(){const before=acquiredDecorSnapshot(),result=revealEarlyPersist();revealNewDecor(before,'early-chapter');return result};
const revealGo=go;go=function(...args){if(decorRevealActive&&decorRevealActive.context!==decorRevealContext())clearDecorReveal();return revealGo(...args)};
const revealTesting=setTestingMode;setTestingMode=function(...args){clearDecorReveal();return revealTesting(...args)};

// Additive garden adapter: no reward grants, account changes, or full-page equip redraws.
const wearImageCache=new Map();
function wearURI(svg){if(!wearImageCache.has(svg))wearImageCache.set(svg,'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg));return wearImageCache.get(svg)}
function wearCurrent(id){try{return GardenWear.equipped(db,id)}catch(e){return {}}}
function wearPlantInner(id,state,force=false){const active=wearCurrent(id),has=Object.keys(active).length>0;return (force||has)&&SCENE_PLANTS[id]?SCENE_PLANTS[id]:wearOriginalPlantArt(id,state)}
function wearImageNode(slot,c,front=false){const a=c?.anchor||{x:0,y:0,width:0,height:0},w=a.width*(c?.scale||1),h=a.height*(c?.scale||1),src=c?wearURI(front?c.frontSvg:c.svg):'';return '<image data-wear-layer="'+slot+'" '+(c?'data-wear-id="'+c.id+'" ':'')+'x="'+(a.x+(c?.offsetX||0)-w/2)+'" y="'+(a.y+(c?.offsetY||0)-h/2)+'" width="'+w+'" height="'+h+'" href="'+src+'" visibility="'+(c?'visible':'hidden')+'" preserveAspectRatio="xMidYMid meet"/>'}
function wearStageHTML(id,state,force=false){const e=wearCurrent(id),c=s=>GardenWear.get(e[s]);return '<svg class="wear-stage" data-wear-plant="'+id+'" data-wear-base="'+Boolean(e.base)+'" viewBox="0 0 320 340" role="img" aria-label="'+escapeHTML((GardenWear.catalog.find(c=>c.plantId===id)?.plantName||'植物')+'穿戴预览')+'">'+wearImageNode('base',c('base'))+'<svg data-wear-layer="plant" data-wear-original="'+(force||Object.keys(e).length?'true':'false')+'" x="40" y="20" width="240" height="250" viewBox="0 0 200 200">'+wearPlantInner(id,state,force)+'</svg>'+['body','item','head'].map(s=>wearImageNode(s,c(s))).join('')+wearImageNode('foreground',c('base'),true)+'</svg>'}
const wearOriginalPlantArt=scenePlantArt;
scenePlantArt=function(id,state){return GardenWear.catalog.some(c=>c.plantId===id)&&Object.keys(wearCurrent(id)).length?wearStageHTML(id,state):wearOriginalPlantArt(id,state)};
function updateWearStage(stage,id,state,force=false){const e=wearCurrent(id);stage.dataset.wearBase=String(Boolean(e.base));for(const slot of ['base','body','item','head','foreground']){const node=stage.querySelector('[data-wear-layer="'+slot+'"]'),c=GardenWear.get(e[slot==='foreground'?'base':slot]);if(!node)continue;if(!c){if(node.getAttribute('visibility')!=='hidden')node.setAttribute('visibility','hidden');node.removeAttribute('data-wear-id');continue}if(node.getAttribute('data-wear-id')!==c.id){const a=c.anchor,w=a.width*c.scale,h=a.height*c.scale;for(const [key,value] of Object.entries({x:a.x+c.offsetX-w/2,y:a.y+c.offsetY-h/2,width:w,height:h,href:wearURI(slot==='foreground'?c.frontSvg:c.svg),visibility:'visible','data-wear-id':c.id}))node.setAttribute(key,String(value))}}
const plant=stage.querySelector('[data-wear-layer="plant"]'),original=force||Object.keys(e).length>0;if(plant&&plant.dataset.wearOriginal!==String(original)){plant.innerHTML=wearPlantInner(id,state,force);plant.dataset.wearOriginal=String(original)}}
function refreshGardenWear(id){const state=RewardEngine.ensure(db),e=wearCurrent(id);document.querySelectorAll('[data-garden-plant="'+id+'"] .pot-plant').forEach(holder=>{let stage=holder.querySelector('.wear-stage');if(!stage){holder.innerHTML=wearStageHTML(id,state);stage=holder.querySelector('.wear-stage')}if(stage)updateWearStage(stage,id,state);holder.closest('[data-garden-pot]')?.classList.toggle('wear-has-base',Boolean(e.base))});document.querySelectorAll('#wearRoomPreview .wear-stage').forEach(stage=>updateWearStage(stage,id,state,true));if(id===3&&typeof refreshCompanion==='function')refreshCompanion()}
function wearApply(id,slot,itemId){try{GardenWear.transaction(db,id,slot,itemId,save);refreshGardenWear(id);refreshWearControls(id);const line=document.querySelector('#wearSaveStatus');if(line)line.textContent='已保存到当前'+(typeof isTesting==='function'&&isTesting()?'体验档案':'儿童档案')+'，花园外观已更新。';return true}catch(e){const line=document.querySelector('#wearSaveStatus');if(line)line.textContent=e.message;notify(e.message);return false}}
function refreshWearControls(id){const e=wearCurrent(id);document.querySelectorAll('[data-wear-equip]').forEach(button=>{const c=GardenWear.get(button.dataset.wearEquip),on=c&&e[c.slot]===c.id;button.setAttribute('aria-pressed',String(on));button.textContent=on?'已装备':'装备';button.disabled=Boolean(on)});document.querySelectorAll('[data-wear-remove]').forEach(button=>button.disabled=!e[button.dataset.wearRemove]);document.querySelectorAll('[data-wear-summary]').forEach(label=>{const c=GardenWear.get(e[label.dataset.wearSummary]);label.textContent=c?c.name:'未装备'})}
function openGardenWear(selected){const plants=[...new Map(GardenWear.catalog.map(c=>[c.plantId,c.plantName])).entries()];if(!plants.some(([id])=>id===selected))selected=plants[0][0];const c=GardenWear.catalog.find(c=>c.plantId===selected),e=wearCurrent(selected),slotNames={head:'头饰',body:'服饰',item:'道具',base:'底座'};let warning='';try{GardenWear.state(db)}catch(error){warning=error.message}
sceneSheet('花园 · 部件试穿','<section class="wear-room"><label>选择植物 <select id="wearPlantSelect">'+plants.map(([id,name])=>'<option value="'+id+'" '+(selected===id?'selected':'')+'>'+escapeHTML(name)+'</option>').join('')+'</select></label><p class="wear-note">全部48件开放试穿，不代表已获得卡牌，不消耗或发放奖励。当前为简化矢量预览，原画透明部件待精修。</p><div class="wear-workspace"><div><div id="wearRoomPreview">'+wearStageHTML(selected,RewardEngine.ensure(db),true)+'</div><p>'+escapeHTML(c.theme)+' · <span class="wear-tag">临时预览素材</span></p></div><div class="wear-slots">'+GardenWear.slots.map(slot=>{const part=GardenWear.catalog.find(c=>c.plantId===selected&&c.slot===slot);return '<section class="wear-slot"><h3>'+slotNames[slot]+' <small>'+part.rarity+'</small></h3><p>当前：<span data-wear-summary="'+slot+'">'+escapeHTML(GardenWear.get(e[slot])?.name||'未装备')+'</span></p><div class="wear-option"><img src="'+wearURI(part.svg)+'" width="100" height="70" alt="'+escapeHTML(part.name)+'"><span>'+escapeHTML(part.name)+'</span></div><div class="actions"><button data-wear-equip="'+part.id+'">装备</button><button class="secondary" data-wear-remove="'+slot+'">卸下</button></div></section>'}).join('')+'</div></div><p id="wearSaveStatus" role="status" aria-live="polite">'+escapeHTML(warning||'装备后自动保存；右侧植物展示与花园中的同株植物同步更新。')+'</p><div class="actions"><button id="wearEquipAll">穿上整套</button><button class="secondary" id="wearRemoveAll">卸下整套</button><button class="secondary" id="wearOldWardrobe">原有整套装扮</button></div><p class="wear-note">部件只适用于标注植物。试穿展示所有12株，不授予未拥有植物；只有已经摆放的同株植物会同步变化。部件优先显示在原始立绘上，卸下后恢复原整套造型；旧造型选择不被覆盖。</p></section>');
$('#wearPlantSelect').onchange=event=>openGardenWear(Number(event.target.value));document.querySelectorAll('[data-wear-equip]').forEach(b=>b.onclick=()=>{const c=GardenWear.get(b.dataset.wearEquip);wearApply(selected,c.slot,c.id)});document.querySelectorAll('[data-wear-remove]').forEach(b=>b.onclick=()=>wearApply(selected,b.dataset.wearRemove,null));
const batch=remove=>{const had=Object.prototype.hasOwnProperty.call(db,'gardenWearables'),old=db.gardenWearables;try{for(const slot of GardenWear.slots)GardenWear.change(db,selected,slot,remove?null:GardenWear.catalog.find(c=>c.plantId===selected&&c.slot===slot).id);if(!save())throw Error('整套穿戴未保存，已撤回');refreshGardenWear(selected);refreshWearControls(selected);$('#wearSaveStatus').textContent=remove?'已卸下整套并保存。':'已穿上整套并保存。'}catch(error){if(had)db.gardenWearables=old;else delete db.gardenWearables;$('#wearSaveStatus').textContent=error.message;notify(error.message)}};
$('#wearEquipAll').onclick=()=>batch(false);$('#wearRemoveAll').onclick=()=>batch(true);$('#wearOldWardrobe').onclick=()=>plantWardrobe(selected);refreshWearControls(selected)}
const wearPlacementPicker=chooseGardenPot;chooseGardenPot=function(index){wearPlacementPicker(index);const id=GardenLayout.ensure(db,safeCollection()).slots[index];if(id!==null&&GardenWear.catalog.some(c=>c.plantId===id)){$('#sceneSheetContent').insertAdjacentHTML('beforeend','<div class="actions"><button id="wearThisPlant">为这株植物试穿部件</button></div>');$('#wearThisPlant').onclick=()=>openGardenWear(id)}};
const wearHome=home;home=function(){wearHome();const button=$('#gardenWardrobe');if(button)button.onclick=()=>openGardenWear();document.querySelectorAll('[data-garden-plant]').forEach(pot=>pot.classList.toggle('wear-has-base',Boolean(wearCurrent(Number(pot.dataset.gardenPlant)).base)))};
// Sunflower is a mascot rather than an owned pot plant. Keep its handle/drag logic.
if(typeof refreshCompanion==='function'){const priorRefresh=refreshCompanion;refreshCompanion=function(){priorRefresh();const handle=document.querySelector('#companionHandle');if(!handle?.appendChild)return;let overlay=handle.querySelector('.wearable-companion');const visible=tab==='home'&&Object.keys(wearCurrent(3)).length>0;if(!overlay&&visible){overlay=document.createElement('span');overlay.className='wearable-companion';overlay.innerHTML=wearStageHTML(3,RewardEngine.ensure(db),true);handle.appendChild(overlay)}handle.classList.toggle('wearable-mascot-active',visible);if(overlay){overlay.hidden=!visible;const stage=overlay.querySelector('.wear-stage');if(visible&&stage)updateWearStage(stage,3,RewardEngine.ensure(db),true)}}}
if(tab==='home')home();

let songziGetARENA_DOCUMENTCache;function songziGetARENA_DOCUMENT(){return songziGetARENA_DOCUMENTCache??(songziGetARENA_DOCUMENTCache=resolveGameArt("\u003c!doctype html>\u003chtml lang=\"zh-CN\">\u003cmeta charset=\"utf-8\">\u003cmeta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\u003ctitle>小松子 · 一分钟速答\u003c/title>\u003cstyle>\n*{box-sizing:border-box}body{margin:0;background:#eff4e9;color:#183e2e;font:20px/1.5 system-ui,\"Microsoft YaHei\",sans-serif}main{max-width:600px;margin:4vh auto;padding:22px}header{display:flex;justify-content:space-between;align-items:center;font-weight:700}small{font-size:14px;color:#62715b}article{background:#fffef8;border-radius:28px;padding:30px;margin-top:25px;text-align:center}h1{font-size:36px}button{font:inherit;border:0;border-radius:14px;background:#e8efdf;color:#183e2e;min-height:58px;cursor:pointer;touch-action:manipulation}.primary{background:#2c6347;color:white;padding:12px 30px}#hud{display:flex;justify-content:space-between;font-variant-numeric:tabular-nums}#question{font-size:clamp(44px,9vw,64px);margin:22px 0 10px}#answer{font-size:40px;height:64px;display:flex;align-items:center;justify-content:center;gap:12px;font-variant-numeric:tabular-nums}#value{min-width:70px;border-bottom:3px solid #aebfa3}#mark{width:30px;color:#bc403e;font-size:32px}#keys{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}button:focus-visible{outline:3px solid #bd812b;outline-offset:3px}.exit{font-size:15px;background:transparent;margin-top:16px;min-height:44px}.score{font-size:72px;font-weight:800}p{margin:12px 0} @media(max-width:420px){main{padding:14px;margin:0}article{padding:20px}}\n/* Garden skin: static decoration keeps the timed input path free of animation. */\nbody{background:radial-gradient(ellipse at 15% 5%,#fff5d6 0,transparent 45%),radial-gradient(ellipse at 95% 90%,#daeacc 0,transparent 50%),#eef4e5;color:#294c35;font-family:\"Microsoft YaHei\",\"Trebuchet MS\",system-ui,sans-serif}\nmain{max-width:640px;margin:3vh auto}header{font-size:23px;padding:0 6px}header small{background:#e2edcf;padding:6px 12px;border-radius:20px;color:#557044}\narticle{position:relative;background:#fffdf2;border:3px solid #dbe5c7;border-radius:36px;box-shadow:0 7px 0 #cbd9b7,0 18px 35px #4e6c2810;padding:28px 30px 20px;margin-top:22px}\narticle:before,article:after{content:\"\";position:absolute;width:25px;height:13px;top:-9px;background:#9cbc72;border:2px solid #739a54;border-radius:90% 10% 90% 10%;pointer-events:none}article:before{left:35px;transform:rotate(18deg)}article:after{left:57px;transform:rotate(80deg)}\n#hud{align-items:center;gap:12px}#hud b{display:flex;align-items:center;justify-content:center;min-height:76px;border-radius:24px;padding:9px 18px;font-size:clamp(26px,5vw,34px);font-weight:900;line-height:1.2;white-space:nowrap}\n#time{background:#fff0bb;border:2px solid #e5ca7d;box-shadow:0 4px 0 #ead59a;color:#735321;min-width:130px}#count{background:#e7f2d5;border:2px solid #bbd59b;box-shadow:0 4px 0 #cee1b5;color:#3d662e;min-width:190px}\n#question{font-weight:800;font-size:clamp(48px,10vw,70px);letter-spacing:3px;margin:22px 0 8px}#answer{height:80px;font-size:48px;gap:16px}#value{min-width:95px;border-bottom:4px solid #abc28b}#mark{display:inline-flex;align-items:center;justify-content:center;flex:0 0 62px;width:62px;height:62px;font-size:60px;font-weight:900;line-height:1;color:#d24e49;border-radius:20px}#mark:not(:empty){background:#fff0e9}\n#keys{gap:12px;margin-top:20px}#keys button{min-height:64px;border:2px solid #c7d9ae;border-radius:20px;background:#eaf2dc;box-shadow:0 4px 0 #c3d3ad;font-size:28px;font-weight:750;color:#365532}#keys .primary,.primary{background:#4c7c45;color:#fffbe7;border:2px solid #3d6936;box-shadow:0 4px 0 #345a31;border-radius:20px;font-weight:800}#keys .primary{background:#4c7c45;color:#fffbe7;border-color:#3d6936;box-shadow:0 4px 0 #345a31;font-size:24px}button:active{transform:translateY(2px);box-shadow:0 1px 0 #abc091}button:focus-visible{outline:3px solid #c88d32;outline-offset:4px}.exit{color:#687b59;font-size:15px;margin-top:19px}h1{color:#3c6335}.score{color:#537e38}\n@media(max-width:420px){main{padding:12px;margin:0}header{font-size:20px}header small{font-size:12px;padding:5px 8px}article{padding:20px 16px 12px;border-radius:28px}#hud{gap:8px}#hud b{font-size:25px;min-height:66px;padding:8px 12px;border-radius:20px}#time{min-width:100px}#count{min-width:150px}#keys{gap:10px}#keys button{min-height:58px}#mark{font-size:54px;width:56px;flex-basis:56px;height:56px}}\n#mark[data-result=correct]:not(:empty){color:#3c823f;background:#e4f2d9}#mark[data-result=wrong]:not(:empty){color:#d24e49;background:#fff0e9}main{max-width:1030px}.arena-layout{display:grid;grid-template-columns:minmax(0,580px) minmax(280px,330px);gap:28px;align-items:start;justify-content:center}.arena-layout article{min-width:0}.leaderboard{position:relative;margin-top:22px;padding:22px 17px 19px;color:#57371e;border:6px solid #936039;border-radius:23px;background:repeating-linear-gradient(3deg,transparent 0 17px,#8b532b0b 18px 20px,transparent 21px 38px),linear-gradient(100deg,#dab17b,#f0d3a2 47%,#d3a36c);box-shadow:inset 0 0 0 2px #f6d9ab,inset 0 0 24px #81481d24,0 6px 0 #70472b,0 15px 28px #5f401522}.leaderboard:before,.leaderboard:after{content:\"\";position:absolute;top:12px;width:9px;height:9px;border-radius:50%;background:#6c4e32;box-shadow:inset 1px 1px 2px #392615,0 1px 0 #ffe2b1}.leaderboard:before{left:12px}.leaderboard:after{right:12px}.board-title{font-size:27px;margin:3px 0;text-align:center;font-weight:900;letter-spacing:2px;color:#57381f;text-shadow:0 1px #ffeaca}.board-subtitle{font-size:13px;color:#775535;text-align:center;margin:0 0 18px}.board-list{list-style:none;padding:0;margin:0;display:grid;gap:10px}.board-row{display:grid;grid-template-columns:32px 1fr auto;align-items:center;gap:8px;padding:13px 10px;background:#ffefd1d9;border:1px solid #ba8955;border-radius:13px;box-shadow:0 2px 0 #af7c4650}.board-place{font-size:18px;font-weight:900;text-align:center;color:#8a6542}.board-name{font-size:20px;font-weight:850}.board-score{font-size:22px;font-weight:900;font-variant-numeric:tabular-nums;color:#5e472e}.board-score small{font-size:12px;color:#866548;margin-left:3px}.board-row:nth-child(1){background:#fff0bd;border-color:#c69437}.board-row:nth-child(1) .board-name{color:#9b6509}.board-row:nth-child(2){background:#f2f0e8;border-color:#a7a6a0}.board-row:nth-child(2) .board-name{color:#646f7f}.board-row:nth-child(3){background:#f7dfc4;border-color:#bb8762}.board-row:nth-child(3) .board-name{color:#a05831}.board-foot{font-size:13px;color:#775535;text-align:center;margin:17px 0 0;padding-top:12px;border-top:1px solid #b88a56}.board-leaf{color:#526e35;font-size:20px}.preview-note{text-align:center}\n@media(max-width:820px){main{max-width:640px}.arena-layout{grid-template-columns:minmax(0,1fr);gap:12px}.leaderboard{margin-top:12px}.board-list{gap:8px}.board-row{padding:10px 14px}}body{background:transparent!important}main{margin:26px auto;padding:18px;max-width:1030px}.board-empty{text-align:center;padding:40px 10px;color:#775535}.board-empty>span{font-size:44px}.board-empty small{color:#775535;font-size:13px}.leaderboard{min-height:300px}@media(max-width:420px){main{margin:12px auto;padding:12px}} \u003c/style>\u003cmain>\u003cdiv class=\"arena-layout\">\u003carticle id=\"app\">\u003c/article>\u003caside class=\"leaderboard\" aria-labelledby=\"boardTitle\">\u003ch2 class=\"board-title\" id=\"boardTitle\">\u003cspan class=\"board-leaf\" aria-hidden=\"true\">❧\u003c/span> 林间排行榜\u003c/h2>\u003cdiv class=\"board-empty\">\u003cspan aria-hidden=\"true\">🌿\u003c/span>\u003cp>排行榜待连接\u003c/p>\u003csmall>完成后可查看本局答对数量\u003c/small>\u003c/div>\u003c/aside>\u003c/div>\u003c/main>\u003cscript>'use strict';\nconst SpeedArena=(()=>{\n const modules=Object.freeze({'arithmetic20-60s':Object.freeze({id:'arithmetic20-60s',version:3,durationMs:60000,max:20})});\n const family=q=>[q.op==='+'?q.a:q.answer,q.b].sort((a,b)=>a-b).join(':');\n function create({moduleId='arithmetic20-60s',now=()=>performance.now(),random=Math.random}={}){\n  const config=modules[moduleId];if(!config)throw Error('Unknown arena module');\n  const pool=[];\n  for(let a=0;a\u003c=20;a++)for(let b=0;b\u003c=20;b++)for(const op of ['+','−']){\n   const answer=op==='+'?a+b:a-b;if(answer\u003c0||answer>20)continue;\n   const band=(op==='+'?answer:a)\u003c=10?'basic':(op==='+'?a%10+b%10>=10:a%10\u003cb%10)?'cross':'standard';\n   const trivial=a===0||b===0||a===1||b===1||(op==='−'&&a===b);\n   pool.push({a,b,op,answer,band,trivial,text:`${a} ${op} ${b} =`});\n  }\n  let deck=[],serial=0,last=null;const started=now();\n  const s={moduleId,rulesVersion:3,status:'playing',correct:0,wrong:0,events:[],settlements:0,current:null};\n  function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}\n  function block(){const slots=shuffle([['basic','+'],['basic','−'],['basic','−'],['standard','+'],['standard','+'],['standard','−'],['cross','+'],['cross','+'],['cross','−'],['cross','−']]);const chosen=[];\n   for(const [band,op] of slots){const prior=chosen.at(-1)||last;const options=pool.filter(q=>q.band===band&&q.op===op&&!chosen.some(x=>x.text===q.text)&&(!prior||family(q)!==family(prior))&&(!q.trivial||!chosen.some(x=>x.trivial)));if(!options.length)throw Error('Cannot construct balanced block');chosen.push(options[Math.floor(random()*options.length)])}return chosen;\n  }\n  function next(){if(!deck.length)deck=block();const q=deck.shift();last=q;s.current={...q,id:++serial}}\n  function remaining(){return Math.max(0,config.durationMs-(now()-started))}\n  function tick(){if(s.status==='playing'&&remaining()\u003c=0){s.status='finished';s.settlements++}return remaining()}\n  function submit(raw,questionId){tick();if(s.status!=='playing')return 'locked';if(questionId!==s.current.id)return 'stale';if(!/^\\d{1,2}$/.test(String(raw).trim()))return 'invalid';const value=Number(raw),q=s.current,correct=value===q.answer;s.events.push({seq:s.events.length+1,questionId,value,correct,band:q.band,elapsedMs:now()-started});if(correct)s.correct++;else s.wrong++;next();return correct?'correct':'wrong'}\n  function exit(){tick();if(s.status==='playing')s.status='abandoned'}\n  next();return {s,config,remaining,tick,submit,exit,result(){tick();return {mode:'arena',moduleId,rulesVersion:3,correct:s.correct,wrong:s.wrong,attempts:s.events.length,status:s.status,eligible:false,verification:'local-demo'}}};\n }\n return {modules,create};\n})();\nif(typeof module!=='undefined')module.exports=SpeedArena;\n\r\n\u003c/script>\u003cscript>\nconst app=document.querySelector('#app');let game=null,value='',frame=0,busy=false,markUntil=0;\nfunction home(){cancelAnimationFrame(frame);game=null;app.innerHTML='\u003ch1>60秒，能答对几道？\u003c/h1>\u003cp>答对立即下一题\u003c/p>\u003cbutton class=\"primary\" id=\"start\">开始\u003c/button>\u003cp>\u003csmall>按答对题数排行\u003c/small>\u003c/p>';document.querySelector('#start').onclick=start}\nfunction start(){game=SpeedArena.create();value='';busy=false,markUntil=0;app.innerHTML='\u003cdiv id=\"hud\">\u003cb id=\"time\">60秒\u003c/b>\u003cb id=\"count\">答对 0 道\u003c/b>\u003c/div>\u003cdiv id=\"question\">\u003c/div>\u003cdiv id=\"answer\">\u003cspan id=\"value\">&nbsp;\u003c/span>\u003cspan id=\"mark\" role=\"status\" aria-label=\"\">\u003c/span>\u003c/div>\u003cdiv id=\"keys\">'+[1,2,3,4,5,6,7,8,9,'⌫',0,'确认'].map(v=>'\u003cbutton type=\"button\" data-key=\"'+v+'\" '+(v==='确认'?'class=\"primary\"':'')+'>'+v+'\u003c/button>').join('')+'\u003c/div>\u003cbutton class=\"exit\" id=\"exit\">结束本局\u003c/button>';document.querySelector('#keys').onclick=e=>{const b=e.target.closest('[data-key]');if(b)key(b.dataset.key)};document.querySelector('#exit').onclick=()=>{game.exit();finish()};paintQuestion();loop()}\nfunction paintQuestion(){document.querySelector('#question').textContent=game.s.current.text;document.querySelector('#count').textContent='答对 '+game.s.correct+' 道';paintValue()}\nfunction paintValue(){document.querySelector('#value').textContent=value||' '}\nfunction key(k){if(!game||game.s.status!=='playing'||busy)return;game.tick();if(game.s.status!=='playing'){finish();return}const mark=document.querySelector('#mark');if(k==='确认'){if(!value)return;const id=game.s.current.id,r=game.submit(value,id);if(r==='locked'){finish();return}if(r==='correct'||r==='wrong'){busy=true;value='';mark.textContent=r==='correct'?'✓':'×';mark.dataset.result=r;mark.setAttribute('aria-label',r==='correct'?'上一题答对':'上一题答错');markUntil=performance.now()+400;paintQuestion();requestAnimationFrame(()=>busy=false)}else if(r==='invalid'){value='';paintValue()}return}if(k==='⌫')value=value.slice(0,-1);else if(/^\\d$/.test(k)&&value.length\u003c2)value+=k;paintValue()}\nfunction loop(){if(!game||game.s.status!=='playing')return;game.tick();if(game.s.status==='finished'){finish();return}if(markUntil&&performance.now()>=markUntil){const m=document.querySelector('#mark');m.textContent='';m.setAttribute('aria-label','');markUntil=0}document.querySelector('#time').textContent=Math.ceil(game.remaining()/1000)+'秒';frame=requestAnimationFrame(loop)}\nfunction finish(){cancelAnimationFrame(frame);const r=game.result();app.innerHTML='\u003ch1>'+(r.status==='finished'?'时间到':'本局已结束')+'\u003c/h1>\u003cdiv class=\"score\">'+r.correct+'\u003c/div>\u003cp>答对题数\u003c/p>\u003cp>\u003csmall>作答 '+r.attempts+' 次 · 错误 '+r.wrong+' 次\u003c/small>\u003c/p>\u003cp>\u003csmall>'+(r.status==='finished'?'本局完成 · 排行榜尚未连接':'中途结束，不参与排行')+'\u003c/small>\u003c/p>\u003cbutton class=\"primary\" id=\"again\">再来一局\u003c/button>';document.querySelector('#again').onclick=home}\ndocument.addEventListener('keydown',e=>{if(!game||game.s.status!=='playing'||e.repeat)return;if(/^\\d$/.test(e.key)){e.preventDefault();key(e.key)}else if(e.key==='Enter'){e.preventDefault();key('确认')}else if(e.key==='Backspace'){e.preventDefault();key('⌫')}});document.addEventListener('visibilitychange',()=>{if(!document.hidden&&game?.s.status==='playing'){game.tick();if(game.s.status==='finished')finish()}});home();\n\u003c/script>\u003c/html>\n\r\n\r\n\r\n\r\n\r\n"));}
const ARENA_BACKGROUND=resolveGameArt("songzi-raster:35");
// Isolated arcade: no learning, reward, profile or cloud API is passed to the sandbox.
NAV_ICONS.arena='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 8h18v10c0 10-4 15-9 15s-9-5-9-15Z" fill="#e9bf5e" stroke="#896230" stroke-width="3"/><path d="M15 12H7v6q0 9 11 9m15-15h8v6q0 9-11 9M24 33v7m-8 3h16" fill="none" stroke="#896230" stroke-width="3" stroke-linecap="round"/><path d="m24 12 2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1Z" fill="#fff5bb"/></svg>';
function mountArenaNavigation(){
 const nav=document.querySelector('#nav');if(!nav||nav.querySelector('[data-view="arena"]'))return;
 const button=document.createElement('button');button.type='button';button.dataset.view='arena';button.onclick=()=>go('arena');nav.appendChild(button);applyLatestNavigation();
}
function renderArena(){
 const root=$('#main');root.innerHTML='<section class="arena-world" aria-label="林间竞技场"><iframe class="arena-game-frame" title="一分钟速答与排行榜" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe></section>';
 const world=root.querySelector('.arena-world');world.style.backgroundImage='url("'+ARENA_BACKGROUND+'")';root.querySelector('.arena-game-frame').srcdoc=songziGetARENA_DOCUMENT();
}
const beforeArenaGo=go;
go=function(view){
 if(view!=='arena'){document.body.classList.remove('arena-mode');return beforeArenaGo(view)}
 if(typeof needsFirstGradeChoice==='function'&&needsFirstGradeChoice()){showFirstGradeChoice();return false}
 // The standard route performs ordinary-session clock/save and modal cleanup once.
 beforeArenaGo('home');if(tab!=='home')return false;
 tab='arena';document.body.classList.add('arena-mode');
 document.querySelectorAll('#nav button[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view==='arena'));
 renderParentNav('arena');renderArena();applyLatestNavigation();
};
mountArenaNavigation();


Object.defineProperty(window,"CARD_DOCUMENT",{configurable:true,get:songziGetCARD_DOCUMENT});

Object.defineProperty(window,"ARENA_DOCUMENT",{configurable:true,get:songziGetARENA_DOCUMENT});

window.SONGZI_APP_READY=true;
window.SONGZI_LOADING_PLAN={"home":["assets/002e71ae296ea4b9a35611559b657c93db1ef5cf22ce9bf24e2e9f405a2f3bed.webp"],"learn":["assets/002e71ae296ea4b9a35611559b657c93db1ef5cf22ce9bf24e2e9f405a2f3bed.webp"],"shop":["assets/8ef2fb4d96434c418dba45325330dcd241aec8431ed723baa6e6373b918b1df8.webp"],"arena":["assets/60856d63a03180f961e7e9810fa665eaae03d26cfd5b39c9f0bfb8d2f87da0a0.webp"],"next":["assets/8ef2fb4d96434c418dba45325330dcd241aec8431ed723baa6e6373b918b1df8.webp","assets/60856d63a03180f961e7e9810fa665eaae03d26cfd5b39c9f0bfb8d2f87da0a0.webp"]};
// Download hints only: no gameplay, persistence or reward code runs here.
(function () {
  'use strict';
  const plan = window.SONGZI_LOADING_PLAN;
  if (!plan || typeof Image !== 'function') return;
  const requested = new Set(), done = new Set(), queue = [];
  let running = false, scheduled = false, recentInput = 0, loaded = false;
  const connection = navigator.connection;
  function allowed() {
    return loaded && !document.hidden && navigator.onLine !== false &&
      !(connection && (connection.saveData || /(^|-)2g$/.test(connection.effectiveType || '')));
  }
  function schedule() {
    if (scheduled || running || !queue.length || !allowed()) return;
    scheduled = true;
    setTimeout(function () {
      const idle = window.requestIdleCallback || function (fn) { setTimeout(fn, 100); };
      idle(function () {
        scheduled = false;
        if (!allowed()) return;
        if (Date.now() - recentInput < 1000) { schedule(); return; }
        next();
      }, { timeout: 3000 });
    }, 500);
  }
  function next() {
    if (running || !queue.length || !allowed()) return;
    const url = queue.shift();
    running = true;
    const image = new Image();
    image.decoding = 'async';
    image.fetchPriority = 'low';
    let ended = false;
    const finish = function (ok) {
      if (ended) return;
      ended = true;
      clearTimeout(timer);
      image.onload = image.onerror = null;
      if (ok) done.add(url); else requested.delete(url);
      running = false;
      schedule();
    };
    const timer = setTimeout(function () { image.src = ''; finish(false); }, 15000);
    image.onload = function () {
      // The API asks the browser for asynchronous decode; it is not a frame-rate guarantee.
      if (typeof image.decode === 'function') image.decode().then(function () { finish(true); }, function () { finish(false); });
      else finish(true);
    };
    image.onerror = function () { finish(false); };
    image.src = url;
  }
  function stage(name, priority) {
    const items = plan[name] || [];
    const added = [];
    for (const url of items) {
      if (done.has(url)) continue;
      if (requested.has(url)) {
        // Move an already queued destination ahead of speculative work.
        // Never duplicate or interrupt the image currently in flight.
        const at = priority ? queue.indexOf(url) : -1;
        if (at >= 0) { queue.splice(at, 1); added.push(url); }
        continue;
      }
      requested.add(url); added.push(url);
    }
    if (priority) queue.unshift.apply(queue, added); else queue.push.apply(queue, added);
    schedule();
  }
  function intent(event) {
    const button = event.target && event.target.closest && event.target.closest('#nav [data-view]');
    if (button) stage(button.dataset.view, true);
  }
  document.addEventListener('pointerover', intent, { passive: true });
  document.addEventListener('focusin', intent);
  document.addEventListener('pointerdown', function (event) { recentInput = Date.now(); intent(event); }, { passive: true });
  document.addEventListener('keydown', function () { recentInput = Date.now(); }, { passive: true });
  document.addEventListener('visibilitychange', schedule);
  window.addEventListener('online', schedule);
  if (connection && connection.addEventListener) connection.addEventListener('change', schedule);
  // Start only after currently requested page resources finish. Do not pull the whole album.
  function ready() { loaded = true; stage('next'); }
  if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready, { once: true });
  window.SongziLoading = Object.freeze({ stage: stage });
})();
