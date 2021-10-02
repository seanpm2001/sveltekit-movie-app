import {
	S as F,
	i as G,
	s as P,
	e as v,
	k as C,
	c as b,
	a as x,
	d as _,
	n as M,
	b as o,
	O as S,
	f as j,
	D as m,
	F as J,
	l as T,
	H as D,
	t as N,
	g as V,
	h as R,
	K as Q,
	L as q,
	A as W
} from './vendor-8fe9a59e.js';
import { A as X, a as Y } from './store-892411d9.js';
function B(n) {
	let t, e, l, s, f, u, r, i, c, a;
	return {
		c() {
			(t = v('section')),
				(e = v('div')),
				(l = v('iframe')),
				(s = v('track')),
				(u = C()),
				(r = v('div')),
				(i = v('i')),
				this.h();
		},
		l(d) {
			t = b(d, 'SECTION', { id: !0, class: !0 });
			var h = x(t);
			e = b(h, 'DIV', { class: !0 });
			var I = x(e);
			l = b(I, 'IFRAME', { class: !0, title: !0, src: !0, allow: !0 });
			var E = x(l);
			(s = b(E, 'TRACK', { kind: !0 })),
				E.forEach(_),
				I.forEach(_),
				(u = M(h)),
				(r = b(h, 'DIV', { class: !0 }));
			var k = x(r);
			(i = b(k, 'I', { class: !0, 'aria-hidden': !0 })),
				x(i).forEach(_),
				k.forEach(_),
				h.forEach(_),
				this.h();
		},
		h() {
			(s.default = !0),
				o(s, 'kind', 'captions'),
				o(l, 'class', 'iframe absolute top-0 left-0 w-full h-full bg-contain'),
				o(l, 'title', 'Trailer'),
				S(l.src, (f = 'https://www.youtube.com/embed/' + n[0] + '?rel=0')) || o(l, 'src', f),
				o(l, 'allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'),
				(l.allowFullscreen = !0),
				o(e, 'class', 'absolute top-0 left-0 w-full h-full bg-contain'),
				o(i, 'class', 'fa fa-window-close'),
				o(i, 'aria-hidden', 'true'),
				o(
					r,
					'class',
					'close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold'
				),
				o(t, 'id', 'trailer'),
				o(t, 'class', 'top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50');
		},
		m(d, h) {
			j(d, t, h),
				m(t, e),
				m(e, l),
				m(l, s),
				m(t, u),
				m(t, r),
				m(r, i),
				c || ((a = J(r, 'click', n[4])), (c = !0));
		},
		p(d, h) {
			h & 1 &&
				!S(l.src, (f = 'https://www.youtube.com/embed/' + d[0] + '?rel=0')) &&
				o(l, 'src', f);
		},
		d(d) {
			d && _(t), (c = !1), a();
		}
	};
}
function Z(n) {
	let t,
		e = n[2] && B(n);
	return {
		c() {
			e && e.c(), (t = T());
		},
		l(l) {
			e && e.l(l), (t = T());
		},
		m(l, s) {
			e && e.m(l, s), j(l, t, s);
		},
		p(l, [s]) {
			l[2]
				? e
					? e.p(l, s)
					: ((e = B(l)), e.c(), e.m(t.parentNode, t))
				: e && (e.d(1), (e = null));
		},
		i: D,
		o: D,
		d(l) {
			e && e.d(l), l && _(t);
		}
	};
}
function $(n, t, e) {
	let { trailer_id: l } = t,
		s = !1;
	function f() {
		e(2, (s = !0));
	}
	function u() {
		e(2, (s = !1));
	}
	const r = () => u();
	return (
		(n.$$set = (i) => {
			'trailer_id' in i && e(0, (l = i.trailer_id));
		}),
		[l, u, s, f, r]
	);
}
class ae extends F {
	constructor(t) {
		super();
		G(this, t, $, Z, P, { trailer_id: 0, show: 3, hide: 1 });
	}
	get show() {
		return this.$$.ctx[3];
	}
	get hide() {
		return this.$$.ctx[1];
	}
}
function H(n, t, e) {
	const l = n.slice();
	return (l[6] = t[e]), l;
}
function z(n) {
	let t,
		e,
		l,
		s,
		f,
		u = n[0],
		r = [];
	for (let i = 0; i < u.length; i += 1) r[i] = L(H(n, u, i));
	return {
		c() {
			(t = v('section')), (e = v('h3')), (l = N('Top Billed Cast')), (s = C()), (f = v('div'));
			for (let i = 0; i < r.length; i += 1) r[i].c();
			this.h();
		},
		l(i) {
			t = b(i, 'SECTION', { id: !0, class: !0 });
			var c = x(t);
			e = b(c, 'H3', { class: !0 });
			var a = x(e);
			(l = V(a, 'Top Billed Cast')), a.forEach(_), (s = M(c)), (f = b(c, 'DIV', { class: !0 }));
			var d = x(f);
			for (let h = 0; h < r.length; h += 1) r[h].l(d);
			d.forEach(_), c.forEach(_), this.h();
		},
		h() {
			o(
				e,
				'class',
				'text-skin-base flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold'
			),
				o(
					f,
					'class',
					'flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative'
				),
				o(t, 'id', 'people'),
				o(
					t,
					'class',
					'max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl'
				);
		},
		m(i, c) {
			j(i, t, c), m(t, e), m(e, l), m(t, s), m(t, f);
			for (let a = 0; a < r.length; a += 1) r[a].m(f, null);
		},
		p(i, c) {
			if (c & 1) {
				u = i[0];
				let a;
				for (a = 0; a < u.length; a += 1) {
					const d = H(i, u, a);
					r[a] ? r[a].p(d, c) : ((r[a] = L(d)), r[a].c(), r[a].m(f, null));
				}
				for (; a < r.length; a += 1) r[a].d(1);
				r.length = u.length;
			}
		},
		d(i) {
			i && _(t), Q(r, i);
		}
	};
}
function ee(n) {
	let t, e;
	return {
		c() {
			(t = v('img')), this.h();
		},
		l(l) {
			(t = b(l, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			o(t, 'class', 'pt-8 flex justify-end items-end w-28 h-42 bottom-0 rounded-t'),
				S(t.src, (e = '/person.svg')) || o(t, 'src', e),
				o(t, 'alt', 'profile');
		},
		m(l, s) {
			j(l, t, s);
		},
		p: D,
		d(l) {
			l && _(t);
		}
	};
}
function te(n) {
	let t, e;
	return {
		c() {
			(t = v('img')), this.h();
		},
		l(l) {
			(t = b(l, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			o(t, 'class', 'w-28 h-42 rounded-t'),
				S(t.src, (e = U + n[6].profile_path)) || o(t, 'src', e),
				o(t, 'alt', 'profile');
		},
		m(l, s) {
			j(l, t, s);
		},
		p(l, s) {
			s & 1 && !S(t.src, (e = U + l[6].profile_path)) && o(t, 'src', e);
		},
		d(l) {
			l && _(t);
		}
	};
}
function L(n) {
	let t,
		e,
		l,
		s,
		f,
		u = n[6].character + '',
		r,
		i,
		c,
		a = n[6].name + '',
		d,
		h,
		I;
	function E(p, g) {
		return p[6].profile_path ? te : ee;
	}
	let k = E(n),
		y = k(n);
	return {
		c() {
			(t = v('div')),
				(e = v('a')),
				(l = v('div')),
				y.c(),
				(s = C()),
				(f = v('p')),
				(r = N(u)),
				(i = C()),
				(c = v('p')),
				(d = N(a)),
				(I = C()),
				this.h();
		},
		l(p) {
			t = b(p, 'DIV', { class: !0 });
			var g = x(t);
			e = b(g, 'A', { href: !0 });
			var w = x(e);
			l = b(w, 'DIV', { class: !0 });
			var A = x(l);
			y.l(A), A.forEach(_), (s = M(w)), (f = b(w, 'P', { class: !0 }));
			var K = x(f);
			(r = V(K, u)), K.forEach(_), (i = M(w)), (c = b(w, 'P', { class: !0 }));
			var O = x(c);
			(d = V(O, a)), O.forEach(_), w.forEach(_), (I = M(g)), g.forEach(_), this.h();
		},
		h() {
			o(l, 'class', 'w-28 h-42 bg-blue-900'),
				o(
					f,
					'class',
					'text-center flex justify-center items-center text-skin-base font-semibold line-clamp-1 xl:line-clamp-2'
				),
				o(
					c,
					'class',
					'text-center flex justify-center items-center text-skin-muted line-clamp-1 xl:line-clamp-2'
				),
				o(e, 'href', (h = `/person/${n[6].id}`)),
				o(
					t,
					'class',
					'w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected'
				);
		},
		m(p, g) {
			j(p, t, g),
				m(t, e),
				m(e, l),
				y.m(l, null),
				m(e, s),
				m(e, f),
				m(f, r),
				m(e, i),
				m(e, c),
				m(c, d),
				m(t, I);
		},
		p(p, g) {
			k === (k = E(p)) && y ? y.p(p, g) : (y.d(1), (y = k(p)), y && (y.c(), y.m(l, null))),
				g & 1 && u !== (u = p[6].character + '') && R(r, u),
				g & 1 && a !== (a = p[6].name + '') && R(d, a),
				g & 1 && h !== (h = `/person/${p[6].id}`) && o(e, 'href', h);
		},
		d(p) {
			p && _(t), y.d();
		}
	};
}
function le(n) {
	let t,
		e = n[0].length && z(n);
	return {
		c() {
			e && e.c(), (t = T());
		},
		l(l) {
			e && e.l(l), (t = T());
		},
		m(l, s) {
			e && e.m(l, s), j(l, t, s);
		},
		p(l, [s]) {
			l[0].length
				? e
					? e.p(l, s)
					: ((e = z(l)), e.c(), e.m(t.parentNode, t))
				: e && (e.d(1), (e = null));
		},
		i: D,
		o: D,
		d(l) {
			e && e.d(l), l && _(t);
		}
	};
}
const U = 'https://image.tmdb.org/t/p/w200/';
function se(n, t, e) {
	let l, s;
	q(n, X, (c) => e(2, (l = c))), q(n, Y, (c) => e(3, (s = c)));
	var f =
		(this && this.__awaiter) ||
		function (c, a, d, h) {
			function I(E) {
				return E instanceof d
					? E
					: new d(function (k) {
							k(E);
					  });
			}
			return new (d || (d = Promise))(function (E, k) {
				function y(w) {
					try {
						g(h.next(w));
					} catch (A) {
						k(A);
					}
				}
				function p(w) {
					try {
						g(h.throw(w));
					} catch (A) {
						k(A);
					}
				}
				function g(w) {
					w.done ? E(w.value) : I(w.value).then(y, p);
				}
				g((h = h.apply(c, a || [])).next());
			});
		};
	let { movie_id: u } = t;
	const r = `https://api.themoviedb.org/3/${s}/${u}/credits?api_key=${l}&language=en-US`;
	let i = [];
	return (
		W(() =>
			f(void 0, void 0, void 0, function* () {
				const a = yield (yield fetch(r)).json();
				return e(0, (i = a.cast)), i;
			})
		),
		(n.$$set = (c) => {
			'movie_id' in c && e(1, (u = c.movie_id));
		}),
		[i, u]
	);
}
class ne extends F {
	constructor(t) {
		super();
		G(this, t, se, le, P, { movie_id: 1 });
	}
}
export { ne as C, ae as M };
