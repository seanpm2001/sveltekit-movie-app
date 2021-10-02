import {
	S as qe,
	i as Be,
	s as Me,
	e as v,
	k as E,
	t as T,
	c as m,
	a as p,
	d,
	n as I,
	g as O,
	b as h,
	O as Te,
	f as P,
	D as c,
	h as ee,
	H as ie,
	K as Xe,
	l as z,
	r as ke,
	u as A,
	w as we,
	x,
	L as Ee,
	M as Oe,
	Y as vt,
	j as ne,
	m as oe,
	o as fe,
	v as ce,
	_ as Ke,
	F as mt,
	N as Ze
} from '../../chunks/vendor-8fe9a59e.js';
import { d as et, e as tt, b as lt, a as Fe, A as st } from '../../chunks/store-892411d9.js';
import { p as pt } from '../../chunks/stores-d4b77a7d.js';
import { S as rt, P as gt } from '../../chunks/Spinner-b4526be0.js';
import { C as bt, M as kt } from '../../chunks/Cast-72e210fe.js';
function at(i, e, t) {
	const l = i.slice();
	return (l[2] = e[t]), l;
}
function it(i) {
	let e,
		t,
		l,
		s,
		a,
		n,
		o,
		r,
		u = i[2].name + '',
		_,
		k,
		C,
		g,
		N,
		K,
		U = i[2].air_date + '',
		q,
		$,
		S,
		J,
		te,
		R,
		B = i[2].overview + '',
		le,
		se,
		Y;
	return {
		c() {
			(e = v('div')),
				(t = v('a')),
				(l = v('div')),
				(s = v('img')),
				(n = E()),
				(o = v('div')),
				(r = v('h4')),
				(_ = T(u)),
				(k = E()),
				(C = v('hr')),
				(g = E()),
				(N = v('h6')),
				(K = T('Air Date: ')),
				(q = T(U)),
				($ = E()),
				(S = v('h6')),
				(J = T('Overview:')),
				(te = E()),
				(R = v('h6')),
				(le = T(B)),
				(Y = E()),
				this.h();
		},
		l(H) {
			e = m(H, 'DIV', { class: !0 });
			var w = p(e);
			t = m(w, 'A', { href: !0, class: !0 });
			var Q = p(t);
			l = m(Q, 'DIV', { class: !0 });
			var _e = p(l);
			(s = m(_e, 'IMG', { class: !0, src: !0, alt: !0 })),
				_e.forEach(d),
				(n = I(Q)),
				(o = m(Q, 'DIV', { class: !0 }));
			var D = p(o);
			r = m(D, 'H4', {});
			var W = p(r);
			(_ = O(W, u)),
				W.forEach(d),
				(k = I(D)),
				(C = m(D, 'HR', {})),
				(g = I(D)),
				(N = m(D, 'H6', {}));
			var X = p(N);
			(K = O(X, 'Air Date: ')), (q = O(X, U)), X.forEach(d), ($ = I(D)), (S = m(D, 'H6', {}));
			var ae = p(S);
			(J = O(ae, 'Overview:')), ae.forEach(d), (te = I(D)), (R = m(D, 'H6', { class: !0 }));
			var ue = p(R);
			(le = O(ue, B)),
				ue.forEach(d),
				D.forEach(d),
				Q.forEach(d),
				(Y = I(w)),
				w.forEach(d),
				this.h();
		},
		h() {
			h(s, 'class', 'flex xl:w-40 xl: h-60 items-start'),
				Te(s.src, (a = i[2].poster_path ? nt + i[2].poster_path : '/default.jpg')) ||
					h(s, 'src', a),
				h(s, 'alt', 'episode'),
				h(
					l,
					'class',
					'flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start'
				),
				h(R, 'class', 'flex-1 pr-8 text-skin-muted mb-4'),
				h(o, 'class', 'justify-self-center ml-2 block xl:justify-start'),
				h(t, 'href', (se = `/seasons/${i[1]}/${i[2].season_number}`)),
				h(t, 'class', 'flex flex-col xl:flex-row text-skin-base xl:rounded-lg'),
				h(e, 'class', 'flex flex-col xl:flex-row pb-4');
		},
		m(H, w) {
			P(H, e, w),
				c(e, t),
				c(t, l),
				c(l, s),
				c(t, n),
				c(t, o),
				c(o, r),
				c(r, _),
				c(o, k),
				c(o, C),
				c(o, g),
				c(o, N),
				c(N, K),
				c(N, q),
				c(o, $),
				c(o, S),
				c(S, J),
				c(o, te),
				c(o, R),
				c(R, le),
				c(e, Y);
		},
		p(H, w) {
			w & 1 &&
				!Te(s.src, (a = H[2].poster_path ? nt + H[2].poster_path : '/default.jpg')) &&
				h(s, 'src', a),
				w & 1 && u !== (u = H[2].name + '') && ee(_, u),
				w & 1 && U !== (U = H[2].air_date + '') && ee(q, U),
				w & 1 && B !== (B = H[2].overview + '') && ee(le, B),
				w & 3 && se !== (se = `/seasons/${H[1]}/${H[2].season_number}`) && h(t, 'href', se);
		},
		d(H) {
			H && d(e);
		}
	};
}
function wt(i) {
	let e,
		t,
		l,
		s,
		a,
		n = i[0].seasons,
		o = [];
	for (let r = 0; r < n.length; r += 1) o[r] = it(at(i, n, r));
	return {
		c() {
			(e = v('section')), (t = v('div')), (l = v('h4')), (s = T('Season Information')), (a = E());
			for (let r = 0; r < o.length; r += 1) o[r].c();
			this.h();
		},
		l(r) {
			e = m(r, 'SECTION', { id: !0 });
			var u = p(e);
			t = m(u, 'DIV', { class: !0 });
			var _ = p(t);
			l = m(_, 'H4', { class: !0 });
			var k = p(l);
			(s = O(k, 'Season Information')), k.forEach(d), (a = I(_));
			for (let C = 0; C < o.length; C += 1) o[C].l(_);
			_.forEach(d), u.forEach(d), this.h();
		},
		h() {
			h(l, 'class', 'pb-8'),
				h(
					t,
					'class',
					'max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl'
				),
				h(e, 'id', 'Seasons');
		},
		m(r, u) {
			P(r, e, u), c(e, t), c(t, l), c(l, s), c(t, a);
			for (let _ = 0; _ < o.length; _ += 1) o[_].m(t, null);
		},
		p(r, [u]) {
			if (u & 3) {
				n = r[0].seasons;
				let _;
				for (_ = 0; _ < n.length; _ += 1) {
					const k = at(r, n, _);
					o[_] ? o[_].p(k, u) : ((o[_] = it(k)), o[_].c(), o[_].m(t, null));
				}
				for (; _ < o.length; _ += 1) o[_].d(1);
				o.length = n.length;
			}
		},
		i: ie,
		o: ie,
		d(r) {
			r && d(e), Xe(o, r);
		}
	};
}
const nt = 'https://www.themoviedb.org/t/p/original';
function Et(i, e, t) {
	let { tv_details: l } = e,
		{ movie_id: s } = e;
	return (
		(i.$$set = (a) => {
			'tv_details' in a && t(0, (l = a.tv_details)), 'movie_id' in a && t(1, (s = a.movie_id));
		}),
		[l, s]
	);
}
class It extends qe {
	constructor(e) {
		super();
		Be(this, e, Et, wt, Me, { tv_details: 0, movie_id: 1 });
	}
}
function ot(i, e, t) {
	const l = i.slice();
	return (l[10] = e[t].id), (l[11] = e[t].name), (l[13] = t), l;
}
function xt(i) {
	let e, t;
	return (
		(e = new rt({})),
		{
			c() {
				ne(e.$$.fragment);
			},
			l(l) {
				oe(e.$$.fragment, l);
			},
			m(l, s) {
				fe(e, l, s), (t = !0);
			},
			p: ie,
			i(l) {
				t || (x(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				A(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ce(e, l);
			}
		}
	);
}
function Dt(i) {
	let e,
		t,
		l,
		s,
		a,
		n,
		o,
		r,
		u,
		_,
		k = i[0].name + '',
		C,
		g,
		N,
		K = (i[0] ? i[0].first_air_date.substring(0, 4) : '') + '',
		U,
		q,
		$,
		S,
		J = ('first_air_date' in i[0] ? i[0].first_air_date : 'No Date Available') + '',
		te,
		R,
		B,
		le,
		se,
		Y,
		H,
		w,
		Q,
		_e,
		D,
		W,
		X = i[0].tagline + '',
		ae,
		ue,
		de,
		Ce,
		Ge,
		he,
		Ie = i[0].overview + '',
		De,
		$e,
		re,
		ye,
		ve,
		me,
		F,
		pe = i[0].genres,
		G = [];
	for (let f = 0; f < pe.length; f += 1) G[f] = ct(ot(i, pe, f));
	let y = i[0].vote_average && _t(i);
	function Le(f, b) {
		return f[1] !== 999 ? yt : $t;
	}
	let Ve = Le(i),
		L = Ve(i);
	re = new bt({ props: { movie_id: i[2] } });
	let V = i[1] !== 999 && ut(i),
		j = i[4] === 'tv' && dt(i);
	return {
		c() {
			(e = v('section')),
				(t = v('div')),
				(l = v('div')),
				(s = v('div')),
				(a = v('img')),
				(o = E()),
				(r = v('div')),
				(u = v('div')),
				(_ = v('h4')),
				(C = T(k)),
				(g = E()),
				(N = v('span')),
				(U = T(K)),
				(q = E()),
				($ = v('div')),
				(S = v('div')),
				(te = T(J)),
				(R = E()),
				(B = v('span')),
				(le = T('\u2022')),
				(se = E()),
				(Y = v('div'));
			for (let f = 0; f < G.length; f += 1) G[f].c();
			(H = E()),
				(w = v('div')),
				y && y.c(),
				(Q = E()),
				L.c(),
				(_e = E()),
				(D = v('div')),
				(W = v('div')),
				(ae = T(X)),
				(ue = E()),
				(de = v('h4')),
				(Ce = T('Overview')),
				(Ge = E()),
				(he = v('div')),
				(De = T(Ie)),
				($e = E()),
				ne(re.$$.fragment),
				(ye = E()),
				V && V.c(),
				(ve = E()),
				j && j.c(),
				(me = z()),
				this.h();
		},
		l(f) {
			e = m(f, 'SECTION', { id: !0, class: !0, style: !0 });
			var b = p(e);
			t = m(b, 'DIV', { class: !0, style: !0 });
			var Z = p(t);
			l = m(Z, 'DIV', { class: !0 });
			var M = p(l);
			s = m(M, 'DIV', { class: !0 });
			var xe = p(s);
			(a = m(xe, 'IMG', { class: !0, src: !0, alt: !0 })),
				xe.forEach(d),
				(o = I(M)),
				(r = m(M, 'DIV', { class: !0 }));
			var ge = p(r);
			u = m(ge, 'DIV', { class: !0 });
			var je = p(u);
			_ = m(je, 'H4', { class: !0 });
			var Ae = p(_);
			(C = O(Ae, k)), (g = I(Ae)), (N = m(Ae, 'SPAN', { class: !0 }));
			var Re = p(N);
			(U = O(Re, K)), Re.forEach(d), Ae.forEach(d), (q = I(je)), ($ = m(je, 'DIV', { class: !0 }));
			var Ne = p($);
			S = m(Ne, 'DIV', { class: !0 });
			var Se = p(S);
			(te = O(Se, J)), (R = I(Se)), (B = m(Se, 'SPAN', { class: !0 }));
			var Ye = p(B);
			(le = O(Ye, '\u2022')), Ye.forEach(d), Se.forEach(d), (se = I(Ne)), (Y = m(Ne, 'DIV', {}));
			var ze = p(Y);
			for (let Ue = 0; Ue < G.length; Ue += 1) G[Ue].l(ze);
			ze.forEach(d), Ne.forEach(d), je.forEach(d), (H = I(ge)), (w = m(ge, 'DIV', { class: !0 }));
			var He = p(w);
			y && y.l(He),
				(Q = I(He)),
				L.l(He),
				He.forEach(d),
				(_e = I(ge)),
				(D = m(ge, 'DIV', { class: !0 }));
			var be = p(D);
			W = m(be, 'DIV', { class: !0 });
			var Je = p(W);
			(ae = O(Je, X)), Je.forEach(d), (ue = I(be)), (de = m(be, 'H4', { class: !0 }));
			var Qe = p(de);
			(Ce = O(Qe, 'Overview')), Qe.forEach(d), (Ge = I(be)), (he = m(be, 'DIV', { class: !0 }));
			var We = p(he);
			(De = O(We, Ie)),
				We.forEach(d),
				be.forEach(d),
				ge.forEach(d),
				M.forEach(d),
				Z.forEach(d),
				b.forEach(d),
				($e = I(f)),
				oe(re.$$.fragment, f),
				(ye = I(f)),
				V && V.l(f),
				(ve = I(f)),
				j && j.l(f),
				(me = z()),
				this.h();
		},
		h() {
			h(a, 'class', 'h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto'),
				Te(a.src, (n = i[0].poster_path ? Pe + 'w500' + i[0].poster_path : '/default.jpg')) ||
					h(a, 'src', n),
				h(a, 'alt', 'movie poster'),
				h(s, 'class', 'col-start-1 col-end-2 '),
				h(N, 'class', 'text-lg xl:text-4xl text-skin-inverted'),
				h(_, 'class', 'w-full xl:text-4xl'),
				h(B, 'class', 'hidden xl:px-2 xl:inline'),
				h(S, 'class', 'pl-0'),
				h($, 'class', 'xl:flex'),
				h(u, 'class', 'mt-6 xl:mt-0 w-full mb-6 flex flex-wrap'),
				h(w, 'class', 'mb-5 w-full h-16 flex items-center justify-start'),
				h(W, 'class', 'text-lg italic opacity-70'),
				h(de, 'class', 'my-2 w-full font-semibold'),
				h(he, 'class', 'overview-details'),
				h(D, 'class', 'w-full'),
				h(r, 'class', 'xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10'),
				h(l, 'class', 'grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl'),
				h(t, 'class', 'bg-gradient-to-r xl:rounded-2xl'),
				Ke(
					t,
					'background-image',
					'linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)'
				),
				h(e, 'id', 'media'),
				h(
					e,
					'class',
					'text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl'
				),
				Ke(e, 'background-image', 'url(' + Pe + 'original/' + i[0].backdrop_path + ')');
		},
		m(f, b) {
			P(f, e, b),
				c(e, t),
				c(t, l),
				c(l, s),
				c(s, a),
				c(l, o),
				c(l, r),
				c(r, u),
				c(u, _),
				c(_, C),
				c(_, g),
				c(_, N),
				c(N, U),
				c(u, q),
				c(u, $),
				c($, S),
				c(S, te),
				c(S, R),
				c(S, B),
				c(B, le),
				c($, se),
				c($, Y);
			for (let Z = 0; Z < G.length; Z += 1) G[Z].m(Y, null);
			c(r, H),
				c(r, w),
				y && y.m(w, null),
				c(w, Q),
				L.m(w, null),
				c(r, _e),
				c(r, D),
				c(D, W),
				c(W, ae),
				c(D, ue),
				c(D, de),
				c(de, Ce),
				c(D, Ge),
				c(D, he),
				c(he, De),
				P(f, $e, b),
				fe(re, f, b),
				P(f, ye, b),
				V && V.m(f, b),
				P(f, ve, b),
				j && j.m(f, b),
				P(f, me, b),
				(F = !0);
		},
		p(f, b) {
			if (
				((!F ||
					(b & 1 &&
						!Te(
							a.src,
							(n = f[0].poster_path ? Pe + 'w500' + f[0].poster_path : '/default.jpg')
						))) &&
					h(a, 'src', n),
				(!F || b & 1) && k !== (k = f[0].name + '') && ee(C, k),
				(!F || b & 1) &&
					K !== (K = (f[0] ? f[0].first_air_date.substring(0, 4) : '') + '') &&
					ee(U, K),
				(!F || b & 1) &&
					J !== (J = ('first_air_date' in f[0] ? f[0].first_air_date : 'No Date Available') + '') &&
					ee(te, J),
				b & 17)
			) {
				pe = f[0].genres;
				let M;
				for (M = 0; M < pe.length; M += 1) {
					const xe = ot(f, pe, M);
					G[M] ? G[M].p(xe, b) : ((G[M] = ct(xe)), G[M].c(), G[M].m(Y, null));
				}
				for (; M < G.length; M += 1) G[M].d(1);
				G.length = pe.length;
			}
			f[0].vote_average
				? y
					? (y.p(f, b), b & 1 && x(y, 1))
					: ((y = _t(f)), y.c(), x(y, 1), y.m(w, Q))
				: y &&
				  (ke(),
				  A(y, 1, 1, () => {
						y = null;
				  }),
				  we()),
				Ve === (Ve = Le(f)) && L ? L.p(f, b) : (L.d(1), (L = Ve(f)), L && (L.c(), L.m(w, null))),
				(!F || b & 1) && X !== (X = f[0].tagline + '') && ee(ae, X),
				(!F || b & 1) && Ie !== (Ie = f[0].overview + '') && ee(De, Ie),
				(!F || b & 1) &&
					Ke(e, 'background-image', 'url(' + Pe + 'original/' + f[0].backdrop_path + ')');
			const Z = {};
			b & 4 && (Z.movie_id = f[2]),
				re.$set(Z),
				f[1] !== 999
					? V
						? (V.p(f, b), b & 2 && x(V, 1))
						: ((V = ut(f)), V.c(), x(V, 1), V.m(ve.parentNode, ve))
					: V &&
					  (ke(),
					  A(V, 1, 1, () => {
							V = null;
					  }),
					  we()),
				f[4] === 'tv'
					? j
						? (j.p(f, b), b & 16 && x(j, 1))
						: ((j = dt(f)), j.c(), x(j, 1), j.m(me.parentNode, me))
					: j &&
					  (ke(),
					  A(j, 1, 1, () => {
							j = null;
					  }),
					  we());
		},
		i(f) {
			F || (x(y), x(re.$$.fragment, f), x(V), x(j), (F = !0));
		},
		o(f) {
			A(y), A(re.$$.fragment, f), A(V), A(j), (F = !1);
		},
		d(f) {
			f && d(e),
				Xe(G, f),
				y && y.d(),
				L.d(),
				f && d($e),
				ce(re, f),
				f && d(ye),
				V && V.d(f),
				f && d(ve),
				j && j.d(f),
				f && d(me);
		}
	};
}
function ft(i) {
	let e, t;
	return {
		c() {
			(e = v('span')), (t = T('|')), this.h();
		},
		l(l) {
			e = m(l, 'SPAN', { class: !0 });
			var s = p(e);
			(t = O(s, '|')), s.forEach(d), this.h();
		},
		h() {
			h(e, 'class', 'mx-2');
		},
		m(l, s) {
			P(l, e, s), c(e, t);
		},
		d(l) {
			l && d(e);
		}
	};
}
function ct(i) {
	let e,
		t = i[11] + '',
		l,
		s,
		a,
		n,
		o = i[13] !== i[0].genres.length - 1 && ft();
	return {
		c() {
			(e = v('a')), (l = T(t)), (a = E()), o && o.c(), (n = z()), this.h();
		},
		l(r) {
			e = m(r, 'A', { class: !0, href: !0 });
			var u = p(e);
			(l = O(u, t)), u.forEach(d), (a = I(r)), o && o.l(r), (n = z()), this.h();
		},
		h() {
			h(e, 'class', 'hover:text-skin-selected'), h(e, 'href', (s = '/genre/' + i[4] + '/' + i[10]));
		},
		m(r, u) {
			P(r, e, u), c(e, l), P(r, a, u), o && o.m(r, u), P(r, n, u);
		},
		p(r, u) {
			u & 1 && t !== (t = r[11] + '') && ee(l, t),
				u & 17 && s !== (s = '/genre/' + r[4] + '/' + r[10]) && h(e, 'href', s),
				r[13] !== r[0].genres.length - 1
					? o || ((o = ft()), o.c(), o.m(n.parentNode, n))
					: o && (o.d(1), (o = null));
		},
		d(r) {
			r && d(e), r && d(a), o && o.d(r), r && d(n);
		}
	};
}
function _t(i) {
	let e, t, l;
	return (
		(t = new gt({ props: { progress: i[0].vote_average } })),
		{
			c() {
				(e = v('div')), ne(t.$$.fragment), this.h();
			},
			l(s) {
				e = m(s, 'DIV', { class: !0 });
				var a = p(e);
				oe(t.$$.fragment, a), a.forEach(d), this.h();
			},
			h() {
				h(
					e,
					'class',
					'bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60'
				);
			},
			m(s, a) {
				P(s, e, a), fe(t, e, null), (l = !0);
			},
			p(s, a) {
				const n = {};
				a & 1 && (n.progress = s[0].vote_average), t.$set(n);
			},
			i(s) {
				l || (x(t.$$.fragment, s), (l = !0));
			},
			o(s) {
				A(t.$$.fragment, s), (l = !1);
			},
			d(s) {
				s && d(e), ce(t);
			}
		}
	);
}
function $t(i) {
	let e, t, l;
	return {
		c() {
			(e = v('div')), (t = v('p')), (l = T('No Trailer Available')), this.h();
		},
		l(s) {
			e = m(s, 'DIV', { class: !0 });
			var a = p(e);
			t = m(a, 'P', { class: !0 });
			var n = p(t);
			(l = O(n, 'No Trailer Available')), n.forEach(d), a.forEach(d), this.h();
		},
		h() {
			h(t, 'class', 'flex justify-center ml-4'), h(e, 'class', 'flex pl-5');
		},
		m(s, a) {
			P(s, e, a), c(e, t), c(t, l);
		},
		p: ie,
		d(s) {
			s && d(e);
		}
	};
}
function yt(i) {
	let e, t, l, s, a, n, o;
	return {
		c() {
			(e = v('div')), (t = v('i')), (l = E()), (s = v('p')), (a = T('Play Trailer')), this.h();
		},
		l(r) {
			e = m(r, 'DIV', { class: !0 });
			var u = p(e);
			(t = m(u, 'I', { class: !0, 'aria-hidden': !0 })),
				p(t).forEach(d),
				(l = I(u)),
				(s = m(u, 'P', { class: !0 }));
			var _ = p(s);
			(a = O(_, 'Play Trailer')), _.forEach(d), u.forEach(d), this.h();
		},
		h() {
			h(t, 'class', 'flex items-center fa fa-play fa-2x'),
				h(t, 'aria-hidden', 'true'),
				h(s, 'class', 'flex justify-center ml-4 text-2xl items-center'),
				h(e, 'class', 'transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80');
		},
		m(r, u) {
			P(r, e, u), c(e, t), c(e, l), c(e, s), c(s, a), n || ((o = mt(e, 'click', i[5])), (n = !0));
		},
		p: ie,
		d(r) {
			r && d(e), (n = !1), o();
		}
	};
}
function ut(i) {
	let e,
		t,
		l = { trailer_id: i[1] };
	return (
		(e = new kt({ props: l })),
		i[6](e),
		{
			c() {
				ne(e.$$.fragment);
			},
			l(s) {
				oe(e.$$.fragment, s);
			},
			m(s, a) {
				fe(e, s, a), (t = !0);
			},
			p(s, a) {
				const n = {};
				a & 2 && (n.trailer_id = s[1]), e.$set(n);
			},
			i(s) {
				t || (x(e.$$.fragment, s), (t = !0));
			},
			o(s) {
				A(e.$$.fragment, s), (t = !1);
			},
			d(s) {
				i[6](null), ce(e, s);
			}
		}
	);
}
function dt(i) {
	let e = i[0],
		t,
		l,
		s = ht(i);
	return {
		c() {
			s.c(), (t = z());
		},
		l(a) {
			s.l(a), (t = z());
		},
		m(a, n) {
			s.m(a, n), P(a, t, n), (l = !0);
		},
		p(a, n) {
			n & 1 && Me(e, (e = a[0]))
				? (ke(), A(s, 1, 1, ie), we(), (s = ht(a)), s.c(), x(s), s.m(t.parentNode, t))
				: s.p(a, n);
		},
		i(a) {
			l || (x(s), (l = !0));
		},
		o(a) {
			A(s), (l = !1);
		},
		d(a) {
			a && d(t), s.d(a);
		}
	};
}
function ht(i) {
	let e, t;
	return (
		(e = new It({ props: { tv_details: i[0], movie_id: i[2] } })),
		{
			c() {
				ne(e.$$.fragment);
			},
			l(l) {
				oe(e.$$.fragment, l);
			},
			m(l, s) {
				fe(e, l, s), (t = !0);
			},
			p(l, s) {
				const a = {};
				s & 1 && (a.tv_details = l[0]), s & 4 && (a.movie_id = l[2]), e.$set(a);
			},
			i(l) {
				t || (x(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				A(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ce(e, l);
			}
		}
	);
}
function Vt(i) {
	let e, t, l, s;
	const a = [Dt, xt],
		n = [];
	function o(r, u) {
		return r[0].id && r[1] ? 0 : 1;
	}
	return (
		(e = o(i)),
		(t = n[e] = a[e](i)),
		{
			c() {
				t.c(), (l = z());
			},
			l(r) {
				t.l(r), (l = z());
			},
			m(r, u) {
				n[e].m(r, u), P(r, l, u), (s = !0);
			},
			p(r, [u]) {
				let _ = e;
				(e = o(r)),
					e === _
						? n[e].p(r, u)
						: (ke(),
						  A(n[_], 1, 1, () => {
								n[_] = null;
						  }),
						  we(),
						  (t = n[e]),
						  t ? t.p(r, u) : ((t = n[e] = a[e](r)), t.c()),
						  x(t, 1),
						  t.m(l.parentNode, l));
			},
			i(r) {
				s || (x(t), (s = !0));
			},
			o(r) {
				A(t), (s = !1);
			},
			d(r) {
				n[e].d(r), r && d(l);
			}
		}
	);
}
const Pe = 'https://image.tmdb.org/t/p/';
function jt(i, e, t) {
	let l, s, a, n;
	Ee(i, et, (g) => t(7, (l = g))),
		Ee(i, tt, (g) => t(8, (s = g))),
		Ee(i, lt, (g) => t(9, (a = g))),
		Ee(i, Fe, (g) => t(4, (n = g)));
	let { tv_details: o } = e,
		{ trailer_id: r } = e,
		{ movie_id: u } = e;
	Oe(lt, (a = o.name), a), Oe(tt, (s = o.number_of_seasons), s), Oe(et, (l = o.id), l);
	let _;
	window.scrollTo({ top: -1e3, behavior: 'smooth' });
	const k = () => _.show();
	function C(g) {
		vt[g ? 'unshift' : 'push'](() => {
			(_ = g), t(3, _);
		});
	}
	return (
		(i.$$set = (g) => {
			'tv_details' in g && t(0, (o = g.tv_details)),
				'trailer_id' in g && t(1, (r = g.trailer_id)),
				'movie_id' in g && t(2, (u = g.movie_id));
		}),
		[o, r, u, _, n, k, C]
	);
}
class At extends qe {
	constructor(e) {
		super();
		Be(this, e, jt, Vt, Me, { tv_details: 0, trailer_id: 1, movie_id: 2 });
	}
}
function Nt(i) {
	let e, t;
	return (
		(e = new rt({})),
		{
			c() {
				ne(e.$$.fragment);
			},
			l(l) {
				oe(e.$$.fragment, l);
			},
			m(l, s) {
				fe(e, l, s), (t = !0);
			},
			p: ie,
			i(l) {
				t || (x(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				A(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ce(e, l);
			}
		}
	);
}
function St(i) {
	let e, t;
	return (
		(e = new At({ props: { tv_details: i[0], trailer_id: i[1], movie_id: i[2] } })),
		{
			c() {
				ne(e.$$.fragment);
			},
			l(l) {
				oe(e.$$.fragment, l);
			},
			m(l, s) {
				fe(e, l, s), (t = !0);
			},
			p(l, s) {
				const a = {};
				s & 1 && (a.tv_details = l[0]), s & 2 && (a.trailer_id = l[1]), e.$set(a);
			},
			i(l) {
				t || (x(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				A(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ce(e, l);
			}
		}
	);
}
function Ht(i) {
	let e, t, l, s;
	const a = [St, Nt],
		n = [];
	function o(r, u) {
		return r[0] && r[1] ? 0 : 1;
	}
	return (
		(e = o(i)),
		(t = n[e] = a[e](i)),
		{
			c() {
				t.c(), (l = z());
			},
			l(r) {
				t.l(r), (l = z());
			},
			m(r, u) {
				n[e].m(r, u), P(r, l, u), (s = !0);
			},
			p(r, [u]) {
				let _ = e;
				(e = o(r)),
					e === _
						? n[e].p(r, u)
						: (ke(),
						  A(n[_], 1, 1, () => {
								n[_] = null;
						  }),
						  we(),
						  (t = n[e]),
						  t ? t.p(r, u) : ((t = n[e] = a[e](r)), t.c()),
						  x(t, 1),
						  t.m(l.parentNode, l));
			},
			i(r) {
				s || (x(t), (s = !0));
			},
			o(r) {
				A(t), (s = !1);
			},
			d(r) {
				n[e].d(r), r && d(l);
			}
		}
	);
}
var Mt = function (i, e, t, l) {
	function s(a) {
		return a instanceof t
			? a
			: new t(function (n) {
					n(a);
			  });
	}
	return new (t || (t = Promise))(function (a, n) {
		function o(_) {
			try {
				u(l.next(_));
			} catch (k) {
				n(k);
			}
		}
		function r(_) {
			try {
				u(l.throw(_));
			} catch (k) {
				n(k);
			}
		}
		function u(_) {
			_.done ? a(_.value) : s(_.value).then(o, r);
		}
		u((l = l.apply(i, e || [])).next());
	});
};
function qt({ page: i }) {
	return Mt(this, void 0, void 0, function* () {
		let e = `https://api.themoviedb.org/3/tv/${i.params.id}?api_key=${Ze(st)}&language=en-US`,
			t = `https://api.themoviedb.org/3/tv/${i.params.id}/videos?api_key=${Ze(st)}&language=en-US`,
			l = yield fetch(e).then((n) => n.json()),
			s = yield fetch(t).then((n) => n.json()),
			a = s.results.length ? s.results[0].key : 999;
		return { props: { tv_details: l, trailer_id: a } };
	});
}
function Tt(i, e, t) {
	let l, s;
	Ee(i, pt, (r) => t(3, (l = r))), Ee(i, Fe, (r) => t(4, (s = r))), this && this.__awaiter;
	let { tv_details: a } = e,
		{ trailer_id: n } = e;
	Oe(Fe, (s = 'tv'), s);
	let o = l.params.id;
	return (
		(i.$$set = (r) => {
			'tv_details' in r && t(0, (a = r.tv_details)), 'trailer_id' in r && t(1, (n = r.trailer_id));
		}),
		[a, n, o]
	);
}
class Bt extends qe {
	constructor(e) {
		super();
		Be(this, e, Tt, Ht, Me, { tv_details: 0, trailer_id: 1 });
	}
}
export { Bt as default, qt as load };
