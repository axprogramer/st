const el_RS = document.querySelector(".Rand-stage")
    , el_RO = document.getElementById("rand_options")
    , useWebP = function () {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
    }();
function randomiseNumbers(e, t, n, r) {
    e = parseInt(e),
        t = parseInt(t),
        n = parseInt(n);
    var o = t - e + 1
        , a = new Array;
    if (r) {
        for (var i = 0; i < n; i++)
            a[i] = e + Math.floor(Math.random() * o);
        return a
    }
    var s = 1;
    for (i = 0; i < o; i++)
        s = (n - a.length) / (o - i),
            Math.random() <= s && a.push(i + e);
    return randomise(a, n, r)
}
function randomise(e, t, n) {
    if (Array.isArray(e) || (e = e.split("")),
        e.shuffle(),
        n) {
        for (var r = new Array, o = 0; o < t; o++)
            r[o] = e[Math.floor(Math.random() * e.length)];
        return r
    }
    return t > 0 && t < e.length ? e.slice(0, t) : e
}
Array.prototype.shuffle = function () {
    var e, t, n = this.length;
    if (0 != n)
        for (; --n;)
            e = Math.floor(Math.random() * (n + 1)),
                t = this[n],
                this[n] = this[e],
                this[e] = t
}
    ;
const rand_json = function () {
    var e = [];
    const t = document.head.querySelectorAll("[data-rand_json]");
    for (var n = t.length - 1; n >= 0; n--)
        e.unshift(t[n].getAttribute("href"));
    return e
}();
function getRandOptions() {
    if (!el_RO)
        return;
    var e = {};
    const t = el_RO.querySelectorAll("[name]");
    for (var n = t.length - 1; n >= 0; n--) {
        const r = t[n].getAttribute("name")
            , o = t[n].getAttribute("id")
            , a = document.getElementById(o);
        "checkbox" === t[n].type ? e[r] = a.checked : e[r] = a.value
    }
    return e
}
function strip(e) {
    return (new DOMParser).parseFromString(e, "text/html").body.textContent || ""
}
function triggerEvent(e, t) {
    t = void 0 === t ? window : t;
    var n = document.createEvent("HTMLEvents");
    n.initEvent(e, !1, !0),
        t.dispatchEvent(n)
}
function getJSON(e, t) {
    var n = new XMLHttpRequest;
    n.open("GET", e, !0),
        n.onload = function () {
            if (n.status >= 200 && n.status < 400) {
                const e = JSON.parse(n.responseText);
                t(e)
            }
        }
        ,
        n.send()
}
function copyText(e) {
    var t = document.createElement("input");
    t.setAttribute("style", "opacity:0;position:absolute;"),
        t.value = e,
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        t.parentNode.removeChild(t)
}
if (function () {
    if (!el_RO)
        return;
    var e, t = (e || document.location.search).replace(/(^\?)/, "").split("&").map(function (e) {
        return this[(e = e.split("="))[0]] = e[1],
            this
    }
        .bind({}))[0];
    const n = el_RO.querySelectorAll("[name]");
    for (var r = n.length - 1; r >= 0; r--) {
        var o = n[r].getAttribute("name");
        if (!t[o])
            return;
        if ("checkbox" === n[r].type) {
            const e = t[o] && "false" != t[o];
            n[r].checked = e
        } else {
            var a = decodeURIComponent(t[o]).replace(/\+/g, " ");
            n[r].value = strip(a)
        }
    }
}(),
    el_RS) {
    const e = function () {
        var e = document.getElementById("style_rand_stage");
        e ? e.innerHTML = "" : ((e = document.createElement("style")).setAttribute("id", "style_rand_stage"),
            document.getElementsByTagName("head")[0].appendChild(e));
        var t = document.querySelector(".Rand-stage > ol");
        if (t) {
            var n = t.offsetWidth
                , r = function (e, t, n) {
                    var r = document.querySelectorAll(e);
                    if (0 != r.length) {
                        for (var o = 0, a = 0; a < r.length; a++) {
                            var i = r[a].offsetWidth;
                            i > o && (o = i)
                        }
                        var s = 1 / Math.floor(t / o);
                        s = 100 * (s < 1 ? s : 1),
                            n.innerHTML += e + "{min-width:" + s + "%;}"
                    }
                };
            r(".Rand-stage > ol > li", n, e),
                r(".Rand-stage > ol ol > li", n, e)
        }
    };
    window.addEventListener("rand_ran", e),
        window.addEventListener("resize", e),
        window.addEventListener("fonts_loaded", e)
}
!function () {
    const e = document.head.querySelectorAll("[as=style]");
    for (var t = e.length - 1; t >= 0; t--)
        e[t].setAttribute("rel", "stylesheet")
}();
runRand = function () {
    var n = getRandOptions()
        , i = randomise(n.items.split("\n"), n.qty, n.dup)
        , l = "";
    if (n.grp > 0)
        for (var r = 0, a = 0; a < i.length; a++) {
            var e = Math.ceil((i.length - a) / (n.grp - r));
            for (t = "",
                ig = 0; ig < e; ig++)
                t += "<li><span>" + i[a] + "</span></li>",
                    a++;
            a--,
                l += "<li><div class='group'>ក្រុមទី " + ++r + "</div><ol>" + t + "</ol></li>"
        }
    else
        for (a = 0; a < i.length; a++)
            l += "<li><span>" + i[a] + "</span></li>";
    el_RS.innerHTML = "<ol>" + l + "</ol>",
        triggerEvent("rand_ran")
}
    ,
    runRand();
