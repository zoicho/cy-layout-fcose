const be = Object.assign != null ? Object.assign.bind(Object) : function(A, ...w) {
  return w.forEach((M) => {
    Object.keys(M).forEach((S) => A[S] = M[S]);
  }), A;
};
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Re(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
function Ue(A) {
  if (A.__esModule)
    return A;
  var w = A.default;
  if (typeof w == "function") {
    var M = function S() {
      return this instanceof S ? Reflect.construct(w, arguments, this.constructor) : w.apply(this, arguments);
    };
    M.prototype = w.prototype;
  } else
    M = {};
  return Object.defineProperty(M, "__esModule", { value: !0 }), Object.keys(A).forEach(function(S) {
    var T = Object.getOwnPropertyDescriptor(A, S);
    Object.defineProperty(M, S, T.get ? T : {
      enumerable: !0,
      get: function() {
        return A[S];
      }
    });
  }), M;
}
var Fe = { exports: {} }, pe = { exports: {} }, De;
function Ye() {
  return De || (De = 1, function(A, w) {
    (function(S, T) {
      A.exports = T();
    })(qt, function() {
      return (
        /******/
        function(M) {
          var S = {};
          function T(d) {
            if (S[d])
              return S[d].exports;
            var h = S[d] = {
              /******/
              i: d,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return M[d].call(h.exports, h, h.exports, T), h.l = !0, h.exports;
          }
          return T.m = M, T.c = S, T.i = function(d) {
            return d;
          }, T.d = function(d, h, n) {
            T.o(d, h) || Object.defineProperty(d, h, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: n
              /******/
            });
          }, T.n = function(d) {
            var h = d && d.__esModule ? (
              /******/
              function() {
                return d.default;
              }
            ) : (
              /******/
              function() {
                return d;
              }
            );
            return T.d(h, "a", h), h;
          }, T.o = function(d, h) {
            return Object.prototype.hasOwnProperty.call(d, h);
          }, T.p = "", T(T.s = 28);
        }([
          /* 0 */
          /***/
          function(M, S, T) {
            function d() {
            }
            d.QUALITY = 1, d.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, d.DEFAULT_INCREMENTAL = !1, d.DEFAULT_ANIMATION_ON_LAYOUT = !0, d.DEFAULT_ANIMATION_DURING_LAYOUT = !1, d.DEFAULT_ANIMATION_PERIOD = 50, d.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, d.DEFAULT_GRAPH_MARGIN = 15, d.NODE_DIMENSIONS_INCLUDE_LABELS = !1, d.SIMPLE_NODE_SIZE = 40, d.SIMPLE_NODE_HALF_SIZE = d.SIMPLE_NODE_SIZE / 2, d.EMPTY_COMPOUND_NODE_SIZE = 40, d.MIN_EDGE_LENGTH = 1, d.WORLD_BOUNDARY = 1e6, d.INITIAL_WORLD_BOUNDARY = d.WORLD_BOUNDARY / 1e3, d.WORLD_CENTER_X = 1200, d.WORLD_CENTER_Y = 900, M.exports = d;
          },
          /* 1 */
          /***/
          function(M, S, T) {
            var d = T(2), h = T(8), n = T(9);
            function t(s, r, l) {
              d.call(this, l), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = l, this.bendpoints = [], this.source = s, this.target = r;
            }
            t.prototype = Object.create(d.prototype);
            for (var i in d)
              t[i] = d[i];
            t.prototype.getSource = function() {
              return this.source;
            }, t.prototype.getTarget = function() {
              return this.target;
            }, t.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, t.prototype.getLength = function() {
              return this.length;
            }, t.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, t.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, t.prototype.getLca = function() {
              return this.lca;
            }, t.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, t.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, t.prototype.getOtherEnd = function(s) {
              if (this.source === s)
                return this.target;
              if (this.target === s)
                return this.source;
              throw "Node is not incident with this edge";
            }, t.prototype.getOtherEndInGraph = function(s, r) {
              for (var l = this.getOtherEnd(s), e = r.getGraphManager().getRoot(); ; ) {
                if (l.getOwner() == r)
                  return l;
                if (l.getOwner() == e)
                  break;
                l = l.getOwner().getParent();
              }
              return null;
            }, t.prototype.updateLength = function() {
              var s = new Array(4);
              this.isOverlapingSourceAndTarget = h.getIntersection(this.target.getRect(), this.source.getRect(), s), this.isOverlapingSourceAndTarget || (this.lengthX = s[0] - s[2], this.lengthY = s[1] - s[3], Math.abs(this.lengthX) < 1 && (this.lengthX = n.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = n.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, t.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = n.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = n.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, M.exports = t;
          },
          /* 2 */
          /***/
          function(M, S, T) {
            function d(h) {
              this.vGraphObject = h;
            }
            M.exports = d;
          },
          /* 3 */
          /***/
          function(M, S, T) {
            var d = T(2), h = T(10), n = T(13), t = T(0), i = T(16), s = T(5);
            function r(e, a, f, v) {
              f == null && v == null && (v = a), d.call(this, v), e.graphManager != null && (e = e.graphManager), this.estimatedSize = h.MIN_VALUE, this.inclusionTreeDepth = h.MAX_VALUE, this.vGraphObject = v, this.edges = [], this.graphManager = e, f != null && a != null ? this.rect = new n(a.x, a.y, f.width, f.height) : this.rect = new n();
            }
            r.prototype = Object.create(d.prototype);
            for (var l in d)
              r[l] = d[l];
            r.prototype.getEdges = function() {
              return this.edges;
            }, r.prototype.getChild = function() {
              return this.child;
            }, r.prototype.getOwner = function() {
              return this.owner;
            }, r.prototype.getWidth = function() {
              return this.rect.width;
            }, r.prototype.setWidth = function(e) {
              this.rect.width = e;
            }, r.prototype.getHeight = function() {
              return this.rect.height;
            }, r.prototype.setHeight = function(e) {
              this.rect.height = e;
            }, r.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, r.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, r.prototype.getCenter = function() {
              return new s(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, r.prototype.getLocation = function() {
              return new s(this.rect.x, this.rect.y);
            }, r.prototype.getRect = function() {
              return this.rect;
            }, r.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, r.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, r.prototype.setRect = function(e, a) {
              this.rect.x = e.x, this.rect.y = e.y, this.rect.width = a.width, this.rect.height = a.height;
            }, r.prototype.setCenter = function(e, a) {
              this.rect.x = e - this.rect.width / 2, this.rect.y = a - this.rect.height / 2;
            }, r.prototype.setLocation = function(e, a) {
              this.rect.x = e, this.rect.y = a;
            }, r.prototype.moveBy = function(e, a) {
              this.rect.x += e, this.rect.y += a;
            }, r.prototype.getEdgeListToNode = function(e) {
              var a = [], f = this;
              return f.edges.forEach(function(v) {
                if (v.target == e) {
                  if (v.source != f)
                    throw "Incorrect edge source!";
                  a.push(v);
                }
              }), a;
            }, r.prototype.getEdgesBetween = function(e) {
              var a = [], f = this;
              return f.edges.forEach(function(v) {
                if (!(v.source == f || v.target == f))
                  throw "Incorrect edge source and/or target";
                (v.target == e || v.source == e) && a.push(v);
              }), a;
            }, r.prototype.getNeighborsList = function() {
              var e = /* @__PURE__ */ new Set(), a = this;
              return a.edges.forEach(function(f) {
                if (f.source == a)
                  e.add(f.target);
                else {
                  if (f.target != a)
                    throw "Incorrect incidency!";
                  e.add(f.source);
                }
              }), e;
            }, r.prototype.withChildren = function() {
              var e = /* @__PURE__ */ new Set(), a, f;
              if (e.add(this), this.child != null)
                for (var v = this.child.getNodes(), u = 0; u < v.length; u++)
                  a = v[u], f = a.withChildren(), f.forEach(function(N) {
                    e.add(N);
                  });
              return e;
            }, r.prototype.getNoOfChildren = function() {
              var e = 0, a;
              if (this.child == null)
                e = 1;
              else
                for (var f = this.child.getNodes(), v = 0; v < f.length; v++)
                  a = f[v], e += a.getNoOfChildren();
              return e == 0 && (e = 1), e;
            }, r.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == h.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, r.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, r.prototype.scatter = function() {
              var e, a, f = -t.INITIAL_WORLD_BOUNDARY, v = t.INITIAL_WORLD_BOUNDARY;
              e = t.WORLD_CENTER_X + i.nextDouble() * (v - f) + f;
              var u = -t.INITIAL_WORLD_BOUNDARY, N = t.INITIAL_WORLD_BOUNDARY;
              a = t.WORLD_CENTER_Y + i.nextDouble() * (N - u) + u, this.rect.x = e, this.rect.y = a;
            }, r.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var e = this.getChild();
                if (e.updateBounds(!0), this.rect.x = e.getLeft(), this.rect.y = e.getTop(), this.setWidth(e.getRight() - e.getLeft()), this.setHeight(e.getBottom() - e.getTop()), t.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var a = e.getRight() - e.getLeft(), f = e.getBottom() - e.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(a + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > a ? (this.rect.x -= (this.labelWidth - a) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(a + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(f + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > f ? (this.rect.y -= (this.labelHeight - f) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(f + this.labelHeight));
                }
              }
            }, r.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == h.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, r.prototype.transform = function(e) {
              var a = this.rect.x;
              a > t.WORLD_BOUNDARY ? a = t.WORLD_BOUNDARY : a < -t.WORLD_BOUNDARY && (a = -t.WORLD_BOUNDARY);
              var f = this.rect.y;
              f > t.WORLD_BOUNDARY ? f = t.WORLD_BOUNDARY : f < -t.WORLD_BOUNDARY && (f = -t.WORLD_BOUNDARY);
              var v = new s(a, f), u = e.inverseTransformPoint(v);
              this.setLocation(u.x, u.y);
            }, r.prototype.getLeft = function() {
              return this.rect.x;
            }, r.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, r.prototype.getTop = function() {
              return this.rect.y;
            }, r.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, r.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, M.exports = r;
          },
          /* 4 */
          /***/
          function(M, S, T) {
            var d = T(0);
            function h() {
            }
            for (var n in d)
              h[n] = d[n];
            h.MAX_ITERATIONS = 2500, h.DEFAULT_EDGE_LENGTH = 50, h.DEFAULT_SPRING_STRENGTH = 0.45, h.DEFAULT_REPULSION_STRENGTH = 4500, h.DEFAULT_GRAVITY_STRENGTH = 0.4, h.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, h.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, h.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, h.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, h.COOLING_ADAPTATION_FACTOR = 0.33, h.ADAPTATION_LOWER_NODE_LIMIT = 1e3, h.ADAPTATION_UPPER_NODE_LIMIT = 5e3, h.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, h.MAX_NODE_DISPLACEMENT = h.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, h.MIN_REPULSION_DIST = h.DEFAULT_EDGE_LENGTH / 10, h.CONVERGENCE_CHECK_PERIOD = 100, h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, h.MIN_EDGE_LENGTH = 1, h.GRID_CALCULATION_CHECK_PERIOD = 10, M.exports = h;
          },
          /* 5 */
          /***/
          function(M, S, T) {
            function d(h, n) {
              h == null && n == null ? (this.x = 0, this.y = 0) : (this.x = h, this.y = n);
            }
            d.prototype.getX = function() {
              return this.x;
            }, d.prototype.getY = function() {
              return this.y;
            }, d.prototype.setX = function(h) {
              this.x = h;
            }, d.prototype.setY = function(h) {
              this.y = h;
            }, d.prototype.getDifference = function(h) {
              return new DimensionD(this.x - h.x, this.y - h.y);
            }, d.prototype.getCopy = function() {
              return new d(this.x, this.y);
            }, d.prototype.translate = function(h) {
              return this.x += h.width, this.y += h.height, this;
            }, M.exports = d;
          },
          /* 6 */
          /***/
          function(M, S, T) {
            var d = T(2), h = T(10), n = T(0), t = T(7), i = T(3), s = T(1), r = T(13), l = T(12), e = T(11);
            function a(v, u, N) {
              d.call(this, N), this.estimatedSize = h.MIN_VALUE, this.margin = n.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = v, u != null && u instanceof t ? this.graphManager = u : u != null && u instanceof Layout && (this.graphManager = u.graphManager);
            }
            a.prototype = Object.create(d.prototype);
            for (var f in d)
              a[f] = d[f];
            a.prototype.getNodes = function() {
              return this.nodes;
            }, a.prototype.getEdges = function() {
              return this.edges;
            }, a.prototype.getGraphManager = function() {
              return this.graphManager;
            }, a.prototype.getParent = function() {
              return this.parent;
            }, a.prototype.getLeft = function() {
              return this.left;
            }, a.prototype.getRight = function() {
              return this.right;
            }, a.prototype.getTop = function() {
              return this.top;
            }, a.prototype.getBottom = function() {
              return this.bottom;
            }, a.prototype.isConnected = function() {
              return this.isConnected;
            }, a.prototype.add = function(v, u, N) {
              if (u == null && N == null) {
                var y = v;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(y) > -1)
                  throw "Node already in graph!";
                return y.owner = this, this.getNodes().push(y), y;
              } else {
                var m = v;
                if (!(this.getNodes().indexOf(u) > -1 && this.getNodes().indexOf(N) > -1))
                  throw "Source or target not in graph!";
                if (!(u.owner == N.owner && u.owner == this))
                  throw "Both owners must be this graph!";
                return u.owner != N.owner ? null : (m.source = u, m.target = N, m.isInterGraph = !1, this.getEdges().push(m), u.edges.push(m), N != u && N.edges.push(m), m);
              }
            }, a.prototype.remove = function(v) {
              var u = v;
              if (v instanceof i) {
                if (u == null)
                  throw "Node is null!";
                if (!(u.owner != null && u.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var N = u.edges.slice(), y, m = N.length, C = 0; C < m; C++)
                  y = N[C], y.isInterGraph ? this.graphManager.remove(y) : y.source.owner.remove(y);
                var I = this.nodes.indexOf(u);
                if (I == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(I, 1);
              } else if (v instanceof s) {
                var y = v;
                if (y == null)
                  throw "Edge is null!";
                if (!(y.source != null && y.target != null))
                  throw "Source and/or target is null!";
                if (!(y.source.owner != null && y.target.owner != null && y.source.owner == this && y.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var F = y.source.edges.indexOf(y), O = y.target.edges.indexOf(y);
                if (!(F > -1 && O > -1))
                  throw "Source and/or target doesn't know this edge!";
                y.source.edges.splice(F, 1), y.target != y.source && y.target.edges.splice(O, 1);
                var I = y.source.owner.getEdges().indexOf(y);
                if (I == -1)
                  throw "Not in owner's edge list!";
                y.source.owner.getEdges().splice(I, 1);
              }
            }, a.prototype.updateLeftTop = function() {
              for (var v = h.MAX_VALUE, u = h.MAX_VALUE, N, y, m, C = this.getNodes(), I = C.length, F = 0; F < I; F++) {
                var O = C[F];
                N = O.getTop(), y = O.getLeft(), v > N && (v = N), u > y && (u = y);
              }
              return v == h.MAX_VALUE ? null : (C[0].getParent().paddingLeft != null ? m = C[0].getParent().paddingLeft : m = this.margin, this.left = u - m, this.top = v - m, new l(this.left, this.top));
            }, a.prototype.updateBounds = function(v) {
              for (var u = h.MAX_VALUE, N = -h.MAX_VALUE, y = h.MAX_VALUE, m = -h.MAX_VALUE, C, I, F, O, V, X = this.nodes, q = X.length, R = 0; R < q; R++) {
                var nt = X[R];
                v && nt.child != null && nt.updateBounds(), C = nt.getLeft(), I = nt.getRight(), F = nt.getTop(), O = nt.getBottom(), u > C && (u = C), N < I && (N = I), y > F && (y = F), m < O && (m = O);
              }
              var o = new r(u, y, N - u, m - y);
              u == h.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), X[0].getParent().paddingLeft != null ? V = X[0].getParent().paddingLeft : V = this.margin, this.left = o.x - V, this.right = o.x + o.width + V, this.top = o.y - V, this.bottom = o.y + o.height + V;
            }, a.calculateBounds = function(v) {
              for (var u = h.MAX_VALUE, N = -h.MAX_VALUE, y = h.MAX_VALUE, m = -h.MAX_VALUE, C, I, F, O, V = v.length, X = 0; X < V; X++) {
                var q = v[X];
                C = q.getLeft(), I = q.getRight(), F = q.getTop(), O = q.getBottom(), u > C && (u = C), N < I && (N = I), y > F && (y = F), m < O && (m = O);
              }
              var R = new r(u, y, N - u, m - y);
              return R;
            }, a.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, a.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == h.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, a.prototype.calcEstimatedSize = function() {
              for (var v = 0, u = this.nodes, N = u.length, y = 0; y < N; y++) {
                var m = u[y];
                v += m.calcEstimatedSize();
              }
              return v == 0 ? this.estimatedSize = n.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = v / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, a.prototype.updateConnected = function() {
              var v = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var u = new e(), N = /* @__PURE__ */ new Set(), y = this.nodes[0], m, C, I = y.withChildren();
              for (I.forEach(function(R) {
                u.push(R), N.add(R);
              }); u.length !== 0; ) {
                y = u.shift(), m = y.getEdges();
                for (var F = m.length, O = 0; O < F; O++) {
                  var V = m[O];
                  if (C = V.getOtherEndInGraph(y, this), C != null && !N.has(C)) {
                    var X = C.withChildren();
                    X.forEach(function(R) {
                      u.push(R), N.add(R);
                    });
                  }
                }
              }
              if (this.isConnected = !1, N.size >= this.nodes.length) {
                var q = 0;
                N.forEach(function(R) {
                  R.owner == v && q++;
                }), q == this.nodes.length && (this.isConnected = !0);
              }
            }, M.exports = a;
          },
          /* 7 */
          /***/
          function(M, S, T) {
            var d, h = T(1);
            function n(t) {
              d = T(6), this.layout = t, this.graphs = [], this.edges = [];
            }
            n.prototype.addRoot = function() {
              var t = this.layout.newGraph(), i = this.layout.newNode(null), s = this.add(t, i);
              return this.setRootGraph(s), this.rootGraph;
            }, n.prototype.add = function(t, i, s, r, l) {
              if (s == null && r == null && l == null) {
                if (t == null)
                  throw "Graph is null!";
                if (i == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(t) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(t), t.parent != null)
                  throw "Already has a parent!";
                if (i.child != null)
                  throw "Already has a child!";
                return t.parent = i, i.child = t, t;
              } else {
                l = s, r = i, s = t;
                var e = r.getOwner(), a = l.getOwner();
                if (!(e != null && e.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(a != null && a.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (e == a)
                  return s.isInterGraph = !1, e.add(s, r, l);
                if (s.isInterGraph = !0, s.source = r, s.target = l, this.edges.indexOf(s) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(s), !(s.source != null && s.target != null))
                  throw "Edge source and/or target is null!";
                if (!(s.source.edges.indexOf(s) == -1 && s.target.edges.indexOf(s) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return s.source.edges.push(s), s.target.edges.push(s), s;
              }
            }, n.prototype.remove = function(t) {
              if (t instanceof d) {
                var i = t;
                if (i.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(i == this.rootGraph || i.parent != null && i.parent.graphManager == this))
                  throw "Invalid parent node!";
                var s = [];
                s = s.concat(i.getEdges());
                for (var r, l = s.length, e = 0; e < l; e++)
                  r = s[e], i.remove(r);
                var a = [];
                a = a.concat(i.getNodes());
                var f;
                l = a.length;
                for (var e = 0; e < l; e++)
                  f = a[e], i.remove(f);
                i == this.rootGraph && this.setRootGraph(null);
                var v = this.graphs.indexOf(i);
                this.graphs.splice(v, 1), i.parent = null;
              } else if (t instanceof h) {
                if (r = t, r == null)
                  throw "Edge is null!";
                if (!r.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(r.source != null && r.target != null))
                  throw "Source and/or target is null!";
                if (!(r.source.edges.indexOf(r) != -1 && r.target.edges.indexOf(r) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var v = r.source.edges.indexOf(r);
                if (r.source.edges.splice(v, 1), v = r.target.edges.indexOf(r), r.target.edges.splice(v, 1), !(r.source.owner != null && r.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (r.source.owner.getGraphManager().edges.indexOf(r) == -1)
                  throw "Not in owner graph manager's edge list!";
                var v = r.source.owner.getGraphManager().edges.indexOf(r);
                r.source.owner.getGraphManager().edges.splice(v, 1);
              }
            }, n.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, n.prototype.getGraphs = function() {
              return this.graphs;
            }, n.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var t = [], i = this.getGraphs(), s = i.length, r = 0; r < s; r++)
                  t = t.concat(i[r].getNodes());
                this.allNodes = t;
              }
              return this.allNodes;
            }, n.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, n.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, n.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, n.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var t = [], i = this.getGraphs();
                i.length;
                for (var s = 0; s < i.length; s++)
                  t = t.concat(i[s].getEdges());
                t = t.concat(this.edges), this.allEdges = t;
              }
              return this.allEdges;
            }, n.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, n.prototype.setAllNodesToApplyGravitation = function(t) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = t;
            }, n.prototype.getRoot = function() {
              return this.rootGraph;
            }, n.prototype.setRootGraph = function(t) {
              if (t.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = t, t.parent == null && (t.parent = this.layout.newNode("Root node"));
            }, n.prototype.getLayout = function() {
              return this.layout;
            }, n.prototype.isOneAncestorOfOther = function(t, i) {
              if (!(t != null && i != null))
                throw "assert failed";
              if (t == i)
                return !0;
              var s = t.getOwner(), r;
              do {
                if (r = s.getParent(), r == null)
                  break;
                if (r == i)
                  return !0;
                if (s = r.getOwner(), s == null)
                  break;
              } while (!0);
              s = i.getOwner();
              do {
                if (r = s.getParent(), r == null)
                  break;
                if (r == t)
                  return !0;
                if (s = r.getOwner(), s == null)
                  break;
              } while (!0);
              return !1;
            }, n.prototype.calcLowestCommonAncestors = function() {
              for (var t, i, s, r, l, e = this.getAllEdges(), a = e.length, f = 0; f < a; f++) {
                if (t = e[f], i = t.source, s = t.target, t.lca = null, t.sourceInLca = i, t.targetInLca = s, i == s) {
                  t.lca = i.getOwner();
                  continue;
                }
                for (r = i.getOwner(); t.lca == null; ) {
                  for (t.targetInLca = s, l = s.getOwner(); t.lca == null; ) {
                    if (l == r) {
                      t.lca = l;
                      break;
                    }
                    if (l == this.rootGraph)
                      break;
                    if (t.lca != null)
                      throw "assert failed";
                    t.targetInLca = l.getParent(), l = t.targetInLca.getOwner();
                  }
                  if (r == this.rootGraph)
                    break;
                  t.lca == null && (t.sourceInLca = r.getParent(), r = t.sourceInLca.getOwner());
                }
                if (t.lca == null)
                  throw "assert failed";
              }
            }, n.prototype.calcLowestCommonAncestor = function(t, i) {
              if (t == i)
                return t.getOwner();
              var s = t.getOwner();
              do {
                if (s == null)
                  break;
                var r = i.getOwner();
                do {
                  if (r == null)
                    break;
                  if (r == s)
                    return r;
                  r = r.getParent().getOwner();
                } while (!0);
                s = s.getParent().getOwner();
              } while (!0);
              return s;
            }, n.prototype.calcInclusionTreeDepths = function(t, i) {
              t == null && i == null && (t = this.rootGraph, i = 1);
              for (var s, r = t.getNodes(), l = r.length, e = 0; e < l; e++)
                s = r[e], s.inclusionTreeDepth = i, s.child != null && this.calcInclusionTreeDepths(s.child, i + 1);
            }, n.prototype.includesInvalidEdge = function() {
              for (var t, i = [], s = this.edges.length, r = 0; r < s; r++)
                t = this.edges[r], this.isOneAncestorOfOther(t.source, t.target) && i.push(t);
              for (var r = 0; r < i.length; r++)
                this.remove(i[r]);
              return !1;
            }, M.exports = n;
          },
          /* 8 */
          /***/
          function(M, S, T) {
            var d = T(12);
            function h() {
            }
            h.calcSeparationAmount = function(n, t, i, s) {
              if (!n.intersects(t))
                throw "assert failed";
              var r = new Array(2);
              this.decideDirectionsForOverlappingNodes(n, t, r), i[0] = Math.min(n.getRight(), t.getRight()) - Math.max(n.x, t.x), i[1] = Math.min(n.getBottom(), t.getBottom()) - Math.max(n.y, t.y), n.getX() <= t.getX() && n.getRight() >= t.getRight() ? i[0] += Math.min(t.getX() - n.getX(), n.getRight() - t.getRight()) : t.getX() <= n.getX() && t.getRight() >= n.getRight() && (i[0] += Math.min(n.getX() - t.getX(), t.getRight() - n.getRight())), n.getY() <= t.getY() && n.getBottom() >= t.getBottom() ? i[1] += Math.min(t.getY() - n.getY(), n.getBottom() - t.getBottom()) : t.getY() <= n.getY() && t.getBottom() >= n.getBottom() && (i[1] += Math.min(n.getY() - t.getY(), t.getBottom() - n.getBottom()));
              var l = Math.abs((t.getCenterY() - n.getCenterY()) / (t.getCenterX() - n.getCenterX()));
              t.getCenterY() === n.getCenterY() && t.getCenterX() === n.getCenterX() && (l = 1);
              var e = l * i[0], a = i[1] / l;
              i[0] < a ? a = i[0] : e = i[1], i[0] = -1 * r[0] * (a / 2 + s), i[1] = -1 * r[1] * (e / 2 + s);
            }, h.decideDirectionsForOverlappingNodes = function(n, t, i) {
              n.getCenterX() < t.getCenterX() ? i[0] = -1 : i[0] = 1, n.getCenterY() < t.getCenterY() ? i[1] = -1 : i[1] = 1;
            }, h.getIntersection2 = function(n, t, i) {
              var s = n.getCenterX(), r = n.getCenterY(), l = t.getCenterX(), e = t.getCenterY();
              if (n.intersects(t))
                return i[0] = s, i[1] = r, i[2] = l, i[3] = e, !0;
              var a = n.getX(), f = n.getY(), v = n.getRight(), u = n.getX(), N = n.getBottom(), y = n.getRight(), m = n.getWidthHalf(), C = n.getHeightHalf(), I = t.getX(), F = t.getY(), O = t.getRight(), V = t.getX(), X = t.getBottom(), q = t.getRight(), R = t.getWidthHalf(), nt = t.getHeightHalf(), o = !1, E = !1;
              if (s === l) {
                if (r > e)
                  return i[0] = s, i[1] = f, i[2] = l, i[3] = X, !1;
                if (r < e)
                  return i[0] = s, i[1] = N, i[2] = l, i[3] = F, !1;
              } else if (r === e) {
                if (s > l)
                  return i[0] = a, i[1] = r, i[2] = O, i[3] = e, !1;
                if (s < l)
                  return i[0] = v, i[1] = r, i[2] = I, i[3] = e, !1;
              } else {
                var g = n.height / n.width, c = t.height / t.width, p = (e - r) / (l - s), x = void 0, L = void 0, D = void 0, b = void 0, U = void 0, H = void 0;
                if (-g === p ? s > l ? (i[0] = u, i[1] = N, o = !0) : (i[0] = v, i[1] = f, o = !0) : g === p && (s > l ? (i[0] = a, i[1] = f, o = !0) : (i[0] = y, i[1] = N, o = !0)), -c === p ? l > s ? (i[2] = V, i[3] = X, E = !0) : (i[2] = O, i[3] = F, E = !0) : c === p && (l > s ? (i[2] = I, i[3] = F, E = !0) : (i[2] = q, i[3] = X, E = !0)), o && E)
                  return !1;
                if (s > l ? r > e ? (x = this.getCardinalDirection(g, p, 4), L = this.getCardinalDirection(c, p, 2)) : (x = this.getCardinalDirection(-g, p, 3), L = this.getCardinalDirection(-c, p, 1)) : r > e ? (x = this.getCardinalDirection(-g, p, 1), L = this.getCardinalDirection(-c, p, 3)) : (x = this.getCardinalDirection(g, p, 2), L = this.getCardinalDirection(c, p, 4)), !o)
                  switch (x) {
                    case 1:
                      b = f, D = s + -C / p, i[0] = D, i[1] = b;
                      break;
                    case 2:
                      D = y, b = r + m * p, i[0] = D, i[1] = b;
                      break;
                    case 3:
                      b = N, D = s + C / p, i[0] = D, i[1] = b;
                      break;
                    case 4:
                      D = u, b = r + -m * p, i[0] = D, i[1] = b;
                      break;
                  }
                if (!E)
                  switch (L) {
                    case 1:
                      H = F, U = l + -nt / p, i[2] = U, i[3] = H;
                      break;
                    case 2:
                      U = q, H = e + R * p, i[2] = U, i[3] = H;
                      break;
                    case 3:
                      H = X, U = l + nt / p, i[2] = U, i[3] = H;
                      break;
                    case 4:
                      U = V, H = e + -R * p, i[2] = U, i[3] = H;
                      break;
                  }
              }
              return !1;
            }, h.getCardinalDirection = function(n, t, i) {
              return n > t ? i : 1 + i % 4;
            }, h.getIntersection = function(n, t, i, s) {
              if (s == null)
                return this.getIntersection2(n, t, i);
              var r = n.x, l = n.y, e = t.x, a = t.y, f = i.x, v = i.y, u = s.x, N = s.y, y = void 0, m = void 0, C = void 0, I = void 0, F = void 0, O = void 0, V = void 0, X = void 0, q = void 0;
              return C = a - l, F = r - e, V = e * l - r * a, I = N - v, O = f - u, X = u * v - f * N, q = C * O - I * F, q === 0 ? null : (y = (F * X - O * V) / q, m = (I * V - C * X) / q, new d(y, m));
            }, h.angleOfVector = function(n, t, i, s) {
              var r = void 0;
              return n !== i ? (r = Math.atan((s - t) / (i - n)), i < n ? r += Math.PI : s < t && (r += this.TWO_PI)) : s < t ? r = this.ONE_AND_HALF_PI : r = this.HALF_PI, r;
            }, h.doIntersect = function(n, t, i, s) {
              var r = n.x, l = n.y, e = t.x, a = t.y, f = i.x, v = i.y, u = s.x, N = s.y, y = (e - r) * (N - v) - (u - f) * (a - l);
              if (y === 0)
                return !1;
              var m = ((N - v) * (u - r) + (f - u) * (N - l)) / y, C = ((l - a) * (u - r) + (e - r) * (N - l)) / y;
              return 0 < m && m < 1 && 0 < C && C < 1;
            }, h.findCircleLineIntersections = function(n, t, i, s, r, l, e) {
              var a = (i - n) * (i - n) + (s - t) * (s - t), f = 2 * ((n - r) * (i - n) + (t - l) * (s - t)), v = (n - r) * (n - r) + (t - l) * (t - l) - e * e, u = f * f - 4 * a * v;
              if (u >= 0) {
                var N = (-f + Math.sqrt(f * f - 4 * a * v)) / (2 * a), y = (-f - Math.sqrt(f * f - 4 * a * v)) / (2 * a), m = null;
                return N >= 0 && N <= 1 ? [N] : y >= 0 && y <= 1 ? [y] : m;
              } else
                return null;
            }, h.HALF_PI = 0.5 * Math.PI, h.ONE_AND_HALF_PI = 1.5 * Math.PI, h.TWO_PI = 2 * Math.PI, h.THREE_PI = 3 * Math.PI, M.exports = h;
          },
          /* 9 */
          /***/
          function(M, S, T) {
            function d() {
            }
            d.sign = function(h) {
              return h > 0 ? 1 : h < 0 ? -1 : 0;
            }, d.floor = function(h) {
              return h < 0 ? Math.ceil(h) : Math.floor(h);
            }, d.ceil = function(h) {
              return h < 0 ? Math.floor(h) : Math.ceil(h);
            }, M.exports = d;
          },
          /* 10 */
          /***/
          function(M, S, T) {
            function d() {
            }
            d.MAX_VALUE = 2147483647, d.MIN_VALUE = -2147483648, M.exports = d;
          },
          /* 11 */
          /***/
          function(M, S, T) {
            var d = /* @__PURE__ */ function() {
              function r(l, e) {
                for (var a = 0; a < e.length; a++) {
                  var f = e[a];
                  f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
                }
              }
              return function(l, e, a) {
                return e && r(l.prototype, e), a && r(l, a), l;
              };
            }();
            function h(r, l) {
              if (!(r instanceof l))
                throw new TypeError("Cannot call a class as a function");
            }
            var n = function(l) {
              return { value: l, next: null, prev: null };
            }, t = function(l, e, a, f) {
              return l !== null ? l.next = e : f.head = e, a !== null ? a.prev = e : f.tail = e, e.prev = l, e.next = a, f.length++, e;
            }, i = function(l, e) {
              var a = l.prev, f = l.next;
              return a !== null ? a.next = f : e.head = f, f !== null ? f.prev = a : e.tail = a, l.prev = l.next = null, e.length--, l;
            }, s = function() {
              function r(l) {
                var e = this;
                h(this, r), this.length = 0, this.head = null, this.tail = null, l != null && l.forEach(function(a) {
                  return e.push(a);
                });
              }
              return d(r, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(e, a) {
                  return t(a.prev, n(e), a, this);
                }
              }, {
                key: "insertAfter",
                value: function(e, a) {
                  return t(a, n(e), a.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(e, a) {
                  return t(a.prev, e, a, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(e, a) {
                  return t(a, e, a.next, this);
                }
              }, {
                key: "push",
                value: function(e) {
                  return t(this.tail, n(e), null, this);
                }
              }, {
                key: "unshift",
                value: function(e) {
                  return t(null, n(e), this.head, this);
                }
              }, {
                key: "remove",
                value: function(e) {
                  return i(e, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return i(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return i(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return i(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return i(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(e) {
                  if (e <= this.length()) {
                    for (var a = 1, f = this.head; a < e; )
                      f = f.next, a++;
                    return f.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(e, a) {
                  if (e <= this.length()) {
                    for (var f = 1, v = this.head; f < e; )
                      v = v.next, f++;
                    v.value = a;
                  }
                }
              }]), r;
            }();
            M.exports = s;
          },
          /* 12 */
          /***/
          function(M, S, T) {
            function d(h, n, t) {
              this.x = null, this.y = null, h == null && n == null && t == null ? (this.x = 0, this.y = 0) : typeof h == "number" && typeof n == "number" && t == null ? (this.x = h, this.y = n) : h.constructor.name == "Point" && n == null && t == null && (t = h, this.x = t.x, this.y = t.y);
            }
            d.prototype.getX = function() {
              return this.x;
            }, d.prototype.getY = function() {
              return this.y;
            }, d.prototype.getLocation = function() {
              return new d(this.x, this.y);
            }, d.prototype.setLocation = function(h, n, t) {
              h.constructor.name == "Point" && n == null && t == null ? (t = h, this.setLocation(t.x, t.y)) : typeof h == "number" && typeof n == "number" && t == null && (parseInt(h) == h && parseInt(n) == n ? this.move(h, n) : (this.x = Math.floor(h + 0.5), this.y = Math.floor(n + 0.5)));
            }, d.prototype.move = function(h, n) {
              this.x = h, this.y = n;
            }, d.prototype.translate = function(h, n) {
              this.x += h, this.y += n;
            }, d.prototype.equals = function(h) {
              if (h.constructor.name == "Point") {
                var n = h;
                return this.x == n.x && this.y == n.y;
              }
              return this == h;
            }, d.prototype.toString = function() {
              return new d().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, M.exports = d;
          },
          /* 13 */
          /***/
          function(M, S, T) {
            function d(h, n, t, i) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, h != null && n != null && t != null && i != null && (this.x = h, this.y = n, this.width = t, this.height = i);
            }
            d.prototype.getX = function() {
              return this.x;
            }, d.prototype.setX = function(h) {
              this.x = h;
            }, d.prototype.getY = function() {
              return this.y;
            }, d.prototype.setY = function(h) {
              this.y = h;
            }, d.prototype.getWidth = function() {
              return this.width;
            }, d.prototype.setWidth = function(h) {
              this.width = h;
            }, d.prototype.getHeight = function() {
              return this.height;
            }, d.prototype.setHeight = function(h) {
              this.height = h;
            }, d.prototype.getRight = function() {
              return this.x + this.width;
            }, d.prototype.getBottom = function() {
              return this.y + this.height;
            }, d.prototype.intersects = function(h) {
              return !(this.getRight() < h.x || this.getBottom() < h.y || h.getRight() < this.x || h.getBottom() < this.y);
            }, d.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, d.prototype.getMinX = function() {
              return this.getX();
            }, d.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, d.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, d.prototype.getMinY = function() {
              return this.getY();
            }, d.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, d.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, d.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, M.exports = d;
          },
          /* 14 */
          /***/
          function(M, S, T) {
            var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
              return typeof n;
            } : function(n) {
              return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            };
            function h() {
            }
            h.lastID = 0, h.createID = function(n) {
              return h.isPrimitive(n) ? n : (n.uniqueID != null || (n.uniqueID = h.getString(), h.lastID++), n.uniqueID);
            }, h.getString = function(n) {
              return n == null && (n = h.lastID), "Object#" + n;
            }, h.isPrimitive = function(n) {
              var t = typeof n > "u" ? "undefined" : d(n);
              return n == null || t != "object" && t != "function";
            }, M.exports = h;
          },
          /* 15 */
          /***/
          function(M, S, T) {
            function d(f) {
              if (Array.isArray(f)) {
                for (var v = 0, u = Array(f.length); v < f.length; v++)
                  u[v] = f[v];
                return u;
              } else
                return Array.from(f);
            }
            var h = T(0), n = T(7), t = T(3), i = T(1), s = T(6), r = T(5), l = T(17), e = T(29);
            function a(f) {
              e.call(this), this.layoutQuality = h.QUALITY, this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = h.DEFAULT_INCREMENTAL, this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new n(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, f != null && (this.isRemoteUse = f);
            }
            a.RANDOM_SEED = 1, a.prototype = Object.create(e.prototype), a.prototype.getGraphManager = function() {
              return this.graphManager;
            }, a.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, a.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, a.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, a.prototype.newGraphManager = function() {
              var f = new n(this);
              return this.graphManager = f, f;
            }, a.prototype.newGraph = function(f) {
              return new s(null, this.graphManager, f);
            }, a.prototype.newNode = function(f) {
              return new t(this.graphManager, f);
            }, a.prototype.newEdge = function(f) {
              return new i(null, null, f);
            }, a.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, a.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var f;
              return this.checkLayoutSuccess() ? f = !1 : f = this.layout(), h.ANIMATE === "during" ? !1 : (f && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, f);
            }, a.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, a.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var f = this.graphManager.getAllEdges(), v = 0; v < f.length; v++)
                  f[v];
                for (var u = this.graphManager.getRoot().getNodes(), v = 0; v < u.length; v++)
                  u[v];
                this.update(this.graphManager.getRoot());
              }
            }, a.prototype.update = function(f) {
              if (f == null)
                this.update2();
              else if (f instanceof t) {
                var v = f;
                if (v.getChild() != null)
                  for (var u = v.getChild().getNodes(), N = 0; N < u.length; N++)
                    update(u[N]);
                if (v.vGraphObject != null) {
                  var y = v.vGraphObject;
                  y.update(v);
                }
              } else if (f instanceof i) {
                var m = f;
                if (m.vGraphObject != null) {
                  var C = m.vGraphObject;
                  C.update(m);
                }
              } else if (f instanceof s) {
                var I = f;
                if (I.vGraphObject != null) {
                  var F = I.vGraphObject;
                  F.update(I);
                }
              }
            }, a.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = h.QUALITY, this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = h.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, a.prototype.transform = function(f) {
              if (f == null)
                this.transform(new r(0, 0));
              else {
                var v = new l(), u = this.graphManager.getRoot().updateLeftTop();
                if (u != null) {
                  v.setWorldOrgX(f.x), v.setWorldOrgY(f.y), v.setDeviceOrgX(u.x), v.setDeviceOrgY(u.y);
                  for (var N = this.getAllNodes(), y, m = 0; m < N.length; m++)
                    y = N[m], y.transform(v);
                }
              }
            }, a.prototype.positionNodesRandomly = function(f) {
              if (f == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var v, u, N = f.getNodes(), y = 0; y < N.length; y++)
                  v = N[y], u = v.getChild(), u == null || u.getNodes().length == 0 ? v.scatter() : (this.positionNodesRandomly(u), v.updateBounds());
            }, a.prototype.getFlatForest = function() {
              for (var f = [], v = !0, u = this.graphManager.getRoot().getNodes(), N = !0, y = 0; y < u.length; y++)
                u[y].getChild() != null && (N = !1);
              if (!N)
                return f;
              var m = /* @__PURE__ */ new Set(), C = [], I = /* @__PURE__ */ new Map(), F = [];
              for (F = F.concat(u); F.length > 0 && v; ) {
                for (C.push(F[0]); C.length > 0 && v; ) {
                  var O = C[0];
                  C.splice(0, 1), m.add(O);
                  for (var V = O.getEdges(), y = 0; y < V.length; y++) {
                    var X = V[y].getOtherEnd(O);
                    if (I.get(O) != X)
                      if (!m.has(X))
                        C.push(X), I.set(X, O);
                      else {
                        v = !1;
                        break;
                      }
                  }
                }
                if (!v)
                  f = [];
                else {
                  var q = [].concat(d(m));
                  f.push(q);
                  for (var y = 0; y < q.length; y++) {
                    var R = q[y], nt = F.indexOf(R);
                    nt > -1 && F.splice(nt, 1);
                  }
                  m = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map();
                }
              }
              return f;
            }, a.prototype.createDummyNodesForBendpoints = function(f) {
              for (var v = [], u = f.source, N = this.graphManager.calcLowestCommonAncestor(f.source, f.target), y = 0; y < f.bendpoints.length; y++) {
                var m = this.newNode(null);
                m.setRect(new Point(0, 0), new Dimension(1, 1)), N.add(m);
                var C = this.newEdge(null);
                this.graphManager.add(C, u, m), v.add(m), u = m;
              }
              var C = this.newEdge(null);
              return this.graphManager.add(C, u, f.target), this.edgeToDummyNodes.set(f, v), f.isInterGraph() ? this.graphManager.remove(f) : N.remove(f), v;
            }, a.prototype.createBendpointsFromDummyNodes = function() {
              var f = [];
              f = f.concat(this.graphManager.getAllEdges()), f = [].concat(d(this.edgeToDummyNodes.keys())).concat(f);
              for (var v = 0; v < f.length; v++) {
                var u = f[v];
                if (u.bendpoints.length > 0) {
                  for (var N = this.edgeToDummyNodes.get(u), y = 0; y < N.length; y++) {
                    var m = N[y], C = new r(m.getCenterX(), m.getCenterY()), I = u.bendpoints.get(y);
                    I.x = C.x, I.y = C.y, m.getOwner().remove(m);
                  }
                  this.graphManager.add(u, u.source, u.target);
                }
              }
            }, a.transform = function(f, v, u, N) {
              if (u != null && N != null) {
                var y = v;
                if (f <= 50) {
                  var m = v / u;
                  y -= (v - m) / 50 * (50 - f);
                } else {
                  var C = v * N;
                  y += (C - v) / 50 * (f - 50);
                }
                return y;
              } else {
                var I, F;
                return f <= 50 ? (I = 9 * v / 500, F = v / 10) : (I = 9 * v / 50, F = -8 * v), I * f + F;
              }
            }, a.findCenterOfTree = function(f) {
              var v = [];
              v = v.concat(f);
              var u = [], N = /* @__PURE__ */ new Map(), y = !1, m = null;
              (v.length == 1 || v.length == 2) && (y = !0, m = v[0]);
              for (var C = 0; C < v.length; C++) {
                var I = v[C], F = I.getNeighborsList().size;
                N.set(I, I.getNeighborsList().size), F == 1 && u.push(I);
              }
              var O = [];
              for (O = O.concat(u); !y; ) {
                var V = [];
                V = V.concat(O), O = [];
                for (var C = 0; C < v.length; C++) {
                  var I = v[C], X = v.indexOf(I);
                  X >= 0 && v.splice(X, 1);
                  var q = I.getNeighborsList();
                  q.forEach(function(o) {
                    if (u.indexOf(o) < 0) {
                      var E = N.get(o), g = E - 1;
                      g == 1 && O.push(o), N.set(o, g);
                    }
                  });
                }
                u = u.concat(O), (v.length == 1 || v.length == 2) && (y = !0, m = v[0]);
              }
              return m;
            }, a.prototype.setGraphManager = function(f) {
              this.graphManager = f;
            }, M.exports = a;
          },
          /* 16 */
          /***/
          function(M, S, T) {
            function d() {
            }
            d.seed = 1, d.x = 0, d.nextDouble = function() {
              return d.x = Math.sin(d.seed++) * 1e4, d.x - Math.floor(d.x);
            }, M.exports = d;
          },
          /* 17 */
          /***/
          function(M, S, T) {
            var d = T(5);
            function h(n, t) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            h.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, h.prototype.setWorldOrgX = function(n) {
              this.lworldOrgX = n;
            }, h.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, h.prototype.setWorldOrgY = function(n) {
              this.lworldOrgY = n;
            }, h.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, h.prototype.setWorldExtX = function(n) {
              this.lworldExtX = n;
            }, h.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, h.prototype.setWorldExtY = function(n) {
              this.lworldExtY = n;
            }, h.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, h.prototype.setDeviceOrgX = function(n) {
              this.ldeviceOrgX = n;
            }, h.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, h.prototype.setDeviceOrgY = function(n) {
              this.ldeviceOrgY = n;
            }, h.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, h.prototype.setDeviceExtX = function(n) {
              this.ldeviceExtX = n;
            }, h.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, h.prototype.setDeviceExtY = function(n) {
              this.ldeviceExtY = n;
            }, h.prototype.transformX = function(n) {
              var t = 0, i = this.lworldExtX;
              return i != 0 && (t = this.ldeviceOrgX + (n - this.lworldOrgX) * this.ldeviceExtX / i), t;
            }, h.prototype.transformY = function(n) {
              var t = 0, i = this.lworldExtY;
              return i != 0 && (t = this.ldeviceOrgY + (n - this.lworldOrgY) * this.ldeviceExtY / i), t;
            }, h.prototype.inverseTransformX = function(n) {
              var t = 0, i = this.ldeviceExtX;
              return i != 0 && (t = this.lworldOrgX + (n - this.ldeviceOrgX) * this.lworldExtX / i), t;
            }, h.prototype.inverseTransformY = function(n) {
              var t = 0, i = this.ldeviceExtY;
              return i != 0 && (t = this.lworldOrgY + (n - this.ldeviceOrgY) * this.lworldExtY / i), t;
            }, h.prototype.inverseTransformPoint = function(n) {
              var t = new d(this.inverseTransformX(n.x), this.inverseTransformY(n.y));
              return t;
            }, M.exports = h;
          },
          /* 18 */
          /***/
          function(M, S, T) {
            function d(e) {
              if (Array.isArray(e)) {
                for (var a = 0, f = Array(e.length); a < e.length; a++)
                  f[a] = e[a];
                return f;
              } else
                return Array.from(e);
            }
            var h = T(15), n = T(4), t = T(0), i = T(8), s = T(9);
            function r() {
              h.call(this), this.useSmartIdealEdgeLengthCalculation = n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = n.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = n.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = n.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = n.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * n.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = n.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = n.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = n.MAX_ITERATIONS;
            }
            r.prototype = Object.create(h.prototype);
            for (var l in h)
              r[l] = h[l];
            r.prototype.initParameters = function() {
              h.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = n.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, r.prototype.calcIdealEdgeLengths = function() {
              for (var e, a, f, v, u, N, y, m = this.getGraphManager().getAllEdges(), C = 0; C < m.length; C++)
                e = m[C], a = e.idealLength, e.isInterGraph && (v = e.getSource(), u = e.getTarget(), N = e.getSourceInLca().getEstimatedSize(), y = e.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (e.idealLength += N + y - 2 * t.SIMPLE_NODE_SIZE), f = e.getLca().getInclusionTreeDepth(), e.idealLength += a * n.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (v.getInclusionTreeDepth() + u.getInclusionTreeDepth() - 2 * f));
            }, r.prototype.initSpringEmbedder = function() {
              var e = this.getAllNodes().length;
              this.incremental ? (e > n.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * n.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (e - n.ADAPTATION_LOWER_NODE_LIMIT) / (n.ADAPTATION_UPPER_NODE_LIMIT - n.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - n.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = n.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (e > n.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(n.COOLING_ADAPTATION_FACTOR, 1 - (e - n.ADAPTATION_LOWER_NODE_LIMIT) / (n.ADAPTATION_UPPER_NODE_LIMIT - n.ADAPTATION_LOWER_NODE_LIMIT) * (1 - n.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = n.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * n.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, r.prototype.calcSpringForces = function() {
              for (var e = this.getAllEdges(), a, f = 0; f < e.length; f++)
                a = e[f], this.calcSpringForce(a, a.idealLength);
            }, r.prototype.calcRepulsionForces = function() {
              var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f, v, u, N, y = this.getAllNodes(), m;
              if (this.useFRGridVariant)
                for (this.totalIterations % n.GRID_CALCULATION_CHECK_PERIOD == 1 && e && this.updateGrid(), m = /* @__PURE__ */ new Set(), f = 0; f < y.length; f++)
                  u = y[f], this.calculateRepulsionForceOfANode(u, m, e, a), m.add(u);
              else
                for (f = 0; f < y.length; f++)
                  for (u = y[f], v = f + 1; v < y.length; v++)
                    N = y[v], u.getOwner() == N.getOwner() && this.calcRepulsionForce(u, N);
            }, r.prototype.calcGravitationalForces = function() {
              for (var e, a = this.getAllNodesToApplyGravitation(), f = 0; f < a.length; f++)
                e = a[f], this.calcGravitationalForce(e);
            }, r.prototype.moveNodes = function() {
              for (var e = this.getAllNodes(), a, f = 0; f < e.length; f++)
                a = e[f], a.move();
            }, r.prototype.calcSpringForce = function(e, a) {
              var f = e.getSource(), v = e.getTarget(), u, N, y, m;
              if (this.uniformLeafNodeSizes && f.getChild() == null && v.getChild() == null)
                e.updateLengthSimple();
              else if (e.updateLength(), e.isOverlapingSourceAndTarget)
                return;
              u = e.getLength(), u != 0 && (N = e.edgeElasticity * (u - a), y = N * (e.lengthX / u), m = N * (e.lengthY / u), f.springForceX += y, f.springForceY += m, v.springForceX -= y, v.springForceY -= m);
            }, r.prototype.calcRepulsionForce = function(e, a) {
              var f = e.getRect(), v = a.getRect(), u = new Array(2), N = new Array(4), y, m, C, I, F, O, V;
              if (f.intersects(v)) {
                i.calcSeparationAmount(f, v, u, n.DEFAULT_EDGE_LENGTH / 2), O = 2 * u[0], V = 2 * u[1];
                var X = e.noOfChildren * a.noOfChildren / (e.noOfChildren + a.noOfChildren);
                e.repulsionForceX -= X * O, e.repulsionForceY -= X * V, a.repulsionForceX += X * O, a.repulsionForceY += X * V;
              } else
                this.uniformLeafNodeSizes && e.getChild() == null && a.getChild() == null ? (y = v.getCenterX() - f.getCenterX(), m = v.getCenterY() - f.getCenterY()) : (i.getIntersection(f, v, N), y = N[2] - N[0], m = N[3] - N[1]), Math.abs(y) < n.MIN_REPULSION_DIST && (y = s.sign(y) * n.MIN_REPULSION_DIST), Math.abs(m) < n.MIN_REPULSION_DIST && (m = s.sign(m) * n.MIN_REPULSION_DIST), C = y * y + m * m, I = Math.sqrt(C), F = (e.nodeRepulsion / 2 + a.nodeRepulsion / 2) * e.noOfChildren * a.noOfChildren / C, O = F * y / I, V = F * m / I, e.repulsionForceX -= O, e.repulsionForceY -= V, a.repulsionForceX += O, a.repulsionForceY += V;
            }, r.prototype.calcGravitationalForce = function(e) {
              var a, f, v, u, N, y, m, C;
              a = e.getOwner(), f = (a.getRight() + a.getLeft()) / 2, v = (a.getTop() + a.getBottom()) / 2, u = e.getCenterX() - f, N = e.getCenterY() - v, y = Math.abs(u) + e.getWidth() / 2, m = Math.abs(N) + e.getHeight() / 2, e.getOwner() == this.graphManager.getRoot() ? (C = a.getEstimatedSize() * this.gravityRangeFactor, (y > C || m > C) && (e.gravitationForceX = -this.gravityConstant * u, e.gravitationForceY = -this.gravityConstant * N)) : (C = a.getEstimatedSize() * this.compoundGravityRangeFactor, (y > C || m > C) && (e.gravitationForceX = -this.gravityConstant * u * this.compoundGravityConstant, e.gravitationForceY = -this.gravityConstant * N * this.compoundGravityConstant));
            }, r.prototype.isConverged = function() {
              var e, a = !1;
              return this.totalIterations > this.maxIterations / 3 && (a = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), e = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, e || a;
            }, r.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, r.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var e, a = this.graphManager.getAllNodes(), f = 0; f < a.length; f++)
                e = a[f], e.noOfChildren = e.getNoOfChildren();
            }, r.prototype.calcGrid = function(e) {
              var a = 0, f = 0;
              a = parseInt(Math.ceil((e.getRight() - e.getLeft()) / this.repulsionRange)), f = parseInt(Math.ceil((e.getBottom() - e.getTop()) / this.repulsionRange));
              for (var v = new Array(a), u = 0; u < a; u++)
                v[u] = new Array(f);
              for (var u = 0; u < a; u++)
                for (var N = 0; N < f; N++)
                  v[u][N] = new Array();
              return v;
            }, r.prototype.addNodeToGrid = function(e, a, f) {
              var v = 0, u = 0, N = 0, y = 0;
              v = parseInt(Math.floor((e.getRect().x - a) / this.repulsionRange)), u = parseInt(Math.floor((e.getRect().width + e.getRect().x - a) / this.repulsionRange)), N = parseInt(Math.floor((e.getRect().y - f) / this.repulsionRange)), y = parseInt(Math.floor((e.getRect().height + e.getRect().y - f) / this.repulsionRange));
              for (var m = v; m <= u; m++)
                for (var C = N; C <= y; C++)
                  this.grid[m][C].push(e), e.setGridCoordinates(v, u, N, y);
            }, r.prototype.updateGrid = function() {
              var e, a, f = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), e = 0; e < f.length; e++)
                a = f[e], this.addNodeToGrid(a, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, r.prototype.calculateRepulsionForceOfANode = function(e, a, f, v) {
              if (this.totalIterations % n.GRID_CALCULATION_CHECK_PERIOD == 1 && f || v) {
                var u = /* @__PURE__ */ new Set();
                e.surrounding = new Array();
                for (var N, y = this.grid, m = e.startX - 1; m < e.finishX + 2; m++)
                  for (var C = e.startY - 1; C < e.finishY + 2; C++)
                    if (!(m < 0 || C < 0 || m >= y.length || C >= y[0].length)) {
                      for (var I = 0; I < y[m][C].length; I++)
                        if (N = y[m][C][I], !(e.getOwner() != N.getOwner() || e == N) && !a.has(N) && !u.has(N)) {
                          var F = Math.abs(e.getCenterX() - N.getCenterX()) - (e.getWidth() / 2 + N.getWidth() / 2), O = Math.abs(e.getCenterY() - N.getCenterY()) - (e.getHeight() / 2 + N.getHeight() / 2);
                          F <= this.repulsionRange && O <= this.repulsionRange && u.add(N);
                        }
                    }
                e.surrounding = [].concat(d(u));
              }
              for (m = 0; m < e.surrounding.length; m++)
                this.calcRepulsionForce(e, e.surrounding[m]);
            }, r.prototype.calcRepulsionRange = function() {
              return 0;
            }, M.exports = r;
          },
          /* 19 */
          /***/
          function(M, S, T) {
            var d = T(1), h = T(4);
            function n(i, s, r) {
              d.call(this, i, s, r), this.idealLength = h.DEFAULT_EDGE_LENGTH, this.edgeElasticity = h.DEFAULT_SPRING_STRENGTH;
            }
            n.prototype = Object.create(d.prototype);
            for (var t in d)
              n[t] = d[t];
            M.exports = n;
          },
          /* 20 */
          /***/
          function(M, S, T) {
            var d = T(3), h = T(4);
            function n(i, s, r, l) {
              d.call(this, i, s, r, l), this.nodeRepulsion = h.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            n.prototype = Object.create(d.prototype);
            for (var t in d)
              n[t] = d[t];
            n.prototype.setGridCoordinates = function(i, s, r, l) {
              this.startX = i, this.finishX = s, this.startY = r, this.finishY = l;
            }, M.exports = n;
          },
          /* 21 */
          /***/
          function(M, S, T) {
            function d(h, n) {
              this.width = 0, this.height = 0, h !== null && n !== null && (this.height = n, this.width = h);
            }
            d.prototype.getWidth = function() {
              return this.width;
            }, d.prototype.setWidth = function(h) {
              this.width = h;
            }, d.prototype.getHeight = function() {
              return this.height;
            }, d.prototype.setHeight = function(h) {
              this.height = h;
            }, M.exports = d;
          },
          /* 22 */
          /***/
          function(M, S, T) {
            var d = T(14);
            function h() {
              this.map = {}, this.keys = [];
            }
            h.prototype.put = function(n, t) {
              var i = d.createID(n);
              this.contains(i) || (this.map[i] = t, this.keys.push(n));
            }, h.prototype.contains = function(n) {
              return d.createID(n), this.map[n] != null;
            }, h.prototype.get = function(n) {
              var t = d.createID(n);
              return this.map[t];
            }, h.prototype.keySet = function() {
              return this.keys;
            }, M.exports = h;
          },
          /* 23 */
          /***/
          function(M, S, T) {
            var d = T(14);
            function h() {
              this.set = {};
            }
            h.prototype.add = function(n) {
              var t = d.createID(n);
              this.contains(t) || (this.set[t] = n);
            }, h.prototype.remove = function(n) {
              delete this.set[d.createID(n)];
            }, h.prototype.clear = function() {
              this.set = {};
            }, h.prototype.contains = function(n) {
              return this.set[d.createID(n)] == n;
            }, h.prototype.isEmpty = function() {
              return this.size() === 0;
            }, h.prototype.size = function() {
              return Object.keys(this.set).length;
            }, h.prototype.addAllTo = function(n) {
              for (var t = Object.keys(this.set), i = t.length, s = 0; s < i; s++)
                n.push(this.set[t[s]]);
            }, h.prototype.size = function() {
              return Object.keys(this.set).length;
            }, h.prototype.addAll = function(n) {
              for (var t = n.length, i = 0; i < t; i++) {
                var s = n[i];
                this.add(s);
              }
            }, M.exports = h;
          },
          /* 24 */
          /***/
          function(M, S, T) {
            function d() {
            }
            d.multMat = function(h, n) {
              for (var t = [], i = 0; i < h.length; i++) {
                t[i] = [];
                for (var s = 0; s < n[0].length; s++) {
                  t[i][s] = 0;
                  for (var r = 0; r < h[0].length; r++)
                    t[i][s] += h[i][r] * n[r][s];
                }
              }
              return t;
            }, d.transpose = function(h) {
              for (var n = [], t = 0; t < h[0].length; t++) {
                n[t] = [];
                for (var i = 0; i < h.length; i++)
                  n[t][i] = h[i][t];
              }
              return n;
            }, d.multCons = function(h, n) {
              for (var t = [], i = 0; i < h.length; i++)
                t[i] = h[i] * n;
              return t;
            }, d.minusOp = function(h, n) {
              for (var t = [], i = 0; i < h.length; i++)
                t[i] = h[i] - n[i];
              return t;
            }, d.dotProduct = function(h, n) {
              for (var t = 0, i = 0; i < h.length; i++)
                t += h[i] * n[i];
              return t;
            }, d.mag = function(h) {
              return Math.sqrt(this.dotProduct(h, h));
            }, d.normalize = function(h) {
              for (var n = [], t = this.mag(h), i = 0; i < h.length; i++)
                n[i] = h[i] / t;
              return n;
            }, d.multGamma = function(h) {
              for (var n = [], t = 0, i = 0; i < h.length; i++)
                t += h[i];
              t *= -1 / h.length;
              for (var s = 0; s < h.length; s++)
                n[s] = t + h[s];
              return n;
            }, d.multL = function(h, n, t) {
              for (var i = [], s = [], r = [], l = 0; l < n[0].length; l++) {
                for (var e = 0, a = 0; a < n.length; a++)
                  e += -0.5 * n[a][l] * h[a];
                s[l] = e;
              }
              for (var f = 0; f < t.length; f++) {
                for (var v = 0, u = 0; u < t.length; u++)
                  v += t[f][u] * s[u];
                r[f] = v;
              }
              for (var N = 0; N < n.length; N++) {
                for (var y = 0, m = 0; m < n[0].length; m++)
                  y += n[N][m] * r[m];
                i[N] = y;
              }
              return i;
            }, M.exports = d;
          },
          /* 25 */
          /***/
          function(M, S, T) {
            var d = /* @__PURE__ */ function() {
              function i(s, r) {
                for (var l = 0; l < r.length; l++) {
                  var e = r[l];
                  e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
                }
              }
              return function(s, r, l) {
                return r && i(s.prototype, r), l && i(s, l), s;
              };
            }();
            function h(i, s) {
              if (!(i instanceof s))
                throw new TypeError("Cannot call a class as a function");
            }
            var n = T(11), t = function() {
              function i(s, r) {
                h(this, i), (r !== null || r !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var l = void 0;
                s instanceof n ? l = s.size() : l = s.length, this._quicksort(s, 0, l - 1);
              }
              return d(i, [{
                key: "_quicksort",
                value: function(r, l, e) {
                  if (l < e) {
                    var a = this._partition(r, l, e);
                    this._quicksort(r, l, a), this._quicksort(r, a + 1, e);
                  }
                }
              }, {
                key: "_partition",
                value: function(r, l, e) {
                  for (var a = this._get(r, l), f = l, v = e; ; ) {
                    for (; this.compareFunction(a, this._get(r, v)); )
                      v--;
                    for (; this.compareFunction(this._get(r, f), a); )
                      f++;
                    if (f < v)
                      this._swap(r, f, v), f++, v--;
                    else
                      return v;
                  }
                }
              }, {
                key: "_get",
                value: function(r, l) {
                  return r instanceof n ? r.get_object_at(l) : r[l];
                }
              }, {
                key: "_set",
                value: function(r, l, e) {
                  r instanceof n ? r.set_object_at(l, e) : r[l] = e;
                }
              }, {
                key: "_swap",
                value: function(r, l, e) {
                  var a = this._get(r, l);
                  this._set(r, l, this._get(r, e)), this._set(r, e, a);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(r, l) {
                  return l > r;
                }
              }]), i;
            }();
            M.exports = t;
          },
          /* 26 */
          /***/
          function(M, S, T) {
            function d() {
            }
            d.svd = function(h) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = h.length, this.n = h[0].length;
              var n = Math.min(this.m, this.n);
              this.s = function(lt) {
                for (var gt = []; lt-- > 0; )
                  gt.push(0);
                return gt;
              }(Math.min(this.m + 1, this.n)), this.U = function(lt) {
                var gt = function Pt(At) {
                  if (At.length == 0)
                    return 0;
                  for (var St = [], Mt = 0; Mt < At[0]; Mt++)
                    St.push(Pt(At.slice(1)));
                  return St;
                };
                return gt(lt);
              }([this.m, n]), this.V = function(lt) {
                var gt = function Pt(At) {
                  if (At.length == 0)
                    return 0;
                  for (var St = [], Mt = 0; Mt < At[0]; Mt++)
                    St.push(Pt(At.slice(1)));
                  return St;
                };
                return gt(lt);
              }([this.n, this.n]);
              for (var t = function(lt) {
                for (var gt = []; lt-- > 0; )
                  gt.push(0);
                return gt;
              }(this.n), i = function(lt) {
                for (var gt = []; lt-- > 0; )
                  gt.push(0);
                return gt;
              }(this.m), s = !0, r = Math.min(this.m - 1, this.n), l = Math.max(0, Math.min(this.n - 2, this.m)), e = 0; e < Math.max(r, l); e++) {
                if (e < r) {
                  this.s[e] = 0;
                  for (var a = e; a < this.m; a++)
                    this.s[e] = d.hypot(this.s[e], h[a][e]);
                  if (this.s[e] !== 0) {
                    h[e][e] < 0 && (this.s[e] = -this.s[e]);
                    for (var f = e; f < this.m; f++)
                      h[f][e] /= this.s[e];
                    h[e][e] += 1;
                  }
                  this.s[e] = -this.s[e];
                }
                for (var v = e + 1; v < this.n; v++) {
                  if (/* @__PURE__ */ function(lt, gt) {
                    return lt && gt;
                  }(e < r, this.s[e] !== 0)) {
                    for (var u = 0, N = e; N < this.m; N++)
                      u += h[N][e] * h[N][v];
                    u = -u / h[e][e];
                    for (var y = e; y < this.m; y++)
                      h[y][v] += u * h[y][e];
                  }
                  t[v] = h[e][v];
                }
                if (/* @__PURE__ */ function(lt, gt) {
                  return gt;
                }(s, e < r))
                  for (var m = e; m < this.m; m++)
                    this.U[m][e] = h[m][e];
                if (e < l) {
                  t[e] = 0;
                  for (var C = e + 1; C < this.n; C++)
                    t[e] = d.hypot(t[e], t[C]);
                  if (t[e] !== 0) {
                    t[e + 1] < 0 && (t[e] = -t[e]);
                    for (var I = e + 1; I < this.n; I++)
                      t[I] /= t[e];
                    t[e + 1] += 1;
                  }
                  if (t[e] = -t[e], /* @__PURE__ */ function(lt, gt) {
                    return lt && gt;
                  }(e + 1 < this.m, t[e] !== 0)) {
                    for (var F = e + 1; F < this.m; F++)
                      i[F] = 0;
                    for (var O = e + 1; O < this.n; O++)
                      for (var V = e + 1; V < this.m; V++)
                        i[V] += t[O] * h[V][O];
                    for (var X = e + 1; X < this.n; X++)
                      for (var q = -t[X] / t[e + 1], R = e + 1; R < this.m; R++)
                        h[R][X] += q * i[R];
                  }
                  for (var nt = e + 1; nt < this.n; nt++)
                    this.V[nt][e] = t[nt];
                }
              }
              var o = Math.min(this.n, this.m + 1);
              r < this.n && (this.s[r] = h[r][r]), this.m < o && (this.s[o - 1] = 0), l + 1 < o && (t[l] = h[l][o - 1]), t[o - 1] = 0;
              {
                for (var E = r; E < n; E++) {
                  for (var g = 0; g < this.m; g++)
                    this.U[g][E] = 0;
                  this.U[E][E] = 1;
                }
                for (var c = r - 1; c >= 0; c--)
                  if (this.s[c] !== 0) {
                    for (var p = c + 1; p < n; p++) {
                      for (var x = 0, L = c; L < this.m; L++)
                        x += this.U[L][c] * this.U[L][p];
                      x = -x / this.U[c][c];
                      for (var D = c; D < this.m; D++)
                        this.U[D][p] += x * this.U[D][c];
                    }
                    for (var b = c; b < this.m; b++)
                      this.U[b][c] = -this.U[b][c];
                    this.U[c][c] = 1 + this.U[c][c];
                    for (var U = 0; U < c - 1; U++)
                      this.U[U][c] = 0;
                  } else {
                    for (var H = 0; H < this.m; H++)
                      this.U[H][c] = 0;
                    this.U[c][c] = 1;
                  }
              }
              for (var z = this.n - 1; z >= 0; z--) {
                if (/* @__PURE__ */ function(lt, gt) {
                  return lt && gt;
                }(z < l, t[z] !== 0))
                  for (var P = z + 1; P < n; P++) {
                    for (var K = 0, $ = z + 1; $ < this.n; $++)
                      K += this.V[$][z] * this.V[$][P];
                    K = -K / this.V[z + 1][z];
                    for (var G = z + 1; G < this.n; G++)
                      this.V[G][P] += K * this.V[G][z];
                  }
                for (var W = 0; W < this.n; W++)
                  this.V[W][z] = 0;
                this.V[z][z] = 1;
              }
              for (var J = o - 1, k = Math.pow(2, -52), ft = Math.pow(2, -966); o > 0; ) {
                var B = void 0, Ot = void 0;
                for (B = o - 2; B >= -1 && B !== -1; B--)
                  if (Math.abs(t[B]) <= ft + k * (Math.abs(this.s[B]) + Math.abs(this.s[B + 1]))) {
                    t[B] = 0;
                    break;
                  }
                if (B === o - 2)
                  Ot = 4;
                else {
                  var vt = void 0;
                  for (vt = o - 1; vt >= B && vt !== B; vt--) {
                    var _t = (vt !== o ? Math.abs(t[vt]) : 0) + (vt !== B + 1 ? Math.abs(t[vt - 1]) : 0);
                    if (Math.abs(this.s[vt]) <= ft + k * _t) {
                      this.s[vt] = 0;
                      break;
                    }
                  }
                  vt === B ? Ot = 3 : vt === o - 1 ? Ot = 1 : (Ot = 2, B = vt);
                }
                switch (B++, Ot) {
                  case 1:
                    {
                      var Vt = t[o - 2];
                      t[o - 2] = 0;
                      for (var Nt = o - 2; Nt >= B; Nt--) {
                        var Yt = d.hypot(this.s[Nt], Vt), Xt = this.s[Nt] / Yt, ae = Vt / Yt;
                        this.s[Nt] = Yt, Nt !== B && (Vt = -ae * t[Nt - 1], t[Nt - 1] = Xt * t[Nt - 1]);
                        for (var Rt = 0; Rt < this.n; Rt++)
                          Yt = Xt * this.V[Rt][Nt] + ae * this.V[Rt][o - 1], this.V[Rt][o - 1] = -ae * this.V[Rt][Nt] + Xt * this.V[Rt][o - 1], this.V[Rt][Nt] = Yt;
                      }
                    }
                    break;
                  case 2:
                    {
                      var jt = t[B - 1];
                      t[B - 1] = 0;
                      for (var Ft = B; Ft < o; Ft++) {
                        var zt = d.hypot(this.s[Ft], jt), kt = this.s[Ft] / zt, oe = jt / zt;
                        this.s[Ft] = zt, jt = -oe * t[Ft], t[Ft] = kt * t[Ft];
                        for (var Gt = 0; Gt < this.m; Gt++)
                          zt = kt * this.U[Gt][Ft] + oe * this.U[Gt][B - 1], this.U[Gt][B - 1] = -oe * this.U[Gt][Ft] + kt * this.U[Gt][B - 1], this.U[Gt][Ft] = zt;
                      }
                    }
                    break;
                  case 3:
                    {
                      var Bt = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[o - 1]), Math.abs(this.s[o - 2])), Math.abs(t[o - 2])), Math.abs(this.s[B])), Math.abs(t[B])), Ut = this.s[o - 1] / Bt, Y = this.s[o - 2] / Bt, Z = t[o - 2] / Bt, j = this.s[B] / Bt, at = t[B] / Bt, _ = ((Y + Ut) * (Y - Ut) + Z * Z) / 2, ot = Ut * Z * (Ut * Z), Tt = 0;
                      /* @__PURE__ */ (function(lt, gt) {
                        return lt || gt;
                      })(_ !== 0, ot !== 0) && (Tt = Math.sqrt(_ * _ + ot), _ < 0 && (Tt = -Tt), Tt = ot / (_ + Tt));
                      for (var pt = (j + Ut) * (j - Ut) + Tt, et = j * at, Q = B; Q < o - 1; Q++) {
                        var dt = d.hypot(pt, et), mt = pt / dt, ct = et / dt;
                        Q !== B && (t[Q - 1] = dt), pt = mt * this.s[Q] + ct * t[Q], t[Q] = mt * t[Q] - ct * this.s[Q], et = ct * this.s[Q + 1], this.s[Q + 1] = mt * this.s[Q + 1];
                        for (var xt = 0; xt < this.n; xt++)
                          dt = mt * this.V[xt][Q] + ct * this.V[xt][Q + 1], this.V[xt][Q + 1] = -ct * this.V[xt][Q] + mt * this.V[xt][Q + 1], this.V[xt][Q] = dt;
                        if (dt = d.hypot(pt, et), mt = pt / dt, ct = et / dt, this.s[Q] = dt, pt = mt * t[Q] + ct * this.s[Q + 1], this.s[Q + 1] = -ct * t[Q] + mt * this.s[Q + 1], et = ct * t[Q + 1], t[Q + 1] = mt * t[Q + 1], Q < this.m - 1)
                          for (var st = 0; st < this.m; st++)
                            dt = mt * this.U[st][Q] + ct * this.U[st][Q + 1], this.U[st][Q + 1] = -ct * this.U[st][Q] + mt * this.U[st][Q + 1], this.U[st][Q] = dt;
                      }
                      t[o - 2] = pt;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[B] <= 0) {
                        this.s[B] = this.s[B] < 0 ? -this.s[B] : 0;
                        for (var rt = 0; rt <= J; rt++)
                          this.V[rt][B] = -this.V[rt][B];
                      }
                      for (; B < J && !(this.s[B] >= this.s[B + 1]); ) {
                        var yt = this.s[B];
                        if (this.s[B] = this.s[B + 1], this.s[B + 1] = yt, B < this.n - 1)
                          for (var it = 0; it < this.n; it++)
                            yt = this.V[it][B + 1], this.V[it][B + 1] = this.V[it][B], this.V[it][B] = yt;
                        if (B < this.m - 1)
                          for (var tt = 0; tt < this.m; tt++)
                            yt = this.U[tt][B + 1], this.U[tt][B + 1] = this.U[tt][B], this.U[tt][B] = yt;
                        B++;
                      }
                      o--;
                    }
                    break;
                }
              }
              var It = { U: this.U, V: this.V, S: this.s };
              return It;
            }, d.hypot = function(h, n) {
              var t = void 0;
              return Math.abs(h) > Math.abs(n) ? (t = n / h, t = Math.abs(h) * Math.sqrt(1 + t * t)) : n != 0 ? (t = h / n, t = Math.abs(n) * Math.sqrt(1 + t * t)) : t = 0, t;
            }, M.exports = d;
          },
          /* 27 */
          /***/
          function(M, S, T) {
            var d = /* @__PURE__ */ function() {
              function t(i, s) {
                for (var r = 0; r < s.length; r++) {
                  var l = s[r];
                  l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
                }
              }
              return function(i, s, r) {
                return s && t(i.prototype, s), r && t(i, r), i;
              };
            }();
            function h(t, i) {
              if (!(t instanceof i))
                throw new TypeError("Cannot call a class as a function");
            }
            var n = function() {
              function t(i, s) {
                var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                h(this, t), this.sequence1 = i, this.sequence2 = s, this.match_score = r, this.mismatch_penalty = l, this.gap_penalty = e, this.iMax = i.length + 1, this.jMax = s.length + 1, this.grid = new Array(this.iMax);
                for (var a = 0; a < this.iMax; a++) {
                  this.grid[a] = new Array(this.jMax);
                  for (var f = 0; f < this.jMax; f++)
                    this.grid[a][f] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var v = 0; v < this.iMax; v++) {
                  this.tracebackGrid[v] = new Array(this.jMax);
                  for (var u = 0; u < this.jMax; u++)
                    this.tracebackGrid[v][u] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return d(t, [{
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
                  for (var s = 1; s < this.jMax; s++)
                    this.grid[0][s] = this.grid[0][s - 1] + this.gap_penalty, this.tracebackGrid[0][s] = [!1, !1, !0];
                  for (var r = 1; r < this.iMax; r++)
                    this.grid[r][0] = this.grid[r - 1][0] + this.gap_penalty, this.tracebackGrid[r][0] = [!1, !0, !1];
                  for (var l = 1; l < this.iMax; l++)
                    for (var e = 1; e < this.jMax; e++) {
                      var a = void 0;
                      this.sequence1[l - 1] === this.sequence2[e - 1] ? a = this.grid[l - 1][e - 1] + this.match_score : a = this.grid[l - 1][e - 1] + this.mismatch_penalty;
                      var f = this.grid[l - 1][e] + this.gap_penalty, v = this.grid[l][e - 1] + this.gap_penalty, u = [a, f, v], N = this.arrayAllMaxIndexes(u);
                      this.grid[l][e] = u[N[0]], this.tracebackGrid[l][e] = [N.includes(0), N.includes(1), N.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var s = [];
                  for (s.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); s[0]; ) {
                    var r = s[0], l = this.tracebackGrid[r.pos[0]][r.pos[1]];
                    l[0] && s.push({
                      pos: [r.pos[0] - 1, r.pos[1] - 1],
                      seq1: this.sequence1[r.pos[0] - 1] + r.seq1,
                      seq2: this.sequence2[r.pos[1] - 1] + r.seq2
                    }), l[1] && s.push({
                      pos: [r.pos[0] - 1, r.pos[1]],
                      seq1: this.sequence1[r.pos[0] - 1] + r.seq1,
                      seq2: "-" + r.seq2
                    }), l[2] && s.push({
                      pos: [r.pos[0], r.pos[1] - 1],
                      seq1: "-" + r.seq1,
                      seq2: this.sequence2[r.pos[1] - 1] + r.seq2
                    }), r.pos[0] === 0 && r.pos[1] === 0 && this.alignments.push({
                      sequence1: r.seq1,
                      sequence2: r.seq2
                    }), s.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(s, r) {
                  for (var l = [], e = -1; (e = s.indexOf(r, e + 1)) !== -1; )
                    l.push(e);
                  return l;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(s) {
                  return this.getAllIndexes(s, Math.max.apply(null, s));
                }
              }]), t;
            }();
            M.exports = n;
          },
          /* 28 */
          /***/
          function(M, S, T) {
            var d = function() {
            };
            d.FDLayout = T(18), d.FDLayoutConstants = T(4), d.FDLayoutEdge = T(19), d.FDLayoutNode = T(20), d.DimensionD = T(21), d.HashMap = T(22), d.HashSet = T(23), d.IGeometry = T(8), d.IMath = T(9), d.Integer = T(10), d.Point = T(12), d.PointD = T(5), d.RandomSeed = T(16), d.RectangleD = T(13), d.Transform = T(17), d.UniqueIDGeneretor = T(14), d.Quicksort = T(25), d.LinkedList = T(11), d.LGraphObject = T(2), d.LGraph = T(6), d.LEdge = T(1), d.LGraphManager = T(7), d.LNode = T(3), d.Layout = T(15), d.LayoutConstants = T(0), d.NeedlemanWunsch = T(27), d.Matrix = T(24), d.SVD = T(26), M.exports = d;
          },
          /* 29 */
          /***/
          function(M, S, T) {
            function d() {
              this.listeners = [];
            }
            var h = d.prototype;
            h.addListener = function(n, t) {
              this.listeners.push({
                event: n,
                callback: t
              });
            }, h.removeListener = function(n, t) {
              for (var i = this.listeners.length; i >= 0; i--) {
                var s = this.listeners[i];
                s.event === n && s.callback === t && this.listeners.splice(i, 1);
              }
            }, h.emit = function(n, t) {
              for (var i = 0; i < this.listeners.length; i++) {
                var s = this.listeners[i];
                n === s.event && s.callback(t);
              }
            }, M.exports = d;
          }
          /******/
        ])
      );
    });
  }(pe)), pe.exports;
}
(function(A, w) {
  (function(S, T) {
    A.exports = T(Ye());
  })(qt, function(M) {
    return (
      /******/
      (() => {
        var S = {
          /***/
          45: (
            /***/
            (n, t, i) => {
              var s = {};
              s.layoutBase = i(551), s.CoSEConstants = i(806), s.CoSEEdge = i(767), s.CoSEGraph = i(880), s.CoSEGraphManager = i(578), s.CoSELayout = i(765), s.CoSENode = i(991), s.ConstraintHandler = i(902), n.exports = s;
            }
          ),
          /***/
          806: (
            /***/
            (n, t, i) => {
              var s = i(551).FDLayoutConstants;
              function r() {
              }
              for (var l in s)
                r[l] = s[l];
              r.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, r.DEFAULT_RADIAL_SEPARATION = s.DEFAULT_EDGE_LENGTH, r.DEFAULT_COMPONENT_SEPERATION = 60, r.TILE = !0, r.TILING_PADDING_VERTICAL = 10, r.TILING_PADDING_HORIZONTAL = 10, r.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, r.ENFORCE_CONSTRAINTS = !0, r.APPLY_LAYOUT = !0, r.RELAX_MOVEMENT_ON_CONSTRAINTS = !0, r.TREE_REDUCTION_ON_INCREMENTAL = !0, r.PURE_INCREMENTAL = r.DEFAULT_INCREMENTAL, n.exports = r;
            }
          ),
          /***/
          767: (
            /***/
            (n, t, i) => {
              var s = i(551).FDLayoutEdge;
              function r(e, a, f) {
                s.call(this, e, a, f);
              }
              r.prototype = Object.create(s.prototype);
              for (var l in s)
                r[l] = s[l];
              n.exports = r;
            }
          ),
          /***/
          880: (
            /***/
            (n, t, i) => {
              var s = i(551).LGraph;
              function r(e, a, f) {
                s.call(this, e, a, f);
              }
              r.prototype = Object.create(s.prototype);
              for (var l in s)
                r[l] = s[l];
              n.exports = r;
            }
          ),
          /***/
          578: (
            /***/
            (n, t, i) => {
              var s = i(551).LGraphManager;
              function r(e) {
                s.call(this, e);
              }
              r.prototype = Object.create(s.prototype);
              for (var l in s)
                r[l] = s[l];
              n.exports = r;
            }
          ),
          /***/
          765: (
            /***/
            (n, t, i) => {
              var s = i(551).FDLayout, r = i(578), l = i(880), e = i(991), a = i(767), f = i(806), v = i(902), u = i(551).FDLayoutConstants, N = i(551).LayoutConstants, y = i(551).Point, m = i(551).PointD, C = i(551).DimensionD, I = i(551).Layout, F = i(551).Integer, O = i(551).IGeometry, V = i(551).LGraph, X = i(551).Transform, q = i(551).LinkedList;
              function R() {
                s.call(this), this.toBeTiled = {}, this.constraints = {};
              }
              R.prototype = Object.create(s.prototype);
              for (var nt in s)
                R[nt] = s[nt];
              R.prototype.newGraphManager = function() {
                var o = new r(this);
                return this.graphManager = o, o;
              }, R.prototype.newGraph = function(o) {
                return new l(null, this.graphManager, o);
              }, R.prototype.newNode = function(o) {
                return new e(this.graphManager, o);
              }, R.prototype.newEdge = function(o) {
                return new a(null, null, o);
              }, R.prototype.initParameters = function() {
                s.prototype.initParameters.call(this, arguments), this.isSubLayout || (f.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = f.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = f.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = u.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = u.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = u.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1);
              }, R.prototype.initSpringEmbedder = function() {
                s.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / u.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
              }, R.prototype.layout = function() {
                var o = N.DEFAULT_CREATE_BENDS_AS_NEEDED;
                return o && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
              }, R.prototype.classicLayout = function() {
                if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                  if (f.TREE_REDUCTION_ON_INCREMENTAL) {
                    this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                    var E = new Set(this.getAllNodes()), g = this.nodesWithGravity.filter(function(x) {
                      return E.has(x);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(g);
                  }
                } else {
                  var o = this.getFlatForest();
                  if (o.length > 0)
                    this.positionNodesRadially(o);
                  else {
                    this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                    var E = new Set(this.getAllNodes()), g = this.nodesWithGravity.filter(function(c) {
                      return E.has(c);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(g), this.positionNodesRandomly();
                  }
                }
                return Object.keys(this.constraints).length > 0 && (v.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), f.APPLY_LAYOUT && this.runSpringEmbedder(), !0;
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
                      var o = new Set(this.getAllNodes()), E = this.nodesWithGravity.filter(function(p) {
                        return o.has(p);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(E), this.graphManager.updateBounds(), this.updateGrid(), f.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                    } else
                      this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                  this.growTreeIterations++;
                }
                if (this.isGrowthFinished) {
                  if (this.isConverged())
                    return !0;
                  this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), f.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                }
                var g = !this.isTreeGrowing && !this.isGrowthFinished, c = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(g, c), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
              }, R.prototype.getPositionsData = function() {
                for (var o = this.graphManager.getAllNodes(), E = {}, g = 0; g < o.length; g++) {
                  var c = o[g].rect, p = o[g].id;
                  E[p] = {
                    id: p,
                    x: c.getCenterX(),
                    y: c.getCenterY(),
                    w: c.width,
                    h: c.height
                  };
                }
                return E;
              }, R.prototype.runSpringEmbedder = function() {
                this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                var o = !1;
                if (u.ANIMATE === "during")
                  this.emit("layoutstarted");
                else {
                  for (; !o; )
                    o = this.tick();
                  this.graphManager.updateBounds();
                }
              }, R.prototype.moveNodes = function() {
                for (var o = this.getAllNodes(), E, g = 0; g < o.length; g++)
                  E = o[g], E.calculateDisplacement();
                Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                for (var g = 0; g < o.length; g++)
                  E = o[g], E.move();
              }, R.prototype.initConstraintVariables = function() {
                var o = this;
                this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                for (var E = this.graphManager.getAllNodes(), g = 0; g < E.length; g++) {
                  var c = E[g];
                  this.idToNodeMap.set(c.id, c);
                }
                var p = function G(W) {
                  for (var J = W.getChild().getNodes(), k, ft = 0, B = 0; B < J.length; B++)
                    k = J[B], k.getChild() == null ? o.fixedNodeSet.has(k.id) && (ft += 100) : ft += G(k);
                  return ft;
                };
                if (this.constraints.fixedNodeConstraint) {
                  this.constraints.fixedNodeConstraint.forEach(function(J) {
                    o.fixedNodeSet.add(J.nodeId);
                  });
                  for (var E = this.graphManager.getAllNodes(), c, g = 0; g < E.length; g++)
                    if (c = E[g], c.getChild() != null) {
                      var x = p(c);
                      x > 0 && (c.fixedNodeWeight = x);
                    }
                }
                if (this.constraints.relativePlacementConstraint) {
                  var L = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
                  if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(G) {
                    o.fixedNodesOnHorizontal.add(G), o.fixedNodesOnVertical.add(G);
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var b = this.constraints.alignmentConstraint.vertical, g = 0; g < b.length; g++)
                        this.dummyToNodeForVerticalAlignment.set("dummy" + g, []), b[g].forEach(function(W) {
                          L.set(W, "dummy" + g), o.dummyToNodeForVerticalAlignment.get("dummy" + g).push(W), o.fixedNodeSet.has(W) && o.fixedNodesOnHorizontal.add("dummy" + g);
                        });
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var U = this.constraints.alignmentConstraint.horizontal, g = 0; g < U.length; g++)
                        this.dummyToNodeForHorizontalAlignment.set("dummy" + g, []), U[g].forEach(function(W) {
                          D.set(W, "dummy" + g), o.dummyToNodeForHorizontalAlignment.get("dummy" + g).push(W), o.fixedNodeSet.has(W) && o.fixedNodesOnVertical.add("dummy" + g);
                        });
                  }
                  if (f.RELAX_MOVEMENT_ON_CONSTRAINTS)
                    this.shuffle = function(G) {
                      var W, J, k;
                      for (k = G.length - 1; k >= 2 * G.length / 3; k--)
                        W = Math.floor(Math.random() * (k + 1)), J = G[k], G[k] = G[W], G[W] = J;
                      return G;
                    }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(G) {
                      if (G.left) {
                        var W = L.has(G.left) ? L.get(G.left) : G.left, J = L.has(G.right) ? L.get(G.right) : G.right;
                        o.nodesInRelativeHorizontal.includes(W) || (o.nodesInRelativeHorizontal.push(W), o.nodeToRelativeConstraintMapHorizontal.set(W, []), o.dummyToNodeForVerticalAlignment.has(W) ? o.nodeToTempPositionMapHorizontal.set(W, o.idToNodeMap.get(o.dummyToNodeForVerticalAlignment.get(W)[0]).getCenterX()) : o.nodeToTempPositionMapHorizontal.set(W, o.idToNodeMap.get(W).getCenterX())), o.nodesInRelativeHorizontal.includes(J) || (o.nodesInRelativeHorizontal.push(J), o.nodeToRelativeConstraintMapHorizontal.set(J, []), o.dummyToNodeForVerticalAlignment.has(J) ? o.nodeToTempPositionMapHorizontal.set(J, o.idToNodeMap.get(o.dummyToNodeForVerticalAlignment.get(J)[0]).getCenterX()) : o.nodeToTempPositionMapHorizontal.set(J, o.idToNodeMap.get(J).getCenterX())), o.nodeToRelativeConstraintMapHorizontal.get(W).push({ right: J, gap: G.gap }), o.nodeToRelativeConstraintMapHorizontal.get(J).push({ left: W, gap: G.gap });
                      } else {
                        var k = D.has(G.top) ? D.get(G.top) : G.top, ft = D.has(G.bottom) ? D.get(G.bottom) : G.bottom;
                        o.nodesInRelativeVertical.includes(k) || (o.nodesInRelativeVertical.push(k), o.nodeToRelativeConstraintMapVertical.set(k, []), o.dummyToNodeForHorizontalAlignment.has(k) ? o.nodeToTempPositionMapVertical.set(k, o.idToNodeMap.get(o.dummyToNodeForHorizontalAlignment.get(k)[0]).getCenterY()) : o.nodeToTempPositionMapVertical.set(k, o.idToNodeMap.get(k).getCenterY())), o.nodesInRelativeVertical.includes(ft) || (o.nodesInRelativeVertical.push(ft), o.nodeToRelativeConstraintMapVertical.set(ft, []), o.dummyToNodeForHorizontalAlignment.has(ft) ? o.nodeToTempPositionMapVertical.set(ft, o.idToNodeMap.get(o.dummyToNodeForHorizontalAlignment.get(ft)[0]).getCenterY()) : o.nodeToTempPositionMapVertical.set(ft, o.idToNodeMap.get(ft).getCenterY())), o.nodeToRelativeConstraintMapVertical.get(k).push({ bottom: ft, gap: G.gap }), o.nodeToRelativeConstraintMapVertical.get(ft).push({ top: k, gap: G.gap });
                      }
                    });
                  else {
                    var H = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
                    this.constraints.relativePlacementConstraint.forEach(function(G) {
                      if (G.left) {
                        var W = L.has(G.left) ? L.get(G.left) : G.left, J = L.has(G.right) ? L.get(G.right) : G.right;
                        H.has(W) ? H.get(W).push(J) : H.set(W, [J]), H.has(J) ? H.get(J).push(W) : H.set(J, [W]);
                      } else {
                        var k = D.has(G.top) ? D.get(G.top) : G.top, ft = D.has(G.bottom) ? D.get(G.bottom) : G.bottom;
                        z.has(k) ? z.get(k).push(ft) : z.set(k, [ft]), z.has(ft) ? z.get(ft).push(k) : z.set(ft, [k]);
                      }
                    });
                    var P = function(W, J) {
                      var k = [], ft = [], B = new q(), Ot = /* @__PURE__ */ new Set(), vt = 0;
                      return W.forEach(function(_t, Vt) {
                        if (!Ot.has(Vt)) {
                          k[vt] = [], ft[vt] = !1;
                          var Nt = Vt;
                          for (B.push(Nt), Ot.add(Nt), k[vt].push(Nt); B.length != 0; ) {
                            Nt = B.shift(), J.has(Nt) && (ft[vt] = !0);
                            var Yt = W.get(Nt);
                            Yt.forEach(function(Xt) {
                              Ot.has(Xt) || (B.push(Xt), Ot.add(Xt), k[vt].push(Xt));
                            });
                          }
                          vt++;
                        }
                      }), { components: k, isFixed: ft };
                    }, K = P(H, o.fixedNodesOnHorizontal);
                    this.componentsOnHorizontal = K.components, this.fixedComponentsOnHorizontal = K.isFixed;
                    var $ = P(z, o.fixedNodesOnVertical);
                    this.componentsOnVertical = $.components, this.fixedComponentsOnVertical = $.isFixed;
                  }
                }
              }, R.prototype.updateDisplacements = function() {
                var o = this;
                if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function($) {
                  var G = o.idToNodeMap.get($.nodeId);
                  G.displacementX = 0, G.displacementY = 0;
                }), this.constraints.alignmentConstraint) {
                  if (this.constraints.alignmentConstraint.vertical)
                    for (var E = this.constraints.alignmentConstraint.vertical, g = 0; g < E.length; g++) {
                      for (var c = 0, p = 0; p < E[g].length; p++) {
                        if (this.fixedNodeSet.has(E[g][p])) {
                          c = 0;
                          break;
                        }
                        c += this.idToNodeMap.get(E[g][p]).displacementX;
                      }
                      for (var x = c / E[g].length, p = 0; p < E[g].length; p++)
                        this.idToNodeMap.get(E[g][p]).displacementX = x;
                    }
                  if (this.constraints.alignmentConstraint.horizontal)
                    for (var L = this.constraints.alignmentConstraint.horizontal, g = 0; g < L.length; g++) {
                      for (var D = 0, p = 0; p < L[g].length; p++) {
                        if (this.fixedNodeSet.has(L[g][p])) {
                          D = 0;
                          break;
                        }
                        D += this.idToNodeMap.get(L[g][p]).displacementY;
                      }
                      for (var b = D / L[g].length, p = 0; p < L[g].length; p++)
                        this.idToNodeMap.get(L[g][p]).displacementY = b;
                    }
                }
                if (this.constraints.relativePlacementConstraint)
                  if (f.RELAX_MOVEMENT_ON_CONSTRAINTS)
                    this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function($) {
                      if (!o.fixedNodesOnHorizontal.has($)) {
                        var G = 0;
                        o.dummyToNodeForVerticalAlignment.has($) ? G = o.idToNodeMap.get(o.dummyToNodeForVerticalAlignment.get($)[0]).displacementX : G = o.idToNodeMap.get($).displacementX, o.nodeToRelativeConstraintMapHorizontal.get($).forEach(function(W) {
                          if (W.right) {
                            var J = o.nodeToTempPositionMapHorizontal.get(W.right) - o.nodeToTempPositionMapHorizontal.get($) - G;
                            J < W.gap && (G -= W.gap - J);
                          } else {
                            var J = o.nodeToTempPositionMapHorizontal.get($) - o.nodeToTempPositionMapHorizontal.get(W.left) + G;
                            J < W.gap && (G += W.gap - J);
                          }
                        }), o.nodeToTempPositionMapHorizontal.set($, o.nodeToTempPositionMapHorizontal.get($) + G), o.dummyToNodeForVerticalAlignment.has($) ? o.dummyToNodeForVerticalAlignment.get($).forEach(function(W) {
                          o.idToNodeMap.get(W).displacementX = G;
                        }) : o.idToNodeMap.get($).displacementX = G;
                      }
                    }), this.nodesInRelativeVertical.forEach(function($) {
                      if (!o.fixedNodesOnHorizontal.has($)) {
                        var G = 0;
                        o.dummyToNodeForHorizontalAlignment.has($) ? G = o.idToNodeMap.get(o.dummyToNodeForHorizontalAlignment.get($)[0]).displacementY : G = o.idToNodeMap.get($).displacementY, o.nodeToRelativeConstraintMapVertical.get($).forEach(function(W) {
                          if (W.bottom) {
                            var J = o.nodeToTempPositionMapVertical.get(W.bottom) - o.nodeToTempPositionMapVertical.get($) - G;
                            J < W.gap && (G -= W.gap - J);
                          } else {
                            var J = o.nodeToTempPositionMapVertical.get($) - o.nodeToTempPositionMapVertical.get(W.top) + G;
                            J < W.gap && (G += W.gap - J);
                          }
                        }), o.nodeToTempPositionMapVertical.set($, o.nodeToTempPositionMapVertical.get($) + G), o.dummyToNodeForHorizontalAlignment.has($) ? o.dummyToNodeForHorizontalAlignment.get($).forEach(function(W) {
                          o.idToNodeMap.get(W).displacementY = G;
                        }) : o.idToNodeMap.get($).displacementY = G;
                      }
                    });
                  else {
                    for (var g = 0; g < this.componentsOnHorizontal.length; g++) {
                      var U = this.componentsOnHorizontal[g];
                      if (this.fixedComponentsOnHorizontal[g])
                        for (var p = 0; p < U.length; p++)
                          this.dummyToNodeForVerticalAlignment.has(U[p]) ? this.dummyToNodeForVerticalAlignment.get(U[p]).forEach(function(W) {
                            o.idToNodeMap.get(W).displacementX = 0;
                          }) : this.idToNodeMap.get(U[p]).displacementX = 0;
                      else {
                        for (var H = 0, z = 0, p = 0; p < U.length; p++)
                          if (this.dummyToNodeForVerticalAlignment.has(U[p])) {
                            var P = this.dummyToNodeForVerticalAlignment.get(U[p]);
                            H += P.length * this.idToNodeMap.get(P[0]).displacementX, z += P.length;
                          } else
                            H += this.idToNodeMap.get(U[p]).displacementX, z++;
                        for (var K = H / z, p = 0; p < U.length; p++)
                          this.dummyToNodeForVerticalAlignment.has(U[p]) ? this.dummyToNodeForVerticalAlignment.get(U[p]).forEach(function(W) {
                            o.idToNodeMap.get(W).displacementX = K;
                          }) : this.idToNodeMap.get(U[p]).displacementX = K;
                      }
                    }
                    for (var g = 0; g < this.componentsOnVertical.length; g++) {
                      var U = this.componentsOnVertical[g];
                      if (this.fixedComponentsOnVertical[g])
                        for (var p = 0; p < U.length; p++)
                          this.dummyToNodeForHorizontalAlignment.has(U[p]) ? this.dummyToNodeForHorizontalAlignment.get(U[p]).forEach(function(J) {
                            o.idToNodeMap.get(J).displacementY = 0;
                          }) : this.idToNodeMap.get(U[p]).displacementY = 0;
                      else {
                        for (var H = 0, z = 0, p = 0; p < U.length; p++)
                          if (this.dummyToNodeForHorizontalAlignment.has(U[p])) {
                            var P = this.dummyToNodeForHorizontalAlignment.get(U[p]);
                            H += P.length * this.idToNodeMap.get(P[0]).displacementY, z += P.length;
                          } else
                            H += this.idToNodeMap.get(U[p]).displacementY, z++;
                        for (var K = H / z, p = 0; p < U.length; p++)
                          this.dummyToNodeForHorizontalAlignment.has(U[p]) ? this.dummyToNodeForHorizontalAlignment.get(U[p]).forEach(function(B) {
                            o.idToNodeMap.get(B).displacementY = K;
                          }) : this.idToNodeMap.get(U[p]).displacementY = K;
                      }
                    }
                  }
              }, R.prototype.calculateNodesToApplyGravitationTo = function() {
                var o = [], E, g = this.graphManager.getGraphs(), c = g.length, p;
                for (p = 0; p < c; p++)
                  E = g[p], E.updateConnected(), E.isConnected || (o = o.concat(E.getNodes()));
                return o;
              }, R.prototype.createBendpoints = function() {
                var o = [];
                o = o.concat(this.graphManager.getAllEdges());
                var E = /* @__PURE__ */ new Set(), g;
                for (g = 0; g < o.length; g++) {
                  var c = o[g];
                  if (!E.has(c)) {
                    var p = c.getSource(), x = c.getTarget();
                    if (p == x)
                      c.getBendpoints().push(new m()), c.getBendpoints().push(new m()), this.createDummyNodesForBendpoints(c), E.add(c);
                    else {
                      var L = [];
                      if (L = L.concat(p.getEdgeListToNode(x)), L = L.concat(x.getEdgeListToNode(p)), !E.has(L[0])) {
                        if (L.length > 1) {
                          var D;
                          for (D = 0; D < L.length; D++) {
                            var b = L[D];
                            b.getBendpoints().push(new m()), this.createDummyNodesForBendpoints(b);
                          }
                        }
                        L.forEach(function(U) {
                          E.add(U);
                        });
                      }
                    }
                  }
                  if (E.size == o.length)
                    break;
                }
              }, R.prototype.positionNodesRadially = function(o) {
                for (var E = new y(0, 0), g = Math.ceil(Math.sqrt(o.length)), c = 0, p = 0, x = 0, L = new m(0, 0), D = 0; D < o.length; D++) {
                  D % g == 0 && (x = 0, p = c, D != 0 && (p += f.DEFAULT_COMPONENT_SEPERATION), c = 0);
                  var b = o[D], U = I.findCenterOfTree(b);
                  E.x = x, E.y = p, L = R.radialLayout(b, U, E), L.y > c && (c = Math.floor(L.y)), x = Math.floor(L.x + f.DEFAULT_COMPONENT_SEPERATION);
                }
                this.transform(new m(N.WORLD_CENTER_X - L.x / 2, N.WORLD_CENTER_Y - L.y / 2));
              }, R.radialLayout = function(o, E, g) {
                var c = Math.max(this.maxDiagonalInTree(o), f.DEFAULT_RADIAL_SEPARATION);
                R.branchRadialLayout(E, null, 0, 359, 0, c);
                var p = V.calculateBounds(o), x = new X();
                x.setDeviceOrgX(p.getMinX()), x.setDeviceOrgY(p.getMinY()), x.setWorldOrgX(g.x), x.setWorldOrgY(g.y);
                for (var L = 0; L < o.length; L++) {
                  var D = o[L];
                  D.transform(x);
                }
                var b = new m(p.getMaxX(), p.getMaxY());
                return x.inverseTransformPoint(b);
              }, R.branchRadialLayout = function(o, E, g, c, p, x) {
                var L = (c - g + 1) / 2;
                L < 0 && (L += 180);
                var D = (L + g) % 360, b = D * O.TWO_PI / 360, U = p * Math.cos(b), H = p * Math.sin(b);
                o.setCenter(U, H);
                var z = [];
                z = z.concat(o.getEdges());
                var P = z.length;
                E != null && P--;
                for (var K = 0, $ = z.length, G, W = o.getEdgesBetween(E); W.length > 1; ) {
                  var J = W[0];
                  W.splice(0, 1);
                  var k = z.indexOf(J);
                  k >= 0 && z.splice(k, 1), $--, P--;
                }
                E != null ? G = (z.indexOf(W[0]) + 1) % $ : G = 0;
                for (var ft = Math.abs(c - g) / P, B = G; K != P; B = ++B % $) {
                  var Ot = z[B].getOtherEnd(o);
                  if (Ot != E) {
                    var vt = (g + K * ft) % 360, _t = (vt + ft) % 360;
                    R.branchRadialLayout(Ot, o, vt, _t, p + x, x), K++;
                  }
                }
              }, R.maxDiagonalInTree = function(o) {
                for (var E = F.MIN_VALUE, g = 0; g < o.length; g++) {
                  var c = o[g], p = c.getDiagonal();
                  p > E && (E = p);
                }
                return E;
              }, R.prototype.calcRepulsionRange = function() {
                return 2 * (this.level + 1) * this.idealEdgeLength;
              }, R.prototype.groupZeroDegreeMembers = function() {
                var o = this, E = {};
                this.memberGroups = {}, this.idToDummyNode = {};
                for (var g = [], c = this.graphManager.getAllNodes(), p = 0; p < c.length; p++) {
                  var x = c[p], L = x.getParent();
                  this.getNodeDegreeWithChildren(x) === 0 && (L.id == null || !this.getToBeTiled(L)) && g.push(x);
                }
                for (var p = 0; p < g.length; p++) {
                  var x = g[p], D = x.getParent().id;
                  typeof E[D] > "u" && (E[D] = []), E[D] = E[D].concat(x);
                }
                Object.keys(E).forEach(function(b) {
                  if (E[b].length > 1) {
                    var U = "DummyCompound_" + b;
                    o.memberGroups[U] = E[b];
                    var H = E[b][0].getParent(), z = new e(o.graphManager);
                    z.id = U, z.paddingLeft = H.paddingLeft || 0, z.paddingRight = H.paddingRight || 0, z.paddingBottom = H.paddingBottom || 0, z.paddingTop = H.paddingTop || 0, o.idToDummyNode[U] = z;
                    var P = o.getGraphManager().add(o.newGraph(), z), K = H.getChild();
                    K.add(z);
                    for (var $ = 0; $ < E[b].length; $++) {
                      var G = E[b][$];
                      K.remove(G), P.add(G);
                    }
                  }
                });
              }, R.prototype.clearCompounds = function() {
                var o = {}, E = {};
                this.performDFSOnCompounds();
                for (var g = 0; g < this.compoundOrder.length; g++)
                  E[this.compoundOrder[g].id] = this.compoundOrder[g], o[this.compoundOrder[g].id] = [].concat(this.compoundOrder[g].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[g].getChild()), this.compoundOrder[g].child = null;
                this.graphManager.resetAllNodes(), this.tileCompoundMembers(o, E);
              }, R.prototype.clearZeroDegreeMembers = function() {
                var o = this, E = this.tiledZeroDegreePack = [];
                Object.keys(this.memberGroups).forEach(function(g) {
                  var c = o.idToDummyNode[g];
                  if (E[g] = o.tileNodes(o.memberGroups[g], c.paddingLeft + c.paddingRight), c.rect.width = E[g].width, c.rect.height = E[g].height, c.setCenter(E[g].centerX, E[g].centerY), c.labelMarginLeft = 0, c.labelMarginTop = 0, f.NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var p = c.rect.width, x = c.rect.height;
                    c.labelWidth && (c.labelPosHorizontal == "left" ? (c.rect.x -= c.labelWidth, c.setWidth(p + c.labelWidth), c.labelMarginLeft = c.labelWidth) : c.labelPosHorizontal == "center" && c.labelWidth > p ? (c.rect.x -= (c.labelWidth - p) / 2, c.setWidth(c.labelWidth), c.labelMarginLeft = (c.labelWidth - p) / 2) : c.labelPosHorizontal == "right" && c.setWidth(p + c.labelWidth)), c.labelHeight && (c.labelPosVertical == "top" ? (c.rect.y -= c.labelHeight, c.setHeight(x + c.labelHeight), c.labelMarginTop = c.labelHeight) : c.labelPosVertical == "center" && c.labelHeight > x ? (c.rect.y -= (c.labelHeight - x) / 2, c.setHeight(c.labelHeight), c.labelMarginTop = (c.labelHeight - x) / 2) : c.labelPosVertical == "bottom" && c.setHeight(x + c.labelHeight));
                  }
                });
              }, R.prototype.repopulateCompounds = function() {
                for (var o = this.compoundOrder.length - 1; o >= 0; o--) {
                  var E = this.compoundOrder[o], g = E.id, c = E.paddingLeft, p = E.paddingTop, x = E.labelMarginLeft, L = E.labelMarginTop;
                  this.adjustLocations(this.tiledMemberPack[g], E.rect.x, E.rect.y, c, p, x, L);
                }
              }, R.prototype.repopulateZeroDegreeMembers = function() {
                var o = this, E = this.tiledZeroDegreePack;
                Object.keys(E).forEach(function(g) {
                  var c = o.idToDummyNode[g], p = c.paddingLeft, x = c.paddingTop, L = c.labelMarginLeft, D = c.labelMarginTop;
                  o.adjustLocations(E[g], c.rect.x, c.rect.y, p, x, L, D);
                });
              }, R.prototype.getToBeTiled = function(o) {
                var E = o.id;
                if (this.toBeTiled[E] != null)
                  return this.toBeTiled[E];
                var g = o.getChild();
                if (g == null)
                  return this.toBeTiled[E] = !1, !1;
                for (var c = g.getNodes(), p = 0; p < c.length; p++) {
                  var x = c[p];
                  if (this.getNodeDegree(x) > 0)
                    return this.toBeTiled[E] = !1, !1;
                  if (x.getChild() == null) {
                    this.toBeTiled[x.id] = !1;
                    continue;
                  }
                  if (!this.getToBeTiled(x))
                    return this.toBeTiled[E] = !1, !1;
                }
                return this.toBeTiled[E] = !0, !0;
              }, R.prototype.getNodeDegree = function(o) {
                o.id;
                for (var E = o.getEdges(), g = 0, c = 0; c < E.length; c++) {
                  var p = E[c];
                  p.getSource().id !== p.getTarget().id && (g = g + 1);
                }
                return g;
              }, R.prototype.getNodeDegreeWithChildren = function(o) {
                var E = this.getNodeDegree(o);
                if (o.getChild() == null)
                  return E;
                for (var g = o.getChild().getNodes(), c = 0; c < g.length; c++) {
                  var p = g[c];
                  E += this.getNodeDegreeWithChildren(p);
                }
                return E;
              }, R.prototype.performDFSOnCompounds = function() {
                this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
              }, R.prototype.fillCompexOrderByDFS = function(o) {
                for (var E = 0; E < o.length; E++) {
                  var g = o[E];
                  g.getChild() != null && this.fillCompexOrderByDFS(g.getChild().getNodes()), this.getToBeTiled(g) && this.compoundOrder.push(g);
                }
              }, R.prototype.adjustLocations = function(o, E, g, c, p, x, L) {
                E += c + x, g += p + L;
                for (var D = E, b = 0; b < o.rows.length; b++) {
                  var U = o.rows[b];
                  E = D;
                  for (var H = 0, z = 0; z < U.length; z++) {
                    var P = U[z];
                    P.rect.x = E, P.rect.y = g, E += P.rect.width + o.horizontalPadding, P.rect.height > H && (H = P.rect.height);
                  }
                  g += H + o.verticalPadding;
                }
              }, R.prototype.tileCompoundMembers = function(o, E) {
                var g = this;
                this.tiledMemberPack = [], Object.keys(o).forEach(function(c) {
                  var p = E[c];
                  if (g.tiledMemberPack[c] = g.tileNodes(o[c], p.paddingLeft + p.paddingRight), p.rect.width = g.tiledMemberPack[c].width, p.rect.height = g.tiledMemberPack[c].height, p.setCenter(g.tiledMemberPack[c].centerX, g.tiledMemberPack[c].centerY), p.labelMarginLeft = 0, p.labelMarginTop = 0, f.NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var x = p.rect.width, L = p.rect.height;
                    p.labelWidth && (p.labelPosHorizontal == "left" ? (p.rect.x -= p.labelWidth, p.setWidth(x + p.labelWidth), p.labelMarginLeft = p.labelWidth) : p.labelPosHorizontal == "center" && p.labelWidth > x ? (p.rect.x -= (p.labelWidth - x) / 2, p.setWidth(p.labelWidth), p.labelMarginLeft = (p.labelWidth - x) / 2) : p.labelPosHorizontal == "right" && p.setWidth(x + p.labelWidth)), p.labelHeight && (p.labelPosVertical == "top" ? (p.rect.y -= p.labelHeight, p.setHeight(L + p.labelHeight), p.labelMarginTop = p.labelHeight) : p.labelPosVertical == "center" && p.labelHeight > L ? (p.rect.y -= (p.labelHeight - L) / 2, p.setHeight(p.labelHeight), p.labelMarginTop = (p.labelHeight - L) / 2) : p.labelPosVertical == "bottom" && p.setHeight(L + p.labelHeight));
                  }
                });
              }, R.prototype.tileNodes = function(o, E) {
                var g = this.tileNodesByFavoringDim(o, E, !0), c = this.tileNodesByFavoringDim(o, E, !1), p = this.getOrgRatio(g), x = this.getOrgRatio(c), L;
                return x < p ? L = c : L = g, L;
              }, R.prototype.getOrgRatio = function(o) {
                var E = o.width, g = o.height, c = E / g;
                return c < 1 && (c = 1 / c), c;
              }, R.prototype.calcIdealRowWidth = function(o, E) {
                var g = f.TILING_PADDING_VERTICAL, c = f.TILING_PADDING_HORIZONTAL, p = o.length, x = 0, L = 0, D = 0;
                o.forEach(function($) {
                  x += $.getWidth(), L += $.getHeight(), $.getWidth() > D && (D = $.getWidth());
                });
                var b = x / p, U = L / p, H = Math.pow(g - c, 2) + 4 * (b + c) * (U + g) * p, z = (c - g + Math.sqrt(H)) / (2 * (b + c)), P;
                E ? (P = Math.ceil(z), P == z && P++) : P = Math.floor(z);
                var K = P * (b + c) - c;
                return D > K && (K = D), K += c * 2, K;
              }, R.prototype.tileNodesByFavoringDim = function(o, E, g) {
                var c = f.TILING_PADDING_VERTICAL, p = f.TILING_PADDING_HORIZONTAL, x = f.TILING_COMPARE_BY, L = {
                  rows: [],
                  rowWidth: [],
                  rowHeight: [],
                  width: 0,
                  height: E,
                  // assume minHeight equals to minWidth
                  verticalPadding: c,
                  horizontalPadding: p,
                  centerX: 0,
                  centerY: 0
                };
                x && (L.idealRowWidth = this.calcIdealRowWidth(o, g));
                var D = function(G) {
                  return G.rect.width * G.rect.height;
                }, b = function(G, W) {
                  return D(W) - D(G);
                };
                o.sort(function($, G) {
                  var W = b;
                  return L.idealRowWidth ? (W = x, W($.id, G.id)) : W($, G);
                });
                for (var U = 0, H = 0, z = 0; z < o.length; z++) {
                  var P = o[z];
                  U += P.getCenterX(), H += P.getCenterY();
                }
                L.centerX = U / o.length, L.centerY = H / o.length;
                for (var z = 0; z < o.length; z++) {
                  var P = o[z];
                  if (L.rows.length == 0)
                    this.insertNodeToRow(L, P, 0, E);
                  else if (this.canAddHorizontal(L, P.rect.width, P.rect.height)) {
                    var K = L.rows.length - 1;
                    L.idealRowWidth || (K = this.getShortestRowIndex(L)), this.insertNodeToRow(L, P, K, E);
                  } else
                    this.insertNodeToRow(L, P, L.rows.length, E);
                  this.shiftToLastRow(L);
                }
                return L;
              }, R.prototype.insertNodeToRow = function(o, E, g, c) {
                var p = c;
                if (g == o.rows.length) {
                  var x = [];
                  o.rows.push(x), o.rowWidth.push(p), o.rowHeight.push(0);
                }
                var L = o.rowWidth[g] + E.rect.width;
                o.rows[g].length > 0 && (L += o.horizontalPadding), o.rowWidth[g] = L, o.width < L && (o.width = L);
                var D = E.rect.height;
                g > 0 && (D += o.verticalPadding);
                var b = 0;
                D > o.rowHeight[g] && (b = o.rowHeight[g], o.rowHeight[g] = D, b = o.rowHeight[g] - b), o.height += b, o.rows[g].push(E);
              }, R.prototype.getShortestRowIndex = function(o) {
                for (var E = -1, g = Number.MAX_VALUE, c = 0; c < o.rows.length; c++)
                  o.rowWidth[c] < g && (E = c, g = o.rowWidth[c]);
                return E;
              }, R.prototype.getLongestRowIndex = function(o) {
                for (var E = -1, g = Number.MIN_VALUE, c = 0; c < o.rows.length; c++)
                  o.rowWidth[c] > g && (E = c, g = o.rowWidth[c]);
                return E;
              }, R.prototype.canAddHorizontal = function(o, E, g) {
                if (o.idealRowWidth) {
                  var c = o.rows.length - 1, p = o.rowWidth[c];
                  return p + E + o.horizontalPadding <= o.idealRowWidth;
                }
                var x = this.getShortestRowIndex(o);
                if (x < 0)
                  return !0;
                var L = o.rowWidth[x];
                if (L + o.horizontalPadding + E <= o.width)
                  return !0;
                var D = 0;
                o.rowHeight[x] < g && x > 0 && (D = g + o.verticalPadding - o.rowHeight[x]);
                var b;
                o.width - L >= E + o.horizontalPadding ? b = (o.height + D) / (L + E + o.horizontalPadding) : b = (o.height + D) / o.width, D = g + o.verticalPadding;
                var U;
                return o.width < E ? U = (o.height + D) / E : U = (o.height + D) / o.width, U < 1 && (U = 1 / U), b < 1 && (b = 1 / b), b < U;
              }, R.prototype.shiftToLastRow = function(o) {
                var E = this.getLongestRowIndex(o), g = o.rowWidth.length - 1, c = o.rows[E], p = c[c.length - 1], x = p.width + o.horizontalPadding;
                if (o.width - o.rowWidth[g] > x && E != g) {
                  c.splice(-1, 1), o.rows[g].push(p), o.rowWidth[E] = o.rowWidth[E] - x, o.rowWidth[g] = o.rowWidth[g] + x, o.width = o.rowWidth[instance.getLongestRowIndex(o)];
                  for (var L = Number.MIN_VALUE, D = 0; D < c.length; D++)
                    c[D].height > L && (L = c[D].height);
                  E > 0 && (L += o.verticalPadding);
                  var b = o.rowHeight[E] + o.rowHeight[g];
                  o.rowHeight[E] = L, o.rowHeight[g] < p.height + o.verticalPadding && (o.rowHeight[g] = p.height + o.verticalPadding);
                  var U = o.rowHeight[E] + o.rowHeight[g];
                  o.height += U - b, this.shiftToLastRow(o);
                }
              }, R.prototype.tilingPreLayout = function() {
                f.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
              }, R.prototype.tilingPostLayout = function() {
                f.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
              }, R.prototype.reduceTrees = function() {
                for (var o = [], E = !0, g; E; ) {
                  var c = this.graphManager.getAllNodes(), p = [];
                  E = !1;
                  for (var x = 0; x < c.length; x++)
                    if (g = c[x], g.getEdges().length == 1 && !g.getEdges()[0].isInterGraph && g.getChild() == null) {
                      if (f.PURE_INCREMENTAL) {
                        var L = g.getEdges()[0].getOtherEnd(g), D = new C(g.getCenterX() - L.getCenterX(), g.getCenterY() - L.getCenterY());
                        p.push([g, g.getEdges()[0], g.getOwner(), D]);
                      } else
                        p.push([g, g.getEdges()[0], g.getOwner()]);
                      E = !0;
                    }
                  if (E == !0) {
                    for (var b = [], U = 0; U < p.length; U++)
                      p[U][0].getEdges().length == 1 && (b.push(p[U]), p[U][0].getOwner().remove(p[U][0]));
                    o.push(b), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                  }
                }
                this.prunedNodesAll = o;
              }, R.prototype.growTree = function(o) {
                for (var E = o.length, g = o[E - 1], c, p = 0; p < g.length; p++)
                  c = g[p], this.findPlaceforPrunedNode(c), c[2].add(c[0]), c[2].add(c[1], c[1].source, c[1].target);
                o.splice(o.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
              }, R.prototype.findPlaceforPrunedNode = function(o) {
                var E, g, c = o[0];
                if (c == o[1].source ? g = o[1].target : g = o[1].source, f.PURE_INCREMENTAL)
                  c.setCenter(g.getCenterX() + o[3].getWidth(), g.getCenterY() + o[3].getHeight());
                else {
                  var p = g.startX, x = g.finishX, L = g.startY, D = g.finishY, b = 0, U = 0, H = 0, z = 0, P = [b, H, U, z];
                  if (L > 0)
                    for (var K = p; K <= x; K++)
                      P[0] += this.grid[K][L - 1].length + this.grid[K][L].length - 1;
                  if (x < this.grid.length - 1)
                    for (var K = L; K <= D; K++)
                      P[1] += this.grid[x + 1][K].length + this.grid[x][K].length - 1;
                  if (D < this.grid[0].length - 1)
                    for (var K = p; K <= x; K++)
                      P[2] += this.grid[K][D + 1].length + this.grid[K][D].length - 1;
                  if (p > 0)
                    for (var K = L; K <= D; K++)
                      P[3] += this.grid[p - 1][K].length + this.grid[p][K].length - 1;
                  for (var $ = F.MAX_VALUE, G, W, J = 0; J < P.length; J++)
                    P[J] < $ ? ($ = P[J], G = 1, W = J) : P[J] == $ && G++;
                  if (G == 3 && $ == 0)
                    P[0] == 0 && P[1] == 0 && P[2] == 0 ? E = 1 : P[0] == 0 && P[1] == 0 && P[3] == 0 ? E = 0 : P[0] == 0 && P[2] == 0 && P[3] == 0 ? E = 3 : P[1] == 0 && P[2] == 0 && P[3] == 0 && (E = 2);
                  else if (G == 2 && $ == 0) {
                    var k = Math.floor(Math.random() * 2);
                    P[0] == 0 && P[1] == 0 ? k == 0 ? E = 0 : E = 1 : P[0] == 0 && P[2] == 0 ? k == 0 ? E = 0 : E = 2 : P[0] == 0 && P[3] == 0 ? k == 0 ? E = 0 : E = 3 : P[1] == 0 && P[2] == 0 ? k == 0 ? E = 1 : E = 2 : P[1] == 0 && P[3] == 0 ? k == 0 ? E = 1 : E = 3 : k == 0 ? E = 2 : E = 3;
                  } else if (G == 4 && $ == 0) {
                    var k = Math.floor(Math.random() * 4);
                    E = k;
                  } else
                    E = W;
                  E == 0 ? c.setCenter(g.getCenterX(), g.getCenterY() - g.getHeight() / 2 - u.DEFAULT_EDGE_LENGTH - c.getHeight() / 2) : E == 1 ? c.setCenter(g.getCenterX() + g.getWidth() / 2 + u.DEFAULT_EDGE_LENGTH + c.getWidth() / 2, g.getCenterY()) : E == 2 ? c.setCenter(g.getCenterX(), g.getCenterY() + g.getHeight() / 2 + u.DEFAULT_EDGE_LENGTH + c.getHeight() / 2) : c.setCenter(g.getCenterX() - g.getWidth() / 2 - u.DEFAULT_EDGE_LENGTH - c.getWidth() / 2, g.getCenterY());
                }
              }, n.exports = R;
            }
          ),
          /***/
          991: (
            /***/
            (n, t, i) => {
              var s = i(551).FDLayoutNode, r = i(551).IMath;
              function l(a, f, v, u) {
                s.call(this, a, f, v, u);
              }
              l.prototype = Object.create(s.prototype);
              for (var e in s)
                l[e] = s[e];
              l.prototype.calculateDisplacement = function() {
                var a = this.graphManager.getLayout();
                this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += a.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += a.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += a.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += a.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > a.coolingFactor * a.maxNodeDisplacement && (this.displacementX = a.coolingFactor * a.maxNodeDisplacement * r.sign(this.displacementX)), Math.abs(this.displacementY) > a.coolingFactor * a.maxNodeDisplacement && (this.displacementY = a.coolingFactor * a.maxNodeDisplacement * r.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
              }, l.prototype.propogateDisplacementToChildren = function(a, f) {
                for (var v = this.getChild().getNodes(), u, N = 0; N < v.length; N++)
                  u = v[N], u.getChild() == null ? (u.displacementX += a, u.displacementY += f) : u.propogateDisplacementToChildren(a, f);
              }, l.prototype.move = function() {
                var a = this.graphManager.getLayout();
                (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), a.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
              }, l.prototype.setPred1 = function(a) {
                this.pred1 = a;
              }, l.prototype.getPred1 = function() {
                return pred1;
              }, l.prototype.getPred2 = function() {
                return pred2;
              }, l.prototype.setNext = function(a) {
                this.next = a;
              }, l.prototype.getNext = function() {
                return next;
              }, l.prototype.setProcessed = function(a) {
                this.processed = a;
              }, l.prototype.isProcessed = function() {
                return processed;
              }, n.exports = l;
            }
          ),
          /***/
          902: (
            /***/
            (n, t, i) => {
              function s(v) {
                if (Array.isArray(v)) {
                  for (var u = 0, N = Array(v.length); u < v.length; u++)
                    N[u] = v[u];
                  return N;
                } else
                  return Array.from(v);
              }
              var r = i(806), l = i(551).LinkedList, e = i(551).Matrix, a = i(551).SVD;
              function f() {
              }
              f.handleConstraints = function(v) {
                var u = {};
                u.fixedNodeConstraint = v.constraints.fixedNodeConstraint, u.alignmentConstraint = v.constraints.alignmentConstraint, u.relativePlacementConstraint = v.constraints.relativePlacementConstraint;
                for (var N = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), m = [], C = [], I = v.getAllNodes(), F = 0, O = 0; O < I.length; O++) {
                  var V = I[O];
                  V.getChild() == null && (y.set(V.id, F++), m.push(V.getCenterX()), C.push(V.getCenterY()), N.set(V.id, V));
                }
                u.relativePlacementConstraint && u.relativePlacementConstraint.forEach(function(Y) {
                  !Y.gap && Y.gap != 0 && (Y.left ? Y.gap = r.DEFAULT_EDGE_LENGTH + N.get(Y.left).getWidth() / 2 + N.get(Y.right).getWidth() / 2 : Y.gap = r.DEFAULT_EDGE_LENGTH + N.get(Y.top).getHeight() / 2 + N.get(Y.bottom).getHeight() / 2);
                });
                var X = function(Z, j) {
                  return { x: Z.x - j.x, y: Z.y - j.y };
                }, q = function(Z) {
                  var j = 0, at = 0;
                  return Z.forEach(function(_) {
                    j += m[y.get(_)], at += C[y.get(_)];
                  }), { x: j / Z.size, y: at / Z.size };
                }, R = function(Z, j, at, _, ot) {
                  function Tt(st, rt) {
                    var yt = new Set(st), it = !0, tt = !1, It = void 0;
                    try {
                      for (var lt = rt[Symbol.iterator](), gt; !(it = (gt = lt.next()).done); it = !0) {
                        var Pt = gt.value;
                        yt.add(Pt);
                      }
                    } catch (At) {
                      tt = !0, It = At;
                    } finally {
                      try {
                        !it && lt.return && lt.return();
                      } finally {
                        if (tt)
                          throw It;
                      }
                    }
                    return yt;
                  }
                  var pt = /* @__PURE__ */ new Map();
                  Z.forEach(function(st, rt) {
                    pt.set(rt, 0);
                  }), Z.forEach(function(st, rt) {
                    st.forEach(function(yt) {
                      pt.set(yt.id, pt.get(yt.id) + 1);
                    });
                  });
                  var et = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), dt = new l();
                  pt.forEach(function(st, rt) {
                    st == 0 ? (dt.push(rt), at || (j == "horizontal" ? et.set(rt, y.has(rt) ? m[y.get(rt)] : _.get(rt)) : et.set(rt, y.has(rt) ? C[y.get(rt)] : _.get(rt)))) : et.set(rt, Number.NEGATIVE_INFINITY), at && Q.set(rt, /* @__PURE__ */ new Set([rt]));
                  }), at && ot.forEach(function(st) {
                    var rt = [];
                    if (st.forEach(function(tt) {
                      at.has(tt) && rt.push(tt);
                    }), rt.length > 0) {
                      var yt = 0;
                      rt.forEach(function(tt) {
                        j == "horizontal" ? (et.set(tt, y.has(tt) ? m[y.get(tt)] : _.get(tt)), yt += et.get(tt)) : (et.set(tt, y.has(tt) ? C[y.get(tt)] : _.get(tt)), yt += et.get(tt));
                      }), yt = yt / rt.length, st.forEach(function(tt) {
                        at.has(tt) || et.set(tt, yt);
                      });
                    } else {
                      var it = 0;
                      st.forEach(function(tt) {
                        j == "horizontal" ? it += y.has(tt) ? m[y.get(tt)] : _.get(tt) : it += y.has(tt) ? C[y.get(tt)] : _.get(tt);
                      }), it = it / st.length, st.forEach(function(tt) {
                        et.set(tt, it);
                      });
                    }
                  });
                  for (var mt = function() {
                    var rt = dt.shift(), yt = Z.get(rt);
                    yt.forEach(function(it) {
                      if (et.get(it.id) < et.get(rt) + it.gap)
                        if (at && at.has(it.id)) {
                          var tt = void 0;
                          if (j == "horizontal" ? tt = y.has(it.id) ? m[y.get(it.id)] : _.get(it.id) : tt = y.has(it.id) ? C[y.get(it.id)] : _.get(it.id), et.set(it.id, tt), tt < et.get(rt) + it.gap) {
                            var It = et.get(rt) + it.gap - tt;
                            Q.get(rt).forEach(function(lt) {
                              et.set(lt, et.get(lt) - It);
                            });
                          }
                        } else
                          et.set(it.id, et.get(rt) + it.gap);
                      pt.set(it.id, pt.get(it.id) - 1), pt.get(it.id) == 0 && dt.push(it.id), at && Q.set(it.id, Tt(Q.get(rt), Q.get(it.id)));
                    });
                  }; dt.length != 0; )
                    mt();
                  if (at) {
                    var ct = /* @__PURE__ */ new Set();
                    Z.forEach(function(st, rt) {
                      st.length == 0 && ct.add(rt);
                    });
                    var xt = [];
                    Q.forEach(function(st, rt) {
                      if (ct.has(rt)) {
                        var yt = !1, it = !0, tt = !1, It = void 0;
                        try {
                          for (var lt = st[Symbol.iterator](), gt; !(it = (gt = lt.next()).done); it = !0) {
                            var Pt = gt.value;
                            at.has(Pt) && (yt = !0);
                          }
                        } catch (Mt) {
                          tt = !0, It = Mt;
                        } finally {
                          try {
                            !it && lt.return && lt.return();
                          } finally {
                            if (tt)
                              throw It;
                          }
                        }
                        if (!yt) {
                          var At = !1, St = void 0;
                          xt.forEach(function(Mt, Ht) {
                            Mt.has([].concat(s(st))[0]) && (At = !0, St = Ht);
                          }), At ? st.forEach(function(Mt) {
                            xt[St].add(Mt);
                          }) : xt.push(new Set(st));
                        }
                      }
                    }), xt.forEach(function(st, rt) {
                      var yt = Number.POSITIVE_INFINITY, it = Number.POSITIVE_INFINITY, tt = Number.NEGATIVE_INFINITY, It = Number.NEGATIVE_INFINITY, lt = !0, gt = !1, Pt = void 0;
                      try {
                        for (var At = st[Symbol.iterator](), St; !(lt = (St = At.next()).done); lt = !0) {
                          var Mt = St.value, Ht = void 0;
                          j == "horizontal" ? Ht = y.has(Mt) ? m[y.get(Mt)] : _.get(Mt) : Ht = y.has(Mt) ? C[y.get(Mt)] : _.get(Mt);
                          var te = et.get(Mt);
                          Ht < yt && (yt = Ht), Ht > tt && (tt = Ht), te < it && (it = te), te > It && (It = te);
                        }
                      } catch (ne) {
                        gt = !0, Pt = ne;
                      } finally {
                        try {
                          !lt && At.return && At.return();
                        } finally {
                          if (gt)
                            throw Pt;
                        }
                      }
                      var ue = (yt + tt) / 2 - (it + It) / 2, $t = !0, ee = !1, re = void 0;
                      try {
                        for (var Qt = st[Symbol.iterator](), he; !($t = (he = Qt.next()).done); $t = !0) {
                          var ie = he.value;
                          et.set(ie, et.get(ie) + ue);
                        }
                      } catch (ne) {
                        ee = !0, re = ne;
                      } finally {
                        try {
                          !$t && Qt.return && Qt.return();
                        } finally {
                          if (ee)
                            throw re;
                        }
                      }
                    });
                  }
                  return et;
                }, nt = function(Z) {
                  var j = 0, at = 0, _ = 0, ot = 0;
                  if (Z.forEach(function(Q) {
                    Q.left ? m[y.get(Q.left)] - m[y.get(Q.right)] >= 0 ? j++ : at++ : C[y.get(Q.top)] - C[y.get(Q.bottom)] >= 0 ? _++ : ot++;
                  }), j > at && _ > ot)
                    for (var Tt = 0; Tt < y.size; Tt++)
                      m[Tt] = -1 * m[Tt], C[Tt] = -1 * C[Tt];
                  else if (j > at)
                    for (var pt = 0; pt < y.size; pt++)
                      m[pt] = -1 * m[pt];
                  else if (_ > ot)
                    for (var et = 0; et < y.size; et++)
                      C[et] = -1 * C[et];
                }, o = function(Z) {
                  var j = [], at = new l(), _ = /* @__PURE__ */ new Set(), ot = 0;
                  return Z.forEach(function(Tt, pt) {
                    if (!_.has(pt)) {
                      j[ot] = [];
                      var et = pt;
                      for (at.push(et), _.add(et), j[ot].push(et); at.length != 0; ) {
                        et = at.shift();
                        var Q = Z.get(et);
                        Q.forEach(function(dt) {
                          _.has(dt.id) || (at.push(dt.id), _.add(dt.id), j[ot].push(dt.id));
                        });
                      }
                      ot++;
                    }
                  }), j;
                }, E = function(Z) {
                  var j = /* @__PURE__ */ new Map();
                  return Z.forEach(function(at, _) {
                    j.set(_, []);
                  }), Z.forEach(function(at, _) {
                    at.forEach(function(ot) {
                      j.get(_).push(ot), j.get(ot.id).push({ id: _, gap: ot.gap, direction: ot.direction });
                    });
                  }), j;
                }, g = function(Z) {
                  var j = /* @__PURE__ */ new Map();
                  return Z.forEach(function(at, _) {
                    j.set(_, []);
                  }), Z.forEach(function(at, _) {
                    at.forEach(function(ot) {
                      j.get(ot.id).push({ id: _, gap: ot.gap, direction: ot.direction });
                    });
                  }), j;
                }, c = [], p = [], x = !1, L = !1, D = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), H = [];
                if (u.fixedNodeConstraint && u.fixedNodeConstraint.forEach(function(Y) {
                  D.add(Y.nodeId);
                }), u.relativePlacementConstraint && (u.relativePlacementConstraint.forEach(function(Y) {
                  Y.left ? (b.has(Y.left) ? b.get(Y.left).push({ id: Y.right, gap: Y.gap, direction: "horizontal" }) : b.set(Y.left, [{ id: Y.right, gap: Y.gap, direction: "horizontal" }]), b.has(Y.right) || b.set(Y.right, [])) : (b.has(Y.top) ? b.get(Y.top).push({ id: Y.bottom, gap: Y.gap, direction: "vertical" }) : b.set(Y.top, [{ id: Y.bottom, gap: Y.gap, direction: "vertical" }]), b.has(Y.bottom) || b.set(Y.bottom, []));
                }), U = E(b), H = o(U)), r.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                  if (u.fixedNodeConstraint && u.fixedNodeConstraint.length > 1)
                    u.fixedNodeConstraint.forEach(function(Y, Z) {
                      c[Z] = [Y.position.x, Y.position.y], p[Z] = [m[y.get(Y.nodeId)], C[y.get(Y.nodeId)]];
                    }), x = !0;
                  else if (u.alignmentConstraint)
                    (function() {
                      var Y = 0;
                      if (u.alignmentConstraint.vertical) {
                        for (var Z = u.alignmentConstraint.vertical, j = function(et) {
                          var Q = /* @__PURE__ */ new Set();
                          Z[et].forEach(function(ct) {
                            Q.add(ct);
                          });
                          var dt = new Set([].concat(s(Q)).filter(function(ct) {
                            return D.has(ct);
                          })), mt = void 0;
                          dt.size > 0 ? mt = m[y.get(dt.values().next().value)] : mt = q(Q).x, Z[et].forEach(function(ct) {
                            c[Y] = [mt, C[y.get(ct)]], p[Y] = [m[y.get(ct)], C[y.get(ct)]], Y++;
                          });
                        }, at = 0; at < Z.length; at++)
                          j(at);
                        x = !0;
                      }
                      if (u.alignmentConstraint.horizontal) {
                        for (var _ = u.alignmentConstraint.horizontal, ot = function(et) {
                          var Q = /* @__PURE__ */ new Set();
                          _[et].forEach(function(ct) {
                            Q.add(ct);
                          });
                          var dt = new Set([].concat(s(Q)).filter(function(ct) {
                            return D.has(ct);
                          })), mt = void 0;
                          dt.size > 0 ? mt = m[y.get(dt.values().next().value)] : mt = q(Q).y, _[et].forEach(function(ct) {
                            c[Y] = [m[y.get(ct)], mt], p[Y] = [m[y.get(ct)], C[y.get(ct)]], Y++;
                          });
                        }, Tt = 0; Tt < _.length; Tt++)
                          ot(Tt);
                        x = !0;
                      }
                      u.relativePlacementConstraint && (L = !0);
                    })();
                  else if (u.relativePlacementConstraint) {
                    for (var z = 0, P = 0, K = 0; K < H.length; K++)
                      H[K].length > z && (z = H[K].length, P = K);
                    if (z < U.size / 2)
                      nt(u.relativePlacementConstraint), x = !1, L = !1;
                    else {
                      var $ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), W = [];
                      H[P].forEach(function(Y) {
                        b.get(Y).forEach(function(Z) {
                          Z.direction == "horizontal" ? ($.has(Y) ? $.get(Y).push(Z) : $.set(Y, [Z]), $.has(Z.id) || $.set(Z.id, []), W.push({ left: Y, right: Z.id })) : (G.has(Y) ? G.get(Y).push(Z) : G.set(Y, [Z]), G.has(Z.id) || G.set(Z.id, []), W.push({ top: Y, bottom: Z.id }));
                        });
                      }), nt(W), L = !1;
                      var J = R($, "horizontal"), k = R(G, "vertical");
                      H[P].forEach(function(Y, Z) {
                        p[Z] = [m[y.get(Y)], C[y.get(Y)]], c[Z] = [], J.has(Y) ? c[Z][0] = J.get(Y) : c[Z][0] = m[y.get(Y)], k.has(Y) ? c[Z][1] = k.get(Y) : c[Z][1] = C[y.get(Y)];
                      }), x = !0;
                    }
                  }
                  if (x) {
                    for (var ft = void 0, B = e.transpose(c), Ot = e.transpose(p), vt = 0; vt < B.length; vt++)
                      B[vt] = e.multGamma(B[vt]), Ot[vt] = e.multGamma(Ot[vt]);
                    var _t = e.multMat(B, e.transpose(Ot)), Vt = a.svd(_t);
                    ft = e.multMat(Vt.V, e.transpose(Vt.U));
                    for (var Nt = 0; Nt < y.size; Nt++) {
                      var Yt = [m[Nt], C[Nt]], Xt = [ft[0][0], ft[1][0]], ae = [ft[0][1], ft[1][1]];
                      m[Nt] = e.dotProduct(Yt, Xt), C[Nt] = e.dotProduct(Yt, ae);
                    }
                    L && nt(u.relativePlacementConstraint);
                  }
                }
                if (r.ENFORCE_CONSTRAINTS) {
                  if (u.fixedNodeConstraint && u.fixedNodeConstraint.length > 0) {
                    var Rt = { x: 0, y: 0 };
                    u.fixedNodeConstraint.forEach(function(Y, Z) {
                      var j = { x: m[y.get(Y.nodeId)], y: C[y.get(Y.nodeId)] }, at = Y.position, _ = X(at, j);
                      Rt.x += _.x, Rt.y += _.y;
                    }), Rt.x /= u.fixedNodeConstraint.length, Rt.y /= u.fixedNodeConstraint.length, m.forEach(function(Y, Z) {
                      m[Z] += Rt.x;
                    }), C.forEach(function(Y, Z) {
                      C[Z] += Rt.y;
                    }), u.fixedNodeConstraint.forEach(function(Y) {
                      m[y.get(Y.nodeId)] = Y.position.x, C[y.get(Y.nodeId)] = Y.position.y;
                    });
                  }
                  if (u.alignmentConstraint) {
                    if (u.alignmentConstraint.vertical)
                      for (var jt = u.alignmentConstraint.vertical, Ft = function(Z) {
                        var j = /* @__PURE__ */ new Set();
                        jt[Z].forEach(function(ot) {
                          j.add(ot);
                        });
                        var at = new Set([].concat(s(j)).filter(function(ot) {
                          return D.has(ot);
                        })), _ = void 0;
                        at.size > 0 ? _ = m[y.get(at.values().next().value)] : _ = q(j).x, j.forEach(function(ot) {
                          D.has(ot) || (m[y.get(ot)] = _);
                        });
                      }, zt = 0; zt < jt.length; zt++)
                        Ft(zt);
                    if (u.alignmentConstraint.horizontal)
                      for (var kt = u.alignmentConstraint.horizontal, oe = function(Z) {
                        var j = /* @__PURE__ */ new Set();
                        kt[Z].forEach(function(ot) {
                          j.add(ot);
                        });
                        var at = new Set([].concat(s(j)).filter(function(ot) {
                          return D.has(ot);
                        })), _ = void 0;
                        at.size > 0 ? _ = C[y.get(at.values().next().value)] : _ = q(j).y, j.forEach(function(ot) {
                          D.has(ot) || (C[y.get(ot)] = _);
                        });
                      }, Gt = 0; Gt < kt.length; Gt++)
                        oe(Gt);
                  }
                  u.relativePlacementConstraint && function() {
                    var Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Set();
                    if (D.forEach(function(Dt) {
                      Tt.add(Dt), pt.add(Dt);
                    }), u.alignmentConstraint) {
                      if (u.alignmentConstraint.vertical)
                        for (var et = u.alignmentConstraint.vertical, Q = function(ht) {
                          j.set("dummy" + ht, []), et[ht].forEach(function(Et) {
                            Y.set(Et, "dummy" + ht), j.get("dummy" + ht).push(Et), D.has(Et) && Tt.add("dummy" + ht);
                          }), _.set("dummy" + ht, m[y.get(et[ht][0])]);
                        }, dt = 0; dt < et.length; dt++)
                          Q(dt);
                      if (u.alignmentConstraint.horizontal)
                        for (var mt = u.alignmentConstraint.horizontal, ct = function(ht) {
                          at.set("dummy" + ht, []), mt[ht].forEach(function(Et) {
                            Z.set(Et, "dummy" + ht), at.get("dummy" + ht).push(Et), D.has(Et) && pt.add("dummy" + ht);
                          }), ot.set("dummy" + ht, C[y.get(mt[ht][0])]);
                        }, xt = 0; xt < mt.length; xt++)
                          ct(xt);
                    }
                    var st = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), yt = function(ht) {
                      b.get(ht).forEach(function(Et) {
                        var Zt = void 0, bt = void 0;
                        Et.direction == "horizontal" ? (Zt = Y.get(ht) ? Y.get(ht) : ht, Y.get(Et.id) ? bt = { id: Y.get(Et.id), gap: Et.gap, direction: Et.direction } : bt = Et, st.has(Zt) ? st.get(Zt).push(bt) : st.set(Zt, [bt]), st.has(bt.id) || st.set(bt.id, [])) : (Zt = Z.get(ht) ? Z.get(ht) : ht, Z.get(Et.id) ? bt = { id: Z.get(Et.id), gap: Et.gap, direction: Et.direction } : bt = Et, rt.has(Zt) ? rt.get(Zt).push(bt) : rt.set(Zt, [bt]), rt.has(bt.id) || rt.set(bt.id, []));
                      });
                    }, it = !0, tt = !1, It = void 0;
                    try {
                      for (var lt = b.keys()[Symbol.iterator](), gt; !(it = (gt = lt.next()).done); it = !0) {
                        var Pt = gt.value;
                        yt(Pt);
                      }
                    } catch (Dt) {
                      tt = !0, It = Dt;
                    } finally {
                      try {
                        !it && lt.return && lt.return();
                      } finally {
                        if (tt)
                          throw It;
                      }
                    }
                    var At = E(st), St = E(rt), Mt = o(At), Ht = o(St), te = g(st), ue = g(rt), $t = [], ee = [];
                    Mt.forEach(function(Dt, ht) {
                      $t[ht] = [], Dt.forEach(function(Et) {
                        te.get(Et).length == 0 && $t[ht].push(Et);
                      });
                    }), Ht.forEach(function(Dt, ht) {
                      ee[ht] = [], Dt.forEach(function(Et) {
                        ue.get(Et).length == 0 && ee[ht].push(Et);
                      });
                    });
                    var re = R(st, "horizontal", Tt, _, $t), Qt = R(rt, "vertical", pt, ot, ee), he = function(ht) {
                      j.get(ht) ? j.get(ht).forEach(function(Et) {
                        m[y.get(Et)] = re.get(ht);
                      }) : m[y.get(ht)] = re.get(ht);
                    }, ie = !0, ne = !1, Le = void 0;
                    try {
                      for (var ge = re.keys()[Symbol.iterator](), Me; !(ie = (Me = ge.next()).done); ie = !0) {
                        var ce = Me.value;
                        he(ce);
                      }
                    } catch (Dt) {
                      ne = !0, Le = Dt;
                    } finally {
                      try {
                        !ie && ge.return && ge.return();
                      } finally {
                        if (ne)
                          throw Le;
                      }
                    }
                    var Pe = function(ht) {
                      at.get(ht) ? at.get(ht).forEach(function(Et) {
                        C[y.get(Et)] = Qt.get(ht);
                      }) : C[y.get(ht)] = Qt.get(ht);
                    }, de = !0, Ae = !1, Oe = void 0;
                    try {
                      for (var ve = Qt.keys()[Symbol.iterator](), xe; !(de = (xe = ve.next()).done); de = !0) {
                        var ce = xe.value;
                        Pe(ce);
                      }
                    } catch (Dt) {
                      Ae = !0, Oe = Dt;
                    } finally {
                      try {
                        !de && ve.return && ve.return();
                      } finally {
                        if (Ae)
                          throw Oe;
                      }
                    }
                  }();
                }
                for (var Bt = 0; Bt < I.length; Bt++) {
                  var Ut = I[Bt];
                  Ut.getChild() == null && Ut.setCenter(m[y.get(Ut.id)], C[y.get(Ut.id)]);
                }
              }, n.exports = f;
            }
          ),
          /***/
          551: (
            /***/
            (n) => {
              n.exports = M;
            }
          )
          /******/
        }, T = {};
        function d(n) {
          var t = T[n];
          if (t !== void 0)
            return t.exports;
          var i = T[n] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return S[n](i, i.exports, d), i.exports;
        }
        var h = d(45);
        return h;
      })()
    );
  });
})(Fe);
var Xe = Fe.exports;
const Wt = /* @__PURE__ */ Re(Xe), He = Wt.layoutBase.LinkedList;
let Lt = {};
Lt.getTopMostNodes = function(A) {
  let w = {};
  for (let S = 0; S < A.length; S++)
    w[A[S].id()] = !0;
  return A.filter(function(S, T) {
    typeof S == "number" && (S = T);
    let d = S.parent()[0];
    for (; d != null; ) {
      if (w[d.id()])
        return !1;
      d = d.parent()[0];
    }
    return !0;
  });
};
Lt.connectComponents = function(A, w, M, S) {
  let T = new He(), d = /* @__PURE__ */ new Set(), h = [], n, t, i, s = !1, r = 1, l = [], e = [];
  do {
    let a = A.collection();
    e.push(a);
    let f = M[0], v = A.collection();
    for (v.merge(f).merge(f.descendants().intersection(w)), h.push(f), v.forEach(function(u) {
      T.push(u), d.add(u), a.merge(u);
    }); T.length != 0; ) {
      f = T.shift();
      let u = A.collection();
      f.neighborhood().nodes().forEach(function(N) {
        w.intersection(f.edgesWith(N)).length > 0 && u.merge(N);
      });
      for (let N = 0; N < u.length; N++) {
        let y = u[N];
        n = M.intersection(y.union(y.ancestors())), n != null && !d.has(n[0]) && n.union(n.descendants()).forEach(function(C) {
          T.push(C), d.add(C), a.merge(C), M.has(C) && h.push(C);
        });
      }
    }
    if (a.forEach((u) => {
      w.intersection(u.connectedEdges()).forEach((N) => {
        a.has(N.source()) && a.has(N.target()) && a.merge(N);
      });
    }), h.length == M.length && (s = !0), !s || s && r > 1) {
      t = h[0], i = t.connectedEdges().length, h.forEach(function(N) {
        N.connectedEdges().length < i && (i = N.connectedEdges().length, t = N);
      }), l.push(t.id());
      let u = A.collection();
      u.merge(h[0]), h.forEach(function(N) {
        u.merge(N);
      }), h = [], M = M.difference(u), r++;
    }
  } while (!s);
  return S && l.length > 0 && S.set("dummy" + (S.size + 1), l), e;
};
Lt.relocateComponent = function(A, w, M) {
  if (!M.fixedNodeConstraint) {
    let S = Number.POSITIVE_INFINITY, T = Number.NEGATIVE_INFINITY, d = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY;
    if (M.quality == "draft") {
      for (let [i, s] of w.nodeIndexes) {
        let r = M.cy.getElementById(i);
        if (r) {
          let l = r.boundingBox(), e = w.xCoords[s] - l.w / 2, a = w.xCoords[s] + l.w / 2, f = w.yCoords[s] - l.h / 2, v = w.yCoords[s] + l.h / 2;
          e < S && (S = e), a > T && (T = a), f < d && (d = f), v > h && (h = v);
        }
      }
      let n = A.x - (T + S) / 2, t = A.y - (h + d) / 2;
      w.xCoords = w.xCoords.map((i) => i + n), w.yCoords = w.yCoords.map((i) => i + t);
    } else {
      Object.keys(w).forEach(function(i) {
        let s = w[i], r = s.getRect().x, l = s.getRect().x + s.getRect().width, e = s.getRect().y, a = s.getRect().y + s.getRect().height;
        r < S && (S = r), l > T && (T = l), e < d && (d = e), a > h && (h = a);
      });
      let n = A.x - (T + S) / 2, t = A.y - (h + d) / 2;
      Object.keys(w).forEach(function(i) {
        let s = w[i];
        s.setCenter(s.getCenterX() + n, s.getCenterY() + t);
      });
    }
  }
};
Lt.calcBoundingBox = function(A, w, M, S) {
  let T = Number.MAX_SAFE_INTEGER, d = Number.MIN_SAFE_INTEGER, h = Number.MAX_SAFE_INTEGER, n = Number.MIN_SAFE_INTEGER, t, i, s, r, l = A.descendants().not(":parent"), e = l.length;
  for (let f = 0; f < e; f++) {
    let v = l[f];
    t = w[S.get(v.id())] - v.width() / 2, i = w[S.get(v.id())] + v.width() / 2, s = M[S.get(v.id())] - v.height() / 2, r = M[S.get(v.id())] + v.height() / 2, T > t && (T = t), d < i && (d = i), h > s && (h = s), n < r && (n = r);
  }
  let a = {};
  return a.topLeftX = T, a.topLeftY = h, a.width = d - T, a.height = n - h, a;
};
Lt.calcParentsWithoutChildren = function(A, w) {
  let M = A.collection();
  return w.nodes(":parent").forEach((S) => {
    let T = !1;
    S.children().forEach((d) => {
      d.css("display") != "none" && (T = !0);
    }), T || M.merge(S);
  }), M;
};
var Ee = { exports: {} };
Ee.exports;
(function(A) {
  (function(w, M, S) {
    function T(t) {
      var i = this, s = n();
      i.next = function() {
        var r = 2091639 * i.s0 + i.c * 23283064365386963e-26;
        return i.s0 = i.s1, i.s1 = i.s2, i.s2 = r - (i.c = r | 0);
      }, i.c = 1, i.s0 = s(" "), i.s1 = s(" "), i.s2 = s(" "), i.s0 -= s(t), i.s0 < 0 && (i.s0 += 1), i.s1 -= s(t), i.s1 < 0 && (i.s1 += 1), i.s2 -= s(t), i.s2 < 0 && (i.s2 += 1), s = null;
    }
    function d(t, i) {
      return i.c = t.c, i.s0 = t.s0, i.s1 = t.s1, i.s2 = t.s2, i;
    }
    function h(t, i) {
      var s = new T(t), r = i && i.state, l = s.next;
      return l.int32 = function() {
        return s.next() * 4294967296 | 0;
      }, l.double = function() {
        return l() + (l() * 2097152 | 0) * 11102230246251565e-32;
      }, l.quick = l, r && (typeof r == "object" && d(r, s), l.state = function() {
        return d(s, {});
      }), l;
    }
    function n() {
      var t = 4022871197, i = function(s) {
        s = String(s);
        for (var r = 0; r < s.length; r++) {
          t += s.charCodeAt(r);
          var l = 0.02519603282416938 * t;
          t = l >>> 0, l -= t, l *= t, t = l >>> 0, l -= t, t += l * 4294967296;
        }
        return (t >>> 0) * 23283064365386963e-26;
      };
      return i;
    }
    M && M.exports ? M.exports = h : this.alea = h;
  })(
    qt,
    A
  );
})(Ee);
var We = Ee.exports, ye = { exports: {} };
ye.exports;
(function(A) {
  (function(w, M, S) {
    function T(n) {
      var t = this, i = "";
      t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function() {
        var r = t.x ^ t.x << 11;
        return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ r ^ r >>> 8;
      }, n === (n | 0) ? t.x = n : i += n;
      for (var s = 0; s < i.length + 64; s++)
        t.x ^= i.charCodeAt(s) | 0, t.next();
    }
    function d(n, t) {
      return t.x = n.x, t.y = n.y, t.z = n.z, t.w = n.w, t;
    }
    function h(n, t) {
      var i = new T(n), s = t && t.state, r = function() {
        return (i.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var l = i.next() >>> 11, e = (i.next() >>> 0) / 4294967296, a = (l + e) / (1 << 21);
        while (a === 0);
        return a;
      }, r.int32 = i.next, r.quick = r, s && (typeof s == "object" && d(s, i), r.state = function() {
        return d(i, {});
      }), r;
    }
    M && M.exports ? M.exports = h : this.xor128 = h;
  })(
    qt,
    A
  );
})(ye);
var Ve = ye.exports, Ne = { exports: {} };
Ne.exports;
(function(A) {
  (function(w, M, S) {
    function T(n) {
      var t = this, i = "";
      t.next = function() {
        var r = t.x ^ t.x >>> 2;
        return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ (r ^ r << 1)) | 0;
      }, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, n === (n | 0) ? t.x = n : i += n;
      for (var s = 0; s < i.length + 64; s++)
        t.x ^= i.charCodeAt(s) | 0, s == i.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next();
    }
    function d(n, t) {
      return t.x = n.x, t.y = n.y, t.z = n.z, t.w = n.w, t.v = n.v, t.d = n.d, t;
    }
    function h(n, t) {
      var i = new T(n), s = t && t.state, r = function() {
        return (i.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var l = i.next() >>> 11, e = (i.next() >>> 0) / 4294967296, a = (l + e) / (1 << 21);
        while (a === 0);
        return a;
      }, r.int32 = i.next, r.quick = r, s && (typeof s == "object" && d(s, i), r.state = function() {
        return d(i, {});
      }), r;
    }
    M && M.exports ? M.exports = h : this.xorwow = h;
  })(
    qt,
    A
  );
})(Ne);
var ze = Ne.exports, me = { exports: {} };
me.exports;
(function(A) {
  (function(w, M, S) {
    function T(n) {
      var t = this;
      t.next = function() {
        var s = t.x, r = t.i, l, e;
        return l = s[r], l ^= l >>> 7, e = l ^ l << 24, l = s[r + 1 & 7], e ^= l ^ l >>> 10, l = s[r + 3 & 7], e ^= l ^ l >>> 3, l = s[r + 4 & 7], e ^= l ^ l << 7, l = s[r + 7 & 7], l = l ^ l << 13, e ^= l ^ l << 9, s[r] = e, t.i = r + 1 & 7, e;
      };
      function i(s, r) {
        var l, e = [];
        if (r === (r | 0))
          e[0] = r;
        else
          for (r = "" + r, l = 0; l < r.length; ++l)
            e[l & 7] = e[l & 7] << 15 ^ r.charCodeAt(l) + e[l + 1 & 7] << 13;
        for (; e.length < 8; )
          e.push(0);
        for (l = 0; l < 8 && e[l] === 0; ++l)
          ;
        for (l == 8 ? e[7] = -1 : e[l], s.x = e, s.i = 0, l = 256; l > 0; --l)
          s.next();
      }
      i(t, n);
    }
    function d(n, t) {
      return t.x = n.x.slice(), t.i = n.i, t;
    }
    function h(n, t) {
      n == null && (n = +/* @__PURE__ */ new Date());
      var i = new T(n), s = t && t.state, r = function() {
        return (i.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var l = i.next() >>> 11, e = (i.next() >>> 0) / 4294967296, a = (l + e) / (1 << 21);
        while (a === 0);
        return a;
      }, r.int32 = i.next, r.quick = r, s && (s.x && d(s, i), r.state = function() {
        return d(i, {});
      }), r;
    }
    M && M.exports ? M.exports = h : this.xorshift7 = h;
  })(
    qt,
    A
  );
})(me);
var Be = me.exports, Te = { exports: {} };
Te.exports;
(function(A) {
  (function(w, M, S) {
    function T(n) {
      var t = this;
      t.next = function() {
        var s = t.w, r = t.X, l = t.i, e, a;
        return t.w = s = s + 1640531527 | 0, a = r[l + 34 & 127], e = r[l = l + 1 & 127], a ^= a << 13, e ^= e << 17, a ^= a >>> 15, e ^= e >>> 12, a = r[l] = a ^ e, t.i = l, a + (s ^ s >>> 16) | 0;
      };
      function i(s, r) {
        var l, e, a, f, v, u = [], N = 128;
        for (r === (r | 0) ? (e = r, r = null) : (r = r + "\0", e = 0, N = Math.max(N, r.length)), a = 0, f = -32; f < N; ++f)
          r && (e ^= r.charCodeAt((f + 32) % r.length)), f === 0 && (v = e), e ^= e << 10, e ^= e >>> 15, e ^= e << 4, e ^= e >>> 13, f >= 0 && (v = v + 1640531527 | 0, l = u[f & 127] ^= e + v, a = l == 0 ? a + 1 : 0);
        for (a >= 128 && (u[(r && r.length || 0) & 127] = -1), a = 127, f = 4 * 128; f > 0; --f)
          e = u[a + 34 & 127], l = u[a = a + 1 & 127], e ^= e << 13, l ^= l << 17, e ^= e >>> 15, l ^= l >>> 12, u[a] = e ^ l;
        s.w = v, s.X = u, s.i = a;
      }
      i(t, n);
    }
    function d(n, t) {
      return t.i = n.i, t.w = n.w, t.X = n.X.slice(), t;
    }
    function h(n, t) {
      n == null && (n = +/* @__PURE__ */ new Date());
      var i = new T(n), s = t && t.state, r = function() {
        return (i.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var l = i.next() >>> 11, e = (i.next() >>> 0) / 4294967296, a = (l + e) / (1 << 21);
        while (a === 0);
        return a;
      }, r.int32 = i.next, r.quick = r, s && (s.X && d(s, i), r.state = function() {
        return d(i, {});
      }), r;
    }
    M && M.exports ? M.exports = h : this.xor4096 = h;
  })(
    qt,
    // window object or global
    A
  );
})(Te);
var qe = Te.exports, Ce = { exports: {} };
Ce.exports;
(function(A) {
  (function(w, M, S) {
    function T(n) {
      var t = this, i = "";
      t.next = function() {
        var r = t.b, l = t.c, e = t.d, a = t.a;
        return r = r << 25 ^ r >>> 7 ^ l, l = l - e | 0, e = e << 24 ^ e >>> 8 ^ a, a = a - r | 0, t.b = r = r << 20 ^ r >>> 12 ^ l, t.c = l = l - e | 0, t.d = e << 16 ^ l >>> 16 ^ a, t.a = a - r | 0;
      }, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, n === Math.floor(n) ? (t.a = n / 4294967296 | 0, t.b = n | 0) : i += n;
      for (var s = 0; s < i.length + 20; s++)
        t.b ^= i.charCodeAt(s) | 0, t.next();
    }
    function d(n, t) {
      return t.a = n.a, t.b = n.b, t.c = n.c, t.d = n.d, t;
    }
    function h(n, t) {
      var i = new T(n), s = t && t.state, r = function() {
        return (i.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var l = i.next() >>> 11, e = (i.next() >>> 0) / 4294967296, a = (l + e) / (1 << 21);
        while (a === 0);
        return a;
      }, r.int32 = i.next, r.quick = r, s && (typeof s == "object" && d(s, i), r.state = function() {
        return d(i, {});
      }), r;
    }
    M && M.exports ? M.exports = h : this.tychei = h;
  })(
    qt,
    A
  );
})(Ce);
var Ze = Ce.exports, Se = { exports: {} };
const $e = {}, Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Ke = /* @__PURE__ */ Ue(Qe);
(function(A) {
  (function(w, M, S) {
    var T = 256, d = 6, h = 52, n = "random", t = S.pow(T, d), i = S.pow(2, h), s = i * 2, r = T - 1, l;
    function e(m, C, I) {
      var F = [];
      C = C == !0 ? { entropy: !0 } : C || {};
      var O = u(v(
        C.entropy ? [m, y(M)] : m ?? N(),
        3
      ), F), V = new a(F), X = function() {
        for (var q = V.g(d), R = t, nt = 0; q < i; )
          q = (q + nt) * T, R *= T, nt = V.g(1);
        for (; q >= s; )
          q /= 2, R /= 2, nt >>>= 1;
        return (q + nt) / R;
      };
      return X.int32 = function() {
        return V.g(4) | 0;
      }, X.quick = function() {
        return V.g(4) / 4294967296;
      }, X.double = X, u(y(V.S), M), (C.pass || I || function(q, R, nt, o) {
        return o && (o.S && f(o, V), q.state = function() {
          return f(V, {});
        }), nt ? (S[n] = q, R) : q;
      })(
        X,
        O,
        "global" in C ? C.global : this == S,
        C.state
      );
    }
    function a(m) {
      var C, I = m.length, F = this, O = 0, V = F.i = F.j = 0, X = F.S = [];
      for (I || (m = [I++]); O < T; )
        X[O] = O++;
      for (O = 0; O < T; O++)
        X[O] = X[V = r & V + m[O % I] + (C = X[O])], X[V] = C;
      (F.g = function(q) {
        for (var R, nt = 0, o = F.i, E = F.j, g = F.S; q--; )
          R = g[o = r & o + 1], nt = nt * T + g[r & (g[o] = g[E = r & E + R]) + (g[E] = R)];
        return F.i = o, F.j = E, nt;
      })(T);
    }
    function f(m, C) {
      return C.i = m.i, C.j = m.j, C.S = m.S.slice(), C;
    }
    function v(m, C) {
      var I = [], F = typeof m, O;
      if (C && F == "object")
        for (O in m)
          try {
            I.push(v(m[O], C - 1));
          } catch {
          }
      return I.length ? I : F == "string" ? m : m + "\0";
    }
    function u(m, C) {
      for (var I = m + "", F, O = 0; O < I.length; )
        C[r & O] = r & (F ^= C[r & O] * 19) + I.charCodeAt(O++);
      return y(C);
    }
    function N() {
      try {
        var m;
        return l && (m = l.randomBytes) ? m = m(T) : (m = new Uint8Array(T), (w.crypto || w.msCrypto).getRandomValues(m)), y(m);
      } catch {
        var C = w.navigator, I = C && C.plugins;
        return [+/* @__PURE__ */ new Date(), w, I, w.screen, y(M)];
      }
    }
    function y(m) {
      return String.fromCharCode.apply(0, m);
    }
    if (u(S.random(), M), A.exports) {
      A.exports = e;
      try {
        l = Ke;
      } catch {
      }
    } else
      S["seed" + n] = e;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : qt,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})(Se);
var Je = Se.exports, _e = We, je = Ve, ke = ze, tr = Be, er = qe, rr = Ze, Jt = Je;
Jt.alea = _e;
Jt.xor128 = je;
Jt.xorwow = ke;
Jt.xorshift7 = tr;
Jt.xor4096 = er;
Jt.tychei = rr;
var ir = Jt;
const nr = /* @__PURE__ */ Re(ir), Ct = Wt.layoutBase.Matrix, ar = Wt.layoutBase.SVD;
let we = function(A) {
  let w = Math.random;
  A.seededRandom && A.seededRandomString && (w = nr(A.seededRandomString));
  let M = A.cy, S = A.eles, T = S.nodes(), d = S.nodes(":parent"), h = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), i = [], s = [], r = [], l = [], e = [], a = [], f = [], v = [], u;
  const N = 1e8, y = 1e-9;
  let m = A.piTol, C = A.samplingType, I = A.nodeSeparation, F, O = function() {
    let E = 0, g = 0, c = !1;
    for (; g < F; ) {
      E = Math.floor(w() * u), c = !1;
      for (let p = 0; p < g; p++)
        if (l[p] == E) {
          c = !0;
          break;
        }
      if (!c)
        l[g] = E, g++;
      else
        continue;
    }
  }, V = function(E, g, c) {
    let p = [], x = 0, L = 0, D = 0, b, U = [], H = 0, z = 1;
    for (let P = 0; P < u; P++)
      U[P] = N;
    for (p[L] = E, U[E] = 0; L >= x; ) {
      D = p[x++];
      let P = i[D];
      for (let K = 0; K < P.length; K++)
        b = n.get(P[K]), U[b] == N && (U[b] = U[D] + 1, p[++L] = b);
      a[D][g] = U[D] * I;
    }
    if (c) {
      for (let P = 0; P < u; P++)
        a[P][g] < e[P] && (e[P] = a[P][g]);
      for (let P = 0; P < u; P++)
        e[P] > H && (H = e[P], z = P);
    }
    return z;
  }, X = function(E) {
    let g;
    if (E) {
      g = Math.floor(w() * u);
      for (let c = 0; c < u; c++)
        e[c] = N;
      for (let c = 0; c < F; c++)
        l[c] = g, g = V(g, c, E);
    } else {
      O();
      for (let c = 0; c < F; c++)
        V(l[c], c, E);
    }
    for (let c = 0; c < u; c++)
      for (let p = 0; p < F; p++)
        a[c][p] *= a[c][p];
    for (let c = 0; c < F; c++)
      f[c] = [];
    for (let c = 0; c < F; c++)
      for (let p = 0; p < F; p++)
        f[c][p] = a[l[p]][c];
  }, q = function() {
    let E = ar.svd(f), g = E.S, c = E.U, p = E.V, x = g[0] * g[0] * g[0], L = [];
    for (let D = 0; D < F; D++) {
      L[D] = [];
      for (let b = 0; b < F; b++)
        L[D][b] = 0, D == b && (L[D][b] = g[D] / (g[D] * g[D] + x / (g[D] * g[D])));
    }
    v = Ct.multMat(Ct.multMat(p, L), Ct.transpose(c));
  }, R = function() {
    let E, g, c = [], p = [], x = [], L = [];
    for (let H = 0; H < u; H++)
      c[H] = w(), p[H] = w();
    c = Ct.normalize(c), p = Ct.normalize(p);
    let D = y, b = y, U;
    for (; ; ) {
      for (let H = 0; H < u; H++)
        x[H] = c[H];
      if (c = Ct.multGamma(Ct.multL(Ct.multGamma(x), a, v)), E = Ct.dotProduct(x, c), c = Ct.normalize(c), D = Ct.dotProduct(x, c), U = Math.abs(D / b), U <= 1 + m && U >= 1)
        break;
      b = D;
    }
    for (let H = 0; H < u; H++)
      x[H] = c[H];
    for (b = y; ; ) {
      for (let H = 0; H < u; H++)
        L[H] = p[H];
      if (L = Ct.minusOp(L, Ct.multCons(x, Ct.dotProduct(x, L))), p = Ct.multGamma(Ct.multL(Ct.multGamma(L), a, v)), g = Ct.dotProduct(L, p), p = Ct.normalize(p), D = Ct.dotProduct(L, p), U = Math.abs(D / b), U <= 1 + m && U >= 1)
        break;
      b = D;
    }
    for (let H = 0; H < u; H++)
      L[H] = p[H];
    s = Ct.multCons(x, Math.sqrt(Math.abs(E))), r = Ct.multCons(L, Math.sqrt(Math.abs(g)));
  };
  Lt.connectComponents(M, S, Lt.getTopMostNodes(T), h), d.forEach(function(E) {
    Lt.connectComponents(M, S, Lt.getTopMostNodes(E.descendants().intersection(S)), h);
  });
  let nt = 0;
  for (let E = 0; E < T.length; E++)
    T[E].isParent() || n.set(T[E].id(), nt++);
  for (let E of h.keys())
    n.set(E, nt++);
  for (let E = 0; E < n.size; E++)
    i[E] = [];
  d.forEach(function(E) {
    let g = E.children().intersection(S);
    for (; g.nodes(":childless").length == 0; )
      g = g.nodes()[0].children().intersection(S);
    let c = 0, p = g.nodes(":childless")[0].connectedEdges().length;
    g.nodes(":childless").forEach(function(x, L) {
      x.connectedEdges().length < p && (p = x.connectedEdges().length, c = L);
    }), t.set(E.id(), g.nodes(":childless")[c].id());
  }), T.forEach(function(E) {
    let g;
    E.isParent() ? g = n.get(t.get(E.id())) : g = n.get(E.id()), E.neighborhood().nodes().forEach(function(c) {
      S.intersection(E.edgesWith(c)).length > 0 && (c.isParent() ? i[g].push(t.get(c.id())) : i[g].push(c.id()));
    });
  });
  for (let E of h.keys()) {
    let g = n.get(E), c;
    h.get(E).forEach(function(p) {
      M.getElementById(p).isParent() ? c = t.get(p) : c = p, i[g].push(c), i[n.get(c)].push(E);
    });
  }
  u = n.size;
  let o;
  if (u > 2) {
    F = u < A.sampleSize ? u : A.sampleSize;
    for (let E = 0; E < u; E++)
      a[E] = [];
    for (let E = 0; E < F; E++)
      v[E] = [];
    return A.quality == "draft" || A.step == "all" ? (X(C), q(), R(), o = { nodeIndexes: n, xCoords: s, yCoords: r }) : (n.forEach(function(E, g) {
      s.push(M.getElementById(g).position("x")), r.push(M.getElementById(g).position("y"));
    }), o = { nodeIndexes: n, xCoords: s, yCoords: r }), o;
  } else {
    let E = n.keys(), g = M.getElementById(E.next().value), c = g.position(), p = g.outerWidth();
    if (s.push(c.x), r.push(c.y), u == 2) {
      let L = M.getElementById(E.next().value).outerWidth();
      s.push(c.x + p / 2 + L / 2 + A.idealEdgeLength), r.push(c.y);
    }
    return o = { nodeIndexes: n, xCoords: s, yCoords: r }, o;
  }
};
const or = Wt.CoSELayout, se = Wt.CoSENode, le = Wt.layoutBase.PointD, fe = Wt.layoutBase.DimensionD, Kt = Wt.layoutBase.LayoutConstants, wt = Wt.layoutBase.FDLayoutConstants, ut = Wt.CoSEConstants;
let Ie = function(A, w) {
  let M = A.cy, S = A.eles, T = S.nodes(), d = S.edges(), h, n, t, i = {};
  A.randomize && (h = w.nodeIndexes, n = w.xCoords, t = w.yCoords);
  const s = (N) => typeof N == "function", r = (N, y) => s(N) ? N(y) : N;
  let l = Lt.calcParentsWithoutChildren(M, S), e = function(N, y, m, C) {
    let I = y.length;
    for (let F = 0; F < I; F++) {
      let O = y[F], V = null;
      O.intersection(l).length == 0 && (V = O.children());
      let X, q = O.layoutDimensions({
        nodeDimensionsIncludeLabels: C.nodeDimensionsIncludeLabels
      });
      if (O.outerWidth() != null && O.outerHeight() != null)
        if (C.randomize)
          if (!O.isParent())
            X = N.add(new se(
              m.graphManager,
              new le(n[h.get(O.id())] - q.w / 2, t[h.get(O.id())] - q.h / 2),
              new fe(parseFloat(q.w), parseFloat(q.h))
            ));
          else {
            let R = Lt.calcBoundingBox(O, n, t, h);
            O.intersection(l).length == 0 ? X = N.add(new se(
              m.graphManager,
              new le(R.topLeftX, R.topLeftY),
              new fe(R.width, R.height)
            )) : X = N.add(new se(
              m.graphManager,
              new le(R.topLeftX, R.topLeftY),
              new fe(parseFloat(q.w), parseFloat(q.h))
            ));
          }
        else
          X = N.add(new se(
            m.graphManager,
            new le(O.position("x") - q.w / 2, O.position("y") - q.h / 2),
            new fe(parseFloat(q.w), parseFloat(q.h))
          ));
      else
        X = N.add(new se(this.graphManager));
      if (X.id = O.data("id"), X.nodeRepulsion = r(C.nodeRepulsion, O), X.paddingLeft = parseInt(O.css("padding")), X.paddingTop = parseInt(O.css("padding")), X.paddingRight = parseInt(O.css("padding")), X.paddingBottom = parseInt(O.css("padding")), C.nodeDimensionsIncludeLabels && (X.labelWidth = O.boundingBox({ includeLabels: !0, includeNodes: !1, includeOverlays: !1 }).w, X.labelHeight = O.boundingBox({ includeLabels: !0, includeNodes: !1, includeOverlays: !1 }).h, X.labelPosVertical = O.css("text-valign"), X.labelPosHorizontal = O.css("text-halign")), i[O.data("id")] = X, isNaN(X.rect.x) && (X.rect.x = 0), isNaN(X.rect.y) && (X.rect.y = 0), V != null && V.length > 0) {
        let R;
        R = m.getGraphManager().add(m.newGraph(), X), e(R, V, m, C);
      }
    }
  }, a = function(N, y, m) {
    let C = 0, I = 0;
    for (let F = 0; F < m.length; F++) {
      let O = m[F], V = i[O.data("source")], X = i[O.data("target")];
      if (V && X && V !== X && V.getEdgesBetween(X).length == 0) {
        let q = y.add(N.newEdge(), V, X);
        q.id = O.id(), q.idealLength = r(A.idealEdgeLength, O), q.edgeElasticity = r(A.edgeElasticity, O), C += q.idealLength, I++;
      }
    }
    A.idealEdgeLength != null && (I > 0 ? ut.DEFAULT_EDGE_LENGTH = wt.DEFAULT_EDGE_LENGTH = C / I : s(A.idealEdgeLength) ? ut.DEFAULT_EDGE_LENGTH = wt.DEFAULT_EDGE_LENGTH = 50 : ut.DEFAULT_EDGE_LENGTH = wt.DEFAULT_EDGE_LENGTH = A.idealEdgeLength, ut.MIN_REPULSION_DIST = wt.MIN_REPULSION_DIST = wt.DEFAULT_EDGE_LENGTH / 10, ut.DEFAULT_RADIAL_SEPARATION = wt.DEFAULT_EDGE_LENGTH);
  }, f = function(N, y) {
    y.fixedNodeConstraint && (N.constraints.fixedNodeConstraint = y.fixedNodeConstraint), y.alignmentConstraint && (N.constraints.alignmentConstraint = y.alignmentConstraint), y.relativePlacementConstraint && (N.constraints.relativePlacementConstraint = y.relativePlacementConstraint);
  };
  A.nestingFactor != null && (ut.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = wt.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = A.nestingFactor), A.gravity != null && (ut.DEFAULT_GRAVITY_STRENGTH = wt.DEFAULT_GRAVITY_STRENGTH = A.gravity), A.numIter != null && (ut.MAX_ITERATIONS = wt.MAX_ITERATIONS = A.numIter), A.gravityRange != null && (ut.DEFAULT_GRAVITY_RANGE_FACTOR = wt.DEFAULT_GRAVITY_RANGE_FACTOR = A.gravityRange), A.gravityCompound != null && (ut.DEFAULT_COMPOUND_GRAVITY_STRENGTH = wt.DEFAULT_COMPOUND_GRAVITY_STRENGTH = A.gravityCompound), A.gravityRangeCompound != null && (ut.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = wt.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = A.gravityRangeCompound), A.initialEnergyOnIncremental != null && (ut.DEFAULT_COOLING_FACTOR_INCREMENTAL = wt.DEFAULT_COOLING_FACTOR_INCREMENTAL = A.initialEnergyOnIncremental), A.tilingCompareBy != null && (ut.TILING_COMPARE_BY = A.tilingCompareBy), A.quality == "proof" ? Kt.QUALITY = 2 : Kt.QUALITY = 0, ut.NODE_DIMENSIONS_INCLUDE_LABELS = wt.NODE_DIMENSIONS_INCLUDE_LABELS = Kt.NODE_DIMENSIONS_INCLUDE_LABELS = A.nodeDimensionsIncludeLabels, ut.DEFAULT_INCREMENTAL = wt.DEFAULT_INCREMENTAL = Kt.DEFAULT_INCREMENTAL = !A.randomize, ut.ANIMATE = wt.ANIMATE = Kt.ANIMATE = A.animate, ut.TILE = A.tile, ut.TILING_PADDING_VERTICAL = typeof A.tilingPaddingVertical == "function" ? A.tilingPaddingVertical.call() : A.tilingPaddingVertical, ut.TILING_PADDING_HORIZONTAL = typeof A.tilingPaddingHorizontal == "function" ? A.tilingPaddingHorizontal.call() : A.tilingPaddingHorizontal, ut.DEFAULT_INCREMENTAL = wt.DEFAULT_INCREMENTAL = Kt.DEFAULT_INCREMENTAL = !0, ut.PURE_INCREMENTAL = !A.randomize, Kt.DEFAULT_UNIFORM_LEAF_NODE_SIZES = A.uniformNodeDimensions, A.step == "transformed" && (ut.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, ut.ENFORCE_CONSTRAINTS = !1, ut.APPLY_LAYOUT = !1), A.step == "enforced" && (ut.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, ut.ENFORCE_CONSTRAINTS = !0, ut.APPLY_LAYOUT = !1), A.step == "cose" && (ut.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, ut.ENFORCE_CONSTRAINTS = !1, ut.APPLY_LAYOUT = !0), A.step == "all" && (A.randomize ? ut.TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : ut.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, ut.ENFORCE_CONSTRAINTS = !0, ut.APPLY_LAYOUT = !0), A.fixedNodeConstraint || A.alignmentConstraint || A.relativePlacementConstraint ? ut.TREE_REDUCTION_ON_INCREMENTAL = !1 : ut.TREE_REDUCTION_ON_INCREMENTAL = !0;
  let v = new or(), u = v.newGraphManager();
  return e(u.addRoot(), Lt.getTopMostNodes(T), v, A), a(v, u, d), f(v, A), v.runLayout(), i;
};
const sr = Object.freeze({
  // 'draft', 'default' or 'proof' 
  // - 'draft' only applies spectral layout 
  // - 'default' improves the quality with subsequent CoSE layout (fast cooling rate)
  // - 'proof' improves the quality with subsequent CoSE layout (slow cooling rate) 
  quality: "default",
  // Use random node positions at beginning of layout
  // if this is set to false, then quality option must be "proof"
  randomize: !0,
  // seeded random, for deterministic spectral layout
  seededRandom: !1,
  // string for random seed (e.g. 'a', 'b', 'c' or 'abc')
  seededRandomString: "cose",
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
  nodeRepulsion: (A) => 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: (A) => 50,
  // Divisor to compute edge forces
  edgeElasticity: (A) => 0.45,
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
}), Ge = function(A) {
  this.options = be({}, sr, A);
};
Ge.prototype.run = function() {
  let A = this, w = this.options, M = w.cy, S = w.eles, T = [], d = [], h, n = [];
  w.fixedNodeConstraint && (!Array.isArray(w.fixedNodeConstraint) || w.fixedNodeConstraint.length == 0) && (w.fixedNodeConstraint = void 0), w.alignmentConstraint && (w.alignmentConstraint.vertical && (!Array.isArray(w.alignmentConstraint.vertical) || w.alignmentConstraint.vertical.length == 0) && (w.alignmentConstraint.vertical = void 0), w.alignmentConstraint.horizontal && (!Array.isArray(w.alignmentConstraint.horizontal) || w.alignmentConstraint.horizontal.length == 0) && (w.alignmentConstraint.horizontal = void 0)), w.relativePlacementConstraint && (!Array.isArray(w.relativePlacementConstraint) || w.relativePlacementConstraint.length == 0) && (w.relativePlacementConstraint = void 0), (w.fixedNodeConstraint || w.alignmentConstraint || w.relativePlacementConstraint) && (w.tile = !1, w.packComponents = !1);
  let i, s = !1;
  if (M.layoutUtilities && w.packComponents && (i = M.layoutUtilities("get"), i || (i = M.layoutUtilities()), s = !0), S.nodes().length > 0)
    if (s) {
      let l = Lt.getTopMostNodes(w.eles.nodes());
      if (h = Lt.connectComponents(M, w.eles, l), h.forEach(function(a) {
        let f = a.boundingBox();
        n.push({ x: f.x1 + f.w / 2, y: f.y1 + f.h / 2 });
      }), w.randomize && h.forEach(function(a) {
        w.eles = a, T.push(we(w));
      }), w.quality === "default" || w.quality === "proof") {
        let a = M.collection();
        if (w.tile) {
          let f = /* @__PURE__ */ new Map(), v = [], u = [], N = 0, y = { nodeIndexes: f, xCoords: v, yCoords: u }, m = [];
          if (h.forEach(function(C, I) {
            C.edges().length === 0 && (C.nodes().forEach(function(F, O) {
              a.merge(C.nodes()[O]), F.isParent() || (y.nodeIndexes.set(C.nodes()[O].id(), N++), y.xCoords.push(C.nodes()[0].position().x), y.yCoords.push(C.nodes()[0].position().y));
            }), m.push(I));
          }), a.length > 1) {
            let C = a.boundingBox();
            n.push({ x: C.x1 + C.w / 2, y: C.y1 + C.h / 2 }), h.push(a), T.push(y);
            for (let I = m.length - 1; I >= 0; I--)
              h.splice(m[I], 1), T.splice(m[I], 1), n.splice(m[I], 1);
          }
        }
        h.forEach(function(f, v) {
          w.eles = f, d.push(Ie(w, T[v])), Lt.relocateComponent(n[v], d[v], w);
        });
      } else
        h.forEach(function(a, f) {
          Lt.relocateComponent(n[f], T[f], w);
        });
      let e = /* @__PURE__ */ new Set();
      if (h.length > 1) {
        let a = [], f = S.filter((u) => u.css("display") === "none");
        h.forEach(function(u, N) {
          let y;
          if (w.quality === "draft" && (y = T[N].nodeIndexes), u.nodes().not(f).length > 0) {
            let m = {};
            m.edges = [], m.nodes = [];
            let C;
            u.nodes().not(f).forEach(function(I) {
              if (w.quality === "draft")
                if (!I.isParent())
                  C = y.get(I.id()), m.nodes.push({ x: T[N].xCoords[C] - I.boundingbox().w / 2, y: T[N].yCoords[C] - I.boundingbox().h / 2, width: I.boundingbox().w, height: I.boundingbox().h });
                else {
                  let F = Lt.calcBoundingBox(I, T[N].xCoords, T[N].yCoords, y);
                  m.nodes.push({ x: F.topLeftX, y: F.topLeftY, width: F.width, height: F.height });
                }
              else
                d[N][I.id()] && m.nodes.push({ x: d[N][I.id()].getLeft(), y: d[N][I.id()].getTop(), width: d[N][I.id()].getWidth(), height: d[N][I.id()].getHeight() });
            }), u.edges().forEach(function(I) {
              let F = I.source(), O = I.target();
              if (F.css("display") !== "none" && O.css("display") !== "none")
                if (w.quality === "draft") {
                  let V = y.get(F.id()), X = y.get(O.id()), q = [], R = [];
                  if (F.isParent()) {
                    let nt = Lt.calcBoundingBox(F, T[N].xCoords, T[N].yCoords, y);
                    q.push(nt.topLeftX + nt.width / 2), q.push(nt.topLeftY + nt.height / 2);
                  } else
                    q.push(T[N].xCoords[V]), q.push(T[N].yCoords[V]);
                  if (O.isParent()) {
                    let nt = Lt.calcBoundingBox(O, T[N].xCoords, T[N].yCoords, y);
                    R.push(nt.topLeftX + nt.width / 2), R.push(nt.topLeftY + nt.height / 2);
                  } else
                    R.push(T[N].xCoords[X]), R.push(T[N].yCoords[X]);
                  m.edges.push({ startX: q[0], startY: q[1], endX: R[0], endY: R[1] });
                } else
                  d[N][F.id()] && d[N][O.id()] && m.edges.push({ startX: d[N][F.id()].getCenterX(), startY: d[N][F.id()].getCenterY(), endX: d[N][O.id()].getCenterX(), endY: d[N][O.id()].getCenterY() });
            }), m.nodes.length > 0 && (a.push(m), e.add(N));
          }
        });
        let v = i.packComponents(a, w.randomize).shifts;
        if (w.quality === "draft")
          T.forEach(function(u, N) {
            let y = u.xCoords.map((C) => C + v[N].dx), m = u.yCoords.map((C) => C + v[N].dy);
            u.xCoords = y, u.yCoords = m;
          });
        else {
          let u = 0;
          e.forEach((N) => {
            Object.keys(d[N]).forEach(function(y) {
              let m = d[N][y];
              m.setCenter(m.getCenterX() + v[u].dx, m.getCenterY() + v[u].dy);
            }), u++;
          });
        }
      }
    } else {
      let l = w.eles.boundingBox();
      if (n.push({ x: l.x1 + l.w / 2, y: l.y1 + l.h / 2 }), w.randomize) {
        let e = we(w);
        T.push(e);
      }
      w.quality === "default" || w.quality === "proof" ? (d.push(Ie(w, T[0])), Lt.relocateComponent(n[0], d[0], w)) : Lt.relocateComponent(n[0], T[0], w);
    }
  let r = function(l, e) {
    if (w.quality === "default" || w.quality === "proof") {
      typeof l == "number" && (l = e);
      let a, f, v = l.data("id");
      return d.forEach(function(u) {
        v in u && (a = { x: u[v].getRect().getCenterX(), y: u[v].getRect().getCenterY() }, f = u[v]);
      }), w.nodeDimensionsIncludeLabels && (f.labelWidth && (f.labelPosHorizontal === "left" ? a.x += f.labelWidth / 2 : f.labelPosHorizontal === "right" && (a.x -= f.labelWidth / 2)), f.labelHeight && (f.labelPosVertical === "top" ? a.y += f.labelHeight / 2 : f.labelPosVertical === "bottom" && (a.y -= f.labelHeight / 2))), a === void 0 && (a = { x: l.position("x"), y: l.position("y") }), {
        x: a.x,
        y: a.y
      };
    } else {
      let a;
      return T.forEach(function(f) {
        let v = f.nodeIndexes.get(l.id());
        v != null && (a = { x: f.xCoords[v], y: f.yCoords[v] });
      }), a == null && (a = { x: l.position("x"), y: l.position("y") }), {
        x: a.x,
        y: a.y
      };
    }
  };
  if (w.quality === "default" || w.quality === "proof" || w.randomize) {
    let l = Lt.calcParentsWithoutChildren(M, S), e = S.filter((a) => a.css("display") === "none");
    w.eles = S.not(e), S.nodes().not(":parent").not(e).layoutPositions(A, w, r), l.length > 0 && l.forEach((a) => {
      a.position(r(a));
    });
  } else
    console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
};
let hr = function(A) {
  A && A("layout", "fcose", Ge);
};
export {
  hr as default
};
