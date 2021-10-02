import {
	S as ze,
	i as Je,
	s as Qe,
	l as K,
	f as S,
	r as ye,
	u as x,
	w as $e,
	x as D,
	d,
	L as Oe,
	Y as st,
	j as re,
	m as ae,
	o as se,
	H as Ie,
	v as ne,
	e as v,
	t as V,
	k as N,
	c as h,
	a as g,
	g as j,
	n as A,
	b as m,
	D as u,
	h as F,
	O as Re,
	_ as He,
	K as nt,
	F as ot,
	N as We,
	M as ft
} from '../../chunks/vendor-8fe9a59e.js';
import { a as Ue, A as Xe } from '../../chunks/store-892411d9.js';
import { S as Ze, P as ct } from '../../chunks/Spinner-b4526be0.js';
import { C as ut, M as _t } from '../../chunks/Cast-72e210fe.js';
import { p as dt } from '../../chunks/stores-d4b77a7d.js';
function et(a, e, t) {
	const l = a.slice();
	return (l[7] = e[t].id), (l[8] = e[t].name), (l[10] = t), l;
}
function mt(a) {
	let e, t;
	return (
		(e = new Ze({})),
		{
			c() {
				re(e.$$.fragment);
			},
			l(l) {
				ae(e.$$.fragment, l);
			},
			m(l, r) {
				se(e, l, r), (t = !0);
			},
			p: Ie,
			i(l) {
				t || (D(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				x(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ne(e, l);
			}
		}
	);
}
function vt(a) {
	let e,
		t,
		l,
		r,
		s,
		n,
		_,
		i,
		c,
		f,
		b = a[0].title + '',
		U,
		q,
		P,
		L = (a[0].release_date ? a[0].release_date.substring(0, 4) : '') + '',
		z,
		Y,
		E,
		M,
		oe = (a[0].release_date ? a[0].release_date : 'No Date Available') + '',
		_e,
		Ve,
		J,
		je,
		Ne,
		Q,
		Ae,
		Se,
		O,
		de,
		xe,
		H,
		R,
		fe = a[0].tagline + '',
		me,
		Me,
		W,
		Pe,
		Te,
		X,
		ce = a[0].overview + '',
		ve,
		he,
		G,
		pe,
		Z,
		T,
		ee = a[0].genres,
		$ = [];
	for (let o = 0; o < ee.length; o += 1) $[o] = lt(et(a, ee, o));
	let I = 'runtime' in a[0] && it(a),
		k = a[0].vote_average && rt(a);
	function qe(o, p) {
		return o[1] !== 999 ? pt : ht;
	}
	let ge = qe(a),
		C = ge(a);
	G = new ut({ props: { movie_id: a[2] } });
	let w = a[1] !== 999 && at(a);
	return {
		c() {
			(e = v('section')),
				(t = v('div')),
				(l = v('div')),
				(r = v('div')),
				(s = v('img')),
				(_ = N()),
				(i = v('div')),
				(c = v('div')),
				(f = v('h4')),
				(U = V(b)),
				(q = N()),
				(P = v('span')),
				(z = V(L)),
				(Y = N()),
				(E = v('div')),
				(M = v('div')),
				(_e = V(oe)),
				(Ve = N()),
				(J = v('span')),
				(je = V('\u2022')),
				(Ne = N()),
				(Q = v('div'));
			for (let o = 0; o < $.length; o += 1) $[o].c();
			(Ae = N()),
				I && I.c(),
				(Se = N()),
				(O = v('div')),
				k && k.c(),
				(de = N()),
				C.c(),
				(xe = N()),
				(H = v('div')),
				(R = v('div')),
				(me = V(fe)),
				(Me = N()),
				(W = v('h4')),
				(Pe = V('Overview')),
				(Te = N()),
				(X = v('div')),
				(ve = V(ce)),
				(he = N()),
				re(G.$$.fragment),
				(pe = N()),
				w && w.c(),
				(Z = K()),
				this.h();
		},
		l(o) {
			e = h(o, 'SECTION', { id: !0, class: !0, style: !0 });
			var p = g(e);
			t = h(p, 'DIV', { class: !0, style: !0 });
			var B = g(t);
			l = h(B, 'DIV', { class: !0 });
			var y = g(l);
			r = h(y, 'DIV', { class: !0 });
			var ue = g(r);
			(s = h(ue, 'IMG', { class: !0, src: !0, alt: !0 })),
				ue.forEach(d),
				(_ = A(y)),
				(i = h(y, 'DIV', { class: !0 }));
			var te = g(i);
			c = h(te, 'DIV', { class: !0 });
			var be = g(c);
			f = h(be, 'H4', { class: !0 });
			var ke = g(f);
			(U = j(ke, b)), (q = A(ke)), (P = h(ke, 'SPAN', { class: !0 }));
			var Be = g(P);
			(z = j(Be, L)), Be.forEach(d), ke.forEach(d), (Y = A(be)), (E = h(be, 'DIV', { class: !0 }));
			var le = g(E);
			M = h(le, 'DIV', { class: !0 });
			var we = g(M);
			(_e = j(we, oe)), (Ve = A(we)), (J = h(we, 'SPAN', { class: !0 }));
			var Ge = g(J);
			(je = j(Ge, '\u2022')), Ge.forEach(d), we.forEach(d), (Ne = A(le)), (Q = h(le, 'DIV', {}));
			var Ke = g(Q);
			for (let Ce = 0; Ce < $.length; Ce += 1) $[Ce].l(Ke);
			Ke.forEach(d),
				(Ae = A(le)),
				I && I.l(le),
				le.forEach(d),
				be.forEach(d),
				(Se = A(te)),
				(O = h(te, 'DIV', { class: !0 }));
			var Ee = g(O);
			k && k.l(Ee),
				(de = A(Ee)),
				C.l(Ee),
				Ee.forEach(d),
				(xe = A(te)),
				(H = h(te, 'DIV', { class: !0 }));
			var ie = g(H);
			R = h(ie, 'DIV', { class: !0 });
			var Fe = g(R);
			(me = j(Fe, fe)), Fe.forEach(d), (Me = A(ie)), (W = h(ie, 'H4', { class: !0 }));
			var Le = g(W);
			(Pe = j(Le, 'Overview')), Le.forEach(d), (Te = A(ie)), (X = h(ie, 'DIV', { class: !0 }));
			var Ye = g(X);
			(ve = j(Ye, ce)),
				Ye.forEach(d),
				ie.forEach(d),
				te.forEach(d),
				y.forEach(d),
				B.forEach(d),
				p.forEach(d),
				(he = A(o)),
				ae(G.$$.fragment, o),
				(pe = A(o)),
				w && w.l(o),
				(Z = K()),
				this.h();
		},
		h() {
			m(s, 'class', 'h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto'),
				Re(s.src, (n = a[0].poster_path ? De + 'w500' + a[0].poster_path : '/default.jpg')) ||
					m(s, 'src', n),
				m(s, 'alt', 'movie poster'),
				m(r, 'class', 'col-start-1 col-end-2 '),
				m(P, 'class', 'text-lg xl:text-4xl text-skin-inverted'),
				m(f, 'class', 'w-full xl:text-4xl'),
				m(J, 'class', 'hidden xl:px-2 xl:inline'),
				m(M, 'class', 'pl-0'),
				m(E, 'class', 'xl:flex'),
				m(c, 'class', 'mt-6 xl:mt-0 w-full mb-6 flex flex-wrap'),
				m(O, 'class', 'mb-5 w-full h-16 flex items-center justify-start'),
				m(R, 'class', 'text-lg italic opacity-70'),
				m(W, 'class', 'my-2 w-full font-semibold'),
				m(X, 'class', 'overview-details'),
				m(H, 'class', 'w-full'),
				m(i, 'class', 'xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10'),
				m(l, 'class', 'grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl'),
				m(t, 'class', 'bg-gradient-to-r xl:rounded-2xl'),
				He(
					t,
					'background-image',
					'linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)'
				),
				m(e, 'id', 'media'),
				m(
					e,
					'class',
					'text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl'
				),
				He(e, 'background-image', 'url(' + De + 'original/' + a[0].backdrop_path + ')');
		},
		m(o, p) {
			S(o, e, p),
				u(e, t),
				u(t, l),
				u(l, r),
				u(r, s),
				u(l, _),
				u(l, i),
				u(i, c),
				u(c, f),
				u(f, U),
				u(f, q),
				u(f, P),
				u(P, z),
				u(c, Y),
				u(c, E),
				u(E, M),
				u(M, _e),
				u(M, Ve),
				u(M, J),
				u(J, je),
				u(E, Ne),
				u(E, Q);
			for (let B = 0; B < $.length; B += 1) $[B].m(Q, null);
			u(E, Ae),
				I && I.m(E, null),
				u(i, Se),
				u(i, O),
				k && k.m(O, null),
				u(O, de),
				C.m(O, null),
				u(i, xe),
				u(i, H),
				u(H, R),
				u(R, me),
				u(H, Me),
				u(H, W),
				u(W, Pe),
				u(H, Te),
				u(H, X),
				u(X, ve),
				S(o, he, p),
				se(G, o, p),
				S(o, pe, p),
				w && w.m(o, p),
				S(o, Z, p),
				(T = !0);
		},
		p(o, p) {
			if (
				((!T ||
					(p & 1 &&
						!Re(
							s.src,
							(n = o[0].poster_path ? De + 'w500' + o[0].poster_path : '/default.jpg')
						))) &&
					m(s, 'src', n),
				(!T || p & 1) && b !== (b = o[0].title + '') && F(U, b),
				(!T || p & 1) &&
					L !== (L = (o[0].release_date ? o[0].release_date.substring(0, 4) : '') + '') &&
					F(z, L),
				(!T || p & 1) &&
					oe !== (oe = (o[0].release_date ? o[0].release_date : 'No Date Available') + '') &&
					F(_e, oe),
				p & 17)
			) {
				ee = o[0].genres;
				let y;
				for (y = 0; y < ee.length; y += 1) {
					const ue = et(o, ee, y);
					$[y] ? $[y].p(ue, p) : (($[y] = lt(ue)), $[y].c(), $[y].m(Q, null));
				}
				for (; y < $.length; y += 1) $[y].d(1);
				$.length = ee.length;
			}
			'runtime' in o[0]
				? I
					? I.p(o, p)
					: ((I = it(o)), I.c(), I.m(E, null))
				: I && (I.d(1), (I = null)),
				o[0].vote_average
					? k
						? (k.p(o, p), p & 1 && D(k, 1))
						: ((k = rt(o)), k.c(), D(k, 1), k.m(O, de))
					: k &&
					  (ye(),
					  x(k, 1, 1, () => {
							k = null;
					  }),
					  $e()),
				ge === (ge = qe(o)) && C ? C.p(o, p) : (C.d(1), (C = ge(o)), C && (C.c(), C.m(O, null))),
				(!T || p & 1) && fe !== (fe = o[0].tagline + '') && F(me, fe),
				(!T || p & 1) && ce !== (ce = o[0].overview + '') && F(ve, ce),
				(!T || p & 1) &&
					He(e, 'background-image', 'url(' + De + 'original/' + o[0].backdrop_path + ')');
			const B = {};
			p & 4 && (B.movie_id = o[2]),
				G.$set(B),
				o[1] !== 999
					? w
						? (w.p(o, p), p & 2 && D(w, 1))
						: ((w = at(o)), w.c(), D(w, 1), w.m(Z.parentNode, Z))
					: w &&
					  (ye(),
					  x(w, 1, 1, () => {
							w = null;
					  }),
					  $e());
		},
		i(o) {
			T || (D(k), D(G.$$.fragment, o), D(w), (T = !0));
		},
		o(o) {
			x(k), x(G.$$.fragment, o), x(w), (T = !1);
		},
		d(o) {
			o && d(e),
				nt($, o),
				I && I.d(),
				k && k.d(),
				C.d(),
				o && d(he),
				ne(G, o),
				o && d(pe),
				w && w.d(o),
				o && d(Z);
		}
	};
}
function tt(a) {
	let e, t;
	return {
		c() {
			(e = v('span')), (t = V('|')), this.h();
		},
		l(l) {
			e = h(l, 'SPAN', { class: !0 });
			var r = g(e);
			(t = j(r, '|')), r.forEach(d), this.h();
		},
		h() {
			m(e, 'class', 'mx-2');
		},
		m(l, r) {
			S(l, e, r), u(e, t);
		},
		d(l) {
			l && d(e);
		}
	};
}
function lt(a) {
	let e,
		t = a[8] + '',
		l,
		r,
		s,
		n,
		_ = a[10] !== a[0].genres.length - 1 && tt();
	return {
		c() {
			(e = v('a')), (l = V(t)), (s = N()), _ && _.c(), (n = K()), this.h();
		},
		l(i) {
			e = h(i, 'A', { class: !0, href: !0 });
			var c = g(e);
			(l = j(c, t)), c.forEach(d), (s = A(i)), _ && _.l(i), (n = K()), this.h();
		},
		h() {
			m(e, 'class', 'hover:text-skin-selected'), m(e, 'href', (r = '/genre/' + a[4] + '/' + a[7]));
		},
		m(i, c) {
			S(i, e, c), u(e, l), S(i, s, c), _ && _.m(i, c), S(i, n, c);
		},
		p(i, c) {
			c & 1 && t !== (t = i[8] + '') && F(l, t),
				c & 17 && r !== (r = '/genre/' + i[4] + '/' + i[7]) && m(e, 'href', r),
				i[10] !== i[0].genres.length - 1
					? _ || ((_ = tt()), _.c(), _.m(n.parentNode, n))
					: _ && (_.d(1), (_ = null));
		},
		d(i) {
			i && d(e), i && d(s), _ && _.d(i), i && d(n);
		}
	};
}
function it(a) {
	let e,
		t,
		l,
		r = (a[0].runtime - (a[0].runtime % 60)) / 60 + '',
		s,
		n,
		_ = (a[0].runtime % 60) + '',
		i,
		c;
	return {
		c() {
			(e = v('div')),
				(t = v('span')),
				(l = V('\u2022')),
				(s = V(r)),
				(n = V('h ')),
				(i = V(_)),
				(c = V('m')),
				this.h();
		},
		l(f) {
			e = h(f, 'DIV', { class: !0 });
			var b = g(e);
			t = h(b, 'SPAN', { class: !0 });
			var U = g(t);
			(l = j(U, '\u2022')),
				U.forEach(d),
				(s = j(b, r)),
				(n = j(b, 'h ')),
				(i = j(b, _)),
				(c = j(b, 'm')),
				b.forEach(d),
				this.h();
		},
		h() {
			m(t, 'class', 'hidden xl:px-2 xl:inline'), m(e, 'class', 'duration');
		},
		m(f, b) {
			S(f, e, b), u(e, t), u(t, l), u(e, s), u(e, n), u(e, i), u(e, c);
		},
		p(f, b) {
			b & 1 && r !== (r = (f[0].runtime - (f[0].runtime % 60)) / 60 + '') && F(s, r),
				b & 1 && _ !== (_ = (f[0].runtime % 60) + '') && F(i, _);
		},
		d(f) {
			f && d(e);
		}
	};
}
function rt(a) {
	let e, t, l;
	return (
		(t = new ct({ props: { progress: a[0].vote_average } })),
		{
			c() {
				(e = v('div')), re(t.$$.fragment), this.h();
			},
			l(r) {
				e = h(r, 'DIV', { class: !0 });
				var s = g(e);
				ae(t.$$.fragment, s), s.forEach(d), this.h();
			},
			h() {
				m(
					e,
					'class',
					'bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60'
				);
			},
			m(r, s) {
				S(r, e, s), se(t, e, null), (l = !0);
			},
			p(r, s) {
				const n = {};
				s & 1 && (n.progress = r[0].vote_average), t.$set(n);
			},
			i(r) {
				l || (D(t.$$.fragment, r), (l = !0));
			},
			o(r) {
				x(t.$$.fragment, r), (l = !1);
			},
			d(r) {
				r && d(e), ne(t);
			}
		}
	);
}
function ht(a) {
	let e, t, l;
	return {
		c() {
			(e = v('div')), (t = v('p')), (l = V('No Trailer Available')), this.h();
		},
		l(r) {
			e = h(r, 'DIV', { class: !0 });
			var s = g(e);
			t = h(s, 'P', { class: !0 });
			var n = g(t);
			(l = j(n, 'No Trailer Available')), n.forEach(d), s.forEach(d), this.h();
		},
		h() {
			m(t, 'class', 'flex justify-center ml-4'), m(e, 'class', 'flex pl-5');
		},
		m(r, s) {
			S(r, e, s), u(e, t), u(t, l);
		},
		p: Ie,
		d(r) {
			r && d(e);
		}
	};
}
function pt(a) {
	let e, t, l, r, s, n, _;
	return {
		c() {
			(e = v('div')), (t = v('i')), (l = N()), (r = v('p')), (s = V('Play Trailer')), this.h();
		},
		l(i) {
			e = h(i, 'DIV', { class: !0 });
			var c = g(e);
			(t = h(c, 'I', { class: !0, 'aria-hidden': !0 })),
				g(t).forEach(d),
				(l = A(c)),
				(r = h(c, 'P', { class: !0 }));
			var f = g(r);
			(s = j(f, 'Play Trailer')), f.forEach(d), c.forEach(d), this.h();
		},
		h() {
			m(t, 'class', 'flex items-center fa fa-play fa-2x'),
				m(t, 'aria-hidden', 'true'),
				m(r, 'class', 'flex justify-center ml-4 text-2xl items-center'),
				m(e, 'class', 'transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80');
		},
		m(i, c) {
			S(i, e, c), u(e, t), u(e, l), u(e, r), u(r, s), n || ((_ = ot(e, 'click', a[5])), (n = !0));
		},
		p: Ie,
		d(i) {
			i && d(e), (n = !1), _();
		}
	};
}
function at(a) {
	let e,
		t,
		l = { trailer_id: a[1] };
	return (
		(e = new _t({ props: l })),
		a[6](e),
		{
			c() {
				re(e.$$.fragment);
			},
			l(r) {
				ae(e.$$.fragment, r);
			},
			m(r, s) {
				se(e, r, s), (t = !0);
			},
			p(r, s) {
				const n = {};
				s & 2 && (n.trailer_id = r[1]), e.$set(n);
			},
			i(r) {
				t || (D(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				x(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				a[6](null), ne(e, r);
			}
		}
	);
}
function gt(a) {
	let e, t, l, r;
	const s = [vt, mt],
		n = [];
	function _(i, c) {
		return i[0].id && i[1] ? 0 : 1;
	}
	return (
		(e = _(a)),
		(t = n[e] = s[e](a)),
		{
			c() {
				t.c(), (l = K());
			},
			l(i) {
				t.l(i), (l = K());
			},
			m(i, c) {
				n[e].m(i, c), S(i, l, c), (r = !0);
			},
			p(i, [c]) {
				let f = e;
				(e = _(i)),
					e === f
						? n[e].p(i, c)
						: (ye(),
						  x(n[f], 1, 1, () => {
								n[f] = null;
						  }),
						  $e(),
						  (t = n[e]),
						  t ? t.p(i, c) : ((t = n[e] = s[e](i)), t.c()),
						  D(t, 1),
						  t.m(l.parentNode, l));
			},
			i(i) {
				r || (D(t), (r = !0));
			},
			o(i) {
				x(t), (r = !1);
			},
			d(i) {
				n[e].d(i), i && d(l);
			}
		}
	);
}
const De = 'https://image.tmdb.org/t/p/';
function bt(a, e, t) {
	let l;
	Oe(a, Ue, (f) => t(4, (l = f)));
	let { movie_details: r } = e,
		{ trailer_id: s } = e,
		{ movie_id: n } = e,
		_;
	window.scrollTo({ top: -1e3, behavior: 'smooth' });
	const i = () => _.show();
	function c(f) {
		st[f ? 'unshift' : 'push'](() => {
			(_ = f), t(3, _);
		});
	}
	return (
		(a.$$set = (f) => {
			'movie_details' in f && t(0, (r = f.movie_details)),
				'trailer_id' in f && t(1, (s = f.trailer_id)),
				'movie_id' in f && t(2, (n = f.movie_id));
		}),
		[r, s, n, _, l, i, c]
	);
}
class kt extends ze {
	constructor(e) {
		super();
		Je(this, e, bt, gt, Qe, { movie_details: 0, trailer_id: 1, movie_id: 2 });
	}
}
function wt(a) {
	let e, t;
	return (
		(e = new Ze({})),
		{
			c() {
				re(e.$$.fragment);
			},
			l(l) {
				ae(e.$$.fragment, l);
			},
			m(l, r) {
				se(e, l, r), (t = !0);
			},
			p: Ie,
			i(l) {
				t || (D(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				x(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ne(e, l);
			}
		}
	);
}
function Et(a) {
	let e, t;
	return (
		(e = new kt({ props: { movie_details: a[0], trailer_id: a[1], movie_id: a[2] } })),
		{
			c() {
				re(e.$$.fragment);
			},
			l(l) {
				ae(e.$$.fragment, l);
			},
			m(l, r) {
				se(e, l, r), (t = !0);
			},
			p(l, r) {
				const s = {};
				r & 1 && (s.movie_details = l[0]), r & 2 && (s.trailer_id = l[1]), e.$set(s);
			},
			i(l) {
				t || (D(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				x(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ne(e, l);
			}
		}
	);
}
function yt(a) {
	let e, t, l, r;
	const s = [Et, wt],
		n = [];
	function _(i, c) {
		return i[0] && i[1] ? 0 : 1;
	}
	return (
		(e = _(a)),
		(t = n[e] = s[e](a)),
		{
			c() {
				t.c(), (l = K());
			},
			l(i) {
				t.l(i), (l = K());
			},
			m(i, c) {
				n[e].m(i, c), S(i, l, c), (r = !0);
			},
			p(i, [c]) {
				let f = e;
				(e = _(i)),
					e === f
						? n[e].p(i, c)
						: (ye(),
						  x(n[f], 1, 1, () => {
								n[f] = null;
						  }),
						  $e(),
						  (t = n[e]),
						  t ? t.p(i, c) : ((t = n[e] = s[e](i)), t.c()),
						  D(t, 1),
						  t.m(l.parentNode, l));
			},
			i(i) {
				r || (D(t), (r = !0));
			},
			o(i) {
				x(t), (r = !1);
			},
			d(i) {
				n[e].d(i), i && d(l);
			}
		}
	);
}
var $t = function (a, e, t, l) {
	function r(s) {
		return s instanceof t
			? s
			: new t(function (n) {
					n(s);
			  });
	}
	return new (t || (t = Promise))(function (s, n) {
		function _(f) {
			try {
				c(l.next(f));
			} catch (b) {
				n(b);
			}
		}
		function i(f) {
			try {
				c(l.throw(f));
			} catch (b) {
				n(b);
			}
		}
		function c(f) {
			f.done ? s(f.value) : r(f.value).then(_, i);
		}
		c((l = l.apply(a, e || [])).next());
	});
};
function St({ page: a }) {
	return $t(this, void 0, void 0, function* () {
		let e = `https://api.themoviedb.org/3/movie/${a.params.id}?api_key=${We(Xe)}&language=en-US`,
			t = `https://api.themoviedb.org/3/movie/${a.params.id}/videos?api_key=${We(
				Xe
			)}&language=en-US`,
			l = yield fetch(e).then((n) => n.json()),
			r = yield fetch(t).then((n) => n.json()),
			s = r.results.length ? r.results[0].key : 999;
		return { props: { movie_details: l, trailer_id: s } };
	});
}
function It(a, e, t) {
	let l, r;
	Oe(a, dt, (i) => t(3, (l = i))), Oe(a, Ue, (i) => t(4, (r = i))), this && this.__awaiter;
	let { movie_details: s } = e,
		{ trailer_id: n } = e;
	ft(Ue, (r = 'movie'), r);
	let _ = l.params.id;
	return (
		(a.$$set = (i) => {
			'movie_details' in i && t(0, (s = i.movie_details)),
				'trailer_id' in i && t(1, (n = i.trailer_id));
		}),
		[s, n, _]
	);
}
class xt extends ze {
	constructor(e) {
		super();
		Je(this, e, It, yt, Qe, { movie_details: 0, trailer_id: 1 });
	}
}
export { xt as default, St as load };
