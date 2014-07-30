﻿var DepTree = __class.extend({ ctor: function (n) { function i(n, t) { this.update(n - (this.dx || 0), t - (this.dy || 0)), this.dx = n, this.dy = t } function r() { this.dx = this.dy = 0 } function u(n, u, f, e, o, s, h, c) { var l = [["M", n, u], ["L", f, e]], a = t.set(t.path(l).attr({ stroke: o || Raphael.getColor(), "stroke-width": c }), t.circle(f, e, s).attr({ fill: h, stroke: "none" }), t.circle(n, u, s / 2).attr({ fill: h, stroke: "none" })); a[1].update = function (n, t) { var i = this.attr("cx") + n, r = this.attr("cy") + t; this.attr({ cx: i, cy: r }), l[1][1] = i, l[1][2] = r, a[0].attr({ path: l }) }, a[2].update = function (n, t) { var i = this.attr("cx") + n, r = this.attr("cy") + t; this.attr({ cx: i, cy: r }), l[0][1] = i, l[0][2] = r, a[0].attr({ path: l }) }, a[1].drag(i, r), a[2].drag(i, r), a.toBack() } function e(n, t) { return n + Math.floor(Math.random() * (t - n + 1)) } function o(n) { function et(n, t, i) { for (var e = [], h = [], v, y, l, r, f, u, s, a, w, p, c = 0, o = n.length; c < o; c++) { for (r = n[c], f = !1, u = 0, s = t.length; u < s; u++) g(t[u].name, r.deps) && (f = !0); f ? e.push(r) : h.push(r) } for (v = [], y = [], l = 0, o = e.length; l < o; l++) { for (r = e[l], f = !1, u = 0, s = e.length; u < s; u++) g(e[u].name, r.deps) && (f = !0); for (a = 0, w = h.length; a < w; a++) g(h[a].name, r.deps) && (f = !0); f ? v.push(r) : (r.level = i, y.push(r)) } return p = h.concat(v), p.length > 0 ? et(p, y, ++i) : i } function ct(t) { for (var i = 0, r = n.length; i < r; i++) if (n[i].name == t) return !0; return !1 } function g(n, t) { for (var i = 0, r = t.length; i < r; i++) if (t[i] == n) return !0; return !1 } for (var h = n.length, nt = t.width, p = t.height, st = { x: nt / 2, y: p / 2 }, lt = e(0, 360), at = 360 / h, vt = st.x - 150, a, w, b, r, c, s, ft, l, y, ot, o, i, v = 0; v < n.length; v++) if (i = n[v], i.deps && i.deps.length > 0) for (a = 0; a < i.deps.length; a++) if (!ct(i.deps[a])) throw i.deps[a] + " is not defined "; for (w = [], b = [], r = 0; r < h; r++) i = n[r], i.deps && i.deps.length != 0 ? b.push(i) : (i.level = 0, w.push(i)); var tt = et(b, w, 1), it = p / (tt + 1), k = p - it / 2 + 20; for (r = 0; r < tt + 1; r++) { for (c = [], s = 0, h = n.length; s < h; s++) n[s].level == r && c.push(n[s]); var rt = 30, ht = rt * 2, ut = (nt - ht) / c.length, d = rt + ut / 2; for (o = 0, ft = c.length; o < ft; o++) f(c[o].name, d, k), c[o].x = d, c[o].y = k, d += ut; k -= it } for (r = 0; r < h; r++) if (l = n[r], y = l.deps, y) for (s = 0, dLen = y.length; s < dLen; s++) for (ot = y[s], o = 0; o < h; o++) i = n[o], ot === i.name && (l.level - i.level > 1 ? u(l.x, l.y, i.x, i.y, "#8A8FD1", 10, "#8A8FD1", 2) : u(l.x, l.y, i.x, i.y, "#4D507E", 10, "#4D507E", 4)) } var t = Raphael(n.renderTo, n.width, n.height), f; t.rect(0, 0, 819, 579, 10).attr({ stroke: "#666" }), t.text(410, 20, "Dependence  Visualization for KMD.js").attr({ fill: "#fff", "font-size": 20 }), f = function (n, u, f) { var e = t.set(t.rect(u, f, 120, 20, 10).attr({ fill: "#D2DEEE" }), t.text(u, f, n).attr({ fill: "black", "font-size": 20 })), o = e[1].node.getBBox(), c = o.widht, l = o.height, s = o.width / 2 + 5, h = o.height / 2 + 5; e[0].attr({ x: u - s, y: f - h, width: o.width + 10, height: o.height + 10 }), e[0].update = function (n, t) { var i = this.attr("x") + n, r = this.attr("y") + t; this.attr({ x: i, y: r }), e[1].attr({ x: i + s, y: r + h }) }, e[1].update = function (n, t) { var i = this.attr("x") + n, r = this.attr("y") + t; this.attr({ x: i, y: r }), e[0].attr({ x: i - s, y: r - h }) }, e.drag(i, r) }, o(n.data) } });