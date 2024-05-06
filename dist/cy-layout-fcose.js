const Oe = Object.assign != null ? Object.assign.bind(Object) : function(F, ...nt) {
  return nt.forEach((L) => {
    Object.keys(L).forEach((U) => F[U] = L[U]);
  }), F;
};
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(F) {
  return F && F.__esModule && Object.prototype.hasOwnProperty.call(F, "default") ? F.default : F;
}
var Me = { exports: {} }, de = { exports: {} }, Te;
function Ie() {
  return Te || (Te = 1, function(F, nt) {
    (function(U, C) {
      F.exports = C();
    })(Ce, function() {
      return (
        /******/
        function(L) {
          var U = {};
          function C(c) {
            if (U[c])
              return U[c].exports;
            var n = U[c] = {
              /******/
              i: c,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return L[c].call(n.exports, n, n.exports, C), n.l = !0, n.exports;
          }
          return C.m = L, C.c = U, C.i = function(c) {
            return c;
          }, C.d = function(c, n, i) {
            C.o(c, n) || Object.defineProperty(c, n, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: i
              /******/
            });
          }, C.n = function(c) {
            var n = c && c.__esModule ? (
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
            return C.d(n, "a", n), n;
          }, C.o = function(c, n) {
            return Object.prototype.hasOwnProperty.call(c, n);
          }, C.p = "", C(C.s = 28);
        }([
          /* 0 */
          /***/
          function(L, U, C) {
            function c() {
            }
            c.QUALITY = 1, c.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, c.DEFAULT_INCREMENTAL = !1, c.DEFAULT_ANIMATION_ON_LAYOUT = !0, c.DEFAULT_ANIMATION_DURING_LAYOUT = !1, c.DEFAULT_ANIMATION_PERIOD = 50, c.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, c.DEFAULT_GRAPH_MARGIN = 15, c.NODE_DIMENSIONS_INCLUDE_LABELS = !1, c.SIMPLE_NODE_SIZE = 40, c.SIMPLE_NODE_HALF_SIZE = c.SIMPLE_NODE_SIZE / 2, c.EMPTY_COMPOUND_NODE_SIZE = 40, c.MIN_EDGE_LENGTH = 1, c.WORLD_BOUNDARY = 1e6, c.INITIAL_WORLD_BOUNDARY = c.WORLD_BOUNDARY / 1e3, c.WORLD_CENTER_X = 1200, c.WORLD_CENTER_Y = 900, L.exports = c;
          },
          /* 1 */
          /***/
          function(L, U, C) {
            var c = C(2), n = C(8), i = C(9);
            function r(f, o, y) {
              c.call(this, y), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = y, this.bendpoints = [], this.source = f, this.target = o;
            }
            r.prototype = Object.create(c.prototype);
            for (var a in c)
              r[a] = c[a];
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
              for (var y = this.getOtherEnd(f), t = o.getGraphManager().getRoot(); ; ) {
                if (y.getOwner() == o)
                  return y;
                if (y.getOwner() == t)
                  break;
                y = y.getOwner().getParent();
              }
              return null;
            }, r.prototype.updateLength = function() {
              var f = new Array(4);
              this.isOverlapingSourceAndTarget = n.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = i.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = i.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, r.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = i.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = i.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, L.exports = r;
          },
          /* 2 */
          /***/
          function(L, U, C) {
            function c(n) {
              this.vGraphObject = n;
            }
            L.exports = c;
          },
          /* 3 */
          /***/
          function(L, U, C) {
            var c = C(2), n = C(10), i = C(13), r = C(0), a = C(16), f = C(5);
            function o(t, h, s, g) {
              s == null && g == null && (g = h), c.call(this, g), t.graphManager != null && (t = t.graphManager), this.estimatedSize = n.MIN_VALUE, this.inclusionTreeDepth = n.MAX_VALUE, this.vGraphObject = g, this.edges = [], this.graphManager = t, s != null && h != null ? this.rect = new i(h.x, h.y, s.width, s.height) : this.rect = new i();
            }
            o.prototype = Object.create(c.prototype);
            for (var y in c)
              o[y] = c[y];
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
            }, o.prototype.setRect = function(t, h) {
              this.rect.x = t.x, this.rect.y = t.y, this.rect.width = h.width, this.rect.height = h.height;
            }, o.prototype.setCenter = function(t, h) {
              this.rect.x = t - this.rect.width / 2, this.rect.y = h - this.rect.height / 2;
            }, o.prototype.setLocation = function(t, h) {
              this.rect.x = t, this.rect.y = h;
            }, o.prototype.moveBy = function(t, h) {
              this.rect.x += t, this.rect.y += h;
            }, o.prototype.getEdgeListToNode = function(t) {
              var h = [], s = this;
              return s.edges.forEach(function(g) {
                if (g.target == t) {
                  if (g.source != s)
                    throw "Incorrect edge source!";
                  h.push(g);
                }
              }), h;
            }, o.prototype.getEdgesBetween = function(t) {
              var h = [], s = this;
              return s.edges.forEach(function(g) {
                if (!(g.source == s || g.target == s))
                  throw "Incorrect edge source and/or target";
                (g.target == t || g.source == t) && h.push(g);
              }), h;
            }, o.prototype.getNeighborsList = function() {
              var t = /* @__PURE__ */ new Set(), h = this;
              return h.edges.forEach(function(s) {
                if (s.source == h)
                  t.add(s.target);
                else {
                  if (s.target != h)
                    throw "Incorrect incidency!";
                  t.add(s.source);
                }
              }), t;
            }, o.prototype.withChildren = function() {
              var t = /* @__PURE__ */ new Set(), h, s;
              if (t.add(this), this.child != null)
                for (var g = this.child.getNodes(), u = 0; u < g.length; u++)
                  h = g[u], s = h.withChildren(), s.forEach(function(N) {
                    t.add(N);
                  });
              return t;
            }, o.prototype.getNoOfChildren = function() {
              var t = 0, h;
              if (this.child == null)
                t = 1;
              else
                for (var s = this.child.getNodes(), g = 0; g < s.length; g++)
                  h = s[g], t += h.getNoOfChildren();
              return t == 0 && (t = 1), t;
            }, o.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == n.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, o.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, o.prototype.scatter = function() {
              var t, h, s = -r.INITIAL_WORLD_BOUNDARY, g = r.INITIAL_WORLD_BOUNDARY;
              t = r.WORLD_CENTER_X + a.nextDouble() * (g - s) + s;
              var u = -r.INITIAL_WORLD_BOUNDARY, N = r.INITIAL_WORLD_BOUNDARY;
              h = r.WORLD_CENTER_Y + a.nextDouble() * (N - u) + u, this.rect.x = t, this.rect.y = h;
            }, o.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var t = this.getChild();
                if (t.updateBounds(!0), this.rect.x = t.getLeft(), this.rect.y = t.getTop(), this.setWidth(t.getRight() - t.getLeft()), this.setHeight(t.getBottom() - t.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var h = t.getRight() - t.getLeft(), s = t.getBottom() - t.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(h + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > h ? (this.rect.x -= (this.labelWidth - h) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(h + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(s + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > s ? (this.rect.y -= (this.labelHeight - s) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(s + this.labelHeight));
                }
              }
            }, o.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == n.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, o.prototype.transform = function(t) {
              var h = this.rect.x;
              h > r.WORLD_BOUNDARY ? h = r.WORLD_BOUNDARY : h < -r.WORLD_BOUNDARY && (h = -r.WORLD_BOUNDARY);
              var s = this.rect.y;
              s > r.WORLD_BOUNDARY ? s = r.WORLD_BOUNDARY : s < -r.WORLD_BOUNDARY && (s = -r.WORLD_BOUNDARY);
              var g = new f(h, s), u = t.inverseTransformPoint(g);
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
            }, L.exports = o;
          },
          /* 4 */
          /***/
          function(L, U, C) {
            var c = C(0);
            function n() {
            }
            for (var i in c)
              n[i] = c[i];
            n.MAX_ITERATIONS = 2500, n.DEFAULT_EDGE_LENGTH = 50, n.DEFAULT_SPRING_STRENGTH = 0.45, n.DEFAULT_REPULSION_STRENGTH = 4500, n.DEFAULT_GRAVITY_STRENGTH = 0.4, n.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, n.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, n.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, n.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, n.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, n.COOLING_ADAPTATION_FACTOR = 0.33, n.ADAPTATION_LOWER_NODE_LIMIT = 1e3, n.ADAPTATION_UPPER_NODE_LIMIT = 5e3, n.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, n.MAX_NODE_DISPLACEMENT = n.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, n.MIN_REPULSION_DIST = n.DEFAULT_EDGE_LENGTH / 10, n.CONVERGENCE_CHECK_PERIOD = 100, n.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, n.MIN_EDGE_LENGTH = 1, n.GRID_CALCULATION_CHECK_PERIOD = 10, L.exports = n;
          },
          /* 5 */
          /***/
          function(L, U, C) {
            function c(n, i) {
              n == null && i == null ? (this.x = 0, this.y = 0) : (this.x = n, this.y = i);
            }
            c.prototype.getX = function() {
              return this.x;
            }, c.prototype.getY = function() {
              return this.y;
            }, c.prototype.setX = function(n) {
              this.x = n;
            }, c.prototype.setY = function(n) {
              this.y = n;
            }, c.prototype.getDifference = function(n) {
              return new DimensionD(this.x - n.x, this.y - n.y);
            }, c.prototype.getCopy = function() {
              return new c(this.x, this.y);
            }, c.prototype.translate = function(n) {
              return this.x += n.width, this.y += n.height, this;
            }, L.exports = c;
          },
          /* 6 */
          /***/
          function(L, U, C) {
            var c = C(2), n = C(10), i = C(0), r = C(7), a = C(3), f = C(1), o = C(13), y = C(12), t = C(11);
            function h(g, u, N) {
              c.call(this, N), this.estimatedSize = n.MIN_VALUE, this.margin = i.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = g, u != null && u instanceof r ? this.graphManager = u : u != null && u instanceof Layout && (this.graphManager = u.graphManager);
            }
            h.prototype = Object.create(c.prototype);
            for (var s in c)
              h[s] = c[s];
            h.prototype.getNodes = function() {
              return this.nodes;
            }, h.prototype.getEdges = function() {
              return this.edges;
            }, h.prototype.getGraphManager = function() {
              return this.graphManager;
            }, h.prototype.getParent = function() {
              return this.parent;
            }, h.prototype.getLeft = function() {
              return this.left;
            }, h.prototype.getRight = function() {
              return this.right;
            }, h.prototype.getTop = function() {
              return this.top;
            }, h.prototype.getBottom = function() {
              return this.bottom;
            }, h.prototype.isConnected = function() {
              return this.isConnected;
            }, h.prototype.add = function(g, u, N) {
              if (u == null && N == null) {
                var v = g;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(v) > -1)
                  throw "Node already in graph!";
                return v.owner = this, this.getNodes().push(v), v;
              } else {
                var T = g;
                if (!(this.getNodes().indexOf(u) > -1 && this.getNodes().indexOf(N) > -1))
                  throw "Source or target not in graph!";
                if (!(u.owner == N.owner && u.owner == this))
                  throw "Both owners must be this graph!";
                return u.owner != N.owner ? null : (T.source = u, T.target = N, T.isInterGraph = !1, this.getEdges().push(T), u.edges.push(T), N != u && N.edges.push(T), T);
              }
            }, h.prototype.remove = function(g) {
              var u = g;
              if (g instanceof a) {
                if (u == null)
                  throw "Node is null!";
                if (!(u.owner != null && u.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var N = u.edges.slice(), v, T = N.length, m = 0; m < T; m++)
                  v = N[m], v.isInterGraph ? this.graphManager.remove(v) : v.source.owner.remove(v);
                var R = this.nodes.indexOf(u);
                if (R == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(R, 1);
              } else if (g instanceof f) {
                var v = g;
                if (v == null)
                  throw "Edge is null!";
                if (!(v.source != null && v.target != null))
                  throw "Source and/or target is null!";
                if (!(v.source.owner != null && v.target.owner != null && v.source.owner == this && v.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var b = v.source.edges.indexOf(v), I = v.target.edges.indexOf(v);
                if (!(b > -1 && I > -1))
                  throw "Source and/or target doesn't know this edge!";
                v.source.edges.splice(b, 1), v.target != v.source && v.target.edges.splice(I, 1);
                var R = v.source.owner.getEdges().indexOf(v);
                if (R == -1)
                  throw "Not in owner's edge list!";
                v.source.owner.getEdges().splice(R, 1);
              }
            }, h.prototype.updateLeftTop = function() {
              for (var g = n.MAX_VALUE, u = n.MAX_VALUE, N, v, T, m = this.getNodes(), R = m.length, b = 0; b < R; b++) {
                var I = m[b];
                N = I.getTop(), v = I.getLeft(), g > N && (g = N), u > v && (u = v);
              }
              return g == n.MAX_VALUE ? null : (m[0].getParent().paddingLeft != null ? T = m[0].getParent().paddingLeft : T = this.margin, this.left = u - T, this.top = g - T, new y(this.left, this.top));
            }, h.prototype.updateBounds = function(g) {
              for (var u = n.MAX_VALUE, N = -n.MAX_VALUE, v = n.MAX_VALUE, T = -n.MAX_VALUE, m, R, b, I, z, H = this.nodes, J = H.length, w = 0; w < J; w++) {
                var ht = H[w];
                g && ht.child != null && ht.updateBounds(), m = ht.getLeft(), R = ht.getRight(), b = ht.getTop(), I = ht.getBottom(), u > m && (u = m), N < R && (N = R), v > b && (v = b), T < I && (T = I);
              }
              var e = new o(u, v, N - u, T - v);
              u == n.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), H[0].getParent().paddingLeft != null ? z = H[0].getParent().paddingLeft : z = this.margin, this.left = e.x - z, this.right = e.x + e.width + z, this.top = e.y - z, this.bottom = e.y + e.height + z;
            }, h.calculateBounds = function(g) {
              for (var u = n.MAX_VALUE, N = -n.MAX_VALUE, v = n.MAX_VALUE, T = -n.MAX_VALUE, m, R, b, I, z = g.length, H = 0; H < z; H++) {
                var J = g[H];
                m = J.getLeft(), R = J.getRight(), b = J.getTop(), I = J.getBottom(), u > m && (u = m), N < R && (N = R), v > b && (v = b), T < I && (T = I);
              }
              var w = new o(u, v, N - u, T - v);
              return w;
            }, h.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, h.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == n.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, h.prototype.calcEstimatedSize = function() {
              for (var g = 0, u = this.nodes, N = u.length, v = 0; v < N; v++) {
                var T = u[v];
                g += T.calcEstimatedSize();
              }
              return g == 0 ? this.estimatedSize = i.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = g / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, h.prototype.updateConnected = function() {
              var g = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var u = new t(), N = /* @__PURE__ */ new Set(), v = this.nodes[0], T, m, R = v.withChildren();
              for (R.forEach(function(w) {
                u.push(w), N.add(w);
              }); u.length !== 0; ) {
                v = u.shift(), T = v.getEdges();
                for (var b = T.length, I = 0; I < b; I++) {
                  var z = T[I];
                  if (m = z.getOtherEndInGraph(v, this), m != null && !N.has(m)) {
                    var H = m.withChildren();
                    H.forEach(function(w) {
                      u.push(w), N.add(w);
                    });
                  }
                }
              }
              if (this.isConnected = !1, N.size >= this.nodes.length) {
                var J = 0;
                N.forEach(function(w) {
                  w.owner == g && J++;
                }), J == this.nodes.length && (this.isConnected = !0);
              }
            }, L.exports = h;
          },
          /* 7 */
          /***/
          function(L, U, C) {
            var c, n = C(1);
            function i(r) {
              c = C(6), this.layout = r, this.graphs = [], this.edges = [];
            }
            i.prototype.addRoot = function() {
              var r = this.layout.newGraph(), a = this.layout.newNode(null), f = this.add(r, a);
              return this.setRootGraph(f), this.rootGraph;
            }, i.prototype.add = function(r, a, f, o, y) {
              if (f == null && o == null && y == null) {
                if (r == null)
                  throw "Graph is null!";
                if (a == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(r) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(r), r.parent != null)
                  throw "Already has a parent!";
                if (a.child != null)
                  throw "Already has a child!";
                return r.parent = a, a.child = r, r;
              } else {
                y = f, o = a, f = r;
                var t = o.getOwner(), h = y.getOwner();
                if (!(t != null && t.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(h != null && h.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (t == h)
                  return f.isInterGraph = !1, t.add(f, o, y);
                if (f.isInterGraph = !0, f.source = o, f.target = y, this.edges.indexOf(f) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(f), !(f.source != null && f.target != null))
                  throw "Edge source and/or target is null!";
                if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return f.source.edges.push(f), f.target.edges.push(f), f;
              }
            }, i.prototype.remove = function(r) {
              if (r instanceof c) {
                var a = r;
                if (a.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(a == this.rootGraph || a.parent != null && a.parent.graphManager == this))
                  throw "Invalid parent node!";
                var f = [];
                f = f.concat(a.getEdges());
                for (var o, y = f.length, t = 0; t < y; t++)
                  o = f[t], a.remove(o);
                var h = [];
                h = h.concat(a.getNodes());
                var s;
                y = h.length;
                for (var t = 0; t < y; t++)
                  s = h[t], a.remove(s);
                a == this.rootGraph && this.setRootGraph(null);
                var g = this.graphs.indexOf(a);
                this.graphs.splice(g, 1), a.parent = null;
              } else if (r instanceof n) {
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
                for (var r = [], a = this.getGraphs(), f = a.length, o = 0; o < f; o++)
                  r = r.concat(a[o].getNodes());
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
                var r = [], a = this.getGraphs();
                a.length;
                for (var f = 0; f < a.length; f++)
                  r = r.concat(a[f].getEdges());
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
            }, i.prototype.isOneAncestorOfOther = function(r, a) {
              if (!(r != null && a != null))
                throw "assert failed";
              if (r == a)
                return !0;
              var f = r.getOwner(), o;
              do {
                if (o = f.getParent(), o == null)
                  break;
                if (o == a)
                  return !0;
                if (f = o.getOwner(), f == null)
                  break;
              } while (!0);
              f = a.getOwner();
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
              for (var r, a, f, o, y, t = this.getAllEdges(), h = t.length, s = 0; s < h; s++) {
                if (r = t[s], a = r.source, f = r.target, r.lca = null, r.sourceInLca = a, r.targetInLca = f, a == f) {
                  r.lca = a.getOwner();
                  continue;
                }
                for (o = a.getOwner(); r.lca == null; ) {
                  for (r.targetInLca = f, y = f.getOwner(); r.lca == null; ) {
                    if (y == o) {
                      r.lca = y;
                      break;
                    }
                    if (y == this.rootGraph)
                      break;
                    if (r.lca != null)
                      throw "assert failed";
                    r.targetInLca = y.getParent(), y = r.targetInLca.getOwner();
                  }
                  if (o == this.rootGraph)
                    break;
                  r.lca == null && (r.sourceInLca = o.getParent(), o = r.sourceInLca.getOwner());
                }
                if (r.lca == null)
                  throw "assert failed";
              }
            }, i.prototype.calcLowestCommonAncestor = function(r, a) {
              if (r == a)
                return r.getOwner();
              var f = r.getOwner();
              do {
                if (f == null)
                  break;
                var o = a.getOwner();
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
            }, i.prototype.calcInclusionTreeDepths = function(r, a) {
              r == null && a == null && (r = this.rootGraph, a = 1);
              for (var f, o = r.getNodes(), y = o.length, t = 0; t < y; t++)
                f = o[t], f.inclusionTreeDepth = a, f.child != null && this.calcInclusionTreeDepths(f.child, a + 1);
            }, i.prototype.includesInvalidEdge = function() {
              for (var r, a = [], f = this.edges.length, o = 0; o < f; o++)
                r = this.edges[o], this.isOneAncestorOfOther(r.source, r.target) && a.push(r);
              for (var o = 0; o < a.length; o++)
                this.remove(a[o]);
              return !1;
            }, L.exports = i;
          },
          /* 8 */
          /***/
          function(L, U, C) {
            var c = C(12);
            function n() {
            }
            n.calcSeparationAmount = function(i, r, a, f) {
              if (!i.intersects(r))
                throw "assert failed";
              var o = new Array(2);
              this.decideDirectionsForOverlappingNodes(i, r, o), a[0] = Math.min(i.getRight(), r.getRight()) - Math.max(i.x, r.x), a[1] = Math.min(i.getBottom(), r.getBottom()) - Math.max(i.y, r.y), i.getX() <= r.getX() && i.getRight() >= r.getRight() ? a[0] += Math.min(r.getX() - i.getX(), i.getRight() - r.getRight()) : r.getX() <= i.getX() && r.getRight() >= i.getRight() && (a[0] += Math.min(i.getX() - r.getX(), r.getRight() - i.getRight())), i.getY() <= r.getY() && i.getBottom() >= r.getBottom() ? a[1] += Math.min(r.getY() - i.getY(), i.getBottom() - r.getBottom()) : r.getY() <= i.getY() && r.getBottom() >= i.getBottom() && (a[1] += Math.min(i.getY() - r.getY(), r.getBottom() - i.getBottom()));
              var y = Math.abs((r.getCenterY() - i.getCenterY()) / (r.getCenterX() - i.getCenterX()));
              r.getCenterY() === i.getCenterY() && r.getCenterX() === i.getCenterX() && (y = 1);
              var t = y * a[0], h = a[1] / y;
              a[0] < h ? h = a[0] : t = a[1], a[0] = -1 * o[0] * (h / 2 + f), a[1] = -1 * o[1] * (t / 2 + f);
            }, n.decideDirectionsForOverlappingNodes = function(i, r, a) {
              i.getCenterX() < r.getCenterX() ? a[0] = -1 : a[0] = 1, i.getCenterY() < r.getCenterY() ? a[1] = -1 : a[1] = 1;
            }, n.getIntersection2 = function(i, r, a) {
              var f = i.getCenterX(), o = i.getCenterY(), y = r.getCenterX(), t = r.getCenterY();
              if (i.intersects(r))
                return a[0] = f, a[1] = o, a[2] = y, a[3] = t, !0;
              var h = i.getX(), s = i.getY(), g = i.getRight(), u = i.getX(), N = i.getBottom(), v = i.getRight(), T = i.getWidthHalf(), m = i.getHeightHalf(), R = r.getX(), b = r.getY(), I = r.getRight(), z = r.getX(), H = r.getBottom(), J = r.getRight(), w = r.getWidthHalf(), ht = r.getHeightHalf(), e = !1, E = !1;
              if (f === y) {
                if (o > t)
                  return a[0] = f, a[1] = s, a[2] = y, a[3] = H, !1;
                if (o < t)
                  return a[0] = f, a[1] = N, a[2] = y, a[3] = b, !1;
              } else if (o === t) {
                if (f > y)
                  return a[0] = h, a[1] = o, a[2] = I, a[3] = t, !1;
                if (f < y)
                  return a[0] = g, a[1] = o, a[2] = R, a[3] = t, !1;
              } else {
                var l = i.height / i.width, d = r.height / r.width, p = (t - o) / (y - f), A = void 0, M = void 0, O = void 0, S = void 0, D = void 0, q = void 0;
                if (-l === p ? f > y ? (a[0] = u, a[1] = N, e = !0) : (a[0] = g, a[1] = s, e = !0) : l === p && (f > y ? (a[0] = h, a[1] = s, e = !0) : (a[0] = v, a[1] = N, e = !0)), -d === p ? y > f ? (a[2] = z, a[3] = H, E = !0) : (a[2] = I, a[3] = b, E = !0) : d === p && (y > f ? (a[2] = R, a[3] = b, E = !0) : (a[2] = J, a[3] = H, E = !0)), e && E)
                  return !1;
                if (f > y ? o > t ? (A = this.getCardinalDirection(l, p, 4), M = this.getCardinalDirection(d, p, 2)) : (A = this.getCardinalDirection(-l, p, 3), M = this.getCardinalDirection(-d, p, 1)) : o > t ? (A = this.getCardinalDirection(-l, p, 1), M = this.getCardinalDirection(-d, p, 3)) : (A = this.getCardinalDirection(l, p, 2), M = this.getCardinalDirection(d, p, 4)), !e)
                  switch (A) {
                    case 1:
                      S = s, O = f + -m / p, a[0] = O, a[1] = S;
                      break;
                    case 2:
                      O = v, S = o + T * p, a[0] = O, a[1] = S;
                      break;
                    case 3:
                      S = N, O = f + m / p, a[0] = O, a[1] = S;
                      break;
                    case 4:
                      O = u, S = o + -T * p, a[0] = O, a[1] = S;
                      break;
                  }
                if (!E)
                  switch (M) {
                    case 1:
                      q = b, D = y + -ht / p, a[2] = D, a[3] = q;
                      break;
                    case 2:
                      D = J, q = t + w * p, a[2] = D, a[3] = q;
                      break;
                    case 3:
                      q = H, D = y + ht / p, a[2] = D, a[3] = q;
                      break;
                    case 4:
                      D = z, q = t + -w * p, a[2] = D, a[3] = q;
                      break;
                  }
              }
              return !1;
            }, n.getCardinalDirection = function(i, r, a) {
              return i > r ? a : 1 + a % 4;
            }, n.getIntersection = function(i, r, a, f) {
              if (f == null)
                return this.getIntersection2(i, r, a);
              var o = i.x, y = i.y, t = r.x, h = r.y, s = a.x, g = a.y, u = f.x, N = f.y, v = void 0, T = void 0, m = void 0, R = void 0, b = void 0, I = void 0, z = void 0, H = void 0, J = void 0;
              return m = h - y, b = o - t, z = t * y - o * h, R = N - g, I = s - u, H = u * g - s * N, J = m * I - R * b, J === 0 ? null : (v = (b * H - I * z) / J, T = (R * z - m * H) / J, new c(v, T));
            }, n.angleOfVector = function(i, r, a, f) {
              var o = void 0;
              return i !== a ? (o = Math.atan((f - r) / (a - i)), a < i ? o += Math.PI : f < r && (o += this.TWO_PI)) : f < r ? o = this.ONE_AND_HALF_PI : o = this.HALF_PI, o;
            }, n.doIntersect = function(i, r, a, f) {
              var o = i.x, y = i.y, t = r.x, h = r.y, s = a.x, g = a.y, u = f.x, N = f.y, v = (t - o) * (N - g) - (u - s) * (h - y);
              if (v === 0)
                return !1;
              var T = ((N - g) * (u - o) + (s - u) * (N - y)) / v, m = ((y - h) * (u - o) + (t - o) * (N - y)) / v;
              return 0 < T && T < 1 && 0 < m && m < 1;
            }, n.findCircleLineIntersections = function(i, r, a, f, o, y, t) {
              var h = (a - i) * (a - i) + (f - r) * (f - r), s = 2 * ((i - o) * (a - i) + (r - y) * (f - r)), g = (i - o) * (i - o) + (r - y) * (r - y) - t * t, u = s * s - 4 * h * g;
              if (u >= 0) {
                var N = (-s + Math.sqrt(s * s - 4 * h * g)) / (2 * h), v = (-s - Math.sqrt(s * s - 4 * h * g)) / (2 * h), T = null;
                return N >= 0 && N <= 1 ? [N] : v >= 0 && v <= 1 ? [v] : T;
              } else
                return null;
            }, n.HALF_PI = 0.5 * Math.PI, n.ONE_AND_HALF_PI = 1.5 * Math.PI, n.TWO_PI = 2 * Math.PI, n.THREE_PI = 3 * Math.PI, L.exports = n;
          },
          /* 9 */
          /***/
          function(L, U, C) {
            function c() {
            }
            c.sign = function(n) {
              return n > 0 ? 1 : n < 0 ? -1 : 0;
            }, c.floor = function(n) {
              return n < 0 ? Math.ceil(n) : Math.floor(n);
            }, c.ceil = function(n) {
              return n < 0 ? Math.floor(n) : Math.ceil(n);
            }, L.exports = c;
          },
          /* 10 */
          /***/
          function(L, U, C) {
            function c() {
            }
            c.MAX_VALUE = 2147483647, c.MIN_VALUE = -2147483648, L.exports = c;
          },
          /* 11 */
          /***/
          function(L, U, C) {
            var c = /* @__PURE__ */ function() {
              function o(y, t) {
                for (var h = 0; h < t.length; h++) {
                  var s = t[h];
                  s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(y, s.key, s);
                }
              }
              return function(y, t, h) {
                return t && o(y.prototype, t), h && o(y, h), y;
              };
            }();
            function n(o, y) {
              if (!(o instanceof y))
                throw new TypeError("Cannot call a class as a function");
            }
            var i = function(y) {
              return { value: y, next: null, prev: null };
            }, r = function(y, t, h, s) {
              return y !== null ? y.next = t : s.head = t, h !== null ? h.prev = t : s.tail = t, t.prev = y, t.next = h, s.length++, t;
            }, a = function(y, t) {
              var h = y.prev, s = y.next;
              return h !== null ? h.next = s : t.head = s, s !== null ? s.prev = h : t.tail = h, y.prev = y.next = null, t.length--, y;
            }, f = function() {
              function o(y) {
                var t = this;
                n(this, o), this.length = 0, this.head = null, this.tail = null, y != null && y.forEach(function(h) {
                  return t.push(h);
                });
              }
              return c(o, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(t, h) {
                  return r(h.prev, i(t), h, this);
                }
              }, {
                key: "insertAfter",
                value: function(t, h) {
                  return r(h, i(t), h.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(t, h) {
                  return r(h.prev, t, h, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(t, h) {
                  return r(h, t, h.next, this);
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
                  return a(t, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return a(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return a(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return a(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return a(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(t) {
                  if (t <= this.length()) {
                    for (var h = 1, s = this.head; h < t; )
                      s = s.next, h++;
                    return s.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(t, h) {
                  if (t <= this.length()) {
                    for (var s = 1, g = this.head; s < t; )
                      g = g.next, s++;
                    g.value = h;
                  }
                }
              }]), o;
            }();
            L.exports = f;
          },
          /* 12 */
          /***/
          function(L, U, C) {
            function c(n, i, r) {
              this.x = null, this.y = null, n == null && i == null && r == null ? (this.x = 0, this.y = 0) : typeof n == "number" && typeof i == "number" && r == null ? (this.x = n, this.y = i) : n.constructor.name == "Point" && i == null && r == null && (r = n, this.x = r.x, this.y = r.y);
            }
            c.prototype.getX = function() {
              return this.x;
            }, c.prototype.getY = function() {
              return this.y;
            }, c.prototype.getLocation = function() {
              return new c(this.x, this.y);
            }, c.prototype.setLocation = function(n, i, r) {
              n.constructor.name == "Point" && i == null && r == null ? (r = n, this.setLocation(r.x, r.y)) : typeof n == "number" && typeof i == "number" && r == null && (parseInt(n) == n && parseInt(i) == i ? this.move(n, i) : (this.x = Math.floor(n + 0.5), this.y = Math.floor(i + 0.5)));
            }, c.prototype.move = function(n, i) {
              this.x = n, this.y = i;
            }, c.prototype.translate = function(n, i) {
              this.x += n, this.y += i;
            }, c.prototype.equals = function(n) {
              if (n.constructor.name == "Point") {
                var i = n;
                return this.x == i.x && this.y == i.y;
              }
              return this == n;
            }, c.prototype.toString = function() {
              return new c().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, L.exports = c;
          },
          /* 13 */
          /***/
          function(L, U, C) {
            function c(n, i, r, a) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, n != null && i != null && r != null && a != null && (this.x = n, this.y = i, this.width = r, this.height = a);
            }
            c.prototype.getX = function() {
              return this.x;
            }, c.prototype.setX = function(n) {
              this.x = n;
            }, c.prototype.getY = function() {
              return this.y;
            }, c.prototype.setY = function(n) {
              this.y = n;
            }, c.prototype.getWidth = function() {
              return this.width;
            }, c.prototype.setWidth = function(n) {
              this.width = n;
            }, c.prototype.getHeight = function() {
              return this.height;
            }, c.prototype.setHeight = function(n) {
              this.height = n;
            }, c.prototype.getRight = function() {
              return this.x + this.width;
            }, c.prototype.getBottom = function() {
              return this.y + this.height;
            }, c.prototype.intersects = function(n) {
              return !(this.getRight() < n.x || this.getBottom() < n.y || n.getRight() < this.x || n.getBottom() < this.y);
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
            }, L.exports = c;
          },
          /* 14 */
          /***/
          function(L, U, C) {
            var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
              return typeof i;
            } : function(i) {
              return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
            };
            function n() {
            }
            n.lastID = 0, n.createID = function(i) {
              return n.isPrimitive(i) ? i : (i.uniqueID != null || (i.uniqueID = n.getString(), n.lastID++), i.uniqueID);
            }, n.getString = function(i) {
              return i == null && (i = n.lastID), "Object#" + i;
            }, n.isPrimitive = function(i) {
              var r = typeof i > "u" ? "undefined" : c(i);
              return i == null || r != "object" && r != "function";
            }, L.exports = n;
          },
          /* 15 */
          /***/
          function(L, U, C) {
            function c(s) {
              if (Array.isArray(s)) {
                for (var g = 0, u = Array(s.length); g < s.length; g++)
                  u[g] = s[g];
                return u;
              } else
                return Array.from(s);
            }
            var n = C(0), i = C(7), r = C(3), a = C(1), f = C(6), o = C(5), y = C(17), t = C(29);
            function h(s) {
              t.call(this), this.layoutQuality = n.QUALITY, this.createBendsAsNeeded = n.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = n.DEFAULT_INCREMENTAL, this.animationOnLayout = n.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = n.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = n.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = n.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new i(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, s != null && (this.isRemoteUse = s);
            }
            h.RANDOM_SEED = 1, h.prototype = Object.create(t.prototype), h.prototype.getGraphManager = function() {
              return this.graphManager;
            }, h.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, h.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, h.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, h.prototype.newGraphManager = function() {
              var s = new i(this);
              return this.graphManager = s, s;
            }, h.prototype.newGraph = function(s) {
              return new f(null, this.graphManager, s);
            }, h.prototype.newNode = function(s) {
              return new r(this.graphManager, s);
            }, h.prototype.newEdge = function(s) {
              return new a(null, null, s);
            }, h.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, h.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var s;
              return this.checkLayoutSuccess() ? s = !1 : s = this.layout(), n.ANIMATE === "during" ? !1 : (s && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, s);
            }, h.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, h.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var s = this.graphManager.getAllEdges(), g = 0; g < s.length; g++)
                  s[g];
                for (var u = this.graphManager.getRoot().getNodes(), g = 0; g < u.length; g++)
                  u[g];
                this.update(this.graphManager.getRoot());
              }
            }, h.prototype.update = function(s) {
              if (s == null)
                this.update2();
              else if (s instanceof r) {
                var g = s;
                if (g.getChild() != null)
                  for (var u = g.getChild().getNodes(), N = 0; N < u.length; N++)
                    update(u[N]);
                if (g.vGraphObject != null) {
                  var v = g.vGraphObject;
                  v.update(g);
                }
              } else if (s instanceof a) {
                var T = s;
                if (T.vGraphObject != null) {
                  var m = T.vGraphObject;
                  m.update(T);
                }
              } else if (s instanceof f) {
                var R = s;
                if (R.vGraphObject != null) {
                  var b = R.vGraphObject;
                  b.update(R);
                }
              }
            }, h.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = n.QUALITY, this.animationDuringLayout = n.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = n.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = n.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = n.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = n.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = n.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, h.prototype.transform = function(s) {
              if (s == null)
                this.transform(new o(0, 0));
              else {
                var g = new y(), u = this.graphManager.getRoot().updateLeftTop();
                if (u != null) {
                  g.setWorldOrgX(s.x), g.setWorldOrgY(s.y), g.setDeviceOrgX(u.x), g.setDeviceOrgY(u.y);
                  for (var N = this.getAllNodes(), v, T = 0; T < N.length; T++)
                    v = N[T], v.transform(g);
                }
              }
            }, h.prototype.positionNodesRandomly = function(s) {
              if (s == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var g, u, N = s.getNodes(), v = 0; v < N.length; v++)
                  g = N[v], u = g.getChild(), u == null || u.getNodes().length == 0 ? g.scatter() : (this.positionNodesRandomly(u), g.updateBounds());
            }, h.prototype.getFlatForest = function() {
              for (var s = [], g = !0, u = this.graphManager.getRoot().getNodes(), N = !0, v = 0; v < u.length; v++)
                u[v].getChild() != null && (N = !1);
              if (!N)
                return s;
              var T = /* @__PURE__ */ new Set(), m = [], R = /* @__PURE__ */ new Map(), b = [];
              for (b = b.concat(u); b.length > 0 && g; ) {
                for (m.push(b[0]); m.length > 0 && g; ) {
                  var I = m[0];
                  m.splice(0, 1), T.add(I);
                  for (var z = I.getEdges(), v = 0; v < z.length; v++) {
                    var H = z[v].getOtherEnd(I);
                    if (R.get(I) != H)
                      if (!T.has(H))
                        m.push(H), R.set(H, I);
                      else {
                        g = !1;
                        break;
                      }
                  }
                }
                if (!g)
                  s = [];
                else {
                  var J = [].concat(c(T));
                  s.push(J);
                  for (var v = 0; v < J.length; v++) {
                    var w = J[v], ht = b.indexOf(w);
                    ht > -1 && b.splice(ht, 1);
                  }
                  T = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map();
                }
              }
              return s;
            }, h.prototype.createDummyNodesForBendpoints = function(s) {
              for (var g = [], u = s.source, N = this.graphManager.calcLowestCommonAncestor(s.source, s.target), v = 0; v < s.bendpoints.length; v++) {
                var T = this.newNode(null);
                T.setRect(new Point(0, 0), new Dimension(1, 1)), N.add(T);
                var m = this.newEdge(null);
                this.graphManager.add(m, u, T), g.add(T), u = T;
              }
              var m = this.newEdge(null);
              return this.graphManager.add(m, u, s.target), this.edgeToDummyNodes.set(s, g), s.isInterGraph() ? this.graphManager.remove(s) : N.remove(s), g;
            }, h.prototype.createBendpointsFromDummyNodes = function() {
              var s = [];
              s = s.concat(this.graphManager.getAllEdges()), s = [].concat(c(this.edgeToDummyNodes.keys())).concat(s);
              for (var g = 0; g < s.length; g++) {
                var u = s[g];
                if (u.bendpoints.length > 0) {
                  for (var N = this.edgeToDummyNodes.get(u), v = 0; v < N.length; v++) {
                    var T = N[v], m = new o(T.getCenterX(), T.getCenterY()), R = u.bendpoints.get(v);
                    R.x = m.x, R.y = m.y, T.getOwner().remove(T);
                  }
                  this.graphManager.add(u, u.source, u.target);
                }
              }
            }, h.transform = function(s, g, u, N) {
              if (u != null && N != null) {
                var v = g;
                if (s <= 50) {
                  var T = g / u;
                  v -= (g - T) / 50 * (50 - s);
                } else {
                  var m = g * N;
                  v += (m - g) / 50 * (s - 50);
                }
                return v;
              } else {
                var R, b;
                return s <= 50 ? (R = 9 * g / 500, b = g / 10) : (R = 9 * g / 50, b = -8 * g), R * s + b;
              }
            }, h.findCenterOfTree = function(s) {
              var g = [];
              g = g.concat(s);
              var u = [], N = /* @__PURE__ */ new Map(), v = !1, T = null;
              (g.length == 1 || g.length == 2) && (v = !0, T = g[0]);
              for (var m = 0; m < g.length; m++) {
                var R = g[m], b = R.getNeighborsList().size;
                N.set(R, R.getNeighborsList().size), b == 1 && u.push(R);
              }
              var I = [];
              for (I = I.concat(u); !v; ) {
                var z = [];
                z = z.concat(I), I = [];
                for (var m = 0; m < g.length; m++) {
                  var R = g[m], H = g.indexOf(R);
                  H >= 0 && g.splice(H, 1);
                  var J = R.getNeighborsList();
                  J.forEach(function(e) {
                    if (u.indexOf(e) < 0) {
                      var E = N.get(e), l = E - 1;
                      l == 1 && I.push(e), N.set(e, l);
                    }
                  });
                }
                u = u.concat(I), (g.length == 1 || g.length == 2) && (v = !0, T = g[0]);
              }
              return T;
            }, h.prototype.setGraphManager = function(s) {
              this.graphManager = s;
            }, L.exports = h;
          },
          /* 16 */
          /***/
          function(L, U, C) {
            function c() {
            }
            c.seed = 1, c.x = 0, c.nextDouble = function() {
              return c.x = Math.sin(c.seed++) * 1e4, c.x - Math.floor(c.x);
            }, L.exports = c;
          },
          /* 17 */
          /***/
          function(L, U, C) {
            var c = C(5);
            function n(i, r) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            n.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, n.prototype.setWorldOrgX = function(i) {
              this.lworldOrgX = i;
            }, n.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, n.prototype.setWorldOrgY = function(i) {
              this.lworldOrgY = i;
            }, n.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, n.prototype.setWorldExtX = function(i) {
              this.lworldExtX = i;
            }, n.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, n.prototype.setWorldExtY = function(i) {
              this.lworldExtY = i;
            }, n.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, n.prototype.setDeviceOrgX = function(i) {
              this.ldeviceOrgX = i;
            }, n.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, n.prototype.setDeviceOrgY = function(i) {
              this.ldeviceOrgY = i;
            }, n.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, n.prototype.setDeviceExtX = function(i) {
              this.ldeviceExtX = i;
            }, n.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, n.prototype.setDeviceExtY = function(i) {
              this.ldeviceExtY = i;
            }, n.prototype.transformX = function(i) {
              var r = 0, a = this.lworldExtX;
              return a != 0 && (r = this.ldeviceOrgX + (i - this.lworldOrgX) * this.ldeviceExtX / a), r;
            }, n.prototype.transformY = function(i) {
              var r = 0, a = this.lworldExtY;
              return a != 0 && (r = this.ldeviceOrgY + (i - this.lworldOrgY) * this.ldeviceExtY / a), r;
            }, n.prototype.inverseTransformX = function(i) {
              var r = 0, a = this.ldeviceExtX;
              return a != 0 && (r = this.lworldOrgX + (i - this.ldeviceOrgX) * this.lworldExtX / a), r;
            }, n.prototype.inverseTransformY = function(i) {
              var r = 0, a = this.ldeviceExtY;
              return a != 0 && (r = this.lworldOrgY + (i - this.ldeviceOrgY) * this.lworldExtY / a), r;
            }, n.prototype.inverseTransformPoint = function(i) {
              var r = new c(this.inverseTransformX(i.x), this.inverseTransformY(i.y));
              return r;
            }, L.exports = n;
          },
          /* 18 */
          /***/
          function(L, U, C) {
            function c(t) {
              if (Array.isArray(t)) {
                for (var h = 0, s = Array(t.length); h < t.length; h++)
                  s[h] = t[h];
                return s;
              } else
                return Array.from(t);
            }
            var n = C(15), i = C(4), r = C(0), a = C(8), f = C(9);
            function o() {
              n.call(this), this.useSmartIdealEdgeLengthCalculation = i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = i.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = i.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = i.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * i.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = i.MAX_ITERATIONS;
            }
            o.prototype = Object.create(n.prototype);
            for (var y in n)
              o[y] = n[y];
            o.prototype.initParameters = function() {
              n.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, o.prototype.calcIdealEdgeLengths = function() {
              for (var t, h, s, g, u, N, v, T = this.getGraphManager().getAllEdges(), m = 0; m < T.length; m++)
                t = T[m], h = t.idealLength, t.isInterGraph && (g = t.getSource(), u = t.getTarget(), N = t.getSourceInLca().getEstimatedSize(), v = t.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t.idealLength += N + v - 2 * r.SIMPLE_NODE_SIZE), s = t.getLca().getInclusionTreeDepth(), t.idealLength += h * i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (g.getInclusionTreeDepth() + u.getInclusionTreeDepth() - 2 * s));
            }, o.prototype.initSpringEmbedder = function() {
              var t = this.getAllNodes().length;
              this.incremental ? (t > i.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * i.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - i.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t > i.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(i.COOLING_ADAPTATION_FACTOR, 1 - (t - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT) * (1 - i.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * i.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, o.prototype.calcSpringForces = function() {
              for (var t = this.getAllEdges(), h, s = 0; s < t.length; s++)
                h = t[s], this.calcSpringForce(h, h.idealLength);
            }, o.prototype.calcRepulsionForces = function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s, g, u, N, v = this.getAllNodes(), T;
              if (this.useFRGridVariant)
                for (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && t && this.updateGrid(), T = /* @__PURE__ */ new Set(), s = 0; s < v.length; s++)
                  u = v[s], this.calculateRepulsionForceOfANode(u, T, t, h), T.add(u);
              else
                for (s = 0; s < v.length; s++)
                  for (u = v[s], g = s + 1; g < v.length; g++)
                    N = v[g], u.getOwner() == N.getOwner() && this.calcRepulsionForce(u, N);
            }, o.prototype.calcGravitationalForces = function() {
              for (var t, h = this.getAllNodesToApplyGravitation(), s = 0; s < h.length; s++)
                t = h[s], this.calcGravitationalForce(t);
            }, o.prototype.moveNodes = function() {
              for (var t = this.getAllNodes(), h, s = 0; s < t.length; s++)
                h = t[s], h.move();
            }, o.prototype.calcSpringForce = function(t, h) {
              var s = t.getSource(), g = t.getTarget(), u, N, v, T;
              if (this.uniformLeafNodeSizes && s.getChild() == null && g.getChild() == null)
                t.updateLengthSimple();
              else if (t.updateLength(), t.isOverlapingSourceAndTarget)
                return;
              u = t.getLength(), u != 0 && (N = t.edgeElasticity * (u - h), v = N * (t.lengthX / u), T = N * (t.lengthY / u), s.springForceX += v, s.springForceY += T, g.springForceX -= v, g.springForceY -= T);
            }, o.prototype.calcRepulsionForce = function(t, h) {
              var s = t.getRect(), g = h.getRect(), u = new Array(2), N = new Array(4), v, T, m, R, b, I, z;
              if (s.intersects(g)) {
                a.calcSeparationAmount(s, g, u, i.DEFAULT_EDGE_LENGTH / 2), I = 2 * u[0], z = 2 * u[1];
                var H = t.noOfChildren * h.noOfChildren / (t.noOfChildren + h.noOfChildren);
                t.repulsionForceX -= H * I, t.repulsionForceY -= H * z, h.repulsionForceX += H * I, h.repulsionForceY += H * z;
              } else
                this.uniformLeafNodeSizes && t.getChild() == null && h.getChild() == null ? (v = g.getCenterX() - s.getCenterX(), T = g.getCenterY() - s.getCenterY()) : (a.getIntersection(s, g, N), v = N[2] - N[0], T = N[3] - N[1]), Math.abs(v) < i.MIN_REPULSION_DIST && (v = f.sign(v) * i.MIN_REPULSION_DIST), Math.abs(T) < i.MIN_REPULSION_DIST && (T = f.sign(T) * i.MIN_REPULSION_DIST), m = v * v + T * T, R = Math.sqrt(m), b = (t.nodeRepulsion / 2 + h.nodeRepulsion / 2) * t.noOfChildren * h.noOfChildren / m, I = b * v / R, z = b * T / R, t.repulsionForceX -= I, t.repulsionForceY -= z, h.repulsionForceX += I, h.repulsionForceY += z;
            }, o.prototype.calcGravitationalForce = function(t) {
              var h, s, g, u, N, v, T, m;
              h = t.getOwner(), s = (h.getRight() + h.getLeft()) / 2, g = (h.getTop() + h.getBottom()) / 2, u = t.getCenterX() - s, N = t.getCenterY() - g, v = Math.abs(u) + t.getWidth() / 2, T = Math.abs(N) + t.getHeight() / 2, t.getOwner() == this.graphManager.getRoot() ? (m = h.getEstimatedSize() * this.gravityRangeFactor, (v > m || T > m) && (t.gravitationForceX = -this.gravityConstant * u, t.gravitationForceY = -this.gravityConstant * N)) : (m = h.getEstimatedSize() * this.compoundGravityRangeFactor, (v > m || T > m) && (t.gravitationForceX = -this.gravityConstant * u * this.compoundGravityConstant, t.gravitationForceY = -this.gravityConstant * N * this.compoundGravityConstant));
            }, o.prototype.isConverged = function() {
              var t, h = !1;
              return this.totalIterations > this.maxIterations / 3 && (h = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t || h;
            }, o.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, o.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var t, h = this.graphManager.getAllNodes(), s = 0; s < h.length; s++)
                t = h[s], t.noOfChildren = t.getNoOfChildren();
            }, o.prototype.calcGrid = function(t) {
              var h = 0, s = 0;
              h = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange)), s = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
              for (var g = new Array(h), u = 0; u < h; u++)
                g[u] = new Array(s);
              for (var u = 0; u < h; u++)
                for (var N = 0; N < s; N++)
                  g[u][N] = new Array();
              return g;
            }, o.prototype.addNodeToGrid = function(t, h, s) {
              var g = 0, u = 0, N = 0, v = 0;
              g = parseInt(Math.floor((t.getRect().x - h) / this.repulsionRange)), u = parseInt(Math.floor((t.getRect().width + t.getRect().x - h) / this.repulsionRange)), N = parseInt(Math.floor((t.getRect().y - s) / this.repulsionRange)), v = parseInt(Math.floor((t.getRect().height + t.getRect().y - s) / this.repulsionRange));
              for (var T = g; T <= u; T++)
                for (var m = N; m <= v; m++)
                  this.grid[T][m].push(t), t.setGridCoordinates(g, u, N, v);
            }, o.prototype.updateGrid = function() {
              var t, h, s = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0; t < s.length; t++)
                h = s[t], this.addNodeToGrid(h, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, o.prototype.calculateRepulsionForceOfANode = function(t, h, s, g) {
              if (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && s || g) {
                var u = /* @__PURE__ */ new Set();
                t.surrounding = new Array();
                for (var N, v = this.grid, T = t.startX - 1; T < t.finishX + 2; T++)
                  for (var m = t.startY - 1; m < t.finishY + 2; m++)
                    if (!(T < 0 || m < 0 || T >= v.length || m >= v[0].length)) {
                      for (var R = 0; R < v[T][m].length; R++)
                        if (N = v[T][m][R], !(t.getOwner() != N.getOwner() || t == N) && !h.has(N) && !u.has(N)) {
                          var b = Math.abs(t.getCenterX() - N.getCenterX()) - (t.getWidth() / 2 + N.getWidth() / 2), I = Math.abs(t.getCenterY() - N.getCenterY()) - (t.getHeight() / 2 + N.getHeight() / 2);
                          b <= this.repulsionRange && I <= this.repulsionRange && u.add(N);
                        }
                    }
                t.surrounding = [].concat(c(u));
              }
              for (T = 0; T < t.surrounding.length; T++)
                this.calcRepulsionForce(t, t.surrounding[T]);
            }, o.prototype.calcRepulsionRange = function() {
              return 0;
            }, L.exports = o;
          },
          /* 19 */
          /***/
          function(L, U, C) {
            var c = C(1), n = C(4);
            function i(a, f, o) {
              c.call(this, a, f, o), this.idealLength = n.DEFAULT_EDGE_LENGTH, this.edgeElasticity = n.DEFAULT_SPRING_STRENGTH;
            }
            i.prototype = Object.create(c.prototype);
            for (var r in c)
              i[r] = c[r];
            L.exports = i;
          },
          /* 20 */
          /***/
          function(L, U, C) {
            var c = C(3), n = C(4);
            function i(a, f, o, y) {
              c.call(this, a, f, o, y), this.nodeRepulsion = n.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            i.prototype = Object.create(c.prototype);
            for (var r in c)
              i[r] = c[r];
            i.prototype.setGridCoordinates = function(a, f, o, y) {
              this.startX = a, this.finishX = f, this.startY = o, this.finishY = y;
            }, L.exports = i;
          },
          /* 21 */
          /***/
          function(L, U, C) {
            function c(n, i) {
              this.width = 0, this.height = 0, n !== null && i !== null && (this.height = i, this.width = n);
            }
            c.prototype.getWidth = function() {
              return this.width;
            }, c.prototype.setWidth = function(n) {
              this.width = n;
            }, c.prototype.getHeight = function() {
              return this.height;
            }, c.prototype.setHeight = function(n) {
              this.height = n;
            }, L.exports = c;
          },
          /* 22 */
          /***/
          function(L, U, C) {
            var c = C(14);
            function n() {
              this.map = {}, this.keys = [];
            }
            n.prototype.put = function(i, r) {
              var a = c.createID(i);
              this.contains(a) || (this.map[a] = r, this.keys.push(i));
            }, n.prototype.contains = function(i) {
              return c.createID(i), this.map[i] != null;
            }, n.prototype.get = function(i) {
              var r = c.createID(i);
              return this.map[r];
            }, n.prototype.keySet = function() {
              return this.keys;
            }, L.exports = n;
          },
          /* 23 */
          /***/
          function(L, U, C) {
            var c = C(14);
            function n() {
              this.set = {};
            }
            n.prototype.add = function(i) {
              var r = c.createID(i);
              this.contains(r) || (this.set[r] = i);
            }, n.prototype.remove = function(i) {
              delete this.set[c.createID(i)];
            }, n.prototype.clear = function() {
              this.set = {};
            }, n.prototype.contains = function(i) {
              return this.set[c.createID(i)] == i;
            }, n.prototype.isEmpty = function() {
              return this.size() === 0;
            }, n.prototype.size = function() {
              return Object.keys(this.set).length;
            }, n.prototype.addAllTo = function(i) {
              for (var r = Object.keys(this.set), a = r.length, f = 0; f < a; f++)
                i.push(this.set[r[f]]);
            }, n.prototype.size = function() {
              return Object.keys(this.set).length;
            }, n.prototype.addAll = function(i) {
              for (var r = i.length, a = 0; a < r; a++) {
                var f = i[a];
                this.add(f);
              }
            }, L.exports = n;
          },
          /* 24 */
          /***/
          function(L, U, C) {
            function c() {
            }
            c.multMat = function(n, i) {
              for (var r = [], a = 0; a < n.length; a++) {
                r[a] = [];
                for (var f = 0; f < i[0].length; f++) {
                  r[a][f] = 0;
                  for (var o = 0; o < n[0].length; o++)
                    r[a][f] += n[a][o] * i[o][f];
                }
              }
              return r;
            }, c.transpose = function(n) {
              for (var i = [], r = 0; r < n[0].length; r++) {
                i[r] = [];
                for (var a = 0; a < n.length; a++)
                  i[r][a] = n[a][r];
              }
              return i;
            }, c.multCons = function(n, i) {
              for (var r = [], a = 0; a < n.length; a++)
                r[a] = n[a] * i;
              return r;
            }, c.minusOp = function(n, i) {
              for (var r = [], a = 0; a < n.length; a++)
                r[a] = n[a] - i[a];
              return r;
            }, c.dotProduct = function(n, i) {
              for (var r = 0, a = 0; a < n.length; a++)
                r += n[a] * i[a];
              return r;
            }, c.mag = function(n) {
              return Math.sqrt(this.dotProduct(n, n));
            }, c.normalize = function(n) {
              for (var i = [], r = this.mag(n), a = 0; a < n.length; a++)
                i[a] = n[a] / r;
              return i;
            }, c.multGamma = function(n) {
              for (var i = [], r = 0, a = 0; a < n.length; a++)
                r += n[a];
              r *= -1 / n.length;
              for (var f = 0; f < n.length; f++)
                i[f] = r + n[f];
              return i;
            }, c.multL = function(n, i, r) {
              for (var a = [], f = [], o = [], y = 0; y < i[0].length; y++) {
                for (var t = 0, h = 0; h < i.length; h++)
                  t += -0.5 * i[h][y] * n[h];
                f[y] = t;
              }
              for (var s = 0; s < r.length; s++) {
                for (var g = 0, u = 0; u < r.length; u++)
                  g += r[s][u] * f[u];
                o[s] = g;
              }
              for (var N = 0; N < i.length; N++) {
                for (var v = 0, T = 0; T < i[0].length; T++)
                  v += i[N][T] * o[T];
                a[N] = v;
              }
              return a;
            }, L.exports = c;
          },
          /* 25 */
          /***/
          function(L, U, C) {
            var c = /* @__PURE__ */ function() {
              function a(f, o) {
                for (var y = 0; y < o.length; y++) {
                  var t = o[y];
                  t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(f, t.key, t);
                }
              }
              return function(f, o, y) {
                return o && a(f.prototype, o), y && a(f, y), f;
              };
            }();
            function n(a, f) {
              if (!(a instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var i = C(11), r = function() {
              function a(f, o) {
                n(this, a), (o !== null || o !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var y = void 0;
                f instanceof i ? y = f.size() : y = f.length, this._quicksort(f, 0, y - 1);
              }
              return c(a, [{
                key: "_quicksort",
                value: function(o, y, t) {
                  if (y < t) {
                    var h = this._partition(o, y, t);
                    this._quicksort(o, y, h), this._quicksort(o, h + 1, t);
                  }
                }
              }, {
                key: "_partition",
                value: function(o, y, t) {
                  for (var h = this._get(o, y), s = y, g = t; ; ) {
                    for (; this.compareFunction(h, this._get(o, g)); )
                      g--;
                    for (; this.compareFunction(this._get(o, s), h); )
                      s++;
                    if (s < g)
                      this._swap(o, s, g), s++, g--;
                    else
                      return g;
                  }
                }
              }, {
                key: "_get",
                value: function(o, y) {
                  return o instanceof i ? o.get_object_at(y) : o[y];
                }
              }, {
                key: "_set",
                value: function(o, y, t) {
                  o instanceof i ? o.set_object_at(y, t) : o[y] = t;
                }
              }, {
                key: "_swap",
                value: function(o, y, t) {
                  var h = this._get(o, y);
                  this._set(o, y, this._get(o, t)), this._set(o, t, h);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(o, y) {
                  return y > o;
                }
              }]), a;
            }();
            L.exports = r;
          },
          /* 26 */
          /***/
          function(L, U, C) {
            function c() {
            }
            c.svd = function(n) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = n.length, this.n = n[0].length;
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
              }(this.n), a = function(lt) {
                for (var ut = []; lt-- > 0; )
                  ut.push(0);
                return ut;
              }(this.m), f = !0, o = Math.min(this.m - 1, this.n), y = Math.max(0, Math.min(this.n - 2, this.m)), t = 0; t < Math.max(o, y); t++) {
                if (t < o) {
                  this.s[t] = 0;
                  for (var h = t; h < this.m; h++)
                    this.s[t] = c.hypot(this.s[t], n[h][t]);
                  if (this.s[t] !== 0) {
                    n[t][t] < 0 && (this.s[t] = -this.s[t]);
                    for (var s = t; s < this.m; s++)
                      n[s][t] /= this.s[t];
                    n[t][t] += 1;
                  }
                  this.s[t] = -this.s[t];
                }
                for (var g = t + 1; g < this.n; g++) {
                  if (/* @__PURE__ */ function(lt, ut) {
                    return lt && ut;
                  }(t < o, this.s[t] !== 0)) {
                    for (var u = 0, N = t; N < this.m; N++)
                      u += n[N][t] * n[N][g];
                    u = -u / n[t][t];
                    for (var v = t; v < this.m; v++)
                      n[v][g] += u * n[v][t];
                  }
                  r[g] = n[t][g];
                }
                if (/* @__PURE__ */ function(lt, ut) {
                  return ut;
                }(f, t < o))
                  for (var T = t; T < this.m; T++)
                    this.U[T][t] = n[T][t];
                if (t < y) {
                  r[t] = 0;
                  for (var m = t + 1; m < this.n; m++)
                    r[t] = c.hypot(r[t], r[m]);
                  if (r[t] !== 0) {
                    r[t + 1] < 0 && (r[t] = -r[t]);
                    for (var R = t + 1; R < this.n; R++)
                      r[R] /= r[t];
                    r[t + 1] += 1;
                  }
                  if (r[t] = -r[t], /* @__PURE__ */ function(lt, ut) {
                    return lt && ut;
                  }(t + 1 < this.m, r[t] !== 0)) {
                    for (var b = t + 1; b < this.m; b++)
                      a[b] = 0;
                    for (var I = t + 1; I < this.n; I++)
                      for (var z = t + 1; z < this.m; z++)
                        a[z] += r[I] * n[z][I];
                    for (var H = t + 1; H < this.n; H++)
                      for (var J = -r[H] / r[t + 1], w = t + 1; w < this.m; w++)
                        n[w][H] += J * a[w];
                  }
                  for (var ht = t + 1; ht < this.n; ht++)
                    this.V[ht][t] = r[ht];
                }
              }
              var e = Math.min(this.n, this.m + 1);
              o < this.n && (this.s[o] = n[o][o]), this.m < e && (this.s[e - 1] = 0), y + 1 < e && (r[y] = n[y][e - 1]), r[e - 1] = 0;
              {
                for (var E = o; E < i; E++) {
                  for (var l = 0; l < this.m; l++)
                    this.U[l][E] = 0;
                  this.U[E][E] = 1;
                }
                for (var d = o - 1; d >= 0; d--)
                  if (this.s[d] !== 0) {
                    for (var p = d + 1; p < i; p++) {
                      for (var A = 0, M = d; M < this.m; M++)
                        A += this.U[M][d] * this.U[M][p];
                      A = -A / this.U[d][d];
                      for (var O = d; O < this.m; O++)
                        this.U[O][p] += A * this.U[O][d];
                    }
                    for (var S = d; S < this.m; S++)
                      this.U[S][d] = -this.U[S][d];
                    this.U[d][d] = 1 + this.U[d][d];
                    for (var D = 0; D < d - 1; D++)
                      this.U[D][d] = 0;
                  } else {
                    for (var q = 0; q < this.m; q++)
                      this.U[q][d] = 0;
                    this.U[d][d] = 1;
                  }
              }
              for (var G = this.n - 1; G >= 0; G--) {
                if (/* @__PURE__ */ function(lt, ut) {
                  return lt && ut;
                }(G < y, r[G] !== 0))
                  for (var Y = G + 1; Y < i; Y++) {
                    for (var $ = 0, B = G + 1; B < this.n; B++)
                      $ += this.V[B][G] * this.V[B][Y];
                    $ = -$ / this.V[G + 1][G];
                    for (var x = G + 1; x < this.n; x++)
                      this.V[x][Y] += $ * this.V[x][G];
                  }
                for (var X = 0; X < this.n; X++)
                  this.V[X][G] = 0;
                this.V[G][G] = 1;
              }
              for (var Q = e - 1, k = Math.pow(2, -52), ft = Math.pow(2, -966); e > 0; ) {
                var W = void 0, Ot = void 0;
                for (W = e - 2; W >= -1 && W !== -1; W--)
                  if (Math.abs(r[W]) <= ft + k * (Math.abs(this.s[W]) + Math.abs(this.s[W + 1]))) {
                    r[W] = 0;
                    break;
                  }
                if (W === e - 2)
                  Ot = 4;
                else {
                  var vt = void 0;
                  for (vt = e - 1; vt >= W && vt !== W; vt--) {
                    var $t = (vt !== e ? Math.abs(r[vt]) : 0) + (vt !== W + 1 ? Math.abs(r[vt - 1]) : 0);
                    if (Math.abs(this.s[vt]) <= ft + k * $t) {
                      this.s[vt] = 0;
                      break;
                    }
                  }
                  vt === W ? Ot = 3 : vt === e - 1 ? Ot = 1 : (Ot = 2, W = vt);
                }
                switch (W++, Ot) {
                  case 1:
                    {
                      var Vt = r[e - 2];
                      r[e - 2] = 0;
                      for (var Nt = e - 2; Nt >= W; Nt--) {
                        var Yt = c.hypot(this.s[Nt], Vt), Xt = this.s[Nt] / Yt, ie = Vt / Yt;
                        this.s[Nt] = Yt, Nt !== W && (Vt = -ie * r[Nt - 1], r[Nt - 1] = Xt * r[Nt - 1]);
                        for (var xt = 0; xt < this.n; xt++)
                          Yt = Xt * this.V[xt][Nt] + ie * this.V[xt][e - 1], this.V[xt][e - 1] = -ie * this.V[xt][Nt] + Xt * this.V[xt][e - 1], this.V[xt][Nt] = Yt;
                      }
                    }
                    break;
                  case 2:
                    {
                      var Jt = r[W - 1];
                      r[W - 1] = 0;
                      for (var Ft = W; Ft < e; Ft++) {
                        var zt = c.hypot(this.s[Ft], Jt), _t = this.s[Ft] / zt, ne = Jt / zt;
                        this.s[Ft] = zt, Jt = -ne * r[Ft], r[Ft] = _t * r[Ft];
                        for (var Pt = 0; Pt < this.m; Pt++)
                          zt = _t * this.U[Pt][Ft] + ne * this.U[Pt][W - 1], this.U[Pt][W - 1] = -ne * this.U[Pt][Ft] + _t * this.U[Pt][W - 1], this.U[Pt][Ft] = zt;
                      }
                    }
                    break;
                  case 3:
                    {
                      var Bt = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[e - 1]), Math.abs(this.s[e - 2])), Math.abs(r[e - 2])), Math.abs(this.s[W])), Math.abs(r[W])), Ut = this.s[e - 1] / Bt, P = this.s[e - 2] / Bt, V = r[e - 2] / Bt, _ = this.s[W] / Bt, it = r[W] / Bt, K = ((P + Ut) * (P - Ut) + V * V) / 2, at = Ut * V * (Ut * V), mt = 0;
                      /* @__PURE__ */ (function(lt, ut) {
                        return lt || ut;
                      })(K !== 0, at !== 0) && (mt = Math.sqrt(K * K + at), K < 0 && (mt = -mt), mt = at / (K + mt));
                      for (var pt = (_ + Ut) * (_ - Ut) + mt, tt = _ * it, Z = W; Z < e - 1; Z++) {
                        var dt = c.hypot(pt, tt), Tt = pt / dt, ct = tt / dt;
                        Z !== W && (r[Z - 1] = dt), pt = Tt * this.s[Z] + ct * r[Z], r[Z] = Tt * r[Z] - ct * this.s[Z], tt = ct * this.s[Z + 1], this.s[Z + 1] = Tt * this.s[Z + 1];
                        for (var Dt = 0; Dt < this.n; Dt++)
                          dt = Tt * this.V[Dt][Z] + ct * this.V[Dt][Z + 1], this.V[Dt][Z + 1] = -ct * this.V[Dt][Z] + Tt * this.V[Dt][Z + 1], this.V[Dt][Z] = dt;
                        if (dt = c.hypot(pt, tt), Tt = pt / dt, ct = tt / dt, this.s[Z] = dt, pt = Tt * r[Z] + ct * this.s[Z + 1], this.s[Z + 1] = -ct * r[Z] + Tt * this.s[Z + 1], tt = ct * r[Z + 1], r[Z + 1] = Tt * r[Z + 1], Z < this.m - 1)
                          for (var ot = 0; ot < this.m; ot++)
                            dt = Tt * this.U[ot][Z] + ct * this.U[ot][Z + 1], this.U[ot][Z + 1] = -ct * this.U[ot][Z] + Tt * this.U[ot][Z + 1], this.U[ot][Z] = dt;
                      }
                      r[e - 2] = pt;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[W] <= 0) {
                        this.s[W] = this.s[W] < 0 ? -this.s[W] : 0;
                        for (var et = 0; et <= Q; et++)
                          this.V[et][W] = -this.V[et][W];
                      }
                      for (; W < Q && !(this.s[W] >= this.s[W + 1]); ) {
                        var yt = this.s[W];
                        if (this.s[W] = this.s[W + 1], this.s[W + 1] = yt, W < this.n - 1)
                          for (var rt = 0; rt < this.n; rt++)
                            yt = this.V[rt][W + 1], this.V[rt][W + 1] = this.V[rt][W], this.V[rt][W] = yt;
                        if (W < this.m - 1)
                          for (var j = 0; j < this.m; j++)
                            yt = this.U[j][W + 1], this.U[j][W + 1] = this.U[j][W], this.U[j][W] = yt;
                        W++;
                      }
                      e--;
                    }
                    break;
                }
              }
              var wt = { U: this.U, V: this.V, S: this.s };
              return wt;
            }, c.hypot = function(n, i) {
              var r = void 0;
              return Math.abs(n) > Math.abs(i) ? (r = i / n, r = Math.abs(n) * Math.sqrt(1 + r * r)) : i != 0 ? (r = n / i, r = Math.abs(i) * Math.sqrt(1 + r * r)) : r = 0, r;
            }, L.exports = c;
          },
          /* 27 */
          /***/
          function(L, U, C) {
            var c = /* @__PURE__ */ function() {
              function r(a, f) {
                for (var o = 0; o < f.length; o++) {
                  var y = f[o];
                  y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(a, y.key, y);
                }
              }
              return function(a, f, o) {
                return f && r(a.prototype, f), o && r(a, o), a;
              };
            }();
            function n(r, a) {
              if (!(r instanceof a))
                throw new TypeError("Cannot call a class as a function");
            }
            var i = function() {
              function r(a, f) {
                var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, t = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                n(this, r), this.sequence1 = a, this.sequence2 = f, this.match_score = o, this.mismatch_penalty = y, this.gap_penalty = t, this.iMax = a.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                for (var h = 0; h < this.iMax; h++) {
                  this.grid[h] = new Array(this.jMax);
                  for (var s = 0; s < this.jMax; s++)
                    this.grid[h][s] = 0;
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
                  for (var y = 1; y < this.iMax; y++)
                    for (var t = 1; t < this.jMax; t++) {
                      var h = void 0;
                      this.sequence1[y - 1] === this.sequence2[t - 1] ? h = this.grid[y - 1][t - 1] + this.match_score : h = this.grid[y - 1][t - 1] + this.mismatch_penalty;
                      var s = this.grid[y - 1][t] + this.gap_penalty, g = this.grid[y][t - 1] + this.gap_penalty, u = [h, s, g], N = this.arrayAllMaxIndexes(u);
                      this.grid[y][t] = u[N[0]], this.tracebackGrid[y][t] = [N.includes(0), N.includes(1), N.includes(2)];
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
                    var o = f[0], y = this.tracebackGrid[o.pos[0]][o.pos[1]];
                    y[0] && f.push({
                      pos: [o.pos[0] - 1, o.pos[1] - 1],
                      seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
                      seq2: this.sequence2[o.pos[1] - 1] + o.seq2
                    }), y[1] && f.push({
                      pos: [o.pos[0] - 1, o.pos[1]],
                      seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
                      seq2: "-" + o.seq2
                    }), y[2] && f.push({
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
                  for (var y = [], t = -1; (t = f.indexOf(o, t + 1)) !== -1; )
                    y.push(t);
                  return y;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(f) {
                  return this.getAllIndexes(f, Math.max.apply(null, f));
                }
              }]), r;
            }();
            L.exports = i;
          },
          /* 28 */
          /***/
          function(L, U, C) {
            var c = function() {
            };
            c.FDLayout = C(18), c.FDLayoutConstants = C(4), c.FDLayoutEdge = C(19), c.FDLayoutNode = C(20), c.DimensionD = C(21), c.HashMap = C(22), c.HashSet = C(23), c.IGeometry = C(8), c.IMath = C(9), c.Integer = C(10), c.Point = C(12), c.PointD = C(5), c.RandomSeed = C(16), c.RectangleD = C(13), c.Transform = C(17), c.UniqueIDGeneretor = C(14), c.Quicksort = C(25), c.LinkedList = C(11), c.LGraphObject = C(2), c.LGraph = C(6), c.LEdge = C(1), c.LGraphManager = C(7), c.LNode = C(3), c.Layout = C(15), c.LayoutConstants = C(0), c.NeedlemanWunsch = C(27), c.Matrix = C(24), c.SVD = C(26), L.exports = c;
          },
          /* 29 */
          /***/
          function(L, U, C) {
            function c() {
              this.listeners = [];
            }
            var n = c.prototype;
            n.addListener = function(i, r) {
              this.listeners.push({
                event: i,
                callback: r
              });
            }, n.removeListener = function(i, r) {
              for (var a = this.listeners.length; a >= 0; a--) {
                var f = this.listeners[a];
                f.event === i && f.callback === r && this.listeners.splice(a, 1);
              }
            }, n.emit = function(i, r) {
              for (var a = 0; a < this.listeners.length; a++) {
                var f = this.listeners[a];
                i === f.event && f.callback(r);
              }
            }, L.exports = c;
          }
          /******/
        ])
      );
    });
  }(de)), de.exports;
}
(function(F, nt) {
  (function(U, C) {
    F.exports = C(Ie());
  })(Ce, function(L) {
    return (
      /******/
      (() => {
        var U = {
          /***/
          45: (
            /***/
            (i, r, a) => {
              var f = {};
              f.layoutBase = a(551), f.CoSEConstants = a(806), f.CoSEEdge = a(767), f.CoSEGraph = a(880), f.CoSEGraphManager = a(578), f.CoSELayout = a(765), f.CoSENode = a(991), f.ConstraintHandler = a(902), i.exports = f;
            }
          ),
          /***/
          806: (
            /***/
            (i, r, a) => {
              var f = a(551).FDLayoutConstants;
              function o() {
              }
              for (var y in f)
                o[y] = f[y];
              o.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, o.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH, o.DEFAULT_COMPONENT_SEPERATION = 60, o.TILE = !0, o.TILING_PADDING_VERTICAL = 10, o.TILING_PADDING_HORIZONTAL = 10, o.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, o.ENFORCE_CONSTRAINTS = !0, o.APPLY_LAYOUT = !0, o.RELAX_MOVEMENT_ON_CONSTRAINTS = !0, o.TREE_REDUCTION_ON_INCREMENTAL = !0, o.PURE_INCREMENTAL = o.DEFAULT_INCREMENTAL, i.exports = o;
            }
          ),
          /***/
          767: (
            /***/
            (i, r, a) => {
              var f = a(551).FDLayoutEdge;
              function o(t, h, s) {
                f.call(this, t, h, s);
              }
              o.prototype = Object.create(f.prototype);
              for (var y in f)
                o[y] = f[y];
              i.exports = o;
            }
          ),
          /***/
          880: (
            /***/
            (i, r, a) => {
              var f = a(551).LGraph;
              function o(t, h, s) {
                f.call(this, t, h, s);
              }
              o.prototype = Object.create(f.prototype);
              for (var y in f)
                o[y] = f[y];
              i.exports = o;
            }
          ),
          /***/
          578: (
            /***/
            (i, r, a) => {
              var f = a(551).LGraphManager;
              function o(t) {
                f.call(this, t);
              }
              o.prototype = Object.create(f.prototype);
              for (var y in f)
                o[y] = f[y];
              i.exports = o;
            }
          ),
          /***/
          765: (
            /***/
            (i, r, a) => {
              var f = a(551).FDLayout, o = a(578), y = a(880), t = a(991), h = a(767), s = a(806), g = a(902), u = a(551).FDLayoutConstants, N = a(551).LayoutConstants, v = a(551).Point, T = a(551).PointD, m = a(551).DimensionD, R = a(551).Layout, b = a(551).Integer, I = a(551).IGeometry, z = a(551).LGraph, H = a(551).Transform, J = a(551).LinkedList;
              function w() {
                f.call(this), this.toBeTiled = {}, this.constraints = {};
              }
              w.prototype = Object.create(f.prototype);
              for (var ht in f)
                w[ht] = f[ht];
              w.prototype.newGraphManager = function() {
                var e = new o(this);
                return this.graphManager = e, e;
              }, w.prototype.newGraph = function(e) {
                return new y(null, this.graphManager, e);
              }, w.prototype.newNode = function(e) {
                return new t(this.graphManager, e);
              }, w.prototype.newEdge = function(e) {
                return new h(null, null, e);
              }, w.prototype.initParameters = function() {
                f.prototype.initParameters.call(this, arguments), this.isSubLayout || (s.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = s.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = u.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = u.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = u.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1);
              }, w.prototype.initSpringEmbedder = function() {
                f.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / u.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
              }, w.prototype.layout = function() {
                var e = N.DEFAULT_CREATE_BENDS_AS_NEEDED;
                return e && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
              }, w.prototype.classicLayout = function() {
                if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                  if (s.TREE_REDUCTION_ON_INCREMENTAL) {
                    this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                    var E = new Set(this.getAllNodes()), l = this.nodesWithGravity.filter(function(A) {
                      return E.has(A);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(l);
                  }
                } else {
                  var e = this.getFlatForest();
                  if (e.length > 0)
                    this.positionNodesRadially(e);
                  else {
                    this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                    var E = new Set(this.getAllNodes()), l = this.nodesWithGravity.filter(function(d) {
                      return E.has(d);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(l), this.positionNodesRandomly();
                  }
                }
                return Object.keys(this.constraints).length > 0 && (g.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), s.APPLY_LAYOUT && this.runSpringEmbedder(), !0;
              }, w.prototype.tick = function() {
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
                      var e = new Set(this.getAllNodes()), E = this.nodesWithGravity.filter(function(p) {
                        return e.has(p);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(E), this.graphManager.updateBounds(), this.updateGrid(), s.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                    } else
                      this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                  this.growTreeIterations++;
                }
                if (this.isGrowthFinished) {
                  if (this.isConverged())
                    return !0;
                  this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), s.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                }
                var l = !this.isTreeGrowing && !this.isGrowthFinished, d = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(l, d), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
              }, w.prototype.getPositionsData = function() {
                for (var e = this.graphManager.getAllNodes(), E = {}, l = 0; l < e.length; l++) {
                  var d = e[l].rect, p = e[l].id;
                  E[p] = {
                    id: p,
                    x: d.getCenterX(),
                    y: d.getCenterY(),
                    w: d.width,
                    h: d.height
                  };
                }
                return E;
              }, w.prototype.runSpringEmbedder = function() {
                this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                var e = !1;
                if (u.ANIMATE === "during")
                  this.emit("layoutstarted");
                else {
                  for (; !e; )
                    e = this.tick();
                  this.graphManager.updateBounds();
                }
              }, w.prototype.moveNodes = function() {
                for (var e = this.getAllNodes(), E, l = 0; l < e.length; l++)
                  E = e[l], E.calculateDisplacement();
                Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                for (var l = 0; l < e.length; l++)
                  E = e[l], E.move();
              }, w.prototype.initConstraintVariables = function() {
                var e = this;
                this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                for (var E = this.graphManager.getAllNodes(), l = 0; l < E.length; l++) {
                  var d = E[l];
                  this.idToNodeMap.set(d.id, d);
                }
                var p = function x(X) {
                  for (var Q = X.getChild().getNodes(), k, ft = 0, W = 0; W < Q.length; W++)
                    k = Q[W], k.getChild() == null ? e.fixedNodeSet.has(k.id) && (ft += 100) : ft += x(k);
                  return ft;
                };
                if (this.constraints.fixedNodeConstraint) {
                  this.constraints.fixedNodeConstraint.forEach(function(Q) {
                    e.fixedNodeSet.add(Q.nodeId);
                  });
                  for (var E = this.graphManager.getAllNodes(), d, l = 0; l < E.length; l++)
                    if (d = E[l], d.getChild() != null) {
                      var A = p(d);
                      A > 0 && (d.fixedNodeWeight = A);
                    }
                }
                if (this.constraints.relativePlacementConstraint) {
                  var M = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
                  if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(x) {
                    e.fixedNodesOnHorizontal.add(x), e.fixedNodesOnVertical.add(x);
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var S = this.constraints.alignmentConstraint.vertical, l = 0; l < S.length; l++)
                        this.dummyToNodeForVerticalAlignment.set("dummy" + l, []), S[l].forEach(function(X) {
                          M.set(X, "dummy" + l), e.dummyToNodeForVerticalAlignment.get("dummy" + l).push(X), e.fixedNodeSet.has(X) && e.fixedNodesOnHorizontal.add("dummy" + l);
                        });
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var D = this.constraints.alignmentConstraint.horizontal, l = 0; l < D.length; l++)
                        this.dummyToNodeForHorizontalAlignment.set("dummy" + l, []), D[l].forEach(function(X) {
                          O.set(X, "dummy" + l), e.dummyToNodeForHorizontalAlignment.get("dummy" + l).push(X), e.fixedNodeSet.has(X) && e.fixedNodesOnVertical.add("dummy" + l);
                        });
                  }
                  if (s.RELAX_MOVEMENT_ON_CONSTRAINTS)
                    this.shuffle = function(x) {
                      var X, Q, k;
                      for (k = x.length - 1; k >= 2 * x.length / 3; k--)
                        X = Math.floor(Math.random() * (k + 1)), Q = x[k], x[k] = x[X], x[X] = Q;
                      return x;
                    }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(x) {
                      if (x.left) {
                        var X = M.has(x.left) ? M.get(x.left) : x.left, Q = M.has(x.right) ? M.get(x.right) : x.right;
                        e.nodesInRelativeHorizontal.includes(X) || (e.nodesInRelativeHorizontal.push(X), e.nodeToRelativeConstraintMapHorizontal.set(X, []), e.dummyToNodeForVerticalAlignment.has(X) ? e.nodeToTempPositionMapHorizontal.set(X, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(X)[0]).getCenterX()) : e.nodeToTempPositionMapHorizontal.set(X, e.idToNodeMap.get(X).getCenterX())), e.nodesInRelativeHorizontal.includes(Q) || (e.nodesInRelativeHorizontal.push(Q), e.nodeToRelativeConstraintMapHorizontal.set(Q, []), e.dummyToNodeForVerticalAlignment.has(Q) ? e.nodeToTempPositionMapHorizontal.set(Q, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(Q)[0]).getCenterX()) : e.nodeToTempPositionMapHorizontal.set(Q, e.idToNodeMap.get(Q).getCenterX())), e.nodeToRelativeConstraintMapHorizontal.get(X).push({ right: Q, gap: x.gap }), e.nodeToRelativeConstraintMapHorizontal.get(Q).push({ left: X, gap: x.gap });
                      } else {
                        var k = O.has(x.top) ? O.get(x.top) : x.top, ft = O.has(x.bottom) ? O.get(x.bottom) : x.bottom;
                        e.nodesInRelativeVertical.includes(k) || (e.nodesInRelativeVertical.push(k), e.nodeToRelativeConstraintMapVertical.set(k, []), e.dummyToNodeForHorizontalAlignment.has(k) ? e.nodeToTempPositionMapVertical.set(k, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(k)[0]).getCenterY()) : e.nodeToTempPositionMapVertical.set(k, e.idToNodeMap.get(k).getCenterY())), e.nodesInRelativeVertical.includes(ft) || (e.nodesInRelativeVertical.push(ft), e.nodeToRelativeConstraintMapVertical.set(ft, []), e.dummyToNodeForHorizontalAlignment.has(ft) ? e.nodeToTempPositionMapVertical.set(ft, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(ft)[0]).getCenterY()) : e.nodeToTempPositionMapVertical.set(ft, e.idToNodeMap.get(ft).getCenterY())), e.nodeToRelativeConstraintMapVertical.get(k).push({ bottom: ft, gap: x.gap }), e.nodeToRelativeConstraintMapVertical.get(ft).push({ top: k, gap: x.gap });
                      }
                    });
                  else {
                    var q = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
                    this.constraints.relativePlacementConstraint.forEach(function(x) {
                      if (x.left) {
                        var X = M.has(x.left) ? M.get(x.left) : x.left, Q = M.has(x.right) ? M.get(x.right) : x.right;
                        q.has(X) ? q.get(X).push(Q) : q.set(X, [Q]), q.has(Q) ? q.get(Q).push(X) : q.set(Q, [X]);
                      } else {
                        var k = O.has(x.top) ? O.get(x.top) : x.top, ft = O.has(x.bottom) ? O.get(x.bottom) : x.bottom;
                        G.has(k) ? G.get(k).push(ft) : G.set(k, [ft]), G.has(ft) ? G.get(ft).push(k) : G.set(ft, [k]);
                      }
                    });
                    var Y = function(X, Q) {
                      var k = [], ft = [], W = new J(), Ot = /* @__PURE__ */ new Set(), vt = 0;
                      return X.forEach(function($t, Vt) {
                        if (!Ot.has(Vt)) {
                          k[vt] = [], ft[vt] = !1;
                          var Nt = Vt;
                          for (W.push(Nt), Ot.add(Nt), k[vt].push(Nt); W.length != 0; ) {
                            Nt = W.shift(), Q.has(Nt) && (ft[vt] = !0);
                            var Yt = X.get(Nt);
                            Yt.forEach(function(Xt) {
                              Ot.has(Xt) || (W.push(Xt), Ot.add(Xt), k[vt].push(Xt));
                            });
                          }
                          vt++;
                        }
                      }), { components: k, isFixed: ft };
                    }, $ = Y(q, e.fixedNodesOnHorizontal);
                    this.componentsOnHorizontal = $.components, this.fixedComponentsOnHorizontal = $.isFixed;
                    var B = Y(G, e.fixedNodesOnVertical);
                    this.componentsOnVertical = B.components, this.fixedComponentsOnVertical = B.isFixed;
                  }
                }
              }, w.prototype.updateDisplacements = function() {
                var e = this;
                if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(B) {
                  var x = e.idToNodeMap.get(B.nodeId);
                  x.displacementX = 0, x.displacementY = 0;
                }), this.constraints.alignmentConstraint) {
                  if (this.constraints.alignmentConstraint.vertical)
                    for (var E = this.constraints.alignmentConstraint.vertical, l = 0; l < E.length; l++) {
                      for (var d = 0, p = 0; p < E[l].length; p++) {
                        if (this.fixedNodeSet.has(E[l][p])) {
                          d = 0;
                          break;
                        }
                        d += this.idToNodeMap.get(E[l][p]).displacementX;
                      }
                      for (var A = d / E[l].length, p = 0; p < E[l].length; p++)
                        this.idToNodeMap.get(E[l][p]).displacementX = A;
                    }
                  if (this.constraints.alignmentConstraint.horizontal)
                    for (var M = this.constraints.alignmentConstraint.horizontal, l = 0; l < M.length; l++) {
                      for (var O = 0, p = 0; p < M[l].length; p++) {
                        if (this.fixedNodeSet.has(M[l][p])) {
                          O = 0;
                          break;
                        }
                        O += this.idToNodeMap.get(M[l][p]).displacementY;
                      }
                      for (var S = O / M[l].length, p = 0; p < M[l].length; p++)
                        this.idToNodeMap.get(M[l][p]).displacementY = S;
                    }
                }
                if (this.constraints.relativePlacementConstraint)
                  if (s.RELAX_MOVEMENT_ON_CONSTRAINTS)
                    this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(B) {
                      if (!e.fixedNodesOnHorizontal.has(B)) {
                        var x = 0;
                        e.dummyToNodeForVerticalAlignment.has(B) ? x = e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(B)[0]).displacementX : x = e.idToNodeMap.get(B).displacementX, e.nodeToRelativeConstraintMapHorizontal.get(B).forEach(function(X) {
                          if (X.right) {
                            var Q = e.nodeToTempPositionMapHorizontal.get(X.right) - e.nodeToTempPositionMapHorizontal.get(B) - x;
                            Q < X.gap && (x -= X.gap - Q);
                          } else {
                            var Q = e.nodeToTempPositionMapHorizontal.get(B) - e.nodeToTempPositionMapHorizontal.get(X.left) + x;
                            Q < X.gap && (x += X.gap - Q);
                          }
                        }), e.nodeToTempPositionMapHorizontal.set(B, e.nodeToTempPositionMapHorizontal.get(B) + x), e.dummyToNodeForVerticalAlignment.has(B) ? e.dummyToNodeForVerticalAlignment.get(B).forEach(function(X) {
                          e.idToNodeMap.get(X).displacementX = x;
                        }) : e.idToNodeMap.get(B).displacementX = x;
                      }
                    }), this.nodesInRelativeVertical.forEach(function(B) {
                      if (!e.fixedNodesOnHorizontal.has(B)) {
                        var x = 0;
                        e.dummyToNodeForHorizontalAlignment.has(B) ? x = e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(B)[0]).displacementY : x = e.idToNodeMap.get(B).displacementY, e.nodeToRelativeConstraintMapVertical.get(B).forEach(function(X) {
                          if (X.bottom) {
                            var Q = e.nodeToTempPositionMapVertical.get(X.bottom) - e.nodeToTempPositionMapVertical.get(B) - x;
                            Q < X.gap && (x -= X.gap - Q);
                          } else {
                            var Q = e.nodeToTempPositionMapVertical.get(B) - e.nodeToTempPositionMapVertical.get(X.top) + x;
                            Q < X.gap && (x += X.gap - Q);
                          }
                        }), e.nodeToTempPositionMapVertical.set(B, e.nodeToTempPositionMapVertical.get(B) + x), e.dummyToNodeForHorizontalAlignment.has(B) ? e.dummyToNodeForHorizontalAlignment.get(B).forEach(function(X) {
                          e.idToNodeMap.get(X).displacementY = x;
                        }) : e.idToNodeMap.get(B).displacementY = x;
                      }
                    });
                  else {
                    for (var l = 0; l < this.componentsOnHorizontal.length; l++) {
                      var D = this.componentsOnHorizontal[l];
                      if (this.fixedComponentsOnHorizontal[l])
                        for (var p = 0; p < D.length; p++)
                          this.dummyToNodeForVerticalAlignment.has(D[p]) ? this.dummyToNodeForVerticalAlignment.get(D[p]).forEach(function(X) {
                            e.idToNodeMap.get(X).displacementX = 0;
                          }) : this.idToNodeMap.get(D[p]).displacementX = 0;
                      else {
                        for (var q = 0, G = 0, p = 0; p < D.length; p++)
                          if (this.dummyToNodeForVerticalAlignment.has(D[p])) {
                            var Y = this.dummyToNodeForVerticalAlignment.get(D[p]);
                            q += Y.length * this.idToNodeMap.get(Y[0]).displacementX, G += Y.length;
                          } else
                            q += this.idToNodeMap.get(D[p]).displacementX, G++;
                        for (var $ = q / G, p = 0; p < D.length; p++)
                          this.dummyToNodeForVerticalAlignment.has(D[p]) ? this.dummyToNodeForVerticalAlignment.get(D[p]).forEach(function(X) {
                            e.idToNodeMap.get(X).displacementX = $;
                          }) : this.idToNodeMap.get(D[p]).displacementX = $;
                      }
                    }
                    for (var l = 0; l < this.componentsOnVertical.length; l++) {
                      var D = this.componentsOnVertical[l];
                      if (this.fixedComponentsOnVertical[l])
                        for (var p = 0; p < D.length; p++)
                          this.dummyToNodeForHorizontalAlignment.has(D[p]) ? this.dummyToNodeForHorizontalAlignment.get(D[p]).forEach(function(Q) {
                            e.idToNodeMap.get(Q).displacementY = 0;
                          }) : this.idToNodeMap.get(D[p]).displacementY = 0;
                      else {
                        for (var q = 0, G = 0, p = 0; p < D.length; p++)
                          if (this.dummyToNodeForHorizontalAlignment.has(D[p])) {
                            var Y = this.dummyToNodeForHorizontalAlignment.get(D[p]);
                            q += Y.length * this.idToNodeMap.get(Y[0]).displacementY, G += Y.length;
                          } else
                            q += this.idToNodeMap.get(D[p]).displacementY, G++;
                        for (var $ = q / G, p = 0; p < D.length; p++)
                          this.dummyToNodeForHorizontalAlignment.has(D[p]) ? this.dummyToNodeForHorizontalAlignment.get(D[p]).forEach(function(W) {
                            e.idToNodeMap.get(W).displacementY = $;
                          }) : this.idToNodeMap.get(D[p]).displacementY = $;
                      }
                    }
                  }
              }, w.prototype.calculateNodesToApplyGravitationTo = function() {
                var e = [], E, l = this.graphManager.getGraphs(), d = l.length, p;
                for (p = 0; p < d; p++)
                  E = l[p], E.updateConnected(), E.isConnected || (e = e.concat(E.getNodes()));
                return e;
              }, w.prototype.createBendpoints = function() {
                var e = [];
                e = e.concat(this.graphManager.getAllEdges());
                var E = /* @__PURE__ */ new Set(), l;
                for (l = 0; l < e.length; l++) {
                  var d = e[l];
                  if (!E.has(d)) {
                    var p = d.getSource(), A = d.getTarget();
                    if (p == A)
                      d.getBendpoints().push(new T()), d.getBendpoints().push(new T()), this.createDummyNodesForBendpoints(d), E.add(d);
                    else {
                      var M = [];
                      if (M = M.concat(p.getEdgeListToNode(A)), M = M.concat(A.getEdgeListToNode(p)), !E.has(M[0])) {
                        if (M.length > 1) {
                          var O;
                          for (O = 0; O < M.length; O++) {
                            var S = M[O];
                            S.getBendpoints().push(new T()), this.createDummyNodesForBendpoints(S);
                          }
                        }
                        M.forEach(function(D) {
                          E.add(D);
                        });
                      }
                    }
                  }
                  if (E.size == e.length)
                    break;
                }
              }, w.prototype.positionNodesRadially = function(e) {
                for (var E = new v(0, 0), l = Math.ceil(Math.sqrt(e.length)), d = 0, p = 0, A = 0, M = new T(0, 0), O = 0; O < e.length; O++) {
                  O % l == 0 && (A = 0, p = d, O != 0 && (p += s.DEFAULT_COMPONENT_SEPERATION), d = 0);
                  var S = e[O], D = R.findCenterOfTree(S);
                  E.x = A, E.y = p, M = w.radialLayout(S, D, E), M.y > d && (d = Math.floor(M.y)), A = Math.floor(M.x + s.DEFAULT_COMPONENT_SEPERATION);
                }
                this.transform(new T(N.WORLD_CENTER_X - M.x / 2, N.WORLD_CENTER_Y - M.y / 2));
              }, w.radialLayout = function(e, E, l) {
                var d = Math.max(this.maxDiagonalInTree(e), s.DEFAULT_RADIAL_SEPARATION);
                w.branchRadialLayout(E, null, 0, 359, 0, d);
                var p = z.calculateBounds(e), A = new H();
                A.setDeviceOrgX(p.getMinX()), A.setDeviceOrgY(p.getMinY()), A.setWorldOrgX(l.x), A.setWorldOrgY(l.y);
                for (var M = 0; M < e.length; M++) {
                  var O = e[M];
                  O.transform(A);
                }
                var S = new T(p.getMaxX(), p.getMaxY());
                return A.inverseTransformPoint(S);
              }, w.branchRadialLayout = function(e, E, l, d, p, A) {
                var M = (d - l + 1) / 2;
                M < 0 && (M += 180);
                var O = (M + l) % 360, S = O * I.TWO_PI / 360, D = p * Math.cos(S), q = p * Math.sin(S);
                e.setCenter(D, q);
                var G = [];
                G = G.concat(e.getEdges());
                var Y = G.length;
                E != null && Y--;
                for (var $ = 0, B = G.length, x, X = e.getEdgesBetween(E); X.length > 1; ) {
                  var Q = X[0];
                  X.splice(0, 1);
                  var k = G.indexOf(Q);
                  k >= 0 && G.splice(k, 1), B--, Y--;
                }
                E != null ? x = (G.indexOf(X[0]) + 1) % B : x = 0;
                for (var ft = Math.abs(d - l) / Y, W = x; $ != Y; W = ++W % B) {
                  var Ot = G[W].getOtherEnd(e);
                  if (Ot != E) {
                    var vt = (l + $ * ft) % 360, $t = (vt + ft) % 360;
                    w.branchRadialLayout(Ot, e, vt, $t, p + A, A), $++;
                  }
                }
              }, w.maxDiagonalInTree = function(e) {
                for (var E = b.MIN_VALUE, l = 0; l < e.length; l++) {
                  var d = e[l], p = d.getDiagonal();
                  p > E && (E = p);
                }
                return E;
              }, w.prototype.calcRepulsionRange = function() {
                return 2 * (this.level + 1) * this.idealEdgeLength;
              }, w.prototype.groupZeroDegreeMembers = function() {
                var e = this, E = {};
                this.memberGroups = {}, this.idToDummyNode = {};
                for (var l = [], d = this.graphManager.getAllNodes(), p = 0; p < d.length; p++) {
                  var A = d[p], M = A.getParent();
                  this.getNodeDegreeWithChildren(A) === 0 && (M.id == null || !this.getToBeTiled(M)) && l.push(A);
                }
                for (var p = 0; p < l.length; p++) {
                  var A = l[p], O = A.getParent().id;
                  typeof E[O] > "u" && (E[O] = []), E[O] = E[O].concat(A);
                }
                Object.keys(E).forEach(function(S) {
                  if (E[S].length > 1) {
                    var D = "DummyCompound_" + S;
                    e.memberGroups[D] = E[S];
                    var q = E[S][0].getParent(), G = new t(e.graphManager);
                    G.id = D, G.paddingLeft = q.paddingLeft || 0, G.paddingRight = q.paddingRight || 0, G.paddingBottom = q.paddingBottom || 0, G.paddingTop = q.paddingTop || 0, e.idToDummyNode[D] = G;
                    var Y = e.getGraphManager().add(e.newGraph(), G), $ = q.getChild();
                    $.add(G);
                    for (var B = 0; B < E[S].length; B++) {
                      var x = E[S][B];
                      $.remove(x), Y.add(x);
                    }
                  }
                });
              }, w.prototype.clearCompounds = function() {
                var e = {}, E = {};
                this.performDFSOnCompounds();
                for (var l = 0; l < this.compoundOrder.length; l++)
                  E[this.compoundOrder[l].id] = this.compoundOrder[l], e[this.compoundOrder[l].id] = [].concat(this.compoundOrder[l].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[l].getChild()), this.compoundOrder[l].child = null;
                this.graphManager.resetAllNodes(), this.tileCompoundMembers(e, E);
              }, w.prototype.clearZeroDegreeMembers = function() {
                var e = this, E = this.tiledZeroDegreePack = [];
                Object.keys(this.memberGroups).forEach(function(l) {
                  var d = e.idToDummyNode[l];
                  if (E[l] = e.tileNodes(e.memberGroups[l], d.paddingLeft + d.paddingRight), d.rect.width = E[l].width, d.rect.height = E[l].height, d.setCenter(E[l].centerX, E[l].centerY), d.labelMarginLeft = 0, d.labelMarginTop = 0, s.NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var p = d.rect.width, A = d.rect.height;
                    d.labelWidth && (d.labelPosHorizontal == "left" ? (d.rect.x -= d.labelWidth, d.setWidth(p + d.labelWidth), d.labelMarginLeft = d.labelWidth) : d.labelPosHorizontal == "center" && d.labelWidth > p ? (d.rect.x -= (d.labelWidth - p) / 2, d.setWidth(d.labelWidth), d.labelMarginLeft = (d.labelWidth - p) / 2) : d.labelPosHorizontal == "right" && d.setWidth(p + d.labelWidth)), d.labelHeight && (d.labelPosVertical == "top" ? (d.rect.y -= d.labelHeight, d.setHeight(A + d.labelHeight), d.labelMarginTop = d.labelHeight) : d.labelPosVertical == "center" && d.labelHeight > A ? (d.rect.y -= (d.labelHeight - A) / 2, d.setHeight(d.labelHeight), d.labelMarginTop = (d.labelHeight - A) / 2) : d.labelPosVertical == "bottom" && d.setHeight(A + d.labelHeight));
                  }
                });
              }, w.prototype.repopulateCompounds = function() {
                for (var e = this.compoundOrder.length - 1; e >= 0; e--) {
                  var E = this.compoundOrder[e], l = E.id, d = E.paddingLeft, p = E.paddingTop, A = E.labelMarginLeft, M = E.labelMarginTop;
                  this.adjustLocations(this.tiledMemberPack[l], E.rect.x, E.rect.y, d, p, A, M);
                }
              }, w.prototype.repopulateZeroDegreeMembers = function() {
                var e = this, E = this.tiledZeroDegreePack;
                Object.keys(E).forEach(function(l) {
                  var d = e.idToDummyNode[l], p = d.paddingLeft, A = d.paddingTop, M = d.labelMarginLeft, O = d.labelMarginTop;
                  e.adjustLocations(E[l], d.rect.x, d.rect.y, p, A, M, O);
                });
              }, w.prototype.getToBeTiled = function(e) {
                var E = e.id;
                if (this.toBeTiled[E] != null)
                  return this.toBeTiled[E];
                var l = e.getChild();
                if (l == null)
                  return this.toBeTiled[E] = !1, !1;
                for (var d = l.getNodes(), p = 0; p < d.length; p++) {
                  var A = d[p];
                  if (this.getNodeDegree(A) > 0)
                    return this.toBeTiled[E] = !1, !1;
                  if (A.getChild() == null) {
                    this.toBeTiled[A.id] = !1;
                    continue;
                  }
                  if (!this.getToBeTiled(A))
                    return this.toBeTiled[E] = !1, !1;
                }
                return this.toBeTiled[E] = !0, !0;
              }, w.prototype.getNodeDegree = function(e) {
                e.id;
                for (var E = e.getEdges(), l = 0, d = 0; d < E.length; d++) {
                  var p = E[d];
                  p.getSource().id !== p.getTarget().id && (l = l + 1);
                }
                return l;
              }, w.prototype.getNodeDegreeWithChildren = function(e) {
                var E = this.getNodeDegree(e);
                if (e.getChild() == null)
                  return E;
                for (var l = e.getChild().getNodes(), d = 0; d < l.length; d++) {
                  var p = l[d];
                  E += this.getNodeDegreeWithChildren(p);
                }
                return E;
              }, w.prototype.performDFSOnCompounds = function() {
                this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
              }, w.prototype.fillCompexOrderByDFS = function(e) {
                for (var E = 0; E < e.length; E++) {
                  var l = e[E];
                  l.getChild() != null && this.fillCompexOrderByDFS(l.getChild().getNodes()), this.getToBeTiled(l) && this.compoundOrder.push(l);
                }
              }, w.prototype.adjustLocations = function(e, E, l, d, p, A, M) {
                E += d + A, l += p + M;
                for (var O = E, S = 0; S < e.rows.length; S++) {
                  var D = e.rows[S];
                  E = O;
                  for (var q = 0, G = 0; G < D.length; G++) {
                    var Y = D[G];
                    Y.rect.x = E, Y.rect.y = l, E += Y.rect.width + e.horizontalPadding, Y.rect.height > q && (q = Y.rect.height);
                  }
                  l += q + e.verticalPadding;
                }
              }, w.prototype.tileCompoundMembers = function(e, E) {
                var l = this;
                this.tiledMemberPack = [], Object.keys(e).forEach(function(d) {
                  var p = E[d];
                  if (l.tiledMemberPack[d] = l.tileNodes(e[d], p.paddingLeft + p.paddingRight), p.rect.width = l.tiledMemberPack[d].width, p.rect.height = l.tiledMemberPack[d].height, p.setCenter(l.tiledMemberPack[d].centerX, l.tiledMemberPack[d].centerY), p.labelMarginLeft = 0, p.labelMarginTop = 0, s.NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var A = p.rect.width, M = p.rect.height;
                    p.labelWidth && (p.labelPosHorizontal == "left" ? (p.rect.x -= p.labelWidth, p.setWidth(A + p.labelWidth), p.labelMarginLeft = p.labelWidth) : p.labelPosHorizontal == "center" && p.labelWidth > A ? (p.rect.x -= (p.labelWidth - A) / 2, p.setWidth(p.labelWidth), p.labelMarginLeft = (p.labelWidth - A) / 2) : p.labelPosHorizontal == "right" && p.setWidth(A + p.labelWidth)), p.labelHeight && (p.labelPosVertical == "top" ? (p.rect.y -= p.labelHeight, p.setHeight(M + p.labelHeight), p.labelMarginTop = p.labelHeight) : p.labelPosVertical == "center" && p.labelHeight > M ? (p.rect.y -= (p.labelHeight - M) / 2, p.setHeight(p.labelHeight), p.labelMarginTop = (p.labelHeight - M) / 2) : p.labelPosVertical == "bottom" && p.setHeight(M + p.labelHeight));
                  }
                });
              }, w.prototype.tileNodes = function(e, E) {
                var l = this.tileNodesByFavoringDim(e, E, !0), d = this.tileNodesByFavoringDim(e, E, !1), p = this.getOrgRatio(l), A = this.getOrgRatio(d), M;
                return A < p ? M = d : M = l, M;
              }, w.prototype.getOrgRatio = function(e) {
                var E = e.width, l = e.height, d = E / l;
                return d < 1 && (d = 1 / d), d;
              }, w.prototype.calcIdealRowWidth = function(e, E) {
                var l = s.TILING_PADDING_VERTICAL, d = s.TILING_PADDING_HORIZONTAL, p = e.length, A = 0, M = 0, O = 0;
                e.forEach(function(B) {
                  A += B.getWidth(), M += B.getHeight(), B.getWidth() > O && (O = B.getWidth());
                });
                var S = A / p, D = M / p, q = Math.pow(l - d, 2) + 4 * (S + d) * (D + l) * p, G = (d - l + Math.sqrt(q)) / (2 * (S + d)), Y;
                E ? (Y = Math.ceil(G), Y == G && Y++) : Y = Math.floor(G);
                var $ = Y * (S + d) - d;
                return O > $ && ($ = O), $ += d * 2, $;
              }, w.prototype.tileNodesByFavoringDim = function(e, E, l) {
                var d = s.TILING_PADDING_VERTICAL, p = s.TILING_PADDING_HORIZONTAL, A = s.TILING_COMPARE_BY, M = {
                  rows: [],
                  rowWidth: [],
                  rowHeight: [],
                  width: 0,
                  height: E,
                  // assume minHeight equals to minWidth
                  verticalPadding: d,
                  horizontalPadding: p,
                  centerX: 0,
                  centerY: 0
                };
                A && (M.idealRowWidth = this.calcIdealRowWidth(e, l));
                var O = function(x) {
                  return x.rect.width * x.rect.height;
                }, S = function(x, X) {
                  return O(X) - O(x);
                };
                e.sort(function(B, x) {
                  var X = S;
                  return M.idealRowWidth ? (X = A, X(B.id, x.id)) : X(B, x);
                });
                for (var D = 0, q = 0, G = 0; G < e.length; G++) {
                  var Y = e[G];
                  D += Y.getCenterX(), q += Y.getCenterY();
                }
                M.centerX = D / e.length, M.centerY = q / e.length;
                for (var G = 0; G < e.length; G++) {
                  var Y = e[G];
                  if (M.rows.length == 0)
                    this.insertNodeToRow(M, Y, 0, E);
                  else if (this.canAddHorizontal(M, Y.rect.width, Y.rect.height)) {
                    var $ = M.rows.length - 1;
                    M.idealRowWidth || ($ = this.getShortestRowIndex(M)), this.insertNodeToRow(M, Y, $, E);
                  } else
                    this.insertNodeToRow(M, Y, M.rows.length, E);
                  this.shiftToLastRow(M);
                }
                return M;
              }, w.prototype.insertNodeToRow = function(e, E, l, d) {
                var p = d;
                if (l == e.rows.length) {
                  var A = [];
                  e.rows.push(A), e.rowWidth.push(p), e.rowHeight.push(0);
                }
                var M = e.rowWidth[l] + E.rect.width;
                e.rows[l].length > 0 && (M += e.horizontalPadding), e.rowWidth[l] = M, e.width < M && (e.width = M);
                var O = E.rect.height;
                l > 0 && (O += e.verticalPadding);
                var S = 0;
                O > e.rowHeight[l] && (S = e.rowHeight[l], e.rowHeight[l] = O, S = e.rowHeight[l] - S), e.height += S, e.rows[l].push(E);
              }, w.prototype.getShortestRowIndex = function(e) {
                for (var E = -1, l = Number.MAX_VALUE, d = 0; d < e.rows.length; d++)
                  e.rowWidth[d] < l && (E = d, l = e.rowWidth[d]);
                return E;
              }, w.prototype.getLongestRowIndex = function(e) {
                for (var E = -1, l = Number.MIN_VALUE, d = 0; d < e.rows.length; d++)
                  e.rowWidth[d] > l && (E = d, l = e.rowWidth[d]);
                return E;
              }, w.prototype.canAddHorizontal = function(e, E, l) {
                if (e.idealRowWidth) {
                  var d = e.rows.length - 1, p = e.rowWidth[d];
                  return p + E + e.horizontalPadding <= e.idealRowWidth;
                }
                var A = this.getShortestRowIndex(e);
                if (A < 0)
                  return !0;
                var M = e.rowWidth[A];
                if (M + e.horizontalPadding + E <= e.width)
                  return !0;
                var O = 0;
                e.rowHeight[A] < l && A > 0 && (O = l + e.verticalPadding - e.rowHeight[A]);
                var S;
                e.width - M >= E + e.horizontalPadding ? S = (e.height + O) / (M + E + e.horizontalPadding) : S = (e.height + O) / e.width, O = l + e.verticalPadding;
                var D;
                return e.width < E ? D = (e.height + O) / E : D = (e.height + O) / e.width, D < 1 && (D = 1 / D), S < 1 && (S = 1 / S), S < D;
              }, w.prototype.shiftToLastRow = function(e) {
                var E = this.getLongestRowIndex(e), l = e.rowWidth.length - 1, d = e.rows[E], p = d[d.length - 1], A = p.width + e.horizontalPadding;
                if (e.width - e.rowWidth[l] > A && E != l) {
                  d.splice(-1, 1), e.rows[l].push(p), e.rowWidth[E] = e.rowWidth[E] - A, e.rowWidth[l] = e.rowWidth[l] + A, e.width = e.rowWidth[instance.getLongestRowIndex(e)];
                  for (var M = Number.MIN_VALUE, O = 0; O < d.length; O++)
                    d[O].height > M && (M = d[O].height);
                  E > 0 && (M += e.verticalPadding);
                  var S = e.rowHeight[E] + e.rowHeight[l];
                  e.rowHeight[E] = M, e.rowHeight[l] < p.height + e.verticalPadding && (e.rowHeight[l] = p.height + e.verticalPadding);
                  var D = e.rowHeight[E] + e.rowHeight[l];
                  e.height += D - S, this.shiftToLastRow(e);
                }
              }, w.prototype.tilingPreLayout = function() {
                s.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
              }, w.prototype.tilingPostLayout = function() {
                s.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
              }, w.prototype.reduceTrees = function() {
                for (var e = [], E = !0, l; E; ) {
                  var d = this.graphManager.getAllNodes(), p = [];
                  E = !1;
                  for (var A = 0; A < d.length; A++)
                    if (l = d[A], l.getEdges().length == 1 && !l.getEdges()[0].isInterGraph && l.getChild() == null) {
                      if (s.PURE_INCREMENTAL) {
                        var M = l.getEdges()[0].getOtherEnd(l), O = new m(l.getCenterX() - M.getCenterX(), l.getCenterY() - M.getCenterY());
                        p.push([l, l.getEdges()[0], l.getOwner(), O]);
                      } else
                        p.push([l, l.getEdges()[0], l.getOwner()]);
                      E = !0;
                    }
                  if (E == !0) {
                    for (var S = [], D = 0; D < p.length; D++)
                      p[D][0].getEdges().length == 1 && (S.push(p[D]), p[D][0].getOwner().remove(p[D][0]));
                    e.push(S), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                  }
                }
                this.prunedNodesAll = e;
              }, w.prototype.growTree = function(e) {
                for (var E = e.length, l = e[E - 1], d, p = 0; p < l.length; p++)
                  d = l[p], this.findPlaceforPrunedNode(d), d[2].add(d[0]), d[2].add(d[1], d[1].source, d[1].target);
                e.splice(e.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
              }, w.prototype.findPlaceforPrunedNode = function(e) {
                var E, l, d = e[0];
                if (d == e[1].source ? l = e[1].target : l = e[1].source, s.PURE_INCREMENTAL)
                  d.setCenter(l.getCenterX() + e[3].getWidth(), l.getCenterY() + e[3].getHeight());
                else {
                  var p = l.startX, A = l.finishX, M = l.startY, O = l.finishY, S = 0, D = 0, q = 0, G = 0, Y = [S, q, D, G];
                  if (M > 0)
                    for (var $ = p; $ <= A; $++)
                      Y[0] += this.grid[$][M - 1].length + this.grid[$][M].length - 1;
                  if (A < this.grid.length - 1)
                    for (var $ = M; $ <= O; $++)
                      Y[1] += this.grid[A + 1][$].length + this.grid[A][$].length - 1;
                  if (O < this.grid[0].length - 1)
                    for (var $ = p; $ <= A; $++)
                      Y[2] += this.grid[$][O + 1].length + this.grid[$][O].length - 1;
                  if (p > 0)
                    for (var $ = M; $ <= O; $++)
                      Y[3] += this.grid[p - 1][$].length + this.grid[p][$].length - 1;
                  for (var B = b.MAX_VALUE, x, X, Q = 0; Q < Y.length; Q++)
                    Y[Q] < B ? (B = Y[Q], x = 1, X = Q) : Y[Q] == B && x++;
                  if (x == 3 && B == 0)
                    Y[0] == 0 && Y[1] == 0 && Y[2] == 0 ? E = 1 : Y[0] == 0 && Y[1] == 0 && Y[3] == 0 ? E = 0 : Y[0] == 0 && Y[2] == 0 && Y[3] == 0 ? E = 3 : Y[1] == 0 && Y[2] == 0 && Y[3] == 0 && (E = 2);
                  else if (x == 2 && B == 0) {
                    var k = Math.floor(Math.random() * 2);
                    Y[0] == 0 && Y[1] == 0 ? k == 0 ? E = 0 : E = 1 : Y[0] == 0 && Y[2] == 0 ? k == 0 ? E = 0 : E = 2 : Y[0] == 0 && Y[3] == 0 ? k == 0 ? E = 0 : E = 3 : Y[1] == 0 && Y[2] == 0 ? k == 0 ? E = 1 : E = 2 : Y[1] == 0 && Y[3] == 0 ? k == 0 ? E = 1 : E = 3 : k == 0 ? E = 2 : E = 3;
                  } else if (x == 4 && B == 0) {
                    var k = Math.floor(Math.random() * 4);
                    E = k;
                  } else
                    E = X;
                  E == 0 ? d.setCenter(l.getCenterX(), l.getCenterY() - l.getHeight() / 2 - u.DEFAULT_EDGE_LENGTH - d.getHeight() / 2) : E == 1 ? d.setCenter(l.getCenterX() + l.getWidth() / 2 + u.DEFAULT_EDGE_LENGTH + d.getWidth() / 2, l.getCenterY()) : E == 2 ? d.setCenter(l.getCenterX(), l.getCenterY() + l.getHeight() / 2 + u.DEFAULT_EDGE_LENGTH + d.getHeight() / 2) : d.setCenter(l.getCenterX() - l.getWidth() / 2 - u.DEFAULT_EDGE_LENGTH - d.getWidth() / 2, l.getCenterY());
                }
              }, i.exports = w;
            }
          ),
          /***/
          991: (
            /***/
            (i, r, a) => {
              var f = a(551).FDLayoutNode, o = a(551).IMath;
              function y(h, s, g, u) {
                f.call(this, h, s, g, u);
              }
              y.prototype = Object.create(f.prototype);
              for (var t in f)
                y[t] = f[t];
              y.prototype.calculateDisplacement = function() {
                var h = this.graphManager.getLayout();
                this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += h.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += h.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += h.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += h.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > h.coolingFactor * h.maxNodeDisplacement && (this.displacementX = h.coolingFactor * h.maxNodeDisplacement * o.sign(this.displacementX)), Math.abs(this.displacementY) > h.coolingFactor * h.maxNodeDisplacement && (this.displacementY = h.coolingFactor * h.maxNodeDisplacement * o.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
              }, y.prototype.propogateDisplacementToChildren = function(h, s) {
                for (var g = this.getChild().getNodes(), u, N = 0; N < g.length; N++)
                  u = g[N], u.getChild() == null ? (u.displacementX += h, u.displacementY += s) : u.propogateDisplacementToChildren(h, s);
              }, y.prototype.move = function() {
                var h = this.graphManager.getLayout();
                (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), h.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
              }, y.prototype.setPred1 = function(h) {
                this.pred1 = h;
              }, y.prototype.getPred1 = function() {
                return pred1;
              }, y.prototype.getPred2 = function() {
                return pred2;
              }, y.prototype.setNext = function(h) {
                this.next = h;
              }, y.prototype.getNext = function() {
                return next;
              }, y.prototype.setProcessed = function(h) {
                this.processed = h;
              }, y.prototype.isProcessed = function() {
                return processed;
              }, i.exports = y;
            }
          ),
          /***/
          902: (
            /***/
            (i, r, a) => {
              function f(g) {
                if (Array.isArray(g)) {
                  for (var u = 0, N = Array(g.length); u < g.length; u++)
                    N[u] = g[u];
                  return N;
                } else
                  return Array.from(g);
              }
              var o = a(806), y = a(551).LinkedList, t = a(551).Matrix, h = a(551).SVD;
              function s() {
              }
              s.handleConstraints = function(g) {
                var u = {};
                u.fixedNodeConstraint = g.constraints.fixedNodeConstraint, u.alignmentConstraint = g.constraints.alignmentConstraint, u.relativePlacementConstraint = g.constraints.relativePlacementConstraint;
                for (var N = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), T = [], m = [], R = g.getAllNodes(), b = 0, I = 0; I < R.length; I++) {
                  var z = R[I];
                  z.getChild() == null && (v.set(z.id, b++), T.push(z.getCenterX()), m.push(z.getCenterY()), N.set(z.id, z));
                }
                u.relativePlacementConstraint && u.relativePlacementConstraint.forEach(function(P) {
                  !P.gap && P.gap != 0 && (P.left ? P.gap = o.DEFAULT_EDGE_LENGTH + N.get(P.left).getWidth() / 2 + N.get(P.right).getWidth() / 2 : P.gap = o.DEFAULT_EDGE_LENGTH + N.get(P.top).getHeight() / 2 + N.get(P.bottom).getHeight() / 2);
                });
                var H = function(V, _) {
                  return { x: V.x - _.x, y: V.y - _.y };
                }, J = function(V) {
                  var _ = 0, it = 0;
                  return V.forEach(function(K) {
                    _ += T[v.get(K)], it += m[v.get(K)];
                  }), { x: _ / V.size, y: it / V.size };
                }, w = function(V, _, it, K, at) {
                  function mt(ot, et) {
                    var yt = new Set(ot), rt = !0, j = !1, wt = void 0;
                    try {
                      for (var lt = et[Symbol.iterator](), ut; !(rt = (ut = lt.next()).done); rt = !0) {
                        var Gt = ut.value;
                        yt.add(Gt);
                      }
                    } catch (At) {
                      j = !0, wt = At;
                    } finally {
                      try {
                        !rt && lt.return && lt.return();
                      } finally {
                        if (j)
                          throw wt;
                      }
                    }
                    return yt;
                  }
                  var pt = /* @__PURE__ */ new Map();
                  V.forEach(function(ot, et) {
                    pt.set(et, 0);
                  }), V.forEach(function(ot, et) {
                    ot.forEach(function(yt) {
                      pt.set(yt.id, pt.get(yt.id) + 1);
                    });
                  });
                  var tt = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), dt = new y();
                  pt.forEach(function(ot, et) {
                    ot == 0 ? (dt.push(et), it || (_ == "horizontal" ? tt.set(et, v.has(et) ? T[v.get(et)] : K.get(et)) : tt.set(et, v.has(et) ? m[v.get(et)] : K.get(et)))) : tt.set(et, Number.NEGATIVE_INFINITY), it && Z.set(et, /* @__PURE__ */ new Set([et]));
                  }), it && at.forEach(function(ot) {
                    var et = [];
                    if (ot.forEach(function(j) {
                      it.has(j) && et.push(j);
                    }), et.length > 0) {
                      var yt = 0;
                      et.forEach(function(j) {
                        _ == "horizontal" ? (tt.set(j, v.has(j) ? T[v.get(j)] : K.get(j)), yt += tt.get(j)) : (tt.set(j, v.has(j) ? m[v.get(j)] : K.get(j)), yt += tt.get(j));
                      }), yt = yt / et.length, ot.forEach(function(j) {
                        it.has(j) || tt.set(j, yt);
                      });
                    } else {
                      var rt = 0;
                      ot.forEach(function(j) {
                        _ == "horizontal" ? rt += v.has(j) ? T[v.get(j)] : K.get(j) : rt += v.has(j) ? m[v.get(j)] : K.get(j);
                      }), rt = rt / ot.length, ot.forEach(function(j) {
                        tt.set(j, rt);
                      });
                    }
                  });
                  for (var Tt = function() {
                    var et = dt.shift(), yt = V.get(et);
                    yt.forEach(function(rt) {
                      if (tt.get(rt.id) < tt.get(et) + rt.gap)
                        if (it && it.has(rt.id)) {
                          var j = void 0;
                          if (_ == "horizontal" ? j = v.has(rt.id) ? T[v.get(rt.id)] : K.get(rt.id) : j = v.has(rt.id) ? m[v.get(rt.id)] : K.get(rt.id), tt.set(rt.id, j), j < tt.get(et) + rt.gap) {
                            var wt = tt.get(et) + rt.gap - j;
                            Z.get(et).forEach(function(lt) {
                              tt.set(lt, tt.get(lt) - wt);
                            });
                          }
                        } else
                          tt.set(rt.id, tt.get(et) + rt.gap);
                      pt.set(rt.id, pt.get(rt.id) - 1), pt.get(rt.id) == 0 && dt.push(rt.id), it && Z.set(rt.id, mt(Z.get(et), Z.get(rt.id)));
                    });
                  }; dt.length != 0; )
                    Tt();
                  if (it) {
                    var ct = /* @__PURE__ */ new Set();
                    V.forEach(function(ot, et) {
                      ot.length == 0 && ct.add(et);
                    });
                    var Dt = [];
                    Z.forEach(function(ot, et) {
                      if (ct.has(et)) {
                        var yt = !1, rt = !0, j = !1, wt = void 0;
                        try {
                          for (var lt = ot[Symbol.iterator](), ut; !(rt = (ut = lt.next()).done); rt = !0) {
                            var Gt = ut.value;
                            it.has(Gt) && (yt = !0);
                          }
                        } catch (Mt) {
                          j = !0, wt = Mt;
                        } finally {
                          try {
                            !rt && lt.return && lt.return();
                          } finally {
                            if (j)
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
                    }), Dt.forEach(function(ot, et) {
                      var yt = Number.POSITIVE_INFINITY, rt = Number.POSITIVE_INFINITY, j = Number.NEGATIVE_INFINITY, wt = Number.NEGATIVE_INFINITY, lt = !0, ut = !1, Gt = void 0;
                      try {
                        for (var At = ot[Symbol.iterator](), St; !(lt = (St = At.next()).done); lt = !0) {
                          var Mt = St.value, Ht = void 0;
                          _ == "horizontal" ? Ht = v.has(Mt) ? T[v.get(Mt)] : K.get(Mt) : Ht = v.has(Mt) ? m[v.get(Mt)] : K.get(Mt);
                          var kt = tt.get(Mt);
                          Ht < yt && (yt = Ht), Ht > j && (j = Ht), kt < rt && (rt = kt), kt > wt && (wt = kt);
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
                      var le = (yt + j) / 2 - (rt + wt) / 2, qt = !0, jt = !1, te = void 0;
                      try {
                        for (var Qt = ot[Symbol.iterator](), oe; !(qt = (oe = Qt.next()).done); qt = !0) {
                          var ee = oe.value;
                          tt.set(ee, tt.get(ee) + le);
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
                  return tt;
                }, ht = function(V) {
                  var _ = 0, it = 0, K = 0, at = 0;
                  if (V.forEach(function(Z) {
                    Z.left ? T[v.get(Z.left)] - T[v.get(Z.right)] >= 0 ? _++ : it++ : m[v.get(Z.top)] - m[v.get(Z.bottom)] >= 0 ? K++ : at++;
                  }), _ > it && K > at)
                    for (var mt = 0; mt < v.size; mt++)
                      T[mt] = -1 * T[mt], m[mt] = -1 * m[mt];
                  else if (_ > it)
                    for (var pt = 0; pt < v.size; pt++)
                      T[pt] = -1 * T[pt];
                  else if (K > at)
                    for (var tt = 0; tt < v.size; tt++)
                      m[tt] = -1 * m[tt];
                }, e = function(V) {
                  var _ = [], it = new y(), K = /* @__PURE__ */ new Set(), at = 0;
                  return V.forEach(function(mt, pt) {
                    if (!K.has(pt)) {
                      _[at] = [];
                      var tt = pt;
                      for (it.push(tt), K.add(tt), _[at].push(tt); it.length != 0; ) {
                        tt = it.shift();
                        var Z = V.get(tt);
                        Z.forEach(function(dt) {
                          K.has(dt.id) || (it.push(dt.id), K.add(dt.id), _[at].push(dt.id));
                        });
                      }
                      at++;
                    }
                  }), _;
                }, E = function(V) {
                  var _ = /* @__PURE__ */ new Map();
                  return V.forEach(function(it, K) {
                    _.set(K, []);
                  }), V.forEach(function(it, K) {
                    it.forEach(function(at) {
                      _.get(K).push(at), _.get(at.id).push({ id: K, gap: at.gap, direction: at.direction });
                    });
                  }), _;
                }, l = function(V) {
                  var _ = /* @__PURE__ */ new Map();
                  return V.forEach(function(it, K) {
                    _.set(K, []);
                  }), V.forEach(function(it, K) {
                    it.forEach(function(at) {
                      _.get(at.id).push({ id: K, gap: at.gap, direction: at.direction });
                    });
                  }), _;
                }, d = [], p = [], A = !1, M = !1, O = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), q = [];
                if (u.fixedNodeConstraint && u.fixedNodeConstraint.forEach(function(P) {
                  O.add(P.nodeId);
                }), u.relativePlacementConstraint && (u.relativePlacementConstraint.forEach(function(P) {
                  P.left ? (S.has(P.left) ? S.get(P.left).push({ id: P.right, gap: P.gap, direction: "horizontal" }) : S.set(P.left, [{ id: P.right, gap: P.gap, direction: "horizontal" }]), S.has(P.right) || S.set(P.right, [])) : (S.has(P.top) ? S.get(P.top).push({ id: P.bottom, gap: P.gap, direction: "vertical" }) : S.set(P.top, [{ id: P.bottom, gap: P.gap, direction: "vertical" }]), S.has(P.bottom) || S.set(P.bottom, []));
                }), D = E(S), q = e(D)), o.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                  if (u.fixedNodeConstraint && u.fixedNodeConstraint.length > 1)
                    u.fixedNodeConstraint.forEach(function(P, V) {
                      d[V] = [P.position.x, P.position.y], p[V] = [T[v.get(P.nodeId)], m[v.get(P.nodeId)]];
                    }), A = !0;
                  else if (u.alignmentConstraint)
                    (function() {
                      var P = 0;
                      if (u.alignmentConstraint.vertical) {
                        for (var V = u.alignmentConstraint.vertical, _ = function(tt) {
                          var Z = /* @__PURE__ */ new Set();
                          V[tt].forEach(function(ct) {
                            Z.add(ct);
                          });
                          var dt = new Set([].concat(f(Z)).filter(function(ct) {
                            return O.has(ct);
                          })), Tt = void 0;
                          dt.size > 0 ? Tt = T[v.get(dt.values().next().value)] : Tt = J(Z).x, V[tt].forEach(function(ct) {
                            d[P] = [Tt, m[v.get(ct)]], p[P] = [T[v.get(ct)], m[v.get(ct)]], P++;
                          });
                        }, it = 0; it < V.length; it++)
                          _(it);
                        A = !0;
                      }
                      if (u.alignmentConstraint.horizontal) {
                        for (var K = u.alignmentConstraint.horizontal, at = function(tt) {
                          var Z = /* @__PURE__ */ new Set();
                          K[tt].forEach(function(ct) {
                            Z.add(ct);
                          });
                          var dt = new Set([].concat(f(Z)).filter(function(ct) {
                            return O.has(ct);
                          })), Tt = void 0;
                          dt.size > 0 ? Tt = T[v.get(dt.values().next().value)] : Tt = J(Z).y, K[tt].forEach(function(ct) {
                            d[P] = [T[v.get(ct)], Tt], p[P] = [T[v.get(ct)], m[v.get(ct)]], P++;
                          });
                        }, mt = 0; mt < K.length; mt++)
                          at(mt);
                        A = !0;
                      }
                      u.relativePlacementConstraint && (M = !0);
                    })();
                  else if (u.relativePlacementConstraint) {
                    for (var G = 0, Y = 0, $ = 0; $ < q.length; $++)
                      q[$].length > G && (G = q[$].length, Y = $);
                    if (G < D.size / 2)
                      ht(u.relativePlacementConstraint), A = !1, M = !1;
                    else {
                      var B = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), X = [];
                      q[Y].forEach(function(P) {
                        S.get(P).forEach(function(V) {
                          V.direction == "horizontal" ? (B.has(P) ? B.get(P).push(V) : B.set(P, [V]), B.has(V.id) || B.set(V.id, []), X.push({ left: P, right: V.id })) : (x.has(P) ? x.get(P).push(V) : x.set(P, [V]), x.has(V.id) || x.set(V.id, []), X.push({ top: P, bottom: V.id }));
                        });
                      }), ht(X), M = !1;
                      var Q = w(B, "horizontal"), k = w(x, "vertical");
                      q[Y].forEach(function(P, V) {
                        p[V] = [T[v.get(P)], m[v.get(P)]], d[V] = [], Q.has(P) ? d[V][0] = Q.get(P) : d[V][0] = T[v.get(P)], k.has(P) ? d[V][1] = k.get(P) : d[V][1] = m[v.get(P)];
                      }), A = !0;
                    }
                  }
                  if (A) {
                    for (var ft = void 0, W = t.transpose(d), Ot = t.transpose(p), vt = 0; vt < W.length; vt++)
                      W[vt] = t.multGamma(W[vt]), Ot[vt] = t.multGamma(Ot[vt]);
                    var $t = t.multMat(W, t.transpose(Ot)), Vt = h.svd($t);
                    ft = t.multMat(Vt.V, t.transpose(Vt.U));
                    for (var Nt = 0; Nt < v.size; Nt++) {
                      var Yt = [T[Nt], m[Nt]], Xt = [ft[0][0], ft[1][0]], ie = [ft[0][1], ft[1][1]];
                      T[Nt] = t.dotProduct(Yt, Xt), m[Nt] = t.dotProduct(Yt, ie);
                    }
                    M && ht(u.relativePlacementConstraint);
                  }
                }
                if (o.ENFORCE_CONSTRAINTS) {
                  if (u.fixedNodeConstraint && u.fixedNodeConstraint.length > 0) {
                    var xt = { x: 0, y: 0 };
                    u.fixedNodeConstraint.forEach(function(P, V) {
                      var _ = { x: T[v.get(P.nodeId)], y: m[v.get(P.nodeId)] }, it = P.position, K = H(it, _);
                      xt.x += K.x, xt.y += K.y;
                    }), xt.x /= u.fixedNodeConstraint.length, xt.y /= u.fixedNodeConstraint.length, T.forEach(function(P, V) {
                      T[V] += xt.x;
                    }), m.forEach(function(P, V) {
                      m[V] += xt.y;
                    }), u.fixedNodeConstraint.forEach(function(P) {
                      T[v.get(P.nodeId)] = P.position.x, m[v.get(P.nodeId)] = P.position.y;
                    });
                  }
                  if (u.alignmentConstraint) {
                    if (u.alignmentConstraint.vertical)
                      for (var Jt = u.alignmentConstraint.vertical, Ft = function(V) {
                        var _ = /* @__PURE__ */ new Set();
                        Jt[V].forEach(function(at) {
                          _.add(at);
                        });
                        var it = new Set([].concat(f(_)).filter(function(at) {
                          return O.has(at);
                        })), K = void 0;
                        it.size > 0 ? K = T[v.get(it.values().next().value)] : K = J(_).x, _.forEach(function(at) {
                          O.has(at) || (T[v.get(at)] = K);
                        });
                      }, zt = 0; zt < Jt.length; zt++)
                        Ft(zt);
                    if (u.alignmentConstraint.horizontal)
                      for (var _t = u.alignmentConstraint.horizontal, ne = function(V) {
                        var _ = /* @__PURE__ */ new Set();
                        _t[V].forEach(function(at) {
                          _.add(at);
                        });
                        var it = new Set([].concat(f(_)).filter(function(at) {
                          return O.has(at);
                        })), K = void 0;
                        it.size > 0 ? K = m[v.get(it.values().next().value)] : K = J(_).y, _.forEach(function(at) {
                          O.has(at) || (m[v.get(at)] = K);
                        });
                      }, Pt = 0; Pt < _t.length; Pt++)
                        ne(Pt);
                  }
                  u.relativePlacementConstraint && function() {
                    var P = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Set();
                    if (O.forEach(function(It) {
                      mt.add(It), pt.add(It);
                    }), u.alignmentConstraint) {
                      if (u.alignmentConstraint.vertical)
                        for (var tt = u.alignmentConstraint.vertical, Z = function(st) {
                          _.set("dummy" + st, []), tt[st].forEach(function(Et) {
                            P.set(Et, "dummy" + st), _.get("dummy" + st).push(Et), O.has(Et) && mt.add("dummy" + st);
                          }), K.set("dummy" + st, T[v.get(tt[st][0])]);
                        }, dt = 0; dt < tt.length; dt++)
                          Z(dt);
                      if (u.alignmentConstraint.horizontal)
                        for (var Tt = u.alignmentConstraint.horizontal, ct = function(st) {
                          it.set("dummy" + st, []), Tt[st].forEach(function(Et) {
                            V.set(Et, "dummy" + st), it.get("dummy" + st).push(Et), O.has(Et) && pt.add("dummy" + st);
                          }), at.set("dummy" + st, m[v.get(Tt[st][0])]);
                        }, Dt = 0; Dt < Tt.length; Dt++)
                          ct(Dt);
                    }
                    var ot = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), yt = function(st) {
                      S.get(st).forEach(function(Et) {
                        var Zt = void 0, bt = void 0;
                        Et.direction == "horizontal" ? (Zt = P.get(st) ? P.get(st) : st, P.get(Et.id) ? bt = { id: P.get(Et.id), gap: Et.gap, direction: Et.direction } : bt = Et, ot.has(Zt) ? ot.get(Zt).push(bt) : ot.set(Zt, [bt]), ot.has(bt.id) || ot.set(bt.id, [])) : (Zt = V.get(st) ? V.get(st) : st, V.get(Et.id) ? bt = { id: V.get(Et.id), gap: Et.gap, direction: Et.direction } : bt = Et, et.has(Zt) ? et.get(Zt).push(bt) : et.set(Zt, [bt]), et.has(bt.id) || et.set(bt.id, []));
                      });
                    }, rt = !0, j = !1, wt = void 0;
                    try {
                      for (var lt = S.keys()[Symbol.iterator](), ut; !(rt = (ut = lt.next()).done); rt = !0) {
                        var Gt = ut.value;
                        yt(Gt);
                      }
                    } catch (It) {
                      j = !0, wt = It;
                    } finally {
                      try {
                        !rt && lt.return && lt.return();
                      } finally {
                        if (j)
                          throw wt;
                      }
                    }
                    var At = E(ot), St = E(et), Mt = e(At), Ht = e(St), kt = l(ot), le = l(et), qt = [], jt = [];
                    Mt.forEach(function(It, st) {
                      qt[st] = [], It.forEach(function(Et) {
                        kt.get(Et).length == 0 && qt[st].push(Et);
                      });
                    }), Ht.forEach(function(It, st) {
                      jt[st] = [], It.forEach(function(Et) {
                        le.get(Et).length == 0 && jt[st].push(Et);
                      });
                    });
                    var te = w(ot, "horizontal", mt, K, qt), Qt = w(et, "vertical", pt, at, jt), oe = function(st) {
                      _.get(st) ? _.get(st).forEach(function(Et) {
                        T[v.get(Et)] = te.get(st);
                      }) : T[v.get(st)] = te.get(st);
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
                    var Ae = function(st) {
                      it.get(st) ? it.get(st).forEach(function(Et) {
                        m[v.get(Et)] = Qt.get(st);
                      }) : m[v.get(st)] = Qt.get(st);
                    }, ue = !0, Ee = !1, ye = void 0;
                    try {
                      for (var ce = Qt.keys()[Symbol.iterator](), Ne; !(ue = (Ne = ce.next()).done); ue = !0) {
                        var ge = Ne.value;
                        Ae(ge);
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
                for (var Bt = 0; Bt < R.length; Bt++) {
                  var Ut = R[Bt];
                  Ut.getChild() == null && Ut.setCenter(T[v.get(Ut.id)], m[v.get(Ut.id)]);
                }
              }, i.exports = s;
            }
          ),
          /***/
          551: (
            /***/
            (i) => {
              i.exports = L;
            }
          )
          /******/
        }, C = {};
        function c(i) {
          var r = C[i];
          if (r !== void 0)
            return r.exports;
          var a = C[i] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return U[i](a, a.exports, c), a.exports;
        }
        var n = c(45);
        return n;
      })()
    );
  });
})(Me);
var Re = Me.exports;
const Wt = /* @__PURE__ */ De(Re), we = Wt.layoutBase.LinkedList;
let Ct = {};
Ct.getTopMostNodes = function(F) {
  let nt = {};
  for (let U = 0; U < F.length; U++)
    nt[F[U].id()] = !0;
  return F.filter(function(U, C) {
    typeof U == "number" && (U = C);
    let c = U.parent()[0];
    for (; c != null; ) {
      if (nt[c.id()])
        return !1;
      c = c.parent()[0];
    }
    return !0;
  });
};
Ct.connectComponents = function(F, nt, L, U) {
  let C = new we(), c = /* @__PURE__ */ new Set(), n = [], i, r, a, f = !1, o = 1, y = [], t = [];
  do {
    let h = F.collection();
    t.push(h);
    let s = L[0], g = F.collection();
    for (g.merge(s).merge(s.descendants().intersection(nt)), n.push(s), g.forEach(function(u) {
      C.push(u), c.add(u), h.merge(u);
    }); C.length != 0; ) {
      s = C.shift();
      let u = F.collection();
      s.neighborhood().nodes().forEach(function(N) {
        nt.intersection(s.edgesWith(N)).length > 0 && u.merge(N);
      });
      for (let N = 0; N < u.length; N++) {
        let v = u[N];
        i = L.intersection(v.union(v.ancestors())), i != null && !c.has(i[0]) && i.union(i.descendants()).forEach(function(m) {
          C.push(m), c.add(m), h.merge(m), L.has(m) && n.push(m);
        });
      }
    }
    if (h.forEach((u) => {
      nt.intersection(u.connectedEdges()).forEach((N) => {
        h.has(N.source()) && h.has(N.target()) && h.merge(N);
      });
    }), n.length == L.length && (f = !0), !f || f && o > 1) {
      r = n[0], a = r.connectedEdges().length, n.forEach(function(N) {
        N.connectedEdges().length < a && (a = N.connectedEdges().length, r = N);
      }), y.push(r.id());
      let u = F.collection();
      u.merge(n[0]), n.forEach(function(N) {
        u.merge(N);
      }), n = [], L = L.difference(u), o++;
    }
  } while (!f);
  return U && y.length > 0 && U.set("dummy" + (U.size + 1), y), t;
};
Ct.relocateComponent = function(F, nt, L) {
  if (!L.fixedNodeConstraint) {
    let U = Number.POSITIVE_INFINITY, C = Number.NEGATIVE_INFINITY, c = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    if (L.quality == "draft") {
      for (let [a, f] of nt.nodeIndexes) {
        let o = L.cy.getElementById(a);
        if (o) {
          let y = o.boundingBox(), t = nt.xCoords[f] - y.w / 2, h = nt.xCoords[f] + y.w / 2, s = nt.yCoords[f] - y.h / 2, g = nt.yCoords[f] + y.h / 2;
          t < U && (U = t), h > C && (C = h), s < c && (c = s), g > n && (n = g);
        }
      }
      let i = F.x - (C + U) / 2, r = F.y - (n + c) / 2;
      nt.xCoords = nt.xCoords.map((a) => a + i), nt.yCoords = nt.yCoords.map((a) => a + r);
    } else {
      Object.keys(nt).forEach(function(a) {
        let f = nt[a], o = f.getRect().x, y = f.getRect().x + f.getRect().width, t = f.getRect().y, h = f.getRect().y + f.getRect().height;
        o < U && (U = o), y > C && (C = y), t < c && (c = t), h > n && (n = h);
      });
      let i = F.x - (C + U) / 2, r = F.y - (n + c) / 2;
      Object.keys(nt).forEach(function(a) {
        let f = nt[a];
        f.setCenter(f.getCenterX() + i, f.getCenterY() + r);
      });
    }
  }
};
Ct.calcBoundingBox = function(F, nt, L, U) {
  let C = Number.MAX_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER, r, a, f, o, y = F.descendants().not(":parent"), t = y.length;
  for (let s = 0; s < t; s++) {
    let g = y[s];
    r = nt[U.get(g.id())] - g.width() / 2, a = nt[U.get(g.id())] + g.width() / 2, f = L[U.get(g.id())] - g.height() / 2, o = L[U.get(g.id())] + g.height() / 2, C > r && (C = r), c < a && (c = a), n > f && (n = f), i < o && (i = o);
  }
  let h = {};
  return h.topLeftX = C, h.topLeftY = n, h.width = c - C, h.height = i - n, h;
};
Ct.calcParentsWithoutChildren = function(F, nt) {
  let L = F.collection();
  return nt.nodes(":parent").forEach((U) => {
    let C = !1;
    U.children().forEach((c) => {
      c.css("display") != "none" && (C = !0);
    }), C || L.merge(U);
  }), L;
};
const Lt = Wt.layoutBase.Matrix, xe = Wt.layoutBase.SVD;
let me = function(F) {
  let nt = F.cy, L = F.eles, U = L.nodes(), C = L.nodes(":parent"), c = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = [], a = [], f = [], o = [], y = [], t = [], h = [], s = [], g;
  const u = 1e8, N = 1e-9;
  let v = F.piTol, T = F.samplingType, m = F.nodeSeparation, R, b = function() {
    let e = 0, E = 0, l = !1;
    for (; E < R; ) {
      e = Math.floor(Math.random() * g), l = !1;
      for (let d = 0; d < E; d++)
        if (o[d] == e) {
          l = !0;
          break;
        }
      if (!l)
        o[E] = e, E++;
      else
        continue;
    }
  }, I = function(e, E, l) {
    let d = [], p = 0, A = 0, M = 0, O, S = [], D = 0, q = 1;
    for (let G = 0; G < g; G++)
      S[G] = u;
    for (d[A] = e, S[e] = 0; A >= p; ) {
      M = d[p++];
      let G = r[M];
      for (let Y = 0; Y < G.length; Y++)
        O = n.get(G[Y]), S[O] == u && (S[O] = S[M] + 1, d[++A] = O);
      t[M][E] = S[M] * m;
    }
    if (l) {
      for (let G = 0; G < g; G++)
        t[G][E] < y[G] && (y[G] = t[G][E]);
      for (let G = 0; G < g; G++)
        y[G] > D && (D = y[G], q = G);
    }
    return q;
  }, z = function(e) {
    let E;
    if (e) {
      E = Math.floor(Math.random() * g);
      for (let l = 0; l < g; l++)
        y[l] = u;
      for (let l = 0; l < R; l++)
        o[l] = E, E = I(E, l, e);
    } else {
      b();
      for (let l = 0; l < R; l++)
        I(o[l], l, e);
    }
    for (let l = 0; l < g; l++)
      for (let d = 0; d < R; d++)
        t[l][d] *= t[l][d];
    for (let l = 0; l < R; l++)
      h[l] = [];
    for (let l = 0; l < R; l++)
      for (let d = 0; d < R; d++)
        h[l][d] = t[o[d]][l];
  }, H = function() {
    let e = xe.svd(h), E = e.S, l = e.U, d = e.V, p = E[0] * E[0] * E[0], A = [];
    for (let M = 0; M < R; M++) {
      A[M] = [];
      for (let O = 0; O < R; O++)
        A[M][O] = 0, M == O && (A[M][O] = E[M] / (E[M] * E[M] + p / (E[M] * E[M])));
    }
    s = Lt.multMat(Lt.multMat(d, A), Lt.transpose(l));
  }, J = function() {
    let e, E, l = [], d = [], p = [], A = [];
    for (let D = 0; D < g; D++)
      l[D] = Math.random(), d[D] = Math.random();
    l = Lt.normalize(l), d = Lt.normalize(d);
    let M = N, O = N, S;
    for (; ; ) {
      for (let D = 0; D < g; D++)
        p[D] = l[D];
      if (l = Lt.multGamma(Lt.multL(Lt.multGamma(p), t, s)), e = Lt.dotProduct(p, l), l = Lt.normalize(l), M = Lt.dotProduct(p, l), S = Math.abs(M / O), S <= 1 + v && S >= 1)
        break;
      O = M;
    }
    for (let D = 0; D < g; D++)
      p[D] = l[D];
    for (O = N; ; ) {
      for (let D = 0; D < g; D++)
        A[D] = d[D];
      if (A = Lt.minusOp(A, Lt.multCons(p, Lt.dotProduct(p, A))), d = Lt.multGamma(Lt.multL(Lt.multGamma(A), t, s)), E = Lt.dotProduct(A, d), d = Lt.normalize(d), M = Lt.dotProduct(A, d), S = Math.abs(M / O), S <= 1 + v && S >= 1)
        break;
      O = M;
    }
    for (let D = 0; D < g; D++)
      A[D] = d[D];
    a = Lt.multCons(p, Math.sqrt(Math.abs(e))), f = Lt.multCons(A, Math.sqrt(Math.abs(E)));
  };
  Ct.connectComponents(nt, L, Ct.getTopMostNodes(U), c), C.forEach(function(e) {
    Ct.connectComponents(nt, L, Ct.getTopMostNodes(e.descendants().intersection(L)), c);
  });
  let w = 0;
  for (let e = 0; e < U.length; e++)
    U[e].isParent() || n.set(U[e].id(), w++);
  for (let e of c.keys())
    n.set(e, w++);
  for (let e = 0; e < n.size; e++)
    r[e] = [];
  C.forEach(function(e) {
    let E = e.children().intersection(L);
    for (; E.nodes(":childless").length == 0; )
      E = E.nodes()[0].children().intersection(L);
    let l = 0, d = E.nodes(":childless")[0].connectedEdges().length;
    E.nodes(":childless").forEach(function(p, A) {
      p.connectedEdges().length < d && (d = p.connectedEdges().length, l = A);
    }), i.set(e.id(), E.nodes(":childless")[l].id());
  }), U.forEach(function(e) {
    let E;
    e.isParent() ? E = n.get(i.get(e.id())) : E = n.get(e.id()), e.neighborhood().nodes().forEach(function(l) {
      L.intersection(e.edgesWith(l)).length > 0 && (l.isParent() ? r[E].push(i.get(l.id())) : r[E].push(l.id()));
    });
  });
  for (let e of c.keys()) {
    let E = n.get(e), l;
    c.get(e).forEach(function(d) {
      nt.getElementById(d).isParent() ? l = i.get(d) : l = d, r[E].push(l), r[n.get(l)].push(e);
    });
  }
  g = n.size;
  let ht;
  if (g > 2) {
    R = g < F.sampleSize ? g : F.sampleSize;
    for (let e = 0; e < g; e++)
      t[e] = [];
    for (let e = 0; e < R; e++)
      s[e] = [];
    return F.quality == "draft" || F.step == "all" ? (z(T), H(), J(), ht = { nodeIndexes: n, xCoords: a, yCoords: f }) : (n.forEach(function(e, E) {
      a.push(nt.getElementById(E).position("x")), f.push(nt.getElementById(E).position("y"));
    }), ht = { nodeIndexes: n, xCoords: a, yCoords: f }), ht;
  } else {
    let e = n.keys(), E = nt.getElementById(e.next().value), l = E.position(), d = E.outerWidth();
    if (a.push(l.x), f.push(l.y), g == 2) {
      let A = nt.getElementById(e.next().value).outerWidth();
      a.push(l.x + d / 2 + A / 2 + F.idealEdgeLength), f.push(l.y);
    }
    return ht = { nodeIndexes: n, xCoords: a, yCoords: f }, ht;
  }
};
const Fe = Wt.CoSELayout, ae = Wt.CoSENode, se = Wt.layoutBase.PointD, he = Wt.layoutBase.DimensionD, Kt = Wt.layoutBase.LayoutConstants, Rt = Wt.layoutBase.FDLayoutConstants, gt = Wt.CoSEConstants;
let Le = function(F, nt) {
  let L = F.cy, U = F.eles, C = U.nodes(), c = U.edges(), n, i, r, a = {};
  F.randomize && (n = nt.nodeIndexes, i = nt.xCoords, r = nt.yCoords);
  const f = (N) => typeof N == "function", o = (N, v) => f(N) ? N(v) : N;
  let y = Ct.calcParentsWithoutChildren(L, U), t = function(N, v, T, m) {
    let R = v.length;
    for (let b = 0; b < R; b++) {
      let I = v[b], z = null;
      I.intersection(y).length == 0 && (z = I.children());
      let H, J = I.layoutDimensions({
        nodeDimensionsIncludeLabels: m.nodeDimensionsIncludeLabels
      });
      if (I.outerWidth() != null && I.outerHeight() != null)
        if (m.randomize)
          if (!I.isParent())
            H = N.add(new ae(
              T.graphManager,
              new se(i[n.get(I.id())] - J.w / 2, r[n.get(I.id())] - J.h / 2),
              new he(parseFloat(J.w), parseFloat(J.h))
            ));
          else {
            let w = Ct.calcBoundingBox(I, i, r, n);
            I.intersection(y).length == 0 ? H = N.add(new ae(
              T.graphManager,
              new se(w.topLeftX, w.topLeftY),
              new he(w.width, w.height)
            )) : H = N.add(new ae(
              T.graphManager,
              new se(w.topLeftX, w.topLeftY),
              new he(parseFloat(J.w), parseFloat(J.h))
            ));
          }
        else
          H = N.add(new ae(
            T.graphManager,
            new se(I.position("x") - J.w / 2, I.position("y") - J.h / 2),
            new he(parseFloat(J.w), parseFloat(J.h))
          ));
      else
        H = N.add(new ae(this.graphManager));
      if (H.id = I.data("id"), H.nodeRepulsion = o(m.nodeRepulsion, I), H.paddingLeft = parseInt(I.css("padding")), H.paddingTop = parseInt(I.css("padding")), H.paddingRight = parseInt(I.css("padding")), H.paddingBottom = parseInt(I.css("padding")), m.nodeDimensionsIncludeLabels && (H.labelWidth = I.boundingBox({ includeLabels: !0, includeNodes: !1, includeOverlays: !1 }).w, H.labelHeight = I.boundingBox({ includeLabels: !0, includeNodes: !1, includeOverlays: !1 }).h, H.labelPosVertical = I.css("text-valign"), H.labelPosHorizontal = I.css("text-halign")), a[I.data("id")] = H, isNaN(H.rect.x) && (H.rect.x = 0), isNaN(H.rect.y) && (H.rect.y = 0), z != null && z.length > 0) {
        let w;
        w = T.getGraphManager().add(T.newGraph(), H), t(w, z, T, m);
      }
    }
  }, h = function(N, v, T) {
    let m = 0, R = 0;
    for (let b = 0; b < T.length; b++) {
      let I = T[b], z = a[I.data("source")], H = a[I.data("target")];
      if (z && H && z !== H && z.getEdgesBetween(H).length == 0) {
        let J = v.add(N.newEdge(), z, H);
        J.id = I.id(), J.idealLength = o(F.idealEdgeLength, I), J.edgeElasticity = o(F.edgeElasticity, I), m += J.idealLength, R++;
      }
    }
    F.idealEdgeLength != null && (R > 0 ? gt.DEFAULT_EDGE_LENGTH = Rt.DEFAULT_EDGE_LENGTH = m / R : f(F.idealEdgeLength) ? gt.DEFAULT_EDGE_LENGTH = Rt.DEFAULT_EDGE_LENGTH = 50 : gt.DEFAULT_EDGE_LENGTH = Rt.DEFAULT_EDGE_LENGTH = F.idealEdgeLength, gt.MIN_REPULSION_DIST = Rt.MIN_REPULSION_DIST = Rt.DEFAULT_EDGE_LENGTH / 10, gt.DEFAULT_RADIAL_SEPARATION = Rt.DEFAULT_EDGE_LENGTH);
  }, s = function(N, v) {
    v.fixedNodeConstraint && (N.constraints.fixedNodeConstraint = v.fixedNodeConstraint), v.alignmentConstraint && (N.constraints.alignmentConstraint = v.alignmentConstraint), v.relativePlacementConstraint && (N.constraints.relativePlacementConstraint = v.relativePlacementConstraint);
  };
  F.nestingFactor != null && (gt.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = Rt.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = F.nestingFactor), F.gravity != null && (gt.DEFAULT_GRAVITY_STRENGTH = Rt.DEFAULT_GRAVITY_STRENGTH = F.gravity), F.numIter != null && (gt.MAX_ITERATIONS = Rt.MAX_ITERATIONS = F.numIter), F.gravityRange != null && (gt.DEFAULT_GRAVITY_RANGE_FACTOR = Rt.DEFAULT_GRAVITY_RANGE_FACTOR = F.gravityRange), F.gravityCompound != null && (gt.DEFAULT_COMPOUND_GRAVITY_STRENGTH = Rt.DEFAULT_COMPOUND_GRAVITY_STRENGTH = F.gravityCompound), F.gravityRangeCompound != null && (gt.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = Rt.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = F.gravityRangeCompound), F.initialEnergyOnIncremental != null && (gt.DEFAULT_COOLING_FACTOR_INCREMENTAL = Rt.DEFAULT_COOLING_FACTOR_INCREMENTAL = F.initialEnergyOnIncremental), F.tilingCompareBy != null && (gt.TILING_COMPARE_BY = F.tilingCompareBy), F.quality == "proof" ? Kt.QUALITY = 2 : Kt.QUALITY = 0, gt.NODE_DIMENSIONS_INCLUDE_LABELS = Rt.NODE_DIMENSIONS_INCLUDE_LABELS = Kt.NODE_DIMENSIONS_INCLUDE_LABELS = F.nodeDimensionsIncludeLabels, gt.DEFAULT_INCREMENTAL = Rt.DEFAULT_INCREMENTAL = Kt.DEFAULT_INCREMENTAL = !F.randomize, gt.ANIMATE = Rt.ANIMATE = Kt.ANIMATE = F.animate, gt.TILE = F.tile, gt.TILING_PADDING_VERTICAL = typeof F.tilingPaddingVertical == "function" ? F.tilingPaddingVertical.call() : F.tilingPaddingVertical, gt.TILING_PADDING_HORIZONTAL = typeof F.tilingPaddingHorizontal == "function" ? F.tilingPaddingHorizontal.call() : F.tilingPaddingHorizontal, gt.DEFAULT_INCREMENTAL = Rt.DEFAULT_INCREMENTAL = Kt.DEFAULT_INCREMENTAL = !0, gt.PURE_INCREMENTAL = !F.randomize, Kt.DEFAULT_UNIFORM_LEAF_NODE_SIZES = F.uniformNodeDimensions, F.step == "transformed" && (gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, gt.ENFORCE_CONSTRAINTS = !1, gt.APPLY_LAYOUT = !1), F.step == "enforced" && (gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, gt.ENFORCE_CONSTRAINTS = !0, gt.APPLY_LAYOUT = !1), F.step == "cose" && (gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, gt.ENFORCE_CONSTRAINTS = !1, gt.APPLY_LAYOUT = !0), F.step == "all" && (F.randomize ? gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : gt.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, gt.ENFORCE_CONSTRAINTS = !0, gt.APPLY_LAYOUT = !0), F.fixedNodeConstraint || F.alignmentConstraint || F.relativePlacementConstraint ? gt.TREE_REDUCTION_ON_INCREMENTAL = !1 : gt.TREE_REDUCTION_ON_INCREMENTAL = !0;
  let g = new Fe(), u = g.newGraphManager();
  return t(u.addRoot(), Ct.getTopMostNodes(C), g, F), h(g, u, c), s(g, F), g.runLayout(), a;
};
const Se = Object.freeze({
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
  nodeRepulsion: (F) => 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: (F) => 50,
  // Divisor to compute edge forces
  edgeElasticity: (F) => 0.45,
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
});
let Pe = class {
  constructor(nt) {
    this.options = Oe({}, Se, nt);
  }
  run() {
    let nt = this, L = this.options, U = L.cy, C = L.eles, c = [], n = [], i, r = [];
    L.fixedNodeConstraint && (!Array.isArray(L.fixedNodeConstraint) || L.fixedNodeConstraint.length == 0) && (L.fixedNodeConstraint = void 0), L.alignmentConstraint && (L.alignmentConstraint.vertical && (!Array.isArray(L.alignmentConstraint.vertical) || L.alignmentConstraint.vertical.length == 0) && (L.alignmentConstraint.vertical = void 0), L.alignmentConstraint.horizontal && (!Array.isArray(L.alignmentConstraint.horizontal) || L.alignmentConstraint.horizontal.length == 0) && (L.alignmentConstraint.horizontal = void 0)), L.relativePlacementConstraint && (!Array.isArray(L.relativePlacementConstraint) || L.relativePlacementConstraint.length == 0) && (L.relativePlacementConstraint = void 0), (L.fixedNodeConstraint || L.alignmentConstraint || L.relativePlacementConstraint) && (L.tile = !1, L.packComponents = !1);
    let f, o = !1;
    if (U.layoutUtilities && L.packComponents && (f = U.layoutUtilities("get"), f || (f = U.layoutUtilities()), o = !0), C.nodes().length > 0)
      if (o) {
        let t = Ct.getTopMostNodes(L.eles.nodes());
        if (i = Ct.connectComponents(U, L.eles, t), i.forEach(function(s) {
          let g = s.boundingBox();
          r.push({ x: g.x1 + g.w / 2, y: g.y1 + g.h / 2 });
        }), L.randomize && i.forEach(function(s) {
          L.eles = s, c.push(me(L));
        }), L.quality == "default" || L.quality == "proof") {
          let s = U.collection();
          if (L.tile) {
            let g = /* @__PURE__ */ new Map(), u = [], N = [], v = 0, T = { nodeIndexes: g, xCoords: u, yCoords: N }, m = [];
            if (i.forEach(function(R, b) {
              R.edges().length == 0 && (R.nodes().forEach(function(I, z) {
                s.merge(R.nodes()[z]), I.isParent() || (T.nodeIndexes.set(R.nodes()[z].id(), v++), T.xCoords.push(R.nodes()[0].position().x), T.yCoords.push(R.nodes()[0].position().y));
              }), m.push(b));
            }), s.length > 1) {
              let R = s.boundingBox();
              r.push({ x: R.x1 + R.w / 2, y: R.y1 + R.h / 2 }), i.push(s), c.push(T);
              for (let b = m.length - 1; b >= 0; b--)
                i.splice(m[b], 1), c.splice(m[b], 1), r.splice(m[b], 1);
            }
          }
          i.forEach(function(g, u) {
            L.eles = g, n.push(Le(L, c[u])), Ct.relocateComponent(r[u], n[u], L);
          });
        } else
          i.forEach(function(s, g) {
            Ct.relocateComponent(r[g], c[g], L);
          });
        let h = /* @__PURE__ */ new Set();
        if (i.length > 1) {
          let s = [], g = C.filter((N) => N.css("display") == "none");
          i.forEach(function(N, v) {
            let T;
            if (L.quality == "draft" && (T = c[v].nodeIndexes), N.nodes().not(g).length > 0) {
              let m = {};
              m.edges = [], m.nodes = [];
              let R;
              N.nodes().not(g).forEach(function(b) {
                if (L.quality == "draft")
                  if (!b.isParent())
                    R = T.get(b.id()), m.nodes.push({ x: c[v].xCoords[R] - b.boundingbox().w / 2, y: c[v].yCoords[R] - b.boundingbox().h / 2, width: b.boundingbox().w, height: b.boundingbox().h });
                  else {
                    let I = Ct.calcBoundingBox(b, c[v].xCoords, c[v].yCoords, T);
                    m.nodes.push({ x: I.topLeftX, y: I.topLeftY, width: I.width, height: I.height });
                  }
                else
                  n[v][b.id()] && m.nodes.push({ x: n[v][b.id()].getLeft(), y: n[v][b.id()].getTop(), width: n[v][b.id()].getWidth(), height: n[v][b.id()].getHeight() });
              }), N.edges().forEach(function(b) {
                let I = b.source(), z = b.target();
                if (I.css("display") != "none" && z.css("display") != "none")
                  if (L.quality == "draft") {
                    let H = T.get(I.id()), J = T.get(z.id()), w = [], ht = [];
                    if (I.isParent()) {
                      let e = Ct.calcBoundingBox(I, c[v].xCoords, c[v].yCoords, T);
                      w.push(e.topLeftX + e.width / 2), w.push(e.topLeftY + e.height / 2);
                    } else
                      w.push(c[v].xCoords[H]), w.push(c[v].yCoords[H]);
                    if (z.isParent()) {
                      let e = Ct.calcBoundingBox(z, c[v].xCoords, c[v].yCoords, T);
                      ht.push(e.topLeftX + e.width / 2), ht.push(e.topLeftY + e.height / 2);
                    } else
                      ht.push(c[v].xCoords[J]), ht.push(c[v].yCoords[J]);
                    m.edges.push({ startX: w[0], startY: w[1], endX: ht[0], endY: ht[1] });
                  } else
                    n[v][I.id()] && n[v][z.id()] && m.edges.push({ startX: n[v][I.id()].getCenterX(), startY: n[v][I.id()].getCenterY(), endX: n[v][z.id()].getCenterX(), endY: n[v][z.id()].getCenterY() });
              }), m.nodes.length > 0 && (s.push(m), h.add(v));
            }
          });
          let u = f.packComponents(s, L.randomize).shifts;
          if (L.quality == "draft")
            c.forEach(function(N, v) {
              let T = N.xCoords.map((R) => R + u[v].dx), m = N.yCoords.map((R) => R + u[v].dy);
              N.xCoords = T, N.yCoords = m;
            });
          else {
            let N = 0;
            h.forEach((v) => {
              Object.keys(n[v]).forEach(function(T) {
                let m = n[v][T];
                m.setCenter(m.getCenterX() + u[N].dx, m.getCenterY() + u[N].dy);
              }), N++;
            });
          }
        }
      } else {
        let t = L.eles.boundingBox();
        if (r.push({ x: t.x1 + t.w / 2, y: t.y1 + t.h / 2 }), L.randomize) {
          let h = me(L);
          c.push(h);
        }
        L.quality == "default" || L.quality == "proof" ? (n.push(Le(L, c[0])), Ct.relocateComponent(r[0], n[0], L)) : Ct.relocateComponent(r[0], c[0], L);
      }
    let y = function(t, h) {
      if (L.quality == "default" || L.quality == "proof") {
        typeof t == "number" && (t = h);
        let s, g, u = t.data("id");
        return n.forEach(function(N) {
          u in N && (s = { x: N[u].getRect().getCenterX(), y: N[u].getRect().getCenterY() }, g = N[u]);
        }), L.nodeDimensionsIncludeLabels && (g.labelWidth && (g.labelPosHorizontal == "left" ? s.x += g.labelWidth / 2 : g.labelPosHorizontal == "right" && (s.x -= g.labelWidth / 2)), g.labelHeight && (g.labelPosVertical == "top" ? s.y += g.labelHeight / 2 : g.labelPosVertical == "bottom" && (s.y -= g.labelHeight / 2))), s == null && (s = { x: t.position("x"), y: t.position("y") }), {
          x: s.x,
          y: s.y
        };
      } else {
        let s;
        return c.forEach(function(g) {
          let u = g.nodeIndexes.get(t.id());
          u != null && (s = { x: g.xCoords[u], y: g.yCoords[u] });
        }), s == null && (s = { x: t.position("x"), y: t.position("y") }), {
          x: s.x,
          y: s.y
        };
      }
    };
    if (L.quality == "default" || L.quality == "proof" || L.randomize) {
      let t = Ct.calcParentsWithoutChildren(U, C), h = C.filter((s) => s.css("display") == "none");
      L.eles = C.not(h), C.nodes().not(":parent").not(h).layoutPositions(nt, L, y), t.length > 0 && t.forEach((s) => {
        s.position(y(s));
      });
    } else
      console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
  }
}, be = function(F) {
  F && F("layout", "fcose", Pe);
};
export {
  be as default
};