//Other Script
try {
    document.fonts.ready.then(function () {
        triggerEvent("fonts_loaded")
    })
} catch (e) { }
!function () {
        if (!el_RO)
            return;
        const e = el_RO.querySelectorAll("textarea");
        for (var t = e.length - 1; t >= 0; t--)
            e[t].addEventListener("change", function () {
                var e = strip(this.value);
                e = e.replace(/[^\S\r\n]+$/gm, ""),
                    this.value = e
            })
    }(),
    function () {
        const e = document.querySelectorAll("button[data-action=rerun]");
        for (var t = e.length - 1; t >= 0; t--)
            e[t].addEventListener("click", function () {
                runRand()
            })
    }(),
    function () {
        const e = document.querySelectorAll("[aria-expanded][aria-controls]");
        for (var t = e.length - 1; t >= 0; t--)
            e[t].addEventListener("click", function () {
                const e = "true" == this.getAttribute("aria-expanded")
                    , t = document.getElementById(this.getAttribute("aria-controls"));
                e ? (this.setAttribute("aria-expanded", "false"),
                    t.setAttribute("hidden", "hidden")) : (this.setAttribute("aria-expanded", "true"),
                        t.removeAttribute("hidden"))
            })
    }(),
    function () {
        const e = document.querySelectorAll("[data-share]");
        for (var t = e.length - 1; t >= 0; t--)
            e[t].addEventListener("click", function () {
                const e = this.getAttribute("data-share");
                if (gtag("event", "share", {
                    method: e
                }),
                    "c" == e[0]) {
                    copyText(window.location),
                        this.classList.add("button--yay");
                    var t = this;
                    return void setTimeout(function () {
                        t.classList.remove("button--yay")
                    }, 2e3)
                }
                const n = function () {
                    const t = encodeURIComponent(window.location)
                        , n = document.querySelector("meta[name='description']")
                        , o = encodeURIComponent(n.getAttribute("content"));
                    switch (e[0]) {
                        case "f":
                            return "https://www.facebook.com/sharer/sharer.php?u=" + t;
                        case "t":
                            return "https://twitter.com/share?url=" + t + "&amp;text=" + o;
                        case "r":
                            return "http://www.reddit.com/submit?url=" + t + "&title=" + o
                    }
                }();
                window.open(n, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
            })
    }(),
    function () {
        if (!el_RO)
            return;
        const e = el_RO.querySelectorAll("*");
        for (var t = e.length - 1; t >= 0; t--)
            e[t].addEventListener("change", function () {
                const e = getRandOptions()
                    , t = new URLSearchParams(Object.entries(e)).toString();
                history.replaceState({}, "", "?" + t)
            })
    }(),
    function () {
        const e = document.querySelectorAll("button[data-action=options]");
        for (var t = e.length - 1; t >= 0; t--)
            e[t].addEventListener("click", function () {
                const e = document.querySelector(".RandOptions");
                e.scrollIntoView({
                    behavior: "smooth"
                }),
                    setTimeout(function () {
                        e.classList.add("RandOptions--highlight"),
                            setTimeout(function () {
                                e.classList.remove("RandOptions--highlight"),
                                    e.querySelector("[name]").focus()
                            }, 200)
                    }, 300)
            })
    }(),
    function () {
        const e = document.getElementById("rand_options_show_images");
        if (!e)
            return;
        const t = function () {
            getRandOptions().show_images ? el_RS.classList.remove("Rand-stage--no_images") : el_RS.classList.add("Rand-stage--no_images")
        };
        e.addEventListener("change", t),
            window.addEventListener("rand_ran", t)
    }();
var rand_ran_cnt = 0;
window.addEventListener("rand_ran", function () {
    rand_ran_cnt++;
    const e = document.querySelector("article");
    if (window.scrollY > e.offsetTop) {
        e.scrollIntoView({
            behavior: "smooth"
        });
        const t = "Rand-stage--highlight";
        setTimeout(function () {
            el_RS.classList.add(t),
                setTimeout(function () {
                    el_RS.classList.remove(t)
                }, 150)
        }, 300)
    }
    2 == rand_ran_cnt && gtag("event", "rerun")
}),
    function () {
        var e = document.createElement("script");
        e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
            e.onerror = function () {
                gtag("event", "adblocker", {
                    non_interaction: !0
                });
                const e = document.querySelector(".adsbygoogle--top");
                var t = document.createElement("aside");
                t.setAttribute("class", "whine"),
                    t.innerHTML = '<div class="whine-fore"><div class="whine-headline">You\'re using an AdBlocker.</div><div>Ad revenue keeps this dumb site alive. Would you considering supporting the site in another way?</div><ul><li><button class="button" data-support="like">1-Click Thank You</button></li><li><button class="button" data-support="share">Share with Friends</button></li><li><a href="https://help.getadblock.com/support/solutions/articles/6000055743-how-do-i-tell-adblock-not-to-block-ads-#whitelist-site" target="_blank" class="button" data-support="unblock">Unblock our ads only</button></li></ul></div>',
                    e.parentNode.appendChild(t),
                    getJSON("/data/gifs.json", function (e) {
                        const n = e.RandL.items.length
                            , o = Math.floor(Math.random() * n)
                            , r = e.RandL.items[o].img;
                        var a = document.createElement("div");
                        a.setAttribute("class", "whine-gif"),
                            a.style.backgroundImage = 'url("' + r + '")',
                            t.appendChild(a)
                    }),
                    document.querySelector("[data-support=unblock]").addEventListener("click", function () {
                        gtag("event", "support", {
                            event_label: "unblock"
                        })
                    }),
                    document.querySelector("[data-support=like]").addEventListener("click", function () {
                        gtag("event", "support", {
                            event_label: "like"
                        }),
                            this.setAttribute("disabled", "disabled"),
                            this.textContent = "Thanks."
                    }),
                    document.querySelector("[data-support=share]").addEventListener("click", function () {
                        gtag("event", "support", {
                            event_label: "share"
                        });
                        const e = document.querySelector("[data-action='share']");
                        e.scrollIntoView({
                            behavior: "smooth"
                        }),
                            setTimeout(function () {
                                triggerEvent("click", e);
                                const t = document.querySelectorAll("[data-share]");
                                setTimeout(function () {
                                    e.classList.add("button--yo");
                                    for (var n = t.length - 1; n >= 0; n--)
                                        t[n].classList.add("button--yo");
                                    setTimeout(function () {
                                        e.classList.remove("button--yo");
                                        for (var n = t.length - 1; n >= 0; n--)
                                            t[n].classList.remove("button--yo")
                                    }, 300)
                                }, 300)
                            }, 300)
                    })
            }
            ,
            document.head.appendChild(e)
    }(),
    function () {
        if (!el_RO)
            return;
        const e = el_RO.querySelector("[name]:not([name=qty]):not([name=dup])");
        if (!e)
            return;
        const t = function (e) {
            const t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        };
        if (t(e))
            return;
        const n = document.querySelectorAll("[data-action=options]");
        setTimeout(function () {
            for (var e = n.length - 1; e >= 0; e--)
                if (0 == e || t(n[e]))
                    return void n[e].setAttribute("data-help", 1)
        }, 1200);
        const o = el_RO.querySelectorAll("[name]");
        for (var r = o.length - 1; r >= 0; r--)
            o[r].addEventListener("focus", function () {
                for (var e = n.length - 1; e >= 0; e--)
                    n[e].removeAttribute("data-help")
            })
    }(),
    function () {
        var e = rand + "-remember"
            , t = document.getElementById("rand_options_items_save");
        if (t) {
            var n, o = (n = t.id.replace("_save", ""),
                document.getElementById(n)), r = function () {
                    var n = t.checked ? o.value : "";
                    localStorage.setItem(e, n)
                };
            t.addEventListener("change", r),
                o.addEventListener("change", r);
            var a = localStorage.getItem(e);
            a && (o.value = a,
                runRand())
        }
    }(),
    el_RO && el_RO.addEventListener("submit", function (e) {
        "function" == typeof runRand && (e.preventDefault(),
            runRand())
    }),
    "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
const rand = "custom-list-group";