(function (w) {
    let d = w.document;
    let Navigate = w.Navigate = (w.Navigate || {
        elements: {},
        crumbs: [],
        Init: function ($selector) {
            this.elements.contaner = d.querySelector($selector);
            this.GetData();
            this.Elements();
            this.StylesDefault();
            this.Events();
        },
        GetData: function () {
            const url = window.location.origin + '/api/getMenu/';
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                return response.json();
            }).then(function (json) {
                w.Navigate.menu = json;
            });
        },
        StylesDefault: function () {
            Object.assign(this.elements.contaner.style, {
                display: 'none',
                width: '100%',
                height: '100%',
                position: 'fixed',
                overflowX: 'hidden',
                overflowY: 'auto',
                top: '0',
                left: '-100%',
                transition: '.5s'
            });
        },
        Elements: function ($selector) {
            let e = this.elements;
            e.nav_open = d.querySelector('.nav_open');
            e.nav_close = e.contaner.querySelector('.nav_close');
            e.nav_menu = e.contaner.querySelector('.nav_menu');
            e.nav_back = e.contaner.querySelector('.nav_back');
            e.nav_title = e.contaner.querySelector('.nav_title');
            e.links = e.nav_menu.querySelector('.links');
            e.nav_animate = d.querySelector('.nav_animate');
        },
        Events: function () {
            this.elements.nav_open.addEventListener('click', (e) => {
                e.preventDefault();
                w.Navigate.Transition();
                w.Navigate.elements.contaner.style.display = 'block';
                setTimeout(function () {
                    w.Navigate.elements.contaner.style.left = "0";
                    d.body.style.overflow = "hidden";
                }, 1);
            });
            this.elements.nav_close.addEventListener('click', (e) => {
                e.preventDefault();
                this.crumbs = [];
                w.Navigate.elements.contaner.style.left = "-100%";
                setTimeout(function () {
                    w.Navigate.elements.contaner.style.display = "none";
                    d.body.style.overflow = "auto";
                }, 500);
            });
        },
        Transition: function (menu = this.menu) {
            this.elements.nav_animate.style.transition = ".5s";
            setTimeout(t => {
                this.elements.nav_animate.style.opacity = 0;
            }, 1)
             setTimeout(t => {
                 this.elements.nav_animate.style.transition = "0s";
                 async function f() {
                     if (w.Navigate.crumbs?.length) {
                         w.Navigate.elements.nav_title.textContent = w.Navigate.CrumbsArray().title;
                         w.Navigate.elements.nav_back.style.display = "block";
                         let nav_back = w.Navigate.elements.nav_back.cloneNode(true);
                         w.Navigate.elements.nav_back.parentNode.replaceChild(nav_back, w.Navigate.elements.nav_back);
                         w.Navigate.elements.nav_back = nav_back;
                         w.Navigate.elements.nav_back.addEventListener('click', (e) => {
                             e.preventDefault();
                             w.Navigate.crumbs.pop();
                             w.Navigate.Transition(w.Navigate.CrumbsArray().children);
                             console.log(w.Navigate.crumbs);
                         })
                     } else {
                         w.Navigate.elements.nav_title.textContent = "Каталог";
                         w.Navigate.elements.nav_back.style.display = "none";
                     }
                     w.Navigate.elements.links.replaceChildren();
                     const container = w.Navigate.CreateElement(w.Navigate.elements.links, 'div');
                     container.classList.add("nav_container_menu");
                     const ul = w.Navigate.CreateElement(container, 'ul');
                     for (let key in menu) {
                         const li = w.Navigate.CreateElement(ul, 'li');
                         const link = w.Navigate.CreateElement(li, 'a');
                         link.classList.add('link');
                         link.textContent = menu[key].title;
                         link.href = menu[key].url;
                         if (menu[key].children) {
                             const s = w.Navigate.CreateElement(li, 'strong');
                             s.textContent = " ";
                             const target = w.Navigate.CreateElement(li, 'a');
                             target.textContent = ' >';
                             target.classList.add('target');
                             target.dataset.key = key;
                             target.addEventListener('click', (e) => {
                                 e.preventDefault();
                                 w.Navigate.crumbs.push(e.target.dataset.key)
                                 w.Navigate.Transition(menu[key].children);
                             });
                         }
                         setTimeout(() => {
                             w.Navigate.ContainerHeight(ul.offsetHeight);
                         }, 1)
                     }
                 }
                 f().then(t => {
                     setTimeout(t => {
                         this.elements.nav_animate.style.opacity = 1;
                         this.elements.nav_animate.style.left = "100%";
                         setTimeout(t => {
                             this.elements.nav_animate.style.transition = ".5s";
                             setTimeout(t => {
                                 this.elements.nav_animate.style.left = "15px";
                             }, 1)
                         }, 300)
                     }, 1)
                 });
            }, 500)
        },
        CreateElement: function (parent, tag) {
            const elem = d.createElement(tag);
            parent.appendChild(elem);
            return elem;
        },
        ContainerHeight: function (height) {
            this.elements.links.style.height = height + 10 + 'px';
        },
        CrumbsArray: function () {
            let arr = [];

            function arrStep(menu, menukey) {
                arr = menu[menukey];
            }

            for (let elem of this.crumbs) {
                arrStep(!this.crumbs?.length ? arr : this.menu, elem);
            }
            return arr;
        }
    })
}(window))

window.Navigate.Init('.nav_container');

// console.log(window.Navigate)