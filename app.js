
/* =========================================================
   CONSTANTS
========================================================= */
const FINISH = {
  SPIN:   { label:'轉停勝利', points:1, color:'var(--fin-spin)',   icon:'●', cls:'spin'   },
  OVER:   { label:'擊飛勝利', points:2, color:'var(--fin-over)',   icon:'▲', cls:'over'   },
  BURST:  { label:'爆裂勝利', points:2, color:'var(--fin-burst)',  icon:'✦', cls:'burst'  },
  XTREME: { label:'極限勝利', points:3, color:'var(--fin-xtreme)', icon:'◆', cls:'xtreme' }
};
const TROPHY_ICONS = {
  1: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFvElEQVR4nO2XbYxcVRnHf8+5d+ZOZ9btdtNut5TuAi1uQRMpNhUTI51aNKKEGLU0TVBqFD4Zykswihq/laiJfKiJIaAQEQtpQiKmaRAc2koA13ZpXUraUthuSd2d2ZeZ2Xmfe8/jh9lZ1zI77UxTE5P9Jzf35Zzz/P/3Oc9zznNgEYtYxCIWsYjLgbQ7UFW1JSKRtrjcdgapqt42EJt7Dy5odxp8U1VtR+RFBzTy1M7PeRTKhnTBsLoX1PHAuHPWBAFbBb+M+gH4IIT47eszHxVwEdFNG1VV166IxOu9+rtM4tZP+NzYpyBhfvjHavxXD3cmWNqDRjrnTIoAhSxkxtF8gcp0QD6jvD8FfzvpMJLWeJ3jTLKUaCZywQZV1Z1fXsWmTR/DnhsFa3l5yHD7hgDfCMm0w9ujHl+6cw2kk2hxpmZNBBFByxYt+FTygohiXHBc5S8nDF+8ySKOC6tXM/iPMr/bf25BTzaMQVXVLQNRBtbHuO++PjKvjEI1YGhEeOENh6cf9FnVE8X9WhrNb4czPqTyYGRWpCHIKnbMkknWeMcKyq59LmtXKTs+bxEPOjdfzdtHhtl6Q9eCMbpwkljQTAb/wF/51uNh8uUQv7nX50fPuchSD2ftVWhuO4iiMQ8JOkAEVQERjFNGqhUYFwJfCCrQu0x5+I6Arz8WoqvDsrdyGJ1xgSULyjALtgASMrgrPTDCUy8dpf/bw+CtgFwF/+w40rGXWkro7B8poHN3cQRxFMcoogrRfvrvGWbPC4fBEdyVHhI2mCYqLr7MGPDC0HPVGkLRGGEvRrkE5ZkKoVlXK4CamjgAI+jss1oIVLEYwl4HoWUfZ3l1jHBIau5RsM3pG8MaCIpKerjM8z+DnbffDMCzr57g0X3X8eSbIeyxPlCQ3gFkzacQtHapRQuKPxYQ+IY/HHX4xdB1PPXnQVDl+9s28uyPhenjJfyibaqwoUARkddOFihUQ+w56JJP+tx1c4rdj3yXzPQUqKKFEppMw9gpKGaZm1oBmylRnSqRywAmAKOgMDmRZPcPvsfdm7Jkx31+fcilFHi88m66tSyui1RVvXZ5OI5jEpFIgQ39v+fJx4q8M5qOp6Z8tBokdu04DT0ZxA2hk3kQQ3G0QiVr8SvwzKDh5ZMan/CneeaX9yc2uC9y7D3hyBmXp9/04x9MZNtbB+uYv5PctSnCo9/02b0vTCoDYFneJezYGPDZaxQNLAJYH94YMTx3xGG6AIhDT7fhoTtL/Hyfw96/l/7LEc34L5okdQOqqsm0cvAdl1zRourgeTFS03kOnhDSafjkSkBhOGk4dt4wkYOw5+H7ATO5Kq+/65JK20sSVkfTZeZCoYlTZf70lkeh4iCOy/7jk4g4jEw6DP9LmKnC1Awc/9DwwaSDGJcD/8xgJESh4vDSYIRXT5VbqmxaqmbqcXnh+xPblxKOWBIp4g9scROpQLl62rDrxVzDMa1wXjZUVbfe2KV339ajQX6bBgeiev9XIrpl/VJttWZshLbqwQvRt8Ky/nqD5LJUC5aVMSWzrNnye+loy93zPbN5XYRdd1i+eotiusOk3ioiIhx637DnkMNrp2sZ2+7UXnKSzBfX1+3F+7rD8S+sX8JPtgX4LOGWn3rxofFORvt6ORuNsLwXHtjss3UgSt+yULzd6W75r1RVb702RkSVDoRAm09lgFBGKaIcPltq2ZNtxWD3lLJVQnzHiTJSyuNeEwWtUqcWBK0GBOct50U5KAFDHzmlXEGBFqhaS9ZWCQTW7f80bmUc5jmn+t4Ep78xxbhaClKvba6wQFXV62OR+OPRzsRaK4QCRS1MPHEOY/OznQAR7FQJFfBU2KiGdWJYF/PirZ7uWooHVdXP9HfiBNVadikoilWo54DMaZRarSf/IQlcl8HR3JXbSQCsGIJ5JbANZlU1oLSz3+q9j7YojsZmm+Nydof/+Ta3iP8H/Bt1B7MAa2iMhQAAAABJRU5ErkJggg==" alt="" draggable="false">`,
  2: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFp0lEQVR4nO2Xa2yTZRTHf8/7dky2wmRj3UVwN4UxVCZ3gohlGFkkiIhBjUiUSMCEgEYToyYmGmI08ZNo/GDUGC9oRCLGG1EanYh44+4GG2UTxsoYW3fpurbv+xw/dIUCW6UFSUz2T9r06dPznH//55znnBeGMIQhDGEIQ7gUqFQNRUSScqRUSr4cqRiJiOQVlsWt9XlkjAu+ExFJheS/Ggyk1LT5S4iEgrR46ymumIRSgnEOQYUW+l9Rc8NQ7Nq2+UIC/0I6oYIiIs6R2e7YOiMzyzNh5nwmTJ+HoaBh7/PuyjkLPOkOSIt3oyCiIWSBpcGKhAn1BZm7eCW1uzz0BvzueB+JSA66ISIy+44llFZUEghFVTj0xw+UT5+H2DY9/jZ83oPcPOs2QhZE9FmhlVKICFoLthUGpVDKwDBMDv/5I+OmzMVQiuEOaKzbw0/ffjaokgMqKCLiKiihfMpM5i9ezrG2bkSguWE/NZ++zapXPiB7tIsnqsvYtKMRfwiCkXP/ta1tLFvoC3QB0N3eynsvPEbppKlMnnc3hlJcM9rJWy8fwFVYOqiSCUMctgVft83r6+/FtsI8/OLbBHtewjQUmekmm3Y0AmAgOIzY2dKvooEWQQFa24horhlXwdyla3ht7V24istY/uybROzEl4GRcFMpHA4TgF0/fMnq6omkm9Hk7w1Z3De7uF8yhcSoxfxJNNQohWGYKBQZabC6eiKfb9mEAtIcJkopVIJavahrJvfaIlyFYxmekcmw9DSsSIhwOBzjASJniAnREMeKX0QQbaNFc1X6MIoKRpNpWphpw86cLwyu4qAEo0luE+juYsVzb1K18F5+3v4VNdu+4Jb5CykYN5mNGSvJyVCMSFdc5QB/KM4ejWVpRNv8+f1ntDfu48dvt4IIdy5byYNPb6S7qxPbthOKM2CIlVLqlK8RKxRkx+fv0BfspWLOItase5LOjnYAbC2EbaEnHL1KzsoJlq0JRyzCwcDZ0AOn21pZs/4pKquWEuzt4eet76IjfbSe8A5axQkvSRGRzBGj3NNuX+pxXp1NfvF4zPZDfLN1izt95GiKJ0z1LFjxOOmOaL4GI9GiCPYFsSJhbMvi922fUL+7xh3uaeeOhUs8dvb1HNn3K9q2+P27ze5Ad4cnpXswnmTsc+WcaqoeWMf2j16juaEWgMLrypnsvpuiiimISLSLaE1T7R/s3r4Fn7cegDHjJnDr0tV4Pn6DPTVfnSVwKZ0k/gARkeb6Orz7duI72gAChmlyor6OrJydBAOd5BWVA+BrrKPF+xctRw5hGCZaNH29ARoP/saJhrqLInbRBOOJxoYEEQEFvuP1uApL6Th5DMMwudo1BtuyaDlaS7vvb0Dha24gr7CMU8ebaDv+Pq0tg+fbJRGMJ3n+etm6DSgzDe++X9y3Llnp6e06zajcAvbv/G5Am2R8XjKibbFUZlQtkg9rvPLq116Zs+ghyc0vkWRnxoGQ0jx4PkpvvJmCouuwRGHbFs5RuZTcUHk5jk7c6gaDxCE3v5jyGbcza/GjnAoIPV1+pi+4n/HTq8jNLz7z2ytGUEQkw5nlznBmuV0FpdyzbgNoi43r73Kf9B6gr72ZztbjOLNyWLjqGVyFZWQ4s9ypkkw6YWOqGaaDvKIStE7cqk43N6NtC9u2aDvZlHSRpJSDY4vGUnHTFG6ZV01bqw/TjE489PtWKARBa42/vY3DB/fSdLQ+FVepEdRaY1kWwWAvWmuunTSbsDjOiUcwZOGv/Ymuzg5C4T5IMLFcNoIiIiNG5rgfWfuUx5VXiMM0AcHf0oQdl85KQcQSRIQ0xzBKysaTlz8G58gcd7JPd0nlg4hIdu6Y6JDZ70Mk+hab6WLhjQ2h8bOeiNDR1vzfdZKYk/hn3oTFGdvr5+M/3ZJ0kaRUxcnanHF2pdvcEP4P+AfcW8aZp2JmUAAAAABJRU5ErkJggg==" alt="" draggable="false">`,
  3: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFkElEQVR4nO2XXWwUVRTHf3d26fZrd2X7ZWmhtOWjUAFFwGAUXfErmBiVgDGSoEKM0RA1+kyMiT4ZEmJMiEZNTNQHvyIPPkjC4idVaaIClqZNodhSuuza7ra7292ZuceH6ZZtbVd2UROT/l9m7tw59/znf8659wzMYx7zmMc85nE1UMUaiogU5Eipony5izESEWmt8U2N9Yx5Y5ZnIiLFkPxbg9mU2nZDE0nTZiA8xorFAVAuUEbOqgpEg7ZAT5obBl909v2VwN+QzqugiEigojSYHfvLS0LB1deytb0elItXP+sM3re+OYTHi7g90/hhpiE9htgmpmWRSFvs3rKCb7ouMprMBHN95CM554SIyLZNbdywbBE6OQoiHOu6yJ3t9VhaiIxnOHUhTnB9G2QSiJXOVQURQbTGtDUKMJTCUPDVmWFuX1WHMlxQ6uPnvot88UPXnErOqqCISHONj+uXN7D77o3EB3tAbE4OjPD+t728+9St1AX8tD3/AT0fvgzxIUiNXv5epbBtG22ZxCcsAMKxFM+918F1TVVs39iEMlx461t58dBhWmp8cyqZP8TmBFa4h0dfP0rG1hx64mZeOXwS5XLjKvc75BBEuVAuDygQcQgaykJpG3DSUAu0XOvnma0r2XEwRENVJW8+oaYpPxuMfJNKKdzuEgCOftfB2icPQEkZ2DZWcozlj+wHlJNzyCQ7nKs49k54J/OyzM/aJw/wwaeHHXUWLEApg3xlcgXbjFAXqKB20WLKyitY4CklY2syZmZqfnqdC+DkIAgCaC1ogRKPh7rmNlwV17DA7bpskWdHnZOgiGBrIZZI8dbeW9i2ZROhE6c50vErWzetYUNjOWVv7EEFlqC8NVDqhdiFKXuNYFs2WuDjn/r55ZLNkeO/gAg7793CocdvZnQsiWXbeeWZNcRKKXUuMkbKFN7+qpfkRIYH1tWyb8+jxEb+cJSxLSSTgvEImBOTyjlSaNvEymRIpC1nP5xENBJm395d7LyxgbFUmne+7iWtFX2X4nNWcd5NUkRkYYUn+OCGpSFveQlti/x0SyOHvwwFq0sVG5urQs9uWwueSpRhIKkYoEhOpDEtG8vWfNhxjo7ecDCaVtx/122hlWqQzr4Ipi183nkuOJJIh4raB3NJZu9vb2/k+XtXcfDLbs5dHAWgqc7P9g1L2NBSPamWk38/nY3yyYnzDITjADQvCvD0Hct4/cgZQqcGLhO4mpMkdwERkf7hGMd7Iwxecpy6DEX/cIzve8PEUiar6r0AdA3FOT04yvlwHJdSaBHGU2l+7PuD/uH4FRG7YoK5RLNNQlbSnuEYLTU+fo8mcSmDxQvLMG3Nb4MxzkeTKKA3HKO11kd4JMFHx3vz5ttVEcwlOXO8f8dNlBjCibOR4GO3rQxFExnqA5W81jU4q00hPq8aIiIt1V65e/1y6X7/Jek+8LDs3LxMmqu9UmjPOBuK6gdnoq2pluUNC1F2GtPW1PhKaVtS/U8snf+omwuSg6XVXu5pr+WpW5cgkT5i40l2bV7KXavrWFrtnXr3PyMoIuIv9wT95Z5gS42P/dvXY+HmgYPHgieHkgwkXfw+kiZQ4eGF+9bQWuPDX+4JFkuy4ITNquY2DOqrvdj2zOZ+OqKxJJbWWLamPzpecJEUlYPNtdewqbWe+29sZWgkgcvl+Mx6zjasthYiYyk6zw7TPTRSjKviCGoBS2sSaRNbNO3r1uA2k9PeMVPjnOoJEx2fYMK0KTYNCyIoIlJVWRrc/9DmUEPACTPA8IUwhjanf4SVQRBK3AarG6tYXOWlqrI0WOjfXUH5ICLSuLDCaUSzljLZx0wqlA1vlkOucgIMjiT+vZMk60TrXKczQpfTVWdvs3SGRpMFF0lRVVyozZSz//qYm8f/AX8CAfK8OZcwW6UAAAAASUVORK5CYII=" alt="" draggable="false">`
};
const STORAGE_KEY = 'beyblade-x-tournament-v1';

/* =========================================================
   BRACKET COLOR THEME (顏色主題) — purely a local display
   preference (not synced between devices, like zoom level),
   lets each viewer pick their favorite highlight color for
   the winner slots in the knockout bracket tree.
========================================================= */
const BRACKET_THEMES = {
  cyan:      { label:'霓虹青', hex:'#00e5ff', rgb:'0,229,255',   oppositeRgb:'255,82,45'  },
  violet:    { label:'紫羅蘭', hex:'#a855f7', rgb:'168,85,247', oppositeRgb:'139,255,47' },
  amber:     { label:'琥珀橙', hex:'#ffa726', rgb:'255,167,38', oppositeRgb:'22,119,255' },
  rose:      { label:'玫瑰粉', hex:'#ec4899', rgb:'236,72,153', oppositeRgb:'45,230,157'},
  clawgreen: { label:'魔爪綠', hex:'#7cff00', rgb:'124,255,0',  oppositeRgb:'196,60,255' }
};
const BRACKET_THEME_KEY = 'beyblade-x-bracket-theme';
const BRACKET_THEME_DEFAULT = 'amber';

function populateThemeSelect(){
  const list = document.getElementById('bracketThemeList');
  if(!list) return;
  list.innerHTML = Object.entries(BRACKET_THEMES).map(([key, t]) => `
    <li class="theme-dropdown-option" role="option" tabindex="0" data-key="${key}">
      <span class="theme-dropdown-dot" style="background:${t.hex};"></span>
      <span style="color:${t.hex};">${t.label}</span>
      <span class="theme-dropdown-check">${icon('check',12)}</span>
    </li>
  `).join('');
}

function toggleThemeDropdown(forceOpen){
  const btn = document.getElementById('bracketThemeBtn');
  const list = document.getElementById('bracketThemeList');
  if(!btn || !list) return;
  const willOpen = forceOpen !== undefined ? forceOpen : list.classList.contains('hidden');
  list.classList.toggle('hidden', !willOpen);
  btn.setAttribute('aria-expanded', String(willOpen));
}

function bindBracketThemeControls(){
  const btn = document.getElementById('bracketThemeBtn');
  const list = document.getElementById('bracketThemeList');
  if(!btn || !list || btn.dataset.themeBound) return;
  btn.dataset.themeBound = 'true';
  btn.addEventListener('click', e => {
    e.stopPropagation();
    toggleThemeDropdown();
  });
  list.addEventListener('click', e => {
    const option = e.target.closest('[data-key]');
    if(option && list.contains(option)) selectBracketTheme(option.dataset.key);
  });
  list.addEventListener('keydown', e => {
    if(e.key !== 'Enter' && e.key !== ' ') return;
    const option = e.target.closest('[data-key]');
    if(!option) return;
    e.preventDefault();
    selectBracketTheme(option.dataset.key);
    btn.focus();
  });
}

function closeThemeDropdownOnOutsideClick(e){
  const wrap = document.getElementById('bracketThemeDropdown');
  if(wrap && !wrap.contains(e.target)) toggleThemeDropdown(false);
}
document.addEventListener('click', closeThemeDropdownOnOutsideClick);
document.addEventListener('click', (e) => {
  const more = document.getElementById('bracketMoreMenu');
  if(more && more.open && !more.contains(e.target)) more.removeAttribute('open');
});

function selectBracketTheme(key){
  applyBracketTheme(key, true);
  toggleThemeDropdown(false);
  const more = document.getElementById('bracketMoreMenu');
  if(more) more.removeAttribute('open');
}

function applyBracketTheme(key, persist){
  const finalKey = BRACKET_THEMES[key] ? key : BRACKET_THEME_DEFAULT;
  const t = BRACKET_THEMES[finalKey];
  document.documentElement.style.setProperty('--theme-rgb', t.rgb);
  document.documentElement.style.setProperty('--theme-opposite-rgb', t.oppositeRgb);
  // Shared UI palette. The original amber values are kept exactly; other
  // themes retain each surface's brightness while adopting the selected hue.
  const palette = {"181613":"24,22,19","5b472d":"91,71,45","8e693b":"142,105,59","ffd08a":"255,208,138","211c15":"33,28,21","e9bb68":"233,187,104","251b10":"37,27,16","b17f3e":"177,127,62","675134":"103,81,52","241b0d":"36,27,13","bc853c":"188,133,60","ff9f24": "255,159,36", "ffa726": "255,167,38", "ffda91": "255,218,145", "ffd34d": "255,211,77", "ffc23d": "255,194,61", "ffae41": "255,174,65", "ffc26c": "255,194,108", "ffba62": "255,186,98", "ffc37b": "255,195,123", "ffdc8d": "255,220,141", "ffe0a2": "255,224,162", "ffe5a6": "255,229,166", "ffb743": "255,183,67", "ffe4a1": "255,228,161", "d87917": "216,121,23", "94520b": "148,82,11", "926c3b": "146,108,59", "996323": "153,99,35", "40372b": "64,55,43", "493b28": "73,59,40", "4b3c27": "75,60,39", "57432b": "87,67,43", "51422e": "81,66,46", "58422b": "88,66,43", "1c1b19": "28,27,25", "201c16": "32,28,22", "211b13": "33,27,19", "181715": "24,23,21", "302214": "48,34,20", "4c3213": "76,50,19", "251e14": "37,30,20", "171612": "23,22,18", "29241e": "41,36,30"};
  const accent = t.rgb.split(',').map(Number);
  const max = Math.max(...accent), min = Math.min(...accent);
  const chroma = max - min;
  let hue = !chroma ? 0 : max === accent[0] ? ((accent[1]-accent[2])/chroma+6)%6
    : max === accent[1] ? (accent[2]-accent[0])/chroma+2 : (accent[0]-accent[1])/chroma+4;
  hue *= 60;
  const root = document.documentElement;
  Object.entries(palette).forEach(([key, value]) => {
    const channels = value.split(',').map(v => Number(v)/255);
    const hi = Math.max(...channels), lo = Math.min(...channels), originalLight = (hi+lo)/2;
    const light = originalLight > .5 ? Math.max(.70,originalLight) : originalLight;
    const sat = hi === lo ? 0 : (hi-lo)/(1-Math.abs(2*originalLight-1));
    const c = (1-Math.abs(2*light-1))*Math.min(sat,.85);
    const x = c*(1-Math.abs((hue/60)%2-1)), m = light-c/2;
    const parts = hue<60 ? [c,x,0] : hue<120 ? [x,c,0] : hue<180 ? [0,c,x]
      : hue<240 ? [0,x,c] : hue<300 ? [x,0,c] : [c,0,x];
    root.style.setProperty('--ui-'+key, finalKey==='amber' ? value : parts.map(v=>Math.round((v+m)*255)).join(','));
  });
  root.style.setProperty('--gaming-glow',finalKey==='amber'?'255,159,36':t.rgb);
  root.dataset.colorTheme = finalKey;


  const dot = document.getElementById('bracketThemeBtnDot');
  const label = document.getElementById('bracketThemeBtnLabel');
  if(dot) dot.style.background = t.hex;
  if(label){ label.textContent = '主題'; label.style.color = ''; }
  const themeButton = document.getElementById('bracketThemeBtn');
  if(themeButton){ themeButton.setAttribute('aria-label', '網站主題，目前：'+t.label); themeButton.title = '網站主題：'+t.label; }

  const list = document.getElementById('bracketThemeList');
  if(list){
    list.querySelectorAll('.theme-dropdown-option').forEach(li =>
      li.classList.toggle('selected', li.dataset.key === finalKey)
    );
  }

  if(persist){
    try{ localStorage.setItem(BRACKET_THEME_KEY, finalKey); }catch(e){}
  }
}

function setBracketTheme(key){
  applyBracketTheme(key, true);
}

function initBracketTheme(){
  populateThemeSelect();
  bindBracketThemeControls();
  let saved = BRACKET_THEME_DEFAULT;
  try{ saved = localStorage.getItem(BRACKET_THEME_KEY) || BRACKET_THEME_DEFAULT; }catch(e){}
  applyBracketTheme(saved, false);
}

/* =========================================================
   STATE
========================================================= */
const DEFAULT_TOURNAMENT_NAME = 'Beyblade X 比賽';
let state = {
  tournament:{ name:DEFAULT_TOURNAMENT_NAME, pointsToWin:4, format:'knockout', quickMode:true, status:'registration' },
  players:[],
  teams:[],
  matches:[],
  currentRound:1
};

let saveTimer = null;

// Perf: when the referee panel is the active tab, scoring taps shouldn't force
// a full rebuild of the standings/bracket/match-list DOM (they're hidden anyway,
// and rebuilding them just to throw the result away caused visible jank). Instead
// we mark them "dirty" and only actually re-render once the user switches to
// that tab. See refreshAfterScoreChange() / switchTab().
let standingsDirty = false;
let matchesDirty = false;
let playerSetupExpanded = false; // 開賽後「參賽玩家」預設收合成摘要，展開後可編輯名單重新產生賽程
let attendanceManagerOpen = false; // 選用：不開啟點名也可直接開賽
let attendancePendingCursor = -1; // 連續跳轉到下一位未標記選手

/* =========================================================
   ICONS — single consistent Lucide-style line-icon set, used
   everywhere instead of mixed emoji, so every icon in the app
   shares one visual language (24x24 viewBox, 2px stroke, round
   caps/joins). Call icon('name') to get a ready <svg> string.
========================================================= */
const ICONS = {
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  swords: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>',
  'git-branch': '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  gavel: '<path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  toolbox: '<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M22 12H2"/><path d="M10 12v2h4v-2"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'share-2': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  sync: '<path d="M20 7a8 8 0 0 0-14-2L3 8"/><path d="M3 3v5h5"/><path d="M4 17a8 8 0 0 0 14 2l3-3"/><path d="M21 21v-5h-5"/>',
  shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  'edit-3': '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  'clipboard-check': '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13"/><path d="M3 12h18"/><path d="M7.5 8C5 8 4 6.7 4 5.4A2.4 2.4 0 0 1 6.5 3C9.3 3 12 8 12 8"/><path d="M16.5 8C19 8 20 6.7 20 5.4A2.4 2.4 0 0 0 17.5 3C14.7 3 12 8 12 8"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  'user-check': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
  'user-x': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8 5 5"/><path d="m22 8-5 5"/>',
  'trash-2': '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19.1"/>',
  link: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>',
  'qr-code': '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  medal: '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>'
};
function icon(name, size){
  const px = size || 16;
  return `<svg class="btn-icon" width="${px}" height="${px}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
}
// Fills icon + label together for static buttons/spans whose text must
// stay in the HTML (so it still reads fine before JS runs / for search-in-page).
function setIconLabel(id, name, label, size){
  const el = document.getElementById(id);
  if(el) el.innerHTML = `${icon(name, size || 16)} ${label}`;
}

/* =========================================================
   ADD TO HOME SCREEN / PWA INSTALL
========================================================= */
let deferredInstallPrompt = null;

function isPWAStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function isIOSDevice(){
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function updatePWAInstallButton(){
  const btn = document.getElementById('pwaInstallBtn');
  const label = document.getElementById('pwaInstallLabel');
  if(!btn || !label) return;
  btn.classList.toggle('hidden', isPWAStandalone());
  label.textContent = deferredInstallPrompt ? '安裝 APP' : '加入主畫面';
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updatePWAInstallButton();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  updatePWAInstallButton();
  showToast('已安裝到手機主畫面');
});

function showPWAInstallGuide(platform){
  const isApple = platform === 'apple';
  const deviceName = isApple ? 'iPhone／iPad' : 'Android 手機／平板';
  const steps = isApple
    ? [
        '使用 <strong>Safari</strong> 開啟賽事系統',
        '點擊工具列的 <strong>「分享」按鈕</strong>',
        '選擇 <strong>「加入主畫面」</strong>',
        '確認名稱與 X 圖示後，點擊 <strong>「新增」</strong>'
      ]
    : [
        '使用 <strong>Chrome</strong> 開啟賽事系統',
        '點擊右上角 <strong>「⋮」</strong>',
        '選擇 <strong>「安裝應用程式」</strong> 或 <strong>「加到主畫面」</strong>',
        '點擊 <strong>「安裝」或「新增」</strong> 即可完成'
      ];
  const warning = isApple
    ? '若沒有出現「加入主畫面」，請確認目前使用 Safari，並透過 HTTPS 網址開啟。'
    : '若沒有出現安裝選項，請確認網站是透過 HTTPS 網址開啟。';

  showModal('', [{label:'知道了',className:'btn-primary'}], '將賽事系統加入主畫面');
  const message = document.getElementById('customModalMessage');
  message.innerHTML = `
    <div class="install-guide">
      <p class="install-guide-intro">把賽事系統加入手機主畫面後，<strong>下次不用再找網址</strong>。<br>直接點擊主畫面的 <strong>X 圖示</strong>，就能像開啟 APP 一樣快速進入賽事系統。</p>
      <h4 class="install-guide-device">${deviceName}</h4>
      <ol class="install-guide-steps">${steps.map(step => `<li>${step}</li>`).join('')}</ol>
      <p class="install-guide-complete">完成後，主畫面會出現 <strong>X 圖示</strong>，之後直接點擊即可開啟。</p>
      <p class="install-guide-warn">${warning}</p>
    </div>`;
  message.scrollTop = 0;
}

async function requestPWAInstall(){
  if(isPWAStandalone()){
    showToast('目前已從手機主畫面開啟');
    return;
  }

  if(deferredInstallPrompt){
    const promptEvent = deferredInstallPrompt;
    deferredInstallPrompt = null;
    promptEvent.prompt();
    try{ await promptEvent.userChoice; }catch(e){}
    updatePWAInstallButton();
    return;
  }

  if(isIOSDevice()){
    showPWAInstallGuide('apple');
    return;
  }

  showPWAInstallGuide('android');
}

function initPWAInstall(){
  updatePWAInstallButton();
  window.matchMedia('(display-mode: standalone)').addEventListener?.('change', updatePWAInstallButton);
}

/* =========================================================
   APP UPDATE — network version check + hidden title long-press
   Only the HTML bundle is refreshed; user data stores are untouched.
========================================================= */
const APP_VERSION = document.querySelector('meta[name="app-version"]')?.content || 'V0';
let latestAppVersion = '';
let appUpdateCheckRunning = false;
let lastAppUpdateCheckAt = 0;

function versionNumbers(version){
  return String(version || '').match(/\d+/g)?.map(Number) || [0];
}

function isNewerAppVersion(candidate, current){
  const next = versionNumbers(candidate);
  const now = versionNumbers(current);
  const length = Math.max(next.length, now.length);
  for(let i = 0; i < length; i++){
    const difference = (next[i] || 0) - (now[i] || 0);
    if(difference !== 0) return difference > 0;
  }
  return false;
}

function appBundleUrl(parameterName){
  const url = new URL(window.location.href);
  url.hash = '';
  url.searchParams.delete('__version_check');
  url.searchParams.delete('__app_refresh');
  url.searchParams.set(parameterName, Date.now().toString());
  return url;
}

function appVersionUrl(){
  const url = new URL('version.json', window.location.href);
  // One shared URL per five-minute window keeps repeated spectators from
  // generating a unique cache entry for every phone and every tab return.
  url.searchParams.set('check', String(Math.floor(Date.now() / 300000)));
  return url;
}

function setAppUpdateBanner(version){
  const banner = document.getElementById('appUpdateBanner');
  if(!banner) return;
  latestAppVersion = version || '';
  if(!latestAppVersion){
    banner.classList.remove('show');
    banner.textContent = '';
    return;
  }
  banner.textContent = `${latestAppVersion} 新版本可用・點擊更新`;
  banner.setAttribute('aria-label', `${latestAppVersion} 新版本可用，點擊更新`);
  banner.classList.add('show');
}

async function fetchLatestAppVersion(){
  const response = await fetch(appVersionUrl(), {
    cache:'no-store',
    credentials:'same-origin'
  });
  if(!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  const version = String(data?.version || '').trim();
  if(!/^V\d+(?:\.\d+)*$/.test(version)) throw new Error('無效的版本資訊');
  return version;
}

async function checkForAppUpdate(options = {}){
  const force = options.force === true;
  const notify = options.notify === true;
  const now = Date.now();
  if(!/^https?:$/.test(window.location.protocol)) return false;
  if(appUpdateCheckRunning || (!force && now - lastAppUpdateCheckAt < 300000)) return false;
  appUpdateCheckRunning = true;
  lastAppUpdateCheckAt = now;
  try{
    const version = await fetchLatestAppVersion();
    if(version && isNewerAppVersion(version, APP_VERSION)){
      setAppUpdateBanner(version);
      if(notify) showToast(`${version} 新版本可用`);
      return true;
    }
    setAppUpdateBanner('');
    if(notify) showToast(`目前已是最新版本 ${APP_VERSION}`);
    return false;
  }catch(error){
    console.warn('版本檢查失敗，保留目前頁面', error);
    if(notify) showToast('目前無法檢查更新，請確認網路連線');
    return false;
  }finally{
    appUpdateCheckRunning = false;
  }
}

async function applyLatestAppUpdate(){
  if(appUpdateCheckRunning) return;
  if(!/^https?:$/.test(window.location.protocol)){
    showToast('請開啟線上網站取得最新版本');
    return;
  }
  appUpdateCheckRunning = true;
  showToast('正在取得最新版本…');
  try{
    await fetchLatestAppVersion();
    const target = appBundleUrl('__app_refresh');
    setTimeout(() => window.location.replace(target.href), 220);
  }catch(error){
    console.warn('強制更新失敗，保留目前頁面', error);
    showToast('更新失敗，請確認網路連線後再試');
    appUpdateCheckRunning = false;
  }
}

function initHeaderUpdateShortcut(){
  const title = document.getElementById('headerTName');
  const copy = title?.closest('.identity-copy');
  if(!title || !copy) return;
  title.setAttribute('aria-label', '賽事名稱；長按一秒可強制取得最新版本');

  let holdTimer = null;
  let startX = 0;
  let startY = 0;
  let longPressTriggered = false;

  const cancelHold = () => {
    clearTimeout(holdTimer);
    holdTimer = null;
    copy.classList.remove('is-update-holding');
  };

  title.addEventListener('pointerdown', event => {
    if(event.pointerType === 'mouse' && event.button !== 0) return;
    startX = event.clientX;
    startY = event.clientY;
    longPressTriggered = false;
    copy.classList.remove('is-update-holding');
    void copy.offsetWidth;
    copy.classList.add('is-update-holding');
    holdTimer = setTimeout(() => {
      holdTimer = null;
      longPressTriggered = true;
      copy.classList.remove('is-update-holding');
      navigator.vibrate?.(35);
      applyLatestAppUpdate();
    }, 1000);
  });

  title.addEventListener('pointermove', event => {
    if(Math.hypot(event.clientX - startX, event.clientY - startY) > 12) cancelHold();
  });
  ['pointerup','pointercancel','pointerleave'].forEach(type => title.addEventListener(type, cancelHold));
  title.addEventListener('contextmenu', event => {
    if(holdTimer || longPressTriggered) event.preventDefault();
  });
  title.addEventListener('click', event => {
    if(longPressTriggered){
      event.preventDefault();
      longPressTriggered = false;
    }
  });
}

function initAppUpdateChecks(){
  initHeaderUpdateShortcut();
  setTimeout(() => checkForAppUpdate(), 1200);
  window.addEventListener('pageshow', () => checkForAppUpdate());
  document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') checkForAppUpdate();
  });
}

/* =========================================================
   MOBILE TOUCH FEEDBACK
========================================================= */
let mobileTouchPressedButton = null;
function clearMobileTouchPress(){
  if(mobileTouchPressedButton) mobileTouchPressedButton.classList.remove('mobile-touch-pressed');
  mobileTouchPressedButton = null;
}
function initMobileTapFeedback(){
  if(initMobileTapFeedback.initialized) return;
  initMobileTapFeedback.initialized = true;
  document.addEventListener('pointerdown', event => {
    if(event.pointerType === 'mouse') return;
    const button = event.target?.closest?.('button:not(:disabled), [role="button"]:not([aria-disabled="true"])');
    if(!button || button.disabled || button.getAttribute('aria-disabled') === 'true') return;
    clearMobileTouchPress();
    mobileTouchPressedButton = button;
    button.classList.add('mobile-touch-pressed');
  }, {passive:true});
  document.addEventListener('pointerup', clearMobileTouchPress, true);
  document.addEventListener('pointercancel', clearMobileTouchPress, true);
  window.addEventListener('blur', clearMobileTouchPress);
}
function mobileHapticFeedback(kind='score'){
  if(typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return;
  if(typeof window.matchMedia === 'function' && !window.matchMedia('(pointer: coarse)').matches) return;
  const patterns = { score:12, win:[18,26,18], undo:16, reset:22 };
  try{ navigator.vibrate(patterns[kind] ?? 10); }catch(e){}
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener('DOMContentLoaded', async () => {
  initMobileTapFeedback();
  initPWAInstall();
  initAppUpdateChecks();
  createPlayerInputs(2);
  loadRefereePanels();
  loadMasterMode();
  await loadLocalCache();
  loadRefereeViewMode();
  renderAll();
  initCloud();
  initBracketPanZoom();
  initBracketTheme();
  initStaticIcons();
  initDrawTool();
  initPrizeDraw();
});

// Fills in the icons for elements that exist as static markup (tabs,
// header buttons, search box) rather than being built by a render
// function — keeps the icon set defined in one place (ICONS above)
// instead of duplicating SVG strings inline in the HTML.
function initStaticIcons(){
  const map = {
    tabIconStandings: 'swords',
    tabIconMatches: 'file-text',
    tabIconReferee: 'gavel',
    tabIconSetup: 'settings',
    tabIconTools: 'toolbox',
    toolboxHeadingIcon: 'toolbox',
    drawClearIcon: 'trash-2',
    drawActionIcon: 'shuffle',
    drawResultIcon: 'user',
    drawCopyIcon: 'copy',
    prizeHeadingIcon: 'gift',
    prizeResetIcon: 'rotate-ccw',
    prizeDrawIcon: 'shuffle',
    prizeResultIcon: 'user',
    cloudStatusIcon: 'sync',
    awardReportIcon: 'share-2',
    bracketSearchIconSlot: 'search',
    bracketSearchClearIcon: 'x',
    matchSearchIconSlot: 'search',
    matchSearchClearIcon: 'x',
    attendanceSearchIcon: 'search',
    actionToastIcon: 'check-circle',
    cloudModalIcon: 'radio',
    cloudCreatedIcon: 'check-circle',
    qrModalIcon: 'qr-code',
    awardModalIcon: 'trophy',
    archiveEventIcon: 'cloud',
    archiveLibraryIcon: 'clock',
    archiveHeadingIcon: 'clock',
    archiveImportIcon: 'download',
    archiveModalIcon: 'clock',
    archiveDetailIcon: 'medal',
    archiveSignInIcon: 'user',
    archiveAutoSaveIcon: 'cloud'
  };
  Object.entries(map).forEach(([id, name]) => {
    const el = document.getElementById(id);
    if(el) el.innerHTML = icon(name, 16);
  });

  // Buttons/spans whose visible text must stay alongside the icon.
  setIconLabel('shuffleScheduleBtn', 'shuffle', '重新抽籤對戰');
  setIconLabel('bracketZoomHint', 'lightbulb', '可用手指縮放、左右滑動查看對戰樹', 14);
  setIconLabel('playerSetupSummaryAction', 'edit-3', '編輯名單', 14);
  setIconLabel('cloudResultRefShareBtn', 'link', '複製裁判連結', 14);
  setIconLabel('cloudResultViewerShareBtn', 'link', '複製選手連結', 14);
  setIconLabel('cloudResultQrBtn', 'qr-code', '顯示 QR 碼', 14);
  setIconLabel('qrCopyBtn', 'link', '複製連結', 14);
  setIconLabel('qrSaveBtn', 'download', '儲存圖片', 14);
  setIconLabel('awardDownloadBtn', 'download', '下載圖片', 14);
  const attendanceIcon = document.getElementById('attendanceToggleIcon');
  if(attendanceIcon) attendanceIcon.innerHTML = icon('clipboard-check', 18);
  const attendanceArrow = document.getElementById('attendanceToggleArrow');
  if(attendanceArrow) attendanceArrow.innerHTML = icon('chevron-down', 16);
}

/* =========================================================
   BRACKET TREE — pinch-zoom / drag-to-pan (for players on
   phones to comfortably view a large knockout bracket)
========================================================= */
let bracketZoom = 1;
const BRACKET_ZOOM_MIN = 0.5;
const BRACKET_ZOOM_MAX = 2.2;
const BRACKET_ZOOM_STEP = 0.15;

function applyBracketZoom(){
  const wrap = document.getElementById('bracketZoomWrap');
  const tree = document.getElementById('bracketTree');
  if(wrap){
    wrap.style.transform = `scale(${bracketZoom})`;
    // CSS transform only changes how the box is *painted* — it doesn't
    // shrink the space this inline-block reserves in normal flow, so at
    // any zoom other than 100% the scroll container was left reserving
    // room for the full-size (unscaled) tree, showing as blank space
    // below/right of the visibly smaller content. Sizing the wrapper's
    // real width/height to the scaled size keeps the reserved space (and
    // therefore the page height) matching what's actually drawn.
    // tree.offsetWidth/Height always report the tree's own natural,
    // unscaled size — transforms on this wrap (its ancestor) don't affect
    // a descendant's offset measurements, so this stays accurate at any
    // zoom level without needing a separately cached "natural size".
    if(tree){
      wrap.style.width = (tree.offsetWidth * bracketZoom) + 'px';
      wrap.style.height = (tree.offsetHeight * bracketZoom) + 'px';
    }
  }
  ['bracketZoomLabel','refereeBracketZoomLabel'].forEach(id => {
    const label = document.getElementById(id);
    if(label) label.textContent = Math.round(bracketZoom * 100) + '%';
  });
}
function bracketZoomIn(){
  bracketZoom = Math.min(BRACKET_ZOOM_MAX, +(bracketZoom + BRACKET_ZOOM_STEP).toFixed(2));
  applyBracketZoom();
}
function bracketZoomOut(){
  bracketZoom = Math.max(BRACKET_ZOOM_MIN, +(bracketZoom - BRACKET_ZOOM_STEP).toFixed(2));
  applyBracketZoom();
}
function bracketZoomReset(){
  bracketZoom = 1;
  applyBracketZoom();
  const scroll = document.getElementById('bracketScroll');
  if(scroll) scroll.scrollLeft = 0;
}

function jumpToCurrentBracketMatch(){
  const tree = document.getElementById('bracketTree');
  if(!tree) return;
  let target = tree.querySelector('.bracket-match.is-live') || tree.querySelector('.bracket-match.is-next');
  if(!target){
    const next = nextPlayableMatch();
    if(next) target = tree.querySelector(`.bracket-match[data-match-id="${next.id}"]`);
  }
  if(!target){
    showToast('目前沒有可進行的場次');
    return;
  }
  target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'center', inline:'center'});
  target.classList.remove('search-hit');
  void target.offsetWidth;
  target.classList.add('search-hit');
  setTimeout(() => target.classList.remove('search-hit'), 2000);
}

function initBracketPanZoom(){
  const scroll = document.getElementById('bracketScroll');
  if(!scroll) return;

  applyBracketZoom();
  // The click listener stays attached when this live tree moves into referee mode.
  scroll.addEventListener('click', event => {
    if(!isRefereeBracketInteractive()) return;
    const winnerButton = event.target.closest('.bracket-win-pick');
    if(winnerButton && scroll.contains(winnerButton)){
      selectBracketWinner(winnerButton.dataset.matchId, winnerButton.dataset.side);
      return;
    }
    const statusButton = event.target.closest('.bracket-stage-edit');
    if(statusButton && scroll.contains(statusButton)){
      setBracketMatchStage(statusButton.dataset.matchId, 'live');
      return;
    }
  });

  // --- Mouse drag-to-pan (desktop / trackpad) ---
  let isDown = false, startX = 0, scrollLeftStart = 0, dragged = false;
  scroll.addEventListener('mousedown', (e) => {
    isDown = true; dragged = false;
    scroll.classList.add('dragging');
    startX = e.pageX;
    scrollLeftStart = scroll.scrollLeft;
  });
  window.addEventListener('mouseup', () => { isDown = false; scroll.classList.remove('dragging'); });
  window.addEventListener('mouseleave', () => { isDown = false; scroll.classList.remove('dragging'); });
  scroll.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    const dx = e.pageX - startX;
    if(Math.abs(dx) > 3) dragged = true;
    scroll.scrollLeft = scrollLeftStart - dx;
  });
  // Prevent an accidental click firing right after a drag.
  scroll.addEventListener('click', (e) => {
    if(dragged || touchDragged){ e.preventDefault(); e.stopPropagation(); dragged = false; touchDragged = false; }
  }, true);

  // --- Single-finger touch panning stays native (matches Challonge's feel: the
  // browser's own momentum scroll, both axes — horizontal pans the bracket,
  // vertical passes through to the page). We only watch it to suppress the
  // "ghost click" some in-app browsers (LINE, IG, etc.) fire after a swipe
  // that started on a match card. ---
  let touchStartX = 0, touchStartY = 0, touchDragged = false;
  scroll.addEventListener('touchstart', (e) => {
    if(e.touches.length === 1){
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchDragged = false;
    }
  }, { passive:true });
  scroll.addEventListener('touchmove', (e) => {
    if(e.touches.length === 1){
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;
      if(Math.hypot(dx, dy) > 8) touchDragged = true;
    }
  }, { passive:true });

  // --- Two-finger pinch to zoom (touch) ---
  let pinchStartDist = null, pinchStartZoom = 1;
  function touchDist(touches){
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  scroll.addEventListener('touchstart', (e) => {
    if(e.touches.length === 2){
      pinchStartDist = touchDist(e.touches);
      pinchStartZoom = bracketZoom;
    }
  }, { passive:true });
  scroll.addEventListener('touchmove', (e) => {
    if(e.touches.length === 2 && pinchStartDist){
      e.preventDefault();
      const ratio = touchDist(e.touches) / pinchStartDist;
      bracketZoom = Math.min(BRACKET_ZOOM_MAX, Math.max(BRACKET_ZOOM_MIN, +(pinchStartZoom * ratio).toFixed(2)));
      applyBracketZoom();
    }
  }, { passive:false });
  scroll.addEventListener('touchend', (e) => {
    if(e.touches.length < 2) pinchStartDist = null;
  });

  // --- Ctrl/Cmd + scroll-wheel to zoom (desktop trackpads) ---
  scroll.addEventListener('wheel', (e) => {
    if(e.ctrlKey || e.metaKey){
      e.preventDefault();
      if(e.deltaY < 0) bracketZoomIn(); else bracketZoomOut();
    }
  }, { passive:false });
}

/* =========================================================
   STORAGE — active tournament data is session-only.
   Reloading the same tab keeps the event, but a later visit
   never silently restores an old tournament. Explicit roster
   drafts remain the only opt-in persistent event data.
========================================================= */
const EVENT_CODE_KEY = 'beyblade-x-event-code';
const EVENT_ROLE_KEY = 'beyblade-x-event-role';
const EVENT_VIEWER_KEY = 'beyblade-x-event-viewer-code';
const ROSTER_DRAFT_KEY = 'beyblade-x-roster-draft-v1';
let dirtyMatchIds = new Set();
const cloudMatchBase=new Map(),editBase=new Map();
let cloudRetryTimer = null;
let cloudNeedsFullReplace = false;
let cloudReplaceRevision = 0;
let cloudRetryDelay = 3000;
let cloudUnsynced = false;
let cloudMetaBase = null;
let cloudMetaPending = null;
function stableCloudValue(value){
  if(Array.isArray(value))return value.map(stableCloudValue);
  if(value && Object.getPrototypeOf(value)===Object.prototype){
    return Object.fromEntries(Object.keys(value).sort().filter(key=>value[key]!==undefined)
      .map(key=>[key,stableCloudValue(value[key])]));
  }
  return value;
}
function cloudMetaSignature(data){
  const courts=Number(data.bracketCourtCount);
  return JSON.stringify(stableCloudValue([
    data.name || DEFAULT_TOURNAMENT_NAME,data.pointsToWin,data.format,data.quickMode,
    Number.isInteger(courts) && courts>0 ? courts : null,data.status,
    data.players || [],data.teams || [],data.currentRound
  ]));
}
async function sendCloudMetaIfChanged(eventId,payload,clearCourt){
  // Serialise concurrent score taps so the same meta update is not broadcast twice.
  if(cloudMetaPending?.eventId===eventId)await cloudMetaPending.promise;
  if(eventId!==currentEventCode)return false;
  const signature=cloudMetaSignature(payload);
  if(signature===cloudMetaBase && !clearCourt)return true;
  const pending={eventId,promise:window.cloudSync.pushMeta(payload)};
  cloudMetaPending=pending;
  try{
    await pending.promise;
    if(eventId===currentEventCode){
      cloudMetaBase=signature;
      if(clearCourt)bracketCourtCountClearPending=false;
    }
    return true;
  }finally{
    if(cloudMetaPending===pending)cloudMetaPending=null;
  }
}
function markDirty(id){ if(id){if(!dirtyMatchIds.has(id))editBase.set(id,cloudMatchBase.get(id)||'');dirtyMatchIds.add(id);} }
function markAllDirty(){ state.matches.forEach(m => markDirty(m.id)); }

async function loadLocalCache(){
  // Remove data written persistently by older builds. Display preferences
  // are intentionally left untouched; only event/tool state is cleared.
  try{
    [STORAGE_KEY, EVENT_CODE_KEY, EVENT_ROLE_KEY, EVENT_VIEWER_KEY,
      DRAW_TOOL_STORAGE_KEY, PRIZE_DRAW_STORAGE_KEY, PANELS_KEY]
      .forEach(key => localStorage.removeItem(key));
    const legacyDraft = JSON.parse(localStorage.getItem(ROSTER_DRAFT_KEY) || 'null');
    if(legacyDraft && legacyDraft.consented !== true) localStorage.removeItem(ROSTER_DRAFT_KEY);
  }catch(e){}
  try{
    if(window.storage){
      await window.storage.delete(STORAGE_KEY, false);
    }
  }catch(e){}
  try{
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if(raw) state = Object.assign(state, JSON.parse(raw));
  }catch(e){
    console.log('沒有本次瀏覽的暫存資料，使用預設值。', e);
  }
}

const pendingCloudSaves = new Set();
let cloudSaveTail = Promise.resolve();
let cloudSaveQueued = 0;
async function saveState(silent){
  const json = JSON.stringify(state);
  let localSaved = false;
  try{ sessionStorage.setItem(STORAGE_KEY, json); localSaved = true; }catch(e){}
  const hasCloud = !!(window.cloudSync && window.cloudSync.ready && currentEventCode);
  if(!silent) flashSaved(localSaved ? (hasCloud ? '同步中…' : '本次瀏覽已暫存') : '暫存失敗', localSaved ? (hasCloud ? 'syncing' : '') : 'error', hasCloud ? 0 : 1300);
  const saving = pushToCloud();
  pendingCloudSaves.add(saving);
  let synced;
  try{ synced = await saving; }
  finally{ pendingCloudSaves.delete(saving); }
  if(!silent && hasCloud){
    const waiting=synced && (cloudSaveQueued>0 || dirtyMatchIds.size>0 || cloudNeedsFullReplace);
    flashSaved(waiting?'同步中…':synced?'雲端已同步':'同步失敗，待重試',waiting?'syncing':synced?'synced':'error',waiting?0:synced?1300:2600);
  }
  void maybeAutoArchiveTournament();
  queueMicrotask(maybeOfferNextTournament);
}

let completionOfferKey = null;
function maybeOfferNextTournament(){
  if(currentRole === 'viewer' || state.tournament.status !== 'running') return;
  const active = state.matches.filter(m => !m.inactive && !m.isBye);
  if(!active.length || active.some(m => m.status !== 'completed')){
    completionOfferKey = null;
    return;
  }
  const key = `${currentEventCode || 'local'}:${active.map(m => `${m.id}:${m.completedAt || ''}`).join('|')}`;
  if(completionOfferKey === key || document.getElementById('customModal')?.classList.contains('show')) return;
  completionOfferKey = key;
  showModal('所有場次已完成。可以保留本場賽果，或建立新賽事並產生新的同步代碼。', [
    {label:'結束本場比賽',className:'btn-dark'},
    {label:'再開下一場',className:'btn-primary',action:askNextTournamentRoster}
  ], '比賽完成');
}

function askCreateSeparateEvent(){
  if(cloudConnectionBusy)return;
  document.getElementById('cloudModal').classList.remove('show');
  showModal('新賽事會產生獨立代碼，比分與賽程重新開始。原賽事的名單、比分與對戰紀錄不會被覆蓋。',[
    {label:'返回',className:'btn-dark',action:openCloudModal},
    {label:'使用空白名單',className:'btn-primary',action:()=>{openCloudModal();createNextTournament(true);}},
    {label:'沿用參賽名單',className:'btn-dark',action:()=>{openCloudModal();createNextTournament(false);}}
  ],'建立新賽事');
}
function askNextTournamentRoster(){
  showModal('下一場賽事會產生新的裁判與選手代碼。要沿用這場的選手名單，還是清空後重新輸入？本場賽果仍留在原賽事代碼。', [
    {label:'返回',className:'btn-dark'},
    {label:'清空名單',className:'btn-danger',action:()=>createNextTournament(true)},
    {label:'沿用名單',className:'btn-primary',action:()=>createNextTournament(false)}
  ], '下一場的選手名單');
}

async function createNextTournament(clearRoster){
  if(cloudConnectionBusy)return;
  setCloudConnectionBusy('create');
  try{await createNextTournamentCore(clearRoster);}
  catch(e){document.getElementById('cloudError').innerText=cloudActionError(e,'建立');}
  finally{setCloudConnectionBusy(null);}
}
async function createNextTournamentCore(clearRoster){
  if(!window.cloudSync?.ready){
    openCloudModal(); switchCloudTab('create');
    document.getElementById('cloudError').innerText='目前尚未連上賽事同步，請連線後再建立新賽事。';
    return;
  }
  const nextTeams = clearRoster || state.tournament.format !== 'team3v3' ? [] : (state.teams || []).map(team => ({
    id:team.id, name:team.name,
    members:(team.members || []).map(member => typeof member === 'string' ? {name:member} : {id:member.id,name:member.name})
  }));
  const nextPlayers = clearRoster ? [] : state.tournament.format === 'team3v3'
    ? nextTeams.map(team => ({id:team.id,name:team.name,attendance:'pending'}))
    : state.players.map(p => ({id:p.id,name:p.name,attendance:'pending'}));
  const nextState = {
    tournament:{name:DEFAULT_TOURNAMENT_NAME,pointsToWin:state.tournament.pointsToWin,format:state.tournament.format,
      quickMode:state.tournament.quickMode,status:'registration'},
    players:nextPlayers,teams:nextTeams,matches:[],currentRound:1
  };
  // Finish writes to the previous event before switching the cloud client's code.
  await Promise.allSettled([...pendingCloudSaves]);
  try{await preserveEventBeforeSwitch();}catch{showAlert('本場賽果尚未同步。請確認網路後再開下一場。');return;}
  let refCode, viewerCode;
  try{
    [refCode,viewerCode] = await createEventWithFreshCodes({
      ...nextState.tournament,players:nextPlayers,teams:nextTeams,currentRound:1
    });
  }catch(error){
    console.error('建立下一場賽事失敗',error);
    showAlert('新賽事代碼建立失敗。原本賽事與名單仍保留，請確認網路後重試。');
    return;
  }
  window.cloudSync.leave?.();
  state=nextState;
  // The setup chips are separate DOM state. An empty player array alone does
  // not remove the previous event's chips when loadSetupInputs() runs.
  createPlayerInputs(0);
  if(clearRoster){
    try{ localStorage.removeItem(ROSTER_DRAFT_KEY); }catch(e){}
    rosterDraftEnabled=false;
    rosterDraftSavePrompted=false;
    rosterDraftPrompted=true;
  }
  currentViewerCode=null;
  refereePanels=[{id:genPanelId(),matchId:null,label:''}];
  savePanels();
  bracketCourtPromptShown=false;
  bracketCourtCountClearPending=false;
  playerSetupExpanded=true;
  try{
    sessionStorage.setItem(EVENT_CODE_KEY,refCode);
    sessionStorage.setItem(EVENT_ROLE_KEY,'referee');
    sessionStorage.setItem(EVENT_VIEWER_KEY,viewerCode);
  }catch(e){}
  joinCloudEvent(refCode,'referee',viewerCode);
  saveState(true);
  switchTab('setup');
  setCloudConnectionBusy(null);
  openCloudModal();
  switchCloudTab('create');
  document.getElementById('cloudNewName').value='';
  document.getElementById('cloudResultRefCode').innerText=refCode;
  document.getElementById('cloudResultViewerCode').innerText=viewerCode;
  document.getElementById('cloudCreatedResult').classList.remove('hidden');
  document.getElementById('cloudCreateBtn').classList.add('hidden');
  document.getElementById('cloudCurrent').classList.add('hidden');
  showToast(clearRoster ? '新賽事已建立，請輸入參賽者' : '新賽事已建立，已沿用選手名單');
}

// Keep match writes in tap order. Each job reads the latest local state only
// when the previous transaction has finished, so rapid taps cannot both use
// the same old score as their transaction base.
function pushToCloud(){
  cloudSaveQueued++;
  const saving = cloudSaveTail.catch(() => {}).then(pushToCloudOnce).finally(() => {
    cloudSaveQueued--;
    updateCloudStatusUI();
  });
  cloudSaveTail = saving;
  return saving;
}

async function pushToCloudOnce(){
  if(currentRole==='viewer')return false;
  if(!(window.cloudSync && window.cloudSync.ready && currentEventCode)) return false;
  const eventId=currentEventCode;
  const fullReplace = cloudNeedsFullReplace;
  const replaceRevision = cloudReplaceRevision;
  const outbound = fullReplace ? state.matches : state.matches.filter(m=>dirtyMatchIds.has(m.id));
  const toPush=JSON.parse(JSON.stringify(outbound));
  const ids=toPush.map(m=>m.id);
  const bases=new Map(ids.map(id=>[id,editBase.get(id)||'']));
  const sentSignatures = new Map(toPush.map(m=>[m.id,matchSignature(m)]));
  try{
    // Only send the court count when this device actually has one. An unconfigured
    // device must never wipe the count another referee already set; 0 is the explicit
    // "cleared" marker, sent only after a new tournament / reset on this device.
    const localCourtCount = Number(state.tournament.bracketCourtCount);
    const courtMeta = (Number.isInteger(localCourtCount) && localCourtCount >= 1)
      ? { bracketCourtCount: localCourtCount }
      : (bracketCourtCountClearPending ? { bracketCourtCount: 0 } : {});
    await sendCloudMetaIfChanged(eventId,{
      name: state.tournament.name || DEFAULT_TOURNAMENT_NAME,
      pointsToWin: state.tournament.pointsToWin,
      format: state.tournament.format,
      quickMode: state.tournament.quickMode,
      ...courtMeta,
      status: state.tournament.status,
      players: state.players,
      teams: state.teams || [],
      currentRound: state.currentRound
    },bracketCourtCountClearPending);
    if(eventId!==currentEventCode)return false;
    if(fullReplace) await window.cloudSync.replaceMatches(toPush,eventId);
    else if(toPush.length) await window.cloudSync.pushMatches(toPush,eventId,bases);
    if(eventId!==currentEventCode)return false;
    if(fullReplace)cloudMatchBase.clear();
    sentSignatures.forEach((signature,id)=>cloudMatchBase.set(id,signature));
    ids.forEach(id => {
      const current = state.matches.find(m => m.id === id);
      if(!current)return;
      const sent=sentSignatures.get(id);
      if(matchSignature(current) === sent){dirtyMatchIds.delete(id);editBase.delete(id);}
      else editBase.set(id,sent); // A newer tap must build on this committed score.
    });
    if(fullReplace && cloudReplaceRevision===replaceRevision)cloudNeedsFullReplace = false;
    if(cloudRetryTimer){ clearTimeout(cloudRetryTimer); cloudRetryTimer = null; }
    cloudRetryDelay=3000;
    cloudUnsynced=dirtyMatchIds.size>0 || cloudNeedsFullReplace;
    updateCloudStatusUI();
    return true;
  }catch(e){
    if(e.code==='bx-conflict' && eventId===currentEventCode){
      try{
        const fresh=await window.cloudSync.reloadMatchChanges(eventId,ids);
        if(eventId===currentEventCode){
          const remote=new Map(fresh.map(({id,match})=>[id,matchSignature(match)]));
          const conflicts=ids.filter(id=>(remote.get(id)||'')!==(bases.get(id)||'') && (remote.get(id)||'')!==sentSignatures.get(id));
          conflicts.forEach(id=>{dirtyMatchIds.delete(id);editBase.delete(id);});
          ids.filter(id=>!conflicts.includes(id) && remote.get(id)===sentSignatures.get(id)).forEach(id=>{
            const current=state.matches.find(m=>m.id===id);
            if(current && matchSignature(current)===remote.get(id)){dirtyMatchIds.delete(id);editBase.delete(id);}
            else editBase.set(id,remote.get(id));
          });
          onCloudMatches(fresh,true);
          cloudUnsynced=dirtyMatchIds.size>0 || cloudNeedsFullReplace;
          updateCloudStatusUI();
          if(conflicts.length)showAlert('其他裁判已更新相同場次；衝突場次改以雲端結果顯示，請核對比分。其他待同步場次會繼續送出。');
          if(dirtyMatchIds.size || cloudNeedsFullReplace)void pushToCloud();
        }
        return false;
      }catch(error){
        e=error;
      }
    }
    if(eventId!==currentEventCode)return false;
    console.error('雲端同步失敗（本機資料仍完整保存）', e);
    cloudUnsynced=true;
    updateCloudStatusUI();
    if(e.code==='resource-exhausted' || e.code==='permission-denied' || e.code==='bx-too-many-matches')return false;
    if(!cloudRetryTimer){
      cloudRetryTimer = setTimeout(() => {
        cloudRetryTimer = null;
        pushToCloud();
      }, cloudRetryDelay);
      cloudRetryDelay=Math.min(60000,cloudRetryDelay*2);
    }
    return false;
  }
}

function flashSaved(message, status, duration){
  const flag = document.getElementById('saveFlag');
  if(!flag) return;
  flag.textContent = message || '本機已保存';
  flag.className = `save-flag show ${status || ''}`.trim();
  flag.classList.add('show');
  clearTimeout(saveTimer);
  if(duration !== 0) saveTimer = setTimeout(()=>flag.classList.remove('show'), duration || 1300);
}

let actionToastTimer;
function showToast(message){
  const toast = document.getElementById('actionToast');
  const msgEl = document.getElementById('actionToastMsg');
  if(!toast || !msgEl) return;
  msgEl.innerText = message;
  toast.classList.add('show');
  clearTimeout(actionToastTimer);
  actionToastTimer = setTimeout(()=>toast.classList.remove('show'), 2200);
}

/* =========================================================
   TOOLBOX — RANDOM NAME DRAW
========================================================= */
const DRAW_TOOL_STORAGE_KEY = 'beybladeX_drawTool_v1';
const PRIZE_DRAW_STORAGE_KEY = 'beybladeX_prizeDraw_v1';
let drawToolResults = [];
let drawAnimationTimer = null;
let drawAnimationFrame = null;
let prizeDrawWinners = [];
let prizeDrawInitialized = false;

function getDrawNames(){
  const input = document.getElementById('drawNamesInput');
  if(!input) return [];
  const seen = new Set();
  return input.value.split(/\r?\n/).map(name => name.trim()).filter(name => {
    if(!name || seen.has(name)) return false;
    seen.add(name);
    return true;
  });
}

function saveDrawTool(){
  const namesInput = document.getElementById('drawNamesInput');
  const countInput = document.getElementById('drawCountInput');
  if(!namesInput || !countInput) return;
  try{
    sessionStorage.setItem(DRAW_TOOL_STORAGE_KEY, JSON.stringify({
      names:namesInput.value,
      count:countInput.value
    }));
  }catch(e){}
}

function initDrawTool(){
  const namesInput = document.getElementById('drawNamesInput');
  const countInput = document.getElementById('drawCountInput');
  if(!namesInput || !countInput) return;
  try{
    const saved = JSON.parse(sessionStorage.getItem(DRAW_TOOL_STORAGE_KEY) || 'null');
    if(saved && typeof saved.names === 'string') namesInput.value = saved.names;
    if(saved && Number(saved.count) >= 1) countInput.value = String(Math.floor(Number(saved.count)));
  }catch(e){}
  updateDrawToolState(false);
}

function resetDrawResults(){
  if(drawAnimationTimer){ window.clearTimeout(drawAnimationTimer); drawAnimationTimer = null; }
  if(drawAnimationFrame !== null){ cancelAnimationFrame(drawAnimationFrame); drawAnimationFrame = null; }
  drawToolResults = [];
  const list = document.getElementById('drawResultList');
  const empty = document.getElementById('drawResultEmpty');
  const copyBtn = document.getElementById('drawCopyBtn');
  const result = document.querySelector('.draw-result');
  const drawBtn = document.getElementById('drawNamesBtn');
  const label = document.getElementById('drawBtnLabel');
  const fullscreen = document.getElementById('drawFullscreen');
  if(fullscreen){ fullscreen.classList.remove('active','is-revealed'); fullscreen.setAttribute('aria-hidden','true'); }
  unlockDrawViewport();
  if(result) result.classList.remove('is-drawing');
  if(drawBtn) drawBtn.classList.remove('is-drawing');
  if(label) label.textContent = '開始抽籤';
  if(list){ list.innerHTML = ''; list.classList.add('hidden'); }
  if(empty){ empty.textContent = '抽籤結果會顯示在這裡'; empty.classList.remove('hidden'); }
  if(copyBtn) copyBtn.disabled = true;
  document.getElementById('drawReaderBtn').disabled = true;
  const reader = document.getElementById('drawReader');
  if(reader.open) reader.close();
}

function updateDrawToolState(clearResults){
  const names = getDrawNames();
  const countInput = document.getElementById('drawCountInput');
  const badge = document.getElementById('drawNameCount');
  const hint = document.getElementById('drawHint');
  const drawBtn = document.getElementById('drawNamesBtn');
  if(!countInput || !badge || !hint || !drawBtn) return;

  const count = Math.floor(Number(countInput.value));
  countInput.max = String(Math.max(1,names.length));
  badge.textContent = `${names.length} 人`;

  if(names.length === 0){
    hint.textContent = '請先輸入抽籤名單。';
    drawBtn.disabled = true;
  }else if(!Number.isInteger(count) || count < 1){
    hint.textContent = '抽選人數至少需要 1 人。';
    drawBtn.disabled = true;
  }else if(count > names.length){
    hint.textContent = `抽選人數不能超過名單中的 ${names.length} 人。`;
    drawBtn.disabled = true;
  }else{
    hint.textContent = `將從 ${names.length} 人中抽出 ${count} 人，名單不會重複中籤。`;
    drawBtn.disabled = false;
  }
  if(clearResults) resetDrawResults();
  saveDrawTool();
}

function secureRandomIndex(max){
  if(max <= 1) return 0;
  if(window.crypto && window.crypto.getRandomValues){
    const range = 0x100000000;
    const limit = Math.floor(range / max) * max;
    const value = new Uint32Array(1);
    do{ window.crypto.getRandomValues(value); }while(value[0] >= limit);
    return value[0] % max;
  }
  return Math.floor(Math.random() * max);
}

let drawLockedScrollY = 0;
function lockDrawViewport(){
  drawLockedScrollY = window.scrollY || window.pageYOffset || 0;
  document.body.style.top = `-${drawLockedScrollY}px`;
  document.body.classList.add('draw-overlay-open');
}

function unlockDrawViewport(){
  if(!document.body.classList.contains('draw-overlay-open')) return;
  document.body.classList.remove('draw-overlay-open');
  document.body.style.top = '';
  window.scrollTo(0,drawLockedScrollY);
}

function startDrawReel(candidates, winners, kind, onFinish){
  const overlay = document.getElementById('drawFullscreen');
  const reel = document.getElementById('drawFullscreenReel');
  const title = document.getElementById('drawFullscreenTitle');
  const prev = document.getElementById('drawFullscreenPrev');
  const current = document.getElementById('drawFullscreenName');
  const next = document.getElementById('drawFullscreenNext');
  const status = document.getElementById('drawSpinStatus');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  overlay.classList.remove('is-revealed');
  reel.style.removeProperty('transform');
  for(const row of [prev,current,next]){row.style.removeProperty('opacity');row.style.removeProperty('transform');}
  document.getElementById('drawSpinMeta').textContent = `${candidates.length} 位${kind === '中籤' ? '候補' : '參賽者'} · 本次抽出 ${winners.length} 位`;
  overlay.querySelector('.draw-fullscreen-kicker').textContent = kind === '中籤' ? '候補資格抽選' : '參賽者獎品抽選';
  status.textContent = reduced ? '抽選處理中，請稍候…' : '名單輪播中，準備揭曉…';
  const stage = reel.parentElement;
  const bar = overlay.querySelector('.draw-fullscreen-bar');
  const rows = [prev, current, next];
  const duration = 1500;
  const travel = 12;
  const landing = candidates.indexOf(winners[0]);
  const started = performance.now();
  let lastCenter = null;

  function paint(progress){
    // One row of travel advances the dial by one major division (30°).
    const position = travel * (1 - (1 - progress) ** 2.25);
    const center = Math.round(position);
    const fraction = position - center;
    stage.style.setProperty('--dial-angle', ((position - travel) * 30) + 'deg');
    bar.style.transform = 'scaleX(' + progress + ')';
    reel.style.transform = 'translateY(' + (-fraction * 100 / 3) + '%)';
    rows.forEach((row, i) => {
      if(center !== lastCenter){
        const offset = landing - travel + center + i - 1;
        row.textContent = candidates[((offset % candidates.length) + candidates.length) % candidates.length];
      }
      const focus = Math.max(0, 1 - Math.abs(i - 1 - fraction));
      row.style.opacity = String(.47 + .53 * focus);
      row.style.transform = 'scale(' + (.72 + .28 * focus) + ')';
    });
    lastCenter = center;
  }
  function frame(time){
    const progress = Math.min(1, Math.max(0, (time - started) / duration));
    paint(progress);
    if(progress < 1) drawAnimationFrame = requestAnimationFrame(frame);
  }
  if(reduced){
    prev.textContent=''; current.textContent='抽選中'; next.textContent='';
    stage.style.setProperty('--dial-angle','0deg');
    bar.style.transform='scaleX(1)';
  }else{
    paint(0);
    drawAnimationFrame = requestAnimationFrame(frame);
  }
  drawAnimationTimer = window.setTimeout(() => {
    if(drawAnimationFrame !== null) cancelAnimationFrame(drawAnimationFrame);
    drawAnimationFrame = null;
    if(!reduced) paint(1);
    reel.style.removeProperty('transform');
    rows.forEach(row => {
      row.style.removeProperty('opacity');
      row.style.removeProperty('transform');
    });
    overlay.classList.add('is-revealed');
    title.textContent = '抽選完成';
    prev.textContent = '本次結果';
    current.textContent = winners.length === 1 ? winners[0] : `${winners.length} 位${kind}者`;
    next.textContent = '完整名單即將顯示';
    status.textContent = `已抽出 ${winners.length} 位${kind}者`;
    drawAnimationTimer = window.setTimeout(() => {
      drawAnimationTimer=null;
      overlay.classList.remove('active','is-revealed');
      overlay.setAttribute('aria-hidden','true');
      unlockDrawViewport();
      onFinish();
    },650);
  },duration);
}

function drawRandomNames(){
  if(drawAnimationTimer) return;
  const names = getDrawNames();
  const countInput = document.getElementById('drawCountInput');
  const count = countInput ? Math.floor(Number(countInput.value)) : 0;
  if(names.length === 0){ showToast('請先輸入抽籤名單'); return; }
  if(!Number.isInteger(count) || count < 1 || count > names.length){
    showToast(`抽選人數請設定在 1 到 ${names.length} 人之間`);
    return;
  }

  const pool = [...names];
  for(let i = pool.length - 1; i > 0; i--){
    const j = secureRandomIndex(i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  drawToolResults = pool.slice(0,count);
  const result = document.querySelector('.draw-result');
  const list = document.getElementById('drawResultList');
  const empty = document.getElementById('drawResultEmpty');
  const copyBtn = document.getElementById('drawCopyBtn');
  const drawBtn = document.getElementById('drawNamesBtn');
  const label = document.getElementById('drawBtnLabel');
  const fullscreen = document.getElementById('drawFullscreen');
  const fullscreenName = document.getElementById('drawFullscreenName');
  const fullscreenPrev = document.getElementById('drawFullscreenPrev');
  const fullscreenNext = document.getElementById('drawFullscreenNext');
  const fullscreenReel = document.getElementById('drawFullscreenReel');
  if(!result || !list || !empty || !copyBtn || !drawBtn || !fullscreen || !fullscreenName || !fullscreenPrev || !fullscreenNext || !fullscreenReel) return;

  const fullscreenTitle = document.getElementById('drawFullscreenTitle');
  const fullscreenKicker = fullscreen.querySelector('.draw-fullscreen-kicker');
  if(fullscreenTitle) fullscreenTitle.textContent = '抽籤進行中';
  if(fullscreenKicker) fullscreenKicker.textContent = 'RANDOM DRAW SYSTEM';

  list.innerHTML = '';
  list.classList.add('hidden');
  empty.textContent = '抽籤進行中…';
  empty.classList.remove('hidden');
  copyBtn.disabled = true;
  document.getElementById('drawReaderBtn').disabled = true;
  drawBtn.classList.add('is-drawing');
  drawBtn.disabled = true;
  if(label) label.textContent = '抽取中…';
  fullscreen.classList.remove('active');
  void fullscreen.offsetWidth;
  fullscreen.classList.add('active');
  fullscreen.setAttribute('aria-hidden','false');
  lockDrawViewport();

  startDrawReel(names,drawToolResults,'中籤',() => {
    drawBtn.classList.remove('is-drawing');
    if(label) label.textContent = '開始抽籤';
    renderDrawResults();
    updateDrawToolState(false);
    showToast(`已抽出 ${count} 位中籤者`);
  });
}

function renderDrawResults(){
  const list = document.getElementById('drawResultList');
  const empty = document.getElementById('drawResultEmpty');
  const copyBtn = document.getElementById('drawCopyBtn');
  if(!list || !empty || !copyBtn) return;
  list.innerHTML = drawToolResults.map((name,index) => `
    <div class="draw-result-row" style="animation-delay:${index * 35}ms">
      <span class="draw-result-index">${String(index + 1).padStart(2,'0')}</span>
      <span class="draw-result-name">${escapeHtml(name)}</span>
    </div>`).join('');
  empty.classList.add('hidden');
  list.classList.remove('hidden');
  copyBtn.disabled = drawToolResults.length === 0;
  document.getElementById('drawReaderBtn').disabled = copyBtn.disabled;
}

function openDrawReader(){
  const dialog = document.getElementById('drawReader');
  if(dialog.open || !drawToolResults.length || drawAnimationTimer) return;
  const list = document.getElementById('drawReaderList');
  document.getElementById('drawReaderCount').textContent = '共 ' + drawToolResults.length + ' 位中籤者';
  const rows = document.createDocumentFragment();
  drawToolResults.forEach((name, index) => {
    const row = document.createElement('li');
    const number = document.createElement('span');
    number.className = 'draw-reader-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const label = document.createElement('span');
    label.textContent = name;
    row.append(number, label);
    rows.append(row);
  });
  list.replaceChildren(rows);
  const trigger = document.getElementById('drawReaderBtn');
  dialog.addEventListener('close', () => {
    list.replaceChildren();
    if(!trigger.disabled) trigger.focus({preventScroll:true});
  }, {once:true});
  dialog.showModal();
  list.parentElement.scrollTop = 0;
}

function clearDrawNames(){
  const input = document.getElementById('drawNamesInput');
  const countInput = document.getElementById('drawCountInput');
  if(input) input.value = '';
  if(countInput) countInput.value = '1';
  updateDrawToolState(true);
  if(input) input.focus();
}

async function copyDrawResults(){
  if(drawToolResults.length === 0){ showToast('目前沒有可複製的中籤名單'); return; }
  const text = drawToolResults.join('\n');
  let copied = false;
  if(navigator.clipboard && navigator.clipboard.writeText){
    try{ await navigator.clipboard.writeText(text); copied = true; }catch(e){}
  }
  if(!copied){
    const helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly','');
    helper.setAttribute('aria-hidden','true');
    helper.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;';
    document.body.appendChild(helper);
    helper.focus({preventScroll:true});
    helper.select();
    helper.setSelectionRange(0,helper.value.length);
    try{ copied = document.execCommand('copy'); }catch(e){ copied = false; }
    helper.remove();
  }
  if(copied){
    showToast('中籤名單已複製');
  }else{
    showToast('複製失敗，請手動選取名單');
  }
}

/* =========================================================
   TOOLBOX — PARTICIPANT PRIZE DRAW
========================================================= */
let prizeLastDrawNames = [];

function getPrizeParticipants(){
  const seen = new Set();
  const savedPlayers = (Array.isArray(state.players) ? state.players : [])
    .filter(player => player && player.name && !player.withdrawn)
    .map(player => String(player.name).trim());
  const setupPlayers = savedPlayers.length ? [] : Array.from(document.querySelectorAll('#playerInputs .player-chip'))
    .filter(chip => chip.dataset.attendance !== 'absent')
    .map(chip => String(chip.dataset.name || '').trim());
  return (savedPlayers.length ? savedPlayers : setupPlayers)
    .filter(name => {
      if(!name || seen.has(name)) return false;
      seen.add(name);
      return true;
    });
}

function savePrizeDraw(){
  const countInput = document.getElementById('prizeDrawCountInput');
  try{
    sessionStorage.setItem(PRIZE_DRAW_STORAGE_KEY, JSON.stringify({
      winners:prizeDrawWinners,
      count:countInput ? countInput.value : '1'
    }));
  }catch(e){}
}

function initPrizeDraw(){
  const countInput = document.getElementById('prizeDrawCountInput');
  try{
    const saved = JSON.parse(sessionStorage.getItem(PRIZE_DRAW_STORAGE_KEY) || 'null');
    if(saved && Array.isArray(saved.winners)) prizeDrawWinners = saved.winners.map(String);
    if(countInput && saved && Number(saved.count) >= 1) countInput.value = String(Math.floor(Number(saved.count)));
  }catch(e){}
  prizeDrawInitialized = true;
  syncPrizeDrawPlayers();
}

function syncPrizeDrawPlayers(){
  if(!prizeDrawInitialized) return;
  const participantSet = new Set(getPrizeParticipants());
  const filtered = prizeDrawWinners.filter((name,index,list) => participantSet.has(name) && list.indexOf(name) === index);
  if(filtered.length !== prizeDrawWinners.length){
    prizeDrawWinners = filtered;
    prizeLastDrawNames = prizeLastDrawNames.filter(name => participantSet.has(name));
    savePrizeDraw();
  }
  updatePrizeDrawState();
}

function getPrizeRemaining(){
  const winnerSet = new Set(prizeDrawWinners);
  return getPrizeParticipants().filter(name => !winnerSet.has(name));
}

function renderPrizeDraw(){
  const participants = getPrizeParticipants();
  const remaining = getPrizeRemaining();
  const pool = document.getElementById('prizePoolList');
  const badge = document.getElementById('prizePoolCount');
  const list = document.getElementById('prizeResultList');
  const empty = document.getElementById('prizeResultEmpty');
  const resetBtn = document.getElementById('prizeResetBtn');
  if(!pool || !badge || !list || !empty || !resetBtn) return;

  badge.textContent = participants.length ? `可抽 ${remaining.length} / ${participants.length} 人` : '0 人';
  pool.innerHTML = remaining.length
    ? remaining.map(name => `<span class="prize-player-chip">${icon('user',13)}<span>${escapeHtml(name)}</span></span>`).join('')
    : `<div class="prize-pool-empty">${participants.length ? '所有參賽者皆已中獎' : '開始比賽後會自動帶入參賽玩家'}</div>`;

  if(prizeDrawWinners.length){
    list.innerHTML = prizeDrawWinners.map((name,index) => `
      <div class="draw-result-row${prizeLastDrawNames.includes(name) ? ' prize-result-new' : ''}" style="animation-delay:${index * 30}ms">
        <span class="draw-result-index">${String(index + 1).padStart(2,'0')}</span>
        <span class="draw-result-name">${escapeHtml(name)}</span>
      </div>`).join('');
    empty.classList.add('hidden');
    list.classList.remove('hidden');
  }else{
    list.innerHTML = '';
    list.classList.add('hidden');
    empty.classList.remove('hidden');
  }
  resetBtn.disabled = prizeDrawWinners.length === 0 || !!drawAnimationTimer;
}

function updatePrizeDrawState(){
  if(!prizeDrawInitialized) return;
  const remaining = getPrizeRemaining();
  const countInput = document.getElementById('prizeDrawCountInput');
  const hint = document.getElementById('prizeDrawHint');
  const button = document.getElementById('prizeDrawBtn');
  const label = document.getElementById('prizeDrawBtnLabel');
  if(!countInput || !hint || !button || !label) return;
  const count = Math.floor(Number(countInput.value));
  countInput.max = String(Math.max(1,remaining.length));
  label.textContent = prizeDrawWinners.length ? '繼續抽獎' : '開始抽獎';

  if(getPrizeParticipants().length === 0){
    hint.textContent = '請先在賽事設定建立參賽玩家。';
    button.disabled = true;
  }else if(remaining.length === 0){
    hint.textContent = '所有參賽者皆已中獎，可重置紀錄後重新抽選。';
    button.disabled = true;
  }else if(!Number.isInteger(count) || count < 1){
    hint.textContent = '本次抽選人數至少需要 1 人。';
    button.disabled = true;
  }else if(count > remaining.length){
    hint.textContent = `本次最多可抽出 ${remaining.length} 人。`;
    button.disabled = true;
  }else{
    hint.textContent = `將從剩餘 ${remaining.length} 人中抽出 ${count} 人，中獎者不會再次入選。`;
    button.disabled = !!drawAnimationTimer;
  }
  renderPrizeDraw();
  savePrizeDraw();
}

function drawPrizeWinners(){
  if(drawAnimationTimer) return;
  const remaining = getPrizeRemaining();
  const countInput = document.getElementById('prizeDrawCountInput');
  const count = countInput ? Math.floor(Number(countInput.value)) : 0;
  if(remaining.length === 0){ showToast('目前沒有可抽選的參賽者'); return; }
  if(!Number.isInteger(count) || count < 1 || count > remaining.length){
    showToast(`本次抽選人數請設定在 1 到 ${remaining.length} 人之間`);
    return;
  }

  const shuffled = [...remaining];
  for(let i = shuffled.length - 1; i > 0; i--){
    const j = secureRandomIndex(i + 1);
    [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
  }
  const newWinners = shuffled.slice(0,count);
  const button = document.getElementById('prizeDrawBtn');
  const label = document.getElementById('prizeDrawBtnLabel');
  const result = document.getElementById('prizeDrawResult');
  const fullscreen = document.getElementById('drawFullscreen');
  const fullscreenName = document.getElementById('drawFullscreenName');
  const fullscreenPrev = document.getElementById('drawFullscreenPrev');
  const fullscreenNext = document.getElementById('drawFullscreenNext');
  const fullscreenReel = document.getElementById('drawFullscreenReel');
  if(!button || !label || !result || !fullscreen || !fullscreenName || !fullscreenPrev || !fullscreenNext || !fullscreenReel) return;

  const fullscreenTitle = document.getElementById('drawFullscreenTitle');
  const fullscreenKicker = fullscreen.querySelector('.draw-fullscreen-kicker');
  if(fullscreenTitle) fullscreenTitle.textContent = '獎品抽選中';
  if(fullscreenKicker) fullscreenKicker.textContent = 'PRIZE DRAW SYSTEM';
  button.classList.add('is-drawing');
  button.disabled = true;
  label.textContent = '抽取中…';
  result.classList.add('is-drawing');
  fullscreen.classList.remove('active');
  void fullscreen.offsetWidth;
  fullscreen.classList.add('active');
  fullscreen.setAttribute('aria-hidden','false');
  lockDrawViewport();

  startDrawReel(remaining,newWinners,'中獎',() => {
    button.classList.remove('is-drawing');
    result.classList.remove('is-drawing');
    prizeLastDrawNames = newWinners;
    prizeDrawWinners.push(...newWinners);
    savePrizeDraw();
    updatePrizeDrawState();
    showToast(`已抽出 ${count} 位中獎者，可繼續抽獎`);
  });
}

function resetPrizeDraw(){
  if(drawAnimationTimer || prizeDrawWinners.length === 0) return;
  showConfirm('確定要清除所有中獎紀錄，讓全部參賽者重新加入抽選嗎？', () => {
    prizeDrawWinners = [];
    prizeLastDrawNames = [];
    savePrizeDraw();
    updatePrizeDrawState();
    showToast('已重置中獎紀錄');
  });
}

function buildShareLink(code){
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('code', code);
  return url.toString();
}

let currentQRCode = null;
let qrLibraryPromise = null;

function ensureQRCodeLibrary(){
  if(window.QRCode) return Promise.resolve(window.QRCode);
  if(qrLibraryPromise) return qrLibraryPromise;
  qrLibraryPromise = new Promise((resolve,reject) => {
    const script = document.createElement('script');
    const timeout = window.setTimeout(() => {
      script.remove();
      qrLibraryPromise = null;
      reject(new Error('QR library load timeout'));
    },5000);
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.async = true;
    script.onload = () => {
      window.clearTimeout(timeout);
      if(window.QRCode) resolve(window.QRCode);
      else { qrLibraryPromise = null; reject(new Error('QR library unavailable')); }
    };
    script.onerror = () => {
      window.clearTimeout(timeout);
      script.remove();
      qrLibraryPromise = null;
      reject(new Error('QR library load failed'));
    };
    document.head.appendChild(script);
  });
  return qrLibraryPromise;
}

function setQRCodeRenderStatus(message){
  const host = document.getElementById('qrCodeRender');
  if(!host) return;
  host.innerHTML = '';
  const status = document.createElement('div');
  status.className = 'qr-code-render-status';
  status.textContent = message;
  host.appendChild(status);
}

function renderQRCodeFallback(link){
  const host = document.getElementById('qrCodeRender');
  if(!host) return;
  host.innerHTML = '';
  const img = document.createElement('img');
  img.alt = '選手／觀眾連結 QR 碼';
  img.width = 220;
  img.height = 220;
  img.decoding = 'async';
  img.onload = () => showToast('已使用備援方式產生 QR 碼');
  img.onerror = () => setQRCodeRenderStatus('目前無法產生 QR 碼，請改用下方「複製連結」。');
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(link)}`;
  host.appendChild(img);
}

async function showQRCode(code){
  code = (code || '').trim().toUpperCase();
  if(!isValidEventCode(code)) return;
  currentQRCode = code;
  const link = buildShareLink(code);
  document.getElementById('qrCodeLink').innerText = link;
  document.getElementById('qrEventCode').innerHTML = `賽事代碼 - <b>${escapeHtml(code)}</b>`;
  try{ if(document.fonts && document.fonts.load){ document.fonts.load("700 96px Inter"); document.fonts.load("700 48px 'Noto Sans TC'"); } }catch(e){}   // 先載入字型，儲存圖片時才畫得出來
  document.getElementById('qrModal').classList.add('show');
  setQRCodeRenderStatus('正在產生 QR 碼…');
  try{
    await ensureQRCodeLibrary();
    const host = document.getElementById('qrCodeRender');
    if(!host || currentQRCode !== code) return;
    host.innerHTML = '';
    new window.QRCode(host, {
      text:link,
      width:220,
      height:220,
      colorDark:'#000000',
      colorLight:'#ffffff',
      correctLevel:window.QRCode.CorrectLevel.M
    });
  }catch(e){
    if(currentQRCode === code) renderQRCodeFallback(link);
  }
}

// 把「QR 碼 + 賽事代碼 - XXXX」合成一張圖片存起來（手機會跳出分享選單，選「儲存圖片」即可存到相簿；電腦則直接下載）
async function saveQRImage(btn){
  const code = currentQRCode;
  const host = document.getElementById('qrCodeRender');
  if(!code || !host) return;
  // qrcode.js 會同時放 canvas 和 img；優先用 canvas（不會有跨網域限制），備援 QR 圖才用 img
  const srcEl = host.querySelector('canvas') || host.querySelector('img');
  if(!srcEl || (srcEl.tagName === 'IMG' && !srcEl.complete)){ showToast('請等 QR 碼出現後，再儲存圖片'); return; }

  const label = btn ? btn.innerHTML : '';
  if(btn){ btn.disabled = true; btn.textContent = '產生圖片中…'; }
  try{
    try{ await Promise.all([document.fonts.load('700 96px Inter'), document.fonts.load("700 48px 'Noto Sans TC'")]); }catch(e){}

    const W = 900, PAD = 90, QR = 720;
    const H = PAD + QR + 210;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, W, H);
    g.imageSmoothingEnabled = false;              // QR 方塊邊緣要銳利，掃描才穩
    g.drawImage(srcEl, PAD, PAD, QR, QR);

    // 底下一行：賽事代碼 - XXXX（逐字繪製，字距一致、不依賴瀏覽器的 letterSpacing 支援）
    const labelFont = "700 46px 'Noto Sans TC', -apple-system, sans-serif";
    const codeFont = "700 92px Inter, 'Noto Sans TC', -apple-system, sans-serif";
    const gapAfterLabel = 22, tracking = 16;
    g.textBaseline = 'alphabetic';
    g.font = labelFont;
    const labelText = '賽事代碼 -';
    const labelW = g.measureText(labelText).width;
    g.font = codeFont;
    const chars = code.split('');
    const widths = chars.map(ch => g.measureText(ch).width);
    const codeW = widths.reduce((a, b) => a + b, 0) + tracking * (chars.length - 1);
    let x = (W - (labelW + gapAfterLabel + codeW)) / 2;
    const baseY = PAD + QR + 135;
    g.font = labelFont; g.fillStyle = '#3c4148';
    g.fillText(labelText, x, baseY - 4);
    x += labelW + gapAfterLabel;
    g.font = codeFont; g.fillStyle = '#111111';
    chars.forEach((ch, i) => { g.fillText(ch, x, baseY); x += widths[i] + tracking; });

    const blob = await new Promise(res => c.toBlob(res, 'image/png'));
    if(!blob) throw new Error('toBlob failed');
    const fileName = `beyblade-x-code-${code}.png`;   // 用英數檔名，各種手機／系統都不會亂碼
    const file = new File([blob], fileName, { type:'image/png' });

    // 手機：用系統分享選單（可直接「儲存圖片」到相簿）
    if(navigator.canShare && navigator.canShare({ files:[file] })){
      try{ await navigator.share({ files:[file] }); return; }
      catch(e){ if(e && e.name === 'AbortError') return; }   // 使用者取消就結束；其他錯誤改走下載
    }
    // 電腦／不支援分享：直接下載
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = fileName;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    showToast('已儲存圖片');
  }catch(e){
    console.error('儲存 QR 圖片失敗', e);
    showToast('儲存圖片失敗，請改用螢幕截圖');
  }finally{
    if(btn){ btn.disabled = false; btn.innerHTML = label || `${icon('download',14)} 儲存圖片`; }
  }
}

function hideQRModal(){
  document.getElementById('qrModal').classList.remove('show');
}

/* =========================================================
   ARCHIVE (我的賽事典藏) — optional Google-sign-in cloud archive
   of a completed tournament. Everything here is additive: the
   normal referee/viewer code-based flow never requires sign-in,
   this is only reached when the referee explicitly asks to save
   a finished event or browse ones they've already saved.
========================================================= */
let archiveModalSaveMode = false;
const ARCHIVE_REDIRECT_INTENT_KEY = 'beyblade-x-archive-redirect-intent';
const ARCHIVE_AUTO_SAVE_KEY = 'beyblade-x-archive-auto-save-v1';
let archiveAutoSaveBusy = false;
let archiveAutoSaveLastSignature = '';
let archiveAutoSaveError = '';

function isArchiveAutoSaveEnabled(){
  try{ return localStorage.getItem(ARCHIVE_AUTO_SAVE_KEY) !== '0'; }catch(e){ return true; }
}

function setArchiveAutoSave(enabled){
  try{ localStorage.setItem(ARCHIVE_AUTO_SAVE_KEY, enabled ? '1' : '0'); }catch(e){}
  archiveAutoSaveError = '';
  renderArchiveAutoSaveStatus();
  if(enabled) maybeAutoArchiveTournament();
}

function renderArchiveAutoSaveStatus(){
  const toggle = document.getElementById('archiveAutoSaveToggle');
  const status = document.getElementById('archiveAutoSaveStatus');
  if(!toggle || !status) return;
  const enabled = isArchiveAutoSaveEnabled();
  toggle.checked = enabled;
  if(!enabled){ status.textContent = '已關閉，仍可手動儲存賽事'; return; }
  if(archiveAutoSaveBusy){ status.textContent = '正在安全儲存本場賽事…'; return; }
  if(archiveAutoSaveError){ status.textContent = archiveAutoSaveError; return; }
  const data = getAwardPodiumData();
  status.textContent = data.ready && archiveAutoSaveLastSignature
    ? '本場賽事已自動儲存'
    : '決出冠軍後自動存入典藏';
}

async function maybeAutoArchiveTournament(){
  if(!isArchiveAutoSaveEnabled() || archiveAutoSaveBusy) return;
  const sync = window.cloudSync;
  const user = sync && sync.ready && sync.auth ? sync.auth.getUser() : null;
  if(!user || !sync.archiveEvent) return;
  const data = getAwardPodiumData();
  if(!data.ready || !data.champion){ renderArchiveAutoSaveStatus(); return; }
  const payload = buildArchivePayload();
  const source = payload.originalEventCode || payload.archiveSourceKey || payload.title;
  const signature = [user.uid, source, payload.champion, payload.completedAt, payload.matchCount].join('|');
  if(signature === archiveAutoSaveLastSignature){ renderArchiveAutoSaveStatus(); return; }

  archiveAutoSaveBusy = true;
  archiveAutoSaveError = '';
  renderArchiveAutoSaveStatus();
  try{
    await sync.archiveEvent(payload, { autoSave:true });
    archiveAutoSaveLastSignature = signature;
    showToast('賽事已自動儲存至我的典藏');
    if(arcIsShown('archiveModal')) refreshArchiveList();
  }catch(err){
    archiveAutoSaveError = '自動儲存失敗，稍後會再嘗試';
    console.error('賽事自動儲存失敗', err);
  }finally{
    archiveAutoSaveBusy = false;
    renderArchiveAutoSaveStatus();
  }
}

// signInWithRedirect leaves the page entirely, so if the referee tapped
// "儲存到我的賽事典藏" (save mode) right before signing in, that intent has
// to survive the round trip. sessionStorage does — it's tied to the tab,
// not the page — so we stash it here and pick it up once auth resolves.
window.addEventListener('cloudauth-changed', () => {
  renderArchiveAutoSaveStatus();
  maybeAutoArchiveTournament();
  let intent = null;
  try{ intent = sessionStorage.getItem(ARCHIVE_REDIRECT_INTENT_KEY); }catch(e){}
  if(intent === null) return;
  const user = window.cloudSync && window.cloudSync.auth ? window.cloudSync.auth.getUser() : null;
  if(!user) return; // still signed out (e.g. a sign-out elsewhere) — leave the flag for the real sign-in
  try{ sessionStorage.removeItem(ARCHIVE_REDIRECT_INTENT_KEY); }catch(e){}
  openArchiveModal(intent === '1');
});

window.addEventListener('archive-redirect-error', (e) => {
  try{ sessionStorage.removeItem(ARCHIVE_REDIRECT_INTENT_KEY); }catch(e2){}
  const err = e && e.detail;
  openArchiveModal(false);
  const el = document.getElementById('archiveAuthError');
  if(el) el.innerText = describeAuthError(err);
});

/* ---------- 賽事庫（列表）---------- */
const ARC_FORMAT = { knockout:'單淘汰', double_elimination:'雙敗淘汰', single:'單循環', double:'雙循環', team3v3:'3v3 團體' };
const ARC_PAGE = 40;            // 列表一次顯示幾場，超過用「顯示更多」
const ARC_CHEVRON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const ARC_CLEAR_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
const ARC_SEARCH_SVG = '<svg class="arc-ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';

let arcItems = [];              // 已載入的封存清單（含完整內容，開詳情不用再讀一次）
let arcLoaded = false;
let arcLibQuery = '';
let arcLibFormat = 'all';
let arcLibLimit = ARC_PAGE;
let arcD = null;                // 目前打開的詳情狀態

function arcFormatLabel(f){ return ARC_FORMAT[f] || '賽事'; }
function arcUnit(f){ return f === 'team3v3' ? '隊' : '人'; }
function arcDate(item){
  const ms = item.archivedAt && item.archivedAt.seconds ? item.archivedAt.seconds * 1000 : (item.completedAt || 0);
  return ms ? new Date(ms) : null;
}
const ARC_WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const arcHM = d => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
const arcYMD = d => `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
function arcSameDay(a, b){ return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
// 列表排序、月份分組、每列日期：匯入的賽事用「賽事實際結束時間」，其他用封存時間
function arcListDate(item){
  if(item.eventAt) return new Date(item.eventAt);
  return arcDate(item);
}
function arcPrepare(item){
  const names = (item.playerNames || (item.players || []).map(p => p.name)).join(' ');
  item._q = [item.title, item.champion, item.runnerUp, item.third, names].filter(Boolean).join(' ').toLowerCase();
  return item;
}
function arcLock(){ document.body.style.overflow = 'hidden'; }
function arcUnlock(){ if(!document.querySelector('.arc-sheet.show')) document.body.style.overflow = ''; }

/* 返回鍵：每打開一層就 pushState，按手機返回鍵／滑動返回只會關掉最上面那一層，不會離開網頁。
   history.state.arcDepth：1 = 賽事庫、2 = 賽事詳情 */
let arcHist = 0;
function arcPushHistory(depth){
  try{ history.pushState({ arcDepth: depth }, ''); arcHist = depth; }catch(e){ /* 不支援就退回一般行為 */ }
}
function arcIsShown(id){ const el = document.getElementById(id); return !!(el && el.classList.contains('show')); }

function openArchiveModal(saveMode){
  archiveModalSaveMode = !!saveMode;
  document.getElementById('archiveError').innerHTML = '';
  document.getElementById('archiveAuthError').innerText = '';
  const signInBtn = document.getElementById('archiveSignInBtn');
  const signInLabel = document.getElementById('archiveSignInLabel');
  if(signInBtn) signInBtn.disabled = false;
  if(signInLabel) signInLabel.innerText = '使用 Google 帳號登入';

  arcLibQuery = ''; arcLibFormat = 'all'; arcLibLimit = ARC_PAGE;
  const si = document.getElementById('archiveSearchInput');
  if(si) si.value = '';
  arcResetImport();

  const notConfigured = !(window.cloudSync && window.cloudSync.isConfigured && window.cloudSync.isConfigured() && window.cloudSync.ready && window.cloudSync.auth);
  document.getElementById('archiveNotConfigured').classList.toggle('hidden', !notConfigured);
  document.getElementById('archiveConfigured').classList.toggle('hidden', notConfigured);

  const wasOpen = arcIsShown('archiveModal');
  document.getElementById('archiveModal').classList.add('show');
  document.getElementById('archiveScroll').scrollTop = 0;
  arcLock();
  if(!wasOpen) arcPushHistory(1);
  if(!notConfigured) renderArchiveModal();
}

function arcCloseLibNow(){
  arcCloseDetailNow();
  document.getElementById('archiveModal').classList.remove('show');
  arcHist = 0;
  arcUnlock();
}

function hideArchiveModal(){
  if(!arcIsShown('archiveModal')) return;
  if(arcHist >= 1){
    history.go(-arcHist);                                   // 交給 popstate 收尾
    setTimeout(() => { if(arcIsShown('archiveModal')) arcCloseLibNow(); }, 350);   // 保險：萬一沒觸發
    return;
  }
  arcCloseLibNow();
}

function renderArchiveModal(){
  const user = window.cloudSync.auth.getUser();
  document.getElementById('archiveSignedOut').classList.toggle('hidden', !!user);
  document.getElementById('archiveSignedIn').classList.toggle('hidden', !user);

  const acct = document.getElementById('archiveAccountLine');
  if(!user){
    acct.classList.add('hidden');
    acct.innerHTML = '';
    arcItems = []; arcLoaded = false;
    hideArchiveDetailModal();
    return;
  }
  const who = user.displayName || user.email || '已登入';
  acct.innerHTML = `<span class="arc-account-status"><span class="arc-google-g" aria-hidden="true"><span>G</span></span><span class="arc-login-state">已登入</span><span aria-hidden="true">・</span><span class="arc-who">${escapeHtml(who)}</span></span><button type="button" class="arc-link" onclick="handleArchiveSignOut()">登出</button>`;
  acct.classList.remove('hidden');

  renderArchiveAutoSaveStatus();
  arcRenderSaveSection();
  refreshArchiveList();
}

function arcRenderSaveSection(){
  const sec = document.getElementById('archiveSaveSection');
  sec.classList.toggle('hidden', !archiveModalSaveMode);
  if(!archiveModalSaveMode) return;
  const data = getAwardPodiumData();
  const ready = !!(data.ready && data.champion);
  document.getElementById('archiveSaveForm').classList.toggle('hidden', !ready);
  document.getElementById('archiveSaveNotice').classList.toggle('hidden', ready);
  if(!ready) return;
  const unit = state.tournament.format === 'team3v3' ? '支隊伍' : '位選手';
  document.getElementById('archiveSaveMeta').textContent = `冠軍 ${data.champion}　${data.playerCount} ${unit}　${data.totalMatches} 場`;
  const titleInput = document.getElementById('archiveTitleInput');
  if(!titleInput.value) titleInput.value = state.tournament.name || '';
}

// 舊格式的封存（完整對戰資料直接放在主文件）→ 背景自動搬成「摘要 + 詳情」兩份。
// 每筆都是原子操作；若 Firestore 規則不允許就停止，不影響使用。
let arcMigrating = false, arcMigrateBlocked = false;
function arcMigrateLegacy(){
  if(arcMigrating || arcMigrateBlocked || !window.cloudSync.migrateArchive) return;
  const legacy = arcItems.filter(i => Array.isArray(i.matches) && i.detailSplit !== true);
  if(!legacy.length) return;
  arcMigrating = true;
  (async () => {
    for(const item of legacy){
      try{
        await window.cloudSync.migrateArchive(item);
        item.detailSplit = true;
        item.playerNames = (item.players || []).map(p => p.name);
      }catch(err){
        console.warn('舊封存資料搬移失敗（已跳過，資料未變動）：', err);
        if(err && err.code === 'permission-denied') arcMigrateBlocked = true;
        break;
      }
    }
    arcMigrating = false;
  })();
}

function arcSkeleton(){
  return '<div class="arc-skel" aria-hidden="true">' + '<div><i></i><i></i></div>'.repeat(5) + '</div>';
}

function refreshArchiveList(){
  const listEl = document.getElementById('archiveList');
  if(!arcLoaded){
    listEl.innerHTML = arcSkeleton();
    document.getElementById('archiveSummary').textContent = '';
  }
  window.cloudSync.listMyArchives().then(items => {
    arcItems = items.map(arcPrepare).sort((a, b) => ((arcListDate(b) || 0) - (arcListDate(a) || 0)));
    arcLoaded = true;
    document.getElementById('archiveError').innerHTML = '';
    arcRenderChips();
    arcRenderLibraryList();
    arcMigrateLegacy();
  }).catch(err => {
    console.error(err);
    if(!arcLoaded) listEl.innerHTML = '';
    document.getElementById('archiveError').innerHTML = '讀取賽事典藏失敗。<button type="button" class="arc-link" onclick="refreshArchiveList()">重新載入</button>';
  });
}

function arcRenderChips(){
  const box = document.getElementById('archiveChips');
  const counts = {};
  arcItems.forEach(i => { const f = i.format || 'knockout'; counts[f] = (counts[f] || 0) + 1; });
  const keys = Object.keys(counts);
  if(keys.length < 2){
    arcLibFormat = 'all';
    box.classList.add('hidden');
    box.innerHTML = '';
    return;
  }
  const order = Object.keys(ARC_FORMAT);
  const rankOf = k => { const i = order.indexOf(k); return i < 0 ? 99 : i; };
  keys.sort((a, b) => rankOf(a) - rankOf(b));
  const chip = (key, label, n) =>
    `<button type="button" class="arc-chip" aria-pressed="${arcLibFormat === key}" data-f="${escapeAttr(key)}" onclick="arcSetFormat(this.dataset.f)">${escapeHtml(label)}<small>${n}</small></button>`;
  box.innerHTML = chip('all', '全部', arcItems.length) + keys.map(k => chip(k, arcFormatLabel(k), counts[k])).join('');
  box.classList.remove('hidden');
}

function arcSetFormat(f){
  arcLibFormat = f;
  arcLibLimit = ARC_PAGE;
  arcRenderChips();
  arcRenderLibraryList();
}

function arcLibSearch(value, resetInput){
  arcLibQuery = value || '';
  if(resetInput){ const si = document.getElementById('archiveSearchInput'); if(si){ si.value = ''; si.focus(); } }
  arcLibLimit = ARC_PAGE;
  arcRenderLibraryList();
}

function arcLibMore(){
  arcLibLimit += ARC_PAGE;
  arcRenderLibraryList();
}

function arcRowHTML(item){
  const d = arcListDate(item);
  const dateTxt = d ? `${d.getMonth() + 1}/${d.getDate()} ${arcHM(d)}` : '';   // 封存時間（到分鐘）
  const f = item.format || 'knockout';
  const champ = item.champion
    ? `<span class="arc-row-champ">${icon('trophy', 14)}<span>${escapeHtml(item.champion)}</span></span>`
    : '<span class="arc-row-champ none">未產生冠軍</span>';
  return `<button type="button" class="arc-row" data-id="${escapeAttr(item.id)}" onclick="viewArchive(this.dataset.id)">
    <span class="arc-row-top"><span class="arc-row-title">${escapeHtml(item.title || '未命名賽事')}</span><span class="arc-row-date">${dateTxt}</span></span>
    <span class="arc-row-bot">${champ}<span class="arc-tag">${escapeHtml(arcFormatLabel(f))}</span><span class="arc-row-meta">${item.playerCount || 0} ${arcUnit(f)}　${item.matchCount || 0} 場</span></span>
  </button>`;
}

function arcRenderLibraryList(){
  const listEl = document.getElementById('archiveList');
  const sumEl = document.getElementById('archiveSummary');
  document.getElementById('archiveSearchClear').classList.toggle('hidden', !arcLibQuery);
  document.getElementById('archiveSearchWrap').classList.toggle('hidden', !arcItems.length);

  if(!arcItems.length){
    sumEl.textContent = '';
    listEl.innerHTML = '<div class="arc-empty"><b>還沒有存過賽事</b><span>比賽結束後，按「儲存到我的賽事典藏」，就會出現在這裡。忘了存的話，也可以用上面的「用賽事代碼匯入」補存。</span></div>';
    return;
  }

  const q = arcLibQuery.trim().toLowerCase();
  const filtered = arcItems.filter(i =>
    (arcLibFormat === 'all' || (i.format || 'knockout') === arcLibFormat) && (!q || i._q.includes(q)));
  const isFiltered = filtered.length !== arcItems.length;
  sumEl.innerHTML = `<span>${isFiltered ? `符合 ${filtered.length} 場，共 ${arcItems.length} 場賽事` : `共 ${arcItems.length} 場賽事`}</span>`
    + (isFiltered ? '<button type="button" class="arc-link" onclick="arcResetLibraryFilters()">清除篩選</button>' : '');

  if(!filtered.length){
    listEl.innerHTML = `<div class="arc-empty"><b>找不到符合的賽事</b><span>換個關鍵字，或清除篩選再試試。</span></div>`;
    return;
  }

  const shown = filtered.slice(0, arcLibLimit);
  let html = '';
  let lastKey = null;
  shown.forEach(item => {
    const d = arcListDate(item);
    const key = d ? `${d.getFullYear()} 年 ${d.getMonth() + 1} 月` : '更早';
    if(key !== lastKey){ html += `<div class="arc-month">${key}</div>`; lastKey = key; }
    html += arcRowHTML(item);
  });
  if(filtered.length > shown.length){
    html += `<div class="arc-more"><button type="button" class="btn btn-dark btn-block" onclick="arcLibMore()">顯示更多（還有 ${filtered.length - shown.length} 場）</button></div>`;
  }
  listEl.innerHTML = html;
}

function arcResetLibraryFilters(){
  arcLibQuery = ''; arcLibFormat = 'all'; arcLibLimit = ARC_PAGE;
  const si = document.getElementById('archiveSearchInput');
  if(si) si.value = '';
  arcRenderChips();
  arcRenderLibraryList();
}

function describeAuthError(err){
  const code = (err && err.code) || '';
  const known = {
    'auth/operation-not-allowed': 'Firebase 專案還沒啟用 Google 登入方式（Authentication → Sign-in method → Google → 啟用）。',
    'auth/unauthorized-domain': '目前這個網域沒有被加進 Firebase 的「授權網域」清單（Authentication → Settings → Authorized domains）。',
    'auth/operation-not-supported-in-this-environment': '目前的瀏覽器環境不支援這個登入方式（常見於 LINE／IG／FB 內建瀏覽器），請改用系統瀏覽器（Safari／Chrome）開啟本頁再試一次。',
    'auth/web-storage-unsupported': '目前的瀏覽器封鎖了第三方 cookie／儲存空間，Google 登入需要它才能運作，請確認瀏覽器設定或換一個瀏覽器再試。',
    'auth/network-request-failed': '網路連線失敗，請確認網路狀況後再試一次。',
    'auth/popup-blocked': '登入視窗被瀏覽器擋下了，請允許本網站的彈出視窗後再試一次。'
  };
  const friendly = known[code];
  return friendly ? `${friendly}（${code}）` : `登入失敗：${code || (err && err.message) || '未知錯誤'}`;
}

function handleArchiveSignIn(){
  document.getElementById('archiveAuthError').innerText = '';
  try{ sessionStorage.setItem(ARCHIVE_REDIRECT_INTENT_KEY, archiveModalSaveMode ? '1' : '0'); }catch(e){}
  const btn = document.getElementById('archiveSignInBtn');
  const label = document.getElementById('archiveSignInLabel');
  if(btn){ btn.disabled = true; }
  if(label){ label.innerText = '正在前往 Google 登入...'; }
  // 先走 popup（成功會 resolve 出 user）；只有彈窗被擋時才會退回 redirect，
  // 此時頁面會被導走，這個 promise 不會 resolve。
  window.cloudSync.auth.signIn().then(user => {
    // popup 成功：頁面沒有被導走，直接更新彈窗內容（會出現「儲存」區塊）
    if(user){
      try{ sessionStorage.removeItem(ARCHIVE_REDIRECT_INTENT_KEY); }catch(e2){}
      renderArchiveModal();
    }
  }).catch(err => {
    try{ sessionStorage.removeItem(ARCHIVE_REDIRECT_INTENT_KEY); }catch(e2){}
    const code = err && err.code;
    // 使用者自己關掉登入視窗，不算錯誤，不用顯示紅字
    if(code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request'){
      document.getElementById('archiveAuthError').innerText = describeAuthError(err);
      console.error(err);
    }
    if(btn) btn.disabled = false;
    if(label) label.innerText = '使用 Google 帳號登入';
  });
}

function handleArchiveSignOut(){
  window.cloudSync.auth.signOut().then(() => {
    archiveAutoSaveLastSignature = '';
    archiveAutoSaveError = '';
    renderArchiveModal();
  });
}

function ensureArchiveSourceKey(){
  if(!state.tournament.archiveSourceKey){
    state.tournament.archiveSourceKey = globalThis.crypto?.randomUUID?.()
      || `event-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
  }
  return state.tournament.archiveSourceKey;
}

function buildArchivePayload(title){
  const awardData = getAwardPodiumData();
  const realMatches = state.matches.filter(m => !m.isBye && !m.inactive);
  const completedAt = Math.max(0, ...realMatches.map(m => Number(m.completedAt) || 0)) || Date.now();
  return {
    title: title || state.tournament.archiveTitle || state.tournament.name || '未命名賽事',
    format: state.tournament.format,
    playerCount: state.players.filter(p => !p.withdrawn).length,
    matchCount: realMatches.length,
    champion: awardData.champion || null,
    runnerUp: awardData.silver || null,
    third: awardData.bronze || null,
    savedRole: (typeof currentRole !== 'undefined' && currentRole) || 'referee',   // 誰存的：referee 裁判 / viewer 選手
    playerNames: state.players.map(p => p.name),   // 列表搜尋選手用（摘要裡就有，不必讀完整資料）
    players: state.players,
    matches: state.matches,
    originalEventCode: (typeof currentEventCode !== 'undefined' && currentEventCode) ? currentEventCode : null,
    archiveSourceKey: ensureArchiveSourceKey(),
    completedAt
  };
}

function confirmSaveArchive(){
  const awardData = getAwardPodiumData();
  if(!awardData.ready || !awardData.champion){
    document.getElementById('archiveError').innerText = '賽事尚未完成，暫時無法封存。';
    return;
  }
  const title = document.getElementById('archiveTitleInput').value.trim();
  if(title) state.tournament.archiveTitle = title;
  const btn = document.getElementById('archiveSaveBtn');
  btn.disabled = true;
  btn.innerText = '儲存中...';
  window.cloudSync.archiveEvent(buildArchivePayload(title), { autoSave:isArchiveAutoSaveEnabled() }).then(() => {
    showToast('已儲存到我的賽事典藏');
    archiveAutoSaveError = '';
    document.getElementById('archiveSaveSection').classList.add('hidden');
    renderArchiveAutoSaveStatus();
    refreshArchiveList();
  }).catch(err => {
    document.getElementById('archiveError').innerText = '儲存失敗，請稍後再試。';
    console.error(err);
  }).finally(() => {
    btn.disabled = false;
    btn.innerText = '儲存這場賽事';
  });
}

/* ---------- 用賽事代碼匯入（補存過去忘記儲存的賽事）---------- */
let arcImportRes = null;   // 查詢到、等待使用者確認的那一場

function arcResetImport(){
  arcImportRes = null;
  const panel = document.getElementById('archiveImportPanel');
  if(!panel) return;
  panel.classList.add('hidden');
  document.getElementById('archiveImport').classList.remove('open');
  document.getElementById('archiveImportToggle').setAttribute('aria-expanded', 'false');
  document.getElementById('archiveImportInput').value = '';
  document.getElementById('archiveImportError').textContent = '';
  const pv = document.getElementById('archiveImportPreview');
  pv.classList.add('hidden'); pv.innerHTML = '';
}

function arcToggleImport(){
  const wrap = document.getElementById('archiveImport');
  const open = !wrap.classList.contains('open');
  wrap.classList.toggle('open', open);
  document.getElementById('archiveImportPanel').classList.toggle('hidden', !open);
  document.getElementById('archiveImportToggle').setAttribute('aria-expanded', String(open));
  if(open) setTimeout(() => { const i = document.getElementById('archiveImportInput'); if(i) i.focus(); }, 50);
}

// 暫時把全域 state 換成「別場賽事」，用 App 自己的算法算冠亞季軍，算完立刻換回來（不會動到目前這台的賽事）
function arcWithState(foreign, fn){
  const keep = state;
  state = foreign;
  try{ return fn(); }finally{ state = keep; }
}

function arcForeignState(res){
  const meta = res.meta || {};
  const matches = (res.matches || []).slice().sort((a, b) => {
    if(a.round !== b.round) return a.round - b.round;
    const ai = parseInt(String(a.id).split('-')[1] || 0, 10) || 0;
    const bi = parseInt(String(b.id).split('-')[1] || 0, 10) || 0;
    return ai - bi;
  });
  return {
    tournament: { name: meta.name || '', pointsToWin: meta.pointsToWin, format: meta.format || 'knockout', quickMode: !!meta.quickMode, status: meta.status },
    players: Array.isArray(meta.players) ? meta.players : [],
    teams: Array.isArray(meta.teams) ? meta.teams : [],
    matches,
    currentRound: meta.currentRound || 1
  };
}

function arcInspectImport(res){
  const st = arcForeignState(res);
  let award = { ready:false };
  try{ award = arcWithState(st, getAwardPodiumData) || { ready:false }; }catch(e){ console.error('計算匯入賽事結果失敗', e); }
  const real = st.matches.filter(m => !m.isBye && !m.inactive);
  const stamps = st.matches.filter(m => m.status === 'completed').map(m => Number(m.completedAt)).filter(t => t > 0);
  let eventAt = stamps.length ? Math.max(...stamps) : null;
  if(!eventAt && res.meta && res.meta.updatedAt && res.meta.updatedAt.seconds) eventAt = res.meta.updatedAt.seconds * 1000;
  return { st, award, matchCount: real.length, playerCount: st.players.filter(p => !p.withdrawn).length, eventAt,
           ok: !!(award.ready && award.champion) };
}

function arcImportPayload(res, info, title){
  const st = info.st, a = info.award;
  return {
    title: title || st.tournament.name || '未命名賽事',
    format: st.tournament.format,
    playerCount: info.playerCount,
    matchCount: info.matchCount,
    champion: a.champion || null,
    runnerUp: a.silver || null,
    third: a.bronze || null,
    savedRole: 'import',                       // 這筆是用代碼匯入的
    importedFromCode: res.eventCode,
    eventAt: info.eventAt || null,             // 賽事實際結束時間（列表依這個排序）
    playerNames: st.players.map(p => p.name),
    players: st.players,
    matches: st.matches,
    originalEventCode: res.eventCode,
    completedAt: info.eventAt || Date.now()
  };
}

async function arcImportLookup(){
  const input = document.getElementById('archiveImportInput');
  const errEl = document.getElementById('archiveImportError');
  const pv = document.getElementById('archiveImportPreview');
  const btn = document.getElementById('archiveImportGo');
  const code = (input.value || '').trim().toUpperCase();
  errEl.textContent = '';
  pv.classList.add('hidden'); pv.innerHTML = '';
  arcImportRes = null;
  if(!isValidEventCode(code)){ errEl.textContent = EVENT_CODE_LEN_MSG; input.focus(); return; }
  if(!window.cloudSync || !window.cloudSync.fetchEvent){ errEl.textContent = '目前無法查詢賽事，請重新整理頁面後再試。'; return; }

  btn.disabled = true; btn.textContent = '查詢中…';
  try{
    const res = await window.cloudSync.fetchEvent(code);
    if(!res){ errEl.textContent = '找不到這組代碼。請確認有沒有輸入錯誤。'; return; }
    const info = arcInspectImport(res);
    if(!res.matches.length){
      pv.innerHTML = '<div class="arc-imp-bad">這組代碼底下沒有比賽資料，可能已經被清除，沒辦法匯入。</div>';
      pv.classList.remove('hidden');
      return;
    }
    if(!info.ok){
      pv.innerHTML = `<div class="arc-imp-bad">找到「${escapeHtml(info.st.tournament.name || '未命名賽事')}」，但這場賽事還沒有決出冠軍，暫時不能存入典藏。</div>`;
      pv.classList.remove('hidden');
      return;
    }
    arcImportRes = { res, info };
    const f = info.st.tournament.format;
    const when = info.eventAt ? new Date(info.eventAt) : null;
    const whenTxt = when ? `　最後一場結束於 ${when.getMonth() + 1}/${when.getDate()} ${arcHM(when)}` : '';
    pv.innerHTML = `<div class="arc-imp-card">
      <div class="arc-imp-name">${escapeHtml(info.st.tournament.name || '未命名賽事')}</div>
      <div class="arc-imp-meta">${escapeHtml(arcFormatLabel(f))}　${info.playerCount} ${f === 'team3v3' ? '支隊伍' : '位選手'}　${info.matchCount} 場${whenTxt}</div>
      <div class="arc-imp-pod">
        <div><span>冠軍</span><b class="g">${escapeHtml(info.award.champion)}</b></div>
        ${info.award.silver ? `<div><span>亞軍</span><b>${escapeHtml(info.award.silver)}</b></div>` : ''}
        ${info.award.bronze ? `<div><span>季軍</span><b>${escapeHtml(info.award.bronze)}</b></div>` : ''}
      </div>
      <div class="field-label">存進典藏的名稱（選填）</div>
      <input class="text-input" id="archiveImportTitle" autocomplete="off" value="${escapeAttr(info.st.tournament.name || '')}">
      <button type="button" class="btn btn-primary btn-block" style="margin-top:10px;" id="archiveImportSave" onclick="arcImportSave()">存入我的賽事典藏</button>
      <p class="arc-imp-note">賽事代碼很短，時間久了可能被別場賽事重複使用。請先確認上面的名稱和冠軍，是不是你要的那一場。</p>
    </div>`;
    pv.classList.remove('hidden');
  }catch(err){
    console.error(err);
    errEl.textContent = '查詢失敗，請確認網路連線後再試一次。';
  }finally{
    btn.disabled = false; btn.textContent = '查詢';
  }
}

function arcImportSave(){
  if(!arcImportRes) return;
  const { res, info } = arcImportRes;
  const title = (document.getElementById('archiveImportTitle').value || '').trim();
  const payload = arcImportPayload(res, info, title);
  const errEl = document.getElementById('archiveImportError');
  errEl.textContent = '';

  const doSave = () => {
    const btn = document.getElementById('archiveImportSave');
    if(btn){ btn.disabled = true; btn.textContent = '儲存中…'; }
    window.cloudSync.archiveEvent(payload).then(() => {
      showToast('已存入我的賽事典藏');
      arcResetImport();
      document.getElementById('archiveScroll').scrollTop = 0;
      refreshArchiveList();
    }).catch(err => {
      console.error(err);
      errEl.textContent = '儲存失敗，請稍後再試。';
      if(btn){ btn.disabled = false; btn.textContent = '存入我的賽事典藏'; }
    });
  };

  const dup = arcItems.find(i => i.originalEventCode === res.eventCode && i.champion === payload.champion
    && (i.matchCount || 0) === payload.matchCount && (i.title || '') === payload.title);
  if(dup) showConfirm('典藏裡已經有一份看起來一模一樣的賽事。還要再存一份嗎？', doSave);
  else doSave();
}

/* ---------- 賽事詳情 ---------- */
const arcDetailCache = new Map();   // 已讀過的完整資料，重複打開不用再讀
function arcCacheDetail(item){
  arcDetailCache.set(item.id, item);
  if(arcDetailCache.size > 8) arcDetailCache.delete(arcDetailCache.keys().next().value);
}

function viewArchive(id){
  const summary = arcItems.find(i => i.id === id);
  if(summary && Array.isArray(summary.matches)){ renderArchiveDetail(summary); return; }   // 舊格式：資料本來就在
  if(arcDetailCache.has(id)){ renderArchiveDetail(arcDetailCache.get(id)); return; }

  arcOpenDetailLoading(id, summary);
  window.cloudSync.getArchive(id).then(full => {
    if(!arcD || arcD.loadingId !== id) return;              // 使用者已經離開這一頁
    if(!full){ arcShowDetailError(id, '找不到這筆封存紀錄。'); return; }
    const item = arcPrepare(full);
    arcCacheDetail(item);
    renderArchiveDetail(item);
  }).catch(err => {
    console.error(err);
    if(arcD && arcD.loadingId === id) arcShowDetailError(id, '讀取失敗，請檢查網路後再試。');
  });
}

function arcSetDetailHeader(item){
  document.getElementById('archiveDetailTitle').textContent = item.title || '未命名賽事';
  const d = arcDate(item);
  const when = d ? `${arcYMD(d)} ${arcHM(d)} ${item.savedRole === 'import' ? '匯入' : '封存'}` : '';
  document.getElementById('archiveDetailSub').textContent = `${when}　${arcFormatLabel(item.format || 'knockout')}`.trim();
}

function arcOpenDetailLoading(id, summary){
  arcD = { loadingId: id };
  arcSetDetailHeader(summary || {});
  document.getElementById('archiveDetailTabs').innerHTML = '';
  document.getElementById('archiveDetailBody').innerHTML = arcSkeleton();
  arcShowDetailSheet();
}

function arcShowDetailError(id, msg){
  document.getElementById('archiveDetailBody').innerHTML =
    `<div class="arc-empty"><b>${escapeHtml(msg)}</b><button type="button" class="btn btn-dark" data-id="${escapeAttr(id)}" onclick="viewArchive(this.dataset.id)">重新載入</button></div>`;
}

function arcShowDetailSheet(){
  const wasOpen = arcIsShown('archiveDetailModal');
  document.getElementById('archiveDetailModal').classList.add('show');
  arcLock();
  if(!wasOpen) arcPushHistory(2);
}

// 把一份封存資料整理成畫面要用的樣子（分輪次、選手戰績、終結方式統計）
function arcBuildVM(item){
  const fmt = item.format || 'knockout';
  const isTeam = fmt === 'team3v3';
  const isDE = fmt === 'double_elimination';
  const isKO = fmt === 'knockout' || isTeam;
  const players = item.players || [];
  const nameById = new Map(players.map(p => [p.id, p.name]));
  const nm = id => nameById.get(id) || '－';

  const live = (item.matches || []).filter(m => !m.isBye && !m.inactive);
  const done = live.filter(m => m.status === 'completed' && m.playerA && m.playerB);
  const maxRound = Math.max(0, ...live.filter(m => !m.thirdPlace).map(m => m.round || 0));
  const KO_NAMES = ['決賽', '準決賽', '八強賽', '16 強賽', '32 強賽'];
  const labelOf = m => {
    if(isDE){
      if(m.bracket === 'final') return m.id === 'GF2' ? '加賽' : '總決賽';
      return `${m.bracket === 'losers' ? '敗部' : '勝部'} 第 ${m.bracketRound || m.round} 輪`;
    }
    if(isKO){
      if(m.thirdPlace) return '季軍戰';
      const fromEnd = maxRound - (m.round || 0);
      return KO_NAMES[fromEnd] || `第 ${m.round} 輪`;
    }
    return `第 ${m.round} 輪`;
  };

  const groupMap = new Map();
  const stat = new Map(players.map(p => [p.id, { name:p.name, w:0, l:0, pf:0, pa:0 }]));
  const fin = { SPIN:0, OVER:0, BURST:0, XTREME:0 };
  let finTotal = 0, totalPts = 0;

  done.forEach(m => {
    const a = Number(m.pointsA) || 0, b = Number(m.pointsB) || 0;
    totalPts += a + b;

    const label = labelOf(m);
    const ord = isDE ? (m.round || 0) : (m.round || 0) + (m.thirdPlace ? -0.5 : 0);
    let g = groupMap.get(label);
    if(!g){ g = { key:label, label, ord, matches:[] }; groupMap.set(label, g); }
    g.matches.push({ nA:nm(m.playerA), nB:nm(m.playerB), sA:a, sB:b, hasScore:(a + b) > 0, winA:m.winner === m.playerA, winB:m.winner === m.playerB });

    const sa = stat.get(m.playerA), sb = stat.get(m.playerB);
    if(sa && sb){
      sa.pf += a; sa.pa += b; sb.pf += b; sb.pa += a;
      if(m.winner === m.playerA){ sa.w++; sb.l++; }
      else if(m.winner === m.playerB){ sb.w++; sa.l++; }
    }
    (m.log || []).forEach(e => {
      if(e && Object.prototype.hasOwnProperty.call(fin, e.finish)){ fin[e.finish]++; finTotal++; }
    });
  });

  // 淘汰賽：決賽排最前面；循環賽：第 1 輪排最前面
  const stamps = done.map(m => Number(m.completedAt)).filter(t => t > 0);
  const firstDone = stamps.length ? new Date(Math.min(...stamps)) : null;
  const lastDone = stamps.length ? new Date(Math.max(...stamps)) : null;

  const groups = [...groupMap.values()].sort((x, y) => (isKO || isDE) ? y.ord - x.ord : x.ord - y.ord);

  const podium = [item.champion, item.runnerUp, item.third];
  const podiumRank = name => { const i = podium.indexOf(name); return i < 0 ? 9 : i; };
  const playerList = [...stat.values()]
    .map(s => Object.assign(s, { diff: s.pf - s.pa }))
    .sort((x, y) => podiumRank(x.name) - podiumRank(y.name) || y.w - x.w || y.diff - x.diff || x.name.localeCompare(y.name, 'zh-Hant'));
  playerList.forEach((p, i) => { p.rank = i + 1; });

  return { fmt, isTeam, isDE, isKO, groups, playerList, doneCount:done.length, totalPts, fin, finTotal, firstDone, lastDone,
           entrants: item.playerCount || players.filter(p => !p.withdrawn).length };
}

function renderArchiveDetail(item){
  const vm = arcBuildVM(item);
  arcD = {
    item, vm,
    tab: 'overview',
    q: { matches:'', players:'' },
    round: 'all',
    open: new Set(vm.groups.length ? [vm.groups[0].key] : [])
  };
  arcSetDetailHeader(item);
  arcRenderDetail(true);
  arcShowDetailSheet();
}

function arcCloseDetailNow(){
  const el = document.getElementById('archiveDetailModal');
  if(el) el.classList.remove('show');
  arcD = null;
  arcHist = arcIsShown('archiveModal') ? 1 : 0;
  arcUnlock();
}

function hideArchiveDetailModal(){
  if(!arcIsShown('archiveDetailModal')){ arcD = null; return; }
  if(arcHist >= 2){
    history.back();                                          // 交給 popstate 收尾
    setTimeout(() => { if(arcIsShown('archiveDetailModal')) arcCloseDetailNow(); }, 350);   // 保險：萬一沒觸發
    return;
  }
  arcCloseDetailNow();
}

// 手機返回鍵／滑動返回：依歷史深度關掉最上面那一層
window.addEventListener('popstate', e => {
  const depth = (e.state && e.state.arcDepth) || 0;
  if(depth < 2 && arcIsShown('archiveDetailModal')) arcCloseDetailNow();
  if(depth < 1 && arcIsShown('archiveModal')) arcCloseLibNow();
  arcHist = arcIsShown('archiveDetailModal') ? 2 : (arcIsShown('archiveModal') ? 1 : 0);
});

function arcRenderDetail(scrollTop){
  const { vm, tab } = arcD;
  const tabs = [
    ['overview', '概覽', null],
    ['matches', '賽程', vm.doneCount],
    ['players', vm.isTeam ? '隊伍' : '選手', vm.playerList.length]
  ];
  document.getElementById('archiveDetailTabs').innerHTML = tabs.map(([k, label, n]) =>
    `<button type="button" role="tab" class="arc-tab" aria-selected="${k === tab}" data-t="${k}" onclick="arcSetTab(this.dataset.t)">${label}${n == null ? '' : `<span class="arc-tab-n">${n}</span>`}</button>`
  ).join('');

  const body = document.getElementById('archiveDetailBody');
  if(tab === 'overview'){
    body.innerHTML = arcOverviewHTML();
  }else if(tab === 'matches'){
    body.innerHTML = arcToolsHTML('搜尋選手名稱', arcD.q.matches) + `<div class="arc-chips${vm.groups.length < 2 ? ' hidden' : ''}" id="arcRoundChips">${arcRoundChipsHTML()}</div><div id="arcMatchList"></div>`;
    arcRenderMatchList();
  }else{
    body.innerHTML = arcToolsHTML(vm.isTeam ? '搜尋隊伍名稱' : '搜尋選手名稱', arcD.q.players) + '<div id="arcPlayerList"></div>';
    arcRenderPlayerList();
  }
  if(scrollTop) body.scrollTop = 0;
}

function arcSetTab(t){
  if(!arcD || !arcD.vm || arcD.tab === t) return;
  arcD.tab = t;
  arcRenderDetail(true);
}

function arcToolsHTML(placeholder, value){
  return `<div class="arc-tools"><div class="arc-field">${ARC_SEARCH_SVG}
    <input id="arcQInput" type="text" inputmode="search" enterkeyhint="search" autocomplete="off" placeholder="${escapeAttr(placeholder)}" value="${escapeAttr(value)}" oninput="arcQuery(this.value)">
    <button type="button" class="arc-clear${value ? '' : ' hidden'}" id="arcQClear" aria-label="清除搜尋" onclick="arcQuery('',true)">${ARC_CLEAR_SVG}</button>
  </div></div>`;
}

function arcQuery(value, resetInput){
  if(!arcD) return;
  const tab = arcD.tab;
  arcD.q[tab] = value || '';
  const input = document.getElementById('arcQInput');
  if(resetInput && input){ input.value = ''; input.focus(); }
  document.getElementById('arcQClear').classList.toggle('hidden', !arcD.q[tab]);
  if(tab === 'matches') arcRenderMatchList(); else arcRenderPlayerList();
}

/* ----- 概覽 ----- */
function arcOverviewHTML(){
  const { item, vm } = arcD;
  let h = '';

  if(item.champion){
    h += `<section class="arc-sec"><div class="arc-champ"><div class="arc-champ-l">${icon('trophy', 16)}冠軍</div><div class="arc-champ-n">${escapeHtml(item.champion)}</div></div>`;
    const pod = (label, name, cls) => `<div class="arc-pod ${cls}"><div class="arc-pod-l">${icon('medal', 14)}${label}</div><div class="arc-pod-n">${escapeHtml(name)}</div></div>`;
    const cells = (item.runnerUp ? pod('亞軍', item.runnerUp, 'silver') : '') + (item.third ? pod('季軍', item.third, 'bronze') : '');
    if(cells) h += `<div class="arc-pod2">${cells}</div>`;
    h += '</section>';
  }

  const stats = [[vm.entrants, vm.isTeam ? '參賽隊伍' : '參賽選手'], [vm.doneCount, '完成場次']];
  if(!vm.isTeam) stats.push([vm.totalPts, '總得分']);
  h += `<div class="arc-stats" style="grid-template-columns:repeat(${stats.length},1fr);">${stats.map(([n, l]) => `<div class="arc-stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div>`;

  const saved = arcDate(item);
  const kv = [];
  if(saved) kv.push([item.savedRole === 'import' ? '匯入時間' : '封存時間', `${arcYMD(saved)}（${ARC_WEEK[saved.getDay()]}）${arcHM(saved)}`]);
  const stampTxt = d => (saved && arcSameDay(d, saved)) ? arcHM(d) : `${d.getMonth() + 1}/${d.getDate()} ${arcHM(d)}`;
  if(vm.firstDone) kv.push(['首場完賽', stampTxt(vm.firstDone)]);
  if(vm.lastDone && vm.firstDone && vm.lastDone.getTime() !== vm.firstDone.getTime()) kv.push(['最後完賽', stampTxt(vm.lastDone)]);
  if(kv.length){
    h += `<section class="arc-sec"><h3 class="arc-h">時間</h3>${kv.map(([k, v]) => `<div class="arc-kv"><span>${k}</span><b>${v}</b></div>`).join('')}</section>`;
  }

  if(vm.finTotal > 0){
    h += `<section class="arc-sec"><h3 class="arc-h">終結方式<small>共 ${vm.finTotal} 次得分</small></h3>`;
    const finMax = Math.max(...Object.values(vm.fin));
    Object.keys(vm.fin).forEach(k => {
      const n = vm.fin[k];
      const pct = finMax ? Math.round(n / finMax * 100) : 0;  // 以最多的那一項為滿格，長條才看得出差異
      h += `<div class="arc-fin"><span class="arc-fin-l"><i>${FINISH[k].icon}</i>${FINISH[k].label}</span><span class="arc-bar"><i style="width:${pct}%"></i></span><span class="arc-fin-n">${n}</span></div>`;
    });
    h += '</section>';
  }

  h += `<section class="arc-sec arc-danger"><button type="button" class="btn btn-danger btn-block" data-id="${escapeAttr(item.id)}" onclick="deleteArchiveConfirm(this.dataset.id)">${icon('trash-2', 16)} 刪除這筆賽事紀錄</button></section>`;
  return h;
}

/* ----- 賽程 ----- */
function arcRoundChipsHTML(){
  const { vm } = arcD;
  const chip = (r, label, n) => `<button type="button" class="arc-chip" aria-pressed="${String(arcD.round) === String(r)}" data-r="${r}" onclick="arcSetRound(this.dataset.r)">${escapeHtml(label)}<small>${n}</small></button>`;
  return chip('all', '全部', vm.doneCount) + vm.groups.map((g, i) => chip(i, g.label, g.matches.length)).join('');
}

function arcSetRound(r){
  if(!arcD) return;
  arcD.round = r === 'all' ? 'all' : Number(r);
  document.getElementById('arcRoundChips').innerHTML = arcRoundChipsHTML();
  arcRenderMatchList();
}

function arcMatchForced(){
  return !!(arcD.q.matches.trim() || arcD.round !== 'all');
}

function arcMatchHTML(m, q){
  const hitA = q && m.nA.toLowerCase().includes(q);
  const hitB = q && m.nB.toLowerCase().includes(q);
  const score = (v, win) => m.hasScore ? v : (win ? '勝' : '');
  return `<div class="arc-m">
    <div class="arc-m-r${m.winA ? ' is-win' : ''}${hitA ? ' hit' : ''}"><span class="arc-m-n">${escapeHtml(m.nA)}</span><b class="arc-m-s">${score(m.sA, m.winA)}</b></div>
    <div class="arc-m-r${m.winB ? ' is-win' : ''}${hitB ? ' hit' : ''}"><span class="arc-m-n">${escapeHtml(m.nB)}</span><b class="arc-m-s">${score(m.sB, m.winB)}</b></div>
  </div>`;
}

function arcRenderMatchList(){
  const { vm } = arcD;
  const listEl = document.getElementById('arcMatchList');
  const q = arcD.q.matches.trim().toLowerCase();
  const forced = arcMatchForced();
  let shown = 0, html = '';

  vm.groups.forEach((g, gi) => {
    if(arcD.round !== 'all' && arcD.round !== gi) return;
    const ms = q ? g.matches.filter(m => m.nA.toLowerCase().includes(q) || m.nB.toLowerCase().includes(q)) : g.matches;
    if(!ms.length) return;
    shown += ms.length;
    const open = forced || arcD.open.has(g.key);
    html += `<section class="arc-grp${open ? ' open' : ''}${forced ? ' forced' : ''}" id="arcG${gi}">
      <button type="button" class="arc-grp-h" aria-expanded="${open}" onclick="arcToggleGroup(${gi})"><span>${escapeHtml(g.label)}</span><span class="arc-grp-n">${ms.length} 場</span>${ARC_CHEVRON}</button>
      <div class="arc-grp-body">${ms.map(m => arcMatchHTML(m, q)).join('')}</div>
    </section>`;
  });

  if(!shown){
    const why = q ? `找不到包含「${escapeHtml(arcD.q.matches.trim())}」的比賽。` : '這場賽事沒有已完成的對戰紀錄。';
    html = `<div class="arc-empty"><b>沒有符合的比賽</b><span>${why}</span></div>`;
  }

  const allOpen = vm.groups.every(g => arcD.open.has(g.key));
  const action = forced
    ? '<button type="button" class="arc-link" onclick="arcClearMatchFilters()">清除篩選</button>'
    : (vm.groups.length > 1 ? `<button type="button" class="arc-link" onclick="arcToggleAll()">${allOpen ? '全部收合' : '全部展開'}</button>` : '');
  listEl.innerHTML = `<div class="arc-count"><span>${forced ? `顯示 ${shown} 場，共 ${vm.doneCount} 場` : `共 ${vm.doneCount} 場`}</span>${action}</div>${html}`;
}

function arcToggleGroup(gi){
  if(!arcD || arcMatchForced()) return;
  const g = arcD.vm.groups[gi];
  if(!g) return;
  const sec = document.getElementById('arcG' + gi);
  const open = !arcD.open.has(g.key);
  if(open) arcD.open.add(g.key); else arcD.open.delete(g.key);
  if(sec){
    sec.classList.toggle('open', open);
    sec.querySelector('.arc-grp-h').setAttribute('aria-expanded', String(open));
  }
  // 只更新上方「全部展開／收合」文字，不重畫列表，避免畫面跳動
  const link = document.querySelector('#arcMatchList .arc-count .arc-link');
  if(link) link.textContent = arcD.vm.groups.every(x => arcD.open.has(x.key)) ? '全部收合' : '全部展開';
}

function arcToggleAll(){
  if(!arcD) return;
  const all = arcD.vm.groups.every(g => arcD.open.has(g.key));
  arcD.open = new Set(all ? [] : arcD.vm.groups.map(g => g.key));
  arcRenderMatchList();
}

function arcClearMatchFilters(){
  if(!arcD) return;
  arcD.q.matches = '';
  arcD.round = 'all';
  const input = document.getElementById('arcQInput');
  if(input) input.value = '';
  document.getElementById('arcQClear').classList.add('hidden');
  document.getElementById('arcRoundChips').innerHTML = arcRoundChipsHTML();
  arcRenderMatchList();
}

/* ----- 選手／隊伍 ----- */
function arcRenderPlayerList(){
  const { vm } = arcD;
  const listEl = document.getElementById('arcPlayerList');
  const raw = arcD.q.players.trim();
  const q = raw.toLowerCase();
  const list = q ? vm.playerList.filter(p => p.name.toLowerCase().includes(q)) : vm.playerList;
  const label = vm.isTeam ? '隊伍' : '選手';

  let html = `<div class="arc-count"><span>${q ? `符合 ${list.length}，共 ${vm.playerList.length}` : `共 ${vm.playerList.length}`}　點${label}看全部比賽</span></div>`;
  if(!list.length){
    listEl.innerHTML = html + `<div class="arc-empty"><b>找不到${label}</b><span>沒有名稱包含「${escapeHtml(raw)}」。</span></div>`;
    return;
  }
  html += `<div class="arc-p-head"><span></span><span>${label}</span><span>勝</span><span>敗</span><span>得失分</span></div>`;
  list.forEach(p => {
    const rk = p.rank <= 3 ? ` r${p.rank}` : '';
    const dc = p.diff > 0 ? ' pos' : (p.diff < 0 ? ' neg' : '');
    html += `<button type="button" class="arc-p" data-i="${p.rank - 1}" onclick="arcJumpToPlayer(this.dataset.i)">
      <span class="arc-p-rank${rk}">${p.rank}</span><span class="arc-p-name">${escapeHtml(p.name)}</span>
      <span class="arc-p-n">${p.w}</span><span class="arc-p-n">${p.l}</span><span class="arc-p-d${dc}">${p.diff > 0 ? '+' : ''}${p.diff}</span>
    </button>`;
  });
  listEl.innerHTML = html;
}

function arcJumpToPlayer(i){
  if(!arcD) return;
  const p = arcD.vm.playerList[Number(i)];
  if(!p) return;
  arcD.q.matches = p.name;
  arcD.round = 'all';
  arcD.tab = 'matches';
  arcRenderDetail(true);
}

function deleteArchiveConfirm(id){
  showConfirm('確定要刪除這筆封存紀錄嗎？此動作無法復原。', () => {
    window.cloudSync.deleteArchive(id).then(() => {
      showToast('已刪除');
      arcDetailCache.delete(id);
      hideArchiveDetailModal();
      arcItems = arcItems.filter(i => i.id !== id);
      arcRenderChips();
      arcRenderLibraryList();
    }).catch(err => {
      showToast('刪除失敗，請稍後再試');
      console.error(err);
    });
  });
}

// Esc 關閉：先關詳情，再關賽事庫（有確認視窗在最上層時不處理）
document.addEventListener('keydown', e => {
  const custom = document.getElementById('customModal');
  const customOpen = !!(custom && custom.classList.contains('show'));
  // Confirm/alert dialog sits on top: Esc dismisses it like "cancel"; Tab stays inside it.
  if(customOpen && e.key === 'Escape'){ e.preventDefault(); hideModal(); return; }
  if(customOpen && e.key === 'Tab'){
    const box = custom.querySelector('.modal-box');
    const items = Array.from(box.querySelectorAll('button:not([disabled]),select:not([disabled]),input:not([disabled]),textarea:not([disabled]),[href],[tabindex]:not([tabindex="-1"])'))
      .filter(el => el.offsetParent !== null);
    if(!items.length){ e.preventDefault(); box.focus({ preventScroll:true }); return; }
    const first = items[0], last = items[items.length - 1], active = document.activeElement;
    if(!box.contains(active) || (!e.shiftKey && active === last)){ e.preventDefault(); first.focus(); }
    else if(e.shiftKey && (active === first || active === box)){ e.preventDefault(); last.focus(); }
    return;
  }
  if(e.key !== 'Escape') return;
  if(customOpen) return;
  const detail = document.getElementById('archiveDetailModal');
  if(detail && detail.classList.contains('show')){ hideArchiveDetailModal(); return; }
  const lib = document.getElementById('archiveModal');
  if(lib && lib.classList.contains('show')) hideArchiveModal();
});


/* =========================================================
   AWARD REPORT (賽後頒獎戰報)
   Reuses the same champion/runner-up/3rd logic already used by
   renderBracketPodium() (knockout) and renderStandings() (round-
   robin/double), just returning data instead of rendering, so it
   never drifts out of sync with what's shown on the 即時戰況 tab.
========================================================= */
function getAwardPodiumData(){
  const playerCount = state.players.filter(p => !p.withdrawn).length;
  // 與「即時戰況／總場次」使用完全相同的計算口徑，不把輪空列入場次。
  const totalMatches = state.matches.filter(m => !m.isBye && !m.inactive).length;
  const base = {
    playerCount,
    totalMatches,
    tournamentName: state.tournament.name || '未命名賽事',
    format: state.tournament.format || 'knockout',
    formatName: arcFormatLabel(state.tournament.format || 'knockout')
  };

  if(isElimination(state.tournament.format)){
    if(state.matches.length === 0) return { ready:false };
    const finalRound = Math.max(...state.matches.filter(m=>!m.thirdPlace).map(m=>m.round));
    const finalMatch = state.tournament.format === 'double_elimination' ? doubleFinalMatch() : state.matches.find(m=>m.round===finalRound && !m.thirdPlace);
    if(!finalMatch || finalMatch.status !== 'completed') return { ready:false };
    const champId = finalMatch.winner;
    const runnerUpId = champId === finalMatch.playerA ? finalMatch.playerB : finalMatch.playerA;
    const bronzeMatch = state.matches.find(m => m.thirdPlace);
    const thirdId = state.tournament.format === 'double_elimination' ? doubleThirdId() : (bronzeMatch && bronzeMatch.status === 'completed') ? bronzeMatch.winner : null;
    return Object.assign(base, {
      ready:true,
      champion: nameOf(champId),
      silver: nameOf(runnerUpId),
      bronze: thirdId ? nameOf(thirdId) : null
    });
  }

  const standings = calculateStandings();
  const isComplete = state.matches.length > 0 && state.matches.every(m => m.status === 'completed');
  if(!isComplete || standings.length === 0) return { ready:false };
  return Object.assign(base, {
    ready:true,
    champion: standings[0] ? standings[0].name : null,
    silver: standings[1] ? standings[1].name : null,
    bronze: standings[2] ? standings[2].name : null
  });
}

let awardImageFile = null;
let awardImagePreparePromise = null;
let awardImageGeneration = 0;

function openAwardReport(){
  const data = getAwardPodiumData();
  if(!data.ready || !data.champion){
    showToast('賽事尚未產生冠軍，還無法產生頒獎戰報');
    return;
  }

  setAwardName('awardChampName', data.champion, 76, 42, 6, 3.2);
  setAwardName('awardSilverName', data.silver || '－', 44, 26, 6, 2.4);
  setAwardName('awardBronzeName', data.bronze || '－', 44, 26, 6, 2.4);
  document.getElementById('awardSilverCard').style.display = data.silver ? '' : 'none';
  document.getElementById('awardBronzeCard').style.display = data.bronze ? '' : 'none';
  document.getElementById('awardPlayerCount').textContent = data.playerCount;
  document.getElementById('awardMatchCount').textContent = data.totalMatches;
  document.getElementById('awardFormatName').textContent = data.formatName;
  document.getElementById('awardParticipantLabel').textContent = data.format === 'team3v3' ? 'TEAMS' : 'PLAYERS';
  setAwardName('awardTournamentName', data.tournamentName, 50, 30, 14, 1.6);

  const d = new Date();
  document.getElementById('awardDate').textContent =
    `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;

  awardImageGeneration += 1;
  awardImageFile = null;
  awardImagePreparePromise = null;
  const brand = document.getElementById('awardBrandImage');
  if(!brand.hasAttribute('src'))brand.src = brand.dataset.src;
  document.getElementById('awardModal').classList.add('show');
  fitAwardStage();
  requestAnimationFrame(() => void prepareAwardImage(awardImageGeneration));
}

// 戰報仍需容納現場常見的長隊名／選手名；字數較長時只縮小該欄，不壓縮整張海報。
function setAwardName(id, value, baseSize, minSize, freeChars, step){
  const el = document.getElementById(id);
  if(!el) return;
  const text = String(value || '－');
  const length = Array.from(text).length;
  el.textContent = text;
  el.style.fontSize = `${Math.max(minSize, baseSize - Math.max(0, length - freeChars) * step)}px`;
}

function hideAwardModal(){
  document.getElementById('awardModal').classList.remove('show');
}

// Scales the fixed 1080x1200 poster down to fit the modal on screen.
// downloadAwardImage() temporarily resets this to capture full-res.
function fitAwardStage(){
  const stage = document.getElementById('awardStage');
  const wrap = document.getElementById('awardStageWrap');
  if(!stage || !wrap) return;
  const maxW = Math.min(wrap.clientWidth || 420, 420);
  const scale = maxW / 1080;
  stage.style.transform = `scale(${scale})`;
  wrap.style.height = (1200 * scale) + 'px';
}
window.addEventListener('resize', () => {
  if(document.getElementById('awardModal').classList.contains('show')) fitAwardStage();
});

// 手機瀏覽器常常在戰報彈窗打開的當下，中文字型（Noto Sans TC）還沒載入完成；
// html2canvas 若在那之前擷取畫面，文字會整段抓不到字形而變成空白／色塊。
// 這裡明確請求戰報會用到的字重，並等待瀏覽器回報字型真的就緒後才截圖。
async function waitForAwardFontsReady(){
  if(!('fonts' in document)) return;
  const specs = [
    '800 50px "Noto Sans TC"',
    '800 18px "Noto Sans TC"',
    '900 76px "Rajdhani"',
    '900 44px "Rajdhani"',
    '800 24px "Rajdhani"',
    '700 46px "Space Mono"',
    '600 18px "IBM Plex Mono"'
  ];
  try{
    await Promise.all(specs.map(spec => document.fonts.load(spec)));
    await document.fonts.ready;
  }catch(e){
    console.warn('等待字型載入時發生問題，將繼續產生圖片', e);
  }
}

async function waitForAwardImagesReady(stage){
  const images = Array.from(stage?.querySelectorAll('img') || []);
  await Promise.all(images.map(async image => {
    if(image.complete && image.naturalWidth > 0){
      try{ await image.decode?.(); }catch(e){}
      return;
    }
    await new Promise(resolve => {
      const done = () => { clearTimeout(timer); resolve(); };
      const timer = setTimeout(done, 4000);
      image.addEventListener('load', done, { once:true });
      image.addEventListener('error', done, { once:true });
    });
  }));
}

let awardRendererLoading=null;
function loadAwardRenderer(){
  if(typeof window.html2canvas==='function')return Promise.resolve();
  if(awardRendererLoading)return awardRendererLoading;
  awardRendererLoading=new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    script.async=true;
    let timer;
    const done=(error)=>{clearTimeout(timer);script.onload=script.onerror=null;
      if(error){script.remove();reject(error);}else resolve();};
    script.onload=()=>done(typeof window.html2canvas==='function'?null:new Error('renderer unavailable'));
    script.onerror=()=>done(new Error('renderer load failed'));
    timer=setTimeout(()=>done(new Error('renderer timeout')),15000);
    document.head.appendChild(script);
  }).catch(e=>{awardRendererLoading=null;throw e;});
  return awardRendererLoading;
}
async function prepareAwardImage(generation = awardImageGeneration){
  const stage = document.getElementById('awardStage');
  const btn = document.getElementById('awardDownloadBtn');
  if(!stage) return null;
  if(awardImageFile) return awardImageFile;
  if(awardImagePreparePromise) return awardImagePreparePromise;

  if(btn){ btn.disabled = true; btn.innerText = '準備戰報圖片中…'; }
  awardImagePreparePromise = (async () => {
    await loadAwardRenderer();
    await waitForAwardFontsReady();
    await waitForAwardImagesReady(stage);
    await new Promise(resolve => requestAnimationFrame(resolve));
    const canvas = await html2canvas(stage, {
      backgroundColor:null,
      scale:1,
      width:1080,
      height:1200,
      windowWidth:1080,
      windowHeight:1200,
      useCORS:true,
      allowTaint:false,
      logging:false,
      imageTimeout:5000,
      onclone:clonedDocument => {
        const clonedStage = clonedDocument.getElementById('awardStage');
        const clonedWrap = clonedDocument.getElementById('awardStageWrap');
        if(clonedStage) clonedStage.style.transform = 'none';
        if(clonedWrap){
          clonedWrap.style.width = '1080px';
          clonedWrap.style.height = '1200px';
          clonedWrap.style.overflow = 'visible';
        }
      }
    });
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if(!blob) throw new Error('Canvas 無法輸出 PNG');
    if(generation !== awardImageGeneration) return null;
    awardImageFile = new File([blob], 'beyblade-x-award-report.png', { type:'image/png' });
    return awardImageFile;
  })();

  try{
    return await awardImagePreparePromise;
  }catch(e){
    console.error('產生頒獎戰報圖片失敗', e);
    if(generation === awardImageGeneration) showToast('產生圖片失敗，請重試一次');
    return null;
  }finally{
    if(generation === awardImageGeneration){
      awardImagePreparePromise = null;
      if(btn){
        btn.disabled = false;
        btn.innerHTML = awardImageFile
          ? `${icon('download',14)} 儲存圖片`
          : `${icon('download',14)} 重新產生圖片`;
      }
    }
  }
}

async function downloadAwardImage(){
  const btn = document.getElementById('awardDownloadBtn');
  // 圖片在戰報開啟時就會預先產生；若先前失敗，這次點擊只負責重試產圖，
  // 完成後再點一次即可保留手機分享所需的使用者操作權限。
  if(!awardImageFile){
    const file = await prepareAwardImage();
    if(file) showToast('戰報圖片已準備完成，請再按一次儲存');
    return;
  }

  const file = awardImageFile;
  if(btn) btn.disabled = true;
  try{
    if(navigator.canShare && navigator.canShare({ files:[file] })){
      // 手機使用系統分享選單，可直接選擇「儲存影像」；呼叫前不再執行耗時工作，
      // 避免 iPhone 因使用者操作權限逾時而拒絕分享。
      try{
        await navigator.share({ files:[file], title:'BEYBLADE X 頒獎戰報' });
        return;
      }catch(e){
        if(e && e.name === 'AbortError') return;
        console.warn('系統分享失敗，改用瀏覽器下載', e);
      }
    }

    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    showToast('戰報圖片已下載');
  }catch(e){
    console.error('儲存頒獎戰報圖片失敗', e);
    showToast('儲存失敗，請改用 Safari 或 Chrome 再試一次');
  }finally{
    if(btn) btn.disabled = false;
  }
}

async function copyShareLink(code, btnEl){
  code = (code || '').trim().toUpperCase();
  if(!isValidEventCode(code)){showToast('請向刷新代碼的裁判索取新連結');return;}
  const link = buildShareLink(code);
  try{
    if(navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(link);
    } else {
      const ta = document.createElement('textarea');
      ta.value = link;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToast('連結已複製到剪貼簿');
    if(btnEl){
      const original = btnEl.innerHTML;
      btnEl.classList.add('copied');
      btnEl.innerHTML = `${icon('check-circle',14)} 已複製`;
      clearTimeout(btnEl._resetTimer);
      btnEl._resetTimer = setTimeout(() => {
        btnEl.classList.remove('copied');
        btnEl.innerHTML = original;
      }, 1600);
    }
  }catch(e){
    console.error('複製連結失敗', e);
    showToast('複製失敗，請手動複製連結');
  }
}

/* =========================================================
   CLOUD SYNC — event code join/create + realtime listeners
========================================================= */
let currentEventCode = null;   // canonical Firestore doc id (the referee/full-access code) — never shown to viewers
let currentRole = 'referee';   // 'referee' (full access) | 'viewer' (read-only)
let shareRefCode=null, loadedCodeRevision=0;
let currentViewerCode = null;  // the read-only code paired with this event — safe to display to anyone
let applyingRemote = false;

// ---- Slot-machine "重新抽籤對戰" sync state -----------------------------
// The reshuffle animation used to only ever play on whichever device
// clicked the button — every other connected referee/viewer just saw the
// bracket jump straight to the new draw with no animation. `shuffleAt` is
// broadcast as a plain meta field the moment the animation starts (well
// before the new matches themselves are pushed), so every other device can
// kick off the same visual spin at roughly the same time and only stop it
// once the real new bracket actually arrives.
let scheduleSpinTimer = null;   // timer id for the currently-running spin (local or remote-triggered)
let lastLocalShuffleAt = null;  // stamp of a shuffle *this* device just initiated — used to ignore its own echo
let lastAppliedShuffleAt = null;// last shuffleAt value already reacted to, so unrelated meta pushes don't re-trigger it
let metaInitialized = false;    // true once this device has processed its first meta snapshot (its baseline)
let cloudConnectionState = 'connecting';
let cloudConnectionError = null;
let lastCloudServerAt = null;
let cloudStatusWaitTimer = null;
let lastCloudStatusKey;
let lastCloudPanelSignature;

function onCloudConnectionStatus({phase,error,lastServerAt}){
  cloudConnectionState=phase;
  cloudConnectionError=error || null;
  if(lastServerAt)lastCloudServerAt=lastServerAt;
  if(phase==='connecting' && !cloudStatusWaitTimer){
    cloudStatusWaitTimer=setTimeout(()=>{
      cloudStatusWaitTimer=null;
      if(cloudConnectionState==='connecting'){
        cloudConnectionState='stale';updateCloudStatusUI();
      }
    },15000);
  }else if(phase!=='connecting'){
    clearTimeout(cloudStatusWaitTimer);cloudStatusWaitTimer=null;
  }
  updateCloudStatusUI();
}

function retryCloudConnection(){
  if(!currentEventCode || !window.cloudSync?.ready)return;
  if(navigator.onLine===false){showToast('目前沒有網路，請連線後重試');return;}
  onCloudConnectionStatus({phase:'connecting'});
  window.cloudSync.retry();
  if(cloudUnsynced && currentRole==='referee')void pushToCloud();
}
window.addEventListener('offline',updateCloudStatusUI);
window.addEventListener('online',()=>{
  if(currentEventCode && cloudConnectionState!=='error')onCloudConnectionStatus({phase:'connecting'});
  else updateCloudStatusUI();
});

function initCloud(){
  const ready = () => {
    updateCloudStatusUI();
    if(!window.cloudSync.isConfigured()){
      document.getElementById('cloudNotConfigured').classList.remove('hidden');
      document.getElementById('cloudConfigured').classList.add('hidden');
      openCloudModal(); // 強制彈出：告知目前僅能本機運作
      return;
    }
    document.getElementById('cloudNotConfigured').classList.add('hidden');
    document.getElementById('cloudConfigured').classList.remove('hidden');

    const params = new URLSearchParams(window.location.search);
    const urlCode = (params.get('code') || '').trim().toUpperCase();
    if(isValidEventCode(urlCode)){
      joinEventByCode(urlCode).then(ok => {
        if(!ok){openCloudModal();switchCloudTab('join');document.getElementById('cloudJoinCode').value=urlCode;document.getElementById('cloudError').innerText='無法加入賽事。請確認連線，或向主辦索取最新代碼。';return;}
        const url = new URL(window.location.href);
        url.searchParams.delete('code');
        window.history.replaceState({}, '', url.toString());
      });
      return;
    }

    const savedCode = sessionStorage.getItem(EVENT_CODE_KEY);
    const savedRole = sessionStorage.getItem(EVENT_ROLE_KEY) || 'referee';
    const savedViewerCode = sessionStorage.getItem(EVENT_VIEWER_KEY) || null;
    if(savedCode){
      joinCloudEvent(savedCode, savedRole, savedViewerCode);
    } else if(state.tournament.status === 'running' || playerSetupExpanded){
      // 使用者已經在填名單、或賽事已經開始（例如手速快，在 Firebase 初始化
      // 完成、觸發這段 ready() 之前就已經按下「開始比賽」），此時不該再搶
      // 焦點蓋版跳出連線視窗——那會讓剛產生的對戰樹狀圖被彈窗蓋住，看起來
      // 像「沒有第一時間產生」。改成只更新狀態列的雲端小圖示，讓使用者需要
      // 連線時可以自己從畫面上的按鈕點開，不主動搶畫面。
      updateCloudStatusUI();
    } else {
      // 尚未連線過任何賽事、也還沒開始比賽 → 一進站就強制跳出連線視窗，
      // 使用者可選擇建立/加入賽事，或按「關閉」改為本機運行（無連線功能）。
      openCloudModal();
    }
  };
  if(window.cloudSync && window.cloudSync.ready !== undefined && (window.cloudSync.ready || !window.cloudSync.isConfigured())){
    ready();
  }
  window.addEventListener('cloudsync-ready', ready, { once:true });
}

async function joinEventByCode(code, reportErrors=false){
  try{
    requireCloudReady();
    let timeout;
    const result = await Promise.race([
      window.cloudSync.resolveCode(code),
      new Promise((_,reject)=>{timeout=setTimeout(()=>reject(Object.assign(new Error('timeout'),{code:'deadline-exceeded'})),15000);})
    ]).finally(()=>clearTimeout(timeout));
    if(!result) return false;
    await preserveEventBeforeSwitch();
    const viewerCode = result.role === 'viewer' ? code : (result.data && result.data.viewerCode) || null;
    sessionStorage.setItem(EVENT_CODE_KEY, result.eventCode);
    sessionStorage.setItem(EVENT_ROLE_KEY, result.role);
    sessionStorage.setItem(EVENT_VIEWER_KEY, viewerCode || '');
    if(result.role==='referee')sessionStorage.setItem('bx-ref:'+result.eventCode,JSON.stringify([result.data.codeRevision||0,code]));
    joinCloudEvent(result.eventCode, result.role, viewerCode);
    return true;
  }catch(e){
    console.error('透過分享連結加入賽事失敗', e);
    if(reportErrors)throw e;
    return false;
  }
}

function updateCloudStatusUI(){
  const dot = document.getElementById('cloudDot');
  const text = document.getElementById('cloudStatusText');
  const retry = document.getElementById('cloudStatusRetry');
  if(!dot || !text) return;
  const configured=window.cloudSync?.isConfigured();
  const minute=lastCloudServerAt ? Math.floor(lastCloudServerAt/60000) : null;
  const statusKey=JSON.stringify([
    configured,currentEventCode,currentRole,currentViewerCode,shareRefCode,navigator.onLine,
    cloudConnectionState,cloudConnectionError?.code,cloudUnsynced,cloudSaveQueued>0,minute
  ]);
  if(statusKey===lastCloudStatusKey)return;
  lastCloudStatusKey=statusKey;
  if(retry)retry.classList.add('hidden');
  if(!configured){
    dot.className = 'cloud-dot off';
    text.innerText = '僅本機儲存（未設定雲端）';
  } else if(currentEventCode){
    const shown = currentRole === 'viewer' ? (currentViewerCode || '---') : (shareRefCode || '…');
    const role = currentRole==='viewer'?'選手模式':'裁判模式';
    const roleIcon = icon(currentRole==='viewer'?'user':'gavel',14);
    const offline=navigator.onLine===false;
    const failed=cloudConnectionState==='error' || (cloudUnsynced && cloudSaveQueued===0);
    const stale=cloudConnectionState==='stale';
    const last=lastCloudServerAt ? new Date(lastCloudServerAt).toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'}) : '尚未確認';
    dot.className='cloud-dot '+(failed?'error':offline||stale||cloudConnectionState!=='connected'?'syncing':'on');
    let label='已連線';
    if(cloudUnsynced && cloudSaveQueued>0){
      label='同步中…';
    }else if(cloudUnsynced){
      label='變更尚未同步・請重試';
    }else if(failed){
      const code=String(cloudConnectionError?.code||'');
      label=code.includes('resource-exhausted')?'同步中斷・資料庫配額已滿':code.includes('permission-denied')?'同步中斷・資料庫拒絕存取':'同步中斷・資料可能過期';
    }else if(offline)label='離線・資料可能過期';
    else if(stale)label='同步待確認・資料可能過期';
    else if(cloudConnectionState!=='connected')label='同步中…';
    const lastLabel=(lastCloudServerAt || failed || offline || stale) ? `<span class="cloud-last-check">上次確認 ${last}</span>` : '';
    text.innerHTML=`${label}・<span class="cloud-role">${roleIcon}${role}</span>　代碼 ${escapeHtml(shown)}${lastLabel}`;
    text.title=`伺服器最後確認：${last}`;
    if(retry && (failed || offline || stale))retry.classList.remove('hidden');
  } else {
    dot.className = 'cloud-dot off';
    text.innerText = '單機模式・未連線賽事';
    text.title='';
  }
}

// 賽事代碼：新賽事一律產生 4 碼（31^4 ≈ 92 萬種組合）；
// 舊賽事的 3 碼代碼仍然有效，所以輸入端接受 3～4 碼。
const EVENT_CODE_LEN = 4;
function isValidEventCode(code){ return /^[A-Z0-9]{3,4}$/.test(code); }
const EVENT_CODE_LEN_MSG = '請輸入 4 碼賽事代碼（舊賽事的 3 碼代碼也可以）。';

function genEventCode(){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXY23456789'; // no O/0/I/1 to avoid confusion
  let code = '';
  for(let i=0; i<EVENT_CODE_LEN; i++) code += chars[Math.floor(Math.random()*chars.length)];
  return code;
}
function genDistinctCodePair(){
  const a = genEventCode();
  let b = genEventCode();
  while(b === a) b = genEventCode();
  return [a, b];
}
// 建立賽事：抽一組新代碼 → 先查目前有沒有賽事在用（含選手碼欄位）→ 再用交易「登記 + 建立」。
// 任何一步發現撞碼就換一組重抽，直到建立成功；代碼會永久登記，之後不會再被發給別場賽事。
async function createEventWithFreshCodes(meta,matches=[]){
  for(let i = 0; i < 8; i++){
    const [a, b] = genDistinctCodePair();
    const [ra, rb] = await Promise.all([window.cloudSync.resolveCode(a), window.cloudSync.resolveCode(b)]);
    if(ra || rb) continue;
    const ok=await window.cloudSync.createEventUnique(a,b,meta,matches);
    if(ok) return [a, b];
  }
  throw new Error('無法產生不重複的賽事代碼');
}


const RECENT_EVENTS_KEY='bx-recent-events-v1';
function readRecentEvents(){
  try{const rows=JSON.parse(localStorage.getItem(RECENT_EVENTS_KEY)||'[]');return Array.isArray(rows)?rows.filter(r=>r&&typeof r.id==='string'&&isValidEventCode(r.viewerCode)):[];}catch{return [];}
}
function rememberCurrentEvent(){
  if(!currentEventCode || !isValidEventCode(currentViewerCode))return;
  const rows=readRecentEvents();
  const entry={id:currentEventCode,name:state.tournament.name||DEFAULT_TOURNAMENT_NAME,viewerCode:currentViewerCode,visitedAt:Date.now()};
  // Store only the read-only code; never persist referee access in this list.
  try{localStorage.setItem(RECENT_EVENTS_KEY,JSON.stringify([entry,...rows.filter(r=>r.id!==entry.id)]));}catch{showToast('此瀏覽器無法保存最近賽事，請另行記下選手代碼。');}
}
function renderRecentEvents(){
  const box=document.getElementById('cloudRecentList');if(!box)return;
  const rows=readRecentEvents();
  box.innerHTML=rows.length?rows.map((r,i)=>`<div style="display:flex;gap:8px;align-items:stretch;margin-top:8px">
    <button type="button" class="btn btn-dark" style="flex:1;min-width:0;min-height:48px;text-align:left;display:block;white-space:normal;overflow-wrap:anywhere" onclick="openRecentEvent(${i})"><strong>${escapeHtml(r.name)}</strong><br><small>${escapeHtml(r.viewerCode)} · ${new Date(r.visitedAt).toLocaleDateString('zh-TW')} · ${r.id===currentEventCode?'目前賽事':'查看賽況與紀錄'}</small></button>
    <button type="button" class="btn btn-dark" style="flex:0 0 56px;min-height:48px;padding:8px" onclick="removeRecentEvent(${i})" ${r.id===currentEventCode?'disabled title="請先離開此賽事再刪除紀錄"':''} aria-label="刪除這筆本機查閱紀錄">刪除</button>
  </div>`).join(''):'<p class="text-muted">尚無紀錄。加入或建立賽事後，會保留在這裡。</p>';
}
function removeRecentEvent(index){
  if(cloudConnectionBusy)return;
  const entry=readRecentEvents()[index];if(!entry || entry.id===currentEventCode)return;
  document.getElementById('cloudModal').classList.remove('show');
  showModal('將「'+entry.name+'」從這台裝置的最近賽事移除？雲端賽果不會刪除，仍可用原代碼重新加入。',[
    {label:'取消',className:'btn-dark',action:openCloudModal},
    {label:'刪除紀錄',className:'btn-danger',action:()=>{
      if(entry.id===currentEventCode){openCloudModal();return;}
      try{localStorage.setItem(RECENT_EVENTS_KEY,JSON.stringify(readRecentEvents().filter(r=>r.id!==entry.id)));}
      catch{openCloudModal();showToast('無法刪除，請檢查瀏覽器儲存設定。');return;}
      openCloudModal();showToast('已移除這筆本機紀錄');
    }}
  ],'刪除查閱紀錄');
}
async function preserveEventBeforeSwitch(){
  if(cloudNameSaveTimer){clearTimeout(cloudNameSaveTimer);cloudNameSaveTimer=null;}
  await Promise.allSettled([...pendingCloudSaves]);
  if(currentEventCode && currentRole==='referee' && !await pushToCloud())throw new Error('bx-unsaved-event');
  rememberCurrentEvent();
}
async function openRecentEvent(index){
  if(cloudConnectionBusy)return;
  const entry=readRecentEvents()[index];if(!entry)return;
  document.getElementById('cloudJoinCode').value=entry.viewerCode;
  switchCloudTab('join');
  await handleJoinEvent();
}

async function refreshShareCodes(btn){
  if(cloudConnectionBusy || currentRole!=='referee' || !currentEventCode)return;
  const id=currentEventCode,old=currentViewerCode;
  const msg=document.getElementById('cloudError');msg.innerText='';
  setCloudConnectionBusy('rotate');btn.disabled=true;btn.textContent='刷新中…';
  try{
    requireCloudReady();
    for(let i=0;i<8;i++){
      const [a,b]=genDistinctCodePair();
      if([a,b].some(c=>[id,old,shareRefCode].includes(c)))continue;
      if((await Promise.all([a,b].map(c=>window.cloudSync.resolveCode(c)))).some(Boolean))continue;
      const revision=await window.cloudSync.rotateCodes(id,old,a,b);if(!revision)continue;
      if(currentEventCode!==id)return;
      sessionStorage.setItem('bx-ref:'+id,JSON.stringify([revision,a]));
      shareRefCode=a;currentViewerCode=b;sessionStorage.setItem(EVENT_VIEWER_KEY,b);
      document.getElementById('cloudResultRefCode').innerText=a;
      document.getElementById('cloudResultViewerCode').innerText=b;
      openCloudModal();updateCloudStatusUI();msg.innerText='已刷新兩組代碼，請分享新連結。';return;
    }
    throw new Error('collision');
  }catch(e){msg.innerText=e.message==='stale'?'其他裁判已刷新，請重新開啟查看。':e.code==='permission-denied'?'雲端拒絕修改賽事。請主辦確認裁判寫入權限。':e.message==='collision'?'暫時沒有可用代碼，請再試一次。':'目前無法連上雲端，請確認網路後重試。';}
  finally{btn.disabled=false;btn.textContent='↻ 刷新代碼';setCloudConnectionBusy(null);}
}
function openCloudModal(){
  document.getElementById('cloudError').innerText = '';
  renderRecentEvents();
  const result = document.getElementById('cloudCreatedResult');
  const sameCreatedEvent = !!currentEventCode && !result.classList.contains('hidden')
    && document.getElementById('cloudResultRefCode').innerText === shareRefCode;
  result.classList.toggle('hidden', !sameCreatedEvent);
  const createButton = document.getElementById('cloudCreateBtn');
  createButton.classList.remove('hidden');
  createButton.textContent = currentEventCode ? '建立新賽事' : '建立並產生賽事代碼';
  createButton.onclick = currentEventCode ? askCreateSeparateEvent : handleCreateEvent;
  const cur = document.getElementById('cloudCurrent');
  if(currentEventCode){
    cur.classList.toggle('hidden', sameCreatedEvent);
    const codesEl = document.getElementById('cloudCurrentCodes');
    if(currentRole === 'referee'){
      codesEl.innerHTML = `
        <div class="cloud-code-item">
          <div class="cloud-code-tag">裁判用（完整功能）</div>
              <p class="code-purpose">僅供主辦與裁判：計分、判勝、設定。</p>
          <div class="cloud-code-display">${escapeHtml(shareRefCode||'已更換')}</div>
          <button class="cloud-share-btn" onclick="copyShareLink('${shareRefCode||''}', this)">${icon('link',14)} 複製裁判連結</button>
              <button type="button" class="rotate-codes" onclick="refreshShareCodes(this)">↻ 刷新代碼</button>
        </div>
        ${currentViewerCode ? `
        <div class="cloud-code-item">
          <div class="cloud-code-tag">選手／觀眾用（唯讀）</div>
              <p class="code-purpose">可公開分享，僅能查看戰況與紀錄。</p>
          <div class="cloud-code-display">${escapeHtml(currentViewerCode)}</div>
          <button class="cloud-share-btn" onclick="copyShareLink('${currentViewerCode}', this)">${icon('link',14)} 複製選手連結</button>
          <button class="cloud-share-btn cloud-qr-btn" onclick="showQRCode('${currentViewerCode}')">${icon('qr-code',14)} 顯示 QR 碼</button>
        </div>` : ''}
      `;
    } else {
      codesEl.innerHTML = `
        <div class="cloud-code-item">
          <div class="cloud-code-tag">目前身分：選手／觀眾（唯讀）</div>
              <p class="code-purpose">可公開分享，僅能查看戰況與紀錄。</p>
          <div class="cloud-code-display">${escapeHtml(currentViewerCode || '---')}</div>
          ${currentViewerCode ? `
          <button class="cloud-share-btn" onclick="copyShareLink('${currentViewerCode}', this)">${icon('link',14)} 複製選手連結</button>
          <button class="cloud-share-btn cloud-qr-btn" onclick="showQRCode('${currentViewerCode}')">${icon('qr-code',14)} 顯示 QR 碼</button>` : ''}
        </div>
      `;
    }
  } else {
    cur.classList.add('hidden');
  }
  syncCloudSupplementVisibility();
  document.getElementById('cloudModal').classList.add('show');
}
function hideCloudModal(){
  if(cloudConnectionBusy){showToast('正在處理，請稍候，避免重複建立或刷新。');return;}
  document.getElementById('cloudModal').classList.remove('show');
  // A draft for a different event may preview in setup, but must not rename
  // the currently connected event when the organizer closes this dialog.
  if(currentEventCode && document.getElementById('cloudCreatedResult').classList.contains('hidden')){
    const name = editableTournamentName(state.tournament.name);
    document.getElementById('tournamentName').value = name;
    document.getElementById('cloudNewName').value = name;
  }
  if(!currentEventCode){
    showToast('已改為本機運行，無連線功能');
  }
}
function switchCloudTab(which){
  if(cloudConnectionBusy)return;
  document.getElementById('cloudTabBtnCreate').classList.toggle('active', which==='create');
  document.getElementById('cloudTabBtnJoin').classList.toggle('active', which==='join');
  document.getElementById('cloudPaneCreate').classList.toggle('hidden', which!=='create');
  document.getElementById('cloudPaneJoin').classList.toggle('hidden', which!=='join');
  syncCloudSupplementVisibility();
}
function syncCloudSupplementVisibility(){
  const joining = document.getElementById('cloudTabBtnJoin').classList.contains('active');
  const result = document.getElementById('cloudCreatedResult');
  const sameCreatedEvent = !!currentEventCode && !result.classList.contains('hidden')
    && document.getElementById('cloudResultRefCode').innerText === shareRefCode;
  document.getElementById('cloudCurrent').classList.toggle('hidden', joining || !currentEventCode || sameCreatedEvent);
  document.getElementById('cloudRecentEvents').classList.toggle('hidden', joining);
}

let cloudNameSaveTimer = null;
function editableTournamentName(name){
  return !name || name === DEFAULT_TOURNAMENT_NAME ? '' : name;
}
function commitTournamentNameInput(value){
  const name = value.trim() || DEFAULT_TOURNAMENT_NAME;
  state.tournament.name = name;
  document.getElementById('headerTName').innerText = name;
  if(cloudNameSaveTimer) clearTimeout(cloudNameSaveTimer);
  if(!currentEventCode){
    try{ sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
    return;
  }
  const eventCode = currentEventCode;
  cloudNameSaveTimer = setTimeout(() => {
    cloudNameSaveTimer = null;
    if(currentEventCode !== eventCode) return;
    // A snapshot of the previous title may arrive before this edit is saved.
    state.tournament.name = name;
    document.getElementById('tournamentName').value = value;
    document.getElementById('cloudNewName').value = value;
    document.getElementById('headerTName').innerText = name;
    saveState(true);
  }, 350);
}
function syncSetupTournamentName(value){
  document.getElementById('cloudNewName').value = value;
  commitTournamentNameInput(value);
}
function syncCloudNewName(value){
  document.getElementById('tournamentName').value = value;
  const resultVisible = !document.getElementById('cloudCreatedResult').classList.contains('hidden');
  // Before a new code exists, this is the local event name. If another event
  // is connected, only preview the draft until its own new code is created.
  if(currentEventCode && !resultVisible) return;
  commitTournamentNameInput(value);
}

function requireCloudReady(){
  if(navigator.onLine===false)throw Object.assign(new Error('offline'),{code:'unavailable'});
  if(!window.cloudSync?.ready)throw Object.assign(new Error('loading'),{code:'bx-not-ready'});
}
function cloudActionError(error,action){
  const code=String(error?.code||'');
  if(code.includes('resource-exhausted'))return action+'失敗：資料庫配額已滿，請稍後重試。';
  if(code.includes('permission-denied'))return action+'失敗：雲端拒絕存取，請主辦確認資料庫權限。';
  if(code==='bx-not-ready')return '連線元件尚未就緒，請稍候再試；若持續出現，請重新整理。';
  if(code.includes('deadline-exceeded'))return '查詢逾時，請確認網路後再試一次。';
  if(code.includes('unavailable'))return '目前無法連線，請確認網路後再試。原有賽事資料未清除。';
  if(error?.message==='bx-unsaved-event')return '原賽事尚未同步完成，已暫停切換。請確認網路後再試，舊資料仍保留。';
  return action+'失敗，請確認網路後重試；若持續發生，請聯絡主辦。';
}
let cloudConnectionBusy = false;
let cloudActionWaitTimer = null;
function setCloudConnectionBusy(kind){
  cloudConnectionBusy = !!kind;
  clearTimeout(cloudActionWaitTimer);
  const modal=document.getElementById('cloudModal');
  modal.setAttribute('aria-busy',String(cloudConnectionBusy));
  modal.querySelectorAll('.rotate-codes,.cloud-share-btn,[onclick="leaveCloudEvent()"],[onclick="hideCloudModal()"]')
    .forEach(b=>{b.disabled=cloudConnectionBusy;});
  if(kind)cloudActionWaitTimer=setTimeout(()=>{
    document.getElementById('cloudError').innerText='連線較慢，仍在等待確認。請勿重新整理或重複操作。';
  },15000);
  for(const [id,label,action] of [['cloudCreateBtn','建立並產生賽事代碼','create'],['cloudJoinBtn','加入這場賽事','join']]){
    const button = document.getElementById(id);
    button.disabled = cloudConnectionBusy;
    button.textContent = kind === action ? (action === 'create' ? '建立中…' : '加入中…') : label;
    button.setAttribute('aria-busy', String(kind === action));
  }
  for(const id of ['cloudNewName','cloudJoinCode','cloudTabBtnCreate','cloudTabBtnJoin']){
    document.getElementById(id).disabled = cloudConnectionBusy;
  }
}

async function handleCreateEvent(){
  if(cloudConnectionBusy) return;
  setCloudConnectionBusy('create');
  const errEl = document.getElementById('cloudError');
  errEl.innerText = '';
  const name = document.getElementById('cloudNewName').value.trim() || DEFAULT_TOURNAMENT_NAME;
  try{
    requireCloudReady();
    await preserveEventBeforeSwitch();
    const [refCode, viewerCode] = await createEventWithFreshCodes({
      name, pointsToWin: state.tournament.pointsToWin,
      format: state.tournament.format, status: state.tournament.status,
      players: state.players, teams: state.teams || [], currentRound: state.currentRound
    }, JSON.parse(JSON.stringify(state.matches)));

    state.tournament.name = name;
    sessionStorage.setItem(EVENT_CODE_KEY, refCode);
    sessionStorage.setItem(EVENT_ROLE_KEY, 'referee');
    sessionStorage.setItem(EVENT_VIEWER_KEY, viewerCode);
    joinCloudEvent(refCode, 'referee', viewerCode);

    document.getElementById('cloudResultRefCode').innerText = refCode;
    document.getElementById('cloudResultViewerCode').innerText = viewerCode;
    document.getElementById('cloudCreatedResult').classList.remove('hidden');
    document.getElementById('cloudCreateBtn').classList.add('hidden');
    document.getElementById('cloudCurrent').classList.add('hidden');
  }catch(e){
    errEl.innerText = cloudActionError(e, '建立');
    console.error(e);
  }finally{
    setCloudConnectionBusy(null);
  }
}

async function handleJoinEvent(){
  if(cloudConnectionBusy) return;
  const errEl = document.getElementById('cloudError');
  errEl.innerText = '';
  const code = document.getElementById('cloudJoinCode').value.trim().toUpperCase();
  if(!isValidEventCode(code)){ errEl.innerText = EVENT_CODE_LEN_MSG; return; }
  setCloudConnectionBusy('join');
  try{
    const ok = await joinEventByCode(code, true);
    if(!ok){ errEl.innerText = '找不到這組賽事代碼，請確認是否輸入正確。'; return; }
    setCloudConnectionBusy(null);
    hideCloudModal();
  }catch(e){
    errEl.innerText = cloudActionError(e, '加入');
    console.error(e);
  }finally{
    setCloudConnectionBusy(null);
  }
}

function joinCloudEvent(refCode, role, viewerCode){
  if(currentEventCode!==refCode){clearDrawMeter();dirtyMatchIds.clear();editBase.clear();cloudMatchBase.clear();cloudMetaBase=null;cloudMetaPending=null;cloudUnsynced=false;cloudRetryDelay=3000;cloudNeedsFullReplace=false;clearTimeout(cloudRetryTimer);cloudRetryTimer=null;metaInitialized=false;lastAppliedShuffleAt=null;lastCloudServerAt=null;lastCloudPanelSignature=undefined;}
  shareRefCode=refCode;loadedCodeRevision=0;
  currentEventCode = refCode;
  document.getElementById('cloudCreateBtn').classList.add('hidden');
  currentRole = role || 'referee';
  currentViewerCode = viewerCode || currentViewerCode || null;
  window.cloudSync.join(refCode, onCloudMeta, onCloudMatches, onCloudConnectionStatus);
  applyRoleUI();
  updateCloudStatusUI();
}

function applyRoleUI(){
  document.body.classList.toggle('viewer-mode', currentRole === 'viewer');
  if(currentRole === 'viewer'){
    const activeTab = document.querySelector('.tab.active');
    if(activeTab && (activeTab.dataset.tab === 'referee' || activeTab.dataset.tab === 'setup')){
      switchTab('standings');
    }
  }
  renderAll();
}

function leaveCloudEvent(){
  if(cloudConnectionBusy || !currentEventCode)return;
  document.getElementById('cloudModal').classList.remove('show');
  showModal('離開後改為單機操作，保留目前畫面資料；後續修改不會同步到原賽事。原雲端賽果與代碼仍保留。',[
    {label:'取消',className:'btn-dark',action:openCloudModal},
    {label:'切換單機',className:'btn-primary',action:async()=>{
      if(cloudConnectionBusy)return;
      setCloudConnectionBusy('leave');
      try{
        await preserveEventBeforeSwitch();
        window.cloudSync?.leave?.();
        currentEventCode=null;currentViewerCode=null;shareRefCode=null;loadedCodeRevision=0;
        currentRole='referee';
        clearTimeout(cloudRetryTimer);cloudRetryTimer=null;
        dirtyMatchIds.clear();editBase.clear();cloudMatchBase.clear();cloudNeedsFullReplace=false;
        cloudMetaBase=null;cloudMetaPending=null;cloudUnsynced=false;cloudConnectionState='connecting';lastCloudServerAt=null;
        clearTimeout(cloudStatusWaitTimer);cloudStatusWaitTimer=null;
        clearDrawMeter();
        sessionStorage.removeItem(EVENT_CODE_KEY);
        sessionStorage.removeItem(EVENT_ROLE_KEY);
        sessionStorage.removeItem(EVENT_VIEWER_KEY);
        sessionStorage.setItem(STORAGE_KEY,JSON.stringify(state));
        applyRoleUI();updateCloudStatusUI();
        showToast('已切換單機，後續操作僅儲存在這台裝置');
      }catch(e){openCloudModal();document.getElementById('cloudError').innerText=cloudActionError(e,'離開');}
      finally{setCloudConnectionBusy(null);}
    }}
  ],'離開賽事');
}

function onCloudMeta(data){
  const isFirstMeta=!metaInitialized;
  const previousViewerCode=currentViewerCode;
  const previousName=state.tournament.name;
  cloudMetaBase=cloudMetaSignature(data);
  if(data.codeRevision && data.codeRevision!==loadedCodeRevision){
    const id=currentEventCode,rev=data.codeRevision;loadedCodeRevision=rev;
    currentViewerCode=data.viewerCode;sessionStorage.setItem(EVENT_VIEWER_KEY,currentViewerCode);
    const showingResult=!document.getElementById('cloudCreatedResult').classList.contains('hidden');
    const paint=()=>{if(showingResult){
      document.getElementById('cloudResultRefCode').innerText=shareRefCode||'已更換';
      document.getElementById('cloudResultViewerCode').innerText=currentViewerCode;
    }updateCloudStatusUI();if(document.getElementById('cloudModal').classList.contains('show'))openCloudModal();};
    if(currentRole==='referee' && data.codeRouteFormat===1){
      let saved;try{saved=JSON.parse(sessionStorage.getItem('bx-ref:'+id))}catch{}
      shareRefCode=saved?.[0]===rev?saved[1]:null;paint();
    }else if(currentRole==='referee'){
      shareRefCode=null;
      window.cloudSync.currentRefAlias(id).then(code=>{
        if(id===currentEventCode && loadedCodeRevision===rev && currentRole==='referee'){shareRefCode=code;paint();}
      }).catch(()=>{if(id===currentEventCode){loadedCodeRevision=0;updateCloudStatusUI();}});
    }else paint();
  }

  applyingRemote = true;

  // Detect a reshuffle broadcast from ANY device (see "Slot-machine sync
  // state" above). Compare against lastAppliedShuffleAt so an unrelated
  // meta push (which still carries the same, already-seen shuffleAt field
  // via Firestore's merge) never re-triggers the spin. The very first
  // snapshot this device ever receives (on page load / join) just adopts
  // whatever shuffleAt is already on record as the baseline — it's history,
  // not a live event, so it must not play the animation.
  const shuffleIsFresh = metaInitialized
    && data.shuffleAt
    && data.shuffleAt !== lastAppliedShuffleAt
    && data.shuffleAt !== lastLocalShuffleAt; // ignore the echo of our own broadcast — that device is already spinning
  // Hosted/Firebase mode immediately echoes this device's own shuffleAt write.
  // Re-rendering on that echo replaces every name node captured by
  // startScheduleSpin(), making the flicker appear to vanish online even
  // though it works offline. The echo contains no new tournament content,
  // so retain the current DOM until finalizeScheduleShuffle() renders the
  // completed draw.
  const isOwnShuffleEcho = scheduleSpinTimer !== null
    && !!data.shuffleAt
    && data.shuffleAt === lastLocalShuffleAt;
  metaInitialized = true;
  if(data.shuffleAt) lastAppliedShuffleAt = data.shuffleAt;

  const beforeMetaView=JSON.stringify([state.tournament,state.players,state.teams,state.currentRound]);
  const cloudPanels=Array.isArray(data.refereePanels) && data.refereePanels.length>0 ? data.refereePanels : null;
  const panelSignature=cloudPanels ? matchSignature(cloudPanels) : undefined;
  const panelsChanged=!!cloudPanels && panelSignature!==lastCloudPanelSignature;
  lastCloudPanelSignature=panelSignature;
  const editingNameInput = currentRole === 'referee' && (
    document.activeElement?.id === 'tournamentName'
    || (document.activeElement?.id === 'cloudNewName'
      && !document.getElementById('cloudCreatedResult').classList.contains('hidden'))
  );
  state.tournament.name = editingNameInput
    ? (document.activeElement.value.trim() || DEFAULT_TOURNAMENT_NAME)
    : (data.name ?? state.tournament.name);
  state.tournament.pointsToWin = data.pointsToWin ?? state.tournament.pointsToWin;
  state.tournament.format = data.format ?? state.tournament.format;
  state.tournament.quickMode = data.quickMode ?? state.tournament.quickMode;
  if(Object.prototype.hasOwnProperty.call(data, 'bracketCourtCount')){
    // Positive integer = configured; 0 = explicitly cleared; null/missing (older
    // clients) = "unknown", so keep the local value instead of overwriting it.
    const remoteCourts = Number(data.bracketCourtCount);
    if(data.bracketCourtCount === 0){
      delete state.tournament.bracketCourtCount;
    }else if(Number.isInteger(remoteCourts) && remoteCourts >= 1 && !bracketCourtCountClearPending){
      state.tournament.bracketCourtCount = Math.min(12, remoteCourts);
    }
  }
  state.tournament.status = data.status ?? state.tournament.status;
  state.players = Array.isArray(data.players) ? data.players : state.players;
  state.teams = Array.isArray(data.teams) ? data.teams : (state.teams || []);
  state.currentRound = data.currentRound ?? state.currentRound;
  if(data.viewerCode && data.viewerCode!==currentViewerCode && currentRole === 'referee'){
    currentViewerCode = data.viewerCode;
    sessionStorage.setItem(EVENT_VIEWER_KEY, data.viewerCode);
  }
  // Referee-table assignments ("進行中" vs "即將上場" on the bracket) live in
  // refereePanels. This used to be localStorage-only, so any device other
  // than the one that made the assignment never learned which match was
  // actually live and fell back to guessing its own "next" match — showing
  // "即將上場" for a match that was really "進行中" on the referee's device.
  // Apply the synced copy here so every device agrees.
  if(panelsChanged){
    const priorMatchByPanel = new Map(refereePanels.map(panel => [panel.id, panel.matchId]));
    cloudPanels.forEach(panel => {
      if(priorMatchByPanel.has(panel.id) && priorMatchByPanel.get(panel.id) !== panel.matchId){
        refereeNextMatchChoices.delete(panel.id);
        refereePanelDisplayPriority.delete(panel.id);
      }
    });
    refereePanels = cloudPanels;
    try{ sessionStorage.setItem(PANELS_KEY, JSON.stringify(refereePanels)); }catch(e){}
  }
  const metaViewChanged=beforeMetaView!==JSON.stringify([state.tournament,state.players,state.teams,state.currentRound]);
  if(metaViewChanged)try{ sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  if(!isOwnShuffleEcho && (metaViewChanged || panelsChanged || shuffleIsFresh)){
    renderAll({refreshSetup:metaViewChanged});
  }
  updateCloudStatusUI();
  applyingRemote = false;
  if(isFirstMeta || previousName!==state.tournament.name || previousViewerCode!==currentViewerCode)rememberCurrentEvent();

  // Start the spin only AFTER renderAll() has (re)built the bracket DOM —
  // starting it earlier would grab name elements that renderAll() then
  // immediately throws away, leaving nothing visibly spinning. A generous
  // fallback timeout clears it even if the real reshuffled matches never
  // arrive (e.g. the connection drops), so the tree can't spin forever.
  if(data.shuffleCount===5 && data.shuffleAt!==lastLocalShuffleAt){
    receiveRemoteShuffle(data);
  }else if(shuffleIsFresh && data.shuffleCount!==5){
    try{previewScheduleShuffle(generateScheduleShufflePreview(),520);}
    catch(error){console.warn('抽籤樹狀圖預覽更新失敗',error);startScheduleSpin();}
    setTimeout(()=>{if(lastAppliedShuffleAt===data.shuffleAt)stopScheduleSpin();},4000);
  }
}

// Compare the complete match, including team lineups and bracket flags. Sort
// nested keys first so Firestore's field order cannot create a false change.
function matchSignature(m){
  if(!m) return '';
  return JSON.stringify(stableCloudValue(m));
}

// Only the displayed point values change in the tree after an ongoing score
// tap. If status or participants change, the normal full render is required
// to update badges, upcoming matches, connectors and final results.
function isBracketScoreOnlyChange(previous,current){
  if(!previous || !current || state.tournament.format==='team3v3' ||
     isMatchLive(previous)!==isMatchLive(current))return false;
  const {pointsA:oldA,pointsB:oldB,log:oldLog,...before}=previous;
  const {pointsA:newA,pointsB:newB,log:newLog,...after}=current;
  return matchSignature(before)===matchSignature(after);
}

function patchBracketMatchScore(matchId){
  const match=state.matches.find(m=>m.id===matchId);
  const card=document.querySelector(`#bracketTree .bracket-match[data-match-id="${cssEscapeId(matchId)}"]`);
  if(!match || !card)return false;
  const slots=card.querySelectorAll('.bracket-slot');
  if(slots.length!==2)return false;
  const showPoints=!match.quickWin &&
    (Number(match.pointsA)>0 || Number(match.pointsB)>0 ||
      (match.status==='completed' && !state.tournament.quickMode));
  [match.playerA,match.playerB].forEach((player,i)=>{
    let points=slots[i].querySelector('.bslot-pts');
    if(!showPoints || !player || player==='BYE'){
      points?.remove();
      return;
    }
    if(!points){points=document.createElement('span');points.className='bslot-pts';slots[i].append(points);}
    const value=Number(i===0?match.pointsA:match.pointsB)||0;
    points.textContent=String(value);
    points.setAttribute('aria-label',`比分 ${value}`);
  });
  return true;
}

function compareCloudMatches(a,b){
  if(a.round !== b.round)return a.round-b.round;
  const slot = match => parseInt(String(match.id).split('-')[1] || 0, 10) || 0;
  return slot(a)-slot(b);
}

function onCloudMatches(list, incremental=false){
  // A draw may finish while the stream is receiving its previous schedule.
  if(cloudNeedsFullReplace)return false;
  if(!incremental && list.length===0 && state.matches.length>0 && remoteShuffle &&
     remoteShuffle.event===currentEventCode && Date.now()-remoteShuffle.run<20000)return false;

  const previous=new Map(state.matches.map(m=>[m.id,m]));
  const merged=incremental ? new Map(previous) : new Map();
  const changedIds=[];
  let structureChanged=false;
  if(!incremental)cloudMatchBase.clear();
  const changes=incremental ? list : list.map(match=>({id:match.id,match}));
  for(const {id,match} of changes){
    const prior=previous.get(id);
    if(!match){
      cloudMatchBase.delete(id);
      if(merged.delete(id))structureChanged=true;
      continue;
    }
    const signature=matchSignature(match);
    cloudMatchBase.set(id,signature);
    if(prior && (dirtyMatchIds.has(id) || matchSignature(prior)===signature)){
      merged.set(id,prior);
      continue;
    }
    merged.set(id,match);
    if(!prior || prior.round!==match.round)structureChanged=true;
    else changedIds.push(id);
  }
  structureChanged ||= merged.size!==previous.size;
  if(!structureChanged && !changedIds.length)return true;

  applyingRemote = true;
  state.matches = structureChanged ? Array.from(merged.values()).sort(compareCloudMatches)
    : state.matches.map(match=>merged.get(match.id));
  try{ sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}

  // The real reshuffled bracket has arrived — stop any slot-machine spin
  // this device kicked off in response to the shuffleAt broadcast (or its
  // own local one) before rendering the actual new draw over it. A reshuffle
  // always touches every match at once, so it always lands in the
  // structureChanged/multi-match branch below, never the single-match one.
  const isFullRebuild = structureChanged || changedIds.length > 1;
  if(isFullRebuild && !remoteShuffleActive()) stopScheduleSpin();

  if(isFullRebuild){
    renderAll({refreshSetup:false});
    if(remoteShuffle && remoteShuffle.event===currentEventCode && Date.now()-remoteShuffle.run<20000){
      remoteShuffle.resultReady=true;
      if(remoteShuffle.step===5 && !remoteShuffle.revealed){remoteShuffle.revealed=true;revealShuffleResult();}
    }
  }
  else if(changedIds.length === 1)
    refreshAfterScoreChange(changedIds[0],previous.get(changedIds[0]));
  applyingRemote = false;
  return true;
}

/* =========================================================
   SETUP: PLAYER ROWS
========================================================= */
let restoringRosterDraft = false;
let rosterDraftPrompted = false;
let rosterDraftSavePrompted = false;
let rosterDraftEnabled = false;

function normalizePlayerName(name){
  return String(name || '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('zh-Hant');
}

function findDuplicatePlayerChip(name, exceptChip){
  const key = normalizePlayerName(name);
  return Array.from(document.querySelectorAll('#playerInputs .player-chip'))
    .find(chip => chip !== exceptChip && normalizePlayerName(chip.dataset.name) === key);
}

function saveRosterDraft(){
  if(!rosterDraftEnabled || restoringRosterDraft || state.tournament.status === 'running') return;
  const players = Array.from(document.querySelectorAll('#playerInputs .player-chip')).map(chip => ({
    name: chip.dataset.name || '', attendance: chip.dataset.attendance || 'pending'
  })).filter(p => p.name.trim());
  try{
    if(players.length) localStorage.setItem(ROSTER_DRAFT_KEY, JSON.stringify({ consented:true, players, updatedAt:Date.now() }));
    else localStorage.removeItem(ROSTER_DRAFT_KEY);
  }catch(e){}
}

function offerRosterDraftSave(prefixMessage){
  if(rosterDraftEnabled || rosterDraftSavePrompted || restoringRosterDraft || state.tournament.status === 'running') return false;
  const count = document.querySelectorAll('#playerInputs .player-chip').length;
  if(count === 0) return false;
  rosterDraftSavePrompted = true;
  const prefix = prefixMessage ? `${prefixMessage}\n\n` : '';
  showModal(`${prefix}是否將目前 ${count} 位玩家名單儲存為草稿？只有選擇儲存後，下次開啟網站才會保留這份名單。`, [
    { label:'不要儲存', className:'btn-dark' },
    { label:'儲存草稿', className:'btn-primary', action:() => {
      rosterDraftEnabled = true;
      saveRosterDraft();
      showToast('名單草稿已儲存');
    }}
  ]);
  return true;
}

function readRosterDraft(){
  try{
    const draft = JSON.parse(localStorage.getItem(ROSTER_DRAFT_KEY) || 'null');
    return draft && draft.consented === true && Array.isArray(draft.players) && draft.players.length ? draft : null;
  }catch(e){ return null; }
}

function restoreRosterDraft(draft){
  if(!draft || !Array.isArray(draft.players)) return;
  restoringRosterDraft = true;
  createPlayerInputs(0);
  addPlayerChips(draft.players);
  restoringRosterDraft = false;
  rosterDraftEnabled = true;
  rosterDraftSavePrompted = true;
  showToast(`已恢復 ${draft.players.length} 位選手與點名狀態`);
}

function createPlayerInputs(n){
  // n 保留參數相容舊呼叫點，但晶片式清單不需要空白佔位列
  const container = document.getElementById('playerInputs');
  container.innerHTML = '';
  ensureChipInput(container);
  renumberPlayerRows();
}

function ensureChipInput(container){
  if(document.getElementById('playerChipInput')) return;
  const input = document.createElement('input');
  input.id = 'playerChipInput';
  input.className = 'chip-text-input';
  input.placeholder = '輸入選手姓名';
  input.setAttribute('aria-label','選手姓名');
  input.addEventListener('keydown', onChipInputKeydown);
  container.appendChild(input);
}

function onChipInputKeydown(e){
  const input = e.target;
  if(e.key === 'Enter' || e.key === ','){
    e.preventDefault();
    const name = input.value.trim();
    if(name){
      const added = addPlayerChip(name);
      input.value = '';
      if(added) offerRosterDraftSave();
    }
  } else if(e.key === 'Backspace' && input.value === ''){
    const container = document.getElementById('playerInputs');
    const chips = container.querySelectorAll('.player-chip');
    if(chips.length > 0) chips[chips.length-1].remove();
    renumberPlayerRows();
    saveRosterDraft();
  }
}

function addPlayerChip(name, attendance, batch){
  const container = document.getElementById('playerInputs');
  ensureChipInput(container);
  const displayName = String(name || '').trim().replace(/\s+/g, ' ');
  if(!displayName) return false;
  const normalized=normalizePlayerName(displayName);
  if(batch ? batch.names.has(normalized) : findDuplicatePlayerChip(displayName)){
    if(!batch)showToast(`已忽略重複姓名：${displayName}`);
    return false;
  }
  const chip = document.createElement('span');
  chip.className = 'player-chip';
  chip.dataset.name = displayName;
  chip.dataset.attendance = attendance || 'pending';
  const idx = batch ? ++batch.count : container.querySelectorAll('.player-chip').length + 1;
  chip.innerHTML = `
    <span class="chip-index">${String(idx).padStart(2,'0')}</span>
    <span class="chip-name" ondblclick="editChip(this)" title="雙擊可重新命名">${escapeHtml(displayName)}</span>
    <button type="button" class="chip-remove" onclick="removePlayerChip(this)" title="移除" aria-label="移除">×</button>
  `;
  const chipInput = document.getElementById('playerChipInput');
  container.insertBefore(chip, chipInput);
  if(batch)batch.names.add(normalized);
  else {
    renumberPlayerRows();
    saveRosterDraft();
  }
  return true;
}

function addPlayerChips(players){
  const existing=Array.from(document.querySelectorAll('#playerInputs .player-chip'));
  const batch={count:existing.length,names:new Set(existing.map(chip=>normalizePlayerName(chip.dataset.name)))};
  let added=0;
  for(const player of players){
    if(addPlayerChip(player.name,player.attendance,batch))added++;
  }
  renumberPlayerRows();
  saveRosterDraft();
  return {added,total:batch.count};
}

function editChip(nameSpan){
  const chip = nameSpan.closest('.player-chip');
  if(!chip) return;
  const current = chip.dataset.name || '';
  const input = document.createElement('input');
  input.className = 'chip-edit-input';
  input.value = current;
  input.style.width = Math.max(40, current.length*8) + 'px';
  chip.replaceChild(input, nameSpan);
  input.focus();
  input.select();

  let committed = false;
  const commit = () => {
    if(committed) return;
    committed = true;
    const val = input.value.trim().replace(/\s+/g, ' ');
    if(!val){ chip.remove(); renumberPlayerRows(); return; }
    if(findDuplicatePlayerChip(val, chip)){
      showAlert(`「${val}」已在參賽名單內，請使用不同姓名或加上辨識碼。`);
      input.value = current;
      committed = false;
      input.focus();
      return;
    }
    chip.dataset.name = val;
    chip.classList.remove('input-error');
    const newSpan = document.createElement('span');
    newSpan.className = 'chip-name';
    newSpan.title = '雙擊可重新命名';
    newSpan.textContent = val;
    newSpan.ondblclick = () => editChip(newSpan);
    if(input.parentNode === chip) chip.replaceChild(newSpan, input);
    renumberPlayerRows();
    renderAttendanceManager();
    saveRosterDraft();
  };
  input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){ e.preventDefault(); commit(); }
    if(e.key === 'Escape'){ e.preventDefault(); input.value = current; commit(); }
  });
  input.addEventListener('blur', commit);
}

function addPlayerRow(){
  ensureChipInput(document.getElementById('playerInputs'));
  const input=document.getElementById('playerChipInput');
  if(input.value.trim() && addPlayerChip(input.value)){
    input.value='';
    offerRosterDraftSave();
  }else input.focus();
}

function addTeamEntry(team){
  const wrap = document.getElementById('teamInputs');
  if(!wrap) return;
  const index = wrap.querySelectorAll('.team-entry').length;
  const entry = document.createElement('div');
  entry.className = 'team-entry';
  entry.innerHTML = `
    <div class="team-entry-head">
      <span class="team-entry-index">TEAM ${String(index + 1).padStart(2,'0')}</span>
      <input class="text-input team-entry-name" data-team-name placeholder="隊伍名稱" value="${escapeAttr(team?.name || '')}">
      <button type="button" class="icon-btn" onclick="removeTeamEntry(this)" aria-label="移除隊伍" title="移除隊伍">${icon('x',15)}</button>
    </div>
    <div class="team-members">
      ${[0,1,2].map(i => `<label class="team-member-field"><span class="team-member-number">${i+1}</span><input class="text-input" data-team-member="${i}" placeholder="團員 ${i+1}" value="${escapeAttr(team?.members?.[i]?.name || team?.members?.[i] || '')}"></label>`).join('')}
    </div>`;
  wrap.appendChild(entry);
  renumberTeamEntries();
}

function removeTeamEntry(button){
  button.closest('.team-entry')?.remove();
  renumberTeamEntries();
}

function renumberTeamEntries(){
  document.querySelectorAll('#teamInputs .team-entry').forEach((entry,i) => {
    const label = entry.querySelector('.team-entry-index');
    if(label) label.textContent = `TEAM ${String(i+1).padStart(2,'0')}`;
  });
}

function renderTeamInputs(teams){
  const wrap = document.getElementById('teamInputs');
  if(!wrap) return;
  wrap.innerHTML = '';
  const source = Array.isArray(teams) && teams.length ? teams : [null,null];
  source.forEach(team => addTeamEntry(team));
}

function collectTeamEntries(){
  return Array.from(document.querySelectorAll('#teamInputs .team-entry')).map((entry,i) => ({
    id:`T${String(i+1).padStart(2,'0')}`,
    name:(entry.querySelector('[data-team-name]')?.value || '').trim(),
    members:[0,1,2].map(j => ({
      id:`T${String(i+1).padStart(2,'0')}-M${j+1}`,
      name:(entry.querySelector(`[data-team-member="${j}"]`)?.value || '').trim()
    }))
  }));
}

function onFormatChange(userChanged){
  const format = document.getElementById('formatSelect').value;
  const isTeam = format === 'team3v3';
  const isKnockout = isElimination(format);
  document.getElementById('playerSetupSection').classList.toggle('hidden', isTeam);
  document.getElementById('teamSetupSection').classList.toggle('hidden', !isTeam);
  document.getElementById('pointsToWinSection').classList.toggle('hidden', isTeam);
  document.getElementById('bulkAddSection').classList.toggle('hidden', !isKnockout || isTeam);
  document.getElementById('quickModeSection').classList.toggle('hidden', !isKnockout || isTeam);
  if(!isKnockout || isTeam) document.getElementById('quickModeCheckbox').checked = false;
  else if(userChanged) document.getElementById('quickModeCheckbox').checked = true;
  if(isTeam && document.querySelectorAll('#teamInputs .team-entry').length === 0) renderTeamInputs(state.teams);
  const note = document.getElementById('formatNote');
  if(note){
    const descriptions = {
      knockout:'輸一場即出局。輪空選手直接晉級。',
      double_elimination:'首敗進敗部，再敗出局。敗部冠軍須連贏兩場總決賽。',
      single:'每兩位選手對戰一次。',
      double:'每兩位選手對戰兩次。',
      team3v3:'每位團員有 2 HP。HP 歸零換下一位，勝者帶著剩餘 HP 留場。三人全數淘汰即落敗。'
    };
    note.textContent = descriptions[format] || '';
  }
}

function applyBulkNames(){
  const raw = document.getElementById('bulkNamesInput').value;
  const names = raw.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  if(names.length === 0){
    showAlert('請輸入至少 1 位玩家名稱，一行一個。');
    return;
  }

  const {added,total}=addPlayerChips(names.map(name=>({name})));
  document.getElementById('bulkNamesInput').value = '';
  const duplicates=names.length-added;
  const duplicateMessage=duplicates ? `，已自動忽略 ${duplicates} 筆重複姓名` : '';
  const resultMessage=`已新增 ${added} 位玩家${duplicateMessage}。目前參賽名單共 ${total} 位。`;
  if(!offerRosterDraftSave(resultMessage)) showAlert(resultMessage);
}

function removePlayerChip(btn){
  const chip = btn.closest('.player-chip');
  if(chip) chip.remove();
  renumberPlayerRows();
  renderAttendanceManager();
  saveRosterDraft();
}

function renumberPlayerRows(){
  const chips = document.querySelectorAll('#playerInputs .player-chip');
  chips.forEach((chip, i) => {
    const badge = chip.querySelector('.chip-index');
    if(badge) badge.textContent = String(i+1).padStart(2,'0');
  });
  const hint = document.getElementById('playerCountHint');
  if(hint) hint.textContent = chips.length > 0 ? `已新增 ${chips.length} 位` : '';
  const chipInput = document.getElementById('playerChipInput');
  if(chipInput) chipInput.placeholder = chips.length > 0 ? '新增選手姓名' : '輸入選手姓名';
  if(attendanceManagerOpen) renderAttendanceManager();
  syncPrizeDrawPlayers();
}

/* =========================================================
   OPTIONAL ATTENDANCE & ROSTER MANAGEMENT
   點名未開啟時完全不影響原開賽流程；標記「未到」才會被排除。
========================================================= */
function toggleAttendanceManager(){
  const chipInput = document.getElementById('playerChipInput');
  if(!attendanceManagerOpen && chipInput && chipInput.value.trim()){
    addPlayerChip(chipInput.value.trim());
    chipInput.value = '';
  }
  attendanceManagerOpen = !attendanceManagerOpen;
  if(!attendanceManagerOpen) clearAttendanceSearch();
  renderAttendanceManager();
}

function renderAttendanceManager(changedIndex){
  const manager = document.getElementById('attendanceManager');
  const panel = document.getElementById('attendancePanel');
  const toggle = document.getElementById('attendanceToggleBtn');
  const list = document.getElementById('attendanceList');
  const counts = document.getElementById('attendanceCounts');
  if(!manager || !panel || !toggle || !list || !counts) return;

  manager.classList.toggle('open', attendanceManagerOpen);
  panel.classList.toggle('hidden', !attendanceManagerOpen);
  toggle.setAttribute('aria-expanded', attendanceManagerOpen ? 'true' : 'false');
  const toggleState = document.getElementById('attendanceToggleState');
  if(toggleState) toggleState.textContent = attendanceManagerOpen ? '收合' : '開啟';
  if(!attendanceManagerOpen) return;

  const chips = Array.from(document.querySelectorAll('#playerInputs .player-chip'));
  const arrived = chips.filter(chip => chip.dataset.attendance === 'arrived').length;
  const absent = chips.filter(chip => chip.dataset.attendance === 'absent').length;
  const pending = chips.length - arrived - absent;
  counts.innerHTML = `<span class="arrived">已到 ${arrived}</span> ／ <span class="absent">未到 ${absent}</span> ／ <span class="pending">待確認 ${pending}</span>`;
  const nextPendingBtn = document.getElementById('attendanceNextPendingBtn');
  if(nextPendingBtn){
    nextPendingBtn.disabled = pending === 0;
    nextPendingBtn.innerHTML = pending === 0 ? `${icon('check',13)} 已全部確認` : `下一位待確認 ${icon('arrow-right',13)}`;
  }

  if(chips.length === 0){
    list.innerHTML = '<div class="attendance-empty">請先在上方新增玩家名單</div>';
    return;
  }

  const row=Number.isInteger(changedIndex) ? list.children[changedIndex] : null;
  if(row && chips[changedIndex]){
    const focused=document.activeElement;
    const action=focused?.matches('.attendance-action.arrived,.attendance-action.absent') && row.contains(focused)
      ? (focused.classList.contains('arrived') ? '.arrived' : '.absent') : null;
    row.outerHTML=attendanceRowMarkup(chips[changedIndex],changedIndex);
    if(action)list.children[changedIndex].querySelector(action)?.focus({preventScroll:true});
  }else{
    list.innerHTML=chips.map(attendanceRowMarkup).join('');
    const searchInput = document.getElementById('attendanceSearchInput');
    if(searchInput && searchInput.value.trim()) searchAttendancePlayers(searchInput.value);
  }
}

function attendanceRowMarkup(chip,index){
  const status = chip.dataset.attendance || 'pending';
  const rowClass = status === 'arrived' ? ' is-arrived' : status === 'absent' ? ' is-absent' : '';
  return `<div class="attendance-row${rowClass}" data-player-index="${index}">
    <div class="attendance-player">
      <span class="attendance-index">${String(index + 1).padStart(2,'0')}</span>
      <span class="attendance-player-name">${escapeHtml(chip.dataset.name || '')}</span>
    </div>
    <div class="attendance-actions">
      <button type="button" class="attendance-action arrived${status === 'arrived' ? ' active' : ''}" onclick="setAttendanceStatus(${index},'arrived')" aria-pressed="${status === 'arrived'}" title="標記報到">${icon(status === 'arrived' ? 'check' : 'user-check',14)}<span>${status === 'arrived' ? '已報到' : '報到'}</span></button>
      <button type="button" class="attendance-action absent${status === 'absent' ? ' active' : ''}" onclick="setAttendanceStatus(${index},'absent')" aria-pressed="${status === 'absent'}" title="標記未到">${icon('user-x',14)}<span>未到</span></button>
      <details class="attendance-more">
        <summary class="attendance-action" aria-label="更多選手操作" title="更多操作">⋯</summary>
        <div class="attendance-more-menu">
          <button type="button" onclick="startAttendanceNameEdit(${index},this);this.closest('details').removeAttribute('open')">${icon('edit-3',14)}<span>編輯姓名</span></button>
          <button type="button" class="delete" onclick="this.closest('details').removeAttribute('open');deleteAttendancePlayer(${index})">${icon('trash-2',14)}<span>刪除選手</span></button>
        </div>
      </details>
    </div>
  </div>`;
}

function normalizeAttendanceSearch(text){
  return String(text || '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .replace(/[\s\-_．。・·,，.]/g, '');
}

function fuzzyAttendanceScore(name, query){
  const source = normalizeAttendanceSearch(name);
  const target = normalizeAttendanceSearch(query);
  if(!target) return null;
  const exactIndex = source.indexOf(target);
  if(exactIndex !== -1) return exactIndex;

  let sourceIndex = 0;
  let gaps = 0;
  for(const char of target){
    const found = source.indexOf(char, sourceIndex);
    if(found === -1) return null;
    gaps += found - sourceIndex;
    sourceIndex = found + 1;
  }
  return 100 + gaps + (source.length - target.length);
}

function searchAttendancePlayers(query){
  const results = document.getElementById('attendanceSearchResults');
  if(!results) return;
  const value = String(query || '').trim();
  if(!value){
    results.classList.add('hidden');
    results.innerHTML = '';
    return;
  }

  const chips = Array.from(document.querySelectorAll('#playerInputs .player-chip'));
  const matches = chips
    .map((chip, index) => ({ index, name:chip.dataset.name || '', score:fuzzyAttendanceScore(chip.dataset.name || '', value) }))
    .filter(item => item.score !== null)
    .sort((a,b) => a.score - b.score || a.index - b.index)
    .slice(0, 8);

  results.innerHTML = matches.length
    ? matches.map(item => `<li role="option">
        <button type="button" class="attendance-search-result" onclick="jumpToAttendancePlayer(${item.index})">
          <span class="attendance-search-result-index">${String(item.index + 1).padStart(2,'0')}</span>
          <span>${escapeHtml(item.name)}</span>
        </button>
      </li>`).join('')
    : '<li class="attendance-search-empty">找不到符合的選手</li>';
  results.classList.remove('hidden');
}

function onAttendanceSearchKeydown(event){
  const results = document.getElementById('attendanceSearchResults');
  if(event.key === 'Escape'){
    if(results) results.classList.add('hidden');
    event.currentTarget.blur();
    return;
  }
  if(event.key === 'Enter'){
    const first = results && results.querySelector('.attendance-search-result');
    if(first){
      event.preventDefault();
      first.click();
    }
  }
}

function jumpToAttendancePlayer(index){
  const row = document.querySelector(`.attendance-row[data-player-index="${index}"]`);
  const results = document.getElementById('attendanceSearchResults');
  if(results) results.classList.add('hidden');
  if(!row) return;
  row.classList.remove('search-target');
  void row.offsetWidth;
  row.classList.add('search-target');
  row.scrollIntoView({ behavior:'smooth', block:'center' });
  window.setTimeout(() => row.classList.remove('search-target'), 1900);
}

function clearAttendanceSearch(){
  const input = document.getElementById('attendanceSearchInput');
  const results = document.getElementById('attendanceSearchResults');
  if(input) input.value = '';
  if(results){
    results.innerHTML = '';
    results.classList.add('hidden');
  }
}

function setAttendanceStatus(index, status){
  const chips = document.querySelectorAll('#playerInputs .player-chip');
  const chip = chips[index];
  if(!chip) return;
  chip.dataset.attendance = chip.dataset.attendance === status ? 'pending' : status;
  renderAttendanceManager(index);
  saveRosterDraft();
}

function jumpToNextPendingAttendance(){
  const chips = Array.from(document.querySelectorAll('#playerInputs .player-chip'));
  const pendingIndexes = chips
    .map((chip, index) => chip.dataset.attendance === 'pending' ? index : -1)
    .filter(index => index !== -1);

  if(pendingIndexes.length === 0){
    showToast('所有選手皆已完成點名');
    return;
  }

  const nextIndex = pendingIndexes.find(index => index > attendancePendingCursor) ?? pendingIndexes[0];
  attendancePendingCursor = nextIndex;
  jumpToAttendancePlayer(nextIndex);
}

function startAttendanceNameEdit(index, button){
  const chips = document.querySelectorAll('#playerInputs .player-chip');
  const chip = chips[index];
  const row = button && button.closest('.attendance-row');
  const nameEl = row && row.querySelector('.attendance-player-name');
  if(!chip || !nameEl) return;

  const original = chip.dataset.name || '';
  const input = document.createElement('input');
  input.className = 'attendance-name-input';
  input.value = original;
  nameEl.replaceWith(input);
  input.focus();
  input.select();

  let committed = false;
  const commit = (restore) => {
    if(committed) return;
    committed = true;
    const value = restore ? original : input.value.trim().replace(/\s+/g, ' ');
    if(value){
      if(!restore && findDuplicatePlayerChip(value, chip)){
        showAlert(`「${value}」已在參賽名單內，請使用不同姓名或加上辨識碼。`);
        renderAttendanceManager();
        return;
      }
      chip.dataset.name = value;
      const chipName = chip.querySelector('.chip-name');
      if(chipName) chipName.textContent = value;
    }
    renderAttendanceManager();
    saveRosterDraft();
  };
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter'){ e.preventDefault(); commit(false); }
    if(e.key === 'Escape'){ e.preventDefault(); commit(true); }
  });
  input.addEventListener('blur', () => commit(false));
}

function deleteAttendancePlayer(index){
  const chips = document.querySelectorAll('#playerInputs .player-chip');
  const chip = chips[index];
  if(!chip) return;
  const name = chip.dataset.name || '這位玩家';
  showConfirm(`確定要刪除「${name}」嗎？`, () => {
    if(chip.isConnected) chip.remove();
    renumberPlayerRows();
    renderAttendanceManager();
    saveRosterDraft();
  });
}

/* Kept for backward compatibility with previously saved tournaments that
   may already contain withdrawn player flags. The management UI is removed. */
function isWithdrawn(playerId){
  const p = state.players.find(x => x.id === playerId);
  return !!(p && p.withdrawn);
}

/* =========================================================
   START TOURNAMENT
========================================================= */
function startTournament(){
  if(document.getElementById('formatSelect').value === 'team3v3'){
    startTeamTournament();
    return;
  }
  const isRunning = state.tournament.status === 'running';
  // 玩家名單維持收合狀態時，直接沿用目前已登記的正式名單即可重新產生賽程，
  // 不需要先展開名單、把晶片清單重新建立出來才能刷新。展開中或賽事尚未開始
  // （表示畫面上本來就是可編輯的晶片清單）時，才照原本方式讀取輸入框內容。
  const usingExistingRoster = isRunning && !playerSetupExpanded;

  let names;
  if(usingExistingRoster){
    names = state.players.map(p => p.name);
  } else {
    // 如果晶片輸入框裡還有沒按 Enter 的文字，開賽前先自動補收進清單
    const chipInput = document.getElementById('playerChipInput');
    if(chipInput && chipInput.value.trim()){
      addPlayerChip(chipInput.value.trim());
      chipInput.value = '';
    }

    const chips = Array.from(document.querySelectorAll('#playerInputs .player-chip'));
    const entries = chips.map((chip, i) => ({
      idx: i+1,
      chip,
      name: (chip.dataset.name || '').trim(),
      attendance: chip.dataset.attendance || 'pending'
    }));

    entries.forEach(e => e.chip.classList.remove('input-error'));

    const filled = entries.filter(e => e.name && e.attendance !== 'absent');
    names = filled.map(e => e.name);

    const groups = new Map();
    filled.forEach(e => {
      const key = normalizePlayerName(e.name);
      if(!groups.has(key)) groups.set(key, []);
      groups.get(key).push(e);
    });
    const dupGroups = Array.from(groups.values()).filter(g => g.length > 1);

    if(dupGroups.length > 0){
      dupGroups.forEach(g => g.forEach(e => e.chip.classList.add('input-error')));
      const lines = dupGroups.map(g =>
        g.map(e => `${String(e.idx).padStart(2,'0')}.${e.name}`).join('、') + ' 重複名稱'
      );
      showAlert(`玩家名稱不可重複：\n${lines.join('\n')}`);
      return;
    }

  }

  if(names.length < 2){
    const absentCount = Array.from(document.querySelectorAll('#playerInputs .player-chip'))
      .filter(chip => chip.dataset.attendance === 'absent').length;
    showAlert(absentCount > 0
      ? `排除 ${absentCount} 位未到玩家後，至少需要 2 位玩家才能開始比賽。`
      : '至少需要 2 位玩家才能開始比賽。');
    return;
  }

  if(state.matches.length > 0){
    const isRegenerate = state.tournament.status === 'running';
    showConfirm('目前已有比賽資料，開始新賽事將清除所有紀錄，確定嗎？', () => {
      finalizeStartTournament(names);
      if(isRegenerate) showToast('已重新抽籤對戰');
    });
    return;
  }

  finalizeStartTournament(names);
}

function startTeamTournament(){
  const teams = state.tournament.status === 'running' && state.tournament.format === 'team3v3' && !playerSetupExpanded
    ? JSON.parse(JSON.stringify(state.teams || []))
    : collectTeamEntries();
  const invalid = teams.find(team => !team.name || team.members.some(member => !member.name));
  if(teams.length < 2){ showAlert('3v3 團體賽至少需要 2 支隊伍。'); return; }
  if(invalid){ showAlert('每支隊伍都必須填寫隊伍名稱與三名團員姓名。'); return; }

  const teamKeys = teams.map(team => normalizePlayerName(team.name));
  if(new Set(teamKeys).size !== teamKeys.length){ showAlert('隊伍名稱不可重複。'); return; }
  const memberNames = teams.flatMap(team => team.members.map(member => normalizePlayerName(member.name)));
  if(new Set(memberNames).size !== memberNames.length){ showAlert('團員姓名不可重複，請加上可辨識的稱呼。'); return; }

  const commit = () => finalizeTeamTournament(teams);
  if(state.matches.length > 0) showConfirm('目前已有比賽資料，建立 3v3 團體賽將清除所有紀錄，確定嗎？', commit);
  else commit();
}

// 「即時戰況」原本是在設定分頁仍顯示時先渲染，再切換分頁；手機瀏覽器會因此
// 用隱藏區塊的尺寸計算版面。先切頁再重建內容，效果等同安全的局部刷新，且不會
// 中斷正在寫入的雲端賽事資料。
function refreshLiveStatusAfterTournamentStart(){
  switchTab('standings');
  renderAll();
  requestAnimationFrame(() => {
    renderStandings();
    renderStats();
    renderPlayerNextMatchCard();
    window.scrollTo({ top:0, behavior:'auto' });
  });
}

function finalizeTeamTournament(teams){
  const teamPlayers = teams.map(team => ({ id:team.id, name:team.name }));
  state.teams = teams;
  state.players = teamPlayers;
  state.matches = generateKnockoutBracket(teamPlayers);
  state.matches.forEach(match => { match.teamBattle = null; });
  state.currentRound = 1;
  state.tournament = {
    name:document.getElementById('tournamentName').value.trim() || DEFAULT_TOURNAMENT_NAME,
    pointsToWin:2, format:'team3v3', quickMode:false, status:'running'
  };
  bracketCourtCountClearPending = !!currentEventCode;
  bracketCourtPromptShown = false;
  refereePanels.forEach(panel => { panel.matchId = null; delete panel.matchClaimed; });
  savePanels();
  markAllDirty();
  playerSetupExpanded = false;
  attendanceManagerOpen = false;
  cloudNeedsFullReplace = true;
  cloudReplaceRevision++;
  saveState();
  refreshLiveStatusAfterTournamentStart();
}

function finalizeStartTournament(names){
  const players = names.map((name,i)=>({ id:`P${String(i+1).padStart(2,'0')}`, name }));
  const pointsToWin = Number(document.getElementById('pointsToWin').value);
  const format = document.getElementById('formatSelect').value;
  const quickMode = isElimination(format) && document.getElementById('quickModeCheckbox').checked;

  // generateKnockoutBracket() now does its own full random draw internally
  // (both matchups AND which match slot any bye lands in), so the roster
  // itself can stay in the order it was entered — no need to shuffle it
  // here just to get a random bracket.
  const newMatches = format === 'double_elimination' ? generateDoubleElimination(players) : format === 'knockout' ? generateKnockoutBracket(players) : generateRoundRobin(players, format);
  state.players = players;
  state.matches = newMatches;
  state.currentRound = 1;
  state.tournament = {
    name: document.getElementById('tournamentName').value.trim() || DEFAULT_TOURNAMENT_NAME,
    pointsToWin, format, quickMode, status:'running'
  };
  bracketCourtCountClearPending = !!currentEventCode;
  bracketCourtPromptShown = false;
  refereePanels.forEach(p => { p.matchId = null; delete p.matchClaimed; });
  savePanels();
  markAllDirty();
  playerSetupExpanded = false; // 開賽（或重新產生賽程）後，「參賽玩家」自動收合成摘要
  attendanceManagerOpen = false;
  try{ localStorage.removeItem(ROSTER_DRAFT_KEY); }catch(e){}

  cloudNeedsFullReplace = true;
  cloudReplaceRevision++;
  saveState();
  refreshLiveStatusAfterTournamentStart();
}

/* =========================================================
   ROUND ROBIN GENERATION (circle method, supports double)
========================================================= */
function generateRoundRobin(players, format){
  let list = [...players];
  if(list.length % 2 !== 0) list.push({ id:'BYE', name:'BYE' });

  const total = list.length;
  const rounds = total - 1;
  const half = total / 2;
  let rotation = [...list];
  const baseMatches = [];

  for(let round=1; round<=rounds; round++){
    for(let i=0;i<half;i++){
      const a = rotation[i];
      const b = rotation[total-1-i];
      if(a.id !== 'BYE' && b.id !== 'BYE'){
        baseMatches.push({ round, playerA:a.id, playerB:b.id });
      }
    }
    const fixed = rotation[0];
    const rest = rotation.slice(1);
    rest.unshift(rest.pop());
    rotation = [fixed, ...rest];
  }

  let allPairings = [...baseMatches];
  if(format === 'double'){
    const second = baseMatches.map(m => ({
      round: m.round + rounds,
      playerA: m.playerB,
      playerB: m.playerA
    }));
    allPairings = allPairings.concat(second);
  }

  return allPairings.map((m, idx) => ({
    id: `M${String(idx+1).padStart(3,'0')}`,
    round: m.round,
    playerA: m.playerA,
    playerB: m.playerB,
    log: [],
    pointsA: 0,
    pointsB: 0,
    status: 'pending',
    winner: null,
    completedAt: null
  }));
}

/* =========================================================
   SINGLE-ELIMINATION BRACKET GENERATION
========================================================= */
function isElimination(format){
  return format === 'knockout' || format === 'double_elimination' || format === 'team3v3';
}

// Every slot has an immutable source. null means unresolved; BYE means empty.
// Replaying in dependency order also invalidates all affected downstream results.
function clearDoubleResult(m){
  m.log = []; m.pointsA = 0; m.pointsB = 0; m.winner = null;
  m.status = 'pending'; m.completedAt = null;
  m.quickWin = false; m.isBye = false; m.forfeited = false;
  markDirty(m.id);
}

function generateDoubleElimination(players){
  const wb = generateKnockoutBracket(players).filter(m => !m.thirdPlace);
  const k = Math.max(...wb.map(m => m.round));
  const groups = {};
  wb.forEach(m => {
    m.bracket = 'winners'; m.bracketRound = m.round;
    (groups[m.round] ||= []).push(m);
    m.nextMatchId = m.nextSlot = m.loserNextMatchId = m.loserNextSlot = null;
    if(m.round === 1){ m.sourceA = {player:m.playerA}; m.sourceB = {player:m.playerB}; }
    clearDoubleResult(m);
  });
  const source = (m, result='winner') => ({matchId:m.id, result});
  for(let r=2;r<=k;r++) groups[r].forEach((m,i) => {
    m.sourceA = source(groups[r-1][i*2]); m.sourceB = source(groups[r-1][i*2+1]);
  });
  const lower = {};
  function make(id, bracket, bracketRound, a, b){
    return {id, bracket, bracketRound, round:0, sourceA:a, sourceB:b,
      playerA:null, playerB:null, log:[], pointsA:0, pointsB:0,
      status:'pending', winner:null, completedAt:null, isBye:false, thirdPlace:false};
  }
  if(k >= 2){
    lower[1] = Array.from({length:groups[1].length/2},(_,i) =>
      make(`L1-${i+1}`,'losers',1,source(groups[1][2*i],'loser'),source(groups[1][2*i+1],'loser')));
    for(let r=2;r<=k;r++){
      const lr=2*r-2, previous=lower[lr-1];
      lower[lr] = groups[r].map((m,i) => make(`L${lr}-${i+1}`,'losers',lr,
        source(previous[i]), source(groups[r][groups[r].length-1-i],'loser')));
      if(r<k) lower[lr+1] = Array.from({length:lower[lr].length/2},(_,i) =>
        make(`L${lr+1}-${i+1}`,'losers',lr+1,source(lower[lr][i*2]),source(lower[lr][i*2+1])));
    }
  }
  const wf=groups[k][0];
  const gf=make('GF1','final',1,source(wf),k===1?source(wf,'loser'):source(lower[2*k-2][0]));
  const reset=make('GF2','final',2,source(gf),source(gf,'loser'));
  reset.inactive=true;
  const ordered=[...groups[1]];
  if(k>=2) ordered.push(...lower[1]);
  for(let r=2;r<=k;r++){
    ordered.push(...groups[r],...lower[2*r-2]);
    if(r<k) ordered.push(...lower[2*r-1]);
  }
  ordered.push(gf,reset);
  let round=0, last='';
  ordered.forEach(m => {
    const key=m.bracket+':'+m.bracketRound;
    if(key!==last){round++;last=key;} m.round=round;
    ['A','B'].forEach(slot => {
      const s=m['source'+slot]; if(!s.matchId) return;
      const parent=ordered.find(x=>x.id===s.matchId);
      const prefix=s.result==='loser'?'loserNext':'next';
      parent[prefix+'MatchId']=m.id; parent[prefix+'Slot']=slot;
    });
  });
  reconcileDoubleElimination(ordered);
  return ordered;
}

function reconcileDoubleElimination(list){
  const index=new Map(list.map(m=>[m.id,m]));
  function value(s){
    if(s.player) return s.player;
    const p=index.get(s.matchId);
    if(!p || p.status!=='completed') return null;
    if(s.result==='winner') return p.winner;
    return p.winner===p.playerA?p.playerB:p.playerA;
  }
  list.forEach(m => {
    if(!m.bracket) return;
    let a=value(m.sourceA), b=value(m.sourceB);
    if(m.id==='GF2'){
      const gf=index.get('GF1');
      const inactive=!(gf.status==='completed' && gf.winner===gf.playerB && !gf.forfeited && !gf.isBye);
      if(m.inactive!==inactive){m.inactive=inactive;markDirty(m.id);}
      if(inactive) a=b=null;
    }
    if(m.playerA!==a || m.playerB!==b){
      clearDoubleResult(m); m.playerA=a; m.playerB=b;
    }
    if(!a || !b || m.inactive || m.status==='completed') return;
    const aOut=a==='BYE'||isWithdrawn(a), bOut=b==='BYE'||isWithdrawn(b);
    if(aOut||bOut){
      m.winner=aOut?(bOut?'BYE':b):a;
      m.status='completed';m.completedAt=Date.now();
      m.isBye=a==='BYE'||b==='BYE';m.forfeited=!m.isBye;
      markDirty(m.id);
    }
  });
  refreshDoubleDisplayNumbers(list);
}

// UI 場次從 1 重新編排，只計入該輪真正需要上場的對戰。
// K1-5、K1-8 等代碼只供內部晉級使用，不得顯示成第 5、8 場。
function refreshDoubleDisplayNumbers(list){
  const groups = new Map();
  list.filter(m => m.bracket && !m.inactive && !m.isBye).forEach(m => {
    const key = `${m.bracket}:${m.bracketRound}`;
    if(!groups.has(key)) groups.set(key, []);
    groups.get(key).push(m);
  });
  groups.forEach(matches => matches.forEach((m, index) => {
    m.displayMatchNo = index + 1;
  }));
}

function doubleFinalMatch(){
  const reset=state.matches.find(m=>m.id==='GF2');
  return reset && !reset.inactive ? reset : state.matches.find(m=>m.id==='GF1');
}
function doubleThirdId(){
  const m=state.matches.filter(m=>m.bracket==='losers').slice(-1)[0];
  if(!m || m.status!=='completed') return null;
  const loser=m.winner===m.playerA?m.playerB:m.playerA;
  return loser==='BYE'?null:loser;
}
function doubleRoundLabel(m){
  return m.bracket==='final' ? (m.id==='GF2'?'加賽':'總決賽') :
    `${m.bracket==='winners'?'勝部':'敗部'} 第 ${m.bracketRound} 輪`;
}

function doubleMatchLabel(m){
  if(m.bracket === 'final') return m.id === 'GF2' ? '加賽' : '冠軍決賽';
  const side = m.bracket === 'winners' ? '勝部' : '敗部';
  const matchNo = m.displayMatchNo || 1;
  return `${side}第 ${m.bracketRound} 輪・第 ${matchNo} 場`;
}

function doubleMatchLabelHtml(m){
  if(m.bracket === 'final') return `<span class="de-side">${escapeHtml(doubleMatchLabel(m))}</span>`;
  const side = m.bracket === 'winners' ? '勝部' : '敗部';
  return `<span class="de-side">${side}</span><span class="de-divider">·</span><span class="de-round">第 ${m.bracketRound} 輪</span><span class="de-divider">·</span><span class="de-match">第 ${m.displayMatchNo || 1} 場</span>`;
}

function layoutDoubleBracketSection(matches, rounds){
  const STEP = 124;
  const positions = new Map();
  const visibleAt = r => matches.filter(m => m.bracketRound === r && !m.isBye);
  const counts = rounds.map(r => visibleAt(r).length);
  const anchorIndex = counts.indexOf(Math.max(...counts));

  // 先排列對戰最多的一輪，作為整個區塊的垂直基準。
  visibleAt(rounds[anchorIndex]).forEach((m, i) => positions.set(m.id, {y:(i+.5)*STEP}));

  // 後續輪次置於其來源場次的中間。
  for(let col=anchorIndex+1; col<rounds.length; col++){
    visibleAt(rounds[col]).forEach((m, i) => {
      const feeders = matches.filter(f => f.nextMatchId === m.id && positions.has(f.id));
      const y = feeders.length
        ? feeders.reduce((sum,f)=>sum+positions.get(f.id).y,0)/feeders.length
        : (i+.5)*STEP;
      positions.set(m.id,{y});
    });
  }

  // 較早輪次依照「會晉級到哪一場」定位。若另一側是輪空，
  // 唯一需要上場的來源賽就會與目標賽對齊。
  for(let col=anchorIndex-1; col>=0; col--){
    const visible = visibleAt(rounds[col]);
    const byTarget = new Map();
    visible.forEach(m => {
      const key = m.nextMatchId || `free:${m.id}`;
      if(!byTarget.has(key)) byTarget.set(key,[]);
      byTarget.get(key).push(m);
    });
    byTarget.forEach((feeders,key) => {
      const target = positions.get(key);
      feeders.forEach((m,i) => {
        const offset = (i-(feeders.length-1)/2)*STEP;
        positions.set(m.id,{y:(target ? target.y : (visible.indexOf(m)+.5)*STEP)+offset});
      });
    });
  }

  rounds.forEach((r,col)=>visibleAt(r).forEach(m=>{
    const p=positions.get(m.id); p.x=col*240;
  }));
  const H = Math.max(STEP, ...Array.from(positions.values(),p=>p.y+STEP/2));
  return {positions,H};
}

function renderDoubleBracket(){
  const wrap=document.getElementById('bracketTree');
  wrap.classList.add('double-tree');
  document.getElementById('bracketRulesSummary').textContent='雙敗淘汰・敗部冠軍須連勝兩場總決賽';
  refreshDoubleDisplayNumbers(state.matches);
  const live=new Set(state.matches.filter(isMatchLive).map(m=>m.id));
  const assignedUpcoming=Object.values(computeUpcomingMatchPreviews()).filter(Boolean);
  const nextIds=new Set(
    assignedUpcoming.length
      ? assignedUpcoming.map(match=>match.id)
      : (refereePanels.length===0 ? [nextPlayableMatch([...live])?.id].filter(Boolean) : [])
  );
  const sections={};
  let winnersFinalY=null;
  ['winners','final','losers'].forEach(bracket=>{
    const ms=state.matches.filter(m=>m.bracket===bracket && !m.inactive);
    if(!ms.length) return;
    const rounds=[...new Set(ms.map(m=>m.bracketRound))];
    const layout=layoutDoubleBracketSection(ms,rounds);
    const {positions}=layout;
    let H=layout.H;
    if(bracket==='winners'){
      const last=ms.filter(m=>m.bracketRound===rounds[rounds.length-1] && !m.isBye);
      if(last.length) winnersFinalY=positions.get(last[0].id)?.y ?? null;
    }else if(bracket==='final' && winnersFinalY!==null){
      const first=ms.find(m=>m.id==='GF1') || ms.find(m=>!m.isBye);
      const shift=Math.max(0,winnersFinalY-(positions.get(first?.id)?.y ?? winnersFinalY));
      positions.forEach(p=>{p.y+=shift});
      H+=shift;
    }
    let html='';
    let paths='';
    ms.forEach(m=>{
      const p=positions.get(m.id), q=positions.get(m.nextMatchId);
      if(!p||!q) return;
      paths+=`<path class="conn-path ${m.status==='completed'?'active':''}" data-from-match="${m.id}" d="M${p.x+190},${p.y} H${p.x+215} V${q.y} H${q.x}"/>`;
    });
    html+=`<section style="margin-bottom:30px"><h3 style="font-size:16px;margin:0 0 14px;color:var(--text)">${bracket==='winners'?'勝部':bracket==='losers'?'敗部':'總決賽'}</h3><div style="position:relative;width:${rounds.length*240-50}px"><svg style="position:absolute;top:32px;left:0;pointer-events:none" width="${rounds.length*240-50}" height="${H}">${paths}</svg><div style="display:flex;gap:50px">`;
    rounds.forEach(r=>{
      const group=ms.filter(m=>m.bracketRound===r);
      html+=`<div class="bracket-col" style="width:190px;flex-shrink:0"><div class="bracket-round-label" style="height:32px;margin:0">${doubleRoundLabel(group[0])}</div><div class="bracket-round-body" style="height:${H}px">`;
      group.filter(m=>!m.isBye).forEach(m=>{
        const p=positions.get(m.id);
        // 顯示編號只計算真正需要上場的對戰；隱藏的輪空籤位不占號碼。
        const matchLabel = doubleMatchLabel(m);
        const sourceLabel = bracket === 'final'
          ? `${icon('trophy',14)}<span>${escapeHtml(matchLabel)}</span>`
          : doubleMatchLabelHtml(m);
        const canStart = isRefereeBracketInteractive() && isReadyPendingBracketMatch(m);
        const sourceTag = canStart ? 'button' : 'div';
        const liveStage = m.bracketStage === 'live';
        html+=`<${sourceTag} class="de-source ${bracket === 'final' ? 'final-match-heading' : ''} ${canStart ? 'bracket-stage-edit de-source-action' : ''} ${liveStage ? 'is-live' : ''}" style="top:${p.y-(canStart?69:63)}px" title="${escapeAttr(matchLabel)}${canStart ? (liveStage ? '・點擊取消進行中' : '・點擊設為進行中') : ''}" ${canStart ? `type="button" data-match-id="${escapeAttr(m.id)}" aria-label="${escapeAttr(matchLabel)}，${liveStage ? '點擊取消進行中' : '點擊設為進行中'}"` : ''}>${sourceLabel}${canStart ? `<span class="de-tap-hint" aria-hidden="true">${liveStage ? '取消' : '▶ 開賽'}</span>` : ''}</${sourceTag}>`;
        html+=bracketMatchBoxHtml(m,p.y-37,live,nextIds,bracket==='final');
      });
      html+='</div></div>';
    });
    html+='</div></div></section>';
    sections[bracket]=html;
  });
  setBracketMarkup(wrap, `<div class="de-championship-row">${sections.winners||''}${sections.final||''}</div>${sections.losers||''}`);
  updateBracketSearchVisibility();
}

function standardSeedOrder(size){
  let order = [0,1];
  while(order.length < size){
    const len = order.length * 2;
    const next = [];
    order.forEach(x => {
      next.push(x);
      next.push(len - 1 - x);
    });
    order = next;
  }
  return order;
}

function generateKnockoutBracket(players){
  const n = players.length;
  const bracketSize = Math.pow(2, Math.ceil(Math.log2(n)));
  const byeCount = bracketSize - n;
  const matchCount1 = bracketSize / 2;

  // Fully random draw: not just "which player plays whom" but also "which
  // bracket box any bye lands in". A fixed seeding template (e.g. always
  // pairing seed 1 with the lowest seed) would keep putting byes in the
  // same handful of match slots every single time, even though the players
  // occupying those slots change — so 重新抽籤對戰 could look identical in
  // shape every refresh. Instead: pick byeCount DISTINCT round-1 matches at
  // random to receive a bye (guaranteed distinct, so two byes never collide
  // in the same match — byeCount is always < matchCount1), randomize which
  // side (A/B) the bye sits on, then shuffle every real player into all the
  // remaining slots.
  const matchIdxs = shuffleArray(Array.from({ length: matchCount1 }, (_, i) => i));
  const byeMatchIdxs = new Set(matchIdxs.slice(0, byeCount));

  const shuffledPlayers = shuffleArray(players);
  let cursor = 0;
  const ordered = new Array(bracketSize);
  for(let i = 0; i < matchCount1; i++){
    if(byeMatchIdxs.has(i)){
      const real = shuffledPlayers[cursor++];
      const bye = { id: 'BYE', name: '輪空' };
      if(secureRandomIndex(2) === 0){ ordered[i*2] = real; ordered[i*2+1] = bye; }
      else { ordered[i*2] = bye; ordered[i*2+1] = real; }
    } else {
      ordered[i*2] = shuffledPlayers[cursor++];
      ordered[i*2+1] = shuffledPlayers[cursor++];
    }
  }

  const numRounds = Math.log2(bracketSize);
  const rounds = [];

  for(let r=1; r<=numRounds; r++){
    const matchCount = bracketSize / Math.pow(2, r);
    const roundMatches = [];
    for(let i=0; i<matchCount; i++){
      roundMatches.push({
        id: `K${r}-${i+1}`,
        round: r,
        playerA: r === 1 ? ordered[i*2].id : null,
        playerB: r === 1 ? ordered[i*2+1].id : null,
        log: [],
        pointsA: 0,
        pointsB: 0,
        status: 'pending',
        winner: null,
        completedAt: null,
        nextMatchId: null,
        nextSlot: null,
        loserNextMatchId: null,
        loserNextSlot: null,
        isBye: false,
        thirdPlace: false
      });
    }
    rounds.push(roundMatches);
  }

  for(let r=1; r<numRounds; r++){
    rounds[r-1].forEach((m, i) => {
      const nextMatch = rounds[r][Math.floor(i/2)];
      m.nextMatchId = nextMatch.id;
      m.nextSlot = i % 2 === 0 ? 'A' : 'B';
    });
  }

  // Third-place (bronze) match: the two semifinal losers play each other.
  // Only exists when there's an actual semifinal round (bracketSize >= 4).
  let bronze = null;
  if(numRounds >= 2){
    bronze = {
      id: 'BRONZE',
      round: numRounds,
      playerA: null,
      playerB: null,
      log: [],
      pointsA: 0,
      pointsB: 0,
      status: 'pending',
      winner: null,
      completedAt: null,
      nextMatchId: null,
      nextSlot: null,
      loserNextMatchId: null,
      loserNextSlot: null,
      isBye: false,
      thirdPlace: true
    };
    const semifinals = rounds[numRounds - 2];
    semifinals.forEach((m, i) => {
      m.loserNextMatchId = bronze.id;
      m.loserNextSlot = i === 0 ? 'A' : 'B';
    });
  }

  // Order the flat match list so the bronze (third-place) match is scheduled
  // right before the final, and the final is always the very last match.
  const finalRoundMatches = rounds[numRounds - 1];
  const earlierRoundsFlat = rounds.slice(0, numRounds - 1).flat();
  const flat = [...earlierRoundsFlat];
  if(bronze) flat.push(bronze);
  flat.push(...finalRoundMatches);

  // Auto-resolve any match where one side is a BYE placeholder, cascading
  // forward (winner into the next round, and now also loser into the
  // bronze/third-place match) until nothing changes.
  resolveByeCascade(flat);

  return flat;
}

function resolveByeCascade(list){
  if(list.some(m => m.bracket)) { reconcileDoubleElimination(list); return; }
  let changed = true;
  while(changed){
    changed = false;
    list.forEach(m => {
      if(m.status !== 'completed' && m.playerA && m.playerB){
        const aOut = m.playerA === 'BYE' || isWithdrawn(m.playerA);
        const bOut = m.playerB === 'BYE' || isWithdrawn(m.playerB);
        if(aOut && bOut) return; // both sides unavailable — needs a referee's manual call
        if(aOut || bOut){
          m.status = 'completed';
          m.winner = aOut ? m.playerB : m.playerA;
          m.completedAt = Date.now();
          if(m.playerA === 'BYE' || m.playerB === 'BYE') m.isBye = true;
          else m.forfeited = true;
          markDirty(m.id);
          propagateKnockoutWinner(m, list);
          changed = true;
        }
      }
    });
  }
}

function propagateKnockoutWinner(match, matchList){
  const list = matchList || state.matches;
  if(match.bracket) { reconcileDoubleElimination(list); return; }

  if(match.nextMatchId){
    const next = list.find(m => m.id === match.nextMatchId);
    if(next){
      if(match.nextSlot === 'A') next.playerA = match.winner;
      else next.playerB = match.winner;
      markDirty(next.id);
    }
  }

  if(match.loserNextMatchId){
    const loser = match.winner === match.playerA ? match.playerB : match.playerA;
    const bronzeMatch = list.find(m => m.id === match.loserNextMatchId);
    if(bronzeMatch){
      if(match.loserNextSlot === 'A') bronzeMatch.playerA = loser;
      else bronzeMatch.playerB = loser;
      markDirty(bronzeMatch.id);
    }
  }
}

/* =========================================================
   MATCH SCORING
========================================================= */
const SCORE_INPUT_LOCK_MS = 360;
const SCORE_FEEDBACK_MS = 720;
const scoreInputLockedUntil = new Map();
const scoreTapFeedback = new Map();
const teamEliminationEffects = new Map();

function teamById(id){ return (state.teams || []).find(team => team.id === id); }
function teamMemberById(id){
  for(const team of (state.teams || [])){
    const member = (team.members || []).find(item => item.id === id);
    if(member) return member;
  }
  return null;
}
function teamMemberName(id){ return teamMemberById(id)?.name || '待定'; }

function buildTeamBattleHistory(match){
  const battle = match?.teamBattle;
  if(!battle) return [];
  const orderA = [...(battle.orderA || [])], orderB = [...(battle.orderB || [])];
  const damage = {};
  [...orderA,...orderB].forEach(id => damage[id] = 0);
  let indexA = 0, indexB = 0;
  let activeA = orderA[indexA] || null, activeB = orderB[indexB] || null;
  let previousPair = '';
  let bout = 0;

  return (match.log || []).map((event, eventIndex) => {
    const pairKey = `${activeA || ''}|${activeB || ''}`;
    const groupStart = pairKey !== previousPair;
    if(groupStart){ bout += 1; previousPair = pairKey; }
    const winnerId = event.side === 'A' ? activeA : activeB;
    const loserId = event.side === 'A' ? activeB : activeA;
    const loserSide = event.side === 'A' ? 'B' : 'A';
    const loserHpBefore = Math.max(0, 2 - (damage[loserId] || 0));
    damage[loserId] = (damage[loserId] || 0) + Number(event.points || 0);
    const loserHpAfter = Math.max(0, 2 - damage[loserId]);
    const eliminated = damage[loserId] >= 2;
    const record = {
      eventIndex, bout, groupStart, activeA, activeB, winnerId, loserId,
      winnerSide:event.side, loserSide, finish:event.finish,
      points:Number(event.points || 0), loserHpBefore, loserHpAfter,
      eliminated, nextMemberId:null
    };
    if(eliminated){
      if(loserSide === 'A'){
        activeA = orderA[++indexA] || null;
        record.nextMemberId = activeA;
      }else{
        activeB = orderB[++indexB] || null;
        record.nextMemberId = activeB;
      }
    }
    return record;
  });
}

function teamBattleHistoryHtml(match){
  const history = buildTeamBattleHistory(match);
  if(!history.length) return '';
  const teamAName = teamById(match.playerA)?.name || nameOf(match.playerA) || '隊伍 A';
  const teamBName = teamById(match.playerB)?.name || nameOf(match.playerB) || '隊伍 B';
  const teamNameBySide = side => side === 'A' ? teamAName : teamBName;
  const groups = [];
  history.forEach(record => {
    if(record.groupStart) groups.push([]);
    groups[groups.length - 1].push(record);
  });
  const isCompleted = match.status === 'completed' && Boolean(match.winner);
  const winnerSide = match.winner === match.playerA ? 'A' : 'B';
  const loserSide = winnerSide === 'A' ? 'B' : 'A';
  const winnerTeamName = teamNameBySide(winnerSide);
  const loserTeamName = teamNameBySide(loserSide);
  const winnerEliminations = Number(winnerSide === 'A' ? match.pointsA : match.pointsB) || 0;
  const loserEliminations = Number(winnerSide === 'A' ? match.pointsB : match.pointsA) || 0;
  const finalHtml = isCompleted ? `<div class="team-history-final">
    <span class="team-history-final-label">團體戰最終結果</span>
    <div class="team-record-final-versus">
      <span class="team-record-final-team winner side-${winnerSide.toLowerCase()}">${escapeHtml(winnerTeamName)}</span>
      <span class="team-record-final-verb"><b>獲勝</b><small>VS</small></span>
      <span class="team-record-final-team loser side-${loserSide.toLowerCase()}">${escapeHtml(loserTeamName)}</span>
    </div>
    <span class="team-history-final-reason"><span class="losing-team">${escapeHtml(loserTeamName)}</span> 3 名隊員全數淘汰，已無可上場隊員</span>
    <span class="team-history-final-detail">${escapeHtml(winnerTeamName)} 淘汰 ${winnerEliminations} 人・${escapeHtml(loserTeamName)} 淘汰 ${loserEliminations} 人</span>
  </div>` : '';
  return `<div class="team-battle-history">${groups.map((records,groupIndex) => {
    const first = records[0];
    return `<section class="team-timeline-group">
      <div class="team-timeline-heading">第 ${groupIndex + 1} 組對決${groupIndex === 0 ? '・首棒' : '・換人後'}</div>
      <div class="team-timeline-matchup">
        <span class="team-timeline-player side-a"><small class="team-timeline-player-team">${escapeHtml(teamAName)}</small><strong class="team-timeline-player-name">${escapeHtml(teamMemberName(first.activeA))}</strong></span>
        <b class="team-timeline-vs">VS</b>
        <span class="team-timeline-player side-b"><small class="team-timeline-player-team">${escapeHtml(teamBName)}</small><strong class="team-timeline-player-name">${escapeHtml(teamMemberName(first.activeB))}</strong></span>
      </div>
      ${records.map(record => {
        const finish = FINISH[record.finish] || {label:'勝利'};
        const winnerSideClass = `side-${record.winnerSide.toLowerCase()}`;
        const changeHtml = record.eliminated ? `<div class="team-timeline-change side-${record.loserSide.toLowerCase()} ${record.nextMemberId ? '' : 'is-team-out'}">
          <span class="team-timeline-change-tag">${record.nextMemberId ? '換人' : '全隊淘汰'}</span>
          <strong>${escapeHtml(teamNameBySide(record.loserSide))}・${escapeHtml(teamMemberName(record.loserId))} 已淘汰</strong>
          <small>${record.nextMemberId ? `${escapeHtml(teamNameBySide(record.loserSide))} 換上 <span class="next-player">${escapeHtml(teamMemberName(record.nextMemberId))}</span>` : `${escapeHtml(teamNameBySide(record.loserSide))} 已無可上場隊員`}</small>
        </div>` : '';
        return `<div class="team-timeline-event ${record.eliminated ? 'is-elimination' : ''}">
          <div class="team-timeline-line">
            <span class="team-timeline-winner ${winnerSideClass}">${escapeHtml(teamNameBySide(record.winnerSide))}・${escapeHtml(teamMemberName(record.winnerId))}</span>
            <span class="team-timeline-method">${escapeHtml(finish.label)}</span>
            <span class="team-timeline-arrow">→</span>
            <span class="team-timeline-loser">${escapeHtml(teamNameBySide(record.loserSide))}・${escapeHtml(teamMemberName(record.loserId))} 扣 <b>${record.points} HP</b></span>
          </div>
        </div>${changeHtml}`;
      }).join('')}
    </section>`;
  }).join('')}${finalHtml}</div>`;
}

function teamRecordSummaryHtml(match, teamAName, teamBName){
  const history = buildTeamBattleHistory(match);
  const latest = history[history.length - 1];
  const isCompleted = match.status === 'completed' && Boolean(match.winner);
  const winnerSide = match.winner === match.playerA ? 'A' : 'B';
  const loserSide = winnerSide === 'A' ? 'B' : 'A';
  const winnerTeamName = winnerSide === 'A' ? teamAName : teamBName;
  const loserTeamName = winnerSide === 'A' ? teamBName : teamAName;
  const statusLabel = isCompleted ? '最終結果' : latest ? '進行中' : '準備對戰';
  const currentText = latest
    ? `最近結果：<b>${escapeHtml(latest.winnerSide === 'A' ? teamAName : teamBName)}・${escapeHtml(teamMemberName(latest.winnerId))}</b> ${escapeHtml((FINISH[latest.finish] || {label:'勝利'}).label)}`
    : `<b>${escapeHtml(teamMemberName(match.teamBattle?.activeA))}</b> 對上 <b>${escapeHtml(teamMemberName(match.teamBattle?.activeB))}</b>`;
  if(isCompleted){
    return `<div class="team-record-summary">
      <div class="team-record-final-versus">
        <span class="team-record-final-team winner side-${winnerSide.toLowerCase()}">${escapeHtml(winnerTeamName)}</span>
        <span class="team-record-final-verb"><b>獲勝</b><small>VS</small></span>
        <span class="team-record-final-team loser side-${loserSide.toLowerCase()}">${escapeHtml(loserTeamName)}</span>
      </div>
      <div class="team-record-final-score">淘汰數 ${Number(match.pointsA || 0)}：${Number(match.pointsB || 0)}・<span class="losing-team">${escapeHtml(loserTeamName)} 3 名隊員全數淘汰</span></div>
    </div>`;
  }
  return `<div class="team-record-summary">
    <div class="team-record-board">
      <span class="team-record-side side-a"><strong class="team-record-side-name">${escapeHtml(teamAName)}</strong><b class="team-record-side-score">${Number(match.pointsA || 0)}</b></span>
      <span class="team-record-state">${statusLabel}<strong>淘汰數</strong></span>
      <span class="team-record-side side-b"><strong class="team-record-side-name">${escapeHtml(teamBName)}</strong><b class="team-record-side-score">${Number(match.pointsB || 0)}</b></span>
    </div>
    <div class="team-record-current">${currentText}</div>
  </div>`;
}

function ensureTeamBattle(match){
  if(!match || state.tournament.format !== 'team3v3') return null;
  const teamA = teamById(match.playerA), teamB = teamById(match.playerB);
  if(!teamA || !teamB) return null;
  if(!match.teamBattle){
    match.teamBattle = {
      orderA:teamA.members.map(member => member.id),
      orderB:teamB.members.map(member => member.id),
      damage:{}, eliminated:[], activeA:null, activeB:null, queueA:[], queueB:[], started:false
    };
  }
  recomputeTeamMatch(match);
  return match.teamBattle;
}

function recomputeTeamMatch(match){
  const battle = match.teamBattle;
  if(!battle) return;
  const orderA = [...battle.orderA], orderB = [...battle.orderB];
  battle.damage = {};
  [...orderA,...orderB].forEach(id => battle.damage[id] = 0);
  battle.eliminated = [];
  battle.activeA = orderA[0] || null;
  battle.activeB = orderB[0] || null;
  battle.queueA = orderA.slice(1);
  battle.queueB = orderB.slice(1);
  battle.started = match.log.length > 0;

  const advanceAfterElimination = (side, loserId) => {
    const queueKey = side === 'A' ? 'queueA' : 'queueB';
    const activeKey = side === 'A' ? 'activeA' : 'activeB';
    if((battle.damage[loserId] || 0) < 2) return;
    battle.eliminated.push(loserId);
    battle[queueKey] = battle[queueKey].filter(id => !battle.eliminated.includes(id));
    battle[activeKey] = battle[queueKey].shift() || null;
  };

  for(const event of match.log){
    if(!battle.activeA || !battle.activeB) break;
    const loserSide = event.side === 'A' ? 'B' : 'A';
    const loserId = loserSide === 'A' ? battle.activeA : battle.activeB;
    event.loserMemberId = loserId;
    battle.damage[loserId] = (battle.damage[loserId] || 0) + Number(event.points || 0);
    advanceAfterElimination(loserSide, loserId);
  }

  const aOut = orderA.filter(id => battle.eliminated.includes(id)).length;
  const bOut = orderB.filter(id => battle.eliminated.includes(id)).length;
  match.pointsA = bOut;
  match.pointsB = aOut;
  if(aOut >= 3 || bOut >= 3){
    match.status = 'completed';
    match.winner = bOut >= 3 ? match.playerA : match.playerB;
    if(!match.completedAt) match.completedAt = Date.now();
  }else{
    match.status = 'pending';
    match.winner = null;
    match.completedAt = null;
  }
}

function setTeamLineup(matchId, side, position, memberId){
  const match = state.matches.find(item => item.id === matchId);
  const battle = ensureTeamBattle(match);
  if(!battle || battle.started) return;
  const key = side === 'A' ? 'orderA' : 'orderB';
  const order = battle[key];
  const from = order.indexOf(memberId);
  const to = Number(position);
  if(from < 0 || to < 0 || to > 2) return;
  [order[from],order[to]] = [order[to],order[from]];
  recomputeTeamMatch(match);
  markDirty(match.id);
  saveState(true);
  renderReferee();
}

function recordTeamFinish(matchId, side, finishKey){
  const match = state.matches.find(item => item.id === matchId);
  if(!match || match.status === 'completed') return;
  const battle = ensureTeamBattle(match);
  const finish = FINISH[finishKey];
  if(!battle || !battle.activeA || !battle.activeB || !finish || !beginScoreInput(matchId, side, finish.points)) return;
  const losingSide = side === 'A' ? 'B' : 'A';
  const eliminatedMemberId = losingSide === 'A' ? battle.activeA : battle.activeB;
  match.log.push({side,finish:finishKey,points:finish.points});
  recomputeTeamMatch(match);
  const scoringTeamId = side === 'A' ? match.playerA : match.playerB;
  const scoringTeam = teamById(scoringTeamId)?.name || nameOf(scoringTeamId) || (side === 'A' ? 'A 隊' : 'B 隊');
  const eliminatedName = eliminatedMemberId && battle.eliminated.includes(eliminatedMemberId)
    ? teamMemberName(eliminatedMemberId)
    : '';
  const winnerName = match.status === 'completed'
    ? teamById(match.winner)?.name || nameOf(match.winner)
    : '';
  const scoreAnnouncement = `${scoringTeam} 得分，對手扣 ${finish.points} HP${eliminatedName ? `，${eliminatedName} 淘汰` : ''}${winnerName ? `，${winnerName} 獲勝` : ''}。`;
  mobileHapticFeedback(match.status === 'completed' ? 'win' : 'score');
  if(eliminatedMemberId && battle.eliminated.includes(eliminatedMemberId)){
    const token=`${Date.now()}-${Math.random()}`;
    teamEliminationEffects.set(match.id,{side:losingSide,memberId:eliminatedMemberId,name:teamMemberName(eliminatedMemberId),token,until:Date.now()+920});
    setTimeout(()=>{
      const current=teamEliminationEffects.get(match.id);
      if(current&&current.token===token){teamEliminationEffects.delete(match.id);updateRefereePanelsForMatch(match.id);}
    },940);
  }
  markDirty(match.id);
  let structural = false;
  if(match.status === 'completed'){
    propagateKnockoutWinner(match);
    resolveByeCascade(state.matches);
    structural = true;
  }
  saveState(true);
  if(structural) renderAll(); else refreshAfterScoreChange(matchId);
  announceAppStatus(scoreAnnouncement);
}

function beginScoreInput(matchId, side, points){
  const now = Date.now();
  if((scoreInputLockedUntil.get(matchId) || 0) > now) return false;
  scoreInputLockedUntil.set(matchId, now + SCORE_INPUT_LOCK_MS);

  if(points){
    const token = `${now}-${Math.random()}`;
    scoreTapFeedback.set(matchId, { side, points, token, until:now + SCORE_FEEDBACK_MS });
    setTimeout(() => {
      document.querySelectorAll('.score-tap-feedback').forEach(el => {
        if(el.dataset.matchId === String(matchId)) el.classList.add('is-leaving');
      });
    }, SCORE_FEEDBACK_MS - 140);
    setTimeout(() => {
      const current = scoreTapFeedback.get(matchId);
      if(current && current.token === token) scoreTapFeedback.delete(matchId);
      document.querySelectorAll('.score-tap-feedback').forEach(el => {
        if(el.dataset.matchId === String(matchId)) el.remove();
      });
    }, SCORE_FEEDBACK_MS);
  }
  return true;
}

function recomputeMatch(match){
  if(state.tournament.format === 'team3v3' && match.teamBattle){ recomputeTeamMatch(match); return; }
  match.pointsA = match.log.filter(l=>l.side==='A').reduce((s,l)=>s+l.points,0);
  match.pointsB = match.log.filter(l=>l.side==='B').reduce((s,l)=>s+l.points,0);
  const target = state.tournament.pointsToWin;
  if(match.pointsA >= target || match.pointsB >= target){
    match.status = 'completed';
    match.winner = match.pointsA >= target ? match.playerA : match.playerB;
    if(!match.completedAt) match.completedAt = Date.now();
  } else {
    match.status = 'pending';
    match.winner = null;
    match.completedAt = null;
  }
}

function recordFinish(matchId, side, finishKey){
  const match = state.matches.find(m=>m.id===matchId);
  if(!match || match.status==='completed') return;
  if(!match.playerA || !match.playerB) return;
  const finish = FINISH[finishKey];
  if(!finish || !beginScoreInput(matchId, side, finish.points)) return;
  match.log.push({ side, finish:finishKey, points:finish.points });
  recomputeMatch(match);
  const scoringPlayerName = nameOf(side === 'A' ? match.playerA : match.playerB);
  const scoreAnnouncement = `${scoringPlayerName} 得 ${finish.points} 分，目前比分 ${match.pointsA} 比 ${match.pointsB}${match.status === 'completed' ? `，${nameOf(match.winner)} 獲勝` : ''}`;
  mobileHapticFeedback(match.status === 'completed' ? 'win' : 'score');
  markDirty(match.id);
  let structural = false;
  if(match.status === 'completed' && isElimination(state.tournament.format)){
    delete match.bracketStage;
    propagateKnockoutWinner(match);
    resolveByeCascade(state.matches);
    structural = true; // bracket reshuffled downstream matches — needs a full refresh
  }
  saveState(true);
  if(structural) renderAll();
  else refreshAfterScoreChange(matchId);
  announceAppStatus(scoreAnnouncement);
}

function undoLastPoint(matchId){
  const match = state.matches.find(m=>m.id===matchId);
  if(!match || match.log.length===0) return;
  if(state.tournament.format === 'team3v3'){
    const wasCompleted = match.status === 'completed';
    const previousWinner = match.winner;
    const previousLoser = previousWinner === match.playerA ? match.playerB : match.playerA;
    const applyUndo = () => {
      match.log.pop();
      recomputeTeamMatch(match);
      markDirty(match.id);
      if(wasCompleted){
        if(match.nextMatchId){
          const next = state.matches.find(item => item.id === match.nextMatchId);
          if(next && ((match.nextSlot === 'A' && next.playerA === previousWinner) || (match.nextSlot === 'B' && next.playerB === previousWinner))){
            if(match.nextSlot === 'A') next.playerA = null; else next.playerB = null;
            performResetMatch(next);
          }
        }
        if(match.loserNextMatchId){
          const bronze = state.matches.find(item => item.id === match.loserNextMatchId);
          if(bronze && ((match.loserNextSlot === 'A' && bronze.playerA === previousLoser) || (match.loserNextSlot === 'B' && bronze.playerB === previousLoser))){
            if(match.loserNextSlot === 'A') bronze.playerA = null; else bronze.playerB = null;
            performResetMatch(bronze);
          }
        }
      }
      saveState();
      renderAll();
      mobileHapticFeedback('undo');
      showToast('已撤銷上一分');
    };
    if(wasCompleted) showConfirm('撤銷此分會同步清除受影響的後續團體賽結果，確定嗎？', applyUndo);
    else applyUndo();
    return;
  }
  if(match.bracket && match.status==='completed'){
    showConfirm('撤銷此分會清除所有受影響的後續場次結果，確定嗎？',()=>{
      match.log.pop(); recomputeMatch(match); markDirty(match.id);
      reconcileDoubleElimination(state.matches); saveState(true); renderAll();
      mobileHapticFeedback('undo');
      showToast('已撤銷上一分');
    });
    return;
  }
  match.log.pop();
  recomputeMatch(match);
  markDirty(match.id);
  saveState();
  refreshAfterScoreChange(matchId);
  mobileHapticFeedback('undo');
  showToast('已撤銷上一分');
}

// Quick mode: referee just taps who won — no points, no finish types, no
// battery. Used only when state.tournament.quickMode is on (knockout only).
function recordQuickWin(matchId, side){
  const match = state.matches.find(m=>m.id===matchId);
  if(!match || match.status==='completed') return;
  if(!match.playerA || !match.playerB) return;
  if(!beginScoreInput(matchId, side, null)) return;
  match.pointsA = 0;
  match.pointsB = 0;
  match.quickWin = true;
  match.status = 'completed';
  match.winner = side === 'A' ? match.playerA : match.playerB;
  match.completedAt = Date.now();
  delete match.bracketStage;
  mobileHapticFeedback('win');
  markDirty(match.id);
  if(isElimination(state.tournament.format)){
    propagateKnockoutWinner(match);
    resolveByeCascade(state.matches);
  }
  saveState(true);
  renderAll();
}

function resetMatch(matchId){
  if(currentRole === 'viewer') return;
  const match = state.matches.find(m=>m.id===matchId);
  if(!match) return;
  showConfirm('確定要重新開始這場對戰嗎？目前紀錄與受影響的後續場次結果將被清除。', () => {
    refereePanels.filter(panel => panel.matchId === matchId).forEach(panel => {
      delete panel.nextMatchId;
      refereeNextMatchChoices.delete(panel.id);
    });
    performResetMatch(match);
    savePanels();
    saveState();
    renderAll();
    mobileHapticFeedback('reset');
    showToast('這場對戰已重置');
  });
}

function performResetMatch(match){
  delete match.bracketStage;
  if(match.bracket){
    clearDoubleResult(match);
    reconcileDoubleElimination(state.matches);
    return;
  }
  const hadWinner = match.status === 'completed';
  const prevWinner = match.winner;
  const prevLoser = prevWinner === match.playerA ? match.playerB : match.playerA;
  match.log = [];
  if(state.tournament.format === 'team3v3') match.teamBattle = null;
  match.quickWin = false;
  recomputeMatch(match);
  markDirty(match.id);

  if(isElimination(state.tournament.format) && hadWinner){
    if(match.nextMatchId){
      const next = state.matches.find(m => m.id === match.nextMatchId);
      if(next){
        if(match.nextSlot === 'A' && next.playerA === prevWinner){
          next.playerA = null;
          performResetMatch(next);
        } else if(match.nextSlot === 'B' && next.playerB === prevWinner){
          next.playerB = null;
          performResetMatch(next);
        }
      }
    }
    if(match.loserNextMatchId){
      const bronzeMatch = state.matches.find(m => m.id === match.loserNextMatchId);
      if(bronzeMatch){
        if(match.loserNextSlot === 'A' && bronzeMatch.playerA === prevLoser){
          bronzeMatch.playerA = null;
          performResetMatch(bronzeMatch);
        } else if(match.loserNextSlot === 'B' && bronzeMatch.playerB === prevLoser){
          bronzeMatch.playerB = null;
          performResetMatch(bronzeMatch);
        }
      }
    }
  }
}

function undoLastMatch(){
  const completed = state.matches.filter(m=>m.status==='completed' && m.completedAt);
  if(completed.length===0){ showAlert('目前沒有已完成的對戰可以撤銷。'); return; }
  completed.sort((a,b)=>b.completedAt-a.completedAt);
  const last = completed[0];
  showConfirm(`確定要撤銷「${nameOf(last.playerA)} vs ${nameOf(last.playerB)}」的結果嗎？`, () => {
    performResetMatch(last);
    saveState();
    renderAll();
    mobileHapticFeedback('undo');
    showToast('已撤銷最近一場對戰');
  });
}

/* =========================================================
   RANDOMIZE SCHEDULE (knockout bracket) — slot-machine reshuffle
========================================================= */
function shuffleArray(arr){
  // Fisher–Yates with rejection-sampled Web Crypto indices gives each ordering equal probability.
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = secureRandomIndex(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function drawHasPlay(){
  return state.matches.some(m=>!m.isBye && !m.inactive && (m.status==='completed' || m.bracketStage==='live' || hasMatchScoringActivity(m)));
}
function drawAllowed(source){
  return currentRole!=='viewer' && isElimination(state.tournament.format) && state.matches.length>0 && (source==='setup' || source==='tree');
}
function syncDrawActions(){
  const group=document.getElementById('treeDrawActions'),refMore=document.getElementById('refDrawMore');
  const playing=drawHasPlay(),ref=isRefereeBracketInteractive(),allowed=drawAllowed('tree');
  const target=playing?refMore:document.getElementById('refDrawOutside');
  if(group.parentElement!==target){
    if(playing) refMore.open=false;
    target.append(group);
  }
  refMore.classList.add('hidden');
  group.classList.toggle('hidden',!(ref&&allowed&&!playing));
  document.getElementById('setupDrawActions').classList.toggle('hidden',!drawAllowed('setup'));
}
let drawInProgress=false;
function randomizeSchedule(source,count=1){
  if(drawInProgress || ![1,5].includes(count))return;
  if(!drawAllowed(source)||scheduleSpinTimer)return;
  const more = document.getElementById('bracketMoreMenu');
  if(more) more.removeAttribute('open');
  document.getElementById('refDrawMore').open=false;
  if(state.matches.length === 0){
    showAlert('尚未產生對戰紀錄，請先前往「賽事設定」開始比賽。');
    return;
  }
  if(state.players.length < 2){
    showAlert('至少需要 2 位玩家才能重新抽籤排表。');
    return;
  }
  const withPlay=drawHasPlay();
  const question=withPlay?'保留名單，清除所有比分與對戰紀錄，重新抽籤對戰？':'保留目前名單，重新抽籤對戰？';
  showModal(question+(count===5?' 每秒抽 1 次，共 5 秒，採用第 5 次結果。':''),[{label:'取消',className:'btn-dark'},{label:withPlay?'清除並重抽':'重新抽籤對戰',className:'btn-danger',action:()=>{
    if(!drawAllowed(source)||drawHasPlay()!==withPlay){showToast('賽況已更新，請至賽事設定重新確認');return;}
    runScheduleShuffleAnimation(count,source,withPlay);
  }}],'重新抽籤對戰');
}

// Keep original labels for cancellation or for a tree that stays mounted.
const NAME_FLICKER_MS = 80;
let scheduleSpinLabels = new Map();
let scheduleSpinObserver = null;
let scheduleSpinNameHoldUntil = 0;
function startScheduleSpin(holdNamesMs=0){
  stopScheduleSpin();
  scheduleSpinNameHoldUntil=Date.now()+holdNamesMs;
  const pool = state.players.map(p => p.name).filter(Boolean);
  if(!pool.length) return false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wrap = document.getElementById('bracketTree');
  let treeRoot, cells;
  const visible = new Set();
  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    for(const entry of entries){
      if(entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    }
  },{rootMargin:'80px'}) : null;
  scheduleSpinObserver = observer;
  if(wrap){wrap.classList.add('schedule-shuffling');wrap.setAttribute('aria-busy','true');}
  function tick(){
    if(wrap && !reducedMotion.matches && !document.hidden && wrap.getClientRects().length){
      if(treeRoot !== wrap.firstElementChild || !cells){
        treeRoot = wrap.firstElementChild;
        cells = wrap.querySelectorAll('.bslot-name, .champ-name');
        observer?.disconnect();
        visible.clear();
        if(observer) cells.forEach(el => observer.observe(el));
        for(const el of scheduleSpinLabels.keys()){
          if(!el.isConnected) scheduleSpinLabels.delete(el);
        }
      }
      for(const el of (observer ? visible : cells)){
        if(!scheduleSpinLabels.has(el)){
          scheduleSpinLabels.set(el,el.textContent);
          el.classList.add('name-flicker');
        }
        if(Date.now() >= scheduleSpinNameHoldUntil){
          const i = Math.floor(Math.random() * pool.length);
          el.textContent = pool[i] === el.textContent ? pool[(i + 1) % pool.length] : pool[i];
        }
      }
    }
    scheduleSpinTimer = setTimeout(tick, NAME_FLICKER_MS);
  }
  tick();
  return true;
}
function stopScheduleSpin(restoreLabels = true){
  scheduleSpinObserver?.disconnect();
  scheduleSpinObserver = null;
  clearTimeout(scheduleSpinTimer);
  scheduleSpinTimer = null;
  scheduleSpinNameHoldUntil=0;
  const wrap = document.getElementById('bracketTree');
  if(wrap){wrap.classList.remove('schedule-shuffling');wrap.removeAttribute('aria-busy');}
  if(restoreLabels){
    for(const [el,label] of scheduleSpinLabels){
      if(el.isConnected){el.textContent=label;el.classList.remove('name-flicker');}
    }
  }
  scheduleSpinLabels.clear();
}

function generateScheduleShufflePreview(){
  return state.tournament.format === 'double_elimination'
    ? generateDoubleElimination(state.players)
    : generateKnockoutBracket(state.players);
}
function previewScheduleShuffle(matches, holdNamesMs=360){
  const wrap=document.getElementById('bracketTree');
  if(!wrap || !wrap.getClientRects().length || document.hidden)return false;
  const oldRects=new Map(Array.from(wrap.querySelectorAll('.bracket-match[data-match-id]'),el=>[
    el.dataset.matchId,el.getBoundingClientRect()
  ]));
  stopScheduleSpin(false);
  const currentMatches=state.matches;
  state.matches=matches;
  try{renderBracket();}
  finally{state.matches=currentMatches;syncDrawActions();}

  startScheduleSpin(holdNamesMs);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return true;
  for(const el of wrap.querySelectorAll('.bracket-match[data-match-id]')){
    if(!el.animate)continue;
    const before=oldRects.get(el.dataset.matchId);
    const after=el.getBoundingClientRect();
    const dx=before ? before.left-after.left : 0;
    const dy=before ? before.top-after.top : 10;
    const keyframes=before && Math.abs(dx)+Math.abs(dy)<1
      ? [{opacity:.55,transform:'scale(.96)'},{opacity:1,transform:'scale(1)'}]
      : [{opacity:.35,transform:`translate(${dx}px,${dy}px) scale(.96)`},{opacity:1,transform:'translate(0,0) scale(1)'}];
    el.animate(keyframes,{duration:240,easing:'cubic-bezier(.2,.8,.2,1)'});
  }
  for(const path of wrap.querySelectorAll('.conn-path')){
    path.animate?.([{opacity:.25},{opacity:.95},{opacity:.65}],{duration:240,easing:'ease-out'});
  }
  return true;
}

let remoteShuffle=null;
function remoteShuffleActive(){
  return !!remoteShuffle && remoteShuffle.event===currentEventCode && remoteShuffle.step>=0 && remoteShuffle.step<5;
}
function receiveRemoteShuffle(data){
  const run=Number(data.shuffleAt),step=data.shuffleStep;
  if(!Number.isFinite(run)||!Number.isInteger(step)||step< -1||step>5)return;
  if(remoteShuffle?.event!==currentEventCode){clearTimeout(remoteShuffle?.timer);remoteShuffle=null;}
  if(remoteShuffle && run<remoteShuffle.run)return;
  if(remoteShuffle?.run===run){
    if(remoteShuffle.step===-1 || remoteShuffle.step===5 || step<remoteShuffle.step && step!==-1)return;
  }else{
    if(Math.abs(Date.now()-Number(data.shuffleTick))>15000)return;
    clearTimeout(remoteShuffle?.timer);
    remoteShuffle={event:currentEventCode,run,step:-2,timer:null};
  }
  const changed=remoteShuffle.step!==step;
  remoteShuffle.step=step;
  if(step===-1){clearTimeout(remoteShuffle.timer);stopScheduleSpin();clearDrawMeter();return;}
  paintDrawMeter(run,step);
  if(step===5){
    clearTimeout(remoteShuffle.timer);stopScheduleSpin();
    if(remoteShuffle.resultReady && !remoteShuffle.revealed){remoteShuffle.revealed=true;revealShuffleResult();}
    return;
  }
  if(changed){
    try{previewScheduleShuffle(generateScheduleShufflePreview(),520);}
    catch(error){console.warn('抽籤樹狀圖預覽更新失敗',error);if(scheduleSpinTimer===null)startScheduleSpin();}
  }else if(scheduleSpinTimer===null)startScheduleSpin();
  if(changed){
    clearTimeout(remoteShuffle.timer);
    remoteShuffle.timer=setTimeout(()=>{
      if(remoteShuffle?.run!==run || remoteShuffle.event!==currentEventCode || lastLocalShuffleAt===run)return;
      stopScheduleSpin();
      if(drawMeter?.run===run){
        drawMeter.el.querySelector('header span').textContent='同步延遲，等待最新賽程';
        clearTimeout(drawMeter.timer);drawMeter.timer=setTimeout(clearDrawMeter,4000);
      }
    },15000);
  }
}
let drawMeter=null;
function clearDrawMeter(){if(!drawMeter)return;clearTimeout(drawMeter.timer);const el=drawMeter.el;drawMeter=null;
  if(el.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    const exit=el.animate([{opacity:1},{opacity:0}],{duration:180,easing:'ease-out',fill:'forwards'});exit.onfinish=()=>el.remove();
  }else el.remove();}
function paintDrawMeter(run,step){
  if(!Number.isInteger(step)||step<0||step>5)return;
  if(!drawMeter||drawMeter.run!==run){
    clearDrawMeter();const el=document.createElement('div');el.className='draw-progress';
    el.innerHTML='<header><span>重新抽籤中</span><output></output></header><div class="draw-meter" role="progressbar" aria-label="重新抽籤次數" aria-valuemin="0" aria-valuemax="5"><i></i></div>';
    document.body.append(el);drawMeter={el,run,step:-1};
  }
  if(step<=drawMeter.step)return;
  const m=drawMeter;m.step=step;
  m.el.querySelector('output').textContent=step+'／5';
  if(step===5){m.el.classList.add('is-complete');m.el.querySelector('header span').textContent='已完成五次抽籤';}
  m.el.querySelector('.draw-meter').setAttribute('aria-valuenow',step);
  const fill=m.el.querySelector('i');
  m.fillAnimation?.cancel();
  fill.style.transform='scaleX('+(step/5)+')';
  if(step<5 && fill.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    m.fillAnimation=fill.animate([
      {transform:'scaleX('+(step/5)+')'},
      {transform:'scaleX('+((step+1)/5)+')'}
    ],{duration:1000,easing:'linear',fill:'forwards'});
  }
  clearTimeout(m.timer);m.timer=setTimeout(clearDrawMeter,step===5?1300:10000);
}
async function runScheduleShuffleAnimation(count,source,withPlay){
  if(drawInProgress)return;
  drawInProgress=true;
  const buttons=[...document.querySelectorAll('.draw-pair button')];
  const labels=buttons.map(btn=>btn.innerHTML);
  buttons.forEach(btn=>{btn.disabled=true;btn.textContent='抽籤中…';});
  const originalEvent=currentEventCode, originalFormat=state.tournament.format;
  const roster=JSON.stringify(state.players.map(p=>p.id));
  const run=Date.now();let finished=false;
  let broadcastQueue=Promise.resolve();
  const broadcast=(step)=>{
    if(count===5 && step>=0)paintDrawMeter(run,step);
    if(!window.cloudSync?.ready || !originalEvent)return;
    const payload={shuffleAt:run,shuffleCount:count,shuffleStep:step,shuffleTick:Date.now()};
    // Preserve progress order; retry terminal notifications instead of silently losing 5/5.
    broadcastQueue=broadcastQueue.catch(()=>{}).then(async()=>{
      for(let attempt=0;attempt<3;attempt++){
        if(originalEvent!==currentEventCode)return;
        try{await window.cloudSync.pushMeta(payload);return;}
        catch(e){
          if(attempt===2){
            console.error('抽籤進度同步失敗',e);
            if(step===5||step===-1)showToast('抽籤進度尚未同步，請確認網路連線');
            return;
          }
          await new Promise(resolve=>setTimeout(resolve,500));
        }
      }
    });
  };
  try{
    lastLocalShuffleAt=run;broadcast(0);
    startScheduleSpin();
    let result;
    for(let i=1;i<=count;i++){
      await new Promise(resolve=>setTimeout(resolve,count===5?1000:480));
      if(originalEvent!==currentEventCode || originalFormat!==state.tournament.format ||
         roster!==JSON.stringify(state.players.map(p=>p.id)) || !drawAllowed(source) || drawHasPlay()!==withPlay){
        showToast('賽況已變動，請重新確認');return;
      }
      result=originalFormat==='double_elimination'?generateDoubleElimination(state.players):generateKnockoutBracket(state.players);
      try{previewScheduleShuffle(result,i===count?700:320);}
      catch(error){console.warn('抽籤樹狀圖預覽更新失敗',error);}
      if(count===5 && i<5) broadcast(i);
    }
    await new Promise(resolve=>setTimeout(resolve,260));
    finalizeScheduleShuffle(count,result);finished=true;if(count===5)broadcast(5);
  }finally{
    stopScheduleSpin();if(!finished && count===5){clearDrawMeter();broadcast(-1);}drawInProgress=false;
    buttons.forEach((btn,i)=>{btn.disabled=false;btn.innerHTML=labels[i];});
    if(!finished)renderBracket();else syncDrawActions();
  }
}

let reconcileShuffleResult=false;
let shuffleRevealAnimation=null;
function revealShuffleResult(){
  const tree=document.getElementById('bracketTree');
  shuffleRevealAnimation?.cancel();
  if(!tree?.animate || !tree.getClientRects().length || matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  shuffleRevealAnimation=tree.animate([
    {opacity:.85,transform:'translateY(2px)'}, {opacity:1,transform:'translateY(0)'}
  ],{duration:150,easing:'ease-out'});
}
function finalizeScheduleShuffle(count,newMatches){
  // Visible brackets are replaced in the same task. Restoring their old names
  // would add a redundant set of DOM writes immediately before replacement.
  const replacingTree = isTabVisible('standings') ||
    (isTabVisible('referee') && isRefereeBracketInteractive());
  stopScheduleSpin(!replacingTree);
  state.matches = newMatches;
  state.currentRound = 1;
  state.tournament.status = 'running';
  refereePanels.forEach(p => { p.matchId = null; delete p.matchClaimed; });
  savePanels();
  markAllDirty();

  cloudNeedsFullReplace = true;
  cloudReplaceRevision++;
  saveState();

  reconcileShuffleResult=true;
  try{renderAll({refreshSetup:false});}
  finally{reconcileShuffleResult=false;}
  revealShuffleResult();
  showToast(count===5?'已採用第 5 次抽籤結果':'已重新抽籤對戰');
}

/* =========================================================
   STANDINGS
========================================================= */
function calculateStandings(){
  const table = {};
  state.players.forEach(p=>{
    table[p.id] = { id:p.id, name:p.name, withdrawn:!!p.withdrawn, played:0, wins:0, losses:0, pointsFor:0, pointsAgainst:0, diff:0 };
  });

  state.matches.filter(m=>m.status==='completed').forEach(m=>{
    const A = table[m.playerA], B = table[m.playerB];
    if(!A || !B) return;
    A.played++; B.played++;
    A.pointsFor += m.pointsA; A.pointsAgainst += m.pointsB;
    B.pointsFor += m.pointsB; B.pointsAgainst += m.pointsA;
    if(m.winner === m.playerA){ A.wins++; B.losses++; } else { B.wins++; A.losses++; }
  });

  Object.values(table).forEach(p => p.diff = p.pointsFor - p.pointsAgainst);

  return Object.values(table).sort((a,b)=>{
    if(b.wins !== a.wins) return b.wins - a.wins;
    if(b.diff !== a.diff) return b.diff - a.diff;
    if(b.pointsFor !== a.pointsFor) return b.pointsFor - a.pointsFor;
    return a.name.localeCompare(b.name);
  });
}

/* =========================================================
   RENDER: STANDINGS
========================================================= */
function renderStandings(){
  const isKnockout = isElimination(state.tournament.format);
  document.getElementById('bracketSection').classList.toggle('hidden', !isKnockout || state.matches.length === 0);
  const themeRow = document.getElementById('bracketThemeRow');
  const beforeStart = state.matches.length === 0;
  const themeHost = document.querySelector(beforeStart ? '#prestartTheme' : '#bracketSection .bracket-title-row');
  if(themeHost && themeRow.parentElement !== themeHost) themeHost.append(themeRow);
  themeRow.classList.toggle('hidden', !beforeStart && !isKnockout);
  document.getElementById('standingsSection').classList.toggle('hidden', isKnockout || state.matches.length === 0);

  if(isKnockout){
    renderBracketPodium();
    renderBracket();
    applyBracketZoom(); // re-sync the zoom wrapper's size to the freshly rendered tree
    return;
  }

  const body = document.getElementById('standingsBody');
  const podiumContainer = document.getElementById('podiumContainer');
  const standings = calculateStandings();

  document.getElementById('rulesSummary').innerText =
    `先取得 ${state.tournament.pointsToWin || 4} 分獲勝・排序依：勝場 → 得失分 → 總得分`;

  const isTournamentComplete = state.matches.length > 0 && state.matches.every(m => m.status === 'completed');

  if(isTournamentComplete && standings.length > 0){
    const titles = ['冠軍','亞軍','季軍'];
    podiumContainer.innerHTML = `
      <div class="podium">
        ${standings.slice(0,3).map((p,i) => `
          <div class="podium-item podium-${i+1}">
            <div class="podium-medal">${TROPHY_ICONS[i+1]}</div>
            <div class="podium-title">${titles[i]}</div>
            <div class="podium-name">${escapeHtml(p.name)}</div>
            <div class="podium-record">${p.wins}勝${p.losses}負・${p.pointsFor}分</div>
          </div>
        `).join('')}
      </div>`;
    podiumContainer.classList.remove('hidden');
  } else {
    podiumContainer.innerHTML = '';
    podiumContainer.classList.add('hidden');
  }

  if(standings.length === 0){
    body.innerHTML = `<tr class="empty-row"><td colspan="9">尚未有玩家，請前往「賽事設定」開始比賽。</td></tr>`;
    return;
  }

  body.innerHTML = standings.map((p, i) => {
    const rank = i+1;
    let rc = '';
    if(rank===1) rc='rank-1'; else if(rank===2) rc='rank-2'; else if(rank===3) rc='rank-3';
    return `
      <tr>
        <td class="rank-cell ${rc}">${rank}</td>
        <td class="name">${escapeHtml(p.name)}${p.withdrawn ? ' <span class="status-pill pending" style="margin-left:4px;">已棄權</span>' : ''}</td>
        <td>${p.played}</td>
        <td>${p.wins}</td>
        <td>${p.losses}</td>
        <td>${p.pointsFor}</td>
        <td>${p.pointsAgainst}</td>
        <td>${p.diff > 0 ? '+'+p.diff : p.diff}</td>
        <td class="points-cell">${p.pointsFor}</td>
      </tr>`;
  }).join('');
}

/* =========================================================
   RENDER: KNOCKOUT PODIUM (champion only — runner-up/3rd
   place aren't well defined without a 3rd-place playoff)
========================================================= */
function renderBracketPodium(){
  const podiumContainer = document.getElementById('podiumContainer');
  if(state.matches.length === 0){
    podiumContainer.innerHTML = '';
    podiumContainer.classList.add('hidden');
    return;
  }
  const finalRound = Math.max(...state.matches.filter(m=>!m.thirdPlace).map(m=>m.round));
  const finalMatch = state.tournament.format === 'double_elimination' ? doubleFinalMatch() : state.matches.find(m=>m.round===finalRound && !m.thirdPlace);
  if(!finalMatch || finalMatch.status !== 'completed'){
    podiumContainer.innerHTML = '';
    podiumContainer.classList.add('hidden');
    return;
  }
  const champId = finalMatch.winner;
  const runnerUpId = champId === finalMatch.playerA ? finalMatch.playerB : finalMatch.playerA;
  const bronzeMatch = state.matches.find(m=>m.thirdPlace);
  const thirdId = state.tournament.format === 'double_elimination' ? doubleThirdId() : (bronzeMatch && bronzeMatch.status === 'completed') ? bronzeMatch.winner : null;
  podiumContainer.innerHTML = `
    <div class="podium">
      <div class="podium-item podium-2">
        <div class="podium-medal">${TROPHY_ICONS[2]}</div>
        <div class="podium-title">亞軍</div>
        <div class="podium-name">${escapeHtml(nameOf(runnerUpId))}</div>
      </div>
      <div class="podium-item podium-1">
        <div class="podium-medal">${TROPHY_ICONS[1]}</div>
        <div class="podium-title">冠軍</div>
        <div class="podium-name">${escapeHtml(nameOf(champId))}</div>
      </div>
      <div class="podium-item podium-3">
        <div class="podium-medal">${TROPHY_ICONS[3]}</div>
        <div class="podium-title">季軍</div>
        <div class="podium-name">${thirdId ? escapeHtml(nameOf(thirdId)) : (bronzeMatch ? '對戰中' : '－')}</div>
      </div>
    </div>`;
  podiumContainer.classList.remove('hidden');
}

/* =========================================================
   RENDER: KNOCKOUT BRACKET TREE
========================================================= */
function bracketMatchesByRound(){
  const byRound = {};
  state.matches.filter(m => !m.thirdPlace).forEach(m=>{
    (byRound[m.round] = byRound[m.round] || []).push(m);
  });
  const rounds = Object.keys(byRound).map(Number).sort((a,b)=>a-b);
  rounds.forEach(r=>{
    byRound[r].sort((a,b)=>{
      const ai = parseInt(String(a.id).split('-')[1] || 0, 10);
      const bi = parseInt(String(b.id).split('-')[1] || 0, 10);
      return ai - bi;
    });
  });
  return { rounds, byRound };
}

// A match is the true final only for single-elimination (knockout) brackets,
// on the last round, and never the third-place (bronze) match sharing that round.
function isFinalMatch(match){
  if(match && match.bracket) return match.bracket === 'final';
  if(!match || match.thirdPlace) return false;
  if(!state.tournament || !['knockout','team3v3'].includes(state.tournament.format)) return false;
  if(!state.matches || state.matches.length === 0) return false;
  const maxRound = Math.max(...state.matches.map(m => m.round));
  return match.round === maxRound;
}

function bracketRoundLabel(r, totalRounds){
  const fromEnd = totalRounds - r;
  if(fromEnd === 0) return '決賽';
  if(fromEnd === 1) return '準決賽';
  if(fromEnd === 2) return '八強賽';
  if(fromEnd === 3) return '十六強賽';
  return `第 ${r} 輪`;
}

function bracketNameSizeClass(name){
  const length = Array.from(String(name ?? '')).length;
  if(length >= 11) return 'name-extra-long';
  if(length >= 9) return 'name-long';
  if(length >= 7) return 'name-medium';
  if(length >= 6) return 'name-compact';
  return '';
}

function bracketStageMetaHtml(m, liveIds, nextIds, stage){
  const status = m.status === 'completed' ? null
    : (liveIds && liveIds.has(m.id)) ? 'live'
    : (nextIds && nextIds.has(m.id)) ? 'next'
    : null;
  const symbol = stage === 'final' ? 'trophy' : 'medal';
  const stageName = stage === 'final' ? '決賽' : '季軍戰';
  const canEditStage = isRefereeBracketInteractive() && isReadyPendingBracketMatch(m);
  const title = canEditStage
    ? `<button type="button" class="bracket-stage-title ${stage} bracket-stage-edit" data-match-id="${escapeAttr(m.id)}" aria-label="點擊標記${stageName}為進行中">${icon(symbol,14)}<span>${stageName}</span></button>`
    : `<span class="bracket-stage-title ${stage}">${icon(symbol,14)}<span>${stageName}</span></span>`;
  const statusLabel = status === 'live'
    ? `<span class="bracket-status-badge live"><span class="bracket-status-dot" aria-hidden="true"></span>進行中</span>`
    : status === 'next'
      ? `<span class="bracket-status-badge next"><span class="bracket-status-dot" aria-hidden="true"></span>即將上場</span>`
      : '';
  return `${title}${statusLabel}`;
}

function bracketMatchBoxHtml(m, top, liveIds, nextIds, isFinal, hideStatusBadge = false){
  const aWd = isWithdrawn(m.playerA);
  const bWd = isWithdrawn(m.playerB);
  const aDisplayName = nameOf(m.playerA) + (aWd ? '（棄權）' : '');
  const bDisplayName = nameOf(m.playerB) + (bWd ? '（棄權）' : '');
  const aName = escapeHtml(aDisplayName);
  const bName = escapeHtml(bDisplayName);
  const aNameSize = bracketNameSizeClass(aDisplayName);
  const bNameSize = bracketNameSizeClass(bDisplayName);
  const aWin = m.status === 'completed' && m.winner === m.playerA;
  const bWin = m.status === 'completed' && m.winner === m.playerB;
  const aBye = m.playerA === 'BYE';
  const bBye = m.playerB === 'BYE';
  const editable = isRefereeBracketInteractive() && m.playerA && m.playerB &&
    !m.isBye && !m.inactive && !aBye && !bBye && !aWd && !bWd;
  const slotTag = editable ? 'button' : 'div';
  const aLose = m.status === 'completed' && !aWin && !aBye && !aWd;
  const bLose = m.status === 'completed' && !bWin && !bBye && !bWd;
  const hasRecordedPoints = Number(m.pointsA) > 0 || Number(m.pointsB) > 0;
  const showPts = !m.quickWin && (hasRecordedPoints || (m.status === 'completed' && !state.tournament.quickMode));

  const status = m.status === 'completed' ? null
    : (liveIds && liveIds.has(m.id)) ? 'live'
    : (nextIds && nextIds.has(m.id)) ? 'next'
    : null;
  const statusClass = status === 'live' ? 'is-live' : status === 'next' ? 'is-next' : '';
  const statusBadge = !hideStatusBadge && status === 'live'
    ? `<div class="bracket-status-badge live ${isFinal ? 'with-final' : ''}"><span class="bracket-status-dot" aria-hidden="true"></span>進行中</div>`
    : !hideStatusBadge && status === 'next'
      ? `<div class="bracket-status-badge next ${isFinal ? 'with-final' : ''}"><span class="bracket-status-dot" aria-hidden="true"></span>即將上場</div>`
      : '';
  const finalClass = isFinal ? 'final-match' : '';
  return `
    <div class="bracket-match ${m.status==='completed' ? 'done':''} ${statusClass} ${finalClass}" style="top:${top}px;" data-match-id="${m.id}">
      ${statusBadge}
      <${slotTag} class="bracket-slot ${aWin?'winner':''} ${aLose?'loser':''} ${(aBye||aWd)?'bye':''} ${editable?'bracket-win-pick':''}" ${editable ? `type="button" data-match-id="${escapeAttr(m.id)}" data-side="A" aria-label="判定 ${escapeAttr(aDisplayName)} 獲勝"` : ''} data-player-id="${(m.playerA && !aBye) ? escapeAttr(m.playerA) : ''}">
        <span class="bslot-name ${aNameSize}" title="${escapeAttr(aDisplayName)}">${aName}</span>
        ${aWin ? `<span class="bslot-check" aria-label="勝者">勝</span>` : ''}
        ${m.playerA && !aBye && showPts ? `<span class="bslot-pts" aria-label="比分 ${Number(m.pointsA) || 0}">${Number(m.pointsA) || 0}</span>` : ''}
      </${slotTag}>
      <${slotTag} class="bracket-slot ${bWin?'winner':''} ${bLose?'loser':''} ${(bBye||bWd)?'bye':''} ${editable?'bracket-win-pick':''}" ${editable ? `type="button" data-match-id="${escapeAttr(m.id)}" data-side="B" aria-label="判定 ${escapeAttr(bDisplayName)} 獲勝"` : ''} data-player-id="${(m.playerB && !bBye) ? escapeAttr(m.playerB) : ''}">
        <span class="bslot-name ${bNameSize}" title="${escapeAttr(bDisplayName)}">${bName}</span>
        ${bWin ? `<span class="bslot-check" aria-label="勝者">勝</span>` : ''}
        ${m.playerB && !bBye && showPts ? `<span class="bslot-pts" aria-label="比分 ${Number(m.pointsB) || 0}">${Number(m.pointsB) || 0}</span>` : ''}
      </${slotTag}>
    </div>`;
}

// Builds the render-time layout for the bracket tree, WITHOUT touching the
// underlying tournament data (state.matches / bracketMatchesByRound output).
//
// A round-1 BYE remains a layout anchor so the tree keeps its correct shape,
// but it is never rendered. This cleanly hides all "輪空" UI without
// changing the match graph or automatic advancement.
//
// Position rule (bottom-up):
//   - Round-1 boxes are stacked top-to-bottom with a small fixed gap
//     between them, each reserving only its own height (BYE_H for a bye,
//     BOX_H for a real match) — not a uniform slot — so byes don't waste
//     vertical space.
//   - Every round r>1 match centers on the average Y of its two round r-1
//     feeders (found via nextMatchId, not array index, to stay correct
//     regardless of sort order).
// Returns { visibleByRound, pos, H, boxHeight } where pos maps matchId ->
// centerY, and boxHeight maps matchId -> its rendered height in px.
// (visibleByRound keeps its old name for compatibility with renderBracket;
// nothing is filtered out — every match gets an entry.)
const BRACKET_BOX_H = 74;   // px height of a normal match card
const BRACKET_BYE_H = 30;   // invisible layout anchor; intentionally not rendered
const BRACKET_ROW_GAP = 30; // px gap: reserves room for the small match-number label
const BRACKET_TAG_H = 26; // 標籤高度 18px + 標籤與卡片間距 8px

function computeBracketLayout(rounds, byRound){
  const refereeMode = isRefereeBracketInteractive();
  const activeBoxH = refereeMode ? 90 : BRACKET_BOX_H;
  const activeRowGap = refereeMode ? 44 : BRACKET_ROW_GAP;
  const activeTagH = refereeMode ? 44 : BRACKET_TAG_H;
  const visibleByRound = {};
  rounds.forEach(r => { visibleByRound[r] = byRound[r]; });

  const pos = {};
  const boxHeight = {};

  const round1 = visibleByRound[rounds[0]];
  let cursor = activeTagH;
  round1.forEach(m => {
    const h = m.isBye ? BRACKET_BYE_H : activeBoxH;
    boxHeight[m.id] = h;
    pos[m.id] = cursor + h / 2;
    cursor += h + activeRowGap;
  });
  let H = Math.max(activeBoxH, cursor - activeRowGap);

  for(let ri = 1; ri < rounds.length; ri++){
    const r = rounds[ri];
    const prevMatches = byRound[rounds[ri-1]];
    const list = visibleByRound[r];

    list.forEach(m => {
      boxHeight[m.id] = activeBoxH; // byes never occur past round 1
      const feederYs = prevMatches
        .filter(f => f.nextMatchId === m.id)
        .map(f => pos[f.id])
        .filter(y => y !== undefined);
      pos[m.id] = feederYs.length
        ? feederYs.reduce((a,b) => a+b, 0) / feederYs.length
        : (H / (list.length + 1)) * (list.indexOf(m) + 1); // no feeders found — even fallback
    });
  }

  // Guard against float/edge-case drift pushing anything outside [0, H].
  const allEntries = Object.keys(pos).map(id => ({ id, y: pos[id], half: boxHeight[id] / 2 }));
  if(allEntries.length){
    const minTop = Math.min(...allEntries.map(e => e.y - e.half));
    if(minTop < 0){
      const shift = -minTop;
      Object.keys(pos).forEach(id => { pos[id] += shift; });
    }
    const maxBottom = Math.max(...allEntries.map(e => (pos[e.id] !== undefined ? pos[e.id] : e.y) + e.half));
    if(maxBottom > H) H = maxBottom;
  }

  return { visibleByRound, pos, H, boxHeight };
}

// A redraw usually keeps the same rounds, controls, and slots. Reuse their
// DOM on the reveal so the browser only lays out actual draw differences.
function setBracketMarkup(wrap, html){
  if(!reconcileShuffleResult){
    wrap.innerHTML = html;
    return;
  }
  const template = document.createElement('template');
  template.innerHTML = html;
  reconcileBracketChildren(wrap,template.content);
}
function reconcileBracketChildren(parent,source){
  let old = parent.firstChild;
  for(const next of Array.from(source.childNodes)){
    if(!old){parent.append(next);continue;}
    const after = old.nextSibling;
    if(old.nodeName !== next.nodeName){
      old.replaceWith(next);
    }else if(old.nodeType === Node.TEXT_NODE){
      if(old.data !== next.data) old.data = next.data;
    }else if(old.nodeType === Node.ELEMENT_NODE && !old.isEqualNode(next)){
      for(const attr of Array.from(old.attributes)){
        if(!next.hasAttribute(attr.name)) old.removeAttribute(attr.name);
      }
      for(const attr of next.attributes){
        if(old.getAttribute(attr.name) !== attr.value) old.setAttribute(attr.name,attr.value);
      }
      reconcileBracketChildren(old,next);
    }
    old = after;
  }
  while(old){const after = old.nextSibling;old.remove();old = after;}
}

function renderBracket(){
  syncDrawActions();
  if(state.tournament.format === 'double_elimination') { renderDoubleBracket(); return; }
  document.getElementById('bracketRulesSummary').textContent = state.tournament.format === 'team3v3'
    ? '3v3 團體單淘汰・全隊三名團員淘汰即落敗'
    : '單淘汰賽';
  const wrap = document.getElementById('bracketTree');
  wrap.classList.remove('double-tree');
  if(state.matches.length === 0){
    wrap.innerHTML = currentRole === 'viewer'
      ? `<div class="bracket-empty referee-bracket-empty"><div class="referee-bracket-empty-title">賽程尚未建立</div><p>等待裁判建立賽事後，對戰樹會顯示在這裡。</p></div>`
      : `<div class="bracket-empty referee-bracket-empty"><div class="referee-bracket-empty-title">先建立賽程</div><p>到「賽事設定」建立單淘汰或雙敗淘汰賽，完成後就能在這裡開始場次並登錄勝者。</p><button type="button" class="btn btn-primary btn-sm" onclick="switchTab('setup')">前往賽事設定</button></div>`;
    return;
  }

  const { rounds, byRound } = bracketMatchesByRound();
  const { visibleByRound, pos, H, boxHeight } = computeBracketLayout(rounds, byRound);
  const GAP = 42;       // px width of connector gap between columns
  const COLW = 190;     // px width of each round column
  const editing = isRefereeBracketInteractive();
  const HALF = editing ? 45 : 37;
  const tagH = editing ? 44 : BRACKET_TAG_H;

  // Only claimed matches are marked live; auto-filled previews stay upcoming.
  const liveIds = new Set(state.matches.filter(isMatchLive).map(match => match.id));
  // Show the shared upcoming queue. Preview cards do not reserve a match for
  // a specific referee table; the first table to press "下一場" gets the first
  // available match at that moment.
  const assignedUpcoming = Object.values(computeUpcomingMatchPreviews()).filter(Boolean);
  const nextIds = new Set(
    assignedUpcoming.length
      ? assignedUpcoming.map(match => match.id)
      : (refereePanels.length === 0 ? [nextPlayableMatch(Array.from(liveIds))?.id].filter(Boolean) : [])
  );
  const bronzeMatch = state.matches.find(m => m.thirdPlace);
  // 使用與「對戰紀錄」相同的實際場次順序；輪空不占編號。
  const singleMatchNumbers = new Map(
    state.matches.filter(m => !m.isBye && !m.inactive).map((m,i) => [m.id, i+1])
  );

  let html = `<div class="bracket-inner">`;

  rounds.forEach((r, ridx) => {
    const matches = visibleByRound[r]; // BYEs keep layout positions but have no visible card
    const isFinalRound = ridx === rounds.length - 1;

    html += `<div class="bracket-col" style="width:${COLW}px;">
      <div class="bracket-round-label">${bracketRoundLabel(r, rounds.length)}</div>
      <div class="bracket-round-body" style="height:${H}px;">`;
    matches.forEach(m => {
      const centerY = pos[m.id];
      if(!m.isBye){
        const matchNumberLabel = formatMatchNumberLabel(singleMatchNumbers.get(m.id));
        const canEditStage = editing && isReadyPendingBracketMatch(m);
        const matchTagOffset = m.status === 'completed' ? 30 : tagH;
        html += isFinalRound
          ? `<div class="bracket-stage-meta final" style="top:${centerY - HALF - (editing ? 42 : 28)}px;">${bracketStageMetaHtml(m, liveIds, nextIds, 'final')}</div>`
          : (matchNumberLabel ? (canEditStage
              ? `<button type="button" class="single-match-tag bracket-stage-edit" data-match-id="${escapeAttr(m.id)}" style="top:${centerY - HALF - tagH}px;" aria-label="點擊標記${matchNumberLabel}為進行中">${matchNumberLabel}</button>`
              : `<div class="single-match-tag ${m.status === 'completed' ? 'locked' : ''}" style="top:${centerY - HALF - matchTagOffset}px;">${matchNumberLabel}</div>`) : '');
        html += bracketMatchBoxHtml(m, centerY - HALF, liveIds, nextIds, isFinalRound, isFinalRound);
      }
    });
    html += `</div>`;

    html += `</div>`;
    if(isFinalRound && bronzeMatch){
      const top = pos[matches[0].id] - HALF;
      html += `<div class="bracket-col" style="width:${COLW}px;margin-inline-start:${GAP}px">
        <div class="bracket-round-label" aria-hidden="true" style="visibility:hidden">季軍戰</div>
        <div class="bracket-round-body bracket-bronze-body" style="height:${H}px">
          <div class="bracket-stage-meta bronze" style="top:${top-(editing?42:28)}px">${bracketStageMetaHtml(bronzeMatch,liveIds,nextIds,'bronze')}</div>
          ${bracketMatchBoxHtml(bronzeMatch,top,liveIds,nextIds,false,true)}
        </div></div>`;
    }

    if(ridx < rounds.length - 1){
      // Connectors are derived from the actual match graph (nextMatchId),
      // not array position, so they stay correct regardless of sort order.
      // BYE matches remain in the data graph, but their hidden anchor does not
      // draw a visible connector. The auto-advanced player appears next round.
      const nextMatches = visibleByRound[rounds[ridx+1]];
      let paths = '';
      nextMatches.forEach(nm => {
        const feeders = byRound[r].filter(f => f.nextMatchId === nm.id);
        feeders.filter(f => !f.isBye).forEach(f => {
          const yFrom = pos[f.id];
          const yTo = pos[nm.id];
          const done = f.status === 'completed';
          // Square elbow connector: flat out of the box, a right-angle bend,
          // then flat into the next one.
          paths += `<path class="conn-path ${done?'active':''}" data-from-match="${f.id}" data-to-match="${nm.id}" d="M0,${yFrom} H${GAP/2} V${yTo} H${GAP}"></path>`;
        });
      });
      html += `<div class="bracket-conn-col" style="width:${GAP}px;">
        <div class="bracket-round-label" style="visibility:hidden;">·</div>
        <div class="bracket-conn" style="height:${H}px;">
          <svg class="bracket-conn-svg" width="${GAP}" height="${H}" viewBox="0 0 ${GAP} ${H}" preserveAspectRatio="none">${paths}</svg>
        </div>
      </div>`;
    }
    // Final round (決賽) is now the last visible column — no trailing
    // champion column/connector is drawn after it anymore.
  });

  html += `</div>`;

  setBracketMarkup(wrap, html);

  updateBracketSearchVisibility();
}

/* =========================================================
   BRACKET: PLAYER SEARCH
   Surfaced for every elimination bracket so players can quickly
   locate themselves without manually scanning the tree. The point isn't the dropdown list —
   it's landing the user on their current match card as fast as
   possible: type → pick → tree scrolls & centers → card glows.
========================================================= */
let bracketSearchActiveIndex = -1;
let bracketSearchResults = [];
let bracketSearchHighlightTimer = null;

function updateBracketSearchVisibility(){
  const wrap = document.getElementById('bracketSearchWrap');
  if(!wrap) return;
  const isKnockout = state.tournament && isElimination(state.tournament.format);
  const playerCount = Array.isArray(state.players) ? state.players.length : 0;
  const show = isKnockout && playerCount > 0 && state.matches.length > 0;
  wrap.classList.toggle('hidden', !show);
  if(!show) clearBracketSearch();
}

function onBracketSearchInput(rawQuery){
  const query = (rawQuery || '').trim();
  const listEl = document.getElementById('bracketSearchList');
  const clearBtn = document.getElementById('bracketSearchClearBtn');
  if(clearBtn) clearBtn.classList.toggle('hidden', query.length === 0);

  if(query.length === 0){
    bracketSearchResults = [];
    bracketSearchActiveIndex = -1;
    if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
    return;
  }

  const q = query.toLowerCase();
  const pool = Array.isArray(state.players) ? state.players : [];
  bracketSearchResults = pool.filter(p => p && p.name && p.name.toLowerCase().includes(q));
  bracketSearchActiveIndex = bracketSearchResults.length ? 0 : -1;
  renderBracketSearchList(query);
}

function renderBracketSearchList(query){
  const listEl = document.getElementById('bracketSearchList');
  if(!listEl) return;

  if(bracketSearchResults.length === 0){
    listEl.innerHTML = `<li class="bracket-search-empty">找不到符合「${escapeHtml(query)}」的選手</li>`;
    listEl.classList.remove('hidden');
    return;
  }

  listEl.innerHTML = bracketSearchResults.map((p, i) => `
    <li class="bracket-search-item ${i === bracketSearchActiveIndex ? 'active' : ''}"
        role="option" data-index="${i}"
        onmousedown="event.preventDefault(); selectBracketSearchResult(${i});">
      <span class="bsi-mark">${icon('target',12)}</span><span>${escapeHtml(p.name)}</span>
    </li>
  `).join('');
  listEl.classList.remove('hidden');
}

function onBracketSearchKeydown(e){
  const listEl = document.getElementById('bracketSearchList');
  if(e.key === 'Escape'){
    e.preventDefault();
    clearBracketSearch();
    e.target.blur();
    return;
  }
  if(e.key === 'Enter'){
    e.preventDefault();
    if(bracketSearchResults.length > 0){
      const idx = bracketSearchActiveIndex >= 0 ? bracketSearchActiveIndex : 0;
      selectBracketSearchResult(idx);
    }
    return;
  }
  if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
    if(bracketSearchResults.length === 0) return;
    e.preventDefault();
    const dir = e.key === 'ArrowDown' ? 1 : -1;
    bracketSearchActiveIndex = (bracketSearchActiveIndex + dir + bracketSearchResults.length) % bracketSearchResults.length;
    if(listEl){
      Array.from(listEl.children).forEach((li, i) => li.classList.toggle('active', i === bracketSearchActiveIndex));
    }
  }
}

function clearBracketSearch(){
  const input = document.getElementById('bracketSearchInput');
  const listEl = document.getElementById('bracketSearchList');
  const clearBtn = document.getElementById('bracketSearchClearBtn');
  if(input) input.value = '';
  if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
  if(clearBtn) clearBtn.classList.add('hidden');
  bracketSearchResults = [];
  bracketSearchActiveIndex = -1;
}

function selectBracketSearchResult(index){
  const player = bracketSearchResults[index];
  if(!player) return;
  const input = document.getElementById('bracketSearchInput');
  if(input) input.value = player.name;
  const listEl = document.getElementById('bracketSearchList');
  if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
  locateBracketPlayer(player.id);
}

// Finds every match this player has appeared in, jumps to their current
// (furthest-advanced) card, centers it on screen, and glows both that
// card and every earlier card + connector along their advancement path.
function locateBracketPlayer(playerId){
  const wrap = document.getElementById('bracketTree');
  if(!wrap) return;

  const playerMatches = state.matches
    .filter(m => m.playerA === playerId || m.playerB === playerId)
    .sort((a, b) => a.round - b.round);
  if(playerMatches.length === 0) return;

  const currentMatch = playerMatches[playerMatches.length - 1];
  const cardEl = wrap.querySelector(`[data-match-id="${cssEscapeId(currentMatch.id)}"]`);
  if(!cardEl) return;

  cardEl.scrollIntoView({ behavior:'smooth', block:'center', inline:'center' });

  clearTimeout(bracketSearchHighlightTimer);
  wrap.querySelectorAll('.search-hit').forEach(el => el.classList.remove('search-hit'));
  wrap.querySelectorAll('.search-hit-name').forEach(el => el.classList.remove('search-hit-name'));
  wrap.querySelectorAll('.search-hit-path').forEach(el => el.classList.remove('search-hit-path'));

  // Highlight the player's name (and box glow for the current card) in
  // every match box they've passed through — the full advancement route.
  playerMatches.forEach(m => {
    const box = wrap.querySelector(`[data-match-id="${cssEscapeId(m.id)}"]`);
    if(!box) return;
    if(m.id === currentMatch.id) box.classList.add('search-hit');
    const nameEl = box.querySelector(`[data-player-id="${cssEscapeId(playerId)}"] .bslot-name`)
      || box.querySelector(`.bye-compact-name[data-player-id="${cssEscapeId(playerId)}"]`);
    if(nameEl) nameEl.classList.add('search-hit-name');
    if(m.nextMatchId){
      const path = wrap.querySelector(`.conn-path[data-from-match="${cssEscapeId(m.id)}"]`);
      if(path) path.classList.add('search-hit-path');
    }
  });

  bracketSearchHighlightTimer = setTimeout(() => {
    wrap.querySelectorAll('.search-hit').forEach(el => el.classList.remove('search-hit'));
  }, 2000);
}

function cssEscapeId(id){
  return (window.CSS && CSS.escape) ? CSS.escape(String(id)) : String(id).replace(/["\\]/g, '\\$&');
}

function closeBracketSearchOnOutsideClick(e){
  const wrap = document.getElementById('bracketSearchWrap');
  if(wrap && !wrap.contains(e.target)){
    const listEl = document.getElementById('bracketSearchList');
    if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
  }
}
document.addEventListener('click', closeBracketSearchOnOutsideClick);

/* =========================================================
   MATCH RECORDS: PLAYER SEARCH
   Uses the same type-ahead interaction as the bracket search,
   then highlights every recorded match involving that player.
========================================================= */
let matchSearchActiveIndex = -1;
let matchSearchResults = [];
let matchSearchHighlightTimer = null;

function updateMatchSearchVisibility(){
  const wrap = document.getElementById('matchSearchWrap');
  if(!wrap) return;
  const show = Array.isArray(state.players) && state.players.length > 0 &&
    Array.isArray(state.matches) && state.matches.some(m => !m.isBye && !m.inactive);
  wrap.classList.toggle('hidden', !show);
  if(!show) clearMatchSearch();
}

function onMatchSearchInput(rawQuery){
  const query = String(rawQuery || '').trim();
  const listEl = document.getElementById('matchSearchList');
  const clearBtn = document.getElementById('matchSearchClearBtn');
  if(clearBtn) clearBtn.classList.toggle('hidden', query.length === 0);

  if(!query){
    matchSearchResults = [];
    matchSearchActiveIndex = -1;
    if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
    clearMatchSearchHighlights();
    return;
  }

  const normalizedQuery = query.normalize('NFKC').toLocaleLowerCase('zh-Hant');
  matchSearchResults = (Array.isArray(state.players) ? state.players : [])
    .filter(p => p && p.name && p.name.normalize('NFKC').toLocaleLowerCase('zh-Hant').includes(normalizedQuery));
  matchSearchActiveIndex = matchSearchResults.length ? 0 : -1;
  renderMatchSearchList(query);
}

function renderMatchSearchList(query){
  const listEl = document.getElementById('matchSearchList');
  if(!listEl) return;
  listEl.innerHTML = matchSearchResults.length
    ? matchSearchResults.map((p, i) => `
      <li class="bracket-search-item ${i === matchSearchActiveIndex ? 'active' : ''}"
          role="option" data-index="${i}"
          onmousedown="event.preventDefault(); selectMatchSearchResult(${i});">
        <span class="bsi-mark">${icon('target',12)}</span><span>${escapeHtml(p.name)}</span>
      </li>`).join('')
    : `<li class="bracket-search-empty">找不到符合「${escapeHtml(query)}」的選手</li>`;
  listEl.classList.remove('hidden');
}

function onMatchSearchKeydown(e){
  if(e.key === 'Escape'){
    e.preventDefault();
    clearMatchSearch();
    e.target.blur();
    return;
  }
  if(e.key === 'Enter'){
    e.preventDefault();
    if(matchSearchResults.length){
      selectMatchSearchResult(matchSearchActiveIndex >= 0 ? matchSearchActiveIndex : 0);
    }
    return;
  }
  if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
    if(!matchSearchResults.length) return;
    e.preventDefault();
    const direction = e.key === 'ArrowDown' ? 1 : -1;
    matchSearchActiveIndex = (matchSearchActiveIndex + direction + matchSearchResults.length) % matchSearchResults.length;
    const listEl = document.getElementById('matchSearchList');
    if(listEl){
      Array.from(listEl.children).forEach((li, i) => li.classList.toggle('active', i === matchSearchActiveIndex));
    }
  }
}

function clearMatchSearchHighlights(){
  clearTimeout(matchSearchHighlightTimer);
  document.querySelectorAll('#matchList .match-search-hit').forEach(el => el.classList.remove('match-search-hit'));
  document.querySelectorAll('#matchList .match-search-hit-name').forEach(el => el.classList.remove('match-search-hit-name'));
}

function clearMatchSearch(){
  const input = document.getElementById('matchSearchInput');
  const listEl = document.getElementById('matchSearchList');
  const clearBtn = document.getElementById('matchSearchClearBtn');
  if(input) input.value = '';
  if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
  if(clearBtn) clearBtn.classList.add('hidden');
  matchSearchResults = [];
  matchSearchActiveIndex = -1;
  clearMatchSearchHighlights();
}

function selectMatchSearchResult(index){
  const player = matchSearchResults[index];
  if(!player) return;
  const input = document.getElementById('matchSearchInput');
  const listEl = document.getElementById('matchSearchList');
  if(input) input.value = player.name;
  if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
  locatePlayerMatchRecords(player.id);
}

function locatePlayerMatchRecords(playerId){
  const playerMatches = state.matches.filter(m =>
    !m.isBye && !m.inactive && (m.playerA === playerId || m.playerB === playerId)
  );
  if(!playerMatches.length){
    showToast('目前沒有這位選手的對戰紀錄');
    return;
  }

  clearMatchSearchHighlights();
  matchStatusFilter = 'all';
  playerMatches.filter(m => m.status === 'completed').forEach(m => expandedMatchIds.add(m.id));
  renderMatches();
  const cards = playerMatches.map(m =>
    document.querySelector(`#matchList .match[data-match-id="${cssEscapeId(m.id)}"]`)
  ).filter(Boolean);
  cards.forEach(card => {
    card.classList.add('match-search-hit');
    card.querySelectorAll(`[data-player-id="${cssEscapeId(playerId)}"]`).forEach(name => name.classList.add('match-search-hit-name'));
  });

  const pendingMatch = playerMatches.find(m => m.status !== 'completed');
  const targetMatch = pendingMatch || playerMatches[playerMatches.length - 1];
  const target = document.querySelector(`#matchList .match[data-match-id="${cssEscapeId(targetMatch.id)}"]`);
  if(target) target.scrollIntoView({ behavior:'smooth', block:'center' });
  matchSearchHighlightTimer = setTimeout(clearMatchSearchHighlights, 2100);
}

function closeMatchSearchOnOutsideClick(e){
  const wrap = document.getElementById('matchSearchWrap');
  if(wrap && !wrap.contains(e.target)){
    const listEl = document.getElementById('matchSearchList');
    if(listEl){ listEl.innerHTML = ''; listEl.classList.add('hidden'); }
  }
}
document.addEventListener('click', closeMatchSearchOnOutsideClick);

/* =========================================================
   RENDER: MATCHES TAB
========================================================= */
let matchStatusFilter = 'all';
const expandedMatchIds = new Set();

function setMatchStatusFilter(filter){
  matchStatusFilter = ['all','pending','completed'].includes(filter) ? filter : 'all';
  document.querySelectorAll('.match-filter-btn').forEach(btn => {
    const active = btn.dataset.filter === matchStatusFilter;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  renderMatches();
}

function toggleMatchDetails(matchId, button){
  const card = button && button.closest('.match');
  const details = card && card.querySelector('.match-collapsible');
  if(!card || !details) return;
  const willExpand = details.classList.contains('hidden');
  details.classList.toggle('hidden', !willExpand);
  card.classList.toggle('expanded', willExpand);
  button.setAttribute('aria-expanded', willExpand ? 'true' : 'false');
  if(willExpand) expandedMatchIds.add(matchId); else expandedMatchIds.delete(matchId);
}

function realMatchNumber(match){
  const index = state.matches.filter(m => !m.isBye && !m.inactive).findIndex(m => m.id === match?.id);
  return index >= 0 ? index + 1 : null;
}

function formatMatchNumberLabel(value){
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? `第 ${number} 場` : '';
}

function renderMatches(){
  const matchList = document.getElementById('matchList');
  updateMatchSearchVisibility();

  // Bye "matches" are an automatic advance, not a real match played between
  // two people — they don't belong in 對戰紀錄 at all (no one actually
  // played), so they're excluded here entirely and don't consume a match
  // number either (numbering stays consecutive across only real matches).
  const realMatches = state.matches.filter(m => !m.isBye && !m.inactive);

  if(realMatches.length === 0){
    matchList.innerHTML = currentRole === 'viewer'
      ? `<div class="referee-empty">正在等待裁判建立賽事中...</div>`
      : `<div class="referee-empty">尚未產生對戰紀錄，請先前往「賽事設定」開始比賽。</div>`;
    return;
  }

  const visibleMatches = realMatches.filter(m =>
    matchStatusFilter === 'all' ||
    (matchStatusFilter === 'completed' ? m.status === 'completed' : m.status !== 'completed')
  );
  document.querySelectorAll('.match-filter-btn').forEach(btn => {
    const active = btn.dataset.filter === matchStatusFilter;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  if(visibleMatches.length === 0){
    matchList.innerHTML = `<div class="referee-empty">目前沒有${matchStatusFilter === 'completed' ? '已完成' : '未完成'}的對戰。</div>`;
    return;
  }

  const html = visibleMatches.map(m => {
    const pa = nameOf(m.playerA), pb = nameOf(m.playerB);
    const completed = m.status === 'completed';
    const isTeamMatch = state.tournament.format === 'team3v3' && !!m.teamBattle;
    const expanded = !completed || expandedMatchIds.has(m.id);
    const matchNoLabel = formatMatchNumberLabel(realMatchNumber(m));
    const chip = (l) => {
      const f = FINISH[l.finish];
      const hex = resolveColor(f.color);
      return `<span class="log-chip" style="background:${hex}22;color:${hex};border:1px solid ${hex}55;">${f.icon} ${f.label} +${f.points}</span>`;
    };
    const logAHtml = m.log.filter(l=>l.side==='A').map(chip).join('');
    const logBHtml = m.log.filter(l=>l.side==='B').map(chip).join('');
    const playerName = (id, name) => completed
      ? `<span class="mr-name ${m.winner === id ? 'match-winner' : 'match-loser'}" data-player-id="${escapeHtml(id || '')}">${escapeHtml(name)}${m.winner === id ? '<span class="match-winner-label">勝利</span>' : ''}</span>`
      : `<span class="mr-name" data-player-id="${escapeHtml(id || '')}">${escapeHtml(name)}</span>`;
    const scoreHtml = completed && !m.quickWin && !m.forfeited
      ? `<span class="mr-score">${m.pointsA} : ${m.pointsB}</span>`
      : completed && m.forfeited ? `<span class="mr-score">棄權判負</span>` : '';

    return `
      <div class="match ${completed?'completed':''} ${expanded?'expanded':''}" data-match-id="${escapeHtml(m.id)}">
        ${completed ? `<div class="match-summary-toggle" role="button" tabindex="0" onclick="toggleMatchDetails('${m.id}',this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleMatchDetails('${m.id}',this)}" aria-expanded="${expanded}">` : ''}
          <div class="match-header">
            <span>${matchNoLabel}</span>
            <span><span class="status-pill ${completed?'done':'pending'}">${completed?'已完成':'尚未開始'}</span>${completed ? `<span class="match-toggle-icon">${icon('chevron-down',14)}</span>` : ''}</span>
          </div>
          <div class="match-result">${isTeamMatch ? teamRecordSummaryHtml(m,pa,pb) : `<div class="mr-versus">${playerName(m.playerA,pa)}<span class="mr-vs">VS</span>${playerName(m.playerB,pb)}${scoreHtml}</div>`}</div>
        ${completed ? '</div>' : ''}
        <div class="match-collapsible ${expanded ? '' : 'hidden'}">
          ${isTeamMatch ? teamBattleHistoryHtml(m) : (logAHtml || logBHtml) ? `
          <div class="match-log">
            <div class="match-log-side"><div class="match-log-name" data-player-id="${escapeHtml(m.playerA || '')}">${escapeHtml(pa)}</div>${logAHtml}</div>
            <div class="match-log-side"><div class="match-log-name" data-player-id="${escapeHtml(m.playerB || '')}">${escapeHtml(pb)}</div>${logBHtml}</div>
          </div>` : ''}
          <div class="match-actions">
            <button class="btn btn-primary goto-referee-btn" onclick="goToReferee('${m.id}')">${completed ? '查看 / 修改' : '前往裁判台'}</button>
            ${completed ? `<details class="match-more referee-only-btn"><summary class="btn btn-ghost">更多 ⋯</summary><div class="match-more-menu"><p class="match-more-description">重開會清除此場紀錄，以及受影響的後續賽果。</p><button type="button" onclick="this.closest('details').removeAttribute('open');resetMatch('${m.id}')">重新這場</button></div></details>` : ''}
          </div>
        </div>
        </div>`;
  }).join('');

  matchList.innerHTML = html;
}

function jumpToNextPendingMatch(){
  if(matchStatusFilter === 'completed') matchStatusFilter = 'pending';
  if(matchesDirty || matchStatusFilter === 'pending'){ renderMatches(); matchesDirty = false; }
  const target = document.querySelector('#matchList .match:not(.completed)');
  if(!target){ showToast('目前沒有尚未開始的對戰'); return; }
  target.scrollIntoView({ behavior:'smooth', block:'center' });
  target.classList.remove('match-highlight');
  void target.offsetWidth; // restart animation if already used
  target.classList.add('match-highlight');
  setTimeout(()=>target.classList.remove('match-highlight'), 1600);
}

function goToReferee(matchId){
  if(refereePanels.length === 0) refereePanels.push({ id: genPanelId(), matchId:null, label:'' });
  refereePanels[0].matchId = matchId;
  refereePanelDisplayPriority.add(refereePanels[0].id);
  refereeNextMatchChoices.delete(refereePanels[0].id);
  savePanels();
  switchTab('referee');
}

/* =========================================================
   RENDER: REFEREE TAB (multiple concurrent panels/tables)
========================================================= */
let refereePanels = [];
let focusedPanelId = null;
// A switch is a temporary local preview preference. It is intentionally not
// saved with refereePanels, so one table cannot reserve a match for the others.
const refereeNextMatchChoices = new Map();
// Keep a just-selected match visible on the table that pressed Next, without
// reserving it from the shared queue before scoring begins.
const refereePanelDisplayPriority = new Set();
const PANELS_KEY = 'beyblade-x-referee-panels-v1';
const REFEREE_VIEW_MODE_KEY = 'beyblade-x-referee-view-mode-v1';
let refereeViewMode = 'classic';
let bracketCourtPromptShown = false;
let bracketCourtCountClearPending = false; // new tournament/reset on this device: tell the cloud to clear the old count

function loadRefereeViewMode(){
  let savedMode = null;
  try{ savedMode = sessionStorage.getItem(REFEREE_VIEW_MODE_KEY); }catch(e){}
  if(savedMode === 'bracket' || savedMode === 'classic'){
    refereeViewMode = savedMode;
  }else{
    // Single-elimination referee desks open directly into the live bracket by default.
    refereeViewMode = currentRole !== 'viewer' && supportsRefereeBracketMode() ? 'bracket' : 'classic';
    if(refereeViewMode === 'bracket'){
      try{ sessionStorage.setItem(REFEREE_VIEW_MODE_KEY, 'bracket'); }catch(e){}
    }
  }
}

// First visit to the referee tab: ask how many referee tables are available.
// Fires on tab entry (not page load), only while the count is still unset, and
// at most once per page session so a cancelled dialog does not nag on every tab switch.
function maybePromptBracketCourtCount(){
  if(bracketCourtPromptShown) return;
  if(!canUseRefereeBracketMode() || !supportsRefereeBracketMode()) return;
  if(refereeViewMode !== 'bracket' || state.matches.length === 0) return;
  const count = Number(state.tournament.bracketCourtCount);
  if(Number.isInteger(count) && count >= 1) return;
  if(document.getElementById('customModal')?.classList.contains('show')) return;
  bracketCourtPromptShown = true;
  openBracketCourtCountDialog(true);
}

function canUseRefereeBracketMode(){
  // Keep the mode switch visible on every referee desk; explain format
  // limitations when the referee tries to enter instead of hiding the entry.
  return currentRole !== 'viewer';
}

function supportsRefereeBracketMode(){
  return state.tournament.format === 'knockout' || state.tournament.format === 'double_elimination';
}

function isRefereeBracketInteractive(){
  const scroll = document.getElementById('bracketScroll');
  const viewport = document.getElementById('refereeBracketViewport');
  return canUseRefereeBracketMode() && supportsRefereeBracketMode() && refereeViewMode === 'bracket' &&
    isTabVisible('referee') && !!(scroll && viewport && viewport.contains(scroll));
}

function moveBracketTreeToReferee(){
  const scroll = document.getElementById('bracketScroll');
  const viewport = document.getElementById('refereeBracketViewport');
  if(scroll && viewport && !viewport.contains(scroll)) viewport.appendChild(scroll);
}

function restoreBracketTreeHome(){
  const scroll = document.getElementById('bracketScroll');
  const home = document.getElementById('bracketHomeAnchor');
  const viewport = document.getElementById('refereeBracketViewport');
  if(scroll && home && viewport && viewport.contains(scroll)){
    home.after(scroll);
    renderBracket();
  }
}

function syncRefereeViewModeControls(){
  const available = canUseRefereeBracketMode();
  const supported = supportsRefereeBracketMode();
  const configured = Number.isInteger(Number(state.tournament.bracketCourtCount)) &&
    Number(state.tournament.bracketCourtCount) >= 1;
  if((!available || !supported) && refereeViewMode === 'bracket') refereeViewMode = 'classic';
  const bracketMode = available && supported && refereeViewMode === 'bracket';
  document.getElementById('refereeBracketToggleWrap')?.classList.toggle('hidden', !available);
  const bracketCheckbox = document.getElementById('refereeBracketModeCheckbox');
  if(bracketCheckbox) bracketCheckbox.checked = bracketMode;
  const toggleState = document.getElementById('refereeBracketToggleState');
  if(toggleState) toggleState.textContent = bracketMode ? '已開啟' : '開啟';
  if(bracketCheckbox) bracketCheckbox.setAttribute('aria-label', bracketMode ? '切回計分模式' : '開啟樹狀圖模式');
  const toggleNote = document.getElementById('refereeBracketModeNote');
  if(toggleNote) toggleNote.textContent = supported
    ? '點場次標題即可標記為「進行中」，同時開賽的場數以裁判台數為限。完賽後，點勝者姓名確認晉級。有空台時，系統會自動將可開賽的場次標記為「即將上場」。'
    : '樹狀圖裁判模式適用單淘汰與雙敗淘汰賽';
  document.getElementById('refereeClassicView')?.classList.toggle('hidden', bracketMode);
  document.getElementById('refereeClassicControls')?.classList.toggle('hidden', bracketMode);
  document.getElementById('refereeBracketView')?.classList.toggle('hidden', !bracketMode);
  const subtitle = document.getElementById('refereeCardSub');
  if(subtitle) subtitle.textContent = bracketMode
    ? '點場次標題即可標記為「進行中」，同時開賽的場數以裁判台數為限。完賽後，點勝者姓名確認晉級。有空台時，系統會自動將可開賽的場次標記為「即將上場」。'
    : '多桌並行時可各自新增裁判面板，分頭計分・資料會即時同步。';
  return bracketMode;
}

function updateRefereeBracketSummary(){
  const count = Number(state.tournament.bracketCourtCount) || 1;
  const live = state.matches.filter(isMatchLive).length;
  const next = new Set(Object.values(computeUpcomingMatchPreviews()).map(match => match.id)).size;
  const summary = document.getElementById('refereeBracketSummary');
  const button = document.getElementById('bracketCourtCountBtn');
  if(summary) summary.innerHTML = `<span>${count} 台</span><span class="status-live">進行中 ${live} 場</span><span class="status-next">即將上場 ${next} 場</span>`;
  if(button) button.textContent = `裁判台 ${count} 台・調整`;
}

function switchRefereeViewMode(mode){
  const targetMode = mode === 'bracket' ? 'bracket' : 'classic';
  const checkbox = document.getElementById('refereeBracketModeCheckbox');
  if(!canUseRefereeBracketMode()){
    if(checkbox) checkbox.checked = false;
    return;
  }
  if(targetMode === refereeViewMode){
    if(checkbox) checkbox.checked = targetMode === 'bracket';
    return;
  }
  if(targetMode === 'bracket' && !supportsRefereeBracketMode()){
    if(checkbox) checkbox.checked = false;
    showAlert('樹狀圖模式支援單淘汰與雙敗淘汰賽。請先選擇賽制並建立對戰表。');
    return;
  }
  // Restore the switch until the referee confirms the mode change.
  if(checkbox) checkbox.checked = refereeViewMode === 'bracket';
  const entering = targetMode === 'bracket';
  const courtsConfigured = Number.isInteger(Number(state.tournament.bracketCourtCount)) &&
    Number(state.tournament.bracketCourtCount) >= 1;
  if(entering && !courtsConfigured){
    // One dialog instead of two: choosing the table count is the confirmation.
    openBracketCourtCountDialog(true, { switching:true });
    return;
  }
  showModal(entering
    ? '確定切換到樹狀圖模式？可直接設定場次狀態並點選選手判定勝者。'
    : '確定切回計分模式？目前計分面板會重新顯示。', [
      {label:'取消',className:'btn-dark'},
      {label:'確認切換',className:'btn-primary',action:()=>{
        const activate = () => {
          refereeViewMode = targetMode;
          try{ sessionStorage.setItem(REFEREE_VIEW_MODE_KEY, refereeViewMode); }catch(e){}
          renderReferee();
        };
        activate();
      }}
    ], '確認切換裁判台模式');
}

function openBracketCourtCountDialog(activateAfterSave = false, { switching = false } = {}){
  if(!canUseRefereeBracketMode()) return;
  const current = Math.min(12, Math.max(1, Number(state.tournament.bracketCourtCount) || refereePanels.length || 1));
  const intro = switching ? '切換到樹狀圖模式前，請先選擇目前可用的裁判台數。' : '請選擇目前可用的裁判台數。';
  showModal(intro + '台數決定自動顯示多少場即將上場；所有裁判台仍共用同一個最前面場次。', [
    {label:'取消',className:'btn-dark'},
    {label: switching ? '套用並切換' : '套用台數',className:'btn-primary',action:()=>{
      const count = Number(document.getElementById('bracketCourtCountInput')?.value);
      if(!Number.isInteger(count) || count < 1 || count > 12){ showToast('請選擇 1～12 台'); return; }
      const liveCount = state.matches.filter(isMatchLive).length;
      if(count < liveCount){ showAlert(`目前已有 ${liveCount} 場進行中，台數不能少於進行中場次。`); return; }
      state.tournament.bracketCourtCount = count;
      if(activateAfterSave){
        refereeViewMode = 'bracket';
        try{ sessionStorage.setItem(REFEREE_VIEW_MODE_KEY, 'bracket'); }catch(e){}
      }
      saveState(true);
      renderAll();
    }}
  ], '樹狀圖模式・裁判台數');
  const choices = Array.from({length:12}, (_,index) => index+1)
    .map(number => `<option value="${number}" ${number===current?'selected':''}>${number} 台</option>`).join('');
  document.getElementById('customModalMessage').innerHTML +=
    `<label class="field-label" for="bracketCourtCountInput" style="display:block;margin-top:14px;">目前台數</label><select class="text-input" id="bracketCourtCountInput" style="width:100%;min-height:48px;">${choices}</select>`;
}

function openBracketMatchMenu(matchId){
  if(!isRefereeBracketInteractive()) return;
  const match = state.matches.find(item => item.id === matchId);
  if(!match || match.isBye || match.inactive) return;
  const label = formatMatchNumberLabel(realMatchNumber(match)) || (match.thirdPlace ? '季軍戰' : '決賽');
  if(match.status === 'completed'){
    showModal(`${nameOf(match.winner)}已獲勝。點選另一位選手的名字可更正勝者；更正會清除受影響的後續結果。`, [
      {label:'重新這場',className:'btn-danger',action:()=>resetMatch(match.id)},
      {label:'返回',className:'btn-dark'}
    ], `${label}・已完成`);
    return;
  }
  const buttons = [
    {label:'標記進行中',className:'btn-primary',action:()=>setBracketMatchStage(match.id,'live')}
  ];
  if(match.bracketStage) buttons.push({label:'清除手動標記',className:'btn-dark',action:()=>setBracketMatchStage(match.id,null)});
  buttons.push({label:'返回',className:'btn-dark'});
  showModal(`${nameOf(match.playerA)} vs ${nameOf(match.playerB)}。點選對戰卡中的選手姓名，可直接確認勝者。`, buttons, `${label}・場次狀態`);
}

function setBracketMatchStage(matchId, stage){
  if(!isRefereeBracketInteractive() || stage === 'next') return;
  const match = state.matches.find(item => item.id === matchId);
  // A completed match is locked: clicking its card must never reopen status controls.
  if(match?.status === 'completed') return;
  if(!isReadyPendingBracketMatch(match)){
    showToast('兩位選手確定後才能設定這場狀態');
    return;
  }
  if(stage === 'live' && match.bracketStage === 'live'){
    if(hasMatchScoringActivity(match)){
      showToast('這場已有比分，維持進行中');
      return;
    }
    delete match.bracketStage;
    markDirty(match.id);
    saveState(true);
    renderAll();
    showToast('已取消進行中，返回待賽佇列');
    return;
  }
  const otherLive = state.matches.filter(item => item.id !== matchId && isMatchLive(item));
  if(stage && matchConflictsWithPlayers(match, new Set(otherLive.flatMap(getMatchParticipantIds)))){
    showToast('選手正在另一場進行中的對戰');
    return;
  }
  if(stage === 'live' && otherLive.length >= Number(state.tournament.bracketCourtCount || 1)){
    showToast('進行中場次已達台數上限；可先調整裁判台數');
    return;
  }
  if((match.bracketStage || null) === stage){
    showToast('這場已是目前選擇的狀態');
    return;
  }
  if(stage) match.bracketStage = stage;
  else delete match.bracketStage;
  markDirty(match.id);
  saveState(true);
  renderAll();
  showToast(stage === 'live' ? '已標記進行中' : '已清除手動標記');
}

function selectBracketWinner(matchId, side){
  if(!isRefereeBracketInteractive() || (side !== 'A' && side !== 'B')) return;
  const match = state.matches.find(item => item.id === matchId);
  if(!match || !match.playerA || !match.playerB || match.isBye || match.inactive ||
    isWithdrawn(match.playerA) || isWithdrawn(match.playerB)) return;
  const playerA = match.playerA, playerB = match.playerB;
  const winner = side === 'A' ? playerA : playerB;
  if(match.status === 'completed' && match.winner === winner){ showToast('這位選手已是此場勝者'); return; }
  const correction = match.status === 'completed';
  const hasScore = hasMatchScoringActivity(match);
  const notice = correction
    ? '更正後，受影響的後續比賽結果會清除。'
    : hasScore ? '這場已有比分，直接判勝會清除原有比分與得分紀錄。' : '';
  showModal(`確定判定「${nameOf(winner)}」獲勝並晉級？${notice}`, [
    {label:'取消',className:'btn-dark'},
    {label:correction?'更正勝者':'確認勝者',className:correction?'btn-danger':'btn-primary',action:()=>{
      const current = state.matches.find(item => item.id === matchId);
      if(!current || current.playerA !== playerA || current.playerB !== playerB){
        showToast('對戰選手已變動，請重新選擇勝者');
        return;
      }
      if(current.status === 'completed' && !correction){ showToast('這場結果已更新，請重新確認'); return; }
      if(current.status === 'completed' && current.winner === winner){ showToast('這位選手已是此場勝者'); return; }
      if(!hasScore && !correction && hasMatchScoringActivity(current)){
        showToast('比分已更新，請重新確認勝者');
        return;
      }
      if(current.status === 'completed') performResetMatch(current);
      current.log = [];
      current.pointsA = 0;
      current.pointsB = 0;
      current.quickWin = true;
      current.status = 'completed';
      current.winner = winner;
      current.completedAt = Date.now();
      delete current.bracketStage;
      markDirty(current.id);
      propagateKnockoutWinner(current);
      resolveByeCascade(state.matches);
      saveState(true);
      renderAll();
      mobileHapticFeedback('win');
      showToast(`${nameOf(winner)} 獲勝，已更新晉級對戰`);
    }}
  ], correction ? '更正賽果' : '確認勝者');
}

// 主控模式：純本機顯示偏好（不隨賽事資料同步，每台裝置各自記住），
// 讓裁判台切換成縮小版卡片，方便一次盯著多桌比分操作。
let masterModeOn = false;
const MASTER_MODE_KEY = 'beyblade-x-referee-master-mode-v1';
function loadMasterMode(){
  try{ masterModeOn = localStorage.getItem(MASTER_MODE_KEY) === '1'; }catch(e){ masterModeOn = false; }
  const cb = document.getElementById('masterModeCheckbox');
  if(cb) cb.checked = masterModeOn;
}
function toggleMasterMode(on){
  masterModeOn = !!on;
  try{ localStorage.setItem(MASTER_MODE_KEY, masterModeOn ? '1' : '0'); }catch(e){}
  renderReferee();
}

function loadRefereePanels(){
  try{
    const raw = sessionStorage.getItem(PANELS_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(Array.isArray(parsed) && parsed.length) {
        refereePanels = parsed;
        refereePanels.forEach(panel => {
          delete panel.nextMatchId;
          delete panel.matchClaimed;
        });
        refereeNextMatchChoices.clear();
        refereePanelDisplayPriority.clear();
        return;
      }
    }
  }catch(e){}
  refereeNextMatchChoices.clear();
  refereePanelDisplayPriority.clear();
  refereePanels = [{ id: genPanelId(), matchId:null, label:'' }];
}
function savePanels({sync=true}={}){
  // Drop legacy per-table next-match pins and pre-start claims. A match enters
  // the shared active set only after scoring has actually begun.
  refereePanels.forEach(panel => { delete panel.nextMatchId; delete panel.matchClaimed; });
  try{ sessionStorage.setItem(PANELS_KEY, JSON.stringify(refereePanels)); }catch(e){}
  if(sync)void pushPanelsToCloud();
}

// Pushes which match each referee table currently has loaded, so the
// bracket's "進行中 / 即將上場" badges agree across every connected device
// (see the matching comment in onCloudMeta). Skipped while we're in the
// middle of applying an incoming snapshot (avoids an immediate echo write),
// and viewers never own this data so they never push it.
async function pushPanelsToCloud(){
  if(applyingRemote) return;
  if(currentRole === 'viewer') return;
  if(!(window.cloudSync && window.cloudSync.ready && currentEventCode)) return;
  try{
    await window.cloudSync.pushMeta({ refereePanels });
  }catch(e){
    console.error('裁判面板同步失敗（本機資料仍完整保存）', e);
  }
}
function genPanelId(){
  return 'p' + Math.random().toString(36).slice(2,8);
}

function addRefereePanel(){
  if(refereePanels.length >= 4){
    showAlert('最多同時開啟 4 個裁判台面板。如需更多桌次同時進行，建議讓其他裁判用自己的手機/平板開啟同一個賽事代碼，會即時同步。');
    return;
  }
  refereePanels.push({ id: genPanelId(), matchId:null, label:'' });
  savePanels();
  renderReferee();
}

function removeRefereePanel(panelId){
  if(refereePanels.length <= 1) return;
  refereePanels = refereePanels.filter(p => p.id !== panelId);
  refereeNextMatchChoices.delete(panelId);
  if(focusedPanelId === panelId) focusedPanelId = null;
  savePanels();
  renderReferee();
}

function toggleFocusPanel(panelId){
  focusedPanelId = (focusedPanelId === panelId) ? null : panelId;
  renderReferee();
}

function renamePanel(panelId, label){
  const panel = refereePanels.find(p => p.id === panelId);
  if(panel) panel.label = label.trim();
  savePanels();
}

function pickRefereeMatch(panelId, matchId){
  const panel = refereePanels.find(p => p.id === panelId);
  if(panel){
    panel.matchId = matchId;
    refereePanelDisplayPriority.add(panelId);
    delete panel.nextMatchId;
    refereeNextMatchChoices.delete(panelId);
  }
  savePanels();
  renderReferee();
}

function autoAssignPanel(panel, excludeIds){
  const cur = panel.matchId ? state.matches.find(m => m.id === panel.matchId) : null;
  const excluded = new Set(excludeIds || []);
  if(cur && !cur.isBye && (cur.status === 'completed' || isRefereePanelMatchClaimed(panel, cur))) return;
  if(cur && isReadyPendingBracketMatch(cur) && !excluded.has(cur.id)) return;
  const nextUp = getAvailableNextMatchesForPanel(panel.id).find(match => !excluded.has(match.id));
  const previousMatchId = panel.matchId;
  panel.matchId = nextUp ? nextUp.id : null;
  if(previousMatchId !== panel.matchId) refereeNextMatchChoices.delete(panel.id);
  delete panel.nextMatchId;
}

function reconcileRefereePanelPreviews(){
  const assignedPreviews = new Set();
  refereePanels.forEach(panel => {
    const match = state.matches.find(item => item.id === panel.matchId);
    if(isRefereePanelMatchClaimed(panel, match) && isReadyPendingBracketMatch(match)){
      assignedPreviews.add(match.id);
    }
  });
  const panelAllocationOrder = [...refereePanels].sort((a,b) =>
    Number(refereePanelDisplayPriority.has(b.id)) - Number(refereePanelDisplayPriority.has(a.id)));
  panelAllocationOrder.forEach(panel => {
    autoAssignPanel(panel, assignedPreviews);
    const match = state.matches.find(item => item.id === panel.matchId);
    if(match && isReadyPendingBracketMatch(match) && !isRefereePanelMatchClaimed(panel, match)){
      assignedPreviews.add(match.id);
    }
  });
  refereePanelDisplayPriority.clear();
}

function renderReferee(){
  const wrap = document.getElementById('refereePanels');
  if(!wrap) return;

  if(syncRefereeViewModeControls()){
    moveBracketTreeToReferee();
    const hasMatches = state.matches.length > 0;
    const bracketHeading = document.querySelector('#refereeBracketView .referee-bracket-head .card-title');
    if(bracketHeading) bracketHeading.textContent = hasMatches ? '場次控制' : '建立賽程後即可操作';
    document.getElementById('refereeBracketSummary')?.classList.toggle('hidden', !hasMatches);
    document.getElementById('refereeBracketControls')?.classList.toggle('hidden', !hasMatches);
    document.getElementById('refereeBracketEmpty')?.classList.toggle('hidden', hasMatches);
    document.getElementById('refereeBracketViewport')?.classList.toggle('hidden', !hasMatches);
    renderBracket();
    applyBracketZoom();
    updateRefereeBracketSummary();
    return;
  }
  restoreBracketTreeHome();

  wrap.classList.toggle('master-mode', masterModeOn);
  const refereeSection = document.getElementById('tab-referee');
  if(refereeSection) refereeSection.classList.toggle('master-mode', masterModeOn);
  const masterCb = document.getElementById('masterModeCheckbox');
  if(masterCb) masterCb.checked = masterModeOn;

  if(state.matches.length === 0){
    wrap.innerHTML = currentRole === 'viewer'
      ? `<div class="card"><div class="referee-empty"><div class="big">尚未產生賽事</div>正在等待裁判建立賽事中...</div></div>`
      : `<div class="card"><div class="referee-empty"><div class="big">尚未產生賽事</div>請先前往「賽事設定」建立賽事。</div></div>`;
    return;
  }
  if(refereePanels.length === 0) refereePanels.push({ id: genPanelId(), matchId:null, label:'' });

  // Unstarted assignments are preview cards only; keep them unique without
  // allowing one table's preview to reserve a match from another table.
  reconcileRefereePanelPreviews();
  // Preview allocation is local. Deliberate panel edits are saved separately.
  savePanels({sync:false});

  // Match scoring activity drives the bracket's "進行中 / 即將上場" badges,
  // while panel previews remain non-binding; refresh the bracket now
  // if the standings/bracket tab happens to be visible, otherwise mark it
  // dirty so it catches up next time the user switches there.
  if(isTabVisible('standings')){ renderStandings(); standingsDirty = false; }
  else standingsDirty = true;

  if(focusedPanelId && !refereePanels.some(p => p.id === focusedPanelId)) focusedPanelId = null;

  const banner = document.getElementById('refereeFocusBanner');
  if(banner){
    if(focusedPanelId && refereePanels.length > 1){
      const idx = refereePanels.findIndex(p => p.id === focusedPanelId);
      const focusedPanel = refereePanels[idx];
      const label = focusedPanel.label || `裁判 ${idx+1}`;
      banner.innerHTML = `
        <div>目前僅顯示 <b>${escapeHtml(label)}</b> 面板，其他 ${refereePanels.length-1} 個面板已隱藏，避免誤按。</div>
        <button class="btn btn-dark btn-sm" onclick="toggleFocusPanel('${focusedPanel.id}')">顯示所有面板</button>`;
    } else {
      banner.innerHTML = '';
    }
  }

  const panelsToShow = (focusedPanelId && refereePanels.length > 1)
    ? refereePanels.filter(p => p.id === focusedPanelId)
    : refereePanels;

  wrap.innerHTML = panelsToShow.map((panel) => {
    const i = refereePanels.indexOf(panel);
    return `
    <div class="card referee-panel">
      <div class="ref-panel-head">
        <input class="text-input ref-panel-label" value="${escapeAttr(panel.label || '')}"
               placeholder="裁判 ${i+1}（選填）" onchange="renamePanel('${panel.id}', this.value)">
        ${refereePanels.length > 1 ? `<button class="icon-btn focus-btn ${focusedPanelId===panel.id ? 'active':''}" title="${focusedPanelId===panel.id ? '顯示所有面板' : '隱藏其他面板，避免誤按'}" aria-label="${focusedPanelId===panel.id ? '顯示所有面板' : '隱藏其他面板，避免誤按'}" onclick="toggleFocusPanel('${panel.id}')">${focusedPanelId===panel.id ? icon('layout-grid',14) : icon('eye',14)}</button>` : ''}
        ${refereePanels.length > 1 ? `<button class="icon-btn" title="移除此面板" aria-label="移除此面板" onclick="removeRefereePanel('${panel.id}')">${icon('x',14)}</button>` : ''}
      </div>
      <div class="ref-picker">
        <div class="field-label">選擇對戰</div>
        <div class="ref-picker-select-wrap">
          <select class="text-input" id="refPicker-${panel.id}" onchange="pickRefereeMatch('${panel.id}', this.value)"></select>
          <span class="ref-picker-chevron" aria-hidden="true">${icon('chevron-down',16)}</span>
        </div>
      </div>
      <div id="refBody-${panel.id}"></div>
    </div>
  `;
  }).join('');

  const rounds = Math.max(...state.matches.map(m => m.round), 1);
  const isKnockoutFmt = isElimination(state.tournament.format);
  panelsToShow.forEach(panel => {
    const picker = document.getElementById(`refPicker-${panel.id}`);
    let optionsHtml = '';
    for(let r=1; r<=rounds; r++){
      const msAll = state.matches.filter(m => m.round === r && !m.isBye && !m.inactive);
      if(msAll.length === 0) continue;
      const bronzeMs = msAll.filter(m => m.thirdPlace);
      const normalMs = msAll.filter(m => !m.thirdPlace);
      const roundLabel = msAll[0].bracket ? doubleRoundLabel(msAll[0]) : isKnockoutFmt ? bracketRoundLabel(r, rounds) : `第 ${r} 輪`;

      if(bronzeMs.length){
        optionsHtml += `<optgroup label="季軍戰">`;
        bronzeMs.forEach(m => {
          const tag = m.status === 'completed' ? '✓ ' : '';
          optionsHtml += `<option value="${m.id}">${tag}${escapeHtml(nameOf(m.playerA))} vs ${escapeHtml(nameOf(m.playerB))}</option>`;
        });
        optionsHtml += `</optgroup>`;
      }
      if(normalMs.length){
        optionsHtml += `<optgroup label="${roundLabel}">`;
        normalMs.forEach(m => {
          const tag = m.status === 'completed' ? '✓ ' : '';
          optionsHtml += `<option value="${m.id}">${tag}${escapeHtml(nameOf(m.playerA))} vs ${escapeHtml(nameOf(m.playerB))}</option>`;
        });
        optionsHtml += `</optgroup>`;
      }
    }
    picker.innerHTML = optionsHtml;
    picker.value = panel.matchId;

    const match = state.matches.find(m => m.id === panel.matchId);
    renderRefereeMatch(match, panel.id);
  });
  // Keep the viewer header's shared upcoming queue aligned with bracket badges
  // whenever active matches or table count changes.
  renderPlayerNextMatchCard();
}

function nextPlayableMatch(excludeIds){
  const ex = new Set(excludeIds || []);
  return state.matches.find(m => isReadyPendingBracketMatch(m) && !ex.has(m.id));
}

function getMatchParticipantIds(match){
  return match ? [match.playerA, match.playerB].filter(id => id && id !== 'BYE') : [];
}

function isReadyPendingBracketMatch(match){
  return !!(match && match.status === 'pending' && match.playerA && match.playerB &&
    !match.isBye && !match.inactive);
}

function matchConflictsWithPlayers(match, reservedPlayerIds){
  return getMatchParticipantIds(match).some(id => reservedPlayerIds.has(id));
}

function hasMatchScoringActivity(match){
  return !!(match && ((Array.isArray(match.log) && match.log.length > 0) ||
    Number(match.pointsA || 0) > 0 || Number(match.pointsB || 0) > 0 ||
    (match.teamBattle && match.teamBattle.started)));
}

function isMatchLive(match){
  return isReadyPendingBracketMatch(match) &&
    (hasMatchScoringActivity(match) ||
      (isElimination(state.tournament.format) && match.bracketStage === 'live'));
}

function isRefereePanelMatchClaimed(panel, match){
  const current = match || (panel && state.matches.find(item => item.id === panel.matchId));
  return !!(panel && current && panel.matchId === current.id && hasMatchScoringActivity(current));
}

// A selected panel preview never holds a match out of the shared queue.
// A deliberate "進行中" mark in bracket mode does reserve its participants.
function getNextMatchReservationContext(){
  const activeMatches = state.matches.filter(isMatchLive);
  const reservedMatchIds = new Set(activeMatches.map(match => match.id));
  const reservedPlayerIds = new Set(activeMatches.flatMap(getMatchParticipantIds));
  return { reservedMatchIds, reservedPlayerIds };
}

// Non-binding preview of the shared queue. Every table and bracket marker
// reads the same earliest playable match; table count never advances the queue.
function computeUpcomingMatchPreviews(){
  const sharedNext = getSharedNextMatch();
  const configuredCourts = Number(state.tournament.bracketCourtCount);
  if(!Number.isInteger(configuredCourts) || configuredCourts < 1){
    if(!sharedNext) return {};
    // Before bracket mode is configured, every referee still reads the same
    // earliest match; table order does not assign #4, #5, #6 to specific desks.
    const tableCount = Math.max(refereePanels.length, 1);
    return Object.fromEntries(Array.from({length:tableCount}, (_,index) => [`upcoming-${index}`, sharedNext]));
  }

  const { reservedPlayerIds } = getNextMatchReservationContext();
  const waitingPlayers = new Set(reservedPlayerIds);
  const automatic = [];
  // Show one upcoming match per configured court, in addition to any live matches.
  // Live matches and their players are already excluded from the candidate queue.
  const availableCourts = configuredCourts;
  for(const match of getAvailableNextMatchesForPanel(null)){
    if(automatic.length >= availableCourts) break;
    if(matchConflictsWithPlayers(match, waitingPlayers)) continue;
    automatic.push(match);
    getMatchParticipantIds(match).forEach(id => waitingPlayers.add(id));
  }
  const ids = new Set(automatic.map(match => match.id));
  return Object.fromEntries(state.matches.filter(match => ids.has(match.id))
    .map((match,index) => [`upcoming-${index}`, match]));
}

function getAvailableNextMatchesForPanel(panelId){
  // Every table reads the same queue. Only active matches or players block a
  // candidate; another table's uncommitted switch preview does not.
  const { reservedMatchIds, reservedPlayerIds } = getNextMatchReservationContext();
  return state.matches.filter(match => isReadyPendingBracketMatch(match) &&
    !reservedMatchIds.has(match.id) &&
    !matchConflictsWithPlayers(match, reservedPlayerIds));
}

function getSharedNextMatch(){
  const { reservedMatchIds, reservedPlayerIds } = getNextMatchReservationContext();
  return state.matches.find(match => isReadyPendingBracketMatch(match) &&
    !reservedMatchIds.has(match.id) &&
    !matchConflictsWithPlayers(match, reservedPlayerIds)) || null;
}

function computeNextMatchForPanel(panelId){
  const panel = refereePanels.find(item => item.id === panelId);
  if(!panel) return null;
  const candidates = getAvailableNextMatchesForPanel(panelId);
  const choiceId = refereeNextMatchChoices.get(panelId);
  const savedChoice = choiceId && candidates.find(match => match.id === choiceId);
  if(choiceId && !savedChoice) refereeNextMatchChoices.delete(panelId);
  // Selection happens at button press: the earliest available match wins,
  // independent of referee panel order. A local switch choice is temporary.
  return savedChoice || candidates[0] || null;
}

function nextMatchSwitchLabel(panelId, selectedMatch){
  return selectedMatch && refereeNextMatchChoices.get(panelId) === selectedMatch.id
    ? '跳過此場'
    : '切換場次';
}

const nextMatchPreviewFlashPanels = new Set();
const nextMatchSwitchingPanels = new Set();

function canSwitchNextMatch(panelId){
  const candidates = getAvailableNextMatchesForPanel(panelId);
  if(candidates.length === 0) return false;
  const choiceId = refereeNextMatchChoices.get(panelId);
  const hasSavedChoice = choiceId && candidates.some(match => match.id === choiceId);
  // The first switch press selects the earliest candidate locally. A second
  // press can skip it; this preview never reserves the match from other tables.
  return !hasSavedChoice || candidates.length > 1;
}

function switchToOtherPendingMatch(panelId){
  const panel = refereePanels.find(p => p.id === panelId);
  if(!panel || nextMatchSwitchingPanels.has(panelId)) return;
  const candidates = getAvailableNextMatchesForPanel(panelId);
  if(candidates.length === 0){
    showToast('目前沒有其他可切換的未完成對戰');
    return;
  }

  // The first switch press selects the earliest available match, just like
  // "下一場". Pressing again deliberately skips it for this panel only.
  const choiceId = refereeNextMatchChoices.get(panelId);
  const savedChoice = choiceId && candidates.find(m => m.id === choiceId);
  if(choiceId && !savedChoice) refereeNextMatchChoices.delete(panelId);
  if(savedChoice && candidates.length < 2){
    showToast('目前沒有其他可切換的未完成對戰');
    return;
  }
  const currentIndex = savedChoice ? candidates.findIndex(m => m.id === savedChoice.id) : -1;
  const selected = savedChoice
    ? candidates[(currentIndex + 1) % candidates.length]
    : candidates[0];
  const startingMatchId = panel.matchId;
  // 先提交選擇，再播放動畫；動畫期間按「下一場」也會進入畫面剛選定的場次。
  refereeNextMatchChoices.set(panelId, selected.id);
  nextMatchSwitchingPanels.add(panelId);

  // Phase 1: visibly sweep the old preview away. Phase 2 rebuilds the panel
  // with the chosen match and plays the brighter arrival/lock-on animation.
  const body = document.getElementById(`refBody-${panelId}`);
  const preview = body && body.querySelector('.next-match-preview');
  const switchButton = body && body.querySelector('.btn-switch-match');
  const nextButton = body && body.querySelector('.btn-next-match');
  if(preview) preview.classList.add('is-refreshing-out');
  if(switchButton){
    switchButton.disabled = true;
    switchButton.classList.add('is-switching');
  }
  if(nextButton) nextButton.disabled = true;

  setTimeout(() => {
    nextMatchSwitchingPanels.delete(panelId);
    const stillOnWinner = panel.matchId === startingMatchId &&
      state.matches.find(m => m.id === startingMatchId)?.status === 'completed';
    if(stillOnWinner) nextMatchPreviewFlashPanels.add(panelId);
    renderReferee();
    nextMatchPreviewFlashPanels.delete(panelId);
  }, preview ? 260 : 0);
}

function teamOrderControls(match, side, battle){
  const team = teamById(side === 'A' ? match.playerA : match.playerB);
  const order = side === 'A' ? battle.orderA : battle.orderB;
  return `<div class="team-lineup">
    <div class="team-lineup-title">${escapeHtml(team?.name || '待定隊伍')}</div>
    <div class="team-order-list">${order.map((memberId,index) => `
      <label class="team-order-row"><span class="team-member-number">${index+1}</span>
        <select class="text-input" onchange="setTeamLineup('${match.id}','${side}',${index},this.value)">
          ${team.members.map(member => `<option value="${escapeAttr(member.id)}" ${member.id===memberId?'selected':''}>${escapeHtml(member.name)}</option>`).join('')}
        </select>
        <span class="team-select-icon" aria-hidden="true">${icon('chevron-down',16)}</span>
      </label>`).join('')}</div>
  </div>`;
}

function teamRosterStatus(team, battle, side, match){
  const activeId = side === 'A' ? battle.activeA : battle.activeB;
  const effect=teamEliminationEffects.get(match?.id);
  const order = side === 'A' ? battle.orderA : battle.orderB;
  const orderedMembers = (order && order.length ? order.map(id => team.members.find(member => member.id === id)).filter(Boolean) : team.members);
  return `<div class="team-roster-status">${orderedMembers.map(member => {
    const damage = battle.damage[member.id] || 0;
    const out = battle.eliminated.includes(member.id);
    const eliminating=effect&&effect.memberId===member.id&&effect.until>Date.now();
    return `<span class="team-member-status ${member.id===activeId?'active':''} ${out?'out':''} ${eliminating?'is-eliminating':''}" style="--exit-x:${side==='A'?'-10px':'10px'}"><span class="team-member-label">${escapeHtml(member.name)}</span>${teamHpBar(member.id,battle,true)}</span>`;
  }).join('')}</div>`;
}

function teamHpBar(memberId,battle,compact){
  const hp=Math.max(0,2-(battle.damage[memberId]||0));
  return `<span class="team-hp-bar ${compact?'compact':''}" role="img" aria-label="剩餘 ${hp} HP"><span class="team-hp-cell ${hp>=1?'':'lost'}"></span><span class="team-hp-cell ${hp>=2?'':'lost'}"></span></span>`;
}

function renderTeamRefereeMatch(match, panelId){
  const body = document.getElementById(`refBody-${panelId}`);
  if(!body) return;
  const battle = ensureTeamBattle(match);
  if(!battle){
    body.innerHTML = `<div class="referee-empty" style="padding:36px 16px;"><div class="big">尚有隊伍未決定</div>請等待前一場產生晉級隊伍。</div>`;
    return;
  }
  const teamA = teamById(match.playerA), teamB = teamById(match.playerB);
  const completed = match.status === 'completed';
  const maxRound = Math.max(...state.matches.map(item => item.round));
  const roundLabel = match.thirdPlace ? '季軍戰' : bracketRoundLabel(match.round,maxRound);
  const nextMatch = completed ? computeNextMatchForPanel(panelId) : null;
  const sharedNextMatch = completed ? getSharedNextMatch() : null;
  const activeFeedback = scoreTapFeedback.get(match.id);
  const eliminationEffect = teamEliminationEffects.get(match.id);
  const activeEliminationEffect = eliminationEffect && eliminationEffect.until > Date.now() ? eliminationEffect : null;
  const feedbackAnnouncement = activeFeedback && activeFeedback.until > Date.now()
    ? `${activeFeedback.side === 'A' ? teamA.name : teamB.name} 得分，對手扣 ${activeFeedback.points} HP${activeEliminationEffect ? `，${activeEliminationEffect.name} 淘汰` : ''}。`
    : '';
  const feedback = feedbackAnnouncement
    ? `<div class="score-tap-feedback side-${activeFeedback.side.toLowerCase()}" data-match-id="${escapeAttr(match.id)}" aria-hidden="true">對手 −${activeFeedback.points} HP</div>` : '';
  const eliminationFxHtml = activeEliminationEffect ? `<div class="team-elimination-fx side-${activeEliminationEffect.side.toLowerCase()}" style="--exit-x:${activeEliminationEffect.side==='A'?'-16px':'16px'}" aria-hidden="true"><div class="team-elimination-name">${escapeHtml(activeEliminationEffect.name)}</div><div class="team-elimination-label">淘汰</div></div>` : '';

  const aliveA = teamA.members.filter(member => !battle.eliminated.includes(member.id)).length;
  const aliveB = teamB.members.filter(member => !battle.eliminated.includes(member.id)).length;
  const eliminatedA = teamA.members.length - aliveA;
  const eliminatedB = teamB.members.length - aliveB;
  const orderNamesA = battle.orderA.map(id => teamMemberName(id)).join(' › ');
  const orderNamesB = battle.orderB.map(id => teamMemberName(id)).join(' › ');
  const matchOverview = `<div class="team-match-overview" aria-label="團體賽進度">
    <div class="team-overview-side side-a"><span class="team-overview-name">${escapeHtml(teamA.name)}</span><span class="team-alive-badge">${aliveA} 人存活</span></div>
    <div class="team-overview-score"><strong>${eliminatedB}：${eliminatedA}</strong><span>淘汰進度</span></div>
    <div class="team-overview-side side-b"><span class="team-overview-name">${escapeHtml(teamB.name)}</span><span class="team-alive-badge">${aliveB} 人存活</span></div>
  </div>`;

  const lineup = !battle.started && !completed ? `
    <details class="team-lineup-panel">
      <summary><span class="team-lineup-summary-title">出戰順序</span><span class="team-lineup-summary-note">確認順序後即可記分；第一局後自動鎖定</span><span class="team-lineup-summary-action"><span class="when-closed">調整</span><span class="when-open">收合</span></span><span class="team-lineup-summary-order"><span class="team-lineup-order-side side-a">${escapeHtml(orderNamesA)}</span><span class="team-lineup-order-vs">VS</span><span class="team-lineup-order-side side-b">${escapeHtml(orderNamesB)}</span></span></summary>
      <div class="team-lineup-panel-body"><div class="team-lineups">${teamOrderControls(match,'A',battle)}<div class="team-versus">VS</div>${teamOrderControls(match,'B',battle)}</div></div>
    </details>` : (battle.started && !completed ? `<div class="team-lineup-locked">${icon('check-circle',12)} 出戰順序已鎖定</div>` : '');
  const activeArea = completed ? `
    <div class="winner-banner"><div class="wname"><span class="winner-check">✓</span>${escapeHtml(nameOf(match.winner))} <span class="winner-word">獲勝</span></div>
      ${sharedNextMatch ? `<div class="text-muted next-match-preview"><span class="next-match-kicker">共用佇列・下一場${formatMatchNumberLabel(realMatchNumber(sharedNextMatch)) ? `・${formatMatchNumberLabel(realMatchNumber(sharedNextMatch))}` : ''}${nextMatch && nextMatch.id !== sharedNextMatch.id ? `<span class="next-match-local-choice">　｜　本台切換預覽・${formatMatchNumberLabel(realMatchNumber(nextMatch)) || ''}</span>` : ''}</span><span class="next-match-names">${escapeHtml(nameOf(sharedNextMatch.playerA))} <span class="versus-word">VS</span> ${escapeHtml(nameOf(sharedNextMatch.playerB))}</span></div>` : `<div class="text-muted">目前沒有下一場對戰了</div>`}
    </div>` : `
    <div class="team-active-grid">
      <div class="team-active-card"><div class="team-active-kicker">${escapeHtml(teamA.name)}・目前上場</div><div class="team-active-name ${activeEliminationEffect&&activeEliminationEffect.side==='A'?'is-entering':''}">${escapeHtml(teamMemberName(battle.activeA))}</div>${teamHpBar(battle.activeA,battle,false)}<div class="team-active-life">${Math.max(0,2-(battle.damage[battle.activeA]||0))} / 2 HP</div>${teamRosterStatus(teamA,battle,'A',match)}</div>
      <div class="team-versus">VS</div>
      <div class="team-active-card"><div class="team-active-kicker">${escapeHtml(teamB.name)}・目前上場</div><div class="team-active-name ${activeEliminationEffect&&activeEliminationEffect.side==='B'?'is-entering':''}">${escapeHtml(teamMemberName(battle.activeB))}</div>${teamHpBar(battle.activeB,battle,false)}<div class="team-active-life">${Math.max(0,2-(battle.damage[battle.activeB]||0))} / 2 HP</div>${teamRosterStatus(teamB,battle,'B',match)}</div>
    </div>
    <div class="finish-grid team-finish-grid"><div class="finish-col side-a">${teamFinishButtons(match.id,'A')}</div><div class="finish-col side-b">${teamFinishButtons(match.id,'B')}</div></div>`;

  body.classList.add('score-console');
  body.classList.remove('quick-console');
  body.classList.toggle('completed-console',completed);
  body.innerHTML = `<div class="referee-title">${roundLabel}・3v3 團體賽</div>${feedback}${eliminationFxHtml}${completed?'':matchOverview}${lineup}${activeArea}
    <div class="ref-footer">
      <button class="btn btn-dark" onclick="undoLastPoint('${match.id}')" ${match.log.length===0?'disabled':''}>撤銷上一分</button>
      <button class="btn btn-ghost btn-reset-match" onclick="resetMatch('${match.id}')" ${match.log.length===0?'disabled':''}>勝負重置</button>
      ${completed ? (nextMatch ? `<button class="btn btn-switch-match" onclick="switchToOtherPendingMatch('${panelId}')" ${canSwitchNextMatch(panelId)?'':'disabled'}>${nextMatchSwitchLabel(panelId,nextMatch)} ${icon('shuffle',15)}</button><button class="btn btn-primary btn-next-match" onclick="advanceReferee('${panelId}')">下一場 ${icon('arrow-right',16)}</button>` : (hasPendingMatches()?`<button class="btn btn-dark" disabled>目前無可分配場次</button>`:`<button class="btn btn-primary" onclick="showFinalResults()">戰績結算</button>`)) : ''}
    </div>`;
}

function renderRefereeMatch(match, panelId){
  const body = document.getElementById(`refBody-${panelId}`);
  if(!body) return;
  const panelCard = body.closest('.referee-panel');
  if(panelCard){
    panelCard.classList.toggle('referee-panel-bronze', !!(match && match.thirdPlace));
    panelCard.classList.toggle('referee-panel-final', isFinalMatch(match));
  }
  if(!match){
    body.innerHTML = `<div class="referee-empty" style="padding:36px 16px;"><div class="big">目前無可分配場次</div></div>`;
    return;
  }
  if(state.tournament.format === 'team3v3'){
    renderTeamRefereeMatch(match,panelId);
    return;
  }
  const quickMode = !!state.tournament.quickMode;
  const target = state.tournament.pointsToWin;
  const pa = nameOf(match.playerA), pb = nameOf(match.playerB);
  const completed = match.status === 'completed';
  const activeFeedback = scoreTapFeedback.get(match.id);
  const scoreFeedbackAnnouncement = activeFeedback && activeFeedback.until > Date.now()
    ? `${activeFeedback.side === 'A' ? pa : pb} 得 ${activeFeedback.points} 分，目前比分 ${match.pointsA} 比 ${match.pointsB}${completed ? `，${nameOf(match.winner)} 獲勝` : ''}`
    : '';
  const scoreFeedbackHtml = scoreFeedbackAnnouncement
    ? `<div class="score-tap-feedback side-${activeFeedback.side.toLowerCase()}" data-match-id="${escapeAttr(match.id)}" aria-hidden="true">＋${activeFeedback.points}</div>`
    : '';

  const nextMatchPreview = completed ? computeNextMatchForPanel(panelId) : null;
  const sharedNextMatch = completed ? getSharedNextMatch() : null;
  const nextMatchHtml = sharedNextMatch
    ? `<div class="text-muted next-match-preview ${nextMatchPreviewFlashPanels.has(panelId) ? 'is-switched' : ''}" aria-live="polite">
         <span class="next-match-refresh-mark">${icon('shuffle',13)}</span>
         <span class="next-match-kicker">共用佇列・下一場${formatMatchNumberLabel(realMatchNumber(sharedNextMatch)) ? `・${formatMatchNumberLabel(realMatchNumber(sharedNextMatch))}` : ''}${nextMatchPreview && nextMatchPreview.id !== sharedNextMatch.id ? `<span class="next-match-local-choice">　｜　本台切換預覽・${formatMatchNumberLabel(realMatchNumber(nextMatchPreview)) || ''}</span>` : ''}</span>
         <span class="next-match-names">${escapeHtml(nameOf(sharedNextMatch.playerA))} <span class="versus-word">VS</span> ${escapeHtml(nameOf(sharedNextMatch.playerB))}</span>
       </div>`
    : `<div class="text-muted">目前沒有下一場對戰了</div>`;

  const ringRowHtml = quickMode ? '' : `
    <div class="ring-row">
      <div class="ring-wrap">
        ${buildBattery(match.pointsA, target)}
        <div class="battery-value">${match.pointsA}<span class="of"> / ${target}</span></div>
        <div class="ring-name">${escapeHtml(pa)}</div>
      </div>
      <div class="vs-mark">VS</div>
      <div class="ring-wrap">
        ${buildBattery(match.pointsB, target)}
        <div class="battery-value">${match.pointsB}<span class="of"> / ${target}</span></div>
        <div class="ring-name">${escapeHtml(pb)}</div>
      </div>
    </div>
  `;

  const mainHtml = completed ? `
      <div class="winner-banner">
        <div class="wname"><span class="winner-check">✓</span>${escapeHtml(nameOf(match.winner))} <span class="winner-word">獲勝</span></div>
        ${nextMatchHtml}
      </div>
    ` : (!match.playerA || !match.playerB) ? `
      <div class="referee-empty" style="padding:36px 16px;">
        <div class="big">尚有選手未決定</div>
        請等待前面的對戰產生結果後，這場才能開始。
      </div>
    ` : quickMode ? `
      <div class="quick-win-grid">
        <button class="quick-win-btn side-blue" onclick="recordQuickWin('${match.id}','A')">
          <span class="quick-win-name">${escapeHtml(pa)}</span>
          <span class="quick-win-label">獲勝</span>
        </button>
        <div class="quick-vs-mark">VS</div>
        <button class="quick-win-btn side-red" onclick="recordQuickWin('${match.id}','B')">
          <span class="quick-win-name">${escapeHtml(pb)}</span>
          <span class="quick-win-label">獲勝</span>
        </button>
      </div>
    ` : `
      <div class="finish-grid">
        <div class="finish-col side-a">
          ${finishButtons(match.id, 'A')}
        </div>
        <div class="finish-col side-b">
          ${finishButtons(match.id, 'B')}
        </div>
      </div>
    `;

  const isKnockoutFmt = isElimination(state.tournament.format);
  const maxRound = isKnockoutFmt ? Math.max(...state.matches.map(x => x.round)) : match.round;
  const refTitleLabel = match.bracket ? doubleRoundLabel(match) : match.thirdPlace ? '季軍戰' : (isKnockoutFmt ? bracketRoundLabel(match.round, maxRound) : `第 ${match.round} 輪`);
  body.classList.add("score-console");
  body.classList.toggle("quick-console", quickMode);
  body.classList.toggle("completed-console", completed);
  body.innerHTML = `
    <div class="referee-title">${refTitleLabel}</div>
    ${scoreFeedbackHtml}
    ${ringRowHtml}
    ${mainHtml}

    <div class="ref-footer">
      ${quickMode ? '' : `<button class="btn btn-dark" onclick="undoLastPoint('${match.id}')" ${match.log.length===0?'disabled':''}>撤銷上一分</button>`}
      ${(!quickMode || completed) ? `<button class="btn btn-ghost btn-reset-match" onclick="resetMatch('${match.id}')" ${(!quickMode && match.log.length===0) ? 'disabled':''}>勝負重置</button>` : ''}
      ${completed ? (nextMatchPreview
          ? `<button class="btn btn-switch-match ${nextMatchSwitchingPanels.has(panelId) ? 'is-switching' : ''}" onclick="switchToOtherPendingMatch('${panelId}')" ${canSwitchNextMatch(panelId) && !nextMatchSwitchingPanels.has(panelId) ? '' : 'disabled'}>${nextMatchSwitchLabel(panelId,nextMatchPreview)} ${icon('shuffle',15)}</button>
             <button class="btn btn-primary btn-next-match" onclick="advanceReferee('${panelId}')" ${nextMatchSwitchingPanels.has(panelId) ? 'disabled' : ''}>下一場 ${icon('arrow-right',16)}</button>`
          : (hasPendingMatches()
              ? `<button class="btn btn-dark" disabled>目前無可分配場次</button>`
              : `<button class="btn btn-primary" onclick="showFinalResults()">戰績結算</button>`)
        ) : ''}
    </div>
  `;
}

function finBadgeIcon(key){
  const paths={
    SPIN:'<path d="M19 7a8 8 0 1 0 1 9M19 3v4h-4"/><path d="M9 12h6"/>',
    OVER:'<path d="M3 18h14M14 5h7v7M20 6l-9 9"/><path d="M4 9h5v5H4z"/>',
    BURST:'<path d="m9 4-2 5-4 2 5 2 2 7 3-6 7-2-6-3-2-6"/><path d="m18 4 2-2M20 18l2 2M3 3l2 2"/>',
    XTREME:'<path d="M3 17h8l4-10h6M17 3l4 4-4 4"/><path d="m4 10 3-3 3 3"/>'
  };
  return `<svg class="fin-badge-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[key]||paths.SPIN}</svg>`;
}
function legacyFinBadgeIcon(key){
  if(key === 'SPIN'){
    return `<svg class="fin-badge-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`;
  }
  if(key === 'OVER'){
    return `<svg class="fin-badge-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 22 20H2Z"/></svg>`;
  }
  // BURST / XTREME: jagged/sparkle star shapes drawn with a plain CSS
  // clip-path (see .fin-badge-star rules) rather than a hand-built SVG
  // path, since a star polygon is easy to get subtly wrong in path form.
  return `<span class="fin-badge-star"></span>`;
}
function teamFinishButtons(matchId, side){
  const teamFinishes = [
    ['SPIN', '轉停勝利', 1, FINISH.SPIN.cls],
    ['OVER', '擊飛/爆裂勝利', 2, FINISH.OVER.cls],
    ['XTREME', '極限勝利', 3, FINISH.XTREME.cls]
  ];
  return teamFinishes.map(([key, label, points, cls]) => `
    <button class="finish-btn ${cls}" data-team-points="${points}" onclick="recordTeamFinish('${matchId}','${side}','${key}')">
      <span class="fin-text">
        <span class="finish-label">${label}</span>
      </span>
      <span class="fin-ticks"></span>
      <span class="finish-pts">+${points}</span>
    </button>
  `).join('');
}

function finishButtons(matchId, side){
  return Object.entries(FINISH).map(([key, f]) => `
    <button class="finish-btn ${f.cls}" onclick="recordFinish('${matchId}','${side}','${key}')">
      <span class="fin-text">
        <span class="finish-label">${f.label}</span>
      </span>
      <span class="fin-ticks"></span>
      <span class="finish-pts">+${f.points}</span>
    </button>
  `).join('');
}

function resolveColor(varRef){
  const name = varRef.replace('var(','').replace(')','');
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#39ff14';
}

/* =========================================================
   CUSTOM MODAL (replaces window.confirm/alert, which are
   blocked/auto-dismissed inside the sandboxed artifact preview)
========================================================= */
let modalReturnFocus = null;
function showModal(message, buttons, title = '確認'){
  const modalEl = document.getElementById('customModal');
  // Remember what had focus so it can be restored on close (chained modals re-enter after hideModal).
  if(!modalEl.classList.contains('show')) modalReturnFocus = document.activeElement;
  document.getElementById('customModalTitle').innerText = title;
  document.getElementById('customModalMessage').innerText = message;
  const container = document.getElementById('customModalButtons');
  container.innerHTML = '';
  buttons.forEach(b => {
    const btn = document.createElement('button');
    btn.className = 'btn ' + b.className;
    btn.innerText = b.label;
    btn.onclick = () => { hideModal(); if(b.action) b.action(); };
    container.appendChild(btn);
  });
  modalEl.classList.add('show');
  // Move focus into the dialog (the box itself, not a button, so Enter can't trigger an action by accident).
  const box = modalEl.querySelector('.modal-box');
  if(box){
    box.setAttribute('tabindex', '-1');
    box.style.outline = 'none';
    try{ box.focus({ preventScroll:true }); }catch(e){}
  }
}

/* ---- iPhone: keep the screen awake on the referee desk (Wake Lock, iOS 16.4+) ---- */
let wakeLockSentinel = null;
async function syncWakeLock(){
  if(!('wakeLock' in navigator)) return;
  const want = !document.hidden && currentRole !== 'viewer' && isTabVisible('referee');
  try{
    if(want && !wakeLockSentinel){
      const sentinel = await navigator.wakeLock.request('screen');
      wakeLockSentinel = sentinel;
      sentinel.addEventListener('release', () => { if(wakeLockSentinel === sentinel) wakeLockSentinel = null; });
    }else if(!want && wakeLockSentinel){
      const sentinel = wakeLockSentinel;
      wakeLockSentinel = null;
      await sentinel.release();
    }
  }catch(e){ wakeLockSentinel = null; }
}
document.addEventListener('visibilitychange', syncWakeLock);

/* ---- iPhone: bring a focused text field into view above the on-screen keyboard ---- */
document.addEventListener('focusin', event => {
  const el = event.target;
  if(!(el instanceof HTMLElement) || !el.matches('input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),textarea')) return;
  if(!window.matchMedia('(pointer: coarse)').matches) return;
  setTimeout(() => {
    if(document.activeElement === el){
      try{ el.scrollIntoView({block:'center', behavior:'smooth'}); }catch(e){}
    }
  }, 350);
});

function hideModal(){
  document.getElementById('customModal').classList.remove('show');
  const target = modalReturnFocus;
  modalReturnFocus = null;
  // Skip text fields so iOS doesn't pop the keyboard back up after closing.
  if(target && target.isConnected && typeof target.focus === 'function' &&
     !target.matches('input:not([type="checkbox"]):not([type="radio"]):not([type="button"]),textarea')){
    try{ target.focus({ preventScroll:true }); }catch(e){}
  }
}


function openUpdateNotes(){
  showModal('', [{label:'知道了',className:'btn-primary'}], `${APP_VERSION} 更新摘要`);
  const message = document.getElementById('customModalMessage');
  message.innerHTML = `
    <div class="update-notes">
      <div class="update-notes-date">更新日期 2026/11/20</div>
      <section class="update-notes-section">
        <h4 class="update-notes-heading">V3.45 更新重點</h4>
        <ul class="update-notes-list">
          <li>裁判台減少重複同步，比分更新只處理變動場次。</li>
          <li>設定頁重新排版，手機可快速找到比賽規則、名單和點名。</li>
          <li>中籤名單可直接複製，也可全螢幕放大查看。</li>
          <li>重新抽籤使用高品質亂數；抽選時姓名與樹狀圖對局同步跳動，五次抽籤採用第 5 次結果。</li>
        </ul>
      </section>
    </div>`;
  message.scrollTop = 0;
}

function showAlert(message){
  showModal(message, [{ label:'知道了', className:'btn-primary' }]);
}

function showConfirm(message, onConfirm){
  showModal(message, [
    { label:'取消', className:'btn-dark' },
    { label: /清除|刪除|撤銷|重置|重新開始/.test(message) ? '確定變更' : '繼續', className: /清除|刪除|撤銷|重置|重新開始/.test(message) ? 'btn-danger' : 'btn-primary', action:onConfirm }
  ]);
}

function buildBattery(points, target){
  const capped = Math.min(points, target);
  const isFull = points >= target;
  const sevenMode = target > 4;

  let cellsHtml = '';
  for(let i=1; i<=target; i++){
    cellsHtml += `<div class="battery-cell ${i<=capped ? 'lit':''}"></div>`;
  }

  const bodyClasses = [
    sevenMode ? 'battery-seven' : '',
    isFull ? 'battery-full' : ''
  ].filter(Boolean).join(' ');

  return `
    <div class="battery-outer">
      <div class="battery-cap"></div>
      <div class="battery-body ${bodyClasses}">
        ${cellsHtml}
      </div>
    </div>`;
}

function advanceReferee(panelId){
  const panel = refereePanels.find(p => p.id === panelId);
  if(!panel) return;
  const next = computeNextMatchForPanel(panelId);
  panel.matchId = next ? next.id : panel.matchId;
  if(next) refereePanelDisplayPriority.add(panelId);
  delete panel.nextMatchId;
  refereeNextMatchChoices.delete(panelId);
  reconcileRefereePanelPreviews();
  savePanels();
  renderReferee();
}

function hasPendingMatches(){
  return !!nextPlayableMatch();
}

function showFinalResults(){
  switchTab('standings');
}

/* =========================================================
   STATS + SETUP SYNC
========================================================= */
function renderStats(){
  syncDrawActions();
  const empty = state.matches.length === 0;
  document.getElementById("welcomeV38").classList.toggle("hidden", !empty);
  document.getElementById("statsBarV38").classList.toggle("hidden", empty);
  const realMatches = state.matches.filter(m => !m.isBye && !m.inactive);
  const total = realMatches.length;
  const completed = realMatches.filter(m=>m.status==='completed').length;
  const progress = total>0 ? Math.round(completed/total*100) : 0;

  // "分享賽事戰報" only makes sense once the tournament is fully wrapped up
  // (100% complete) — otherwise the champion/runner-up/3rd aren't final yet.
  const awardBtnWrap = document.getElementById('awardButtonWrap');
  if(awardBtnWrap) awardBtnWrap.classList.toggle('hidden', !(total > 0 && completed === total));

  document.getElementById('statPlayers').innerText = state.players.length;
  const participantUnit = document.getElementById('statParticipantUnit');
  if(participantUnit) participantUnit.innerText = state.tournament.format === 'team3v3' ? ' 支隊伍' : ' 位選手';
  document.getElementById('statTotal').innerText = total;
  document.getElementById('statCompleted').innerText = completed;
  document.getElementById('statProgress').innerText = progress + '%';
  const progressFill = document.getElementById('statProgressFill');
  if(progressFill) progressFill.style.width = progress + '%';

  document.getElementById('headerTName').innerText =
    state.tournament.name || DEFAULT_TOURNAMENT_NAME;
}

function loadSetupInputs(){
  const editableName = editableTournamentName(state.tournament.name);
  document.getElementById('tournamentName').value = editableName;
  const cloudNameInput = document.getElementById('cloudNewName');
  if(document.activeElement !== cloudNameInput) cloudNameInput.value = editableName;
  document.getElementById('pointsToWin').value = state.tournament.pointsToWin || 4;
  document.getElementById('formatSelect').value = state.tournament.format || 'knockout';
  document.getElementById('quickModeCheckbox').checked = !!state.tournament.quickMode;
  onFormatChange();

  const isRunning = state.tournament.status === 'running';
  const isTeam = state.tournament.format === 'team3v3';
  const showDetail = !isRunning || playerSetupExpanded;

  if(showDetail && isTeam){
    renderTeamInputs(state.teams);
  } else if(showDetail && state.players.length > 0){
    createPlayerInputs(0);
    addPlayerChips(state.players);
  } else if(showDetail && document.getElementById('playerInputs').children.length === 0){
    createPlayerInputs(0);
  }
  if(showDetail && !isRunning && state.players.length === 0 && !rosterDraftPrompted){
    const draft = readRosterDraft();
    if(draft){
      rosterDraftPrompted = true;
      showModal(`發現尚未開賽的名單草稿（${draft.players.length} 位），是否載入姓名與點名狀態？`, [
        { label:'暫不載入', className:'btn-dark' },
        { label:'載入草稿', className:'btn-primary', action:() => restoreRosterDraft(draft) }
      ]);
    }
  }
  updatePlayerSetupVisibility();

  const note = document.getElementById('setupNote');
  const startBtn = document.getElementById('startBtn');
  if(isRunning){
    note.textContent = '重新產生賽程會清除這場賽事的所有比分與對戰紀錄。';
    startBtn.innerText = '重新產生賽程';
  } else {
    note.innerText = '';
    startBtn.innerText = '開始比賽';
  }
}

/* =========================================================
   PLAYER SETUP: 收合摘要 <-> 展開編輯
========================================================= */
function updatePlayerSetupVisibility(){
  const section = document.getElementById('playerSetupSection');
  const teamSection = document.getElementById('teamSetupSection');
  const summary = document.getElementById('playerSetupSummary');
  if(!section || !teamSection || !summary) return;
  const collapse = state.tournament.status === 'running' && !playerSetupExpanded;
  const isTeam = state.tournament.format === 'team3v3';
  section.classList.toggle('hidden', collapse || isTeam);
  teamSection.classList.toggle('hidden', collapse || !isTeam);
  summary.classList.toggle('hidden', !collapse);
  if(collapse) updatePlayerSetupSummaryText();
}

function updatePlayerSetupSummaryText(){
  const el = document.getElementById('playerSetupSummaryText');
  if(!el) return;
  const total = state.players.length;
  if(state.tournament.format === 'team3v3'){
    el.innerHTML = `已登記 <b>${(state.teams || []).length}</b> 支隊伍・共 ${(state.teams || []).length * 3} 名團員`;
    return;
  }
  const withdrawnCount = state.players.filter(p => p.withdrawn).length;
  el.innerHTML = withdrawnCount > 0
    ? `已登記 <b>${total}</b> 位選手・${withdrawnCount} 位棄權`
    : `已登記 <b>${total}</b> 位選手`;
}

function togglePlayerSetupSection(){
  playerSetupExpanded = !playerSetupExpanded;
  if(playerSetupExpanded){
    if(state.tournament.format === 'team3v3'){
      renderTeamInputs(state.teams);
      updatePlayerSetupVisibility();
      return;
    }
    // 展開時把目前正式名單重新填入晶片清單，方便直接編輯後按「重新產生賽程」
    createPlayerInputs(0);
    addPlayerChips(state.players);
  }
  updatePlayerSetupVisibility();
}

/* =========================================================
   RESET
========================================================= */
function resetTournament(){
  showConfirm('確定要刪除目前所有比賽資料嗎？此動作無法復原。', async () => {
    try{ sessionStorage.removeItem(STORAGE_KEY); }catch(e){}
    try{ sessionStorage.removeItem(PANELS_KEY); }catch(e){}
    try{ localStorage.removeItem(ROSTER_DRAFT_KEY); }catch(e){}
    if(window.storage){ try{ await window.storage.delete(STORAGE_KEY, false); }catch(e){} }
    if(window.cloudSync && window.cloudSync.ready && currentEventCode){
      try{ await window.cloudSync.clearMatches(); }catch(e){}
    }
    state = {
      tournament:{ name:DEFAULT_TOURNAMENT_NAME, pointsToWin:4, format:'knockout', quickMode:true, status:'registration' },
      players:[], teams:[], matches:[], currentRound:1
    };
    bracketCourtCountClearPending = !!currentEventCode;
    bracketCourtPromptShown = false;
    refereePanels = [{ id: genPanelId(), matchId:null, label:'' }];
    savePanels();
    playerSetupExpanded = false;
    attendanceManagerOpen = false;
    rosterDraftEnabled = false;
    rosterDraftSavePrompted = false;
    rosterDraftPrompted = false;
    createPlayerInputs(2);
    renderAll();
    if(currentEventCode) saveState();
  });
}

/* =========================================================
   PLAYER MODE — NEXT MATCH CARD
========================================================= */
function renderPlayerNextMatchCard(){
  const cards = document.getElementById('playerNextMatchCards');
  if(!cards) return;

  // Use the same shared queue preview as the bracket renderer. These are
  // upcoming matches, not assignments locked to specific referee tables.
  const matches = currentRole === 'viewer'
    ? [...new Map(Object.values(computeUpcomingMatchPreviews())
        .filter(Boolean).map(match => [match.id, match])).values()]
    : [];
  const announcementKey = currentRole === 'viewer'
    ? JSON.stringify(matches.map(match => [match.id, realMatchNumber(match), nameOf(match.playerA), nameOf(match.playerB)]))
    : 'inactive';
  // A point in an already active match doesn't change the next-match cards.
  // Keep their nodes (and focus/animation state) instead of rebuilding them.
  if(cards.dataset.announcementKey === announcementKey &&
     cards.childElementCount === matches.length &&
     cards.classList.contains('hidden') === (matches.length === 0))return;
  if(cards.dataset.announcementKey !== announcementKey){
    cards.dataset.announcementKey = announcementKey;
    const summary = currentRole !== 'viewer' ? '' : matches.length
      ? `即將上場，共 ${matches.length} 場：${matches.map(match => {
          const number = formatMatchNumberLabel(realMatchNumber(match));
          return `${number ? `${number}，` : ''}${nameOf(match.playerA)} 對 ${nameOf(match.playerB)}`;
        }).join('；')}`
      : '目前沒有即將上場的對戰。';
    announceAppStatus(summary);
  }
  cards.replaceChildren();
  cards.classList.toggle('hidden', matches.length === 0);
  cards.setAttribute('aria-label', matches.length
    ? `${matches.length} 場即將上場對戰`
    : '目前沒有即將上場的對戰');

  matches.forEach(match => {
    const matchLabel = formatMatchNumberLabel(realMatchNumber(match));
    const metaText = matchLabel ? `${matchLabel}・即將上場` : '即將上場';
    const versusText = `${nameOf(match.playerA)} vs ${nameOf(match.playerB)}`;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'player-next-match-card';
    card.dataset.matchId = match.id;
    card.setAttribute('aria-label', `${metaText}，${versusText}，前往對戰樹狀圖`);
    card.addEventListener('click', () => openPlayerNextMatch(match.id));

    const copy = document.createElement('span');
    copy.className = 'player-next-match-copy';
    const meta = document.createElement('span');
    meta.className = 'player-next-match-meta';
    meta.textContent = metaText;
    const versus = document.createElement('strong');
    versus.className = 'player-next-match-versus';
    versus.textContent = versusText;
    copy.append(meta, versus);

    const arrow = document.createElement('span');
    arrow.className = 'player-next-match-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '›';
    card.append(copy, arrow);
    cards.appendChild(card);
  });
}

function announceAppStatus(message){
  const status = document.getElementById('appLiveStatus');
  if(!status) return;
  const token = `${Date.now()}-${Math.random()}`;
  status.dataset.announcementToken = token;
  status.textContent = '';
  if(!message) return;
  requestAnimationFrame(() => {
    if(status.dataset.announcementToken === token) status.textContent = message;
  });
}

function openPlayerNextMatch(matchId){
  if(!matchId) return;

  switchTab('standings');

  requestAnimationFrame(() => {
    const target = document.querySelector(`#bracketTree .bracket-match[data-match-id="${cssEscapeId(matchId)}"]`);
    if(!target) return;
    target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'center', inline:'center'});
    target.classList.remove('search-hit');
    void target.offsetWidth;
    target.classList.add('search-hit');
    setTimeout(() => target.classList.remove('search-hit'), 2000);
  });
}

/* =========================================================
   TABS
========================================================= */
function switchTab(tab){
  if(currentRole === 'viewer' && (tab === 'referee' || tab === 'setup' || tab === 'tools')) return;
  const tabs = ['standings','matches','referee','setup','tools'];
  tabs.forEach(name => {
    document.getElementById(`tab-${name}`).classList.toggle('hidden', name !== tab);
  });
  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  document.body.classList.toggle('referee-view', tab === 'referee');
  document.body.classList.toggle('setup-view', tab === 'setup');
  document.querySelectorAll('.tab').forEach(btn => {
    if(btn.dataset.tab === tab) btn.setAttribute('aria-current','page'); else btn.removeAttribute('aria-current');
  });
  if(tab !== 'referee') restoreBracketTreeHome();
  if(tab === 'referee'){ renderReferee(); maybePromptBracketCourtCount(); }
  if(tab === 'standings' && standingsDirty){ renderStandings(); standingsDirty = false; }
  if(tab === 'standings' && isElimination(state.tournament.format)) applyBracketZoom();
  if(tab === 'matches' && matchesDirty){ renderMatches(); matchesDirty = false; }
  syncWakeLock();
}

/* =========================================================
   RENDER ALL
========================================================= */
function renderAll({refreshSetup=true}={}){
  if(isTabVisible('standings')){renderStandings();standingsDirty=false;}
  else standingsDirty=true;
  if(isTabVisible('matches')){renderMatches();matchesDirty=false;}
  else matchesDirty=true;
  renderStats();
  renderPlayerNextMatchCard();
  if(currentRole !== 'viewer'){
    const setupHasFocus = applyingRemote && document.activeElement &&
      document.getElementById('tab-setup').contains(document.activeElement);
    if(refreshSetup && !setupHasFocus) loadSetupInputs();
    if(refreshSetup) syncPrizeDrawPlayers();
  }
  if(!document.getElementById('tab-referee').classList.contains('hidden')) renderReferee();
}

/* =========================================================
   PERF: lightweight refresh path for scoring taps
   (see standingsDirty/matchesDirty comment above)
========================================================= */
function isTabVisible(tab){
  const el = document.getElementById(`tab-${tab}`);
  return !!el && !el.classList.contains('hidden');
}

function updateRefereePanelsForMatch(matchId){
  const match = state.matches.find(m => m.id === matchId);
  if(!match) return;
  refereePanels.forEach(panel => {
    if(panel.matchId === matchId) renderRefereeMatch(match, panel.id);
  });
}

// Called after a single match's score/log changes (point added/undone). Avoids
// tearing down and rebuilding the whole page — which was restarting every
// battery/spark/glow animation on every tap — by only touching the referee
// panel(s) actually showing this match, plus whichever other tab is currently
// on screen. Tabs that aren't visible are marked dirty and catch up in
// switchTab() once the user actually looks at them.
function refreshAfterScoreChange(matchId,previousMatch){
  const current=state.matches.find(m=>m.id===matchId);
  const scoreOnly=isBracketScoreOnlyChange(previousMatch,current);
  if(!scoreOnly){
    renderStats();
    renderPlayerNextMatchCard();
  }
  if(isTabVisible('standings')){
    if(!(isElimination(state.tournament.format) && scoreOnly &&
         patchBracketMatchScore(matchId)))renderStandings();
    standingsDirty=false;
  }
  else standingsDirty = true;
  if(isTabVisible('matches')){ renderMatches(); matchesDirty = false; }
  else matchesDirty = true;
  if(isTabVisible('referee')){
    if(isRefereeBracketInteractive()){
      renderBracket();
      applyBracketZoom();
      updateRefereeBracketSummary();
    } else updateRefereePanelsForMatch(matchId);
  }
}

/* =========================================================
   HELPERS
========================================================= */
function nameOf(id){
  if(!id) return '待定';
  if(id === 'BYE') return '輪空';
  const p = state.players.find(p=>p.id===id);
  return p ? p.name : id;
}
function escapeHtml(text){
  const div = document.createElement('div');
  div.textContent = text ?? '';
  return div.innerHTML;
}
function escapeAttr(text){
  return String(text ?? '').replace(/"/g,'&quot;');
}
