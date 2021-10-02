import {
	S as te,
	i as se,
	s as Y,
	e as d,
	c as h,
	a as b,
	d as r,
	b as n,
	f as V,
	D as i,
	E as je,
	F as J,
	G as le,
	H as Q,
	I as Ae,
	t as z,
	k as $,
	g as F,
	n as N,
	J as R,
	h as Me,
	K as Pe,
	L as K,
	M as C,
	j as ne,
	m as re,
	o as ie,
	x as W,
	u as X,
	v as oe,
	l as De,
	r as Ce,
	w as Ke,
	N as me,
	C as ze,
	O as Ve,
	P as Fe,
	Q as Je,
	R as Qe,
	T as We,
	U as Xe
} from '../chunks/vendor-8fe9a59e.js';
import { m as ve, s as _e, a as ce, t as ge, c as pe, A as Le } from '../chunks/store-892411d9.js';
import { r as Ye } from '../chunks/singletons-12a22614.js';
const Ze = Ye,
	ae = et;
async function et(l, e) {
	return Ze.goto(l, e, []);
}
function tt(l) {
	let e, s, t, a, o;
	return {
		c() {
			(e = d('section')), (s = d('form')), (t = d('input')), this.h();
		},
		l(_) {
			e = h(_, 'SECTION', { id: !0 });
			var m = b(e);
			s = h(m, 'FORM', { class: !0, label: !0 });
			var v = b(s);
			(t = h(v, 'INPUT', { label: !0, class: !0, type: !0, placeholder: !0 })),
				v.forEach(r),
				m.forEach(r),
				this.h();
		},
		h() {
			n(t, 'label', 'search'),
				n(
					t,
					'class',
					'bg-transparent w-24 xl:w-48 h-7 rounded-full text-l px-2 text-skin-muted placeholder-text-skin-base::placeholder border-2 border-skin-border'
				),
				n(t, 'type', 'text'),
				n(t, 'placeholder', 'Search...'),
				n(s, 'class', 'flex justify-end items-center pr-0.5'),
				n(s, 'label', 'search form'),
				n(e, 'id', 'search');
		},
		m(_, m) {
			V(_, e, m),
				i(e, s),
				i(s, t),
				je(t, l[0]),
				a || ((o = [J(t, 'input', l[2]), J(s, 'submit', le(l[1]))]), (a = !0));
		},
		p(_, [m]) {
			m & 1 && t.value !== _[0] && je(t, _[0]);
		},
		i: Q,
		o: Q,
		d(_) {
			_ && r(e), (a = !1), Ae(o);
		}
	};
}
function st(l, e, s) {
	let t;
	const a = () => {
		if (t) {
			let _ = t;
			s(0, (t = '')), ae(`/search/${_}`);
		}
	};
	function o() {
		(t = this.value), s(0, t);
	}
	return [t, a, o];
}
class lt extends te {
	constructor(e) {
		super();
		se(this, e, st, tt, Y, {});
	}
}
function Oe(l, e, s) {
	const t = l.slice();
	return (t[6] = e[s]), (t[8] = s), t;
}
function Ue(l, e, s) {
	const t = l.slice();
	return (t[6] = e[s]), (t[10] = s), t;
}
function Be(l) {
	let e, s;
	return {
		c() {
			(e = d('span')), (s = z('|')), this.h();
		},
		l(t) {
			e = h(t, 'SPAN', { class: !0 });
			var a = b(e);
			(s = F(a, '|')), a.forEach(r), this.h();
		},
		h() {
			n(e, 'class', 'mx-2');
		},
		m(t, a) {
			V(t, e, a), i(e, s);
		},
		d(t) {
			t && r(e);
		}
	};
}
function Ge(l) {
	let e,
		s,
		t = l[6].name + '',
		a,
		o,
		_,
		m,
		v,
		c;
	function u() {
		return l[4](l[6]);
	}
	let f = l[10] !== l[0].length - 1 && Be();
	return {
		c() {
			(e = d('li')), (s = d('button')), (a = z(t)), (_ = $()), f && f.c(), (m = $()), this.h();
		},
		l(g) {
			e = h(g, 'LI', { class: !0 });
			var p = b(e);
			s = h(p, 'BUTTON', { 'aria-label': !0, class: !0 });
			var x = b(s);
			(a = F(x, t)), x.forEach(r), (_ = N(p)), f && f.l(p), (m = N(p)), p.forEach(r), this.h();
		},
		h() {
			n(s, 'aria-label', (o = l[6].name)),
				n(s, 'class', 'hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap'),
				R(s, 'bg-selected', l[1] === l[6].id && l[2] === 'movie'),
				n(e, 'class', 'flex');
		},
		m(g, p) {
			V(g, e, p),
				i(e, s),
				i(s, a),
				i(e, _),
				f && f.m(e, null),
				i(e, m),
				v || ((c = J(s, 'click', le(u))), (v = !0));
		},
		p(g, p) {
			(l = g),
				p & 1 && t !== (t = l[6].name + '') && Me(a, t),
				p & 1 && o !== (o = l[6].name) && n(s, 'aria-label', o),
				p & 7 && R(s, 'bg-selected', l[1] === l[6].id && l[2] === 'movie'),
				l[10] !== l[0].length - 1 ? f || ((f = Be()), f.c(), f.m(e, m)) : f && (f.d(1), (f = null));
		},
		d(g) {
			g && r(e), f && f.d(), (v = !1), c();
		}
	};
}
function qe(l) {
	let e, s;
	return {
		c() {
			(e = d('span')), (s = z('|')), this.h();
		},
		l(t) {
			e = h(t, 'SPAN', { class: !0 });
			var a = b(e);
			(s = F(a, '|')), a.forEach(r), this.h();
		},
		h() {
			n(e, 'class', 'mx-2');
		},
		m(t, a) {
			V(t, e, a), i(e, s);
		},
		d(t) {
			t && r(e);
		}
	};
}
function He(l) {
	let e,
		s,
		t = l[6].name + '',
		a,
		o,
		_,
		m,
		v;
	function c() {
		return l[5](l[6]);
	}
	let u = l[8] !== l[3].length - 1 && qe();
	return {
		c() {
			(e = d('li')), (s = d('button')), (a = z(t)), (o = $()), u && u.c(), (_ = $()), this.h();
		},
		l(f) {
			e = h(f, 'LI', { class: !0 });
			var g = b(e);
			s = h(g, 'BUTTON', { class: !0 });
			var p = b(s);
			(a = F(p, t)), p.forEach(r), (o = N(g)), u && u.l(g), (_ = N(g)), g.forEach(r), this.h();
		},
		h() {
			n(s, 'class', 'hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap'),
				R(s, 'bg-selected', l[1] === l[6].id && l[2] === 'tv'),
				n(e, 'class', 'flex');
		},
		m(f, g) {
			V(f, e, g),
				i(e, s),
				i(s, a),
				i(e, o),
				u && u.m(e, null),
				i(e, _),
				m || ((v = J(s, 'click', le(c))), (m = !0));
		},
		p(f, g) {
			(l = f),
				g & 8 && t !== (t = l[6].name + '') && Me(a, t),
				g & 14 && R(s, 'bg-selected', l[1] === l[6].id && l[2] === 'tv'),
				l[8] !== l[3].length - 1 ? u || ((u = qe()), u.c(), u.m(e, _)) : u && (u.d(1), (u = null));
		},
		d(f) {
			f && r(e), u && u.d(), (m = !1), v();
		}
	};
}
function at(l) {
	let e,
		s,
		t,
		a,
		o,
		_,
		m,
		v,
		c,
		u,
		f,
		g,
		p,
		x,
		k,
		y,
		j,
		O,
		L,
		A,
		M,
		B,
		G = l[0],
		P = [];
	for (let w = 0; w < G.length; w += 1) P[w] = Ge(Ue(l, G, w));
	let q = l[3],
		D = [];
	for (let w = 0; w < q.length; w += 1) D[w] = He(Oe(l, q, w));
	return {
		c() {
			(e = d('div')),
				(s = d('p')),
				(t = $()),
				(a = d('h4')),
				(o = d('span')),
				(_ = d('i')),
				(m = z('Movies')),
				(v = $()),
				(c = d('p')),
				(u = $()),
				(f = d('ul'));
			for (let w = 0; w < P.length; w += 1) P[w].c();
			(g = $()),
				(p = d('p')),
				(x = $()),
				(k = d('h4')),
				(y = d('span')),
				(j = d('i')),
				(O = z('Tv')),
				(L = $()),
				(A = d('p')),
				(M = $()),
				(B = d('ul'));
			for (let w = 0; w < D.length; w += 1) D[w].c();
			this.h();
		},
		l(w) {
			e = h(w, 'DIV', { class: !0 });
			var S = b(e);
			(s = h(S, 'P', { class: !0 })), b(s).forEach(r), (t = N(S)), (a = h(S, 'H4', { class: !0 }));
			var E = b(a);
			o = h(E, 'SPAN', { class: !0 });
			var H = b(o);
			(_ = h(H, 'I', { class: !0, 'aria-hidden': !0 })),
				b(_).forEach(r),
				H.forEach(r),
				(m = F(E, 'Movies')),
				E.forEach(r),
				(v = N(S)),
				(c = h(S, 'P', { class: !0 })),
				b(c).forEach(r),
				(u = N(S)),
				(f = h(S, 'UL', { class: !0 }));
			var Z = b(f);
			for (let T = 0; T < P.length; T += 1) P[T].l(Z);
			Z.forEach(r),
				(g = N(S)),
				(p = h(S, 'P', { class: !0 })),
				b(p).forEach(r),
				(x = N(S)),
				(k = h(S, 'H4', { class: !0 }));
			var ee = b(k);
			y = h(ee, 'SPAN', { class: !0 });
			var U = b(y);
			(j = h(U, 'I', { class: !0, 'aria-hidden': !0 })),
				b(j).forEach(r),
				U.forEach(r),
				(O = F(ee, 'Tv')),
				ee.forEach(r),
				(L = N(S)),
				(A = h(S, 'P', { class: !0 })),
				b(A).forEach(r),
				(M = N(S)),
				(B = h(S, 'UL', { class: !0 }));
			var I = b(B);
			for (let T = 0; T < D.length; T += 1) D[T].l(I);
			I.forEach(r), S.forEach(r), this.h();
		},
		h() {
			n(s, 'class', 'py-0.5 justify-center bg-skin-bg'),
				n(_, 'class', 'fa fa-video-camera'),
				n(_, 'aria-hidden', 'true'),
				n(o, 'class', 'mr-2'),
				n(a, 'class', 'uppercase items-center flex justify-center text-skin-base'),
				n(c, 'class', 'py-0.5 justify-center bg-skin-inverted'),
				n(f, 'class', 'flex flex-wrap justify-center'),
				n(p, 'class', 'py-0.5 justify-center bg-skin-bg'),
				n(j, 'class', 'fa fa-tv'),
				n(j, 'aria-hidden', 'true'),
				n(y, 'class', 'mr-2'),
				n(k, 'class', 'uppercase items-center flex justify-center text-skin-base'),
				n(A, 'class', 'py-0.5 justify-center text-skin-base'),
				n(B, 'class', 'flex flex-wrap justify-center'),
				n(e, 'class', 'bg-skin-primary w-full xl:w-96');
		},
		m(w, S) {
			V(w, e, S),
				i(e, s),
				i(e, t),
				i(e, a),
				i(a, o),
				i(o, _),
				i(a, m),
				i(e, v),
				i(e, c),
				i(e, u),
				i(e, f);
			for (let E = 0; E < P.length; E += 1) P[E].m(f, null);
			i(e, g),
				i(e, p),
				i(e, x),
				i(e, k),
				i(k, y),
				i(y, j),
				i(k, O),
				i(e, L),
				i(e, A),
				i(e, M),
				i(e, B);
			for (let E = 0; E < D.length; E += 1) D[E].m(B, null);
		},
		p(w, [S]) {
			if (S & 7) {
				G = w[0];
				let E;
				for (E = 0; E < G.length; E += 1) {
					const H = Ue(w, G, E);
					P[E] ? P[E].p(H, S) : ((P[E] = Ge(H)), P[E].c(), P[E].m(f, null));
				}
				for (; E < P.length; E += 1) P[E].d(1);
				P.length = G.length;
			}
			if (S & 14) {
				q = w[3];
				let E;
				for (E = 0; E < q.length; E += 1) {
					const H = Oe(w, q, E);
					D[E] ? D[E].p(H, S) : ((D[E] = He(H)), D[E].c(), D[E].m(B, null));
				}
				for (; E < D.length; E += 1) D[E].d(1);
				D.length = q.length;
			}
		},
		i: Q,
		o: Q,
		d(w) {
			w && r(e), Pe(P, w), Pe(D, w);
		}
	};
}
function nt(l, e, s) {
	let t, a, o, _;
	return (
		K(l, ve, (c) => s(0, (t = c))),
		K(l, _e, (c) => s(1, (a = c))),
		K(l, ce, (c) => s(2, (o = c))),
		K(l, ge, (c) => s(3, (_ = c))),
		[
			t,
			a,
			o,
			_,
			(c) => {
				C(_e, (a = c.id), a), ae(`/genre/movie/${c.id}`);
			},
			(c) => {
				C(_e, (a = c.id), a), ae(`/genre/tv/${c.id}`);
			}
		]
	);
}
class rt extends te {
	constructor(e) {
		super();
		se(this, e, nt, at, Y, {});
	}
}
function Re(l) {
	let e, s, t, a, o, _, m, v, c, u, f, g;
	return (
		(f = new rt({})),
		{
			c() {
				(e = d('div')),
					(s = d('div')),
					(t = d('button')),
					(a = d('span')),
					(o = d('i')),
					(_ = $()),
					(m = d('span')),
					(v = z('Genres')),
					(c = $()),
					(u = d('ul')),
					ne(f.$$.fragment),
					this.h();
			},
			l(p) {
				e = h(p, 'DIV', { class: !0 });
				var x = b(e);
				s = h(x, 'DIV', { class: !0 });
				var k = b(s);
				t = h(k, 'BUTTON', { 'aria-label': !0, class: !0 });
				var y = b(t);
				a = h(y, 'SPAN', {});
				var j = b(a);
				(o = h(j, 'I', { class: !0, 'aria-hidden': !0 })),
					b(o).forEach(r),
					j.forEach(r),
					(_ = N(y)),
					(m = h(y, 'SPAN', { class: !0 }));
				var O = b(m);
				(v = F(O, 'Genres')),
					O.forEach(r),
					y.forEach(r),
					(c = N(k)),
					(u = h(k, 'UL', { class: !0 }));
				var L = b(u);
				re(f.$$.fragment, L), L.forEach(r), k.forEach(r), x.forEach(r), this.h();
			},
			h() {
				n(o, 'class', 'fa fa-tag'),
					n(o, 'aria-hidden', 'true'),
					n(m, 'class', 'hidden xl:block mx-2'),
					n(t, 'aria-label', 'Genres'),
					n(
						t,
						'class',
						'text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected'
					),
					n(
						u,
						'class',
						'rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base pt-4 group-hover:block'
					),
					n(s, 'class', 'group inline-block relative z-50'),
					n(e, 'class', 'pl-6 xl:pl-8 ');
			},
			m(p, x) {
				V(p, e, x),
					i(e, s),
					i(s, t),
					i(t, a),
					i(a, o),
					i(t, _),
					i(t, m),
					i(m, v),
					i(s, c),
					i(s, u),
					ie(f, u, null),
					(g = !0);
			},
			i(p) {
				g || (W(f.$$.fragment, p), (g = !0));
			},
			o(p) {
				X(f.$$.fragment, p), (g = !1);
			},
			d(p) {
				p && r(e), oe(f);
			}
		}
	);
}
function it(l) {
	let e,
		s,
		t,
		a,
		o,
		_,
		m,
		v,
		c,
		u,
		f,
		g,
		p,
		x,
		k,
		y,
		j,
		O,
		L,
		A,
		M,
		B,
		G,
		P,
		q,
		D,
		w,
		S = l[1],
		E,
		H,
		Z,
		ee,
		U = Re();
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				(t = d('button')),
				(a = d('span')),
				(o = d('i')),
				(_ = $()),
				(m = d('span')),
				(v = z('Movies')),
				(c = $()),
				(u = d('div')),
				(f = d('div')),
				(g = d('button')),
				(p = d('span')),
				(x = d('i')),
				(k = $()),
				(y = d('span')),
				(j = z('Tv')),
				(O = $()),
				(L = d('div')),
				(A = d('div')),
				(M = d('button')),
				(B = d('span')),
				(G = d('i')),
				(P = $()),
				(q = d('span')),
				(D = z('People')),
				(w = $()),
				U.c(),
				(E = De()),
				this.h();
		},
		l(I) {
			e = h(I, 'DIV', { class: !0 });
			var T = b(e);
			s = h(T, 'DIV', { class: !0 });
			var be = b(s);
			t = h(be, 'BUTTON', { 'aria-label': !0, class: !0 });
			var fe = b(t);
			a = h(fe, 'SPAN', {});
			var ke = b(a);
			(o = h(ke, 'I', { class: !0, 'aria-hidden': !0 })),
				b(o).forEach(r),
				ke.forEach(r),
				(_ = N(fe)),
				(m = h(fe, 'SPAN', { class: !0 }));
			var Ee = b(m);
			(v = F(Ee, 'Movies')),
				Ee.forEach(r),
				fe.forEach(r),
				be.forEach(r),
				T.forEach(r),
				(c = N(I)),
				(u = h(I, 'DIV', { class: !0 }));
			var ye = b(u);
			f = h(ye, 'DIV', { class: !0 });
			var xe = b(f);
			g = h(xe, 'BUTTON', { 'aria-label': !0, class: !0 });
			var de = b(g);
			p = h(de, 'SPAN', {});
			var we = b(p);
			(x = h(we, 'I', { class: !0, 'aria-hidden': !0 })),
				b(x).forEach(r),
				we.forEach(r),
				(k = N(de)),
				(y = h(de, 'SPAN', { class: !0 }));
			var Ie = b(y);
			(j = F(Ie, 'Tv')),
				Ie.forEach(r),
				de.forEach(r),
				xe.forEach(r),
				ye.forEach(r),
				(O = N(I)),
				(L = h(I, 'DIV', { class: !0 }));
			var Se = b(L);
			A = h(Se, 'DIV', { class: !0 });
			var Te = b(A);
			M = h(Te, 'BUTTON', { 'aria-label': !0, class: !0 });
			var he = b(M);
			B = h(he, 'SPAN', {});
			var $e = b(B);
			(G = h($e, 'I', { class: !0, 'aria-hidden': !0 })),
				b(G).forEach(r),
				$e.forEach(r),
				(P = N(he)),
				(q = h(he, 'SPAN', { class: !0 }));
			var Ne = b(q);
			(D = F(Ne, 'People')),
				Ne.forEach(r),
				he.forEach(r),
				Te.forEach(r),
				Se.forEach(r),
				(w = N(I)),
				U.l(I),
				(E = De()),
				this.h();
		},
		h() {
			n(o, 'class', 'fa fa-video-camera'),
				n(o, 'aria-hidden', 'true'),
				n(m, 'class', 'hidden xl:block mx-2'),
				n(t, 'aria-label', 'Movies'),
				n(
					t,
					'class',
					'text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected'
				),
				R(t, 'text-skin-selected', l[0] === 'movie'),
				n(s, 'class', 'group inline-block relative z-50'),
				n(e, 'class', 'pl-6 xl:pl-8 '),
				n(x, 'class', 'fa fa-television'),
				n(x, 'aria-hidden', 'true'),
				n(y, 'class', 'hidden xl:block mx-2'),
				n(g, 'aria-label', 'TV Shows'),
				n(
					g,
					'class',
					'text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected'
				),
				R(g, 'text-skin-selected', l[0] === 'tv'),
				n(f, 'class', 'group inline-block relative z-50'),
				n(u, 'class', 'pl-6 xl:pl-8 '),
				n(G, 'class', 'fa fa-user'),
				n(G, 'aria-hidden', 'true'),
				n(q, 'class', 'hidden xl:block mx-2'),
				n(M, 'aria-label', 'People'),
				n(
					M,
					'class',
					'text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected'
				),
				R(M, 'text-skin-selected', l[0] === 'person'),
				n(A, 'class', 'group inline-block relative z-50'),
				n(L, 'class', 'pl-6 xl:pl-8 ');
		},
		m(I, T) {
			V(I, e, T),
				i(e, s),
				i(s, t),
				i(t, a),
				i(a, o),
				i(t, _),
				i(t, m),
				i(m, v),
				V(I, c, T),
				V(I, u, T),
				i(u, f),
				i(f, g),
				i(g, p),
				i(p, x),
				i(g, k),
				i(g, y),
				i(y, j),
				V(I, O, T),
				V(I, L, T),
				i(L, A),
				i(A, M),
				i(M, B),
				i(B, G),
				i(M, P),
				i(M, q),
				i(q, D),
				V(I, w, T),
				U.m(I, T),
				V(I, E, T),
				(H = !0),
				Z ||
					((ee = [J(t, 'click', le(l[2])), J(g, 'click', le(l[3])), J(M, 'click', le(l[4]))]),
					(Z = !0));
		},
		p(I, [T]) {
			T & 1 && R(t, 'text-skin-selected', I[0] === 'movie'),
				T & 1 && R(g, 'text-skin-selected', I[0] === 'tv'),
				T & 1 && R(M, 'text-skin-selected', I[0] === 'person'),
				T & 2 &&
					Y(S, (S = I[1])) &&
					(Ce(), X(U, 1, 1, Q), Ke(), (U = Re()), U.c(), W(U), U.m(E.parentNode, E));
		},
		i(I) {
			H || (W(U), (H = !0));
		},
		o(I) {
			X(U), (H = !1);
		},
		d(I) {
			I && r(e),
				I && r(c),
				I && r(u),
				I && r(O),
				I && r(L),
				I && r(w),
				I && r(E),
				U.d(I),
				(Z = !1),
				Ae(ee);
		}
	};
}
function ot(l, e, s) {
	let t, a, o;
	K(l, ce, (c) => s(0, (t = c))), K(l, pe, (c) => s(5, (a = c))), K(l, _e, (c) => s(1, (o = c)));
	function _() {
		t !== 'movie' && (C(ce, (t = 'movie'), t), C(pe, (a = 1), a), ae('/'));
	}
	function m() {
		t !== 'tv' && (C(pe, (a = 1), a), C(ce, (t = 'tv'), t), ae('/'));
	}
	function v() {
		t !== 'person' && (C(pe, (a = 1), a), C(ce, (t = 'person'), t), ae('/'));
	}
	return [t, o, _, m, v];
}
class ct extends te {
	constructor(e) {
		super();
		se(this, e, ot, it, Y, {});
	}
}
function ut() {
	const { set: l, subscribe: e } = ze('');
	return {
		subscribe: e,
		update: (s) => me(s),
		get: (s) => me(s),
		set: (s) => {
			const t = document.querySelector('html').classList.contains('dark') ? 'dark' : 'light';
			l(s),
				document.querySelector('html').classList.replace(t, s),
				localStorage.setItem('theme', s);
		},
		init: () => {
			if (
				!localStorage.getItem('theme') &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			)
				l('dark'),
					document.querySelector('html').classList.add('dark'),
					localStorage.setItem('theme', 'dark');
			else {
				const s = localStorage.getItem('theme') || 'light';
				document.querySelector('html').classList.add(s), l(localStorage.getItem('theme'));
			}
		},
		reset: () => {
			l(void 0), localStorage.removeItem('theme');
		}
	};
}
const ue = ut();
function ft(l) {
	let e, s, t;
	return {
		c() {
			(e = d('div')), (s = d('img')), this.h();
		},
		l(a) {
			e = h(a, 'DIV', { class: !0 });
			var o = b(e);
			(s = h(o, 'IMG', { src: !0, alt: !0 })), o.forEach(r), this.h();
		},
		h() {
			Ve(s.src, (t = '/icons8-moon-60.png')) || n(s, 'src', t),
				n(s, 'alt', 'light mode'),
				n(e, 'class', 'h-6 w-6');
		},
		m(a, o) {
			V(a, e, o), i(e, s);
		},
		d(a) {
			a && r(e);
		}
	};
}
function dt(l) {
	let e, s;
	return {
		c() {
			(e = d('img')), this.h();
		},
		l(t) {
			(e = h(t, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			n(e, 'class', 'h-8 w-8'),
				Ve(e.src, (s = '/icons8-sun-48.png')) || n(e, 'src', s),
				n(e, 'alt', 'profile');
		},
		m(t, a) {
			V(t, e, a);
		},
		d(t) {
			t && r(e);
		}
	};
}
function ht(l) {
	let e, s, t, a;
	function o(v, c) {
		return v[0] === 'dark' ? dt : ft;
	}
	let _ = o(l),
		m = _(l);
	return {
		c() {
			(e = d('button')), (s = d('div')), m.c(), this.h();
		},
		l(v) {
			e = h(v, 'BUTTON', { class: !0 });
			var c = b(e);
			s = h(c, 'DIV', { class: !0, 'aria-label': !0 });
			var u = b(s);
			m.l(u), u.forEach(r), c.forEach(r), this.h();
		},
		h() {
			n(
				s,
				'class',
				'text-skin-base mr-2 flex text-lg px-3 py-2 rounded-lg border border-transparent focus:outline-none'
			),
				n(s, 'aria-label', 'Toggle Light and Dark mode'),
				n(e, 'class', 'text-skin-base');
		},
		m(v, c) {
			V(v, e, c), i(e, s), m.m(s, null), t || ((a = J(e, 'click', l[1])), (t = !0));
		},
		p(v, [c]) {
			_ !== (_ = o(v)) && (m.d(1), (m = _(v)), m && (m.c(), m.m(s, null)));
		},
		i: Q,
		o: Q,
		d(v) {
			v && r(e), m.d(), (t = !1), a();
		}
	};
}
function mt(l, e, s) {
	let t;
	return (
		K(l, ue, (o) => s(0, (t = o))),
		[
			t,
			() => {
				t === 'dark' ? C(ue, (t = 'light'), t) : C(ue, (t = 'dark'), t);
			}
		]
	);
}
class _t extends te {
	constructor(e) {
		super();
		se(this, e, mt, ht, Y, {});
	}
}
function pt(l) {
	let e, s, t, a, o, _, m, v, c, u, f, g;
	return (
		(m = new ct({})),
		(c = new _t({})),
		(f = new lt({})),
		{
			c() {
				(e = d('header')),
					(s = d('div')),
					(t = d('div')),
					(a = d('a')),
					(o = d('i')),
					(_ = $()),
					ne(m.$$.fragment),
					(v = $()),
					ne(c.$$.fragment),
					(u = $()),
					ne(f.$$.fragment),
					this.h();
			},
			l(p) {
				e = h(p, 'HEADER', { class: !0 });
				var x = b(e);
				s = h(x, 'DIV', { class: !0 });
				var k = b(s);
				t = h(k, 'DIV', { class: !0 });
				var y = b(t);
				a = h(y, 'A', { class: !0, href: !0 });
				var j = b(a);
				(o = h(j, 'I', { class: !0 })),
					b(o).forEach(r),
					j.forEach(r),
					(_ = N(y)),
					re(m.$$.fragment, y),
					y.forEach(r),
					(v = N(k)),
					re(c.$$.fragment, k),
					(u = N(k)),
					re(f.$$.fragment, k),
					k.forEach(r),
					x.forEach(r),
					this.h();
			},
			h() {
				n(o, 'class', 'fa fa-home'),
					n(a, 'class', 'text-3xl text-skin-base hover:text-skin-selected'),
					n(a, 'href', '/'),
					n(t, 'class', 'flex flex-row items-center'),
					n(
						s,
						'class',
						'max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center h-10'
					),
					n(e, 'class', 'bg-skin-secondary');
			},
			m(p, x) {
				V(p, e, x),
					i(e, s),
					i(s, t),
					i(t, a),
					i(a, o),
					i(t, _),
					ie(m, t, null),
					i(s, v),
					ie(c, s, null),
					i(s, u),
					ie(f, s, null),
					(g = !0);
			},
			p: Q,
			i(p) {
				g || (W(m.$$.fragment, p), W(c.$$.fragment, p), W(f.$$.fragment, p), (g = !0));
			},
			o(p) {
				X(m.$$.fragment, p), X(c.$$.fragment, p), X(f.$$.fragment, p), (g = !1);
			},
			d(p) {
				p && r(e), oe(m), oe(c), oe(f);
			}
		}
	);
}
class vt extends te {
	constructor(e) {
		super();
		se(this, e, null, pt, Y, {});
	}
}
function gt(l) {
	let e, s, t, a, o, _, m, v, c, u, f, g;
	c = new vt({});
	const p = l[4].default,
		x = Fe(p, l, l[3], null);
	return {
		c() {
			(e = d('link')),
				(s = d('link')),
				(t = d('link')),
				(a = d('meta')),
				(o = d('meta')),
				(_ = d('meta')),
				(m = $()),
				(v = d('main')),
				ne(c.$$.fragment),
				(u = $()),
				(f = d('section')),
				x && x.c(),
				this.h();
		},
		l(k) {
			const y = Je('[data-svelte="svelte-wejjgj"]', document.head);
			(e = h(y, 'LINK', { rel: !0, href: !0 })),
				(s = h(y, 'LINK', { rel: !0, href: !0 })),
				(t = h(y, 'LINK', { rel: !0, href: !0 })),
				(a = h(y, 'META', { name: !0, content: !0 })),
				(o = h(y, 'META', { name: !0, content: !0 })),
				(_ = h(y, 'META', { name: !0, content: !0 })),
				y.forEach(r),
				(m = N(k)),
				(v = h(k, 'MAIN', { class: !0 }));
			var j = b(v);
			re(c.$$.fragment, j), (u = N(j)), (f = h(j, 'SECTION', { class: !0 }));
			var O = b(f);
			x && x.l(O), O.forEach(r), j.forEach(r), this.h();
		},
		h() {
			n(e, 'rel', 'preconnect'),
				n(e, 'href', 'https://fonts.gstatic.com'),
				n(s, 'rel', 'stylesheet'),
				n(
					s,
					'href',
					'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap'
				),
				n(t, 'rel', 'stylesheet'),
				n(
					t,
					'href',
					'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
				),
				(document.title = 'TMDB on Sveltekit'),
				n(a, 'name', 'description'),
				n(a, 'content', 'TMDB movie & tv database'),
				n(o, 'name', 'keywords'),
				n(o, 'content', 'HTML, CSS, JavaScript, svelte'),
				n(_, 'name', 'author'),
				n(_, 'content', 'Wayne Morgan'),
				n(f, 'class', 'max-w-7xl mx-auto'),
				n(v, 'class', 'bg-skin-bg min-h-screen'),
				R(v, '$theme', l[0]);
		},
		m(k, y) {
			i(document.head, e),
				i(document.head, s),
				i(document.head, t),
				i(document.head, a),
				i(document.head, o),
				i(document.head, _),
				V(k, m, y),
				V(k, v, y),
				ie(c, v, null),
				i(v, u),
				i(v, f),
				x && x.m(f, null),
				(g = !0);
		},
		p(k, [y]) {
			x && x.p && (!g || y & 8) && Qe(x, p, k, k[3], g ? Xe(p, k[3], y, null) : We(k[3]), null),
				y & 1 && R(v, '$theme', k[0]);
		},
		i(k) {
			g || (W(c.$$.fragment, k), W(x, k), (g = !0));
		},
		o(k) {
			X(c.$$.fragment, k), X(x, k), (g = !1);
		},
		d(k) {
			r(e), r(s), r(t), r(a), r(o), r(_), k && r(m), k && r(v), oe(c), x && x.d(k);
		}
	};
}
var bt = function (l, e, s, t) {
	function a(o) {
		return o instanceof s
			? o
			: new s(function (_) {
					_(o);
			  });
	}
	return new (s || (s = Promise))(function (o, _) {
		function m(u) {
			try {
				c(t.next(u));
			} catch (f) {
				_(f);
			}
		}
		function v(u) {
			try {
				c(t.throw(u));
			} catch (f) {
				_(f);
			}
		}
		function c(u) {
			u.done ? o(u.value) : a(u.value).then(m, v);
		}
		c((t = t.apply(l, e || [])).next());
	});
};
const kt = `https://api.themoviedb.org/3/genre/movie/list?api_key=${me(Le)}&language-en-GB`,
	Et = `https://api.themoviedb.org/3/genre/tv/list?api_key=${me(Le)}&language-en-GB`,
	St = ({ fetch: l }) =>
		bt(void 0, void 0, void 0, function* () {
			let t = (yield (yield l(kt)).json()).genres;
			return { props: { tv_genre: (yield (yield l(Et)).json()).genres, movie_genre: t } };
		});
function yt(l, e, s) {
	let t, a, o;
	K(l, ve, (u) => s(5, (t = u))), K(l, ge, (u) => s(6, (a = u))), K(l, ue, (u) => s(0, (o = u)));
	let { $$slots: _ = {}, $$scope: m } = e;
	this && this.__awaiter;
	let { tv_genre: v } = e,
		{ movie_genre: c } = e;
	return (
		ue.init(),
		C(ge, (a = v), a),
		C(ve, (t = c), t),
		(l.$$set = (u) => {
			'tv_genre' in u && s(1, (v = u.tv_genre)),
				'movie_genre' in u && s(2, (c = u.movie_genre)),
				'$$scope' in u && s(3, (m = u.$$scope));
		}),
		[o, v, c, m, _]
	);
}
class Tt extends te {
	constructor(e) {
		super();
		se(this, e, yt, gt, Y, { tv_genre: 1, movie_genre: 2 });
	}
}
export { Tt as default, St as load };
