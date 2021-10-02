import {
	S as be,
	i as ge,
	s as fe,
	e as m,
	k as V,
	t as $,
	l as Z,
	c as v,
	a as E,
	d as u,
	n as x,
	g as D,
	b as p,
	O as P,
	f as G,
	D as o,
	h as O,
	K as we,
	H as ce,
	N as xe,
	j as He,
	m as Ne,
	o as Ae,
	x as de,
	u as he,
	v as Se,
	w as Ce,
	L as Ge,
	r as Me
} from '../../../../chunks/vendor-8fe9a59e.js';
import { A as Oe } from '../../../../chunks/store-892411d9.js';
import { p as qe } from '../../../../chunks/stores-d4b77a7d.js';
function Ee(f, e, s) {
	const t = f.slice();
	return (t[1] = e[s]), t;
}
function ke(f, e, s) {
	const t = f.slice();
	return (t[4] = e[s]), t;
}
function Ie(f) {
	let e,
		s,
		t,
		r,
		a,
		c,
		l,
		n,
		d,
		i,
		h,
		w,
		H = f[0].season_number + '',
		y,
		b,
		g = f[0].episode_number + '',
		j,
		k,
		C,
		q,
		M = f[0].name + '',
		Q,
		ee,
		te,
		le,
		K,
		se,
		T = f[0].air_date + '',
		W,
		ae,
		z,
		ie,
		re,
		U,
		F = f[0].overview + '',
		X,
		Y,
		B,
		L,
		N = f[0].guest_stars.length && je(f),
		A = f[0].crew.length && De(f);
	return {
		c() {
			(e = m('div')),
				(s = m('div')),
				(t = m('div')),
				(r = m('img')),
				(c = V()),
				(l = m('div')),
				(n = m('h4')),
				(d = $('Episode Information')),
				(i = V()),
				(h = m('h4')),
				(w = $('Season: ')),
				(y = $(H)),
				(b = $(' Episode: ')),
				(j = $(g)),
				(k = V()),
				(C = m('h4')),
				(q = $('Episode Name: ')),
				(Q = $(M)),
				(ee = V()),
				(te = m('hr')),
				(le = V()),
				(K = m('h6')),
				(se = $('Air Date: ')),
				(W = $(T)),
				(ae = V()),
				(z = m('h6')),
				(ie = $('Overview:')),
				(re = V()),
				(U = m('h6')),
				(X = $(F)),
				(Y = V()),
				N && N.c(),
				(B = V()),
				A && A.c(),
				(L = Z()),
				this.h();
		},
		l(_) {
			e = v(_, 'DIV', { class: !0, 'pt-3': !0 });
			var I = E(e);
			s = v(I, 'DIV', { class: !0 });
			var ue = E(s);
			t = v(ue, 'DIV', { class: !0 });
			var _e = E(t);
			(r = v(_e, 'IMG', { class: !0, src: !0, alt: !0 })),
				_e.forEach(u),
				ue.forEach(u),
				(c = x(I)),
				(l = v(I, 'DIV', { class: !0 }));
			var S = E(l);
			n = v(S, 'H4', { class: !0 });
			var pe = E(n);
			(d = D(pe, 'Episode Information')), pe.forEach(u), (i = x(S)), (h = v(S, 'H4', {}));
			var J = E(h);
			(w = D(J, 'Season: ')),
				(y = D(J, H)),
				(b = D(J, ' Episode: ')),
				(j = D(J, g)),
				J.forEach(u),
				(k = x(S)),
				(C = v(S, 'H4', {}));
			var ne = E(C);
			(q = D(ne, 'Episode Name: ')),
				(Q = D(ne, M)),
				ne.forEach(u),
				(ee = x(S)),
				(te = v(S, 'HR', {})),
				(le = x(S)),
				(K = v(S, 'H6', {}));
			var oe = E(K);
			(se = D(oe, 'Air Date: ')), (W = D(oe, T)), oe.forEach(u), (ae = x(S)), (z = v(S, 'H6', {}));
			var me = E(z);
			(ie = D(me, 'Overview:')), me.forEach(u), (re = x(S)), (U = v(S, 'H6', { class: !0 }));
			var ve = E(U);
			(X = D(ve, F)),
				ve.forEach(u),
				S.forEach(u),
				I.forEach(u),
				(Y = x(_)),
				N && N.l(_),
				(B = x(_)),
				A && A.l(_),
				(L = Z()),
				this.h();
		},
		h() {
			p(r, 'class', 'flex max-w-2xl'),
				P(r.src, (a = f[0].still_path ? R + f[0].still_path : '/default.jpg')) || p(r, 'src', a),
				p(r, 'alt', 'episode'),
				p(t, 'class', 'flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none'),
				p(s, 'class', 'flex flex-col xl:flex-row pb-4'),
				p(n, 'class', 'pb-8'),
				p(U, 'class', 'flex-1 pr-8 text-skin-muted mb-4'),
				p(l, 'class', 'ml-2 block'),
				p(e, 'class', 'flex'),
				p(e, 'pt-3', '');
		},
		m(_, I) {
			G(_, e, I),
				o(e, s),
				o(s, t),
				o(t, r),
				o(e, c),
				o(e, l),
				o(l, n),
				o(n, d),
				o(l, i),
				o(l, h),
				o(h, w),
				o(h, y),
				o(h, b),
				o(h, j),
				o(l, k),
				o(l, C),
				o(C, q),
				o(C, Q),
				o(l, ee),
				o(l, te),
				o(l, le),
				o(l, K),
				o(K, se),
				o(K, W),
				o(l, ae),
				o(l, z),
				o(z, ie),
				o(l, re),
				o(l, U),
				o(U, X),
				G(_, Y, I),
				N && N.m(_, I),
				G(_, B, I),
				A && A.m(_, I),
				G(_, L, I);
		},
		p(_, I) {
			I & 1 &&
				!P(r.src, (a = _[0].still_path ? R + _[0].still_path : '/default.jpg')) &&
				p(r, 'src', a),
				I & 1 && H !== (H = _[0].season_number + '') && O(y, H),
				I & 1 && g !== (g = _[0].episode_number + '') && O(j, g),
				I & 1 && M !== (M = _[0].name + '') && O(Q, M),
				I & 1 && T !== (T = _[0].air_date + '') && O(W, T),
				I & 1 && F !== (F = _[0].overview + '') && O(X, F),
				_[0].guest_stars.length
					? N
						? N.p(_, I)
						: ((N = je(_)), N.c(), N.m(B.parentNode, B))
					: N && (N.d(1), (N = null)),
				_[0].crew.length
					? A
						? A.p(_, I)
						: ((A = De(_)), A.c(), A.m(L.parentNode, L))
					: A && (A.d(1), (A = null));
		},
		d(_) {
			_ && u(e), _ && u(Y), N && N.d(_), _ && u(B), A && A.d(_), _ && u(L);
		}
	};
}
function je(f) {
	let e,
		s,
		t,
		r,
		a,
		c = f[0].guest_stars,
		l = [];
	for (let n = 0; n < c.length; n += 1) l[n] = $e(ke(f, c, n));
	return {
		c() {
			(e = m('div')), (s = m('h3')), (t = $('Guest Stars')), (r = V()), (a = m('div'));
			for (let n = 0; n < l.length; n += 1) l[n].c();
			this.h();
		},
		l(n) {
			e = v(n, 'DIV', {});
			var d = E(e);
			s = v(d, 'H3', {});
			var i = E(s);
			(t = D(i, 'Guest Stars')), i.forEach(u), (r = x(d)), (a = v(d, 'DIV', { class: !0 }));
			var h = E(a);
			for (let w = 0; w < l.length; w += 1) l[w].l(h);
			h.forEach(u), d.forEach(u), this.h();
		},
		h() {
			p(
				a,
				'class',
				'text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'
			);
		},
		m(n, d) {
			G(n, e, d), o(e, s), o(s, t), o(e, r), o(e, a);
			for (let i = 0; i < l.length; i += 1) l[i].m(a, null);
		},
		p(n, d) {
			if (d & 1) {
				c = n[0].guest_stars;
				let i;
				for (i = 0; i < c.length; i += 1) {
					const h = ke(n, c, i);
					l[i] ? l[i].p(h, d) : ((l[i] = $e(h)), l[i].c(), l[i].m(a, null));
				}
				for (; i < l.length; i += 1) l[i].d(1);
				l.length = c.length;
			}
		},
		d(n) {
			n && u(e), we(l, n);
		}
	};
}
function $e(f) {
	let e,
		s,
		t,
		r,
		a,
		c,
		l,
		n,
		d = f[4].character + '',
		i,
		h,
		w,
		H,
		y = f[4].name + '',
		b,
		g;
	return {
		c() {
			(e = m('div')),
				(s = m('a')),
				(t = m('img')),
				(c = V()),
				(l = m('p')),
				(n = $('Character ')),
				(i = $(d)),
				(h = V()),
				(w = m('p')),
				(H = $('Name ')),
				(b = $(y)),
				(g = V()),
				this.h();
		},
		l(j) {
			e = v(j, 'DIV', { class: !0 });
			var k = E(e);
			s = v(k, 'A', { class: !0, href: !0 });
			var C = E(s);
			(t = v(C, 'IMG', { class: !0, src: !0, alt: !0 })),
				C.forEach(u),
				(c = x(k)),
				(l = v(k, 'P', {}));
			var q = E(l);
			(n = D(q, 'Character ')), (i = D(q, d)), q.forEach(u), (h = x(k)), (w = v(k, 'P', {}));
			var M = E(w);
			(H = D(M, 'Name ')), (b = D(M, y)), M.forEach(u), (g = x(k)), k.forEach(u), this.h();
		},
		h() {
			p(t, 'class', 'flex xl:w-40 xl: h-60 items-start'),
				P(t.src, (r = f[4].profile_path ? R + f[4].profile_path : '/default.jpg')) ||
					p(t, 'src', r),
				p(t, 'alt', 'episode'),
				p(s, 'class', 'rounded w-28'),
				p(s, 'href', (a = `/person/${f[4].id}`)),
				p(
					e,
					'class',
					'w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'
				);
		},
		m(j, k) {
			G(j, e, k),
				o(e, s),
				o(s, t),
				o(e, c),
				o(e, l),
				o(l, n),
				o(l, i),
				o(e, h),
				o(e, w),
				o(w, H),
				o(w, b),
				o(e, g);
		},
		p(j, k) {
			k & 1 &&
				!P(t.src, (r = j[4].profile_path ? R + j[4].profile_path : '/default.jpg')) &&
				p(t, 'src', r),
				k & 1 && a !== (a = `/person/${j[4].id}`) && p(s, 'href', a),
				k & 1 && d !== (d = j[4].character + '') && O(i, d),
				k & 1 && y !== (y = j[4].name + '') && O(b, y);
		},
		d(j) {
			j && u(e);
		}
	};
}
function De(f) {
	let e,
		s,
		t,
		r,
		a,
		c = f[0].crew,
		l = [];
	for (let n = 0; n < c.length; n += 1) l[n] = ye(Ee(f, c, n));
	return {
		c() {
			(e = m('div')), (s = m('h3')), (t = $('Crew')), (r = V()), (a = m('div'));
			for (let n = 0; n < l.length; n += 1) l[n].c();
			this.h();
		},
		l(n) {
			e = v(n, 'DIV', {});
			var d = E(e);
			s = v(d, 'H3', {});
			var i = E(s);
			(t = D(i, 'Crew')), i.forEach(u), (r = x(d)), (a = v(d, 'DIV', { class: !0 }));
			var h = E(a);
			for (let w = 0; w < l.length; w += 1) l[w].l(h);
			h.forEach(u), d.forEach(u), this.h();
		},
		h() {
			p(
				a,
				'class',
				'text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'
			);
		},
		m(n, d) {
			G(n, e, d), o(e, s), o(s, t), o(e, r), o(e, a);
			for (let i = 0; i < l.length; i += 1) l[i].m(a, null);
		},
		p(n, d) {
			if (d & 1) {
				c = n[0].crew;
				let i;
				for (i = 0; i < c.length; i += 1) {
					const h = Ee(n, c, i);
					l[i] ? l[i].p(h, d) : ((l[i] = ye(h)), l[i].c(), l[i].m(a, null));
				}
				for (; i < l.length; i += 1) l[i].d(1);
				l.length = c.length;
			}
		},
		d(n) {
			n && u(e), we(l, n);
		}
	};
}
function ye(f) {
	let e,
		s,
		t,
		r,
		a,
		c,
		l,
		n = f[1].job + '',
		d,
		i,
		h,
		w = f[1].name + '',
		H,
		y;
	return {
		c() {
			(e = m('div')),
				(s = m('a')),
				(t = m('img')),
				(c = V()),
				(l = m('p')),
				(d = $(n)),
				(i = V()),
				(h = m('p')),
				(H = $(w)),
				(y = V()),
				this.h();
		},
		l(b) {
			e = v(b, 'DIV', { class: !0 });
			var g = E(e);
			s = v(g, 'A', { class: !0, href: !0 });
			var j = E(s);
			(t = v(j, 'IMG', { class: !0, src: !0, alt: !0 })),
				j.forEach(u),
				(c = x(g)),
				(l = v(g, 'P', {}));
			var k = E(l);
			(d = D(k, n)), k.forEach(u), (i = x(g)), (h = v(g, 'P', {}));
			var C = E(h);
			(H = D(C, w)), C.forEach(u), (y = x(g)), g.forEach(u), this.h();
		},
		h() {
			p(t, 'class', 'flex xl:w-40 xl: h-60 items-start'),
				P(t.src, (r = f[1].profile_path ? R + f[1].profile_path : '/default.jpg')) ||
					p(t, 'src', r),
				p(t, 'alt', 'episode'),
				p(s, 'class', 'rounded w-28'),
				p(s, 'href', (a = `/person/${f[1].id}`)),
				p(
					e,
					'class',
					'w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected'
				);
		},
		m(b, g) {
			G(b, e, g), o(e, s), o(s, t), o(e, c), o(e, l), o(l, d), o(e, i), o(e, h), o(h, H), o(e, y);
		},
		p(b, g) {
			g & 1 &&
				!P(t.src, (r = b[1].profile_path ? R + b[1].profile_path : '/default.jpg')) &&
				p(t, 'src', r),
				g & 1 && a !== (a = `/person/${b[1].id}`) && p(s, 'href', a),
				g & 1 && n !== (n = b[1].job + '') && O(d, n),
				g & 1 && w !== (w = b[1].name + '') && O(H, w);
		},
		d(b) {
			b && u(e);
		}
	};
}
function Ke(f) {
	let e,
		s,
		t = f[0].id && Ie(f);
	return {
		c() {
			(e = m('section')), (s = m('div')), t && t.c(), this.h();
		},
		l(r) {
			e = v(r, 'SECTION', { id: !0 });
			var a = E(e);
			s = v(a, 'DIV', { class: !0 });
			var c = E(s);
			t && t.l(c), c.forEach(u), a.forEach(u), this.h();
		},
		h() {
			p(
				s,
				'class',
				'max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl'
			),
				p(e, 'id', 'season');
		},
		m(r, a) {
			G(r, e, a), o(e, s), t && t.m(s, null);
		},
		p(r, [a]) {
			r[0].id ? (t ? t.p(r, a) : ((t = Ie(r)), t.c(), t.m(s, null))) : t && (t.d(1), (t = null));
		},
		i: ce,
		o: ce,
		d(r) {
			r && u(e), t && t.d();
		}
	};
}
const R = 'https://image.tmdb.org/t/p/original';
function Ue(f, e, s) {
	let { episode_details: t } = e;
	return (
		(f.$$set = (r) => {
			'episode_details' in r && s(0, (t = r.episode_details));
		}),
		[t]
	);
}
class Be extends be {
	constructor(e) {
		super();
		ge(this, e, Ue, Ke, fe, { episode_details: 0 });
	}
}
function Ve(f) {
	let e, s;
	return (
		(e = new Be({ props: { episode_details: f[0] } })),
		{
			c() {
				He(e.$$.fragment);
			},
			l(t) {
				Ne(e.$$.fragment, t);
			},
			m(t, r) {
				Ae(e, t, r), (s = !0);
			},
			p(t, r) {
				const a = {};
				r & 1 && (a.episode_details = t[0]), e.$set(a);
			},
			i(t) {
				s || (de(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				he(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				Se(e, t);
			}
		}
	);
}
function Le(f) {
	let e = f[1].params.season_number,
		s,
		t,
		r = Ve(f);
	return {
		c() {
			r.c(), (s = Z());
		},
		l(a) {
			r.l(a), (s = Z());
		},
		m(a, c) {
			r.m(a, c), G(a, s, c), (t = !0);
		},
		p(a, [c]) {
			c & 2 && fe(e, (e = a[1].params.season_number))
				? (Me(), he(r, 1, 1, ce), Ce(), (r = Ve(a)), r.c(), de(r), r.m(s.parentNode, s))
				: r.p(a, c);
		},
		i(a) {
			t || (de(r), (t = !0));
		},
		o(a) {
			he(r), (t = !1);
		},
		d(a) {
			a && u(s), r.d(a);
		}
	};
}
var Pe = function (f, e, s, t) {
	function r(a) {
		return a instanceof s
			? a
			: new s(function (c) {
					c(a);
			  });
	}
	return new (s || (s = Promise))(function (a, c) {
		function l(i) {
			try {
				d(t.next(i));
			} catch (h) {
				c(h);
			}
		}
		function n(i) {
			try {
				d(t.throw(i));
			} catch (h) {
				c(h);
			}
		}
		function d(i) {
			i.done ? a(i.value) : r(i.value).then(l, n);
		}
		d((t = t.apply(f, e || [])).next());
	});
};
function Je({ page: f }) {
	return Pe(this, void 0, void 0, function* () {
		let e = `https://api.themoviedb.org/3/tv/${f.params.id}/season/${
			f.params.season_number
		}/episode/${f.params.episode_number}?api_key=${xe(Oe)}&language=en-US`;
		return { props: { episode_details: yield fetch(e).then((t) => t.json()) } };
	});
}
function Re(f, e, s) {
	let t;
	Ge(f, qe, (a) => s(1, (t = a))), this && this.__awaiter;
	let { episode_details: r } = e;
	return (
		(f.$$set = (a) => {
			'episode_details' in a && s(0, (r = a.episode_details));
		}),
		[r, t]
	);
}
class Qe extends be {
	constructor(e) {
		super();
		ge(this, e, Re, Le, fe, { episode_details: 0 });
	}
}
export { Qe as default, Je as load };
