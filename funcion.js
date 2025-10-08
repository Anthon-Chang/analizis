// funcion ua
function ua(a, b, c, d) {
    var e;
    b = D(b);
    for (var f = [], g = [], h = 0, k = !1, q = !1; h < b.length && c.index < c.lines.length; ) {
        var m = c.lines[c.index],
            l = b[h];
        if ("+" === l[0])
            break;
        if (k = k || " " !== m[0],
        g.push(l),
        h++,
        "+" === m[0])
            for (q = !0; "+" === m[0]; )
                f.push(m),
                m = c.lines[++c.index];
        l.substr(1) === m.substr(1) ? (f.push(m), c.index++) : q = !0
    }
    "+" === (b[h] || "")[0] && k && (q = !0);
    if (q)
        c = f;
    else {
        for (; h < b.length; )
            g.push(b[h++]);
        c = {
            merged: g,
            changes: f
        }
    }
    c.merged ? (e = a.lines).push.apply(e, H(c.merged)) : ea(a, d ? c : b, d ? b : c)
}


