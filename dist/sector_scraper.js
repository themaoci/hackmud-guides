function(a,b){let c,d=b.start||0,e=b.tier||1,f=[],g="s",h=[],j=[];const k=a=>{for(c=0,j=a().slice(d,d+11);j[c];c++)g=j[c],#ms.chats.join({channel:g}),f=f.concat(a({sector:g}).filter(a=>/\.public|private|member/.exec(a))),#ms.chats.leave({channel:g});return f};return 1==e&&(h=h.concat(k(a=>#fs.scripts.fullsec(a)))),2==e&&(h=h.concat(k(a=>#fs.scripts.highsec(a)),k(a=>#fs.scripts.midsec(a)))),[...new Set(h)].sort()}