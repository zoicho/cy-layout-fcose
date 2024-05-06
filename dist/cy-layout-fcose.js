const De = Object.assign != null ? Object.assign.bind(Object) : function(S, ...F) {
  return F.forEach((I) => {
    Object.keys(I).forEach((U) => S[U] = I[U]);
  }), S;
};
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ie(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var Me = { exports: {} }, de = { exports: {} }, Te;
function Re() {
  return Te || (Te = 1, function(S, F) {
    (function(U, m) {
      S.exports = m();
    })(Ce, function() {
      return (
        /******/
        function(I) {
          var U = {};
          function m(c) {
            if (U[c])
              return U[c].exports;
            var a = U[c] = {
              /******/
              i: c,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return I[c].call(a.exports, a, a.exports, m), a.l = !0, a.exports;
          }
          return m.m = I, m.c = U, m.i = function(c) {
            return c;
          }, m.d = function(c, a, i) {
            m.o(c, a) || Object.defineProperty(c, a, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: i
              /******/
            });
          }, m.n = function(c) {
            var a = c && c.__esModule ? (
              /******/
              function() {
                return c.default;
              }
            ) : (
              /******/
              function() {
                return c;
              }
            );
            return m.d(a, "a", a), a;
          }, m.o = function(c, a) {
            return Object.prototype.hasOwnProperty.call(c, a);
          }, m.p = "", m(m.s = 28);
        }([
          /* 0 */
          /***/
          function(I, U, m) {
            function c() {
            }
            c.QUALITY = 1, c.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, c.DEFAULT_INCREMENTAL = !1, c.DEFAULT_ANIMATION_ON_LAYOUT = !0, c.DEFAULT_ANIMATION_DURING_LAYOUT = !1, c.DEFAULT_ANIMATION_PERIOD = 50, c.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, c.DEFAULT_GRAPH_MARGIN = 15, c.NODE_DIMENSIONS_INCLUDE_LABELS = !1, c.SIMPLE_NODE_SIZE = 40, c.SIMPLE_NODE_HALF_SIZE = c.SIMPLE_NODE_SIZE / 2, c.EMPTY_COMPOUND_NODE_SIZE = 40, c.MIN_EDGE_LENGTH = 1, c.WORLD_BOUNDARY = 1e6, c.INITIAL_WORLD_BOUNDARY = c.WORLD_BOUNDARY / 1e3, c.WORLD_CENTER_X = 1200, c.WORLD_CENTER_Y = 900, I.exports = c;
          },
          /* 1 */
          /***/
          function(I, U, m) {
            var c = m(2), a = m(8), i = m(9);
            function r(f, o, v) {
              c.call(this, v), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = v, this.bendpoints = [], this.source = f, this.target = o;
            }
            r.prototype = Object.create(c.prototype);
            for (var n in c)
              r[n] = c[n];
            r.prototype.getSource = function() {
              return this.source;
            }, r.prototype.getTarget = function() {
              return this.target;
            }, r.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, r.prototype.getLength = function() {
              return this.length;
            }, r.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, r.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, r.prototype.getLca = function() {
              return this.lca;
            }, r.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, r.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, r.prototype.getOtherEnd = function(f) {
              if (this.source === f)
                return this.target;
              if (this.target === f)
                return this.source;
              throw "Node is not incident with this edge";
            }, r.prototype.getOtherEndInGraph = function(f, o) {
              for (var v = this.getOtherEnd(f), t = o.getGraphManager().getRoot(); ; ) {
                if (v.getOwner() == o)
                  return v;
                if (v.getOwner() == t)
                  break;
                v = v.getOwner().getParent();
              }
              return null;
            }, r.prototype.updateLength = function() {
              var f = new Array(4);
              this.isOverlapingSourceAndTarget = a.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = i.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = i.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, r.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = i.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = i.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, I.exports = r;
          },
          /* 2 */
          /***/
          function(I, U, m) {
            function c(a) {
              this.vGraphObject = a;
            }
            I.exports = c;
          },
          /* 3 */
          /***/
          function(I, U, m) {
            var c = m(2), a = m(10), i = m(13), r = m(0), n = m(16), f = m(5);
            function o(t, s, h, g) {
              h == null && g == null && (g = s), c.call(this, g), t.graphManager != null && (t = t.graphManager), this.estimatedSize = a.MIN_VALUE, this.inclusionTreeDepth = a.MAX_VALUE, this.vGraphObject = g, this.edges = [], this.graphManager = t, h != null && s != null ? this.rect = new i(s.x, s.y, h.width, h.height) : this.rect = new i();
            }
            o.prototype = Object.create(c.prototype);
            for (var v in c)
              o[v] = c[v];
            o.prototype.getEdges = function() {
              return this.edges;
            }, o.prototype.getChild = function() {
              return this.child;
            }, o.prototype.getOwner = function() {
              return this.owner;
            }, o.prototype.getWidth = function() {
              return this.rect.width;
            }, o.prototype.setWidth = function(t) {
              this.rect.width = t;
            }, o.prototype.getHeight = function() {
              return this.rect.height;
            }, o.prototype.setHeight = function(t) {
              this.rect.height = t;
            }, o.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, o.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, o.prototype.getCenter = function() {
              return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, o.prototype.getLocation = function() {
              return new f(this.rect.x, this.rect.y);
            }, o.prototype.getRect = function() {
              return this.rect;
            }, o.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, o.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, o.prototype.setRect = function(t, s) {
              this.rect.x = t.x, this.rect.y = t.y, this.rect.width = s.width, this.rect.height = s.height;
            }, o.prototype.setCenter = function(t, s) {
              this.rect.x = t - this.rect.width / 2, this.rect.y = s - this.rect.height / 2;
            }, o.prototype.setLocation = function(t, s) {
              this.rect.x = t, this.rect.y = s;
            }, o.prototype.moveBy = function(t, s) {
              this.rect.x += t, this.rect.y += s;
            }, o.prototype.getEdgeListToNode = function(t) {
              var s = [], h = this;
              return h.edges.forEach(function(g) {
                if (g.target == t) {
                  if (g.source != h)
                    throw "Incorrect edge source!";
                  s.push(g);
                }
              }), s;
            }, o.prototype.getEdgesBetween = function(t) {
              var s = [], h = this;
              return h.edges.forEach(function(g) {
                if (!(g.source == h || g.target == h))
                  throw "Incorrect edge source and/or target";
                (g.target == t || g.source == t) && s.push(g);
              }), s;
            }, o.prototype.getNeighborsList = function() {
              var t = /* @__PURE__ */ new Set(), s = this;
              return s.edges.forEach(function(h) {
                if (h.source == s)
                  t.add(h.target);
                else {
                  if (h.target != s)
                    throw "Incorrect incidency!";
                  t.add(h.source);
                }
              }), t;
            }, o.prototype.withChildren = function() {
              var t = /* @__PURE__ */ new Set(), s, h;
              if (t.add(this), this.child != null)
                for (var g = this.child.getNodes(), u = 0; u < g.length; u++)
                  s = g[u], h = s.withChildren(), h.forEach(function(N) {
                    t.add(N);
                  });
              return t;
            }, o.prototype.getNoOfChildren = function() {
              var t = 0, s;
              if (this.child == null)
                t = 1;
              else
                for (var h = this.child.getNodes(), g = 0; g < h.length; g++)
                  s = h[g], t += s.getNoOfChildren();
              return t == 0 && (t = 1), t;
            }, o.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == a.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, o.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, o.prototype.scatter = function() {
              var t, s, h = -r.INITIAL_WORLD_BOUNDARY, g = r.INITIAL_WORLD_BOUNDARY;
              t = r.WORLD_CENTER_X + n.nextDouble() * (g - h) + h;
              var u = -r.INITIAL_WORLD_BOUNDARY, N = r.INITIAL_WORLD_BOUNDARY;
              s = r.WORLD_CENTER_Y + n.nextDouble() * (N - u) + u, this.rect.x = t, this.rect.y = s;
            }, o.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var t = this.getChild();
                if (t.updateBounds(!0), this.rect.x = t.getLeft(), this.rect.y = t.getTop(), this.setWidth(t.getRight() - t.getLeft()), this.setHeight(t.getBottom() - t.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var s = t.getRight() - t.getLeft(), h = t.getBottom() - t.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(s + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > s ? (this.rect.x -= (this.labelWidth - s) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(s + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(h + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > h ? (this.rect.y -= (this.labelHeight - h) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(h + this.labelHeight));
                }
              }
            }, o.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == a.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, o.prototype.transform = function(t) {
              var s = this.rect.x;
              s > r.WORLD_BOUNDARY ? s = r.WORLD_BOUNDARY : s < -r.WORLD_BOUNDARY && (s = -r.WORLD_BOUNDARY);
              var h = this.rect.y;
              h > r.WORLD_BOUNDARY ? h = r.WORLD_BOUNDARY : h < -r.WORLD_BOUNDARY && (h = -r.WORLD_BOUNDARY);
              var g = new f(s, h), u = t.inverseTransformPoint(g);
              this.setLocation(u.x, u.y);
            }, o.prototype.getLeft = function() {
              return this.rect.x;
            }, o.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, o.prototype.getTop = function() {
              return this.rect.y;
            }, o.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, o.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, I.exports = o;
          },
          /* 4 */
          /***/
          function(I, U, m) {
            var c = m(0);
            function a() {
            }
            for (var i in c)
              a[i] = c[i];
            a.MAX_ITERATIONS = 2500, a.DEFAULT_EDGE_LENGTH = 50, a.DEFAULT_SPRING_STRENGTH = 0.45, a.DEFAULT_REPULSION_STRENGTH = 4500, a.DEFAULT_GRAVITY_STRENGTH = 0.4, a.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, a.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, a.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, a.COOLING_ADAPTATION_FACTOR = 0.33, a.ADAPTATION_LOWER_NODE_LIMIT = 1e3, a.ADAPTATION_UPPER_NODE_LIMIT = 5e3, a.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, a.MAX_NODE_DISPLACEMENT = a.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, a.MIN_REPULSION_DIST = a.DEFAULT_EDGE_LENGTH / 10, a.CONVERGENCE_CHECK_PERIOD = 100, a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, a.MIN_EDGE_LENGTH = 1, a.GRID_CALCULATION_CHECK_PERIOD = 10, I.exports = a;
          },
          /* 5 */
          /***/
          function(I, U, m) {
            function c(a, i) {
              a == null && i == null ? (this.x = 0, this.y = 0) : (this.x = a, this.y = i);
            }
            c.prototype.getX = function() {
              return this.x;
            }, c.prototype.getY = function() {
              return this.y;
            }, c.prototype.setX = function(a) {
              this.x = a;
            }, c.prototype.setY = function(a) {
              this.y = a;
            }, c.prototype.getDifference = function(a) {
              return new DimensionD(this.x - a.x, this.y - a.y);
            }, c.prototype.getCopy = function() {
              return new c(this.x, this.y);
            }, c.prototype.translate = function(a) {
              return this.x += a.width, this.y += a.height, this;
            }, I.exports = c;
          },
          /* 6 */
          /***/
          function(I, U, m) {
            var c = m(2), a = m(10), i = m(0), r = m(7), n = m(3), f = m(1), o = m(13), v = m(12), t = m(11);
            function s(g, u, N) {
              c.call(this, N), this.estimatedSize = a.MIN_VALUE, this.margin = i.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = g, u != null && u instanceof r ? this.graphManager = u : u != null && u instanceof Layout && (this.graphManager = u.graphManager);
            }
            s.prototype = Object.create(c.prototype);
            for (var h in c)
              s[h] = c[h];
            s.prototype.getNodes = function() {
              return this.nodes;
            }, s.prototype.getEdges = function() {
              return this.edges;
            }, s.prototype.getGraphManager = function() {
              return this.graphManager;
            }, s.prototype.getParent = function() {
              return this.parent;
            }, s.prototype.getLeft = function() {
              return this.left;
            }, s.prototype.getRight = function() {
              return this.right;
            }, s.prototype.getTop = function() {
              return this.top;
            }, s.prototype.getBottom = function() {
              return this.bottom;
            }, s.prototype.isConnected = function() {
              return this.isConnected;
            }, s.prototype.add = function(g, u, N) {
              if (u == null && N == null) {
                var p = g;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(p) > -1)
                  throw "Node already in graph!";
                return p.owner = this, this.getNodes().push(p), p;
              } else {
                var T = g;
                if (!(this.getNodes().indexOf(u) > -1 && this.getNodes().indexOf(N) > -1))
                  throw "Source or target not in graph!";
                if (!(u.owner == N.owner && u.owner == this))
                  throw "Both owners must be this graph!";
                return u.owner != N.owner ? null : (T.source = u, T.target = N, T.isInterGraph = !1, this.getEdges().push(T), u.edges.push(T), N != u && N.edges.push(T), T);
              }
            }, s.prototype.remove = function(g) {
              var u = g;
              if (g instanceof n) {
                if (u == null)
                  throw "Node is null!";
                if (!(u.owner != null && u.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var N = u.edges.slice(), p, T = N.length, L = 0; L < T; L++)
                  p = N[L], p.isInterGraph ? this.graphManager.remove(p) : p.source.owner.remove(p);
                var D = this.nodes.indexOf(u);
                if (D == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(D, 1);
              } else if (g instanceof f) {
                var p = g;
                if (p == null)
                  throw "Edge is null!";
                if (!(p.source != null && p.target != null))
                  throw "Source and/or target is null!";
                if (!(p.source.owner != null && p.target.owner != null && p.source.owner == this && p.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var X = p.source.edges.indexOf(p), w = p.target.edges.indexOf(p);
                if (!(X > -1 && w > -1))
                  throw "Source and/or target doesn't know this edge!";
                p.source.edges.splice(X, 1), p.target != p.source && p.target.edges.splice(w, 1);
                var D = p.source.owner.getEdges().indexOf(p);
                if (D == -1)
                  throw "Not in owner's edge list!";
                p.source.owner.getEdges().splice(D, 1);
              }
            }, s.prototype.updateLeftTop = function() {
              for (var g = a.MAX_VALUE, u = a.MAX_VALUE, N, p, T, L = this.getNodes(), D = L.length, X = 0; X < D; X++) {
                var w = L[X];
                N = w.getTop(), p = w.getLeft(), g > N && (g = N), u > p && (u = p);
              }
              return g == a.MAX_VALUE ? null : (L[0].getParent().paddingLeft != null ? T = L[0].getParent().paddingLeft : T = this.margin, this.left = u - T, this.top = g - T, new v(this.left, this.top));
            }, s.prototype.updateBounds = function(g) {
              for (var u = a.MAX_VALUE, N = -a.MAX_VALUE, p = a.MAX_VALUE, T = -a.MAX_VALUE, L, D, X, w, Z, W = this.nodes, Q = W.length, R = 0; R < Q; R++) {
                var ht = W[R];
                g && ht.child != null && ht.updateBounds(), L = ht.getLeft(), D = ht.getRight(), X = ht.getTop(), w = ht.getBottom(), u > L && (u = L), N < D && (N = D), p > X && (p = X), T < w && (T = w);
              }
              var e = new o(u, p, N - u, T - p);
              u == a.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), W[0].getParent().paddingLeft != null ? Z = W[0].getParent().paddingLeft : Z = this.margin, this.left = e.x - Z, this.right = e.x + e.width + Z, this.top = e.y - Z, this.bottom = e.y + e.height + Z;
            }, s.calculateBounds = function(g) {
              for (var u = a.MAX_VALUE, N = -a.MAX_VALUE, p = a.MAX_VALUE, T = -a.MAX_VALUE, L, D, X, w, Z = g.length, W = 0; W < Z; W++) {
                var Q = g[W];
                L = Q.getLeft(), D = Q.getRight(), X = Q.getTop(), w = Q.getBottom(), u > L && (u = L), N < D && (N = D), p > X && (p = X), T < w && (T = w);
              }
              var R = new o(u, p, N - u, T - p);
              return R;
            }, s.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, s.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == a.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, s.prototype.calcEstimatedSize = function() {
              for (var g = 0, u = this.nodes, N = u.length, p = 0; p < N; p++) {
                var T = u[p];
                g += T.calcEstimatedSize();
              }
              return g == 0 ? this.estimatedSize = i.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = g / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, s.prototype.updateConnected = function() {
              var g = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var u = new t(), N = /* @__PURE__ */ new Set(), p = this.nodes[0], T, L, D = p.withChildren();
              for (D.forEach(function(R) {
                u.push(R), N.add(R);
              }); u.length !== 0; ) {
                p = u.shift(), T = p.getEdges();
                for (var X = T.length, w = 0; w < X; w++) {
                  var Z = T[w];
                  if (L = Z.getOtherEndInGraph(p, this), L != null && !N.has(L)) {
                    var W = L.withChildren();
                    W.forEach(function(R) {
                      u.push(R), N.add(R);
                    });
                  }
                }
              }
              if (this.isConnected = !1, N.size >= this.nodes.length) {
                var Q = 0;
                N.forEach(function(R) {
                  R.owner == g && Q++;
                }), Q == this.nodes.length && (this.isConnected = !0);
              }
            }, I.exports = s;
          },
          /* 7 */
          /***/
          function(I, U, m) {
            var c, a = m(1);
            function i(r) {
              c = m(6), this.layout = r, this.graphs = [], this.edges = [];
            }
            i.prototype.addRoot = function() {
              var r = this.layout.newGraph(), n = this.layout.newNode(null), f = this.add(r, n);
              return this.setRootGraph(f), this.rootGraph;
            }, i.prototype.add = function(r, n, f, o, v) {
              if (f == null && o == null && v == null) {
                if (r == null)
                  throw "Graph is null!";
                if (n == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(r) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(r), r.parent != null)
                  throw "Already has a parent!";
                if (n.child != null)
                  throw "Already has a child!";
                return r.parent = n, n.child = r, r;
              } else {
                v = f, o = n, f = r;
                var t = o.getOwner(), s = v.getOwner();
                if (!(t != null && t.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(s != null && s.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (t == s)
                  return f.isInterGraph = !1, t.add(f, o, v);
                if (f.isInterGraph = !0, f.source = o, f.target = v, this.edges.indexOf(f) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(f), !(f.source != null && f.target != null))
                  throw "Edge source and/or target is null!";
                if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return f.source.edges.push(f), f.target.edges.push(f), f;
              }
            }, i.prototype.remove = function(r) {
              if (r instanceof c) {
                var n = r;
                if (n.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(n == this.rootGraph || n.parent != null && n.parent.graphManager == this))
                  throw "Invalid parent node!";
                var f = [];
                f = f.concat(n.getEdges());
                for (var o, v = f.length, t = 0; t < v; t++)
                  o = f[t], n.remove(o);
                var s = [];
                s = s.concat(n.getNodes());
                var h;
                v = s.length;
                for (var t = 0; t < v; t++)
                  h = s[t], n.remove(h);
                n == this.rootGraph && this.setRootGraph(null);
                var g = this.graphs.indexOf(n);
                this.graphs.splice(g, 1), n.parent = null;
              } else if (r instanceof a) {
                if (o = r, o == null)
                  throw "Edge is null!";
                if (!o.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(o.source != null && o.target != null))
                  throw "Source and/or target is null!";
                if (!(o.source.edges.indexOf(o) != -1 && o.target.edges.indexOf(o) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var g = o.source.edges.indexOf(o);
                if (o.source.edges.splice(g, 1), g = o.target.edges.indexOf(o), o.target.edges.splice(g, 1), !(o.source.owner != null && o.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (o.source.owner.getGraphManager().edges.indexOf(o) == -1)
                  throw "Not in owner graph manager's edge list!";
                var g = o.source.owner.getGraphManager().edges.indexOf(o);
                o.source.owner.getGraphManager().edges.splice(g, 1);
              }
            }, i.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, i.prototype.getGraphs = function() {
              return this.graphs;
            }, i.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var r = [], n = this.getGraphs(), f = n.length, o = 0; o < f; o++)
                  r = r.concat(n[o].getNodes());
                this.allNodes = r;
              }
              return this.allNodes;
            }, i.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, i.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, i.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, i.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var r = [], n = this.getGraphs();
                n.length;
                for (var f = 0; f < n.length; f++)
                  r = r.concat(n[f].getEdges());
                r = r.concat(this.edges), this.allEdges = r;
              }
              return this.allEdges;
            }, i.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, i.prototype.setAllNodesToApplyGravitation = function(r) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = r;
            }, i.prototype.getRoot = function() {
              return this.rootGraph;
            }, i.prototype.setRootGraph = function(r) {
              if (r.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = r, r.parent == null && (r.parent = this.layout.newNode("Root node"));
            }, i.prototype.getLayout = function() {
              return this.layout;
            }, i.prototype.isOneAncestorOfOther = function(r, n) {
              if (!(r != null && n != null))
                throw "assert failed";
              if (r == n)
                return !0;
              var f = r.getOwner(), o;
              do {
                if (o = f.getParent(), o == null)
                  break;
                if (o == n)
                  return !0;
                if (f = o.getOwner(), f == null)
                  break;
              } while (!0);
              f = n.getOwner();
              do {
                if (o = f.getParent(), o == null)
                  break;
                if (o == r)
                  return !0;
                if (f = o.getOwner(), f == null)
                  break;
              } while (!0);
              return !1;
            }, i.prototype.calcLowestCommonAncestors = function() {
              for (var r, n, f, o, v, t = this.getAllEdges(), s = t.length, h = 0; h < s; h++) {
                if (r = t[h], n = r.source, f = r.target, r.lca = null, r.sourceInLca = n, r.targetInLca = f, n == f) {
                  r.lca = n.getOwner();
                  continue;
                }
                for (o = n.getOwner(); r.lca == null; ) {
                  for (r.targetInLca = f, v = f.getOwner(); r.lca == null; ) {
                    if (v == o) {
                      r.lca = v;
                      break;
                    }
                    if (v == this.rootGraph)
                      break;
                    if (r.lca != null)
                      throw "assert failed";
                    r.targetInLca = v.getParent(), v = r.targetInLca.getOwner();
                  }
                  if (o == this.rootGraph)
                    break;
                  r.lca == null && (r.sourceInLca = o.getParent(), o = r.sourceInLca.getOwner());
                }
                if (r.lca == null)
                  throw "assert failed";
              }
            }, i.prototype.calcLowestCommonAncestor = function(r, n) {
              if (r == n)
                return r.getOwner();
              var f = r.getOwner();
              do {
                if (f == null)
                  break;
                var o = n.getOwner();
                do {
                  if (o == null)
                    break;
                  if (o == f)
                    return o;
                  o = o.getParent().getOwner();
                } while (!0);
                f = f.getParent().getOwner();
              } while (!0);
              return f;
            }, i.prototype.calcInclusionTreeDepths = function(r, n) {
              r == null && n == null && (r = this.rootGraph, n = 1);
              for (var f, o = r.getNodes(), v = o.length, t = 0; t < v; t++)
                f = o[t], f.inclusionTreeDepth = n, f.child != null && this.calcInclusionTreeDepths(f.child, n + 1);
            }, i.prototype.includesInvalidEdge = function() {
              for (var r, n = [], f = this.edges.length, o = 0; o < f; o++)
                r = this.edges[o], this.isOneAncestorOfOther(r.source, r.target) && n.push(r);
              for (var o = 0; o < n.length; o++)
                this.remove(n[o]);
              return !1;
            }, I.exports = i;
          },
          /* 8 */
          /***/
          function(I, U, m) {
            var c = m(12);
            function a() {
            }
            a.calcSeparationAmount = function(i, r, n, f) {
              if (!i.intersects(r))
                throw "assert failed";
              var o = new Array(2);
              this.decideDirectionsForOverlappingNodes(i, r, o), n[0] = Math.min(i.getRight(), r.getRight()) - Math.max(i.x, r.x), n[1] = Math.min(i.getBottom(), r.getBottom()) - Math.max(i.y, r.y), i.getX() <= r.getX() && i.getRight() >= r.getRight() ? n[0] += Math.min(r.getX() - i.getX(), i.getRight() - r.getRight()) : r.getX() <= i.getX() && r.getRight() >= i.getRight() && (n[0] += Math.min(i.getX() - r.getX(), r.getRight() - i.getRight())), i.getY() <= r.getY() && i.getBottom() >= r.getBottom() ? n[1] += Math.min(r.getY() - i.getY(), i.getBottom() - r.getBottom()) : r.getY() <= i.getY() && r.getBottom() >= i.getBottom() && (n[1] += Math.min(i.getY() - r.getY(), r.getBottom() - i.getBottom()));
              var v = Math.abs((r.getCenterY() - i.getCenterY()) / (r.getCenterX() - i.getCenterX()));
              r.getCenterY() === i.getCenterY() && r.getCenterX() === i.getCenterX() && (v = 1);
              var t = v * n[0], s = n[1] / v;
              n[0] < s ? s = n[0] : t = n[1], n[0] = -1 * o[0] * (s / 2 + f), n[1] = -1 * o[1] * (t / 2 + f);
            }, a.decideDirectionsForOverlappingNodes = function(i, r, n) {
              i.getCenterX() < r.getCenterX() ? n[0] = -1 : n[0] = 1, i.getCenterY() < r.getCenterY() ? n[1] = -1 : n[1] = 1;
            }, a.getIntersection2 = function(i, r, n) {
              var f = i.getCenterX(), o = i.getCenterY(), v = r.getCenterX(), t = r.getCenterY();
              if (i.intersects(r))
                return n[0] = f, n[1] = o, n[2] = v, n[3] = t, !0;
              var s = i.getX(), h = i.getY(), g = i.getRight(), u = i.getX(), N = i.getBottom(), p = i.getRight(), T = i.getWidthHalf(), L = i.getHeightHalf(), D = r.getX(), X = r.getY(), w = r.getRight(), Z = r.getX(), W = r.getBottom(), Q = r.getRight(), R = r.getWidthHalf(), ht = r.getHeightHalf(), e = !1, y = !1;
              if (f === v) {
                if (o > t)
                  return n[0] = f, n[1] = h, n[2] = v, n[3] = W, !1;
                if (o < t)
                  return n[0] = f, n[1] = N, n[2] = v, n[3] = X, !1;
              } else if (o === t) {
                if (f > v)
                  return n[0] = s, n[1] = o, n[2] = w, n[3] = t, !1;
                if (f < v)
                  return n[0] = g, n[1] = o, n[2] = D, n[3] = t, !1;
              } else {
                var l = i.height / i.width, d = r.height / r.width, E = (t - o) / (v - f), M = void 0, C = void 0, A = void 0, P = void 0, O = void 0, K = void 0;
                if (-l === E ? f > v ? (n[0] = u, n[1] = N, e = !0) : (n[0] = g, n[1] = h, e = !0) : l === E && (f > v ? (n[0] = s, n[1] = h, e = !0) : (n[0] = p, n[1] = N, e = !0)), -d === E ? v > f ? (n[2] = Z, n[3] = W, y = !0) : (n[2] = w, n[3] = X, y = !0) : d === E && (v > f ? (n[2] = D, n[3] = X, y = !0) : (n[2] = Q, n[3] = W, y = !0)), e && y)
                  return !1;
                if (f > v ? o > t ? (M = this.getCardinalDirection(l, E, 4), C = this.getCardinalDirection(d, E, 2)) : (M = this.getCardinalDirection(-l, E, 3), C = this.getCardinalDirection(-d, E, 1)) : o > t ? (M = this.getCardinalDirection(-l, E, 1), C = this.getCardinalDirection(-d, E, 3)) : (M = this.getCardinalDirection(l, E, 2), C = this.getCardinalDirection(d, E, 4)), !e)
                  switch (M) {
                    case 1:
                      P = h, A = f + -L / E, n[0] = A, n[1] = P;
                      break;
                    case 2:
                      A = p, P = o + T * E, n[0] = A, n[1] = P;
                      break;
                    case 3:
                      P = N, A = f + L / E, n[0] = A, n[1] = P;
                      break;
                    case 4:
                      A = u, P = o + -T * E, n[0] = A, n[1] = P;
                      break;
                  }
                if (!y)
                  switch (C) {
                    case 1:
                      K = X, O = v + -ht / E, n[2] = O, n[3] = K;
                      break;
                    case 2:
                      O = Q, K = t + R * E, n[2] = O, n[3] = K;
                      break;
                    case 3:
                      K = W, O = v + ht / E, n[2] = O, n[3] = K;
                      break;
                    case 4:
                      O = Z, K = t + -R * E, n[2] = O, n[3] = K;
                      break;
                  }
              }
              return !1;
            }, a.getCardinalDirection = function(i, r, n) {
              return i > r ? n : 1 + n % 4;
            }, a.getIntersection = function(i, r, n, f) {
              if (f == null)
                return this.getIntersection2(i, r, n);
              var o = i.x, v = i.y, t = r.x, s = r.y, h = n.x, g = n.y, u = f.x, N = f.y, p = void 0, T = void 0, L = void 0, D = void 0, X = void 0, w = void 0, Z = void 0, W = void 0, Q = void 0;
              return L = s - v, X = o - t, Z = t * v - o * s, D = N - g, w = h - u, W = u * g - h * N, Q = L * w - D * X, Q === 0 ? null : (p = (X * W - w * Z) / Q, T = (D * Z - L * W) / Q, new c(p, T));
            }, a.angleOfVector = function(i, r, n, f) {
              var o = void 0;
              return i !== n ? (o = Math.atan((f - r) / (n - i)), n < i ? o += Math.PI : f < r && (o += this.TWO_PI)) : f < r ? o = this.ONE_AND_HALF_PI : o = this.HALF_PI, o;
            }, a.doIntersect = function(i, r, n, f) {
              var o = i.x, v = i.y, t = r.x, s = r.y, h = n.x, g = n.y, u = f.x, N = f.y, p = (t - o) * (N - g) - (u - h) * (s - v);
              if (p === 0)
                return !1;
              var T = ((N - g) * (u - o) + (h - u) * (N - v)) / p, L = ((v - s) * (u - o) + (t - o) * (N - v)) / p;
              return 0 < T && T < 1 && 0 < L && L < 1;
            }, a.findCircleLineIntersections = function(i, r, n, f, o, v, t) {
              var s = (n - i) * (n - i) + (f - r) * (f - r), h = 2 * ((i - o) * (n - i) + (r - v) * (f - r)), g = (i - o) * (i - o) + (r - v) * (r - v) - t * t, u = h * h - 4 * s * g;
              if (u >= 0) {
                var N = (-h + Math.sqrt(h * h - 4 * s * g)) / (2 * s), p = (-h - Math.sqrt(h * h - 4 * s * g)) / (2 * s), T = null;
                return N >= 0 && N <= 1 ? [N] : p >= 0 && p <= 1 ? [p] : T;
              } else
                return null;
            }, a.HALF_PI = 0.5 * Math.PI, a.ONE_AND_HALF_PI = 1.5 * Math.PI, a.TWO_PI = 2 * Math.PI, a.THREE_PI = 3 * Math.PI, I.exports = a;
          },
          /* 9 */
          /***/
          function(I, U, m) {
            function c() {
            }
            c.sign = function(a) {
              return a > 0 ? 1 : a < 0 ? -1 : 0;
            }, c.floor = function(a) {
              return a < 0 ? Math.ceil(a) : Math.floor(a);
            }, c.ceil = function(a) {
              return a < 0 ? Math.floor(a) : Math.ceil(a);
            }, I.exports = c;
          },
          /* 10 */
          /***/
          function(I, U, m) {
            function c() {
            }
            c.MAX_VALUE = 2147483647, c.MIN_VALUE = -2147483648, I.exports = c;
          },
          /* 11 */
          /***/
          function(I, U, m) {
            var c = /* @__PURE__ */ function() {
              function o(v, t) {
                for (var s = 0; s < t.length; s++) {
                  var h = t[s];
                  h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(v, h.key, h);
                }
              }
              return function(v, t, s) {
                return t && o(v.prototype, t), s && o(v, s), v;
              };
            }();
            function a(o, v) {
              if (!(o instanceof v))
                throw new TypeError("Cannot call a class as a function");
            }
            var i = function(v) {
              return { value: v, next: null, prev: null };
            }, r = function(v, t, s, h) {
              return v !== null ? v.next = t : h.head = t, s !== null ? s.prev = t : h.tail = t, t.prev = v, t.next = s, h.length++, t;
            }, n = function(v, t) {
              var s = v.prev, h = v.next;
              return s !== null ? s.next = h : t.head = h, h !== null ? h.prev = s : t.tail = s, v.prev = v.next = null, t.length--, v;
            }, f = function() {
              function o(v) {
                var t = this;
                a(this, o), this.length = 0, this.head = null, this.tail = null, v != null && v.forEach(function(s) {
                  return t.push(s);
                });
              }
              return c(o, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(t, s) {
                  return r(s.prev, i(t), s, this);
                }
              }, {
                key: "insertAfter",
                value: function(t, s) {
                  return r(s, i(t), s.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(t, s) {
                  return r(s.prev, t, s, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(t, s) {
                  return r(s, t, s.next, this);
                }
              }, {
                key: "push",
                value: function(t) {
                  return r(this.tail, i(t), null, this);
                }
              }, {
                key: "unshift",
                value: function(t) {
                  return r(null, i(t), this.head, this);
                }
              }, {
                key: "remove",
                value: function(t) {
                  return n(t, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return n(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return n(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return n(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return n(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(t) {
                  if (t <= this.length()) {
                    for (var s = 1, h = this.head; s < t; )
                      h = h.next, s++;
                    return h.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(t, s) {
                  if (t <= this.length()) {
                    for (var h = 1, g = this.head; h < t; )
                      g = g.next, h++;
                    g.value = s;
                  }
                }
              }]), o;
            }();
            I.exports = f;
          },
          /* 12 */
          /***/
          function(I, U, m) {
            function c(a, i, r) {
              this.x = null, this.y = null, a == null && i == null && r == null ? (this.x = 0, this.y = 0) : typeof a == "number" && typeof i == "number" && r == null ? (this.x = a, this.y = i) : a.constructor.name == "Point" && i == null && r == null && (r = a, this.x = r.x, this.y = r.y);
            }
            c.prototype.getX = function() {
              return this.x;
            }, c.prototype.getY = function() {
              return this.y;
            }, c.prototype.getLocation = function() {
              return new c(this.x, this.y);
            }, c.prototype.setLocation = function(a, i, r) {
              a.constructor.name == "Point" && i == null && r == null ? (r = a, this.setLocation(r.x, r.y)) : typeof a == "number" && typeof i == "number" && r == null && (parseInt(a) == a && parseInt(i) == i ? this.move(a, i) : (this.x = Math.floor(a + 0.5), this.y = Math.floor(i + 0.5)));
            }, c.prototype.move = function(a, i) {
              this.x = a, this.y = i;
            }, c.prototype.translate = function(a, i) {
              this.x += a, this.y += i;
            }, c.prototype.equals = function(a) {
              if (a.constructor.name == "Point") {
                var i = a;
                return this.x == i.x && this.y == i.y;
              }
              return this == a;
            }, c.prototype.toString = function() {
              return new c().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, I.exports = c;
          },
          /* 13 */
          /***/
          function(I, U, m) {
            function c(a, i, r, n) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, a != null && i != null && r != null && n != null && (this.x = a, this.y = i, this.width = r, this.height = n);
            }
            c.prototype.getX = function() {
              return this.x;
            }, c.prototype.setX = function(a) {
              this.x = a;
            }, c.prototype.getY = function() {
              return this.y;
            }, c.prototype.setY = function(a) {
              this.y = a;
            }, c.prototype.getWidth = function() {
              return this.width;
            }, c.prototype.setWidth = function(a) {
              this.width = a;
            }, c.prototype.getHeight = function() {
              return this.height;
            }, c.prototype.setHeight = function(a) {
              this.height = a;
            }, c.prototype.getRight = function() {
              return this.x + this.width;
            }, c.prototype.getBottom = function() {
              return this.y + this.height;
            }, c.prototype.intersects = function(a) {
              return !(this.getRight() < a.x || this.getBottom() < a.y || a.getRight() < this.x || a.getBottom() < this.y);
            }, c.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, c.prototype.getMinX = function() {
              return this.getX();
            }, c.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, c.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, c.prototype.getMinY = function() {
              return this.getY();
            }, c.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, c.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, c.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, I.exports = c;
          },
          /* 14 */
          /***/
          function(I, U, m) {
            var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
              return typeof i;
            } : function(i) {
              return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
            };
            function a() {
            }
            a.lastID = 0, a.createID = function(i) {
              return a.isPrimitive(i) ? i : (i.uniqueID != null || (i.uniqueID = a.getString(), a.lastID++), i.uniqueID);
            }, a.getString = function(i) {
              return i == null && (i = a.lastID), "Object#" + i;
            }, a.isPrimitive = function(i) {
              var r = typeof i > "u" ? "undefined" : c(i);
              return i == null || r != "object" && r != "function";
            }, I.exports = a;
          },
          /* 15 */
          /***/
          function(I, U, m) {
            function c(h) {
              if (Array.isArray(h)) {
                for (var g = 0, u = Array(h.length); g < h.length; g++)
                  u[g] = h[g];
                return u;
              } else
                return Array.from(h);
            }
            var a = m(0), i = m(7), r = m(3), n = m(1), f = m(6), o = m(5), v = m(17), t = m(29);
            function s(h) {
              t.call(this), this.layoutQuality = a.QUALITY, this.createBendsAsNeeded = a.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = a.DEFAULT_INCREMENTAL, this.animationOnLayout = a.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = a.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = a.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = a.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new i(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, h != null && (this.isRemoteUse = h);
            }
            s.RANDOM_SEED = 1, s.prototype = Object.create(t.prototype), s.prototype.getGraphManager = function() {
              return this.graphManager;
            }, s.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, s.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, s.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, s.prototype.newGraphManager = function() {
              var h = new i(this);
              return this.graphManager = h, h;
            }, s.prototype.newGraph = function(h) {
              return new f(null, this.graphManager, h);
            }, s.prototype.newNode = function(h) {
              return new r(this.graphManager, h);
            }, s.prototype.newEdge = function(h) {
              return new n(null, null, h);
            }, s.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, s.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var h;
              return this.checkLayoutSuccess() ? h = !1 : h = this.layout(), a.ANIMATE === "during" ? !1 : (h && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, h);
            }, s.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, s.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var h = this.graphManager.getAllEdges(), g = 0; g < h.length; g++)
                  h[g];
                for (var u = this.graphManager.getRoot().getNodes(), g = 0; g < u.length; g++)
                  u[g];
                this.update(this.graphManager.getRoot());
              }
            }, s.prototype.update = function(h) {
              if (h == null)
                this.update2();
              else if (h instanceof r) {
                var g = h;
                if (g.getChild() != null)
                  for (var u = g.getChild().getNodes(), N = 0; N < u.length; N++)
                    update(u[N]);
                if (g.vGraphObject != null) {
                  var p = g.vGraphObject;
                  p.update(g);
                }
              } else if (h instanceof n) {
                var T = h;
                if (T.vGraphObject != null) {
                  var L = T.vGraphObject;
                  L.update(T);
                }
              } else if (h instanceof f) {
                var D = h;
                if (D.vGraphObject != null) {
                  var X = D.vGraphObject;
                  X.update(D);
                }
              }
            }, s.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = a.QUALITY, this.animationDuringLayout = a.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = a.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = a.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = a.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = a.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = a.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, s.prototype.transform = function(h) {
              if (h == null)
                this.transform(new o(0, 0));
              else {
                var g = new v(), u = this.graphManager.getRoot().updateLeftTop();
                if (u != null) {
                  g.setWorldOrgX(h.x), g.setWorldOrgY(h.y), g.setDeviceOrgX(u.x), g.setDeviceOrgY(u.y);
                  for (var N = this.getAllNodes(), p, T = 0; T < N.length; T++)
                    p = N[T], p.transform(g);
                }
              }
            }, s.prototype.positionNodesRandomly = function(h) {
              if (h == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var g, u, N = h.getNodes(), p = 0; p < N.length; p++)
                  g = N[p], u = g.getChild(), u == null || u.getNodes().length == 0 ? g.scatter() : (this.positionNodesRandomly(u), g.updateBounds());
            }, s.prototype.getFlatForest = function() {
              for (var h = [], g = !0, u = this.graphManager.getRoot().getNodes(), N = !0, p = 0; p < u.length; p++)
                u[p].getChild() != null && (N = !1);
              if (!N)
                return h;
              var T = /* @__PURE__ */ new Set(), L = [], D = /* @__PURE__ */ new Map(), X = [];
              for (X = X.concat(u); X.length > 0 && g; ) {
                for (L.push(X[0]); L.length > 0 && g; ) {
                  var w = L[0];
                  L.splice(0, 1), T.add(w);
                  for (var Z = w.getEdges(), p = 0; p < Z.length; p++) {
                    var W = Z[p].getOtherEnd(w);
                    if (D.get(w) != W)
                      if (!T.has(W))
                        L.push(W), D.set(W, w);
                      else {
                        g = !1;
                        break;
                      }
                  }
                }
                if (!g)
                  h = [];
                else {
                  var Q = [].concat(c(T));
                  h.push(Q);
                  for (var p = 0; p < Q.length; p++) {
                    var R = Q[p], ht = X.indexOf(R);
                    ht > -1 && X.splice(ht, 1);
                  }
                  T = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
                }
              }
              return h;
            }, s.prototype.createDummyNodesForBendpoints = function(h) {
              for (var g = [], u = h.source, N = this.graphManager.calcLowestCommonAncestor(h.source, h.target), p = 0; p < h.bendpoints.length; p++) {
                var T = this.newNode(null);
                T.setRect(new Point(0, 0), new Dimension(1, 1)), N.add(T);
                var L = this.newEdge(null);
                this.graphManager.add(L, u, T), g.add(T), u = T;
              }
              var L = this.newEdge(null);
              return this.graphManager.add(L, u, h.target), this.edgeToDummyNodes.set(h, g), h.isInterGraph() ? this.graphManager.remove(h) : N.remove(h), g;
            }, s.prototype.createBendpointsFromDummyNodes = function() {
              var h = [];
              h = h.concat(this.graphManager.getAllEdges()), h = [].concat(c(this.edgeToDummyNodes.keys())).concat(h);
              for (var g = 0; g < h.length; g++) {
                var u = h[g];
                if (u.bendpoints.length > 0) {
                  for (var N = this.edgeToDummyNodes.get(u), p = 0; p < N.length; p++) {
                    var T = N[p], L = new o(T.getCenterX(), T.getCenterY()), D = u.bendpoints.get(p);
                    D.x = L.x, D.y = L.y, T.getOwner().remove(T);
                  }
                  this.graphManager.add(u, u.source, u.target);
                }
              }
            }, s.transform = function(h, g, u, N) {
              if (u != null && N != null) {
                var p = g;
                if (h <= 50) {
                  var T = g / u;
                  p -= (g - T) / 50 * (50 - h);
                } else {
                  var L = g * N;
                  p += (L - g) / 50 * (h - 50);
                }
                return p;
              } else {
                var D, X;
                return h <= 50 ? (D = 9 * g / 500, X = g / 10) : (D = 9 * g / 50, X = -8 * g), D * h + X;
              }
            }, s.findCenterOfTree = function(h) {
              var g = [];
              g = g.concat(h);
              var u = [], N = /* @__PURE__ */ new Map(), p = !1, T = null;
              (g.length == 1 || g.length == 2) && (p = !0, T = g[0]);
              for (var L = 0; L < g.length; L++) {
                var D = g[L], X = D.getNeighborsList().size;
                N.set(D, D.getNeighborsList().size), X == 1 && u.push(D);
              }
              var w = [];
              for (w = w.concat(u); !p; ) {
                var Z = [];
                Z = Z.concat(w), w = [];
                for (var L = 0; L < g.length; L++) {
                  var D = g[L], W = g.indexOf(D);
                  W >= 0 && g.splice(W, 1);
                  var Q = D.getNeighborsList();
                  Q.forEach(function(e) {
                    if (u.indexOf(e) < 0) {
                      var y = N.get(e), l = y - 1;
                      l == 1 && w.push(e), N.set(e, l);
                    }
                  });
                }
                u = u.concat(w), (g.length == 1 || g.length == 2) && (p = !0, T = g[0]);
              }
              return T;
            }, s.prototype.setGraphManager = function(h) {
              this.graphManager = h;
            }, I.exports = s;
          },
          /* 16 */
          /***/
          function(I, U, m) {
            function c() {
            }
            c.seed = 1, c.x = 0, c.nextDouble = function() {
              return c.x = Math.sin(c.seed++) * 1e4, c.x - Math.floor(c.x);
            }, I.exports = c;
          },
          /* 17 */
          /***/
          function(I, U, m) {
            var c = m(5);
            function a(i, r) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            a.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, a.prototype.setWorldOrgX = function(i) {
              this.lworldOrgX = i;
            }, a.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, a.prototype.setWorldOrgY = function(i) {
              this.lworldOrgY = i;
            }, a.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, a.prototype.setWorldExtX = function(i) {
              this.lworldExtX = i;
            }, a.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, a.prototype.setWorldExtY = function(i) {
              this.lworldExtY = i;
            }, a.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, a.prototype.setDeviceOrgX = function(i) {
              this.ldeviceOrgX = i;
            }, a.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, a.prototype.setDeviceOrgY = function(i) {
              this.ldeviceOrgY = i;
            }, a.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, a.prototype.setDeviceExtX = function(i) {
              this.ldeviceExtX = i;
            }, a.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, a.prototype.setDeviceExtY = function(i) {
              this.ldeviceExtY = i;
            }, a.prototype.transformX = function(i) {
              var r = 0, n = this.lworldExtX;
              return n != 0 && (r = this.ldeviceOrgX + (i - this.lworldOrgX) * this.ldeviceExtX / n), r;
            }, a.prototype.transformY = function(i) {
              var r = 0, n = this.lworldExtY;
              return n != 0 && (r = this.ldeviceOrgY + (i - this.lworldOrgY) * this.ldeviceExtY / n), r;
            }, a.prototype.inverseTransformX = function(i) {
              var r = 0, n = this.ldeviceExtX;
              return n != 0 && (r = this.lworldOrgX + (i - this.ldeviceOrgX) * this.lworldExtX / n), r;
            }, a.prototype.inverseTransformY = function(i) {
              var r = 0, n = this.ldeviceExtY;
              return n != 0 && (r = this.lworldOrgY + (i - this.ldeviceOrgY) * this.lworldExtY / n), r;
            }, a.prototype.inverseTransformPoint = function(i) {
              var r = new c(this.inverseTransformX(i.x), this.inverseTransformY(i.y));
              return r;
            }, I.exports = a;
          },
          /* 18 */
          /***/
          function(I, U, m) {
            function c(t) {
              if (Array.isArray(t)) {
                for (var s = 0, h = Array(t.length); s < t.length; s++)
                  h[s] = t[s];
                return h;
              } else
                return Array.from(t);
            }
            var a = m(15), i = m(4), r = m(0), n = m(8), f = m(9);
            function o() {
              a.call(this), this.useSmartIdealEdgeLengthCalculation = i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = i.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = i.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = i.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * i.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = i.MAX_ITERATIONS;
            }
            o.prototype = Object.create(a.prototype);
            for (var v in a)
              o[v] = a[v];
            o.prototype.initParameters = function() {
              a.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, o.prototype.calcIdealEdgeLengths = function() {
              for (var t, s, h, g, u, N, p, T = this.getGraphManager().getAllEdges(), L = 0; L < T.length; L++)
                t = T[L], s = t.idealLength, t.isInterGraph && (g = t.getSource(), u = t.getTarget(), N = t.getSourceInLca().getEstimatedSize(), p = t.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t.idealLength += N + p - 2 * r.SIMPLE_NODE_SIZE), h = t.getLca().getInclusionTreeDepth(), t.idealLength += s * i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (g.getInclusionTreeDepth() + u.getInclusionTreeDepth() - 2 * h));
            }, o.prototype.initSpringEmbedder = function() {
              var t = this.getAllNodes().length;
              this.incremental ? (t > i.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * i.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - i.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t > i.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(i.COOLING_ADAPTATION_FACTOR, 1 - (t - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT) * (1 - i.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * i.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, o.prototype.calcSpringForces = function() {
              for (var t = this.getAllEdges(), s, h = 0; h < t.length; h++)
                s = t[h], this.calcSpringForce(s, s.idealLength);
            }, o.prototype.calcRepulsionForces = function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h, g, u, N, p = this.getAllNodes(), T;
              if (this.useFRGridVariant)
                for (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && t && this.updateGrid(), T = /* @__PURE__ */ new Set(), h = 0; h < p.length; h++)
                  u = p[h], this.calculateRepulsionForceOfANode(u, T, t, s), T.add(u);
              else
                for (h = 0; h < p.length; h++)
                  for (u = p[h], g = h + 1; g < p.length; g++)
                    N = p[g], u.getOwner() == N.getOwner() && this.calcRepulsionForce(u, N);
            }, o.prototype.calcGravitationalForces = function() {
              for (var t, s = this.getAllNodesToApplyGravitation(), h = 0; h < s.length; h++)
                t = s[h], this.calcGravitationalForce(t);
            }, o.prototype.moveNodes = function() {
              for (var t = this.getAllNodes(), s, h = 0; h < t.length; h++)
                s = t[h], s.move();
            }, o.prototype.calcSpringForce = function(t, s) {
              var h = t.getSource(), g = t.getTarget(), u, N, p, T;
              if (this.uniformLeafNodeSizes && h.getChild() == null && g.getChild() == null)
                t.updateLengthSimple();
              else if (t.updateLength(), t.isOverlapingSourceAndTarget)
                return;
              u = t.getLength(), u != 0 && (N = t.edgeElasticity * (u - s), p = N * (t.lengthX / u), T = N * (t.lengthY / u), h.springForceX += p, h.springForceY += T, g.springForceX -= p, g.springForceY -= T);
            }, o.prototype.calcRepulsionForce = function(t, s) {
              var h = t.getRect(), g = s.getRect(), u = new Array(2), N = new Array(4), p, T, L, D, X, w, Z;
              if (h.intersects(g)) {
                n.calcSeparationAmount(h, g, u, i.DEFAULT_EDGE_LENGTH / 2), w = 2 * u[0], Z = 2 * u[1];
                var W = t.noOfChildren * s.noOfChildren / (t.noOfChildren + s.noOfChildren);
                t.repulsionForceX -= W * w, t.repulsionForceY -= W * Z, s.repulsionForceX += W * w, s.repulsionForceY += W * Z;
              } else
                this.uniformLeafNodeSizes && t.getChild() == null && s.getChild() == null ? (p = g.getCenterX() - h.getCenterX(), T = g.getCenterY() - h.getCenterY()) : (n.getIntersection(h, g, N), p = N[2] - N[0], T = N[3] - N[1]), Math.abs(p) < i.MIN_REPULSION_DIST && (p = f.sign(p) * i.MIN_REPULSION_DIST), Math.abs(T) < i.MIN_REPULSION_DIST && (T = f.sign(T) * i.MIN_REPULSION_DIST), L = p * p + T * T, D = Math.sqrt(L), X = (t.nodeRepulsion / 2 + s.nodeRepulsion / 2) * t.noOfChildren * s.noOfChildren / L, w = X * p / D, Z = X * T / D, t.repulsionForceX -= w, t.repulsionForceY -= Z, s.repulsionForceX += w, s.repulsionForceY += Z;
            }, o.prototype.calcGravitationalForce = function(t) {
              var s, h, g, u, N, p, T, L;
              s = t.getOwner(), h = (s.getRight() + s.getLeft()) / 2, g = (s.getTop() + s.getBottom()) / 2, u = t.getCenterX() - h, N = t.getCenterY() - g, p = Math.abs(u) + t.getWidth() / 2, T = Math.abs(N) + t.getHeight() / 2, t.getOwner() == this.graphManager.getRoot() ? (L = s.getEstimatedSize() * this.gravityRangeFactor, (p > L || T > L) && (t.gravitationForceX = -this.gravityConstant * u, t.gravitationForceY = -this.gravityConstant * N)) : (L = s.getEstimatedSize() * this.compoundGravityRangeFactor, (p > L || T > L) && (t.gravitationForceX = -this.gravityConstant * u * this.compoundGravityConstant, t.gravitationForceY = -this.gravityConstant * N * this.compoundGravityConstant));
            }, o.prototype.isConverged = function() {
              var t, s = !1;
              return this.totalIterations > this.maxIterations / 3 && (s = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t || s;
            }, o.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, o.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var t, s = this.graphManager.getAllNodes(), h = 0; h < s.length; h++)
                t = s[h], t.noOfChildren = t.getNoOfChildren();
            }, o.prototype.calcGrid = function(t) {
              var s = 0, h = 0;
              s = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange)), h = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
              for (var g = new Array(s), u = 0; u < s; u++)
                g[u] = new Array(h);
              for (var u = 0; u < s; u++)
                for (var N = 0; N < h; N++)
                  g[u][N] = new Array();
              return g;
            }, o.prototype.addNodeToGrid = function(t, s, h) {
              var g = 0, u = 0, N = 0, p = 0;
              g = parseInt(Math.floor((t.getRect().x - s) / this.repulsionRange)), u = parseInt(Math.floor((t.getRect().width + t.getRect().x - s) / this.repulsionRange)), N = parseInt(Math.floor((t.getRect().y - h) / this.repulsionRange)), p = parseInt(Math.floor((t.getRect().height + t.getRect().y - h) / this.repulsionRange));
              for (var T = g; T <= u; T++)
                for (var L = N; L <= p; L++)
                  this.grid[T][L].push(t), t.setGridCoordinates(g, u, N, p);
            }, o.prototype.updateGrid = function() {
              var t, s, h = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0; t < h.length; t++)
                s = h[t], this.addNodeToGrid(s, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, o.prototype.calculateRepulsionForceOfANode = function(t, s, h, g) {
              if (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && h || g) {
                var u = /* @__PURE__ */ new Set();
                t.surrounding = new Array();
                for (var N, p = this.grid, T = t.startX - 1; T < t.finishX + 2; T++)
                  for (var L = t.startY - 1; L < t.finishY + 2; L++)
                    if (!(T < 0 || L < 0 || T >= p.length || L >= p[0].length)) {
                      for (var D = 0; D < p[T][L].length; D++)
                        if (N = p[T][L][D], !(t.getOwner() != N.getOwner() || t == N) && !s.has(N) && !u.has(N)) {
                          var X = Math.abs(t.getCenterX() - N.getCenterX()) - (t.getWidth() / 2 + N.getWidth() / 2), w = Math.abs(t.getCenterY() - N.getCenterY()) - (t.getHeight() / 2 + N.getHeight() / 2);
                          X <= this.repulsionRange && w <= this.repulsionRange && u.add(N);
                        }
                    }
                t.surrounding = [].concat(c(u));
              }
              for (T = 0; T < t.surrounding.length; T++)
                this.calcRepulsionForce(t, t.surrounding[T]);
            }, o.prototype.calcRepulsionRange = function() {
              return 0;
            }, I.exports = o;
          },
          /* 19 */
          /***/
          function(I, U, m) {
            var c = m(1), a = m(4);
            function i(n, f, o) {
              c.call(this, n, f, o), this.idealLength = a.DEFAULT_EDGE_LENGTH, this.edgeElasticity = a.DEFAULT_SPRING_STRENGTH;
            }
            i.prototype = Object.create(c.prototype);
            for (var r in c)
              i[r] = c[r];
            I.exports = i;
          },
          /* 20 */
          /***/
          function(I, U, m) {
            var c = m(3), a = m(4);
            function i(n, f, o, v) {
              c.call(this, n, f, o, v), this.nodeRepulsion = a.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            i.prototype = Object.create(c.prototype);
            for (var r in c)
              i[r] = c[r];
            i.prototype.setGridCoordinates = function(n, f, o, v) {
              this.startX = n, this.finishX = f, this.startY = o, this.finishY = v;
            }, I.exports = i;
          },
          /* 21 */
          /***/
          function(I, U, m) {
            function c(a, i) {
              this.width = 0, this.height = 0, a !== null && i !== null && (this.height = i, this.width = a);
            }
            c.prototype.getWidth = function() {
              return this.width;
            }, c.prototype.setWidth = function(a) {
              this.width = a;
            }, c.prototype.getHeight = function() {
              return this.height;
            }, c.prototype.setHeight = function(a) {
              this.height = a;
            }, I.exports = c;
          },
          /* 22 */
          /***/
          function(I, U, m) {
            var c = m(14);
            function a() {
              this.map = {}, this.keys = [];
            }
            a.prototype.put = function(i, r) {
              var n = c.createID(i);
              this.contains(n) || (this.map[n] = r, this.keys.push(i));
            }, a.prototype.contains = function(i) {
              return c.createID(i), this.map[i] != null;
            }, a.prototype.get = function(i) {
              var r = c.createID(i);
              return this.map[r];
            }, a.prototype.keySet = function() {
              return this.keys;
            }, I.exports = a;
          },
          /* 23 */
          /***/
          function(I, U, m) {
            var c = m(14);
            function a() {
              this.set = {};
            }
            a.prototype.add = function(i) {
              var r = c.createID(i);
              this.contains(r) || (this.set[r] = i);
            }, a.prototype.remove = function(i) {
              delete this.set[c.createID(i)];
            }, a.prototype.clear = function() {
              this.set = {};
            }, a.prototype.contains = function(i) {
              return this.set[c.createID(i)] == i;
            }, a.prototype.isEmpty = function() {
              return this.size() === 0;
            }, a.prototype.size = function() {
              return Object.keys(this.set).length;
            }, a.prototype.addAllTo = function(i) {
              for (var r = Object.keys(this.set), n = r.length, f = 0; f < n; f++)
                i.push(this.set[r[f]]);
            }, a.prototype.size = function() {
              return Object.keys(this.set).length;
            }, a.prototype.addAll = function(i) {
              for (var r = i.length, n = 0; n < r; n++) {
                var f = i[n];
                this.add(f);
              }
            }, I.exports = a;
          },
          /* 24 */
          /***/
          function(I, U, m) {
            function c() {
            }
            c.multMat = function(a, i) {
              for (var r = [], n = 0; n < a.length; n++) {
                r[n] = [];
                for (var f = 0; f < i[0].length; f++) {
                  r[n][f] = 0;
                  for (var o = 0; o < a[0].length; o++)
                    r[n][f] += a[n][o] * i[o][f];
                }
              }
              return r;
            }, c.transpose = function(a) {
              for (var i = [], r = 0; r < a[0].length; r++) {
                i[r] = [];
                for (var n = 0; n < a.length; n++)
                  i[r][n] = a[n][r];
              }
              return i;
            }, c.multCons = function(a, i) {
              for (var r = [], n = 0; n < a.length; n++)
                r[n] = a[n] * i;
              return r;
            }, c.minusOp = function(a, i) {
              for (var r = [], n = 0; n < a.length; n++)
                r[n] = a[n] - i[n];
              return r;
            }, c.dotProduct = function(a, i) {
              for (var r = 0, n = 0; n < a.length; n++)
                r += a[n] * i[n];
              return r;
            }, c.mag = function(a) {
              return Math.sqrt(this.dotProduct(a, a));
            }, c.normalize = function(a) {
              for (var i = [], r = this.mag(a), n = 0; n < a.length; n++)
                i[n] = a[n] / r;
              return i;
            }, c.multGamma = function(a) {
              for (var i = [], r = 0, n = 0; n < a.length; n++)
                r += a[n];
              r *= -1 / a.length;
              for (var f = 0; f < a.length; f++)
                i[f] = r + a[f];
              return i;
            }, c.multL = function(a, i, r) {
              for (var n = [], f = [], o = [], v = 0; v < i[0].length; v++) {
                for (var t = 0, s = 0; s < i.length; s++)
                  t += -0.5 * i[s][v] * a[s];
                f[v] = t;
              }
              for (var h = 0; h < r.length; h++) {
                for (var g = 0, u = 0; u < r.length; u++)
                  g += r[h][u] * f[u];
                o[h] = g;
              }
              for (var N = 0; N < i.length; N++) {
                for (var p = 0, T = 0; T < i[0].length; T++)
                  p += i[N][T] * o[T];
                n[N] = p;
              }
              return n;
            }, I.exports = c;
          },
          /* 25 */
          /***/
          function(I, U, m) {
            var c = /* @__PURE__ */ function() {
              function n(f, o) {
                for (var v = 0; v < o.length; v++) {
                  var t = o[v];
                  t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(f, t.key, t);
                }
              }
              return function(f, o, v) {
                return o && n(f.prototype, o), v && n(f, v), f;
              };
            }();
            function a(n, f) {
              if (!(n instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var i = m(11), r = function() {
              function n(f, o) {
                a(this, n), (o !== null || o !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var v = void 0;
                f instanceof i ? v = f.size() : v = f.length, this._quicksort(f, 0, v - 1);
              }
              return c(n, [{
                key: "_quicksort",
                value: function(o, v, t) {
                  if (v < t) {
                    var s = this._partition(o, v, t);
                    this._quicksort(o, v, s), this._quicksort(o, s + 1, t);
                  }
                }
              }, {
                key: "_partition",
                value: function(o, v, t) {
                  for (var s = this._get(o, v), h = v, g = t; ; ) {
                    for (; this.compareFunction(s, this._get(o, g)); )
                      g--;
                    for (; this.compareFunction(this._get(o, h), s); )
                      h++;
                    if (h < g)
                      this._swap(o, h, g), h++, g--;
                    else
                      return g;
                  }
                }
              }, {
                key: "_get",
                value: function(o, v) {
                  return o instanceof i ? o.get_object_at(v) : o[v];
                }
              }, {
                key: "_set",
                value: function(o, v, t) {
                  o instanceof i ? o.set_object_at(v, t) : o[v] = t;
                }
              }, {
                key: "_swap",
                value: function(o, v, t) {
                  var s = this._get(o, v);
                  this._set(o, v, this._get(o, t)), this._set(o, t, s);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(o, v) {
                  return v > o;
                }
              }]), n;
            }();
            I.exports = r;
          },
          /* 26 */
          /***/
          function(I, U, m) {
            function c() {
            }
            c.svd = function(a) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = a.length, this.n = a[0].length;
              var i = Math.min(this.m, this.n);
              this.s = function(lt) {
                for (var ut = []; lt-- > 0; )
                  ut.push(0);
                return ut;
              }(Math.min(this.m + 1, this.n)), this.U = function(lt) {
                var ut = function Gt(At) {
                  if (At.length == 0)
                    return 0;
                  for (var St = [], Mt = 0; Mt < At[0]; Mt++)
                    St.push(Gt(At.slice(1)));
                  return St;
                };
                return ut(lt);
              }([this.m, i]), this.V = function(lt) {
                var ut = function Gt(At) {
                  if (At.length == 0)
                    return 0;
                  for (var St = [], Mt = 0; Mt < At[0]; Mt++)
                    St.push(Gt(At.slice(1)));
                  return St;
                };
                return ut(lt);
              }([this.n, this.n]);
              for (var r = function(lt) {
                for (var ut = []; lt-- > 0; )
                  ut.push(0);
                return ut;
              }(this.n), n = function(lt) {
                for (var ut = []; lt-- > 0; )
                  ut.push(0);
                return ut;
              }(this.m), f = !0, o = Math.min(this.m - 1, this.n), v = Math.max(0, Math.min(this.n - 2, this.m)), t = 0; t < Math.max(o, v); t++) {
                if (t < o) {
                  this.s[t] = 0;
                  for (var s = t; s < this.m; s++)
                    this.s[t] = c.hypot(this.s[t], a[s][t]);
                  if (this.s[t] !== 0) {
                    a[t][t] < 0 && (this.s[t] = -this.s[t]);
                    for (var h = t; h < this.m; h++)
                      a[h][t] /= this.s[t];
                    a[t][t] += 1;
                  }
                  this.s[t] = -this.s[t];
                }
                for (var g = t + 1; g < this.n; g++) {
                  if (/* @__PURE__ */ function(lt, ut) {
                    return lt && ut;
                  }(t < o, this.s[t] !== 0)) {
                    for (var u = 0, N = t; N < this.m; N++)
                      u += a[N][t] * a[N][g];
                    u = -u / a[t][t];
                    for (var p = t; p < this.m; p++)
                      a[p][g] += u * a[p][t];
                  }
                  r[g] = a[t][g];
                }
                if (/* @__PURE__ */ function(lt, ut) {
                  return ut;
                }(f, t < o))
                  for (var T = t; T < this.m; T++)
                    this.U[T][t] = a[T][t];
                if (t < v) {
                  r[t] = 0;
                  for (var L = t + 1; L < this.n; L++)
                    r[t] = c.hypot(r[t], r[L]);
                  if (r[t] !== 0) {
                    r[t + 1] < 0 && (r[t] = -r[t]);
                    for (var D = t + 1; D < this.n; D++)
                      r[D] /= r[t];
                    r[t + 1] += 1;
                  }
                  if (r[t] = -r[t], /* @__PURE__ */ function(lt, ut) {
                    return lt && ut;
                  }(t + 1 < this.m, r[t] !== 0)) {
                    for (var X = t + 1; X < this.m; X++)
                      n[X] = 0;
                    for (var w = t + 1; w < this.n; w++)
                      for (var Z = t + 1; Z < this.m; Z++)
                        n[Z] += r[w] * a[Z][w];
                    for (var W = t + 1; W < this.n; W++)
                      for (var Q = -r[W] / r[t + 1], R = t + 1; R < this.m; R++)
                        a[R][W] += Q * n[R];
                  }
                  for (var ht = t + 1; ht < this.n; ht++)
                    this.V[ht][t] = r[ht];
                }
              }
              var e = Math.min(this.n, this.m + 1);
              o < this.n && (this.s[o] = a[o][o]), this.m < e && (this.s[e - 1] = 0), v + 1 < e && (r[v] = a[v][e - 1]), r[e - 1] = 0;
              {
                for (var y = o; y < i; y++) {
                  for (var l = 0; l < this.m; l++)
                    this.U[l][y] = 0;
                  this.U[y][y] = 1;
                }
                for (var d = o - 1; d >= 0; d--)
                  if (this.s[d] !== 0) {
                    for (var E = d + 1; E < i; E++) {
                      for (var M = 0, C = d; C < this.m; C++)
                        M += this.U[C][d] * this.U[C][E];
                      M = -M / this.U[d][d];
                      for (var A = d; A < this.m; A++)
                        this.U[A][E] += M * this.U[A][d];
                    }
                    for (var P = d; P < this.m; P++)
                      this.U[P][d] = -this.U[P][d];
                    this.U[d][d] = 1 + this.U[d][d];
                    for (var O = 0; O < d - 1; O++)
                      this.U[O][d] = 0;
                  } else {
                    for (var K = 0; K < this.m; K++)
                      this.U[K][d] = 0;
                    this.U[d][d] = 1;
                  }
              }
              for (var b = this.n - 1; b >= 0; b--) {
                if (/* @__PURE__ */ function(lt, ut) {
                  return lt && ut;
                }(b < v, r[b] !== 0))
                  for (var Y = b + 1; Y < i; Y++) {
                    for (var _ = 0, B = b + 1; B < this.n; B++)
                      _ += this.V[B][b] * this.V[B][Y];
                    _ = -_ / this.V[b + 1][b];
                    for (var x = b + 1; x < this.n; x++)
                      this.V[x][Y] += _ * this.V[x][b];
                  }
                for (var H = 0; H < this.n; H++)
                  this.V[H][b] = 0;
                this.V[b][b] = 1;
              }
              for (var $ = e - 1, j = Math.pow(2, -52), ft = Math.pow(2, -966); e > 0; ) {
                var V = void 0, Ot = void 0;
                for (V = e - 2; V >= -1 && V !== -1; V--)
                  if (Math.abs(r[V]) <= ft + j * (Math.abs(this.s[V]) + Math.abs(this.s[V + 1]))) {
                    r[V] = 0;
                    break;
                  }
                if (V === e - 2)
                  Ot = 4;
                else {
                  var vt = void 0;
                  for (vt = e - 1; vt >= V && vt !== V; vt--) {
                    var $t = (vt !== e ? Math.abs(r[vt]) : 0) + (vt !== V + 1 ? Math.abs(r[vt - 1]) : 0);
                    if (Math.abs(this.s[vt]) <= ft + j * $t) {
                      this.s[vt] = 0;
                      break;
                    }
                  }
                  vt === V ? Ot = 3 : vt === e - 1 ? Ot = 1 : (Ot = 2, V = vt);
                }
                switch (V++, Ot) {
                  case 1:
                    {
                      var Vt = r[e - 2];
                      r[e - 2] = 0;
                      for (var Nt = e - 2; Nt >= V; Nt--) {
                        var Yt = c.hypot(this.s[Nt], Vt), Xt = this.s[Nt] / Yt, ie = Vt / Yt;
                        this.s[Nt] = Yt, Nt !== V && (Vt = -ie * r[Nt - 1], r[Nt - 1] = Xt * r[Nt - 1]);
                        for (var xt = 0; xt < this.n; xt++)
                          Yt = Xt * this.V[xt][Nt] + ie * this.V[xt][e - 1], this.V[xt][e - 1] = -ie * this.V[xt][Nt] + Xt * this.V[xt][e - 1], this.V[xt][Nt] = Yt;
                      }
                    }
                    break;
                  case 2:
                    {
                      var Jt = r[V - 1];
                      r[V - 1] = 0;
                      for (var Ft = V; Ft < e; Ft++) {
                        var zt = c.hypot(this.s[Ft], Jt), _t = this.s[Ft] / zt, ne = Jt / zt;
                        this.s[Ft] = zt, Jt = -ne * r[Ft], r[Ft] = _t * r[Ft];
                        for (var Pt = 0; Pt < this.m; Pt++)
                          zt = _t * this.U[Pt][Ft] + ne * this.U[Pt][V - 1], this.U[Pt][V - 1] = -ne * this.U[Pt][Ft] + _t * this.U[Pt][V - 1], this.U[Pt][Ft] = zt;
                      }
                    }
                    break;
                  case 3:
                    {
                      var Bt = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[e - 1]), Math.abs(this.s[e - 2])), Math.abs(r[e - 2])), Math.abs(this.s[V])), Math.abs(r[V])), Ut = this.s[e - 1] / Bt, G = this.s[e - 2] / Bt, z = r[e - 2] / Bt, k = this.s[V] / Bt, nt = r[V] / Bt, J = ((G + Ut) * (G - Ut) + z * z) / 2, at = Ut * z * (Ut * z), mt = 0;
                      /* @__PURE__ */ (function(lt, ut) {
                        return lt || ut;
                      })(J !== 0, at !== 0) && (mt = Math.sqrt(J * J + at), J < 0 && (mt = -mt), mt = at / (J + mt));
                      for (var pt = (k + Ut) * (k - Ut) + mt, et = k * nt, q = V; q < e - 1; q++) {
                        var dt = c.hypot(pt, et), Tt = pt / dt, ct = et / dt;
                        q !== V && (r[q - 1] = dt), pt = Tt * this.s[q] + ct * r[q], r[q] = Tt * r[q] - ct * this.s[q], et = ct * this.s[q + 1], this.s[q + 1] = Tt * this.s[q + 1];
                        for (var Dt = 0; Dt < this.n; Dt++)
                          dt = Tt * this.V[Dt][q] + ct * this.V[Dt][q + 1], this.V[Dt][q + 1] = -ct * this.V[Dt][q] + Tt * this.V[Dt][q + 1], this.V[Dt][q] = dt;
                        if (dt = c.hypot(pt, et), Tt = pt / dt, ct = et / dt, this.s[q] = dt, pt = Tt * r[q] + ct * this.s[q + 1], this.s[q + 1] = -ct * r[q] + Tt * this.s[q + 1], et = ct * r[q + 1], r[q + 1] = Tt * r[q + 1], q < this.m - 1)
                          for (var ot = 0; ot < this.m; ot++)
                            dt = Tt * this.U[ot][q] + ct * this.U[ot][q + 1], this.U[ot][q + 1] = -ct * this.U[ot][q] + Tt * this.U[ot][q + 1], this.U[ot][q] = dt;
                      }
                      r[e - 2] = pt;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[V] <= 0) {
                        this.s[V] = this.s[V] < 0 ? -this.s[V] : 0;
                        for (var rt = 0; rt <= $; rt++)
                          this.V[rt][V] = -this.V[rt][V];
                      }
                      for (; V < $ && !(this.s[V] >= this.s[V + 1]); ) {
                        var yt = this.s[V];
                        if (this.s[V] = this.s[V + 1], this.s[V + 1] = yt, V < this.n - 1)
                          for (var it = 0; it < this.n; it++)
                            yt = this.V[it][V + 1], this.V[it][V + 1] = this.V[it][V], this.V[it][V] = yt;
                        if (V < this.m - 1)
                          for (var tt = 0; tt < this.m; tt++)
                            yt = this.U[tt][V + 1], this.U[tt][V + 1] = this.U[tt][V], this.U[tt][V] = yt;
                        V++;
                      }
                      e--;
                    }
                    break;
                }
              }
              var wt = { U: this.U, V: this.V, S: this.s };
              return wt;
            }, c.hypot = function(a, i) {
              var r = void 0;
              return Math.abs(a) > Math.abs(i) ? (r = i / a, r = Math.abs(a) * Math.sqrt(1 + r * r)) : i != 0 ? (r = a / i, r = Math.abs(i) * Math.sqrt(1 + r * r)) : r = 0, r;
            }, I.exports = c;
          },
          /* 27 */
          /***/
          function(I, U, m) {
            var c = /* @__PURE__ */ function() {
              function r(n, f) {
                for (var o = 0; o < f.length; o++) {
                  var v = f[o];
                  v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(n, v.key, v);
                }
              }
              return function(n, f, o) {
                return f && r(n.prototype, f), o && r(n, o), n;
              };
            }();
            function a(r, n) {
              if (!(r instanceof n))
                throw new TypeError("Cannot call a class as a function");
            }
            var i = function() {
              function r(n, f) {
                var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, t = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                a(this, r), this.sequence1 = n, this.sequence2 = f, this.match_score = o, this.mismatch_penalty = v, this.gap_penalty = t, this.iMax = n.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                for (var s = 0; s < this.iMax; s++) {
                  this.grid[s] = new Array(this.jMax);
                  for (var h = 0; h < this.jMax; h++)
                    this.grid[s][h] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var g = 0; g < this.iMax; g++) {
                  this.tracebackGrid[g] = new Array(this.jMax);
                  for (var u = 0; u < this.jMax; u++)
                    this.tracebackGrid[g][u] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return c(r, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var f = 1; f < this.jMax; f++)
                    this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [!1, !1, !0];
                  for (var o = 1; o < this.iMax; o++)
                    this.grid[o][0] = this.grid[o - 1][0] + this.gap_penalty, this.tracebackGrid[o][0] = [!1, !0, !1];
                  for (var v = 1; v < this.iMax; v++)
                    for (var t = 1; t < this.jMax; t++) {
                      var s = void 0;
                      this.sequence1[v - 1] === this.sequence2[t - 1] ? s = this.grid[v - 1][t - 1] + this.match_score : s = this.grid[v - 1][t - 1] + this.mismatch_penalty;
                      var h = this.grid[v - 1][t] + this.gap_penalty, g = this.grid[v][t - 1] + this.gap_penalty, u = [s, h, g], N = this.arrayAllMaxIndexes(u);
                      this.grid[v][t] = u[N[0]], this.tracebackGrid[v][t] = [N.includes(0), N.includes(1), N.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var f = [];
                  for (f.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); f[0]; ) {
                    var o = f[0], v = this.tracebackGrid[o.pos[0]][o.pos[1]];
                    v[0] && f.push({
                      pos: [o.pos[0] - 1, o.pos[1] - 1],
                      seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
                      seq2: this.sequence2[o.pos[1] - 1] + o.seq2
                    }), v[1] && f.push({
                      pos: [o.pos[0] - 1, o.pos[1]],
                      seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
                      seq2: "-" + o.seq2
                    }), v[2] && f.push({
                      pos: [o.pos[0], o.pos[1] - 1],
                      seq1: "-" + o.seq1,
                      seq2: this.sequence2[o.pos[1] - 1] + o.seq2
                    }), o.pos[0] === 0 && o.pos[1] === 0 && this.alignments.push({
                      sequence1: o.seq1,
                      sequence2: o.seq2
                    }), f.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(f, o) {
                  for (var v = [], t = -1; (t = f.indexOf(o, t + 1)) !== -1; )
                    v.push(t);
                  return v;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(f) {
                  return this.getAllIndexes(f, Math.max.apply(null, f));
                }
              }]), r;
            }();
            I.exports = i;
          },
          /* 28 */
          /***/
          function(I, U, m) {
            var c = function() {
            };
            c.FDLayout = m(18), c.FDLayoutConstants = m(4), c.FDLayoutEdge = m(19), c.FDLayoutNode = m(20), c.DimensionD = m(21), c.HashMap = m(22), c.HashSet = m(23), c.IGeometry = m(8), c.IMath = m(9), c.Integer = m(10), c.Point = m(12), c.PointD = m(5), c.RandomSeed = m(16), c.RectangleD = m(13), c.Transform = m(17), c.UniqueIDGeneretor = m(14), c.Quicksort = m(25), c.LinkedList = m(11), c.LGraphObject = m(2), c.LGraph = m(6), c.LEdge = m(1), c.LGraphManager = m(7), c.LNode = m(3), c.Layout = m(15), c.LayoutConstants = m(0), c.NeedlemanWunsch = m(27), c.Matrix = m(24), c.SVD = m(26), I.exports = c;
          },
          /* 29 */
          /***/
          function(I, U, m) {
            function c() {
              this.listeners = [];
            }
            var a = c.prototype;
            a.addListener = function(i, r) {
              this.listeners.push({
                event: i,
                callback: r
              });
            }, a.removeListener = function(i, r) {
              for (var n = this.listeners.length; n >= 0; n--) {
                var f = this.listeners[n];
                f.event === i && f.callback === r && this.listeners.splice(n, 1);
              }
            }, a.emit = function(i, r) {
              for (var n = 0; n < this.listeners.length; n++) {
                var f = this.listeners[n];
                i === f.event && f.callback(r);
              }
            }, I.exports = c;
          }
          /******/
        ])
      );
    });
  }(de)), de.exports;
}
(function(S, F) {
  (function(U, m) {
    S.exports = m(Re());
  })(Ce, function(I) {
    return (
      /******/
      (() => {
        var U = {
          /***/
          45: (
            /***/
            (i, r, n) => {
              var f = {};
              f.layoutBase = n(551), f.CoSEConstants = n(806), f.CoSEEdge = n(767), f.CoSEGraph = n(880), f.CoSEGraphManager = n(578), f.CoSELayout = n(765), f.CoSENode = n(991), f.ConstraintHandler = n(902), i.exports = f;
            }
          ),
          /***/
          806: (
            /***/
            (i, r, n) => {
              var f = n(551).FDLayoutConstants;
              function o() {
              }
              for (var v in f)
                o[v] = f[v];
              o.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, o.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH, o.DEFAULT_COMPONENT_SEPERATION = 60, o.TILE = !0, o.TILING_PADDING_VERTICAL = 10, o.TILING_PADDING_HORIZONTAL = 10, o.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, o.ENFORCE_CONSTRAINTS = !0, o.APPLY_LAYOUT = !0, o.RELAX_MOVEMENT_ON_CONSTRAINTS = !0, o.TREE_REDUCTION_ON_INCREMENTAL = !0, o.PURE_INCREMENTAL = o.DEFAULT_INCREMENTAL, i.exports = o;
            }
          ),
          /***/
          767: (
            /***/
            (i, r, n) => {
              var f = n(551).FDLayoutEdge;
              function o(t, s, h) {
                f.call(this, t, s, h);
              }
              o.prototype = Object.create(f.prototype);
              for (var v in f)
                o[v] = f[v];
              i.exports = o;
            }
          ),
          /***/
          880: (
            /***/
            (i, r, n) => {
              var f = n(551).LGraph;
              function o(t, s, h) {
                f.call(this, t, s, h);
              }
              o.prototype = Object.create(f.prototype);
              for (var v in f)
                o[v] = f[v];
              i.exports = o;
            }
          ),
          /***/
          578: (
            /***/
            (i, r, n) => {
              var f = n(551).LGraphManager;
              function o(t) {
                f.call(this, t);
              }
              o.prototype = Object.create(f.prototype);
              for (var v in f)
                o[v] = f[v];
              i.exports = o;
            }
          ),
          /***/
          765: (
            /***/
            (i, r, n) => {
              var f = n(551).FDLayout, o = n(578), v = n(880), t = n(991), s = n(767), h = n(806), g = n(902), u = n(551).FDLayoutConstants, N = n(551).LayoutConstants, p = n(551).Point, T = n(551).PointD, L = n(551).DimensionD, D = n(551).Layout, X = n(551).Integer, w = n(551).IGeometry, Z = n(551).LGraph, W = n(551).Transform, Q = n(551).LinkedList;
              function R() {
                f.call(this), this.toBeTiled = {}, this.constraints = {};
              }
              R.prototype = Object.create(f.prototype);
              for (var ht in f)
                R[ht] = f[ht];
              R.prototype.newGraphManager = function() {
                var e = new o(this);
                return this.graphManager = e, e;
              }, R.prototype.newGraph = function(e) {
                return new v(null, this.graphManager, e);
              }, R.prototype.newNode = function(e) {
                return new t(this.graphManager, e);
              }, R.prototype.newEdge = function(e) {
                return new s(null, null, e);
              }, R.prototype.initParameters = function() {
                f.prototype.initParameters.call(this, arguments), this.isSubLayout || (h.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = u.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = u.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = u.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1);
              }, R.prototype.initSpringEmbedder = function() {
                f.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / u.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
              }, R.prototype.layout = function() {
                var e = N.DEFAULT_CREATE_BENDS_AS_NEEDED;
                return e && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
              }, R.prototype.classicLayout = function() {
                if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                  if (h.TREE_REDUCTION_ON_INCREMENTAL) {
                    this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                    var y = new Set(this.getAllNodes()), l = this.nodesWithGravity.filter(function(M) {
                      return y.has(M);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(l);
                  }
                } else {
                  var e = this.getFlatForest();
                  if (e.length > 0)
                    this.positionNodesRadially(e);
                  else {
                    this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                    var y = new Set(this.getAllNodes()), l = this.nodesWithGravity.filter(function(d) {
                      return y.has(d);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(l), this.positionNodesRandomly();
                  }
                }
                return Object.keys(this.constraints).length > 0 && (g.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), h.APPLY_LAYOUT && this.runSpringEmbedder(), !0;
              }, R.prototype.tick = function() {
                if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = !0;
                  else
                    return !0;
                if (this.totalIterations % u.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                  if (this.isConverged())
                    if (this.prunedNodesAll.length > 0)
                      this.isTreeGrowing = !0;
                    else
                      return !0;
                  this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
                }
                if (this.isTreeGrowing) {
                  if (this.growTreeIterations % 10 == 0)
                    if (this.prunedNodesAll.length > 0) {
                      this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                      var e = new Set(this.getAllNodes()), y = this.nodesWithGravity.filter(function(E) {
                        return e.has(E);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(y), this.graphManager.updateBounds(), this.updateGrid(), h.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                    } else
                      this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                  this.growTreeIterations++;
                }
                if (this.isGrowthFinished) {
                  if (this.isConverged())
                    return !0;
                  this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), h.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                }
                var l = !this.isTreeGrowing && !this.isGrowthFinished, d = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(l, d), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
              }, R.prototype.getPositionsData = function() {
                for (var e = this.graphManager.getAllNodes(), y = {}, l = 0; l < e.length; l++) {
                  var d = e[l].rect, E = e[l].id;
                  y[E] = {
                    id: E,
                    x: d.getCenterX(),
                    y: d.getCenterY(),
                    w: d.width,
                    h: d.height
                  };
                }
                return y;
              }, R.prototype.runSpringEmbedder = function() {
                this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                var e = !1;
                if (u.ANIMATE === "during")
                  this.emit("layoutstarted");
                else {
                  for (; !e; )
                    e = this.tick();
                  this.graphManager.updateBounds();
                }
              }, R.prototype.moveNodes = function() {
                for (var e = this.getAllNodes(), y, l = 0; l < e.length; l++)
                  y = e[l], y.calculateDisplacement();
                Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                for (var l = 0; l < e.length; l++)
                  y = e[l], y.move();
              }, R.prototype.initConstraintVariables = function() {
                var e = this;
                this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                for (var y = this.graphManager.getAllNodes(), l = 0; l < y.length; l++) {
                  var d = y[l];
                  this.idToNodeMap.set(d.id, d);
                }
                var E = function x(H) {
                  for (var $ = H.getChild().getNodes(), j, ft = 0, V = 0; V < $.length; V++)
                    j = $[V], j.getChild() == null ? e.fixedNodeSet.has(j.id) && (ft += 100) : ft += x(j);
                  return ft;
                };
                if (this.constraints.fixedNodeConstraint) {
                  this.constraints.fixedNodeConstraint.forEach(function($) {
                    e.fixedNodeSet.add($.nodeId);
                  });
                  for (var y = this.graphManager.getAllNodes(), d, l = 0; l < y.length; l++)
                    if (d = y[l], d.getChild() != null) {
                      var M = E(d);
                      M > 0 && (d.fixedNodeWeight = M);
                    }
                }
                if (this.constraints.relativePlacementConstraint) {
                  var C = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
                  if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(x) {
                    e.fixedNodesOnHorizontal.add(x), e.fixedNodesOnVertical.add(x);
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var P = this.constraints.alignmentConstraint.vertical, l = 0; l < P.length; l++)
                        this.dummyToNodeForVerticalAlignment.set("dummy" + l, []), P[l].forEach(function(H) {
                          C.set(H, "dummy" + l), e.dummyToNodeForVerticalAlignment.get("dummy" + l).push(H), e.fixedNodeSet.has(H) && e.fixedNodesOnHorizontal.add("dummy" + l);
                        });
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var O = this.constraints.alignmentConstraint.horizontal, l = 0; l < O.length; l++)
                        this.dummyToNodeForHorizontalAlignment.set("dummy" + l, []), O[l].forEach(function(H) {
                          A.set(H, "dummy" + l), e.dummyToNodeForHorizontalAlignment.get("dummy" + l).push(H), e.fixedNodeSet.has(H) && e.fixedNodesOnVertical.add("dummy" + l);
                        });
                  }
                  if (h.RELAX_MOVEMENT_ON_CONSTRAINTS)
                    this.shuffle = function(x) {
                      var H, $, j;
                      for (j = x.length - 1; j >= 2 * x.length / 3; j--)
                        H = Math.floor(Math.random() * (j + 1)), $ = x[j], x[j] = x[H], x[H] = $;
                      return x;
                    }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(x) {
                      if (x.left) {
                        var H = C.has(x.left) ? C.get(x.left) : x.left, $ = C.has(x.right) ? C.get(x.right) : x.right;
                        e.nodesInRelativeHorizontal.includes(H) || (e.nodesInRelativeHorizontal.push(H), e.nodeToRelativeConstraintMapHorizontal.set(H, []), e.dummyToNodeForVerticalAlignment.has(H) ? e.nodeToTempPositionMapHorizontal.set(H, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : e.nodeToTempPositionMapHorizontal.set(H, e.idToNodeMap.get(H).getCenterX())), e.nodesInRelativeHorizontal.includes($) || (e.nodesInRelativeHorizontal.push($), e.nodeToRelativeConstraintMapHorizontal.set($, []), e.dummyToNodeForVerticalAlignment.has($) ? e.nodeToTempPositionMapHorizontal.set($, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get($)[0]).getCenterX()) : e.nodeToTempPositionMapHorizontal.set($, e.idToNodeMap.get($).getCenterX())), e.nodeToRelativeConstraintMapHorizontal.get(H).push({ right: $, gap: x.gap }), e.nodeToRelativeConstraintMapHorizontal.get($).push({ left: H, gap: x.gap });
                      } else {
                        var j = A.has(x.top) ? A.get(x.top) : x.top, ft = A.has(x.bottom) ? A.get(x.bottom) : x.bottom;
                        e.nodesInRelativeVertical.includes(j) || (e.nodesInRelativeVertical.push(j), e.nodeToRelativeConstraintMapVertical.set(j, []), e.dummyToNodeForHorizontalAlignment.has(j) ? e.nodeToTempPositionMapVertical.set(j, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(j)[0]).getCenterY()) : e.nodeToTempPositionMapVertical.set(j, e.idToNodeMap.get(j).getCenterY())), e.nodesInRelativeVertical.includes(ft) || (e.nodesInRelativeVertical.push(ft), e.nodeToRelativeConstraintMapVertical.set(ft, []), e.dummyToNodeForHorizontalAlignment.has(ft) ? e.nodeToTempPositionMapVertical.set(ft, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(ft)[0]).getCenterY()) : e.nodeToTempPositionMapVertical.set(ft, e.idToNodeMap.get(ft).getCenterY())), e.nodeToRelativeConstraintMapVertical.get(j).push({ bottom: ft, gap: x.gap }), e.nodeToRelativeConstraintMapVertical.get(ft).push({ top: j, gap: x.gap });
                      }
                    });
                  else {
                    var K = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
                    this.constraints.relativePlacementConstraint.forEach(function(x) {
                      if (x.left) {
                        var H = C.has(x.left) ? C.get(x.left) : x.left, $ = C.has(x.right) ? C.get(x.right) : x.right;
                        K.has(H) ? K.get(H).push($) : K.set(H, [$]), K.has($) ? K.get($).push(H) : K.set($, [H]);
                      } else {
                        var j = A.has(x.top) ? A.get(x.top) : x.top, ft = A.has(x.bottom) ? A.get(x.bottom) : x.bottom;
                        b.has(j) ? b.get(j).push(ft) : b.set(j, [ft]), b.has(ft) ? b.get(ft).push(j) : b.set(ft, [j]);
                      }
                    });
                    var Y = function(H, $) {
                      var j = [], ft = [], V = new Q(), Ot = /* @__PURE__ */ new Set(), vt = 0;
                      return H.forEach(function($t, Vt) {
                        if (!Ot.has(Vt)) {
                          j[vt] = [], ft[vt] = !1;
                          var Nt = Vt;
                          for (V.push(Nt), Ot.add(Nt), j[vt].push(Nt); V.length != 0; ) {
                            Nt = V.shift(), $.has(Nt) && (ft[vt] = !0);
                            var Yt = H.get(Nt);
                            Yt.forEach(function(Xt) {
                              Ot.has(Xt) || (V.push(Xt), Ot.add(Xt), j[vt].push(Xt));
                            });
                          }
                          vt++;
                        }
                      }), { components: j, isFixed: ft };
                    }, _ = Y(K, e.fixedNodesOnHorizontal);
                    this.componentsOnHorizontal = _.components, this.fixedComponentsOnHorizontal = _.isFixed;
                    var B = Y(b, e.fixedNodesOnVertical);
                    this.componentsOnVertical = B.components, this.fixedComponentsOnVertical = B.isFixed;
                  }
                }
              }, R.prototype.updateDisplacements = function() {
                var e = this;
                if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(B) {
                  var x = e.idToNodeMap.get(B.nodeId);
                  x.displacementX = 0, x.displacementY = 0;
                }), this.constraints.alignmentConstraint) {
                  if (this.constraints.alignmentConstraint.vertical)
                    for (var y = this.constraints.alignmentConstraint.vertical, l = 0; l < y.length; l++) {
                      for (var d = 0, E = 0; E < y[l].length; E++) {
                        if (this.fixedNodeSet.has(y[l][E])) {
                          d = 0;
                          break;
                        }
                        d += this.idToNodeMap.get(y[l][E]).displacementX;
                      }
                      for (var M = d / y[l].length, E = 0; E < y[l].length; E++)
                        this.idToNodeMap.get(y[l][E]).displacementX = M;
                    }
                  if (this.constraints.alignmentConstraint.horizontal)
                    for (var C = this.constraints.alignmentConstraint.horizontal, l = 0; l < C.length; l++) {
                      for (var A = 0, E = 0; E < C[l].length; E++) {
                        if (this.fixedNodeSet.has(C[l][E])) {
                          A = 0;
                          break;
                        }
                        A += this.idToNodeMap.get(C[l][E]).displacementY;
                      }
                      for (var P = A / C[l].length, E = 0; E < C[l].length; E++)
                        this.idToNodeMap.get(C[l][E]).displacementY = P;
                    }
                }
                if (this.constraints.relativePlacementConstraint)
                  if (h.RELAX_MOVEMENT_ON_CONSTRAINTS)
                    this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(B) {
                      if (!e.fixedNodesOnHorizontal.has(B)) {
                        var x = 0;
                        e.dummyToNodeForVerticalAlignment.has(B) ? x = e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(B)[0]).displacementX : x = e.idToNodeMap.get(B).displacementX, e.nodeToRelativeConstraintMapHorizontal.get(B).forEach(function(H) {
                          if (H.right) {
                            var $ = e.nodeToTempPositionMapHorizontal.get(H.right) - e.nodeToTempPositionMapHorizontal.get(B) - x;
                            $ < H.gap && (x -= H.gap - $);
                          } else {
                            var $ = e.nodeToTempPositionMapHorizontal.get(B) - e.nodeToTempPositionMapHorizontal.get(H.left) + x;
                            $ < H.gap && (x += H.gap - $);
                          }
                        }), e.nodeToTempPositionMapHorizontal.set(B, e.nodeToTempPositionMapHorizontal.get(B) + x), e.dummyToNodeForVerticalAlignment.has(B) ? e.dummyToNodeForVerticalAlignment.get(B).forEach(function(H) {
                          e.idToNodeMap.get(H).displacementX = x;
                        }) : e.idToNodeMap.get(B).displacementX = x;
                      }
                    }), this.nodesInRelativeVertical.forEach(function(B) {
                      if (!e.fixedNodesOnHorizontal.has(B)) {
                        var x = 0;
                        e.dummyToNodeForHorizontalAlignment.has(B) ? x = e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(B)[0]).displacementY : x = e.idToNodeMap.get(B).displacementY, e.nodeToRelativeConstraintMapVertical.get(B).forEach(function(H) {
                          if (H.bottom) {
                            var $ = e.nodeToTempPositionMapVertical.get(H.bottom) - e.nodeToTempPositionMapVertical.get(B) - x;
                            $ < H.gap && (x -= H.gap - $);
                          } else {
                            var $ = e.nodeToTempPositionMapVertical.get(B) - e.nodeToTempPositionMapVertical.get(H.top) + x;
                            $ < H.gap && (x += H.gap - $);
                          }
                        }), e.nodeToTempPositionMapVertical.set(B, e.nodeToTempPositionMapVertical.get(B) + x), e.dummyToNodeForHorizontalAlignment.has(B) ? e.dummyToNodeForHorizontalAlignment.get(B).forEach(function(H) {
                          e.idToNodeMap.get(H).displacementY = x;
                        }) : e.idToNodeMap.get(B).displacementY = x;
                      }
                    });
                  else {
                    for (var l = 0; l < this.componentsOnHorizontal.length; l++) {
                      var O = this.componentsOnHorizontal[l];
                      if (this.fixedComponentsOnHorizontal[l])
                        for (var E = 0; E < O.length; E++)
                          this.dummyToNodeForVerticalAlignment.has(O[E]) ? this.dummyToNodeForVerticalAlignment.get(O[E]).forEach(function(H) {
                            e.idToNodeMap.get(H).displacementX = 0;
                          }) : this.idToNodeMap.get(O[E]).displacementX = 0;
                      else {
                        for (var K = 0, b = 0, E = 0; E < O.length; E++)
                          if (this.dummyToNodeForVerticalAlignment.has(O[E])) {
                            var Y = this.dummyToNodeForVerticalAlignment.get(O[E]);
                            K += Y.length * this.idToNodeMap.get(Y[0]).displacementX, b += Y.length;
                          } else
                            K += this.idToNodeMap.get(O[E]).displacementX, b++;
                        for (var _ = K / b, E = 0; E < O.length; E++)
                          this.dummyToNodeForVerticalAlignment.has(O[E]) ? this.dummyToNodeForVerticalAlignment.get(O[E]).forEach(function(H) {
                            e.idToNodeMap.get(H).displacementX = _;
                          }) : this.idToNodeMap.get(O[E]).displacementX = _;
                      }
                    }
                    for (var l = 0; l < this.componentsOnVertical.length; l++) {
                      var O = this.componentsOnVertical[l];
                      if (this.fixedComponentsOnVertical[l])
                        for (var E = 0; E < O.length; E++)
                          this.dummyToNodeForHorizontalAlignment.has(O[E]) ? this.dummyToNodeForHorizontalAlignment.get(O[E]).forEach(function($) {
                            e.idToNodeMap.get($).displacementY = 0;
                          }) : this.idToNodeMap.get(O[E]).displacementY = 0;
                      else {
                        for (var K = 0, b = 0, E = 0; E < O.length; E++)
                          if (this.dummyToNodeForHorizontalAlignment.has(O[E])) {
                            var Y = this.dummyToNodeForHorizontalAlignment.get(O[E]);
                            K += Y.length * this.idToNodeMap.get(Y[0]).displacementY, b += Y.length;
                          } else
                            K += this.idToNodeMap.get(O[E]).displacementY, b++;
                        for (var _ = K / b, E = 0; E < O.length; E++)
                          this.dummyToNodeForHorizontalAlignment.has(O[E]) ? this.dummyToNodeForHorizontalAlignment.get(O[E]).forEach(function(V) {
                            e.idToNodeMap.get(V).displacementY = _;
                          }) : this.idToNodeMap.get(O[E]).displacementY = _;
                      }
                    }
                  }
              }, R.prototype.calculateNodesToApplyGravitationTo = function() {
                var e = [], y, l = this.graphManager.getGraphs(), d = l.length, E;
                for (E = 0; E < d; E++)
                  y = l[E], y.updateConnected(), y.isConnected || (e = e.concat(y.getNodes()));
                return e;
              }, R.prototype.createBendpoints = function() {
                var e = [];
                e = e.concat(this.graphManager.getAllEdges());
                var y = /* @__PURE__ */ new Set(), l;
                for (l = 0; l < e.length; l++) {
                  var d = e[l];
                  if (!y.has(d)) {
                    var E = d.getSource(), M = d.getTarget();
                    if (E == M)
                      d.getBendpoints().push(new T()), d.getBendpoints().push(new T()), this.createDummyNodesForBendpoints(d), y.add(d);
                    else {
                      var C = [];
                      if (C = C.concat(E.getEdgeListToNode(M)), C = C.concat(M.getEdgeListToNode(E)), !y.has(C[0])) {
                        if (C.length > 1) {
                          var A;
                          for (A = 0; A < C.length; A++) {
                            var P = C[A];
                            P.getBendpoints().push(new T()), this.createDummyNodesForBendpoints(P);
                          }
                        }
                        C.forEach(function(O) {
                          y.add(O);
                        });
                      }
                    }
                  }
                  if (y.size == e.length)
                    break;
                }
              }, R.prototype.positionNodesRadially = function(e) {
                for (var y = new p(0, 0), l = Math.ceil(Math.sqrt(e.length)), d = 0, E = 0, M = 0, C = new T(0, 0), A = 0; A < e.length; A++) {
                  A % l == 0 && (M = 0, E = d, A != 0 && (E += h.DEFAULT_COMPONENT_SEPERATION), d = 0);
                  var P = e[A], O = D.findCenterOfTree(P);
                  y.x = M, y.y = E, C = R.radialLayout(P, O, y), C.y > d && (d = Math.floor(C.y)), M = Math.floor(C.x + h.DEFAULT_COMPONENT_SEPERATION);
                }
                this.transform(new T(N.WORLD_CENTER_X - C.x / 2, N.WORLD_CENTER_Y - C.y / 2));
              }, R.radialLayout = function(e, y, l) {
                var d = Math.max(this.maxDiagonalInTree(e), h.DEFAULT_RADIAL_SEPARATION);
                R.branchRadialLayout(y, null, 0, 359, 0, d);
                var E = Z.calculateBounds(e), M = new W();
                M.setDeviceOrgX(E.getMinX()), M.setDeviceOrgY(E.getMinY()), M.setWorldOrgX(l.x), M.setWorldOrgY(l.y);
                for (var C = 0; C < e.length; C++) {
                  var A = e[C];
                  A.transform(M);
                }
                var P = new T(E.getMaxX(), E.getMaxY());
                return M.inverseTransformPoint(P);
              }, R.branchRadialLayout = function(e, y, l, d, E, M) {
                var C = (d - l + 1) / 2;
                C < 0 && (C += 180);
                var A = (C + l) % 360, P = A * w.TWO_PI / 360, O = E * Math.cos(P), K = E * Math.sin(P);
                e.setCenter(O, K);
                var b = [];
                b = b.concat(e.getEdges());
                var Y = b.length;
                y != null && Y--;
                for (var _ = 0, B = b.length, x, H = e.getEdgesBetween(y); H.length > 1; ) {
                  var $ = H[0];
                  H.splice(0, 1);
                  var j = b.indexOf($);
                  j >= 0 && b.splice(j, 1), B--, Y--;
                }
                y != null ? x = (b.indexOf(H[0]) + 1) % B : x = 0;
                for (var ft = Math.abs(d - l) / Y, V = x; _ != Y; V = ++V % B) {
                  var Ot = b[V].getOtherEnd(e);
                  if (Ot != y) {
                    var vt = (l + _ * ft) % 360, $t = (vt + ft) % 360;
                    R.branchRadialLayout(Ot, e, vt, $t, E + M, M), _++;
                  }
                }
              }, R.maxDiagonalInTree = function(e) {
                for (var y = X.MIN_VALUE, l = 0; l < e.length; l++) {
                  var d = e[l], E = d.getDiagonal();
                  E > y && (y = E);
                }
                return y;
              }, R.prototype.calcRepulsionRange = function() {
                return 2 * (this.level + 1) * this.idealEdgeLength;
              }, R.prototype.groupZeroDegreeMembers = function() {
                var e = this, y = {};
                this.memberGroups = {}, this.idToDummyNode = {};
                for (var l = [], d = this.graphManager.getAllNodes(), E = 0; E < d.length; E++) {
                  var M = d[E], C = M.getParent();
                  this.getNodeDegreeWithChildren(M) === 0 && (C.id == null || !this.getToBeTiled(C)) && l.push(M);
                }
                for (var E = 0; E < l.length; E++) {
                  var M = l[E], A = M.getParent().id;
                  typeof y[A] > "u" && (y[A] = []), y[A] = y[A].concat(M);
                }
                Object.keys(y).forEach(function(P) {
                  if (y[P].length > 1) {
                    var O = "DummyCompound_" + P;
                    e.memberGroups[O] = y[P];
                    var K = y[P][0].getParent(), b = new t(e.graphManager);
                    b.id = O, b.paddingLeft = K.paddingLeft || 0, b.paddingRight = K.paddingRight || 0, b.paddingBottom = K.paddingBottom || 0, b.paddingTop = K.paddingTop || 0, e.idToDummyNode[O] = b;
                    var Y = e.getGraphManager().add(e.newGraph(), b), _ = K.getChild();
                    _.add(b);
                    for (var B = 0; B < y[P].length; B++) {
                      var x = y[P][B];
                      _.remove(x), Y.add(x);
                    }
                  }
                });
              }, R.prototype.clearCompounds = function() {
                var e = {}, y = {};
                this.performDFSOnCompounds();
                for (var l = 0; l < this.compoundOrder.length; l++)
                  y[this.compoundOrder[l].id] = this.compoundOrder[l], e[this.compoundOrder[l].id] = [].concat(this.compoundOrder[l].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[l].getChild()), this.compoundOrder[l].child = null;
                this.graphManager.resetAllNodes(), this.tileCompoundMembers(e, y);
              }, R.prototype.clearZeroDegreeMembers = function() {
                var e = this, y = this.tiledZeroDegreePack = [];
                Object.keys(this.memberGroups).forEach(function(l) {
                  var d = e.idToDummyNode[l];
                  if (y[l] = e.tileNodes(e.memberGroups[l], d.paddingLeft + d.paddingRight), d.rect.width = y[l].width, d.rect.height = y[l].height, d.setCenter(y[l].centerX, y[l].centerY), d.labelMarginLeft = 0, d.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var E = d.rect.width, M = d.rect.height;
                    d.labelWidth && (d.labelPosHorizontal == "left" ? (d.rect.x -= d.labelWidth, d.setWidth(E + d.labelWidth), d.labelMarginLeft = d.labelWidth) : d.labelPosHorizontal == "center" && d.labelWidth > E ? (d.rect.x -= (d.labelWidth - E) / 2, d.setWidth(d.labelWidth), d.labelMarginLeft = (d.labelWidth - E) / 2) : d.labelPosHorizontal == "right" && d.setWidth(E + d.labelWidth)), d.labelHeight && (d.labelPosVertical == "top" ? (d.rect.y -= d.labelHeight, d.setHeight(M + d.labelHeight), d.labelMarginTop = d.labelHeight) : d.labelPosVertical == "center" && d.labelHeight > M ? (d.rect.y -= (d.labelHeight - M) / 2, d.setHeight(d.labelHeight), d.labelMarginTop = (d.labelHeight - M) / 2) : d.labelPosVertical == "bottom" && d.setHeight(M + d.labelHeight));
                  }
                });
              }, R.prototype.repopulateCompounds = function() {
                for (var e = this.compoundOrder.length - 1; e >= 0; e--) {
                  var y = this.compoundOrder[e], l = y.id, d = y.paddingLeft, E = y.paddingTop, M = y.labelMarginLeft, C = y.labelMarginTop;
                  this.adjustLocations(this.tiledMemberPack[l], y.rect.x, y.rect.y, d, E, M, C);
                }
              }, R.prototype.repopulateZeroDegreeMembers = function() {
                var e = this, y = this.tiledZeroDegreePack;
                Object.keys(y).forEach(function(l) {
                  var d = e.idToDummyNode[l], E = d.paddingLeft, M = d.paddingTop, C = d.labelMarginLeft, A = d.labelMarginTop;
                  e.adjustLocations(y[l], d.rect.x, d.rect.y, E, M, C, A);
                });
              }, R.prototype.getToBeTiled = function(e) {
                var y = e.id;
                if (this.toBeTiled[y] != null)
                  return this.toBeTiled[y];
                var l = e.getChild();
                if (l == null)
                  return this.toBeTiled[y] = !1, !1;
                for (var d = l.getNodes(), E = 0; E < d.length; E++) {
                  var M = d[E];
                  if (this.getNodeDegree(M) > 0)
                    return this.toBeTiled[y] = !1, !1;
                  if (M.getChild() == null) {
                    this.toBeTiled[M.id] = !1;
                    continue;
                  }
                  if (!this.getToBeTiled(M))
                    return this.toBeTiled[y] = !1, !1;
                }
                return this.toBeTiled[y] = !0, !0;
              }, R.prototype.getNodeDegree = function(e) {
                e.id;
                for (var y = e.getEdges(), l = 0, d = 0; d < y.length; d++) {
                  var E = y[d];
                  E.getSource().id !== E.getTarget().id && (l = l + 1);
                }
                return l;
              }, R.prototype.getNodeDegreeWithChildren = function(e) {
                var y = this.getNodeDegree(e);
                if (e.getChild() == null)
                  return y;
                for (var l = e.getChild().getNodes(), d = 0; d < l.length; d++) {
                  var E = l[d];
                  y += this.getNodeDegreeWithChildren(E);
                }
                return y;
              }, R.prototype.performDFSOnCompounds = function() {
                this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
              }, R.prototype.fillCompexOrderByDFS = function(e) {
                for (var y = 0; y < e.length; y++) {
                  var l = e[y];
                  l.getChild() != null && this.fillCompexOrderByDFS(l.getChild().getNodes()), this.getToBeTiled(l) && this.compoundOrder.push(l);
                }
              }, R.prototype.adjustLocations = function(e, y, l, d, E, M, C) {
                y += d + M, l += E + C;
                for (var A = y, P = 0; P < e.rows.length; P++) {
                  var O = e.rows[P];
                  y = A;
                  for (var K = 0, b = 0; b < O.length; b++) {
                    var Y = O[b];
                    Y.rect.x = y, Y.rect.y = l, y += Y.rect.width + e.horizontalPadding, Y.rect.height > K && (K = Y.rect.height);
                  }
                  l += K + e.verticalPadding;
                }
              }, R.prototype.tileCompoundMembers = function(e, y) {
                var l = this;
                this.tiledMemberPack = [], Object.keys(e).forEach(function(d) {
                  var E = y[d];
                  if (l.tiledMemberPack[d] = l.tileNodes(e[d], E.paddingLeft + E.paddingRight), E.rect.width = l.tiledMemberPack[d].width, E.rect.height = l.tiledMemberPack[d].height, E.setCenter(l.tiledMemberPack[d].centerX, l.tiledMemberPack[d].centerY), E.labelMarginLeft = 0, E.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var M = E.rect.width, C = E.rect.height;
                    E.labelWidth && (E.labelPosHorizontal == "left" ? (E.rect.x -= E.labelWidth, E.setWidth(M + E.labelWidth), E.labelMarginLeft = E.labelWidth) : E.labelPosHorizontal == "center" && E.labelWidth > M ? (E.rect.x -= (E.labelWidth - M) / 2, E.setWidth(E.labelWidth), E.labelMarginLeft = (E.labelWidth - M) / 2) : E.labelPosHorizontal == "right" && E.setWidth(M + E.labelWidth)), E.labelHeight && (E.labelPosVertical == "top" ? (E.rect.y -= E.labelHeight, E.setHeight(C + E.labelHeight), E.labelMarginTop = E.labelHeight) : E.labelPosVertical == "center" && E.labelHeight > C ? (E.rect.y -= (E.labelHeight - C) / 2, E.setHeight(E.labelHeight), E.labelMarginTop = (E.labelHeight - C) / 2) : E.labelPosVertical == "bottom" && E.setHeight(C + E.labelHeight));
                  }
                });
              }, R.prototype.tileNodes = function(e, y) {
                var l = this.tileNodesByFavoringDim(e, y, !0), d = this.tileNodesByFavoringDim(e, y, !1), E = this.getOrgRatio(l), M = this.getOrgRatio(d), C;
                return M < E ? C = d : C = l, C;
              }, R.prototype.getOrgRatio = function(e) {
                var y = e.width, l = e.height, d = y / l;
                return d < 1 && (d = 1 / d), d;
              }, R.prototype.calcIdealRowWidth = function(e, y) {
                var l = h.TILING_PADDING_VERTICAL, d = h.TILING_PADDING_HORIZONTAL, E = e.length, M = 0, C = 0, A = 0;
                e.forEach(function(B) {
                  M += B.getWidth(), C += B.getHeight(), B.getWidth() > A && (A = B.getWidth());
                });
                var P = M / E, O = C / E, K = Math.pow(l - d, 2) + 4 * (P + d) * (O + l) * E, b = (d - l + Math.sqrt(K)) / (2 * (P + d)), Y;
                y ? (Y = Math.ceil(b), Y == b && Y++) : Y = Math.floor(b);
                var _ = Y * (P + d) - d;
                return A > _ && (_ = A), _ += d * 2, _;
              }, R.prototype.tileNodesByFavoringDim = function(e, y, l) {
                var d = h.TILING_PADDING_VERTICAL, E = h.TILING_PADDING_HORIZONTAL, M = h.TILING_COMPARE_BY, C = {
                  rows: [],
                  rowWidth: [],
                  rowHeight: [],
                  width: 0,
                  height: y,
                  // assume minHeight equals to minWidth
                  verticalPadding: d,
                  horizontalPadding: E,
                  centerX: 0,
                  centerY: 0
                };
                M && (C.idealRowWidth = this.calcIdealRowWidth(e, l));
                var A = function(x) {
                  return x.rect.width * x.rect.height;
                }, P = function(x, H) {
                  return A(H) - A(x);
                };
                e.sort(function(B, x) {
                  var H = P;
                  return C.idealRowWidth ? (H = M, H(B.id, x.id)) : H(B, x);
                });
                for (var O = 0, K = 0, b = 0; b < e.length; b++) {
                  var Y = e[b];
                  O += Y.getCenterX(), K += Y.getCenterY();
                }
                C.centerX = O / e.length, C.centerY = K / e.length;
                for (var b = 0; b < e.length; b++) {
                  var Y = e[b];
                  if (C.rows.length == 0)
                    this.insertNodeToRow(C, Y, 0, y);
                  else if (this.canAddHorizontal(C, Y.rect.width, Y.rect.height)) {
                    var _ = C.rows.length - 1;
                    C.idealRowWidth || (_ = this.getShortestRowIndex(C)), this.insertNodeToRow(C, Y, _, y);
                  } else
                    this.insertNodeToRow(C, Y, C.rows.length, y);
                  this.shiftToLastRow(C);
                }
                return C;
              }, R.prototype.insertNodeToRow = function(e, y, l, d) {
                var E = d;
                if (l == e.rows.length) {
                  var M = [];
                  e.rows.push(M), e.rowWidth.push(E), e.rowHeight.push(0);
                }
                var C = e.rowWidth[l] + y.rect.width;
                e.rows[l].length > 0 && (C += e.horizontalPadding), e.rowWidth[l] = C, e.width < C && (e.width = C);
                var A = y.rect.height;
                l > 0 && (A += e.verticalPadding);
                var P = 0;
                A > e.rowHeight[l] && (P = e.rowHeight[l], e.rowHeight[l] = A, P = e.rowHeight[l] - P), e.height += P, e.rows[l].push(y);
              }, R.prototype.getShortestRowIndex = function(e) {
                for (var y = -1, l = Number.MAX_VALUE, d = 0; d < e.rows.length; d++)
                  e.rowWidth[d] < l && (y = d, l = e.rowWidth[d]);
                return y;
              }, R.prototype.getLongestRowIndex = function(e) {
                for (var y = -1, l = Number.MIN_VALUE, d = 0; d < e.rows.length; d++)
                  e.rowWidth[d] > l && (y = d, l = e.rowWidth[d]);
                return y;
              }, R.prototype.canAddHorizontal = function(e, y, l) {
                if (e.idealRowWidth) {
                  var d = e.rows.length - 1, E = e.rowWidth[d];
                  return E + y + e.horizontalPadding <= e.idealRowWidth;
                }
                var M = this.getShortestRowIndex(e);
                if (M < 0)
                  return !0;
                var C = e.rowWidth[M];
                if (C + e.horizontalPadding + y <= e.width)
                  return !0;
                var A = 0;
                e.rowHeight[M] < l && M > 0 && (A = l + e.verticalPadding - e.rowHeight[M]);
                var P;
                e.width - C >= y + e.horizontalPadding ? P = (e.height + A) / (C + y + e.horizontalPadding) : P = (e.height + A) / e.width, A = l + e.verticalPadding;
                var O;
                return e.width < y ? O = (e.height + A) / y : O = (e.height + A) / e.width, O < 1 && (O = 1 / O), P < 1 && (P = 1 / P), P < O;
              }, R.prototype.shiftToLastRow = function(e) {
                var y = this.getLongestRowIndex(e), l = e.rowWidth.length - 1, d = e.rows[y], E = d[d.length - 1], M = E.width + e.horizontalPadding;
                if (e.width - e.rowWidth[l] > M && y != l) {
                  d.splice(-1, 1), e.rows[l].push(E), e.rowWidth[y] = e.rowWidth[y] - M, e.rowWidth[l] = e.rowWidth[l] + M, e.width = e.rowWidth[instance.getLongestRowIndex(e)];
                  for (var C = Number.MIN_VALUE, A = 0; A < d.length; A++)
                    d[A].height > C && (C = d[A].height);
                  y > 0 && (C += e.verticalPadding);
                  var P = e.rowHeight[y] + e.rowHeight[l];
                  e.rowHeight[y] = C, e.rowHeight[l] < E.height + e.verticalPadding && (e.rowHeight[l] = E.height + e.verticalPadding);
                  var O = e.rowHeight[y] + e.rowHeight[l];
                  e.height += O - P, this.shiftToLastRow(e);
                }
              }, R.prototype.tilingPreLayout = function() {
                h.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
              }, R.prototype.tilingPostLayout = function() {
                h.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
              }, R.prototype.reduceTrees = function() {
                for (var e = [], y = !0, l; y; ) {
                  var d = this.graphManager.getAllNodes(), E = [];
                  y = !1;
                  for (var M = 0; M < d.length; M++)
                    if (l = d[M], l.getEdges().length == 1 && !l.getEdges()[0].isInterGraph && l.getChild() == null) {
                      if (h.PURE_INCREMENTAL) {
                        var C = l.getEdges()[0].getOtherEnd(l), A = new L(l.getCenterX() - C.getCenterX(), l.getCenterY() - C.getCenterY());
                        E.push([l, l.getEdges()[0], l.getOwner(), A]);
                      } else
                        E.push([l, l.getEdges()[0], l.getOwner()]);
                      y = !0;
                    }
                  if (y == !0) {
                    for (var P = [], O = 0; O < E.length; O++)
                      E[O][0].getEdges().length == 1 && (P.push(E[O]), E[O][0].getOwner().remove(E[O][0]));
                    e.push(P), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                  }
                }
                this.prunedNodesAll = e;
              }, R.prototype.growTree = function(e) {
                for (var y = e.length, l = e[y - 1], d, E = 0; E < l.length; E++)
                  d = l[E], this.findPlaceforPrunedNode(d), d[2].add(d[0]), d[2].add(d[1], d[1].source, d[1].target);
                e.splice(e.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
              }, R.prototype.findPlaceforPrunedNode = function(e) {
                var y, l, d = e[0];
                if (d == e[1].source ? l = e[1].target : l = e[1].source, h.PURE_INCREMENTAL)
                  d.setCenter(l.getCenterX() + e[3].getWidth(), l.getCenterY() + e[3].getHeight());
                else {
                  var E = l.startX, M = l.finishX, C = l.startY, A = l.finishY, P = 0, O = 0, K = 0, b = 0, Y = [P, K, O, b];
                  if (C > 0)
                    for (var _ = E; _ <= M; _++)
                      Y[0] += this.grid[_][C - 1].length + this.grid[_][C].length - 1;
                  if (M < this.grid.length - 1)
                    for (var _ = C; _ <= A; _++)
                      Y[1] += this.grid[M + 1][_].length + this.grid[M][_].length - 1;
                  if (A < this.grid[0].length - 1)
                    for (var _ = E; _ <= M; _++)
                      Y[2] += this.grid[_][A + 1].length + this.grid[_][A].length - 1;
                  if (E > 0)
                    for (var _ = C; _ <= A; _++)
                      Y[3] += this.grid[E - 1][_].length + this.grid[E][_].length - 1;
                  for (var B = X.MAX_VALUE, x, H, $ = 0; $ < Y.length; $++)
                    Y[$] < B ? (B = Y[$], x = 1, H = $) : Y[$] == B && x++;
                  if (x == 3 && B == 0)
                    Y[0] == 0 && Y[1] == 0 && Y[2] == 0 ? y = 1 : Y[0] == 0 && Y[1] == 0 && Y[3] == 0 ? y = 0 : Y[0] == 0 && Y[2] == 0 && Y[3] == 0 ? y = 3 : Y[1] == 0 && Y[2] == 0 && Y[3] == 0 && (y = 2);
                  else if (x == 2 && B == 0) {
                    var j = Math.floor(Math.random() * 2);
                    Y[0] == 0 && Y[1] == 0 ? j == 0 ? y = 0 : y = 1 : Y[0] == 0 && Y[2] == 0 ? j == 0 ? y = 0 : y = 2 : Y[0] == 0 && Y[3] == 0 ? j == 0 ? y = 0 : y = 3 : Y[1] == 0 && Y[2] == 0 ? j == 0 ? y = 1 : y = 2 : Y[1] == 0 && Y[3] == 0 ? j == 0 ? y = 1 : y = 3 : j == 0 ? y = 2 : y = 3;
                  } else if (x == 4 && B == 0) {
                    var j = Math.floor(Math.random() * 4);
                    y = j;
                  } else
                    y = H;
                  y == 0 ? d.setCenter(l.getCenterX(), l.getCenterY() - l.getHeight() / 2 - u.DEFAULT_EDGE_LENGTH - d.getHeight() / 2) : y == 1 ? d.setCenter(l.getCenterX() + l.getWidth() / 2 + u.DEFAULT_EDGE_LENGTH + d.getWidth() / 2, l.getCenterY()) : y == 2 ? d.setCenter(l.getCenterX(), l.getCenterY() + l.getHeight() / 2 + u.DEFAULT_EDGE_LENGTH + d.getHeight() / 2) : d.setCenter(l.getCenterX() - l.getWidth() / 2 - u.DEFAULT_EDGE_LENGTH - d.getWidth() / 2, l.getCenterY());
                }
              }, i.exports = R;
            }
          ),
          /***/
          991: (
            /***/
            (i, r, n) => {
              var f = n(551).FDLayoutNode, o = n(551).IMath;
              function v(s, h, g, u) {
                f.call(this, s, h, g, u);
              }
              v.prototype = Object.create(f.prototype);
              for (var t in f)
                v[t] = f[t];
              v.prototype.calculateDisplacement = function() {
                var s = this.graphManager.getLayout();
                this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += s.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += s.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += s.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += s.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > s.coolingFactor * s.maxNodeDisplacement && (this.displacementX = s.coolingFactor * s.maxNodeDisplacement * o.sign(this.displacementX)), Math.abs(this.displacementY) > s.coolingFactor * s.maxNodeDisplacement && (this.displacementY = s.coolingFactor * s.maxNodeDisplacement * o.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
              }, v.prototype.propogateDisplacementToChildren = function(s, h) {
                for (var g = this.getChild().getNodes(), u, N = 0; N < g.length; N++)
                  u = g[N], u.getChild() == null ? (u.displacementX += s, u.displacementY += h) : u.propogateDisplacementToChildren(s, h);
              }, v.prototype.move = function() {
                var s = this.graphManager.getLayout();
                (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), s.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
              }, v.prototype.setPred1 = function(s) {
                this.pred1 = s;
              }, v.prototype.getPred1 = function() {
                return pred1;
              }, v.prototype.getPred2 = function() {
                return pred2;
              }, v.prototype.setNext = function(s) {
                this.next = s;
              }, v.prototype.getNext = function() {
                return next;
              }, v.prototype.setProcessed = function(s) {
                this.processed = s;
              }, v.prototype.isProcessed = function() {
                return processed;
              }, i.exports = v;
            }
          ),
          /***/
          902: (
            /***/
            (i, r, n) => {
              function f(g) {
                if (Array.isArray(g)) {
                  for (var u = 0, N = Array(g.length); u < g.length; u++)
                    N[u] = g[u];
                  return N;
                } else
                  return Array.from(g);
              }
              var o = n(806), v = n(551).LinkedList, t = n(551).Matrix, s = n(551).SVD;
              function h() {
              }
              h.handleConstraints = function(g) {
                var u = {};
                u.fixedNodeConstraint = g.constraints.fixedNodeConstraint, u.alignmentConstraint = g.constraints.alignmentConstraint, u.relativePlacementConstraint = g.constraints.relativePlacementConstraint;
                for (var N = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), T = [], L = [], D = g.getAllNodes(), X = 0, w = 0; w < D.length; w++) {
                  var Z = D[w];
                  Z.getChild() == null && (p.set(Z.id, X++), T.push(Z.getCenterX()), L.push(Z.getCenterY()), N.set(Z.id, Z));
                }
                u.relativePlacementConstraint && u.relativePlacementConstraint.forEach(function(G) {
                  !G.gap && G.gap != 0 && (G.left ? G.gap = o.DEFAULT_EDGE_LENGTH + N.get(G.left).getWidth() / 2 + N.get(G.right).getWidth() / 2 : G.gap = o.DEFAULT_EDGE_LENGTH + N.get(G.top).getHeight() / 2 + N.get(G.bottom).getHeight() / 2);
                });
                var W = function(z, k) {
                  return { x: z.x - k.x, y: z.y - k.y };
                }, Q = function(z) {
                  var k = 0, nt = 0;
                  return z.forEach(function(J) {
                    k += T[p.get(J)], nt += L[p.get(J)];
                  }), { x: k / z.size, y: nt / z.size };
                }, R = function(z, k, nt, J, at) {
                  function mt(ot, rt) {
                    var yt = new Set(ot), it = !0, tt = !1, wt = void 0;
                    try {
                      for (var lt = rt[Symbol.iterator](), ut; !(it = (ut = lt.next()).done); it = !0) {
                        var Gt = ut.value;
                        yt.add(Gt);
                      }
                    } catch (At) {
                      tt = !0, wt = At;
                    } finally {
                      try {
                        !it && lt.return && lt.return();
                      } finally {
                        if (tt)
                          throw wt;
                      }
                    }
                    return yt;
                  }
                  var pt = /* @__PURE__ */ new Map();
                  z.forEach(function(ot, rt) {
                    pt.set(rt, 0);
                  }), z.forEach(function(ot, rt) {
                    ot.forEach(function(yt) {
                      pt.set(yt.id, pt.get(yt.id) + 1);
                    });
                  });
                  var et = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), dt = new v();
                  pt.forEach(function(ot, rt) {
                    ot == 0 ? (dt.push(rt), nt || (k == "horizontal" ? et.set(rt, p.has(rt) ? T[p.get(rt)] : J.get(rt)) : et.set(rt, p.has(rt) ? L[p.get(rt)] : J.get(rt)))) : et.set(rt, Number.NEGATIVE_INFINITY), nt && q.set(rt, /* @__PURE__ */ new Set([rt]));
                  }), nt && at.forEach(function(ot) {
                    var rt = [];
                    if (ot.forEach(function(tt) {
                      nt.has(tt) && rt.push(tt);
                    }), rt.length > 0) {
                      var yt = 0;
                      rt.forEach(function(tt) {
                        k == "horizontal" ? (et.set(tt, p.has(tt) ? T[p.get(tt)] : J.get(tt)), yt += et.get(tt)) : (et.set(tt, p.has(tt) ? L[p.get(tt)] : J.get(tt)), yt += et.get(tt));
                      }), yt = yt / rt.length, ot.forEach(function(tt) {
                        nt.has(tt) || et.set(tt, yt);
                      });
                    } else {
                      var it = 0;
                      ot.forEach(function(tt) {
                        k == "horizontal" ? it += p.has(tt) ? T[p.get(tt)] : J.get(tt) : it += p.has(tt) ? L[p.get(tt)] : J.get(tt);
                      }), it = it / ot.length, ot.forEach(function(tt) {
                        et.set(tt, it);
                      });
                    }
                  });
                  for (var Tt = function() {
                    var rt = dt.shift(), yt = z.get(rt);
                    yt.forEach(function(it) {
                      if (et.get(it.id) < et.get(rt) + it.gap)
                        if (nt && nt.has(it.id)) {
                          var tt = void 0;
                          if (k == "horizontal" ? tt = p.has(it.id) ? T[p.get(it.id)] : J.get(it.id) : tt = p.has(it.id) ? L[p.get(it.id)] : J.get(it.id), et.set(it.id, tt), tt < et.get(rt) + it.gap) {
                            var wt = et.get(rt) + it.gap - tt;
                            q.get(rt).forEach(function(lt) {
                              et.set(lt, et.get(lt) - wt);
                            });
                          }
                        } else
                          et.set(it.id, et.get(rt) + it.gap);
                      pt.set(it.id, pt.get(it.id) - 1), pt.get(it.id) == 0 && dt.push(it.id), nt && q.set(it.id, mt(q.get(rt), q.get(it.id)));
                    });
                  }; dt.length != 0; )
                    Tt();
                  if (nt) {
                    var ct = /* @__PURE__ */ new Set();
                    z.forEach(function(ot, rt) {
                      ot.length == 0 && ct.add(rt);
                    });
                    var Dt = [];
                    q.forEach(function(ot, rt) {
                      if (ct.has(rt)) {
                        var yt = !1, it = !0, tt = !1, wt = void 0;
                        try {
                          for (var lt = ot[Symbol.iterator](), ut; !(it = (ut = lt.next()).done); it = !0) {
                            var Gt = ut.value;
                            nt.has(Gt) && (yt = !0);
                          }
                        } catch (Mt) {
                          tt = !0, wt = Mt;
                        } finally {
                          try {
                            !it && lt.return && lt.return();
                          } finally {
                            if (tt)
                              throw wt;
                          }
                        }
                        if (!yt) {
                          var At = !1, St = void 0;
                          Dt.forEach(function(Mt, Ht) {
                            Mt.has([].concat(f(ot))[0]) && (At = !0, St = Ht);
                          }), At ? ot.forEach(function(Mt) {
                            Dt[St].add(Mt);
                          }) : Dt.push(new Set(ot));
                        }
                      }
                    }), Dt.forEach(function(ot, rt) {
                      var yt = Number.POSITIVE_INFINITY, it = Number.POSITIVE_INFINITY, tt = Number.NEGATIVE_INFINITY, wt = Number.NEGATIVE_INFINITY, lt = !0, ut = !1, Gt = void 0;
                      try {
                        for (var At = ot[Symbol.iterator](), St; !(lt = (St = At.next()).done); lt = !0) {
                          var Mt = St.value, Ht = void 0;
                          k == "horizontal" ? Ht = p.has(Mt) ? T[p.get(Mt)] : J.get(Mt) : Ht = p.has(Mt) ? L[p.get(Mt)] : J.get(Mt);
                          var kt = et.get(Mt);
                          Ht < yt && (yt = Ht), Ht > tt && (tt = Ht), kt < it && (it = kt), kt > wt && (wt = kt);
                        }
                      } catch (re) {
                        ut = !0, Gt = re;
                      } finally {
                        try {
                          !lt && At.return && At.return();
                        } finally {
                          if (ut)
                            throw Gt;
                        }
                      }
                      var le = (yt + tt) / 2 - (it + wt) / 2, qt = !0, jt = !1, te = void 0;
                      try {
                        for (var Qt = ot[Symbol.iterator](), oe; !(qt = (oe = Qt.next()).done); qt = !0) {
                          var ee = oe.value;
                          et.set(ee, et.get(ee) + le);
                        }
                      } catch (re) {
                        jt = !0, te = re;
                      } finally {
                        try {
                          !qt && Qt.return && Qt.return();
                        } finally {
                          if (jt)
                            throw te;
                        }
                      }
                    });
                  }
                  return et;
                }, ht = function(z) {
                  var k = 0, nt = 0, J = 0, at = 0;
                  if (z.forEach(function(q) {
                    q.left ? T[p.get(q.left)] - T[p.get(q.right)] >= 0 ? k++ : nt++ : L[p.get(q.top)] - L[p.get(q.bottom)] >= 0 ? J++ : at++;
                  }), k > nt && J > at)
                    for (var mt = 0; mt < p.size; mt++)
                      T[mt] = -1 * T[mt], L[mt] = -1 * L[mt];
                  else if (k > nt)
                    for (var pt = 0; pt < p.size; pt++)
                      T[pt] = -1 * T[pt];
                  else if (J > at)
                    for (var et = 0; et < p.size; et++)
                      L[et] = -1 * L[et];
                }, e = function(z) {
                  var k = [], nt = new v(), J = /* @__PURE__ */ new Set(), at = 0;
                  return z.forEach(function(mt, pt) {
                    if (!J.has(pt)) {
                      k[at] = [];
                      var et = pt;
                      for (nt.push(et), J.add(et), k[at].push(et); nt.length != 0; ) {
                        et = nt.shift();
                        var q = z.get(et);
                        q.forEach(function(dt) {
                          J.has(dt.id) || (nt.push(dt.id), J.add(dt.id), k[at].push(dt.id));
                        });
                      }
                      at++;
                    }
                  }), k;
                }, y = function(z) {
                  var k = /* @__PURE__ */ new Map();
                  return z.forEach(function(nt, J) {
                    k.set(J, []);
                  }), z.forEach(function(nt, J) {
                    nt.forEach(function(at) {
                      k.get(J).push(at), k.get(at.id).push({ id: J, gap: at.gap, direction: at.direction });
                    });
                  }), k;
                }, l = function(z) {
                  var k = /* @__PURE__ */ new Map();
                  return z.forEach(function(nt, J) {
                    k.set(J, []);
                  }), z.forEach(function(nt, J) {
                    nt.forEach(function(at) {
                      k.get(at.id).push({ id: J, gap: at.gap, direction: at.direction });
                    });
                  }), k;
                }, d = [], E = [], M = !1, C = !1, A = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), K = [];
                if (u.fixedNodeConstraint && u.fixedNodeConstraint.forEach(function(G) {
                  A.add(G.nodeId);
                }), u.relativePlacementConstraint && (u.relativePlacementConstraint.forEach(function(G) {
                  G.left ? (P.has(G.left) ? P.get(G.left).push({ id: G.right, gap: G.gap, direction: "horizontal" }) : P.set(G.left, [{ id: G.right, gap: G.gap, direction: "horizontal" }]), P.has(G.right) || P.set(G.right, [])) : (P.has(G.top) ? P.get(G.top).push({ id: G.bottom, gap: G.gap, direction: "vertical" }) : P.set(G.top, [{ id: G.bottom, gap: G.gap, direction: "vertical" }]), P.has(G.bottom) || P.set(G.bottom, []));
                }), O = y(P), K = e(O)), o.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                  if (u.fixedNodeConstraint && u.fixedNodeConstraint.length > 1)
                    u.fixedNodeConstraint.forEach(function(G, z) {
                      d[z] = [G.position.x, G.position.y], E[z] = [T[p.get(G.nodeId)], L[p.get(G.nodeId)]];
                    }), M = !0;
                  else if (u.alignmentConstraint)
                    (function() {
                      var G = 0;
                      if (u.alignmentConstraint.vertical) {
                        for (var z = u.alignmentConstraint.vertical, k = function(et) {
                          var q = /* @__PURE__ */ new Set();
                          z[et].forEach(function(ct) {
                            q.add(ct);
                          });
                          var dt = new Set([].concat(f(q)).filter(function(ct) {
                            return A.has(ct);
                          })), Tt = void 0;
                          dt.size > 0 ? Tt = T[p.get(dt.values().next().value)] : Tt = Q(q).x, z[et].forEach(function(ct) {
                            d[G] = [Tt, L[p.get(ct)]], E[G] = [T[p.get(ct)], L[p.get(ct)]], G++;
                          });
                        }, nt = 0; nt < z.length; nt++)
                          k(nt);
                        M = !0;
                      }
                      if (u.alignmentConstraint.horizontal) {
                        for (var J = u.alignmentConstraint.horizontal, at = function(et) {
                          var q = /* @__PURE__ */ new Set();
                          J[et].forEach(function(ct) {
                            q.add(ct);
                          });
                          var dt = new Set([].concat(f(q)).filter(function(ct) {
                            return A.has(ct);
                          })), Tt = void 0;
                          dt.size > 0 ? Tt = T[p.get(dt.values().next().value)] : Tt = Q(q).y, J[et].forEach(function(ct) {
                            d[G] = [T[p.get(ct)], Tt], E[G] = [T[p.get(ct)], L[p.get(ct)]], G++;
                          });
                        }, mt = 0; mt < J.length; mt++)
                          at(mt);
                        M = !0;
                      }
                      u.relativePlacementConstraint && (C = !0);
                    })();
                  else if (u.relativePlacementConstraint) {
                    for (var b = 0, Y = 0, _ = 0; _ < K.length; _++)
                      K[_].length > b && (b = K[_].length, Y = _);
                    if (b < O.size / 2)
                      ht(u.relativePlacementConstraint), M = !1, C = !1;
                    else {
                      var B = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), H = [];
                      K[Y].forEach(function(G) {
                        P.get(G).forEach(function(z) {
                          z.direction == "horizontal" ? (B.has(G) ? B.get(G).push(z) : B.set(G, [z]), B.has(z.id) || B.set(z.id, []), H.push({ left: G, right: z.id })) : (x.has(G) ? x.get(G).push(z) : x.set(G, [z]), x.has(z.id) || x.set(z.id, []), H.push({ top: G, bottom: z.id }));
                        });
                      }), ht(H), C = !1;
                      var $ = R(B, "horizontal"), j = R(x, "vertical");
                      K[Y].forEach(function(G, z) {
                        E[z] = [T[p.get(G)], L[p.get(G)]], d[z] = [], $.has(G) ? d[z][0] = $.get(G) : d[z][0] = T[p.get(G)], j.has(G) ? d[z][1] = j.get(G) : d[z][1] = L[p.get(G)];
                      }), M = !0;
                    }
                  }
                  if (M) {
                    for (var ft = void 0, V = t.transpose(d), Ot = t.transpose(E), vt = 0; vt < V.length; vt++)
                      V[vt] = t.multGamma(V[vt]), Ot[vt] = t.multGamma(Ot[vt]);
                    var $t = t.multMat(V, t.transpose(Ot)), Vt = s.svd($t);
                    ft = t.multMat(Vt.V, t.transpose(Vt.U));
                    for (var Nt = 0; Nt < p.size; Nt++) {
                      var Yt = [T[Nt], L[Nt]], Xt = [ft[0][0], ft[1][0]], ie = [ft[0][1], ft[1][1]];
                      T[Nt] = t.dotProduct(Yt, Xt), L[Nt] = t.dotProduct(Yt, ie);
                    }
                    C && ht(u.relativePlacementConstraint);
                  }
                }
                if (o.ENFORCE_CONSTRAINTS) {
                  if (u.fixedNodeConstraint && u.fixedNodeConstraint.length > 0) {
                    var xt = { x: 0, y: 0 };
                    u.fixedNodeConstraint.forEach(function(G, z) {
                      var k = { x: T[p.get(G.nodeId)], y: L[p.get(G.nodeId)] }, nt = G.position, J = W(nt, k);
                      xt.x += J.x, xt.y += J.y;
                    }), xt.x /= u.fixedNodeConstraint.length, xt.y /= u.fixedNodeConstraint.length, T.forEach(function(G, z) {
                      T[z] += xt.x;
                    }), L.forEach(function(G, z) {
                      L[z] += xt.y;
                    }), u.fixedNodeConstraint.forEach(function(G) {
                      T[p.get(G.nodeId)] = G.position.x, L[p.get(G.nodeId)] = G.position.y;
                    });
                  }
                  if (u.alignmentConstraint) {
                    if (u.alignmentConstraint.vertical)
                      for (var Jt = u.alignmentConstraint.vertical, Ft = function(z) {
                        var k = /* @__PURE__ */ new Set();
                        Jt[z].forEach(function(at) {
                          k.add(at);
                        });
                        var nt = new Set([].concat(f(k)).filter(function(at) {
                          return A.has(at);
                        })), J = void 0;
                        nt.size > 0 ? J = T[p.get(nt.values().next().value)] : J = Q(k).x, k.forEach(function(at) {
                          A.has(at) || (T[p.get(at)] = J);
                        });
                      }, zt = 0; zt < Jt.length; zt++)
                        Ft(zt);
                    if (u.alignmentConstraint.horizontal)
                      for (var _t = u.alignmentConstraint.horizontal, ne = function(z) {
                        var k = /* @__PURE__ */ new Set();
                        _t[z].forEach(function(at) {
                          k.add(at);
                        });
                        var nt = new Set([].concat(f(k)).filter(function(at) {
                          return A.has(at);
                        })), J = void 0;
                        nt.size > 0 ? J = L[p.get(nt.values().next().value)] : J = Q(k).y, k.forEach(function(at) {
                          A.has(at) || (L[p.get(at)] = J);
                        });
                      }, Pt = 0; Pt < _t.length; Pt++)
                        ne(Pt);
                  }
                  u.relativePlacementConstraint && function() {
                    var G = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Set();
                    if (A.forEach(function(It) {
                      mt.add(It), pt.add(It);
                    }), u.alignmentConstraint) {
                      if (u.alignmentConstraint.vertical)
                        for (var et = u.alignmentConstraint.vertical, q = function(st) {
                          k.set("dummy" + st, []), et[st].forEach(function(Et) {
                            G.set(Et, "dummy" + st), k.get("dummy" + st).push(Et), A.has(Et) && mt.add("dummy" + st);
                          }), J.set("dummy" + st, T[p.get(et[st][0])]);
                        }, dt = 0; dt < et.length; dt++)
                          q(dt);
                      if (u.alignmentConstraint.horizontal)
                        for (var Tt = u.alignmentConstraint.horizontal, ct = function(st) {
                          nt.set("dummy" + st, []), Tt[st].forEach(function(Et) {
                            z.set(Et, "dummy" + st), nt.get("dummy" + st).push(Et), A.has(Et) && pt.add("dummy" + st);
                          }), at.set("dummy" + st, L[p.get(Tt[st][0])]);
                        }, Dt = 0; Dt < Tt.length; Dt++)
                          ct(Dt);
                    }
                    var ot = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), yt = function(st) {
                      P.get(st).forEach(function(Et) {
                        var Zt = void 0, bt = void 0;
                        Et.direction == "horizontal" ? (Zt = G.get(st) ? G.get(st) : st, G.get(Et.id) ? bt = { id: G.get(Et.id), gap: Et.gap, direction: Et.direction } : bt = Et, ot.has(Zt) ? ot.get(Zt).push(bt) : ot.set(Zt, [bt]), ot.has(bt.id) || ot.set(bt.id, [])) : (Zt = z.get(st) ? z.get(st) : st, z.get(Et.id) ? bt = { id: z.get(Et.id), gap: Et.gap, direction: Et.direction } : bt = Et, rt.has(Zt) ? rt.get(Zt).push(bt) : rt.set(Zt, [bt]), rt.has(bt.id) || rt.set(bt.id, []));
                      });
                    }, it = !0, tt = !1, wt = void 0;
                    try {
                      for (var lt = P.keys()[Symbol.iterator](), ut; !(it = (ut = lt.next()).done); it = !0) {
                        var Gt = ut.value;
                        yt(Gt);
                      }
                    } catch (It) {
                      tt = !0, wt = It;
                    } finally {
                      try {
                        !it && lt.return && lt.return();
                      } finally {
                        if (tt)
                          throw wt;
                      }
                    }
                    var At = y(ot), St = y(rt), Mt = e(At), Ht = e(St), kt = l(ot), le = l(rt), qt = [], jt = [];
                    Mt.forEach(function(It, st) {
                      qt[st] = [], It.forEach(function(Et) {
                        kt.get(Et).length == 0 && qt[st].push(Et);
                      });
                    }), Ht.forEach(function(It, st) {
                      jt[st] = [], It.forEach(function(Et) {
                        le.get(Et).length == 0 && jt[st].push(Et);
                      });
                    });
                    var te = R(ot, "horizontal", mt, J, qt), Qt = R(rt, "vertical", pt, at, jt), oe = function(st) {
                      k.get(st) ? k.get(st).forEach(function(Et) {
                        T[p.get(Et)] = te.get(st);
                      }) : T[p.get(st)] = te.get(st);
                    }, ee = !0, re = !1, ve = void 0;
                    try {
                      for (var fe = te.keys()[Symbol.iterator](), pe; !(ee = (pe = fe.next()).done); ee = !0) {
                        var ge = pe.value;
                        oe(ge);
                      }
                    } catch (It) {
                      re = !0, ve = It;
                    } finally {
                      try {
                        !ee && fe.return && fe.return();
                      } finally {
                        if (re)
                          throw ve;
                      }
                    }
                    var Oe = function(st) {
                      nt.get(st) ? nt.get(st).forEach(function(Et) {
                        L[p.get(Et)] = Qt.get(st);
                      }) : L[p.get(st)] = Qt.get(st);
                    }, ue = !0, Ee = !1, ye = void 0;
                    try {
                      for (var ce = Qt.keys()[Symbol.iterator](), Ne; !(ue = (Ne = ce.next()).done); ue = !0) {
                        var ge = Ne.value;
                        Oe(ge);
                      }
                    } catch (It) {
                      Ee = !0, ye = It;
                    } finally {
                      try {
                        !ue && ce.return && ce.return();
                      } finally {
                        if (Ee)
                          throw ye;
                      }
                    }
                  }();
                }
                for (var Bt = 0; Bt < D.length; Bt++) {
                  var Ut = D[Bt];
                  Ut.getChild() == null && Ut.setCenter(T[p.get(Ut.id)], L[p.get(Ut.id)]);
                }
              }, i.exports = h;
            }
          ),
          /***/
          551: (
            /***/
            (i) => {
              i.exports = I;
            }
          )
          /******/
        }, m = {};
        function c(i) {
          var r = m[i];
          if (r !== void 0)
            return r.exports;
          var n = m[i] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return U[i](n, n.exports, c), n.exports;
        }
        var a = c(45);
        return a;
      })()
    );
  });
})(Me);
var we = Me.exports;
const Wt = /* @__PURE__ */ Ie(we), xe = Wt.layoutBase.LinkedList;
let Ct = {};
Ct.getTopMostNodes = function(S) {
  let F = {};
  for (let U = 0; U < S.length; U++)
    F[S[U].id()] = !0;
  return S.filter(function(U, m) {
    typeof U == "number" && (U = m);
    let c = U.parent()[0];
    for (; c != null; ) {
      if (F[c.id()])
        return !1;
      c = c.parent()[0];
    }
    return !0;
  });
};
Ct.connectComponents = function(S, F, I, U) {
  let m = new xe(), c = /* @__PURE__ */ new Set(), a = [], i, r, n, f = !1, o = 1, v = [], t = [];
  do {
    let s = S.collection();
    t.push(s);
    let h = I[0], g = S.collection();
    for (g.merge(h).merge(h.descendants().intersection(F)), a.push(h), g.forEach(function(u) {
      m.push(u), c.add(u), s.merge(u);
    }); m.length != 0; ) {
      h = m.shift();
      let u = S.collection();
      h.neighborhood().nodes().forEach(function(N) {
        F.intersection(h.edgesWith(N)).length > 0 && u.merge(N);
      });
      for (let N = 0; N < u.length; N++) {
        let p = u[N];
        i = I.intersection(p.union(p.ancestors())), i != null && !c.has(i[0]) && i.union(i.descendants()).forEach(function(L) {
          m.push(L), c.add(L), s.merge(L), I.has(L) && a.push(L);
        });
      }
    }
    if (s.forEach((u) => {
      F.intersection(u.connectedEdges()).forEach((N) => {
        s.has(N.source()) && s.has(N.target()) && s.merge(N);
      });
    }), a.length == I.length && (f = !0), !f || f && o > 1) {
      r = a[0], n = r.connectedEdges().length, a.forEach(function(N) {
        N.connectedEdges().length < n && (n = N.connectedEdges().length, r = N);
      }), v.push(r.id());
      let u = S.collection();
      u.merge(a[0]), a.forEach(function(N) {
        u.merge(N);
      }), a = [], I = I.difference(u), o++;
    }
  } while (!f);
  return U && v.length > 0 && U.set("dummy" + (U.size + 1), v), t;
};
Ct.relocateComponent = function(S, F, I) {
  if (!I.fixedNodeConstraint) {
    let U = Number.POSITIVE_INFINITY, m = Number.NEGATIVE_INFINITY, c = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
    if (I.quality == "draft") {
      for (let [n, f] of F.nodeIndexes) {
        let o = I.cy.getElementById(n);
        if (o) {
          let v = o.boundingBox(), t = F.xCoords[f] - v.w / 2, s = F.xCoords[f] + v.w / 2, h = F.yCoords[f] - v.h / 2, g = F.yCoords[f] + v.h / 2;
          t < U && (U = t), s > m && (m = s), h < c && (c = h), g > a && (a = g);
        }
      }
      let i = S.x - (m + U) / 2, r = S.y - (a + c) / 2;
      F.xCoords = F.xCoords.map((n) => n + i), F.yCoords = F.yCoords.map((n) => n + r);
    } else {
      Object.keys(F).forEach(function(n) {
        let f = F[n], o = f.getRect().x, v = f.getRect().x + f.getRect().width, t = f.getRect().y, s = f.getRect().y + f.getRect().height;
        o < U && (U = o), v > m && (m = v), t < c && (c = t), s > a && (a = s);
      });
      let i = S.x - (m + U) / 2, r = S.y - (a + c) / 2;
      Object.keys(F).forEach(function(n) {
        let f = F[n];
        f.setCenter(f.getCenterX() + i, f.getCenterY() + r);
      });
    }
  }
};
Ct.calcBoundingBox = function(S, F, I, U) {
  let m = Number.MAX_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER, r, n, f, o, v = S.descendants().not(":parent"), t = v.length;
  for (let h = 0; h < t; h++) {
    let g = v[h];
    r = F[U.get(g.id())] - g.width() / 2, n = F[U.get(g.id())] + g.width() / 2, f = I[U.get(g.id())] - g.height() / 2, o = I[U.get(g.id())] + g.height() / 2, m > r && (m = r), c < n && (c = n), a > f && (a = f), i < o && (i = o);
  }
  let s = {};
  return s.topLeftX = m, s.topLeftY = a, s.width = c - m, s.height = i - a, s;
};
Ct.calcParentsWithoutChildren = function(S, F) {
  let I = S.collection();
  return F.nodes(":parent").forEach((U) => {
    let m = !1;
    U.children().forEach((c) => {
      c.css("display") != "none" && (m = !0);
    }), m || I.merge(U);
  }), I;
};
const Lt = Wt.layoutBase.Matrix, Fe = Wt.layoutBase.SVD;
let me = function(S) {
  let F = S.cy, I = S.eles, U = I.nodes(), m = I.nodes(":parent"), c = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = [], n = [], f = [], o = [], v = [], t = [], s = [], h = [], g;
  const u = 1e8, N = 1e-9;
  let p = S.piTol, T = S.samplingType, L = S.nodeSeparation, D, X = function() {
    let e = 0, y = 0, l = !1;
    for (; y < D; ) {
      e = Math.floor(Math.random() * g), l = !1;
      for (let d = 0; d < y; d++)
        if (o[d] == e) {
          l = !0;
          break;
        }
      if (!l)
        o[y] = e, y++;
      else
        continue;
    }
  }, w = function(e, y, l) {
    let d = [], E = 0, M = 0, C = 0, A, P = [], O = 0, K = 1;
    for (let b = 0; b < g; b++)
      P[b] = u;
    for (d[M] = e, P[e] = 0; M >= E; ) {
      C = d[E++];
      let b = r[C];
      for (let Y = 0; Y < b.length; Y++)
        A = a.get(b[Y]), P[A] == u && (P[A] = P[C] + 1, d[++M] = A);
      t[C][y] = P[C] * L;
    }
    if (l) {
      for (let b = 0; b < g; b++)
        t[b][y] < v[b] && (v[b] = t[b][y]);
      for (let b = 0; b < g; b++)
        v[b] > O && (O = v[b], K = b);
    }
    return K;
  }, Z = function(e) {
    let y;
    if (e) {
      y = Math.floor(Math.random() * g);
      for (let l = 0; l < g; l++)
        v[l] = u;
      for (let l = 0; l < D; l++)
        o[l] = y, y = w(y, l, e);
    } else {
      X();
      for (let l = 0; l < D; l++)
        w(o[l], l, e);
    }
    for (let l = 0; l < g; l++)
      for (let d = 0; d < D; d++)
        t[l][d] *= t[l][d];
    for (let l = 0; l < D; l++)
      s[l] = [];
    for (let l = 0; l < D; l++)
      for (let d = 0; d < D; d++)
        s[l][d] = t[o[d]][l];
  }, W = function() {
    let e = Fe.svd(s), y = e.S, l = e.U, d = e.V, E = y[0] * y[0] * y[0], M = [];
    for (let C = 0; C < D; C++) {
      M[C] = [];
      for (let A = 0; A < D; A++)
        M[C][A] = 0, C == A && (M[C][A] = y[C] / (y[C] * y[C] + E / (y[C] * y[C])));
    }
    h = Lt.multMat(Lt.multMat(d, M), Lt.transpose(l));
  }, Q = function() {
    let e, y, l = [], d = [], E = [], M = [];
    for (let O = 0; O < g; O++)
      l[O] = Math.random(), d[O] = Math.random();
    l = Lt.normalize(l), d = Lt.normalize(d);
    let C = N, A = N, P;
    for (; ; ) {
      for (let O = 0; O < g; O++)
        E[O] = l[O];
      if (l = Lt.multGamma(Lt.multL(Lt.multGamma(E), t, h)), e = Lt.dotProduct(E, l), l = Lt.normalize(l), C = Lt.dotProduct(E, l), P = Math.abs(C / A), P <= 1 + p && P >= 1)
        break;
      A = C;
    }
    for (let O = 0; O < g; O++)
      E[O] = l[O];
    for (A = N; ; ) {
      for (let O = 0; O < g; O++)
        M[O] = d[O];
      if (M = Lt.minusOp(M, Lt.multCons(E, Lt.dotProduct(E, M))), d = Lt.multGamma(Lt.multL(Lt.multGamma(M), t, h)), y = Lt.dotProduct(M, d), d = Lt.normalize(d), C = Lt.dotProduct(M, d), P = Math.abs(C / A), P <= 1 + p && P >= 1)
        break;
      A = C;
    }
    for (let O = 0; O < g; O++)
      M[O] = d[O];
    n = Lt.multCons(E, Math.sqrt(Math.abs(e))), f = Lt.multCons(M, Math.sqrt(Math.abs(y)));
  };
  Ct.connectComponents(F, I, Ct.getTopMostNodes(U), c), m.forEach(function(e) {
    Ct.connectComponents(F, I, Ct.getTopMostNodes(e.descendants().intersection(I)), c);
  });
  let R = 0;
  for (let e = 0; e < U.length; e++)
    U[e].isParent() || a.set(U[e].id(), R++);
  for (let e of c.keys())
    a.set(e, R++);
  for (let e = 0; e < a.size; e++)
    r[e] = [];
  m.forEach(function(e) {
    let y = e.children().intersection(I);
    for (; y.nodes(":childless").length == 0; )
      y = y.nodes()[0].children().intersection(I);
    let l = 0, d = y.nodes(":childless")[0].connectedEdges().length;
    y.nodes(":childless").forEach(function(E, M) {
      E.connectedEdges().length < d && (d = E.connectedEdges().length, l = M);
    }), i.set(e.id(), y.nodes(":childless")[l].id());
  }), U.forEach(function(e) {
    let y;
    e.isParent() ? y = a.get(i.get(e.id())) : y = a.get(e.id()), e.neighborhood().nodes().forEach(function(l) {
      I.intersection(e.edgesWith(l)).length > 0 && (l.isParent() ? r[y].push(i.get(l.id())) : r[y].push(l.id()));
    });
  });
  for (let e of c.keys()) {
    let y = a.get(e), l;
    c.get(e).forEach(function(d) {
      F.getElementById(d).isParent() ? l = i.get(d) : l = d, r[y].push(l), r[a.get(l)].push(e);
    });
  }
  g = a.size;
  let ht;
  if (g > 2) {
    D = g < S.sampleSize ? g : S.sampleSize;
    for (let e = 0; e < g; e++)
      t[e] = [];
    for (let e = 0; e < D; e++)
      h[e] = [];
    return S.quality == "draft" || S.step == "all" ? (Z(T), W(), Q(), ht = { nodeIndexes: a, xCoords: n, yCoords: f }) : (a.forEach(function(e, y) {
      n.push(F.getElementById(y).position("x")), f.push(F.getElementById(y).position("y"));
    }), ht = { nodeIndexes: a, xCoords: n, yCoords: f }), ht;
  } else {
    let e = a.keys(), y = F.getElementById(e.next().value), l = y.position(), d = y.outerWidth();
    if (n.push(l.x), f.push(l.y), g == 2) {
      let M = F.getElementById(e.next().value).outerWidth();
      n.push(l.x + d / 2 + M / 2 + S.idealEdgeLength), f.push(l.y);
    }
    return ht = { nodeIndexes: a, xCoords: n, yCoords: f }, ht;
  }
};
const Se = Wt.CoSELayout, ae = Wt.CoSENode, se = Wt.layoutBase.PointD, he = Wt.layoutBase.DimensionD, Kt = Wt.layoutBase.LayoutConstants, Rt = Wt.layoutBase.FDLayoutConstants, gt = Wt.CoSEConstants;
let Le = function(S, F) {
  let I = S.cy, U = S.eles, m = U.nodes(), c = U.edges(), a, i, r, n = {};
  S.randomize && (a = F.nodeIndexes, i = F.xCoords, r = F.yCoords);
  const f = (N) => typeof N == "function", o = (N, p) => f(N) ? N(p) : N;
  let v = Ct.calcParentsWithoutChildren(I, U), t = function(N, p, T, L) {
    let D = p.length;
    for (let X = 0; X < D; X++) {
      let w = p[X], Z = null;
      w.intersection(v).length == 0 && (Z = w.children());
      let W, Q = w.layoutDimensions({
        nodeDimensionsIncludeLabels: L.nodeDimensionsIncludeLabels
      });
      if (w.outerWidth() != null && w.outerHeight() != null)
        if (L.randomize)
          if (!w.isParent())
            W = N.add(new ae(
              T.graphManager,
              new se(i[a.get(w.id())] - Q.w / 2, r[a.get(w.id())] - Q.h / 2),
              new he(parseFloat(Q.w), parseFloat(Q.h))
            ));
          else {
            let R = Ct.calcBoundingBox(w, i, r, a);
            w.intersection(v).length == 0 ? W = N.add(new ae(
              T.graphManager,
              new se(R.topLeftX, R.topLeftY),
              new he(R.width, R.height)
            )) : W = N.add(new ae(
              T.graphManager,
              new se(R.topLeftX, R.topLeftY),
              new he(parseFloat(Q.w), parseFloat(Q.h))
            ));
          }
        else
          W = N.add(new ae(
            T.graphManager,
            new se(w.position("x") - Q.w / 2, w.position("y") - Q.h / 2),
            new he(parseFloat(Q.w), parseFloat(Q.h))
          ));
      else
        W = N.add(new ae(this.graphManager));
      if (W.id = w.data("id"), W.nodeRepulsion = o(L.nodeRepulsion, w), W.paddingLeft = parseInt(w.css("padding")), W.paddingTop = parseInt(w.css("padding")), W.paddingRight = parseInt(w.css("padding")), W.paddingBottom = parseInt(w.css("padding")), L.nodeDimensionsIncludeLabels && (W.labelWidth = w.boundingBox({ includeLabels: !0, includeNodes: !1, includeOverlays: !1 }).w, W.labelHeight = w.boundingBox({ includeLabels: !0, includeNodes: !1, includeOverlays: !1 }).h, W.labelPosVertical = w.css("text-valign"), W.labelPosHorizontal = w.css("text-halign")), n[w.data("id")] = W, isNaN(W.rect.x) && (W.rect.x = 0), isNaN(W.rect.y) && (W.rect.y = 0), Z != null && Z.length > 0) {
        let R;
        R = T.getGraphManager().add(T.newGraph(), W), t(R, Z, T, L);
      }
    }
  }, s = function(N, p, T) {
    let L = 0, D = 0;
    for (let X = 0; X < T.length; X++) {
      let w = T[X], Z = n[w.data("source")], W = n[w.data("target")];
      if (Z && W && Z !== W && Z.getEdgesBetween(W).length == 0) {
        let Q = p.add(N.newEdge(), Z, W);
        Q.id = w.id(), Q.idealLength = o(S.idealEdgeLength, w), Q.edgeElasticity = o(S.edgeElasticity, w), L += Q.idealLength, D++;
      }
    }
    S.idealEdgeLength != null && (D > 0 ? gt.DEFAULT_EDGE_LENGTH = Rt.DEFAULT_EDGE_LENGTH = L / D : f(S.idealEdgeLength) ? gt.DEFAULT_EDGE_LENGTH = Rt.DEFAULT_EDGE_LENGTH = 50 : gt.DEFAULT_EDGE_LENGTH = Rt.DEFAULT_EDGE_LENGTH = S.idealEdgeLength, gt.MIN_REPULSION_DIST = Rt.MIN_REPULSION_DIST = Rt.DEFAULT_EDGE_LENGTH / 10, gt.DEFAULT_RADIAL_SEPARATION = Rt.DEFAULT_EDGE_LENGTH);
  }, h = function(N, p) {
    p.fixedNodeConstraint && (N.constraints.fixedNodeConstraint = p.fixedNodeConstraint), p.alignmentConstraint && (N.constraints.alignmentConstraint = p.alignmentConstraint), p.relativePlacementConstraint && (N.constraints.relativePlacementConstraint = p.relativePlacementConstraint);
  };
  S.nestingFactor != null && (gt.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = Rt.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = S.nestingFactor), S.gravity != null && (gt.DEFAULT_GRAVITY_STRENGTH = Rt.DEFAULT_GRAVITY_STRENGTH = S.gravity), S.numIter != null && (gt.MAX_ITERATIONS = Rt.MAX_ITERATIONS = S.numIter), S.gravityRange != null && (gt.DEFAULT_GRAVITY_RANGE_FACTOR = Rt.DEFAULT_GRAVITY_RANGE_FACTOR = S.gravityRange), S.gravityCompound != null && (gt.DEFAULT_COMPOUND_GRAVITY_STRENGTH = Rt.DEFAULT_COMPOUND_GRAVITY_STRENGTH = S.gravityCompound), S.gravityRangeCompound != null && (gt.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = Rt.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = S.gravityRangeCompound), S.initialEnergyOnIncremental != null && (gt.DEFAULT_COOLING_FACTOR_INCREMENTAL = Rt.DEFAULT_COOLING_FACTOR_INCREMENTAL = S.initialEnergyOnIncremental), S.tilingCompareBy != null && (gt.TILING_COMPARE_BY = S.tilingCompareBy), S.quality == "proof" ? Kt.QUALITY = 2 : Kt.QUALITY = 0, gt.NODE_DIMENSIONS_INCLUDE_LABELS = Rt.NODE_DIMENSIONS_INCLUDE_LABELS = Kt.NODE_DIMENSIONS_INCLUDE_LABELS = S.nodeDimensionsIncludeLabels, gt.DEFAULT_INCREMENTAL = Rt.DEFAULT_INCREMENTAL = Kt.DEFAULT_INCREMENTAL = !S.randomize, gt.ANIMATE = Rt.ANIMATE = Kt.ANIMATE = S.animate, gt.TILE = S.tile, gt.TILING_PADDING_VERTICAL = typeof S.tilingPaddingVertical == "function" ? S.tilingPaddingVertical.call() : S.tilingPaddingVertical, gt.TILING_PADDING_HORIZONTAL = typeof S.tilingPaddingHorizontal == "function" ? S.tilingPaddingHorizontal.call() : S.tilingPaddingHorizontal, gt.DEFAULT_INCREMENTAL = Rt.DEFAULT_INCREMENTAL = Kt.DEFAULT_INCREMENTAL = !0, gt.PURE_INCREMENTAL = !S.randomize, Kt.DEFAULT_UNIFORM_LEAF_NODE_SIZES = S.uniformNodeDimensions, S.step == "transformed" && (gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, gt.ENFORCE_CONSTRAINTS = !1, gt.APPLY_LAYOUT = !1), S.step == "enforced" && (gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, gt.ENFORCE_CONSTRAINTS = !0, gt.APPLY_LAYOUT = !1), S.step == "cose" && (gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, gt.ENFORCE_CONSTRAINTS = !1, gt.APPLY_LAYOUT = !0), S.step == "all" && (S.randomize ? gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, gt.ENFORCE_CONSTRAINTS = !0, gt.APPLY_LAYOUT = !0), S.fixedNodeConstraint || S.alignmentConstraint || S.relativePlacementConstraint ? gt.TREE_REDUCTION_ON_INCREMENTAL = !1 : gt.TREE_REDUCTION_ON_INCREMENTAL = !0;
  let g = new Se(), u = g.newGraphManager();
  return t(u.addRoot(), Ct.getTopMostNodes(m), g, S), s(g, u, c), h(g, S), g.runLayout(), n;
};
const Pe = Object.freeze({
  // 'draft', 'default' or 'proof' 
  // - 'draft' only applies spectral layout 
  // - 'default' improves the quality with subsequent CoSE layout (fast cooling rate)
  // - 'proof' improves the quality with subsequent CoSE layout (slow cooling rate) 
  quality: "default",
  // Use random node positions at beginning of layout
  // if this is set to false, then quality option must be "proof"
  randomize: !0,
  // Whether or not to animate the layout
  animate: !0,
  // Duration of animation in ms, if enabled
  animationDuration: 1e3,
  // Easing of animation, if enabled
  animationEasing: void 0,
  // Fit the viewport to the repositioned nodes
  fit: !0,
  // Padding around layout
  padding: 30,
  // Whether to include labels in node dimensions. Valid in "proof" quality
  nodeDimensionsIncludeLabels: !1,
  // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
  uniformNodeDimensions: !1,
  // Whether to pack disconnected components - valid only if randomize: true
  packComponents: !0,
  // Layout step - all, transformed, enforced, cose - for debug purpose only
  step: "all",
  /* spectral layout options */
  // False for random, true for greedy
  samplingType: !0,
  // Sample size to construct distance matrix
  sampleSize: 25,
  // Separation amount between nodes
  nodeSeparation: 75,
  // Power iteration tolerance
  piTol: 1e-7,
  /* CoSE layout options */
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: (S) => 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: (S) => 50,
  // Divisor to compute edge forces
  edgeElasticity: (S) => 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 2500,
  // For enabling tiling
  tile: !0,
  // The function that specifies the criteria for comparing nodes while sorting them during tiling operation.
  // Takes the node id as a parameter and the default tiling operation is perfomed when this option is not set.
  tilingCompareBy: void 0,
  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,
  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout  
  initialEnergyOnIncremental: 0.3,
  /* constraint options */
  // Fix required nodes to predefined positions
  // [{nodeId: 'n1', position: {x: 100, y: 200}, {...}]
  fixedNodeConstraint: void 0,
  // Align required nodes in vertical/horizontal direction
  // {vertical: [['n1', 'n2')], ['n3', 'n4']], horizontal: ['n2', 'n4']}
  alignmentConstraint: void 0,
  // Place two nodes relatively in vertical/horizontal direction 
  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}]
  relativePlacementConstraint: void 0,
  /* layout event callbacks */
  ready: () => {
  },
  // on layoutready
  stop: () => {
  }
  // on layoutstop
}), Ae = function(S) {
  this.options = De({}, Pe, S);
};
Ae.prototype.run = function() {
  let S = this, F = this.options, I = F.cy, U = F.eles, m = [], c = [], a, i = [];
  F.fixedNodeConstraint && (!Array.isArray(F.fixedNodeConstraint) || F.fixedNodeConstraint.length == 0) && (F.fixedNodeConstraint = void 0), F.alignmentConstraint && (F.alignmentConstraint.vertical && (!Array.isArray(F.alignmentConstraint.vertical) || F.alignmentConstraint.vertical.length == 0) && (F.alignmentConstraint.vertical = void 0), F.alignmentConstraint.horizontal && (!Array.isArray(F.alignmentConstraint.horizontal) || F.alignmentConstraint.horizontal.length == 0) && (F.alignmentConstraint.horizontal = void 0)), F.relativePlacementConstraint && (!Array.isArray(F.relativePlacementConstraint) || F.relativePlacementConstraint.length == 0) && (F.relativePlacementConstraint = void 0), (F.fixedNodeConstraint || F.alignmentConstraint || F.relativePlacementConstraint) && (F.tile = !1, F.packComponents = !1);
  let n, f = !1;
  if (I.layoutUtilities && F.packComponents && (n = I.layoutUtilities("get"), n || (n = I.layoutUtilities()), f = !0), U.nodes().length > 0)
    if (f) {
      let v = Ct.getTopMostNodes(F.eles.nodes());
      if (a = Ct.connectComponents(I, F.eles, v), a.forEach(function(s) {
        let h = s.boundingBox();
        i.push({ x: h.x1 + h.w / 2, y: h.y1 + h.h / 2 });
      }), F.randomize && a.forEach(function(s) {
        F.eles = s, m.push(me(F));
      }), F.quality == "default" || F.quality == "proof") {
        let s = I.collection();
        if (F.tile) {
          let h = /* @__PURE__ */ new Map(), g = [], u = [], N = 0, p = { nodeIndexes: h, xCoords: g, yCoords: u }, T = [];
          if (a.forEach(function(L, D) {
            L.edges().length == 0 && (L.nodes().forEach(function(X, w) {
              s.merge(L.nodes()[w]), X.isParent() || (p.nodeIndexes.set(L.nodes()[w].id(), N++), p.xCoords.push(L.nodes()[0].position().x), p.yCoords.push(L.nodes()[0].position().y));
            }), T.push(D));
          }), s.length > 1) {
            let L = s.boundingBox();
            i.push({ x: L.x1 + L.w / 2, y: L.y1 + L.h / 2 }), a.push(s), m.push(p);
            for (let D = T.length - 1; D >= 0; D--)
              a.splice(T[D], 1), m.splice(T[D], 1), i.splice(T[D], 1);
          }
        }
        a.forEach(function(h, g) {
          F.eles = h, c.push(Le(F, m[g])), Ct.relocateComponent(i[g], c[g], F);
        });
      } else
        a.forEach(function(s, h) {
          Ct.relocateComponent(i[h], m[h], F);
        });
      let t = /* @__PURE__ */ new Set();
      if (a.length > 1) {
        let s = [], h = U.filter((u) => u.css("display") == "none");
        a.forEach(function(u, N) {
          let p;
          if (F.quality == "draft" && (p = m[N].nodeIndexes), u.nodes().not(h).length > 0) {
            let T = {};
            T.edges = [], T.nodes = [];
            let L;
            u.nodes().not(h).forEach(function(D) {
              if (F.quality == "draft")
                if (!D.isParent())
                  L = p.get(D.id()), T.nodes.push({ x: m[N].xCoords[L] - D.boundingbox().w / 2, y: m[N].yCoords[L] - D.boundingbox().h / 2, width: D.boundingbox().w, height: D.boundingbox().h });
                else {
                  let X = Ct.calcBoundingBox(D, m[N].xCoords, m[N].yCoords, p);
                  T.nodes.push({ x: X.topLeftX, y: X.topLeftY, width: X.width, height: X.height });
                }
              else
                c[N][D.id()] && T.nodes.push({ x: c[N][D.id()].getLeft(), y: c[N][D.id()].getTop(), width: c[N][D.id()].getWidth(), height: c[N][D.id()].getHeight() });
            }), u.edges().forEach(function(D) {
              let X = D.source(), w = D.target();
              if (X.css("display") != "none" && w.css("display") != "none")
                if (F.quality == "draft") {
                  let Z = p.get(X.id()), W = p.get(w.id()), Q = [], R = [];
                  if (X.isParent()) {
                    let ht = Ct.calcBoundingBox(X, m[N].xCoords, m[N].yCoords, p);
                    Q.push(ht.topLeftX + ht.width / 2), Q.push(ht.topLeftY + ht.height / 2);
                  } else
                    Q.push(m[N].xCoords[Z]), Q.push(m[N].yCoords[Z]);
                  if (w.isParent()) {
                    let ht = Ct.calcBoundingBox(w, m[N].xCoords, m[N].yCoords, p);
                    R.push(ht.topLeftX + ht.width / 2), R.push(ht.topLeftY + ht.height / 2);
                  } else
                    R.push(m[N].xCoords[W]), R.push(m[N].yCoords[W]);
                  T.edges.push({ startX: Q[0], startY: Q[1], endX: R[0], endY: R[1] });
                } else
                  c[N][X.id()] && c[N][w.id()] && T.edges.push({ startX: c[N][X.id()].getCenterX(), startY: c[N][X.id()].getCenterY(), endX: c[N][w.id()].getCenterX(), endY: c[N][w.id()].getCenterY() });
            }), T.nodes.length > 0 && (s.push(T), t.add(N));
          }
        });
        let g = n.packComponents(s, F.randomize).shifts;
        if (F.quality == "draft")
          m.forEach(function(u, N) {
            let p = u.xCoords.map((L) => L + g[N].dx), T = u.yCoords.map((L) => L + g[N].dy);
            u.xCoords = p, u.yCoords = T;
          });
        else {
          let u = 0;
          t.forEach((N) => {
            Object.keys(c[N]).forEach(function(p) {
              let T = c[N][p];
              T.setCenter(T.getCenterX() + g[u].dx, T.getCenterY() + g[u].dy);
            }), u++;
          });
        }
      }
    } else {
      let v = F.eles.boundingBox();
      if (i.push({ x: v.x1 + v.w / 2, y: v.y1 + v.h / 2 }), F.randomize) {
        let t = me(F);
        m.push(t);
      }
      F.quality == "default" || F.quality == "proof" ? (c.push(Le(F, m[0])), Ct.relocateComponent(i[0], c[0], F)) : Ct.relocateComponent(i[0], m[0], F);
    }
  let o = function(v, t) {
    if (F.quality == "default" || F.quality == "proof") {
      typeof v == "number" && (v = t);
      let s, h, g = v.data("id");
      return c.forEach(function(u) {
        g in u && (s = { x: u[g].getRect().getCenterX(), y: u[g].getRect().getCenterY() }, h = u[g]);
      }), F.nodeDimensionsIncludeLabels && (h.labelWidth && (h.labelPosHorizontal == "left" ? s.x += h.labelWidth / 2 : h.labelPosHorizontal == "right" && (s.x -= h.labelWidth / 2)), h.labelHeight && (h.labelPosVertical == "top" ? s.y += h.labelHeight / 2 : h.labelPosVertical == "bottom" && (s.y -= h.labelHeight / 2))), s == null && (s = { x: v.position("x"), y: v.position("y") }), {
        x: s.x,
        y: s.y
      };
    } else {
      let s;
      return m.forEach(function(h) {
        let g = h.nodeIndexes.get(v.id());
        g != null && (s = { x: h.xCoords[g], y: h.yCoords[g] });
      }), s == null && (s = { x: v.position("x"), y: v.position("y") }), {
        x: s.x,
        y: s.y
      };
    }
  };
  if (F.quality == "default" || F.quality == "proof" || F.randomize) {
    let v = Ct.calcParentsWithoutChildren(I, U), t = U.filter((s) => s.css("display") == "none");
    F.eles = U.not(t), U.nodes().not(":parent").not(t).layoutPositions(S, F, o), v.length > 0 && v.forEach((s) => {
      s.position(o(s));
    });
  } else
    console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
};
let Ge = function(S) {
  S && S("layout", "fcose", Ae);
};
export {
  Ge as default
};
