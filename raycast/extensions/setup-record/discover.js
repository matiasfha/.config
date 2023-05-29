"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/dns-equal@1.0.0/node_modules/dns-equal/index.js
var require_dns_equal = __commonJS({
  "node_modules/.pnpm/dns-equal@1.0.0/node_modules/dns-equal/index.js"(exports, module2) {
    "use strict";
    var r = /[A-Z]/g;
    module2.exports = function(a, b) {
      a = a.replace(r, replacer);
      b = b.replace(r, replacer);
      return a === b;
    };
    function replacer(m) {
      return m.toLowerCase();
    }
  }
});

// node_modules/.pnpm/array-flatten@2.1.2/node_modules/array-flatten/array-flatten.js
var require_array_flatten = __commonJS({
  "node_modules/.pnpm/array-flatten@2.1.2/node_modules/array-flatten/array-flatten.js"(exports, module2) {
    "use strict";
    module2.exports = flatten;
    module2.exports.from = flattenFrom;
    module2.exports.depth = flattenDepth;
    module2.exports.fromDepth = flattenFromDepth;
    function flatten(array) {
      if (!Array.isArray(array)) {
        throw new TypeError("Expected value to be an array");
      }
      return flattenFrom(array);
    }
    function flattenFrom(array) {
      return flattenDown(array, []);
    }
    function flattenDepth(array, depth) {
      if (!Array.isArray(array)) {
        throw new TypeError("Expected value to be an array");
      }
      return flattenFromDepth(array, depth);
    }
    function flattenFromDepth(array, depth) {
      if (typeof depth !== "number") {
        throw new TypeError("Expected the depth to be a number");
      }
      return flattenDownDepth(array, [], depth);
    }
    function flattenDown(array, result) {
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (Array.isArray(value)) {
          flattenDown(value, result);
        } else {
          result.push(value);
        }
      }
      return result;
    }
    function flattenDownDepth(array, result, depth) {
      depth--;
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (depth > -1 && Array.isArray(value)) {
          flattenDownDepth(value, result, depth);
        } else {
          result.push(value);
        }
      }
      return result;
    }
  }
});

// node_modules/.pnpm/multicast-dns-service-types@1.1.0/node_modules/multicast-dns-service-types/index.js
var require_multicast_dns_service_types = __commonJS({
  "node_modules/.pnpm/multicast-dns-service-types@1.1.0/node_modules/multicast-dns-service-types/index.js"(exports) {
    var prefix = function(name) {
      return "_" + name;
    };
    var defined = function(name) {
      return name;
    };
    exports.stringify = function(data) {
      if (typeof data === "object" && data && data.name)
        return exports.stringify(data.name, data.protocol, data.subtypes);
      return Array.prototype.concat.apply([], arguments).filter(defined).map(prefix).join(".");
    };
    exports.parse = function(str) {
      var parts = str.split(".");
      for (var i = 0; i < parts.length; i++) {
        if (parts[i][0] !== "_")
          continue;
        parts[i] = parts[i].slice(1);
      }
      return {
        name: parts.shift(),
        protocol: parts.shift() || null,
        subtypes: parts
      };
    };
    exports.tcp = function(name) {
      return exports.stringify(name, "tcp", Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1)));
    };
    exports.udp = function(name) {
      return exports.stringify(name, "udp", Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 1)));
    };
  }
});

// node_modules/.pnpm/buffer-indexof@1.1.1/node_modules/buffer-indexof/index.js
var require_buffer_indexof = __commonJS({
  "node_modules/.pnpm/buffer-indexof@1.1.1/node_modules/buffer-indexof/index.js"(exports, module2) {
    module2.exports = function bufferIndexOf(buff, search, offset, encoding) {
      if (!Buffer.isBuffer(buff)) {
        throw TypeError("buffer is not a buffer");
      }
      if (encoding === void 0 && typeof offset === "string") {
        encoding = offset;
        offset = void 0;
      }
      if (typeof search === "string") {
        search = new Buffer(search, encoding || "utf8");
      } else if (typeof search === "number" && !isNaN(search)) {
        search = new Buffer([search]);
      } else if (!Buffer.isBuffer(search)) {
        throw TypeError("search is not a bufferable object");
      }
      if (search.length === 0) {
        return -1;
      }
      if (offset === void 0 || typeof offset === "number" && isNaN(offset)) {
        offset = 0;
      } else if (typeof offset !== "number") {
        throw TypeError("offset is not a number");
      }
      if (offset < 0) {
        offset = buff.length + offset;
      }
      if (offset < 0) {
        offset = 0;
      }
      var m = 0;
      var s = -1;
      for (var i = offset; i < buff.length; ++i) {
        if (buff[i] != search[m]) {
          s = -1;
          i -= m - 1;
          m = 0;
        }
        if (buff[i] == search[m]) {
          if (s == -1) {
            s = i;
          }
          ++m;
          if (m == search.length) {
            break;
          }
        }
      }
      if (s > -1 && buff.length - s < search.length) {
        return -1;
      }
      return s;
    };
  }
});

// node_modules/.pnpm/dns-txt@2.0.2/node_modules/dns-txt/index.js
var require_dns_txt = __commonJS({
  "node_modules/.pnpm/dns-txt@2.0.2/node_modules/dns-txt/index.js"(exports, module2) {
    "use strict";
    var bindexOf = require_buffer_indexof();
    var equalSign = new Buffer("=");
    module2.exports = function(opts) {
      var binary = opts ? opts.binary : false;
      var that = {};
      that.encode = function(data, buf, offset) {
        if (!data)
          data = {};
        if (!offset)
          offset = 0;
        if (!buf)
          buf = new Buffer(that.encodingLength(data) + offset);
        var oldOffset = offset;
        var keys = Object.keys(data);
        if (keys.length === 0) {
          buf[offset] = 0;
          offset++;
        }
        keys.forEach(function(key) {
          var val = data[key];
          var oldOffset2 = offset;
          offset++;
          if (val === true) {
            offset += buf.write(key, offset);
          } else if (Buffer.isBuffer(val)) {
            offset += buf.write(key + "=", offset);
            var len = val.length;
            val.copy(buf, offset, 0, len);
            offset += len;
          } else {
            offset += buf.write(key + "=" + val, offset);
          }
          buf[oldOffset2] = offset - oldOffset2 - 1;
        });
        that.encode.bytes = offset - oldOffset;
        return buf;
      };
      that.decode = function(buf, offset, len) {
        if (!offset)
          offset = 0;
        if (!Number.isFinite(len))
          len = buf.length;
        var data = {};
        var oldOffset = offset;
        while (offset < len) {
          var b = decodeBlock(buf, offset);
          var i = bindexOf(b, equalSign);
          offset += decodeBlock.bytes;
          if (b.length === 0)
            continue;
          if (i === -1)
            data[b.toString().toLowerCase()] = true;
          else if (i === 0)
            continue;
          else {
            var key = b.slice(0, i).toString().toLowerCase();
            if (key in data)
              continue;
            data[key] = binary ? b.slice(i + 1) : b.slice(i + 1).toString();
          }
        }
        that.decode.bytes = offset - oldOffset;
        return data;
      };
      that.encodingLength = function(data) {
        if (!data)
          return 1;
        var keys = Object.keys(data);
        if (keys.length === 0)
          return 1;
        return keys.reduce(function(total, key) {
          var val = data[key];
          total += Buffer.byteLength(key) + 1;
          if (Buffer.isBuffer(val))
            total += val.length + 1;
          else if (val !== true)
            total += Buffer.byteLength(String(val)) + 1;
          return total;
        }, 0);
      };
      return that;
    };
    function decodeBlock(buf, offset) {
      var len = buf[offset];
      var to = offset + 1 + len;
      var b = buf.slice(offset + 1, to > buf.length ? buf.length : to);
      decodeBlock.bytes = len + 1;
      return b;
    }
  }
});

// node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/service.js
var require_service = __commonJS({
  "node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/service.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    var serviceName = require_multicast_dns_service_types();
    var txt = require_dns_txt()();
    var TLD = ".local";
    module2.exports = Service;
    util.inherits(Service, EventEmitter);
    function Service(opts) {
      if (!opts.name)
        throw new Error("Required name not given");
      if (!opts.type)
        throw new Error("Required type not given");
      if (!opts.port)
        throw new Error("Required port not given");
      this.name = opts.name;
      this.protocol = opts.protocol || "tcp";
      this.type = serviceName.stringify(opts.type, this.protocol);
      this.host = opts.host || os.hostname();
      this.port = opts.port;
      this.fqdn = this.name + "." + this.type + TLD;
      this.subtypes = opts.subtypes || null;
      this.txt = opts.txt || null;
      this.published = false;
      this._activated = false;
    }
    Service.prototype._records = function() {
      var records = [rr_ptr(this), rr_srv(this), rr_txt(this)];
      var self = this;
      var interfaces = os.networkInterfaces();
      Object.keys(interfaces).forEach(function(name) {
        interfaces[name].forEach(function(addr) {
          if (addr.internal)
            return;
          if (addr.family === "IPv4") {
            records.push(rr_a(self, addr.address));
          } else {
            records.push(rr_aaaa(self, addr.address));
          }
        });
      });
      return records;
    };
    function rr_ptr(service) {
      return {
        name: service.type + TLD,
        type: "PTR",
        ttl: 28800,
        data: service.fqdn
      };
    }
    function rr_srv(service) {
      return {
        name: service.fqdn,
        type: "SRV",
        ttl: 120,
        data: {
          port: service.port,
          target: service.host
        }
      };
    }
    function rr_txt(service) {
      return {
        name: service.fqdn,
        type: "TXT",
        ttl: 4500,
        data: txt.encode(service.txt)
      };
    }
    function rr_a(service, ip) {
      return {
        name: service.host,
        type: "A",
        ttl: 120,
        data: ip
      };
    }
    function rr_aaaa(service, ip) {
      return {
        name: service.host,
        type: "AAAA",
        ttl: 120,
        data: ip
      };
    }
  }
});

// node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/registry.js
var require_registry = __commonJS({
  "node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/registry.js"(exports, module2) {
    "use strict";
    var dnsEqual = require_dns_equal();
    var flatten = require_array_flatten();
    var Service = require_service();
    var REANNOUNCE_MAX_MS = 60 * 60 * 1e3;
    var REANNOUNCE_FACTOR = 3;
    module2.exports = Registry;
    function Registry(server) {
      this._server = server;
      this._services = [];
    }
    Registry.prototype.publish = function(opts) {
      var service = new Service(opts);
      service.start = start.bind(service, this);
      service.stop = stop.bind(service, this);
      service.start({ probe: opts.probe !== false });
      return service;
    };
    Registry.prototype.unpublishAll = function(cb) {
      teardown(this._server, this._services, cb);
      this._services = [];
    };
    Registry.prototype.destroy = function() {
      this._services.forEach(function(service) {
        service._destroyed = true;
      });
    };
    function start(registry, opts) {
      if (this._activated)
        return;
      this._activated = true;
      registry._services.push(this);
      if (opts.probe) {
        var service = this;
        probe(registry._server.mdns, this, function(exists) {
          if (exists) {
            service.stop();
            service.emit("error", new Error("Service name is already in use on the network"));
            return;
          }
          announce(registry._server, service);
        });
      } else {
        announce(registry._server, this);
      }
    }
    function stop(registry, cb) {
      if (!this._activated)
        return;
      teardown(registry._server, this, cb);
      var index = registry._services.indexOf(this);
      if (index !== -1)
        registry._services.splice(index, 1);
    }
    function probe(mdns, service, cb) {
      var sent = false;
      var retries = 0;
      var timer;
      mdns.on("response", onresponse);
      setTimeout(send, Math.random() * 250);
      function send() {
        if (!service._activated || service._destroyed)
          return;
        mdns.query(service.fqdn, "ANY", function() {
          sent = true;
          timer = setTimeout(++retries < 3 ? send : done, 250);
          timer.unref();
        });
      }
      function onresponse(packet) {
        if (!sent)
          return;
        if (packet.answers.some(matchRR) || packet.additionals.some(matchRR))
          done(true);
      }
      function matchRR(rr) {
        return dnsEqual(rr.name, service.fqdn);
      }
      function done(exists) {
        mdns.removeListener("response", onresponse);
        clearTimeout(timer);
        cb(!!exists);
      }
    }
    function announce(server, service) {
      var delay = 1e3;
      var packet = service._records();
      server.register(packet);
      (function broadcast() {
        if (!service._activated || service._destroyed)
          return;
        server.mdns.respond(packet, function() {
          if (!service.published) {
            service._activated = true;
            service.published = true;
            service.emit("up");
          }
          delay = delay * REANNOUNCE_FACTOR;
          if (delay < REANNOUNCE_MAX_MS && !service._destroyed) {
            setTimeout(broadcast, delay).unref();
          }
        });
      })();
    }
    function teardown(server, services, cb) {
      if (!Array.isArray(services))
        services = [services];
      services = services.filter(function(service) {
        return service._activated;
      });
      var records = flatten.depth(services.map(function(service) {
        service._activated = false;
        var records2 = service._records();
        records2.forEach(function(record) {
          record.ttl = 0;
        });
        return records2;
      }), 1);
      if (records.length === 0)
        return cb && cb();
      server.unregister(records);
      server.mdns.respond(records, function() {
        services.forEach(function(service) {
          service.published = false;
        });
        if (cb)
          cb.apply(null, arguments);
      });
    }
  }
});

// node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/types.js"(exports) {
    exports.toString = function(type) {
      switch (type) {
        case 1:
          return "A";
        case 10:
          return "NULL";
        case 28:
          return "AAAA";
        case 18:
          return "AFSDB";
        case 42:
          return "APL";
        case 257:
          return "CAA";
        case 60:
          return "CDNSKEY";
        case 59:
          return "CDS";
        case 37:
          return "CERT";
        case 5:
          return "CNAME";
        case 49:
          return "DHCID";
        case 32769:
          return "DLV";
        case 39:
          return "DNAME";
        case 48:
          return "DNSKEY";
        case 43:
          return "DS";
        case 55:
          return "HIP";
        case 13:
          return "HINFO";
        case 45:
          return "IPSECKEY";
        case 25:
          return "KEY";
        case 36:
          return "KX";
        case 29:
          return "LOC";
        case 15:
          return "MX";
        case 35:
          return "NAPTR";
        case 2:
          return "NS";
        case 47:
          return "NSEC";
        case 50:
          return "NSEC3";
        case 51:
          return "NSEC3PARAM";
        case 12:
          return "PTR";
        case 46:
          return "RRSIG";
        case 17:
          return "RP";
        case 24:
          return "SIG";
        case 6:
          return "SOA";
        case 99:
          return "SPF";
        case 33:
          return "SRV";
        case 44:
          return "SSHFP";
        case 32768:
          return "TA";
        case 249:
          return "TKEY";
        case 52:
          return "TLSA";
        case 250:
          return "TSIG";
        case 16:
          return "TXT";
        case 252:
          return "AXFR";
        case 251:
          return "IXFR";
        case 41:
          return "OPT";
        case 255:
          return "ANY";
      }
      return "UNKNOWN_" + type;
    };
    exports.toType = function(name) {
      switch (name.toUpperCase()) {
        case "A":
          return 1;
        case "NULL":
          return 10;
        case "AAAA":
          return 28;
        case "AFSDB":
          return 18;
        case "APL":
          return 42;
        case "CAA":
          return 257;
        case "CDNSKEY":
          return 60;
        case "CDS":
          return 59;
        case "CERT":
          return 37;
        case "CNAME":
          return 5;
        case "DHCID":
          return 49;
        case "DLV":
          return 32769;
        case "DNAME":
          return 39;
        case "DNSKEY":
          return 48;
        case "DS":
          return 43;
        case "HIP":
          return 55;
        case "HINFO":
          return 13;
        case "IPSECKEY":
          return 45;
        case "KEY":
          return 25;
        case "KX":
          return 36;
        case "LOC":
          return 29;
        case "MX":
          return 15;
        case "NAPTR":
          return 35;
        case "NS":
          return 2;
        case "NSEC":
          return 47;
        case "NSEC3":
          return 50;
        case "NSEC3PARAM":
          return 51;
        case "PTR":
          return 12;
        case "RRSIG":
          return 46;
        case "RP":
          return 17;
        case "SIG":
          return 24;
        case "SOA":
          return 6;
        case "SPF":
          return 99;
        case "SRV":
          return 33;
        case "SSHFP":
          return 44;
        case "TA":
          return 32768;
        case "TKEY":
          return 249;
        case "TLSA":
          return 52;
        case "TSIG":
          return 250;
        case "TXT":
          return 16;
        case "AXFR":
          return 252;
        case "IXFR":
          return 251;
        case "OPT":
          return 41;
        case "ANY":
          return 255;
        case "*":
          return 255;
      }
      return 0;
    };
  }
});

// node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/rcodes.js
var require_rcodes = __commonJS({
  "node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/rcodes.js"(exports) {
    exports.toString = function(rcode) {
      switch (rcode) {
        case 0:
          return "NOERROR";
        case 1:
          return "FORMERR";
        case 2:
          return "SERVFAIL";
        case 3:
          return "NXDOMAIN";
        case 4:
          return "NOTIMP";
        case 5:
          return "REFUSED";
        case 6:
          return "YXDOMAIN";
        case 7:
          return "YXRRSET";
        case 8:
          return "NXRRSET";
        case 9:
          return "NOTAUTH";
        case 10:
          return "NOTZONE";
        case 11:
          return "RCODE_11";
        case 12:
          return "RCODE_12";
        case 13:
          return "RCODE_13";
        case 14:
          return "RCODE_14";
        case 15:
          return "RCODE_15";
      }
      return "RCODE_" + rcode;
    };
    exports.toRcode = function(code) {
      switch (code.toUpperCase()) {
        case "NOERROR":
          return 0;
        case "FORMERR":
          return 1;
        case "SERVFAIL":
          return 2;
        case "NXDOMAIN":
          return 3;
        case "NOTIMP":
          return 4;
        case "REFUSED":
          return 5;
        case "YXDOMAIN":
          return 6;
        case "YXRRSET":
          return 7;
        case "NXRRSET":
          return 8;
        case "NOTAUTH":
          return 9;
        case "NOTZONE":
          return 10;
        case "RCODE_11":
          return 11;
        case "RCODE_12":
          return 12;
        case "RCODE_13":
          return 13;
        case "RCODE_14":
          return 14;
        case "RCODE_15":
          return 15;
      }
      return 0;
    };
  }
});

// node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/opcodes.js
var require_opcodes = __commonJS({
  "node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/opcodes.js"(exports) {
    exports.toString = function(opcode) {
      switch (opcode) {
        case 0:
          return "QUERY";
        case 1:
          return "IQUERY";
        case 2:
          return "STATUS";
        case 3:
          return "OPCODE_3";
        case 4:
          return "NOTIFY";
        case 5:
          return "UPDATE";
        case 6:
          return "OPCODE_6";
        case 7:
          return "OPCODE_7";
        case 8:
          return "OPCODE_8";
        case 9:
          return "OPCODE_9";
        case 10:
          return "OPCODE_10";
        case 11:
          return "OPCODE_11";
        case 12:
          return "OPCODE_12";
        case 13:
          return "OPCODE_13";
        case 14:
          return "OPCODE_14";
        case 15:
          return "OPCODE_15";
      }
      return "OPCODE_" + opcode;
    };
    exports.toOpcode = function(code) {
      switch (code.toUpperCase()) {
        case "QUERY":
          return 0;
        case "IQUERY":
          return 1;
        case "STATUS":
          return 2;
        case "OPCODE_3":
          return 3;
        case "NOTIFY":
          return 4;
        case "UPDATE":
          return 5;
        case "OPCODE_6":
          return 6;
        case "OPCODE_7":
          return 7;
        case "OPCODE_8":
          return 8;
        case "OPCODE_9":
          return 9;
        case "OPCODE_10":
          return 10;
        case "OPCODE_11":
          return 11;
        case "OPCODE_12":
          return 12;
        case "OPCODE_13":
          return 13;
        case "OPCODE_14":
          return 14;
        case "OPCODE_15":
          return 15;
      }
      return 0;
    };
  }
});

// node_modules/.pnpm/ip@1.1.8/node_modules/ip/lib/ip.js
var require_ip = __commonJS({
  "node_modules/.pnpm/ip@1.1.8/node_modules/ip/lib/ip.js"(exports) {
    var ip = exports;
    var { Buffer: Buffer2 } = require("buffer");
    var os = require("os");
    ip.toBuffer = function(ip2, buff, offset) {
      offset = ~~offset;
      var result;
      if (this.isV4Format(ip2)) {
        result = buff || new Buffer2(offset + 4);
        ip2.split(/\./g).map((byte) => {
          result[offset++] = parseInt(byte, 10) & 255;
        });
      } else if (this.isV6Format(ip2)) {
        var sections = ip2.split(":", 8);
        var i;
        for (i = 0; i < sections.length; i++) {
          var isv4 = this.isV4Format(sections[i]);
          var v4Buffer;
          if (isv4) {
            v4Buffer = this.toBuffer(sections[i]);
            sections[i] = v4Buffer.slice(0, 2).toString("hex");
          }
          if (v4Buffer && ++i < 8) {
            sections.splice(i, 0, v4Buffer.slice(2, 4).toString("hex"));
          }
        }
        if (sections[0] === "") {
          while (sections.length < 8)
            sections.unshift("0");
        } else if (sections[sections.length - 1] === "") {
          while (sections.length < 8)
            sections.push("0");
        } else if (sections.length < 8) {
          for (i = 0; i < sections.length && sections[i] !== ""; i++)
            ;
          var argv = [i, 1];
          for (i = 9 - sections.length; i > 0; i--) {
            argv.push("0");
          }
          sections.splice.apply(sections, argv);
        }
        result = buff || new Buffer2(offset + 16);
        for (i = 0; i < sections.length; i++) {
          var word = parseInt(sections[i], 16);
          result[offset++] = word >> 8 & 255;
          result[offset++] = word & 255;
        }
      }
      if (!result) {
        throw Error(`Invalid ip address: ${ip2}`);
      }
      return result;
    };
    ip.toString = function(buff, offset, length) {
      offset = ~~offset;
      length = length || buff.length - offset;
      var result = [];
      var i;
      if (length === 4) {
        for (i = 0; i < length; i++) {
          result.push(buff[offset + i]);
        }
        result = result.join(".");
      } else if (length === 16) {
        for (i = 0; i < length; i += 2) {
          result.push(buff.readUInt16BE(offset + i).toString(16));
        }
        result = result.join(":");
        result = result.replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3");
        result = result.replace(/:{3,4}/, "::");
      }
      return result;
    };
    var ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
    var ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;
    ip.isV4Format = function(ip2) {
      return ipv4Regex.test(ip2);
    };
    ip.isV6Format = function(ip2) {
      return ipv6Regex.test(ip2);
    };
    function _normalizeFamily(family) {
      if (family === 4) {
        return "ipv4";
      }
      if (family === 6) {
        return "ipv6";
      }
      return family ? family.toLowerCase() : "ipv4";
    }
    ip.fromPrefixLen = function(prefixlen, family) {
      if (prefixlen > 32) {
        family = "ipv6";
      } else {
        family = _normalizeFamily(family);
      }
      var len = 4;
      if (family === "ipv6") {
        len = 16;
      }
      var buff = new Buffer2(len);
      for (var i = 0, n = buff.length; i < n; ++i) {
        var bits = 8;
        if (prefixlen < 8) {
          bits = prefixlen;
        }
        prefixlen -= bits;
        buff[i] = ~(255 >> bits) & 255;
      }
      return ip.toString(buff);
    };
    ip.mask = function(addr, mask) {
      addr = ip.toBuffer(addr);
      mask = ip.toBuffer(mask);
      var result = new Buffer2(Math.max(addr.length, mask.length));
      var i;
      if (addr.length === mask.length) {
        for (i = 0; i < addr.length; i++) {
          result[i] = addr[i] & mask[i];
        }
      } else if (mask.length === 4) {
        for (i = 0; i < mask.length; i++) {
          result[i] = addr[addr.length - 4 + i] & mask[i];
        }
      } else {
        for (i = 0; i < result.length - 6; i++) {
          result[i] = 0;
        }
        result[10] = 255;
        result[11] = 255;
        for (i = 0; i < addr.length; i++) {
          result[i + 12] = addr[i] & mask[i + 12];
        }
        i += 12;
      }
      for (; i < result.length; i++) {
        result[i] = 0;
      }
      return ip.toString(result);
    };
    ip.cidr = function(cidrString) {
      var cidrParts = cidrString.split("/");
      var addr = cidrParts[0];
      if (cidrParts.length !== 2) {
        throw new Error(`invalid CIDR subnet: ${addr}`);
      }
      var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));
      return ip.mask(addr, mask);
    };
    ip.subnet = function(addr, mask) {
      var networkAddress = ip.toLong(ip.mask(addr, mask));
      var maskBuffer = ip.toBuffer(mask);
      var maskLength = 0;
      for (var i = 0; i < maskBuffer.length; i++) {
        if (maskBuffer[i] === 255) {
          maskLength += 8;
        } else {
          var octet = maskBuffer[i] & 255;
          while (octet) {
            octet = octet << 1 & 255;
            maskLength++;
          }
        }
      }
      var numberOfAddresses = Math.pow(2, 32 - maskLength);
      return {
        networkAddress: ip.fromLong(networkAddress),
        firstAddress: numberOfAddresses <= 2 ? ip.fromLong(networkAddress) : ip.fromLong(networkAddress + 1),
        lastAddress: numberOfAddresses <= 2 ? ip.fromLong(networkAddress + numberOfAddresses - 1) : ip.fromLong(networkAddress + numberOfAddresses - 2),
        broadcastAddress: ip.fromLong(networkAddress + numberOfAddresses - 1),
        subnetMask: mask,
        subnetMaskLength: maskLength,
        numHosts: numberOfAddresses <= 2 ? numberOfAddresses : numberOfAddresses - 2,
        length: numberOfAddresses,
        contains(other) {
          return networkAddress === ip.toLong(ip.mask(other, mask));
        }
      };
    };
    ip.cidrSubnet = function(cidrString) {
      var cidrParts = cidrString.split("/");
      var addr = cidrParts[0];
      if (cidrParts.length !== 2) {
        throw new Error(`invalid CIDR subnet: ${addr}`);
      }
      var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));
      return ip.subnet(addr, mask);
    };
    ip.not = function(addr) {
      var buff = ip.toBuffer(addr);
      for (var i = 0; i < buff.length; i++) {
        buff[i] = 255 ^ buff[i];
      }
      return ip.toString(buff);
    };
    ip.or = function(a, b) {
      var i;
      a = ip.toBuffer(a);
      b = ip.toBuffer(b);
      if (a.length === b.length) {
        for (i = 0; i < a.length; ++i) {
          a[i] |= b[i];
        }
        return ip.toString(a);
      }
      var buff = a;
      var other = b;
      if (b.length > a.length) {
        buff = b;
        other = a;
      }
      var offset = buff.length - other.length;
      for (i = offset; i < buff.length; ++i) {
        buff[i] |= other[i - offset];
      }
      return ip.toString(buff);
    };
    ip.isEqual = function(a, b) {
      var i;
      a = ip.toBuffer(a);
      b = ip.toBuffer(b);
      if (a.length === b.length) {
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i])
            return false;
        }
        return true;
      }
      if (b.length === 4) {
        var t = b;
        b = a;
        a = t;
      }
      for (i = 0; i < 10; i++) {
        if (b[i] !== 0)
          return false;
      }
      var word = b.readUInt16BE(10);
      if (word !== 0 && word !== 65535)
        return false;
      for (i = 0; i < 4; i++) {
        if (a[i] !== b[i + 12])
          return false;
      }
      return true;
    };
    ip.isPrivate = function(addr) {
      return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^f[cd][0-9a-f]{2}:/i.test(addr) || /^fe80:/i.test(addr) || /^::1$/.test(addr) || /^::$/.test(addr);
    };
    ip.isPublic = function(addr) {
      return !ip.isPrivate(addr);
    };
    ip.isLoopback = function(addr) {
      return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(addr) || /^fe80::1$/.test(addr) || /^::1$/.test(addr) || /^::$/.test(addr);
    };
    ip.loopback = function(family) {
      family = _normalizeFamily(family);
      if (family !== "ipv4" && family !== "ipv6") {
        throw new Error("family must be ipv4 or ipv6");
      }
      return family === "ipv4" ? "127.0.0.1" : "fe80::1";
    };
    ip.address = function(name, family) {
      var interfaces = os.networkInterfaces();
      family = _normalizeFamily(family);
      if (name && name !== "private" && name !== "public") {
        var res = interfaces[name].filter((details) => {
          var itemFamily = _normalizeFamily(details.family);
          return itemFamily === family;
        });
        if (res.length === 0) {
          return void 0;
        }
        return res[0].address;
      }
      var all = Object.keys(interfaces).map((nic) => {
        var addresses = interfaces[nic].filter((details) => {
          details.family = _normalizeFamily(details.family);
          if (details.family !== family || ip.isLoopback(details.address)) {
            return false;
          }
          if (!name) {
            return true;
          }
          return name === "public" ? ip.isPrivate(details.address) : ip.isPublic(details.address);
        });
        return addresses.length ? addresses[0].address : void 0;
      }).filter(Boolean);
      return !all.length ? ip.loopback(family) : all[0];
    };
    ip.toLong = function(ip2) {
      var ipl = 0;
      ip2.split(".").forEach((octet) => {
        ipl <<= 8;
        ipl += parseInt(octet);
      });
      return ipl >>> 0;
    };
    ip.fromLong = function(ipl) {
      return `${ipl >>> 24}.${ipl >> 16 & 255}.${ipl >> 8 & 255}.${ipl & 255}`;
    };
  }
});

// node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js"(exports, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/index.js
var require_dns_packet = __commonJS({
  "node_modules/.pnpm/dns-packet@1.3.4/node_modules/dns-packet/index.js"(exports) {
    var types = require_types();
    var rcodes = require_rcodes();
    var opcodes = require_opcodes();
    var ip = require_ip();
    var Buffer2 = require_safe_buffer().Buffer;
    var QUERY_FLAG = 0;
    var RESPONSE_FLAG = 1 << 15;
    var FLUSH_MASK = 1 << 15;
    var NOT_FLUSH_MASK = ~FLUSH_MASK;
    var QU_MASK = 1 << 15;
    var NOT_QU_MASK = ~QU_MASK;
    var name = exports.txt = exports.name = {};
    name.encode = function(str, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(name.encodingLength(str));
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      var n = str.replace(/^\.|\.$/gm, "");
      if (n.length) {
        var list = n.split(".");
        for (var i = 0; i < list.length; i++) {
          var len = buf.write(list[i], offset + 1);
          buf[offset] = len;
          offset += len + 1;
        }
      }
      buf[offset++] = 0;
      name.encode.bytes = offset - oldOffset;
      return buf;
    };
    name.encode.bytes = 0;
    name.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var list = [];
      var oldOffset = offset;
      var len = buf[offset++];
      if (len === 0) {
        name.decode.bytes = 1;
        return ".";
      }
      if (len >= 192) {
        var res = name.decode(buf, buf.readUInt16BE(offset - 1) - 49152);
        name.decode.bytes = 2;
        return res;
      }
      while (len) {
        if (len >= 192) {
          list.push(name.decode(buf, buf.readUInt16BE(offset - 1) - 49152));
          offset++;
          break;
        }
        list.push(buf.toString("utf-8", offset, offset + len));
        offset += len;
        len = buf[offset++];
      }
      name.decode.bytes = offset - oldOffset;
      return list.join(".");
    };
    name.decode.bytes = 0;
    name.encodingLength = function(n) {
      if (n === "." || n === "..")
        return 1;
      return Buffer2.byteLength(n.replace(/^\.|\.$/gm, "")) + 2;
    };
    var string = {};
    string.encode = function(s, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(string.encodingLength(s));
      if (!offset)
        offset = 0;
      var len = buf.write(s, offset + 1);
      buf[offset] = len;
      string.encode.bytes = len + 1;
      return buf;
    };
    string.encode.bytes = 0;
    string.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var len = buf[offset];
      var s = buf.toString("utf-8", offset + 1, offset + 1 + len);
      string.decode.bytes = len + 1;
      return s;
    };
    string.decode.bytes = 0;
    string.encodingLength = function(s) {
      return Buffer2.byteLength(s) + 1;
    };
    var header = {};
    header.encode = function(h, buf, offset) {
      if (!buf)
        buf = header.encodingLength(h);
      if (!offset)
        offset = 0;
      var flags = (h.flags || 0) & 32767;
      var type = h.type === "response" ? RESPONSE_FLAG : QUERY_FLAG;
      buf.writeUInt16BE(h.id || 0, offset);
      buf.writeUInt16BE(flags | type, offset + 2);
      buf.writeUInt16BE(h.questions.length, offset + 4);
      buf.writeUInt16BE(h.answers.length, offset + 6);
      buf.writeUInt16BE(h.authorities.length, offset + 8);
      buf.writeUInt16BE(h.additionals.length, offset + 10);
      return buf;
    };
    header.encode.bytes = 12;
    header.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      if (buf.length < 12)
        throw new Error("Header must be 12 bytes");
      var flags = buf.readUInt16BE(offset + 2);
      return {
        id: buf.readUInt16BE(offset),
        type: flags & RESPONSE_FLAG ? "response" : "query",
        flags: flags & 32767,
        flag_qr: (flags >> 15 & 1) === 1,
        opcode: opcodes.toString(flags >> 11 & 15),
        flag_auth: (flags >> 10 & 1) === 1,
        flag_trunc: (flags >> 9 & 1) === 1,
        flag_rd: (flags >> 8 & 1) === 1,
        flag_ra: (flags >> 7 & 1) === 1,
        flag_z: (flags >> 6 & 1) === 1,
        flag_ad: (flags >> 5 & 1) === 1,
        flag_cd: (flags >> 4 & 1) === 1,
        rcode: rcodes.toString(flags & 15),
        questions: new Array(buf.readUInt16BE(offset + 4)),
        answers: new Array(buf.readUInt16BE(offset + 6)),
        authorities: new Array(buf.readUInt16BE(offset + 8)),
        additionals: new Array(buf.readUInt16BE(offset + 10))
      };
    };
    header.decode.bytes = 12;
    header.encodingLength = function() {
      return 12;
    };
    var runknown = exports.unknown = {};
    runknown.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(runknown.encodingLength(data));
      if (!offset)
        offset = 0;
      buf.writeUInt16BE(data.length, offset);
      data.copy(buf, offset + 2);
      runknown.encode.bytes = data.length + 2;
      return buf;
    };
    runknown.encode.bytes = 0;
    runknown.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var len = buf.readUInt16BE(offset);
      var data = buf.slice(offset + 2, offset + 2 + len);
      runknown.decode.bytes = len + 2;
      return data;
    };
    runknown.decode.bytes = 0;
    runknown.encodingLength = function(data) {
      return data.length + 2;
    };
    var rns = exports.ns = {};
    rns.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(rns.encodingLength(data));
      if (!offset)
        offset = 0;
      name.encode(data, buf, offset + 2);
      buf.writeUInt16BE(name.encode.bytes, offset);
      rns.encode.bytes = name.encode.bytes + 2;
      return buf;
    };
    rns.encode.bytes = 0;
    rns.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var len = buf.readUInt16BE(offset);
      var dd = name.decode(buf, offset + 2);
      rns.decode.bytes = len + 2;
      return dd;
    };
    rns.decode.bytes = 0;
    rns.encodingLength = function(data) {
      return name.encodingLength(data) + 2;
    };
    var rsoa = exports.soa = {};
    rsoa.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(rsoa.encodingLength(data));
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      offset += 2;
      name.encode(data.mname, buf, offset);
      offset += name.encode.bytes;
      name.encode(data.rname, buf, offset);
      offset += name.encode.bytes;
      buf.writeUInt32BE(data.serial || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.refresh || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.retry || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.expire || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.minimum || 0, offset);
      offset += 4;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rsoa.encode.bytes = offset - oldOffset;
      return buf;
    };
    rsoa.encode.bytes = 0;
    rsoa.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      var data = {};
      offset += 2;
      data.mname = name.decode(buf, offset);
      offset += name.decode.bytes;
      data.rname = name.decode(buf, offset);
      offset += name.decode.bytes;
      data.serial = buf.readUInt32BE(offset);
      offset += 4;
      data.refresh = buf.readUInt32BE(offset);
      offset += 4;
      data.retry = buf.readUInt32BE(offset);
      offset += 4;
      data.expire = buf.readUInt32BE(offset);
      offset += 4;
      data.minimum = buf.readUInt32BE(offset);
      offset += 4;
      rsoa.decode.bytes = offset - oldOffset;
      return data;
    };
    rsoa.decode.bytes = 0;
    rsoa.encodingLength = function(data) {
      return 22 + name.encodingLength(data.mname) + name.encodingLength(data.rname);
    };
    var rtxt = exports.txt = exports.null = {};
    var rnull = rtxt;
    rtxt.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(rtxt.encodingLength(data));
      if (!offset)
        offset = 0;
      if (typeof data === "string")
        data = Buffer2.from(data);
      if (!data)
        data = Buffer2.alloc(0);
      var oldOffset = offset;
      offset += 2;
      var len = data.length;
      data.copy(buf, offset, 0, len);
      offset += len;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rtxt.encode.bytes = offset - oldOffset;
      return buf;
    };
    rtxt.encode.bytes = 0;
    rtxt.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      var len = buf.readUInt16BE(offset);
      offset += 2;
      var data = buf.slice(offset, offset + len);
      offset += len;
      rtxt.decode.bytes = offset - oldOffset;
      return data;
    };
    rtxt.decode.bytes = 0;
    rtxt.encodingLength = function(data) {
      if (!data)
        return 2;
      return (Buffer2.isBuffer(data) ? data.length : Buffer2.byteLength(data)) + 2;
    };
    var rhinfo = exports.hinfo = {};
    rhinfo.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(rhinfo.encodingLength(data));
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      offset += 2;
      string.encode(data.cpu, buf, offset);
      offset += string.encode.bytes;
      string.encode(data.os, buf, offset);
      offset += string.encode.bytes;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rhinfo.encode.bytes = offset - oldOffset;
      return buf;
    };
    rhinfo.encode.bytes = 0;
    rhinfo.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      var data = {};
      offset += 2;
      data.cpu = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.os = string.decode(buf, offset);
      offset += string.decode.bytes;
      rhinfo.decode.bytes = offset - oldOffset;
      return data;
    };
    rhinfo.decode.bytes = 0;
    rhinfo.encodingLength = function(data) {
      return string.encodingLength(data.cpu) + string.encodingLength(data.os) + 2;
    };
    var rptr = exports.ptr = {};
    var rcname = exports.cname = rptr;
    var rdname = exports.dname = rptr;
    rptr.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(rptr.encodingLength(data));
      if (!offset)
        offset = 0;
      name.encode(data, buf, offset + 2);
      buf.writeUInt16BE(name.encode.bytes, offset);
      rptr.encode.bytes = name.encode.bytes + 2;
      return buf;
    };
    rptr.encode.bytes = 0;
    rptr.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var data = name.decode(buf, offset + 2);
      rptr.decode.bytes = name.decode.bytes + 2;
      return data;
    };
    rptr.decode.bytes = 0;
    rptr.encodingLength = function(data) {
      return name.encodingLength(data) + 2;
    };
    var rsrv = exports.srv = {};
    rsrv.encode = function(data, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(rsrv.encodingLength(data));
      if (!offset)
        offset = 0;
      buf.writeUInt16BE(data.priority || 0, offset + 2);
      buf.writeUInt16BE(data.weight || 0, offset + 4);
      buf.writeUInt16BE(data.port || 0, offset + 6);
      name.encode(data.target, buf, offset + 8);
      var len = name.encode.bytes + 6;
      buf.writeUInt16BE(len, offset);
      rsrv.encode.bytes = len + 2;
      return buf;
    };
    rsrv.encode.bytes = 0;
    rsrv.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var len = buf.readUInt16BE(offset);
      var data = {};
      data.priority = buf.readUInt16BE(offset + 2);
      data.weight = buf.readUInt16BE(offset + 4);
      data.port = buf.readUInt16BE(offset + 6);
      data.target = name.decode(buf, offset + 8);
      rsrv.decode.bytes = len + 2;
      return data;
    };
    rsrv.decode.bytes = 0;
    rsrv.encodingLength = function(data) {
      return 8 + name.encodingLength(data.target);
    };
    var rcaa = exports.caa = {};
    rcaa.ISSUER_CRITICAL = 1 << 7;
    rcaa.encode = function(data, buf, offset) {
      var len = rcaa.encodingLength(data);
      if (!buf)
        buf = Buffer2.alloc(rcaa.encodingLength(data));
      if (!offset)
        offset = 0;
      if (data.issuerCritical) {
        data.flags = rcaa.ISSUER_CRITICAL;
      }
      buf.writeUInt16BE(len - 2, offset);
      offset += 2;
      buf.writeUInt8(data.flags || 0, offset);
      offset += 1;
      string.encode(data.tag, buf, offset);
      offset += string.encode.bytes;
      buf.write(data.value, offset);
      offset += Buffer2.byteLength(data.value);
      rcaa.encode.bytes = len;
      return buf;
    };
    rcaa.encode.bytes = 0;
    rcaa.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var len = buf.readUInt16BE(offset);
      offset += 2;
      var oldOffset = offset;
      var data = {};
      data.flags = buf.readUInt8(offset);
      offset += 1;
      data.tag = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.value = buf.toString("utf-8", offset, oldOffset + len);
      data.issuerCritical = !!(data.flags & rcaa.ISSUER_CRITICAL);
      rcaa.decode.bytes = len + 2;
      return data;
    };
    rcaa.decode.bytes = 0;
    rcaa.encodingLength = function(data) {
      return string.encodingLength(data.tag) + string.encodingLength(data.value) + 2;
    };
    var ra = exports.a = {};
    ra.encode = function(host, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(ra.encodingLength(host));
      if (!offset)
        offset = 0;
      buf.writeUInt16BE(4, offset);
      offset += 2;
      ip.toBuffer(host, buf, offset);
      ra.encode.bytes = 6;
      return buf;
    };
    ra.encode.bytes = 0;
    ra.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      offset += 2;
      var host = ip.toString(buf, offset, 4);
      ra.decode.bytes = 6;
      return host;
    };
    ra.decode.bytes = 0;
    ra.encodingLength = function() {
      return 6;
    };
    var raaaa = exports.aaaa = {};
    raaaa.encode = function(host, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(raaaa.encodingLength(host));
      if (!offset)
        offset = 0;
      buf.writeUInt16BE(16, offset);
      offset += 2;
      ip.toBuffer(host, buf, offset);
      raaaa.encode.bytes = 18;
      return buf;
    };
    raaaa.encode.bytes = 0;
    raaaa.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      offset += 2;
      var host = ip.toString(buf, offset, 16);
      raaaa.decode.bytes = 18;
      return host;
    };
    raaaa.decode.bytes = 0;
    raaaa.encodingLength = function() {
      return 18;
    };
    var renc = exports.record = function(type) {
      switch (type.toUpperCase()) {
        case "A":
          return ra;
        case "PTR":
          return rptr;
        case "CNAME":
          return rcname;
        case "DNAME":
          return rdname;
        case "TXT":
          return rtxt;
        case "NULL":
          return rnull;
        case "AAAA":
          return raaaa;
        case "SRV":
          return rsrv;
        case "HINFO":
          return rhinfo;
        case "CAA":
          return rcaa;
        case "NS":
          return rns;
        case "SOA":
          return rsoa;
      }
      return runknown;
    };
    var answer = exports.answer = {};
    answer.encode = function(a, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(answer.encodingLength(a));
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      name.encode(a.name, buf, offset);
      offset += name.encode.bytes;
      buf.writeUInt16BE(types.toType(a.type), offset);
      var klass = a.class === void 0 ? 1 : a.class;
      if (a.flush)
        klass |= FLUSH_MASK;
      buf.writeUInt16BE(klass, offset + 2);
      buf.writeUInt32BE(a.ttl || 0, offset + 4);
      var enc = renc(a.type);
      enc.encode(a.data, buf, offset + 8);
      offset += 8 + enc.encode.bytes;
      answer.encode.bytes = offset - oldOffset;
      return buf;
    };
    answer.encode.bytes = 0;
    answer.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var a = {};
      var oldOffset = offset;
      a.name = name.decode(buf, offset);
      offset += name.decode.bytes;
      a.type = types.toString(buf.readUInt16BE(offset));
      a.class = buf.readUInt16BE(offset + 2);
      a.ttl = buf.readUInt32BE(offset + 4);
      a.flush = !!(a.class & FLUSH_MASK);
      if (a.flush)
        a.class &= NOT_FLUSH_MASK;
      var enc = renc(a.type);
      a.data = enc.decode(buf, offset + 8);
      offset += 8 + enc.decode.bytes;
      answer.decode.bytes = offset - oldOffset;
      return a;
    };
    answer.decode.bytes = 0;
    answer.encodingLength = function(a) {
      return name.encodingLength(a.name) + 8 + renc(a.type).encodingLength(a.data);
    };
    var question = exports.question = {};
    question.encode = function(q, buf, offset) {
      if (!buf)
        buf = Buffer2.alloc(question.encodingLength(q));
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      name.encode(q.name, buf, offset);
      offset += name.encode.bytes;
      buf.writeUInt16BE(types.toType(q.type), offset);
      offset += 2;
      buf.writeUInt16BE(q.class === void 0 ? 1 : q.class, offset);
      offset += 2;
      question.encode.bytes = offset - oldOffset;
      return q;
    };
    question.encode.bytes = 0;
    question.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      var q = {};
      q.name = name.decode(buf, offset);
      offset += name.decode.bytes;
      q.type = types.toString(buf.readUInt16BE(offset));
      offset += 2;
      q.class = buf.readUInt16BE(offset);
      offset += 2;
      var qu = !!(q.class & QU_MASK);
      if (qu)
        q.class &= NOT_QU_MASK;
      question.decode.bytes = offset - oldOffset;
      return q;
    };
    question.decode.bytes = 0;
    question.encodingLength = function(q) {
      return name.encodingLength(q.name) + 4;
    };
    exports.AUTHORITATIVE_ANSWER = 1 << 10;
    exports.TRUNCATED_RESPONSE = 1 << 9;
    exports.RECURSION_DESIRED = 1 << 8;
    exports.RECURSION_AVAILABLE = 1 << 7;
    exports.AUTHENTIC_DATA = 1 << 5;
    exports.CHECKING_DISABLED = 1 << 4;
    exports.encode = function(result, buf, offset) {
      var allocing = !buf;
      if (allocing)
        buf = Buffer2.alloc(exports.encodingLength(result));
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      if (!result.questions)
        result.questions = [];
      if (!result.answers)
        result.answers = [];
      if (!result.authorities)
        result.authorities = [];
      if (!result.additionals)
        result.additionals = [];
      header.encode(result, buf, offset);
      offset += header.encode.bytes;
      offset = encodeList(result.questions, question, buf, offset);
      offset = encodeList(result.answers, answer, buf, offset);
      offset = encodeList(result.authorities, answer, buf, offset);
      offset = encodeList(result.additionals, answer, buf, offset);
      exports.encode.bytes = offset - oldOffset;
      if (allocing && exports.encode.bytes !== buf.length) {
        return buf.slice(0, exports.encode.bytes);
      }
      return buf;
    };
    exports.encode.bytes = 0;
    exports.decode = function(buf, offset) {
      if (!offset)
        offset = 0;
      var oldOffset = offset;
      var result = header.decode(buf, offset);
      offset += header.decode.bytes;
      offset = decodeList(result.questions, question, buf, offset);
      offset = decodeList(result.answers, answer, buf, offset);
      offset = decodeList(result.authorities, answer, buf, offset);
      offset = decodeList(result.additionals, answer, buf, offset);
      exports.decode.bytes = offset - oldOffset;
      return result;
    };
    exports.decode.bytes = 0;
    exports.encodingLength = function(result) {
      return header.encodingLength(result) + encodingLengthList(result.questions || [], question) + encodingLengthList(result.answers || [], answer) + encodingLengthList(result.authorities || [], answer) + encodingLengthList(result.additionals || [], answer);
    };
    function encodingLengthList(list, enc) {
      var len = 0;
      for (var i = 0; i < list.length; i++)
        len += enc.encodingLength(list[i]);
      return len;
    }
    function encodeList(list, enc, buf, offset) {
      for (var i = 0; i < list.length; i++) {
        enc.encode(list[i], buf, offset);
        offset += enc.encode.bytes;
      }
      return offset;
    }
    function decodeList(list, enc, buf, offset) {
      for (var i = 0; i < list.length; i++) {
        list[i] = enc.decode(buf, offset);
        offset += enc.decode.bytes;
      }
      return offset;
    }
  }
});

// node_modules/.pnpm/thunky@1.1.0/node_modules/thunky/index.js
var require_thunky = __commonJS({
  "node_modules/.pnpm/thunky@1.1.0/node_modules/thunky/index.js"(exports, module2) {
    "use strict";
    var nextTick = nextTickArgs;
    process.nextTick(upgrade, 42);
    module2.exports = thunky;
    function thunky(fn) {
      var state = run;
      return thunk;
      function thunk(callback) {
        state(callback || noop);
      }
      function run(callback) {
        var stack = [callback];
        state = wait;
        fn(done);
        function wait(callback2) {
          stack.push(callback2);
        }
        function done(err) {
          var args = arguments;
          state = isError(err) ? run : finished;
          while (stack.length)
            finished(stack.shift());
          function finished(callback2) {
            nextTick(apply, callback2, args);
          }
        }
      }
    }
    function isError(err) {
      return Object.prototype.toString.call(err) === "[object Error]";
    }
    function noop() {
    }
    function apply(callback, args) {
      callback.apply(null, args);
    }
    function upgrade(val) {
      if (val === 42)
        nextTick = process.nextTick;
    }
    function nextTickArgs(fn, a, b) {
      process.nextTick(function() {
        fn(a, b);
      });
    }
  }
});

// node_modules/.pnpm/multicast-dns@6.2.3/node_modules/multicast-dns/index.js
var require_multicast_dns = __commonJS({
  "node_modules/.pnpm/multicast-dns@6.2.3/node_modules/multicast-dns/index.js"(exports, module2) {
    var packet = require_dns_packet();
    var dgram = require("dgram");
    var thunky = require_thunky();
    var events = require("events");
    var os = require("os");
    var noop = function() {
    };
    module2.exports = function(opts) {
      if (!opts)
        opts = {};
      var that = new events.EventEmitter();
      var port = typeof opts.port === "number" ? opts.port : 5353;
      var type = opts.type || "udp4";
      var ip = opts.ip || opts.host || (type === "udp4" ? "224.0.0.251" : null);
      var me = { address: ip, port };
      var memberships = {};
      var destroyed = false;
      var interval = null;
      if (type === "udp6" && (!ip || !opts.interface)) {
        throw new Error("For IPv6 multicast you must specify `ip` and `interface`");
      }
      var socket = opts.socket || dgram.createSocket({
        type,
        reuseAddr: opts.reuseAddr !== false,
        toString: function() {
          return type;
        }
      });
      socket.on("error", function(err) {
        if (err.code === "EACCES" || err.code === "EADDRINUSE")
          that.emit("error", err);
        else
          that.emit("warning", err);
      });
      socket.on("message", function(message, rinfo) {
        try {
          message = packet.decode(message);
        } catch (err) {
          that.emit("warning", err);
          return;
        }
        that.emit("packet", message, rinfo);
        if (message.type === "query")
          that.emit("query", message, rinfo);
        if (message.type === "response")
          that.emit("response", message, rinfo);
      });
      socket.on("listening", function() {
        if (!port)
          port = me.port = socket.address().port;
        if (opts.multicast !== false) {
          that.update();
          interval = setInterval(that.update, 5e3);
          socket.setMulticastTTL(opts.ttl || 255);
          socket.setMulticastLoopback(opts.loopback !== false);
        }
      });
      var bind = thunky(function(cb) {
        if (!port)
          return cb(null);
        socket.once("error", cb);
        socket.bind(port, opts.interface, function() {
          socket.removeListener("error", cb);
          cb(null);
        });
      });
      bind(function(err) {
        if (err)
          return that.emit("error", err);
        that.emit("ready");
      });
      that.send = function(value, rinfo, cb) {
        if (typeof rinfo === "function")
          return that.send(value, null, rinfo);
        if (!cb)
          cb = noop;
        if (!rinfo)
          rinfo = me;
        bind(onbind);
        function onbind(err) {
          if (destroyed)
            return cb();
          if (err)
            return cb(err);
          var message = packet.encode(value);
          socket.send(message, 0, message.length, rinfo.port, rinfo.address || rinfo.host, cb);
        }
      };
      that.response = that.respond = function(res, rinfo, cb) {
        if (Array.isArray(res))
          res = { answers: res };
        res.type = "response";
        res.flags = (res.flags || 0) | packet.AUTHORITATIVE_ANSWER;
        that.send(res, rinfo, cb);
      };
      that.query = function(q, type2, rinfo, cb) {
        if (typeof type2 === "function")
          return that.query(q, null, null, type2);
        if (typeof type2 === "object" && type2 && type2.port)
          return that.query(q, null, type2, rinfo);
        if (typeof rinfo === "function")
          return that.query(q, type2, null, rinfo);
        if (!cb)
          cb = noop;
        if (typeof q === "string")
          q = [{ name: q, type: type2 || "ANY" }];
        if (Array.isArray(q))
          q = { type: "query", questions: q };
        q.type = "query";
        that.send(q, rinfo, cb);
      };
      that.destroy = function(cb) {
        if (!cb)
          cb = noop;
        if (destroyed)
          return process.nextTick(cb);
        destroyed = true;
        clearInterval(interval);
        socket.once("close", cb);
        socket.close();
      };
      that.update = function() {
        var ifaces = opts.interface ? [].concat(opts.interface) : allInterfaces();
        var updated = false;
        for (var i = 0; i < ifaces.length; i++) {
          var addr = ifaces[i];
          if (memberships[addr])
            continue;
          memberships[addr] = true;
          updated = true;
          try {
            socket.addMembership(ip, addr);
          } catch (err) {
            that.emit("warning", err);
          }
        }
        if (!updated || !socket.setMulticastInterface)
          return;
        socket.setMulticastInterface(opts.interface || defaultInterface());
      };
      return that;
    };
    function defaultInterface() {
      var networks = os.networkInterfaces();
      var names = Object.keys(networks);
      for (var i = 0; i < names.length; i++) {
        var net = networks[names[i]];
        for (var j = 0; j < net.length; j++) {
          var iface = net[j];
          if (iface.family === "IPv4" && !iface.internal)
            return iface.address;
        }
      }
      return "127.0.0.1";
    }
    function allInterfaces() {
      var networks = os.networkInterfaces();
      var names = Object.keys(networks);
      var res = [];
      for (var i = 0; i < names.length; i++) {
        var net = networks[names[i]];
        for (var j = 0; j < net.length; j++) {
          var iface = net[j];
          if (iface.family === "IPv4") {
            res.push(iface.address);
            break;
          }
        }
      }
      return res;
    }
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js"(exports, module2) {
    "use strict";
    var toStr = Object.prototype.toString;
    module2.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js"(exports, module2) {
    "use strict";
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module2.exports = keysShim;
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js"(exports, module2) {
    "use strict";
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module2.exports = keysShim;
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js"(exports, module2) {
    "use strict";
    var hasSymbols = require_shams();
    module2.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            args.concat(slice.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(
            that,
            args.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation2();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    module2.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/.pnpm/get-intrinsic@1.2.0/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/.pnpm/get-intrinsic@1.2.0/node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    try {
      null.error;
    } catch (e) {
      errorProto = getProto(getProto(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module2.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js"(exports, module2) {
    "use strict";
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module2.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// node_modules/.pnpm/has-property-descriptors@1.0.0/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/.pnpm/has-property-descriptors@1.0.0/node_modules/has-property-descriptors/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// node_modules/.pnpm/define-properties@1.1.4/node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/.pnpm/define-properties@1.1.4/node_modules/define-properties/index.js"(exports, module2) {
    "use strict";
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
    var defineProperty = function(object, name, value, predicate) {
      if (name in object && (!isFunction(predicate) || !predicate())) {
        return;
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value,
          writable: true
        });
      } else {
        object[name] = value;
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module2.exports = defineProperties;
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/implementation.js"(exports, module2) {
    "use strict";
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module2.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/polyfill.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation3();
    module2.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/shim.js
var require_shim = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/shim.js"(exports, module2) {
    "use strict";
    var getPolyfill = require_polyfill();
    var define = require_define_properties();
    module2.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/index.js
var require_object_is = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/index.js"(exports, module2) {
    "use strict";
    var define = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill = callBind(getPolyfill(), Object);
    define(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = polyfill;
  }
});

// node_modules/.pnpm/is-regex@1.1.4/node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "node_modules/.pnpm/is-regex@1.1.4/node_modules/is-regex/index.js"(exports, module2) {
    "use strict";
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module2.exports = hasToStringTag ? function isRegex(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD(value, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
});

// node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js
var require_functions_have_names = __commonJS({
  "node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js"(exports, module2) {
    "use strict";
    var functionsHaveNames = function functionsHaveNames2() {
      return typeof function f() {
      }.name === "string";
    };
    var gOPD = Object.getOwnPropertyDescriptor;
    if (gOPD) {
      try {
        gOPD([], "length");
      } catch (e) {
        gOPD = null;
      }
    }
    functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
      if (!functionsHaveNames() || !gOPD) {
        return false;
      }
      var desc = gOPD(function() {
      }, "name");
      return !!desc && !!desc.configurable;
    };
    var $bind = Function.prototype.bind;
    functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
      return functionsHaveNames() && typeof $bind === "function" && function f() {
      }.bind().name !== "";
    };
    module2.exports = functionsHaveNames;
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/implementation.js
var require_implementation4 = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/implementation.js"(exports, module2) {
    "use strict";
    var functionsHaveConfigurableNames = require_functions_have_names().functionsHaveConfigurableNames();
    var $Object = Object;
    var $TypeError = TypeError;
    module2.exports = function flags() {
      if (this != null && this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.hasIndices) {
        result += "d";
      }
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    };
    if (functionsHaveConfigurableNames && Object.defineProperty) {
      Object.defineProperty(module2.exports, "name", { value: "get flags" });
    }
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/polyfill.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation4();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    module2.exports = function getPolyfill() {
      if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
          var calls = "";
          var o = {};
          Object.defineProperty(o, "hasIndices", {
            get: function() {
              calls += "d";
            }
          });
          Object.defineProperty(o, "sticky", {
            get: function() {
              calls += "y";
            }
          });
          if (calls === "dy") {
            return descriptor.get;
          }
        }
      }
      return implementation;
    };
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/shim.js"(exports, module2) {
    "use strict";
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = Object.getOwnPropertyDescriptor;
    var defineProperty = Object.defineProperty;
    var TypeErr = TypeError;
    var getProto = Object.getPrototypeOf;
    var regex = /a/;
    module2.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill = getPolyfill();
      var proto = getProto(regex);
      var descriptor = gOPD(proto, "flags");
      if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill
        });
      }
      return polyfill;
    };
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.4.3/node_modules/regexp.prototype.flags/index.js"(exports, module2) {
    "use strict";
    var define = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(getPolyfill());
    define(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = flagsBound;
  }
});

// node_modules/.pnpm/is-date-object@1.0.5/node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "node_modules/.pnpm/is-date-object@1.0.5/node_modules/is-date-object/index.js"(exports, module2) {
    "use strict";
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module2.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
  }
});

// node_modules/.pnpm/deep-equal@1.1.1/node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "node_modules/.pnpm/deep-equal@1.1.1/node_modules/deep-equal/index.js"(exports, module2) {
    var objectKeys = require_object_keys();
    var isArguments = require_is_arguments();
    var is = require_object_is();
    var isRegex = require_is_regex();
    var flags = require_regexp_prototype();
    var isDate = require_is_date_object();
    var getTime = Date.prototype.getTime;
    function deepEqual(actual, expected, options) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      return objEquiv(actual, expected, opts);
    }
    function isUndefinedOrNull(value) {
      return value === null || value === void 0;
    }
    function isBuffer(x) {
      if (!x || typeof x !== "object" || typeof x.length !== "number") {
        return false;
      }
      if (typeof x.copy !== "function" || typeof x.slice !== "function") {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== "number") {
        return false;
      }
      return true;
    }
    function objEquiv(a, b, opts) {
      var i, key;
      if (typeof a !== typeof b) {
        return false;
      }
      if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
        return false;
      }
      if (a.prototype !== b.prototype) {
        return false;
      }
      if (isArguments(a) !== isArguments(b)) {
        return false;
      }
      var aIsRegex = isRegex(a);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if (aIsRegex || bIsRegex) {
        return a.source === b.source && flags(a) === flags(b);
      }
      if (isDate(a) && isDate(b)) {
        return getTime.call(a) === getTime.call(b);
      }
      var aIsBuffer = isBuffer(a);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      if (typeof a !== typeof b) {
        return false;
      }
      try {
        var ka = objectKeys(a);
        var kb = objectKeys(b);
      } catch (e) {
        return false;
      }
      if (ka.length !== kb.length) {
        return false;
      }
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!deepEqual(a[key], b[key], opts)) {
          return false;
        }
      }
      return true;
    }
    module2.exports = deepEqual;
  }
});

// node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/mdns-server.js
var require_mdns_server = __commonJS({
  "node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/mdns-server.js"(exports, module2) {
    "use strict";
    var multicastdns = require_multicast_dns();
    var dnsEqual = require_dns_equal();
    var flatten = require_array_flatten();
    var deepEqual = require_deep_equal();
    module2.exports = Server;
    function Server(opts) {
      this.mdns = multicastdns(opts);
      this.mdns.setMaxListeners(0);
      this.registry = {};
      this.mdns.on("query", this._respondToQuery.bind(this));
    }
    Server.prototype.register = function(records) {
      var self = this;
      if (Array.isArray(records))
        records.forEach(register);
      else
        register(records);
      function register(record) {
        var subRegistry = self.registry[record.type];
        if (!subRegistry)
          subRegistry = self.registry[record.type] = [];
        else if (subRegistry.some(isDuplicateRecord(record)))
          return;
        subRegistry.push(record);
      }
    };
    Server.prototype.unregister = function(records) {
      var self = this;
      if (Array.isArray(records))
        records.forEach(unregister);
      else
        unregister(records);
      function unregister(record) {
        var type = record.type;
        if (!(type in self.registry))
          return;
        self.registry[type] = self.registry[type].filter(function(r) {
          return r.name !== record.name;
        });
      }
    };
    Server.prototype._respondToQuery = function(query) {
      var self = this;
      query.questions.forEach(function(question) {
        var type = question.type;
        var name = question.name;
        var answers = type === "ANY" ? flatten.depth(Object.keys(self.registry).map(self._recordsFor.bind(self, name)), 1) : self._recordsFor(name, type);
        if (answers.length === 0)
          return;
        var additionals = [];
        if (type !== "ANY") {
          answers.forEach(function(answer) {
            if (answer.type !== "PTR")
              return;
            additionals = additionals.concat(self._recordsFor(answer.data, "SRV")).concat(self._recordsFor(answer.data, "TXT"));
          });
          additionals.filter(function(record) {
            return record.type === "SRV";
          }).map(function(record) {
            return record.data.target;
          }).filter(unique()).forEach(function(target) {
            additionals = additionals.concat(self._recordsFor(target, "A")).concat(self._recordsFor(target, "AAAA"));
          });
        }
        self.mdns.respond({ answers, additionals }, function(err) {
          if (err)
            throw err;
        });
      });
    };
    Server.prototype._recordsFor = function(name, type) {
      if (!(type in this.registry))
        return [];
      return this.registry[type].filter(function(record) {
        var _name = ~name.indexOf(".") ? record.name : record.name.split(".")[0];
        return dnsEqual(_name, name);
      });
    };
    function isDuplicateRecord(a) {
      return function(b) {
        return a.type === b.type && a.name === b.name && deepEqual(a.data, b.data);
      };
    }
    function unique() {
      var set = [];
      return function(obj) {
        if (~set.indexOf(obj))
          return false;
        set.push(obj);
        return true;
      };
    }
  }
});

// node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/lib/browser.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    var serviceName = require_multicast_dns_service_types();
    var dnsEqual = require_dns_equal();
    var dnsTxt = require_dns_txt();
    var TLD = ".local";
    var WILDCARD = "_services._dns-sd._udp" + TLD;
    module2.exports = Browser;
    util.inherits(Browser, EventEmitter);
    function Browser(mdns, opts, onup) {
      if (typeof opts === "function")
        return new Browser(mdns, null, opts);
      EventEmitter.call(this);
      this._mdns = mdns;
      this._onresponse = null;
      this._serviceMap = {};
      this._txt = dnsTxt(opts.txt);
      if (!opts || !opts.type) {
        this._name = WILDCARD;
        this._wildcard = true;
      } else {
        this._name = serviceName.stringify(opts.type, opts.protocol || "tcp") + TLD;
        if (opts.name)
          this._name = opts.name + "." + this._name;
        this._wildcard = false;
      }
      this.services = [];
      if (onup)
        this.on("up", onup);
      this.start();
    }
    Browser.prototype.start = function() {
      if (this._onresponse)
        return;
      var self = this;
      var nameMap = {};
      if (!this._wildcard)
        nameMap[this._name] = true;
      this._onresponse = function(packet, rinfo) {
        if (self._wildcard) {
          packet.answers.forEach(function(answer) {
            if (answer.type !== "PTR" || answer.name !== self._name || answer.name in nameMap)
              return;
            nameMap[answer.data] = true;
            self._mdns.query(answer.data, "PTR");
          });
        }
        Object.keys(nameMap).forEach(function(name) {
          goodbyes(name, packet).forEach(self._removeService.bind(self));
          var matches = buildServicesFor(name, packet, self._txt, rinfo);
          if (matches.length === 0)
            return;
          matches.forEach(function(service) {
            if (self._serviceMap[service.fqdn])
              return;
            self._addService(service);
          });
        });
      };
      this._mdns.on("response", this._onresponse);
      this.update();
    };
    Browser.prototype.stop = function() {
      if (!this._onresponse)
        return;
      this._mdns.removeListener("response", this._onresponse);
      this._onresponse = null;
    };
    Browser.prototype.update = function() {
      this._mdns.query(this._name, "PTR");
    };
    Browser.prototype._addService = function(service) {
      this.services.push(service);
      this._serviceMap[service.fqdn] = true;
      this.emit("up", service);
    };
    Browser.prototype._removeService = function(fqdn) {
      var service, index;
      this.services.some(function(s, i) {
        if (dnsEqual(s.fqdn, fqdn)) {
          service = s;
          index = i;
          return true;
        }
      });
      if (!service)
        return;
      this.services.splice(index, 1);
      delete this._serviceMap[fqdn];
      this.emit("down", service);
    };
    function goodbyes(name, packet) {
      return packet.answers.concat(packet.additionals).filter(function(rr) {
        return rr.type === "PTR" && rr.ttl === 0 && dnsEqual(rr.name, name);
      }).map(function(rr) {
        return rr.data;
      });
    }
    function buildServicesFor(name, packet, txt, referer) {
      var records = packet.answers.concat(packet.additionals).filter(function(rr) {
        return rr.ttl > 0;
      });
      return records.filter(function(rr) {
        return rr.type === "PTR" && dnsEqual(rr.name, name);
      }).map(function(ptr) {
        var service = {
          addresses: []
        };
        records.filter(function(rr) {
          return (rr.type === "SRV" || rr.type === "TXT") && dnsEqual(rr.name, ptr.data);
        }).forEach(function(rr) {
          if (rr.type === "SRV") {
            var parts = rr.name.split(".");
            var name2 = parts[0];
            var types = serviceName.parse(parts.slice(1, -1).join("."));
            service.name = name2;
            service.fqdn = rr.name;
            service.host = rr.data.target;
            service.referer = referer;
            service.port = rr.data.port;
            service.type = types.name;
            service.protocol = types.protocol;
            service.subtypes = types.subtypes;
          } else if (rr.type === "TXT") {
            service.rawTxt = rr.data;
            service.txt = txt.decode(rr.data);
          }
        });
        if (!service.name)
          return;
        records.filter(function(rr) {
          return (rr.type === "A" || rr.type === "AAAA") && dnsEqual(rr.name, service.host);
        }).forEach(function(rr) {
          service.addresses.push(rr.data);
        });
        return service;
      }).filter(function(rr) {
        return !!rr;
      });
    }
  }
});

// node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/index.js
var require_bonjour = __commonJS({
  "node_modules/.pnpm/bonjour@3.5.0/node_modules/bonjour/index.js"(exports, module2) {
    "use strict";
    var Registry = require_registry();
    var Server = require_mdns_server();
    var Browser = require_browser();
    module2.exports = Bonjour2;
    function Bonjour2(opts) {
      if (!(this instanceof Bonjour2))
        return new Bonjour2(opts);
      this._server = new Server(opts);
      this._registry = new Registry(this._server);
    }
    Bonjour2.prototype.publish = function(opts) {
      return this._registry.publish(opts);
    };
    Bonjour2.prototype.unpublishAll = function(cb) {
      this._registry.unpublishAll(cb);
    };
    Bonjour2.prototype.find = function(opts, onup) {
      return new Browser(this._server.mdns, opts, onup);
    };
    Bonjour2.prototype.findOne = function(opts, cb) {
      var browser = new Browser(this._server.mdns, opts);
      browser.once("up", function(service) {
        browser.stop();
        if (cb)
          cb(service);
      });
      return browser;
    };
    Bonjour2.prototype.destroy = function() {
      this._registry.destroy();
      this._server.mdns.destroy();
    };
  }
});

// node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js"(exports, module2) {
    "use strict";
    var conversions = {};
    module2.exports = conversions;
    function sign(x) {
      return x < 0 ? -1 : 1;
    }
    function evenRound(x) {
      if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
      } else {
        return Math.round(x);
      }
    }
    function createNumberConversion(bitLength, typeOpts) {
      if (!typeOpts.unsigned) {
        --bitLength;
      }
      const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
      const upperBound = Math.pow(2, bitLength) - 1;
      const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
      const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
      return function(V, opts) {
        if (!opts)
          opts = {};
        let x = +V;
        if (opts.enforceRange) {
          if (!Number.isFinite(x)) {
            throw new TypeError("Argument is not a finite number");
          }
          x = sign(x) * Math.floor(Math.abs(x));
          if (x < lowerBound || x > upperBound) {
            throw new TypeError("Argument is not in byte range");
          }
          return x;
        }
        if (!isNaN(x) && opts.clamp) {
          x = evenRound(x);
          if (x < lowerBound)
            x = lowerBound;
          if (x > upperBound)
            x = upperBound;
          return x;
        }
        if (!Number.isFinite(x) || x === 0) {
          return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
          return x - moduloVal;
        } else if (typeOpts.unsigned) {
          if (x < 0) {
            x += moduloVal;
          } else if (x === -0) {
            return 0;
          }
        }
        return x;
      };
    }
    conversions["void"] = function() {
      return void 0;
    };
    conversions["boolean"] = function(val) {
      return !!val;
    };
    conversions["byte"] = createNumberConversion(8, { unsigned: false });
    conversions["octet"] = createNumberConversion(8, { unsigned: true });
    conversions["short"] = createNumberConversion(16, { unsigned: false });
    conversions["unsigned short"] = createNumberConversion(16, { unsigned: true });
    conversions["long"] = createNumberConversion(32, { unsigned: false });
    conversions["unsigned long"] = createNumberConversion(32, { unsigned: true });
    conversions["long long"] = createNumberConversion(32, { unsigned: false, moduloBitLength: 64 });
    conversions["unsigned long long"] = createNumberConversion(32, { unsigned: true, moduloBitLength: 64 });
    conversions["double"] = function(V) {
      const x = +V;
      if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
      }
      return x;
    };
    conversions["unrestricted double"] = function(V) {
      const x = +V;
      if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
      }
      return x;
    };
    conversions["float"] = conversions["double"];
    conversions["unrestricted float"] = conversions["unrestricted double"];
    conversions["DOMString"] = function(V, opts) {
      if (!opts)
        opts = {};
      if (opts.treatNullAsEmptyString && V === null) {
        return "";
      }
      return String(V);
    };
    conversions["ByteString"] = function(V, opts) {
      const x = String(V);
      let c = void 0;
      for (let i = 0; (c = x.codePointAt(i)) !== void 0; ++i) {
        if (c > 255) {
          throw new TypeError("Argument is not a valid bytestring");
        }
      }
      return x;
    };
    conversions["USVString"] = function(V) {
      const S = String(V);
      const n = S.length;
      const U = [];
      for (let i = 0; i < n; ++i) {
        const c = S.charCodeAt(i);
        if (c < 55296 || c > 57343) {
          U.push(String.fromCodePoint(c));
        } else if (56320 <= c && c <= 57343) {
          U.push(String.fromCodePoint(65533));
        } else {
          if (i === n - 1) {
            U.push(String.fromCodePoint(65533));
          } else {
            const d = S.charCodeAt(i + 1);
            if (56320 <= d && d <= 57343) {
              const a = c & 1023;
              const b = d & 1023;
              U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
              ++i;
            } else {
              U.push(String.fromCodePoint(65533));
            }
          }
        }
      }
      return U.join("");
    };
    conversions["Date"] = function(V, opts) {
      if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
      }
      if (isNaN(V)) {
        return void 0;
      }
      return V;
    };
    conversions["RegExp"] = function(V, opts) {
      if (!(V instanceof RegExp)) {
        V = new RegExp(V);
      }
      return V;
    };
  }
});

// node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js"(exports, module2) {
    "use strict";
    module2.exports.mixin = function mixin(target, source) {
      const keys = Object.getOwnPropertyNames(source);
      for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
      }
    };
    module2.exports.wrapperSymbol = Symbol("wrapper");
    module2.exports.implSymbol = Symbol("impl");
    module2.exports.wrapperForImpl = function(impl) {
      return impl[module2.exports.wrapperSymbol];
    };
    module2.exports.implForWrapper = function(wrapper) {
      return wrapper[module2.exports.implSymbol];
    };
  }
});

// node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/lib/mappingTable.json
var require_mappingTable = __commonJS({
  "node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/lib/mappingTable.json"(exports, module2) {
    module2.exports = [[[0, 44], "disallowed_STD3_valid"], [[45, 46], "valid"], [[47, 47], "disallowed_STD3_valid"], [[48, 57], "valid"], [[58, 64], "disallowed_STD3_valid"], [[65, 65], "mapped", [97]], [[66, 66], "mapped", [98]], [[67, 67], "mapped", [99]], [[68, 68], "mapped", [100]], [[69, 69], "mapped", [101]], [[70, 70], "mapped", [102]], [[71, 71], "mapped", [103]], [[72, 72], "mapped", [104]], [[73, 73], "mapped", [105]], [[74, 74], "mapped", [106]], [[75, 75], "mapped", [107]], [[76, 76], "mapped", [108]], [[77, 77], "mapped", [109]], [[78, 78], "mapped", [110]], [[79, 79], "mapped", [111]], [[80, 80], "mapped", [112]], [[81, 81], "mapped", [113]], [[82, 82], "mapped", [114]], [[83, 83], "mapped", [115]], [[84, 84], "mapped", [116]], [[85, 85], "mapped", [117]], [[86, 86], "mapped", [118]], [[87, 87], "mapped", [119]], [[88, 88], "mapped", [120]], [[89, 89], "mapped", [121]], [[90, 90], "mapped", [122]], [[91, 96], "disallowed_STD3_valid"], [[97, 122], "valid"], [[123, 127], "disallowed_STD3_valid"], [[128, 159], "disallowed"], [[160, 160], "disallowed_STD3_mapped", [32]], [[161, 167], "valid", [], "NV8"], [[168, 168], "disallowed_STD3_mapped", [32, 776]], [[169, 169], "valid", [], "NV8"], [[170, 170], "mapped", [97]], [[171, 172], "valid", [], "NV8"], [[173, 173], "ignored"], [[174, 174], "valid", [], "NV8"], [[175, 175], "disallowed_STD3_mapped", [32, 772]], [[176, 177], "valid", [], "NV8"], [[178, 178], "mapped", [50]], [[179, 179], "mapped", [51]], [[180, 180], "disallowed_STD3_mapped", [32, 769]], [[181, 181], "mapped", [956]], [[182, 182], "valid", [], "NV8"], [[183, 183], "valid"], [[184, 184], "disallowed_STD3_mapped", [32, 807]], [[185, 185], "mapped", [49]], [[186, 186], "mapped", [111]], [[187, 187], "valid", [], "NV8"], [[188, 188], "mapped", [49, 8260, 52]], [[189, 189], "mapped", [49, 8260, 50]], [[190, 190], "mapped", [51, 8260, 52]], [[191, 191], "valid", [], "NV8"], [[192, 192], "mapped", [224]], [[193, 193], "mapped", [225]], [[194, 194], "mapped", [226]], [[195, 195], "mapped", [227]], [[196, 196], "mapped", [228]], [[197, 197], "mapped", [229]], [[198, 198], "mapped", [230]], [[199, 199], "mapped", [231]], [[200, 200], "mapped", [232]], [[201, 201], "mapped", [233]], [[202, 202], "mapped", [234]], [[203, 203], "mapped", [235]], [[204, 204], "mapped", [236]], [[205, 205], "mapped", [237]], [[206, 206], "mapped", [238]], [[207, 207], "mapped", [239]], [[208, 208], "mapped", [240]], [[209, 209], "mapped", [241]], [[210, 210], "mapped", [242]], [[211, 211], "mapped", [243]], [[212, 212], "mapped", [244]], [[213, 213], "mapped", [245]], [[214, 214], "mapped", [246]], [[215, 215], "valid", [], "NV8"], [[216, 216], "mapped", [248]], [[217, 217], "mapped", [249]], [[218, 218], "mapped", [250]], [[219, 219], "mapped", [251]], [[220, 220], "mapped", [252]], [[221, 221], "mapped", [253]], [[222, 222], "mapped", [254]], [[223, 223], "deviation", [115, 115]], [[224, 246], "valid"], [[247, 247], "valid", [], "NV8"], [[248, 255], "valid"], [[256, 256], "mapped", [257]], [[257, 257], "valid"], [[258, 258], "mapped", [259]], [[259, 259], "valid"], [[260, 260], "mapped", [261]], [[261, 261], "valid"], [[262, 262], "mapped", [263]], [[263, 263], "valid"], [[264, 264], "mapped", [265]], [[265, 265], "valid"], [[266, 266], "mapped", [267]], [[267, 267], "valid"], [[268, 268], "mapped", [269]], [[269, 269], "valid"], [[270, 270], "mapped", [271]], [[271, 271], "valid"], [[272, 272], "mapped", [273]], [[273, 273], "valid"], [[274, 274], "mapped", [275]], [[275, 275], "valid"], [[276, 276], "mapped", [277]], [[277, 277], "valid"], [[278, 278], "mapped", [279]], [[279, 279], "valid"], [[280, 280], "mapped", [281]], [[281, 281], "valid"], [[282, 282], "mapped", [283]], [[283, 283], "valid"], [[284, 284], "mapped", [285]], [[285, 285], "valid"], [[286, 286], "mapped", [287]], [[287, 287], "valid"], [[288, 288], "mapped", [289]], [[289, 289], "valid"], [[290, 290], "mapped", [291]], [[291, 291], "valid"], [[292, 292], "mapped", [293]], [[293, 293], "valid"], [[294, 294], "mapped", [295]], [[295, 295], "valid"], [[296, 296], "mapped", [297]], [[297, 297], "valid"], [[298, 298], "mapped", [299]], [[299, 299], "valid"], [[300, 300], "mapped", [301]], [[301, 301], "valid"], [[302, 302], "mapped", [303]], [[303, 303], "valid"], [[304, 304], "mapped", [105, 775]], [[305, 305], "valid"], [[306, 307], "mapped", [105, 106]], [[308, 308], "mapped", [309]], [[309, 309], "valid"], [[310, 310], "mapped", [311]], [[311, 312], "valid"], [[313, 313], "mapped", [314]], [[314, 314], "valid"], [[315, 315], "mapped", [316]], [[316, 316], "valid"], [[317, 317], "mapped", [318]], [[318, 318], "valid"], [[319, 320], "mapped", [108, 183]], [[321, 321], "mapped", [322]], [[322, 322], "valid"], [[323, 323], "mapped", [324]], [[324, 324], "valid"], [[325, 325], "mapped", [326]], [[326, 326], "valid"], [[327, 327], "mapped", [328]], [[328, 328], "valid"], [[329, 329], "mapped", [700, 110]], [[330, 330], "mapped", [331]], [[331, 331], "valid"], [[332, 332], "mapped", [333]], [[333, 333], "valid"], [[334, 334], "mapped", [335]], [[335, 335], "valid"], [[336, 336], "mapped", [337]], [[337, 337], "valid"], [[338, 338], "mapped", [339]], [[339, 339], "valid"], [[340, 340], "mapped", [341]], [[341, 341], "valid"], [[342, 342], "mapped", [343]], [[343, 343], "valid"], [[344, 344], "mapped", [345]], [[345, 345], "valid"], [[346, 346], "mapped", [347]], [[347, 347], "valid"], [[348, 348], "mapped", [349]], [[349, 349], "valid"], [[350, 350], "mapped", [351]], [[351, 351], "valid"], [[352, 352], "mapped", [353]], [[353, 353], "valid"], [[354, 354], "mapped", [355]], [[355, 355], "valid"], [[356, 356], "mapped", [357]], [[357, 357], "valid"], [[358, 358], "mapped", [359]], [[359, 359], "valid"], [[360, 360], "mapped", [361]], [[361, 361], "valid"], [[362, 362], "mapped", [363]], [[363, 363], "valid"], [[364, 364], "mapped", [365]], [[365, 365], "valid"], [[366, 366], "mapped", [367]], [[367, 367], "valid"], [[368, 368], "mapped", [369]], [[369, 369], "valid"], [[370, 370], "mapped", [371]], [[371, 371], "valid"], [[372, 372], "mapped", [373]], [[373, 373], "valid"], [[374, 374], "mapped", [375]], [[375, 375], "valid"], [[376, 376], "mapped", [255]], [[377, 377], "mapped", [378]], [[378, 378], "valid"], [[379, 379], "mapped", [380]], [[380, 380], "valid"], [[381, 381], "mapped", [382]], [[382, 382], "valid"], [[383, 383], "mapped", [115]], [[384, 384], "valid"], [[385, 385], "mapped", [595]], [[386, 386], "mapped", [387]], [[387, 387], "valid"], [[388, 388], "mapped", [389]], [[389, 389], "valid"], [[390, 390], "mapped", [596]], [[391, 391], "mapped", [392]], [[392, 392], "valid"], [[393, 393], "mapped", [598]], [[394, 394], "mapped", [599]], [[395, 395], "mapped", [396]], [[396, 397], "valid"], [[398, 398], "mapped", [477]], [[399, 399], "mapped", [601]], [[400, 400], "mapped", [603]], [[401, 401], "mapped", [402]], [[402, 402], "valid"], [[403, 403], "mapped", [608]], [[404, 404], "mapped", [611]], [[405, 405], "valid"], [[406, 406], "mapped", [617]], [[407, 407], "mapped", [616]], [[408, 408], "mapped", [409]], [[409, 411], "valid"], [[412, 412], "mapped", [623]], [[413, 413], "mapped", [626]], [[414, 414], "valid"], [[415, 415], "mapped", [629]], [[416, 416], "mapped", [417]], [[417, 417], "valid"], [[418, 418], "mapped", [419]], [[419, 419], "valid"], [[420, 420], "mapped", [421]], [[421, 421], "valid"], [[422, 422], "mapped", [640]], [[423, 423], "mapped", [424]], [[424, 424], "valid"], [[425, 425], "mapped", [643]], [[426, 427], "valid"], [[428, 428], "mapped", [429]], [[429, 429], "valid"], [[430, 430], "mapped", [648]], [[431, 431], "mapped", [432]], [[432, 432], "valid"], [[433, 433], "mapped", [650]], [[434, 434], "mapped", [651]], [[435, 435], "mapped", [436]], [[436, 436], "valid"], [[437, 437], "mapped", [438]], [[438, 438], "valid"], [[439, 439], "mapped", [658]], [[440, 440], "mapped", [441]], [[441, 443], "valid"], [[444, 444], "mapped", [445]], [[445, 451], "valid"], [[452, 454], "mapped", [100, 382]], [[455, 457], "mapped", [108, 106]], [[458, 460], "mapped", [110, 106]], [[461, 461], "mapped", [462]], [[462, 462], "valid"], [[463, 463], "mapped", [464]], [[464, 464], "valid"], [[465, 465], "mapped", [466]], [[466, 466], "valid"], [[467, 467], "mapped", [468]], [[468, 468], "valid"], [[469, 469], "mapped", [470]], [[470, 470], "valid"], [[471, 471], "mapped", [472]], [[472, 472], "valid"], [[473, 473], "mapped", [474]], [[474, 474], "valid"], [[475, 475], "mapped", [476]], [[476, 477], "valid"], [[478, 478], "mapped", [479]], [[479, 479], "valid"], [[480, 480], "mapped", [481]], [[481, 481], "valid"], [[482, 482], "mapped", [483]], [[483, 483], "valid"], [[484, 484], "mapped", [485]], [[485, 485], "valid"], [[486, 486], "mapped", [487]], [[487, 487], "valid"], [[488, 488], "mapped", [489]], [[489, 489], "valid"], [[490, 490], "mapped", [491]], [[491, 491], "valid"], [[492, 492], "mapped", [493]], [[493, 493], "valid"], [[494, 494], "mapped", [495]], [[495, 496], "valid"], [[497, 499], "mapped", [100, 122]], [[500, 500], "mapped", [501]], [[501, 501], "valid"], [[502, 502], "mapped", [405]], [[503, 503], "mapped", [447]], [[504, 504], "mapped", [505]], [[505, 505], "valid"], [[506, 506], "mapped", [507]], [[507, 507], "valid"], [[508, 508], "mapped", [509]], [[509, 509], "valid"], [[510, 510], "mapped", [511]], [[511, 511], "valid"], [[512, 512], "mapped", [513]], [[513, 513], "valid"], [[514, 514], "mapped", [515]], [[515, 515], "valid"], [[516, 516], "mapped", [517]], [[517, 517], "valid"], [[518, 518], "mapped", [519]], [[519, 519], "valid"], [[520, 520], "mapped", [521]], [[521, 521], "valid"], [[522, 522], "mapped", [523]], [[523, 523], "valid"], [[524, 524], "mapped", [525]], [[525, 525], "valid"], [[526, 526], "mapped", [527]], [[527, 527], "valid"], [[528, 528], "mapped", [529]], [[529, 529], "valid"], [[530, 530], "mapped", [531]], [[531, 531], "valid"], [[532, 532], "mapped", [533]], [[533, 533], "valid"], [[534, 534], "mapped", [535]], [[535, 535], "valid"], [[536, 536], "mapped", [537]], [[537, 537], "valid"], [[538, 538], "mapped", [539]], [[539, 539], "valid"], [[540, 540], "mapped", [541]], [[541, 541], "valid"], [[542, 542], "mapped", [543]], [[543, 543], "valid"], [[544, 544], "mapped", [414]], [[545, 545], "valid"], [[546, 546], "mapped", [547]], [[547, 547], "valid"], [[548, 548], "mapped", [549]], [[549, 549], "valid"], [[550, 550], "mapped", [551]], [[551, 551], "valid"], [[552, 552], "mapped", [553]], [[553, 553], "valid"], [[554, 554], "mapped", [555]], [[555, 555], "valid"], [[556, 556], "mapped", [557]], [[557, 557], "valid"], [[558, 558], "mapped", [559]], [[559, 559], "valid"], [[560, 560], "mapped", [561]], [[561, 561], "valid"], [[562, 562], "mapped", [563]], [[563, 563], "valid"], [[564, 566], "valid"], [[567, 569], "valid"], [[570, 570], "mapped", [11365]], [[571, 571], "mapped", [572]], [[572, 572], "valid"], [[573, 573], "mapped", [410]], [[574, 574], "mapped", [11366]], [[575, 576], "valid"], [[577, 577], "mapped", [578]], [[578, 578], "valid"], [[579, 579], "mapped", [384]], [[580, 580], "mapped", [649]], [[581, 581], "mapped", [652]], [[582, 582], "mapped", [583]], [[583, 583], "valid"], [[584, 584], "mapped", [585]], [[585, 585], "valid"], [[586, 586], "mapped", [587]], [[587, 587], "valid"], [[588, 588], "mapped", [589]], [[589, 589], "valid"], [[590, 590], "mapped", [591]], [[591, 591], "valid"], [[592, 680], "valid"], [[681, 685], "valid"], [[686, 687], "valid"], [[688, 688], "mapped", [104]], [[689, 689], "mapped", [614]], [[690, 690], "mapped", [106]], [[691, 691], "mapped", [114]], [[692, 692], "mapped", [633]], [[693, 693], "mapped", [635]], [[694, 694], "mapped", [641]], [[695, 695], "mapped", [119]], [[696, 696], "mapped", [121]], [[697, 705], "valid"], [[706, 709], "valid", [], "NV8"], [[710, 721], "valid"], [[722, 727], "valid", [], "NV8"], [[728, 728], "disallowed_STD3_mapped", [32, 774]], [[729, 729], "disallowed_STD3_mapped", [32, 775]], [[730, 730], "disallowed_STD3_mapped", [32, 778]], [[731, 731], "disallowed_STD3_mapped", [32, 808]], [[732, 732], "disallowed_STD3_mapped", [32, 771]], [[733, 733], "disallowed_STD3_mapped", [32, 779]], [[734, 734], "valid", [], "NV8"], [[735, 735], "valid", [], "NV8"], [[736, 736], "mapped", [611]], [[737, 737], "mapped", [108]], [[738, 738], "mapped", [115]], [[739, 739], "mapped", [120]], [[740, 740], "mapped", [661]], [[741, 745], "valid", [], "NV8"], [[746, 747], "valid", [], "NV8"], [[748, 748], "valid"], [[749, 749], "valid", [], "NV8"], [[750, 750], "valid"], [[751, 767], "valid", [], "NV8"], [[768, 831], "valid"], [[832, 832], "mapped", [768]], [[833, 833], "mapped", [769]], [[834, 834], "valid"], [[835, 835], "mapped", [787]], [[836, 836], "mapped", [776, 769]], [[837, 837], "mapped", [953]], [[838, 846], "valid"], [[847, 847], "ignored"], [[848, 855], "valid"], [[856, 860], "valid"], [[861, 863], "valid"], [[864, 865], "valid"], [[866, 866], "valid"], [[867, 879], "valid"], [[880, 880], "mapped", [881]], [[881, 881], "valid"], [[882, 882], "mapped", [883]], [[883, 883], "valid"], [[884, 884], "mapped", [697]], [[885, 885], "valid"], [[886, 886], "mapped", [887]], [[887, 887], "valid"], [[888, 889], "disallowed"], [[890, 890], "disallowed_STD3_mapped", [32, 953]], [[891, 893], "valid"], [[894, 894], "disallowed_STD3_mapped", [59]], [[895, 895], "mapped", [1011]], [[896, 899], "disallowed"], [[900, 900], "disallowed_STD3_mapped", [32, 769]], [[901, 901], "disallowed_STD3_mapped", [32, 776, 769]], [[902, 902], "mapped", [940]], [[903, 903], "mapped", [183]], [[904, 904], "mapped", [941]], [[905, 905], "mapped", [942]], [[906, 906], "mapped", [943]], [[907, 907], "disallowed"], [[908, 908], "mapped", [972]], [[909, 909], "disallowed"], [[910, 910], "mapped", [973]], [[911, 911], "mapped", [974]], [[912, 912], "valid"], [[913, 913], "mapped", [945]], [[914, 914], "mapped", [946]], [[915, 915], "mapped", [947]], [[916, 916], "mapped", [948]], [[917, 917], "mapped", [949]], [[918, 918], "mapped", [950]], [[919, 919], "mapped", [951]], [[920, 920], "mapped", [952]], [[921, 921], "mapped", [953]], [[922, 922], "mapped", [954]], [[923, 923], "mapped", [955]], [[924, 924], "mapped", [956]], [[925, 925], "mapped", [957]], [[926, 926], "mapped", [958]], [[927, 927], "mapped", [959]], [[928, 928], "mapped", [960]], [[929, 929], "mapped", [961]], [[930, 930], "disallowed"], [[931, 931], "mapped", [963]], [[932, 932], "mapped", [964]], [[933, 933], "mapped", [965]], [[934, 934], "mapped", [966]], [[935, 935], "mapped", [967]], [[936, 936], "mapped", [968]], [[937, 937], "mapped", [969]], [[938, 938], "mapped", [970]], [[939, 939], "mapped", [971]], [[940, 961], "valid"], [[962, 962], "deviation", [963]], [[963, 974], "valid"], [[975, 975], "mapped", [983]], [[976, 976], "mapped", [946]], [[977, 977], "mapped", [952]], [[978, 978], "mapped", [965]], [[979, 979], "mapped", [973]], [[980, 980], "mapped", [971]], [[981, 981], "mapped", [966]], [[982, 982], "mapped", [960]], [[983, 983], "valid"], [[984, 984], "mapped", [985]], [[985, 985], "valid"], [[986, 986], "mapped", [987]], [[987, 987], "valid"], [[988, 988], "mapped", [989]], [[989, 989], "valid"], [[990, 990], "mapped", [991]], [[991, 991], "valid"], [[992, 992], "mapped", [993]], [[993, 993], "valid"], [[994, 994], "mapped", [995]], [[995, 995], "valid"], [[996, 996], "mapped", [997]], [[997, 997], "valid"], [[998, 998], "mapped", [999]], [[999, 999], "valid"], [[1e3, 1e3], "mapped", [1001]], [[1001, 1001], "valid"], [[1002, 1002], "mapped", [1003]], [[1003, 1003], "valid"], [[1004, 1004], "mapped", [1005]], [[1005, 1005], "valid"], [[1006, 1006], "mapped", [1007]], [[1007, 1007], "valid"], [[1008, 1008], "mapped", [954]], [[1009, 1009], "mapped", [961]], [[1010, 1010], "mapped", [963]], [[1011, 1011], "valid"], [[1012, 1012], "mapped", [952]], [[1013, 1013], "mapped", [949]], [[1014, 1014], "valid", [], "NV8"], [[1015, 1015], "mapped", [1016]], [[1016, 1016], "valid"], [[1017, 1017], "mapped", [963]], [[1018, 1018], "mapped", [1019]], [[1019, 1019], "valid"], [[1020, 1020], "valid"], [[1021, 1021], "mapped", [891]], [[1022, 1022], "mapped", [892]], [[1023, 1023], "mapped", [893]], [[1024, 1024], "mapped", [1104]], [[1025, 1025], "mapped", [1105]], [[1026, 1026], "mapped", [1106]], [[1027, 1027], "mapped", [1107]], [[1028, 1028], "mapped", [1108]], [[1029, 1029], "mapped", [1109]], [[1030, 1030], "mapped", [1110]], [[1031, 1031], "mapped", [1111]], [[1032, 1032], "mapped", [1112]], [[1033, 1033], "mapped", [1113]], [[1034, 1034], "mapped", [1114]], [[1035, 1035], "mapped", [1115]], [[1036, 1036], "mapped", [1116]], [[1037, 1037], "mapped", [1117]], [[1038, 1038], "mapped", [1118]], [[1039, 1039], "mapped", [1119]], [[1040, 1040], "mapped", [1072]], [[1041, 1041], "mapped", [1073]], [[1042, 1042], "mapped", [1074]], [[1043, 1043], "mapped", [1075]], [[1044, 1044], "mapped", [1076]], [[1045, 1045], "mapped", [1077]], [[1046, 1046], "mapped", [1078]], [[1047, 1047], "mapped", [1079]], [[1048, 1048], "mapped", [1080]], [[1049, 1049], "mapped", [1081]], [[1050, 1050], "mapped", [1082]], [[1051, 1051], "mapped", [1083]], [[1052, 1052], "mapped", [1084]], [[1053, 1053], "mapped", [1085]], [[1054, 1054], "mapped", [1086]], [[1055, 1055], "mapped", [1087]], [[1056, 1056], "mapped", [1088]], [[1057, 1057], "mapped", [1089]], [[1058, 1058], "mapped", [1090]], [[1059, 1059], "mapped", [1091]], [[1060, 1060], "mapped", [1092]], [[1061, 1061], "mapped", [1093]], [[1062, 1062], "mapped", [1094]], [[1063, 1063], "mapped", [1095]], [[1064, 1064], "mapped", [1096]], [[1065, 1065], "mapped", [1097]], [[1066, 1066], "mapped", [1098]], [[1067, 1067], "mapped", [1099]], [[1068, 1068], "mapped", [1100]], [[1069, 1069], "mapped", [1101]], [[1070, 1070], "mapped", [1102]], [[1071, 1071], "mapped", [1103]], [[1072, 1103], "valid"], [[1104, 1104], "valid"], [[1105, 1116], "valid"], [[1117, 1117], "valid"], [[1118, 1119], "valid"], [[1120, 1120], "mapped", [1121]], [[1121, 1121], "valid"], [[1122, 1122], "mapped", [1123]], [[1123, 1123], "valid"], [[1124, 1124], "mapped", [1125]], [[1125, 1125], "valid"], [[1126, 1126], "mapped", [1127]], [[1127, 1127], "valid"], [[1128, 1128], "mapped", [1129]], [[1129, 1129], "valid"], [[1130, 1130], "mapped", [1131]], [[1131, 1131], "valid"], [[1132, 1132], "mapped", [1133]], [[1133, 1133], "valid"], [[1134, 1134], "mapped", [1135]], [[1135, 1135], "valid"], [[1136, 1136], "mapped", [1137]], [[1137, 1137], "valid"], [[1138, 1138], "mapped", [1139]], [[1139, 1139], "valid"], [[1140, 1140], "mapped", [1141]], [[1141, 1141], "valid"], [[1142, 1142], "mapped", [1143]], [[1143, 1143], "valid"], [[1144, 1144], "mapped", [1145]], [[1145, 1145], "valid"], [[1146, 1146], "mapped", [1147]], [[1147, 1147], "valid"], [[1148, 1148], "mapped", [1149]], [[1149, 1149], "valid"], [[1150, 1150], "mapped", [1151]], [[1151, 1151], "valid"], [[1152, 1152], "mapped", [1153]], [[1153, 1153], "valid"], [[1154, 1154], "valid", [], "NV8"], [[1155, 1158], "valid"], [[1159, 1159], "valid"], [[1160, 1161], "valid", [], "NV8"], [[1162, 1162], "mapped", [1163]], [[1163, 1163], "valid"], [[1164, 1164], "mapped", [1165]], [[1165, 1165], "valid"], [[1166, 1166], "mapped", [1167]], [[1167, 1167], "valid"], [[1168, 1168], "mapped", [1169]], [[1169, 1169], "valid"], [[1170, 1170], "mapped", [1171]], [[1171, 1171], "valid"], [[1172, 1172], "mapped", [1173]], [[1173, 1173], "valid"], [[1174, 1174], "mapped", [1175]], [[1175, 1175], "valid"], [[1176, 1176], "mapped", [1177]], [[1177, 1177], "valid"], [[1178, 1178], "mapped", [1179]], [[1179, 1179], "valid"], [[1180, 1180], "mapped", [1181]], [[1181, 1181], "valid"], [[1182, 1182], "mapped", [1183]], [[1183, 1183], "valid"], [[1184, 1184], "mapped", [1185]], [[1185, 1185], "valid"], [[1186, 1186], "mapped", [1187]], [[1187, 1187], "valid"], [[1188, 1188], "mapped", [1189]], [[1189, 1189], "valid"], [[1190, 1190], "mapped", [1191]], [[1191, 1191], "valid"], [[1192, 1192], "mapped", [1193]], [[1193, 1193], "valid"], [[1194, 1194], "mapped", [1195]], [[1195, 1195], "valid"], [[1196, 1196], "mapped", [1197]], [[1197, 1197], "valid"], [[1198, 1198], "mapped", [1199]], [[1199, 1199], "valid"], [[1200, 1200], "mapped", [1201]], [[1201, 1201], "valid"], [[1202, 1202], "mapped", [1203]], [[1203, 1203], "valid"], [[1204, 1204], "mapped", [1205]], [[1205, 1205], "valid"], [[1206, 1206], "mapped", [1207]], [[1207, 1207], "valid"], [[1208, 1208], "mapped", [1209]], [[1209, 1209], "valid"], [[1210, 1210], "mapped", [1211]], [[1211, 1211], "valid"], [[1212, 1212], "mapped", [1213]], [[1213, 1213], "valid"], [[1214, 1214], "mapped", [1215]], [[1215, 1215], "valid"], [[1216, 1216], "disallowed"], [[1217, 1217], "mapped", [1218]], [[1218, 1218], "valid"], [[1219, 1219], "mapped", [1220]], [[1220, 1220], "valid"], [[1221, 1221], "mapped", [1222]], [[1222, 1222], "valid"], [[1223, 1223], "mapped", [1224]], [[1224, 1224], "valid"], [[1225, 1225], "mapped", [1226]], [[1226, 1226], "valid"], [[1227, 1227], "mapped", [1228]], [[1228, 1228], "valid"], [[1229, 1229], "mapped", [1230]], [[1230, 1230], "valid"], [[1231, 1231], "valid"], [[1232, 1232], "mapped", [1233]], [[1233, 1233], "valid"], [[1234, 1234], "mapped", [1235]], [[1235, 1235], "valid"], [[1236, 1236], "mapped", [1237]], [[1237, 1237], "valid"], [[1238, 1238], "mapped", [1239]], [[1239, 1239], "valid"], [[1240, 1240], "mapped", [1241]], [[1241, 1241], "valid"], [[1242, 1242], "mapped", [1243]], [[1243, 1243], "valid"], [[1244, 1244], "mapped", [1245]], [[1245, 1245], "valid"], [[1246, 1246], "mapped", [1247]], [[1247, 1247], "valid"], [[1248, 1248], "mapped", [1249]], [[1249, 1249], "valid"], [[1250, 1250], "mapped", [1251]], [[1251, 1251], "valid"], [[1252, 1252], "mapped", [1253]], [[1253, 1253], "valid"], [[1254, 1254], "mapped", [1255]], [[1255, 1255], "valid"], [[1256, 1256], "mapped", [1257]], [[1257, 1257], "valid"], [[1258, 1258], "mapped", [1259]], [[1259, 1259], "valid"], [[1260, 1260], "mapped", [1261]], [[1261, 1261], "valid"], [[1262, 1262], "mapped", [1263]], [[1263, 1263], "valid"], [[1264, 1264], "mapped", [1265]], [[1265, 1265], "valid"], [[1266, 1266], "mapped", [1267]], [[1267, 1267], "valid"], [[1268, 1268], "mapped", [1269]], [[1269, 1269], "valid"], [[1270, 1270], "mapped", [1271]], [[1271, 1271], "valid"], [[1272, 1272], "mapped", [1273]], [[1273, 1273], "valid"], [[1274, 1274], "mapped", [1275]], [[1275, 1275], "valid"], [[1276, 1276], "mapped", [1277]], [[1277, 1277], "valid"], [[1278, 1278], "mapped", [1279]], [[1279, 1279], "valid"], [[1280, 1280], "mapped", [1281]], [[1281, 1281], "valid"], [[1282, 1282], "mapped", [1283]], [[1283, 1283], "valid"], [[1284, 1284], "mapped", [1285]], [[1285, 1285], "valid"], [[1286, 1286], "mapped", [1287]], [[1287, 1287], "valid"], [[1288, 1288], "mapped", [1289]], [[1289, 1289], "valid"], [[1290, 1290], "mapped", [1291]], [[1291, 1291], "valid"], [[1292, 1292], "mapped", [1293]], [[1293, 1293], "valid"], [[1294, 1294], "mapped", [1295]], [[1295, 1295], "valid"], [[1296, 1296], "mapped", [1297]], [[1297, 1297], "valid"], [[1298, 1298], "mapped", [1299]], [[1299, 1299], "valid"], [[1300, 1300], "mapped", [1301]], [[1301, 1301], "valid"], [[1302, 1302], "mapped", [1303]], [[1303, 1303], "valid"], [[1304, 1304], "mapped", [1305]], [[1305, 1305], "valid"], [[1306, 1306], "mapped", [1307]], [[1307, 1307], "valid"], [[1308, 1308], "mapped", [1309]], [[1309, 1309], "valid"], [[1310, 1310], "mapped", [1311]], [[1311, 1311], "valid"], [[1312, 1312], "mapped", [1313]], [[1313, 1313], "valid"], [[1314, 1314], "mapped", [1315]], [[1315, 1315], "valid"], [[1316, 1316], "mapped", [1317]], [[1317, 1317], "valid"], [[1318, 1318], "mapped", [1319]], [[1319, 1319], "valid"], [[1320, 1320], "mapped", [1321]], [[1321, 1321], "valid"], [[1322, 1322], "mapped", [1323]], [[1323, 1323], "valid"], [[1324, 1324], "mapped", [1325]], [[1325, 1325], "valid"], [[1326, 1326], "mapped", [1327]], [[1327, 1327], "valid"], [[1328, 1328], "disallowed"], [[1329, 1329], "mapped", [1377]], [[1330, 1330], "mapped", [1378]], [[1331, 1331], "mapped", [1379]], [[1332, 1332], "mapped", [1380]], [[1333, 1333], "mapped", [1381]], [[1334, 1334], "mapped", [1382]], [[1335, 1335], "mapped", [1383]], [[1336, 1336], "mapped", [1384]], [[1337, 1337], "mapped", [1385]], [[1338, 1338], "mapped", [1386]], [[1339, 1339], "mapped", [1387]], [[1340, 1340], "mapped", [1388]], [[1341, 1341], "mapped", [1389]], [[1342, 1342], "mapped", [1390]], [[1343, 1343], "mapped", [1391]], [[1344, 1344], "mapped", [1392]], [[1345, 1345], "mapped", [1393]], [[1346, 1346], "mapped", [1394]], [[1347, 1347], "mapped", [1395]], [[1348, 1348], "mapped", [1396]], [[1349, 1349], "mapped", [1397]], [[1350, 1350], "mapped", [1398]], [[1351, 1351], "mapped", [1399]], [[1352, 1352], "mapped", [1400]], [[1353, 1353], "mapped", [1401]], [[1354, 1354], "mapped", [1402]], [[1355, 1355], "mapped", [1403]], [[1356, 1356], "mapped", [1404]], [[1357, 1357], "mapped", [1405]], [[1358, 1358], "mapped", [1406]], [[1359, 1359], "mapped", [1407]], [[1360, 1360], "mapped", [1408]], [[1361, 1361], "mapped", [1409]], [[1362, 1362], "mapped", [1410]], [[1363, 1363], "mapped", [1411]], [[1364, 1364], "mapped", [1412]], [[1365, 1365], "mapped", [1413]], [[1366, 1366], "mapped", [1414]], [[1367, 1368], "disallowed"], [[1369, 1369], "valid"], [[1370, 1375], "valid", [], "NV8"], [[1376, 1376], "disallowed"], [[1377, 1414], "valid"], [[1415, 1415], "mapped", [1381, 1410]], [[1416, 1416], "disallowed"], [[1417, 1417], "valid", [], "NV8"], [[1418, 1418], "valid", [], "NV8"], [[1419, 1420], "disallowed"], [[1421, 1422], "valid", [], "NV8"], [[1423, 1423], "valid", [], "NV8"], [[1424, 1424], "disallowed"], [[1425, 1441], "valid"], [[1442, 1442], "valid"], [[1443, 1455], "valid"], [[1456, 1465], "valid"], [[1466, 1466], "valid"], [[1467, 1469], "valid"], [[1470, 1470], "valid", [], "NV8"], [[1471, 1471], "valid"], [[1472, 1472], "valid", [], "NV8"], [[1473, 1474], "valid"], [[1475, 1475], "valid", [], "NV8"], [[1476, 1476], "valid"], [[1477, 1477], "valid"], [[1478, 1478], "valid", [], "NV8"], [[1479, 1479], "valid"], [[1480, 1487], "disallowed"], [[1488, 1514], "valid"], [[1515, 1519], "disallowed"], [[1520, 1524], "valid"], [[1525, 1535], "disallowed"], [[1536, 1539], "disallowed"], [[1540, 1540], "disallowed"], [[1541, 1541], "disallowed"], [[1542, 1546], "valid", [], "NV8"], [[1547, 1547], "valid", [], "NV8"], [[1548, 1548], "valid", [], "NV8"], [[1549, 1551], "valid", [], "NV8"], [[1552, 1557], "valid"], [[1558, 1562], "valid"], [[1563, 1563], "valid", [], "NV8"], [[1564, 1564], "disallowed"], [[1565, 1565], "disallowed"], [[1566, 1566], "valid", [], "NV8"], [[1567, 1567], "valid", [], "NV8"], [[1568, 1568], "valid"], [[1569, 1594], "valid"], [[1595, 1599], "valid"], [[1600, 1600], "valid", [], "NV8"], [[1601, 1618], "valid"], [[1619, 1621], "valid"], [[1622, 1624], "valid"], [[1625, 1630], "valid"], [[1631, 1631], "valid"], [[1632, 1641], "valid"], [[1642, 1645], "valid", [], "NV8"], [[1646, 1647], "valid"], [[1648, 1652], "valid"], [[1653, 1653], "mapped", [1575, 1652]], [[1654, 1654], "mapped", [1608, 1652]], [[1655, 1655], "mapped", [1735, 1652]], [[1656, 1656], "mapped", [1610, 1652]], [[1657, 1719], "valid"], [[1720, 1721], "valid"], [[1722, 1726], "valid"], [[1727, 1727], "valid"], [[1728, 1742], "valid"], [[1743, 1743], "valid"], [[1744, 1747], "valid"], [[1748, 1748], "valid", [], "NV8"], [[1749, 1756], "valid"], [[1757, 1757], "disallowed"], [[1758, 1758], "valid", [], "NV8"], [[1759, 1768], "valid"], [[1769, 1769], "valid", [], "NV8"], [[1770, 1773], "valid"], [[1774, 1775], "valid"], [[1776, 1785], "valid"], [[1786, 1790], "valid"], [[1791, 1791], "valid"], [[1792, 1805], "valid", [], "NV8"], [[1806, 1806], "disallowed"], [[1807, 1807], "disallowed"], [[1808, 1836], "valid"], [[1837, 1839], "valid"], [[1840, 1866], "valid"], [[1867, 1868], "disallowed"], [[1869, 1871], "valid"], [[1872, 1901], "valid"], [[1902, 1919], "valid"], [[1920, 1968], "valid"], [[1969, 1969], "valid"], [[1970, 1983], "disallowed"], [[1984, 2037], "valid"], [[2038, 2042], "valid", [], "NV8"], [[2043, 2047], "disallowed"], [[2048, 2093], "valid"], [[2094, 2095], "disallowed"], [[2096, 2110], "valid", [], "NV8"], [[2111, 2111], "disallowed"], [[2112, 2139], "valid"], [[2140, 2141], "disallowed"], [[2142, 2142], "valid", [], "NV8"], [[2143, 2207], "disallowed"], [[2208, 2208], "valid"], [[2209, 2209], "valid"], [[2210, 2220], "valid"], [[2221, 2226], "valid"], [[2227, 2228], "valid"], [[2229, 2274], "disallowed"], [[2275, 2275], "valid"], [[2276, 2302], "valid"], [[2303, 2303], "valid"], [[2304, 2304], "valid"], [[2305, 2307], "valid"], [[2308, 2308], "valid"], [[2309, 2361], "valid"], [[2362, 2363], "valid"], [[2364, 2381], "valid"], [[2382, 2382], "valid"], [[2383, 2383], "valid"], [[2384, 2388], "valid"], [[2389, 2389], "valid"], [[2390, 2391], "valid"], [[2392, 2392], "mapped", [2325, 2364]], [[2393, 2393], "mapped", [2326, 2364]], [[2394, 2394], "mapped", [2327, 2364]], [[2395, 2395], "mapped", [2332, 2364]], [[2396, 2396], "mapped", [2337, 2364]], [[2397, 2397], "mapped", [2338, 2364]], [[2398, 2398], "mapped", [2347, 2364]], [[2399, 2399], "mapped", [2351, 2364]], [[2400, 2403], "valid"], [[2404, 2405], "valid", [], "NV8"], [[2406, 2415], "valid"], [[2416, 2416], "valid", [], "NV8"], [[2417, 2418], "valid"], [[2419, 2423], "valid"], [[2424, 2424], "valid"], [[2425, 2426], "valid"], [[2427, 2428], "valid"], [[2429, 2429], "valid"], [[2430, 2431], "valid"], [[2432, 2432], "valid"], [[2433, 2435], "valid"], [[2436, 2436], "disallowed"], [[2437, 2444], "valid"], [[2445, 2446], "disallowed"], [[2447, 2448], "valid"], [[2449, 2450], "disallowed"], [[2451, 2472], "valid"], [[2473, 2473], "disallowed"], [[2474, 2480], "valid"], [[2481, 2481], "disallowed"], [[2482, 2482], "valid"], [[2483, 2485], "disallowed"], [[2486, 2489], "valid"], [[2490, 2491], "disallowed"], [[2492, 2492], "valid"], [[2493, 2493], "valid"], [[2494, 2500], "valid"], [[2501, 2502], "disallowed"], [[2503, 2504], "valid"], [[2505, 2506], "disallowed"], [[2507, 2509], "valid"], [[2510, 2510], "valid"], [[2511, 2518], "disallowed"], [[2519, 2519], "valid"], [[2520, 2523], "disallowed"], [[2524, 2524], "mapped", [2465, 2492]], [[2525, 2525], "mapped", [2466, 2492]], [[2526, 2526], "disallowed"], [[2527, 2527], "mapped", [2479, 2492]], [[2528, 2531], "valid"], [[2532, 2533], "disallowed"], [[2534, 2545], "valid"], [[2546, 2554], "valid", [], "NV8"], [[2555, 2555], "valid", [], "NV8"], [[2556, 2560], "disallowed"], [[2561, 2561], "valid"], [[2562, 2562], "valid"], [[2563, 2563], "valid"], [[2564, 2564], "disallowed"], [[2565, 2570], "valid"], [[2571, 2574], "disallowed"], [[2575, 2576], "valid"], [[2577, 2578], "disallowed"], [[2579, 2600], "valid"], [[2601, 2601], "disallowed"], [[2602, 2608], "valid"], [[2609, 2609], "disallowed"], [[2610, 2610], "valid"], [[2611, 2611], "mapped", [2610, 2620]], [[2612, 2612], "disallowed"], [[2613, 2613], "valid"], [[2614, 2614], "mapped", [2616, 2620]], [[2615, 2615], "disallowed"], [[2616, 2617], "valid"], [[2618, 2619], "disallowed"], [[2620, 2620], "valid"], [[2621, 2621], "disallowed"], [[2622, 2626], "valid"], [[2627, 2630], "disallowed"], [[2631, 2632], "valid"], [[2633, 2634], "disallowed"], [[2635, 2637], "valid"], [[2638, 2640], "disallowed"], [[2641, 2641], "valid"], [[2642, 2648], "disallowed"], [[2649, 2649], "mapped", [2582, 2620]], [[2650, 2650], "mapped", [2583, 2620]], [[2651, 2651], "mapped", [2588, 2620]], [[2652, 2652], "valid"], [[2653, 2653], "disallowed"], [[2654, 2654], "mapped", [2603, 2620]], [[2655, 2661], "disallowed"], [[2662, 2676], "valid"], [[2677, 2677], "valid"], [[2678, 2688], "disallowed"], [[2689, 2691], "valid"], [[2692, 2692], "disallowed"], [[2693, 2699], "valid"], [[2700, 2700], "valid"], [[2701, 2701], "valid"], [[2702, 2702], "disallowed"], [[2703, 2705], "valid"], [[2706, 2706], "disallowed"], [[2707, 2728], "valid"], [[2729, 2729], "disallowed"], [[2730, 2736], "valid"], [[2737, 2737], "disallowed"], [[2738, 2739], "valid"], [[2740, 2740], "disallowed"], [[2741, 2745], "valid"], [[2746, 2747], "disallowed"], [[2748, 2757], "valid"], [[2758, 2758], "disallowed"], [[2759, 2761], "valid"], [[2762, 2762], "disallowed"], [[2763, 2765], "valid"], [[2766, 2767], "disallowed"], [[2768, 2768], "valid"], [[2769, 2783], "disallowed"], [[2784, 2784], "valid"], [[2785, 2787], "valid"], [[2788, 2789], "disallowed"], [[2790, 2799], "valid"], [[2800, 2800], "valid", [], "NV8"], [[2801, 2801], "valid", [], "NV8"], [[2802, 2808], "disallowed"], [[2809, 2809], "valid"], [[2810, 2816], "disallowed"], [[2817, 2819], "valid"], [[2820, 2820], "disallowed"], [[2821, 2828], "valid"], [[2829, 2830], "disallowed"], [[2831, 2832], "valid"], [[2833, 2834], "disallowed"], [[2835, 2856], "valid"], [[2857, 2857], "disallowed"], [[2858, 2864], "valid"], [[2865, 2865], "disallowed"], [[2866, 2867], "valid"], [[2868, 2868], "disallowed"], [[2869, 2869], "valid"], [[2870, 2873], "valid"], [[2874, 2875], "disallowed"], [[2876, 2883], "valid"], [[2884, 2884], "valid"], [[2885, 2886], "disallowed"], [[2887, 2888], "valid"], [[2889, 2890], "disallowed"], [[2891, 2893], "valid"], [[2894, 2901], "disallowed"], [[2902, 2903], "valid"], [[2904, 2907], "disallowed"], [[2908, 2908], "mapped", [2849, 2876]], [[2909, 2909], "mapped", [2850, 2876]], [[2910, 2910], "disallowed"], [[2911, 2913], "valid"], [[2914, 2915], "valid"], [[2916, 2917], "disallowed"], [[2918, 2927], "valid"], [[2928, 2928], "valid", [], "NV8"], [[2929, 2929], "valid"], [[2930, 2935], "valid", [], "NV8"], [[2936, 2945], "disallowed"], [[2946, 2947], "valid"], [[2948, 2948], "disallowed"], [[2949, 2954], "valid"], [[2955, 2957], "disallowed"], [[2958, 2960], "valid"], [[2961, 2961], "disallowed"], [[2962, 2965], "valid"], [[2966, 2968], "disallowed"], [[2969, 2970], "valid"], [[2971, 2971], "disallowed"], [[2972, 2972], "valid"], [[2973, 2973], "disallowed"], [[2974, 2975], "valid"], [[2976, 2978], "disallowed"], [[2979, 2980], "valid"], [[2981, 2983], "disallowed"], [[2984, 2986], "valid"], [[2987, 2989], "disallowed"], [[2990, 2997], "valid"], [[2998, 2998], "valid"], [[2999, 3001], "valid"], [[3002, 3005], "disallowed"], [[3006, 3010], "valid"], [[3011, 3013], "disallowed"], [[3014, 3016], "valid"], [[3017, 3017], "disallowed"], [[3018, 3021], "valid"], [[3022, 3023], "disallowed"], [[3024, 3024], "valid"], [[3025, 3030], "disallowed"], [[3031, 3031], "valid"], [[3032, 3045], "disallowed"], [[3046, 3046], "valid"], [[3047, 3055], "valid"], [[3056, 3058], "valid", [], "NV8"], [[3059, 3066], "valid", [], "NV8"], [[3067, 3071], "disallowed"], [[3072, 3072], "valid"], [[3073, 3075], "valid"], [[3076, 3076], "disallowed"], [[3077, 3084], "valid"], [[3085, 3085], "disallowed"], [[3086, 3088], "valid"], [[3089, 3089], "disallowed"], [[3090, 3112], "valid"], [[3113, 3113], "disallowed"], [[3114, 3123], "valid"], [[3124, 3124], "valid"], [[3125, 3129], "valid"], [[3130, 3132], "disallowed"], [[3133, 3133], "valid"], [[3134, 3140], "valid"], [[3141, 3141], "disallowed"], [[3142, 3144], "valid"], [[3145, 3145], "disallowed"], [[3146, 3149], "valid"], [[3150, 3156], "disallowed"], [[3157, 3158], "valid"], [[3159, 3159], "disallowed"], [[3160, 3161], "valid"], [[3162, 3162], "valid"], [[3163, 3167], "disallowed"], [[3168, 3169], "valid"], [[3170, 3171], "valid"], [[3172, 3173], "disallowed"], [[3174, 3183], "valid"], [[3184, 3191], "disallowed"], [[3192, 3199], "valid", [], "NV8"], [[3200, 3200], "disallowed"], [[3201, 3201], "valid"], [[3202, 3203], "valid"], [[3204, 3204], "disallowed"], [[3205, 3212], "valid"], [[3213, 3213], "disallowed"], [[3214, 3216], "valid"], [[3217, 3217], "disallowed"], [[3218, 3240], "valid"], [[3241, 3241], "disallowed"], [[3242, 3251], "valid"], [[3252, 3252], "disallowed"], [[3253, 3257], "valid"], [[3258, 3259], "disallowed"], [[3260, 3261], "valid"], [[3262, 3268], "valid"], [[3269, 3269], "disallowed"], [[3270, 3272], "valid"], [[3273, 3273], "disallowed"], [[3274, 3277], "valid"], [[3278, 3284], "disallowed"], [[3285, 3286], "valid"], [[3287, 3293], "disallowed"], [[3294, 3294], "valid"], [[3295, 3295], "disallowed"], [[3296, 3297], "valid"], [[3298, 3299], "valid"], [[3300, 3301], "disallowed"], [[3302, 3311], "valid"], [[3312, 3312], "disallowed"], [[3313, 3314], "valid"], [[3315, 3328], "disallowed"], [[3329, 3329], "valid"], [[3330, 3331], "valid"], [[3332, 3332], "disallowed"], [[3333, 3340], "valid"], [[3341, 3341], "disallowed"], [[3342, 3344], "valid"], [[3345, 3345], "disallowed"], [[3346, 3368], "valid"], [[3369, 3369], "valid"], [[3370, 3385], "valid"], [[3386, 3386], "valid"], [[3387, 3388], "disallowed"], [[3389, 3389], "valid"], [[3390, 3395], "valid"], [[3396, 3396], "valid"], [[3397, 3397], "disallowed"], [[3398, 3400], "valid"], [[3401, 3401], "disallowed"], [[3402, 3405], "valid"], [[3406, 3406], "valid"], [[3407, 3414], "disallowed"], [[3415, 3415], "valid"], [[3416, 3422], "disallowed"], [[3423, 3423], "valid"], [[3424, 3425], "valid"], [[3426, 3427], "valid"], [[3428, 3429], "disallowed"], [[3430, 3439], "valid"], [[3440, 3445], "valid", [], "NV8"], [[3446, 3448], "disallowed"], [[3449, 3449], "valid", [], "NV8"], [[3450, 3455], "valid"], [[3456, 3457], "disallowed"], [[3458, 3459], "valid"], [[3460, 3460], "disallowed"], [[3461, 3478], "valid"], [[3479, 3481], "disallowed"], [[3482, 3505], "valid"], [[3506, 3506], "disallowed"], [[3507, 3515], "valid"], [[3516, 3516], "disallowed"], [[3517, 3517], "valid"], [[3518, 3519], "disallowed"], [[3520, 3526], "valid"], [[3527, 3529], "disallowed"], [[3530, 3530], "valid"], [[3531, 3534], "disallowed"], [[3535, 3540], "valid"], [[3541, 3541], "disallowed"], [[3542, 3542], "valid"], [[3543, 3543], "disallowed"], [[3544, 3551], "valid"], [[3552, 3557], "disallowed"], [[3558, 3567], "valid"], [[3568, 3569], "disallowed"], [[3570, 3571], "valid"], [[3572, 3572], "valid", [], "NV8"], [[3573, 3584], "disallowed"], [[3585, 3634], "valid"], [[3635, 3635], "mapped", [3661, 3634]], [[3636, 3642], "valid"], [[3643, 3646], "disallowed"], [[3647, 3647], "valid", [], "NV8"], [[3648, 3662], "valid"], [[3663, 3663], "valid", [], "NV8"], [[3664, 3673], "valid"], [[3674, 3675], "valid", [], "NV8"], [[3676, 3712], "disallowed"], [[3713, 3714], "valid"], [[3715, 3715], "disallowed"], [[3716, 3716], "valid"], [[3717, 3718], "disallowed"], [[3719, 3720], "valid"], [[3721, 3721], "disallowed"], [[3722, 3722], "valid"], [[3723, 3724], "disallowed"], [[3725, 3725], "valid"], [[3726, 3731], "disallowed"], [[3732, 3735], "valid"], [[3736, 3736], "disallowed"], [[3737, 3743], "valid"], [[3744, 3744], "disallowed"], [[3745, 3747], "valid"], [[3748, 3748], "disallowed"], [[3749, 3749], "valid"], [[3750, 3750], "disallowed"], [[3751, 3751], "valid"], [[3752, 3753], "disallowed"], [[3754, 3755], "valid"], [[3756, 3756], "disallowed"], [[3757, 3762], "valid"], [[3763, 3763], "mapped", [3789, 3762]], [[3764, 3769], "valid"], [[3770, 3770], "disallowed"], [[3771, 3773], "valid"], [[3774, 3775], "disallowed"], [[3776, 3780], "valid"], [[3781, 3781], "disallowed"], [[3782, 3782], "valid"], [[3783, 3783], "disallowed"], [[3784, 3789], "valid"], [[3790, 3791], "disallowed"], [[3792, 3801], "valid"], [[3802, 3803], "disallowed"], [[3804, 3804], "mapped", [3755, 3737]], [[3805, 3805], "mapped", [3755, 3745]], [[3806, 3807], "valid"], [[3808, 3839], "disallowed"], [[3840, 3840], "valid"], [[3841, 3850], "valid", [], "NV8"], [[3851, 3851], "valid"], [[3852, 3852], "mapped", [3851]], [[3853, 3863], "valid", [], "NV8"], [[3864, 3865], "valid"], [[3866, 3871], "valid", [], "NV8"], [[3872, 3881], "valid"], [[3882, 3892], "valid", [], "NV8"], [[3893, 3893], "valid"], [[3894, 3894], "valid", [], "NV8"], [[3895, 3895], "valid"], [[3896, 3896], "valid", [], "NV8"], [[3897, 3897], "valid"], [[3898, 3901], "valid", [], "NV8"], [[3902, 3906], "valid"], [[3907, 3907], "mapped", [3906, 4023]], [[3908, 3911], "valid"], [[3912, 3912], "disallowed"], [[3913, 3916], "valid"], [[3917, 3917], "mapped", [3916, 4023]], [[3918, 3921], "valid"], [[3922, 3922], "mapped", [3921, 4023]], [[3923, 3926], "valid"], [[3927, 3927], "mapped", [3926, 4023]], [[3928, 3931], "valid"], [[3932, 3932], "mapped", [3931, 4023]], [[3933, 3944], "valid"], [[3945, 3945], "mapped", [3904, 4021]], [[3946, 3946], "valid"], [[3947, 3948], "valid"], [[3949, 3952], "disallowed"], [[3953, 3954], "valid"], [[3955, 3955], "mapped", [3953, 3954]], [[3956, 3956], "valid"], [[3957, 3957], "mapped", [3953, 3956]], [[3958, 3958], "mapped", [4018, 3968]], [[3959, 3959], "mapped", [4018, 3953, 3968]], [[3960, 3960], "mapped", [4019, 3968]], [[3961, 3961], "mapped", [4019, 3953, 3968]], [[3962, 3968], "valid"], [[3969, 3969], "mapped", [3953, 3968]], [[3970, 3972], "valid"], [[3973, 3973], "valid", [], "NV8"], [[3974, 3979], "valid"], [[3980, 3983], "valid"], [[3984, 3986], "valid"], [[3987, 3987], "mapped", [3986, 4023]], [[3988, 3989], "valid"], [[3990, 3990], "valid"], [[3991, 3991], "valid"], [[3992, 3992], "disallowed"], [[3993, 3996], "valid"], [[3997, 3997], "mapped", [3996, 4023]], [[3998, 4001], "valid"], [[4002, 4002], "mapped", [4001, 4023]], [[4003, 4006], "valid"], [[4007, 4007], "mapped", [4006, 4023]], [[4008, 4011], "valid"], [[4012, 4012], "mapped", [4011, 4023]], [[4013, 4013], "valid"], [[4014, 4016], "valid"], [[4017, 4023], "valid"], [[4024, 4024], "valid"], [[4025, 4025], "mapped", [3984, 4021]], [[4026, 4028], "valid"], [[4029, 4029], "disallowed"], [[4030, 4037], "valid", [], "NV8"], [[4038, 4038], "valid"], [[4039, 4044], "valid", [], "NV8"], [[4045, 4045], "disallowed"], [[4046, 4046], "valid", [], "NV8"], [[4047, 4047], "valid", [], "NV8"], [[4048, 4049], "valid", [], "NV8"], [[4050, 4052], "valid", [], "NV8"], [[4053, 4056], "valid", [], "NV8"], [[4057, 4058], "valid", [], "NV8"], [[4059, 4095], "disallowed"], [[4096, 4129], "valid"], [[4130, 4130], "valid"], [[4131, 4135], "valid"], [[4136, 4136], "valid"], [[4137, 4138], "valid"], [[4139, 4139], "valid"], [[4140, 4146], "valid"], [[4147, 4149], "valid"], [[4150, 4153], "valid"], [[4154, 4159], "valid"], [[4160, 4169], "valid"], [[4170, 4175], "valid", [], "NV8"], [[4176, 4185], "valid"], [[4186, 4249], "valid"], [[4250, 4253], "valid"], [[4254, 4255], "valid", [], "NV8"], [[4256, 4293], "disallowed"], [[4294, 4294], "disallowed"], [[4295, 4295], "mapped", [11559]], [[4296, 4300], "disallowed"], [[4301, 4301], "mapped", [11565]], [[4302, 4303], "disallowed"], [[4304, 4342], "valid"], [[4343, 4344], "valid"], [[4345, 4346], "valid"], [[4347, 4347], "valid", [], "NV8"], [[4348, 4348], "mapped", [4316]], [[4349, 4351], "valid"], [[4352, 4441], "valid", [], "NV8"], [[4442, 4446], "valid", [], "NV8"], [[4447, 4448], "disallowed"], [[4449, 4514], "valid", [], "NV8"], [[4515, 4519], "valid", [], "NV8"], [[4520, 4601], "valid", [], "NV8"], [[4602, 4607], "valid", [], "NV8"], [[4608, 4614], "valid"], [[4615, 4615], "valid"], [[4616, 4678], "valid"], [[4679, 4679], "valid"], [[4680, 4680], "valid"], [[4681, 4681], "disallowed"], [[4682, 4685], "valid"], [[4686, 4687], "disallowed"], [[4688, 4694], "valid"], [[4695, 4695], "disallowed"], [[4696, 4696], "valid"], [[4697, 4697], "disallowed"], [[4698, 4701], "valid"], [[4702, 4703], "disallowed"], [[4704, 4742], "valid"], [[4743, 4743], "valid"], [[4744, 4744], "valid"], [[4745, 4745], "disallowed"], [[4746, 4749], "valid"], [[4750, 4751], "disallowed"], [[4752, 4782], "valid"], [[4783, 4783], "valid"], [[4784, 4784], "valid"], [[4785, 4785], "disallowed"], [[4786, 4789], "valid"], [[4790, 4791], "disallowed"], [[4792, 4798], "valid"], [[4799, 4799], "disallowed"], [[4800, 4800], "valid"], [[4801, 4801], "disallowed"], [[4802, 4805], "valid"], [[4806, 4807], "disallowed"], [[4808, 4814], "valid"], [[4815, 4815], "valid"], [[4816, 4822], "valid"], [[4823, 4823], "disallowed"], [[4824, 4846], "valid"], [[4847, 4847], "valid"], [[4848, 4878], "valid"], [[4879, 4879], "valid"], [[4880, 4880], "valid"], [[4881, 4881], "disallowed"], [[4882, 4885], "valid"], [[4886, 4887], "disallowed"], [[4888, 4894], "valid"], [[4895, 4895], "valid"], [[4896, 4934], "valid"], [[4935, 4935], "valid"], [[4936, 4954], "valid"], [[4955, 4956], "disallowed"], [[4957, 4958], "valid"], [[4959, 4959], "valid"], [[4960, 4960], "valid", [], "NV8"], [[4961, 4988], "valid", [], "NV8"], [[4989, 4991], "disallowed"], [[4992, 5007], "valid"], [[5008, 5017], "valid", [], "NV8"], [[5018, 5023], "disallowed"], [[5024, 5108], "valid"], [[5109, 5109], "valid"], [[5110, 5111], "disallowed"], [[5112, 5112], "mapped", [5104]], [[5113, 5113], "mapped", [5105]], [[5114, 5114], "mapped", [5106]], [[5115, 5115], "mapped", [5107]], [[5116, 5116], "mapped", [5108]], [[5117, 5117], "mapped", [5109]], [[5118, 5119], "disallowed"], [[5120, 5120], "valid", [], "NV8"], [[5121, 5740], "valid"], [[5741, 5742], "valid", [], "NV8"], [[5743, 5750], "valid"], [[5751, 5759], "valid"], [[5760, 5760], "disallowed"], [[5761, 5786], "valid"], [[5787, 5788], "valid", [], "NV8"], [[5789, 5791], "disallowed"], [[5792, 5866], "valid"], [[5867, 5872], "valid", [], "NV8"], [[5873, 5880], "valid"], [[5881, 5887], "disallowed"], [[5888, 5900], "valid"], [[5901, 5901], "disallowed"], [[5902, 5908], "valid"], [[5909, 5919], "disallowed"], [[5920, 5940], "valid"], [[5941, 5942], "valid", [], "NV8"], [[5943, 5951], "disallowed"], [[5952, 5971], "valid"], [[5972, 5983], "disallowed"], [[5984, 5996], "valid"], [[5997, 5997], "disallowed"], [[5998, 6e3], "valid"], [[6001, 6001], "disallowed"], [[6002, 6003], "valid"], [[6004, 6015], "disallowed"], [[6016, 6067], "valid"], [[6068, 6069], "disallowed"], [[6070, 6099], "valid"], [[6100, 6102], "valid", [], "NV8"], [[6103, 6103], "valid"], [[6104, 6107], "valid", [], "NV8"], [[6108, 6108], "valid"], [[6109, 6109], "valid"], [[6110, 6111], "disallowed"], [[6112, 6121], "valid"], [[6122, 6127], "disallowed"], [[6128, 6137], "valid", [], "NV8"], [[6138, 6143], "disallowed"], [[6144, 6149], "valid", [], "NV8"], [[6150, 6150], "disallowed"], [[6151, 6154], "valid", [], "NV8"], [[6155, 6157], "ignored"], [[6158, 6158], "disallowed"], [[6159, 6159], "disallowed"], [[6160, 6169], "valid"], [[6170, 6175], "disallowed"], [[6176, 6263], "valid"], [[6264, 6271], "disallowed"], [[6272, 6313], "valid"], [[6314, 6314], "valid"], [[6315, 6319], "disallowed"], [[6320, 6389], "valid"], [[6390, 6399], "disallowed"], [[6400, 6428], "valid"], [[6429, 6430], "valid"], [[6431, 6431], "disallowed"], [[6432, 6443], "valid"], [[6444, 6447], "disallowed"], [[6448, 6459], "valid"], [[6460, 6463], "disallowed"], [[6464, 6464], "valid", [], "NV8"], [[6465, 6467], "disallowed"], [[6468, 6469], "valid", [], "NV8"], [[6470, 6509], "valid"], [[6510, 6511], "disallowed"], [[6512, 6516], "valid"], [[6517, 6527], "disallowed"], [[6528, 6569], "valid"], [[6570, 6571], "valid"], [[6572, 6575], "disallowed"], [[6576, 6601], "valid"], [[6602, 6607], "disallowed"], [[6608, 6617], "valid"], [[6618, 6618], "valid", [], "XV8"], [[6619, 6621], "disallowed"], [[6622, 6623], "valid", [], "NV8"], [[6624, 6655], "valid", [], "NV8"], [[6656, 6683], "valid"], [[6684, 6685], "disallowed"], [[6686, 6687], "valid", [], "NV8"], [[6688, 6750], "valid"], [[6751, 6751], "disallowed"], [[6752, 6780], "valid"], [[6781, 6782], "disallowed"], [[6783, 6793], "valid"], [[6794, 6799], "disallowed"], [[6800, 6809], "valid"], [[6810, 6815], "disallowed"], [[6816, 6822], "valid", [], "NV8"], [[6823, 6823], "valid"], [[6824, 6829], "valid", [], "NV8"], [[6830, 6831], "disallowed"], [[6832, 6845], "valid"], [[6846, 6846], "valid", [], "NV8"], [[6847, 6911], "disallowed"], [[6912, 6987], "valid"], [[6988, 6991], "disallowed"], [[6992, 7001], "valid"], [[7002, 7018], "valid", [], "NV8"], [[7019, 7027], "valid"], [[7028, 7036], "valid", [], "NV8"], [[7037, 7039], "disallowed"], [[7040, 7082], "valid"], [[7083, 7085], "valid"], [[7086, 7097], "valid"], [[7098, 7103], "valid"], [[7104, 7155], "valid"], [[7156, 7163], "disallowed"], [[7164, 7167], "valid", [], "NV8"], [[7168, 7223], "valid"], [[7224, 7226], "disallowed"], [[7227, 7231], "valid", [], "NV8"], [[7232, 7241], "valid"], [[7242, 7244], "disallowed"], [[7245, 7293], "valid"], [[7294, 7295], "valid", [], "NV8"], [[7296, 7359], "disallowed"], [[7360, 7367], "valid", [], "NV8"], [[7368, 7375], "disallowed"], [[7376, 7378], "valid"], [[7379, 7379], "valid", [], "NV8"], [[7380, 7410], "valid"], [[7411, 7414], "valid"], [[7415, 7415], "disallowed"], [[7416, 7417], "valid"], [[7418, 7423], "disallowed"], [[7424, 7467], "valid"], [[7468, 7468], "mapped", [97]], [[7469, 7469], "mapped", [230]], [[7470, 7470], "mapped", [98]], [[7471, 7471], "valid"], [[7472, 7472], "mapped", [100]], [[7473, 7473], "mapped", [101]], [[7474, 7474], "mapped", [477]], [[7475, 7475], "mapped", [103]], [[7476, 7476], "mapped", [104]], [[7477, 7477], "mapped", [105]], [[7478, 7478], "mapped", [106]], [[7479, 7479], "mapped", [107]], [[7480, 7480], "mapped", [108]], [[7481, 7481], "mapped", [109]], [[7482, 7482], "mapped", [110]], [[7483, 7483], "valid"], [[7484, 7484], "mapped", [111]], [[7485, 7485], "mapped", [547]], [[7486, 7486], "mapped", [112]], [[7487, 7487], "mapped", [114]], [[7488, 7488], "mapped", [116]], [[7489, 7489], "mapped", [117]], [[7490, 7490], "mapped", [119]], [[7491, 7491], "mapped", [97]], [[7492, 7492], "mapped", [592]], [[7493, 7493], "mapped", [593]], [[7494, 7494], "mapped", [7426]], [[7495, 7495], "mapped", [98]], [[7496, 7496], "mapped", [100]], [[7497, 7497], "mapped", [101]], [[7498, 7498], "mapped", [601]], [[7499, 7499], "mapped", [603]], [[7500, 7500], "mapped", [604]], [[7501, 7501], "mapped", [103]], [[7502, 7502], "valid"], [[7503, 7503], "mapped", [107]], [[7504, 7504], "mapped", [109]], [[7505, 7505], "mapped", [331]], [[7506, 7506], "mapped", [111]], [[7507, 7507], "mapped", [596]], [[7508, 7508], "mapped", [7446]], [[7509, 7509], "mapped", [7447]], [[7510, 7510], "mapped", [112]], [[7511, 7511], "mapped", [116]], [[7512, 7512], "mapped", [117]], [[7513, 7513], "mapped", [7453]], [[7514, 7514], "mapped", [623]], [[7515, 7515], "mapped", [118]], [[7516, 7516], "mapped", [7461]], [[7517, 7517], "mapped", [946]], [[7518, 7518], "mapped", [947]], [[7519, 7519], "mapped", [948]], [[7520, 7520], "mapped", [966]], [[7521, 7521], "mapped", [967]], [[7522, 7522], "mapped", [105]], [[7523, 7523], "mapped", [114]], [[7524, 7524], "mapped", [117]], [[7525, 7525], "mapped", [118]], [[7526, 7526], "mapped", [946]], [[7527, 7527], "mapped", [947]], [[7528, 7528], "mapped", [961]], [[7529, 7529], "mapped", [966]], [[7530, 7530], "mapped", [967]], [[7531, 7531], "valid"], [[7532, 7543], "valid"], [[7544, 7544], "mapped", [1085]], [[7545, 7578], "valid"], [[7579, 7579], "mapped", [594]], [[7580, 7580], "mapped", [99]], [[7581, 7581], "mapped", [597]], [[7582, 7582], "mapped", [240]], [[7583, 7583], "mapped", [604]], [[7584, 7584], "mapped", [102]], [[7585, 7585], "mapped", [607]], [[7586, 7586], "mapped", [609]], [[7587, 7587], "mapped", [613]], [[7588, 7588], "mapped", [616]], [[7589, 7589], "mapped", [617]], [[7590, 7590], "mapped", [618]], [[7591, 7591], "mapped", [7547]], [[7592, 7592], "mapped", [669]], [[7593, 7593], "mapped", [621]], [[7594, 7594], "mapped", [7557]], [[7595, 7595], "mapped", [671]], [[7596, 7596], "mapped", [625]], [[7597, 7597], "mapped", [624]], [[7598, 7598], "mapped", [626]], [[7599, 7599], "mapped", [627]], [[7600, 7600], "mapped", [628]], [[7601, 7601], "mapped", [629]], [[7602, 7602], "mapped", [632]], [[7603, 7603], "mapped", [642]], [[7604, 7604], "mapped", [643]], [[7605, 7605], "mapped", [427]], [[7606, 7606], "mapped", [649]], [[7607, 7607], "mapped", [650]], [[7608, 7608], "mapped", [7452]], [[7609, 7609], "mapped", [651]], [[7610, 7610], "mapped", [652]], [[7611, 7611], "mapped", [122]], [[7612, 7612], "mapped", [656]], [[7613, 7613], "mapped", [657]], [[7614, 7614], "mapped", [658]], [[7615, 7615], "mapped", [952]], [[7616, 7619], "valid"], [[7620, 7626], "valid"], [[7627, 7654], "valid"], [[7655, 7669], "valid"], [[7670, 7675], "disallowed"], [[7676, 7676], "valid"], [[7677, 7677], "valid"], [[7678, 7679], "valid"], [[7680, 7680], "mapped", [7681]], [[7681, 7681], "valid"], [[7682, 7682], "mapped", [7683]], [[7683, 7683], "valid"], [[7684, 7684], "mapped", [7685]], [[7685, 7685], "valid"], [[7686, 7686], "mapped", [7687]], [[7687, 7687], "valid"], [[7688, 7688], "mapped", [7689]], [[7689, 7689], "valid"], [[7690, 7690], "mapped", [7691]], [[7691, 7691], "valid"], [[7692, 7692], "mapped", [7693]], [[7693, 7693], "valid"], [[7694, 7694], "mapped", [7695]], [[7695, 7695], "valid"], [[7696, 7696], "mapped", [7697]], [[7697, 7697], "valid"], [[7698, 7698], "mapped", [7699]], [[7699, 7699], "valid"], [[7700, 7700], "mapped", [7701]], [[7701, 7701], "valid"], [[7702, 7702], "mapped", [7703]], [[7703, 7703], "valid"], [[7704, 7704], "mapped", [7705]], [[7705, 7705], "valid"], [[7706, 7706], "mapped", [7707]], [[7707, 7707], "valid"], [[7708, 7708], "mapped", [7709]], [[7709, 7709], "valid"], [[7710, 7710], "mapped", [7711]], [[7711, 7711], "valid"], [[7712, 7712], "mapped", [7713]], [[7713, 7713], "valid"], [[7714, 7714], "mapped", [7715]], [[7715, 7715], "valid"], [[7716, 7716], "mapped", [7717]], [[7717, 7717], "valid"], [[7718, 7718], "mapped", [7719]], [[7719, 7719], "valid"], [[7720, 7720], "mapped", [7721]], [[7721, 7721], "valid"], [[7722, 7722], "mapped", [7723]], [[7723, 7723], "valid"], [[7724, 7724], "mapped", [7725]], [[7725, 7725], "valid"], [[7726, 7726], "mapped", [7727]], [[7727, 7727], "valid"], [[7728, 7728], "mapped", [7729]], [[7729, 7729], "valid"], [[7730, 7730], "mapped", [7731]], [[7731, 7731], "valid"], [[7732, 7732], "mapped", [7733]], [[7733, 7733], "valid"], [[7734, 7734], "mapped", [7735]], [[7735, 7735], "valid"], [[7736, 7736], "mapped", [7737]], [[7737, 7737], "valid"], [[7738, 7738], "mapped", [7739]], [[7739, 7739], "valid"], [[7740, 7740], "mapped", [7741]], [[7741, 7741], "valid"], [[7742, 7742], "mapped", [7743]], [[7743, 7743], "valid"], [[7744, 7744], "mapped", [7745]], [[7745, 7745], "valid"], [[7746, 7746], "mapped", [7747]], [[7747, 7747], "valid"], [[7748, 7748], "mapped", [7749]], [[7749, 7749], "valid"], [[7750, 7750], "mapped", [7751]], [[7751, 7751], "valid"], [[7752, 7752], "mapped", [7753]], [[7753, 7753], "valid"], [[7754, 7754], "mapped", [7755]], [[7755, 7755], "valid"], [[7756, 7756], "mapped", [7757]], [[7757, 7757], "valid"], [[7758, 7758], "mapped", [7759]], [[7759, 7759], "valid"], [[7760, 7760], "mapped", [7761]], [[7761, 7761], "valid"], [[7762, 7762], "mapped", [7763]], [[7763, 7763], "valid"], [[7764, 7764], "mapped", [7765]], [[7765, 7765], "valid"], [[7766, 7766], "mapped", [7767]], [[7767, 7767], "valid"], [[7768, 7768], "mapped", [7769]], [[7769, 7769], "valid"], [[7770, 7770], "mapped", [7771]], [[7771, 7771], "valid"], [[7772, 7772], "mapped", [7773]], [[7773, 7773], "valid"], [[7774, 7774], "mapped", [7775]], [[7775, 7775], "valid"], [[7776, 7776], "mapped", [7777]], [[7777, 7777], "valid"], [[7778, 7778], "mapped", [7779]], [[7779, 7779], "valid"], [[7780, 7780], "mapped", [7781]], [[7781, 7781], "valid"], [[7782, 7782], "mapped", [7783]], [[7783, 7783], "valid"], [[7784, 7784], "mapped", [7785]], [[7785, 7785], "valid"], [[7786, 7786], "mapped", [7787]], [[7787, 7787], "valid"], [[7788, 7788], "mapped", [7789]], [[7789, 7789], "valid"], [[7790, 7790], "mapped", [7791]], [[7791, 7791], "valid"], [[7792, 7792], "mapped", [7793]], [[7793, 7793], "valid"], [[7794, 7794], "mapped", [7795]], [[7795, 7795], "valid"], [[7796, 7796], "mapped", [7797]], [[7797, 7797], "valid"], [[7798, 7798], "mapped", [7799]], [[7799, 7799], "valid"], [[7800, 7800], "mapped", [7801]], [[7801, 7801], "valid"], [[7802, 7802], "mapped", [7803]], [[7803, 7803], "valid"], [[7804, 7804], "mapped", [7805]], [[7805, 7805], "valid"], [[7806, 7806], "mapped", [7807]], [[7807, 7807], "valid"], [[7808, 7808], "mapped", [7809]], [[7809, 7809], "valid"], [[7810, 7810], "mapped", [7811]], [[7811, 7811], "valid"], [[7812, 7812], "mapped", [7813]], [[7813, 7813], "valid"], [[7814, 7814], "mapped", [7815]], [[7815, 7815], "valid"], [[7816, 7816], "mapped", [7817]], [[7817, 7817], "valid"], [[7818, 7818], "mapped", [7819]], [[7819, 7819], "valid"], [[7820, 7820], "mapped", [7821]], [[7821, 7821], "valid"], [[7822, 7822], "mapped", [7823]], [[7823, 7823], "valid"], [[7824, 7824], "mapped", [7825]], [[7825, 7825], "valid"], [[7826, 7826], "mapped", [7827]], [[7827, 7827], "valid"], [[7828, 7828], "mapped", [7829]], [[7829, 7833], "valid"], [[7834, 7834], "mapped", [97, 702]], [[7835, 7835], "mapped", [7777]], [[7836, 7837], "valid"], [[7838, 7838], "mapped", [115, 115]], [[7839, 7839], "valid"], [[7840, 7840], "mapped", [7841]], [[7841, 7841], "valid"], [[7842, 7842], "mapped", [7843]], [[7843, 7843], "valid"], [[7844, 7844], "mapped", [7845]], [[7845, 7845], "valid"], [[7846, 7846], "mapped", [7847]], [[7847, 7847], "valid"], [[7848, 7848], "mapped", [7849]], [[7849, 7849], "valid"], [[7850, 7850], "mapped", [7851]], [[7851, 7851], "valid"], [[7852, 7852], "mapped", [7853]], [[7853, 7853], "valid"], [[7854, 7854], "mapped", [7855]], [[7855, 7855], "valid"], [[7856, 7856], "mapped", [7857]], [[7857, 7857], "valid"], [[7858, 7858], "mapped", [7859]], [[7859, 7859], "valid"], [[7860, 7860], "mapped", [7861]], [[7861, 7861], "valid"], [[7862, 7862], "mapped", [7863]], [[7863, 7863], "valid"], [[7864, 7864], "mapped", [7865]], [[7865, 7865], "valid"], [[7866, 7866], "mapped", [7867]], [[7867, 7867], "valid"], [[7868, 7868], "mapped", [7869]], [[7869, 7869], "valid"], [[7870, 7870], "mapped", [7871]], [[7871, 7871], "valid"], [[7872, 7872], "mapped", [7873]], [[7873, 7873], "valid"], [[7874, 7874], "mapped", [7875]], [[7875, 7875], "valid"], [[7876, 7876], "mapped", [7877]], [[7877, 7877], "valid"], [[7878, 7878], "mapped", [7879]], [[7879, 7879], "valid"], [[7880, 7880], "mapped", [7881]], [[7881, 7881], "valid"], [[7882, 7882], "mapped", [7883]], [[7883, 7883], "valid"], [[7884, 7884], "mapped", [7885]], [[7885, 7885], "valid"], [[7886, 7886], "mapped", [7887]], [[7887, 7887], "valid"], [[7888, 7888], "mapped", [7889]], [[7889, 7889], "valid"], [[7890, 7890], "mapped", [7891]], [[7891, 7891], "valid"], [[7892, 7892], "mapped", [7893]], [[7893, 7893], "valid"], [[7894, 7894], "mapped", [7895]], [[7895, 7895], "valid"], [[7896, 7896], "mapped", [7897]], [[7897, 7897], "valid"], [[7898, 7898], "mapped", [7899]], [[7899, 7899], "valid"], [[7900, 7900], "mapped", [7901]], [[7901, 7901], "valid"], [[7902, 7902], "mapped", [7903]], [[7903, 7903], "valid"], [[7904, 7904], "mapped", [7905]], [[7905, 7905], "valid"], [[7906, 7906], "mapped", [7907]], [[7907, 7907], "valid"], [[7908, 7908], "mapped", [7909]], [[7909, 7909], "valid"], [[7910, 7910], "mapped", [7911]], [[7911, 7911], "valid"], [[7912, 7912], "mapped", [7913]], [[7913, 7913], "valid"], [[7914, 7914], "mapped", [7915]], [[7915, 7915], "valid"], [[7916, 7916], "mapped", [7917]], [[7917, 7917], "valid"], [[7918, 7918], "mapped", [7919]], [[7919, 7919], "valid"], [[7920, 7920], "mapped", [7921]], [[7921, 7921], "valid"], [[7922, 7922], "mapped", [7923]], [[7923, 7923], "valid"], [[7924, 7924], "mapped", [7925]], [[7925, 7925], "valid"], [[7926, 7926], "mapped", [7927]], [[7927, 7927], "valid"], [[7928, 7928], "mapped", [7929]], [[7929, 7929], "valid"], [[7930, 7930], "mapped", [7931]], [[7931, 7931], "valid"], [[7932, 7932], "mapped", [7933]], [[7933, 7933], "valid"], [[7934, 7934], "mapped", [7935]], [[7935, 7935], "valid"], [[7936, 7943], "valid"], [[7944, 7944], "mapped", [7936]], [[7945, 7945], "mapped", [7937]], [[7946, 7946], "mapped", [7938]], [[7947, 7947], "mapped", [7939]], [[7948, 7948], "mapped", [7940]], [[7949, 7949], "mapped", [7941]], [[7950, 7950], "mapped", [7942]], [[7951, 7951], "mapped", [7943]], [[7952, 7957], "valid"], [[7958, 7959], "disallowed"], [[7960, 7960], "mapped", [7952]], [[7961, 7961], "mapped", [7953]], [[7962, 7962], "mapped", [7954]], [[7963, 7963], "mapped", [7955]], [[7964, 7964], "mapped", [7956]], [[7965, 7965], "mapped", [7957]], [[7966, 7967], "disallowed"], [[7968, 7975], "valid"], [[7976, 7976], "mapped", [7968]], [[7977, 7977], "mapped", [7969]], [[7978, 7978], "mapped", [7970]], [[7979, 7979], "mapped", [7971]], [[7980, 7980], "mapped", [7972]], [[7981, 7981], "mapped", [7973]], [[7982, 7982], "mapped", [7974]], [[7983, 7983], "mapped", [7975]], [[7984, 7991], "valid"], [[7992, 7992], "mapped", [7984]], [[7993, 7993], "mapped", [7985]], [[7994, 7994], "mapped", [7986]], [[7995, 7995], "mapped", [7987]], [[7996, 7996], "mapped", [7988]], [[7997, 7997], "mapped", [7989]], [[7998, 7998], "mapped", [7990]], [[7999, 7999], "mapped", [7991]], [[8e3, 8005], "valid"], [[8006, 8007], "disallowed"], [[8008, 8008], "mapped", [8e3]], [[8009, 8009], "mapped", [8001]], [[8010, 8010], "mapped", [8002]], [[8011, 8011], "mapped", [8003]], [[8012, 8012], "mapped", [8004]], [[8013, 8013], "mapped", [8005]], [[8014, 8015], "disallowed"], [[8016, 8023], "valid"], [[8024, 8024], "disallowed"], [[8025, 8025], "mapped", [8017]], [[8026, 8026], "disallowed"], [[8027, 8027], "mapped", [8019]], [[8028, 8028], "disallowed"], [[8029, 8029], "mapped", [8021]], [[8030, 8030], "disallowed"], [[8031, 8031], "mapped", [8023]], [[8032, 8039], "valid"], [[8040, 8040], "mapped", [8032]], [[8041, 8041], "mapped", [8033]], [[8042, 8042], "mapped", [8034]], [[8043, 8043], "mapped", [8035]], [[8044, 8044], "mapped", [8036]], [[8045, 8045], "mapped", [8037]], [[8046, 8046], "mapped", [8038]], [[8047, 8047], "mapped", [8039]], [[8048, 8048], "valid"], [[8049, 8049], "mapped", [940]], [[8050, 8050], "valid"], [[8051, 8051], "mapped", [941]], [[8052, 8052], "valid"], [[8053, 8053], "mapped", [942]], [[8054, 8054], "valid"], [[8055, 8055], "mapped", [943]], [[8056, 8056], "valid"], [[8057, 8057], "mapped", [972]], [[8058, 8058], "valid"], [[8059, 8059], "mapped", [973]], [[8060, 8060], "valid"], [[8061, 8061], "mapped", [974]], [[8062, 8063], "disallowed"], [[8064, 8064], "mapped", [7936, 953]], [[8065, 8065], "mapped", [7937, 953]], [[8066, 8066], "mapped", [7938, 953]], [[8067, 8067], "mapped", [7939, 953]], [[8068, 8068], "mapped", [7940, 953]], [[8069, 8069], "mapped", [7941, 953]], [[8070, 8070], "mapped", [7942, 953]], [[8071, 8071], "mapped", [7943, 953]], [[8072, 8072], "mapped", [7936, 953]], [[8073, 8073], "mapped", [7937, 953]], [[8074, 8074], "mapped", [7938, 953]], [[8075, 8075], "mapped", [7939, 953]], [[8076, 8076], "mapped", [7940, 953]], [[8077, 8077], "mapped", [7941, 953]], [[8078, 8078], "mapped", [7942, 953]], [[8079, 8079], "mapped", [7943, 953]], [[8080, 8080], "mapped", [7968, 953]], [[8081, 8081], "mapped", [7969, 953]], [[8082, 8082], "mapped", [7970, 953]], [[8083, 8083], "mapped", [7971, 953]], [[8084, 8084], "mapped", [7972, 953]], [[8085, 8085], "mapped", [7973, 953]], [[8086, 8086], "mapped", [7974, 953]], [[8087, 8087], "mapped", [7975, 953]], [[8088, 8088], "mapped", [7968, 953]], [[8089, 8089], "mapped", [7969, 953]], [[8090, 8090], "mapped", [7970, 953]], [[8091, 8091], "mapped", [7971, 953]], [[8092, 8092], "mapped", [7972, 953]], [[8093, 8093], "mapped", [7973, 953]], [[8094, 8094], "mapped", [7974, 953]], [[8095, 8095], "mapped", [7975, 953]], [[8096, 8096], "mapped", [8032, 953]], [[8097, 8097], "mapped", [8033, 953]], [[8098, 8098], "mapped", [8034, 953]], [[8099, 8099], "mapped", [8035, 953]], [[8100, 8100], "mapped", [8036, 953]], [[8101, 8101], "mapped", [8037, 953]], [[8102, 8102], "mapped", [8038, 953]], [[8103, 8103], "mapped", [8039, 953]], [[8104, 8104], "mapped", [8032, 953]], [[8105, 8105], "mapped", [8033, 953]], [[8106, 8106], "mapped", [8034, 953]], [[8107, 8107], "mapped", [8035, 953]], [[8108, 8108], "mapped", [8036, 953]], [[8109, 8109], "mapped", [8037, 953]], [[8110, 8110], "mapped", [8038, 953]], [[8111, 8111], "mapped", [8039, 953]], [[8112, 8113], "valid"], [[8114, 8114], "mapped", [8048, 953]], [[8115, 8115], "mapped", [945, 953]], [[8116, 8116], "mapped", [940, 953]], [[8117, 8117], "disallowed"], [[8118, 8118], "valid"], [[8119, 8119], "mapped", [8118, 953]], [[8120, 8120], "mapped", [8112]], [[8121, 8121], "mapped", [8113]], [[8122, 8122], "mapped", [8048]], [[8123, 8123], "mapped", [940]], [[8124, 8124], "mapped", [945, 953]], [[8125, 8125], "disallowed_STD3_mapped", [32, 787]], [[8126, 8126], "mapped", [953]], [[8127, 8127], "disallowed_STD3_mapped", [32, 787]], [[8128, 8128], "disallowed_STD3_mapped", [32, 834]], [[8129, 8129], "disallowed_STD3_mapped", [32, 776, 834]], [[8130, 8130], "mapped", [8052, 953]], [[8131, 8131], "mapped", [951, 953]], [[8132, 8132], "mapped", [942, 953]], [[8133, 8133], "disallowed"], [[8134, 8134], "valid"], [[8135, 8135], "mapped", [8134, 953]], [[8136, 8136], "mapped", [8050]], [[8137, 8137], "mapped", [941]], [[8138, 8138], "mapped", [8052]], [[8139, 8139], "mapped", [942]], [[8140, 8140], "mapped", [951, 953]], [[8141, 8141], "disallowed_STD3_mapped", [32, 787, 768]], [[8142, 8142], "disallowed_STD3_mapped", [32, 787, 769]], [[8143, 8143], "disallowed_STD3_mapped", [32, 787, 834]], [[8144, 8146], "valid"], [[8147, 8147], "mapped", [912]], [[8148, 8149], "disallowed"], [[8150, 8151], "valid"], [[8152, 8152], "mapped", [8144]], [[8153, 8153], "mapped", [8145]], [[8154, 8154], "mapped", [8054]], [[8155, 8155], "mapped", [943]], [[8156, 8156], "disallowed"], [[8157, 8157], "disallowed_STD3_mapped", [32, 788, 768]], [[8158, 8158], "disallowed_STD3_mapped", [32, 788, 769]], [[8159, 8159], "disallowed_STD3_mapped", [32, 788, 834]], [[8160, 8162], "valid"], [[8163, 8163], "mapped", [944]], [[8164, 8167], "valid"], [[8168, 8168], "mapped", [8160]], [[8169, 8169], "mapped", [8161]], [[8170, 8170], "mapped", [8058]], [[8171, 8171], "mapped", [973]], [[8172, 8172], "mapped", [8165]], [[8173, 8173], "disallowed_STD3_mapped", [32, 776, 768]], [[8174, 8174], "disallowed_STD3_mapped", [32, 776, 769]], [[8175, 8175], "disallowed_STD3_mapped", [96]], [[8176, 8177], "disallowed"], [[8178, 8178], "mapped", [8060, 953]], [[8179, 8179], "mapped", [969, 953]], [[8180, 8180], "mapped", [974, 953]], [[8181, 8181], "disallowed"], [[8182, 8182], "valid"], [[8183, 8183], "mapped", [8182, 953]], [[8184, 8184], "mapped", [8056]], [[8185, 8185], "mapped", [972]], [[8186, 8186], "mapped", [8060]], [[8187, 8187], "mapped", [974]], [[8188, 8188], "mapped", [969, 953]], [[8189, 8189], "disallowed_STD3_mapped", [32, 769]], [[8190, 8190], "disallowed_STD3_mapped", [32, 788]], [[8191, 8191], "disallowed"], [[8192, 8202], "disallowed_STD3_mapped", [32]], [[8203, 8203], "ignored"], [[8204, 8205], "deviation", []], [[8206, 8207], "disallowed"], [[8208, 8208], "valid", [], "NV8"], [[8209, 8209], "mapped", [8208]], [[8210, 8214], "valid", [], "NV8"], [[8215, 8215], "disallowed_STD3_mapped", [32, 819]], [[8216, 8227], "valid", [], "NV8"], [[8228, 8230], "disallowed"], [[8231, 8231], "valid", [], "NV8"], [[8232, 8238], "disallowed"], [[8239, 8239], "disallowed_STD3_mapped", [32]], [[8240, 8242], "valid", [], "NV8"], [[8243, 8243], "mapped", [8242, 8242]], [[8244, 8244], "mapped", [8242, 8242, 8242]], [[8245, 8245], "valid", [], "NV8"], [[8246, 8246], "mapped", [8245, 8245]], [[8247, 8247], "mapped", [8245, 8245, 8245]], [[8248, 8251], "valid", [], "NV8"], [[8252, 8252], "disallowed_STD3_mapped", [33, 33]], [[8253, 8253], "valid", [], "NV8"], [[8254, 8254], "disallowed_STD3_mapped", [32, 773]], [[8255, 8262], "valid", [], "NV8"], [[8263, 8263], "disallowed_STD3_mapped", [63, 63]], [[8264, 8264], "disallowed_STD3_mapped", [63, 33]], [[8265, 8265], "disallowed_STD3_mapped", [33, 63]], [[8266, 8269], "valid", [], "NV8"], [[8270, 8274], "valid", [], "NV8"], [[8275, 8276], "valid", [], "NV8"], [[8277, 8278], "valid", [], "NV8"], [[8279, 8279], "mapped", [8242, 8242, 8242, 8242]], [[8280, 8286], "valid", [], "NV8"], [[8287, 8287], "disallowed_STD3_mapped", [32]], [[8288, 8288], "ignored"], [[8289, 8291], "disallowed"], [[8292, 8292], "ignored"], [[8293, 8293], "disallowed"], [[8294, 8297], "disallowed"], [[8298, 8303], "disallowed"], [[8304, 8304], "mapped", [48]], [[8305, 8305], "mapped", [105]], [[8306, 8307], "disallowed"], [[8308, 8308], "mapped", [52]], [[8309, 8309], "mapped", [53]], [[8310, 8310], "mapped", [54]], [[8311, 8311], "mapped", [55]], [[8312, 8312], "mapped", [56]], [[8313, 8313], "mapped", [57]], [[8314, 8314], "disallowed_STD3_mapped", [43]], [[8315, 8315], "mapped", [8722]], [[8316, 8316], "disallowed_STD3_mapped", [61]], [[8317, 8317], "disallowed_STD3_mapped", [40]], [[8318, 8318], "disallowed_STD3_mapped", [41]], [[8319, 8319], "mapped", [110]], [[8320, 8320], "mapped", [48]], [[8321, 8321], "mapped", [49]], [[8322, 8322], "mapped", [50]], [[8323, 8323], "mapped", [51]], [[8324, 8324], "mapped", [52]], [[8325, 8325], "mapped", [53]], [[8326, 8326], "mapped", [54]], [[8327, 8327], "mapped", [55]], [[8328, 8328], "mapped", [56]], [[8329, 8329], "mapped", [57]], [[8330, 8330], "disallowed_STD3_mapped", [43]], [[8331, 8331], "mapped", [8722]], [[8332, 8332], "disallowed_STD3_mapped", [61]], [[8333, 8333], "disallowed_STD3_mapped", [40]], [[8334, 8334], "disallowed_STD3_mapped", [41]], [[8335, 8335], "disallowed"], [[8336, 8336], "mapped", [97]], [[8337, 8337], "mapped", [101]], [[8338, 8338], "mapped", [111]], [[8339, 8339], "mapped", [120]], [[8340, 8340], "mapped", [601]], [[8341, 8341], "mapped", [104]], [[8342, 8342], "mapped", [107]], [[8343, 8343], "mapped", [108]], [[8344, 8344], "mapped", [109]], [[8345, 8345], "mapped", [110]], [[8346, 8346], "mapped", [112]], [[8347, 8347], "mapped", [115]], [[8348, 8348], "mapped", [116]], [[8349, 8351], "disallowed"], [[8352, 8359], "valid", [], "NV8"], [[8360, 8360], "mapped", [114, 115]], [[8361, 8362], "valid", [], "NV8"], [[8363, 8363], "valid", [], "NV8"], [[8364, 8364], "valid", [], "NV8"], [[8365, 8367], "valid", [], "NV8"], [[8368, 8369], "valid", [], "NV8"], [[8370, 8373], "valid", [], "NV8"], [[8374, 8376], "valid", [], "NV8"], [[8377, 8377], "valid", [], "NV8"], [[8378, 8378], "valid", [], "NV8"], [[8379, 8381], "valid", [], "NV8"], [[8382, 8382], "valid", [], "NV8"], [[8383, 8399], "disallowed"], [[8400, 8417], "valid", [], "NV8"], [[8418, 8419], "valid", [], "NV8"], [[8420, 8426], "valid", [], "NV8"], [[8427, 8427], "valid", [], "NV8"], [[8428, 8431], "valid", [], "NV8"], [[8432, 8432], "valid", [], "NV8"], [[8433, 8447], "disallowed"], [[8448, 8448], "disallowed_STD3_mapped", [97, 47, 99]], [[8449, 8449], "disallowed_STD3_mapped", [97, 47, 115]], [[8450, 8450], "mapped", [99]], [[8451, 8451], "mapped", [176, 99]], [[8452, 8452], "valid", [], "NV8"], [[8453, 8453], "disallowed_STD3_mapped", [99, 47, 111]], [[8454, 8454], "disallowed_STD3_mapped", [99, 47, 117]], [[8455, 8455], "mapped", [603]], [[8456, 8456], "valid", [], "NV8"], [[8457, 8457], "mapped", [176, 102]], [[8458, 8458], "mapped", [103]], [[8459, 8462], "mapped", [104]], [[8463, 8463], "mapped", [295]], [[8464, 8465], "mapped", [105]], [[8466, 8467], "mapped", [108]], [[8468, 8468], "valid", [], "NV8"], [[8469, 8469], "mapped", [110]], [[8470, 8470], "mapped", [110, 111]], [[8471, 8472], "valid", [], "NV8"], [[8473, 8473], "mapped", [112]], [[8474, 8474], "mapped", [113]], [[8475, 8477], "mapped", [114]], [[8478, 8479], "valid", [], "NV8"], [[8480, 8480], "mapped", [115, 109]], [[8481, 8481], "mapped", [116, 101, 108]], [[8482, 8482], "mapped", [116, 109]], [[8483, 8483], "valid", [], "NV8"], [[8484, 8484], "mapped", [122]], [[8485, 8485], "valid", [], "NV8"], [[8486, 8486], "mapped", [969]], [[8487, 8487], "valid", [], "NV8"], [[8488, 8488], "mapped", [122]], [[8489, 8489], "valid", [], "NV8"], [[8490, 8490], "mapped", [107]], [[8491, 8491], "mapped", [229]], [[8492, 8492], "mapped", [98]], [[8493, 8493], "mapped", [99]], [[8494, 8494], "valid", [], "NV8"], [[8495, 8496], "mapped", [101]], [[8497, 8497], "mapped", [102]], [[8498, 8498], "disallowed"], [[8499, 8499], "mapped", [109]], [[8500, 8500], "mapped", [111]], [[8501, 8501], "mapped", [1488]], [[8502, 8502], "mapped", [1489]], [[8503, 8503], "mapped", [1490]], [[8504, 8504], "mapped", [1491]], [[8505, 8505], "mapped", [105]], [[8506, 8506], "valid", [], "NV8"], [[8507, 8507], "mapped", [102, 97, 120]], [[8508, 8508], "mapped", [960]], [[8509, 8510], "mapped", [947]], [[8511, 8511], "mapped", [960]], [[8512, 8512], "mapped", [8721]], [[8513, 8516], "valid", [], "NV8"], [[8517, 8518], "mapped", [100]], [[8519, 8519], "mapped", [101]], [[8520, 8520], "mapped", [105]], [[8521, 8521], "mapped", [106]], [[8522, 8523], "valid", [], "NV8"], [[8524, 8524], "valid", [], "NV8"], [[8525, 8525], "valid", [], "NV8"], [[8526, 8526], "valid"], [[8527, 8527], "valid", [], "NV8"], [[8528, 8528], "mapped", [49, 8260, 55]], [[8529, 8529], "mapped", [49, 8260, 57]], [[8530, 8530], "mapped", [49, 8260, 49, 48]], [[8531, 8531], "mapped", [49, 8260, 51]], [[8532, 8532], "mapped", [50, 8260, 51]], [[8533, 8533], "mapped", [49, 8260, 53]], [[8534, 8534], "mapped", [50, 8260, 53]], [[8535, 8535], "mapped", [51, 8260, 53]], [[8536, 8536], "mapped", [52, 8260, 53]], [[8537, 8537], "mapped", [49, 8260, 54]], [[8538, 8538], "mapped", [53, 8260, 54]], [[8539, 8539], "mapped", [49, 8260, 56]], [[8540, 8540], "mapped", [51, 8260, 56]], [[8541, 8541], "mapped", [53, 8260, 56]], [[8542, 8542], "mapped", [55, 8260, 56]], [[8543, 8543], "mapped", [49, 8260]], [[8544, 8544], "mapped", [105]], [[8545, 8545], "mapped", [105, 105]], [[8546, 8546], "mapped", [105, 105, 105]], [[8547, 8547], "mapped", [105, 118]], [[8548, 8548], "mapped", [118]], [[8549, 8549], "mapped", [118, 105]], [[8550, 8550], "mapped", [118, 105, 105]], [[8551, 8551], "mapped", [118, 105, 105, 105]], [[8552, 8552], "mapped", [105, 120]], [[8553, 8553], "mapped", [120]], [[8554, 8554], "mapped", [120, 105]], [[8555, 8555], "mapped", [120, 105, 105]], [[8556, 8556], "mapped", [108]], [[8557, 8557], "mapped", [99]], [[8558, 8558], "mapped", [100]], [[8559, 8559], "mapped", [109]], [[8560, 8560], "mapped", [105]], [[8561, 8561], "mapped", [105, 105]], [[8562, 8562], "mapped", [105, 105, 105]], [[8563, 8563], "mapped", [105, 118]], [[8564, 8564], "mapped", [118]], [[8565, 8565], "mapped", [118, 105]], [[8566, 8566], "mapped", [118, 105, 105]], [[8567, 8567], "mapped", [118, 105, 105, 105]], [[8568, 8568], "mapped", [105, 120]], [[8569, 8569], "mapped", [120]], [[8570, 8570], "mapped", [120, 105]], [[8571, 8571], "mapped", [120, 105, 105]], [[8572, 8572], "mapped", [108]], [[8573, 8573], "mapped", [99]], [[8574, 8574], "mapped", [100]], [[8575, 8575], "mapped", [109]], [[8576, 8578], "valid", [], "NV8"], [[8579, 8579], "disallowed"], [[8580, 8580], "valid"], [[8581, 8584], "valid", [], "NV8"], [[8585, 8585], "mapped", [48, 8260, 51]], [[8586, 8587], "valid", [], "NV8"], [[8588, 8591], "disallowed"], [[8592, 8682], "valid", [], "NV8"], [[8683, 8691], "valid", [], "NV8"], [[8692, 8703], "valid", [], "NV8"], [[8704, 8747], "valid", [], "NV8"], [[8748, 8748], "mapped", [8747, 8747]], [[8749, 8749], "mapped", [8747, 8747, 8747]], [[8750, 8750], "valid", [], "NV8"], [[8751, 8751], "mapped", [8750, 8750]], [[8752, 8752], "mapped", [8750, 8750, 8750]], [[8753, 8799], "valid", [], "NV8"], [[8800, 8800], "disallowed_STD3_valid"], [[8801, 8813], "valid", [], "NV8"], [[8814, 8815], "disallowed_STD3_valid"], [[8816, 8945], "valid", [], "NV8"], [[8946, 8959], "valid", [], "NV8"], [[8960, 8960], "valid", [], "NV8"], [[8961, 8961], "valid", [], "NV8"], [[8962, 9e3], "valid", [], "NV8"], [[9001, 9001], "mapped", [12296]], [[9002, 9002], "mapped", [12297]], [[9003, 9082], "valid", [], "NV8"], [[9083, 9083], "valid", [], "NV8"], [[9084, 9084], "valid", [], "NV8"], [[9085, 9114], "valid", [], "NV8"], [[9115, 9166], "valid", [], "NV8"], [[9167, 9168], "valid", [], "NV8"], [[9169, 9179], "valid", [], "NV8"], [[9180, 9191], "valid", [], "NV8"], [[9192, 9192], "valid", [], "NV8"], [[9193, 9203], "valid", [], "NV8"], [[9204, 9210], "valid", [], "NV8"], [[9211, 9215], "disallowed"], [[9216, 9252], "valid", [], "NV8"], [[9253, 9254], "valid", [], "NV8"], [[9255, 9279], "disallowed"], [[9280, 9290], "valid", [], "NV8"], [[9291, 9311], "disallowed"], [[9312, 9312], "mapped", [49]], [[9313, 9313], "mapped", [50]], [[9314, 9314], "mapped", [51]], [[9315, 9315], "mapped", [52]], [[9316, 9316], "mapped", [53]], [[9317, 9317], "mapped", [54]], [[9318, 9318], "mapped", [55]], [[9319, 9319], "mapped", [56]], [[9320, 9320], "mapped", [57]], [[9321, 9321], "mapped", [49, 48]], [[9322, 9322], "mapped", [49, 49]], [[9323, 9323], "mapped", [49, 50]], [[9324, 9324], "mapped", [49, 51]], [[9325, 9325], "mapped", [49, 52]], [[9326, 9326], "mapped", [49, 53]], [[9327, 9327], "mapped", [49, 54]], [[9328, 9328], "mapped", [49, 55]], [[9329, 9329], "mapped", [49, 56]], [[9330, 9330], "mapped", [49, 57]], [[9331, 9331], "mapped", [50, 48]], [[9332, 9332], "disallowed_STD3_mapped", [40, 49, 41]], [[9333, 9333], "disallowed_STD3_mapped", [40, 50, 41]], [[9334, 9334], "disallowed_STD3_mapped", [40, 51, 41]], [[9335, 9335], "disallowed_STD3_mapped", [40, 52, 41]], [[9336, 9336], "disallowed_STD3_mapped", [40, 53, 41]], [[9337, 9337], "disallowed_STD3_mapped", [40, 54, 41]], [[9338, 9338], "disallowed_STD3_mapped", [40, 55, 41]], [[9339, 9339], "disallowed_STD3_mapped", [40, 56, 41]], [[9340, 9340], "disallowed_STD3_mapped", [40, 57, 41]], [[9341, 9341], "disallowed_STD3_mapped", [40, 49, 48, 41]], [[9342, 9342], "disallowed_STD3_mapped", [40, 49, 49, 41]], [[9343, 9343], "disallowed_STD3_mapped", [40, 49, 50, 41]], [[9344, 9344], "disallowed_STD3_mapped", [40, 49, 51, 41]], [[9345, 9345], "disallowed_STD3_mapped", [40, 49, 52, 41]], [[9346, 9346], "disallowed_STD3_mapped", [40, 49, 53, 41]], [[9347, 9347], "disallowed_STD3_mapped", [40, 49, 54, 41]], [[9348, 9348], "disallowed_STD3_mapped", [40, 49, 55, 41]], [[9349, 9349], "disallowed_STD3_mapped", [40, 49, 56, 41]], [[9350, 9350], "disallowed_STD3_mapped", [40, 49, 57, 41]], [[9351, 9351], "disallowed_STD3_mapped", [40, 50, 48, 41]], [[9352, 9371], "disallowed"], [[9372, 9372], "disallowed_STD3_mapped", [40, 97, 41]], [[9373, 9373], "disallowed_STD3_mapped", [40, 98, 41]], [[9374, 9374], "disallowed_STD3_mapped", [40, 99, 41]], [[9375, 9375], "disallowed_STD3_mapped", [40, 100, 41]], [[9376, 9376], "disallowed_STD3_mapped", [40, 101, 41]], [[9377, 9377], "disallowed_STD3_mapped", [40, 102, 41]], [[9378, 9378], "disallowed_STD3_mapped", [40, 103, 41]], [[9379, 9379], "disallowed_STD3_mapped", [40, 104, 41]], [[9380, 9380], "disallowed_STD3_mapped", [40, 105, 41]], [[9381, 9381], "disallowed_STD3_mapped", [40, 106, 41]], [[9382, 9382], "disallowed_STD3_mapped", [40, 107, 41]], [[9383, 9383], "disallowed_STD3_mapped", [40, 108, 41]], [[9384, 9384], "disallowed_STD3_mapped", [40, 109, 41]], [[9385, 9385], "disallowed_STD3_mapped", [40, 110, 41]], [[9386, 9386], "disallowed_STD3_mapped", [40, 111, 41]], [[9387, 9387], "disallowed_STD3_mapped", [40, 112, 41]], [[9388, 9388], "disallowed_STD3_mapped", [40, 113, 41]], [[9389, 9389], "disallowed_STD3_mapped", [40, 114, 41]], [[9390, 9390], "disallowed_STD3_mapped", [40, 115, 41]], [[9391, 9391], "disallowed_STD3_mapped", [40, 116, 41]], [[9392, 9392], "disallowed_STD3_mapped", [40, 117, 41]], [[9393, 9393], "disallowed_STD3_mapped", [40, 118, 41]], [[9394, 9394], "disallowed_STD3_mapped", [40, 119, 41]], [[9395, 9395], "disallowed_STD3_mapped", [40, 120, 41]], [[9396, 9396], "disallowed_STD3_mapped", [40, 121, 41]], [[9397, 9397], "disallowed_STD3_mapped", [40, 122, 41]], [[9398, 9398], "mapped", [97]], [[9399, 9399], "mapped", [98]], [[9400, 9400], "mapped", [99]], [[9401, 9401], "mapped", [100]], [[9402, 9402], "mapped", [101]], [[9403, 9403], "mapped", [102]], [[9404, 9404], "mapped", [103]], [[9405, 9405], "mapped", [104]], [[9406, 9406], "mapped", [105]], [[9407, 9407], "mapped", [106]], [[9408, 9408], "mapped", [107]], [[9409, 9409], "mapped", [108]], [[9410, 9410], "mapped", [109]], [[9411, 9411], "mapped", [110]], [[9412, 9412], "mapped", [111]], [[9413, 9413], "mapped", [112]], [[9414, 9414], "mapped", [113]], [[9415, 9415], "mapped", [114]], [[9416, 9416], "mapped", [115]], [[9417, 9417], "mapped", [116]], [[9418, 9418], "mapped", [117]], [[9419, 9419], "mapped", [118]], [[9420, 9420], "mapped", [119]], [[9421, 9421], "mapped", [120]], [[9422, 9422], "mapped", [121]], [[9423, 9423], "mapped", [122]], [[9424, 9424], "mapped", [97]], [[9425, 9425], "mapped", [98]], [[9426, 9426], "mapped", [99]], [[9427, 9427], "mapped", [100]], [[9428, 9428], "mapped", [101]], [[9429, 9429], "mapped", [102]], [[9430, 9430], "mapped", [103]], [[9431, 9431], "mapped", [104]], [[9432, 9432], "mapped", [105]], [[9433, 9433], "mapped", [106]], [[9434, 9434], "mapped", [107]], [[9435, 9435], "mapped", [108]], [[9436, 9436], "mapped", [109]], [[9437, 9437], "mapped", [110]], [[9438, 9438], "mapped", [111]], [[9439, 9439], "mapped", [112]], [[9440, 9440], "mapped", [113]], [[9441, 9441], "mapped", [114]], [[9442, 9442], "mapped", [115]], [[9443, 9443], "mapped", [116]], [[9444, 9444], "mapped", [117]], [[9445, 9445], "mapped", [118]], [[9446, 9446], "mapped", [119]], [[9447, 9447], "mapped", [120]], [[9448, 9448], "mapped", [121]], [[9449, 9449], "mapped", [122]], [[9450, 9450], "mapped", [48]], [[9451, 9470], "valid", [], "NV8"], [[9471, 9471], "valid", [], "NV8"], [[9472, 9621], "valid", [], "NV8"], [[9622, 9631], "valid", [], "NV8"], [[9632, 9711], "valid", [], "NV8"], [[9712, 9719], "valid", [], "NV8"], [[9720, 9727], "valid", [], "NV8"], [[9728, 9747], "valid", [], "NV8"], [[9748, 9749], "valid", [], "NV8"], [[9750, 9751], "valid", [], "NV8"], [[9752, 9752], "valid", [], "NV8"], [[9753, 9753], "valid", [], "NV8"], [[9754, 9839], "valid", [], "NV8"], [[9840, 9841], "valid", [], "NV8"], [[9842, 9853], "valid", [], "NV8"], [[9854, 9855], "valid", [], "NV8"], [[9856, 9865], "valid", [], "NV8"], [[9866, 9873], "valid", [], "NV8"], [[9874, 9884], "valid", [], "NV8"], [[9885, 9885], "valid", [], "NV8"], [[9886, 9887], "valid", [], "NV8"], [[9888, 9889], "valid", [], "NV8"], [[9890, 9905], "valid", [], "NV8"], [[9906, 9906], "valid", [], "NV8"], [[9907, 9916], "valid", [], "NV8"], [[9917, 9919], "valid", [], "NV8"], [[9920, 9923], "valid", [], "NV8"], [[9924, 9933], "valid", [], "NV8"], [[9934, 9934], "valid", [], "NV8"], [[9935, 9953], "valid", [], "NV8"], [[9954, 9954], "valid", [], "NV8"], [[9955, 9955], "valid", [], "NV8"], [[9956, 9959], "valid", [], "NV8"], [[9960, 9983], "valid", [], "NV8"], [[9984, 9984], "valid", [], "NV8"], [[9985, 9988], "valid", [], "NV8"], [[9989, 9989], "valid", [], "NV8"], [[9990, 9993], "valid", [], "NV8"], [[9994, 9995], "valid", [], "NV8"], [[9996, 10023], "valid", [], "NV8"], [[10024, 10024], "valid", [], "NV8"], [[10025, 10059], "valid", [], "NV8"], [[10060, 10060], "valid", [], "NV8"], [[10061, 10061], "valid", [], "NV8"], [[10062, 10062], "valid", [], "NV8"], [[10063, 10066], "valid", [], "NV8"], [[10067, 10069], "valid", [], "NV8"], [[10070, 10070], "valid", [], "NV8"], [[10071, 10071], "valid", [], "NV8"], [[10072, 10078], "valid", [], "NV8"], [[10079, 10080], "valid", [], "NV8"], [[10081, 10087], "valid", [], "NV8"], [[10088, 10101], "valid", [], "NV8"], [[10102, 10132], "valid", [], "NV8"], [[10133, 10135], "valid", [], "NV8"], [[10136, 10159], "valid", [], "NV8"], [[10160, 10160], "valid", [], "NV8"], [[10161, 10174], "valid", [], "NV8"], [[10175, 10175], "valid", [], "NV8"], [[10176, 10182], "valid", [], "NV8"], [[10183, 10186], "valid", [], "NV8"], [[10187, 10187], "valid", [], "NV8"], [[10188, 10188], "valid", [], "NV8"], [[10189, 10189], "valid", [], "NV8"], [[10190, 10191], "valid", [], "NV8"], [[10192, 10219], "valid", [], "NV8"], [[10220, 10223], "valid", [], "NV8"], [[10224, 10239], "valid", [], "NV8"], [[10240, 10495], "valid", [], "NV8"], [[10496, 10763], "valid", [], "NV8"], [[10764, 10764], "mapped", [8747, 8747, 8747, 8747]], [[10765, 10867], "valid", [], "NV8"], [[10868, 10868], "disallowed_STD3_mapped", [58, 58, 61]], [[10869, 10869], "disallowed_STD3_mapped", [61, 61]], [[10870, 10870], "disallowed_STD3_mapped", [61, 61, 61]], [[10871, 10971], "valid", [], "NV8"], [[10972, 10972], "mapped", [10973, 824]], [[10973, 11007], "valid", [], "NV8"], [[11008, 11021], "valid", [], "NV8"], [[11022, 11027], "valid", [], "NV8"], [[11028, 11034], "valid", [], "NV8"], [[11035, 11039], "valid", [], "NV8"], [[11040, 11043], "valid", [], "NV8"], [[11044, 11084], "valid", [], "NV8"], [[11085, 11087], "valid", [], "NV8"], [[11088, 11092], "valid", [], "NV8"], [[11093, 11097], "valid", [], "NV8"], [[11098, 11123], "valid", [], "NV8"], [[11124, 11125], "disallowed"], [[11126, 11157], "valid", [], "NV8"], [[11158, 11159], "disallowed"], [[11160, 11193], "valid", [], "NV8"], [[11194, 11196], "disallowed"], [[11197, 11208], "valid", [], "NV8"], [[11209, 11209], "disallowed"], [[11210, 11217], "valid", [], "NV8"], [[11218, 11243], "disallowed"], [[11244, 11247], "valid", [], "NV8"], [[11248, 11263], "disallowed"], [[11264, 11264], "mapped", [11312]], [[11265, 11265], "mapped", [11313]], [[11266, 11266], "mapped", [11314]], [[11267, 11267], "mapped", [11315]], [[11268, 11268], "mapped", [11316]], [[11269, 11269], "mapped", [11317]], [[11270, 11270], "mapped", [11318]], [[11271, 11271], "mapped", [11319]], [[11272, 11272], "mapped", [11320]], [[11273, 11273], "mapped", [11321]], [[11274, 11274], "mapped", [11322]], [[11275, 11275], "mapped", [11323]], [[11276, 11276], "mapped", [11324]], [[11277, 11277], "mapped", [11325]], [[11278, 11278], "mapped", [11326]], [[11279, 11279], "mapped", [11327]], [[11280, 11280], "mapped", [11328]], [[11281, 11281], "mapped", [11329]], [[11282, 11282], "mapped", [11330]], [[11283, 11283], "mapped", [11331]], [[11284, 11284], "mapped", [11332]], [[11285, 11285], "mapped", [11333]], [[11286, 11286], "mapped", [11334]], [[11287, 11287], "mapped", [11335]], [[11288, 11288], "mapped", [11336]], [[11289, 11289], "mapped", [11337]], [[11290, 11290], "mapped", [11338]], [[11291, 11291], "mapped", [11339]], [[11292, 11292], "mapped", [11340]], [[11293, 11293], "mapped", [11341]], [[11294, 11294], "mapped", [11342]], [[11295, 11295], "mapped", [11343]], [[11296, 11296], "mapped", [11344]], [[11297, 11297], "mapped", [11345]], [[11298, 11298], "mapped", [11346]], [[11299, 11299], "mapped", [11347]], [[11300, 11300], "mapped", [11348]], [[11301, 11301], "mapped", [11349]], [[11302, 11302], "mapped", [11350]], [[11303, 11303], "mapped", [11351]], [[11304, 11304], "mapped", [11352]], [[11305, 11305], "mapped", [11353]], [[11306, 11306], "mapped", [11354]], [[11307, 11307], "mapped", [11355]], [[11308, 11308], "mapped", [11356]], [[11309, 11309], "mapped", [11357]], [[11310, 11310], "mapped", [11358]], [[11311, 11311], "disallowed"], [[11312, 11358], "valid"], [[11359, 11359], "disallowed"], [[11360, 11360], "mapped", [11361]], [[11361, 11361], "valid"], [[11362, 11362], "mapped", [619]], [[11363, 11363], "mapped", [7549]], [[11364, 11364], "mapped", [637]], [[11365, 11366], "valid"], [[11367, 11367], "mapped", [11368]], [[11368, 11368], "valid"], [[11369, 11369], "mapped", [11370]], [[11370, 11370], "valid"], [[11371, 11371], "mapped", [11372]], [[11372, 11372], "valid"], [[11373, 11373], "mapped", [593]], [[11374, 11374], "mapped", [625]], [[11375, 11375], "mapped", [592]], [[11376, 11376], "mapped", [594]], [[11377, 11377], "valid"], [[11378, 11378], "mapped", [11379]], [[11379, 11379], "valid"], [[11380, 11380], "valid"], [[11381, 11381], "mapped", [11382]], [[11382, 11383], "valid"], [[11384, 11387], "valid"], [[11388, 11388], "mapped", [106]], [[11389, 11389], "mapped", [118]], [[11390, 11390], "mapped", [575]], [[11391, 11391], "mapped", [576]], [[11392, 11392], "mapped", [11393]], [[11393, 11393], "valid"], [[11394, 11394], "mapped", [11395]], [[11395, 11395], "valid"], [[11396, 11396], "mapped", [11397]], [[11397, 11397], "valid"], [[11398, 11398], "mapped", [11399]], [[11399, 11399], "valid"], [[11400, 11400], "mapped", [11401]], [[11401, 11401], "valid"], [[11402, 11402], "mapped", [11403]], [[11403, 11403], "valid"], [[11404, 11404], "mapped", [11405]], [[11405, 11405], "valid"], [[11406, 11406], "mapped", [11407]], [[11407, 11407], "valid"], [[11408, 11408], "mapped", [11409]], [[11409, 11409], "valid"], [[11410, 11410], "mapped", [11411]], [[11411, 11411], "valid"], [[11412, 11412], "mapped", [11413]], [[11413, 11413], "valid"], [[11414, 11414], "mapped", [11415]], [[11415, 11415], "valid"], [[11416, 11416], "mapped", [11417]], [[11417, 11417], "valid"], [[11418, 11418], "mapped", [11419]], [[11419, 11419], "valid"], [[11420, 11420], "mapped", [11421]], [[11421, 11421], "valid"], [[11422, 11422], "mapped", [11423]], [[11423, 11423], "valid"], [[11424, 11424], "mapped", [11425]], [[11425, 11425], "valid"], [[11426, 11426], "mapped", [11427]], [[11427, 11427], "valid"], [[11428, 11428], "mapped", [11429]], [[11429, 11429], "valid"], [[11430, 11430], "mapped", [11431]], [[11431, 11431], "valid"], [[11432, 11432], "mapped", [11433]], [[11433, 11433], "valid"], [[11434, 11434], "mapped", [11435]], [[11435, 11435], "valid"], [[11436, 11436], "mapped", [11437]], [[11437, 11437], "valid"], [[11438, 11438], "mapped", [11439]], [[11439, 11439], "valid"], [[11440, 11440], "mapped", [11441]], [[11441, 11441], "valid"], [[11442, 11442], "mapped", [11443]], [[11443, 11443], "valid"], [[11444, 11444], "mapped", [11445]], [[11445, 11445], "valid"], [[11446, 11446], "mapped", [11447]], [[11447, 11447], "valid"], [[11448, 11448], "mapped", [11449]], [[11449, 11449], "valid"], [[11450, 11450], "mapped", [11451]], [[11451, 11451], "valid"], [[11452, 11452], "mapped", [11453]], [[11453, 11453], "valid"], [[11454, 11454], "mapped", [11455]], [[11455, 11455], "valid"], [[11456, 11456], "mapped", [11457]], [[11457, 11457], "valid"], [[11458, 11458], "mapped", [11459]], [[11459, 11459], "valid"], [[11460, 11460], "mapped", [11461]], [[11461, 11461], "valid"], [[11462, 11462], "mapped", [11463]], [[11463, 11463], "valid"], [[11464, 11464], "mapped", [11465]], [[11465, 11465], "valid"], [[11466, 11466], "mapped", [11467]], [[11467, 11467], "valid"], [[11468, 11468], "mapped", [11469]], [[11469, 11469], "valid"], [[11470, 11470], "mapped", [11471]], [[11471, 11471], "valid"], [[11472, 11472], "mapped", [11473]], [[11473, 11473], "valid"], [[11474, 11474], "mapped", [11475]], [[11475, 11475], "valid"], [[11476, 11476], "mapped", [11477]], [[11477, 11477], "valid"], [[11478, 11478], "mapped", [11479]], [[11479, 11479], "valid"], [[11480, 11480], "mapped", [11481]], [[11481, 11481], "valid"], [[11482, 11482], "mapped", [11483]], [[11483, 11483], "valid"], [[11484, 11484], "mapped", [11485]], [[11485, 11485], "valid"], [[11486, 11486], "mapped", [11487]], [[11487, 11487], "valid"], [[11488, 11488], "mapped", [11489]], [[11489, 11489], "valid"], [[11490, 11490], "mapped", [11491]], [[11491, 11492], "valid"], [[11493, 11498], "valid", [], "NV8"], [[11499, 11499], "mapped", [11500]], [[11500, 11500], "valid"], [[11501, 11501], "mapped", [11502]], [[11502, 11505], "valid"], [[11506, 11506], "mapped", [11507]], [[11507, 11507], "valid"], [[11508, 11512], "disallowed"], [[11513, 11519], "valid", [], "NV8"], [[11520, 11557], "valid"], [[11558, 11558], "disallowed"], [[11559, 11559], "valid"], [[11560, 11564], "disallowed"], [[11565, 11565], "valid"], [[11566, 11567], "disallowed"], [[11568, 11621], "valid"], [[11622, 11623], "valid"], [[11624, 11630], "disallowed"], [[11631, 11631], "mapped", [11617]], [[11632, 11632], "valid", [], "NV8"], [[11633, 11646], "disallowed"], [[11647, 11647], "valid"], [[11648, 11670], "valid"], [[11671, 11679], "disallowed"], [[11680, 11686], "valid"], [[11687, 11687], "disallowed"], [[11688, 11694], "valid"], [[11695, 11695], "disallowed"], [[11696, 11702], "valid"], [[11703, 11703], "disallowed"], [[11704, 11710], "valid"], [[11711, 11711], "disallowed"], [[11712, 11718], "valid"], [[11719, 11719], "disallowed"], [[11720, 11726], "valid"], [[11727, 11727], "disallowed"], [[11728, 11734], "valid"], [[11735, 11735], "disallowed"], [[11736, 11742], "valid"], [[11743, 11743], "disallowed"], [[11744, 11775], "valid"], [[11776, 11799], "valid", [], "NV8"], [[11800, 11803], "valid", [], "NV8"], [[11804, 11805], "valid", [], "NV8"], [[11806, 11822], "valid", [], "NV8"], [[11823, 11823], "valid"], [[11824, 11824], "valid", [], "NV8"], [[11825, 11825], "valid", [], "NV8"], [[11826, 11835], "valid", [], "NV8"], [[11836, 11842], "valid", [], "NV8"], [[11843, 11903], "disallowed"], [[11904, 11929], "valid", [], "NV8"], [[11930, 11930], "disallowed"], [[11931, 11934], "valid", [], "NV8"], [[11935, 11935], "mapped", [27597]], [[11936, 12018], "valid", [], "NV8"], [[12019, 12019], "mapped", [40863]], [[12020, 12031], "disallowed"], [[12032, 12032], "mapped", [19968]], [[12033, 12033], "mapped", [20008]], [[12034, 12034], "mapped", [20022]], [[12035, 12035], "mapped", [20031]], [[12036, 12036], "mapped", [20057]], [[12037, 12037], "mapped", [20101]], [[12038, 12038], "mapped", [20108]], [[12039, 12039], "mapped", [20128]], [[12040, 12040], "mapped", [20154]], [[12041, 12041], "mapped", [20799]], [[12042, 12042], "mapped", [20837]], [[12043, 12043], "mapped", [20843]], [[12044, 12044], "mapped", [20866]], [[12045, 12045], "mapped", [20886]], [[12046, 12046], "mapped", [20907]], [[12047, 12047], "mapped", [20960]], [[12048, 12048], "mapped", [20981]], [[12049, 12049], "mapped", [20992]], [[12050, 12050], "mapped", [21147]], [[12051, 12051], "mapped", [21241]], [[12052, 12052], "mapped", [21269]], [[12053, 12053], "mapped", [21274]], [[12054, 12054], "mapped", [21304]], [[12055, 12055], "mapped", [21313]], [[12056, 12056], "mapped", [21340]], [[12057, 12057], "mapped", [21353]], [[12058, 12058], "mapped", [21378]], [[12059, 12059], "mapped", [21430]], [[12060, 12060], "mapped", [21448]], [[12061, 12061], "mapped", [21475]], [[12062, 12062], "mapped", [22231]], [[12063, 12063], "mapped", [22303]], [[12064, 12064], "mapped", [22763]], [[12065, 12065], "mapped", [22786]], [[12066, 12066], "mapped", [22794]], [[12067, 12067], "mapped", [22805]], [[12068, 12068], "mapped", [22823]], [[12069, 12069], "mapped", [22899]], [[12070, 12070], "mapped", [23376]], [[12071, 12071], "mapped", [23424]], [[12072, 12072], "mapped", [23544]], [[12073, 12073], "mapped", [23567]], [[12074, 12074], "mapped", [23586]], [[12075, 12075], "mapped", [23608]], [[12076, 12076], "mapped", [23662]], [[12077, 12077], "mapped", [23665]], [[12078, 12078], "mapped", [24027]], [[12079, 12079], "mapped", [24037]], [[12080, 12080], "mapped", [24049]], [[12081, 12081], "mapped", [24062]], [[12082, 12082], "mapped", [24178]], [[12083, 12083], "mapped", [24186]], [[12084, 12084], "mapped", [24191]], [[12085, 12085], "mapped", [24308]], [[12086, 12086], "mapped", [24318]], [[12087, 12087], "mapped", [24331]], [[12088, 12088], "mapped", [24339]], [[12089, 12089], "mapped", [24400]], [[12090, 12090], "mapped", [24417]], [[12091, 12091], "mapped", [24435]], [[12092, 12092], "mapped", [24515]], [[12093, 12093], "mapped", [25096]], [[12094, 12094], "mapped", [25142]], [[12095, 12095], "mapped", [25163]], [[12096, 12096], "mapped", [25903]], [[12097, 12097], "mapped", [25908]], [[12098, 12098], "mapped", [25991]], [[12099, 12099], "mapped", [26007]], [[12100, 12100], "mapped", [26020]], [[12101, 12101], "mapped", [26041]], [[12102, 12102], "mapped", [26080]], [[12103, 12103], "mapped", [26085]], [[12104, 12104], "mapped", [26352]], [[12105, 12105], "mapped", [26376]], [[12106, 12106], "mapped", [26408]], [[12107, 12107], "mapped", [27424]], [[12108, 12108], "mapped", [27490]], [[12109, 12109], "mapped", [27513]], [[12110, 12110], "mapped", [27571]], [[12111, 12111], "mapped", [27595]], [[12112, 12112], "mapped", [27604]], [[12113, 12113], "mapped", [27611]], [[12114, 12114], "mapped", [27663]], [[12115, 12115], "mapped", [27668]], [[12116, 12116], "mapped", [27700]], [[12117, 12117], "mapped", [28779]], [[12118, 12118], "mapped", [29226]], [[12119, 12119], "mapped", [29238]], [[12120, 12120], "mapped", [29243]], [[12121, 12121], "mapped", [29247]], [[12122, 12122], "mapped", [29255]], [[12123, 12123], "mapped", [29273]], [[12124, 12124], "mapped", [29275]], [[12125, 12125], "mapped", [29356]], [[12126, 12126], "mapped", [29572]], [[12127, 12127], "mapped", [29577]], [[12128, 12128], "mapped", [29916]], [[12129, 12129], "mapped", [29926]], [[12130, 12130], "mapped", [29976]], [[12131, 12131], "mapped", [29983]], [[12132, 12132], "mapped", [29992]], [[12133, 12133], "mapped", [3e4]], [[12134, 12134], "mapped", [30091]], [[12135, 12135], "mapped", [30098]], [[12136, 12136], "mapped", [30326]], [[12137, 12137], "mapped", [30333]], [[12138, 12138], "mapped", [30382]], [[12139, 12139], "mapped", [30399]], [[12140, 12140], "mapped", [30446]], [[12141, 12141], "mapped", [30683]], [[12142, 12142], "mapped", [30690]], [[12143, 12143], "mapped", [30707]], [[12144, 12144], "mapped", [31034]], [[12145, 12145], "mapped", [31160]], [[12146, 12146], "mapped", [31166]], [[12147, 12147], "mapped", [31348]], [[12148, 12148], "mapped", [31435]], [[12149, 12149], "mapped", [31481]], [[12150, 12150], "mapped", [31859]], [[12151, 12151], "mapped", [31992]], [[12152, 12152], "mapped", [32566]], [[12153, 12153], "mapped", [32593]], [[12154, 12154], "mapped", [32650]], [[12155, 12155], "mapped", [32701]], [[12156, 12156], "mapped", [32769]], [[12157, 12157], "mapped", [32780]], [[12158, 12158], "mapped", [32786]], [[12159, 12159], "mapped", [32819]], [[12160, 12160], "mapped", [32895]], [[12161, 12161], "mapped", [32905]], [[12162, 12162], "mapped", [33251]], [[12163, 12163], "mapped", [33258]], [[12164, 12164], "mapped", [33267]], [[12165, 12165], "mapped", [33276]], [[12166, 12166], "mapped", [33292]], [[12167, 12167], "mapped", [33307]], [[12168, 12168], "mapped", [33311]], [[12169, 12169], "mapped", [33390]], [[12170, 12170], "mapped", [33394]], [[12171, 12171], "mapped", [33400]], [[12172, 12172], "mapped", [34381]], [[12173, 12173], "mapped", [34411]], [[12174, 12174], "mapped", [34880]], [[12175, 12175], "mapped", [34892]], [[12176, 12176], "mapped", [34915]], [[12177, 12177], "mapped", [35198]], [[12178, 12178], "mapped", [35211]], [[12179, 12179], "mapped", [35282]], [[12180, 12180], "mapped", [35328]], [[12181, 12181], "mapped", [35895]], [[12182, 12182], "mapped", [35910]], [[12183, 12183], "mapped", [35925]], [[12184, 12184], "mapped", [35960]], [[12185, 12185], "mapped", [35997]], [[12186, 12186], "mapped", [36196]], [[12187, 12187], "mapped", [36208]], [[12188, 12188], "mapped", [36275]], [[12189, 12189], "mapped", [36523]], [[12190, 12190], "mapped", [36554]], [[12191, 12191], "mapped", [36763]], [[12192, 12192], "mapped", [36784]], [[12193, 12193], "mapped", [36789]], [[12194, 12194], "mapped", [37009]], [[12195, 12195], "mapped", [37193]], [[12196, 12196], "mapped", [37318]], [[12197, 12197], "mapped", [37324]], [[12198, 12198], "mapped", [37329]], [[12199, 12199], "mapped", [38263]], [[12200, 12200], "mapped", [38272]], [[12201, 12201], "mapped", [38428]], [[12202, 12202], "mapped", [38582]], [[12203, 12203], "mapped", [38585]], [[12204, 12204], "mapped", [38632]], [[12205, 12205], "mapped", [38737]], [[12206, 12206], "mapped", [38750]], [[12207, 12207], "mapped", [38754]], [[12208, 12208], "mapped", [38761]], [[12209, 12209], "mapped", [38859]], [[12210, 12210], "mapped", [38893]], [[12211, 12211], "mapped", [38899]], [[12212, 12212], "mapped", [38913]], [[12213, 12213], "mapped", [39080]], [[12214, 12214], "mapped", [39131]], [[12215, 12215], "mapped", [39135]], [[12216, 12216], "mapped", [39318]], [[12217, 12217], "mapped", [39321]], [[12218, 12218], "mapped", [39340]], [[12219, 12219], "mapped", [39592]], [[12220, 12220], "mapped", [39640]], [[12221, 12221], "mapped", [39647]], [[12222, 12222], "mapped", [39717]], [[12223, 12223], "mapped", [39727]], [[12224, 12224], "mapped", [39730]], [[12225, 12225], "mapped", [39740]], [[12226, 12226], "mapped", [39770]], [[12227, 12227], "mapped", [40165]], [[12228, 12228], "mapped", [40565]], [[12229, 12229], "mapped", [40575]], [[12230, 12230], "mapped", [40613]], [[12231, 12231], "mapped", [40635]], [[12232, 12232], "mapped", [40643]], [[12233, 12233], "mapped", [40653]], [[12234, 12234], "mapped", [40657]], [[12235, 12235], "mapped", [40697]], [[12236, 12236], "mapped", [40701]], [[12237, 12237], "mapped", [40718]], [[12238, 12238], "mapped", [40723]], [[12239, 12239], "mapped", [40736]], [[12240, 12240], "mapped", [40763]], [[12241, 12241], "mapped", [40778]], [[12242, 12242], "mapped", [40786]], [[12243, 12243], "mapped", [40845]], [[12244, 12244], "mapped", [40860]], [[12245, 12245], "mapped", [40864]], [[12246, 12271], "disallowed"], [[12272, 12283], "disallowed"], [[12284, 12287], "disallowed"], [[12288, 12288], "disallowed_STD3_mapped", [32]], [[12289, 12289], "valid", [], "NV8"], [[12290, 12290], "mapped", [46]], [[12291, 12292], "valid", [], "NV8"], [[12293, 12295], "valid"], [[12296, 12329], "valid", [], "NV8"], [[12330, 12333], "valid"], [[12334, 12341], "valid", [], "NV8"], [[12342, 12342], "mapped", [12306]], [[12343, 12343], "valid", [], "NV8"], [[12344, 12344], "mapped", [21313]], [[12345, 12345], "mapped", [21316]], [[12346, 12346], "mapped", [21317]], [[12347, 12347], "valid", [], "NV8"], [[12348, 12348], "valid"], [[12349, 12349], "valid", [], "NV8"], [[12350, 12350], "valid", [], "NV8"], [[12351, 12351], "valid", [], "NV8"], [[12352, 12352], "disallowed"], [[12353, 12436], "valid"], [[12437, 12438], "valid"], [[12439, 12440], "disallowed"], [[12441, 12442], "valid"], [[12443, 12443], "disallowed_STD3_mapped", [32, 12441]], [[12444, 12444], "disallowed_STD3_mapped", [32, 12442]], [[12445, 12446], "valid"], [[12447, 12447], "mapped", [12424, 12426]], [[12448, 12448], "valid", [], "NV8"], [[12449, 12542], "valid"], [[12543, 12543], "mapped", [12467, 12488]], [[12544, 12548], "disallowed"], [[12549, 12588], "valid"], [[12589, 12589], "valid"], [[12590, 12592], "disallowed"], [[12593, 12593], "mapped", [4352]], [[12594, 12594], "mapped", [4353]], [[12595, 12595], "mapped", [4522]], [[12596, 12596], "mapped", [4354]], [[12597, 12597], "mapped", [4524]], [[12598, 12598], "mapped", [4525]], [[12599, 12599], "mapped", [4355]], [[12600, 12600], "mapped", [4356]], [[12601, 12601], "mapped", [4357]], [[12602, 12602], "mapped", [4528]], [[12603, 12603], "mapped", [4529]], [[12604, 12604], "mapped", [4530]], [[12605, 12605], "mapped", [4531]], [[12606, 12606], "mapped", [4532]], [[12607, 12607], "mapped", [4533]], [[12608, 12608], "mapped", [4378]], [[12609, 12609], "mapped", [4358]], [[12610, 12610], "mapped", [4359]], [[12611, 12611], "mapped", [4360]], [[12612, 12612], "mapped", [4385]], [[12613, 12613], "mapped", [4361]], [[12614, 12614], "mapped", [4362]], [[12615, 12615], "mapped", [4363]], [[12616, 12616], "mapped", [4364]], [[12617, 12617], "mapped", [4365]], [[12618, 12618], "mapped", [4366]], [[12619, 12619], "mapped", [4367]], [[12620, 12620], "mapped", [4368]], [[12621, 12621], "mapped", [4369]], [[12622, 12622], "mapped", [4370]], [[12623, 12623], "mapped", [4449]], [[12624, 12624], "mapped", [4450]], [[12625, 12625], "mapped", [4451]], [[12626, 12626], "mapped", [4452]], [[12627, 12627], "mapped", [4453]], [[12628, 12628], "mapped", [4454]], [[12629, 12629], "mapped", [4455]], [[12630, 12630], "mapped", [4456]], [[12631, 12631], "mapped", [4457]], [[12632, 12632], "mapped", [4458]], [[12633, 12633], "mapped", [4459]], [[12634, 12634], "mapped", [4460]], [[12635, 12635], "mapped", [4461]], [[12636, 12636], "mapped", [4462]], [[12637, 12637], "mapped", [4463]], [[12638, 12638], "mapped", [4464]], [[12639, 12639], "mapped", [4465]], [[12640, 12640], "mapped", [4466]], [[12641, 12641], "mapped", [4467]], [[12642, 12642], "mapped", [4468]], [[12643, 12643], "mapped", [4469]], [[12644, 12644], "disallowed"], [[12645, 12645], "mapped", [4372]], [[12646, 12646], "mapped", [4373]], [[12647, 12647], "mapped", [4551]], [[12648, 12648], "mapped", [4552]], [[12649, 12649], "mapped", [4556]], [[12650, 12650], "mapped", [4558]], [[12651, 12651], "mapped", [4563]], [[12652, 12652], "mapped", [4567]], [[12653, 12653], "mapped", [4569]], [[12654, 12654], "mapped", [4380]], [[12655, 12655], "mapped", [4573]], [[12656, 12656], "mapped", [4575]], [[12657, 12657], "mapped", [4381]], [[12658, 12658], "mapped", [4382]], [[12659, 12659], "mapped", [4384]], [[12660, 12660], "mapped", [4386]], [[12661, 12661], "mapped", [4387]], [[12662, 12662], "mapped", [4391]], [[12663, 12663], "mapped", [4393]], [[12664, 12664], "mapped", [4395]], [[12665, 12665], "mapped", [4396]], [[12666, 12666], "mapped", [4397]], [[12667, 12667], "mapped", [4398]], [[12668, 12668], "mapped", [4399]], [[12669, 12669], "mapped", [4402]], [[12670, 12670], "mapped", [4406]], [[12671, 12671], "mapped", [4416]], [[12672, 12672], "mapped", [4423]], [[12673, 12673], "mapped", [4428]], [[12674, 12674], "mapped", [4593]], [[12675, 12675], "mapped", [4594]], [[12676, 12676], "mapped", [4439]], [[12677, 12677], "mapped", [4440]], [[12678, 12678], "mapped", [4441]], [[12679, 12679], "mapped", [4484]], [[12680, 12680], "mapped", [4485]], [[12681, 12681], "mapped", [4488]], [[12682, 12682], "mapped", [4497]], [[12683, 12683], "mapped", [4498]], [[12684, 12684], "mapped", [4500]], [[12685, 12685], "mapped", [4510]], [[12686, 12686], "mapped", [4513]], [[12687, 12687], "disallowed"], [[12688, 12689], "valid", [], "NV8"], [[12690, 12690], "mapped", [19968]], [[12691, 12691], "mapped", [20108]], [[12692, 12692], "mapped", [19977]], [[12693, 12693], "mapped", [22235]], [[12694, 12694], "mapped", [19978]], [[12695, 12695], "mapped", [20013]], [[12696, 12696], "mapped", [19979]], [[12697, 12697], "mapped", [30002]], [[12698, 12698], "mapped", [20057]], [[12699, 12699], "mapped", [19993]], [[12700, 12700], "mapped", [19969]], [[12701, 12701], "mapped", [22825]], [[12702, 12702], "mapped", [22320]], [[12703, 12703], "mapped", [20154]], [[12704, 12727], "valid"], [[12728, 12730], "valid"], [[12731, 12735], "disallowed"], [[12736, 12751], "valid", [], "NV8"], [[12752, 12771], "valid", [], "NV8"], [[12772, 12783], "disallowed"], [[12784, 12799], "valid"], [[12800, 12800], "disallowed_STD3_mapped", [40, 4352, 41]], [[12801, 12801], "disallowed_STD3_mapped", [40, 4354, 41]], [[12802, 12802], "disallowed_STD3_mapped", [40, 4355, 41]], [[12803, 12803], "disallowed_STD3_mapped", [40, 4357, 41]], [[12804, 12804], "disallowed_STD3_mapped", [40, 4358, 41]], [[12805, 12805], "disallowed_STD3_mapped", [40, 4359, 41]], [[12806, 12806], "disallowed_STD3_mapped", [40, 4361, 41]], [[12807, 12807], "disallowed_STD3_mapped", [40, 4363, 41]], [[12808, 12808], "disallowed_STD3_mapped", [40, 4364, 41]], [[12809, 12809], "disallowed_STD3_mapped", [40, 4366, 41]], [[12810, 12810], "disallowed_STD3_mapped", [40, 4367, 41]], [[12811, 12811], "disallowed_STD3_mapped", [40, 4368, 41]], [[12812, 12812], "disallowed_STD3_mapped", [40, 4369, 41]], [[12813, 12813], "disallowed_STD3_mapped", [40, 4370, 41]], [[12814, 12814], "disallowed_STD3_mapped", [40, 44032, 41]], [[12815, 12815], "disallowed_STD3_mapped", [40, 45208, 41]], [[12816, 12816], "disallowed_STD3_mapped", [40, 45796, 41]], [[12817, 12817], "disallowed_STD3_mapped", [40, 46972, 41]], [[12818, 12818], "disallowed_STD3_mapped", [40, 47560, 41]], [[12819, 12819], "disallowed_STD3_mapped", [40, 48148, 41]], [[12820, 12820], "disallowed_STD3_mapped", [40, 49324, 41]], [[12821, 12821], "disallowed_STD3_mapped", [40, 50500, 41]], [[12822, 12822], "disallowed_STD3_mapped", [40, 51088, 41]], [[12823, 12823], "disallowed_STD3_mapped", [40, 52264, 41]], [[12824, 12824], "disallowed_STD3_mapped", [40, 52852, 41]], [[12825, 12825], "disallowed_STD3_mapped", [40, 53440, 41]], [[12826, 12826], "disallowed_STD3_mapped", [40, 54028, 41]], [[12827, 12827], "disallowed_STD3_mapped", [40, 54616, 41]], [[12828, 12828], "disallowed_STD3_mapped", [40, 51452, 41]], [[12829, 12829], "disallowed_STD3_mapped", [40, 50724, 51204, 41]], [[12830, 12830], "disallowed_STD3_mapped", [40, 50724, 54980, 41]], [[12831, 12831], "disallowed"], [[12832, 12832], "disallowed_STD3_mapped", [40, 19968, 41]], [[12833, 12833], "disallowed_STD3_mapped", [40, 20108, 41]], [[12834, 12834], "disallowed_STD3_mapped", [40, 19977, 41]], [[12835, 12835], "disallowed_STD3_mapped", [40, 22235, 41]], [[12836, 12836], "disallowed_STD3_mapped", [40, 20116, 41]], [[12837, 12837], "disallowed_STD3_mapped", [40, 20845, 41]], [[12838, 12838], "disallowed_STD3_mapped", [40, 19971, 41]], [[12839, 12839], "disallowed_STD3_mapped", [40, 20843, 41]], [[12840, 12840], "disallowed_STD3_mapped", [40, 20061, 41]], [[12841, 12841], "disallowed_STD3_mapped", [40, 21313, 41]], [[12842, 12842], "disallowed_STD3_mapped", [40, 26376, 41]], [[12843, 12843], "disallowed_STD3_mapped", [40, 28779, 41]], [[12844, 12844], "disallowed_STD3_mapped", [40, 27700, 41]], [[12845, 12845], "disallowed_STD3_mapped", [40, 26408, 41]], [[12846, 12846], "disallowed_STD3_mapped", [40, 37329, 41]], [[12847, 12847], "disallowed_STD3_mapped", [40, 22303, 41]], [[12848, 12848], "disallowed_STD3_mapped", [40, 26085, 41]], [[12849, 12849], "disallowed_STD3_mapped", [40, 26666, 41]], [[12850, 12850], "disallowed_STD3_mapped", [40, 26377, 41]], [[12851, 12851], "disallowed_STD3_mapped", [40, 31038, 41]], [[12852, 12852], "disallowed_STD3_mapped", [40, 21517, 41]], [[12853, 12853], "disallowed_STD3_mapped", [40, 29305, 41]], [[12854, 12854], "disallowed_STD3_mapped", [40, 36001, 41]], [[12855, 12855], "disallowed_STD3_mapped", [40, 31069, 41]], [[12856, 12856], "disallowed_STD3_mapped", [40, 21172, 41]], [[12857, 12857], "disallowed_STD3_mapped", [40, 20195, 41]], [[12858, 12858], "disallowed_STD3_mapped", [40, 21628, 41]], [[12859, 12859], "disallowed_STD3_mapped", [40, 23398, 41]], [[12860, 12860], "disallowed_STD3_mapped", [40, 30435, 41]], [[12861, 12861], "disallowed_STD3_mapped", [40, 20225, 41]], [[12862, 12862], "disallowed_STD3_mapped", [40, 36039, 41]], [[12863, 12863], "disallowed_STD3_mapped", [40, 21332, 41]], [[12864, 12864], "disallowed_STD3_mapped", [40, 31085, 41]], [[12865, 12865], "disallowed_STD3_mapped", [40, 20241, 41]], [[12866, 12866], "disallowed_STD3_mapped", [40, 33258, 41]], [[12867, 12867], "disallowed_STD3_mapped", [40, 33267, 41]], [[12868, 12868], "mapped", [21839]], [[12869, 12869], "mapped", [24188]], [[12870, 12870], "mapped", [25991]], [[12871, 12871], "mapped", [31631]], [[12872, 12879], "valid", [], "NV8"], [[12880, 12880], "mapped", [112, 116, 101]], [[12881, 12881], "mapped", [50, 49]], [[12882, 12882], "mapped", [50, 50]], [[12883, 12883], "mapped", [50, 51]], [[12884, 12884], "mapped", [50, 52]], [[12885, 12885], "mapped", [50, 53]], [[12886, 12886], "mapped", [50, 54]], [[12887, 12887], "mapped", [50, 55]], [[12888, 12888], "mapped", [50, 56]], [[12889, 12889], "mapped", [50, 57]], [[12890, 12890], "mapped", [51, 48]], [[12891, 12891], "mapped", [51, 49]], [[12892, 12892], "mapped", [51, 50]], [[12893, 12893], "mapped", [51, 51]], [[12894, 12894], "mapped", [51, 52]], [[12895, 12895], "mapped", [51, 53]], [[12896, 12896], "mapped", [4352]], [[12897, 12897], "mapped", [4354]], [[12898, 12898], "mapped", [4355]], [[12899, 12899], "mapped", [4357]], [[12900, 12900], "mapped", [4358]], [[12901, 12901], "mapped", [4359]], [[12902, 12902], "mapped", [4361]], [[12903, 12903], "mapped", [4363]], [[12904, 12904], "mapped", [4364]], [[12905, 12905], "mapped", [4366]], [[12906, 12906], "mapped", [4367]], [[12907, 12907], "mapped", [4368]], [[12908, 12908], "mapped", [4369]], [[12909, 12909], "mapped", [4370]], [[12910, 12910], "mapped", [44032]], [[12911, 12911], "mapped", [45208]], [[12912, 12912], "mapped", [45796]], [[12913, 12913], "mapped", [46972]], [[12914, 12914], "mapped", [47560]], [[12915, 12915], "mapped", [48148]], [[12916, 12916], "mapped", [49324]], [[12917, 12917], "mapped", [50500]], [[12918, 12918], "mapped", [51088]], [[12919, 12919], "mapped", [52264]], [[12920, 12920], "mapped", [52852]], [[12921, 12921], "mapped", [53440]], [[12922, 12922], "mapped", [54028]], [[12923, 12923], "mapped", [54616]], [[12924, 12924], "mapped", [52280, 44256]], [[12925, 12925], "mapped", [51452, 51032]], [[12926, 12926], "mapped", [50864]], [[12927, 12927], "valid", [], "NV8"], [[12928, 12928], "mapped", [19968]], [[12929, 12929], "mapped", [20108]], [[12930, 12930], "mapped", [19977]], [[12931, 12931], "mapped", [22235]], [[12932, 12932], "mapped", [20116]], [[12933, 12933], "mapped", [20845]], [[12934, 12934], "mapped", [19971]], [[12935, 12935], "mapped", [20843]], [[12936, 12936], "mapped", [20061]], [[12937, 12937], "mapped", [21313]], [[12938, 12938], "mapped", [26376]], [[12939, 12939], "mapped", [28779]], [[12940, 12940], "mapped", [27700]], [[12941, 12941], "mapped", [26408]], [[12942, 12942], "mapped", [37329]], [[12943, 12943], "mapped", [22303]], [[12944, 12944], "mapped", [26085]], [[12945, 12945], "mapped", [26666]], [[12946, 12946], "mapped", [26377]], [[12947, 12947], "mapped", [31038]], [[12948, 12948], "mapped", [21517]], [[12949, 12949], "mapped", [29305]], [[12950, 12950], "mapped", [36001]], [[12951, 12951], "mapped", [31069]], [[12952, 12952], "mapped", [21172]], [[12953, 12953], "mapped", [31192]], [[12954, 12954], "mapped", [30007]], [[12955, 12955], "mapped", [22899]], [[12956, 12956], "mapped", [36969]], [[12957, 12957], "mapped", [20778]], [[12958, 12958], "mapped", [21360]], [[12959, 12959], "mapped", [27880]], [[12960, 12960], "mapped", [38917]], [[12961, 12961], "mapped", [20241]], [[12962, 12962], "mapped", [20889]], [[12963, 12963], "mapped", [27491]], [[12964, 12964], "mapped", [19978]], [[12965, 12965], "mapped", [20013]], [[12966, 12966], "mapped", [19979]], [[12967, 12967], "mapped", [24038]], [[12968, 12968], "mapped", [21491]], [[12969, 12969], "mapped", [21307]], [[12970, 12970], "mapped", [23447]], [[12971, 12971], "mapped", [23398]], [[12972, 12972], "mapped", [30435]], [[12973, 12973], "mapped", [20225]], [[12974, 12974], "mapped", [36039]], [[12975, 12975], "mapped", [21332]], [[12976, 12976], "mapped", [22812]], [[12977, 12977], "mapped", [51, 54]], [[12978, 12978], "mapped", [51, 55]], [[12979, 12979], "mapped", [51, 56]], [[12980, 12980], "mapped", [51, 57]], [[12981, 12981], "mapped", [52, 48]], [[12982, 12982], "mapped", [52, 49]], [[12983, 12983], "mapped", [52, 50]], [[12984, 12984], "mapped", [52, 51]], [[12985, 12985], "mapped", [52, 52]], [[12986, 12986], "mapped", [52, 53]], [[12987, 12987], "mapped", [52, 54]], [[12988, 12988], "mapped", [52, 55]], [[12989, 12989], "mapped", [52, 56]], [[12990, 12990], "mapped", [52, 57]], [[12991, 12991], "mapped", [53, 48]], [[12992, 12992], "mapped", [49, 26376]], [[12993, 12993], "mapped", [50, 26376]], [[12994, 12994], "mapped", [51, 26376]], [[12995, 12995], "mapped", [52, 26376]], [[12996, 12996], "mapped", [53, 26376]], [[12997, 12997], "mapped", [54, 26376]], [[12998, 12998], "mapped", [55, 26376]], [[12999, 12999], "mapped", [56, 26376]], [[13e3, 13e3], "mapped", [57, 26376]], [[13001, 13001], "mapped", [49, 48, 26376]], [[13002, 13002], "mapped", [49, 49, 26376]], [[13003, 13003], "mapped", [49, 50, 26376]], [[13004, 13004], "mapped", [104, 103]], [[13005, 13005], "mapped", [101, 114, 103]], [[13006, 13006], "mapped", [101, 118]], [[13007, 13007], "mapped", [108, 116, 100]], [[13008, 13008], "mapped", [12450]], [[13009, 13009], "mapped", [12452]], [[13010, 13010], "mapped", [12454]], [[13011, 13011], "mapped", [12456]], [[13012, 13012], "mapped", [12458]], [[13013, 13013], "mapped", [12459]], [[13014, 13014], "mapped", [12461]], [[13015, 13015], "mapped", [12463]], [[13016, 13016], "mapped", [12465]], [[13017, 13017], "mapped", [12467]], [[13018, 13018], "mapped", [12469]], [[13019, 13019], "mapped", [12471]], [[13020, 13020], "mapped", [12473]], [[13021, 13021], "mapped", [12475]], [[13022, 13022], "mapped", [12477]], [[13023, 13023], "mapped", [12479]], [[13024, 13024], "mapped", [12481]], [[13025, 13025], "mapped", [12484]], [[13026, 13026], "mapped", [12486]], [[13027, 13027], "mapped", [12488]], [[13028, 13028], "mapped", [12490]], [[13029, 13029], "mapped", [12491]], [[13030, 13030], "mapped", [12492]], [[13031, 13031], "mapped", [12493]], [[13032, 13032], "mapped", [12494]], [[13033, 13033], "mapped", [12495]], [[13034, 13034], "mapped", [12498]], [[13035, 13035], "mapped", [12501]], [[13036, 13036], "mapped", [12504]], [[13037, 13037], "mapped", [12507]], [[13038, 13038], "mapped", [12510]], [[13039, 13039], "mapped", [12511]], [[13040, 13040], "mapped", [12512]], [[13041, 13041], "mapped", [12513]], [[13042, 13042], "mapped", [12514]], [[13043, 13043], "mapped", [12516]], [[13044, 13044], "mapped", [12518]], [[13045, 13045], "mapped", [12520]], [[13046, 13046], "mapped", [12521]], [[13047, 13047], "mapped", [12522]], [[13048, 13048], "mapped", [12523]], [[13049, 13049], "mapped", [12524]], [[13050, 13050], "mapped", [12525]], [[13051, 13051], "mapped", [12527]], [[13052, 13052], "mapped", [12528]], [[13053, 13053], "mapped", [12529]], [[13054, 13054], "mapped", [12530]], [[13055, 13055], "disallowed"], [[13056, 13056], "mapped", [12450, 12497, 12540, 12488]], [[13057, 13057], "mapped", [12450, 12523, 12501, 12449]], [[13058, 13058], "mapped", [12450, 12531, 12506, 12450]], [[13059, 13059], "mapped", [12450, 12540, 12523]], [[13060, 13060], "mapped", [12452, 12491, 12531, 12464]], [[13061, 13061], "mapped", [12452, 12531, 12481]], [[13062, 13062], "mapped", [12454, 12457, 12531]], [[13063, 13063], "mapped", [12456, 12473, 12463, 12540, 12489]], [[13064, 13064], "mapped", [12456, 12540, 12459, 12540]], [[13065, 13065], "mapped", [12458, 12531, 12473]], [[13066, 13066], "mapped", [12458, 12540, 12512]], [[13067, 13067], "mapped", [12459, 12452, 12522]], [[13068, 13068], "mapped", [12459, 12521, 12483, 12488]], [[13069, 13069], "mapped", [12459, 12525, 12522, 12540]], [[13070, 13070], "mapped", [12460, 12525, 12531]], [[13071, 13071], "mapped", [12460, 12531, 12510]], [[13072, 13072], "mapped", [12462, 12460]], [[13073, 13073], "mapped", [12462, 12491, 12540]], [[13074, 13074], "mapped", [12461, 12517, 12522, 12540]], [[13075, 13075], "mapped", [12462, 12523, 12480, 12540]], [[13076, 13076], "mapped", [12461, 12525]], [[13077, 13077], "mapped", [12461, 12525, 12464, 12521, 12512]], [[13078, 13078], "mapped", [12461, 12525, 12513, 12540, 12488, 12523]], [[13079, 13079], "mapped", [12461, 12525, 12527, 12483, 12488]], [[13080, 13080], "mapped", [12464, 12521, 12512]], [[13081, 13081], "mapped", [12464, 12521, 12512, 12488, 12531]], [[13082, 13082], "mapped", [12463, 12523, 12476, 12452, 12525]], [[13083, 13083], "mapped", [12463, 12525, 12540, 12493]], [[13084, 13084], "mapped", [12465, 12540, 12473]], [[13085, 13085], "mapped", [12467, 12523, 12490]], [[13086, 13086], "mapped", [12467, 12540, 12509]], [[13087, 13087], "mapped", [12469, 12452, 12463, 12523]], [[13088, 13088], "mapped", [12469, 12531, 12481, 12540, 12512]], [[13089, 13089], "mapped", [12471, 12522, 12531, 12464]], [[13090, 13090], "mapped", [12475, 12531, 12481]], [[13091, 13091], "mapped", [12475, 12531, 12488]], [[13092, 13092], "mapped", [12480, 12540, 12473]], [[13093, 13093], "mapped", [12487, 12471]], [[13094, 13094], "mapped", [12489, 12523]], [[13095, 13095], "mapped", [12488, 12531]], [[13096, 13096], "mapped", [12490, 12494]], [[13097, 13097], "mapped", [12494, 12483, 12488]], [[13098, 13098], "mapped", [12495, 12452, 12484]], [[13099, 13099], "mapped", [12497, 12540, 12475, 12531, 12488]], [[13100, 13100], "mapped", [12497, 12540, 12484]], [[13101, 13101], "mapped", [12496, 12540, 12524, 12523]], [[13102, 13102], "mapped", [12500, 12450, 12473, 12488, 12523]], [[13103, 13103], "mapped", [12500, 12463, 12523]], [[13104, 13104], "mapped", [12500, 12467]], [[13105, 13105], "mapped", [12499, 12523]], [[13106, 13106], "mapped", [12501, 12449, 12521, 12483, 12489]], [[13107, 13107], "mapped", [12501, 12451, 12540, 12488]], [[13108, 13108], "mapped", [12502, 12483, 12471, 12455, 12523]], [[13109, 13109], "mapped", [12501, 12521, 12531]], [[13110, 13110], "mapped", [12504, 12463, 12479, 12540, 12523]], [[13111, 13111], "mapped", [12506, 12477]], [[13112, 13112], "mapped", [12506, 12491, 12498]], [[13113, 13113], "mapped", [12504, 12523, 12484]], [[13114, 13114], "mapped", [12506, 12531, 12473]], [[13115, 13115], "mapped", [12506, 12540, 12472]], [[13116, 13116], "mapped", [12505, 12540, 12479]], [[13117, 13117], "mapped", [12509, 12452, 12531, 12488]], [[13118, 13118], "mapped", [12508, 12523, 12488]], [[13119, 13119], "mapped", [12507, 12531]], [[13120, 13120], "mapped", [12509, 12531, 12489]], [[13121, 13121], "mapped", [12507, 12540, 12523]], [[13122, 13122], "mapped", [12507, 12540, 12531]], [[13123, 13123], "mapped", [12510, 12452, 12463, 12525]], [[13124, 13124], "mapped", [12510, 12452, 12523]], [[13125, 13125], "mapped", [12510, 12483, 12495]], [[13126, 13126], "mapped", [12510, 12523, 12463]], [[13127, 13127], "mapped", [12510, 12531, 12471, 12519, 12531]], [[13128, 13128], "mapped", [12511, 12463, 12525, 12531]], [[13129, 13129], "mapped", [12511, 12522]], [[13130, 13130], "mapped", [12511, 12522, 12496, 12540, 12523]], [[13131, 13131], "mapped", [12513, 12460]], [[13132, 13132], "mapped", [12513, 12460, 12488, 12531]], [[13133, 13133], "mapped", [12513, 12540, 12488, 12523]], [[13134, 13134], "mapped", [12516, 12540, 12489]], [[13135, 13135], "mapped", [12516, 12540, 12523]], [[13136, 13136], "mapped", [12518, 12450, 12531]], [[13137, 13137], "mapped", [12522, 12483, 12488, 12523]], [[13138, 13138], "mapped", [12522, 12521]], [[13139, 13139], "mapped", [12523, 12500, 12540]], [[13140, 13140], "mapped", [12523, 12540, 12502, 12523]], [[13141, 13141], "mapped", [12524, 12512]], [[13142, 13142], "mapped", [12524, 12531, 12488, 12466, 12531]], [[13143, 13143], "mapped", [12527, 12483, 12488]], [[13144, 13144], "mapped", [48, 28857]], [[13145, 13145], "mapped", [49, 28857]], [[13146, 13146], "mapped", [50, 28857]], [[13147, 13147], "mapped", [51, 28857]], [[13148, 13148], "mapped", [52, 28857]], [[13149, 13149], "mapped", [53, 28857]], [[13150, 13150], "mapped", [54, 28857]], [[13151, 13151], "mapped", [55, 28857]], [[13152, 13152], "mapped", [56, 28857]], [[13153, 13153], "mapped", [57, 28857]], [[13154, 13154], "mapped", [49, 48, 28857]], [[13155, 13155], "mapped", [49, 49, 28857]], [[13156, 13156], "mapped", [49, 50, 28857]], [[13157, 13157], "mapped", [49, 51, 28857]], [[13158, 13158], "mapped", [49, 52, 28857]], [[13159, 13159], "mapped", [49, 53, 28857]], [[13160, 13160], "mapped", [49, 54, 28857]], [[13161, 13161], "mapped", [49, 55, 28857]], [[13162, 13162], "mapped", [49, 56, 28857]], [[13163, 13163], "mapped", [49, 57, 28857]], [[13164, 13164], "mapped", [50, 48, 28857]], [[13165, 13165], "mapped", [50, 49, 28857]], [[13166, 13166], "mapped", [50, 50, 28857]], [[13167, 13167], "mapped", [50, 51, 28857]], [[13168, 13168], "mapped", [50, 52, 28857]], [[13169, 13169], "mapped", [104, 112, 97]], [[13170, 13170], "mapped", [100, 97]], [[13171, 13171], "mapped", [97, 117]], [[13172, 13172], "mapped", [98, 97, 114]], [[13173, 13173], "mapped", [111, 118]], [[13174, 13174], "mapped", [112, 99]], [[13175, 13175], "mapped", [100, 109]], [[13176, 13176], "mapped", [100, 109, 50]], [[13177, 13177], "mapped", [100, 109, 51]], [[13178, 13178], "mapped", [105, 117]], [[13179, 13179], "mapped", [24179, 25104]], [[13180, 13180], "mapped", [26157, 21644]], [[13181, 13181], "mapped", [22823, 27491]], [[13182, 13182], "mapped", [26126, 27835]], [[13183, 13183], "mapped", [26666, 24335, 20250, 31038]], [[13184, 13184], "mapped", [112, 97]], [[13185, 13185], "mapped", [110, 97]], [[13186, 13186], "mapped", [956, 97]], [[13187, 13187], "mapped", [109, 97]], [[13188, 13188], "mapped", [107, 97]], [[13189, 13189], "mapped", [107, 98]], [[13190, 13190], "mapped", [109, 98]], [[13191, 13191], "mapped", [103, 98]], [[13192, 13192], "mapped", [99, 97, 108]], [[13193, 13193], "mapped", [107, 99, 97, 108]], [[13194, 13194], "mapped", [112, 102]], [[13195, 13195], "mapped", [110, 102]], [[13196, 13196], "mapped", [956, 102]], [[13197, 13197], "mapped", [956, 103]], [[13198, 13198], "mapped", [109, 103]], [[13199, 13199], "mapped", [107, 103]], [[13200, 13200], "mapped", [104, 122]], [[13201, 13201], "mapped", [107, 104, 122]], [[13202, 13202], "mapped", [109, 104, 122]], [[13203, 13203], "mapped", [103, 104, 122]], [[13204, 13204], "mapped", [116, 104, 122]], [[13205, 13205], "mapped", [956, 108]], [[13206, 13206], "mapped", [109, 108]], [[13207, 13207], "mapped", [100, 108]], [[13208, 13208], "mapped", [107, 108]], [[13209, 13209], "mapped", [102, 109]], [[13210, 13210], "mapped", [110, 109]], [[13211, 13211], "mapped", [956, 109]], [[13212, 13212], "mapped", [109, 109]], [[13213, 13213], "mapped", [99, 109]], [[13214, 13214], "mapped", [107, 109]], [[13215, 13215], "mapped", [109, 109, 50]], [[13216, 13216], "mapped", [99, 109, 50]], [[13217, 13217], "mapped", [109, 50]], [[13218, 13218], "mapped", [107, 109, 50]], [[13219, 13219], "mapped", [109, 109, 51]], [[13220, 13220], "mapped", [99, 109, 51]], [[13221, 13221], "mapped", [109, 51]], [[13222, 13222], "mapped", [107, 109, 51]], [[13223, 13223], "mapped", [109, 8725, 115]], [[13224, 13224], "mapped", [109, 8725, 115, 50]], [[13225, 13225], "mapped", [112, 97]], [[13226, 13226], "mapped", [107, 112, 97]], [[13227, 13227], "mapped", [109, 112, 97]], [[13228, 13228], "mapped", [103, 112, 97]], [[13229, 13229], "mapped", [114, 97, 100]], [[13230, 13230], "mapped", [114, 97, 100, 8725, 115]], [[13231, 13231], "mapped", [114, 97, 100, 8725, 115, 50]], [[13232, 13232], "mapped", [112, 115]], [[13233, 13233], "mapped", [110, 115]], [[13234, 13234], "mapped", [956, 115]], [[13235, 13235], "mapped", [109, 115]], [[13236, 13236], "mapped", [112, 118]], [[13237, 13237], "mapped", [110, 118]], [[13238, 13238], "mapped", [956, 118]], [[13239, 13239], "mapped", [109, 118]], [[13240, 13240], "mapped", [107, 118]], [[13241, 13241], "mapped", [109, 118]], [[13242, 13242], "mapped", [112, 119]], [[13243, 13243], "mapped", [110, 119]], [[13244, 13244], "mapped", [956, 119]], [[13245, 13245], "mapped", [109, 119]], [[13246, 13246], "mapped", [107, 119]], [[13247, 13247], "mapped", [109, 119]], [[13248, 13248], "mapped", [107, 969]], [[13249, 13249], "mapped", [109, 969]], [[13250, 13250], "disallowed"], [[13251, 13251], "mapped", [98, 113]], [[13252, 13252], "mapped", [99, 99]], [[13253, 13253], "mapped", [99, 100]], [[13254, 13254], "mapped", [99, 8725, 107, 103]], [[13255, 13255], "disallowed"], [[13256, 13256], "mapped", [100, 98]], [[13257, 13257], "mapped", [103, 121]], [[13258, 13258], "mapped", [104, 97]], [[13259, 13259], "mapped", [104, 112]], [[13260, 13260], "mapped", [105, 110]], [[13261, 13261], "mapped", [107, 107]], [[13262, 13262], "mapped", [107, 109]], [[13263, 13263], "mapped", [107, 116]], [[13264, 13264], "mapped", [108, 109]], [[13265, 13265], "mapped", [108, 110]], [[13266, 13266], "mapped", [108, 111, 103]], [[13267, 13267], "mapped", [108, 120]], [[13268, 13268], "mapped", [109, 98]], [[13269, 13269], "mapped", [109, 105, 108]], [[13270, 13270], "mapped", [109, 111, 108]], [[13271, 13271], "mapped", [112, 104]], [[13272, 13272], "disallowed"], [[13273, 13273], "mapped", [112, 112, 109]], [[13274, 13274], "mapped", [112, 114]], [[13275, 13275], "mapped", [115, 114]], [[13276, 13276], "mapped", [115, 118]], [[13277, 13277], "mapped", [119, 98]], [[13278, 13278], "mapped", [118, 8725, 109]], [[13279, 13279], "mapped", [97, 8725, 109]], [[13280, 13280], "mapped", [49, 26085]], [[13281, 13281], "mapped", [50, 26085]], [[13282, 13282], "mapped", [51, 26085]], [[13283, 13283], "mapped", [52, 26085]], [[13284, 13284], "mapped", [53, 26085]], [[13285, 13285], "mapped", [54, 26085]], [[13286, 13286], "mapped", [55, 26085]], [[13287, 13287], "mapped", [56, 26085]], [[13288, 13288], "mapped", [57, 26085]], [[13289, 13289], "mapped", [49, 48, 26085]], [[13290, 13290], "mapped", [49, 49, 26085]], [[13291, 13291], "mapped", [49, 50, 26085]], [[13292, 13292], "mapped", [49, 51, 26085]], [[13293, 13293], "mapped", [49, 52, 26085]], [[13294, 13294], "mapped", [49, 53, 26085]], [[13295, 13295], "mapped", [49, 54, 26085]], [[13296, 13296], "mapped", [49, 55, 26085]], [[13297, 13297], "mapped", [49, 56, 26085]], [[13298, 13298], "mapped", [49, 57, 26085]], [[13299, 13299], "mapped", [50, 48, 26085]], [[13300, 13300], "mapped", [50, 49, 26085]], [[13301, 13301], "mapped", [50, 50, 26085]], [[13302, 13302], "mapped", [50, 51, 26085]], [[13303, 13303], "mapped", [50, 52, 26085]], [[13304, 13304], "mapped", [50, 53, 26085]], [[13305, 13305], "mapped", [50, 54, 26085]], [[13306, 13306], "mapped", [50, 55, 26085]], [[13307, 13307], "mapped", [50, 56, 26085]], [[13308, 13308], "mapped", [50, 57, 26085]], [[13309, 13309], "mapped", [51, 48, 26085]], [[13310, 13310], "mapped", [51, 49, 26085]], [[13311, 13311], "mapped", [103, 97, 108]], [[13312, 19893], "valid"], [[19894, 19903], "disallowed"], [[19904, 19967], "valid", [], "NV8"], [[19968, 40869], "valid"], [[40870, 40891], "valid"], [[40892, 40899], "valid"], [[40900, 40907], "valid"], [[40908, 40908], "valid"], [[40909, 40917], "valid"], [[40918, 40959], "disallowed"], [[40960, 42124], "valid"], [[42125, 42127], "disallowed"], [[42128, 42145], "valid", [], "NV8"], [[42146, 42147], "valid", [], "NV8"], [[42148, 42163], "valid", [], "NV8"], [[42164, 42164], "valid", [], "NV8"], [[42165, 42176], "valid", [], "NV8"], [[42177, 42177], "valid", [], "NV8"], [[42178, 42180], "valid", [], "NV8"], [[42181, 42181], "valid", [], "NV8"], [[42182, 42182], "valid", [], "NV8"], [[42183, 42191], "disallowed"], [[42192, 42237], "valid"], [[42238, 42239], "valid", [], "NV8"], [[42240, 42508], "valid"], [[42509, 42511], "valid", [], "NV8"], [[42512, 42539], "valid"], [[42540, 42559], "disallowed"], [[42560, 42560], "mapped", [42561]], [[42561, 42561], "valid"], [[42562, 42562], "mapped", [42563]], [[42563, 42563], "valid"], [[42564, 42564], "mapped", [42565]], [[42565, 42565], "valid"], [[42566, 42566], "mapped", [42567]], [[42567, 42567], "valid"], [[42568, 42568], "mapped", [42569]], [[42569, 42569], "valid"], [[42570, 42570], "mapped", [42571]], [[42571, 42571], "valid"], [[42572, 42572], "mapped", [42573]], [[42573, 42573], "valid"], [[42574, 42574], "mapped", [42575]], [[42575, 42575], "valid"], [[42576, 42576], "mapped", [42577]], [[42577, 42577], "valid"], [[42578, 42578], "mapped", [42579]], [[42579, 42579], "valid"], [[42580, 42580], "mapped", [42581]], [[42581, 42581], "valid"], [[42582, 42582], "mapped", [42583]], [[42583, 42583], "valid"], [[42584, 42584], "mapped", [42585]], [[42585, 42585], "valid"], [[42586, 42586], "mapped", [42587]], [[42587, 42587], "valid"], [[42588, 42588], "mapped", [42589]], [[42589, 42589], "valid"], [[42590, 42590], "mapped", [42591]], [[42591, 42591], "valid"], [[42592, 42592], "mapped", [42593]], [[42593, 42593], "valid"], [[42594, 42594], "mapped", [42595]], [[42595, 42595], "valid"], [[42596, 42596], "mapped", [42597]], [[42597, 42597], "valid"], [[42598, 42598], "mapped", [42599]], [[42599, 42599], "valid"], [[42600, 42600], "mapped", [42601]], [[42601, 42601], "valid"], [[42602, 42602], "mapped", [42603]], [[42603, 42603], "valid"], [[42604, 42604], "mapped", [42605]], [[42605, 42607], "valid"], [[42608, 42611], "valid", [], "NV8"], [[42612, 42619], "valid"], [[42620, 42621], "valid"], [[42622, 42622], "valid", [], "NV8"], [[42623, 42623], "valid"], [[42624, 42624], "mapped", [42625]], [[42625, 42625], "valid"], [[42626, 42626], "mapped", [42627]], [[42627, 42627], "valid"], [[42628, 42628], "mapped", [42629]], [[42629, 42629], "valid"], [[42630, 42630], "mapped", [42631]], [[42631, 42631], "valid"], [[42632, 42632], "mapped", [42633]], [[42633, 42633], "valid"], [[42634, 42634], "mapped", [42635]], [[42635, 42635], "valid"], [[42636, 42636], "mapped", [42637]], [[42637, 42637], "valid"], [[42638, 42638], "mapped", [42639]], [[42639, 42639], "valid"], [[42640, 42640], "mapped", [42641]], [[42641, 42641], "valid"], [[42642, 42642], "mapped", [42643]], [[42643, 42643], "valid"], [[42644, 42644], "mapped", [42645]], [[42645, 42645], "valid"], [[42646, 42646], "mapped", [42647]], [[42647, 42647], "valid"], [[42648, 42648], "mapped", [42649]], [[42649, 42649], "valid"], [[42650, 42650], "mapped", [42651]], [[42651, 42651], "valid"], [[42652, 42652], "mapped", [1098]], [[42653, 42653], "mapped", [1100]], [[42654, 42654], "valid"], [[42655, 42655], "valid"], [[42656, 42725], "valid"], [[42726, 42735], "valid", [], "NV8"], [[42736, 42737], "valid"], [[42738, 42743], "valid", [], "NV8"], [[42744, 42751], "disallowed"], [[42752, 42774], "valid", [], "NV8"], [[42775, 42778], "valid"], [[42779, 42783], "valid"], [[42784, 42785], "valid", [], "NV8"], [[42786, 42786], "mapped", [42787]], [[42787, 42787], "valid"], [[42788, 42788], "mapped", [42789]], [[42789, 42789], "valid"], [[42790, 42790], "mapped", [42791]], [[42791, 42791], "valid"], [[42792, 42792], "mapped", [42793]], [[42793, 42793], "valid"], [[42794, 42794], "mapped", [42795]], [[42795, 42795], "valid"], [[42796, 42796], "mapped", [42797]], [[42797, 42797], "valid"], [[42798, 42798], "mapped", [42799]], [[42799, 42801], "valid"], [[42802, 42802], "mapped", [42803]], [[42803, 42803], "valid"], [[42804, 42804], "mapped", [42805]], [[42805, 42805], "valid"], [[42806, 42806], "mapped", [42807]], [[42807, 42807], "valid"], [[42808, 42808], "mapped", [42809]], [[42809, 42809], "valid"], [[42810, 42810], "mapped", [42811]], [[42811, 42811], "valid"], [[42812, 42812], "mapped", [42813]], [[42813, 42813], "valid"], [[42814, 42814], "mapped", [42815]], [[42815, 42815], "valid"], [[42816, 42816], "mapped", [42817]], [[42817, 42817], "valid"], [[42818, 42818], "mapped", [42819]], [[42819, 42819], "valid"], [[42820, 42820], "mapped", [42821]], [[42821, 42821], "valid"], [[42822, 42822], "mapped", [42823]], [[42823, 42823], "valid"], [[42824, 42824], "mapped", [42825]], [[42825, 42825], "valid"], [[42826, 42826], "mapped", [42827]], [[42827, 42827], "valid"], [[42828, 42828], "mapped", [42829]], [[42829, 42829], "valid"], [[42830, 42830], "mapped", [42831]], [[42831, 42831], "valid"], [[42832, 42832], "mapped", [42833]], [[42833, 42833], "valid"], [[42834, 42834], "mapped", [42835]], [[42835, 42835], "valid"], [[42836, 42836], "mapped", [42837]], [[42837, 42837], "valid"], [[42838, 42838], "mapped", [42839]], [[42839, 42839], "valid"], [[42840, 42840], "mapped", [42841]], [[42841, 42841], "valid"], [[42842, 42842], "mapped", [42843]], [[42843, 42843], "valid"], [[42844, 42844], "mapped", [42845]], [[42845, 42845], "valid"], [[42846, 42846], "mapped", [42847]], [[42847, 42847], "valid"], [[42848, 42848], "mapped", [42849]], [[42849, 42849], "valid"], [[42850, 42850], "mapped", [42851]], [[42851, 42851], "valid"], [[42852, 42852], "mapped", [42853]], [[42853, 42853], "valid"], [[42854, 42854], "mapped", [42855]], [[42855, 42855], "valid"], [[42856, 42856], "mapped", [42857]], [[42857, 42857], "valid"], [[42858, 42858], "mapped", [42859]], [[42859, 42859], "valid"], [[42860, 42860], "mapped", [42861]], [[42861, 42861], "valid"], [[42862, 42862], "mapped", [42863]], [[42863, 42863], "valid"], [[42864, 42864], "mapped", [42863]], [[42865, 42872], "valid"], [[42873, 42873], "mapped", [42874]], [[42874, 42874], "valid"], [[42875, 42875], "mapped", [42876]], [[42876, 42876], "valid"], [[42877, 42877], "mapped", [7545]], [[42878, 42878], "mapped", [42879]], [[42879, 42879], "valid"], [[42880, 42880], "mapped", [42881]], [[42881, 42881], "valid"], [[42882, 42882], "mapped", [42883]], [[42883, 42883], "valid"], [[42884, 42884], "mapped", [42885]], [[42885, 42885], "valid"], [[42886, 42886], "mapped", [42887]], [[42887, 42888], "valid"], [[42889, 42890], "valid", [], "NV8"], [[42891, 42891], "mapped", [42892]], [[42892, 42892], "valid"], [[42893, 42893], "mapped", [613]], [[42894, 42894], "valid"], [[42895, 42895], "valid"], [[42896, 42896], "mapped", [42897]], [[42897, 42897], "valid"], [[42898, 42898], "mapped", [42899]], [[42899, 42899], "valid"], [[42900, 42901], "valid"], [[42902, 42902], "mapped", [42903]], [[42903, 42903], "valid"], [[42904, 42904], "mapped", [42905]], [[42905, 42905], "valid"], [[42906, 42906], "mapped", [42907]], [[42907, 42907], "valid"], [[42908, 42908], "mapped", [42909]], [[42909, 42909], "valid"], [[42910, 42910], "mapped", [42911]], [[42911, 42911], "valid"], [[42912, 42912], "mapped", [42913]], [[42913, 42913], "valid"], [[42914, 42914], "mapped", [42915]], [[42915, 42915], "valid"], [[42916, 42916], "mapped", [42917]], [[42917, 42917], "valid"], [[42918, 42918], "mapped", [42919]], [[42919, 42919], "valid"], [[42920, 42920], "mapped", [42921]], [[42921, 42921], "valid"], [[42922, 42922], "mapped", [614]], [[42923, 42923], "mapped", [604]], [[42924, 42924], "mapped", [609]], [[42925, 42925], "mapped", [620]], [[42926, 42927], "disallowed"], [[42928, 42928], "mapped", [670]], [[42929, 42929], "mapped", [647]], [[42930, 42930], "mapped", [669]], [[42931, 42931], "mapped", [43859]], [[42932, 42932], "mapped", [42933]], [[42933, 42933], "valid"], [[42934, 42934], "mapped", [42935]], [[42935, 42935], "valid"], [[42936, 42998], "disallowed"], [[42999, 42999], "valid"], [[43e3, 43e3], "mapped", [295]], [[43001, 43001], "mapped", [339]], [[43002, 43002], "valid"], [[43003, 43007], "valid"], [[43008, 43047], "valid"], [[43048, 43051], "valid", [], "NV8"], [[43052, 43055], "disallowed"], [[43056, 43065], "valid", [], "NV8"], [[43066, 43071], "disallowed"], [[43072, 43123], "valid"], [[43124, 43127], "valid", [], "NV8"], [[43128, 43135], "disallowed"], [[43136, 43204], "valid"], [[43205, 43213], "disallowed"], [[43214, 43215], "valid", [], "NV8"], [[43216, 43225], "valid"], [[43226, 43231], "disallowed"], [[43232, 43255], "valid"], [[43256, 43258], "valid", [], "NV8"], [[43259, 43259], "valid"], [[43260, 43260], "valid", [], "NV8"], [[43261, 43261], "valid"], [[43262, 43263], "disallowed"], [[43264, 43309], "valid"], [[43310, 43311], "valid", [], "NV8"], [[43312, 43347], "valid"], [[43348, 43358], "disallowed"], [[43359, 43359], "valid", [], "NV8"], [[43360, 43388], "valid", [], "NV8"], [[43389, 43391], "disallowed"], [[43392, 43456], "valid"], [[43457, 43469], "valid", [], "NV8"], [[43470, 43470], "disallowed"], [[43471, 43481], "valid"], [[43482, 43485], "disallowed"], [[43486, 43487], "valid", [], "NV8"], [[43488, 43518], "valid"], [[43519, 43519], "disallowed"], [[43520, 43574], "valid"], [[43575, 43583], "disallowed"], [[43584, 43597], "valid"], [[43598, 43599], "disallowed"], [[43600, 43609], "valid"], [[43610, 43611], "disallowed"], [[43612, 43615], "valid", [], "NV8"], [[43616, 43638], "valid"], [[43639, 43641], "valid", [], "NV8"], [[43642, 43643], "valid"], [[43644, 43647], "valid"], [[43648, 43714], "valid"], [[43715, 43738], "disallowed"], [[43739, 43741], "valid"], [[43742, 43743], "valid", [], "NV8"], [[43744, 43759], "valid"], [[43760, 43761], "valid", [], "NV8"], [[43762, 43766], "valid"], [[43767, 43776], "disallowed"], [[43777, 43782], "valid"], [[43783, 43784], "disallowed"], [[43785, 43790], "valid"], [[43791, 43792], "disallowed"], [[43793, 43798], "valid"], [[43799, 43807], "disallowed"], [[43808, 43814], "valid"], [[43815, 43815], "disallowed"], [[43816, 43822], "valid"], [[43823, 43823], "disallowed"], [[43824, 43866], "valid"], [[43867, 43867], "valid", [], "NV8"], [[43868, 43868], "mapped", [42791]], [[43869, 43869], "mapped", [43831]], [[43870, 43870], "mapped", [619]], [[43871, 43871], "mapped", [43858]], [[43872, 43875], "valid"], [[43876, 43877], "valid"], [[43878, 43887], "disallowed"], [[43888, 43888], "mapped", [5024]], [[43889, 43889], "mapped", [5025]], [[43890, 43890], "mapped", [5026]], [[43891, 43891], "mapped", [5027]], [[43892, 43892], "mapped", [5028]], [[43893, 43893], "mapped", [5029]], [[43894, 43894], "mapped", [5030]], [[43895, 43895], "mapped", [5031]], [[43896, 43896], "mapped", [5032]], [[43897, 43897], "mapped", [5033]], [[43898, 43898], "mapped", [5034]], [[43899, 43899], "mapped", [5035]], [[43900, 43900], "mapped", [5036]], [[43901, 43901], "mapped", [5037]], [[43902, 43902], "mapped", [5038]], [[43903, 43903], "mapped", [5039]], [[43904, 43904], "mapped", [5040]], [[43905, 43905], "mapped", [5041]], [[43906, 43906], "mapped", [5042]], [[43907, 43907], "mapped", [5043]], [[43908, 43908], "mapped", [5044]], [[43909, 43909], "mapped", [5045]], [[43910, 43910], "mapped", [5046]], [[43911, 43911], "mapped", [5047]], [[43912, 43912], "mapped", [5048]], [[43913, 43913], "mapped", [5049]], [[43914, 43914], "mapped", [5050]], [[43915, 43915], "mapped", [5051]], [[43916, 43916], "mapped", [5052]], [[43917, 43917], "mapped", [5053]], [[43918, 43918], "mapped", [5054]], [[43919, 43919], "mapped", [5055]], [[43920, 43920], "mapped", [5056]], [[43921, 43921], "mapped", [5057]], [[43922, 43922], "mapped", [5058]], [[43923, 43923], "mapped", [5059]], [[43924, 43924], "mapped", [5060]], [[43925, 43925], "mapped", [5061]], [[43926, 43926], "mapped", [5062]], [[43927, 43927], "mapped", [5063]], [[43928, 43928], "mapped", [5064]], [[43929, 43929], "mapped", [5065]], [[43930, 43930], "mapped", [5066]], [[43931, 43931], "mapped", [5067]], [[43932, 43932], "mapped", [5068]], [[43933, 43933], "mapped", [5069]], [[43934, 43934], "mapped", [5070]], [[43935, 43935], "mapped", [5071]], [[43936, 43936], "mapped", [5072]], [[43937, 43937], "mapped", [5073]], [[43938, 43938], "mapped", [5074]], [[43939, 43939], "mapped", [5075]], [[43940, 43940], "mapped", [5076]], [[43941, 43941], "mapped", [5077]], [[43942, 43942], "mapped", [5078]], [[43943, 43943], "mapped", [5079]], [[43944, 43944], "mapped", [5080]], [[43945, 43945], "mapped", [5081]], [[43946, 43946], "mapped", [5082]], [[43947, 43947], "mapped", [5083]], [[43948, 43948], "mapped", [5084]], [[43949, 43949], "mapped", [5085]], [[43950, 43950], "mapped", [5086]], [[43951, 43951], "mapped", [5087]], [[43952, 43952], "mapped", [5088]], [[43953, 43953], "mapped", [5089]], [[43954, 43954], "mapped", [5090]], [[43955, 43955], "mapped", [5091]], [[43956, 43956], "mapped", [5092]], [[43957, 43957], "mapped", [5093]], [[43958, 43958], "mapped", [5094]], [[43959, 43959], "mapped", [5095]], [[43960, 43960], "mapped", [5096]], [[43961, 43961], "mapped", [5097]], [[43962, 43962], "mapped", [5098]], [[43963, 43963], "mapped", [5099]], [[43964, 43964], "mapped", [5100]], [[43965, 43965], "mapped", [5101]], [[43966, 43966], "mapped", [5102]], [[43967, 43967], "mapped", [5103]], [[43968, 44010], "valid"], [[44011, 44011], "valid", [], "NV8"], [[44012, 44013], "valid"], [[44014, 44015], "disallowed"], [[44016, 44025], "valid"], [[44026, 44031], "disallowed"], [[44032, 55203], "valid"], [[55204, 55215], "disallowed"], [[55216, 55238], "valid", [], "NV8"], [[55239, 55242], "disallowed"], [[55243, 55291], "valid", [], "NV8"], [[55292, 55295], "disallowed"], [[55296, 57343], "disallowed"], [[57344, 63743], "disallowed"], [[63744, 63744], "mapped", [35912]], [[63745, 63745], "mapped", [26356]], [[63746, 63746], "mapped", [36554]], [[63747, 63747], "mapped", [36040]], [[63748, 63748], "mapped", [28369]], [[63749, 63749], "mapped", [20018]], [[63750, 63750], "mapped", [21477]], [[63751, 63752], "mapped", [40860]], [[63753, 63753], "mapped", [22865]], [[63754, 63754], "mapped", [37329]], [[63755, 63755], "mapped", [21895]], [[63756, 63756], "mapped", [22856]], [[63757, 63757], "mapped", [25078]], [[63758, 63758], "mapped", [30313]], [[63759, 63759], "mapped", [32645]], [[63760, 63760], "mapped", [34367]], [[63761, 63761], "mapped", [34746]], [[63762, 63762], "mapped", [35064]], [[63763, 63763], "mapped", [37007]], [[63764, 63764], "mapped", [27138]], [[63765, 63765], "mapped", [27931]], [[63766, 63766], "mapped", [28889]], [[63767, 63767], "mapped", [29662]], [[63768, 63768], "mapped", [33853]], [[63769, 63769], "mapped", [37226]], [[63770, 63770], "mapped", [39409]], [[63771, 63771], "mapped", [20098]], [[63772, 63772], "mapped", [21365]], [[63773, 63773], "mapped", [27396]], [[63774, 63774], "mapped", [29211]], [[63775, 63775], "mapped", [34349]], [[63776, 63776], "mapped", [40478]], [[63777, 63777], "mapped", [23888]], [[63778, 63778], "mapped", [28651]], [[63779, 63779], "mapped", [34253]], [[63780, 63780], "mapped", [35172]], [[63781, 63781], "mapped", [25289]], [[63782, 63782], "mapped", [33240]], [[63783, 63783], "mapped", [34847]], [[63784, 63784], "mapped", [24266]], [[63785, 63785], "mapped", [26391]], [[63786, 63786], "mapped", [28010]], [[63787, 63787], "mapped", [29436]], [[63788, 63788], "mapped", [37070]], [[63789, 63789], "mapped", [20358]], [[63790, 63790], "mapped", [20919]], [[63791, 63791], "mapped", [21214]], [[63792, 63792], "mapped", [25796]], [[63793, 63793], "mapped", [27347]], [[63794, 63794], "mapped", [29200]], [[63795, 63795], "mapped", [30439]], [[63796, 63796], "mapped", [32769]], [[63797, 63797], "mapped", [34310]], [[63798, 63798], "mapped", [34396]], [[63799, 63799], "mapped", [36335]], [[63800, 63800], "mapped", [38706]], [[63801, 63801], "mapped", [39791]], [[63802, 63802], "mapped", [40442]], [[63803, 63803], "mapped", [30860]], [[63804, 63804], "mapped", [31103]], [[63805, 63805], "mapped", [32160]], [[63806, 63806], "mapped", [33737]], [[63807, 63807], "mapped", [37636]], [[63808, 63808], "mapped", [40575]], [[63809, 63809], "mapped", [35542]], [[63810, 63810], "mapped", [22751]], [[63811, 63811], "mapped", [24324]], [[63812, 63812], "mapped", [31840]], [[63813, 63813], "mapped", [32894]], [[63814, 63814], "mapped", [29282]], [[63815, 63815], "mapped", [30922]], [[63816, 63816], "mapped", [36034]], [[63817, 63817], "mapped", [38647]], [[63818, 63818], "mapped", [22744]], [[63819, 63819], "mapped", [23650]], [[63820, 63820], "mapped", [27155]], [[63821, 63821], "mapped", [28122]], [[63822, 63822], "mapped", [28431]], [[63823, 63823], "mapped", [32047]], [[63824, 63824], "mapped", [32311]], [[63825, 63825], "mapped", [38475]], [[63826, 63826], "mapped", [21202]], [[63827, 63827], "mapped", [32907]], [[63828, 63828], "mapped", [20956]], [[63829, 63829], "mapped", [20940]], [[63830, 63830], "mapped", [31260]], [[63831, 63831], "mapped", [32190]], [[63832, 63832], "mapped", [33777]], [[63833, 63833], "mapped", [38517]], [[63834, 63834], "mapped", [35712]], [[63835, 63835], "mapped", [25295]], [[63836, 63836], "mapped", [27138]], [[63837, 63837], "mapped", [35582]], [[63838, 63838], "mapped", [20025]], [[63839, 63839], "mapped", [23527]], [[63840, 63840], "mapped", [24594]], [[63841, 63841], "mapped", [29575]], [[63842, 63842], "mapped", [30064]], [[63843, 63843], "mapped", [21271]], [[63844, 63844], "mapped", [30971]], [[63845, 63845], "mapped", [20415]], [[63846, 63846], "mapped", [24489]], [[63847, 63847], "mapped", [19981]], [[63848, 63848], "mapped", [27852]], [[63849, 63849], "mapped", [25976]], [[63850, 63850], "mapped", [32034]], [[63851, 63851], "mapped", [21443]], [[63852, 63852], "mapped", [22622]], [[63853, 63853], "mapped", [30465]], [[63854, 63854], "mapped", [33865]], [[63855, 63855], "mapped", [35498]], [[63856, 63856], "mapped", [27578]], [[63857, 63857], "mapped", [36784]], [[63858, 63858], "mapped", [27784]], [[63859, 63859], "mapped", [25342]], [[63860, 63860], "mapped", [33509]], [[63861, 63861], "mapped", [25504]], [[63862, 63862], "mapped", [30053]], [[63863, 63863], "mapped", [20142]], [[63864, 63864], "mapped", [20841]], [[63865, 63865], "mapped", [20937]], [[63866, 63866], "mapped", [26753]], [[63867, 63867], "mapped", [31975]], [[63868, 63868], "mapped", [33391]], [[63869, 63869], "mapped", [35538]], [[63870, 63870], "mapped", [37327]], [[63871, 63871], "mapped", [21237]], [[63872, 63872], "mapped", [21570]], [[63873, 63873], "mapped", [22899]], [[63874, 63874], "mapped", [24300]], [[63875, 63875], "mapped", [26053]], [[63876, 63876], "mapped", [28670]], [[63877, 63877], "mapped", [31018]], [[63878, 63878], "mapped", [38317]], [[63879, 63879], "mapped", [39530]], [[63880, 63880], "mapped", [40599]], [[63881, 63881], "mapped", [40654]], [[63882, 63882], "mapped", [21147]], [[63883, 63883], "mapped", [26310]], [[63884, 63884], "mapped", [27511]], [[63885, 63885], "mapped", [36706]], [[63886, 63886], "mapped", [24180]], [[63887, 63887], "mapped", [24976]], [[63888, 63888], "mapped", [25088]], [[63889, 63889], "mapped", [25754]], [[63890, 63890], "mapped", [28451]], [[63891, 63891], "mapped", [29001]], [[63892, 63892], "mapped", [29833]], [[63893, 63893], "mapped", [31178]], [[63894, 63894], "mapped", [32244]], [[63895, 63895], "mapped", [32879]], [[63896, 63896], "mapped", [36646]], [[63897, 63897], "mapped", [34030]], [[63898, 63898], "mapped", [36899]], [[63899, 63899], "mapped", [37706]], [[63900, 63900], "mapped", [21015]], [[63901, 63901], "mapped", [21155]], [[63902, 63902], "mapped", [21693]], [[63903, 63903], "mapped", [28872]], [[63904, 63904], "mapped", [35010]], [[63905, 63905], "mapped", [35498]], [[63906, 63906], "mapped", [24265]], [[63907, 63907], "mapped", [24565]], [[63908, 63908], "mapped", [25467]], [[63909, 63909], "mapped", [27566]], [[63910, 63910], "mapped", [31806]], [[63911, 63911], "mapped", [29557]], [[63912, 63912], "mapped", [20196]], [[63913, 63913], "mapped", [22265]], [[63914, 63914], "mapped", [23527]], [[63915, 63915], "mapped", [23994]], [[63916, 63916], "mapped", [24604]], [[63917, 63917], "mapped", [29618]], [[63918, 63918], "mapped", [29801]], [[63919, 63919], "mapped", [32666]], [[63920, 63920], "mapped", [32838]], [[63921, 63921], "mapped", [37428]], [[63922, 63922], "mapped", [38646]], [[63923, 63923], "mapped", [38728]], [[63924, 63924], "mapped", [38936]], [[63925, 63925], "mapped", [20363]], [[63926, 63926], "mapped", [31150]], [[63927, 63927], "mapped", [37300]], [[63928, 63928], "mapped", [38584]], [[63929, 63929], "mapped", [24801]], [[63930, 63930], "mapped", [20102]], [[63931, 63931], "mapped", [20698]], [[63932, 63932], "mapped", [23534]], [[63933, 63933], "mapped", [23615]], [[63934, 63934], "mapped", [26009]], [[63935, 63935], "mapped", [27138]], [[63936, 63936], "mapped", [29134]], [[63937, 63937], "mapped", [30274]], [[63938, 63938], "mapped", [34044]], [[63939, 63939], "mapped", [36988]], [[63940, 63940], "mapped", [40845]], [[63941, 63941], "mapped", [26248]], [[63942, 63942], "mapped", [38446]], [[63943, 63943], "mapped", [21129]], [[63944, 63944], "mapped", [26491]], [[63945, 63945], "mapped", [26611]], [[63946, 63946], "mapped", [27969]], [[63947, 63947], "mapped", [28316]], [[63948, 63948], "mapped", [29705]], [[63949, 63949], "mapped", [30041]], [[63950, 63950], "mapped", [30827]], [[63951, 63951], "mapped", [32016]], [[63952, 63952], "mapped", [39006]], [[63953, 63953], "mapped", [20845]], [[63954, 63954], "mapped", [25134]], [[63955, 63955], "mapped", [38520]], [[63956, 63956], "mapped", [20523]], [[63957, 63957], "mapped", [23833]], [[63958, 63958], "mapped", [28138]], [[63959, 63959], "mapped", [36650]], [[63960, 63960], "mapped", [24459]], [[63961, 63961], "mapped", [24900]], [[63962, 63962], "mapped", [26647]], [[63963, 63963], "mapped", [29575]], [[63964, 63964], "mapped", [38534]], [[63965, 63965], "mapped", [21033]], [[63966, 63966], "mapped", [21519]], [[63967, 63967], "mapped", [23653]], [[63968, 63968], "mapped", [26131]], [[63969, 63969], "mapped", [26446]], [[63970, 63970], "mapped", [26792]], [[63971, 63971], "mapped", [27877]], [[63972, 63972], "mapped", [29702]], [[63973, 63973], "mapped", [30178]], [[63974, 63974], "mapped", [32633]], [[63975, 63975], "mapped", [35023]], [[63976, 63976], "mapped", [35041]], [[63977, 63977], "mapped", [37324]], [[63978, 63978], "mapped", [38626]], [[63979, 63979], "mapped", [21311]], [[63980, 63980], "mapped", [28346]], [[63981, 63981], "mapped", [21533]], [[63982, 63982], "mapped", [29136]], [[63983, 63983], "mapped", [29848]], [[63984, 63984], "mapped", [34298]], [[63985, 63985], "mapped", [38563]], [[63986, 63986], "mapped", [40023]], [[63987, 63987], "mapped", [40607]], [[63988, 63988], "mapped", [26519]], [[63989, 63989], "mapped", [28107]], [[63990, 63990], "mapped", [33256]], [[63991, 63991], "mapped", [31435]], [[63992, 63992], "mapped", [31520]], [[63993, 63993], "mapped", [31890]], [[63994, 63994], "mapped", [29376]], [[63995, 63995], "mapped", [28825]], [[63996, 63996], "mapped", [35672]], [[63997, 63997], "mapped", [20160]], [[63998, 63998], "mapped", [33590]], [[63999, 63999], "mapped", [21050]], [[64e3, 64e3], "mapped", [20999]], [[64001, 64001], "mapped", [24230]], [[64002, 64002], "mapped", [25299]], [[64003, 64003], "mapped", [31958]], [[64004, 64004], "mapped", [23429]], [[64005, 64005], "mapped", [27934]], [[64006, 64006], "mapped", [26292]], [[64007, 64007], "mapped", [36667]], [[64008, 64008], "mapped", [34892]], [[64009, 64009], "mapped", [38477]], [[64010, 64010], "mapped", [35211]], [[64011, 64011], "mapped", [24275]], [[64012, 64012], "mapped", [20800]], [[64013, 64013], "mapped", [21952]], [[64014, 64015], "valid"], [[64016, 64016], "mapped", [22618]], [[64017, 64017], "valid"], [[64018, 64018], "mapped", [26228]], [[64019, 64020], "valid"], [[64021, 64021], "mapped", [20958]], [[64022, 64022], "mapped", [29482]], [[64023, 64023], "mapped", [30410]], [[64024, 64024], "mapped", [31036]], [[64025, 64025], "mapped", [31070]], [[64026, 64026], "mapped", [31077]], [[64027, 64027], "mapped", [31119]], [[64028, 64028], "mapped", [38742]], [[64029, 64029], "mapped", [31934]], [[64030, 64030], "mapped", [32701]], [[64031, 64031], "valid"], [[64032, 64032], "mapped", [34322]], [[64033, 64033], "valid"], [[64034, 64034], "mapped", [35576]], [[64035, 64036], "valid"], [[64037, 64037], "mapped", [36920]], [[64038, 64038], "mapped", [37117]], [[64039, 64041], "valid"], [[64042, 64042], "mapped", [39151]], [[64043, 64043], "mapped", [39164]], [[64044, 64044], "mapped", [39208]], [[64045, 64045], "mapped", [40372]], [[64046, 64046], "mapped", [37086]], [[64047, 64047], "mapped", [38583]], [[64048, 64048], "mapped", [20398]], [[64049, 64049], "mapped", [20711]], [[64050, 64050], "mapped", [20813]], [[64051, 64051], "mapped", [21193]], [[64052, 64052], "mapped", [21220]], [[64053, 64053], "mapped", [21329]], [[64054, 64054], "mapped", [21917]], [[64055, 64055], "mapped", [22022]], [[64056, 64056], "mapped", [22120]], [[64057, 64057], "mapped", [22592]], [[64058, 64058], "mapped", [22696]], [[64059, 64059], "mapped", [23652]], [[64060, 64060], "mapped", [23662]], [[64061, 64061], "mapped", [24724]], [[64062, 64062], "mapped", [24936]], [[64063, 64063], "mapped", [24974]], [[64064, 64064], "mapped", [25074]], [[64065, 64065], "mapped", [25935]], [[64066, 64066], "mapped", [26082]], [[64067, 64067], "mapped", [26257]], [[64068, 64068], "mapped", [26757]], [[64069, 64069], "mapped", [28023]], [[64070, 64070], "mapped", [28186]], [[64071, 64071], "mapped", [28450]], [[64072, 64072], "mapped", [29038]], [[64073, 64073], "mapped", [29227]], [[64074, 64074], "mapped", [29730]], [[64075, 64075], "mapped", [30865]], [[64076, 64076], "mapped", [31038]], [[64077, 64077], "mapped", [31049]], [[64078, 64078], "mapped", [31048]], [[64079, 64079], "mapped", [31056]], [[64080, 64080], "mapped", [31062]], [[64081, 64081], "mapped", [31069]], [[64082, 64082], "mapped", [31117]], [[64083, 64083], "mapped", [31118]], [[64084, 64084], "mapped", [31296]], [[64085, 64085], "mapped", [31361]], [[64086, 64086], "mapped", [31680]], [[64087, 64087], "mapped", [32244]], [[64088, 64088], "mapped", [32265]], [[64089, 64089], "mapped", [32321]], [[64090, 64090], "mapped", [32626]], [[64091, 64091], "mapped", [32773]], [[64092, 64092], "mapped", [33261]], [[64093, 64094], "mapped", [33401]], [[64095, 64095], "mapped", [33879]], [[64096, 64096], "mapped", [35088]], [[64097, 64097], "mapped", [35222]], [[64098, 64098], "mapped", [35585]], [[64099, 64099], "mapped", [35641]], [[64100, 64100], "mapped", [36051]], [[64101, 64101], "mapped", [36104]], [[64102, 64102], "mapped", [36790]], [[64103, 64103], "mapped", [36920]], [[64104, 64104], "mapped", [38627]], [[64105, 64105], "mapped", [38911]], [[64106, 64106], "mapped", [38971]], [[64107, 64107], "mapped", [24693]], [[64108, 64108], "mapped", [148206]], [[64109, 64109], "mapped", [33304]], [[64110, 64111], "disallowed"], [[64112, 64112], "mapped", [20006]], [[64113, 64113], "mapped", [20917]], [[64114, 64114], "mapped", [20840]], [[64115, 64115], "mapped", [20352]], [[64116, 64116], "mapped", [20805]], [[64117, 64117], "mapped", [20864]], [[64118, 64118], "mapped", [21191]], [[64119, 64119], "mapped", [21242]], [[64120, 64120], "mapped", [21917]], [[64121, 64121], "mapped", [21845]], [[64122, 64122], "mapped", [21913]], [[64123, 64123], "mapped", [21986]], [[64124, 64124], "mapped", [22618]], [[64125, 64125], "mapped", [22707]], [[64126, 64126], "mapped", [22852]], [[64127, 64127], "mapped", [22868]], [[64128, 64128], "mapped", [23138]], [[64129, 64129], "mapped", [23336]], [[64130, 64130], "mapped", [24274]], [[64131, 64131], "mapped", [24281]], [[64132, 64132], "mapped", [24425]], [[64133, 64133], "mapped", [24493]], [[64134, 64134], "mapped", [24792]], [[64135, 64135], "mapped", [24910]], [[64136, 64136], "mapped", [24840]], [[64137, 64137], "mapped", [24974]], [[64138, 64138], "mapped", [24928]], [[64139, 64139], "mapped", [25074]], [[64140, 64140], "mapped", [25140]], [[64141, 64141], "mapped", [25540]], [[64142, 64142], "mapped", [25628]], [[64143, 64143], "mapped", [25682]], [[64144, 64144], "mapped", [25942]], [[64145, 64145], "mapped", [26228]], [[64146, 64146], "mapped", [26391]], [[64147, 64147], "mapped", [26395]], [[64148, 64148], "mapped", [26454]], [[64149, 64149], "mapped", [27513]], [[64150, 64150], "mapped", [27578]], [[64151, 64151], "mapped", [27969]], [[64152, 64152], "mapped", [28379]], [[64153, 64153], "mapped", [28363]], [[64154, 64154], "mapped", [28450]], [[64155, 64155], "mapped", [28702]], [[64156, 64156], "mapped", [29038]], [[64157, 64157], "mapped", [30631]], [[64158, 64158], "mapped", [29237]], [[64159, 64159], "mapped", [29359]], [[64160, 64160], "mapped", [29482]], [[64161, 64161], "mapped", [29809]], [[64162, 64162], "mapped", [29958]], [[64163, 64163], "mapped", [30011]], [[64164, 64164], "mapped", [30237]], [[64165, 64165], "mapped", [30239]], [[64166, 64166], "mapped", [30410]], [[64167, 64167], "mapped", [30427]], [[64168, 64168], "mapped", [30452]], [[64169, 64169], "mapped", [30538]], [[64170, 64170], "mapped", [30528]], [[64171, 64171], "mapped", [30924]], [[64172, 64172], "mapped", [31409]], [[64173, 64173], "mapped", [31680]], [[64174, 64174], "mapped", [31867]], [[64175, 64175], "mapped", [32091]], [[64176, 64176], "mapped", [32244]], [[64177, 64177], "mapped", [32574]], [[64178, 64178], "mapped", [32773]], [[64179, 64179], "mapped", [33618]], [[64180, 64180], "mapped", [33775]], [[64181, 64181], "mapped", [34681]], [[64182, 64182], "mapped", [35137]], [[64183, 64183], "mapped", [35206]], [[64184, 64184], "mapped", [35222]], [[64185, 64185], "mapped", [35519]], [[64186, 64186], "mapped", [35576]], [[64187, 64187], "mapped", [35531]], [[64188, 64188], "mapped", [35585]], [[64189, 64189], "mapped", [35582]], [[64190, 64190], "mapped", [35565]], [[64191, 64191], "mapped", [35641]], [[64192, 64192], "mapped", [35722]], [[64193, 64193], "mapped", [36104]], [[64194, 64194], "mapped", [36664]], [[64195, 64195], "mapped", [36978]], [[64196, 64196], "mapped", [37273]], [[64197, 64197], "mapped", [37494]], [[64198, 64198], "mapped", [38524]], [[64199, 64199], "mapped", [38627]], [[64200, 64200], "mapped", [38742]], [[64201, 64201], "mapped", [38875]], [[64202, 64202], "mapped", [38911]], [[64203, 64203], "mapped", [38923]], [[64204, 64204], "mapped", [38971]], [[64205, 64205], "mapped", [39698]], [[64206, 64206], "mapped", [40860]], [[64207, 64207], "mapped", [141386]], [[64208, 64208], "mapped", [141380]], [[64209, 64209], "mapped", [144341]], [[64210, 64210], "mapped", [15261]], [[64211, 64211], "mapped", [16408]], [[64212, 64212], "mapped", [16441]], [[64213, 64213], "mapped", [152137]], [[64214, 64214], "mapped", [154832]], [[64215, 64215], "mapped", [163539]], [[64216, 64216], "mapped", [40771]], [[64217, 64217], "mapped", [40846]], [[64218, 64255], "disallowed"], [[64256, 64256], "mapped", [102, 102]], [[64257, 64257], "mapped", [102, 105]], [[64258, 64258], "mapped", [102, 108]], [[64259, 64259], "mapped", [102, 102, 105]], [[64260, 64260], "mapped", [102, 102, 108]], [[64261, 64262], "mapped", [115, 116]], [[64263, 64274], "disallowed"], [[64275, 64275], "mapped", [1396, 1398]], [[64276, 64276], "mapped", [1396, 1381]], [[64277, 64277], "mapped", [1396, 1387]], [[64278, 64278], "mapped", [1406, 1398]], [[64279, 64279], "mapped", [1396, 1389]], [[64280, 64284], "disallowed"], [[64285, 64285], "mapped", [1497, 1460]], [[64286, 64286], "valid"], [[64287, 64287], "mapped", [1522, 1463]], [[64288, 64288], "mapped", [1506]], [[64289, 64289], "mapped", [1488]], [[64290, 64290], "mapped", [1491]], [[64291, 64291], "mapped", [1492]], [[64292, 64292], "mapped", [1499]], [[64293, 64293], "mapped", [1500]], [[64294, 64294], "mapped", [1501]], [[64295, 64295], "mapped", [1512]], [[64296, 64296], "mapped", [1514]], [[64297, 64297], "disallowed_STD3_mapped", [43]], [[64298, 64298], "mapped", [1513, 1473]], [[64299, 64299], "mapped", [1513, 1474]], [[64300, 64300], "mapped", [1513, 1468, 1473]], [[64301, 64301], "mapped", [1513, 1468, 1474]], [[64302, 64302], "mapped", [1488, 1463]], [[64303, 64303], "mapped", [1488, 1464]], [[64304, 64304], "mapped", [1488, 1468]], [[64305, 64305], "mapped", [1489, 1468]], [[64306, 64306], "mapped", [1490, 1468]], [[64307, 64307], "mapped", [1491, 1468]], [[64308, 64308], "mapped", [1492, 1468]], [[64309, 64309], "mapped", [1493, 1468]], [[64310, 64310], "mapped", [1494, 1468]], [[64311, 64311], "disallowed"], [[64312, 64312], "mapped", [1496, 1468]], [[64313, 64313], "mapped", [1497, 1468]], [[64314, 64314], "mapped", [1498, 1468]], [[64315, 64315], "mapped", [1499, 1468]], [[64316, 64316], "mapped", [1500, 1468]], [[64317, 64317], "disallowed"], [[64318, 64318], "mapped", [1502, 1468]], [[64319, 64319], "disallowed"], [[64320, 64320], "mapped", [1504, 1468]], [[64321, 64321], "mapped", [1505, 1468]], [[64322, 64322], "disallowed"], [[64323, 64323], "mapped", [1507, 1468]], [[64324, 64324], "mapped", [1508, 1468]], [[64325, 64325], "disallowed"], [[64326, 64326], "mapped", [1510, 1468]], [[64327, 64327], "mapped", [1511, 1468]], [[64328, 64328], "mapped", [1512, 1468]], [[64329, 64329], "mapped", [1513, 1468]], [[64330, 64330], "mapped", [1514, 1468]], [[64331, 64331], "mapped", [1493, 1465]], [[64332, 64332], "mapped", [1489, 1471]], [[64333, 64333], "mapped", [1499, 1471]], [[64334, 64334], "mapped", [1508, 1471]], [[64335, 64335], "mapped", [1488, 1500]], [[64336, 64337], "mapped", [1649]], [[64338, 64341], "mapped", [1659]], [[64342, 64345], "mapped", [1662]], [[64346, 64349], "mapped", [1664]], [[64350, 64353], "mapped", [1658]], [[64354, 64357], "mapped", [1663]], [[64358, 64361], "mapped", [1657]], [[64362, 64365], "mapped", [1700]], [[64366, 64369], "mapped", [1702]], [[64370, 64373], "mapped", [1668]], [[64374, 64377], "mapped", [1667]], [[64378, 64381], "mapped", [1670]], [[64382, 64385], "mapped", [1671]], [[64386, 64387], "mapped", [1677]], [[64388, 64389], "mapped", [1676]], [[64390, 64391], "mapped", [1678]], [[64392, 64393], "mapped", [1672]], [[64394, 64395], "mapped", [1688]], [[64396, 64397], "mapped", [1681]], [[64398, 64401], "mapped", [1705]], [[64402, 64405], "mapped", [1711]], [[64406, 64409], "mapped", [1715]], [[64410, 64413], "mapped", [1713]], [[64414, 64415], "mapped", [1722]], [[64416, 64419], "mapped", [1723]], [[64420, 64421], "mapped", [1728]], [[64422, 64425], "mapped", [1729]], [[64426, 64429], "mapped", [1726]], [[64430, 64431], "mapped", [1746]], [[64432, 64433], "mapped", [1747]], [[64434, 64449], "valid", [], "NV8"], [[64450, 64466], "disallowed"], [[64467, 64470], "mapped", [1709]], [[64471, 64472], "mapped", [1735]], [[64473, 64474], "mapped", [1734]], [[64475, 64476], "mapped", [1736]], [[64477, 64477], "mapped", [1735, 1652]], [[64478, 64479], "mapped", [1739]], [[64480, 64481], "mapped", [1733]], [[64482, 64483], "mapped", [1737]], [[64484, 64487], "mapped", [1744]], [[64488, 64489], "mapped", [1609]], [[64490, 64491], "mapped", [1574, 1575]], [[64492, 64493], "mapped", [1574, 1749]], [[64494, 64495], "mapped", [1574, 1608]], [[64496, 64497], "mapped", [1574, 1735]], [[64498, 64499], "mapped", [1574, 1734]], [[64500, 64501], "mapped", [1574, 1736]], [[64502, 64504], "mapped", [1574, 1744]], [[64505, 64507], "mapped", [1574, 1609]], [[64508, 64511], "mapped", [1740]], [[64512, 64512], "mapped", [1574, 1580]], [[64513, 64513], "mapped", [1574, 1581]], [[64514, 64514], "mapped", [1574, 1605]], [[64515, 64515], "mapped", [1574, 1609]], [[64516, 64516], "mapped", [1574, 1610]], [[64517, 64517], "mapped", [1576, 1580]], [[64518, 64518], "mapped", [1576, 1581]], [[64519, 64519], "mapped", [1576, 1582]], [[64520, 64520], "mapped", [1576, 1605]], [[64521, 64521], "mapped", [1576, 1609]], [[64522, 64522], "mapped", [1576, 1610]], [[64523, 64523], "mapped", [1578, 1580]], [[64524, 64524], "mapped", [1578, 1581]], [[64525, 64525], "mapped", [1578, 1582]], [[64526, 64526], "mapped", [1578, 1605]], [[64527, 64527], "mapped", [1578, 1609]], [[64528, 64528], "mapped", [1578, 1610]], [[64529, 64529], "mapped", [1579, 1580]], [[64530, 64530], "mapped", [1579, 1605]], [[64531, 64531], "mapped", [1579, 1609]], [[64532, 64532], "mapped", [1579, 1610]], [[64533, 64533], "mapped", [1580, 1581]], [[64534, 64534], "mapped", [1580, 1605]], [[64535, 64535], "mapped", [1581, 1580]], [[64536, 64536], "mapped", [1581, 1605]], [[64537, 64537], "mapped", [1582, 1580]], [[64538, 64538], "mapped", [1582, 1581]], [[64539, 64539], "mapped", [1582, 1605]], [[64540, 64540], "mapped", [1587, 1580]], [[64541, 64541], "mapped", [1587, 1581]], [[64542, 64542], "mapped", [1587, 1582]], [[64543, 64543], "mapped", [1587, 1605]], [[64544, 64544], "mapped", [1589, 1581]], [[64545, 64545], "mapped", [1589, 1605]], [[64546, 64546], "mapped", [1590, 1580]], [[64547, 64547], "mapped", [1590, 1581]], [[64548, 64548], "mapped", [1590, 1582]], [[64549, 64549], "mapped", [1590, 1605]], [[64550, 64550], "mapped", [1591, 1581]], [[64551, 64551], "mapped", [1591, 1605]], [[64552, 64552], "mapped", [1592, 1605]], [[64553, 64553], "mapped", [1593, 1580]], [[64554, 64554], "mapped", [1593, 1605]], [[64555, 64555], "mapped", [1594, 1580]], [[64556, 64556], "mapped", [1594, 1605]], [[64557, 64557], "mapped", [1601, 1580]], [[64558, 64558], "mapped", [1601, 1581]], [[64559, 64559], "mapped", [1601, 1582]], [[64560, 64560], "mapped", [1601, 1605]], [[64561, 64561], "mapped", [1601, 1609]], [[64562, 64562], "mapped", [1601, 1610]], [[64563, 64563], "mapped", [1602, 1581]], [[64564, 64564], "mapped", [1602, 1605]], [[64565, 64565], "mapped", [1602, 1609]], [[64566, 64566], "mapped", [1602, 1610]], [[64567, 64567], "mapped", [1603, 1575]], [[64568, 64568], "mapped", [1603, 1580]], [[64569, 64569], "mapped", [1603, 1581]], [[64570, 64570], "mapped", [1603, 1582]], [[64571, 64571], "mapped", [1603, 1604]], [[64572, 64572], "mapped", [1603, 1605]], [[64573, 64573], "mapped", [1603, 1609]], [[64574, 64574], "mapped", [1603, 1610]], [[64575, 64575], "mapped", [1604, 1580]], [[64576, 64576], "mapped", [1604, 1581]], [[64577, 64577], "mapped", [1604, 1582]], [[64578, 64578], "mapped", [1604, 1605]], [[64579, 64579], "mapped", [1604, 1609]], [[64580, 64580], "mapped", [1604, 1610]], [[64581, 64581], "mapped", [1605, 1580]], [[64582, 64582], "mapped", [1605, 1581]], [[64583, 64583], "mapped", [1605, 1582]], [[64584, 64584], "mapped", [1605, 1605]], [[64585, 64585], "mapped", [1605, 1609]], [[64586, 64586], "mapped", [1605, 1610]], [[64587, 64587], "mapped", [1606, 1580]], [[64588, 64588], "mapped", [1606, 1581]], [[64589, 64589], "mapped", [1606, 1582]], [[64590, 64590], "mapped", [1606, 1605]], [[64591, 64591], "mapped", [1606, 1609]], [[64592, 64592], "mapped", [1606, 1610]], [[64593, 64593], "mapped", [1607, 1580]], [[64594, 64594], "mapped", [1607, 1605]], [[64595, 64595], "mapped", [1607, 1609]], [[64596, 64596], "mapped", [1607, 1610]], [[64597, 64597], "mapped", [1610, 1580]], [[64598, 64598], "mapped", [1610, 1581]], [[64599, 64599], "mapped", [1610, 1582]], [[64600, 64600], "mapped", [1610, 1605]], [[64601, 64601], "mapped", [1610, 1609]], [[64602, 64602], "mapped", [1610, 1610]], [[64603, 64603], "mapped", [1584, 1648]], [[64604, 64604], "mapped", [1585, 1648]], [[64605, 64605], "mapped", [1609, 1648]], [[64606, 64606], "disallowed_STD3_mapped", [32, 1612, 1617]], [[64607, 64607], "disallowed_STD3_mapped", [32, 1613, 1617]], [[64608, 64608], "disallowed_STD3_mapped", [32, 1614, 1617]], [[64609, 64609], "disallowed_STD3_mapped", [32, 1615, 1617]], [[64610, 64610], "disallowed_STD3_mapped", [32, 1616, 1617]], [[64611, 64611], "disallowed_STD3_mapped", [32, 1617, 1648]], [[64612, 64612], "mapped", [1574, 1585]], [[64613, 64613], "mapped", [1574, 1586]], [[64614, 64614], "mapped", [1574, 1605]], [[64615, 64615], "mapped", [1574, 1606]], [[64616, 64616], "mapped", [1574, 1609]], [[64617, 64617], "mapped", [1574, 1610]], [[64618, 64618], "mapped", [1576, 1585]], [[64619, 64619], "mapped", [1576, 1586]], [[64620, 64620], "mapped", [1576, 1605]], [[64621, 64621], "mapped", [1576, 1606]], [[64622, 64622], "mapped", [1576, 1609]], [[64623, 64623], "mapped", [1576, 1610]], [[64624, 64624], "mapped", [1578, 1585]], [[64625, 64625], "mapped", [1578, 1586]], [[64626, 64626], "mapped", [1578, 1605]], [[64627, 64627], "mapped", [1578, 1606]], [[64628, 64628], "mapped", [1578, 1609]], [[64629, 64629], "mapped", [1578, 1610]], [[64630, 64630], "mapped", [1579, 1585]], [[64631, 64631], "mapped", [1579, 1586]], [[64632, 64632], "mapped", [1579, 1605]], [[64633, 64633], "mapped", [1579, 1606]], [[64634, 64634], "mapped", [1579, 1609]], [[64635, 64635], "mapped", [1579, 1610]], [[64636, 64636], "mapped", [1601, 1609]], [[64637, 64637], "mapped", [1601, 1610]], [[64638, 64638], "mapped", [1602, 1609]], [[64639, 64639], "mapped", [1602, 1610]], [[64640, 64640], "mapped", [1603, 1575]], [[64641, 64641], "mapped", [1603, 1604]], [[64642, 64642], "mapped", [1603, 1605]], [[64643, 64643], "mapped", [1603, 1609]], [[64644, 64644], "mapped", [1603, 1610]], [[64645, 64645], "mapped", [1604, 1605]], [[64646, 64646], "mapped", [1604, 1609]], [[64647, 64647], "mapped", [1604, 1610]], [[64648, 64648], "mapped", [1605, 1575]], [[64649, 64649], "mapped", [1605, 1605]], [[64650, 64650], "mapped", [1606, 1585]], [[64651, 64651], "mapped", [1606, 1586]], [[64652, 64652], "mapped", [1606, 1605]], [[64653, 64653], "mapped", [1606, 1606]], [[64654, 64654], "mapped", [1606, 1609]], [[64655, 64655], "mapped", [1606, 1610]], [[64656, 64656], "mapped", [1609, 1648]], [[64657, 64657], "mapped", [1610, 1585]], [[64658, 64658], "mapped", [1610, 1586]], [[64659, 64659], "mapped", [1610, 1605]], [[64660, 64660], "mapped", [1610, 1606]], [[64661, 64661], "mapped", [1610, 1609]], [[64662, 64662], "mapped", [1610, 1610]], [[64663, 64663], "mapped", [1574, 1580]], [[64664, 64664], "mapped", [1574, 1581]], [[64665, 64665], "mapped", [1574, 1582]], [[64666, 64666], "mapped", [1574, 1605]], [[64667, 64667], "mapped", [1574, 1607]], [[64668, 64668], "mapped", [1576, 1580]], [[64669, 64669], "mapped", [1576, 1581]], [[64670, 64670], "mapped", [1576, 1582]], [[64671, 64671], "mapped", [1576, 1605]], [[64672, 64672], "mapped", [1576, 1607]], [[64673, 64673], "mapped", [1578, 1580]], [[64674, 64674], "mapped", [1578, 1581]], [[64675, 64675], "mapped", [1578, 1582]], [[64676, 64676], "mapped", [1578, 1605]], [[64677, 64677], "mapped", [1578, 1607]], [[64678, 64678], "mapped", [1579, 1605]], [[64679, 64679], "mapped", [1580, 1581]], [[64680, 64680], "mapped", [1580, 1605]], [[64681, 64681], "mapped", [1581, 1580]], [[64682, 64682], "mapped", [1581, 1605]], [[64683, 64683], "mapped", [1582, 1580]], [[64684, 64684], "mapped", [1582, 1605]], [[64685, 64685], "mapped", [1587, 1580]], [[64686, 64686], "mapped", [1587, 1581]], [[64687, 64687], "mapped", [1587, 1582]], [[64688, 64688], "mapped", [1587, 1605]], [[64689, 64689], "mapped", [1589, 1581]], [[64690, 64690], "mapped", [1589, 1582]], [[64691, 64691], "mapped", [1589, 1605]], [[64692, 64692], "mapped", [1590, 1580]], [[64693, 64693], "mapped", [1590, 1581]], [[64694, 64694], "mapped", [1590, 1582]], [[64695, 64695], "mapped", [1590, 1605]], [[64696, 64696], "mapped", [1591, 1581]], [[64697, 64697], "mapped", [1592, 1605]], [[64698, 64698], "mapped", [1593, 1580]], [[64699, 64699], "mapped", [1593, 1605]], [[64700, 64700], "mapped", [1594, 1580]], [[64701, 64701], "mapped", [1594, 1605]], [[64702, 64702], "mapped", [1601, 1580]], [[64703, 64703], "mapped", [1601, 1581]], [[64704, 64704], "mapped", [1601, 1582]], [[64705, 64705], "mapped", [1601, 1605]], [[64706, 64706], "mapped", [1602, 1581]], [[64707, 64707], "mapped", [1602, 1605]], [[64708, 64708], "mapped", [1603, 1580]], [[64709, 64709], "mapped", [1603, 1581]], [[64710, 64710], "mapped", [1603, 1582]], [[64711, 64711], "mapped", [1603, 1604]], [[64712, 64712], "mapped", [1603, 1605]], [[64713, 64713], "mapped", [1604, 1580]], [[64714, 64714], "mapped", [1604, 1581]], [[64715, 64715], "mapped", [1604, 1582]], [[64716, 64716], "mapped", [1604, 1605]], [[64717, 64717], "mapped", [1604, 1607]], [[64718, 64718], "mapped", [1605, 1580]], [[64719, 64719], "mapped", [1605, 1581]], [[64720, 64720], "mapped", [1605, 1582]], [[64721, 64721], "mapped", [1605, 1605]], [[64722, 64722], "mapped", [1606, 1580]], [[64723, 64723], "mapped", [1606, 1581]], [[64724, 64724], "mapped", [1606, 1582]], [[64725, 64725], "mapped", [1606, 1605]], [[64726, 64726], "mapped", [1606, 1607]], [[64727, 64727], "mapped", [1607, 1580]], [[64728, 64728], "mapped", [1607, 1605]], [[64729, 64729], "mapped", [1607, 1648]], [[64730, 64730], "mapped", [1610, 1580]], [[64731, 64731], "mapped", [1610, 1581]], [[64732, 64732], "mapped", [1610, 1582]], [[64733, 64733], "mapped", [1610, 1605]], [[64734, 64734], "mapped", [1610, 1607]], [[64735, 64735], "mapped", [1574, 1605]], [[64736, 64736], "mapped", [1574, 1607]], [[64737, 64737], "mapped", [1576, 1605]], [[64738, 64738], "mapped", [1576, 1607]], [[64739, 64739], "mapped", [1578, 1605]], [[64740, 64740], "mapped", [1578, 1607]], [[64741, 64741], "mapped", [1579, 1605]], [[64742, 64742], "mapped", [1579, 1607]], [[64743, 64743], "mapped", [1587, 1605]], [[64744, 64744], "mapped", [1587, 1607]], [[64745, 64745], "mapped", [1588, 1605]], [[64746, 64746], "mapped", [1588, 1607]], [[64747, 64747], "mapped", [1603, 1604]], [[64748, 64748], "mapped", [1603, 1605]], [[64749, 64749], "mapped", [1604, 1605]], [[64750, 64750], "mapped", [1606, 1605]], [[64751, 64751], "mapped", [1606, 1607]], [[64752, 64752], "mapped", [1610, 1605]], [[64753, 64753], "mapped", [1610, 1607]], [[64754, 64754], "mapped", [1600, 1614, 1617]], [[64755, 64755], "mapped", [1600, 1615, 1617]], [[64756, 64756], "mapped", [1600, 1616, 1617]], [[64757, 64757], "mapped", [1591, 1609]], [[64758, 64758], "mapped", [1591, 1610]], [[64759, 64759], "mapped", [1593, 1609]], [[64760, 64760], "mapped", [1593, 1610]], [[64761, 64761], "mapped", [1594, 1609]], [[64762, 64762], "mapped", [1594, 1610]], [[64763, 64763], "mapped", [1587, 1609]], [[64764, 64764], "mapped", [1587, 1610]], [[64765, 64765], "mapped", [1588, 1609]], [[64766, 64766], "mapped", [1588, 1610]], [[64767, 64767], "mapped", [1581, 1609]], [[64768, 64768], "mapped", [1581, 1610]], [[64769, 64769], "mapped", [1580, 1609]], [[64770, 64770], "mapped", [1580, 1610]], [[64771, 64771], "mapped", [1582, 1609]], [[64772, 64772], "mapped", [1582, 1610]], [[64773, 64773], "mapped", [1589, 1609]], [[64774, 64774], "mapped", [1589, 1610]], [[64775, 64775], "mapped", [1590, 1609]], [[64776, 64776], "mapped", [1590, 1610]], [[64777, 64777], "mapped", [1588, 1580]], [[64778, 64778], "mapped", [1588, 1581]], [[64779, 64779], "mapped", [1588, 1582]], [[64780, 64780], "mapped", [1588, 1605]], [[64781, 64781], "mapped", [1588, 1585]], [[64782, 64782], "mapped", [1587, 1585]], [[64783, 64783], "mapped", [1589, 1585]], [[64784, 64784], "mapped", [1590, 1585]], [[64785, 64785], "mapped", [1591, 1609]], [[64786, 64786], "mapped", [1591, 1610]], [[64787, 64787], "mapped", [1593, 1609]], [[64788, 64788], "mapped", [1593, 1610]], [[64789, 64789], "mapped", [1594, 1609]], [[64790, 64790], "mapped", [1594, 1610]], [[64791, 64791], "mapped", [1587, 1609]], [[64792, 64792], "mapped", [1587, 1610]], [[64793, 64793], "mapped", [1588, 1609]], [[64794, 64794], "mapped", [1588, 1610]], [[64795, 64795], "mapped", [1581, 1609]], [[64796, 64796], "mapped", [1581, 1610]], [[64797, 64797], "mapped", [1580, 1609]], [[64798, 64798], "mapped", [1580, 1610]], [[64799, 64799], "mapped", [1582, 1609]], [[64800, 64800], "mapped", [1582, 1610]], [[64801, 64801], "mapped", [1589, 1609]], [[64802, 64802], "mapped", [1589, 1610]], [[64803, 64803], "mapped", [1590, 1609]], [[64804, 64804], "mapped", [1590, 1610]], [[64805, 64805], "mapped", [1588, 1580]], [[64806, 64806], "mapped", [1588, 1581]], [[64807, 64807], "mapped", [1588, 1582]], [[64808, 64808], "mapped", [1588, 1605]], [[64809, 64809], "mapped", [1588, 1585]], [[64810, 64810], "mapped", [1587, 1585]], [[64811, 64811], "mapped", [1589, 1585]], [[64812, 64812], "mapped", [1590, 1585]], [[64813, 64813], "mapped", [1588, 1580]], [[64814, 64814], "mapped", [1588, 1581]], [[64815, 64815], "mapped", [1588, 1582]], [[64816, 64816], "mapped", [1588, 1605]], [[64817, 64817], "mapped", [1587, 1607]], [[64818, 64818], "mapped", [1588, 1607]], [[64819, 64819], "mapped", [1591, 1605]], [[64820, 64820], "mapped", [1587, 1580]], [[64821, 64821], "mapped", [1587, 1581]], [[64822, 64822], "mapped", [1587, 1582]], [[64823, 64823], "mapped", [1588, 1580]], [[64824, 64824], "mapped", [1588, 1581]], [[64825, 64825], "mapped", [1588, 1582]], [[64826, 64826], "mapped", [1591, 1605]], [[64827, 64827], "mapped", [1592, 1605]], [[64828, 64829], "mapped", [1575, 1611]], [[64830, 64831], "valid", [], "NV8"], [[64832, 64847], "disallowed"], [[64848, 64848], "mapped", [1578, 1580, 1605]], [[64849, 64850], "mapped", [1578, 1581, 1580]], [[64851, 64851], "mapped", [1578, 1581, 1605]], [[64852, 64852], "mapped", [1578, 1582, 1605]], [[64853, 64853], "mapped", [1578, 1605, 1580]], [[64854, 64854], "mapped", [1578, 1605, 1581]], [[64855, 64855], "mapped", [1578, 1605, 1582]], [[64856, 64857], "mapped", [1580, 1605, 1581]], [[64858, 64858], "mapped", [1581, 1605, 1610]], [[64859, 64859], "mapped", [1581, 1605, 1609]], [[64860, 64860], "mapped", [1587, 1581, 1580]], [[64861, 64861], "mapped", [1587, 1580, 1581]], [[64862, 64862], "mapped", [1587, 1580, 1609]], [[64863, 64864], "mapped", [1587, 1605, 1581]], [[64865, 64865], "mapped", [1587, 1605, 1580]], [[64866, 64867], "mapped", [1587, 1605, 1605]], [[64868, 64869], "mapped", [1589, 1581, 1581]], [[64870, 64870], "mapped", [1589, 1605, 1605]], [[64871, 64872], "mapped", [1588, 1581, 1605]], [[64873, 64873], "mapped", [1588, 1580, 1610]], [[64874, 64875], "mapped", [1588, 1605, 1582]], [[64876, 64877], "mapped", [1588, 1605, 1605]], [[64878, 64878], "mapped", [1590, 1581, 1609]], [[64879, 64880], "mapped", [1590, 1582, 1605]], [[64881, 64882], "mapped", [1591, 1605, 1581]], [[64883, 64883], "mapped", [1591, 1605, 1605]], [[64884, 64884], "mapped", [1591, 1605, 1610]], [[64885, 64885], "mapped", [1593, 1580, 1605]], [[64886, 64887], "mapped", [1593, 1605, 1605]], [[64888, 64888], "mapped", [1593, 1605, 1609]], [[64889, 64889], "mapped", [1594, 1605, 1605]], [[64890, 64890], "mapped", [1594, 1605, 1610]], [[64891, 64891], "mapped", [1594, 1605, 1609]], [[64892, 64893], "mapped", [1601, 1582, 1605]], [[64894, 64894], "mapped", [1602, 1605, 1581]], [[64895, 64895], "mapped", [1602, 1605, 1605]], [[64896, 64896], "mapped", [1604, 1581, 1605]], [[64897, 64897], "mapped", [1604, 1581, 1610]], [[64898, 64898], "mapped", [1604, 1581, 1609]], [[64899, 64900], "mapped", [1604, 1580, 1580]], [[64901, 64902], "mapped", [1604, 1582, 1605]], [[64903, 64904], "mapped", [1604, 1605, 1581]], [[64905, 64905], "mapped", [1605, 1581, 1580]], [[64906, 64906], "mapped", [1605, 1581, 1605]], [[64907, 64907], "mapped", [1605, 1581, 1610]], [[64908, 64908], "mapped", [1605, 1580, 1581]], [[64909, 64909], "mapped", [1605, 1580, 1605]], [[64910, 64910], "mapped", [1605, 1582, 1580]], [[64911, 64911], "mapped", [1605, 1582, 1605]], [[64912, 64913], "disallowed"], [[64914, 64914], "mapped", [1605, 1580, 1582]], [[64915, 64915], "mapped", [1607, 1605, 1580]], [[64916, 64916], "mapped", [1607, 1605, 1605]], [[64917, 64917], "mapped", [1606, 1581, 1605]], [[64918, 64918], "mapped", [1606, 1581, 1609]], [[64919, 64920], "mapped", [1606, 1580, 1605]], [[64921, 64921], "mapped", [1606, 1580, 1609]], [[64922, 64922], "mapped", [1606, 1605, 1610]], [[64923, 64923], "mapped", [1606, 1605, 1609]], [[64924, 64925], "mapped", [1610, 1605, 1605]], [[64926, 64926], "mapped", [1576, 1582, 1610]], [[64927, 64927], "mapped", [1578, 1580, 1610]], [[64928, 64928], "mapped", [1578, 1580, 1609]], [[64929, 64929], "mapped", [1578, 1582, 1610]], [[64930, 64930], "mapped", [1578, 1582, 1609]], [[64931, 64931], "mapped", [1578, 1605, 1610]], [[64932, 64932], "mapped", [1578, 1605, 1609]], [[64933, 64933], "mapped", [1580, 1605, 1610]], [[64934, 64934], "mapped", [1580, 1581, 1609]], [[64935, 64935], "mapped", [1580, 1605, 1609]], [[64936, 64936], "mapped", [1587, 1582, 1609]], [[64937, 64937], "mapped", [1589, 1581, 1610]], [[64938, 64938], "mapped", [1588, 1581, 1610]], [[64939, 64939], "mapped", [1590, 1581, 1610]], [[64940, 64940], "mapped", [1604, 1580, 1610]], [[64941, 64941], "mapped", [1604, 1605, 1610]], [[64942, 64942], "mapped", [1610, 1581, 1610]], [[64943, 64943], "mapped", [1610, 1580, 1610]], [[64944, 64944], "mapped", [1610, 1605, 1610]], [[64945, 64945], "mapped", [1605, 1605, 1610]], [[64946, 64946], "mapped", [1602, 1605, 1610]], [[64947, 64947], "mapped", [1606, 1581, 1610]], [[64948, 64948], "mapped", [1602, 1605, 1581]], [[64949, 64949], "mapped", [1604, 1581, 1605]], [[64950, 64950], "mapped", [1593, 1605, 1610]], [[64951, 64951], "mapped", [1603, 1605, 1610]], [[64952, 64952], "mapped", [1606, 1580, 1581]], [[64953, 64953], "mapped", [1605, 1582, 1610]], [[64954, 64954], "mapped", [1604, 1580, 1605]], [[64955, 64955], "mapped", [1603, 1605, 1605]], [[64956, 64956], "mapped", [1604, 1580, 1605]], [[64957, 64957], "mapped", [1606, 1580, 1581]], [[64958, 64958], "mapped", [1580, 1581, 1610]], [[64959, 64959], "mapped", [1581, 1580, 1610]], [[64960, 64960], "mapped", [1605, 1580, 1610]], [[64961, 64961], "mapped", [1601, 1605, 1610]], [[64962, 64962], "mapped", [1576, 1581, 1610]], [[64963, 64963], "mapped", [1603, 1605, 1605]], [[64964, 64964], "mapped", [1593, 1580, 1605]], [[64965, 64965], "mapped", [1589, 1605, 1605]], [[64966, 64966], "mapped", [1587, 1582, 1610]], [[64967, 64967], "mapped", [1606, 1580, 1610]], [[64968, 64975], "disallowed"], [[64976, 65007], "disallowed"], [[65008, 65008], "mapped", [1589, 1604, 1746]], [[65009, 65009], "mapped", [1602, 1604, 1746]], [[65010, 65010], "mapped", [1575, 1604, 1604, 1607]], [[65011, 65011], "mapped", [1575, 1603, 1576, 1585]], [[65012, 65012], "mapped", [1605, 1581, 1605, 1583]], [[65013, 65013], "mapped", [1589, 1604, 1593, 1605]], [[65014, 65014], "mapped", [1585, 1587, 1608, 1604]], [[65015, 65015], "mapped", [1593, 1604, 1610, 1607]], [[65016, 65016], "mapped", [1608, 1587, 1604, 1605]], [[65017, 65017], "mapped", [1589, 1604, 1609]], [[65018, 65018], "disallowed_STD3_mapped", [1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610, 1607, 32, 1608, 1587, 1604, 1605]], [[65019, 65019], "disallowed_STD3_mapped", [1580, 1604, 32, 1580, 1604, 1575, 1604, 1607]], [[65020, 65020], "mapped", [1585, 1740, 1575, 1604]], [[65021, 65021], "valid", [], "NV8"], [[65022, 65023], "disallowed"], [[65024, 65039], "ignored"], [[65040, 65040], "disallowed_STD3_mapped", [44]], [[65041, 65041], "mapped", [12289]], [[65042, 65042], "disallowed"], [[65043, 65043], "disallowed_STD3_mapped", [58]], [[65044, 65044], "disallowed_STD3_mapped", [59]], [[65045, 65045], "disallowed_STD3_mapped", [33]], [[65046, 65046], "disallowed_STD3_mapped", [63]], [[65047, 65047], "mapped", [12310]], [[65048, 65048], "mapped", [12311]], [[65049, 65049], "disallowed"], [[65050, 65055], "disallowed"], [[65056, 65059], "valid"], [[65060, 65062], "valid"], [[65063, 65069], "valid"], [[65070, 65071], "valid"], [[65072, 65072], "disallowed"], [[65073, 65073], "mapped", [8212]], [[65074, 65074], "mapped", [8211]], [[65075, 65076], "disallowed_STD3_mapped", [95]], [[65077, 65077], "disallowed_STD3_mapped", [40]], [[65078, 65078], "disallowed_STD3_mapped", [41]], [[65079, 65079], "disallowed_STD3_mapped", [123]], [[65080, 65080], "disallowed_STD3_mapped", [125]], [[65081, 65081], "mapped", [12308]], [[65082, 65082], "mapped", [12309]], [[65083, 65083], "mapped", [12304]], [[65084, 65084], "mapped", [12305]], [[65085, 65085], "mapped", [12298]], [[65086, 65086], "mapped", [12299]], [[65087, 65087], "mapped", [12296]], [[65088, 65088], "mapped", [12297]], [[65089, 65089], "mapped", [12300]], [[65090, 65090], "mapped", [12301]], [[65091, 65091], "mapped", [12302]], [[65092, 65092], "mapped", [12303]], [[65093, 65094], "valid", [], "NV8"], [[65095, 65095], "disallowed_STD3_mapped", [91]], [[65096, 65096], "disallowed_STD3_mapped", [93]], [[65097, 65100], "disallowed_STD3_mapped", [32, 773]], [[65101, 65103], "disallowed_STD3_mapped", [95]], [[65104, 65104], "disallowed_STD3_mapped", [44]], [[65105, 65105], "mapped", [12289]], [[65106, 65106], "disallowed"], [[65107, 65107], "disallowed"], [[65108, 65108], "disallowed_STD3_mapped", [59]], [[65109, 65109], "disallowed_STD3_mapped", [58]], [[65110, 65110], "disallowed_STD3_mapped", [63]], [[65111, 65111], "disallowed_STD3_mapped", [33]], [[65112, 65112], "mapped", [8212]], [[65113, 65113], "disallowed_STD3_mapped", [40]], [[65114, 65114], "disallowed_STD3_mapped", [41]], [[65115, 65115], "disallowed_STD3_mapped", [123]], [[65116, 65116], "disallowed_STD3_mapped", [125]], [[65117, 65117], "mapped", [12308]], [[65118, 65118], "mapped", [12309]], [[65119, 65119], "disallowed_STD3_mapped", [35]], [[65120, 65120], "disallowed_STD3_mapped", [38]], [[65121, 65121], "disallowed_STD3_mapped", [42]], [[65122, 65122], "disallowed_STD3_mapped", [43]], [[65123, 65123], "mapped", [45]], [[65124, 65124], "disallowed_STD3_mapped", [60]], [[65125, 65125], "disallowed_STD3_mapped", [62]], [[65126, 65126], "disallowed_STD3_mapped", [61]], [[65127, 65127], "disallowed"], [[65128, 65128], "disallowed_STD3_mapped", [92]], [[65129, 65129], "disallowed_STD3_mapped", [36]], [[65130, 65130], "disallowed_STD3_mapped", [37]], [[65131, 65131], "disallowed_STD3_mapped", [64]], [[65132, 65135], "disallowed"], [[65136, 65136], "disallowed_STD3_mapped", [32, 1611]], [[65137, 65137], "mapped", [1600, 1611]], [[65138, 65138], "disallowed_STD3_mapped", [32, 1612]], [[65139, 65139], "valid"], [[65140, 65140], "disallowed_STD3_mapped", [32, 1613]], [[65141, 65141], "disallowed"], [[65142, 65142], "disallowed_STD3_mapped", [32, 1614]], [[65143, 65143], "mapped", [1600, 1614]], [[65144, 65144], "disallowed_STD3_mapped", [32, 1615]], [[65145, 65145], "mapped", [1600, 1615]], [[65146, 65146], "disallowed_STD3_mapped", [32, 1616]], [[65147, 65147], "mapped", [1600, 1616]], [[65148, 65148], "disallowed_STD3_mapped", [32, 1617]], [[65149, 65149], "mapped", [1600, 1617]], [[65150, 65150], "disallowed_STD3_mapped", [32, 1618]], [[65151, 65151], "mapped", [1600, 1618]], [[65152, 65152], "mapped", [1569]], [[65153, 65154], "mapped", [1570]], [[65155, 65156], "mapped", [1571]], [[65157, 65158], "mapped", [1572]], [[65159, 65160], "mapped", [1573]], [[65161, 65164], "mapped", [1574]], [[65165, 65166], "mapped", [1575]], [[65167, 65170], "mapped", [1576]], [[65171, 65172], "mapped", [1577]], [[65173, 65176], "mapped", [1578]], [[65177, 65180], "mapped", [1579]], [[65181, 65184], "mapped", [1580]], [[65185, 65188], "mapped", [1581]], [[65189, 65192], "mapped", [1582]], [[65193, 65194], "mapped", [1583]], [[65195, 65196], "mapped", [1584]], [[65197, 65198], "mapped", [1585]], [[65199, 65200], "mapped", [1586]], [[65201, 65204], "mapped", [1587]], [[65205, 65208], "mapped", [1588]], [[65209, 65212], "mapped", [1589]], [[65213, 65216], "mapped", [1590]], [[65217, 65220], "mapped", [1591]], [[65221, 65224], "mapped", [1592]], [[65225, 65228], "mapped", [1593]], [[65229, 65232], "mapped", [1594]], [[65233, 65236], "mapped", [1601]], [[65237, 65240], "mapped", [1602]], [[65241, 65244], "mapped", [1603]], [[65245, 65248], "mapped", [1604]], [[65249, 65252], "mapped", [1605]], [[65253, 65256], "mapped", [1606]], [[65257, 65260], "mapped", [1607]], [[65261, 65262], "mapped", [1608]], [[65263, 65264], "mapped", [1609]], [[65265, 65268], "mapped", [1610]], [[65269, 65270], "mapped", [1604, 1570]], [[65271, 65272], "mapped", [1604, 1571]], [[65273, 65274], "mapped", [1604, 1573]], [[65275, 65276], "mapped", [1604, 1575]], [[65277, 65278], "disallowed"], [[65279, 65279], "ignored"], [[65280, 65280], "disallowed"], [[65281, 65281], "disallowed_STD3_mapped", [33]], [[65282, 65282], "disallowed_STD3_mapped", [34]], [[65283, 65283], "disallowed_STD3_mapped", [35]], [[65284, 65284], "disallowed_STD3_mapped", [36]], [[65285, 65285], "disallowed_STD3_mapped", [37]], [[65286, 65286], "disallowed_STD3_mapped", [38]], [[65287, 65287], "disallowed_STD3_mapped", [39]], [[65288, 65288], "disallowed_STD3_mapped", [40]], [[65289, 65289], "disallowed_STD3_mapped", [41]], [[65290, 65290], "disallowed_STD3_mapped", [42]], [[65291, 65291], "disallowed_STD3_mapped", [43]], [[65292, 65292], "disallowed_STD3_mapped", [44]], [[65293, 65293], "mapped", [45]], [[65294, 65294], "mapped", [46]], [[65295, 65295], "disallowed_STD3_mapped", [47]], [[65296, 65296], "mapped", [48]], [[65297, 65297], "mapped", [49]], [[65298, 65298], "mapped", [50]], [[65299, 65299], "mapped", [51]], [[65300, 65300], "mapped", [52]], [[65301, 65301], "mapped", [53]], [[65302, 65302], "mapped", [54]], [[65303, 65303], "mapped", [55]], [[65304, 65304], "mapped", [56]], [[65305, 65305], "mapped", [57]], [[65306, 65306], "disallowed_STD3_mapped", [58]], [[65307, 65307], "disallowed_STD3_mapped", [59]], [[65308, 65308], "disallowed_STD3_mapped", [60]], [[65309, 65309], "disallowed_STD3_mapped", [61]], [[65310, 65310], "disallowed_STD3_mapped", [62]], [[65311, 65311], "disallowed_STD3_mapped", [63]], [[65312, 65312], "disallowed_STD3_mapped", [64]], [[65313, 65313], "mapped", [97]], [[65314, 65314], "mapped", [98]], [[65315, 65315], "mapped", [99]], [[65316, 65316], "mapped", [100]], [[65317, 65317], "mapped", [101]], [[65318, 65318], "mapped", [102]], [[65319, 65319], "mapped", [103]], [[65320, 65320], "mapped", [104]], [[65321, 65321], "mapped", [105]], [[65322, 65322], "mapped", [106]], [[65323, 65323], "mapped", [107]], [[65324, 65324], "mapped", [108]], [[65325, 65325], "mapped", [109]], [[65326, 65326], "mapped", [110]], [[65327, 65327], "mapped", [111]], [[65328, 65328], "mapped", [112]], [[65329, 65329], "mapped", [113]], [[65330, 65330], "mapped", [114]], [[65331, 65331], "mapped", [115]], [[65332, 65332], "mapped", [116]], [[65333, 65333], "mapped", [117]], [[65334, 65334], "mapped", [118]], [[65335, 65335], "mapped", [119]], [[65336, 65336], "mapped", [120]], [[65337, 65337], "mapped", [121]], [[65338, 65338], "mapped", [122]], [[65339, 65339], "disallowed_STD3_mapped", [91]], [[65340, 65340], "disallowed_STD3_mapped", [92]], [[65341, 65341], "disallowed_STD3_mapped", [93]], [[65342, 65342], "disallowed_STD3_mapped", [94]], [[65343, 65343], "disallowed_STD3_mapped", [95]], [[65344, 65344], "disallowed_STD3_mapped", [96]], [[65345, 65345], "mapped", [97]], [[65346, 65346], "mapped", [98]], [[65347, 65347], "mapped", [99]], [[65348, 65348], "mapped", [100]], [[65349, 65349], "mapped", [101]], [[65350, 65350], "mapped", [102]], [[65351, 65351], "mapped", [103]], [[65352, 65352], "mapped", [104]], [[65353, 65353], "mapped", [105]], [[65354, 65354], "mapped", [106]], [[65355, 65355], "mapped", [107]], [[65356, 65356], "mapped", [108]], [[65357, 65357], "mapped", [109]], [[65358, 65358], "mapped", [110]], [[65359, 65359], "mapped", [111]], [[65360, 65360], "mapped", [112]], [[65361, 65361], "mapped", [113]], [[65362, 65362], "mapped", [114]], [[65363, 65363], "mapped", [115]], [[65364, 65364], "mapped", [116]], [[65365, 65365], "mapped", [117]], [[65366, 65366], "mapped", [118]], [[65367, 65367], "mapped", [119]], [[65368, 65368], "mapped", [120]], [[65369, 65369], "mapped", [121]], [[65370, 65370], "mapped", [122]], [[65371, 65371], "disallowed_STD3_mapped", [123]], [[65372, 65372], "disallowed_STD3_mapped", [124]], [[65373, 65373], "disallowed_STD3_mapped", [125]], [[65374, 65374], "disallowed_STD3_mapped", [126]], [[65375, 65375], "mapped", [10629]], [[65376, 65376], "mapped", [10630]], [[65377, 65377], "mapped", [46]], [[65378, 65378], "mapped", [12300]], [[65379, 65379], "mapped", [12301]], [[65380, 65380], "mapped", [12289]], [[65381, 65381], "mapped", [12539]], [[65382, 65382], "mapped", [12530]], [[65383, 65383], "mapped", [12449]], [[65384, 65384], "mapped", [12451]], [[65385, 65385], "mapped", [12453]], [[65386, 65386], "mapped", [12455]], [[65387, 65387], "mapped", [12457]], [[65388, 65388], "mapped", [12515]], [[65389, 65389], "mapped", [12517]], [[65390, 65390], "mapped", [12519]], [[65391, 65391], "mapped", [12483]], [[65392, 65392], "mapped", [12540]], [[65393, 65393], "mapped", [12450]], [[65394, 65394], "mapped", [12452]], [[65395, 65395], "mapped", [12454]], [[65396, 65396], "mapped", [12456]], [[65397, 65397], "mapped", [12458]], [[65398, 65398], "mapped", [12459]], [[65399, 65399], "mapped", [12461]], [[65400, 65400], "mapped", [12463]], [[65401, 65401], "mapped", [12465]], [[65402, 65402], "mapped", [12467]], [[65403, 65403], "mapped", [12469]], [[65404, 65404], "mapped", [12471]], [[65405, 65405], "mapped", [12473]], [[65406, 65406], "mapped", [12475]], [[65407, 65407], "mapped", [12477]], [[65408, 65408], "mapped", [12479]], [[65409, 65409], "mapped", [12481]], [[65410, 65410], "mapped", [12484]], [[65411, 65411], "mapped", [12486]], [[65412, 65412], "mapped", [12488]], [[65413, 65413], "mapped", [12490]], [[65414, 65414], "mapped", [12491]], [[65415, 65415], "mapped", [12492]], [[65416, 65416], "mapped", [12493]], [[65417, 65417], "mapped", [12494]], [[65418, 65418], "mapped", [12495]], [[65419, 65419], "mapped", [12498]], [[65420, 65420], "mapped", [12501]], [[65421, 65421], "mapped", [12504]], [[65422, 65422], "mapped", [12507]], [[65423, 65423], "mapped", [12510]], [[65424, 65424], "mapped", [12511]], [[65425, 65425], "mapped", [12512]], [[65426, 65426], "mapped", [12513]], [[65427, 65427], "mapped", [12514]], [[65428, 65428], "mapped", [12516]], [[65429, 65429], "mapped", [12518]], [[65430, 65430], "mapped", [12520]], [[65431, 65431], "mapped", [12521]], [[65432, 65432], "mapped", [12522]], [[65433, 65433], "mapped", [12523]], [[65434, 65434], "mapped", [12524]], [[65435, 65435], "mapped", [12525]], [[65436, 65436], "mapped", [12527]], [[65437, 65437], "mapped", [12531]], [[65438, 65438], "mapped", [12441]], [[65439, 65439], "mapped", [12442]], [[65440, 65440], "disallowed"], [[65441, 65441], "mapped", [4352]], [[65442, 65442], "mapped", [4353]], [[65443, 65443], "mapped", [4522]], [[65444, 65444], "mapped", [4354]], [[65445, 65445], "mapped", [4524]], [[65446, 65446], "mapped", [4525]], [[65447, 65447], "mapped", [4355]], [[65448, 65448], "mapped", [4356]], [[65449, 65449], "mapped", [4357]], [[65450, 65450], "mapped", [4528]], [[65451, 65451], "mapped", [4529]], [[65452, 65452], "mapped", [4530]], [[65453, 65453], "mapped", [4531]], [[65454, 65454], "mapped", [4532]], [[65455, 65455], "mapped", [4533]], [[65456, 65456], "mapped", [4378]], [[65457, 65457], "mapped", [4358]], [[65458, 65458], "mapped", [4359]], [[65459, 65459], "mapped", [4360]], [[65460, 65460], "mapped", [4385]], [[65461, 65461], "mapped", [4361]], [[65462, 65462], "mapped", [4362]], [[65463, 65463], "mapped", [4363]], [[65464, 65464], "mapped", [4364]], [[65465, 65465], "mapped", [4365]], [[65466, 65466], "mapped", [4366]], [[65467, 65467], "mapped", [4367]], [[65468, 65468], "mapped", [4368]], [[65469, 65469], "mapped", [4369]], [[65470, 65470], "mapped", [4370]], [[65471, 65473], "disallowed"], [[65474, 65474], "mapped", [4449]], [[65475, 65475], "mapped", [4450]], [[65476, 65476], "mapped", [4451]], [[65477, 65477], "mapped", [4452]], [[65478, 65478], "mapped", [4453]], [[65479, 65479], "mapped", [4454]], [[65480, 65481], "disallowed"], [[65482, 65482], "mapped", [4455]], [[65483, 65483], "mapped", [4456]], [[65484, 65484], "mapped", [4457]], [[65485, 65485], "mapped", [4458]], [[65486, 65486], "mapped", [4459]], [[65487, 65487], "mapped", [4460]], [[65488, 65489], "disallowed"], [[65490, 65490], "mapped", [4461]], [[65491, 65491], "mapped", [4462]], [[65492, 65492], "mapped", [4463]], [[65493, 65493], "mapped", [4464]], [[65494, 65494], "mapped", [4465]], [[65495, 65495], "mapped", [4466]], [[65496, 65497], "disallowed"], [[65498, 65498], "mapped", [4467]], [[65499, 65499], "mapped", [4468]], [[65500, 65500], "mapped", [4469]], [[65501, 65503], "disallowed"], [[65504, 65504], "mapped", [162]], [[65505, 65505], "mapped", [163]], [[65506, 65506], "mapped", [172]], [[65507, 65507], "disallowed_STD3_mapped", [32, 772]], [[65508, 65508], "mapped", [166]], [[65509, 65509], "mapped", [165]], [[65510, 65510], "mapped", [8361]], [[65511, 65511], "disallowed"], [[65512, 65512], "mapped", [9474]], [[65513, 65513], "mapped", [8592]], [[65514, 65514], "mapped", [8593]], [[65515, 65515], "mapped", [8594]], [[65516, 65516], "mapped", [8595]], [[65517, 65517], "mapped", [9632]], [[65518, 65518], "mapped", [9675]], [[65519, 65528], "disallowed"], [[65529, 65531], "disallowed"], [[65532, 65532], "disallowed"], [[65533, 65533], "disallowed"], [[65534, 65535], "disallowed"], [[65536, 65547], "valid"], [[65548, 65548], "disallowed"], [[65549, 65574], "valid"], [[65575, 65575], "disallowed"], [[65576, 65594], "valid"], [[65595, 65595], "disallowed"], [[65596, 65597], "valid"], [[65598, 65598], "disallowed"], [[65599, 65613], "valid"], [[65614, 65615], "disallowed"], [[65616, 65629], "valid"], [[65630, 65663], "disallowed"], [[65664, 65786], "valid"], [[65787, 65791], "disallowed"], [[65792, 65794], "valid", [], "NV8"], [[65795, 65798], "disallowed"], [[65799, 65843], "valid", [], "NV8"], [[65844, 65846], "disallowed"], [[65847, 65855], "valid", [], "NV8"], [[65856, 65930], "valid", [], "NV8"], [[65931, 65932], "valid", [], "NV8"], [[65933, 65935], "disallowed"], [[65936, 65947], "valid", [], "NV8"], [[65948, 65951], "disallowed"], [[65952, 65952], "valid", [], "NV8"], [[65953, 65999], "disallowed"], [[66e3, 66044], "valid", [], "NV8"], [[66045, 66045], "valid"], [[66046, 66175], "disallowed"], [[66176, 66204], "valid"], [[66205, 66207], "disallowed"], [[66208, 66256], "valid"], [[66257, 66271], "disallowed"], [[66272, 66272], "valid"], [[66273, 66299], "valid", [], "NV8"], [[66300, 66303], "disallowed"], [[66304, 66334], "valid"], [[66335, 66335], "valid"], [[66336, 66339], "valid", [], "NV8"], [[66340, 66351], "disallowed"], [[66352, 66368], "valid"], [[66369, 66369], "valid", [], "NV8"], [[66370, 66377], "valid"], [[66378, 66378], "valid", [], "NV8"], [[66379, 66383], "disallowed"], [[66384, 66426], "valid"], [[66427, 66431], "disallowed"], [[66432, 66461], "valid"], [[66462, 66462], "disallowed"], [[66463, 66463], "valid", [], "NV8"], [[66464, 66499], "valid"], [[66500, 66503], "disallowed"], [[66504, 66511], "valid"], [[66512, 66517], "valid", [], "NV8"], [[66518, 66559], "disallowed"], [[66560, 66560], "mapped", [66600]], [[66561, 66561], "mapped", [66601]], [[66562, 66562], "mapped", [66602]], [[66563, 66563], "mapped", [66603]], [[66564, 66564], "mapped", [66604]], [[66565, 66565], "mapped", [66605]], [[66566, 66566], "mapped", [66606]], [[66567, 66567], "mapped", [66607]], [[66568, 66568], "mapped", [66608]], [[66569, 66569], "mapped", [66609]], [[66570, 66570], "mapped", [66610]], [[66571, 66571], "mapped", [66611]], [[66572, 66572], "mapped", [66612]], [[66573, 66573], "mapped", [66613]], [[66574, 66574], "mapped", [66614]], [[66575, 66575], "mapped", [66615]], [[66576, 66576], "mapped", [66616]], [[66577, 66577], "mapped", [66617]], [[66578, 66578], "mapped", [66618]], [[66579, 66579], "mapped", [66619]], [[66580, 66580], "mapped", [66620]], [[66581, 66581], "mapped", [66621]], [[66582, 66582], "mapped", [66622]], [[66583, 66583], "mapped", [66623]], [[66584, 66584], "mapped", [66624]], [[66585, 66585], "mapped", [66625]], [[66586, 66586], "mapped", [66626]], [[66587, 66587], "mapped", [66627]], [[66588, 66588], "mapped", [66628]], [[66589, 66589], "mapped", [66629]], [[66590, 66590], "mapped", [66630]], [[66591, 66591], "mapped", [66631]], [[66592, 66592], "mapped", [66632]], [[66593, 66593], "mapped", [66633]], [[66594, 66594], "mapped", [66634]], [[66595, 66595], "mapped", [66635]], [[66596, 66596], "mapped", [66636]], [[66597, 66597], "mapped", [66637]], [[66598, 66598], "mapped", [66638]], [[66599, 66599], "mapped", [66639]], [[66600, 66637], "valid"], [[66638, 66717], "valid"], [[66718, 66719], "disallowed"], [[66720, 66729], "valid"], [[66730, 66815], "disallowed"], [[66816, 66855], "valid"], [[66856, 66863], "disallowed"], [[66864, 66915], "valid"], [[66916, 66926], "disallowed"], [[66927, 66927], "valid", [], "NV8"], [[66928, 67071], "disallowed"], [[67072, 67382], "valid"], [[67383, 67391], "disallowed"], [[67392, 67413], "valid"], [[67414, 67423], "disallowed"], [[67424, 67431], "valid"], [[67432, 67583], "disallowed"], [[67584, 67589], "valid"], [[67590, 67591], "disallowed"], [[67592, 67592], "valid"], [[67593, 67593], "disallowed"], [[67594, 67637], "valid"], [[67638, 67638], "disallowed"], [[67639, 67640], "valid"], [[67641, 67643], "disallowed"], [[67644, 67644], "valid"], [[67645, 67646], "disallowed"], [[67647, 67647], "valid"], [[67648, 67669], "valid"], [[67670, 67670], "disallowed"], [[67671, 67679], "valid", [], "NV8"], [[67680, 67702], "valid"], [[67703, 67711], "valid", [], "NV8"], [[67712, 67742], "valid"], [[67743, 67750], "disallowed"], [[67751, 67759], "valid", [], "NV8"], [[67760, 67807], "disallowed"], [[67808, 67826], "valid"], [[67827, 67827], "disallowed"], [[67828, 67829], "valid"], [[67830, 67834], "disallowed"], [[67835, 67839], "valid", [], "NV8"], [[67840, 67861], "valid"], [[67862, 67865], "valid", [], "NV8"], [[67866, 67867], "valid", [], "NV8"], [[67868, 67870], "disallowed"], [[67871, 67871], "valid", [], "NV8"], [[67872, 67897], "valid"], [[67898, 67902], "disallowed"], [[67903, 67903], "valid", [], "NV8"], [[67904, 67967], "disallowed"], [[67968, 68023], "valid"], [[68024, 68027], "disallowed"], [[68028, 68029], "valid", [], "NV8"], [[68030, 68031], "valid"], [[68032, 68047], "valid", [], "NV8"], [[68048, 68049], "disallowed"], [[68050, 68095], "valid", [], "NV8"], [[68096, 68099], "valid"], [[68100, 68100], "disallowed"], [[68101, 68102], "valid"], [[68103, 68107], "disallowed"], [[68108, 68115], "valid"], [[68116, 68116], "disallowed"], [[68117, 68119], "valid"], [[68120, 68120], "disallowed"], [[68121, 68147], "valid"], [[68148, 68151], "disallowed"], [[68152, 68154], "valid"], [[68155, 68158], "disallowed"], [[68159, 68159], "valid"], [[68160, 68167], "valid", [], "NV8"], [[68168, 68175], "disallowed"], [[68176, 68184], "valid", [], "NV8"], [[68185, 68191], "disallowed"], [[68192, 68220], "valid"], [[68221, 68223], "valid", [], "NV8"], [[68224, 68252], "valid"], [[68253, 68255], "valid", [], "NV8"], [[68256, 68287], "disallowed"], [[68288, 68295], "valid"], [[68296, 68296], "valid", [], "NV8"], [[68297, 68326], "valid"], [[68327, 68330], "disallowed"], [[68331, 68342], "valid", [], "NV8"], [[68343, 68351], "disallowed"], [[68352, 68405], "valid"], [[68406, 68408], "disallowed"], [[68409, 68415], "valid", [], "NV8"], [[68416, 68437], "valid"], [[68438, 68439], "disallowed"], [[68440, 68447], "valid", [], "NV8"], [[68448, 68466], "valid"], [[68467, 68471], "disallowed"], [[68472, 68479], "valid", [], "NV8"], [[68480, 68497], "valid"], [[68498, 68504], "disallowed"], [[68505, 68508], "valid", [], "NV8"], [[68509, 68520], "disallowed"], [[68521, 68527], "valid", [], "NV8"], [[68528, 68607], "disallowed"], [[68608, 68680], "valid"], [[68681, 68735], "disallowed"], [[68736, 68736], "mapped", [68800]], [[68737, 68737], "mapped", [68801]], [[68738, 68738], "mapped", [68802]], [[68739, 68739], "mapped", [68803]], [[68740, 68740], "mapped", [68804]], [[68741, 68741], "mapped", [68805]], [[68742, 68742], "mapped", [68806]], [[68743, 68743], "mapped", [68807]], [[68744, 68744], "mapped", [68808]], [[68745, 68745], "mapped", [68809]], [[68746, 68746], "mapped", [68810]], [[68747, 68747], "mapped", [68811]], [[68748, 68748], "mapped", [68812]], [[68749, 68749], "mapped", [68813]], [[68750, 68750], "mapped", [68814]], [[68751, 68751], "mapped", [68815]], [[68752, 68752], "mapped", [68816]], [[68753, 68753], "mapped", [68817]], [[68754, 68754], "mapped", [68818]], [[68755, 68755], "mapped", [68819]], [[68756, 68756], "mapped", [68820]], [[68757, 68757], "mapped", [68821]], [[68758, 68758], "mapped", [68822]], [[68759, 68759], "mapped", [68823]], [[68760, 68760], "mapped", [68824]], [[68761, 68761], "mapped", [68825]], [[68762, 68762], "mapped", [68826]], [[68763, 68763], "mapped", [68827]], [[68764, 68764], "mapped", [68828]], [[68765, 68765], "mapped", [68829]], [[68766, 68766], "mapped", [68830]], [[68767, 68767], "mapped", [68831]], [[68768, 68768], "mapped", [68832]], [[68769, 68769], "mapped", [68833]], [[68770, 68770], "mapped", [68834]], [[68771, 68771], "mapped", [68835]], [[68772, 68772], "mapped", [68836]], [[68773, 68773], "mapped", [68837]], [[68774, 68774], "mapped", [68838]], [[68775, 68775], "mapped", [68839]], [[68776, 68776], "mapped", [68840]], [[68777, 68777], "mapped", [68841]], [[68778, 68778], "mapped", [68842]], [[68779, 68779], "mapped", [68843]], [[68780, 68780], "mapped", [68844]], [[68781, 68781], "mapped", [68845]], [[68782, 68782], "mapped", [68846]], [[68783, 68783], "mapped", [68847]], [[68784, 68784], "mapped", [68848]], [[68785, 68785], "mapped", [68849]], [[68786, 68786], "mapped", [68850]], [[68787, 68799], "disallowed"], [[68800, 68850], "valid"], [[68851, 68857], "disallowed"], [[68858, 68863], "valid", [], "NV8"], [[68864, 69215], "disallowed"], [[69216, 69246], "valid", [], "NV8"], [[69247, 69631], "disallowed"], [[69632, 69702], "valid"], [[69703, 69709], "valid", [], "NV8"], [[69710, 69713], "disallowed"], [[69714, 69733], "valid", [], "NV8"], [[69734, 69743], "valid"], [[69744, 69758], "disallowed"], [[69759, 69759], "valid"], [[69760, 69818], "valid"], [[69819, 69820], "valid", [], "NV8"], [[69821, 69821], "disallowed"], [[69822, 69825], "valid", [], "NV8"], [[69826, 69839], "disallowed"], [[69840, 69864], "valid"], [[69865, 69871], "disallowed"], [[69872, 69881], "valid"], [[69882, 69887], "disallowed"], [[69888, 69940], "valid"], [[69941, 69941], "disallowed"], [[69942, 69951], "valid"], [[69952, 69955], "valid", [], "NV8"], [[69956, 69967], "disallowed"], [[69968, 70003], "valid"], [[70004, 70005], "valid", [], "NV8"], [[70006, 70006], "valid"], [[70007, 70015], "disallowed"], [[70016, 70084], "valid"], [[70085, 70088], "valid", [], "NV8"], [[70089, 70089], "valid", [], "NV8"], [[70090, 70092], "valid"], [[70093, 70093], "valid", [], "NV8"], [[70094, 70095], "disallowed"], [[70096, 70105], "valid"], [[70106, 70106], "valid"], [[70107, 70107], "valid", [], "NV8"], [[70108, 70108], "valid"], [[70109, 70111], "valid", [], "NV8"], [[70112, 70112], "disallowed"], [[70113, 70132], "valid", [], "NV8"], [[70133, 70143], "disallowed"], [[70144, 70161], "valid"], [[70162, 70162], "disallowed"], [[70163, 70199], "valid"], [[70200, 70205], "valid", [], "NV8"], [[70206, 70271], "disallowed"], [[70272, 70278], "valid"], [[70279, 70279], "disallowed"], [[70280, 70280], "valid"], [[70281, 70281], "disallowed"], [[70282, 70285], "valid"], [[70286, 70286], "disallowed"], [[70287, 70301], "valid"], [[70302, 70302], "disallowed"], [[70303, 70312], "valid"], [[70313, 70313], "valid", [], "NV8"], [[70314, 70319], "disallowed"], [[70320, 70378], "valid"], [[70379, 70383], "disallowed"], [[70384, 70393], "valid"], [[70394, 70399], "disallowed"], [[70400, 70400], "valid"], [[70401, 70403], "valid"], [[70404, 70404], "disallowed"], [[70405, 70412], "valid"], [[70413, 70414], "disallowed"], [[70415, 70416], "valid"], [[70417, 70418], "disallowed"], [[70419, 70440], "valid"], [[70441, 70441], "disallowed"], [[70442, 70448], "valid"], [[70449, 70449], "disallowed"], [[70450, 70451], "valid"], [[70452, 70452], "disallowed"], [[70453, 70457], "valid"], [[70458, 70459], "disallowed"], [[70460, 70468], "valid"], [[70469, 70470], "disallowed"], [[70471, 70472], "valid"], [[70473, 70474], "disallowed"], [[70475, 70477], "valid"], [[70478, 70479], "disallowed"], [[70480, 70480], "valid"], [[70481, 70486], "disallowed"], [[70487, 70487], "valid"], [[70488, 70492], "disallowed"], [[70493, 70499], "valid"], [[70500, 70501], "disallowed"], [[70502, 70508], "valid"], [[70509, 70511], "disallowed"], [[70512, 70516], "valid"], [[70517, 70783], "disallowed"], [[70784, 70853], "valid"], [[70854, 70854], "valid", [], "NV8"], [[70855, 70855], "valid"], [[70856, 70863], "disallowed"], [[70864, 70873], "valid"], [[70874, 71039], "disallowed"], [[71040, 71093], "valid"], [[71094, 71095], "disallowed"], [[71096, 71104], "valid"], [[71105, 71113], "valid", [], "NV8"], [[71114, 71127], "valid", [], "NV8"], [[71128, 71133], "valid"], [[71134, 71167], "disallowed"], [[71168, 71232], "valid"], [[71233, 71235], "valid", [], "NV8"], [[71236, 71236], "valid"], [[71237, 71247], "disallowed"], [[71248, 71257], "valid"], [[71258, 71295], "disallowed"], [[71296, 71351], "valid"], [[71352, 71359], "disallowed"], [[71360, 71369], "valid"], [[71370, 71423], "disallowed"], [[71424, 71449], "valid"], [[71450, 71452], "disallowed"], [[71453, 71467], "valid"], [[71468, 71471], "disallowed"], [[71472, 71481], "valid"], [[71482, 71487], "valid", [], "NV8"], [[71488, 71839], "disallowed"], [[71840, 71840], "mapped", [71872]], [[71841, 71841], "mapped", [71873]], [[71842, 71842], "mapped", [71874]], [[71843, 71843], "mapped", [71875]], [[71844, 71844], "mapped", [71876]], [[71845, 71845], "mapped", [71877]], [[71846, 71846], "mapped", [71878]], [[71847, 71847], "mapped", [71879]], [[71848, 71848], "mapped", [71880]], [[71849, 71849], "mapped", [71881]], [[71850, 71850], "mapped", [71882]], [[71851, 71851], "mapped", [71883]], [[71852, 71852], "mapped", [71884]], [[71853, 71853], "mapped", [71885]], [[71854, 71854], "mapped", [71886]], [[71855, 71855], "mapped", [71887]], [[71856, 71856], "mapped", [71888]], [[71857, 71857], "mapped", [71889]], [[71858, 71858], "mapped", [71890]], [[71859, 71859], "mapped", [71891]], [[71860, 71860], "mapped", [71892]], [[71861, 71861], "mapped", [71893]], [[71862, 71862], "mapped", [71894]], [[71863, 71863], "mapped", [71895]], [[71864, 71864], "mapped", [71896]], [[71865, 71865], "mapped", [71897]], [[71866, 71866], "mapped", [71898]], [[71867, 71867], "mapped", [71899]], [[71868, 71868], "mapped", [71900]], [[71869, 71869], "mapped", [71901]], [[71870, 71870], "mapped", [71902]], [[71871, 71871], "mapped", [71903]], [[71872, 71913], "valid"], [[71914, 71922], "valid", [], "NV8"], [[71923, 71934], "disallowed"], [[71935, 71935], "valid"], [[71936, 72383], "disallowed"], [[72384, 72440], "valid"], [[72441, 73727], "disallowed"], [[73728, 74606], "valid"], [[74607, 74648], "valid"], [[74649, 74649], "valid"], [[74650, 74751], "disallowed"], [[74752, 74850], "valid", [], "NV8"], [[74851, 74862], "valid", [], "NV8"], [[74863, 74863], "disallowed"], [[74864, 74867], "valid", [], "NV8"], [[74868, 74868], "valid", [], "NV8"], [[74869, 74879], "disallowed"], [[74880, 75075], "valid"], [[75076, 77823], "disallowed"], [[77824, 78894], "valid"], [[78895, 82943], "disallowed"], [[82944, 83526], "valid"], [[83527, 92159], "disallowed"], [[92160, 92728], "valid"], [[92729, 92735], "disallowed"], [[92736, 92766], "valid"], [[92767, 92767], "disallowed"], [[92768, 92777], "valid"], [[92778, 92781], "disallowed"], [[92782, 92783], "valid", [], "NV8"], [[92784, 92879], "disallowed"], [[92880, 92909], "valid"], [[92910, 92911], "disallowed"], [[92912, 92916], "valid"], [[92917, 92917], "valid", [], "NV8"], [[92918, 92927], "disallowed"], [[92928, 92982], "valid"], [[92983, 92991], "valid", [], "NV8"], [[92992, 92995], "valid"], [[92996, 92997], "valid", [], "NV8"], [[92998, 93007], "disallowed"], [[93008, 93017], "valid"], [[93018, 93018], "disallowed"], [[93019, 93025], "valid", [], "NV8"], [[93026, 93026], "disallowed"], [[93027, 93047], "valid"], [[93048, 93052], "disallowed"], [[93053, 93071], "valid"], [[93072, 93951], "disallowed"], [[93952, 94020], "valid"], [[94021, 94031], "disallowed"], [[94032, 94078], "valid"], [[94079, 94094], "disallowed"], [[94095, 94111], "valid"], [[94112, 110591], "disallowed"], [[110592, 110593], "valid"], [[110594, 113663], "disallowed"], [[113664, 113770], "valid"], [[113771, 113775], "disallowed"], [[113776, 113788], "valid"], [[113789, 113791], "disallowed"], [[113792, 113800], "valid"], [[113801, 113807], "disallowed"], [[113808, 113817], "valid"], [[113818, 113819], "disallowed"], [[113820, 113820], "valid", [], "NV8"], [[113821, 113822], "valid"], [[113823, 113823], "valid", [], "NV8"], [[113824, 113827], "ignored"], [[113828, 118783], "disallowed"], [[118784, 119029], "valid", [], "NV8"], [[119030, 119039], "disallowed"], [[119040, 119078], "valid", [], "NV8"], [[119079, 119080], "disallowed"], [[119081, 119081], "valid", [], "NV8"], [[119082, 119133], "valid", [], "NV8"], [[119134, 119134], "mapped", [119127, 119141]], [[119135, 119135], "mapped", [119128, 119141]], [[119136, 119136], "mapped", [119128, 119141, 119150]], [[119137, 119137], "mapped", [119128, 119141, 119151]], [[119138, 119138], "mapped", [119128, 119141, 119152]], [[119139, 119139], "mapped", [119128, 119141, 119153]], [[119140, 119140], "mapped", [119128, 119141, 119154]], [[119141, 119154], "valid", [], "NV8"], [[119155, 119162], "disallowed"], [[119163, 119226], "valid", [], "NV8"], [[119227, 119227], "mapped", [119225, 119141]], [[119228, 119228], "mapped", [119226, 119141]], [[119229, 119229], "mapped", [119225, 119141, 119150]], [[119230, 119230], "mapped", [119226, 119141, 119150]], [[119231, 119231], "mapped", [119225, 119141, 119151]], [[119232, 119232], "mapped", [119226, 119141, 119151]], [[119233, 119261], "valid", [], "NV8"], [[119262, 119272], "valid", [], "NV8"], [[119273, 119295], "disallowed"], [[119296, 119365], "valid", [], "NV8"], [[119366, 119551], "disallowed"], [[119552, 119638], "valid", [], "NV8"], [[119639, 119647], "disallowed"], [[119648, 119665], "valid", [], "NV8"], [[119666, 119807], "disallowed"], [[119808, 119808], "mapped", [97]], [[119809, 119809], "mapped", [98]], [[119810, 119810], "mapped", [99]], [[119811, 119811], "mapped", [100]], [[119812, 119812], "mapped", [101]], [[119813, 119813], "mapped", [102]], [[119814, 119814], "mapped", [103]], [[119815, 119815], "mapped", [104]], [[119816, 119816], "mapped", [105]], [[119817, 119817], "mapped", [106]], [[119818, 119818], "mapped", [107]], [[119819, 119819], "mapped", [108]], [[119820, 119820], "mapped", [109]], [[119821, 119821], "mapped", [110]], [[119822, 119822], "mapped", [111]], [[119823, 119823], "mapped", [112]], [[119824, 119824], "mapped", [113]], [[119825, 119825], "mapped", [114]], [[119826, 119826], "mapped", [115]], [[119827, 119827], "mapped", [116]], [[119828, 119828], "mapped", [117]], [[119829, 119829], "mapped", [118]], [[119830, 119830], "mapped", [119]], [[119831, 119831], "mapped", [120]], [[119832, 119832], "mapped", [121]], [[119833, 119833], "mapped", [122]], [[119834, 119834], "mapped", [97]], [[119835, 119835], "mapped", [98]], [[119836, 119836], "mapped", [99]], [[119837, 119837], "mapped", [100]], [[119838, 119838], "mapped", [101]], [[119839, 119839], "mapped", [102]], [[119840, 119840], "mapped", [103]], [[119841, 119841], "mapped", [104]], [[119842, 119842], "mapped", [105]], [[119843, 119843], "mapped", [106]], [[119844, 119844], "mapped", [107]], [[119845, 119845], "mapped", [108]], [[119846, 119846], "mapped", [109]], [[119847, 119847], "mapped", [110]], [[119848, 119848], "mapped", [111]], [[119849, 119849], "mapped", [112]], [[119850, 119850], "mapped", [113]], [[119851, 119851], "mapped", [114]], [[119852, 119852], "mapped", [115]], [[119853, 119853], "mapped", [116]], [[119854, 119854], "mapped", [117]], [[119855, 119855], "mapped", [118]], [[119856, 119856], "mapped", [119]], [[119857, 119857], "mapped", [120]], [[119858, 119858], "mapped", [121]], [[119859, 119859], "mapped", [122]], [[119860, 119860], "mapped", [97]], [[119861, 119861], "mapped", [98]], [[119862, 119862], "mapped", [99]], [[119863, 119863], "mapped", [100]], [[119864, 119864], "mapped", [101]], [[119865, 119865], "mapped", [102]], [[119866, 119866], "mapped", [103]], [[119867, 119867], "mapped", [104]], [[119868, 119868], "mapped", [105]], [[119869, 119869], "mapped", [106]], [[119870, 119870], "mapped", [107]], [[119871, 119871], "mapped", [108]], [[119872, 119872], "mapped", [109]], [[119873, 119873], "mapped", [110]], [[119874, 119874], "mapped", [111]], [[119875, 119875], "mapped", [112]], [[119876, 119876], "mapped", [113]], [[119877, 119877], "mapped", [114]], [[119878, 119878], "mapped", [115]], [[119879, 119879], "mapped", [116]], [[119880, 119880], "mapped", [117]], [[119881, 119881], "mapped", [118]], [[119882, 119882], "mapped", [119]], [[119883, 119883], "mapped", [120]], [[119884, 119884], "mapped", [121]], [[119885, 119885], "mapped", [122]], [[119886, 119886], "mapped", [97]], [[119887, 119887], "mapped", [98]], [[119888, 119888], "mapped", [99]], [[119889, 119889], "mapped", [100]], [[119890, 119890], "mapped", [101]], [[119891, 119891], "mapped", [102]], [[119892, 119892], "mapped", [103]], [[119893, 119893], "disallowed"], [[119894, 119894], "mapped", [105]], [[119895, 119895], "mapped", [106]], [[119896, 119896], "mapped", [107]], [[119897, 119897], "mapped", [108]], [[119898, 119898], "mapped", [109]], [[119899, 119899], "mapped", [110]], [[119900, 119900], "mapped", [111]], [[119901, 119901], "mapped", [112]], [[119902, 119902], "mapped", [113]], [[119903, 119903], "mapped", [114]], [[119904, 119904], "mapped", [115]], [[119905, 119905], "mapped", [116]], [[119906, 119906], "mapped", [117]], [[119907, 119907], "mapped", [118]], [[119908, 119908], "mapped", [119]], [[119909, 119909], "mapped", [120]], [[119910, 119910], "mapped", [121]], [[119911, 119911], "mapped", [122]], [[119912, 119912], "mapped", [97]], [[119913, 119913], "mapped", [98]], [[119914, 119914], "mapped", [99]], [[119915, 119915], "mapped", [100]], [[119916, 119916], "mapped", [101]], [[119917, 119917], "mapped", [102]], [[119918, 119918], "mapped", [103]], [[119919, 119919], "mapped", [104]], [[119920, 119920], "mapped", [105]], [[119921, 119921], "mapped", [106]], [[119922, 119922], "mapped", [107]], [[119923, 119923], "mapped", [108]], [[119924, 119924], "mapped", [109]], [[119925, 119925], "mapped", [110]], [[119926, 119926], "mapped", [111]], [[119927, 119927], "mapped", [112]], [[119928, 119928], "mapped", [113]], [[119929, 119929], "mapped", [114]], [[119930, 119930], "mapped", [115]], [[119931, 119931], "mapped", [116]], [[119932, 119932], "mapped", [117]], [[119933, 119933], "mapped", [118]], [[119934, 119934], "mapped", [119]], [[119935, 119935], "mapped", [120]], [[119936, 119936], "mapped", [121]], [[119937, 119937], "mapped", [122]], [[119938, 119938], "mapped", [97]], [[119939, 119939], "mapped", [98]], [[119940, 119940], "mapped", [99]], [[119941, 119941], "mapped", [100]], [[119942, 119942], "mapped", [101]], [[119943, 119943], "mapped", [102]], [[119944, 119944], "mapped", [103]], [[119945, 119945], "mapped", [104]], [[119946, 119946], "mapped", [105]], [[119947, 119947], "mapped", [106]], [[119948, 119948], "mapped", [107]], [[119949, 119949], "mapped", [108]], [[119950, 119950], "mapped", [109]], [[119951, 119951], "mapped", [110]], [[119952, 119952], "mapped", [111]], [[119953, 119953], "mapped", [112]], [[119954, 119954], "mapped", [113]], [[119955, 119955], "mapped", [114]], [[119956, 119956], "mapped", [115]], [[119957, 119957], "mapped", [116]], [[119958, 119958], "mapped", [117]], [[119959, 119959], "mapped", [118]], [[119960, 119960], "mapped", [119]], [[119961, 119961], "mapped", [120]], [[119962, 119962], "mapped", [121]], [[119963, 119963], "mapped", [122]], [[119964, 119964], "mapped", [97]], [[119965, 119965], "disallowed"], [[119966, 119966], "mapped", [99]], [[119967, 119967], "mapped", [100]], [[119968, 119969], "disallowed"], [[119970, 119970], "mapped", [103]], [[119971, 119972], "disallowed"], [[119973, 119973], "mapped", [106]], [[119974, 119974], "mapped", [107]], [[119975, 119976], "disallowed"], [[119977, 119977], "mapped", [110]], [[119978, 119978], "mapped", [111]], [[119979, 119979], "mapped", [112]], [[119980, 119980], "mapped", [113]], [[119981, 119981], "disallowed"], [[119982, 119982], "mapped", [115]], [[119983, 119983], "mapped", [116]], [[119984, 119984], "mapped", [117]], [[119985, 119985], "mapped", [118]], [[119986, 119986], "mapped", [119]], [[119987, 119987], "mapped", [120]], [[119988, 119988], "mapped", [121]], [[119989, 119989], "mapped", [122]], [[119990, 119990], "mapped", [97]], [[119991, 119991], "mapped", [98]], [[119992, 119992], "mapped", [99]], [[119993, 119993], "mapped", [100]], [[119994, 119994], "disallowed"], [[119995, 119995], "mapped", [102]], [[119996, 119996], "disallowed"], [[119997, 119997], "mapped", [104]], [[119998, 119998], "mapped", [105]], [[119999, 119999], "mapped", [106]], [[12e4, 12e4], "mapped", [107]], [[120001, 120001], "mapped", [108]], [[120002, 120002], "mapped", [109]], [[120003, 120003], "mapped", [110]], [[120004, 120004], "disallowed"], [[120005, 120005], "mapped", [112]], [[120006, 120006], "mapped", [113]], [[120007, 120007], "mapped", [114]], [[120008, 120008], "mapped", [115]], [[120009, 120009], "mapped", [116]], [[120010, 120010], "mapped", [117]], [[120011, 120011], "mapped", [118]], [[120012, 120012], "mapped", [119]], [[120013, 120013], "mapped", [120]], [[120014, 120014], "mapped", [121]], [[120015, 120015], "mapped", [122]], [[120016, 120016], "mapped", [97]], [[120017, 120017], "mapped", [98]], [[120018, 120018], "mapped", [99]], [[120019, 120019], "mapped", [100]], [[120020, 120020], "mapped", [101]], [[120021, 120021], "mapped", [102]], [[120022, 120022], "mapped", [103]], [[120023, 120023], "mapped", [104]], [[120024, 120024], "mapped", [105]], [[120025, 120025], "mapped", [106]], [[120026, 120026], "mapped", [107]], [[120027, 120027], "mapped", [108]], [[120028, 120028], "mapped", [109]], [[120029, 120029], "mapped", [110]], [[120030, 120030], "mapped", [111]], [[120031, 120031], "mapped", [112]], [[120032, 120032], "mapped", [113]], [[120033, 120033], "mapped", [114]], [[120034, 120034], "mapped", [115]], [[120035, 120035], "mapped", [116]], [[120036, 120036], "mapped", [117]], [[120037, 120037], "mapped", [118]], [[120038, 120038], "mapped", [119]], [[120039, 120039], "mapped", [120]], [[120040, 120040], "mapped", [121]], [[120041, 120041], "mapped", [122]], [[120042, 120042], "mapped", [97]], [[120043, 120043], "mapped", [98]], [[120044, 120044], "mapped", [99]], [[120045, 120045], "mapped", [100]], [[120046, 120046], "mapped", [101]], [[120047, 120047], "mapped", [102]], [[120048, 120048], "mapped", [103]], [[120049, 120049], "mapped", [104]], [[120050, 120050], "mapped", [105]], [[120051, 120051], "mapped", [106]], [[120052, 120052], "mapped", [107]], [[120053, 120053], "mapped", [108]], [[120054, 120054], "mapped", [109]], [[120055, 120055], "mapped", [110]], [[120056, 120056], "mapped", [111]], [[120057, 120057], "mapped", [112]], [[120058, 120058], "mapped", [113]], [[120059, 120059], "mapped", [114]], [[120060, 120060], "mapped", [115]], [[120061, 120061], "mapped", [116]], [[120062, 120062], "mapped", [117]], [[120063, 120063], "mapped", [118]], [[120064, 120064], "mapped", [119]], [[120065, 120065], "mapped", [120]], [[120066, 120066], "mapped", [121]], [[120067, 120067], "mapped", [122]], [[120068, 120068], "mapped", [97]], [[120069, 120069], "mapped", [98]], [[120070, 120070], "disallowed"], [[120071, 120071], "mapped", [100]], [[120072, 120072], "mapped", [101]], [[120073, 120073], "mapped", [102]], [[120074, 120074], "mapped", [103]], [[120075, 120076], "disallowed"], [[120077, 120077], "mapped", [106]], [[120078, 120078], "mapped", [107]], [[120079, 120079], "mapped", [108]], [[120080, 120080], "mapped", [109]], [[120081, 120081], "mapped", [110]], [[120082, 120082], "mapped", [111]], [[120083, 120083], "mapped", [112]], [[120084, 120084], "mapped", [113]], [[120085, 120085], "disallowed"], [[120086, 120086], "mapped", [115]], [[120087, 120087], "mapped", [116]], [[120088, 120088], "mapped", [117]], [[120089, 120089], "mapped", [118]], [[120090, 120090], "mapped", [119]], [[120091, 120091], "mapped", [120]], [[120092, 120092], "mapped", [121]], [[120093, 120093], "disallowed"], [[120094, 120094], "mapped", [97]], [[120095, 120095], "mapped", [98]], [[120096, 120096], "mapped", [99]], [[120097, 120097], "mapped", [100]], [[120098, 120098], "mapped", [101]], [[120099, 120099], "mapped", [102]], [[120100, 120100], "mapped", [103]], [[120101, 120101], "mapped", [104]], [[120102, 120102], "mapped", [105]], [[120103, 120103], "mapped", [106]], [[120104, 120104], "mapped", [107]], [[120105, 120105], "mapped", [108]], [[120106, 120106], "mapped", [109]], [[120107, 120107], "mapped", [110]], [[120108, 120108], "mapped", [111]], [[120109, 120109], "mapped", [112]], [[120110, 120110], "mapped", [113]], [[120111, 120111], "mapped", [114]], [[120112, 120112], "mapped", [115]], [[120113, 120113], "mapped", [116]], [[120114, 120114], "mapped", [117]], [[120115, 120115], "mapped", [118]], [[120116, 120116], "mapped", [119]], [[120117, 120117], "mapped", [120]], [[120118, 120118], "mapped", [121]], [[120119, 120119], "mapped", [122]], [[120120, 120120], "mapped", [97]], [[120121, 120121], "mapped", [98]], [[120122, 120122], "disallowed"], [[120123, 120123], "mapped", [100]], [[120124, 120124], "mapped", [101]], [[120125, 120125], "mapped", [102]], [[120126, 120126], "mapped", [103]], [[120127, 120127], "disallowed"], [[120128, 120128], "mapped", [105]], [[120129, 120129], "mapped", [106]], [[120130, 120130], "mapped", [107]], [[120131, 120131], "mapped", [108]], [[120132, 120132], "mapped", [109]], [[120133, 120133], "disallowed"], [[120134, 120134], "mapped", [111]], [[120135, 120137], "disallowed"], [[120138, 120138], "mapped", [115]], [[120139, 120139], "mapped", [116]], [[120140, 120140], "mapped", [117]], [[120141, 120141], "mapped", [118]], [[120142, 120142], "mapped", [119]], [[120143, 120143], "mapped", [120]], [[120144, 120144], "mapped", [121]], [[120145, 120145], "disallowed"], [[120146, 120146], "mapped", [97]], [[120147, 120147], "mapped", [98]], [[120148, 120148], "mapped", [99]], [[120149, 120149], "mapped", [100]], [[120150, 120150], "mapped", [101]], [[120151, 120151], "mapped", [102]], [[120152, 120152], "mapped", [103]], [[120153, 120153], "mapped", [104]], [[120154, 120154], "mapped", [105]], [[120155, 120155], "mapped", [106]], [[120156, 120156], "mapped", [107]], [[120157, 120157], "mapped", [108]], [[120158, 120158], "mapped", [109]], [[120159, 120159], "mapped", [110]], [[120160, 120160], "mapped", [111]], [[120161, 120161], "mapped", [112]], [[120162, 120162], "mapped", [113]], [[120163, 120163], "mapped", [114]], [[120164, 120164], "mapped", [115]], [[120165, 120165], "mapped", [116]], [[120166, 120166], "mapped", [117]], [[120167, 120167], "mapped", [118]], [[120168, 120168], "mapped", [119]], [[120169, 120169], "mapped", [120]], [[120170, 120170], "mapped", [121]], [[120171, 120171], "mapped", [122]], [[120172, 120172], "mapped", [97]], [[120173, 120173], "mapped", [98]], [[120174, 120174], "mapped", [99]], [[120175, 120175], "mapped", [100]], [[120176, 120176], "mapped", [101]], [[120177, 120177], "mapped", [102]], [[120178, 120178], "mapped", [103]], [[120179, 120179], "mapped", [104]], [[120180, 120180], "mapped", [105]], [[120181, 120181], "mapped", [106]], [[120182, 120182], "mapped", [107]], [[120183, 120183], "mapped", [108]], [[120184, 120184], "mapped", [109]], [[120185, 120185], "mapped", [110]], [[120186, 120186], "mapped", [111]], [[120187, 120187], "mapped", [112]], [[120188, 120188], "mapped", [113]], [[120189, 120189], "mapped", [114]], [[120190, 120190], "mapped", [115]], [[120191, 120191], "mapped", [116]], [[120192, 120192], "mapped", [117]], [[120193, 120193], "mapped", [118]], [[120194, 120194], "mapped", [119]], [[120195, 120195], "mapped", [120]], [[120196, 120196], "mapped", [121]], [[120197, 120197], "mapped", [122]], [[120198, 120198], "mapped", [97]], [[120199, 120199], "mapped", [98]], [[120200, 120200], "mapped", [99]], [[120201, 120201], "mapped", [100]], [[120202, 120202], "mapped", [101]], [[120203, 120203], "mapped", [102]], [[120204, 120204], "mapped", [103]], [[120205, 120205], "mapped", [104]], [[120206, 120206], "mapped", [105]], [[120207, 120207], "mapped", [106]], [[120208, 120208], "mapped", [107]], [[120209, 120209], "mapped", [108]], [[120210, 120210], "mapped", [109]], [[120211, 120211], "mapped", [110]], [[120212, 120212], "mapped", [111]], [[120213, 120213], "mapped", [112]], [[120214, 120214], "mapped", [113]], [[120215, 120215], "mapped", [114]], [[120216, 120216], "mapped", [115]], [[120217, 120217], "mapped", [116]], [[120218, 120218], "mapped", [117]], [[120219, 120219], "mapped", [118]], [[120220, 120220], "mapped", [119]], [[120221, 120221], "mapped", [120]], [[120222, 120222], "mapped", [121]], [[120223, 120223], "mapped", [122]], [[120224, 120224], "mapped", [97]], [[120225, 120225], "mapped", [98]], [[120226, 120226], "mapped", [99]], [[120227, 120227], "mapped", [100]], [[120228, 120228], "mapped", [101]], [[120229, 120229], "mapped", [102]], [[120230, 120230], "mapped", [103]], [[120231, 120231], "mapped", [104]], [[120232, 120232], "mapped", [105]], [[120233, 120233], "mapped", [106]], [[120234, 120234], "mapped", [107]], [[120235, 120235], "mapped", [108]], [[120236, 120236], "mapped", [109]], [[120237, 120237], "mapped", [110]], [[120238, 120238], "mapped", [111]], [[120239, 120239], "mapped", [112]], [[120240, 120240], "mapped", [113]], [[120241, 120241], "mapped", [114]], [[120242, 120242], "mapped", [115]], [[120243, 120243], "mapped", [116]], [[120244, 120244], "mapped", [117]], [[120245, 120245], "mapped", [118]], [[120246, 120246], "mapped", [119]], [[120247, 120247], "mapped", [120]], [[120248, 120248], "mapped", [121]], [[120249, 120249], "mapped", [122]], [[120250, 120250], "mapped", [97]], [[120251, 120251], "mapped", [98]], [[120252, 120252], "mapped", [99]], [[120253, 120253], "mapped", [100]], [[120254, 120254], "mapped", [101]], [[120255, 120255], "mapped", [102]], [[120256, 120256], "mapped", [103]], [[120257, 120257], "mapped", [104]], [[120258, 120258], "mapped", [105]], [[120259, 120259], "mapped", [106]], [[120260, 120260], "mapped", [107]], [[120261, 120261], "mapped", [108]], [[120262, 120262], "mapped", [109]], [[120263, 120263], "mapped", [110]], [[120264, 120264], "mapped", [111]], [[120265, 120265], "mapped", [112]], [[120266, 120266], "mapped", [113]], [[120267, 120267], "mapped", [114]], [[120268, 120268], "mapped", [115]], [[120269, 120269], "mapped", [116]], [[120270, 120270], "mapped", [117]], [[120271, 120271], "mapped", [118]], [[120272, 120272], "mapped", [119]], [[120273, 120273], "mapped", [120]], [[120274, 120274], "mapped", [121]], [[120275, 120275], "mapped", [122]], [[120276, 120276], "mapped", [97]], [[120277, 120277], "mapped", [98]], [[120278, 120278], "mapped", [99]], [[120279, 120279], "mapped", [100]], [[120280, 120280], "mapped", [101]], [[120281, 120281], "mapped", [102]], [[120282, 120282], "mapped", [103]], [[120283, 120283], "mapped", [104]], [[120284, 120284], "mapped", [105]], [[120285, 120285], "mapped", [106]], [[120286, 120286], "mapped", [107]], [[120287, 120287], "mapped", [108]], [[120288, 120288], "mapped", [109]], [[120289, 120289], "mapped", [110]], [[120290, 120290], "mapped", [111]], [[120291, 120291], "mapped", [112]], [[120292, 120292], "mapped", [113]], [[120293, 120293], "mapped", [114]], [[120294, 120294], "mapped", [115]], [[120295, 120295], "mapped", [116]], [[120296, 120296], "mapped", [117]], [[120297, 120297], "mapped", [118]], [[120298, 120298], "mapped", [119]], [[120299, 120299], "mapped", [120]], [[120300, 120300], "mapped", [121]], [[120301, 120301], "mapped", [122]], [[120302, 120302], "mapped", [97]], [[120303, 120303], "mapped", [98]], [[120304, 120304], "mapped", [99]], [[120305, 120305], "mapped", [100]], [[120306, 120306], "mapped", [101]], [[120307, 120307], "mapped", [102]], [[120308, 120308], "mapped", [103]], [[120309, 120309], "mapped", [104]], [[120310, 120310], "mapped", [105]], [[120311, 120311], "mapped", [106]], [[120312, 120312], "mapped", [107]], [[120313, 120313], "mapped", [108]], [[120314, 120314], "mapped", [109]], [[120315, 120315], "mapped", [110]], [[120316, 120316], "mapped", [111]], [[120317, 120317], "mapped", [112]], [[120318, 120318], "mapped", [113]], [[120319, 120319], "mapped", [114]], [[120320, 120320], "mapped", [115]], [[120321, 120321], "mapped", [116]], [[120322, 120322], "mapped", [117]], [[120323, 120323], "mapped", [118]], [[120324, 120324], "mapped", [119]], [[120325, 120325], "mapped", [120]], [[120326, 120326], "mapped", [121]], [[120327, 120327], "mapped", [122]], [[120328, 120328], "mapped", [97]], [[120329, 120329], "mapped", [98]], [[120330, 120330], "mapped", [99]], [[120331, 120331], "mapped", [100]], [[120332, 120332], "mapped", [101]], [[120333, 120333], "mapped", [102]], [[120334, 120334], "mapped", [103]], [[120335, 120335], "mapped", [104]], [[120336, 120336], "mapped", [105]], [[120337, 120337], "mapped", [106]], [[120338, 120338], "mapped", [107]], [[120339, 120339], "mapped", [108]], [[120340, 120340], "mapped", [109]], [[120341, 120341], "mapped", [110]], [[120342, 120342], "mapped", [111]], [[120343, 120343], "mapped", [112]], [[120344, 120344], "mapped", [113]], [[120345, 120345], "mapped", [114]], [[120346, 120346], "mapped", [115]], [[120347, 120347], "mapped", [116]], [[120348, 120348], "mapped", [117]], [[120349, 120349], "mapped", [118]], [[120350, 120350], "mapped", [119]], [[120351, 120351], "mapped", [120]], [[120352, 120352], "mapped", [121]], [[120353, 120353], "mapped", [122]], [[120354, 120354], "mapped", [97]], [[120355, 120355], "mapped", [98]], [[120356, 120356], "mapped", [99]], [[120357, 120357], "mapped", [100]], [[120358, 120358], "mapped", [101]], [[120359, 120359], "mapped", [102]], [[120360, 120360], "mapped", [103]], [[120361, 120361], "mapped", [104]], [[120362, 120362], "mapped", [105]], [[120363, 120363], "mapped", [106]], [[120364, 120364], "mapped", [107]], [[120365, 120365], "mapped", [108]], [[120366, 120366], "mapped", [109]], [[120367, 120367], "mapped", [110]], [[120368, 120368], "mapped", [111]], [[120369, 120369], "mapped", [112]], [[120370, 120370], "mapped", [113]], [[120371, 120371], "mapped", [114]], [[120372, 120372], "mapped", [115]], [[120373, 120373], "mapped", [116]], [[120374, 120374], "mapped", [117]], [[120375, 120375], "mapped", [118]], [[120376, 120376], "mapped", [119]], [[120377, 120377], "mapped", [120]], [[120378, 120378], "mapped", [121]], [[120379, 120379], "mapped", [122]], [[120380, 120380], "mapped", [97]], [[120381, 120381], "mapped", [98]], [[120382, 120382], "mapped", [99]], [[120383, 120383], "mapped", [100]], [[120384, 120384], "mapped", [101]], [[120385, 120385], "mapped", [102]], [[120386, 120386], "mapped", [103]], [[120387, 120387], "mapped", [104]], [[120388, 120388], "mapped", [105]], [[120389, 120389], "mapped", [106]], [[120390, 120390], "mapped", [107]], [[120391, 120391], "mapped", [108]], [[120392, 120392], "mapped", [109]], [[120393, 120393], "mapped", [110]], [[120394, 120394], "mapped", [111]], [[120395, 120395], "mapped", [112]], [[120396, 120396], "mapped", [113]], [[120397, 120397], "mapped", [114]], [[120398, 120398], "mapped", [115]], [[120399, 120399], "mapped", [116]], [[120400, 120400], "mapped", [117]], [[120401, 120401], "mapped", [118]], [[120402, 120402], "mapped", [119]], [[120403, 120403], "mapped", [120]], [[120404, 120404], "mapped", [121]], [[120405, 120405], "mapped", [122]], [[120406, 120406], "mapped", [97]], [[120407, 120407], "mapped", [98]], [[120408, 120408], "mapped", [99]], [[120409, 120409], "mapped", [100]], [[120410, 120410], "mapped", [101]], [[120411, 120411], "mapped", [102]], [[120412, 120412], "mapped", [103]], [[120413, 120413], "mapped", [104]], [[120414, 120414], "mapped", [105]], [[120415, 120415], "mapped", [106]], [[120416, 120416], "mapped", [107]], [[120417, 120417], "mapped", [108]], [[120418, 120418], "mapped", [109]], [[120419, 120419], "mapped", [110]], [[120420, 120420], "mapped", [111]], [[120421, 120421], "mapped", [112]], [[120422, 120422], "mapped", [113]], [[120423, 120423], "mapped", [114]], [[120424, 120424], "mapped", [115]], [[120425, 120425], "mapped", [116]], [[120426, 120426], "mapped", [117]], [[120427, 120427], "mapped", [118]], [[120428, 120428], "mapped", [119]], [[120429, 120429], "mapped", [120]], [[120430, 120430], "mapped", [121]], [[120431, 120431], "mapped", [122]], [[120432, 120432], "mapped", [97]], [[120433, 120433], "mapped", [98]], [[120434, 120434], "mapped", [99]], [[120435, 120435], "mapped", [100]], [[120436, 120436], "mapped", [101]], [[120437, 120437], "mapped", [102]], [[120438, 120438], "mapped", [103]], [[120439, 120439], "mapped", [104]], [[120440, 120440], "mapped", [105]], [[120441, 120441], "mapped", [106]], [[120442, 120442], "mapped", [107]], [[120443, 120443], "mapped", [108]], [[120444, 120444], "mapped", [109]], [[120445, 120445], "mapped", [110]], [[120446, 120446], "mapped", [111]], [[120447, 120447], "mapped", [112]], [[120448, 120448], "mapped", [113]], [[120449, 120449], "mapped", [114]], [[120450, 120450], "mapped", [115]], [[120451, 120451], "mapped", [116]], [[120452, 120452], "mapped", [117]], [[120453, 120453], "mapped", [118]], [[120454, 120454], "mapped", [119]], [[120455, 120455], "mapped", [120]], [[120456, 120456], "mapped", [121]], [[120457, 120457], "mapped", [122]], [[120458, 120458], "mapped", [97]], [[120459, 120459], "mapped", [98]], [[120460, 120460], "mapped", [99]], [[120461, 120461], "mapped", [100]], [[120462, 120462], "mapped", [101]], [[120463, 120463], "mapped", [102]], [[120464, 120464], "mapped", [103]], [[120465, 120465], "mapped", [104]], [[120466, 120466], "mapped", [105]], [[120467, 120467], "mapped", [106]], [[120468, 120468], "mapped", [107]], [[120469, 120469], "mapped", [108]], [[120470, 120470], "mapped", [109]], [[120471, 120471], "mapped", [110]], [[120472, 120472], "mapped", [111]], [[120473, 120473], "mapped", [112]], [[120474, 120474], "mapped", [113]], [[120475, 120475], "mapped", [114]], [[120476, 120476], "mapped", [115]], [[120477, 120477], "mapped", [116]], [[120478, 120478], "mapped", [117]], [[120479, 120479], "mapped", [118]], [[120480, 120480], "mapped", [119]], [[120481, 120481], "mapped", [120]], [[120482, 120482], "mapped", [121]], [[120483, 120483], "mapped", [122]], [[120484, 120484], "mapped", [305]], [[120485, 120485], "mapped", [567]], [[120486, 120487], "disallowed"], [[120488, 120488], "mapped", [945]], [[120489, 120489], "mapped", [946]], [[120490, 120490], "mapped", [947]], [[120491, 120491], "mapped", [948]], [[120492, 120492], "mapped", [949]], [[120493, 120493], "mapped", [950]], [[120494, 120494], "mapped", [951]], [[120495, 120495], "mapped", [952]], [[120496, 120496], "mapped", [953]], [[120497, 120497], "mapped", [954]], [[120498, 120498], "mapped", [955]], [[120499, 120499], "mapped", [956]], [[120500, 120500], "mapped", [957]], [[120501, 120501], "mapped", [958]], [[120502, 120502], "mapped", [959]], [[120503, 120503], "mapped", [960]], [[120504, 120504], "mapped", [961]], [[120505, 120505], "mapped", [952]], [[120506, 120506], "mapped", [963]], [[120507, 120507], "mapped", [964]], [[120508, 120508], "mapped", [965]], [[120509, 120509], "mapped", [966]], [[120510, 120510], "mapped", [967]], [[120511, 120511], "mapped", [968]], [[120512, 120512], "mapped", [969]], [[120513, 120513], "mapped", [8711]], [[120514, 120514], "mapped", [945]], [[120515, 120515], "mapped", [946]], [[120516, 120516], "mapped", [947]], [[120517, 120517], "mapped", [948]], [[120518, 120518], "mapped", [949]], [[120519, 120519], "mapped", [950]], [[120520, 120520], "mapped", [951]], [[120521, 120521], "mapped", [952]], [[120522, 120522], "mapped", [953]], [[120523, 120523], "mapped", [954]], [[120524, 120524], "mapped", [955]], [[120525, 120525], "mapped", [956]], [[120526, 120526], "mapped", [957]], [[120527, 120527], "mapped", [958]], [[120528, 120528], "mapped", [959]], [[120529, 120529], "mapped", [960]], [[120530, 120530], "mapped", [961]], [[120531, 120532], "mapped", [963]], [[120533, 120533], "mapped", [964]], [[120534, 120534], "mapped", [965]], [[120535, 120535], "mapped", [966]], [[120536, 120536], "mapped", [967]], [[120537, 120537], "mapped", [968]], [[120538, 120538], "mapped", [969]], [[120539, 120539], "mapped", [8706]], [[120540, 120540], "mapped", [949]], [[120541, 120541], "mapped", [952]], [[120542, 120542], "mapped", [954]], [[120543, 120543], "mapped", [966]], [[120544, 120544], "mapped", [961]], [[120545, 120545], "mapped", [960]], [[120546, 120546], "mapped", [945]], [[120547, 120547], "mapped", [946]], [[120548, 120548], "mapped", [947]], [[120549, 120549], "mapped", [948]], [[120550, 120550], "mapped", [949]], [[120551, 120551], "mapped", [950]], [[120552, 120552], "mapped", [951]], [[120553, 120553], "mapped", [952]], [[120554, 120554], "mapped", [953]], [[120555, 120555], "mapped", [954]], [[120556, 120556], "mapped", [955]], [[120557, 120557], "mapped", [956]], [[120558, 120558], "mapped", [957]], [[120559, 120559], "mapped", [958]], [[120560, 120560], "mapped", [959]], [[120561, 120561], "mapped", [960]], [[120562, 120562], "mapped", [961]], [[120563, 120563], "mapped", [952]], [[120564, 120564], "mapped", [963]], [[120565, 120565], "mapped", [964]], [[120566, 120566], "mapped", [965]], [[120567, 120567], "mapped", [966]], [[120568, 120568], "mapped", [967]], [[120569, 120569], "mapped", [968]], [[120570, 120570], "mapped", [969]], [[120571, 120571], "mapped", [8711]], [[120572, 120572], "mapped", [945]], [[120573, 120573], "mapped", [946]], [[120574, 120574], "mapped", [947]], [[120575, 120575], "mapped", [948]], [[120576, 120576], "mapped", [949]], [[120577, 120577], "mapped", [950]], [[120578, 120578], "mapped", [951]], [[120579, 120579], "mapped", [952]], [[120580, 120580], "mapped", [953]], [[120581, 120581], "mapped", [954]], [[120582, 120582], "mapped", [955]], [[120583, 120583], "mapped", [956]], [[120584, 120584], "mapped", [957]], [[120585, 120585], "mapped", [958]], [[120586, 120586], "mapped", [959]], [[120587, 120587], "mapped", [960]], [[120588, 120588], "mapped", [961]], [[120589, 120590], "mapped", [963]], [[120591, 120591], "mapped", [964]], [[120592, 120592], "mapped", [965]], [[120593, 120593], "mapped", [966]], [[120594, 120594], "mapped", [967]], [[120595, 120595], "mapped", [968]], [[120596, 120596], "mapped", [969]], [[120597, 120597], "mapped", [8706]], [[120598, 120598], "mapped", [949]], [[120599, 120599], "mapped", [952]], [[120600, 120600], "mapped", [954]], [[120601, 120601], "mapped", [966]], [[120602, 120602], "mapped", [961]], [[120603, 120603], "mapped", [960]], [[120604, 120604], "mapped", [945]], [[120605, 120605], "mapped", [946]], [[120606, 120606], "mapped", [947]], [[120607, 120607], "mapped", [948]], [[120608, 120608], "mapped", [949]], [[120609, 120609], "mapped", [950]], [[120610, 120610], "mapped", [951]], [[120611, 120611], "mapped", [952]], [[120612, 120612], "mapped", [953]], [[120613, 120613], "mapped", [954]], [[120614, 120614], "mapped", [955]], [[120615, 120615], "mapped", [956]], [[120616, 120616], "mapped", [957]], [[120617, 120617], "mapped", [958]], [[120618, 120618], "mapped", [959]], [[120619, 120619], "mapped", [960]], [[120620, 120620], "mapped", [961]], [[120621, 120621], "mapped", [952]], [[120622, 120622], "mapped", [963]], [[120623, 120623], "mapped", [964]], [[120624, 120624], "mapped", [965]], [[120625, 120625], "mapped", [966]], [[120626, 120626], "mapped", [967]], [[120627, 120627], "mapped", [968]], [[120628, 120628], "mapped", [969]], [[120629, 120629], "mapped", [8711]], [[120630, 120630], "mapped", [945]], [[120631, 120631], "mapped", [946]], [[120632, 120632], "mapped", [947]], [[120633, 120633], "mapped", [948]], [[120634, 120634], "mapped", [949]], [[120635, 120635], "mapped", [950]], [[120636, 120636], "mapped", [951]], [[120637, 120637], "mapped", [952]], [[120638, 120638], "mapped", [953]], [[120639, 120639], "mapped", [954]], [[120640, 120640], "mapped", [955]], [[120641, 120641], "mapped", [956]], [[120642, 120642], "mapped", [957]], [[120643, 120643], "mapped", [958]], [[120644, 120644], "mapped", [959]], [[120645, 120645], "mapped", [960]], [[120646, 120646], "mapped", [961]], [[120647, 120648], "mapped", [963]], [[120649, 120649], "mapped", [964]], [[120650, 120650], "mapped", [965]], [[120651, 120651], "mapped", [966]], [[120652, 120652], "mapped", [967]], [[120653, 120653], "mapped", [968]], [[120654, 120654], "mapped", [969]], [[120655, 120655], "mapped", [8706]], [[120656, 120656], "mapped", [949]], [[120657, 120657], "mapped", [952]], [[120658, 120658], "mapped", [954]], [[120659, 120659], "mapped", [966]], [[120660, 120660], "mapped", [961]], [[120661, 120661], "mapped", [960]], [[120662, 120662], "mapped", [945]], [[120663, 120663], "mapped", [946]], [[120664, 120664], "mapped", [947]], [[120665, 120665], "mapped", [948]], [[120666, 120666], "mapped", [949]], [[120667, 120667], "mapped", [950]], [[120668, 120668], "mapped", [951]], [[120669, 120669], "mapped", [952]], [[120670, 120670], "mapped", [953]], [[120671, 120671], "mapped", [954]], [[120672, 120672], "mapped", [955]], [[120673, 120673], "mapped", [956]], [[120674, 120674], "mapped", [957]], [[120675, 120675], "mapped", [958]], [[120676, 120676], "mapped", [959]], [[120677, 120677], "mapped", [960]], [[120678, 120678], "mapped", [961]], [[120679, 120679], "mapped", [952]], [[120680, 120680], "mapped", [963]], [[120681, 120681], "mapped", [964]], [[120682, 120682], "mapped", [965]], [[120683, 120683], "mapped", [966]], [[120684, 120684], "mapped", [967]], [[120685, 120685], "mapped", [968]], [[120686, 120686], "mapped", [969]], [[120687, 120687], "mapped", [8711]], [[120688, 120688], "mapped", [945]], [[120689, 120689], "mapped", [946]], [[120690, 120690], "mapped", [947]], [[120691, 120691], "mapped", [948]], [[120692, 120692], "mapped", [949]], [[120693, 120693], "mapped", [950]], [[120694, 120694], "mapped", [951]], [[120695, 120695], "mapped", [952]], [[120696, 120696], "mapped", [953]], [[120697, 120697], "mapped", [954]], [[120698, 120698], "mapped", [955]], [[120699, 120699], "mapped", [956]], [[120700, 120700], "mapped", [957]], [[120701, 120701], "mapped", [958]], [[120702, 120702], "mapped", [959]], [[120703, 120703], "mapped", [960]], [[120704, 120704], "mapped", [961]], [[120705, 120706], "mapped", [963]], [[120707, 120707], "mapped", [964]], [[120708, 120708], "mapped", [965]], [[120709, 120709], "mapped", [966]], [[120710, 120710], "mapped", [967]], [[120711, 120711], "mapped", [968]], [[120712, 120712], "mapped", [969]], [[120713, 120713], "mapped", [8706]], [[120714, 120714], "mapped", [949]], [[120715, 120715], "mapped", [952]], [[120716, 120716], "mapped", [954]], [[120717, 120717], "mapped", [966]], [[120718, 120718], "mapped", [961]], [[120719, 120719], "mapped", [960]], [[120720, 120720], "mapped", [945]], [[120721, 120721], "mapped", [946]], [[120722, 120722], "mapped", [947]], [[120723, 120723], "mapped", [948]], [[120724, 120724], "mapped", [949]], [[120725, 120725], "mapped", [950]], [[120726, 120726], "mapped", [951]], [[120727, 120727], "mapped", [952]], [[120728, 120728], "mapped", [953]], [[120729, 120729], "mapped", [954]], [[120730, 120730], "mapped", [955]], [[120731, 120731], "mapped", [956]], [[120732, 120732], "mapped", [957]], [[120733, 120733], "mapped", [958]], [[120734, 120734], "mapped", [959]], [[120735, 120735], "mapped", [960]], [[120736, 120736], "mapped", [961]], [[120737, 120737], "mapped", [952]], [[120738, 120738], "mapped", [963]], [[120739, 120739], "mapped", [964]], [[120740, 120740], "mapped", [965]], [[120741, 120741], "mapped", [966]], [[120742, 120742], "mapped", [967]], [[120743, 120743], "mapped", [968]], [[120744, 120744], "mapped", [969]], [[120745, 120745], "mapped", [8711]], [[120746, 120746], "mapped", [945]], [[120747, 120747], "mapped", [946]], [[120748, 120748], "mapped", [947]], [[120749, 120749], "mapped", [948]], [[120750, 120750], "mapped", [949]], [[120751, 120751], "mapped", [950]], [[120752, 120752], "mapped", [951]], [[120753, 120753], "mapped", [952]], [[120754, 120754], "mapped", [953]], [[120755, 120755], "mapped", [954]], [[120756, 120756], "mapped", [955]], [[120757, 120757], "mapped", [956]], [[120758, 120758], "mapped", [957]], [[120759, 120759], "mapped", [958]], [[120760, 120760], "mapped", [959]], [[120761, 120761], "mapped", [960]], [[120762, 120762], "mapped", [961]], [[120763, 120764], "mapped", [963]], [[120765, 120765], "mapped", [964]], [[120766, 120766], "mapped", [965]], [[120767, 120767], "mapped", [966]], [[120768, 120768], "mapped", [967]], [[120769, 120769], "mapped", [968]], [[120770, 120770], "mapped", [969]], [[120771, 120771], "mapped", [8706]], [[120772, 120772], "mapped", [949]], [[120773, 120773], "mapped", [952]], [[120774, 120774], "mapped", [954]], [[120775, 120775], "mapped", [966]], [[120776, 120776], "mapped", [961]], [[120777, 120777], "mapped", [960]], [[120778, 120779], "mapped", [989]], [[120780, 120781], "disallowed"], [[120782, 120782], "mapped", [48]], [[120783, 120783], "mapped", [49]], [[120784, 120784], "mapped", [50]], [[120785, 120785], "mapped", [51]], [[120786, 120786], "mapped", [52]], [[120787, 120787], "mapped", [53]], [[120788, 120788], "mapped", [54]], [[120789, 120789], "mapped", [55]], [[120790, 120790], "mapped", [56]], [[120791, 120791], "mapped", [57]], [[120792, 120792], "mapped", [48]], [[120793, 120793], "mapped", [49]], [[120794, 120794], "mapped", [50]], [[120795, 120795], "mapped", [51]], [[120796, 120796], "mapped", [52]], [[120797, 120797], "mapped", [53]], [[120798, 120798], "mapped", [54]], [[120799, 120799], "mapped", [55]], [[120800, 120800], "mapped", [56]], [[120801, 120801], "mapped", [57]], [[120802, 120802], "mapped", [48]], [[120803, 120803], "mapped", [49]], [[120804, 120804], "mapped", [50]], [[120805, 120805], "mapped", [51]], [[120806, 120806], "mapped", [52]], [[120807, 120807], "mapped", [53]], [[120808, 120808], "mapped", [54]], [[120809, 120809], "mapped", [55]], [[120810, 120810], "mapped", [56]], [[120811, 120811], "mapped", [57]], [[120812, 120812], "mapped", [48]], [[120813, 120813], "mapped", [49]], [[120814, 120814], "mapped", [50]], [[120815, 120815], "mapped", [51]], [[120816, 120816], "mapped", [52]], [[120817, 120817], "mapped", [53]], [[120818, 120818], "mapped", [54]], [[120819, 120819], "mapped", [55]], [[120820, 120820], "mapped", [56]], [[120821, 120821], "mapped", [57]], [[120822, 120822], "mapped", [48]], [[120823, 120823], "mapped", [49]], [[120824, 120824], "mapped", [50]], [[120825, 120825], "mapped", [51]], [[120826, 120826], "mapped", [52]], [[120827, 120827], "mapped", [53]], [[120828, 120828], "mapped", [54]], [[120829, 120829], "mapped", [55]], [[120830, 120830], "mapped", [56]], [[120831, 120831], "mapped", [57]], [[120832, 121343], "valid", [], "NV8"], [[121344, 121398], "valid"], [[121399, 121402], "valid", [], "NV8"], [[121403, 121452], "valid"], [[121453, 121460], "valid", [], "NV8"], [[121461, 121461], "valid"], [[121462, 121475], "valid", [], "NV8"], [[121476, 121476], "valid"], [[121477, 121483], "valid", [], "NV8"], [[121484, 121498], "disallowed"], [[121499, 121503], "valid"], [[121504, 121504], "disallowed"], [[121505, 121519], "valid"], [[121520, 124927], "disallowed"], [[124928, 125124], "valid"], [[125125, 125126], "disallowed"], [[125127, 125135], "valid", [], "NV8"], [[125136, 125142], "valid"], [[125143, 126463], "disallowed"], [[126464, 126464], "mapped", [1575]], [[126465, 126465], "mapped", [1576]], [[126466, 126466], "mapped", [1580]], [[126467, 126467], "mapped", [1583]], [[126468, 126468], "disallowed"], [[126469, 126469], "mapped", [1608]], [[126470, 126470], "mapped", [1586]], [[126471, 126471], "mapped", [1581]], [[126472, 126472], "mapped", [1591]], [[126473, 126473], "mapped", [1610]], [[126474, 126474], "mapped", [1603]], [[126475, 126475], "mapped", [1604]], [[126476, 126476], "mapped", [1605]], [[126477, 126477], "mapped", [1606]], [[126478, 126478], "mapped", [1587]], [[126479, 126479], "mapped", [1593]], [[126480, 126480], "mapped", [1601]], [[126481, 126481], "mapped", [1589]], [[126482, 126482], "mapped", [1602]], [[126483, 126483], "mapped", [1585]], [[126484, 126484], "mapped", [1588]], [[126485, 126485], "mapped", [1578]], [[126486, 126486], "mapped", [1579]], [[126487, 126487], "mapped", [1582]], [[126488, 126488], "mapped", [1584]], [[126489, 126489], "mapped", [1590]], [[126490, 126490], "mapped", [1592]], [[126491, 126491], "mapped", [1594]], [[126492, 126492], "mapped", [1646]], [[126493, 126493], "mapped", [1722]], [[126494, 126494], "mapped", [1697]], [[126495, 126495], "mapped", [1647]], [[126496, 126496], "disallowed"], [[126497, 126497], "mapped", [1576]], [[126498, 126498], "mapped", [1580]], [[126499, 126499], "disallowed"], [[126500, 126500], "mapped", [1607]], [[126501, 126502], "disallowed"], [[126503, 126503], "mapped", [1581]], [[126504, 126504], "disallowed"], [[126505, 126505], "mapped", [1610]], [[126506, 126506], "mapped", [1603]], [[126507, 126507], "mapped", [1604]], [[126508, 126508], "mapped", [1605]], [[126509, 126509], "mapped", [1606]], [[126510, 126510], "mapped", [1587]], [[126511, 126511], "mapped", [1593]], [[126512, 126512], "mapped", [1601]], [[126513, 126513], "mapped", [1589]], [[126514, 126514], "mapped", [1602]], [[126515, 126515], "disallowed"], [[126516, 126516], "mapped", [1588]], [[126517, 126517], "mapped", [1578]], [[126518, 126518], "mapped", [1579]], [[126519, 126519], "mapped", [1582]], [[126520, 126520], "disallowed"], [[126521, 126521], "mapped", [1590]], [[126522, 126522], "disallowed"], [[126523, 126523], "mapped", [1594]], [[126524, 126529], "disallowed"], [[126530, 126530], "mapped", [1580]], [[126531, 126534], "disallowed"], [[126535, 126535], "mapped", [1581]], [[126536, 126536], "disallowed"], [[126537, 126537], "mapped", [1610]], [[126538, 126538], "disallowed"], [[126539, 126539], "mapped", [1604]], [[126540, 126540], "disallowed"], [[126541, 126541], "mapped", [1606]], [[126542, 126542], "mapped", [1587]], [[126543, 126543], "mapped", [1593]], [[126544, 126544], "disallowed"], [[126545, 126545], "mapped", [1589]], [[126546, 126546], "mapped", [1602]], [[126547, 126547], "disallowed"], [[126548, 126548], "mapped", [1588]], [[126549, 126550], "disallowed"], [[126551, 126551], "mapped", [1582]], [[126552, 126552], "disallowed"], [[126553, 126553], "mapped", [1590]], [[126554, 126554], "disallowed"], [[126555, 126555], "mapped", [1594]], [[126556, 126556], "disallowed"], [[126557, 126557], "mapped", [1722]], [[126558, 126558], "disallowed"], [[126559, 126559], "mapped", [1647]], [[126560, 126560], "disallowed"], [[126561, 126561], "mapped", [1576]], [[126562, 126562], "mapped", [1580]], [[126563, 126563], "disallowed"], [[126564, 126564], "mapped", [1607]], [[126565, 126566], "disallowed"], [[126567, 126567], "mapped", [1581]], [[126568, 126568], "mapped", [1591]], [[126569, 126569], "mapped", [1610]], [[126570, 126570], "mapped", [1603]], [[126571, 126571], "disallowed"], [[126572, 126572], "mapped", [1605]], [[126573, 126573], "mapped", [1606]], [[126574, 126574], "mapped", [1587]], [[126575, 126575], "mapped", [1593]], [[126576, 126576], "mapped", [1601]], [[126577, 126577], "mapped", [1589]], [[126578, 126578], "mapped", [1602]], [[126579, 126579], "disallowed"], [[126580, 126580], "mapped", [1588]], [[126581, 126581], "mapped", [1578]], [[126582, 126582], "mapped", [1579]], [[126583, 126583], "mapped", [1582]], [[126584, 126584], "disallowed"], [[126585, 126585], "mapped", [1590]], [[126586, 126586], "mapped", [1592]], [[126587, 126587], "mapped", [1594]], [[126588, 126588], "mapped", [1646]], [[126589, 126589], "disallowed"], [[126590, 126590], "mapped", [1697]], [[126591, 126591], "disallowed"], [[126592, 126592], "mapped", [1575]], [[126593, 126593], "mapped", [1576]], [[126594, 126594], "mapped", [1580]], [[126595, 126595], "mapped", [1583]], [[126596, 126596], "mapped", [1607]], [[126597, 126597], "mapped", [1608]], [[126598, 126598], "mapped", [1586]], [[126599, 126599], "mapped", [1581]], [[126600, 126600], "mapped", [1591]], [[126601, 126601], "mapped", [1610]], [[126602, 126602], "disallowed"], [[126603, 126603], "mapped", [1604]], [[126604, 126604], "mapped", [1605]], [[126605, 126605], "mapped", [1606]], [[126606, 126606], "mapped", [1587]], [[126607, 126607], "mapped", [1593]], [[126608, 126608], "mapped", [1601]], [[126609, 126609], "mapped", [1589]], [[126610, 126610], "mapped", [1602]], [[126611, 126611], "mapped", [1585]], [[126612, 126612], "mapped", [1588]], [[126613, 126613], "mapped", [1578]], [[126614, 126614], "mapped", [1579]], [[126615, 126615], "mapped", [1582]], [[126616, 126616], "mapped", [1584]], [[126617, 126617], "mapped", [1590]], [[126618, 126618], "mapped", [1592]], [[126619, 126619], "mapped", [1594]], [[126620, 126624], "disallowed"], [[126625, 126625], "mapped", [1576]], [[126626, 126626], "mapped", [1580]], [[126627, 126627], "mapped", [1583]], [[126628, 126628], "disallowed"], [[126629, 126629], "mapped", [1608]], [[126630, 126630], "mapped", [1586]], [[126631, 126631], "mapped", [1581]], [[126632, 126632], "mapped", [1591]], [[126633, 126633], "mapped", [1610]], [[126634, 126634], "disallowed"], [[126635, 126635], "mapped", [1604]], [[126636, 126636], "mapped", [1605]], [[126637, 126637], "mapped", [1606]], [[126638, 126638], "mapped", [1587]], [[126639, 126639], "mapped", [1593]], [[126640, 126640], "mapped", [1601]], [[126641, 126641], "mapped", [1589]], [[126642, 126642], "mapped", [1602]], [[126643, 126643], "mapped", [1585]], [[126644, 126644], "mapped", [1588]], [[126645, 126645], "mapped", [1578]], [[126646, 126646], "mapped", [1579]], [[126647, 126647], "mapped", [1582]], [[126648, 126648], "mapped", [1584]], [[126649, 126649], "mapped", [1590]], [[126650, 126650], "mapped", [1592]], [[126651, 126651], "mapped", [1594]], [[126652, 126703], "disallowed"], [[126704, 126705], "valid", [], "NV8"], [[126706, 126975], "disallowed"], [[126976, 127019], "valid", [], "NV8"], [[127020, 127023], "disallowed"], [[127024, 127123], "valid", [], "NV8"], [[127124, 127135], "disallowed"], [[127136, 127150], "valid", [], "NV8"], [[127151, 127152], "disallowed"], [[127153, 127166], "valid", [], "NV8"], [[127167, 127167], "valid", [], "NV8"], [[127168, 127168], "disallowed"], [[127169, 127183], "valid", [], "NV8"], [[127184, 127184], "disallowed"], [[127185, 127199], "valid", [], "NV8"], [[127200, 127221], "valid", [], "NV8"], [[127222, 127231], "disallowed"], [[127232, 127232], "disallowed"], [[127233, 127233], "disallowed_STD3_mapped", [48, 44]], [[127234, 127234], "disallowed_STD3_mapped", [49, 44]], [[127235, 127235], "disallowed_STD3_mapped", [50, 44]], [[127236, 127236], "disallowed_STD3_mapped", [51, 44]], [[127237, 127237], "disallowed_STD3_mapped", [52, 44]], [[127238, 127238], "disallowed_STD3_mapped", [53, 44]], [[127239, 127239], "disallowed_STD3_mapped", [54, 44]], [[127240, 127240], "disallowed_STD3_mapped", [55, 44]], [[127241, 127241], "disallowed_STD3_mapped", [56, 44]], [[127242, 127242], "disallowed_STD3_mapped", [57, 44]], [[127243, 127244], "valid", [], "NV8"], [[127245, 127247], "disallowed"], [[127248, 127248], "disallowed_STD3_mapped", [40, 97, 41]], [[127249, 127249], "disallowed_STD3_mapped", [40, 98, 41]], [[127250, 127250], "disallowed_STD3_mapped", [40, 99, 41]], [[127251, 127251], "disallowed_STD3_mapped", [40, 100, 41]], [[127252, 127252], "disallowed_STD3_mapped", [40, 101, 41]], [[127253, 127253], "disallowed_STD3_mapped", [40, 102, 41]], [[127254, 127254], "disallowed_STD3_mapped", [40, 103, 41]], [[127255, 127255], "disallowed_STD3_mapped", [40, 104, 41]], [[127256, 127256], "disallowed_STD3_mapped", [40, 105, 41]], [[127257, 127257], "disallowed_STD3_mapped", [40, 106, 41]], [[127258, 127258], "disallowed_STD3_mapped", [40, 107, 41]], [[127259, 127259], "disallowed_STD3_mapped", [40, 108, 41]], [[127260, 127260], "disallowed_STD3_mapped", [40, 109, 41]], [[127261, 127261], "disallowed_STD3_mapped", [40, 110, 41]], [[127262, 127262], "disallowed_STD3_mapped", [40, 111, 41]], [[127263, 127263], "disallowed_STD3_mapped", [40, 112, 41]], [[127264, 127264], "disallowed_STD3_mapped", [40, 113, 41]], [[127265, 127265], "disallowed_STD3_mapped", [40, 114, 41]], [[127266, 127266], "disallowed_STD3_mapped", [40, 115, 41]], [[127267, 127267], "disallowed_STD3_mapped", [40, 116, 41]], [[127268, 127268], "disallowed_STD3_mapped", [40, 117, 41]], [[127269, 127269], "disallowed_STD3_mapped", [40, 118, 41]], [[127270, 127270], "disallowed_STD3_mapped", [40, 119, 41]], [[127271, 127271], "disallowed_STD3_mapped", [40, 120, 41]], [[127272, 127272], "disallowed_STD3_mapped", [40, 121, 41]], [[127273, 127273], "disallowed_STD3_mapped", [40, 122, 41]], [[127274, 127274], "mapped", [12308, 115, 12309]], [[127275, 127275], "mapped", [99]], [[127276, 127276], "mapped", [114]], [[127277, 127277], "mapped", [99, 100]], [[127278, 127278], "mapped", [119, 122]], [[127279, 127279], "disallowed"], [[127280, 127280], "mapped", [97]], [[127281, 127281], "mapped", [98]], [[127282, 127282], "mapped", [99]], [[127283, 127283], "mapped", [100]], [[127284, 127284], "mapped", [101]], [[127285, 127285], "mapped", [102]], [[127286, 127286], "mapped", [103]], [[127287, 127287], "mapped", [104]], [[127288, 127288], "mapped", [105]], [[127289, 127289], "mapped", [106]], [[127290, 127290], "mapped", [107]], [[127291, 127291], "mapped", [108]], [[127292, 127292], "mapped", [109]], [[127293, 127293], "mapped", [110]], [[127294, 127294], "mapped", [111]], [[127295, 127295], "mapped", [112]], [[127296, 127296], "mapped", [113]], [[127297, 127297], "mapped", [114]], [[127298, 127298], "mapped", [115]], [[127299, 127299], "mapped", [116]], [[127300, 127300], "mapped", [117]], [[127301, 127301], "mapped", [118]], [[127302, 127302], "mapped", [119]], [[127303, 127303], "mapped", [120]], [[127304, 127304], "mapped", [121]], [[127305, 127305], "mapped", [122]], [[127306, 127306], "mapped", [104, 118]], [[127307, 127307], "mapped", [109, 118]], [[127308, 127308], "mapped", [115, 100]], [[127309, 127309], "mapped", [115, 115]], [[127310, 127310], "mapped", [112, 112, 118]], [[127311, 127311], "mapped", [119, 99]], [[127312, 127318], "valid", [], "NV8"], [[127319, 127319], "valid", [], "NV8"], [[127320, 127326], "valid", [], "NV8"], [[127327, 127327], "valid", [], "NV8"], [[127328, 127337], "valid", [], "NV8"], [[127338, 127338], "mapped", [109, 99]], [[127339, 127339], "mapped", [109, 100]], [[127340, 127343], "disallowed"], [[127344, 127352], "valid", [], "NV8"], [[127353, 127353], "valid", [], "NV8"], [[127354, 127354], "valid", [], "NV8"], [[127355, 127356], "valid", [], "NV8"], [[127357, 127358], "valid", [], "NV8"], [[127359, 127359], "valid", [], "NV8"], [[127360, 127369], "valid", [], "NV8"], [[127370, 127373], "valid", [], "NV8"], [[127374, 127375], "valid", [], "NV8"], [[127376, 127376], "mapped", [100, 106]], [[127377, 127386], "valid", [], "NV8"], [[127387, 127461], "disallowed"], [[127462, 127487], "valid", [], "NV8"], [[127488, 127488], "mapped", [12411, 12363]], [[127489, 127489], "mapped", [12467, 12467]], [[127490, 127490], "mapped", [12469]], [[127491, 127503], "disallowed"], [[127504, 127504], "mapped", [25163]], [[127505, 127505], "mapped", [23383]], [[127506, 127506], "mapped", [21452]], [[127507, 127507], "mapped", [12487]], [[127508, 127508], "mapped", [20108]], [[127509, 127509], "mapped", [22810]], [[127510, 127510], "mapped", [35299]], [[127511, 127511], "mapped", [22825]], [[127512, 127512], "mapped", [20132]], [[127513, 127513], "mapped", [26144]], [[127514, 127514], "mapped", [28961]], [[127515, 127515], "mapped", [26009]], [[127516, 127516], "mapped", [21069]], [[127517, 127517], "mapped", [24460]], [[127518, 127518], "mapped", [20877]], [[127519, 127519], "mapped", [26032]], [[127520, 127520], "mapped", [21021]], [[127521, 127521], "mapped", [32066]], [[127522, 127522], "mapped", [29983]], [[127523, 127523], "mapped", [36009]], [[127524, 127524], "mapped", [22768]], [[127525, 127525], "mapped", [21561]], [[127526, 127526], "mapped", [28436]], [[127527, 127527], "mapped", [25237]], [[127528, 127528], "mapped", [25429]], [[127529, 127529], "mapped", [19968]], [[127530, 127530], "mapped", [19977]], [[127531, 127531], "mapped", [36938]], [[127532, 127532], "mapped", [24038]], [[127533, 127533], "mapped", [20013]], [[127534, 127534], "mapped", [21491]], [[127535, 127535], "mapped", [25351]], [[127536, 127536], "mapped", [36208]], [[127537, 127537], "mapped", [25171]], [[127538, 127538], "mapped", [31105]], [[127539, 127539], "mapped", [31354]], [[127540, 127540], "mapped", [21512]], [[127541, 127541], "mapped", [28288]], [[127542, 127542], "mapped", [26377]], [[127543, 127543], "mapped", [26376]], [[127544, 127544], "mapped", [30003]], [[127545, 127545], "mapped", [21106]], [[127546, 127546], "mapped", [21942]], [[127547, 127551], "disallowed"], [[127552, 127552], "mapped", [12308, 26412, 12309]], [[127553, 127553], "mapped", [12308, 19977, 12309]], [[127554, 127554], "mapped", [12308, 20108, 12309]], [[127555, 127555], "mapped", [12308, 23433, 12309]], [[127556, 127556], "mapped", [12308, 28857, 12309]], [[127557, 127557], "mapped", [12308, 25171, 12309]], [[127558, 127558], "mapped", [12308, 30423, 12309]], [[127559, 127559], "mapped", [12308, 21213, 12309]], [[127560, 127560], "mapped", [12308, 25943, 12309]], [[127561, 127567], "disallowed"], [[127568, 127568], "mapped", [24471]], [[127569, 127569], "mapped", [21487]], [[127570, 127743], "disallowed"], [[127744, 127776], "valid", [], "NV8"], [[127777, 127788], "valid", [], "NV8"], [[127789, 127791], "valid", [], "NV8"], [[127792, 127797], "valid", [], "NV8"], [[127798, 127798], "valid", [], "NV8"], [[127799, 127868], "valid", [], "NV8"], [[127869, 127869], "valid", [], "NV8"], [[127870, 127871], "valid", [], "NV8"], [[127872, 127891], "valid", [], "NV8"], [[127892, 127903], "valid", [], "NV8"], [[127904, 127940], "valid", [], "NV8"], [[127941, 127941], "valid", [], "NV8"], [[127942, 127946], "valid", [], "NV8"], [[127947, 127950], "valid", [], "NV8"], [[127951, 127955], "valid", [], "NV8"], [[127956, 127967], "valid", [], "NV8"], [[127968, 127984], "valid", [], "NV8"], [[127985, 127991], "valid", [], "NV8"], [[127992, 127999], "valid", [], "NV8"], [[128e3, 128062], "valid", [], "NV8"], [[128063, 128063], "valid", [], "NV8"], [[128064, 128064], "valid", [], "NV8"], [[128065, 128065], "valid", [], "NV8"], [[128066, 128247], "valid", [], "NV8"], [[128248, 128248], "valid", [], "NV8"], [[128249, 128252], "valid", [], "NV8"], [[128253, 128254], "valid", [], "NV8"], [[128255, 128255], "valid", [], "NV8"], [[128256, 128317], "valid", [], "NV8"], [[128318, 128319], "valid", [], "NV8"], [[128320, 128323], "valid", [], "NV8"], [[128324, 128330], "valid", [], "NV8"], [[128331, 128335], "valid", [], "NV8"], [[128336, 128359], "valid", [], "NV8"], [[128360, 128377], "valid", [], "NV8"], [[128378, 128378], "disallowed"], [[128379, 128419], "valid", [], "NV8"], [[128420, 128420], "disallowed"], [[128421, 128506], "valid", [], "NV8"], [[128507, 128511], "valid", [], "NV8"], [[128512, 128512], "valid", [], "NV8"], [[128513, 128528], "valid", [], "NV8"], [[128529, 128529], "valid", [], "NV8"], [[128530, 128532], "valid", [], "NV8"], [[128533, 128533], "valid", [], "NV8"], [[128534, 128534], "valid", [], "NV8"], [[128535, 128535], "valid", [], "NV8"], [[128536, 128536], "valid", [], "NV8"], [[128537, 128537], "valid", [], "NV8"], [[128538, 128538], "valid", [], "NV8"], [[128539, 128539], "valid", [], "NV8"], [[128540, 128542], "valid", [], "NV8"], [[128543, 128543], "valid", [], "NV8"], [[128544, 128549], "valid", [], "NV8"], [[128550, 128551], "valid", [], "NV8"], [[128552, 128555], "valid", [], "NV8"], [[128556, 128556], "valid", [], "NV8"], [[128557, 128557], "valid", [], "NV8"], [[128558, 128559], "valid", [], "NV8"], [[128560, 128563], "valid", [], "NV8"], [[128564, 128564], "valid", [], "NV8"], [[128565, 128576], "valid", [], "NV8"], [[128577, 128578], "valid", [], "NV8"], [[128579, 128580], "valid", [], "NV8"], [[128581, 128591], "valid", [], "NV8"], [[128592, 128639], "valid", [], "NV8"], [[128640, 128709], "valid", [], "NV8"], [[128710, 128719], "valid", [], "NV8"], [[128720, 128720], "valid", [], "NV8"], [[128721, 128735], "disallowed"], [[128736, 128748], "valid", [], "NV8"], [[128749, 128751], "disallowed"], [[128752, 128755], "valid", [], "NV8"], [[128756, 128767], "disallowed"], [[128768, 128883], "valid", [], "NV8"], [[128884, 128895], "disallowed"], [[128896, 128980], "valid", [], "NV8"], [[128981, 129023], "disallowed"], [[129024, 129035], "valid", [], "NV8"], [[129036, 129039], "disallowed"], [[129040, 129095], "valid", [], "NV8"], [[129096, 129103], "disallowed"], [[129104, 129113], "valid", [], "NV8"], [[129114, 129119], "disallowed"], [[129120, 129159], "valid", [], "NV8"], [[129160, 129167], "disallowed"], [[129168, 129197], "valid", [], "NV8"], [[129198, 129295], "disallowed"], [[129296, 129304], "valid", [], "NV8"], [[129305, 129407], "disallowed"], [[129408, 129412], "valid", [], "NV8"], [[129413, 129471], "disallowed"], [[129472, 129472], "valid", [], "NV8"], [[129473, 131069], "disallowed"], [[131070, 131071], "disallowed"], [[131072, 173782], "valid"], [[173783, 173823], "disallowed"], [[173824, 177972], "valid"], [[177973, 177983], "disallowed"], [[177984, 178205], "valid"], [[178206, 178207], "disallowed"], [[178208, 183969], "valid"], [[183970, 194559], "disallowed"], [[194560, 194560], "mapped", [20029]], [[194561, 194561], "mapped", [20024]], [[194562, 194562], "mapped", [20033]], [[194563, 194563], "mapped", [131362]], [[194564, 194564], "mapped", [20320]], [[194565, 194565], "mapped", [20398]], [[194566, 194566], "mapped", [20411]], [[194567, 194567], "mapped", [20482]], [[194568, 194568], "mapped", [20602]], [[194569, 194569], "mapped", [20633]], [[194570, 194570], "mapped", [20711]], [[194571, 194571], "mapped", [20687]], [[194572, 194572], "mapped", [13470]], [[194573, 194573], "mapped", [132666]], [[194574, 194574], "mapped", [20813]], [[194575, 194575], "mapped", [20820]], [[194576, 194576], "mapped", [20836]], [[194577, 194577], "mapped", [20855]], [[194578, 194578], "mapped", [132380]], [[194579, 194579], "mapped", [13497]], [[194580, 194580], "mapped", [20839]], [[194581, 194581], "mapped", [20877]], [[194582, 194582], "mapped", [132427]], [[194583, 194583], "mapped", [20887]], [[194584, 194584], "mapped", [20900]], [[194585, 194585], "mapped", [20172]], [[194586, 194586], "mapped", [20908]], [[194587, 194587], "mapped", [20917]], [[194588, 194588], "mapped", [168415]], [[194589, 194589], "mapped", [20981]], [[194590, 194590], "mapped", [20995]], [[194591, 194591], "mapped", [13535]], [[194592, 194592], "mapped", [21051]], [[194593, 194593], "mapped", [21062]], [[194594, 194594], "mapped", [21106]], [[194595, 194595], "mapped", [21111]], [[194596, 194596], "mapped", [13589]], [[194597, 194597], "mapped", [21191]], [[194598, 194598], "mapped", [21193]], [[194599, 194599], "mapped", [21220]], [[194600, 194600], "mapped", [21242]], [[194601, 194601], "mapped", [21253]], [[194602, 194602], "mapped", [21254]], [[194603, 194603], "mapped", [21271]], [[194604, 194604], "mapped", [21321]], [[194605, 194605], "mapped", [21329]], [[194606, 194606], "mapped", [21338]], [[194607, 194607], "mapped", [21363]], [[194608, 194608], "mapped", [21373]], [[194609, 194611], "mapped", [21375]], [[194612, 194612], "mapped", [133676]], [[194613, 194613], "mapped", [28784]], [[194614, 194614], "mapped", [21450]], [[194615, 194615], "mapped", [21471]], [[194616, 194616], "mapped", [133987]], [[194617, 194617], "mapped", [21483]], [[194618, 194618], "mapped", [21489]], [[194619, 194619], "mapped", [21510]], [[194620, 194620], "mapped", [21662]], [[194621, 194621], "mapped", [21560]], [[194622, 194622], "mapped", [21576]], [[194623, 194623], "mapped", [21608]], [[194624, 194624], "mapped", [21666]], [[194625, 194625], "mapped", [21750]], [[194626, 194626], "mapped", [21776]], [[194627, 194627], "mapped", [21843]], [[194628, 194628], "mapped", [21859]], [[194629, 194630], "mapped", [21892]], [[194631, 194631], "mapped", [21913]], [[194632, 194632], "mapped", [21931]], [[194633, 194633], "mapped", [21939]], [[194634, 194634], "mapped", [21954]], [[194635, 194635], "mapped", [22294]], [[194636, 194636], "mapped", [22022]], [[194637, 194637], "mapped", [22295]], [[194638, 194638], "mapped", [22097]], [[194639, 194639], "mapped", [22132]], [[194640, 194640], "mapped", [20999]], [[194641, 194641], "mapped", [22766]], [[194642, 194642], "mapped", [22478]], [[194643, 194643], "mapped", [22516]], [[194644, 194644], "mapped", [22541]], [[194645, 194645], "mapped", [22411]], [[194646, 194646], "mapped", [22578]], [[194647, 194647], "mapped", [22577]], [[194648, 194648], "mapped", [22700]], [[194649, 194649], "mapped", [136420]], [[194650, 194650], "mapped", [22770]], [[194651, 194651], "mapped", [22775]], [[194652, 194652], "mapped", [22790]], [[194653, 194653], "mapped", [22810]], [[194654, 194654], "mapped", [22818]], [[194655, 194655], "mapped", [22882]], [[194656, 194656], "mapped", [136872]], [[194657, 194657], "mapped", [136938]], [[194658, 194658], "mapped", [23020]], [[194659, 194659], "mapped", [23067]], [[194660, 194660], "mapped", [23079]], [[194661, 194661], "mapped", [23e3]], [[194662, 194662], "mapped", [23142]], [[194663, 194663], "mapped", [14062]], [[194664, 194664], "disallowed"], [[194665, 194665], "mapped", [23304]], [[194666, 194667], "mapped", [23358]], [[194668, 194668], "mapped", [137672]], [[194669, 194669], "mapped", [23491]], [[194670, 194670], "mapped", [23512]], [[194671, 194671], "mapped", [23527]], [[194672, 194672], "mapped", [23539]], [[194673, 194673], "mapped", [138008]], [[194674, 194674], "mapped", [23551]], [[194675, 194675], "mapped", [23558]], [[194676, 194676], "disallowed"], [[194677, 194677], "mapped", [23586]], [[194678, 194678], "mapped", [14209]], [[194679, 194679], "mapped", [23648]], [[194680, 194680], "mapped", [23662]], [[194681, 194681], "mapped", [23744]], [[194682, 194682], "mapped", [23693]], [[194683, 194683], "mapped", [138724]], [[194684, 194684], "mapped", [23875]], [[194685, 194685], "mapped", [138726]], [[194686, 194686], "mapped", [23918]], [[194687, 194687], "mapped", [23915]], [[194688, 194688], "mapped", [23932]], [[194689, 194689], "mapped", [24033]], [[194690, 194690], "mapped", [24034]], [[194691, 194691], "mapped", [14383]], [[194692, 194692], "mapped", [24061]], [[194693, 194693], "mapped", [24104]], [[194694, 194694], "mapped", [24125]], [[194695, 194695], "mapped", [24169]], [[194696, 194696], "mapped", [14434]], [[194697, 194697], "mapped", [139651]], [[194698, 194698], "mapped", [14460]], [[194699, 194699], "mapped", [24240]], [[194700, 194700], "mapped", [24243]], [[194701, 194701], "mapped", [24246]], [[194702, 194702], "mapped", [24266]], [[194703, 194703], "mapped", [172946]], [[194704, 194704], "mapped", [24318]], [[194705, 194706], "mapped", [140081]], [[194707, 194707], "mapped", [33281]], [[194708, 194709], "mapped", [24354]], [[194710, 194710], "mapped", [14535]], [[194711, 194711], "mapped", [144056]], [[194712, 194712], "mapped", [156122]], [[194713, 194713], "mapped", [24418]], [[194714, 194714], "mapped", [24427]], [[194715, 194715], "mapped", [14563]], [[194716, 194716], "mapped", [24474]], [[194717, 194717], "mapped", [24525]], [[194718, 194718], "mapped", [24535]], [[194719, 194719], "mapped", [24569]], [[194720, 194720], "mapped", [24705]], [[194721, 194721], "mapped", [14650]], [[194722, 194722], "mapped", [14620]], [[194723, 194723], "mapped", [24724]], [[194724, 194724], "mapped", [141012]], [[194725, 194725], "mapped", [24775]], [[194726, 194726], "mapped", [24904]], [[194727, 194727], "mapped", [24908]], [[194728, 194728], "mapped", [24910]], [[194729, 194729], "mapped", [24908]], [[194730, 194730], "mapped", [24954]], [[194731, 194731], "mapped", [24974]], [[194732, 194732], "mapped", [25010]], [[194733, 194733], "mapped", [24996]], [[194734, 194734], "mapped", [25007]], [[194735, 194735], "mapped", [25054]], [[194736, 194736], "mapped", [25074]], [[194737, 194737], "mapped", [25078]], [[194738, 194738], "mapped", [25104]], [[194739, 194739], "mapped", [25115]], [[194740, 194740], "mapped", [25181]], [[194741, 194741], "mapped", [25265]], [[194742, 194742], "mapped", [25300]], [[194743, 194743], "mapped", [25424]], [[194744, 194744], "mapped", [142092]], [[194745, 194745], "mapped", [25405]], [[194746, 194746], "mapped", [25340]], [[194747, 194747], "mapped", [25448]], [[194748, 194748], "mapped", [25475]], [[194749, 194749], "mapped", [25572]], [[194750, 194750], "mapped", [142321]], [[194751, 194751], "mapped", [25634]], [[194752, 194752], "mapped", [25541]], [[194753, 194753], "mapped", [25513]], [[194754, 194754], "mapped", [14894]], [[194755, 194755], "mapped", [25705]], [[194756, 194756], "mapped", [25726]], [[194757, 194757], "mapped", [25757]], [[194758, 194758], "mapped", [25719]], [[194759, 194759], "mapped", [14956]], [[194760, 194760], "mapped", [25935]], [[194761, 194761], "mapped", [25964]], [[194762, 194762], "mapped", [143370]], [[194763, 194763], "mapped", [26083]], [[194764, 194764], "mapped", [26360]], [[194765, 194765], "mapped", [26185]], [[194766, 194766], "mapped", [15129]], [[194767, 194767], "mapped", [26257]], [[194768, 194768], "mapped", [15112]], [[194769, 194769], "mapped", [15076]], [[194770, 194770], "mapped", [20882]], [[194771, 194771], "mapped", [20885]], [[194772, 194772], "mapped", [26368]], [[194773, 194773], "mapped", [26268]], [[194774, 194774], "mapped", [32941]], [[194775, 194775], "mapped", [17369]], [[194776, 194776], "mapped", [26391]], [[194777, 194777], "mapped", [26395]], [[194778, 194778], "mapped", [26401]], [[194779, 194779], "mapped", [26462]], [[194780, 194780], "mapped", [26451]], [[194781, 194781], "mapped", [144323]], [[194782, 194782], "mapped", [15177]], [[194783, 194783], "mapped", [26618]], [[194784, 194784], "mapped", [26501]], [[194785, 194785], "mapped", [26706]], [[194786, 194786], "mapped", [26757]], [[194787, 194787], "mapped", [144493]], [[194788, 194788], "mapped", [26766]], [[194789, 194789], "mapped", [26655]], [[194790, 194790], "mapped", [26900]], [[194791, 194791], "mapped", [15261]], [[194792, 194792], "mapped", [26946]], [[194793, 194793], "mapped", [27043]], [[194794, 194794], "mapped", [27114]], [[194795, 194795], "mapped", [27304]], [[194796, 194796], "mapped", [145059]], [[194797, 194797], "mapped", [27355]], [[194798, 194798], "mapped", [15384]], [[194799, 194799], "mapped", [27425]], [[194800, 194800], "mapped", [145575]], [[194801, 194801], "mapped", [27476]], [[194802, 194802], "mapped", [15438]], [[194803, 194803], "mapped", [27506]], [[194804, 194804], "mapped", [27551]], [[194805, 194805], "mapped", [27578]], [[194806, 194806], "mapped", [27579]], [[194807, 194807], "mapped", [146061]], [[194808, 194808], "mapped", [138507]], [[194809, 194809], "mapped", [146170]], [[194810, 194810], "mapped", [27726]], [[194811, 194811], "mapped", [146620]], [[194812, 194812], "mapped", [27839]], [[194813, 194813], "mapped", [27853]], [[194814, 194814], "mapped", [27751]], [[194815, 194815], "mapped", [27926]], [[194816, 194816], "mapped", [27966]], [[194817, 194817], "mapped", [28023]], [[194818, 194818], "mapped", [27969]], [[194819, 194819], "mapped", [28009]], [[194820, 194820], "mapped", [28024]], [[194821, 194821], "mapped", [28037]], [[194822, 194822], "mapped", [146718]], [[194823, 194823], "mapped", [27956]], [[194824, 194824], "mapped", [28207]], [[194825, 194825], "mapped", [28270]], [[194826, 194826], "mapped", [15667]], [[194827, 194827], "mapped", [28363]], [[194828, 194828], "mapped", [28359]], [[194829, 194829], "mapped", [147153]], [[194830, 194830], "mapped", [28153]], [[194831, 194831], "mapped", [28526]], [[194832, 194832], "mapped", [147294]], [[194833, 194833], "mapped", [147342]], [[194834, 194834], "mapped", [28614]], [[194835, 194835], "mapped", [28729]], [[194836, 194836], "mapped", [28702]], [[194837, 194837], "mapped", [28699]], [[194838, 194838], "mapped", [15766]], [[194839, 194839], "mapped", [28746]], [[194840, 194840], "mapped", [28797]], [[194841, 194841], "mapped", [28791]], [[194842, 194842], "mapped", [28845]], [[194843, 194843], "mapped", [132389]], [[194844, 194844], "mapped", [28997]], [[194845, 194845], "mapped", [148067]], [[194846, 194846], "mapped", [29084]], [[194847, 194847], "disallowed"], [[194848, 194848], "mapped", [29224]], [[194849, 194849], "mapped", [29237]], [[194850, 194850], "mapped", [29264]], [[194851, 194851], "mapped", [149e3]], [[194852, 194852], "mapped", [29312]], [[194853, 194853], "mapped", [29333]], [[194854, 194854], "mapped", [149301]], [[194855, 194855], "mapped", [149524]], [[194856, 194856], "mapped", [29562]], [[194857, 194857], "mapped", [29579]], [[194858, 194858], "mapped", [16044]], [[194859, 194859], "mapped", [29605]], [[194860, 194861], "mapped", [16056]], [[194862, 194862], "mapped", [29767]], [[194863, 194863], "mapped", [29788]], [[194864, 194864], "mapped", [29809]], [[194865, 194865], "mapped", [29829]], [[194866, 194866], "mapped", [29898]], [[194867, 194867], "mapped", [16155]], [[194868, 194868], "mapped", [29988]], [[194869, 194869], "mapped", [150582]], [[194870, 194870], "mapped", [30014]], [[194871, 194871], "mapped", [150674]], [[194872, 194872], "mapped", [30064]], [[194873, 194873], "mapped", [139679]], [[194874, 194874], "mapped", [30224]], [[194875, 194875], "mapped", [151457]], [[194876, 194876], "mapped", [151480]], [[194877, 194877], "mapped", [151620]], [[194878, 194878], "mapped", [16380]], [[194879, 194879], "mapped", [16392]], [[194880, 194880], "mapped", [30452]], [[194881, 194881], "mapped", [151795]], [[194882, 194882], "mapped", [151794]], [[194883, 194883], "mapped", [151833]], [[194884, 194884], "mapped", [151859]], [[194885, 194885], "mapped", [30494]], [[194886, 194887], "mapped", [30495]], [[194888, 194888], "mapped", [30538]], [[194889, 194889], "mapped", [16441]], [[194890, 194890], "mapped", [30603]], [[194891, 194891], "mapped", [16454]], [[194892, 194892], "mapped", [16534]], [[194893, 194893], "mapped", [152605]], [[194894, 194894], "mapped", [30798]], [[194895, 194895], "mapped", [30860]], [[194896, 194896], "mapped", [30924]], [[194897, 194897], "mapped", [16611]], [[194898, 194898], "mapped", [153126]], [[194899, 194899], "mapped", [31062]], [[194900, 194900], "mapped", [153242]], [[194901, 194901], "mapped", [153285]], [[194902, 194902], "mapped", [31119]], [[194903, 194903], "mapped", [31211]], [[194904, 194904], "mapped", [16687]], [[194905, 194905], "mapped", [31296]], [[194906, 194906], "mapped", [31306]], [[194907, 194907], "mapped", [31311]], [[194908, 194908], "mapped", [153980]], [[194909, 194910], "mapped", [154279]], [[194911, 194911], "disallowed"], [[194912, 194912], "mapped", [16898]], [[194913, 194913], "mapped", [154539]], [[194914, 194914], "mapped", [31686]], [[194915, 194915], "mapped", [31689]], [[194916, 194916], "mapped", [16935]], [[194917, 194917], "mapped", [154752]], [[194918, 194918], "mapped", [31954]], [[194919, 194919], "mapped", [17056]], [[194920, 194920], "mapped", [31976]], [[194921, 194921], "mapped", [31971]], [[194922, 194922], "mapped", [32e3]], [[194923, 194923], "mapped", [155526]], [[194924, 194924], "mapped", [32099]], [[194925, 194925], "mapped", [17153]], [[194926, 194926], "mapped", [32199]], [[194927, 194927], "mapped", [32258]], [[194928, 194928], "mapped", [32325]], [[194929, 194929], "mapped", [17204]], [[194930, 194930], "mapped", [156200]], [[194931, 194931], "mapped", [156231]], [[194932, 194932], "mapped", [17241]], [[194933, 194933], "mapped", [156377]], [[194934, 194934], "mapped", [32634]], [[194935, 194935], "mapped", [156478]], [[194936, 194936], "mapped", [32661]], [[194937, 194937], "mapped", [32762]], [[194938, 194938], "mapped", [32773]], [[194939, 194939], "mapped", [156890]], [[194940, 194940], "mapped", [156963]], [[194941, 194941], "mapped", [32864]], [[194942, 194942], "mapped", [157096]], [[194943, 194943], "mapped", [32880]], [[194944, 194944], "mapped", [144223]], [[194945, 194945], "mapped", [17365]], [[194946, 194946], "mapped", [32946]], [[194947, 194947], "mapped", [33027]], [[194948, 194948], "mapped", [17419]], [[194949, 194949], "mapped", [33086]], [[194950, 194950], "mapped", [23221]], [[194951, 194951], "mapped", [157607]], [[194952, 194952], "mapped", [157621]], [[194953, 194953], "mapped", [144275]], [[194954, 194954], "mapped", [144284]], [[194955, 194955], "mapped", [33281]], [[194956, 194956], "mapped", [33284]], [[194957, 194957], "mapped", [36766]], [[194958, 194958], "mapped", [17515]], [[194959, 194959], "mapped", [33425]], [[194960, 194960], "mapped", [33419]], [[194961, 194961], "mapped", [33437]], [[194962, 194962], "mapped", [21171]], [[194963, 194963], "mapped", [33457]], [[194964, 194964], "mapped", [33459]], [[194965, 194965], "mapped", [33469]], [[194966, 194966], "mapped", [33510]], [[194967, 194967], "mapped", [158524]], [[194968, 194968], "mapped", [33509]], [[194969, 194969], "mapped", [33565]], [[194970, 194970], "mapped", [33635]], [[194971, 194971], "mapped", [33709]], [[194972, 194972], "mapped", [33571]], [[194973, 194973], "mapped", [33725]], [[194974, 194974], "mapped", [33767]], [[194975, 194975], "mapped", [33879]], [[194976, 194976], "mapped", [33619]], [[194977, 194977], "mapped", [33738]], [[194978, 194978], "mapped", [33740]], [[194979, 194979], "mapped", [33756]], [[194980, 194980], "mapped", [158774]], [[194981, 194981], "mapped", [159083]], [[194982, 194982], "mapped", [158933]], [[194983, 194983], "mapped", [17707]], [[194984, 194984], "mapped", [34033]], [[194985, 194985], "mapped", [34035]], [[194986, 194986], "mapped", [34070]], [[194987, 194987], "mapped", [160714]], [[194988, 194988], "mapped", [34148]], [[194989, 194989], "mapped", [159532]], [[194990, 194990], "mapped", [17757]], [[194991, 194991], "mapped", [17761]], [[194992, 194992], "mapped", [159665]], [[194993, 194993], "mapped", [159954]], [[194994, 194994], "mapped", [17771]], [[194995, 194995], "mapped", [34384]], [[194996, 194996], "mapped", [34396]], [[194997, 194997], "mapped", [34407]], [[194998, 194998], "mapped", [34409]], [[194999, 194999], "mapped", [34473]], [[195e3, 195e3], "mapped", [34440]], [[195001, 195001], "mapped", [34574]], [[195002, 195002], "mapped", [34530]], [[195003, 195003], "mapped", [34681]], [[195004, 195004], "mapped", [34600]], [[195005, 195005], "mapped", [34667]], [[195006, 195006], "mapped", [34694]], [[195007, 195007], "disallowed"], [[195008, 195008], "mapped", [34785]], [[195009, 195009], "mapped", [34817]], [[195010, 195010], "mapped", [17913]], [[195011, 195011], "mapped", [34912]], [[195012, 195012], "mapped", [34915]], [[195013, 195013], "mapped", [161383]], [[195014, 195014], "mapped", [35031]], [[195015, 195015], "mapped", [35038]], [[195016, 195016], "mapped", [17973]], [[195017, 195017], "mapped", [35066]], [[195018, 195018], "mapped", [13499]], [[195019, 195019], "mapped", [161966]], [[195020, 195020], "mapped", [162150]], [[195021, 195021], "mapped", [18110]], [[195022, 195022], "mapped", [18119]], [[195023, 195023], "mapped", [35488]], [[195024, 195024], "mapped", [35565]], [[195025, 195025], "mapped", [35722]], [[195026, 195026], "mapped", [35925]], [[195027, 195027], "mapped", [162984]], [[195028, 195028], "mapped", [36011]], [[195029, 195029], "mapped", [36033]], [[195030, 195030], "mapped", [36123]], [[195031, 195031], "mapped", [36215]], [[195032, 195032], "mapped", [163631]], [[195033, 195033], "mapped", [133124]], [[195034, 195034], "mapped", [36299]], [[195035, 195035], "mapped", [36284]], [[195036, 195036], "mapped", [36336]], [[195037, 195037], "mapped", [133342]], [[195038, 195038], "mapped", [36564]], [[195039, 195039], "mapped", [36664]], [[195040, 195040], "mapped", [165330]], [[195041, 195041], "mapped", [165357]], [[195042, 195042], "mapped", [37012]], [[195043, 195043], "mapped", [37105]], [[195044, 195044], "mapped", [37137]], [[195045, 195045], "mapped", [165678]], [[195046, 195046], "mapped", [37147]], [[195047, 195047], "mapped", [37432]], [[195048, 195048], "mapped", [37591]], [[195049, 195049], "mapped", [37592]], [[195050, 195050], "mapped", [37500]], [[195051, 195051], "mapped", [37881]], [[195052, 195052], "mapped", [37909]], [[195053, 195053], "mapped", [166906]], [[195054, 195054], "mapped", [38283]], [[195055, 195055], "mapped", [18837]], [[195056, 195056], "mapped", [38327]], [[195057, 195057], "mapped", [167287]], [[195058, 195058], "mapped", [18918]], [[195059, 195059], "mapped", [38595]], [[195060, 195060], "mapped", [23986]], [[195061, 195061], "mapped", [38691]], [[195062, 195062], "mapped", [168261]], [[195063, 195063], "mapped", [168474]], [[195064, 195064], "mapped", [19054]], [[195065, 195065], "mapped", [19062]], [[195066, 195066], "mapped", [38880]], [[195067, 195067], "mapped", [168970]], [[195068, 195068], "mapped", [19122]], [[195069, 195069], "mapped", [169110]], [[195070, 195071], "mapped", [38923]], [[195072, 195072], "mapped", [38953]], [[195073, 195073], "mapped", [169398]], [[195074, 195074], "mapped", [39138]], [[195075, 195075], "mapped", [19251]], [[195076, 195076], "mapped", [39209]], [[195077, 195077], "mapped", [39335]], [[195078, 195078], "mapped", [39362]], [[195079, 195079], "mapped", [39422]], [[195080, 195080], "mapped", [19406]], [[195081, 195081], "mapped", [170800]], [[195082, 195082], "mapped", [39698]], [[195083, 195083], "mapped", [4e4]], [[195084, 195084], "mapped", [40189]], [[195085, 195085], "mapped", [19662]], [[195086, 195086], "mapped", [19693]], [[195087, 195087], "mapped", [40295]], [[195088, 195088], "mapped", [172238]], [[195089, 195089], "mapped", [19704]], [[195090, 195090], "mapped", [172293]], [[195091, 195091], "mapped", [172558]], [[195092, 195092], "mapped", [172689]], [[195093, 195093], "mapped", [40635]], [[195094, 195094], "mapped", [19798]], [[195095, 195095], "mapped", [40697]], [[195096, 195096], "mapped", [40702]], [[195097, 195097], "mapped", [40709]], [[195098, 195098], "mapped", [40719]], [[195099, 195099], "mapped", [40726]], [[195100, 195100], "mapped", [40763]], [[195101, 195101], "mapped", [173568]], [[195102, 196605], "disallowed"], [[196606, 196607], "disallowed"], [[196608, 262141], "disallowed"], [[262142, 262143], "disallowed"], [[262144, 327677], "disallowed"], [[327678, 327679], "disallowed"], [[327680, 393213], "disallowed"], [[393214, 393215], "disallowed"], [[393216, 458749], "disallowed"], [[458750, 458751], "disallowed"], [[458752, 524285], "disallowed"], [[524286, 524287], "disallowed"], [[524288, 589821], "disallowed"], [[589822, 589823], "disallowed"], [[589824, 655357], "disallowed"], [[655358, 655359], "disallowed"], [[655360, 720893], "disallowed"], [[720894, 720895], "disallowed"], [[720896, 786429], "disallowed"], [[786430, 786431], "disallowed"], [[786432, 851965], "disallowed"], [[851966, 851967], "disallowed"], [[851968, 917501], "disallowed"], [[917502, 917503], "disallowed"], [[917504, 917504], "disallowed"], [[917505, 917505], "disallowed"], [[917506, 917535], "disallowed"], [[917536, 917631], "disallowed"], [[917632, 917759], "disallowed"], [[917760, 917999], "ignored"], [[918e3, 983037], "disallowed"], [[983038, 983039], "disallowed"], [[983040, 1048573], "disallowed"], [[1048574, 1048575], "disallowed"], [[1048576, 1114109], "disallowed"], [[1114110, 1114111], "disallowed"]];
  }
});

// node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/index.js
var require_tr46 = __commonJS({
  "node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/index.js"(exports, module2) {
    "use strict";
    var punycode = require("punycode");
    var mappingTable = require_mappingTable();
    var PROCESSING_OPTIONS = {
      TRANSITIONAL: 0,
      NONTRANSITIONAL: 1
    };
    function normalize(str) {
      return str.split("\0").map(function(s) {
        return s.normalize("NFC");
      }).join("\0");
    }
    function findStatus(val) {
      var start = 0;
      var end = mappingTable.length - 1;
      while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        var target = mappingTable[mid];
        if (target[0][0] <= val && target[0][1] >= val) {
          return target;
        } else if (target[0][0] > val) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      return null;
    }
    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function countSymbols(string) {
      return string.replace(regexAstralSymbols, "_").length;
    }
    function mapChars(domain_name, useSTD3, processing_option) {
      var hasError = false;
      var processed = "";
      var len = countSymbols(domain_name);
      for (var i = 0; i < len; ++i) {
        var codePoint = domain_name.codePointAt(i);
        var status = findStatus(codePoint);
        switch (status[1]) {
          case "disallowed":
            hasError = true;
            processed += String.fromCodePoint(codePoint);
            break;
          case "ignored":
            break;
          case "mapped":
            processed += String.fromCodePoint.apply(String, status[2]);
            break;
          case "deviation":
            if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
              processed += String.fromCodePoint.apply(String, status[2]);
            } else {
              processed += String.fromCodePoint(codePoint);
            }
            break;
          case "valid":
            processed += String.fromCodePoint(codePoint);
            break;
          case "disallowed_STD3_mapped":
            if (useSTD3) {
              hasError = true;
              processed += String.fromCodePoint(codePoint);
            } else {
              processed += String.fromCodePoint.apply(String, status[2]);
            }
            break;
          case "disallowed_STD3_valid":
            if (useSTD3) {
              hasError = true;
            }
            processed += String.fromCodePoint(codePoint);
            break;
        }
      }
      return {
        string: processed,
        error: hasError
      };
    }
    var combiningMarksRegex = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
    function validateLabel(label, processing_option) {
      if (label.substr(0, 4) === "xn--") {
        label = punycode.toUnicode(label);
        processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL;
      }
      var error = false;
      if (normalize(label) !== label || label[3] === "-" && label[4] === "-" || label[0] === "-" || label[label.length - 1] === "-" || label.indexOf(".") !== -1 || label.search(combiningMarksRegex) === 0) {
        error = true;
      }
      var len = countSymbols(label);
      for (var i = 0; i < len; ++i) {
        var status = findStatus(label.codePointAt(i));
        if (processing === PROCESSING_OPTIONS.TRANSITIONAL && status[1] !== "valid" || processing === PROCESSING_OPTIONS.NONTRANSITIONAL && status[1] !== "valid" && status[1] !== "deviation") {
          error = true;
          break;
        }
      }
      return {
        label,
        error
      };
    }
    function processing(domain_name, useSTD3, processing_option) {
      var result = mapChars(domain_name, useSTD3, processing_option);
      result.string = normalize(result.string);
      var labels = result.string.split(".");
      for (var i = 0; i < labels.length; ++i) {
        try {
          var validation = validateLabel(labels[i]);
          labels[i] = validation.label;
          result.error = result.error || validation.error;
        } catch (e) {
          result.error = true;
        }
      }
      return {
        string: labels.join("."),
        error: result.error
      };
    }
    module2.exports.toASCII = function(domain_name, useSTD3, processing_option, verifyDnsLength) {
      var result = processing(domain_name, useSTD3, processing_option);
      var labels = result.string.split(".");
      labels = labels.map(function(l) {
        try {
          return punycode.toASCII(l);
        } catch (e) {
          result.error = true;
          return l;
        }
      });
      if (verifyDnsLength) {
        var total = labels.slice(0, labels.length - 1).join(".").length;
        if (total.length > 253 || total.length === 0) {
          result.error = true;
        }
        for (var i = 0; i < labels.length; ++i) {
          if (labels.length > 63 || labels.length === 0) {
            result.error = true;
            break;
          }
        }
      }
      if (result.error)
        return null;
      return labels.join(".");
    };
    module2.exports.toUnicode = function(domain_name, useSTD3) {
      var result = processing(domain_name, useSTD3, PROCESSING_OPTIONS.NONTRANSITIONAL);
      return {
        domain: result.string,
        error: result.error
      };
    };
    module2.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS;
  }
});

// node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js
var require_url_state_machine = __commonJS({
  "node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js"(exports, module2) {
    "use strict";
    var punycode = require("punycode");
    var tr46 = require_tr46();
    var specialSchemes = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var failure = Symbol("failure");
    function countSymbols(str) {
      return punycode.ucs2.decode(str).length;
    }
    function at(input, idx) {
      const c = input[idx];
      return isNaN(c) ? void 0 : String.fromCodePoint(c);
    }
    function isASCIIDigit(c) {
      return c >= 48 && c <= 57;
    }
    function isASCIIAlpha(c) {
      return c >= 65 && c <= 90 || c >= 97 && c <= 122;
    }
    function isASCIIAlphanumeric(c) {
      return isASCIIAlpha(c) || isASCIIDigit(c);
    }
    function isASCIIHex(c) {
      return isASCIIDigit(c) || c >= 65 && c <= 70 || c >= 97 && c <= 102;
    }
    function isSingleDot(buffer) {
      return buffer === "." || buffer.toLowerCase() === "%2e";
    }
    function isDoubleDot(buffer) {
      buffer = buffer.toLowerCase();
      return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
    }
    function isWindowsDriveLetterCodePoints(cp1, cp2) {
      return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
    }
    function isWindowsDriveLetterString(string) {
      return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
    }
    function isNormalizedWindowsDriveLetterString(string) {
      return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
    }
    function containsForbiddenHostCodePoint(string) {
      return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
    }
    function containsForbiddenHostCodePointExcludingPercent(string) {
      return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
    }
    function isSpecialScheme(scheme) {
      return specialSchemes[scheme] !== void 0;
    }
    function isSpecial(url) {
      return isSpecialScheme(url.scheme);
    }
    function defaultPort(scheme) {
      return specialSchemes[scheme];
    }
    function percentEncode(c) {
      let hex = c.toString(16).toUpperCase();
      if (hex.length === 1) {
        hex = "0" + hex;
      }
      return "%" + hex;
    }
    function utf8PercentEncode(c) {
      const buf = new Buffer(c);
      let str = "";
      for (let i = 0; i < buf.length; ++i) {
        str += percentEncode(buf[i]);
      }
      return str;
    }
    function utf8PercentDecode(str) {
      const input = new Buffer(str);
      const output = [];
      for (let i = 0; i < input.length; ++i) {
        if (input[i] !== 37) {
          output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
          output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
          i += 2;
        } else {
          output.push(input[i]);
        }
      }
      return new Buffer(output).toString();
    }
    function isC0ControlPercentEncode(c) {
      return c <= 31 || c > 126;
    }
    var extraPathPercentEncodeSet = /* @__PURE__ */ new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
    function isPathPercentEncode(c) {
      return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
    }
    var extraUserinfoPercentEncodeSet = /* @__PURE__ */ new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
    function isUserinfoPercentEncode(c) {
      return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
    }
    function percentEncodeChar(c, encodeSetPredicate) {
      const cStr = String.fromCodePoint(c);
      if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
      }
      return cStr;
    }
    function parseIPv4Number(input) {
      let R = 10;
      if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
      } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
      }
      if (input === "") {
        return 0;
      }
      const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
      if (regex.test(input)) {
        return failure;
      }
      return parseInt(input, R);
    }
    function parseIPv4(input) {
      const parts = input.split(".");
      if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
          parts.pop();
        }
      }
      if (parts.length > 4) {
        return input;
      }
      const numbers = [];
      for (const part of parts) {
        if (part === "") {
          return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
          return input;
        }
        numbers.push(n);
      }
      for (let i = 0; i < numbers.length - 1; ++i) {
        if (numbers[i] > 255) {
          return failure;
        }
      }
      if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
      }
      let ipv4 = numbers.pop();
      let counter = 0;
      for (const n of numbers) {
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
      }
      return ipv4;
    }
    function serializeIPv4(address) {
      let output = "";
      let n = address;
      for (let i = 1; i <= 4; ++i) {
        output = String(n % 256) + output;
        if (i !== 4) {
          output = "." + output;
        }
        n = Math.floor(n / 256);
      }
      return output;
    }
    function parseIPv6(input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0];
      let pieceIndex = 0;
      let compress = null;
      let pointer = 0;
      input = punycode.ucs2.decode(input);
      if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
          return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
      }
      while (pointer < input.length) {
        if (pieceIndex === 8) {
          return failure;
        }
        if (input[pointer] === 58) {
          if (compress !== null) {
            return failure;
          }
          ++pointer;
          ++pieceIndex;
          compress = pieceIndex;
          continue;
        }
        let value = 0;
        let length = 0;
        while (length < 4 && isASCIIHex(input[pointer])) {
          value = value * 16 + parseInt(at(input, pointer), 16);
          ++pointer;
          ++length;
        }
        if (input[pointer] === 46) {
          if (length === 0) {
            return failure;
          }
          pointer -= length;
          if (pieceIndex > 6) {
            return failure;
          }
          let numbersSeen = 0;
          while (input[pointer] !== void 0) {
            let ipv4Piece = null;
            if (numbersSeen > 0) {
              if (input[pointer] === 46 && numbersSeen < 4) {
                ++pointer;
              } else {
                return failure;
              }
            }
            if (!isASCIIDigit(input[pointer])) {
              return failure;
            }
            while (isASCIIDigit(input[pointer])) {
              const number = parseInt(at(input, pointer));
              if (ipv4Piece === null) {
                ipv4Piece = number;
              } else if (ipv4Piece === 0) {
                return failure;
              } else {
                ipv4Piece = ipv4Piece * 10 + number;
              }
              if (ipv4Piece > 255) {
                return failure;
              }
              ++pointer;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            ++numbersSeen;
            if (numbersSeen === 2 || numbersSeen === 4) {
              ++pieceIndex;
            }
          }
          if (numbersSeen !== 4) {
            return failure;
          }
          break;
        } else if (input[pointer] === 58) {
          ++pointer;
          if (input[pointer] === void 0) {
            return failure;
          }
        } else if (input[pointer] !== void 0) {
          return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
      }
      if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          const temp = address[compress + swaps - 1];
          address[compress + swaps - 1] = address[pieceIndex];
          address[pieceIndex] = temp;
          --pieceIndex;
          --swaps;
        }
      } else if (compress === null && pieceIndex !== 8) {
        return failure;
      }
      return address;
    }
    function serializeIPv6(address) {
      let output = "";
      const seqResult = findLongestZeroSequence(address);
      const compress = seqResult.idx;
      let ignore0 = false;
      for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
        if (ignore0 && address[pieceIndex] === 0) {
          continue;
        } else if (ignore0) {
          ignore0 = false;
        }
        if (compress === pieceIndex) {
          const separator = pieceIndex === 0 ? "::" : ":";
          output += separator;
          ignore0 = true;
          continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
          output += ":";
        }
      }
      return output;
    }
    function parseHost(input, isSpecialArg) {
      if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
          return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
      }
      if (!isSpecialArg) {
        return parseOpaqueHost(input);
      }
      const domain = utf8PercentDecode(input);
      const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
      if (asciiDomain === null) {
        return failure;
      }
      if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
      }
      const ipv4Host = parseIPv4(asciiDomain);
      if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
      }
      return asciiDomain;
    }
    function parseOpaqueHost(input) {
      if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
      }
      let output = "";
      const decoded = punycode.ucs2.decode(input);
      for (let i = 0; i < decoded.length; ++i) {
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
      }
      return output;
    }
    function findLongestZeroSequence(arr) {
      let maxIdx = null;
      let maxLen = 1;
      let currStart = null;
      let currLen = 0;
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) {
          if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
          }
          currStart = null;
          currLen = 0;
        } else {
          if (currStart === null) {
            currStart = i;
          }
          ++currLen;
        }
      }
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }
      return {
        idx: maxIdx,
        len: maxLen
      };
    }
    function serializeHost(host) {
      if (typeof host === "number") {
        return serializeIPv4(host);
      }
      if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
      }
      return host;
    }
    function trimControlChars(url) {
      return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
    }
    function trimTabAndNewline(url) {
      return url.replace(/\u0009|\u000A|\u000D/g, "");
    }
    function shortenPath(url) {
      const path = url.path;
      if (path.length === 0) {
        return;
      }
      if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
      }
      path.pop();
    }
    function includesCredentials(url) {
      return url.username !== "" || url.password !== "";
    }
    function cannotHaveAUsernamePasswordPort(url) {
      return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
    }
    function isNormalizedWindowsDriveLetter(string) {
      return /^[A-Za-z]:$/.test(string);
    }
    function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
      this.pointer = 0;
      this.input = input;
      this.base = base || null;
      this.encodingOverride = encodingOverride || "utf-8";
      this.stateOverride = stateOverride;
      this.url = url;
      this.failure = false;
      this.parseError = false;
      if (!this.url) {
        this.url = {
          scheme: "",
          username: "",
          password: "",
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,
          cannotBeABaseURL: false
        };
        const res2 = trimControlChars(this.input);
        if (res2 !== this.input) {
          this.parseError = true;
        }
        this.input = res2;
      }
      const res = trimTabAndNewline(this.input);
      if (res !== this.input) {
        this.parseError = true;
      }
      this.input = res;
      this.state = stateOverride || "scheme start";
      this.buffer = "";
      this.atFlag = false;
      this.arrFlag = false;
      this.passwordTokenSeenFlag = false;
      this.input = punycode.ucs2.decode(this.input);
      for (; this.pointer <= this.input.length; ++this.pointer) {
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? void 0 : String.fromCodePoint(c);
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
          break;
        } else if (ret === failure) {
          this.failure = true;
          break;
        }
      }
    }
    URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
      if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
      } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
      if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
      } else if (c === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false;
          }
          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false;
          }
          if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
            return false;
          }
          if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
            return false;
          }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
          return false;
        }
        if (this.url.scheme === "file") {
          if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
            this.parseError = true;
          }
          this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
          this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
          this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = "path or authority";
          ++this.pointer;
        } else {
          this.url.cannotBeABaseURL = true;
          this.url.path.push("");
          this.state = "cannot-be-a-base-URL path";
        }
      } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
      if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
      } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
      } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
      } else {
        this.state = "relative";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
      if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
      } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
      if (c === 47) {
        this.state = "authority";
      } else {
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
      this.url.scheme = this.base.scheme;
      if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
      } else if (c === 47) {
        this.state = "relative slash";
      } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
      } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
      } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
      if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "special authority ignore slashes";
      } else if (c === 47) {
        this.state = "authority";
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
      if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
      } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
      if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
      } else {
        this.parseError = true;
      }
      return true;
    };
    URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
      if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
          this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        const len = countSymbols(this.buffer);
        for (let pointer = 0; pointer < len; ++pointer) {
          const codePoint = this.buffer.codePointAt(pointer);
          if (codePoint === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true;
            continue;
          }
          const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
          if (this.passwordTokenSeenFlag) {
            this.url.password += encodedCodePoints;
          } else {
            this.url.username += encodedCodePoints;
          }
        }
        this.buffer = "";
      } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
      if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
      } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
          return false;
        }
      } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
          this.parseError = true;
          return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
          this.parseError = true;
          return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
          return false;
        }
      } else {
        if (c === 91) {
          this.arrFlag = true;
        } else if (c === 93) {
          this.arrFlag = false;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
      if (isASCIIDigit(c)) {
        this.buffer += cStr;
      } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
          const port = parseInt(this.buffer);
          if (port > Math.pow(2, 16) - 1) {
            this.parseError = true;
            return failure;
          }
          this.url.port = port === defaultPort(this.url.scheme) ? null : port;
          this.buffer = "";
        }
        if (this.stateOverride) {
          return false;
        }
        this.state = "path start";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    var fileOtherwiseCodePoints = /* @__PURE__ */ new Set([47, 92, 63, 35]);
    URLStateMachine.prototype["parse file"] = function parseFile(c) {
      this.url.scheme = "file";
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file slash";
      } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
        } else if (c === 63) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = "";
          this.state = "query";
        } else if (c === 35) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
          this.url.fragment = "";
          this.state = "fragment";
        } else {
          if (this.input.length - this.pointer - 1 === 0 || !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            shortenPath(this.url);
          } else {
            this.parseError = true;
          }
          this.state = "path";
          --this.pointer;
        }
      } else {
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file host";
      } else {
        if (this.base !== null && this.base.scheme === "file") {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0]);
          } else {
            this.url.host = this.base.host;
          }
        }
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
      if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true;
          this.state = "path";
        } else if (this.buffer === "") {
          this.url.host = "";
          if (this.stateOverride) {
            return false;
          }
          this.state = "path start";
        } else {
          let host = parseHost(this.buffer, isSpecial(this.url));
          if (host === failure) {
            return failure;
          }
          if (host === "localhost") {
            host = "";
          }
          this.url.host = host;
          if (this.stateOverride) {
            return false;
          }
          this.buffer = "";
          this.state = "path start";
        }
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
      if (isSpecial(this.url)) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
          --this.pointer;
        }
      } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
      } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
      } else if (c !== void 0) {
        this.state = "path";
        if (c !== 47) {
          --this.pointer;
        }
      }
      return true;
    };
    URLStateMachine.prototype["parse path"] = function parsePath(c) {
      if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
          this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url);
          if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
          }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
          this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
          if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
            if (this.url.host !== "" && this.url.host !== null) {
              this.parseError = true;
              this.url.host = "";
            }
            this.buffer = this.buffer[0] + ":";
          }
          this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === void 0 || c === 63 || c === 35)) {
          while (this.url.path.length > 1 && this.url.path[0] === "") {
            this.parseError = true;
            this.url.path.shift();
          }
        }
        if (c === 63) {
          this.url.query = "";
          this.state = "query";
        }
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
      }
      return true;
    };
    URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
      if (c === 63) {
        this.url.query = "";
        this.state = "query";
      } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
      } else {
        if (!isNaN(c) && c !== 37) {
          this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        if (!isNaN(c)) {
          this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
      }
      return true;
    };
    URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
      if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
          this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer);
        for (let i = 0; i < buffer.length; ++i) {
          if (buffer[i] < 33 || buffer[i] > 126 || buffer[i] === 34 || buffer[i] === 35 || buffer[i] === 60 || buffer[i] === 62) {
            this.url.query += percentEncode(buffer[i]);
          } else {
            this.url.query += String.fromCodePoint(buffer[i]);
          }
        }
        this.buffer = "";
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
      if (isNaN(c)) {
      } else if (c === 0) {
        this.parseError = true;
      } else {
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
      }
      return true;
    };
    function serializeURL(url, excludeFragment) {
      let output = url.scheme + ":";
      if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
          output += url.username;
          if (url.password !== "") {
            output += ":" + url.password;
          }
          output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
          output += ":" + url.port;
        }
      } else if (url.host === null && url.scheme === "file") {
        output += "//";
      }
      if (url.cannotBeABaseURL) {
        output += url.path[0];
      } else {
        for (const string of url.path) {
          output += "/" + string;
        }
      }
      if (url.query !== null) {
        output += "?" + url.query;
      }
      if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
      }
      return output;
    }
    function serializeOrigin(tuple) {
      let result = tuple.scheme + "://";
      result += serializeHost(tuple.host);
      if (tuple.port !== null) {
        result += ":" + tuple.port;
      }
      return result;
    }
    module2.exports.serializeURL = serializeURL;
    module2.exports.serializeURLOrigin = function(url) {
      switch (url.scheme) {
        case "blob":
          try {
            return module2.exports.serializeURLOrigin(module2.exports.parseURL(url.path[0]));
          } catch (e) {
            return "null";
          }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return serializeOrigin({
            scheme: url.scheme,
            host: url.host,
            port: url.port
          });
        case "file":
          return "file://";
        default:
          return "null";
      }
    };
    module2.exports.basicURLParse = function(input, options) {
      if (options === void 0) {
        options = {};
      }
      const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
      if (usm.failure) {
        return "failure";
      }
      return usm.url;
    };
    module2.exports.setTheUsername = function(url, username) {
      url.username = "";
      const decoded = punycode.ucs2.decode(username);
      for (let i = 0; i < decoded.length; ++i) {
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
      }
    };
    module2.exports.setThePassword = function(url, password) {
      url.password = "";
      const decoded = punycode.ucs2.decode(password);
      for (let i = 0; i < decoded.length; ++i) {
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
      }
    };
    module2.exports.serializeHost = serializeHost;
    module2.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
    module2.exports.serializeInteger = function(integer) {
      return String(integer);
    };
    module2.exports.parseURL = function(input, options) {
      if (options === void 0) {
        options = {};
      }
      return module2.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
    };
  }
});

// node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js
var require_URL_impl = __commonJS({
  "node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js"(exports) {
    "use strict";
    var usm = require_url_state_machine();
    exports.implementation = class URLImpl {
      constructor(constructorArgs) {
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== void 0) {
          parsedBase = usm.basicURLParse(base);
          if (parsedBase === "failure") {
            throw new TypeError("Invalid base URL");
          }
        }
        const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
        if (parsedURL === "failure") {
          throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
      }
      get href() {
        return usm.serializeURL(this._url);
      }
      set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
          throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
      }
      get origin() {
        return usm.serializeURLOrigin(this._url);
      }
      get protocol() {
        return this._url.scheme + ":";
      }
      set protocol(v) {
        usm.basicURLParse(v + ":", { url: this._url, stateOverride: "scheme start" });
      }
      get username() {
        return this._url.username;
      }
      set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        usm.setTheUsername(this._url, v);
      }
      get password() {
        return this._url.password;
      }
      set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        usm.setThePassword(this._url, v);
      }
      get host() {
        const url = this._url;
        if (url.host === null) {
          return "";
        }
        if (url.port === null) {
          return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
      }
      set host(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
      }
      get hostname() {
        if (this._url.host === null) {
          return "";
        }
        return usm.serializeHost(this._url.host);
      }
      set hostname(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
      }
      get port() {
        if (this._url.port === null) {
          return "";
        }
        return usm.serializeInteger(this._url.port);
      }
      set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        if (v === "") {
          this._url.port = null;
        } else {
          usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
        }
      }
      get pathname() {
        if (this._url.cannotBeABaseURL) {
          return this._url.path[0];
        }
        if (this._url.path.length === 0) {
          return "";
        }
        return "/" + this._url.path.join("/");
      }
      set pathname(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        this._url.path = [];
        usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
      }
      get search() {
        if (this._url.query === null || this._url.query === "") {
          return "";
        }
        return "?" + this._url.query;
      }
      set search(v) {
        const url = this._url;
        if (v === "") {
          url.query = null;
          return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, { url, stateOverride: "query" });
      }
      get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
          return "";
        }
        return "#" + this._url.fragment;
      }
      set hash(v) {
        if (v === "") {
          this._url.fragment = null;
          return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
      }
      toJSON() {
        return this.href;
      }
    };
  }
});

// node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js
var require_URL = __commonJS({
  "node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js"(exports, module2) {
    "use strict";
    var conversions = require_lib();
    var utils = require_utils();
    var Impl = require_URL_impl();
    var impl = utils.implSymbol;
    function URL(url) {
      if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
      }
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
      }
      const args = [];
      for (let i = 0; i < arguments.length && i < 2; ++i) {
        args[i] = arguments[i];
      }
      args[0] = conversions["USVString"](args[0]);
      if (args[1] !== void 0) {
        args[1] = conversions["USVString"](args[1]);
      }
      module2.exports.setup(this, args);
    }
    URL.prototype.toJSON = function toJSON() {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      const args = [];
      for (let i = 0; i < arguments.length && i < 0; ++i) {
        args[i] = arguments[i];
      }
      return this[impl].toJSON.apply(this[impl], args);
    };
    Object.defineProperty(URL.prototype, "href", {
      get() {
        return this[impl].href;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
      },
      enumerable: true,
      configurable: true
    });
    URL.prototype.toString = function() {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      return this.href;
    };
    Object.defineProperty(URL.prototype, "origin", {
      get() {
        return this[impl].origin;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "protocol", {
      get() {
        return this[impl].protocol;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "username", {
      get() {
        return this[impl].username;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "password", {
      get() {
        return this[impl].password;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "host", {
      get() {
        return this[impl].host;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "hostname", {
      get() {
        return this[impl].hostname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "port", {
      get() {
        return this[impl].port;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "pathname", {
      get() {
        return this[impl].pathname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "search", {
      get() {
        return this[impl].search;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "hash", {
      get() {
        return this[impl].hash;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
      },
      enumerable: true,
      configurable: true
    });
    module2.exports = {
      is(obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
      },
      create(constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData)
          privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
      },
      interface: URL,
      expose: {
        Window: { URL },
        Worker: { URL }
      }
    };
  }
});

// node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js
var require_public_api = __commonJS({
  "node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js"(exports) {
    "use strict";
    exports.URL = require_URL().interface;
    exports.serializeURL = require_url_state_machine().serializeURL;
    exports.serializeURLOrigin = require_url_state_machine().serializeURLOrigin;
    exports.basicURLParse = require_url_state_machine().basicURLParse;
    exports.setTheUsername = require_url_state_machine().setTheUsername;
    exports.setThePassword = require_url_state_machine().setThePassword;
    exports.serializeHost = require_url_state_machine().serializeHost;
    exports.serializeInteger = require_url_state_machine().serializeInteger;
    exports.parseURL = require_url_state_machine().parseURL;
  }
});

// node_modules/.pnpm/node-fetch@2.6.7/node_modules/node-fetch/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/node-fetch@2.6.7/node_modules/node-fetch/lib/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var Stream = _interopDefault(require("stream"));
    var http = _interopDefault(require("http"));
    var Url = _interopDefault(require("url"));
    var whatwgUrl = _interopDefault(require_public_api());
    var https = _interopDefault(require("https"));
    var zlib = _interopDefault(require("zlib"));
    var Readable = Stream.Readable;
    var BUFFER = Symbol("buffer");
    var TYPE = Symbol("type");
    var Blob = class {
      constructor() {
        this[TYPE] = "";
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
          const a = blobParts;
          const length = Number(a.length);
          for (let i = 0; i < length; i++) {
            const element = a[i];
            let buffer;
            if (element instanceof Buffer) {
              buffer = element;
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element);
            } else if (element instanceof Blob) {
              buffer = element[BUFFER];
            } else {
              buffer = Buffer.from(typeof element === "string" ? element : String(element));
            }
            size += buffer.length;
            buffers.push(buffer);
          }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== void 0 && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type;
        }
      }
      get size() {
        return this[BUFFER].length;
      }
      get type() {
        return this[TYPE];
      }
      text() {
        return Promise.resolve(this[BUFFER].toString());
      }
      arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
      }
      stream() {
        const readable = new Readable();
        readable._read = function() {
        };
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === void 0) {
          relativeStart = 0;
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0);
        } else {
          relativeStart = Math.min(start, size);
        }
        if (end === void 0) {
          relativeEnd = size;
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0);
        } else {
          relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], { type: arguments[2] });
        blob[BUFFER] = slicedBuffer;
        return blob;
      }
    };
    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: "Blob",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function FetchError(message, type, systemError) {
      Error.call(this, message);
      this.message = message;
      this.type = type;
      if (systemError) {
        this.code = this.errno = systemError.code;
      }
      Error.captureStackTrace(this, this.constructor);
    }
    FetchError.prototype = Object.create(Error.prototype);
    FetchError.prototype.constructor = FetchError;
    FetchError.prototype.name = "FetchError";
    var convert;
    try {
      convert = require("encoding").convert;
    } catch (e) {
    }
    var INTERNALS = Symbol("Body internals");
    var PassThrough = Stream.PassThrough;
    function Body(body) {
      var _this = this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
      let size = _ref$size === void 0 ? 0 : _ref$size;
      var _ref$timeout = _ref.timeout;
      let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
      if (body == null) {
        body = null;
      } else if (isURLSearchParams(body)) {
        body = Buffer.from(body.toString());
      } else if (isBlob(body))
        ;
      else if (Buffer.isBuffer(body))
        ;
      else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        body = Buffer.from(body);
      } else if (ArrayBuffer.isView(body)) {
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
      } else if (body instanceof Stream)
        ;
      else {
        body = Buffer.from(String(body));
      }
      this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
      };
      this.size = size;
      this.timeout = timeout;
      if (body instanceof Stream) {
        body.on("error", function(err) {
          const error = err.name === "AbortError" ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
          _this[INTERNALS].error = error;
        });
      }
    }
    Body.prototype = {
      get body() {
        return this[INTERNALS].body;
      },
      get bodyUsed() {
        return this[INTERNALS].disturbed;
      },
      arrayBuffer() {
        return consumeBody.call(this).then(function(buf) {
          return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
      },
      blob() {
        let ct = this.headers && this.headers.get("content-type") || "";
        return consumeBody.call(this).then(function(buf) {
          return Object.assign(
            new Blob([], {
              type: ct.toLowerCase()
            }),
            {
              [BUFFER]: buf
            }
          );
        });
      },
      json() {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
          try {
            return JSON.parse(buffer.toString());
          } catch (err) {
            return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
          }
        });
      },
      text() {
        return consumeBody.call(this).then(function(buffer) {
          return buffer.toString();
        });
      },
      buffer() {
        return consumeBody.call(this);
      },
      textConverted() {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
          return convertBody(buffer, _this3.headers);
        });
      }
    };
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    Body.mixIn = function(proto) {
      for (const name of Object.getOwnPropertyNames(Body.prototype)) {
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
          Object.defineProperty(proto, name, desc);
        }
      }
    };
    function consumeBody() {
      var _this4 = this;
      if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
      }
      this[INTERNALS].disturbed = true;
      if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
      }
      let body = this.body;
      if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
      }
      if (isBlob(body)) {
        body = body.stream();
      }
      if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
      }
      if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0));
      }
      let accum = [];
      let accumBytes = 0;
      let abort = false;
      return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        if (_this4.timeout) {
          resTimeout = setTimeout(function() {
            abort = true;
            reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
          }, _this4.timeout);
        }
        body.on("error", function(err) {
          if (err.name === "AbortError") {
            abort = true;
            reject(err);
          } else {
            reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
          }
        });
        body.on("data", function(chunk) {
          if (abort || chunk === null) {
            return;
          }
          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true;
            reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
            return;
          }
          accumBytes += chunk.length;
          accum.push(chunk);
        });
        body.on("end", function() {
          if (abort) {
            return;
          }
          clearTimeout(resTimeout);
          try {
            resolve(Buffer.concat(accum, accumBytes));
          } catch (err) {
            reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
          }
        });
      });
    }
    function convertBody(buffer, headers) {
      if (typeof convert !== "function") {
        throw new Error("The package `encoding` must be installed to use the textConverted() function");
      }
      const ct = headers.get("content-type");
      let charset = "utf-8";
      let res, str;
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
      }
      str = buffer.slice(0, 1024).toString();
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
      }
      if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
          res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
          if (res) {
            res.pop();
          }
        }
        if (res) {
          res = /charset=(.*)/i.exec(res.pop());
        }
      }
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
      }
      if (res) {
        charset = res.pop();
        if (charset === "gb2312" || charset === "gbk") {
          charset = "gb18030";
        }
      }
      return convert(buffer, "UTF-8", charset).toString();
    }
    function isURLSearchParams(obj) {
      if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
        return false;
      }
      return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
    }
    function isBlob(obj) {
      return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
    }
    function clone(instance) {
      let p1, p2;
      let body = instance.body;
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream && typeof body.getBoundary !== "function") {
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS].body = p1;
        body = p2;
      }
      return body;
    }
    function extractContentType(body) {
      if (body === null) {
        return null;
      } else if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      } else if (isURLSearchParams(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isBlob(body)) {
        return body.type || null;
      } else if (Buffer.isBuffer(body)) {
        return null;
      } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        return null;
      } else if (ArrayBuffer.isView(body)) {
        return null;
      } else if (typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${body.getBoundary()}`;
      } else if (body instanceof Stream) {
        return null;
      } else {
        return "text/plain;charset=UTF-8";
      }
    }
    function getTotalBytes(instance) {
      const body = instance.body;
      if (body === null) {
        return 0;
      } else if (isBlob(body)) {
        return body.size;
      } else if (Buffer.isBuffer(body)) {
        return body.length;
      } else if (body && typeof body.getLengthSync === "function") {
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || body.hasKnownLength && body.hasKnownLength()) {
          return body.getLengthSync();
        }
        return null;
      } else {
        return null;
      }
    }
    function writeToStream(dest, instance) {
      const body = instance.body;
      if (body === null) {
        dest.end();
      } else if (isBlob(body)) {
        body.stream().pipe(dest);
      } else if (Buffer.isBuffer(body)) {
        dest.write(body);
        dest.end();
      } else {
        body.pipe(dest);
      }
    }
    Body.Promise = global.Promise;
    var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    function validateName(name) {
      name = `${name}`;
      if (invalidTokenRegex.test(name) || name === "") {
        throw new TypeError(`${name} is not a legal HTTP header name`);
      }
    }
    function validateValue(value) {
      value = `${value}`;
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
      }
    }
    function find2(map, name) {
      name = name.toLowerCase();
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key;
        }
      }
      return void 0;
    }
    var MAP = Symbol("map");
    var Headers = class {
      constructor() {
        let init = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        this[MAP] = /* @__PURE__ */ Object.create(null);
        if (init instanceof Headers) {
          const rawHeaders = init.raw();
          const headerNames = Object.keys(rawHeaders);
          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value);
            }
          }
          return;
        }
        if (init == null)
          ;
        else if (typeof init === "object") {
          const method = init[Symbol.iterator];
          if (method != null) {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            const pairs = [];
            for (const pair of init) {
              if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
                throw new TypeError("Each header pair must be iterable");
              }
              pairs.push(Array.from(pair));
            }
            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              this.append(pair[0], pair[1]);
            }
          } else {
            for (const key of Object.keys(init)) {
              const value = init[key];
              this.append(key, value);
            }
          }
        } else {
          throw new TypeError("Provided initializer must be an object");
        }
      }
      get(name) {
        name = `${name}`;
        validateName(name);
        const key = find2(this[MAP], name);
        if (key === void 0) {
          return null;
        }
        return this[MAP][key].join(", ");
      }
      forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
        let pairs = getHeaders(this);
        let i = 0;
        while (i < pairs.length) {
          var _pairs$i = pairs[i];
          const name = _pairs$i[0], value = _pairs$i[1];
          callback.call(thisArg, value, name, this);
          pairs = getHeaders(this);
          i++;
        }
      }
      set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find2(this[MAP], name);
        this[MAP][key !== void 0 ? key : name] = [value];
      }
      append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find2(this[MAP], name);
        if (key !== void 0) {
          this[MAP][key].push(value);
        } else {
          this[MAP][name] = [value];
        }
      }
      has(name) {
        name = `${name}`;
        validateName(name);
        return find2(this[MAP], name) !== void 0;
      }
      delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find2(this[MAP], name);
        if (key !== void 0) {
          delete this[MAP][key];
        }
      }
      raw() {
        return this[MAP];
      }
      keys() {
        return createHeadersIterator(this, "key");
      }
      values() {
        return createHeadersIterator(this, "value");
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, "key+value");
      }
    };
    Headers.prototype.entries = Headers.prototype[Symbol.iterator];
    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: "Headers",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    });
    function getHeaders(headers) {
      let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
      const keys = Object.keys(headers[MAP]).sort();
      return keys.map(kind === "key" ? function(k) {
        return k.toLowerCase();
      } : kind === "value" ? function(k) {
        return headers[MAP][k].join(", ");
      } : function(k) {
        return [k.toLowerCase(), headers[MAP][k].join(", ")];
      });
    }
    var INTERNAL = Symbol("internal");
    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype);
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0
      };
      return iterator;
    }
    var HeadersIteratorPrototype = Object.setPrototypeOf({
      next() {
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
          throw new TypeError("Value of `this` is not a HeadersIterator");
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
          return {
            value: void 0,
            done: true
          };
        }
        this[INTERNAL].index = index + 1;
        return {
          value: values[index],
          done: false
        };
      }
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: "HeadersIterator",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({ __proto__: null }, headers[MAP]);
      const hostHeaderKey = find2(headers[MAP], "Host");
      if (hostHeaderKey !== void 0) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
      }
      return obj;
    }
    function createHeadersLenient(obj) {
      const headers = new Headers();
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue;
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue;
            }
            if (headers[MAP][name] === void 0) {
              headers[MAP][name] = [val];
            } else {
              headers[MAP][name].push(val);
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]];
        }
      }
      return headers;
    }
    var INTERNALS$1 = Symbol("Response internals");
    var STATUS_CODES = http.STATUS_CODES;
    var Response = class {
      constructor() {
        let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$1] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter
        };
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        });
      }
    };
    Body.mixIn(Response.prototype);
    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: "Response",
      writable: false,
      enumerable: false,
      configurable: true
    });
    var INTERNALS$2 = Symbol("Request internals");
    var URL = Url.URL || whatwgUrl.URL;
    var parse_url = Url.parse;
    var format_url = Url.format;
    function parseURL(urlStr) {
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
      }
      return parse_url(urlStr);
    }
    var streamDestructionSupported = "destroy" in Stream.Readable.prototype;
    function isRequest(input) {
      return typeof input === "object" && typeof input[INTERNALS$2] === "object";
    }
    function isAbortSignal(signal) {
      const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
      return !!(proto && proto.constructor.name === "AbortSignal");
    }
    var Request = class {
      constructor(input) {
        let init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let parsedURL;
        if (!isRequest(input)) {
          if (input && input.href) {
            parsedURL = parseURL(input.href);
          } else {
            parsedURL = parseURL(`${input}`);
          }
          input = {};
        } else {
          parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
          timeout: init.timeout || input.timeout || 0,
          size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init)
          signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal");
        }
        this[INTERNALS$2] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal
        };
        this.follow = init.follow !== void 0 ? init.follow : input.follow !== void 0 ? input.follow : 20;
        this.compress = init.compress !== void 0 ? init.compress : input.compress !== void 0 ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
      }
      get method() {
        return this[INTERNALS$2].method;
      }
      get url() {
        return format_url(this[INTERNALS$2].parsedURL);
      }
      get headers() {
        return this[INTERNALS$2].headers;
      }
      get redirect() {
        return this[INTERNALS$2].redirect;
      }
      get signal() {
        return this[INTERNALS$2].signal;
      }
      clone() {
        return new Request(this);
      }
    };
    Body.mixIn(Request.prototype);
    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: "Request",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    });
    function getNodeRequestOptions(request) {
      const parsedURL = request[INTERNALS$2].parsedURL;
      const headers = new Headers(request[INTERNALS$2].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError("Only absolute URLs are supported");
      }
      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
      }
      if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
        throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
      }
      let contentLengthValue = null;
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number") {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate");
      }
      let agent = request.agent;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
      });
    }
    function AbortError(message) {
      Error.call(this, message);
      this.type = "aborted";
      this.message = message;
      Error.captureStackTrace(this, this.constructor);
    }
    AbortError.prototype = Object.create(Error.prototype);
    AbortError.prototype.constructor = AbortError;
    AbortError.prototype.name = "AbortError";
    var URL$1 = Url.URL || whatwgUrl.URL;
    var PassThrough$1 = Stream.PassThrough;
    var isDomainOrSubdomain = function isDomainOrSubdomain2(destination, original) {
      const orig = new URL$1(original).hostname;
      const dest = new URL$1(destination).hostname;
      return orig === dest || orig[orig.length - dest.length - 1] === "." && orig.endsWith(dest);
    };
    function fetch2(url, opts) {
      if (!fetch2.Promise) {
        throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
      }
      Body.Promise = fetch2.Promise;
      return new fetch2.Promise(function(resolve, reject) {
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === "https:" ? https : http).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort2() {
          let error = new AbortError("The user aborted a request.");
          reject(error);
          if (request.body && request.body instanceof Stream.Readable) {
            request.body.destroy(error);
          }
          if (!response || !response.body)
            return;
          response.body.emit("error", error);
        };
        if (signal && signal.aborted) {
          abort();
          return;
        }
        const abortAndFinalize = function abortAndFinalize2() {
          abort();
          finalize();
        };
        const req = send(options);
        let reqTimeout;
        if (signal) {
          signal.addEventListener("abort", abortAndFinalize);
        }
        function finalize() {
          req.abort();
          if (signal)
            signal.removeEventListener("abort", abortAndFinalize);
          clearTimeout(reqTimeout);
        }
        if (request.timeout) {
          req.once("socket", function(socket) {
            reqTimeout = setTimeout(function() {
              reject(new FetchError(`network timeout at: ${request.url}`, "request-timeout"));
              finalize();
            }, request.timeout);
          });
        }
        req.on("error", function(err) {
          reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
          finalize();
        });
        req.on("response", function(res) {
          clearTimeout(reqTimeout);
          const headers = createHeadersLenient(res.headers);
          if (fetch2.isRedirect(res.statusCode)) {
            const location = headers.get("Location");
            let locationURL = null;
            try {
              locationURL = location === null ? null : new URL$1(location, request.url).toString();
            } catch (err) {
              if (request.redirect !== "manual") {
                reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
                finalize();
                return;
              }
            }
            switch (request.redirect) {
              case "error":
                reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
                finalize();
                return;
              case "manual":
                if (locationURL !== null) {
                  try {
                    headers.set("Location", locationURL);
                  } catch (err) {
                    reject(err);
                  }
                }
                break;
              case "follow":
                if (locationURL === null) {
                  break;
                }
                if (request.counter >= request.follow) {
                  reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                  finalize();
                  return;
                }
                const requestOpts = {
                  headers: new Headers(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size
                };
                if (!isDomainOrSubdomain(request.url, locationURL)) {
                  for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                    requestOpts.headers.delete(name);
                  }
                }
                if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                  reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                  finalize();
                  return;
                }
                if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
                  requestOpts.method = "GET";
                  requestOpts.body = void 0;
                  requestOpts.headers.delete("content-length");
                }
                resolve(fetch2(new Request(locationURL, requestOpts)));
                finalize();
                return;
            }
          }
          res.once("end", function() {
            if (signal)
              signal.removeEventListener("abort", abortAndFinalize);
          });
          let body = res.pipe(new PassThrough$1());
          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter
          };
          const codings = headers.get("Content-Encoding");
          if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
            response = new Response(body, response_options);
            resolve(response);
            return;
          }
          const zlibOptions = {
            flush: zlib.Z_SYNC_FLUSH,
            finishFlush: zlib.Z_SYNC_FLUSH
          };
          if (codings == "gzip" || codings == "x-gzip") {
            body = body.pipe(zlib.createGunzip(zlibOptions));
            response = new Response(body, response_options);
            resolve(response);
            return;
          }
          if (codings == "deflate" || codings == "x-deflate") {
            const raw = res.pipe(new PassThrough$1());
            raw.once("data", function(chunk) {
              if ((chunk[0] & 15) === 8) {
                body = body.pipe(zlib.createInflate());
              } else {
                body = body.pipe(zlib.createInflateRaw());
              }
              response = new Response(body, response_options);
              resolve(response);
            });
            return;
          }
          if (codings == "br" && typeof zlib.createBrotliDecompress === "function") {
            body = body.pipe(zlib.createBrotliDecompress());
            response = new Response(body, response_options);
            resolve(response);
            return;
          }
          response = new Response(body, response_options);
          resolve(response);
        });
        writeToStream(req, request);
      });
    }
    fetch2.isRedirect = function(code) {
      return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
    };
    fetch2.Promise = global.Promise;
    module2.exports = exports = fetch2;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports;
    exports.Headers = Headers;
    exports.Request = Request;
    exports.Response = Response;
    exports.FetchError = FetchError;
  }
});

// node_modules/.pnpm/cross-fetch@3.1.5/node_modules/cross-fetch/dist/node-ponyfill.js
var require_node_ponyfill = __commonJS({
  "node_modules/.pnpm/cross-fetch@3.1.5/node_modules/cross-fetch/dist/node-ponyfill.js"(exports, module2) {
    var nodeFetch = require_lib2();
    var realFetch = nodeFetch.default || nodeFetch;
    var fetch2 = function(url, options) {
      if (/^\/\//.test(url)) {
        url = "https:" + url;
      }
      return realFetch.call(this, url, options);
    };
    fetch2.ponyfill = true;
    module2.exports = exports = fetch2;
    exports.fetch = fetch2;
    exports.Headers = nodeFetch.Headers;
    exports.Request = nodeFetch.Request;
    exports.Response = nodeFetch.Response;
    exports.default = fetch2;
  }
});

// src/discover.ts
var discover_exports = {};
__export(discover_exports, {
  default: () => discover
});
module.exports = __toCommonJS(discover_exports);
var import_api = require("@raycast/api");
var import_bonjour = __toESM(require_bonjour());
var import_cross_fetch = __toESM(require_node_ponyfill());
var Light = class {
  constructor(service) {
    this.address = service.referer.address;
    this.port = service.port;
  }
  async toggle() {
    const url = `http://${this.address}:${this.port}/elgato/lights`;
    const response = await (0, import_cross_fetch.fetch)(url);
    const data = await response.json();
    const newState = !data.lights[0].on;
    return await (0, import_cross_fetch.fetch)(url, {
      method: "PUT",
      body: JSON.stringify({
        lights: [
          {
            on: newState
          }
        ],
        numberOfLights: 1
      })
    });
  }
};
async function find() {
  const bonjour = (0, import_bonjour.default)();
  const lights = [];
  const search = async () => new Promise((resolve) => {
    setTimeout(async () => {
      bonjour.find({ type: "elg" }, (service) => {
        const light = new Light(service);
        lights.push(light);
        resolve(light);
      });
    }, 5e3);
  });
  await search();
  bonjour.destroy();
  return lights;
}
async function discover() {
  await (0, import_api.closeMainWindow)({ clearRootSearch: true });
  async function toggleAll() {
    const promises = [];
    const lights = await find();
    lights.forEach((l) => promises.push(l.toggle()));
    return Promise.all(promises);
  }
  await toggleAll();
  await (0, import_api.showHUD)("Found");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9kbnMtZXF1YWxAMS4wLjAvbm9kZV9tb2R1bGVzL2Rucy1lcXVhbC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2FycmF5LWZsYXR0ZW5AMi4xLjIvbm9kZV9tb2R1bGVzL2FycmF5LWZsYXR0ZW4vYXJyYXktZmxhdHRlbi5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL211bHRpY2FzdC1kbnMtc2VydmljZS10eXBlc0AxLjEuMC9ub2RlX21vZHVsZXMvbXVsdGljYXN0LWRucy1zZXJ2aWNlLXR5cGVzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vYnVmZmVyLWluZGV4b2ZAMS4xLjEvbm9kZV9tb2R1bGVzL2J1ZmZlci1pbmRleG9mL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vZG5zLXR4dEAyLjAuMi9ub2RlX21vZHVsZXMvZG5zLXR4dC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2JvbmpvdXJAMy41LjAvbm9kZV9tb2R1bGVzL2JvbmpvdXIvbGliL3NlcnZpY2UuanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9ib25qb3VyQDMuNS4wL25vZGVfbW9kdWxlcy9ib25qb3VyL2xpYi9yZWdpc3RyeS5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2Rucy1wYWNrZXRAMS4zLjQvbm9kZV9tb2R1bGVzL2Rucy1wYWNrZXQvdHlwZXMuanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9kbnMtcGFja2V0QDEuMy40L25vZGVfbW9kdWxlcy9kbnMtcGFja2V0L3Jjb2Rlcy5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2Rucy1wYWNrZXRAMS4zLjQvbm9kZV9tb2R1bGVzL2Rucy1wYWNrZXQvb3Bjb2Rlcy5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2lwQDEuMS44L25vZGVfbW9kdWxlcy9pcC9saWIvaXAuanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9zYWZlLWJ1ZmZlckA1LjIuMS9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9kbnMtcGFja2V0QDEuMy40L25vZGVfbW9kdWxlcy9kbnMtcGFja2V0L2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vdGh1bmt5QDEuMS4wL25vZGVfbW9kdWxlcy90aHVua3kvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9tdWx0aWNhc3QtZG5zQDYuMi4zL25vZGVfbW9kdWxlcy9tdWx0aWNhc3QtZG5zL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vb2JqZWN0LWtleXNAMS4xLjEvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vb2JqZWN0LWtleXNAMS4xLjEvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vb2JqZWN0LWtleXNAMS4xLjEvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vaGFzLXN5bWJvbHNAMS4wLjMvbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vaGFzLXRvc3RyaW5ndGFnQDEuMC4wL25vZGVfbW9kdWxlcy9oYXMtdG9zdHJpbmd0YWcvc2hhbXMuanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9oYXMtc3ltYm9sc0AxLjAuMy9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9mdW5jdGlvbi1iaW5kQDEuMS4xL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vZnVuY3Rpb24tYmluZEAxLjEuMS9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2hhc0AxLjAuMy9ub2RlX21vZHVsZXMvaGFzL3NyYy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2dldC1pbnRyaW5zaWNAMS4yLjAvbm9kZV9tb2R1bGVzL2dldC1pbnRyaW5zaWMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9jYWxsLWJpbmRAMS4wLjIvbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2NhbGwtYmluZEAxLjAuMi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2NhbGxCb3VuZC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2lzLWFyZ3VtZW50c0AxLjEuMS9ub2RlX21vZHVsZXMvaXMtYXJndW1lbnRzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzQDEuMC4wL25vZGVfbW9kdWxlcy9oYXMtcHJvcGVydHktZGVzY3JpcHRvcnMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9kZWZpbmUtcHJvcGVydGllc0AxLjEuNC9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9vYmplY3QtaXNAMS4xLjUvbm9kZV9tb2R1bGVzL29iamVjdC1pcy9pbXBsZW1lbnRhdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL29iamVjdC1pc0AxLjEuNS9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL3BvbHlmaWxsLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vb2JqZWN0LWlzQDEuMS41L25vZGVfbW9kdWxlcy9vYmplY3QtaXMvc2hpbS5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL29iamVjdC1pc0AxLjEuNS9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vaXMtcmVnZXhAMS4xLjQvbm9kZV9tb2R1bGVzL2lzLXJlZ2V4L2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vZnVuY3Rpb25zLWhhdmUtbmFtZXNAMS4yLjMvbm9kZV9tb2R1bGVzL2Z1bmN0aW9ucy1oYXZlLW5hbWVzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vcmVnZXhwLnByb3RvdHlwZS5mbGFnc0AxLjQuMy9ub2RlX21vZHVsZXMvcmVnZXhwLnByb3RvdHlwZS5mbGFncy9pbXBsZW1lbnRhdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3NAMS40LjMvbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvcG9seWZpbGwuanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdleHAucHJvdG90eXBlLmZsYWdzQDEuNC4zL25vZGVfbW9kdWxlcy9yZWdleHAucHJvdG90eXBlLmZsYWdzL3NoaW0uanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdleHAucHJvdG90eXBlLmZsYWdzQDEuNC4zL25vZGVfbW9kdWxlcy9yZWdleHAucHJvdG90eXBlLmZsYWdzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vaXMtZGF0ZS1vYmplY3RAMS4wLjUvbm9kZV9tb2R1bGVzL2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1lcXVhbEAxLjEuMS9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2JvbmpvdXJAMy41LjAvbm9kZV9tb2R1bGVzL2JvbmpvdXIvbGliL21kbnMtc2VydmVyLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vYm9uam91ckAzLjUuMC9ub2RlX21vZHVsZXMvYm9uam91ci9saWIvYnJvd3Nlci5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL2JvbmpvdXJAMy41LjAvbm9kZV9tb2R1bGVzL2JvbmpvdXIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS93ZWJpZGwtY29udmVyc2lvbnNAMy4wLjEvbm9kZV9tb2R1bGVzL3dlYmlkbC1jb252ZXJzaW9ucy9saWIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS93aGF0d2ctdXJsQDUuMC4wL25vZGVfbW9kdWxlcy93aGF0d2ctdXJsL2xpYi91dGlscy5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL3RyNDZAMC4wLjMvbm9kZV9tb2R1bGVzL3RyNDYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLnNjcmlwdHMvc2V0dXAtcmVjb3JkL25vZGVfbW9kdWxlcy8ucG5wbS93aGF0d2ctdXJsQDUuMC4wL25vZGVfbW9kdWxlcy93aGF0d2ctdXJsL2xpYi91cmwtc3RhdGUtbWFjaGluZS5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL3doYXR3Zy11cmxANS4wLjAvbm9kZV9tb2R1bGVzL3doYXR3Zy11cmwvbGliL1VSTC1pbXBsLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vd2hhdHdnLXVybEA1LjAuMC9ub2RlX21vZHVsZXMvd2hhdHdnLXVybC9saWIvVVJMLmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vd2hhdHdnLXVybEA1LjAuMC9ub2RlX21vZHVsZXMvd2hhdHdnLXVybC9saWIvcHVibGljLWFwaS5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMi42Ljcvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvbGliL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5zY3JpcHRzL3NldHVwLXJlY29yZC9ub2RlX21vZHVsZXMvLnBucG0vY3Jvc3MtZmV0Y2hAMy4xLjUvbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb255ZmlsbC5qcyIsICIuLi8uLi8uLi8uLi8uc2NyaXB0cy9zZXR1cC1yZWNvcmQvc3JjL2Rpc2NvdmVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCdcblxudmFyIHIgPSAvW0EtWl0vZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGEgPSBhLnJlcGxhY2UociwgcmVwbGFjZXIpXG4gIGIgPSBiLnJlcGxhY2UociwgcmVwbGFjZXIpXG4gIHJldHVybiBhID09PSBiXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VyIChtKSB7XG4gIHJldHVybiBtLnRvTG93ZXJDYXNlKClcbn1cbiIsICIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBFeHBvc2UgYGFycmF5RmxhdHRlbmAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlblxubW9kdWxlLmV4cG9ydHMuZnJvbSA9IGZsYXR0ZW5Gcm9tXG5tb2R1bGUuZXhwb3J0cy5kZXB0aCA9IGZsYXR0ZW5EZXB0aFxubW9kdWxlLmV4cG9ydHMuZnJvbURlcHRoID0gZmxhdHRlbkZyb21EZXB0aFxuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbiAoYXJyYXkpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHZhbHVlIHRvIGJlIGFuIGFycmF5JylcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuRnJvbShhcnJheSlcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuIGFycmF5LWxpa2Ugc3RydWN0dXJlLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5Gcm9tIChhcnJheSkge1xuICByZXR1cm4gZmxhdHRlbkRvd24oYXJyYXksIFtdKVxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXktbGlrZSBzdHJ1Y3R1cmUgd2l0aCBkZXB0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gIGFycmF5XG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlcHRoXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkRlcHRoIChhcnJheSwgZGVwdGgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHZhbHVlIHRvIGJlIGFuIGFycmF5JylcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuRnJvbURlcHRoKGFycmF5LCBkZXB0aClcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuIGFycmF5LWxpa2Ugc3RydWN0dXJlIHdpdGggZGVwdGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBhcnJheVxuICogQHBhcmFtICB7bnVtYmVyfSBkZXB0aFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5Gcm9tRGVwdGggKGFycmF5LCBkZXB0aCkge1xuICBpZiAodHlwZW9mIGRlcHRoICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBkZXB0aCB0byBiZSBhIG51bWJlcicpXG4gIH1cblxuICByZXR1cm4gZmxhdHRlbkRvd25EZXB0aChhcnJheSwgW10sIGRlcHRoKVxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXkgaW5kZWZpbml0ZWx5LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IHJlc3VsdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5Eb3duIChhcnJheSwgcmVzdWx0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpXVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmbGF0dGVuRG93bih2YWx1ZSwgcmVzdWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheSB3aXRoIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSAgcmVzdWx0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlcHRoXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkRvd25EZXB0aCAoYXJyYXksIHJlc3VsdCwgZGVwdGgpIHtcbiAgZGVwdGgtLVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpXVxuXG4gICAgaWYgKGRlcHRoID4gLTEgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZsYXR0ZW5Eb3duRGVwdGgodmFsdWUsIHJlc3VsdCwgZGVwdGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsICJ2YXIgcHJlZml4ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICdfJyArIG5hbWVcbn1cblxudmFyIGRlZmluZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZVxufVxuXG5leHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAmJiBkYXRhLm5hbWUpIHJldHVybiBleHBvcnRzLnN0cmluZ2lmeShkYXRhLm5hbWUsIGRhdGEucHJvdG9jb2wsIGRhdGEuc3VidHlwZXMpXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpLmZpbHRlcihkZWZpbmVkKS5tYXAocHJlZml4KS5qb2luKCcuJylcbn1cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcnRzW2ldWzBdICE9PSAnXycpIGNvbnRpbnVlXG4gICAgcGFydHNbaV0gPSBwYXJ0c1tpXS5zbGljZSgxKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwYXJ0cy5zaGlmdCgpLFxuICAgIHByb3RvY29sOiBwYXJ0cy5zaGlmdCgpIHx8IG51bGwsXG4gICAgc3VidHlwZXM6IHBhcnRzXG4gIH1cbn1cblxuZXhwb3J0cy50Y3AgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZXhwb3J0cy5zdHJpbmdpZnkobmFtZSwgJ3RjcCcsIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKVxufVxuXG5leHBvcnRzLnVkcCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBleHBvcnRzLnN0cmluZ2lmeShuYW1lLCAndWRwJywgQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpXG59XG4iLCAibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWZmZXJJbmRleE9mKGJ1ZmYsIHNlYXJjaCwgb2Zmc2V0LCBlbmNvZGluZyl7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZmYpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdidWZmZXIgaXMgbm90IGEgYnVmZmVyJyk7XG4gIH1cblxuICAvLyBhbGxvdyBvcHRpb25hbCBvZmZzZXQgd2hlbiBwcm92aWRpbmcgYW4gZW5jb2RpbmdcbiAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldDtcbiAgICBvZmZzZXQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ3N0cmluZycpIHtcbiAgICBzZWFyY2ggPSBuZXcgQnVmZmVyKHNlYXJjaCwgZW5jb2RpbmcgfHwgJ3V0ZjgnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oc2VhcmNoKSkge1xuICAgIHNlYXJjaCA9IG5ldyBCdWZmZXIoW3NlYXJjaF0pXG4gIH0gZWxzZSBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihzZWFyY2gpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdzZWFyY2ggaXMgbm90IGEgYnVmZmVyYWJsZSBvYmplY3QnKTtcbiAgfVxuXG4gIGlmIChzZWFyY2gubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkIHx8ICh0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJyAmJiBpc05hTihvZmZzZXQpKSkge1xuICAgIG9mZnNldCA9IDA7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ29mZnNldCBpcyBub3QgYSBudW1iZXInKTtcbiAgfVxuXG4gIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgb2Zmc2V0ID0gYnVmZi5sZW5ndGggKyBvZmZzZXRcbiAgfVxuXG4gIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgb2Zmc2V0ID0gMDtcbiAgfVxuXG4gIHZhciBtID0gMDtcbiAgdmFyIHMgPSAtMTtcblxuICBmb3IgKHZhciBpID0gb2Zmc2V0OyBpIDwgYnVmZi5sZW5ndGggOyArK2kpIHtcbiAgICBpZihidWZmW2ldICE9IHNlYXJjaFttXSl7XG4gICAgICBzID0gLTE7XG4gICAgICAvLyA8LS0gZ28gYmFja1xuICAgICAgLy8gbWF0Y2ggYWJjIHRvIGFhYmNcbiAgICAgIC8vICdhYWJjJ1xuICAgICAgLy8gJ2FhYidcbiAgICAgIC8vICAgIF4gbm8gbWF0Y2hcbiAgICAgIC8vIGEnYWJjJ1xuICAgICAgLy8gICBeIHNldCBpbmRleCBoZXJlIG5vdyBhbmQgbG9vayBhdCB0aGVzZSBhZ2Fpbi5cbiAgICAgIC8vICAgJ2FiYycgeWF5IVxuICAgICAgaSAtPSBtLTFcbiAgICAgIG0gPSAwO1xuICAgIH1cblxuICAgIGlmKGJ1ZmZbaV0gPT0gc2VhcmNoW21dKSB7XG4gICAgICBpZihzID09IC0xKSB7XG4gICAgICAgIHMgPSBpO1xuICAgICAgfVxuICAgICAgKyttO1xuICAgICAgaWYobSA9PSBzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzID4gLTEgJiYgYnVmZi5sZW5ndGggLSBzIDwgc2VhcmNoLmxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxuXG4iLCAiJ3VzZSBzdHJpY3QnXG5cbnZhciBiaW5kZXhPZiA9IHJlcXVpcmUoJ2J1ZmZlci1pbmRleG9mJylcblxudmFyIGVxdWFsU2lnbiA9IG5ldyBCdWZmZXIoJz0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciBiaW5hcnkgPSBvcHRzID8gb3B0cy5iaW5hcnkgOiBmYWxzZVxuICB2YXIgdGhhdCA9IHt9XG5cbiAgdGhhdC5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAoIWRhdGEpIGRhdGEgPSB7fVxuICAgIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG4gICAgaWYgKCFidWYpIGJ1ZiA9IG5ldyBCdWZmZXIodGhhdC5lbmNvZGluZ0xlbmd0aChkYXRhKSArIG9mZnNldClcblxuICAgIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG5cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGJ1ZltvZmZzZXRdID0gMFxuICAgICAgb2Zmc2V0KytcbiAgICB9XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbCA9IGRhdGFba2V5XVxuICAgICAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuICAgICAgb2Zmc2V0KytcblxuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXQgKz0gYnVmLndyaXRlKGtleSwgb2Zmc2V0KVxuICAgICAgfSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgICAgICBvZmZzZXQgKz0gYnVmLndyaXRlKGtleSArICc9Jywgb2Zmc2V0KVxuICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aFxuICAgICAgICB2YWwuY29weShidWYsIG9mZnNldCwgMCwgbGVuKVxuICAgICAgICBvZmZzZXQgKz0gbGVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQgKz0gYnVmLndyaXRlKGtleSArICc9JyArIHZhbCwgb2Zmc2V0KVxuICAgICAgfVxuXG4gICAgICBidWZbb2xkT2Zmc2V0XSA9IG9mZnNldCAtIG9sZE9mZnNldCAtIDFcbiAgICB9KVxuXG4gICAgdGhhdC5lbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICB0aGF0LmRlY29kZSA9IGZ1bmN0aW9uIChidWYsIG9mZnNldCwgbGVuKSB7XG4gICAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsZW4pKSBsZW4gPSBidWYubGVuZ3RoXG4gICAgdmFyIGRhdGEgPSB7fVxuICAgIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICAgIHdoaWxlIChvZmZzZXQgPCBsZW4pIHtcbiAgICAgIHZhciBiID0gZGVjb2RlQmxvY2soYnVmLCBvZmZzZXQpXG4gICAgICB2YXIgaSA9IGJpbmRleE9mKGIsIGVxdWFsU2lnbilcbiAgICAgIG9mZnNldCArPSBkZWNvZGVCbG9jay5ieXRlc1xuXG4gICAgICBpZiAoYi5sZW5ndGggPT09IDApIGNvbnRpbnVlIC8vIGlnbm9yZTogbW9zdCBsaWtlbHkgYSBzaW5nbGUgemVybyBieXRlXG4gICAgICBpZiAoaSA9PT0gLTEpIGRhdGFbYi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCldID0gdHJ1ZVxuICAgICAgZWxzZSBpZiAoaSA9PT0gMCkgY29udGludWUgLy8gaWdub3JlOiBpbnZhbGlkIGtleS1sZW5ndGhcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIga2V5ID0gYi5zbGljZSgwLCBpKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhKSBjb250aW51ZSAvLyBpZ25vcmU6IG92ZXJ3cml0aW5nIG5vdCBhbGxvd2VkXG4gICAgICAgIGRhdGFba2V5XSA9IGJpbmFyeSA/IGIuc2xpY2UoaSArIDEpIDogYi5zbGljZShpICsgMSkudG9TdHJpbmcoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQuZGVjb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHRoYXQuZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIDEgLy8gMSBieXRlIChzaW5nbGUgZW1wdHkgYnl0ZSlcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSByZXR1cm4gMSAvLyAxIGJ5dGUgKHNpbmdsZSBlbXB0eSBieXRlKVxuICAgIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIGtleSkge1xuICAgICAgdmFyIHZhbCA9IGRhdGFba2V5XVxuICAgICAgdG90YWwgKz0gQnVmZmVyLmJ5dGVMZW5ndGgoa2V5KSArIDEgLy8gKzEgYnl0ZSB0byBzdG9yZSBmaWVsZCBsZW5ndGhcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkgdG90YWwgKz0gdmFsLmxlbmd0aCArIDEgLy8gKzEgYnl0ZSB0byBmaXQgZXF1YWwgc2lnblxuICAgICAgZWxzZSBpZiAodmFsICE9PSB0cnVlKSB0b3RhbCArPSBCdWZmZXIuYnl0ZUxlbmd0aChTdHJpbmcodmFsKSkgKyAxIC8vICsxIGJ5dGUgdG8gZml0IGVxdWFsIHNpZ25cbiAgICAgIHJldHVybiB0b3RhbFxuICAgIH0sIDApXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBkZWNvZGVCbG9jayAoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGxlbiA9IGJ1ZltvZmZzZXRdXG4gIHZhciB0byA9IG9mZnNldCArIDEgKyBsZW5cbiAgdmFyIGIgPSBidWYuc2xpY2Uob2Zmc2V0ICsgMSwgdG8gPiBidWYubGVuZ3RoID8gYnVmLmxlbmd0aCA6IHRvKVxuICBkZWNvZGVCbG9jay5ieXRlcyA9IGxlbiArIDFcbiAgcmV0dXJuIGJcbn1cbiIsICIndXNlIHN0cmljdCdcblxudmFyIG9zID0gcmVxdWlyZSgnb3MnKVxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJylcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBzZXJ2aWNlTmFtZSA9IHJlcXVpcmUoJ211bHRpY2FzdC1kbnMtc2VydmljZS10eXBlcycpXG52YXIgdHh0ID0gcmVxdWlyZSgnZG5zLXR4dCcpKClcblxudmFyIFRMRCA9ICcubG9jYWwnXG5cbm1vZHVsZS5leHBvcnRzID0gU2VydmljZVxuXG51dGlsLmluaGVyaXRzKFNlcnZpY2UsIEV2ZW50RW1pdHRlcilcblxuZnVuY3Rpb24gU2VydmljZSAob3B0cykge1xuICBpZiAoIW9wdHMubmFtZSkgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBuYW1lIG5vdCBnaXZlbicpXG4gIGlmICghb3B0cy50eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHR5cGUgbm90IGdpdmVuJylcbiAgaWYgKCFvcHRzLnBvcnQpIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcG9ydCBub3QgZ2l2ZW4nKVxuXG4gIHRoaXMubmFtZSA9IG9wdHMubmFtZVxuICB0aGlzLnByb3RvY29sID0gb3B0cy5wcm90b2NvbCB8fCAndGNwJ1xuICB0aGlzLnR5cGUgPSBzZXJ2aWNlTmFtZS5zdHJpbmdpZnkob3B0cy50eXBlLCB0aGlzLnByb3RvY29sKVxuICB0aGlzLmhvc3QgPSBvcHRzLmhvc3QgfHwgb3MuaG9zdG5hbWUoKVxuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnRcbiAgdGhpcy5mcWRuID0gdGhpcy5uYW1lICsgJy4nICsgdGhpcy50eXBlICsgVExEXG4gIHRoaXMuc3VidHlwZXMgPSBvcHRzLnN1YnR5cGVzIHx8IG51bGxcbiAgdGhpcy50eHQgPSBvcHRzLnR4dCB8fCBudWxsXG4gIHRoaXMucHVibGlzaGVkID0gZmFsc2VcblxuICB0aGlzLl9hY3RpdmF0ZWQgPSBmYWxzZSAvLyBpbmRpY2F0ZXMgaW50ZW50IC0gdHJ1ZTogc3RhcnRpbmcvc3RhcnRlZCwgZmFsc2U6IHN0b3BwaW5nL3N0b3BwZWRcbn1cblxuU2VydmljZS5wcm90b3R5cGUuX3JlY29yZHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWNvcmRzID0gW3JyX3B0cih0aGlzKSwgcnJfc3J2KHRoaXMpLCBycl90eHQodGhpcyldXG5cbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKVxuICBPYmplY3Qua2V5cyhpbnRlcmZhY2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaW50ZXJmYWNlc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyKSB7XG4gICAgICBpZiAoYWRkci5pbnRlcm5hbCkgcmV0dXJuXG4gICAgICBpZiAoYWRkci5mYW1pbHkgPT09ICdJUHY0Jykge1xuICAgICAgICByZWNvcmRzLnB1c2gocnJfYShzZWxmLCBhZGRyLmFkZHJlc3MpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjb3Jkcy5wdXNoKHJyX2FhYWEoc2VsZiwgYWRkci5hZGRyZXNzKSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiByZWNvcmRzXG59XG5cbmZ1bmN0aW9uIHJyX3B0ciAoc2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHNlcnZpY2UudHlwZSArIFRMRCxcbiAgICB0eXBlOiAnUFRSJyxcbiAgICB0dGw6IDI4ODAwLFxuICAgIGRhdGE6IHNlcnZpY2UuZnFkblxuICB9XG59XG5cbmZ1bmN0aW9uIHJyX3NydiAoc2VydmljZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHNlcnZpY2UuZnFkbixcbiAgICB0eXBlOiAnU1JWJyxcbiAgICB0dGw6IDEyMCxcbiAgICBkYXRhOiB7XG4gICAgICBwb3J0OiBzZXJ2aWNlLnBvcnQsXG4gICAgICB0YXJnZXQ6IHNlcnZpY2UuaG9zdFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBycl90eHQgKHNlcnZpY2UpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBzZXJ2aWNlLmZxZG4sXG4gICAgdHlwZTogJ1RYVCcsXG4gICAgdHRsOiA0NTAwLFxuICAgIGRhdGE6IHR4dC5lbmNvZGUoc2VydmljZS50eHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gcnJfYSAoc2VydmljZSwgaXApIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBzZXJ2aWNlLmhvc3QsXG4gICAgdHlwZTogJ0EnLFxuICAgIHR0bDogMTIwLFxuICAgIGRhdGE6IGlwXG4gIH1cbn1cblxuZnVuY3Rpb24gcnJfYWFhYSAoc2VydmljZSwgaXApIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBzZXJ2aWNlLmhvc3QsXG4gICAgdHlwZTogJ0FBQUEnLFxuICAgIHR0bDogMTIwLFxuICAgIGRhdGE6IGlwXG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCdcblxudmFyIGRuc0VxdWFsID0gcmVxdWlyZSgnZG5zLWVxdWFsJylcbnZhciBmbGF0dGVuID0gcmVxdWlyZSgnYXJyYXktZmxhdHRlbicpXG52YXIgU2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZScpXG5cbnZhciBSRUFOTk9VTkNFX01BWF9NUyA9IDYwICogNjAgKiAxMDAwXG52YXIgUkVBTk5PVU5DRV9GQUNUT1IgPSAzXG5cbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0cnlcblxuZnVuY3Rpb24gUmVnaXN0cnkgKHNlcnZlcikge1xuICB0aGlzLl9zZXJ2ZXIgPSBzZXJ2ZXJcbiAgdGhpcy5fc2VydmljZXMgPSBbXVxufVxuXG5SZWdpc3RyeS5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciBzZXJ2aWNlID0gbmV3IFNlcnZpY2Uob3B0cylcbiAgc2VydmljZS5zdGFydCA9IHN0YXJ0LmJpbmQoc2VydmljZSwgdGhpcylcbiAgc2VydmljZS5zdG9wID0gc3RvcC5iaW5kKHNlcnZpY2UsIHRoaXMpXG4gIHNlcnZpY2Uuc3RhcnQoeyBwcm9iZTogb3B0cy5wcm9iZSAhPT0gZmFsc2UgfSlcbiAgcmV0dXJuIHNlcnZpY2Vcbn1cblxuUmVnaXN0cnkucHJvdG90eXBlLnVucHVibGlzaEFsbCA9IGZ1bmN0aW9uIChjYikge1xuICB0ZWFyZG93bih0aGlzLl9zZXJ2ZXIsIHRoaXMuX3NlcnZpY2VzLCBjYilcbiAgdGhpcy5fc2VydmljZXMgPSBbXVxufVxuXG5SZWdpc3RyeS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc2VydmljZXMuZm9yRWFjaChmdW5jdGlvbiAoc2VydmljZSkge1xuICAgIHNlcnZpY2UuX2Rlc3Ryb3llZCA9IHRydWVcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3RhcnQgKHJlZ2lzdHJ5LCBvcHRzKSB7XG4gIGlmICh0aGlzLl9hY3RpdmF0ZWQpIHJldHVyblxuICB0aGlzLl9hY3RpdmF0ZWQgPSB0cnVlXG5cbiAgcmVnaXN0cnkuX3NlcnZpY2VzLnB1c2godGhpcylcblxuICBpZiAob3B0cy5wcm9iZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpc1xuICAgIHByb2JlKHJlZ2lzdHJ5Ll9zZXJ2ZXIubWRucywgdGhpcywgZnVuY3Rpb24gKGV4aXN0cykge1xuICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICBzZXJ2aWNlLnN0b3AoKVxuICAgICAgICBzZXJ2aWNlLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdTZXJ2aWNlIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2Ugb24gdGhlIG5ldHdvcmsnKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBhbm5vdW5jZShyZWdpc3RyeS5fc2VydmVyLCBzZXJ2aWNlKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgYW5ub3VuY2UocmVnaXN0cnkuX3NlcnZlciwgdGhpcylcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9wIChyZWdpc3RyeSwgY2IpIHtcbiAgaWYgKCF0aGlzLl9hY3RpdmF0ZWQpIHJldHVybiAvLyBUT0RPOiBXaGF0IGFib3V0IHRoZSBjYWxsYmFjaz9cblxuICB0ZWFyZG93bihyZWdpc3RyeS5fc2VydmVyLCB0aGlzLCBjYilcblxuICB2YXIgaW5kZXggPSByZWdpc3RyeS5fc2VydmljZXMuaW5kZXhPZih0aGlzKVxuICBpZiAoaW5kZXggIT09IC0xKSByZWdpc3RyeS5fc2VydmljZXMuc3BsaWNlKGluZGV4LCAxKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc2VydmljZSBuYW1lIGlzIGFscmVhZHkgaW4gdXNlIG9uIHRoZSBuZXR3b3JrLlxuICpcbiAqIFVzZWQgYmVmb3JlIGFubm91bmNpbmcgdGhlIG5ldyBzZXJ2aWNlLlxuICpcbiAqIFRvIGd1YXJkIGFnYWluc3QgcmFjZSBjb25kaXRpb25zIHdoZXJlIG11bHRpcGxlIHNlcnZpY2VzIGFyZSBzdGFydGVkXG4gKiBzaW11bHRhbmVvdXNseSBvbiB0aGUgbmV0d29yaywgd2FpdCBhIHJhbmRvbSBhbW91bnQgb2YgdGltZSAoYmV0d2VlblxuICogMCBhbmQgMjUwIG1zKSBiZWZvcmUgcHJvYmluZy5cbiAqXG4gKiBUT0RPOiBBZGQgc3VwcG9ydCBmb3IgU2ltdWx0YW5lb3VzIFByb2JlIFRpZWJyZWFraW5nOlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NjIjc2VjdGlvbi04LjJcbiAqL1xuZnVuY3Rpb24gcHJvYmUgKG1kbnMsIHNlcnZpY2UsIGNiKSB7XG4gIHZhciBzZW50ID0gZmFsc2VcbiAgdmFyIHJldHJpZXMgPSAwXG4gIHZhciB0aW1lclxuXG4gIG1kbnMub24oJ3Jlc3BvbnNlJywgb25yZXNwb25zZSlcbiAgc2V0VGltZW91dChzZW5kLCBNYXRoLnJhbmRvbSgpICogMjUwKVxuXG4gIGZ1bmN0aW9uIHNlbmQgKCkge1xuICAgIC8vIGFib3J0IGlmIHRoZSBzZXJ2aWNlIGhhdmUgb3IgaXMgYmVpbmcgc3RvcHBlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICBpZiAoIXNlcnZpY2UuX2FjdGl2YXRlZCB8fCBzZXJ2aWNlLl9kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgbWRucy5xdWVyeShzZXJ2aWNlLmZxZG4sICdBTlknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgb3B0aW9uYWxseSBiZSBjYWxsZWQgd2l0aCBhbiBlcnJvciBvYmplY3QuIFdlJ2xsXG4gICAgICAvLyBqdXN0IHNpbGVudGx5IGlnbm9yZSBpdCBhbmQgcmV0cnkgYXMgd2Ugbm9ybWFsbHkgd291bGRcbiAgICAgIHNlbnQgPSB0cnVlXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKytyZXRyaWVzIDwgMyA/IHNlbmQgOiBkb25lLCAyNTApXG4gICAgICB0aW1lci51bnJlZigpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ucmVzcG9uc2UgKHBhY2tldCkge1xuICAgIC8vIEFwcGFyZW50bHkgY29uZmxpY3RpbmcgTXVsdGljYXN0IEROUyByZXNwb25zZXMgcmVjZWl2ZWQgKmJlZm9yZSpcbiAgICAvLyB0aGUgZmlyc3QgcHJvYmUgcGFja2V0IGlzIHNlbnQgTVVTVCBiZSBzaWxlbnRseSBpZ25vcmVkIChzZWVcbiAgICAvLyBkaXNjdXNzaW9uIG9mIHN0YWxlIHByb2JlIHBhY2tldHMgaW4gUkZDIDY3NjIgU2VjdGlvbiA4LjIsXG4gICAgLy8gXCJTaW11bHRhbmVvdXMgUHJvYmUgVGllYnJlYWtpbmdcIiBhdFxuICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzYyI3NlY3Rpb24tOC4yXG4gICAgaWYgKCFzZW50KSByZXR1cm5cblxuICAgIGlmIChwYWNrZXQuYW5zd2Vycy5zb21lKG1hdGNoUlIpIHx8IHBhY2tldC5hZGRpdGlvbmFscy5zb21lKG1hdGNoUlIpKSBkb25lKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaFJSIChycikge1xuICAgIHJldHVybiBkbnNFcXVhbChyci5uYW1lLCBzZXJ2aWNlLmZxZG4pXG4gIH1cblxuICBmdW5jdGlvbiBkb25lIChleGlzdHMpIHtcbiAgICBtZG5zLnJlbW92ZUxpc3RlbmVyKCdyZXNwb25zZScsIG9ucmVzcG9uc2UpXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIGNiKCEhZXhpc3RzKVxuICB9XG59XG5cbi8qKlxuICogSW5pdGlhbCBzZXJ2aWNlIGFubm91bmNlbWVudFxuICpcbiAqIFVzZWQgdG8gYW5ub3VuY2UgbmV3IHNlcnZpY2VzIHdoZW4gdGhleSBhcmUgZmlyc3QgcmVnaXN0ZXJlZC5cbiAqXG4gKiBCcm9hZGNhc3RzIHJpZ2h0IGF3YXksIHRoZW4gYWZ0ZXIgMyBzZWNvbmRzLCA5IHNlY29uZHMsIDI3IHNlY29uZHMsXG4gKiBhbmQgc28gb24sIHVwIHRvIGEgbWF4aW11bSBpbnRlcnZhbCBvZiBvbmUgaG91ci5cbiAqL1xuZnVuY3Rpb24gYW5ub3VuY2UgKHNlcnZlciwgc2VydmljZSkge1xuICB2YXIgZGVsYXkgPSAxMDAwXG4gIHZhciBwYWNrZXQgPSBzZXJ2aWNlLl9yZWNvcmRzKClcblxuICBzZXJ2ZXIucmVnaXN0ZXIocGFja2V0KVxuXG4gIDsoZnVuY3Rpb24gYnJvYWRjYXN0ICgpIHtcbiAgICAvLyBhYm9ydCBpZiB0aGUgc2VydmljZSBoYXZlIG9yIGlzIGJlaW5nIHN0b3BwZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgaWYgKCFzZXJ2aWNlLl9hY3RpdmF0ZWQgfHwgc2VydmljZS5fZGVzdHJveWVkKSByZXR1cm5cblxuICAgIHNlcnZlci5tZG5zLnJlc3BvbmQocGFja2V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgb3B0aW9uYWxseSBiZSBjYWxsZWQgd2l0aCBhbiBlcnJvciBvYmplY3QuIFdlJ2xsXG4gICAgICAvLyBqdXN0IHNpbGVudGx5IGlnbm9yZSBpdCBhbmQgcmV0cnkgYXMgd2Ugbm9ybWFsbHkgd291bGRcbiAgICAgIGlmICghc2VydmljZS5wdWJsaXNoZWQpIHtcbiAgICAgICAgc2VydmljZS5fYWN0aXZhdGVkID0gdHJ1ZVxuICAgICAgICBzZXJ2aWNlLnB1Ymxpc2hlZCA9IHRydWVcbiAgICAgICAgc2VydmljZS5lbWl0KCd1cCcpXG4gICAgICB9XG4gICAgICBkZWxheSA9IGRlbGF5ICogUkVBTk5PVU5DRV9GQUNUT1JcbiAgICAgIGlmIChkZWxheSA8IFJFQU5OT1VOQ0VfTUFYX01TICYmICFzZXJ2aWNlLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChicm9hZGNhc3QsIGRlbGF5KS51bnJlZigpXG4gICAgICB9XG4gICAgfSlcbiAgfSkoKVxufVxuXG4vKipcbiAqIFN0b3AgdGhlIGdpdmVuIHNlcnZpY2VzXG4gKlxuICogQmVzaWRlcyByZW1vdmluZyBhIHNlcnZpY2UgZnJvbSB0aGUgbUROUyByZWdpc3RyeSwgYSBcImdvb2RieWVcIlxuICogbWVzc2FnZSBpcyBzZW50IGZvciBlYWNoIHNlcnZpY2UgdG8gbGV0IHRoZSBuZXR3b3JrIGtub3cgYWJvdXQgdGhlXG4gKiBzaHV0ZG93bi5cbiAqL1xuZnVuY3Rpb24gdGVhcmRvd24gKHNlcnZlciwgc2VydmljZXMsIGNiKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzZXJ2aWNlcykpIHNlcnZpY2VzID0gW3NlcnZpY2VzXVxuXG4gIHNlcnZpY2VzID0gc2VydmljZXMuZmlsdGVyKGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIHNlcnZpY2UuX2FjdGl2YXRlZCAvLyBpZ25vcmUgc2VydmljZXMgbm90IGN1cnJlbnRseSBzdGFydGluZyBvciBzdGFydGVkXG4gIH0pXG5cbiAgdmFyIHJlY29yZHMgPSBmbGF0dGVuLmRlcHRoKHNlcnZpY2VzLm1hcChmdW5jdGlvbiAoc2VydmljZSkge1xuICAgIHNlcnZpY2UuX2FjdGl2YXRlZCA9IGZhbHNlXG4gICAgdmFyIHJlY29yZHMgPSBzZXJ2aWNlLl9yZWNvcmRzKClcbiAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgcmVjb3JkLnR0bCA9IDAgLy8gcHJlcGFyZSBnb29kYnllIG1lc3NhZ2VcbiAgICB9KVxuICAgIHJldHVybiByZWNvcmRzXG4gIH0pLCAxKVxuXG4gIGlmIChyZWNvcmRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNiICYmIGNiKClcblxuICBzZXJ2ZXIudW5yZWdpc3RlcihyZWNvcmRzKVxuXG4gIC8vIHNlbmQgZ29vZGJ5ZSBtZXNzYWdlXG4gIHNlcnZlci5tZG5zLnJlc3BvbmQocmVjb3JkcywgZnVuY3Rpb24gKCkge1xuICAgIHNlcnZpY2VzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UucHVibGlzaGVkID0gZmFsc2VcbiAgICB9KVxuICAgIGlmIChjYikgY2IuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICB9KVxufVxuIiwgImV4cG9ydHMudG9TdHJpbmcgPSBmdW5jdGlvbiAodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIDE6IHJldHVybiAnQSdcbiAgICBjYXNlIDEwOiByZXR1cm4gJ05VTEwnXG4gICAgY2FzZSAyODogcmV0dXJuICdBQUFBJ1xuICAgIGNhc2UgMTg6IHJldHVybiAnQUZTREInXG4gICAgY2FzZSA0MjogcmV0dXJuICdBUEwnXG4gICAgY2FzZSAyNTc6IHJldHVybiAnQ0FBJ1xuICAgIGNhc2UgNjA6IHJldHVybiAnQ0ROU0tFWSdcbiAgICBjYXNlIDU5OiByZXR1cm4gJ0NEUydcbiAgICBjYXNlIDM3OiByZXR1cm4gJ0NFUlQnXG4gICAgY2FzZSA1OiByZXR1cm4gJ0NOQU1FJ1xuICAgIGNhc2UgNDk6IHJldHVybiAnREhDSUQnXG4gICAgY2FzZSAzMjc2OTogcmV0dXJuICdETFYnXG4gICAgY2FzZSAzOTogcmV0dXJuICdETkFNRSdcbiAgICBjYXNlIDQ4OiByZXR1cm4gJ0ROU0tFWSdcbiAgICBjYXNlIDQzOiByZXR1cm4gJ0RTJ1xuICAgIGNhc2UgNTU6IHJldHVybiAnSElQJ1xuICAgIGNhc2UgMTM6IHJldHVybiAnSElORk8nXG4gICAgY2FzZSA0NTogcmV0dXJuICdJUFNFQ0tFWSdcbiAgICBjYXNlIDI1OiByZXR1cm4gJ0tFWSdcbiAgICBjYXNlIDM2OiByZXR1cm4gJ0tYJ1xuICAgIGNhc2UgMjk6IHJldHVybiAnTE9DJ1xuICAgIGNhc2UgMTU6IHJldHVybiAnTVgnXG4gICAgY2FzZSAzNTogcmV0dXJuICdOQVBUUidcbiAgICBjYXNlIDI6IHJldHVybiAnTlMnXG4gICAgY2FzZSA0NzogcmV0dXJuICdOU0VDJ1xuICAgIGNhc2UgNTA6IHJldHVybiAnTlNFQzMnXG4gICAgY2FzZSA1MTogcmV0dXJuICdOU0VDM1BBUkFNJ1xuICAgIGNhc2UgMTI6IHJldHVybiAnUFRSJ1xuICAgIGNhc2UgNDY6IHJldHVybiAnUlJTSUcnXG4gICAgY2FzZSAxNzogcmV0dXJuICdSUCdcbiAgICBjYXNlIDI0OiByZXR1cm4gJ1NJRydcbiAgICBjYXNlIDY6IHJldHVybiAnU09BJ1xuICAgIGNhc2UgOTk6IHJldHVybiAnU1BGJ1xuICAgIGNhc2UgMzM6IHJldHVybiAnU1JWJ1xuICAgIGNhc2UgNDQ6IHJldHVybiAnU1NIRlAnXG4gICAgY2FzZSAzMjc2ODogcmV0dXJuICdUQSdcbiAgICBjYXNlIDI0OTogcmV0dXJuICdUS0VZJ1xuICAgIGNhc2UgNTI6IHJldHVybiAnVExTQSdcbiAgICBjYXNlIDI1MDogcmV0dXJuICdUU0lHJ1xuICAgIGNhc2UgMTY6IHJldHVybiAnVFhUJ1xuICAgIGNhc2UgMjUyOiByZXR1cm4gJ0FYRlInXG4gICAgY2FzZSAyNTE6IHJldHVybiAnSVhGUidcbiAgICBjYXNlIDQxOiByZXR1cm4gJ09QVCdcbiAgICBjYXNlIDI1NTogcmV0dXJuICdBTlknXG4gIH1cbiAgcmV0dXJuICdVTktOT1dOXycgKyB0eXBlXG59XG5cbmV4cG9ydHMudG9UeXBlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgc3dpdGNoIChuYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICBjYXNlICdBJzogcmV0dXJuIDFcbiAgICBjYXNlICdOVUxMJzogcmV0dXJuIDEwXG4gICAgY2FzZSAnQUFBQSc6IHJldHVybiAyOFxuICAgIGNhc2UgJ0FGU0RCJzogcmV0dXJuIDE4XG4gICAgY2FzZSAnQVBMJzogcmV0dXJuIDQyXG4gICAgY2FzZSAnQ0FBJzogcmV0dXJuIDI1N1xuICAgIGNhc2UgJ0NETlNLRVknOiByZXR1cm4gNjBcbiAgICBjYXNlICdDRFMnOiByZXR1cm4gNTlcbiAgICBjYXNlICdDRVJUJzogcmV0dXJuIDM3XG4gICAgY2FzZSAnQ05BTUUnOiByZXR1cm4gNVxuICAgIGNhc2UgJ0RIQ0lEJzogcmV0dXJuIDQ5XG4gICAgY2FzZSAnRExWJzogcmV0dXJuIDMyNzY5XG4gICAgY2FzZSAnRE5BTUUnOiByZXR1cm4gMzlcbiAgICBjYXNlICdETlNLRVknOiByZXR1cm4gNDhcbiAgICBjYXNlICdEUyc6IHJldHVybiA0M1xuICAgIGNhc2UgJ0hJUCc6IHJldHVybiA1NVxuICAgIGNhc2UgJ0hJTkZPJzogcmV0dXJuIDEzXG4gICAgY2FzZSAnSVBTRUNLRVknOiByZXR1cm4gNDVcbiAgICBjYXNlICdLRVknOiByZXR1cm4gMjVcbiAgICBjYXNlICdLWCc6IHJldHVybiAzNlxuICAgIGNhc2UgJ0xPQyc6IHJldHVybiAyOVxuICAgIGNhc2UgJ01YJzogcmV0dXJuIDE1XG4gICAgY2FzZSAnTkFQVFInOiByZXR1cm4gMzVcbiAgICBjYXNlICdOUyc6IHJldHVybiAyXG4gICAgY2FzZSAnTlNFQyc6IHJldHVybiA0N1xuICAgIGNhc2UgJ05TRUMzJzogcmV0dXJuIDUwXG4gICAgY2FzZSAnTlNFQzNQQVJBTSc6IHJldHVybiA1MVxuICAgIGNhc2UgJ1BUUic6IHJldHVybiAxMlxuICAgIGNhc2UgJ1JSU0lHJzogcmV0dXJuIDQ2XG4gICAgY2FzZSAnUlAnOiByZXR1cm4gMTdcbiAgICBjYXNlICdTSUcnOiByZXR1cm4gMjRcbiAgICBjYXNlICdTT0EnOiByZXR1cm4gNlxuICAgIGNhc2UgJ1NQRic6IHJldHVybiA5OVxuICAgIGNhc2UgJ1NSVic6IHJldHVybiAzM1xuICAgIGNhc2UgJ1NTSEZQJzogcmV0dXJuIDQ0XG4gICAgY2FzZSAnVEEnOiByZXR1cm4gMzI3NjhcbiAgICBjYXNlICdUS0VZJzogcmV0dXJuIDI0OVxuICAgIGNhc2UgJ1RMU0EnOiByZXR1cm4gNTJcbiAgICBjYXNlICdUU0lHJzogcmV0dXJuIDI1MFxuICAgIGNhc2UgJ1RYVCc6IHJldHVybiAxNlxuICAgIGNhc2UgJ0FYRlInOiByZXR1cm4gMjUyXG4gICAgY2FzZSAnSVhGUic6IHJldHVybiAyNTFcbiAgICBjYXNlICdPUFQnOiByZXR1cm4gNDFcbiAgICBjYXNlICdBTlknOiByZXR1cm4gMjU1XG4gICAgY2FzZSAnKic6IHJldHVybiAyNTVcbiAgfVxuICByZXR1cm4gMFxufVxuIiwgIi8qXG4gKiBUcmFkaXRpb25hbCBETlMgaGVhZGVyIFJDT0RFcyAoNC1iaXRzKSBkZWZpbmVkIGJ5IElBTkEgaW5cbiAqIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL2Rucy1wYXJhbWV0ZXJzL2Rucy1wYXJhbWV0ZXJzLnhodG1sXG4gKi9cblxuZXhwb3J0cy50b1N0cmluZyA9IGZ1bmN0aW9uIChyY29kZSkge1xuICBzd2l0Y2ggKHJjb2RlKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gJ05PRVJST1InXG4gICAgY2FzZSAxOiByZXR1cm4gJ0ZPUk1FUlInXG4gICAgY2FzZSAyOiByZXR1cm4gJ1NFUlZGQUlMJ1xuICAgIGNhc2UgMzogcmV0dXJuICdOWERPTUFJTidcbiAgICBjYXNlIDQ6IHJldHVybiAnTk9USU1QJ1xuICAgIGNhc2UgNTogcmV0dXJuICdSRUZVU0VEJ1xuICAgIGNhc2UgNjogcmV0dXJuICdZWERPTUFJTidcbiAgICBjYXNlIDc6IHJldHVybiAnWVhSUlNFVCdcbiAgICBjYXNlIDg6IHJldHVybiAnTlhSUlNFVCdcbiAgICBjYXNlIDk6IHJldHVybiAnTk9UQVVUSCdcbiAgICBjYXNlIDEwOiByZXR1cm4gJ05PVFpPTkUnXG4gICAgY2FzZSAxMTogcmV0dXJuICdSQ09ERV8xMSdcbiAgICBjYXNlIDEyOiByZXR1cm4gJ1JDT0RFXzEyJ1xuICAgIGNhc2UgMTM6IHJldHVybiAnUkNPREVfMTMnXG4gICAgY2FzZSAxNDogcmV0dXJuICdSQ09ERV8xNCdcbiAgICBjYXNlIDE1OiByZXR1cm4gJ1JDT0RFXzE1J1xuICB9XG4gIHJldHVybiAnUkNPREVfJyArIHJjb2RlXG59XG5cbmV4cG9ydHMudG9SY29kZSA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gIHN3aXRjaCAoY29kZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgY2FzZSAnTk9FUlJPUic6IHJldHVybiAwXG4gICAgY2FzZSAnRk9STUVSUic6IHJldHVybiAxXG4gICAgY2FzZSAnU0VSVkZBSUwnOiByZXR1cm4gMlxuICAgIGNhc2UgJ05YRE9NQUlOJzogcmV0dXJuIDNcbiAgICBjYXNlICdOT1RJTVAnOiByZXR1cm4gNFxuICAgIGNhc2UgJ1JFRlVTRUQnOiByZXR1cm4gNVxuICAgIGNhc2UgJ1lYRE9NQUlOJzogcmV0dXJuIDZcbiAgICBjYXNlICdZWFJSU0VUJzogcmV0dXJuIDdcbiAgICBjYXNlICdOWFJSU0VUJzogcmV0dXJuIDhcbiAgICBjYXNlICdOT1RBVVRIJzogcmV0dXJuIDlcbiAgICBjYXNlICdOT1RaT05FJzogcmV0dXJuIDEwXG4gICAgY2FzZSAnUkNPREVfMTEnOiByZXR1cm4gMTFcbiAgICBjYXNlICdSQ09ERV8xMic6IHJldHVybiAxMlxuICAgIGNhc2UgJ1JDT0RFXzEzJzogcmV0dXJuIDEzXG4gICAgY2FzZSAnUkNPREVfMTQnOiByZXR1cm4gMTRcbiAgICBjYXNlICdSQ09ERV8xNSc6IHJldHVybiAxNVxuICB9XG4gIHJldHVybiAwXG59XG4iLCAiLypcbiAqIFRyYWRpdGlvbmFsIEROUyBoZWFkZXIgT1BDT0RFcyAoNC1iaXRzKSBkZWZpbmVkIGJ5IElBTkEgaW5cbiAqIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL2Rucy1wYXJhbWV0ZXJzL2Rucy1wYXJhbWV0ZXJzLnhodG1sI2Rucy1wYXJhbWV0ZXJzLTVcbiAqL1xuXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gKG9wY29kZSkge1xuICBzd2l0Y2ggKG9wY29kZSkge1xuICAgIGNhc2UgMDogcmV0dXJuICdRVUVSWSdcbiAgICBjYXNlIDE6IHJldHVybiAnSVFVRVJZJ1xuICAgIGNhc2UgMjogcmV0dXJuICdTVEFUVVMnXG4gICAgY2FzZSAzOiByZXR1cm4gJ09QQ09ERV8zJ1xuICAgIGNhc2UgNDogcmV0dXJuICdOT1RJRlknXG4gICAgY2FzZSA1OiByZXR1cm4gJ1VQREFURSdcbiAgICBjYXNlIDY6IHJldHVybiAnT1BDT0RFXzYnXG4gICAgY2FzZSA3OiByZXR1cm4gJ09QQ09ERV83J1xuICAgIGNhc2UgODogcmV0dXJuICdPUENPREVfOCdcbiAgICBjYXNlIDk6IHJldHVybiAnT1BDT0RFXzknXG4gICAgY2FzZSAxMDogcmV0dXJuICdPUENPREVfMTAnXG4gICAgY2FzZSAxMTogcmV0dXJuICdPUENPREVfMTEnXG4gICAgY2FzZSAxMjogcmV0dXJuICdPUENPREVfMTInXG4gICAgY2FzZSAxMzogcmV0dXJuICdPUENPREVfMTMnXG4gICAgY2FzZSAxNDogcmV0dXJuICdPUENPREVfMTQnXG4gICAgY2FzZSAxNTogcmV0dXJuICdPUENPREVfMTUnXG4gIH1cbiAgcmV0dXJuICdPUENPREVfJyArIG9wY29kZVxufVxuXG5leHBvcnRzLnRvT3Bjb2RlID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgc3dpdGNoIChjb2RlLnRvVXBwZXJDYXNlKCkpIHtcbiAgICBjYXNlICdRVUVSWSc6IHJldHVybiAwXG4gICAgY2FzZSAnSVFVRVJZJzogcmV0dXJuIDFcbiAgICBjYXNlICdTVEFUVVMnOiByZXR1cm4gMlxuICAgIGNhc2UgJ09QQ09ERV8zJzogcmV0dXJuIDNcbiAgICBjYXNlICdOT1RJRlknOiByZXR1cm4gNFxuICAgIGNhc2UgJ1VQREFURSc6IHJldHVybiA1XG4gICAgY2FzZSAnT1BDT0RFXzYnOiByZXR1cm4gNlxuICAgIGNhc2UgJ09QQ09ERV83JzogcmV0dXJuIDdcbiAgICBjYXNlICdPUENPREVfOCc6IHJldHVybiA4XG4gICAgY2FzZSAnT1BDT0RFXzknOiByZXR1cm4gOVxuICAgIGNhc2UgJ09QQ09ERV8xMCc6IHJldHVybiAxMFxuICAgIGNhc2UgJ09QQ09ERV8xMSc6IHJldHVybiAxMVxuICAgIGNhc2UgJ09QQ09ERV8xMic6IHJldHVybiAxMlxuICAgIGNhc2UgJ09QQ09ERV8xMyc6IHJldHVybiAxM1xuICAgIGNhc2UgJ09QQ09ERV8xNCc6IHJldHVybiAxNFxuICAgIGNhc2UgJ09QQ09ERV8xNSc6IHJldHVybiAxNVxuICB9XG4gIHJldHVybiAwXG59XG4iLCAidmFyIGlwID0gZXhwb3J0cztcbnZhciB7IEJ1ZmZlciB9ID0gcmVxdWlyZSgnYnVmZmVyJyk7XG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xuXG5pcC50b0J1ZmZlciA9IGZ1bmN0aW9uIChpcCwgYnVmZiwgb2Zmc2V0KSB7XG4gIG9mZnNldCA9IH5+b2Zmc2V0O1xuXG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHRoaXMuaXNWNEZvcm1hdChpcCkpIHtcbiAgICByZXN1bHQgPSBidWZmIHx8IG5ldyBCdWZmZXIob2Zmc2V0ICsgNCk7XG4gICAgaXAuc3BsaXQoL1xcLi9nKS5tYXAoKGJ5dGUpID0+IHtcbiAgICAgIHJlc3VsdFtvZmZzZXQrK10gPSBwYXJzZUludChieXRlLCAxMCkgJiAweGZmO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNWNkZvcm1hdChpcCkpIHtcbiAgICB2YXIgc2VjdGlvbnMgPSBpcC5zcGxpdCgnOicsIDgpO1xuXG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXN2NCA9IHRoaXMuaXNWNEZvcm1hdChzZWN0aW9uc1tpXSk7XG4gICAgICB2YXIgdjRCdWZmZXI7XG5cbiAgICAgIGlmIChpc3Y0KSB7XG4gICAgICAgIHY0QnVmZmVyID0gdGhpcy50b0J1ZmZlcihzZWN0aW9uc1tpXSk7XG4gICAgICAgIHNlY3Rpb25zW2ldID0gdjRCdWZmZXIuc2xpY2UoMCwgMikudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodjRCdWZmZXIgJiYgKytpIDwgOCkge1xuICAgICAgICBzZWN0aW9ucy5zcGxpY2UoaSwgMCwgdjRCdWZmZXIuc2xpY2UoMiwgNCkudG9TdHJpbmcoJ2hleCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VjdGlvbnNbMF0gPT09ICcnKSB7XG4gICAgICB3aGlsZSAoc2VjdGlvbnMubGVuZ3RoIDwgOCkgc2VjdGlvbnMudW5zaGlmdCgnMCcpO1xuICAgIH0gZWxzZSBpZiAoc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgICB3aGlsZSAoc2VjdGlvbnMubGVuZ3RoIDwgOCkgc2VjdGlvbnMucHVzaCgnMCcpO1xuICAgIH0gZWxzZSBpZiAoc2VjdGlvbnMubGVuZ3RoIDwgOCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aCAmJiBzZWN0aW9uc1tpXSAhPT0gJyc7IGkrKyk7XG4gICAgICB2YXIgYXJndiA9IFtpLCAxXTtcbiAgICAgIGZvciAoaSA9IDkgLSBzZWN0aW9ucy5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgYXJndi5wdXNoKCcwJyk7XG4gICAgICB9XG4gICAgICBzZWN0aW9ucy5zcGxpY2UuYXBwbHkoc2VjdGlvbnMsIGFyZ3YpO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IGJ1ZmYgfHwgbmV3IEJ1ZmZlcihvZmZzZXQgKyAxNik7XG4gICAgZm9yIChpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgd29yZCA9IHBhcnNlSW50KHNlY3Rpb25zW2ldLCAxNik7XG4gICAgICByZXN1bHRbb2Zmc2V0KytdID0gKHdvcmQgPj4gOCkgJiAweGZmO1xuICAgICAgcmVzdWx0W29mZnNldCsrXSA9IHdvcmQgJiAweGZmO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcmVzdWx0KSB7XG4gICAgdGhyb3cgRXJyb3IoYEludmFsaWQgaXAgYWRkcmVzczogJHtpcH1gKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pcC50b1N0cmluZyA9IGZ1bmN0aW9uIChidWZmLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSB+fm9mZnNldDtcbiAgbGVuZ3RoID0gbGVuZ3RoIHx8IChidWZmLmxlbmd0aCAtIG9mZnNldCk7XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaTtcbiAgaWYgKGxlbmd0aCA9PT0gNCkge1xuICAgIC8vIElQdjRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGJ1ZmZbb2Zmc2V0ICsgaV0pO1xuICAgIH1cbiAgICByZXN1bHQgPSByZXN1bHQuam9pbignLicpO1xuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMTYpIHtcbiAgICAvLyBJUHY2XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAyKSB7XG4gICAgICByZXN1bHQucHVzaChidWZmLnJlYWRVSW50MTZCRShvZmZzZXQgKyBpKS50b1N0cmluZygxNikpO1xuICAgIH1cbiAgICByZXN1bHQgPSByZXN1bHQuam9pbignOicpO1xuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC8oXnw6KTAoOjApKjowKDp8JCkvLCAnJDE6OiQzJyk7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoLzp7Myw0fS8sICc6OicpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBpcHY0UmVnZXggPSAvXihcXGR7MSwzfVxcLil7MywzfVxcZHsxLDN9JC87XG52YXIgaXB2NlJlZ2V4ID0gL14oOjopPygoKFxcZHsxLDN9XFwuKXszfShcXGR7MSwzfSl7MX0pPyhbMC05YS1mXSl7MCw0fTp7MCwyfSl7MSw4fSg6Oik/JC9pO1xuXG5pcC5pc1Y0Rm9ybWF0ID0gZnVuY3Rpb24gKGlwKSB7XG4gIHJldHVybiBpcHY0UmVnZXgudGVzdChpcCk7XG59O1xuXG5pcC5pc1Y2Rm9ybWF0ID0gZnVuY3Rpb24gKGlwKSB7XG4gIHJldHVybiBpcHY2UmVnZXgudGVzdChpcCk7XG59O1xuXG5mdW5jdGlvbiBfbm9ybWFsaXplRmFtaWx5KGZhbWlseSkge1xuICBpZiAoZmFtaWx5ID09PSA0KSB7XG4gICAgcmV0dXJuICdpcHY0JztcbiAgfVxuICBpZiAoZmFtaWx5ID09PSA2KSB7XG4gICAgcmV0dXJuICdpcHY2JztcbiAgfVxuICByZXR1cm4gZmFtaWx5ID8gZmFtaWx5LnRvTG93ZXJDYXNlKCkgOiAnaXB2NCc7XG59XG5cbmlwLmZyb21QcmVmaXhMZW4gPSBmdW5jdGlvbiAocHJlZml4bGVuLCBmYW1pbHkpIHtcbiAgaWYgKHByZWZpeGxlbiA+IDMyKSB7XG4gICAgZmFtaWx5ID0gJ2lwdjYnO1xuICB9IGVsc2Uge1xuICAgIGZhbWlseSA9IF9ub3JtYWxpemVGYW1pbHkoZmFtaWx5KTtcbiAgfVxuXG4gIHZhciBsZW4gPSA0O1xuICBpZiAoZmFtaWx5ID09PSAnaXB2NicpIHtcbiAgICBsZW4gPSAxNjtcbiAgfVxuICB2YXIgYnVmZiA9IG5ldyBCdWZmZXIobGVuKTtcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IGJ1ZmYubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgdmFyIGJpdHMgPSA4O1xuICAgIGlmIChwcmVmaXhsZW4gPCA4KSB7XG4gICAgICBiaXRzID0gcHJlZml4bGVuO1xuICAgIH1cbiAgICBwcmVmaXhsZW4gLT0gYml0cztcblxuICAgIGJ1ZmZbaV0gPSB+KDB4ZmYgPj4gYml0cykgJiAweGZmO1xuICB9XG5cbiAgcmV0dXJuIGlwLnRvU3RyaW5nKGJ1ZmYpO1xufTtcblxuaXAubWFzayA9IGZ1bmN0aW9uIChhZGRyLCBtYXNrKSB7XG4gIGFkZHIgPSBpcC50b0J1ZmZlcihhZGRyKTtcbiAgbWFzayA9IGlwLnRvQnVmZmVyKG1hc2spO1xuXG4gIHZhciByZXN1bHQgPSBuZXcgQnVmZmVyKE1hdGgubWF4KGFkZHIubGVuZ3RoLCBtYXNrLmxlbmd0aCkpO1xuXG4gIC8vIFNhbWUgcHJvdG9jb2wgLSBkbyBiaXR3aXNlIGFuZFxuICB2YXIgaTtcbiAgaWYgKGFkZHIubGVuZ3RoID09PSBtYXNrLmxlbmd0aCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBhZGRyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBhZGRyW2ldICYgbWFza1tpXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWFzay5sZW5ndGggPT09IDQpIHtcbiAgICAvLyBJUHY2IGFkZHJlc3MgYW5kIElQdjQgbWFza1xuICAgIC8vIChNYXNrIGxvdyBiaXRzKVxuICAgIGZvciAoaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBhZGRyW2FkZHIubGVuZ3RoIC0gNCArIGldICYgbWFza1tpXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSVB2NiBtYXNrIGFuZCBJUHY0IGFkZHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aCAtIDY7IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gMDtcbiAgICB9XG5cbiAgICAvLyA6OmZmZmY6aXB2NFxuICAgIHJlc3VsdFsxMF0gPSAweGZmO1xuICAgIHJlc3VsdFsxMV0gPSAweGZmO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhZGRyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaSArIDEyXSA9IGFkZHJbaV0gJiBtYXNrW2kgKyAxMl07XG4gICAgfVxuICAgIGkgKz0gMTI7XG4gIH1cbiAgZm9yICg7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSAwO1xuICB9XG5cbiAgcmV0dXJuIGlwLnRvU3RyaW5nKHJlc3VsdCk7XG59O1xuXG5pcC5jaWRyID0gZnVuY3Rpb24gKGNpZHJTdHJpbmcpIHtcbiAgdmFyIGNpZHJQYXJ0cyA9IGNpZHJTdHJpbmcuc3BsaXQoJy8nKTtcblxuICB2YXIgYWRkciA9IGNpZHJQYXJ0c1swXTtcbiAgaWYgKGNpZHJQYXJ0cy5sZW5ndGggIT09IDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgQ0lEUiBzdWJuZXQ6ICR7YWRkcn1gKTtcbiAgfVxuXG4gIHZhciBtYXNrID0gaXAuZnJvbVByZWZpeExlbihwYXJzZUludChjaWRyUGFydHNbMV0sIDEwKSk7XG5cbiAgcmV0dXJuIGlwLm1hc2soYWRkciwgbWFzayk7XG59O1xuXG5pcC5zdWJuZXQgPSBmdW5jdGlvbiAoYWRkciwgbWFzaykge1xuICB2YXIgbmV0d29ya0FkZHJlc3MgPSBpcC50b0xvbmcoaXAubWFzayhhZGRyLCBtYXNrKSk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBtYXNrJ3MgbGVuZ3RoLlxuICB2YXIgbWFza0J1ZmZlciA9IGlwLnRvQnVmZmVyKG1hc2spO1xuICB2YXIgbWFza0xlbmd0aCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1hc2tCdWZmZXJbaV0gPT09IDB4ZmYpIHtcbiAgICAgIG1hc2tMZW5ndGggKz0gODtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9jdGV0ID0gbWFza0J1ZmZlcltpXSAmIDB4ZmY7XG4gICAgICB3aGlsZSAob2N0ZXQpIHtcbiAgICAgICAgb2N0ZXQgPSAob2N0ZXQgPDwgMSkgJiAweGZmO1xuICAgICAgICBtYXNrTGVuZ3RoKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG51bWJlck9mQWRkcmVzc2VzID0gTWF0aC5wb3coMiwgMzIgLSBtYXNrTGVuZ3RoKTtcblxuICByZXR1cm4ge1xuICAgIG5ldHdvcmtBZGRyZXNzOiBpcC5mcm9tTG9uZyhuZXR3b3JrQWRkcmVzcyksXG4gICAgZmlyc3RBZGRyZXNzOiBudW1iZXJPZkFkZHJlc3NlcyA8PSAyXG4gICAgICA/IGlwLmZyb21Mb25nKG5ldHdvcmtBZGRyZXNzKVxuICAgICAgOiBpcC5mcm9tTG9uZyhuZXR3b3JrQWRkcmVzcyArIDEpLFxuICAgIGxhc3RBZGRyZXNzOiBudW1iZXJPZkFkZHJlc3NlcyA8PSAyXG4gICAgICA/IGlwLmZyb21Mb25nKG5ldHdvcmtBZGRyZXNzICsgbnVtYmVyT2ZBZGRyZXNzZXMgLSAxKVxuICAgICAgOiBpcC5mcm9tTG9uZyhuZXR3b3JrQWRkcmVzcyArIG51bWJlck9mQWRkcmVzc2VzIC0gMiksXG4gICAgYnJvYWRjYXN0QWRkcmVzczogaXAuZnJvbUxvbmcobmV0d29ya0FkZHJlc3MgKyBudW1iZXJPZkFkZHJlc3NlcyAtIDEpLFxuICAgIHN1Ym5ldE1hc2s6IG1hc2ssXG4gICAgc3VibmV0TWFza0xlbmd0aDogbWFza0xlbmd0aCxcbiAgICBudW1Ib3N0czogbnVtYmVyT2ZBZGRyZXNzZXMgPD0gMlxuICAgICAgPyBudW1iZXJPZkFkZHJlc3NlcyA6IG51bWJlck9mQWRkcmVzc2VzIC0gMixcbiAgICBsZW5ndGg6IG51bWJlck9mQWRkcmVzc2VzLFxuICAgIGNvbnRhaW5zKG90aGVyKSB7XG4gICAgICByZXR1cm4gbmV0d29ya0FkZHJlc3MgPT09IGlwLnRvTG9uZyhpcC5tYXNrKG90aGVyLCBtYXNrKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmlwLmNpZHJTdWJuZXQgPSBmdW5jdGlvbiAoY2lkclN0cmluZykge1xuICB2YXIgY2lkclBhcnRzID0gY2lkclN0cmluZy5zcGxpdCgnLycpO1xuXG4gIHZhciBhZGRyID0gY2lkclBhcnRzWzBdO1xuICBpZiAoY2lkclBhcnRzLmxlbmd0aCAhPT0gMikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBDSURSIHN1Ym5ldDogJHthZGRyfWApO1xuICB9XG5cbiAgdmFyIG1hc2sgPSBpcC5mcm9tUHJlZml4TGVuKHBhcnNlSW50KGNpZHJQYXJ0c1sxXSwgMTApKTtcblxuICByZXR1cm4gaXAuc3VibmV0KGFkZHIsIG1hc2spO1xufTtcblxuaXAubm90ID0gZnVuY3Rpb24gKGFkZHIpIHtcbiAgdmFyIGJ1ZmYgPSBpcC50b0J1ZmZlcihhZGRyKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgYnVmZltpXSA9IDB4ZmYgXiBidWZmW2ldO1xuICB9XG4gIHJldHVybiBpcC50b1N0cmluZyhidWZmKTtcbn07XG5cbmlwLm9yID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGk7XG5cbiAgYSA9IGlwLnRvQnVmZmVyKGEpO1xuICBiID0gaXAudG9CdWZmZXIoYik7XG5cbiAgLy8gc2FtZSBwcm90b2NvbFxuICBpZiAoYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGFbaV0gfD0gYltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGlwLnRvU3RyaW5nKGEpO1xuXG4gIC8vIG1peGVkIHByb3RvY29sc1xuICB9XG4gIHZhciBidWZmID0gYTtcbiAgdmFyIG90aGVyID0gYjtcbiAgaWYgKGIubGVuZ3RoID4gYS5sZW5ndGgpIHtcbiAgICBidWZmID0gYjtcbiAgICBvdGhlciA9IGE7XG4gIH1cblxuICB2YXIgb2Zmc2V0ID0gYnVmZi5sZW5ndGggLSBvdGhlci5sZW5ndGg7XG4gIGZvciAoaSA9IG9mZnNldDsgaSA8IGJ1ZmYubGVuZ3RoOyArK2kpIHtcbiAgICBidWZmW2ldIHw9IG90aGVyW2kgLSBvZmZzZXRdO1xuICB9XG5cbiAgcmV0dXJuIGlwLnRvU3RyaW5nKGJ1ZmYpO1xufTtcblxuaXAuaXNFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBpO1xuXG4gIGEgPSBpcC50b0J1ZmZlcihhKTtcbiAgYiA9IGlwLnRvQnVmZmVyKGIpO1xuXG4gIC8vIFNhbWUgcHJvdG9jb2xcbiAgaWYgKGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFN3YXBcbiAgaWYgKGIubGVuZ3RoID09PSA0KSB7XG4gICAgdmFyIHQgPSBiO1xuICAgIGIgPSBhO1xuICAgIGEgPSB0O1xuICB9XG5cbiAgLy8gYSAtIElQdjQsIGIgLSBJUHY2XG4gIGZvciAoaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgaWYgKGJbaV0gIT09IDApIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB3b3JkID0gYi5yZWFkVUludDE2QkUoMTApO1xuICBpZiAod29yZCAhPT0gMCAmJiB3b3JkICE9PSAweGZmZmYpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaSArIDEyXSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5pcC5pc1ByaXZhdGUgPSBmdW5jdGlvbiAoYWRkcikge1xuICByZXR1cm4gL14oOjpmezR9Oik/MTBcXC4oWzAtOV17MSwzfSlcXC4oWzAtOV17MSwzfSlcXC4oWzAtOV17MSwzfSkkL2lcbiAgICAudGVzdChhZGRyKVxuICAgIHx8IC9eKDo6Zns0fTopPzE5MlxcLjE2OFxcLihbMC05XXsxLDN9KVxcLihbMC05XXsxLDN9KSQvaS50ZXN0KGFkZHIpXG4gICAgfHwgL14oOjpmezR9Oik/MTcyXFwuKDFbNi05XXwyXFxkfDMwfDMxKVxcLihbMC05XXsxLDN9KVxcLihbMC05XXsxLDN9KSQvaVxuICAgICAgLnRlc3QoYWRkcilcbiAgICB8fCAvXig6OmZ7NH06KT8xMjdcXC4oWzAtOV17MSwzfSlcXC4oWzAtOV17MSwzfSlcXC4oWzAtOV17MSwzfSkkL2kudGVzdChhZGRyKVxuICAgIHx8IC9eKDo6Zns0fTopPzE2OVxcLjI1NFxcLihbMC05XXsxLDN9KVxcLihbMC05XXsxLDN9KSQvaS50ZXN0KGFkZHIpXG4gICAgfHwgL15mW2NkXVswLTlhLWZdezJ9Oi9pLnRlc3QoYWRkcilcbiAgICB8fCAvXmZlODA6L2kudGVzdChhZGRyKVxuICAgIHx8IC9eOjoxJC8udGVzdChhZGRyKVxuICAgIHx8IC9eOjokLy50ZXN0KGFkZHIpO1xufTtcblxuaXAuaXNQdWJsaWMgPSBmdW5jdGlvbiAoYWRkcikge1xuICByZXR1cm4gIWlwLmlzUHJpdmF0ZShhZGRyKTtcbn07XG5cbmlwLmlzTG9vcGJhY2sgPSBmdW5jdGlvbiAoYWRkcikge1xuICByZXR1cm4gL14oOjpmezR9Oik/MTI3XFwuKFswLTldezEsM30pXFwuKFswLTldezEsM30pXFwuKFswLTldezEsM30pL1xuICAgIC50ZXN0KGFkZHIpXG4gICAgfHwgL15mZTgwOjoxJC8udGVzdChhZGRyKVxuICAgIHx8IC9eOjoxJC8udGVzdChhZGRyKVxuICAgIHx8IC9eOjokLy50ZXN0KGFkZHIpO1xufTtcblxuaXAubG9vcGJhY2sgPSBmdW5jdGlvbiAoZmFtaWx5KSB7XG4gIC8vXG4gIC8vIERlZmF1bHQgdG8gYGlwdjRgXG4gIC8vXG4gIGZhbWlseSA9IF9ub3JtYWxpemVGYW1pbHkoZmFtaWx5KTtcblxuICBpZiAoZmFtaWx5ICE9PSAnaXB2NCcgJiYgZmFtaWx5ICE9PSAnaXB2NicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhbWlseSBtdXN0IGJlIGlwdjQgb3IgaXB2NicpO1xuICB9XG5cbiAgcmV0dXJuIGZhbWlseSA9PT0gJ2lwdjQnID8gJzEyNy4wLjAuMScgOiAnZmU4MDo6MSc7XG59O1xuXG4vL1xuLy8gIyMjIGZ1bmN0aW9uIGFkZHJlc3MgKG5hbWUsIGZhbWlseSlcbi8vICMjIyMgQG5hbWUge3N0cmluZ3wncHVibGljJ3wncHJpdmF0ZSd9ICoqT3B0aW9uYWwqKiBOYW1lIG9yIHNlY3VyaXR5XG4vLyAgICAgIG9mIHRoZSBuZXR3b3JrIGludGVyZmFjZS5cbi8vICMjIyMgQGZhbWlseSB7aXB2NHxpcHY2fSAqKk9wdGlvbmFsKiogSVAgZmFtaWx5IG9mIHRoZSBhZGRyZXNzIChkZWZhdWx0c1xuLy8gICAgICB0byBpcHY0KS5cbi8vXG4vLyBSZXR1cm5zIHRoZSBhZGRyZXNzIGZvciB0aGUgbmV0d29yayBpbnRlcmZhY2Ugb24gdGhlIGN1cnJlbnQgc3lzdGVtIHdpdGhcbi8vIHRoZSBzcGVjaWZpZWQgYG5hbWVgOlxuLy8gICAqIFN0cmluZzogRmlyc3QgYGZhbWlseWAgYWRkcmVzcyBvZiB0aGUgaW50ZXJmYWNlLlxuLy8gICAgICAgICAgICAgSWYgbm90IGZvdW5kIHNlZSBgdW5kZWZpbmVkYC5cbi8vICAgKiAncHVibGljJzogdGhlIGZpcnN0IHB1YmxpYyBpcCBhZGRyZXNzIG9mIGZhbWlseS5cbi8vICAgKiAncHJpdmF0ZSc6IHRoZSBmaXJzdCBwcml2YXRlIGlwIGFkZHJlc3Mgb2YgZmFtaWx5LlxuLy8gICAqIHVuZGVmaW5lZDogRmlyc3QgYWRkcmVzcyB3aXRoIGBpcHY0YCBvciBsb29wYmFjayBhZGRyZXNzIGAxMjcuMC4wLjFgLlxuLy9cbmlwLmFkZHJlc3MgPSBmdW5jdGlvbiAobmFtZSwgZmFtaWx5KSB7XG4gIHZhciBpbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcblxuICAvL1xuICAvLyBEZWZhdWx0IHRvIGBpcHY0YFxuICAvL1xuICBmYW1pbHkgPSBfbm9ybWFsaXplRmFtaWx5KGZhbWlseSk7XG5cbiAgLy9cbiAgLy8gSWYgYSBzcGVjaWZpYyBuZXR3b3JrIGludGVyZmFjZSBoYXMgYmVlbiBuYW1lZCxcbiAgLy8gcmV0dXJuIHRoZSBhZGRyZXNzLlxuICAvL1xuICBpZiAobmFtZSAmJiBuYW1lICE9PSAncHJpdmF0ZScgJiYgbmFtZSAhPT0gJ3B1YmxpYycpIHtcbiAgICB2YXIgcmVzID0gaW50ZXJmYWNlc1tuYW1lXS5maWx0ZXIoKGRldGFpbHMpID0+IHtcbiAgICAgIHZhciBpdGVtRmFtaWx5ID0gX25vcm1hbGl6ZUZhbWlseShkZXRhaWxzLmZhbWlseSk7XG4gICAgICByZXR1cm4gaXRlbUZhbWlseSA9PT0gZmFtaWx5O1xuICAgIH0pO1xuICAgIGlmIChyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzWzBdLmFkZHJlc3M7XG4gIH1cblxuICB2YXIgYWxsID0gT2JqZWN0LmtleXMoaW50ZXJmYWNlcykubWFwKChuaWMpID0+IHtcbiAgICAvL1xuICAgIC8vIE5vdGU6IG5hbWUgd2lsbCBvbmx5IGJlIGBwdWJsaWNgIG9yIGBwcml2YXRlYFxuICAgIC8vIHdoZW4gdGhpcyBpcyBjYWxsZWQuXG4gICAgLy9cbiAgICB2YXIgYWRkcmVzc2VzID0gaW50ZXJmYWNlc1tuaWNdLmZpbHRlcigoZGV0YWlscykgPT4ge1xuICAgICAgZGV0YWlscy5mYW1pbHkgPSBfbm9ybWFsaXplRmFtaWx5KGRldGFpbHMuZmFtaWx5KTtcbiAgICAgIGlmIChkZXRhaWxzLmZhbWlseSAhPT0gZmFtaWx5IHx8IGlwLmlzTG9vcGJhY2soZGV0YWlscy5hZGRyZXNzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hbWUgPT09ICdwdWJsaWMnID8gaXAuaXNQcml2YXRlKGRldGFpbHMuYWRkcmVzcylcbiAgICAgICAgOiBpcC5pc1B1YmxpYyhkZXRhaWxzLmFkZHJlc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZHJlc3Nlcy5sZW5ndGggPyBhZGRyZXNzZXNbMF0uYWRkcmVzcyA6IHVuZGVmaW5lZDtcbiAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIHJldHVybiAhYWxsLmxlbmd0aCA/IGlwLmxvb3BiYWNrKGZhbWlseSkgOiBhbGxbMF07XG59O1xuXG5pcC50b0xvbmcgPSBmdW5jdGlvbiAoaXApIHtcbiAgdmFyIGlwbCA9IDA7XG4gIGlwLnNwbGl0KCcuJykuZm9yRWFjaCgob2N0ZXQpID0+IHtcbiAgICBpcGwgPDw9IDg7XG4gICAgaXBsICs9IHBhcnNlSW50KG9jdGV0KTtcbiAgfSk7XG4gIHJldHVybiAoaXBsID4+PiAwKTtcbn07XG5cbmlwLmZyb21Mb25nID0gZnVuY3Rpb24gKGlwbCkge1xuICByZXR1cm4gKGAke2lwbCA+Pj4gMjR9LiR7XG4gICAgaXBsID4+IDE2ICYgMjU1fS4ke1xuICAgIGlwbCA+PiA4ICYgMjU1fS4ke1xuICAgIGlwbCAmIDI1NX1gKTtcbn07XG4iLCAiLyohIHNhZmUtYnVmZmVyLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJylcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbi8vIGFsdGVybmF0aXZlIHRvIHVzaW5nIE9iamVjdC5rZXlzIGZvciBvbGQgYnJvd3NlcnNcbmZ1bmN0aW9uIGNvcHlQcm9wcyAoc3JjLCBkc3QpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGRzdFtrZXldID0gc3JjW2tleV1cbiAgfVxufVxuaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5hbGxvYyAmJiBCdWZmZXIuYWxsb2NVbnNhZmUgJiYgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxufSBlbHNlIHtcbiAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gcmVxdWlyZSgnYnVmZmVyJylcbiAgY29weVByb3BzKGJ1ZmZlciwgZXhwb3J0cylcbiAgZXhwb3J0cy5CdWZmZXIgPSBTYWZlQnVmZmVyXG59XG5cbmZ1bmN0aW9uIFNhZmVCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCdWZmZXIucHJvdG90eXBlKVxuXG4vLyBDb3B5IHN0YXRpYyBtZXRob2RzIGZyb20gQnVmZmVyXG5jb3B5UHJvcHMoQnVmZmVyLCBTYWZlQnVmZmVyKVxuXG5TYWZlQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHZhciBidWYgPSBCdWZmZXIoc2l6ZSlcbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBidWYuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmZpbGwoZmlsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoMClcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihzaXplKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gYnVmZmVyLlNsb3dCdWZmZXIoc2l6ZSlcbn1cbiIsICJ2YXIgdHlwZXMgPSByZXF1aXJlKCcuL3R5cGVzJylcbnZhciByY29kZXMgPSByZXF1aXJlKCcuL3Jjb2RlcycpXG52YXIgb3Bjb2RlcyA9IHJlcXVpcmUoJy4vb3Bjb2RlcycpXG52YXIgaXAgPSByZXF1aXJlKCdpcCcpXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcblxudmFyIFFVRVJZX0ZMQUcgPSAwXG52YXIgUkVTUE9OU0VfRkxBRyA9IDEgPDwgMTVcbnZhciBGTFVTSF9NQVNLID0gMSA8PCAxNVxudmFyIE5PVF9GTFVTSF9NQVNLID0gfkZMVVNIX01BU0tcbnZhciBRVV9NQVNLID0gMSA8PCAxNVxudmFyIE5PVF9RVV9NQVNLID0gflFVX01BU0tcblxudmFyIG5hbWUgPSBleHBvcnRzLnR4dCA9IGV4cG9ydHMubmFtZSA9IHt9XG5cbm5hbWUuZW5jb2RlID0gZnVuY3Rpb24gKHN0ciwgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFidWYpIGJ1ZiA9IEJ1ZmZlci5hbGxvYyhuYW1lLmVuY29kaW5nTGVuZ3RoKHN0cikpXG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICAvLyBzdHJpcCBsZWFkaW5nIGFuZCB0cmFpbGluZyAuXG4gIHZhciBuID0gc3RyLnJlcGxhY2UoL15cXC58XFwuJC9nbSwgJycpXG4gIGlmIChuLmxlbmd0aCkge1xuICAgIHZhciBsaXN0ID0gbi5zcGxpdCgnLicpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsZW4gPSBidWYud3JpdGUobGlzdFtpXSwgb2Zmc2V0ICsgMSlcbiAgICAgIGJ1ZltvZmZzZXRdID0gbGVuXG4gICAgICBvZmZzZXQgKz0gbGVuICsgMVxuICAgIH1cbiAgfVxuXG4gIGJ1ZltvZmZzZXQrK10gPSAwXG5cbiAgbmFtZS5lbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIGJ1ZlxufVxuXG5uYW1lLmVuY29kZS5ieXRlcyA9IDBcblxubmFtZS5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICB2YXIgbGlzdCA9IFtdXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcbiAgdmFyIGxlbiA9IGJ1ZltvZmZzZXQrK11cblxuICBpZiAobGVuID09PSAwKSB7XG4gICAgbmFtZS5kZWNvZGUuYnl0ZXMgPSAxXG4gICAgcmV0dXJuICcuJ1xuICB9XG4gIGlmIChsZW4gPj0gMHhjMCkge1xuICAgIHZhciByZXMgPSBuYW1lLmRlY29kZShidWYsIGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0IC0gMSkgLSAweGMwMDApXG4gICAgbmFtZS5kZWNvZGUuYnl0ZXMgPSAyXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgd2hpbGUgKGxlbikge1xuICAgIGlmIChsZW4gPj0gMHhjMCkge1xuICAgICAgbGlzdC5wdXNoKG5hbWUuZGVjb2RlKGJ1ZiwgYnVmLnJlYWRVSW50MTZCRShvZmZzZXQgLSAxKSAtIDB4YzAwMCkpXG4gICAgICBvZmZzZXQrK1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsaXN0LnB1c2goYnVmLnRvU3RyaW5nKCd1dGYtOCcsIG9mZnNldCwgb2Zmc2V0ICsgbGVuKSlcbiAgICBvZmZzZXQgKz0gbGVuXG4gICAgbGVuID0gYnVmW29mZnNldCsrXVxuICB9XG5cbiAgbmFtZS5kZWNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIGxpc3Quam9pbignLicpXG59XG5cbm5hbWUuZGVjb2RlLmJ5dGVzID0gMFxuXG5uYW1lLmVuY29kaW5nTGVuZ3RoID0gZnVuY3Rpb24gKG4pIHtcbiAgaWYgKG4gPT09ICcuJyB8fCBuID09PSAnLi4nKSByZXR1cm4gMVxuICByZXR1cm4gQnVmZmVyLmJ5dGVMZW5ndGgobi5yZXBsYWNlKC9eXFwufFxcLiQvZ20sICcnKSkgKyAyXG59XG5cbnZhciBzdHJpbmcgPSB7fVxuXG5zdHJpbmcuZW5jb2RlID0gZnVuY3Rpb24gKHMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghYnVmKSBidWYgPSBCdWZmZXIuYWxsb2Moc3RyaW5nLmVuY29kaW5nTGVuZ3RoKHMpKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIHZhciBsZW4gPSBidWYud3JpdGUocywgb2Zmc2V0ICsgMSlcbiAgYnVmW29mZnNldF0gPSBsZW5cbiAgc3RyaW5nLmVuY29kZS5ieXRlcyA9IGxlbiArIDFcbiAgcmV0dXJuIGJ1ZlxufVxuXG5zdHJpbmcuZW5jb2RlLmJ5dGVzID0gMFxuXG5zdHJpbmcuZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIGxlbiA9IGJ1ZltvZmZzZXRdXG4gIHZhciBzID0gYnVmLnRvU3RyaW5nKCd1dGYtOCcsIG9mZnNldCArIDEsIG9mZnNldCArIDEgKyBsZW4pXG4gIHN0cmluZy5kZWNvZGUuYnl0ZXMgPSBsZW4gKyAxXG4gIHJldHVybiBzXG59XG5cbnN0cmluZy5kZWNvZGUuYnl0ZXMgPSAwXG5cbnN0cmluZy5lbmNvZGluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzKSB7XG4gIHJldHVybiBCdWZmZXIuYnl0ZUxlbmd0aChzKSArIDFcbn1cblxudmFyIGhlYWRlciA9IHt9XG5cbmhlYWRlci5lbmNvZGUgPSBmdW5jdGlvbiAoaCwgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFidWYpIGJ1ZiA9IGhlYWRlci5lbmNvZGluZ0xlbmd0aChoKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIHZhciBmbGFncyA9IChoLmZsYWdzIHx8IDApICYgMzI3NjdcbiAgdmFyIHR5cGUgPSBoLnR5cGUgPT09ICdyZXNwb25zZScgPyBSRVNQT05TRV9GTEFHIDogUVVFUllfRkxBR1xuXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKGguaWQgfHwgMCwgb2Zmc2V0KVxuICBidWYud3JpdGVVSW50MTZCRShmbGFncyB8IHR5cGUsIG9mZnNldCArIDIpXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKGgucXVlc3Rpb25zLmxlbmd0aCwgb2Zmc2V0ICsgNClcbiAgYnVmLndyaXRlVUludDE2QkUoaC5hbnN3ZXJzLmxlbmd0aCwgb2Zmc2V0ICsgNilcbiAgYnVmLndyaXRlVUludDE2QkUoaC5hdXRob3JpdGllcy5sZW5ndGgsIG9mZnNldCArIDgpXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKGguYWRkaXRpb25hbHMubGVuZ3RoLCBvZmZzZXQgKyAxMClcblxuICByZXR1cm4gYnVmXG59XG5cbmhlYWRlci5lbmNvZGUuYnl0ZXMgPSAxMlxuXG5oZWFkZXIuZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG4gIGlmIChidWYubGVuZ3RoIDwgMTIpIHRocm93IG5ldyBFcnJvcignSGVhZGVyIG11c3QgYmUgMTIgYnl0ZXMnKVxuICB2YXIgZmxhZ3MgPSBidWYucmVhZFVJbnQxNkJFKG9mZnNldCArIDIpXG5cbiAgcmV0dXJuIHtcbiAgICBpZDogYnVmLnJlYWRVSW50MTZCRShvZmZzZXQpLFxuICAgIHR5cGU6IGZsYWdzICYgUkVTUE9OU0VfRkxBRyA/ICdyZXNwb25zZScgOiAncXVlcnknLFxuICAgIGZsYWdzOiBmbGFncyAmIDMyNzY3LFxuICAgIGZsYWdfcXI6ICgoZmxhZ3MgPj4gMTUpICYgMHgxKSA9PT0gMSxcbiAgICBvcGNvZGU6IG9wY29kZXMudG9TdHJpbmcoKGZsYWdzID4+IDExKSAmIDB4ZiksXG4gICAgZmxhZ19hdXRoOiAoKGZsYWdzID4+IDEwKSAmIDB4MSkgPT09IDEsXG4gICAgZmxhZ190cnVuYzogKChmbGFncyA+PiA5KSAmIDB4MSkgPT09IDEsXG4gICAgZmxhZ19yZDogKChmbGFncyA+PiA4KSAmIDB4MSkgPT09IDEsXG4gICAgZmxhZ19yYTogKChmbGFncyA+PiA3KSAmIDB4MSkgPT09IDEsXG4gICAgZmxhZ196OiAoKGZsYWdzID4+IDYpICYgMHgxKSA9PT0gMSxcbiAgICBmbGFnX2FkOiAoKGZsYWdzID4+IDUpICYgMHgxKSA9PT0gMSxcbiAgICBmbGFnX2NkOiAoKGZsYWdzID4+IDQpICYgMHgxKSA9PT0gMSxcbiAgICByY29kZTogcmNvZGVzLnRvU3RyaW5nKGZsYWdzICYgMHhmKSxcbiAgICBxdWVzdGlvbnM6IG5ldyBBcnJheShidWYucmVhZFVJbnQxNkJFKG9mZnNldCArIDQpKSxcbiAgICBhbnN3ZXJzOiBuZXcgQXJyYXkoYnVmLnJlYWRVSW50MTZCRShvZmZzZXQgKyA2KSksXG4gICAgYXV0aG9yaXRpZXM6IG5ldyBBcnJheShidWYucmVhZFVJbnQxNkJFKG9mZnNldCArIDgpKSxcbiAgICBhZGRpdGlvbmFsczogbmV3IEFycmF5KGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0ICsgMTApKVxuICB9XG59XG5cbmhlYWRlci5kZWNvZGUuYnl0ZXMgPSAxMlxuXG5oZWFkZXIuZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAxMlxufVxuXG52YXIgcnVua25vd24gPSBleHBvcnRzLnVua25vd24gPSB7fVxuXG5ydW5rbm93bi5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFidWYpIGJ1ZiA9IEJ1ZmZlci5hbGxvYyhydW5rbm93bi5lbmNvZGluZ0xlbmd0aChkYXRhKSlcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICBidWYud3JpdGVVSW50MTZCRShkYXRhLmxlbmd0aCwgb2Zmc2V0KVxuICBkYXRhLmNvcHkoYnVmLCBvZmZzZXQgKyAyKVxuXG4gIHJ1bmtub3duLmVuY29kZS5ieXRlcyA9IGRhdGEubGVuZ3RoICsgMlxuICByZXR1cm4gYnVmXG59XG5cbnJ1bmtub3duLmVuY29kZS5ieXRlcyA9IDBcblxucnVua25vd24uZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIGxlbiA9IGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0KVxuICB2YXIgZGF0YSA9IGJ1Zi5zbGljZShvZmZzZXQgKyAyLCBvZmZzZXQgKyAyICsgbGVuKVxuICBydW5rbm93bi5kZWNvZGUuYnl0ZXMgPSBsZW4gKyAyXG4gIHJldHVybiBkYXRhXG59XG5cbnJ1bmtub3duLmRlY29kZS5ieXRlcyA9IDBcblxucnVua25vd24uZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4gZGF0YS5sZW5ndGggKyAyXG59XG5cbnZhciBybnMgPSBleHBvcnRzLm5zID0ge31cblxucm5zLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBidWYsIG9mZnNldCkge1xuICBpZiAoIWJ1ZikgYnVmID0gQnVmZmVyLmFsbG9jKHJucy5lbmNvZGluZ0xlbmd0aChkYXRhKSlcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICBuYW1lLmVuY29kZShkYXRhLCBidWYsIG9mZnNldCArIDIpXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKG5hbWUuZW5jb2RlLmJ5dGVzLCBvZmZzZXQpXG4gIHJucy5lbmNvZGUuYnl0ZXMgPSBuYW1lLmVuY29kZS5ieXRlcyArIDJcbiAgcmV0dXJuIGJ1ZlxufVxuXG5ybnMuZW5jb2RlLmJ5dGVzID0gMFxuXG5ybnMuZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIGxlbiA9IGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0KVxuICB2YXIgZGQgPSBuYW1lLmRlY29kZShidWYsIG9mZnNldCArIDIpXG5cbiAgcm5zLmRlY29kZS5ieXRlcyA9IGxlbiArIDJcbiAgcmV0dXJuIGRkXG59XG5cbnJucy5kZWNvZGUuYnl0ZXMgPSAwXG5cbnJucy5lbmNvZGluZ0xlbmd0aCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiBuYW1lLmVuY29kaW5nTGVuZ3RoKGRhdGEpICsgMlxufVxuXG52YXIgcnNvYSA9IGV4cG9ydHMuc29hID0ge31cblxucnNvYS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFidWYpIGJ1ZiA9IEJ1ZmZlci5hbGxvYyhyc29hLmVuY29kaW5nTGVuZ3RoKGRhdGEpKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcbiAgb2Zmc2V0ICs9IDJcbiAgbmFtZS5lbmNvZGUoZGF0YS5tbmFtZSwgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCArPSBuYW1lLmVuY29kZS5ieXRlc1xuICBuYW1lLmVuY29kZShkYXRhLnJuYW1lLCBidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IG5hbWUuZW5jb2RlLmJ5dGVzXG4gIGJ1Zi53cml0ZVVJbnQzMkJFKGRhdGEuc2VyaWFsIHx8IDAsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcbiAgYnVmLndyaXRlVUludDMyQkUoZGF0YS5yZWZyZXNoIHx8IDAsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcbiAgYnVmLndyaXRlVUludDMyQkUoZGF0YS5yZXRyeSB8fCAwLCBvZmZzZXQpXG4gIG9mZnNldCArPSA0XG4gIGJ1Zi53cml0ZVVJbnQzMkJFKGRhdGEuZXhwaXJlIHx8IDAsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcbiAgYnVmLndyaXRlVUludDMyQkUoZGF0YS5taW5pbXVtIHx8IDAsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcblxuICBidWYud3JpdGVVSW50MTZCRShvZmZzZXQgLSBvbGRPZmZzZXQgLSAyLCBvbGRPZmZzZXQpXG4gIHJzb2EuZW5jb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0XG4gIHJldHVybiBidWZcbn1cblxucnNvYS5lbmNvZGUuYnl0ZXMgPSAwXG5cbnJzb2EuZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuXG4gIHZhciBkYXRhID0ge31cbiAgb2Zmc2V0ICs9IDJcbiAgZGF0YS5tbmFtZSA9IG5hbWUuZGVjb2RlKGJ1Ziwgb2Zmc2V0KVxuICBvZmZzZXQgKz0gbmFtZS5kZWNvZGUuYnl0ZXNcbiAgZGF0YS5ybmFtZSA9IG5hbWUuZGVjb2RlKGJ1Ziwgb2Zmc2V0KVxuICBvZmZzZXQgKz0gbmFtZS5kZWNvZGUuYnl0ZXNcbiAgZGF0YS5zZXJpYWwgPSBidWYucmVhZFVJbnQzMkJFKG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcbiAgZGF0YS5yZWZyZXNoID0gYnVmLnJlYWRVSW50MzJCRShvZmZzZXQpXG4gIG9mZnNldCArPSA0XG4gIGRhdGEucmV0cnkgPSBidWYucmVhZFVJbnQzMkJFKG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcbiAgZGF0YS5leHBpcmUgPSBidWYucmVhZFVJbnQzMkJFKG9mZnNldClcbiAgb2Zmc2V0ICs9IDRcbiAgZGF0YS5taW5pbXVtID0gYnVmLnJlYWRVSW50MzJCRShvZmZzZXQpXG4gIG9mZnNldCArPSA0XG5cbiAgcnNvYS5kZWNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIGRhdGFcbn1cblxucnNvYS5kZWNvZGUuYnl0ZXMgPSAwXG5cbnJzb2EuZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4gMjIgKyBuYW1lLmVuY29kaW5nTGVuZ3RoKGRhdGEubW5hbWUpICsgbmFtZS5lbmNvZGluZ0xlbmd0aChkYXRhLnJuYW1lKVxufVxuXG52YXIgcnR4dCA9IGV4cG9ydHMudHh0ID0gZXhwb3J0cy5udWxsID0ge31cbnZhciBybnVsbCA9IHJ0eHRcblxucnR4dC5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFidWYpIGJ1ZiA9IEJ1ZmZlci5hbGxvYyhydHh0LmVuY29kaW5nTGVuZ3RoKGRhdGEpKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKVxuICBpZiAoIWRhdGEpIGRhdGEgPSBCdWZmZXIuYWxsb2MoMClcblxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG4gIG9mZnNldCArPSAyXG5cbiAgdmFyIGxlbiA9IGRhdGEubGVuZ3RoXG4gIGRhdGEuY29weShidWYsIG9mZnNldCwgMCwgbGVuKVxuICBvZmZzZXQgKz0gbGVuXG5cbiAgYnVmLndyaXRlVUludDE2QkUob2Zmc2V0IC0gb2xkT2Zmc2V0IC0gMiwgb2xkT2Zmc2V0KVxuICBydHh0LmVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldFxuICByZXR1cm4gYnVmXG59XG5cbnJ0eHQuZW5jb2RlLmJ5dGVzID0gMFxuXG5ydHh0LmRlY29kZSA9IGZ1bmN0aW9uIChidWYsIG9mZnNldCkge1xuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG4gIHZhciBsZW4gPSBidWYucmVhZFVJbnQxNkJFKG9mZnNldClcblxuICBvZmZzZXQgKz0gMlxuXG4gIHZhciBkYXRhID0gYnVmLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGVuKVxuICBvZmZzZXQgKz0gbGVuXG5cbiAgcnR4dC5kZWNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIGRhdGFcbn1cblxucnR4dC5kZWNvZGUuYnl0ZXMgPSAwXG5cbnJ0eHQuZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoIWRhdGEpIHJldHVybiAyXG4gIHJldHVybiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpID8gZGF0YS5sZW5ndGggOiBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSkgKyAyXG59XG5cbnZhciByaGluZm8gPSBleHBvcnRzLmhpbmZvID0ge31cblxucmhpbmZvLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBidWYsIG9mZnNldCkge1xuICBpZiAoIWJ1ZikgYnVmID0gQnVmZmVyLmFsbG9jKHJoaW5mby5lbmNvZGluZ0xlbmd0aChkYXRhKSlcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG4gIG9mZnNldCArPSAyXG4gIHN0cmluZy5lbmNvZGUoZGF0YS5jcHUsIGJ1Ziwgb2Zmc2V0KVxuICBvZmZzZXQgKz0gc3RyaW5nLmVuY29kZS5ieXRlc1xuICBzdHJpbmcuZW5jb2RlKGRhdGEub3MsIGJ1Ziwgb2Zmc2V0KVxuICBvZmZzZXQgKz0gc3RyaW5nLmVuY29kZS5ieXRlc1xuICBidWYud3JpdGVVSW50MTZCRShvZmZzZXQgLSBvbGRPZmZzZXQgLSAyLCBvbGRPZmZzZXQpXG4gIHJoaW5mby5lbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIGJ1ZlxufVxuXG5yaGluZm8uZW5jb2RlLmJ5dGVzID0gMFxuXG5yaGluZm8uZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuXG4gIHZhciBkYXRhID0ge31cbiAgb2Zmc2V0ICs9IDJcbiAgZGF0YS5jcHUgPSBzdHJpbmcuZGVjb2RlKGJ1Ziwgb2Zmc2V0KVxuICBvZmZzZXQgKz0gc3RyaW5nLmRlY29kZS5ieXRlc1xuICBkYXRhLm9zID0gc3RyaW5nLmRlY29kZShidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IHN0cmluZy5kZWNvZGUuYnl0ZXNcbiAgcmhpbmZvLmRlY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldFxuICByZXR1cm4gZGF0YVxufVxuXG5yaGluZm8uZGVjb2RlLmJ5dGVzID0gMFxuXG5yaGluZm8uZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4gc3RyaW5nLmVuY29kaW5nTGVuZ3RoKGRhdGEuY3B1KSArIHN0cmluZy5lbmNvZGluZ0xlbmd0aChkYXRhLm9zKSArIDJcbn1cblxudmFyIHJwdHIgPSBleHBvcnRzLnB0ciA9IHt9XG52YXIgcmNuYW1lID0gZXhwb3J0cy5jbmFtZSA9IHJwdHJcbnZhciByZG5hbWUgPSBleHBvcnRzLmRuYW1lID0gcnB0clxuXG5ycHRyLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBidWYsIG9mZnNldCkge1xuICBpZiAoIWJ1ZikgYnVmID0gQnVmZmVyLmFsbG9jKHJwdHIuZW5jb2RpbmdMZW5ndGgoZGF0YSkpXG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgbmFtZS5lbmNvZGUoZGF0YSwgYnVmLCBvZmZzZXQgKyAyKVxuICBidWYud3JpdGVVSW50MTZCRShuYW1lLmVuY29kZS5ieXRlcywgb2Zmc2V0KVxuICBycHRyLmVuY29kZS5ieXRlcyA9IG5hbWUuZW5jb2RlLmJ5dGVzICsgMlxuICByZXR1cm4gYnVmXG59XG5cbnJwdHIuZW5jb2RlLmJ5dGVzID0gMFxuXG5ycHRyLmRlY29kZSA9IGZ1bmN0aW9uIChidWYsIG9mZnNldCkge1xuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIHZhciBkYXRhID0gbmFtZS5kZWNvZGUoYnVmLCBvZmZzZXQgKyAyKVxuICBycHRyLmRlY29kZS5ieXRlcyA9IG5hbWUuZGVjb2RlLmJ5dGVzICsgMlxuICByZXR1cm4gZGF0YVxufVxuXG5ycHRyLmRlY29kZS5ieXRlcyA9IDBcblxucnB0ci5lbmNvZGluZ0xlbmd0aCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiBuYW1lLmVuY29kaW5nTGVuZ3RoKGRhdGEpICsgMlxufVxuXG52YXIgcnNydiA9IGV4cG9ydHMuc3J2ID0ge31cblxucnNydi5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFidWYpIGJ1ZiA9IEJ1ZmZlci5hbGxvYyhyc3J2LmVuY29kaW5nTGVuZ3RoKGRhdGEpKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKGRhdGEucHJpb3JpdHkgfHwgMCwgb2Zmc2V0ICsgMilcbiAgYnVmLndyaXRlVUludDE2QkUoZGF0YS53ZWlnaHQgfHwgMCwgb2Zmc2V0ICsgNClcbiAgYnVmLndyaXRlVUludDE2QkUoZGF0YS5wb3J0IHx8IDAsIG9mZnNldCArIDYpXG4gIG5hbWUuZW5jb2RlKGRhdGEudGFyZ2V0LCBidWYsIG9mZnNldCArIDgpXG5cbiAgdmFyIGxlbiA9IG5hbWUuZW5jb2RlLmJ5dGVzICsgNlxuICBidWYud3JpdGVVSW50MTZCRShsZW4sIG9mZnNldClcblxuICByc3J2LmVuY29kZS5ieXRlcyA9IGxlbiArIDJcbiAgcmV0dXJuIGJ1ZlxufVxuXG5yc3J2LmVuY29kZS5ieXRlcyA9IDBcblxucnNydi5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICB2YXIgbGVuID0gYnVmLnJlYWRVSW50MTZCRShvZmZzZXQpXG5cbiAgdmFyIGRhdGEgPSB7fVxuICBkYXRhLnByaW9yaXR5ID0gYnVmLnJlYWRVSW50MTZCRShvZmZzZXQgKyAyKVxuICBkYXRhLndlaWdodCA9IGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0ICsgNClcbiAgZGF0YS5wb3J0ID0gYnVmLnJlYWRVSW50MTZCRShvZmZzZXQgKyA2KVxuICBkYXRhLnRhcmdldCA9IG5hbWUuZGVjb2RlKGJ1Ziwgb2Zmc2V0ICsgOClcblxuICByc3J2LmRlY29kZS5ieXRlcyA9IGxlbiArIDJcbiAgcmV0dXJuIGRhdGFcbn1cblxucnNydi5kZWNvZGUuYnl0ZXMgPSAwXG5cbnJzcnYuZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4gOCArIG5hbWUuZW5jb2RpbmdMZW5ndGgoZGF0YS50YXJnZXQpXG59XG5cbnZhciByY2FhID0gZXhwb3J0cy5jYWEgPSB7fVxuXG5yY2FhLklTU1VFUl9DUklUSUNBTCA9IDEgPDwgN1xuXG5yY2FhLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBidWYsIG9mZnNldCkge1xuICB2YXIgbGVuID0gcmNhYS5lbmNvZGluZ0xlbmd0aChkYXRhKVxuXG4gIGlmICghYnVmKSBidWYgPSBCdWZmZXIuYWxsb2MocmNhYS5lbmNvZGluZ0xlbmd0aChkYXRhKSlcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICBpZiAoZGF0YS5pc3N1ZXJDcml0aWNhbCkge1xuICAgIGRhdGEuZmxhZ3MgPSByY2FhLklTU1VFUl9DUklUSUNBTFxuICB9XG5cbiAgYnVmLndyaXRlVUludDE2QkUobGVuIC0gMiwgb2Zmc2V0KVxuICBvZmZzZXQgKz0gMlxuICBidWYud3JpdGVVSW50OChkYXRhLmZsYWdzIHx8IDAsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDFcbiAgc3RyaW5nLmVuY29kZShkYXRhLnRhZywgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCArPSBzdHJpbmcuZW5jb2RlLmJ5dGVzXG4gIGJ1Zi53cml0ZShkYXRhLnZhbHVlLCBvZmZzZXQpXG4gIG9mZnNldCArPSBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhLnZhbHVlKVxuXG4gIHJjYWEuZW5jb2RlLmJ5dGVzID0gbGVuXG4gIHJldHVybiBidWZcbn1cblxucmNhYS5lbmNvZGUuYnl0ZXMgPSAwXG5cbnJjYWEuZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIGxlbiA9IGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0KVxuICBvZmZzZXQgKz0gMlxuXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcbiAgdmFyIGRhdGEgPSB7fVxuICBkYXRhLmZsYWdzID0gYnVmLnJlYWRVSW50OChvZmZzZXQpXG4gIG9mZnNldCArPSAxXG4gIGRhdGEudGFnID0gc3RyaW5nLmRlY29kZShidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IHN0cmluZy5kZWNvZGUuYnl0ZXNcbiAgZGF0YS52YWx1ZSA9IGJ1Zi50b1N0cmluZygndXRmLTgnLCBvZmZzZXQsIG9sZE9mZnNldCArIGxlbilcblxuICBkYXRhLmlzc3VlckNyaXRpY2FsID0gISEoZGF0YS5mbGFncyAmIHJjYWEuSVNTVUVSX0NSSVRJQ0FMKVxuXG4gIHJjYWEuZGVjb2RlLmJ5dGVzID0gbGVuICsgMlxuXG4gIHJldHVybiBkYXRhXG59XG5cbnJjYWEuZGVjb2RlLmJ5dGVzID0gMFxuXG5yY2FhLmVuY29kaW5nTGVuZ3RoID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgcmV0dXJuIHN0cmluZy5lbmNvZGluZ0xlbmd0aChkYXRhLnRhZykgKyBzdHJpbmcuZW5jb2RpbmdMZW5ndGgoZGF0YS52YWx1ZSkgKyAyXG59XG5cbnZhciByYSA9IGV4cG9ydHMuYSA9IHt9XG5cbnJhLmVuY29kZSA9IGZ1bmN0aW9uIChob3N0LCBidWYsIG9mZnNldCkge1xuICBpZiAoIWJ1ZikgYnVmID0gQnVmZmVyLmFsbG9jKHJhLmVuY29kaW5nTGVuZ3RoKGhvc3QpKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKDQsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDJcbiAgaXAudG9CdWZmZXIoaG9zdCwgYnVmLCBvZmZzZXQpXG4gIHJhLmVuY29kZS5ieXRlcyA9IDZcbiAgcmV0dXJuIGJ1ZlxufVxuXG5yYS5lbmNvZGUuYnl0ZXMgPSAwXG5cbnJhLmRlY29kZSA9IGZ1bmN0aW9uIChidWYsIG9mZnNldCkge1xuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIG9mZnNldCArPSAyXG4gIHZhciBob3N0ID0gaXAudG9TdHJpbmcoYnVmLCBvZmZzZXQsIDQpXG4gIHJhLmRlY29kZS5ieXRlcyA9IDZcbiAgcmV0dXJuIGhvc3Rcbn1cblxucmEuZGVjb2RlLmJ5dGVzID0gMFxuXG5yYS5lbmNvZGluZ0xlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDZcbn1cblxudmFyIHJhYWFhID0gZXhwb3J0cy5hYWFhID0ge31cblxucmFhYWEuZW5jb2RlID0gZnVuY3Rpb24gKGhvc3QsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghYnVmKSBidWYgPSBCdWZmZXIuYWxsb2MocmFhYWEuZW5jb2RpbmdMZW5ndGgoaG9zdCkpXG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgYnVmLndyaXRlVUludDE2QkUoMTYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDJcbiAgaXAudG9CdWZmZXIoaG9zdCwgYnVmLCBvZmZzZXQpXG4gIHJhYWFhLmVuY29kZS5ieXRlcyA9IDE4XG4gIHJldHVybiBidWZcbn1cblxucmFhYWEuZW5jb2RlLmJ5dGVzID0gMFxuXG5yYWFhYS5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICBvZmZzZXQgKz0gMlxuICB2YXIgaG9zdCA9IGlwLnRvU3RyaW5nKGJ1Ziwgb2Zmc2V0LCAxNilcbiAgcmFhYWEuZGVjb2RlLmJ5dGVzID0gMThcbiAgcmV0dXJuIGhvc3Rcbn1cblxucmFhYWEuZGVjb2RlLmJ5dGVzID0gMFxuXG5yYWFhYS5lbmNvZGluZ0xlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDE4XG59XG5cbnZhciByZW5jID0gZXhwb3J0cy5yZWNvcmQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUudG9VcHBlckNhc2UoKSkge1xuICAgIGNhc2UgJ0EnOiByZXR1cm4gcmFcbiAgICBjYXNlICdQVFInOiByZXR1cm4gcnB0clxuICAgIGNhc2UgJ0NOQU1FJzogcmV0dXJuIHJjbmFtZVxuICAgIGNhc2UgJ0ROQU1FJzogcmV0dXJuIHJkbmFtZVxuICAgIGNhc2UgJ1RYVCc6IHJldHVybiBydHh0XG4gICAgY2FzZSAnTlVMTCc6IHJldHVybiBybnVsbFxuICAgIGNhc2UgJ0FBQUEnOiByZXR1cm4gcmFhYWFcbiAgICBjYXNlICdTUlYnOiByZXR1cm4gcnNydlxuICAgIGNhc2UgJ0hJTkZPJzogcmV0dXJuIHJoaW5mb1xuICAgIGNhc2UgJ0NBQSc6IHJldHVybiByY2FhXG4gICAgY2FzZSAnTlMnOiByZXR1cm4gcm5zXG4gICAgY2FzZSAnU09BJzogcmV0dXJuIHJzb2FcbiAgfVxuICByZXR1cm4gcnVua25vd25cbn1cblxudmFyIGFuc3dlciA9IGV4cG9ydHMuYW5zd2VyID0ge31cblxuYW5zd2VyLmVuY29kZSA9IGZ1bmN0aW9uIChhLCBidWYsIG9mZnNldCkge1xuICBpZiAoIWJ1ZikgYnVmID0gQnVmZmVyLmFsbG9jKGFuc3dlci5lbmNvZGluZ0xlbmd0aChhKSlcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG5cbiAgbmFtZS5lbmNvZGUoYS5uYW1lLCBidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IG5hbWUuZW5jb2RlLmJ5dGVzXG5cbiAgYnVmLndyaXRlVUludDE2QkUodHlwZXMudG9UeXBlKGEudHlwZSksIG9mZnNldClcblxuICB2YXIga2xhc3MgPSBhLmNsYXNzID09PSB1bmRlZmluZWQgPyAxIDogYS5jbGFzc1xuICBpZiAoYS5mbHVzaCkga2xhc3MgfD0gRkxVU0hfTUFTSyAvLyB0aGUgMXN0IGJpdCBvZiB0aGUgY2xhc3MgaXMgdGhlIGZsdXNoIGJpdFxuICBidWYud3JpdGVVSW50MTZCRShrbGFzcywgb2Zmc2V0ICsgMilcblxuICBidWYud3JpdGVVSW50MzJCRShhLnR0bCB8fCAwLCBvZmZzZXQgKyA0KVxuXG4gIHZhciBlbmMgPSByZW5jKGEudHlwZSlcbiAgZW5jLmVuY29kZShhLmRhdGEsIGJ1Ziwgb2Zmc2V0ICsgOClcbiAgb2Zmc2V0ICs9IDggKyBlbmMuZW5jb2RlLmJ5dGVzXG5cbiAgYW5zd2VyLmVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldFxuICByZXR1cm4gYnVmXG59XG5cbmFuc3dlci5lbmNvZGUuYnl0ZXMgPSAwXG5cbmFuc3dlci5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICB2YXIgYSA9IHt9XG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICBhLm5hbWUgPSBuYW1lLmRlY29kZShidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IG5hbWUuZGVjb2RlLmJ5dGVzXG4gIGEudHlwZSA9IHR5cGVzLnRvU3RyaW5nKGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0KSlcbiAgYS5jbGFzcyA9IGJ1Zi5yZWFkVUludDE2QkUob2Zmc2V0ICsgMilcbiAgYS50dGwgPSBidWYucmVhZFVJbnQzMkJFKG9mZnNldCArIDQpXG5cbiAgYS5mbHVzaCA9ICEhKGEuY2xhc3MgJiBGTFVTSF9NQVNLKVxuICBpZiAoYS5mbHVzaCkgYS5jbGFzcyAmPSBOT1RfRkxVU0hfTUFTS1xuXG4gIHZhciBlbmMgPSByZW5jKGEudHlwZSlcbiAgYS5kYXRhID0gZW5jLmRlY29kZShidWYsIG9mZnNldCArIDgpXG4gIG9mZnNldCArPSA4ICsgZW5jLmRlY29kZS5ieXRlc1xuXG4gIGFuc3dlci5kZWNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIGFcbn1cblxuYW5zd2VyLmRlY29kZS5ieXRlcyA9IDBcblxuYW5zd2VyLmVuY29kaW5nTGVuZ3RoID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIG5hbWUuZW5jb2RpbmdMZW5ndGgoYS5uYW1lKSArIDggKyByZW5jKGEudHlwZSkuZW5jb2RpbmdMZW5ndGgoYS5kYXRhKVxufVxuXG52YXIgcXVlc3Rpb24gPSBleHBvcnRzLnF1ZXN0aW9uID0ge31cblxucXVlc3Rpb24uZW5jb2RlID0gZnVuY3Rpb24gKHEsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghYnVmKSBidWYgPSBCdWZmZXIuYWxsb2MocXVlc3Rpb24uZW5jb2RpbmdMZW5ndGgocSkpXG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuXG4gIG5hbWUuZW5jb2RlKHEubmFtZSwgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCArPSBuYW1lLmVuY29kZS5ieXRlc1xuXG4gIGJ1Zi53cml0ZVVJbnQxNkJFKHR5cGVzLnRvVHlwZShxLnR5cGUpLCBvZmZzZXQpXG4gIG9mZnNldCArPSAyXG5cbiAgYnVmLndyaXRlVUludDE2QkUocS5jbGFzcyA9PT0gdW5kZWZpbmVkID8gMSA6IHEuY2xhc3MsIG9mZnNldClcbiAgb2Zmc2V0ICs9IDJcblxuICBxdWVzdGlvbi5lbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXRcbiAgcmV0dXJuIHFcbn1cblxucXVlc3Rpb24uZW5jb2RlLmJ5dGVzID0gMFxuXG5xdWVzdGlvbi5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcbiAgaWYgKCFvZmZzZXQpIG9mZnNldCA9IDBcblxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG4gIHZhciBxID0ge31cblxuICBxLm5hbWUgPSBuYW1lLmRlY29kZShidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IG5hbWUuZGVjb2RlLmJ5dGVzXG5cbiAgcS50eXBlID0gdHlwZXMudG9TdHJpbmcoYnVmLnJlYWRVSW50MTZCRShvZmZzZXQpKVxuICBvZmZzZXQgKz0gMlxuXG4gIHEuY2xhc3MgPSBidWYucmVhZFVJbnQxNkJFKG9mZnNldClcbiAgb2Zmc2V0ICs9IDJcblxuICB2YXIgcXUgPSAhIShxLmNsYXNzICYgUVVfTUFTSylcbiAgaWYgKHF1KSBxLmNsYXNzICY9IE5PVF9RVV9NQVNLXG5cbiAgcXVlc3Rpb24uZGVjb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0XG4gIHJldHVybiBxXG59XG5cbnF1ZXN0aW9uLmRlY29kZS5ieXRlcyA9IDBcblxucXVlc3Rpb24uZW5jb2RpbmdMZW5ndGggPSBmdW5jdGlvbiAocSkge1xuICByZXR1cm4gbmFtZS5lbmNvZGluZ0xlbmd0aChxLm5hbWUpICsgNFxufVxuXG5leHBvcnRzLkFVVEhPUklUQVRJVkVfQU5TV0VSID0gMSA8PCAxMFxuZXhwb3J0cy5UUlVOQ0FURURfUkVTUE9OU0UgPSAxIDw8IDlcbmV4cG9ydHMuUkVDVVJTSU9OX0RFU0lSRUQgPSAxIDw8IDhcbmV4cG9ydHMuUkVDVVJTSU9OX0FWQUlMQUJMRSA9IDEgPDwgN1xuZXhwb3J0cy5BVVRIRU5USUNfREFUQSA9IDEgPDwgNVxuZXhwb3J0cy5DSEVDS0lOR19ESVNBQkxFRCA9IDEgPDwgNFxuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChyZXN1bHQsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBhbGxvY2luZyA9ICFidWZcbiAgaWYgKGFsbG9jaW5nKSBidWYgPSBCdWZmZXIuYWxsb2MoZXhwb3J0cy5lbmNvZGluZ0xlbmd0aChyZXN1bHQpKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICBpZiAoIXJlc3VsdC5xdWVzdGlvbnMpIHJlc3VsdC5xdWVzdGlvbnMgPSBbXVxuICBpZiAoIXJlc3VsdC5hbnN3ZXJzKSByZXN1bHQuYW5zd2VycyA9IFtdXG4gIGlmICghcmVzdWx0LmF1dGhvcml0aWVzKSByZXN1bHQuYXV0aG9yaXRpZXMgPSBbXVxuICBpZiAoIXJlc3VsdC5hZGRpdGlvbmFscykgcmVzdWx0LmFkZGl0aW9uYWxzID0gW11cblxuICBoZWFkZXIuZW5jb2RlKHJlc3VsdCwgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCArPSBoZWFkZXIuZW5jb2RlLmJ5dGVzXG5cbiAgb2Zmc2V0ID0gZW5jb2RlTGlzdChyZXN1bHQucXVlc3Rpb25zLCBxdWVzdGlvbiwgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCA9IGVuY29kZUxpc3QocmVzdWx0LmFuc3dlcnMsIGFuc3dlciwgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCA9IGVuY29kZUxpc3QocmVzdWx0LmF1dGhvcml0aWVzLCBhbnN3ZXIsIGJ1Ziwgb2Zmc2V0KVxuICBvZmZzZXQgPSBlbmNvZGVMaXN0KHJlc3VsdC5hZGRpdGlvbmFscywgYW5zd2VyLCBidWYsIG9mZnNldClcblxuICBleHBvcnRzLmVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldFxuXG4gIC8vIGp1c3QgYSBxdWljayBzYW5pdHkgY2hlY2tcbiAgaWYgKGFsbG9jaW5nICYmIGV4cG9ydHMuZW5jb2RlLmJ5dGVzICE9PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJ1Zi5zbGljZSgwLCBleHBvcnRzLmVuY29kZS5ieXRlcylcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZXhwb3J0cy5lbmNvZGUuYnl0ZXMgPSAwXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuICB2YXIgcmVzdWx0ID0gaGVhZGVyLmRlY29kZShidWYsIG9mZnNldClcbiAgb2Zmc2V0ICs9IGhlYWRlci5kZWNvZGUuYnl0ZXNcblxuICBvZmZzZXQgPSBkZWNvZGVMaXN0KHJlc3VsdC5xdWVzdGlvbnMsIHF1ZXN0aW9uLCBidWYsIG9mZnNldClcbiAgb2Zmc2V0ID0gZGVjb2RlTGlzdChyZXN1bHQuYW5zd2VycywgYW5zd2VyLCBidWYsIG9mZnNldClcbiAgb2Zmc2V0ID0gZGVjb2RlTGlzdChyZXN1bHQuYXV0aG9yaXRpZXMsIGFuc3dlciwgYnVmLCBvZmZzZXQpXG4gIG9mZnNldCA9IGRlY29kZUxpc3QocmVzdWx0LmFkZGl0aW9uYWxzLCBhbnN3ZXIsIGJ1Ziwgb2Zmc2V0KVxuXG4gIGV4cG9ydHMuZGVjb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnRzLmRlY29kZS5ieXRlcyA9IDBcblxuZXhwb3J0cy5lbmNvZGluZ0xlbmd0aCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgcmV0dXJuIGhlYWRlci5lbmNvZGluZ0xlbmd0aChyZXN1bHQpICtcbiAgICBlbmNvZGluZ0xlbmd0aExpc3QocmVzdWx0LnF1ZXN0aW9ucyB8fCBbXSwgcXVlc3Rpb24pICtcbiAgICBlbmNvZGluZ0xlbmd0aExpc3QocmVzdWx0LmFuc3dlcnMgfHwgW10sIGFuc3dlcikgK1xuICAgIGVuY29kaW5nTGVuZ3RoTGlzdChyZXN1bHQuYXV0aG9yaXRpZXMgfHwgW10sIGFuc3dlcikgK1xuICAgIGVuY29kaW5nTGVuZ3RoTGlzdChyZXN1bHQuYWRkaXRpb25hbHMgfHwgW10sIGFuc3dlcilcbn1cblxuZnVuY3Rpb24gZW5jb2RpbmdMZW5ndGhMaXN0IChsaXN0LCBlbmMpIHtcbiAgdmFyIGxlbiA9IDBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSBsZW4gKz0gZW5jLmVuY29kaW5nTGVuZ3RoKGxpc3RbaV0pXG4gIHJldHVybiBsZW5cbn1cblxuZnVuY3Rpb24gZW5jb2RlTGlzdCAobGlzdCwgZW5jLCBidWYsIG9mZnNldCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBlbmMuZW5jb2RlKGxpc3RbaV0sIGJ1Ziwgb2Zmc2V0KVxuICAgIG9mZnNldCArPSBlbmMuZW5jb2RlLmJ5dGVzXG4gIH1cbiAgcmV0dXJuIG9mZnNldFxufVxuXG5mdW5jdGlvbiBkZWNvZGVMaXN0IChsaXN0LCBlbmMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxpc3RbaV0gPSBlbmMuZGVjb2RlKGJ1Ziwgb2Zmc2V0KVxuICAgIG9mZnNldCArPSBlbmMuZGVjb2RlLmJ5dGVzXG4gIH1cbiAgcmV0dXJuIG9mZnNldFxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG52YXIgbmV4dFRpY2sgPSBuZXh0VGlja0FyZ3NcbnByb2Nlc3MubmV4dFRpY2sodXBncmFkZSwgNDIpIC8vIHBhc3MgNDIgYW5kIHNlZSBpZiB1cGdyYWRlIGlzIGNhbGxlZCB3aXRoIGl0XG5cbm1vZHVsZS5leHBvcnRzID0gdGh1bmt5XG5cbmZ1bmN0aW9uIHRodW5reSAoZm4pIHtcbiAgdmFyIHN0YXRlID0gcnVuXG4gIHJldHVybiB0aHVua1xuXG4gIGZ1bmN0aW9uIHRodW5rIChjYWxsYmFjaykge1xuICAgIHN0YXRlKGNhbGxiYWNrIHx8IG5vb3ApXG4gIH1cblxuICBmdW5jdGlvbiBydW4gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHN0YWNrID0gW2NhbGxiYWNrXVxuICAgIHN0YXRlID0gd2FpdFxuICAgIGZuKGRvbmUpXG5cbiAgICBmdW5jdGlvbiB3YWl0IChjYWxsYmFjaykge1xuICAgICAgc3RhY2sucHVzaChjYWxsYmFjaylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb25lIChlcnIpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG4gICAgICBzdGF0ZSA9IGlzRXJyb3IoZXJyKSA/IHJ1biA6IGZpbmlzaGVkXG4gICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSBmaW5pc2hlZChzdGFjay5zaGlmdCgpKVxuXG4gICAgICBmdW5jdGlvbiBmaW5pc2hlZCAoY2FsbGJhY2spIHtcbiAgICAgICAgbmV4dFRpY2soYXBwbHksIGNhbGxiYWNrLCBhcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0Vycm9yIChlcnIpIHsgLy8gaW5saW5lZCBmcm9tIHV0aWwgc28gdGhpcyB3b3JrcyBpbiB0aGUgYnJvd3NlclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVycikgPT09ICdbb2JqZWN0IEVycm9yXSdcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBhcHBseSAoY2FsbGJhY2ssIGFyZ3MpIHtcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncylcbn1cblxuZnVuY3Rpb24gdXBncmFkZSAodmFsKSB7XG4gIGlmICh2YWwgPT09IDQyKSBuZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2tcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2tBcmdzIChmbiwgYSwgYikge1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBmbihhLCBiKVxuICB9KVxufVxuIiwgInZhciBwYWNrZXQgPSByZXF1aXJlKCdkbnMtcGFja2V0JylcbnZhciBkZ3JhbSA9IHJlcXVpcmUoJ2RncmFtJylcbnZhciB0aHVua3kgPSByZXF1aXJlKCd0aHVua3knKVxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpXG52YXIgb3MgPSByZXF1aXJlKCdvcycpXG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIHZhciB0aGF0ID0gbmV3IGV2ZW50cy5FdmVudEVtaXR0ZXIoKVxuICB2YXIgcG9ydCA9IHR5cGVvZiBvcHRzLnBvcnQgPT09ICdudW1iZXInID8gb3B0cy5wb3J0IDogNTM1M1xuICB2YXIgdHlwZSA9IG9wdHMudHlwZSB8fCAndWRwNCdcbiAgdmFyIGlwID0gb3B0cy5pcCB8fCBvcHRzLmhvc3QgfHwgKHR5cGUgPT09ICd1ZHA0JyA/ICcyMjQuMC4wLjI1MScgOiBudWxsKVxuICB2YXIgbWUgPSB7YWRkcmVzczogaXAsIHBvcnQ6IHBvcnR9XG4gIHZhciBtZW1iZXJzaGlwcyA9IHt9XG4gIHZhciBkZXN0cm95ZWQgPSBmYWxzZVxuICB2YXIgaW50ZXJ2YWwgPSBudWxsXG5cbiAgaWYgKHR5cGUgPT09ICd1ZHA2JyAmJiAoIWlwIHx8ICFvcHRzLmludGVyZmFjZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBJUHY2IG11bHRpY2FzdCB5b3UgbXVzdCBzcGVjaWZ5IGBpcGAgYW5kIGBpbnRlcmZhY2VgJylcbiAgfVxuXG4gIHZhciBzb2NrZXQgPSBvcHRzLnNvY2tldCB8fCBkZ3JhbS5jcmVhdGVTb2NrZXQoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgcmV1c2VBZGRyOiBvcHRzLnJldXNlQWRkciAhPT0gZmFsc2UsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlXG4gICAgfVxuICB9KVxuXG4gIHNvY2tldC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVyci5jb2RlID09PSAnRUFDQ0VTJyB8fCBlcnIuY29kZSA9PT0gJ0VBRERSSU5VU0UnKSB0aGF0LmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgIGVsc2UgdGhhdC5lbWl0KCd3YXJuaW5nJywgZXJyKVxuICB9KVxuXG4gIHNvY2tldC5vbignbWVzc2FnZScsIGZ1bmN0aW9uIChtZXNzYWdlLCByaW5mbykge1xuICAgIHRyeSB7XG4gICAgICBtZXNzYWdlID0gcGFja2V0LmRlY29kZShtZXNzYWdlKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhhdC5lbWl0KCd3YXJuaW5nJywgZXJyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhhdC5lbWl0KCdwYWNrZXQnLCBtZXNzYWdlLCByaW5mbylcblxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdxdWVyeScpIHRoYXQuZW1pdCgncXVlcnknLCBtZXNzYWdlLCByaW5mbylcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAncmVzcG9uc2UnKSB0aGF0LmVtaXQoJ3Jlc3BvbnNlJywgbWVzc2FnZSwgcmluZm8pXG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdsaXN0ZW5pbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwb3J0KSBwb3J0ID0gbWUucG9ydCA9IHNvY2tldC5hZGRyZXNzKCkucG9ydFxuICAgIGlmIChvcHRzLm11bHRpY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoYXQudXBkYXRlKClcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwodGhhdC51cGRhdGUsIDUwMDApXG4gICAgICBzb2NrZXQuc2V0TXVsdGljYXN0VFRMKG9wdHMudHRsIHx8IDI1NSlcbiAgICAgIHNvY2tldC5zZXRNdWx0aWNhc3RMb29wYmFjayhvcHRzLmxvb3BiYWNrICE9PSBmYWxzZSlcbiAgICB9XG4gIH0pXG5cbiAgdmFyIGJpbmQgPSB0aHVua3koZnVuY3Rpb24gKGNiKSB7XG4gICAgaWYgKCFwb3J0KSByZXR1cm4gY2IobnVsbClcbiAgICBzb2NrZXQub25jZSgnZXJyb3InLCBjYilcbiAgICBzb2NrZXQuYmluZChwb3J0LCBvcHRzLmludGVyZmFjZSwgZnVuY3Rpb24gKCkge1xuICAgICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGNiKVxuICAgICAgY2IobnVsbClcbiAgICB9KVxuICB9KVxuXG4gIGJpbmQoZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiB0aGF0LmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgIHRoYXQuZW1pdCgncmVhZHknKVxuICB9KVxuXG4gIHRoYXQuc2VuZCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmluZm8sIGNiKSB7XG4gICAgaWYgKHR5cGVvZiByaW5mbyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoYXQuc2VuZCh2YWx1ZSwgbnVsbCwgcmluZm8pXG4gICAgaWYgKCFjYikgY2IgPSBub29wXG4gICAgaWYgKCFyaW5mbykgcmluZm8gPSBtZVxuXG4gICAgYmluZChvbmJpbmQpXG5cbiAgICBmdW5jdGlvbiBvbmJpbmQgKGVycikge1xuICAgICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuIGNiKClcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgICB2YXIgbWVzc2FnZSA9IHBhY2tldC5lbmNvZGUodmFsdWUpXG4gICAgICBzb2NrZXQuc2VuZChtZXNzYWdlLCAwLCBtZXNzYWdlLmxlbmd0aCwgcmluZm8ucG9ydCwgcmluZm8uYWRkcmVzcyB8fCByaW5mby5ob3N0LCBjYilcbiAgICB9XG4gIH1cblxuICB0aGF0LnJlc3BvbnNlID1cbiAgdGhhdC5yZXNwb25kID0gZnVuY3Rpb24gKHJlcywgcmluZm8sIGNiKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkgcmVzID0ge2Fuc3dlcnM6IHJlc31cblxuICAgIHJlcy50eXBlID0gJ3Jlc3BvbnNlJ1xuICAgIHJlcy5mbGFncyA9IChyZXMuZmxhZ3MgfHwgMCkgfCBwYWNrZXQuQVVUSE9SSVRBVElWRV9BTlNXRVJcbiAgICB0aGF0LnNlbmQocmVzLCByaW5mbywgY2IpXG4gIH1cblxuICB0aGF0LnF1ZXJ5ID0gZnVuY3Rpb24gKHEsIHR5cGUsIHJpbmZvLCBjYikge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoYXQucXVlcnkocSwgbnVsbCwgbnVsbCwgdHlwZSlcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgJiYgdHlwZS5wb3J0KSByZXR1cm4gdGhhdC5xdWVyeShxLCBudWxsLCB0eXBlLCByaW5mbylcbiAgICBpZiAodHlwZW9mIHJpbmZvID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdGhhdC5xdWVyeShxLCB0eXBlLCBudWxsLCByaW5mbylcbiAgICBpZiAoIWNiKSBjYiA9IG5vb3BcblxuICAgIGlmICh0eXBlb2YgcSA9PT0gJ3N0cmluZycpIHEgPSBbe25hbWU6IHEsIHR5cGU6IHR5cGUgfHwgJ0FOWSd9XVxuICAgIGlmIChBcnJheS5pc0FycmF5KHEpKSBxID0ge3R5cGU6ICdxdWVyeScsIHF1ZXN0aW9uczogcX1cblxuICAgIHEudHlwZSA9ICdxdWVyeSdcbiAgICB0aGF0LnNlbmQocSwgcmluZm8sIGNiKVxuICB9XG5cbiAgdGhhdC5kZXN0cm95ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgaWYgKCFjYikgY2IgPSBub29wXG4gICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2IpXG4gICAgZGVzdHJveWVkID0gdHJ1ZVxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgc29ja2V0Lm9uY2UoJ2Nsb3NlJywgY2IpXG4gICAgc29ja2V0LmNsb3NlKClcbiAgfVxuXG4gIHRoYXQudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpZmFjZXMgPSBvcHRzLmludGVyZmFjZSA/IFtdLmNvbmNhdChvcHRzLmludGVyZmFjZSkgOiBhbGxJbnRlcmZhY2VzKClcbiAgICB2YXIgdXBkYXRlZCA9IGZhbHNlXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlmYWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFkZHIgPSBpZmFjZXNbaV1cblxuICAgICAgaWYgKG1lbWJlcnNoaXBzW2FkZHJdKSBjb250aW51ZVxuICAgICAgbWVtYmVyc2hpcHNbYWRkcl0gPSB0cnVlXG4gICAgICB1cGRhdGVkID0gdHJ1ZVxuXG4gICAgICB0cnkge1xuICAgICAgICBzb2NrZXQuYWRkTWVtYmVyc2hpcChpcCwgYWRkcilcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGF0LmVtaXQoJ3dhcm5pbmcnLCBlcnIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF1cGRhdGVkIHx8ICFzb2NrZXQuc2V0TXVsdGljYXN0SW50ZXJmYWNlKSByZXR1cm5cbiAgICBzb2NrZXQuc2V0TXVsdGljYXN0SW50ZXJmYWNlKG9wdHMuaW50ZXJmYWNlIHx8IGRlZmF1bHRJbnRlcmZhY2UoKSlcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcmZhY2UgKCkge1xuICB2YXIgbmV0d29ya3MgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpXG4gIHZhciBuYW1lcyA9IE9iamVjdC5rZXlzKG5ldHdvcmtzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV0ID0gbmV0d29ya3NbbmFtZXNbaV1dXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXQubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBpZmFjZSA9IG5ldFtqXVxuICAgICAgaWYgKGlmYWNlLmZhbWlseSA9PT0gJ0lQdjQnICYmICFpZmFjZS5pbnRlcm5hbCkgcmV0dXJuIGlmYWNlLmFkZHJlc3NcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJzEyNy4wLjAuMSdcbn1cblxuZnVuY3Rpb24gYWxsSW50ZXJmYWNlcyAoKSB7XG4gIHZhciBuZXR3b3JrcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKClcbiAgdmFyIG5hbWVzID0gT2JqZWN0LmtleXMobmV0d29ya3MpXG4gIHZhciByZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV0ID0gbmV0d29ya3NbbmFtZXNbaV1dXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXQubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBpZmFjZSA9IG5ldFtqXVxuICAgICAgaWYgKGlmYWNlLmZhbWlseSA9PT0gJ0lQdjQnKSB7XG4gICAgICAgIHJlcy5wdXNoKGlmYWNlLmFkZHJlc3MpXG4gICAgICAgIC8vIGNvdWxkIG9ubHkgYWRkTWVtYmVyc2hpcCBvbmNlIHBlciBpbnRlcmZhY2UgKGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZGdyYW0uaHRtbCNkZ3JhbV9zb2NrZXRfYWRkbWVtYmVyc2hpcF9tdWx0aWNhc3RhZGRyZXNzX211bHRpY2FzdGludGVyZmFjZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG5cbnZhciBvcmlnS2V5cyA9IE9iamVjdC5rZXlzO1xudmFyIGtleXNTaGltID0gb3JpZ0tleXMgPyBmdW5jdGlvbiBrZXlzKG8pIHsgcmV0dXJuIG9yaWdLZXlzKG8pOyB9IDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHZhciBhcmdzID0gT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IGNvbXBsZXhpdHk6IFsyLCAxOF0sIG1heC1zdGF0ZW1lbnRzOiBbMiwgMzNdICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1N5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblxuXHR2YXIgb2JqID0ge307XG5cdHZhciBzeW0gPSBTeW1ib2woJ3Rlc3QnKTtcblx0dmFyIHN5bU9iaiA9IE9iamVjdChzeW0pO1xuXHRpZiAodHlwZW9mIHN5bSA9PT0gJ3N0cmluZycpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW1PYmopICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL29iamVjdC5hc3NpZ24vaXNzdWVzLzE3XG5cdC8vIGlmIChzeW0gaW5zdGFuY2VvZiBTeW1ib2wpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uL2dldC1vd24tcHJvcGVydHktc3ltYm9scy9pc3N1ZXMvNFxuXHQvLyBpZiAoIShzeW1PYmogaW5zdGFuY2VvZiBTeW1ib2wpKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIGlmICh0eXBlb2YgU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gaWYgKFN0cmluZyhzeW0pICE9PSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltVmFsID0gNDI7XG5cdG9ialtzeW1dID0gc3ltVmFsO1xuXHRmb3IgKHN5bSBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLXVucmVhY2hhYmxlLWxvb3Bcblx0aWYgKHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopO1xuXHRpZiAoc3ltcy5sZW5ndGggIT09IDEgfHwgc3ltc1swXSAhPT0gc3ltKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBzeW0pO1xuXHRcdGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSBzeW1WYWwgfHwgZGVzY3JpcHRvci5lbnVtZXJhYmxlICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scy9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1RvU3RyaW5nVGFnU2hhbXMoKSB7XG5cdHJldHVybiBoYXNTeW1ib2xzKCkgJiYgISFTeW1ib2wudG9TdHJpbmdUYWc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2w7XG52YXIgaGFzU3ltYm9sU2hhbSA9IHJlcXVpcmUoJy4vc2hhbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNOYXRpdmVTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2woJ2ZvbycpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2woJ2JhcicpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRyZXR1cm4gaGFzU3ltYm9sU2hhbSgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdW5kZWZpbmVkO1xuXG52YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG52YXIgJEZ1bmN0aW9uID0gRnVuY3Rpb247XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgZ2V0RXZhbGxlZENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKGV4cHJlc3Npb25TeW50YXgpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gJEZ1bmN0aW9uKCdcInVzZSBzdHJpY3RcIjsgcmV0dXJuICgnICsgZXhwcmVzc2lvblN5bnRheCArICcpLmNvbnN0cnVjdG9yOycpKCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoKTtcbn07XG52YXIgVGhyb3dUeXBlRXJyb3IgPSAkZ09QRFxuXHQ/IChmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnMsIG5vLWNhbGxlciwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdFx0XHRhcmd1bWVudHMuY2FsbGVlOyAvLyBJRSA4IGRvZXMgbm90IHRocm93IGhlcmVcblx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHR9IGNhdGNoIChjYWxsZWVUaHJvd3MpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElFIDggdGhyb3dzIG9uIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYXJndW1lbnRzLCAnJylcblx0XHRcdFx0cmV0dXJuICRnT1BEKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDtcblx0XHRcdH0gY2F0Y2ggKGdPUER0aHJvd3MpIHtcblx0XHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSgpKVxuXHQ6IHRocm93VHlwZUVycm9yO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Ll9fcHJvdG9fXzsgfTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG52YXIgbmVlZHNFdmFsID0ge307XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IG5lZWRzRXZhbCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJpZ0ludDY0QXJyYXklJzogdHlwZW9mIEJpZ0ludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50NjRBcnJheSxcblx0JyVCaWdVaW50NjRBcnJheSUnOiB0eXBlb2YgQmlnVWludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnVWludDY0QXJyYXksXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyVEYXRlJSc6IERhdGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCclRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGaW5hbGl6YXRpb25SZWdpc3RyeSUnOiB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmluYWxpemF0aW9uUmVnaXN0cnksXG5cdCclRnVuY3Rpb24lJzogJEZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyVpc05hTiUnOiBpc05hTixcblx0JyVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCclSlNPTiUnOiB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgPyBKU09OIDogdW5kZWZpbmVkLFxuXHQnJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBNYXAoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJU1hdGglJzogTWF0aCxcblx0JyVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJU9iamVjdCUnOiBPYmplY3QsXG5cdCclcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCclUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlcixcblx0JyVTdHJpbmclJzogU3RyaW5nLFxuXHQnJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJVN5bnRheEVycm9yJSc6ICRTeW50YXhFcnJvcixcblx0JyVUaHJvd1R5cGVFcnJvciUnOiBUaHJvd1R5cGVFcnJvcixcblx0JyVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCclVHlwZUVycm9yJSc6ICRUeXBlRXJyb3IsXG5cdCclVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5JSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheSxcblx0JyVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCclVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJVVSSUVycm9yJSc6IFVSSUVycm9yLFxuXHQnJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyVXZWFrUmVmJSc6IHR5cGVvZiBXZWFrUmVmID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtSZWYsXG5cdCclV2Vha1NldCUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0XG59O1xuXG50cnkge1xuXHRudWxsLmVycm9yOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufSBjYXRjaCAoZSkge1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zaGFkb3dyZWFsbS9wdWxsLzM4NCNpc3N1ZWNvbW1lbnQtMTM2NDI2NDIyOVxuXHR2YXIgZXJyb3JQcm90byA9IGdldFByb3RvKGdldFByb3RvKGUpKTtcblx0SU5UUklOU0lDU1snJUVycm9yLnByb3RvdHlwZSUnXSA9IGVycm9yUHJvdG87XG59XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgJGV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgZmlyc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAwLCAxKTtcblx0dmFyIGxhc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAtMSk7XG5cdGlmIChmaXJzdCA9PT0gJyUnICYmIGxhc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgY2xvc2luZyBgJWAnKTtcblx0fSBlbHNlIGlmIChsYXN0ID09PSAnJScgJiYgZmlyc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgb3BlbmluZyBgJWAnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gbmVlZHNFdmFsKSB7XG5cdFx0XHR2YWx1ZSA9IGRvRXZhbChpbnRyaW5zaWNOYW1lKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHRpZiAoJGV4ZWMoL14lP1teJV0qJT8kLywgbmFtZSkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdgJWAgbWF5IG5vdCBiZSBwcmVzZW50IGFueXdoZXJlIGJ1dCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdGhlIGludHJpbnNpYyBuYW1lJyk7XG5cdH1cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkYXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHklJyk7XG52YXIgJGNhbGwgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCUnKTtcbnZhciAkcmVmbGVjdEFwcGx5ID0gR2V0SW50cmluc2ljKCclUmVmbGVjdC5hcHBseSUnLCB0cnVlKSB8fCBiaW5kLmNhbGwoJGNhbGwsICRhcHBseSk7XG5cbnZhciAkZ09QRCA9IEdldEludHJpbnNpYygnJU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IlJywgdHJ1ZSk7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xudmFyICRtYXggPSBHZXRJbnRyaW5zaWMoJyVNYXRoLm1heCUnKTtcblxuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHR0cnkge1xuXHRcdCRkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IHZhbHVlOiAxIH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSUUgOCBoYXMgYSBicm9rZW4gZGVmaW5lUHJvcGVydHlcblx0XHQkZGVmaW5lUHJvcGVydHkgPSBudWxsO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJpbmQob3JpZ2luYWxGdW5jdGlvbikge1xuXHR2YXIgZnVuYyA9ICRyZWZsZWN0QXBwbHkoYmluZCwgJGNhbGwsIGFyZ3VtZW50cyk7XG5cdGlmICgkZ09QRCAmJiAkZGVmaW5lUHJvcGVydHkpIHtcblx0XHR2YXIgZGVzYyA9ICRnT1BEKGZ1bmMsICdsZW5ndGgnKTtcblx0XHRpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcblx0XHRcdC8vIG9yaWdpbmFsIGxlbmd0aCwgcGx1cyB0aGUgcmVjZWl2ZXIsIG1pbnVzIGFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyAoYWZ0ZXIgdGhlIHJlY2VpdmVyKVxuXHRcdFx0JGRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRmdW5jLFxuXHRcdFx0XHQnbGVuZ3RoJyxcblx0XHRcdFx0eyB2YWx1ZTogMSArICRtYXgoMCwgb3JpZ2luYWxGdW5jdGlvbi5sZW5ndGggLSAoYXJndW1lbnRzLmxlbmd0aCAtIDEpKSB9XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZnVuYztcbn07XG5cbnZhciBhcHBseUJpbmQgPSBmdW5jdGlvbiBhcHBseUJpbmQoKSB7XG5cdHJldHVybiAkcmVmbGVjdEFwcGx5KGJpbmQsICRhcHBseSwgYXJndW1lbnRzKTtcbn07XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0JGRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAnYXBwbHknLCB7IHZhbHVlOiBhcHBseUJpbmQgfSk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cy5hcHBseSA9IGFwcGx5QmluZDtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCb3VuZEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpYyA9IEdldEludHJpbnNpYyhuYW1lLCAhIWFsbG93TWlzc2luZyk7XG5cdGlmICh0eXBlb2YgaW50cmluc2ljID09PSAnZnVuY3Rpb24nICYmICRpbmRleE9mKG5hbWUsICcucHJvdG90eXBlLicpID4gLTEpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG5cbnZhciBpc1N0YW5kYXJkQXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0aWYgKGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAkdG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbnZhciBpc0xlZ2FjeUFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdGlmIChpc1N0YW5kYXJkQXJndW1lbnRzKHZhbHVlKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0JHRvU3RyaW5nKHZhbHVlKSAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdCR0b1N0cmluZyh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gaXNTdGFuZGFyZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xufSgpKTtcblxuaXNTdGFuZGFyZEFyZ3VtZW50cy5pc0xlZ2FjeUFyZ3VtZW50cyA9IGlzTGVnYWN5QXJndW1lbnRzOyAvLyBmb3IgdGVzdHNcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c1N0YW5kYXJkQXJndW1lbnRzID8gaXNTdGFuZGFyZEFyZ3VtZW50cyA6IGlzTGVnYWN5QXJndW1lbnRzO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcblxudmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMgPSBmdW5jdGlvbiBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzKCkge1xuXHRpZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IHZhbHVlOiAxIH0pO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gSUUgOCBoYXMgYSBicm9rZW4gZGVmaW5lUHJvcGVydHlcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuaGFzUHJvcGVydHlEZXNjcmlwdG9ycy5oYXNBcnJheUxlbmd0aERlZmluZUJ1ZyA9IGZ1bmN0aW9uIGhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnKCkge1xuXHQvLyBub2RlIHYwLjYgaGFzIGEgYnVnIHdoZXJlIGFycmF5IGxlbmd0aHMgY2FuIGJlIFNldCBidXQgbm90IERlZmluZWRcblx0aWYgKCFoYXNQcm9wZXJ0eURlc2NyaXB0b3JzKCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiAkZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHZhbHVlOiAxIH0pLmxlbmd0aCAhPT0gMTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIEluIEZpcmVmb3ggNC0yMiwgZGVmaW5pbmcgbGVuZ3RoIG9uIGFuIGFycmF5IHRocm93cyBhbiBleGNlcHRpb24uXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUHJvcGVydHlEZXNjcmlwdG9ycztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG5cbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnM7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBudW1iZXJJc05hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdGlmIChhID09PSAwICYmIGIgPT09IDApIHtcblx0XHRyZXR1cm4gMSAvIGEgPT09IDEgLyBiO1xuXHR9XG5cdGlmIChhID09PSBiKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRyZXR1cm4gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGltcGxlbWVudGF0aW9uO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1PYmplY3RJcygpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKE9iamVjdCwgeyBpczogcG9seWZpbGwgfSwge1xuXHRcdGlzOiBmdW5jdGlvbiB0ZXN0T2JqZWN0SXMoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmlzICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgT2JqZWN0KTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xudmFyIGhhcztcbnZhciAkZXhlYztcbnZhciBpc1JlZ2V4TWFya2VyO1xudmFyIGJhZFN0cmluZ2lmaWVyO1xuXG5pZiAoaGFzVG9TdHJpbmdUYWcpIHtcblx0aGFzID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5Jyk7XG5cdCRleGVjID0gY2FsbEJvdW5kKCdSZWdFeHAucHJvdG90eXBlLmV4ZWMnKTtcblx0aXNSZWdleE1hcmtlciA9IHt9O1xuXG5cdHZhciB0aHJvd1JlZ2V4TWFya2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRocm93IGlzUmVnZXhNYXJrZXI7XG5cdH07XG5cdGJhZFN0cmluZ2lmaWVyID0ge1xuXHRcdHRvU3RyaW5nOiB0aHJvd1JlZ2V4TWFya2VyLFxuXHRcdHZhbHVlT2Y6IHRocm93UmVnZXhNYXJrZXJcblx0fTtcblxuXHRpZiAodHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRiYWRTdHJpbmdpZmllcltTeW1ib2wudG9QcmltaXRpdmVdID0gdGhyb3dSZWdleE1hcmtlcjtcblx0fVxufVxuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1RvU3RyaW5nVGFnXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHQ/IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0XHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdFx0aWYgKCFoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0JGV4ZWModmFsdWUsIGJhZFN0cmluZ2lmaWVyKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZSA9PT0gaXNSZWdleE1hcmtlcjtcblx0XHR9XG5cdH1cblx0OiBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdFx0Ly8gSW4gb2xkZXIgYnJvd3NlcnMsIHR5cGVvZiByZWdleCBpbmNvcnJlY3RseSByZXR1cm5zICdmdW5jdGlvbidcblx0XHRpZiAoIXZhbHVlIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJHRvU3RyaW5nKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSBmdW5jdGlvbiBmdW5jdGlvbnNIYXZlTmFtZXMoKSB7XG5cdHJldHVybiB0eXBlb2YgZnVuY3Rpb24gZigpIHt9Lm5hbWUgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKGdPUEQpIHtcblx0dHJ5IHtcblx0XHRnT1BEKFtdLCAnbGVuZ3RoJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBnT1BEXG5cdFx0Z09QRCA9IG51bGw7XG5cdH1cbn1cblxuZnVuY3Rpb25zSGF2ZU5hbWVzLmZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcyA9IGZ1bmN0aW9uIGZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcygpIHtcblx0aWYgKCFmdW5jdGlvbnNIYXZlTmFtZXMoKSB8fCAhZ09QRCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgZGVzYyA9IGdPUEQoZnVuY3Rpb24gKCkge30sICduYW1lJyk7XG5cdHJldHVybiAhIWRlc2MgJiYgISFkZXNjLmNvbmZpZ3VyYWJsZTtcbn07XG5cbnZhciAkYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5mdW5jdGlvbnNIYXZlTmFtZXMuYm91bmRGdW5jdGlvbnNIYXZlTmFtZXMgPSBmdW5jdGlvbiBib3VuZEZ1bmN0aW9uc0hhdmVOYW1lcygpIHtcblx0cmV0dXJuIGZ1bmN0aW9uc0hhdmVOYW1lcygpICYmIHR5cGVvZiAkYmluZCA9PT0gJ2Z1bmN0aW9uJyAmJiBmdW5jdGlvbiBmKCkge30uYmluZCgpLm5hbWUgIT09ICcnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbnNIYXZlTmFtZXM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZnVuY3Rpb25zSGF2ZUNvbmZpZ3VyYWJsZU5hbWVzID0gcmVxdWlyZSgnZnVuY3Rpb25zLWhhdmUtbmFtZXMnKS5mdW5jdGlvbnNIYXZlQ29uZmlndXJhYmxlTmFtZXMoKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbGFncygpIHtcblx0aWYgKHRoaXMgIT0gbnVsbCAmJiB0aGlzICE9PSAkT2JqZWN0KHRoaXMpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZ0V4cC5wcm90b3R5cGUuZmxhZ3MgZ2V0dGVyIGNhbGxlZCBvbiBub24tb2JqZWN0Jyk7XG5cdH1cblx0dmFyIHJlc3VsdCA9ICcnO1xuXHRpZiAodGhpcy5oYXNJbmRpY2VzKSB7XG5cdFx0cmVzdWx0ICs9ICdkJztcblx0fVxuXHRpZiAodGhpcy5nbG9iYWwpIHtcblx0XHRyZXN1bHQgKz0gJ2cnO1xuXHR9XG5cdGlmICh0aGlzLmlnbm9yZUNhc2UpIHtcblx0XHRyZXN1bHQgKz0gJ2knO1xuXHR9XG5cdGlmICh0aGlzLm11bHRpbGluZSkge1xuXHRcdHJlc3VsdCArPSAnbSc7XG5cdH1cblx0aWYgKHRoaXMuZG90QWxsKSB7XG5cdFx0cmVzdWx0ICs9ICdzJztcblx0fVxuXHRpZiAodGhpcy51bmljb2RlKSB7XG5cdFx0cmVzdWx0ICs9ICd1Jztcblx0fVxuXHRpZiAodGhpcy5zdGlja3kpIHtcblx0XHRyZXN1bHQgKz0gJ3knO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5pZiAoZnVuY3Rpb25zSGF2ZUNvbmZpZ3VyYWJsZU5hbWVzICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsICduYW1lJywgeyB2YWx1ZTogJ2dldCBmbGFncycgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKS5zdXBwb3J0c0Rlc2NyaXB0b3JzO1xudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMgJiYgKC9hL21pZykuZmxhZ3MgPT09ICdnaW0nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSAkZ09QRChSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnKTtcblx0XHRpZiAoXG5cdFx0XHRkZXNjcmlwdG9yXG5cdFx0XHQmJiB0eXBlb2YgZGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbidcblx0XHRcdCYmIHR5cGVvZiBSZWdFeHAucHJvdG90eXBlLmRvdEFsbCA9PT0gJ2Jvb2xlYW4nXG5cdFx0XHQmJiB0eXBlb2YgUmVnRXhwLnByb3RvdHlwZS5oYXNJbmRpY2VzID09PSAnYm9vbGVhbidcblx0XHQpIHtcblx0XHRcdC8qIGVzbGludCBnZXR0ZXItcmV0dXJuOiAwICovXG5cdFx0XHR2YXIgY2FsbHMgPSAnJztcblx0XHRcdHZhciBvID0ge307XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ2hhc0luZGljZXMnLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNhbGxzICs9ICdkJztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ3N0aWNreScsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y2FsbHMgKz0gJ3knO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmIChjYWxscyA9PT0gJ2R5Jykge1xuXHRcdFx0XHRyZXR1cm4gZGVzY3JpcHRvci5nZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJykuc3VwcG9ydHNEZXNjcmlwdG9ycztcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBUeXBlRXJyID0gVHlwZUVycm9yO1xudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIHJlZ2V4ID0gL2EvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1GbGFncygpIHtcblx0aWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzIHx8ICFnZXRQcm90bykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyKCdSZWdFeHAucHJvdG90eXBlLmZsYWdzIHJlcXVpcmVzIGEgdHJ1ZSBFUzUgZW52aXJvbm1lbnQgdGhhdCBzdXBwb3J0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycycpO1xuXHR9XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdHZhciBwcm90byA9IGdldFByb3RvKHJlZ2V4KTtcblx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCAnZmxhZ3MnKTtcblx0aWYgKCFkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3IuZ2V0ICE9PSBwb2x5ZmlsbCkge1xuXHRcdGRlZmluZVByb3BlcnR5KHByb3RvLCAnZmxhZ3MnLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogcG9seWZpbGxcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIGZsYWdzQm91bmQgPSBjYWxsQmluZChnZXRQb2x5ZmlsbCgpKTtcblxuZGVmaW5lKGZsYWdzQm91bmQsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsYWdzQm91bmQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlR2V0RGF5Q2FsbCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuIiwgInZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJ2lzLWFyZ3VtZW50cycpO1xudmFyIGlzID0gcmVxdWlyZSgnb2JqZWN0LWlzJyk7XG52YXIgaXNSZWdleCA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCdyZWdleHAucHJvdG90eXBlLmZsYWdzJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcblxudmFyIGdldFRpbWUgPSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChvcHRzLnN0cmljdCA/IGlzKGFjdHVhbCwgZXhwZWN0ZWQpIDogYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLCBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgKHR5cGVvZiBhY3R1YWwgIT09ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gaXMoYWN0dWFsLCBleHBlY3RlZCkgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG4gIH1cblxuICAvKlxuICAgKiA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgICogZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gICAqIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgICogKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAgKiBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAgKiBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlcih4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICAvKiBlc2xpbnQgbWF4LXN0YXRlbWVudHM6IFsyLCA1MF0gKi9cbiAgdmFyIGksIGtleTtcbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoaXNBcmd1bWVudHMoYSkgIT09IGlzQXJndW1lbnRzKGIpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHZhciBhSXNSZWdleCA9IGlzUmVnZXgoYSk7XG4gIHZhciBiSXNSZWdleCA9IGlzUmVnZXgoYik7XG4gIGlmIChhSXNSZWdleCAhPT0gYklzUmVnZXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhSXNSZWdleCB8fCBiSXNSZWdleCkge1xuICAgIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgZmxhZ3MoYSkgPT09IGZsYWdzKGIpO1xuICB9XG5cbiAgaWYgKGlzRGF0ZShhKSAmJiBpc0RhdGUoYikpIHtcbiAgICByZXR1cm4gZ2V0VGltZS5jYWxsKGEpID09PSBnZXRUaW1lLmNhbGwoYik7XG4gIH1cblxuICB2YXIgYUlzQnVmZmVyID0gaXNCdWZmZXIoYSk7XG4gIHZhciBiSXNCdWZmZXIgPSBpc0J1ZmZlcihiKTtcbiAgaWYgKGFJc0J1ZmZlciAhPT0gYklzQnVmZmVyKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYUlzQnVmZmVyIHx8IGJJc0J1ZmZlcikgeyAvLyAmJiB3b3VsZCB3b3JrIHRvbywgYmVjYXVzZSBib3RoIGFyZSB0cnVlIG9yIGJvdGggZmFsc2UgaGVyZVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICAgIHZhciBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsgLy8gaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlcyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPT0ga2IubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIHRoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy8gfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cbiAgLy8gZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXBFcXVhbDtcbiIsICIndXNlIHN0cmljdCdcblxudmFyIG11bHRpY2FzdGRucyA9IHJlcXVpcmUoJ211bHRpY2FzdC1kbnMnKVxudmFyIGRuc0VxdWFsID0gcmVxdWlyZSgnZG5zLWVxdWFsJylcbnZhciBmbGF0dGVuID0gcmVxdWlyZSgnYXJyYXktZmxhdHRlbicpXG52YXIgZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gU2VydmVyXG5cbmZ1bmN0aW9uIFNlcnZlciAob3B0cykge1xuICB0aGlzLm1kbnMgPSBtdWx0aWNhc3RkbnMob3B0cylcbiAgdGhpcy5tZG5zLnNldE1heExpc3RlbmVycygwKVxuICB0aGlzLnJlZ2lzdHJ5ID0ge31cbiAgdGhpcy5tZG5zLm9uKCdxdWVyeScsIHRoaXMuX3Jlc3BvbmRUb1F1ZXJ5LmJpbmQodGhpcykpXG59XG5cblNlcnZlci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAocmVjb3Jkcykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmRzKSkgcmVjb3Jkcy5mb3JFYWNoKHJlZ2lzdGVyKVxuICBlbHNlIHJlZ2lzdGVyKHJlY29yZHMpXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXIgKHJlY29yZCkge1xuICAgIHZhciBzdWJSZWdpc3RyeSA9IHNlbGYucmVnaXN0cnlbcmVjb3JkLnR5cGVdXG4gICAgaWYgKCFzdWJSZWdpc3RyeSkgc3ViUmVnaXN0cnkgPSBzZWxmLnJlZ2lzdHJ5W3JlY29yZC50eXBlXSA9IFtdXG4gICAgZWxzZSBpZiAoc3ViUmVnaXN0cnkuc29tZShpc0R1cGxpY2F0ZVJlY29yZChyZWNvcmQpKSkgcmV0dXJuXG4gICAgc3ViUmVnaXN0cnkucHVzaChyZWNvcmQpXG4gIH1cbn1cblxuU2VydmVyLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gKHJlY29yZHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkcykpIHJlY29yZHMuZm9yRWFjaCh1bnJlZ2lzdGVyKVxuICBlbHNlIHVucmVnaXN0ZXIocmVjb3JkcylcblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyIChyZWNvcmQpIHtcbiAgICB2YXIgdHlwZSA9IHJlY29yZC50eXBlXG4gICAgaWYgKCEodHlwZSBpbiBzZWxmLnJlZ2lzdHJ5KSkgcmV0dXJuXG4gICAgc2VsZi5yZWdpc3RyeVt0eXBlXSA9IHNlbGYucmVnaXN0cnlbdHlwZV0uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gci5uYW1lICE9PSByZWNvcmQubmFtZVxuICAgIH0pXG4gIH1cbn1cblxuU2VydmVyLnByb3RvdHlwZS5fcmVzcG9uZFRvUXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHF1ZXJ5LnF1ZXN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgIHZhciB0eXBlID0gcXVlc3Rpb24udHlwZVxuICAgIHZhciBuYW1lID0gcXVlc3Rpb24ubmFtZVxuXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGFuc3dlcnMgc2VjdGlvblxuICAgIHZhciBhbnN3ZXJzID0gdHlwZSA9PT0gJ0FOWSdcbiAgICAgID8gZmxhdHRlbi5kZXB0aChPYmplY3Qua2V5cyhzZWxmLnJlZ2lzdHJ5KS5tYXAoc2VsZi5fcmVjb3Jkc0Zvci5iaW5kKHNlbGYsIG5hbWUpKSwgMSlcbiAgICAgIDogc2VsZi5fcmVjb3Jkc0ZvcihuYW1lLCB0eXBlKVxuXG4gICAgaWYgKGFuc3dlcnMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIC8vIGdlbmVyYXRlIHRoZSBhZGRpdGlvbmFscyBzZWN0aW9uXG4gICAgdmFyIGFkZGl0aW9uYWxzID0gW11cbiAgICBpZiAodHlwZSAhPT0gJ0FOWScpIHtcbiAgICAgIGFuc3dlcnMuZm9yRWFjaChmdW5jdGlvbiAoYW5zd2VyKSB7XG4gICAgICAgIGlmIChhbnN3ZXIudHlwZSAhPT0gJ1BUUicpIHJldHVyblxuICAgICAgICBhZGRpdGlvbmFscyA9IGFkZGl0aW9uYWxzXG4gICAgICAgICAgLmNvbmNhdChzZWxmLl9yZWNvcmRzRm9yKGFuc3dlci5kYXRhLCAnU1JWJykpXG4gICAgICAgICAgLmNvbmNhdChzZWxmLl9yZWNvcmRzRm9yKGFuc3dlci5kYXRhLCAnVFhUJykpXG4gICAgICB9KVxuXG4gICAgICAvLyB0byBwb3B1bGF0ZSB0aGUgQSBhbmQgQUFBQSByZWNvcmRzLCB3ZSBuZWVkIHRvIGdldCBhIHNldCBvZiB1bmlxdWVcbiAgICAgIC8vIHRhcmdldHMgZnJvbSB0aGUgU1JWIHJlY29yZFxuICAgICAgYWRkaXRpb25hbHNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID09PSAnU1JWJ1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkLmRhdGEudGFyZ2V0XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICBhZGRpdGlvbmFscyA9IGFkZGl0aW9uYWxzXG4gICAgICAgICAgICAuY29uY2F0KHNlbGYuX3JlY29yZHNGb3IodGFyZ2V0LCAnQScpKVxuICAgICAgICAgICAgLmNvbmNhdChzZWxmLl9yZWNvcmRzRm9yKHRhcmdldCwgJ0FBQUEnKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZWxmLm1kbnMucmVzcG9uZCh7IGFuc3dlcnM6IGFuc3dlcnMsIGFkZGl0aW9uYWxzOiBhZGRpdGlvbmFscyB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnIgLy8gVE9ETzogSGFuZGxlIHRoaXMgKGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuLCB0aGUgZXJyb3Igd2lsbCBiZSBpZ25vcmVkKVxuICAgIH0pXG4gIH0pXG59XG5cblNlcnZlci5wcm90b3R5cGUuX3JlY29yZHNGb3IgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuICBpZiAoISh0eXBlIGluIHRoaXMucmVnaXN0cnkpKSByZXR1cm4gW11cblxuICByZXR1cm4gdGhpcy5yZWdpc3RyeVt0eXBlXS5maWx0ZXIoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgIHZhciBfbmFtZSA9IH5uYW1lLmluZGV4T2YoJy4nKSA/IHJlY29yZC5uYW1lIDogcmVjb3JkLm5hbWUuc3BsaXQoJy4nKVswXVxuICAgIHJldHVybiBkbnNFcXVhbChfbmFtZSwgbmFtZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNEdXBsaWNhdGVSZWNvcmQgKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGEudHlwZSA9PT0gYi50eXBlICYmXG4gICAgICBhLm5hbWUgPT09IGIubmFtZSAmJlxuICAgICAgZGVlcEVxdWFsKGEuZGF0YSwgYi5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZSAoKSB7XG4gIHZhciBzZXQgPSBbXVxuICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICh+c2V0LmluZGV4T2Yob2JqKSkgcmV0dXJuIGZhbHNlXG4gICAgc2V0LnB1c2gob2JqKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCdcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJylcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBzZXJ2aWNlTmFtZSA9IHJlcXVpcmUoJ211bHRpY2FzdC1kbnMtc2VydmljZS10eXBlcycpXG52YXIgZG5zRXF1YWwgPSByZXF1aXJlKCdkbnMtZXF1YWwnKVxudmFyIGRuc1R4dCA9IHJlcXVpcmUoJ2Rucy10eHQnKVxuXG52YXIgVExEID0gJy5sb2NhbCdcbnZhciBXSUxEQ0FSRCA9ICdfc2VydmljZXMuX2Rucy1zZC5fdWRwJyArIFRMRFxuXG5tb2R1bGUuZXhwb3J0cyA9IEJyb3dzZXJcblxudXRpbC5pbmhlcml0cyhCcm93c2VyLCBFdmVudEVtaXR0ZXIpXG5cbi8qKlxuICogU3RhcnQgYSBicm93c2VyXG4gKlxuICogVGhlIGJyb3dzZXIgbGlzdGVucyBmb3Igc2VydmljZXMgYnkgcXVlcnlpbmcgZm9yIFBUUiByZWNvcmRzIG9mIGEgZ2l2ZW5cbiAqIHR5cGUsIHByb3RvY29sIGFuZCBkb21haW4sIGUuZy4gX2h0dHAuX3RjcC5sb2NhbC5cbiAqXG4gKiBJZiBubyB0eXBlIGlzIGdpdmVuLCBhIHdpbGQgY2FyZCBzZWFyY2ggaXMgcGVyZm9ybWVkLlxuICpcbiAqIEFuIGludGVybmFsIGxpc3Qgb2Ygb25saW5lIHNlcnZpY2VzIGlzIGtlcHQgd2hpY2ggc3RhcnRzIG91dCBlbXB0eS4gV2hlblxuICogZXZlciBhIG5ldyBzZXJ2aWNlIGlzIGRpc2NvdmVyZWQsIGl0J3MgYWRkZWQgdG8gdGhlIGxpc3QgYW5kIGFuIFwidXBcIiBldmVudFxuICogaXMgZW1pdHRlZCB3aXRoIHRoYXQgc2VydmljZS4gV2hlbiBpdCdzIGRpc2NvdmVyZWQgdGhhdCB0aGUgc2VydmljZSBpcyBub1xuICogbG9uZ2VyIGF2YWlsYWJsZSwgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IGFuZCBhIFwiZG93blwiIGV2ZW50IGlzIGVtaXR0ZWRcbiAqIHdpdGggdGhhdCBzZXJ2aWNlLlxuICovXG5mdW5jdGlvbiBCcm93c2VyIChtZG5zLCBvcHRzLCBvbnVwKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG5ldyBCcm93c2VyKG1kbnMsIG51bGwsIG9wdHMpXG5cbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcylcblxuICB0aGlzLl9tZG5zID0gbWRuc1xuICB0aGlzLl9vbnJlc3BvbnNlID0gbnVsbFxuICB0aGlzLl9zZXJ2aWNlTWFwID0ge31cbiAgdGhpcy5fdHh0ID0gZG5zVHh0KG9wdHMudHh0KVxuXG4gIGlmICghb3B0cyB8fCAhb3B0cy50eXBlKSB7XG4gICAgdGhpcy5fbmFtZSA9IFdJTERDQVJEXG4gICAgdGhpcy5fd2lsZGNhcmQgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fbmFtZSA9IHNlcnZpY2VOYW1lLnN0cmluZ2lmeShvcHRzLnR5cGUsIG9wdHMucHJvdG9jb2wgfHwgJ3RjcCcpICsgVExEXG4gICAgaWYgKG9wdHMubmFtZSkgdGhpcy5fbmFtZSA9IG9wdHMubmFtZSArICcuJyArIHRoaXMuX25hbWVcbiAgICB0aGlzLl93aWxkY2FyZCA9IGZhbHNlXG4gIH1cblxuICB0aGlzLnNlcnZpY2VzID0gW11cblxuICBpZiAob251cCkgdGhpcy5vbigndXAnLCBvbnVwKVxuXG4gIHRoaXMuc3RhcnQoKVxufVxuXG5Ccm93c2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX29ucmVzcG9uc2UpIHJldHVyblxuXG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIC8vIExpc3Qgb2YgbmFtZXMgZm9yIHRoZSBicm93c2VyIHRvIGxpc3RlbiBmb3IuIEluIGEgbm9ybWFsIHNlYXJjaCB0aGlzIHdpbGxcbiAgLy8gYmUgdGhlIHByaW1hcnkgbmFtZSBzdG9yZWQgb24gdGhlIGJyb3dzZXIuIEluIGNhc2Ugb2YgYSB3aWxkY2FyZCBzZWFyY2hcbiAgLy8gdGhlIG5hbWVzIHdpbGwgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lIGFzIHJlc3BvbnNlcyBjb21lIGluLlxuICB2YXIgbmFtZU1hcCA9IHt9XG4gIGlmICghdGhpcy5fd2lsZGNhcmQpIG5hbWVNYXBbdGhpcy5fbmFtZV0gPSB0cnVlXG5cbiAgdGhpcy5fb25yZXNwb25zZSA9IGZ1bmN0aW9uIChwYWNrZXQsIHJpbmZvKSB7XG4gICAgaWYgKHNlbGYuX3dpbGRjYXJkKSB7XG4gICAgICBwYWNrZXQuYW5zd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChhbnN3ZXIpIHtcbiAgICAgICAgaWYgKGFuc3dlci50eXBlICE9PSAnUFRSJyB8fCBhbnN3ZXIubmFtZSAhPT0gc2VsZi5fbmFtZSB8fCBhbnN3ZXIubmFtZSBpbiBuYW1lTWFwKSByZXR1cm5cbiAgICAgICAgbmFtZU1hcFthbnN3ZXIuZGF0YV0gPSB0cnVlXG4gICAgICAgIHNlbGYuX21kbnMucXVlcnkoYW5zd2VyLmRhdGEsICdQVFInKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhuYW1lTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAvLyB1bnJlZ2lzdGVyIGFsbCBzZXJ2aWNlcyBzaHV0dGluZyBkb3duXG4gICAgICBnb29kYnllcyhuYW1lLCBwYWNrZXQpLmZvckVhY2goc2VsZi5fcmVtb3ZlU2VydmljZS5iaW5kKHNlbGYpKVxuXG4gICAgICAvLyByZWdpc3RlciBhbGwgbmV3IHNlcnZpY2VzXG4gICAgICB2YXIgbWF0Y2hlcyA9IGJ1aWxkU2VydmljZXNGb3IobmFtZSwgcGFja2V0LCBzZWxmLl90eHQsIHJpbmZvKVxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gICAgICAgIGlmIChzZWxmLl9zZXJ2aWNlTWFwW3NlcnZpY2UuZnFkbl0pIHJldHVybiAvLyBpZ25vcmUgYWxyZWFkeSByZWdpc3RlcmVkIHNlcnZpY2VzXG4gICAgICAgIHNlbGYuX2FkZFNlcnZpY2Uoc2VydmljZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHRoaXMuX21kbnMub24oJ3Jlc3BvbnNlJywgdGhpcy5fb25yZXNwb25zZSlcbiAgdGhpcy51cGRhdGUoKVxufVxuXG5Ccm93c2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuX29ucmVzcG9uc2UpIHJldHVyblxuXG4gIHRoaXMuX21kbnMucmVtb3ZlTGlzdGVuZXIoJ3Jlc3BvbnNlJywgdGhpcy5fb25yZXNwb25zZSlcbiAgdGhpcy5fb25yZXNwb25zZSA9IG51bGxcbn1cblxuQnJvd3Nlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9tZG5zLnF1ZXJ5KHRoaXMuX25hbWUsICdQVFInKVxufVxuXG5Ccm93c2VyLnByb3RvdHlwZS5fYWRkU2VydmljZSA9IGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gIHRoaXMuc2VydmljZXMucHVzaChzZXJ2aWNlKVxuICB0aGlzLl9zZXJ2aWNlTWFwW3NlcnZpY2UuZnFkbl0gPSB0cnVlXG4gIHRoaXMuZW1pdCgndXAnLCBzZXJ2aWNlKVxufVxuXG5Ccm93c2VyLnByb3RvdHlwZS5fcmVtb3ZlU2VydmljZSA9IGZ1bmN0aW9uIChmcWRuKSB7XG4gIHZhciBzZXJ2aWNlLCBpbmRleFxuICB0aGlzLnNlcnZpY2VzLnNvbWUoZnVuY3Rpb24gKHMsIGkpIHtcbiAgICBpZiAoZG5zRXF1YWwocy5mcWRuLCBmcWRuKSkge1xuICAgICAgc2VydmljZSA9IHNcbiAgICAgIGluZGV4ID0gaVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pXG4gIGlmICghc2VydmljZSkgcmV0dXJuXG4gIHRoaXMuc2VydmljZXMuc3BsaWNlKGluZGV4LCAxKVxuICBkZWxldGUgdGhpcy5fc2VydmljZU1hcFtmcWRuXVxuICB0aGlzLmVtaXQoJ2Rvd24nLCBzZXJ2aWNlKVxufVxuXG4vLyBQVFIgcmVjb3JkcyB3aXRoIGEgVFRMIG9mIDAgaXMgY29uc2lkZXJlZCBhIFwiZ29vZGJ5ZVwiIGFubm91bmNlbWVudC4gSS5lLiBhXG4vLyBETlMgcmVzcG9uc2UgYnJvYWRjYXN0ZWQgd2hlbiBhIHNlcnZpY2Ugc2h1dHMgZG93biBpbiBvcmRlciB0byBsZXQgdGhlXG4vLyBuZXR3b3JrIGtub3cgdGhhdCB0aGUgc2VydmljZSBpcyBubyBsb25nZXIgZ29pbmcgdG8gYmUgYXZhaWxhYmxlLlxuLy9cbi8vIEZvciBtb3JlIGluZm8gc2VlOlxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NjIjc2VjdGlvbi04LjRcbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHJlc291cmNlIHJlY29yZHMgY29uc2lkZXJlZCBhIGdvb2RieWVcbi8vIHJlY29yZFxuZnVuY3Rpb24gZ29vZGJ5ZXMgKG5hbWUsIHBhY2tldCkge1xuICByZXR1cm4gcGFja2V0LmFuc3dlcnMuY29uY2F0KHBhY2tldC5hZGRpdGlvbmFscylcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChycikge1xuICAgICAgcmV0dXJuIHJyLnR5cGUgPT09ICdQVFInICYmIHJyLnR0bCA9PT0gMCAmJiBkbnNFcXVhbChyci5uYW1lLCBuYW1lKVxuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbiAocnIpIHtcbiAgICAgIHJldHVybiByci5kYXRhXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYnVpbGRTZXJ2aWNlc0ZvciAobmFtZSwgcGFja2V0LCB0eHQsIHJlZmVyZXIpIHtcbiAgdmFyIHJlY29yZHMgPSBwYWNrZXQuYW5zd2Vycy5jb25jYXQocGFja2V0LmFkZGl0aW9uYWxzKS5maWx0ZXIoZnVuY3Rpb24gKHJyKSB7XG4gICAgcmV0dXJuIHJyLnR0bCA+IDAgLy8gaWdub3JlIGdvb2RieWUgbWVzc2FnZXNcbiAgfSlcblxuICByZXR1cm4gcmVjb3Jkc1xuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJyKSB7XG4gICAgICByZXR1cm4gcnIudHlwZSA9PT0gJ1BUUicgJiYgZG5zRXF1YWwocnIubmFtZSwgbmFtZSlcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKHB0cikge1xuICAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICAgIGFkZHJlc3NlczogW11cbiAgICAgIH1cblxuICAgICAgcmVjb3Jkc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChycikge1xuICAgICAgICAgIHJldHVybiAocnIudHlwZSA9PT0gJ1NSVicgfHwgcnIudHlwZSA9PT0gJ1RYVCcpICYmIGRuc0VxdWFsKHJyLm5hbWUsIHB0ci5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAocnIpIHtcbiAgICAgICAgICBpZiAocnIudHlwZSA9PT0gJ1NSVicpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHJyLm5hbWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgdmFyIG5hbWUgPSBwYXJ0c1swXVxuICAgICAgICAgICAgdmFyIHR5cGVzID0gc2VydmljZU5hbWUucGFyc2UocGFydHMuc2xpY2UoMSwgLTEpLmpvaW4oJy4nKSlcbiAgICAgICAgICAgIHNlcnZpY2UubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHNlcnZpY2UuZnFkbiA9IHJyLm5hbWVcbiAgICAgICAgICAgIHNlcnZpY2UuaG9zdCA9IHJyLmRhdGEudGFyZ2V0XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZmVyZXIgPSByZWZlcmVyXG4gICAgICAgICAgICBzZXJ2aWNlLnBvcnQgPSByci5kYXRhLnBvcnRcbiAgICAgICAgICAgIHNlcnZpY2UudHlwZSA9IHR5cGVzLm5hbWVcbiAgICAgICAgICAgIHNlcnZpY2UucHJvdG9jb2wgPSB0eXBlcy5wcm90b2NvbFxuICAgICAgICAgICAgc2VydmljZS5zdWJ0eXBlcyA9IHR5cGVzLnN1YnR5cGVzXG4gICAgICAgICAgfSBlbHNlIGlmIChyci50eXBlID09PSAnVFhUJykge1xuICAgICAgICAgICAgc2VydmljZS5yYXdUeHQgPSByci5kYXRhXG4gICAgICAgICAgICBzZXJ2aWNlLnR4dCA9IHR4dC5kZWNvZGUocnIuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIGlmICghc2VydmljZS5uYW1lKSByZXR1cm5cblxuICAgICAgcmVjb3Jkc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChycikge1xuICAgICAgICAgIHJldHVybiAocnIudHlwZSA9PT0gJ0EnIHx8IHJyLnR5cGUgPT09ICdBQUFBJykgJiYgZG5zRXF1YWwocnIubmFtZSwgc2VydmljZS5ob3N0KVxuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAocnIpIHtcbiAgICAgICAgICBzZXJ2aWNlLmFkZHJlc3Nlcy5wdXNoKHJyLmRhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgIHJldHVybiBzZXJ2aWNlXG4gICAgfSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChycikge1xuICAgICAgcmV0dXJuICEhcnJcbiAgICB9KVxufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG52YXIgUmVnaXN0cnkgPSByZXF1aXJlKCcuL2xpYi9yZWdpc3RyeScpXG52YXIgU2VydmVyID0gcmVxdWlyZSgnLi9saWIvbWRucy1zZXJ2ZXInKVxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCcuL2xpYi9icm93c2VyJylcblxubW9kdWxlLmV4cG9ydHMgPSBCb25qb3VyXG5cbmZ1bmN0aW9uIEJvbmpvdXIgKG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJvbmpvdXIpKSByZXR1cm4gbmV3IEJvbmpvdXIob3B0cylcbiAgdGhpcy5fc2VydmVyID0gbmV3IFNlcnZlcihvcHRzKVxuICB0aGlzLl9yZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSh0aGlzLl9zZXJ2ZXIpXG59XG5cbkJvbmpvdXIucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAob3B0cykge1xuICByZXR1cm4gdGhpcy5fcmVnaXN0cnkucHVibGlzaChvcHRzKVxufVxuXG5Cb25qb3VyLnByb3RvdHlwZS51bnB1Ymxpc2hBbGwgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fcmVnaXN0cnkudW5wdWJsaXNoQWxsKGNiKVxufVxuXG5Cb25qb3VyLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKG9wdHMsIG9udXApIHtcbiAgcmV0dXJuIG5ldyBCcm93c2VyKHRoaXMuX3NlcnZlci5tZG5zLCBvcHRzLCBvbnVwKVxufVxuXG5Cb25qb3VyLnByb3RvdHlwZS5maW5kT25lID0gZnVuY3Rpb24gKG9wdHMsIGNiKSB7XG4gIHZhciBicm93c2VyID0gbmV3IEJyb3dzZXIodGhpcy5fc2VydmVyLm1kbnMsIG9wdHMpXG4gIGJyb3dzZXIub25jZSgndXAnLCBmdW5jdGlvbiAoc2VydmljZSkge1xuICAgIGJyb3dzZXIuc3RvcCgpXG4gICAgaWYgKGNiKSBjYihzZXJ2aWNlKVxuICB9KVxuICByZXR1cm4gYnJvd3NlclxufVxuXG5Cb25qb3VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9yZWdpc3RyeS5kZXN0cm95KClcbiAgdGhpcy5fc2VydmVyLm1kbnMuZGVzdHJveSgpXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb252ZXJzaW9ucyA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJzaW9ucztcblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gICAgcmV0dXJuIHggPCAwID8gLTEgOiAxO1xufVxuXG5mdW5jdGlvbiBldmVuUm91bmQoeCkge1xuICAgIC8vIFJvdW5kIHggdG8gdGhlIG5lYXJlc3QgaW50ZWdlciwgY2hvb3NpbmcgdGhlIGV2ZW4gaW50ZWdlciBpZiBpdCBsaWVzIGhhbGZ3YXkgYmV0d2VlbiB0d28uXG4gICAgaWYgKCh4ICUgMSkgPT09IDAuNSAmJiAoeCAmIDEpID09PSAwKSB7IC8vIFtldmVuIG51bWJlcl0uNTsgcm91bmQgZG93biAoaS5lLiBmbG9vcilcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoeCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJDb252ZXJzaW9uKGJpdExlbmd0aCwgdHlwZU9wdHMpIHtcbiAgICBpZiAoIXR5cGVPcHRzLnVuc2lnbmVkKSB7XG4gICAgICAgIC0tYml0TGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBsb3dlckJvdW5kID0gdHlwZU9wdHMudW5zaWduZWQgPyAwIDogLU1hdGgucG93KDIsIGJpdExlbmd0aCk7XG4gICAgY29uc3QgdXBwZXJCb3VuZCA9IE1hdGgucG93KDIsIGJpdExlbmd0aCkgLSAxO1xuXG4gICAgY29uc3QgbW9kdWxvVmFsID0gdHlwZU9wdHMubW9kdWxvQml0TGVuZ3RoID8gTWF0aC5wb3coMiwgdHlwZU9wdHMubW9kdWxvQml0TGVuZ3RoKSA6IE1hdGgucG93KDIsIGJpdExlbmd0aCk7XG4gICAgY29uc3QgbW9kdWxvQm91bmQgPSB0eXBlT3B0cy5tb2R1bG9CaXRMZW5ndGggPyBNYXRoLnBvdygyLCB0eXBlT3B0cy5tb2R1bG9CaXRMZW5ndGggLSAxKSA6IE1hdGgucG93KDIsIGJpdExlbmd0aCAtIDEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKFYsIG9wdHMpIHtcbiAgICAgICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG5cbiAgICAgICAgbGV0IHggPSArVjtcblxuICAgICAgICBpZiAob3B0cy5lbmZvcmNlUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50IGlzIG5vdCBhIGZpbml0ZSBudW1iZXJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHggPSBzaWduKHgpICogTWF0aC5mbG9vcihNYXRoLmFicyh4KSk7XG4gICAgICAgICAgICBpZiAoeCA8IGxvd2VyQm91bmQgfHwgeCA+IHVwcGVyQm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgaXMgbm90IGluIGJ5dGUgcmFuZ2VcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc05hTih4KSAmJiBvcHRzLmNsYW1wKSB7XG4gICAgICAgICAgICB4ID0gZXZlblJvdW5kKHgpO1xuXG4gICAgICAgICAgICBpZiAoeCA8IGxvd2VyQm91bmQpIHggPSBsb3dlckJvdW5kO1xuICAgICAgICAgICAgaWYgKHggPiB1cHBlckJvdW5kKSB4ID0gdXBwZXJCb3VuZDtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeCkgfHwgeCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICB4ID0gc2lnbih4KSAqIE1hdGguZmxvb3IoTWF0aC5hYnMoeCkpO1xuICAgICAgICB4ID0geCAlIG1vZHVsb1ZhbDtcblxuICAgICAgICBpZiAoIXR5cGVPcHRzLnVuc2lnbmVkICYmIHggPj0gbW9kdWxvQm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB4IC0gbW9kdWxvVmFsO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPcHRzLnVuc2lnbmVkKSB7XG4gICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgeCArPSBtb2R1bG9WYWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHggPT09IC0wKSB7IC8vIGRvbid0IHJldHVybiBuZWdhdGl2ZSB6ZXJvXG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxufVxuXG5jb252ZXJzaW9uc1tcInZvaWRcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmNvbnZlcnNpb25zW1wiYm9vbGVhblwiXSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gISF2YWw7XG59O1xuXG5jb252ZXJzaW9uc1tcImJ5dGVcIl0gPSBjcmVhdGVOdW1iZXJDb252ZXJzaW9uKDgsIHsgdW5zaWduZWQ6IGZhbHNlIH0pO1xuY29udmVyc2lvbnNbXCJvY3RldFwiXSA9IGNyZWF0ZU51bWJlckNvbnZlcnNpb24oOCwgeyB1bnNpZ25lZDogdHJ1ZSB9KTtcblxuY29udmVyc2lvbnNbXCJzaG9ydFwiXSA9IGNyZWF0ZU51bWJlckNvbnZlcnNpb24oMTYsIHsgdW5zaWduZWQ6IGZhbHNlIH0pO1xuY29udmVyc2lvbnNbXCJ1bnNpZ25lZCBzaG9ydFwiXSA9IGNyZWF0ZU51bWJlckNvbnZlcnNpb24oMTYsIHsgdW5zaWduZWQ6IHRydWUgfSk7XG5cbmNvbnZlcnNpb25zW1wibG9uZ1wiXSA9IGNyZWF0ZU51bWJlckNvbnZlcnNpb24oMzIsIHsgdW5zaWduZWQ6IGZhbHNlIH0pO1xuY29udmVyc2lvbnNbXCJ1bnNpZ25lZCBsb25nXCJdID0gY3JlYXRlTnVtYmVyQ29udmVyc2lvbigzMiwgeyB1bnNpZ25lZDogdHJ1ZSB9KTtcblxuY29udmVyc2lvbnNbXCJsb25nIGxvbmdcIl0gPSBjcmVhdGVOdW1iZXJDb252ZXJzaW9uKDMyLCB7IHVuc2lnbmVkOiBmYWxzZSwgbW9kdWxvQml0TGVuZ3RoOiA2NCB9KTtcbmNvbnZlcnNpb25zW1widW5zaWduZWQgbG9uZyBsb25nXCJdID0gY3JlYXRlTnVtYmVyQ29udmVyc2lvbigzMiwgeyB1bnNpZ25lZDogdHJ1ZSwgbW9kdWxvQml0TGVuZ3RoOiA2NCB9KTtcblxuY29udmVyc2lvbnNbXCJkb3VibGVcIl0gPSBmdW5jdGlvbiAoVikge1xuICAgIGNvbnN0IHggPSArVjtcblxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudCBpcyBub3QgYSBmaW5pdGUgZmxvYXRpbmctcG9pbnQgdmFsdWVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHg7XG59O1xuXG5jb252ZXJzaW9uc1tcInVucmVzdHJpY3RlZCBkb3VibGVcIl0gPSBmdW5jdGlvbiAoVikge1xuICAgIGNvbnN0IHggPSArVjtcblxuICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgaXMgTmFOXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB4O1xufTtcblxuLy8gbm90IHF1aXRlIHZhbGlkLCBidXQgZ29vZCBlbm91Z2ggZm9yIEpTXG5jb252ZXJzaW9uc1tcImZsb2F0XCJdID0gY29udmVyc2lvbnNbXCJkb3VibGVcIl07XG5jb252ZXJzaW9uc1tcInVucmVzdHJpY3RlZCBmbG9hdFwiXSA9IGNvbnZlcnNpb25zW1widW5yZXN0cmljdGVkIGRvdWJsZVwiXTtcblxuY29udmVyc2lvbnNbXCJET01TdHJpbmdcIl0gPSBmdW5jdGlvbiAoViwgb3B0cykge1xuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG4gICAgaWYgKG9wdHMudHJlYXROdWxsQXNFbXB0eVN0cmluZyAmJiBWID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcoVik7XG59O1xuXG5jb252ZXJzaW9uc1tcIkJ5dGVTdHJpbmdcIl0gPSBmdW5jdGlvbiAoViwgb3B0cykge1xuICAgIGNvbnN0IHggPSBTdHJpbmcoVik7XG4gICAgbGV0IGMgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IChjID0geC5jb2RlUG9pbnRBdChpKSkgIT09IHVuZGVmaW5lZDsgKytpKSB7XG4gICAgICAgIGlmIChjID4gMjU1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgaXMgbm90IGEgdmFsaWQgYnl0ZXN0cmluZ1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB4O1xufTtcblxuY29udmVyc2lvbnNbXCJVU1ZTdHJpbmdcIl0gPSBmdW5jdGlvbiAoVikge1xuICAgIGNvbnN0IFMgPSBTdHJpbmcoVik7XG4gICAgY29uc3QgbiA9IFMubGVuZ3RoO1xuICAgIGNvbnN0IFUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBjb25zdCBjID0gUy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID4gMHhERkZGKSB7XG4gICAgICAgICAgICBVLnB1c2goU3RyaW5nLmZyb21Db2RlUG9pbnQoYykpO1xuICAgICAgICB9IGVsc2UgaWYgKDB4REMwMCA8PSBjICYmIGMgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICBVLnB1c2goU3RyaW5nLmZyb21Db2RlUG9pbnQoMHhGRkZEKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBVLnB1c2goU3RyaW5nLmZyb21Db2RlUG9pbnQoMHhGRkZEKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBTLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgICAgIGlmICgweERDMDAgPD0gZCAmJiBkIDw9IDB4REZGRikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gYyAmIDB4M0ZGO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gZCAmIDB4M0ZGO1xuICAgICAgICAgICAgICAgICAgICBVLnB1c2goU3RyaW5nLmZyb21Db2RlUG9pbnQoKDIgPDwgMTUpICsgKDIgPDwgOSkgKiBhICsgYikpO1xuICAgICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVS5wdXNoKFN0cmluZy5mcm9tQ29kZVBvaW50KDB4RkZGRCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBVLmpvaW4oJycpO1xufTtcblxuY29udmVyc2lvbnNbXCJEYXRlXCJdID0gZnVuY3Rpb24gKFYsIG9wdHMpIHtcbiAgICBpZiAoIShWIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50IGlzIG5vdCBhIERhdGUgb2JqZWN0XCIpO1xuICAgIH1cbiAgICBpZiAoaXNOYU4oVikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gVjtcbn07XG5cbmNvbnZlcnNpb25zW1wiUmVnRXhwXCJdID0gZnVuY3Rpb24gKFYsIG9wdHMpIHtcbiAgICBpZiAoIShWIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICBWID0gbmV3IFJlZ0V4cChWKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVjtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzLm1peGluID0gZnVuY3Rpb24gbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleXNbaV0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXlzW2ldKSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLndyYXBwZXJTeW1ib2wgPSBTeW1ib2woXCJ3cmFwcGVyXCIpO1xubW9kdWxlLmV4cG9ydHMuaW1wbFN5bWJvbCA9IFN5bWJvbChcImltcGxcIik7XG5cbm1vZHVsZS5leHBvcnRzLndyYXBwZXJGb3JJbXBsID0gZnVuY3Rpb24gKGltcGwpIHtcbiAgcmV0dXJuIGltcGxbbW9kdWxlLmV4cG9ydHMud3JhcHBlclN5bWJvbF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5pbXBsRm9yV3JhcHBlciA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gIHJldHVybiB3cmFwcGVyW21vZHVsZS5leHBvcnRzLmltcGxTeW1ib2xdO1xufTtcblxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKFwicHVueWNvZGVcIik7XG52YXIgbWFwcGluZ1RhYmxlID0gcmVxdWlyZShcIi4vbGliL21hcHBpbmdUYWJsZS5qc29uXCIpO1xuXG52YXIgUFJPQ0VTU0lOR19PUFRJT05TID0ge1xuICBUUkFOU0lUSU9OQUw6IDAsXG4gIE5PTlRSQU5TSVRJT05BTDogMVxufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKHN0cikgeyAvLyBmaXggYnVnIGluIHY4XG4gIHJldHVybiBzdHIuc3BsaXQoJ1xcdTAwMDAnKS5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMubm9ybWFsaXplKCdORkMnKTsgfSkuam9pbignXFx1MDAwMCcpO1xufVxuXG5mdW5jdGlvbiBmaW5kU3RhdHVzKHZhbCkge1xuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gbWFwcGluZ1RhYmxlLmxlbmd0aCAtIDE7XG5cbiAgd2hpbGUgKHN0YXJ0IDw9IGVuZCkge1xuICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcblxuICAgIHZhciB0YXJnZXQgPSBtYXBwaW5nVGFibGVbbWlkXTtcbiAgICBpZiAodGFyZ2V0WzBdWzBdIDw9IHZhbCAmJiB0YXJnZXRbMF1bMV0gPj0gdmFsKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0WzBdWzBdID4gdmFsKSB7XG4gICAgICBlbmQgPSBtaWQgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IG1pZCArIDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciByZWdleEFzdHJhbFN5bWJvbHMgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuXG5mdW5jdGlvbiBjb3VudFN5bWJvbHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICAvLyByZXBsYWNlIGV2ZXJ5IHN1cnJvZ2F0ZSBwYWlyIHdpdGggYSBCTVAgc3ltYm9sXG4gICAgLnJlcGxhY2UocmVnZXhBc3RyYWxTeW1ib2xzLCAnXycpXG4gICAgLy8gdGhlbiBnZXQgdGhlIGxlbmd0aFxuICAgIC5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIG1hcENoYXJzKGRvbWFpbl9uYW1lLCB1c2VTVEQzLCBwcm9jZXNzaW5nX29wdGlvbikge1xuICB2YXIgaGFzRXJyb3IgPSBmYWxzZTtcbiAgdmFyIHByb2Nlc3NlZCA9IFwiXCI7XG5cbiAgdmFyIGxlbiA9IGNvdW50U3ltYm9scyhkb21haW5fbmFtZSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgY29kZVBvaW50ID0gZG9tYWluX25hbWUuY29kZVBvaW50QXQoaSk7XG4gICAgdmFyIHN0YXR1cyA9IGZpbmRTdGF0dXMoY29kZVBvaW50KTtcblxuICAgIHN3aXRjaCAoc3RhdHVzWzFdKSB7XG4gICAgICBjYXNlIFwiZGlzYWxsb3dlZFwiOlxuICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHByb2Nlc3NlZCArPSBTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlUG9pbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpZ25vcmVkXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1hcHBlZFwiOlxuICAgICAgICBwcm9jZXNzZWQgKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkoU3RyaW5nLCBzdGF0dXNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZXZpYXRpb25cIjpcbiAgICAgICAgaWYgKHByb2Nlc3Npbmdfb3B0aW9uID09PSBQUk9DRVNTSU5HX09QVElPTlMuVFJBTlNJVElPTkFMKSB7XG4gICAgICAgICAgcHJvY2Vzc2VkICs9IFN0cmluZy5mcm9tQ29kZVBvaW50LmFwcGx5KFN0cmluZywgc3RhdHVzWzJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzZWQgKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZVBvaW50KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ2YWxpZFwiOlxuICAgICAgICBwcm9jZXNzZWQgKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZVBvaW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGlzYWxsb3dlZF9TVEQzX21hcHBlZFwiOlxuICAgICAgICBpZiAodXNlU1REMykge1xuICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICBwcm9jZXNzZWQgKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZVBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzZWQgKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkoU3RyaW5nLCBzdGF0dXNbMl0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRpc2FsbG93ZWRfU1REM192YWxpZFwiOlxuICAgICAgICBpZiAodXNlU1REMykge1xuICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NlZCArPSBTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlUG9pbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0cmluZzogcHJvY2Vzc2VkLFxuICAgIGVycm9yOiBoYXNFcnJvclxuICB9O1xufVxuXG52YXIgY29tYmluaW5nTWFya3NSZWdleCA9IC9bXFx1MDMwMC1cXHUwMzZGXFx1MDQ4My1cXHUwNDg5XFx1MDU5MS1cXHUwNUJEXFx1MDVCRlxcdTA1QzFcXHUwNUMyXFx1MDVDNFxcdTA1QzVcXHUwNUM3XFx1MDYxMC1cXHUwNjFBXFx1MDY0Qi1cXHUwNjVGXFx1MDY3MFxcdTA2RDYtXFx1MDZEQ1xcdTA2REYtXFx1MDZFNFxcdTA2RTdcXHUwNkU4XFx1MDZFQS1cXHUwNkVEXFx1MDcxMVxcdTA3MzAtXFx1MDc0QVxcdTA3QTYtXFx1MDdCMFxcdTA3RUItXFx1MDdGM1xcdTA4MTYtXFx1MDgxOVxcdTA4MUItXFx1MDgyM1xcdTA4MjUtXFx1MDgyN1xcdTA4MjktXFx1MDgyRFxcdTA4NTktXFx1MDg1QlxcdTA4RTQtXFx1MDkwM1xcdTA5M0EtXFx1MDkzQ1xcdTA5M0UtXFx1MDk0RlxcdTA5NTEtXFx1MDk1N1xcdTA5NjJcXHUwOTYzXFx1MDk4MS1cXHUwOTgzXFx1MDlCQ1xcdTA5QkUtXFx1MDlDNFxcdTA5QzdcXHUwOUM4XFx1MDlDQi1cXHUwOUNEXFx1MDlEN1xcdTA5RTJcXHUwOUUzXFx1MEEwMS1cXHUwQTAzXFx1MEEzQ1xcdTBBM0UtXFx1MEE0MlxcdTBBNDdcXHUwQTQ4XFx1MEE0Qi1cXHUwQTREXFx1MEE1MVxcdTBBNzBcXHUwQTcxXFx1MEE3NVxcdTBBODEtXFx1MEE4M1xcdTBBQkNcXHUwQUJFLVxcdTBBQzVcXHUwQUM3LVxcdTBBQzlcXHUwQUNCLVxcdTBBQ0RcXHUwQUUyXFx1MEFFM1xcdTBCMDEtXFx1MEIwM1xcdTBCM0NcXHUwQjNFLVxcdTBCNDRcXHUwQjQ3XFx1MEI0OFxcdTBCNEItXFx1MEI0RFxcdTBCNTZcXHUwQjU3XFx1MEI2MlxcdTBCNjNcXHUwQjgyXFx1MEJCRS1cXHUwQkMyXFx1MEJDNi1cXHUwQkM4XFx1MEJDQS1cXHUwQkNEXFx1MEJEN1xcdTBDMDAtXFx1MEMwM1xcdTBDM0UtXFx1MEM0NFxcdTBDNDYtXFx1MEM0OFxcdTBDNEEtXFx1MEM0RFxcdTBDNTVcXHUwQzU2XFx1MEM2MlxcdTBDNjNcXHUwQzgxLVxcdTBDODNcXHUwQ0JDXFx1MENCRS1cXHUwQ0M0XFx1MENDNi1cXHUwQ0M4XFx1MENDQS1cXHUwQ0NEXFx1MENENVxcdTBDRDZcXHUwQ0UyXFx1MENFM1xcdTBEMDEtXFx1MEQwM1xcdTBEM0UtXFx1MEQ0NFxcdTBENDYtXFx1MEQ0OFxcdTBENEEtXFx1MEQ0RFxcdTBENTdcXHUwRDYyXFx1MEQ2M1xcdTBEODJcXHUwRDgzXFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREYyXFx1MERGM1xcdTBFMzFcXHUwRTM0LVxcdTBFM0FcXHUwRTQ3LVxcdTBFNEVcXHUwRUIxXFx1MEVCNC1cXHUwRUI5XFx1MEVCQlxcdTBFQkNcXHUwRUM4LVxcdTBFQ0RcXHUwRjE4XFx1MEYxOVxcdTBGMzVcXHUwRjM3XFx1MEYzOVxcdTBGM0VcXHUwRjNGXFx1MEY3MS1cXHUwRjg0XFx1MEY4NlxcdTBGODdcXHUwRjhELVxcdTBGOTdcXHUwRjk5LVxcdTBGQkNcXHUwRkM2XFx1MTAyQi1cXHUxMDNFXFx1MTA1Ni1cXHUxMDU5XFx1MTA1RS1cXHUxMDYwXFx1MTA2Mi1cXHUxMDY0XFx1MTA2Ny1cXHUxMDZEXFx1MTA3MS1cXHUxMDc0XFx1MTA4Mi1cXHUxMDhEXFx1MTA4RlxcdTEwOUEtXFx1MTA5RFxcdTEzNUQtXFx1MTM1RlxcdTE3MTItXFx1MTcxNFxcdTE3MzItXFx1MTczNFxcdTE3NTJcXHUxNzUzXFx1MTc3MlxcdTE3NzNcXHUxN0I0LVxcdTE3RDNcXHUxN0REXFx1MTgwQi1cXHUxODBEXFx1MThBOVxcdTE5MjAtXFx1MTkyQlxcdTE5MzAtXFx1MTkzQlxcdTE5QjAtXFx1MTlDMFxcdTE5QzhcXHUxOUM5XFx1MUExNy1cXHUxQTFCXFx1MUE1NS1cXHUxQTVFXFx1MUE2MC1cXHUxQTdDXFx1MUE3RlxcdTFBQjAtXFx1MUFCRVxcdTFCMDAtXFx1MUIwNFxcdTFCMzQtXFx1MUI0NFxcdTFCNkItXFx1MUI3M1xcdTFCODAtXFx1MUI4MlxcdTFCQTEtXFx1MUJBRFxcdTFCRTYtXFx1MUJGM1xcdTFDMjQtXFx1MUMzN1xcdTFDRDAtXFx1MUNEMlxcdTFDRDQtXFx1MUNFOFxcdTFDRURcXHUxQ0YyLVxcdTFDRjRcXHUxQ0Y4XFx1MUNGOVxcdTFEQzAtXFx1MURGNVxcdTFERkMtXFx1MURGRlxcdTIwRDAtXFx1MjBGMFxcdTJDRUYtXFx1MkNGMVxcdTJEN0ZcXHUyREUwLVxcdTJERkZcXHUzMDJBLVxcdTMwMkZcXHUzMDk5XFx1MzA5QVxcdUE2NkYtXFx1QTY3MlxcdUE2NzQtXFx1QTY3RFxcdUE2OUZcXHVBNkYwXFx1QTZGMVxcdUE4MDJcXHVBODA2XFx1QTgwQlxcdUE4MjMtXFx1QTgyN1xcdUE4ODBcXHVBODgxXFx1QThCNC1cXHVBOEM0XFx1QThFMC1cXHVBOEYxXFx1QTkyNi1cXHVBOTJEXFx1QTk0Ny1cXHVBOTUzXFx1QTk4MC1cXHVBOTgzXFx1QTlCMy1cXHVBOUMwXFx1QTlFNVxcdUFBMjktXFx1QUEzNlxcdUFBNDNcXHVBQTRDXFx1QUE0RFxcdUFBN0ItXFx1QUE3RFxcdUFBQjBcXHVBQUIyLVxcdUFBQjRcXHVBQUI3XFx1QUFCOFxcdUFBQkVcXHVBQUJGXFx1QUFDMVxcdUFBRUItXFx1QUFFRlxcdUFBRjVcXHVBQUY2XFx1QUJFMy1cXHVBQkVBXFx1QUJFQ1xcdUFCRURcXHVGQjFFXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTJEXXxcXHVEODAwW1xcdURERkRcXHVERUUwXFx1REY3Ni1cXHVERjdBXXxcXHVEODAyW1xcdURFMDEtXFx1REUwM1xcdURFMDVcXHVERTA2XFx1REUwQy1cXHVERTBGXFx1REUzOC1cXHVERTNBXFx1REUzRlxcdURFRTVcXHVERUU2XXxcXHVEODA0W1xcdURDMDAtXFx1REMwMlxcdURDMzgtXFx1REM0NlxcdURDN0YtXFx1REM4MlxcdURDQjAtXFx1RENCQVxcdUREMDAtXFx1REQwMlxcdUREMjctXFx1REQzNFxcdURENzNcXHVERDgwLVxcdUREODJcXHVEREIzLVxcdUREQzBcXHVERTJDLVxcdURFMzdcXHVERURGLVxcdURFRUFcXHVERjAxLVxcdURGMDNcXHVERjNDXFx1REYzRS1cXHVERjQ0XFx1REY0N1xcdURGNDhcXHVERjRCLVxcdURGNERcXHVERjU3XFx1REY2MlxcdURGNjNcXHVERjY2LVxcdURGNkNcXHVERjcwLVxcdURGNzRdfFxcdUQ4MDVbXFx1RENCMC1cXHVEQ0MzXFx1RERBRi1cXHVEREI1XFx1RERCOC1cXHVEREMwXFx1REUzMC1cXHVERTQwXFx1REVBQi1cXHVERUI3XXxcXHVEODFBW1xcdURFRjAtXFx1REVGNFxcdURGMzAtXFx1REYzNl18XFx1RDgxQltcXHVERjUxLVxcdURGN0VcXHVERjhGLVxcdURGOTJdfFxcdUQ4MkZbXFx1REM5RFxcdURDOUVdfFxcdUQ4MzRbXFx1REQ2NS1cXHVERDY5XFx1REQ2RC1cXHVERDcyXFx1REQ3Qi1cXHVERDgyXFx1REQ4NS1cXHVERDhCXFx1RERBQS1cXHVEREFEXFx1REU0Mi1cXHVERTQ0XXxcXHVEODNBW1xcdURDRDAtXFx1RENENl18XFx1REI0MFtcXHVERDAwLVxcdURERUZdLztcblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChsYWJlbCwgcHJvY2Vzc2luZ19vcHRpb24pIHtcbiAgaWYgKGxhYmVsLnN1YnN0cigwLCA0KSA9PT0gXCJ4bi0tXCIpIHtcbiAgICBsYWJlbCA9IHB1bnljb2RlLnRvVW5pY29kZShsYWJlbCk7XG4gICAgcHJvY2Vzc2luZ19vcHRpb24gPSBQUk9DRVNTSU5HX09QVElPTlMuTk9OVFJBTlNJVElPTkFMO1xuICB9XG5cbiAgdmFyIGVycm9yID0gZmFsc2U7XG5cbiAgaWYgKG5vcm1hbGl6ZShsYWJlbCkgIT09IGxhYmVsIHx8XG4gICAgICAobGFiZWxbM10gPT09IFwiLVwiICYmIGxhYmVsWzRdID09PSBcIi1cIikgfHxcbiAgICAgIGxhYmVsWzBdID09PSBcIi1cIiB8fCBsYWJlbFtsYWJlbC5sZW5ndGggLSAxXSA9PT0gXCItXCIgfHxcbiAgICAgIGxhYmVsLmluZGV4T2YoXCIuXCIpICE9PSAtMSB8fFxuICAgICAgbGFiZWwuc2VhcmNoKGNvbWJpbmluZ01hcmtzUmVnZXgpID09PSAwKSB7XG4gICAgZXJyb3IgPSB0cnVlO1xuICB9XG5cbiAgdmFyIGxlbiA9IGNvdW50U3ltYm9scyhsYWJlbCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgc3RhdHVzID0gZmluZFN0YXR1cyhsYWJlbC5jb2RlUG9pbnRBdChpKSk7XG4gICAgaWYgKChwcm9jZXNzaW5nID09PSBQUk9DRVNTSU5HX09QVElPTlMuVFJBTlNJVElPTkFMICYmIHN0YXR1c1sxXSAhPT0gXCJ2YWxpZFwiKSB8fFxuICAgICAgICAocHJvY2Vzc2luZyA9PT0gUFJPQ0VTU0lOR19PUFRJT05TLk5PTlRSQU5TSVRJT05BTCAmJlxuICAgICAgICAgc3RhdHVzWzFdICE9PSBcInZhbGlkXCIgJiYgc3RhdHVzWzFdICE9PSBcImRldmlhdGlvblwiKSkge1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgZXJyb3I6IGVycm9yXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NpbmcoZG9tYWluX25hbWUsIHVzZVNURDMsIHByb2Nlc3Npbmdfb3B0aW9uKSB7XG4gIHZhciByZXN1bHQgPSBtYXBDaGFycyhkb21haW5fbmFtZSwgdXNlU1REMywgcHJvY2Vzc2luZ19vcHRpb24pO1xuICByZXN1bHQuc3RyaW5nID0gbm9ybWFsaXplKHJlc3VsdC5zdHJpbmcpO1xuXG4gIHZhciBsYWJlbHMgPSByZXN1bHQuc3RyaW5nLnNwbGl0KFwiLlwiKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0ZUxhYmVsKGxhYmVsc1tpXSk7XG4gICAgICBsYWJlbHNbaV0gPSB2YWxpZGF0aW9uLmxhYmVsO1xuICAgICAgcmVzdWx0LmVycm9yID0gcmVzdWx0LmVycm9yIHx8IHZhbGlkYXRpb24uZXJyb3I7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICByZXN1bHQuZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RyaW5nOiBsYWJlbHMuam9pbihcIi5cIiksXG4gICAgZXJyb3I6IHJlc3VsdC5lcnJvclxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cy50b0FTQ0lJID0gZnVuY3Rpb24oZG9tYWluX25hbWUsIHVzZVNURDMsIHByb2Nlc3Npbmdfb3B0aW9uLCB2ZXJpZnlEbnNMZW5ndGgpIHtcbiAgdmFyIHJlc3VsdCA9IHByb2Nlc3NpbmcoZG9tYWluX25hbWUsIHVzZVNURDMsIHByb2Nlc3Npbmdfb3B0aW9uKTtcbiAgdmFyIGxhYmVscyA9IHJlc3VsdC5zdHJpbmcuc3BsaXQoXCIuXCIpO1xuICBsYWJlbHMgPSBsYWJlbHMubWFwKGZ1bmN0aW9uKGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHB1bnljb2RlLnRvQVNDSUkobCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICByZXN1bHQuZXJyb3IgPSB0cnVlO1xuICAgICAgcmV0dXJuIGw7XG4gICAgfVxuICB9KTtcblxuICBpZiAodmVyaWZ5RG5zTGVuZ3RoKSB7XG4gICAgdmFyIHRvdGFsID0gbGFiZWxzLnNsaWNlKDAsIGxhYmVscy5sZW5ndGggLSAxKS5qb2luKFwiLlwiKS5sZW5ndGg7XG4gICAgaWYgKHRvdGFsLmxlbmd0aCA+IDI1MyB8fCB0b3RhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlc3VsdC5lcnJvciA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaT0wOyBpIDwgbGFiZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCA+IDYzIHx8IGxhYmVscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzdWx0LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlc3VsdC5lcnJvcikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBsYWJlbHMuam9pbihcIi5cIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy50b1VuaWNvZGUgPSBmdW5jdGlvbihkb21haW5fbmFtZSwgdXNlU1REMykge1xuICB2YXIgcmVzdWx0ID0gcHJvY2Vzc2luZyhkb21haW5fbmFtZSwgdXNlU1REMywgUFJPQ0VTU0lOR19PUFRJT05TLk5PTlRSQU5TSVRJT05BTCk7XG5cbiAgcmV0dXJuIHtcbiAgICBkb21haW46IHJlc3VsdC5zdHJpbmcsXG4gICAgZXJyb3I6IHJlc3VsdC5lcnJvclxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMuUFJPQ0VTU0lOR19PUFRJT05TID0gUFJPQ0VTU0lOR19PUFRJT05TO1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBwdW55Y29kZSA9IHJlcXVpcmUoXCJwdW55Y29kZVwiKTtcclxuY29uc3QgdHI0NiA9IHJlcXVpcmUoXCJ0cjQ2XCIpO1xyXG5cclxuY29uc3Qgc3BlY2lhbFNjaGVtZXMgPSB7XHJcbiAgZnRwOiAyMSxcclxuICBmaWxlOiBudWxsLFxyXG4gIGdvcGhlcjogNzAsXHJcbiAgaHR0cDogODAsXHJcbiAgaHR0cHM6IDQ0MyxcclxuICB3czogODAsXHJcbiAgd3NzOiA0NDNcclxufTtcclxuXHJcbmNvbnN0IGZhaWx1cmUgPSBTeW1ib2woXCJmYWlsdXJlXCIpO1xyXG5cclxuZnVuY3Rpb24gY291bnRTeW1ib2xzKHN0cikge1xyXG4gIHJldHVybiBwdW55Y29kZS51Y3MyLmRlY29kZShzdHIpLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXQoaW5wdXQsIGlkeCkge1xyXG4gIGNvbnN0IGMgPSBpbnB1dFtpZHhdO1xyXG4gIHJldHVybiBpc05hTihjKSA/IHVuZGVmaW5lZCA6IFN0cmluZy5mcm9tQ29kZVBvaW50KGMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FTQ0lJRGlnaXQoYykge1xyXG4gIHJldHVybiBjID49IDB4MzAgJiYgYyA8PSAweDM5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FTQ0lJQWxwaGEoYykge1xyXG4gIHJldHVybiAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FTQ0lJQWxwaGFudW1lcmljKGMpIHtcclxuICByZXR1cm4gaXNBU0NJSUFscGhhKGMpIHx8IGlzQVNDSUlEaWdpdChjKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBU0NJSUhleChjKSB7XHJcbiAgcmV0dXJuIGlzQVNDSUlEaWdpdChjKSB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg0NikgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4NjYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NpbmdsZURvdChidWZmZXIpIHtcclxuICByZXR1cm4gYnVmZmVyID09PSBcIi5cIiB8fCBidWZmZXIudG9Mb3dlckNhc2UoKSA9PT0gXCIlMmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEb3VibGVEb3QoYnVmZmVyKSB7XHJcbiAgYnVmZmVyID0gYnVmZmVyLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIGJ1ZmZlciA9PT0gXCIuLlwiIHx8IGJ1ZmZlciA9PT0gXCIlMmUuXCIgfHwgYnVmZmVyID09PSBcIi4lMmVcIiB8fCBidWZmZXIgPT09IFwiJTJlJTJlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2luZG93c0RyaXZlTGV0dGVyQ29kZVBvaW50cyhjcDEsIGNwMikge1xyXG4gIHJldHVybiBpc0FTQ0lJQWxwaGEoY3AxKSAmJiAoY3AyID09PSA1OCB8fCBjcDIgPT09IDEyNCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2luZG93c0RyaXZlTGV0dGVyU3RyaW5nKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcubGVuZ3RoID09PSAyICYmIGlzQVNDSUlBbHBoYShzdHJpbmcuY29kZVBvaW50QXQoMCkpICYmIChzdHJpbmdbMV0gPT09IFwiOlwiIHx8IHN0cmluZ1sxXSA9PT0gXCJ8XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc05vcm1hbGl6ZWRXaW5kb3dzRHJpdmVMZXR0ZXJTdHJpbmcoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5sZW5ndGggPT09IDIgJiYgaXNBU0NJSUFscGhhKHN0cmluZy5jb2RlUG9pbnRBdCgwKSkgJiYgc3RyaW5nWzFdID09PSBcIjpcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnNGb3JiaWRkZW5Ib3N0Q29kZVBvaW50KHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcuc2VhcmNoKC9cXHUwMDAwfFxcdTAwMDl8XFx1MDAwQXxcXHUwMDBEfFxcdTAwMjB8I3wlfFxcL3w6fFxcP3xAfFxcW3xcXFxcfFxcXS8pICE9PSAtMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnNGb3JiaWRkZW5Ib3N0Q29kZVBvaW50RXhjbHVkaW5nUGVyY2VudChzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyaW5nLnNlYXJjaCgvXFx1MDAwMHxcXHUwMDA5fFxcdTAwMEF8XFx1MDAwRHxcXHUwMDIwfCN8XFwvfDp8XFw/fEB8XFxbfFxcXFx8XFxdLykgIT09IC0xO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NwZWNpYWxTY2hlbWUoc2NoZW1lKSB7XHJcbiAgcmV0dXJuIHNwZWNpYWxTY2hlbWVzW3NjaGVtZV0gIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTcGVjaWFsKHVybCkge1xyXG4gIHJldHVybiBpc1NwZWNpYWxTY2hlbWUodXJsLnNjaGVtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRQb3J0KHNjaGVtZSkge1xyXG4gIHJldHVybiBzcGVjaWFsU2NoZW1lc1tzY2hlbWVdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJjZW50RW5jb2RlKGMpIHtcclxuICBsZXQgaGV4ID0gYy50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcclxuICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgaGV4ID0gXCIwXCIgKyBoZXg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gXCIlXCIgKyBoZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHV0ZjhQZXJjZW50RW5jb2RlKGMpIHtcclxuICBjb25zdCBidWYgPSBuZXcgQnVmZmVyKGMpO1xyXG5cclxuICBsZXQgc3RyID0gXCJcIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyArK2kpIHtcclxuICAgIHN0ciArPSBwZXJjZW50RW5jb2RlKGJ1ZltpXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1dGY4UGVyY2VudERlY29kZShzdHIpIHtcclxuICBjb25zdCBpbnB1dCA9IG5ldyBCdWZmZXIoc3RyKTtcclxuICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICBpZiAoaW5wdXRbaV0gIT09IDM3KSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKGlucHV0W2ldKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPT09IDM3ICYmIGlzQVNDSUlIZXgoaW5wdXRbaSArIDFdKSAmJiBpc0FTQ0lJSGV4KGlucHV0W2kgKyAyXSkpIHtcclxuICAgICAgb3V0cHV0LnB1c2gocGFyc2VJbnQoaW5wdXQuc2xpY2UoaSArIDEsIGkgKyAzKS50b1N0cmluZygpLCAxNikpO1xyXG4gICAgICBpICs9IDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXRwdXQucHVzaChpbnB1dFtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgQnVmZmVyKG91dHB1dCkudG9TdHJpbmcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDMENvbnRyb2xQZXJjZW50RW5jb2RlKGMpIHtcclxuICByZXR1cm4gYyA8PSAweDFGIHx8IGMgPiAweDdFO1xyXG59XHJcblxyXG5jb25zdCBleHRyYVBhdGhQZXJjZW50RW5jb2RlU2V0ID0gbmV3IFNldChbMzIsIDM0LCAzNSwgNjAsIDYyLCA2MywgOTYsIDEyMywgMTI1XSk7XHJcbmZ1bmN0aW9uIGlzUGF0aFBlcmNlbnRFbmNvZGUoYykge1xyXG4gIHJldHVybiBpc0MwQ29udHJvbFBlcmNlbnRFbmNvZGUoYykgfHwgZXh0cmFQYXRoUGVyY2VudEVuY29kZVNldC5oYXMoYyk7XHJcbn1cclxuXHJcbmNvbnN0IGV4dHJhVXNlcmluZm9QZXJjZW50RW5jb2RlU2V0ID1cclxuICBuZXcgU2V0KFs0NywgNTgsIDU5LCA2MSwgNjQsIDkxLCA5MiwgOTMsIDk0LCAxMjRdKTtcclxuZnVuY3Rpb24gaXNVc2VyaW5mb1BlcmNlbnRFbmNvZGUoYykge1xyXG4gIHJldHVybiBpc1BhdGhQZXJjZW50RW5jb2RlKGMpIHx8IGV4dHJhVXNlcmluZm9QZXJjZW50RW5jb2RlU2V0LmhhcyhjKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGVyY2VudEVuY29kZUNoYXIoYywgZW5jb2RlU2V0UHJlZGljYXRlKSB7XHJcbiAgY29uc3QgY1N0ciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGMpO1xyXG5cclxuICBpZiAoZW5jb2RlU2V0UHJlZGljYXRlKGMpKSB7XHJcbiAgICByZXR1cm4gdXRmOFBlcmNlbnRFbmNvZGUoY1N0cik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY1N0cjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VJUHY0TnVtYmVyKGlucHV0KSB7XHJcbiAgbGV0IFIgPSAxMDtcclxuXHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA+PSAyICYmIGlucHV0LmNoYXJBdCgwKSA9PT0gXCIwXCIgJiYgaW5wdXQuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09IFwieFwiKSB7XHJcbiAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZygyKTtcclxuICAgIFIgPSAxNjtcclxuICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA+PSAyICYmIGlucHV0LmNoYXJBdCgwKSA9PT0gXCIwXCIpIHtcclxuICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKDEpO1xyXG4gICAgUiA9IDg7XHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQgPT09IFwiXCIpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVnZXggPSBSID09PSAxMCA/IC9bXjAtOV0vIDogKFIgPT09IDE2ID8gL1teMC05QS1GYS1mXS8gOiAvW14wLTddLyk7XHJcbiAgaWYgKHJlZ2V4LnRlc3QoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gZmFpbHVyZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJzZUludChpbnB1dCwgUik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSVB2NChpbnB1dCkge1xyXG4gIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQoXCIuXCIpO1xyXG4gIGlmIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSA9PT0gXCJcIikge1xyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcGFydHMucG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocGFydHMubGVuZ3RoID4gNCkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbnVtYmVycyA9IFtdO1xyXG4gIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xyXG4gICAgaWYgKHBhcnQgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgY29uc3QgbiA9IHBhcnNlSVB2NE51bWJlcihwYXJ0KTtcclxuICAgIGlmIChuID09PSBmYWlsdXJlKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBudW1iZXJzLnB1c2gobik7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoIC0gMTsgKytpKSB7XHJcbiAgICBpZiAobnVtYmVyc1tpXSA+IDI1NSkge1xyXG4gICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG51bWJlcnNbbnVtYmVycy5sZW5ndGggLSAxXSA+PSBNYXRoLnBvdygyNTYsIDUgLSBudW1iZXJzLmxlbmd0aCkpIHtcclxuICAgIHJldHVybiBmYWlsdXJlO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlwdjQgPSBudW1iZXJzLnBvcCgpO1xyXG4gIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgZm9yIChjb25zdCBuIG9mIG51bWJlcnMpIHtcclxuICAgIGlwdjQgKz0gbiAqIE1hdGgucG93KDI1NiwgMyAtIGNvdW50ZXIpO1xyXG4gICAgKytjb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlwdjQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUlQdjQoYWRkcmVzcykge1xyXG4gIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gIGxldCBuID0gYWRkcmVzcztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgKytpKSB7XHJcbiAgICBvdXRwdXQgPSBTdHJpbmcobiAlIDI1NikgKyBvdXRwdXQ7XHJcbiAgICBpZiAoaSAhPT0gNCkge1xyXG4gICAgICBvdXRwdXQgPSBcIi5cIiArIG91dHB1dDtcclxuICAgIH1cclxuICAgIG4gPSBNYXRoLmZsb29yKG4gLyAyNTYpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VJUHY2KGlucHV0KSB7XHJcbiAgY29uc3QgYWRkcmVzcyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICBsZXQgcGllY2VJbmRleCA9IDA7XHJcbiAgbGV0IGNvbXByZXNzID0gbnVsbDtcclxuICBsZXQgcG9pbnRlciA9IDA7XHJcblxyXG4gIGlucHV0ID0gcHVueWNvZGUudWNzMi5kZWNvZGUoaW5wdXQpO1xyXG5cclxuICBpZiAoaW5wdXRbcG9pbnRlcl0gPT09IDU4KSB7XHJcbiAgICBpZiAoaW5wdXRbcG9pbnRlciArIDFdICE9PSA1OCkge1xyXG4gICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwb2ludGVyICs9IDI7XHJcbiAgICArK3BpZWNlSW5kZXg7XHJcbiAgICBjb21wcmVzcyA9IHBpZWNlSW5kZXg7XHJcbiAgfVxyXG5cclxuICB3aGlsZSAocG9pbnRlciA8IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgaWYgKHBpZWNlSW5kZXggPT09IDgpIHtcclxuICAgICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucHV0W3BvaW50ZXJdID09PSA1OCkge1xyXG4gICAgICBpZiAoY29tcHJlc3MgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgfVxyXG4gICAgICArK3BvaW50ZXI7XHJcbiAgICAgICsrcGllY2VJbmRleDtcclxuICAgICAgY29tcHJlc3MgPSBwaWVjZUluZGV4O1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgbGV0IGxlbmd0aCA9IDA7XHJcblxyXG4gICAgd2hpbGUgKGxlbmd0aCA8IDQgJiYgaXNBU0NJSUhleChpbnB1dFtwb2ludGVyXSkpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZSAqIDB4MTAgKyBwYXJzZUludChhdChpbnB1dCwgcG9pbnRlciksIDE2KTtcclxuICAgICAgKytwb2ludGVyO1xyXG4gICAgICArK2xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wdXRbcG9pbnRlcl0gPT09IDQ2KSB7XHJcbiAgICAgIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcG9pbnRlciAtPSBsZW5ndGg7XHJcblxyXG4gICAgICBpZiAocGllY2VJbmRleCA+IDYpIHtcclxuICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG51bWJlcnNTZWVuID0gMDtcclxuXHJcbiAgICAgIHdoaWxlIChpbnB1dFtwb2ludGVyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGV0IGlwdjRQaWVjZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChudW1iZXJzU2VlbiA+IDApIHtcclxuICAgICAgICAgIGlmIChpbnB1dFtwb2ludGVyXSA9PT0gNDYgJiYgbnVtYmVyc1NlZW4gPCA0KSB7XHJcbiAgICAgICAgICAgICsrcG9pbnRlcjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsdXJlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0FTQ0lJRGlnaXQoaW5wdXRbcG9pbnRlcl0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChpc0FTQ0lJRGlnaXQoaW5wdXRbcG9pbnRlcl0pKSB7XHJcbiAgICAgICAgICBjb25zdCBudW1iZXIgPSBwYXJzZUludChhdChpbnB1dCwgcG9pbnRlcikpO1xyXG4gICAgICAgICAgaWYgKGlwdjRQaWVjZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpcHY0UGllY2UgPSBudW1iZXI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlwdjRQaWVjZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlwdjRQaWVjZSA9IGlwdjRQaWVjZSAqIDEwICsgbnVtYmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlwdjRQaWVjZSA+IDI1NSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICsrcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZHJlc3NbcGllY2VJbmRleF0gPSBhZGRyZXNzW3BpZWNlSW5kZXhdICogMHgxMDAgKyBpcHY0UGllY2U7XHJcblxyXG4gICAgICAgICsrbnVtYmVyc1NlZW47XHJcblxyXG4gICAgICAgIGlmIChudW1iZXJzU2VlbiA9PT0gMiB8fCBudW1iZXJzU2VlbiA9PT0gNCkge1xyXG4gICAgICAgICAgKytwaWVjZUluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG51bWJlcnNTZWVuICE9PSA0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFtwb2ludGVyXSA9PT0gNTgpIHtcclxuICAgICAgKytwb2ludGVyO1xyXG4gICAgICBpZiAoaW5wdXRbcG9pbnRlcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBmYWlsdXJlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0W3BvaW50ZXJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkcmVzc1twaWVjZUluZGV4XSA9IHZhbHVlO1xyXG4gICAgKytwaWVjZUluZGV4O1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXByZXNzICE9PSBudWxsKSB7XHJcbiAgICBsZXQgc3dhcHMgPSBwaWVjZUluZGV4IC0gY29tcHJlc3M7XHJcbiAgICBwaWVjZUluZGV4ID0gNztcclxuICAgIHdoaWxlIChwaWVjZUluZGV4ICE9PSAwICYmIHN3YXBzID4gMCkge1xyXG4gICAgICBjb25zdCB0ZW1wID0gYWRkcmVzc1tjb21wcmVzcyArIHN3YXBzIC0gMV07XHJcbiAgICAgIGFkZHJlc3NbY29tcHJlc3MgKyBzd2FwcyAtIDFdID0gYWRkcmVzc1twaWVjZUluZGV4XTtcclxuICAgICAgYWRkcmVzc1twaWVjZUluZGV4XSA9IHRlbXA7XHJcbiAgICAgIC0tcGllY2VJbmRleDtcclxuICAgICAgLS1zd2FwcztcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGNvbXByZXNzID09PSBudWxsICYmIHBpZWNlSW5kZXggIT09IDgpIHtcclxuICAgIHJldHVybiBmYWlsdXJlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFkZHJlc3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUlQdjYoYWRkcmVzcykge1xyXG4gIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gIGNvbnN0IHNlcVJlc3VsdCA9IGZpbmRMb25nZXN0WmVyb1NlcXVlbmNlKGFkZHJlc3MpO1xyXG4gIGNvbnN0IGNvbXByZXNzID0gc2VxUmVzdWx0LmlkeDtcclxuICBsZXQgaWdub3JlMCA9IGZhbHNlO1xyXG5cclxuICBmb3IgKGxldCBwaWVjZUluZGV4ID0gMDsgcGllY2VJbmRleCA8PSA3OyArK3BpZWNlSW5kZXgpIHtcclxuICAgIGlmIChpZ25vcmUwICYmIGFkZHJlc3NbcGllY2VJbmRleF0gPT09IDApIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9IGVsc2UgaWYgKGlnbm9yZTApIHtcclxuICAgICAgaWdub3JlMCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb21wcmVzcyA9PT0gcGllY2VJbmRleCkge1xyXG4gICAgICBjb25zdCBzZXBhcmF0b3IgPSBwaWVjZUluZGV4ID09PSAwID8gXCI6OlwiIDogXCI6XCI7XHJcbiAgICAgIG91dHB1dCArPSBzZXBhcmF0b3I7XHJcbiAgICAgIGlnbm9yZTAgPSB0cnVlO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXQgKz0gYWRkcmVzc1twaWVjZUluZGV4XS50b1N0cmluZygxNik7XHJcblxyXG4gICAgaWYgKHBpZWNlSW5kZXggIT09IDcpIHtcclxuICAgICAgb3V0cHV0ICs9IFwiOlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VIb3N0KGlucHV0LCBpc1NwZWNpYWxBcmcpIHtcclxuICBpZiAoaW5wdXRbMF0gPT09IFwiW1wiKSB7XHJcbiAgICBpZiAoaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV0gIT09IFwiXVwiKSB7XHJcbiAgICAgIHJldHVybiBmYWlsdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJzZUlQdjYoaW5wdXQuc3Vic3RyaW5nKDEsIGlucHV0Lmxlbmd0aCAtIDEpKTtcclxuICB9XHJcblxyXG4gIGlmICghaXNTcGVjaWFsQXJnKSB7XHJcbiAgICByZXR1cm4gcGFyc2VPcGFxdWVIb3N0KGlucHV0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRvbWFpbiA9IHV0ZjhQZXJjZW50RGVjb2RlKGlucHV0KTtcclxuICBjb25zdCBhc2NpaURvbWFpbiA9IHRyNDYudG9BU0NJSShkb21haW4sIGZhbHNlLCB0cjQ2LlBST0NFU1NJTkdfT1BUSU9OUy5OT05UUkFOU0lUSU9OQUwsIGZhbHNlKTtcclxuICBpZiAoYXNjaWlEb21haW4gPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWlsdXJlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbnRhaW5zRm9yYmlkZGVuSG9zdENvZGVQb2ludChhc2NpaURvbWFpbikpIHtcclxuICAgIHJldHVybiBmYWlsdXJlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXB2NEhvc3QgPSBwYXJzZUlQdjQoYXNjaWlEb21haW4pO1xyXG4gIGlmICh0eXBlb2YgaXB2NEhvc3QgPT09IFwibnVtYmVyXCIgfHwgaXB2NEhvc3QgPT09IGZhaWx1cmUpIHtcclxuICAgIHJldHVybiBpcHY0SG9zdDtcclxuICB9XHJcblxyXG4gIHJldHVybiBhc2NpaURvbWFpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VPcGFxdWVIb3N0KGlucHV0KSB7XHJcbiAgaWYgKGNvbnRhaW5zRm9yYmlkZGVuSG9zdENvZGVQb2ludEV4Y2x1ZGluZ1BlcmNlbnQoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gZmFpbHVyZTtcclxuICB9XHJcblxyXG4gIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gIGNvbnN0IGRlY29kZWQgPSBwdW55Y29kZS51Y3MyLmRlY29kZShpbnB1dCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvZGVkLmxlbmd0aDsgKytpKSB7XHJcbiAgICBvdXRwdXQgKz0gcGVyY2VudEVuY29kZUNoYXIoZGVjb2RlZFtpXSwgaXNDMENvbnRyb2xQZXJjZW50RW5jb2RlKTtcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZExvbmdlc3RaZXJvU2VxdWVuY2UoYXJyKSB7XHJcbiAgbGV0IG1heElkeCA9IG51bGw7XHJcbiAgbGV0IG1heExlbiA9IDE7IC8vIG9ubHkgZmluZCBlbGVtZW50cyA+IDFcclxuICBsZXQgY3VyclN0YXJ0ID0gbnVsbDtcclxuICBsZXQgY3VyckxlbiA9IDA7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICBpZiAoYXJyW2ldICE9PSAwKSB7XHJcbiAgICAgIGlmIChjdXJyTGVuID4gbWF4TGVuKSB7XHJcbiAgICAgICAgbWF4SWR4ID0gY3VyclN0YXJ0O1xyXG4gICAgICAgIG1heExlbiA9IGN1cnJMZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJTdGFydCA9IG51bGw7XHJcbiAgICAgIGN1cnJMZW4gPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGN1cnJTdGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGN1cnJTdGFydCA9IGk7XHJcbiAgICAgIH1cclxuICAgICAgKytjdXJyTGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaWYgdHJhaWxpbmcgemVyb3NcclxuICBpZiAoY3VyckxlbiA+IG1heExlbikge1xyXG4gICAgbWF4SWR4ID0gY3VyclN0YXJ0O1xyXG4gICAgbWF4TGVuID0gY3VyckxlbjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpZHg6IG1heElkeCxcclxuICAgIGxlbjogbWF4TGVuXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplSG9zdChob3N0KSB7XHJcbiAgaWYgKHR5cGVvZiBob3N0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm4gc2VyaWFsaXplSVB2NChob3N0KTtcclxuICB9XHJcblxyXG4gIC8vIElQdjYgc2VyaWFsaXplclxyXG4gIGlmIChob3N0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgIHJldHVybiBcIltcIiArIHNlcmlhbGl6ZUlQdjYoaG9zdCkgKyBcIl1cIjtcclxuICB9XHJcblxyXG4gIHJldHVybiBob3N0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmltQ29udHJvbENoYXJzKHVybCkge1xyXG4gIHJldHVybiB1cmwucmVwbGFjZSgvXltcXHUwMDAwLVxcdTAwMUZcXHUwMDIwXSt8W1xcdTAwMDAtXFx1MDAxRlxcdTAwMjBdKyQvZywgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyaW1UYWJBbmROZXdsaW5lKHVybCkge1xyXG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFx1MDAwOXxcXHUwMDBBfFxcdTAwMEQvZywgXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3J0ZW5QYXRoKHVybCkge1xyXG4gIGNvbnN0IHBhdGggPSB1cmwucGF0aDtcclxuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHVybC5zY2hlbWUgPT09IFwiZmlsZVwiICYmIHBhdGgubGVuZ3RoID09PSAxICYmIGlzTm9ybWFsaXplZFdpbmRvd3NEcml2ZUxldHRlcihwYXRoWzBdKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcGF0aC5wb3AoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jbHVkZXNDcmVkZW50aWFscyh1cmwpIHtcclxuICByZXR1cm4gdXJsLnVzZXJuYW1lICE9PSBcIlwiIHx8IHVybC5wYXNzd29yZCAhPT0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2Fubm90SGF2ZUFVc2VybmFtZVBhc3N3b3JkUG9ydCh1cmwpIHtcclxuICByZXR1cm4gdXJsLmhvc3QgPT09IG51bGwgfHwgdXJsLmhvc3QgPT09IFwiXCIgfHwgdXJsLmNhbm5vdEJlQUJhc2VVUkwgfHwgdXJsLnNjaGVtZSA9PT0gXCJmaWxlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTm9ybWFsaXplZFdpbmRvd3NEcml2ZUxldHRlcihzdHJpbmcpIHtcclxuICByZXR1cm4gL15bQS1aYS16XTokLy50ZXN0KHN0cmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVSTFN0YXRlTWFjaGluZShpbnB1dCwgYmFzZSwgZW5jb2RpbmdPdmVycmlkZSwgdXJsLCBzdGF0ZU92ZXJyaWRlKSB7XHJcbiAgdGhpcy5wb2ludGVyID0gMDtcclxuICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgdGhpcy5iYXNlID0gYmFzZSB8fCBudWxsO1xyXG4gIHRoaXMuZW5jb2RpbmdPdmVycmlkZSA9IGVuY29kaW5nT3ZlcnJpZGUgfHwgXCJ1dGYtOFwiO1xyXG4gIHRoaXMuc3RhdGVPdmVycmlkZSA9IHN0YXRlT3ZlcnJpZGU7XHJcbiAgdGhpcy51cmwgPSB1cmw7XHJcbiAgdGhpcy5mYWlsdXJlID0gZmFsc2U7XHJcbiAgdGhpcy5wYXJzZUVycm9yID0gZmFsc2U7XHJcblxyXG4gIGlmICghdGhpcy51cmwpIHtcclxuICAgIHRoaXMudXJsID0ge1xyXG4gICAgICBzY2hlbWU6IFwiXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgaG9zdDogbnVsbCxcclxuICAgICAgcG9ydDogbnVsbCxcclxuICAgICAgcGF0aDogW10sXHJcbiAgICAgIHF1ZXJ5OiBudWxsLFxyXG4gICAgICBmcmFnbWVudDogbnVsbCxcclxuXHJcbiAgICAgIGNhbm5vdEJlQUJhc2VVUkw6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IHRyaW1Db250cm9sQ2hhcnModGhpcy5pbnB1dCk7XHJcbiAgICBpZiAocmVzICE9PSB0aGlzLmlucHV0KSB7XHJcbiAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0ID0gcmVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gdHJpbVRhYkFuZE5ld2xpbmUodGhpcy5pbnB1dCk7XHJcbiAgaWYgKHJlcyAhPT0gdGhpcy5pbnB1dCkge1xyXG4gICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICB9XHJcbiAgdGhpcy5pbnB1dCA9IHJlcztcclxuXHJcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlT3ZlcnJpZGUgfHwgXCJzY2hlbWUgc3RhcnRcIjtcclxuXHJcbiAgdGhpcy5idWZmZXIgPSBcIlwiO1xyXG4gIHRoaXMuYXRGbGFnID0gZmFsc2U7XHJcbiAgdGhpcy5hcnJGbGFnID0gZmFsc2U7XHJcbiAgdGhpcy5wYXNzd29yZFRva2VuU2VlbkZsYWcgPSBmYWxzZTtcclxuXHJcbiAgdGhpcy5pbnB1dCA9IHB1bnljb2RlLnVjczIuZGVjb2RlKHRoaXMuaW5wdXQpO1xyXG5cclxuICBmb3IgKDsgdGhpcy5wb2ludGVyIDw9IHRoaXMuaW5wdXQubGVuZ3RoOyArK3RoaXMucG9pbnRlcikge1xyXG4gICAgY29uc3QgYyA9IHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyXTtcclxuICAgIGNvbnN0IGNTdHIgPSBpc05hTihjKSA/IHVuZGVmaW5lZCA6IFN0cmluZy5mcm9tQ29kZVBvaW50KGMpO1xyXG5cclxuICAgIC8vIGV4ZWMgc3RhdGUgbWFjaGluZVxyXG4gICAgY29uc3QgcmV0ID0gdGhpc1tcInBhcnNlIFwiICsgdGhpcy5zdGF0ZV0oYywgY1N0cik7XHJcbiAgICBpZiAoIXJldCkge1xyXG4gICAgICBicmVhazsgLy8gdGVybWluYXRlIGFsZ29yaXRobVxyXG4gICAgfSBlbHNlIGlmIChyZXQgPT09IGZhaWx1cmUpIHtcclxuICAgICAgdGhpcy5mYWlsdXJlID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2Ugc2NoZW1lIHN0YXJ0XCJdID0gZnVuY3Rpb24gcGFyc2VTY2hlbWVTdGFydChjLCBjU3RyKSB7XHJcbiAgaWYgKGlzQVNDSUlBbHBoYShjKSkge1xyXG4gICAgdGhpcy5idWZmZXIgKz0gY1N0ci50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwic2NoZW1lXCI7XHJcbiAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZU92ZXJyaWRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJubyBzY2hlbWVcIjtcclxuICAgIC0tdGhpcy5wb2ludGVyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBzY2hlbWVcIl0gPSBmdW5jdGlvbiBwYXJzZVNjaGVtZShjLCBjU3RyKSB7XHJcbiAgaWYgKGlzQVNDSUlBbHBoYW51bWVyaWMoYykgfHwgYyA9PT0gNDMgfHwgYyA9PT0gNDUgfHwgYyA9PT0gNDYpIHtcclxuICAgIHRoaXMuYnVmZmVyICs9IGNTdHIudG9Mb3dlckNhc2UoKTtcclxuICB9IGVsc2UgaWYgKGMgPT09IDU4KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZU92ZXJyaWRlKSB7XHJcbiAgICAgIGlmIChpc1NwZWNpYWwodGhpcy51cmwpICYmICFpc1NwZWNpYWxTY2hlbWUodGhpcy5idWZmZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzU3BlY2lhbCh0aGlzLnVybCkgJiYgaXNTcGVjaWFsU2NoZW1lKHRoaXMuYnVmZmVyKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKChpbmNsdWRlc0NyZWRlbnRpYWxzKHRoaXMudXJsKSB8fCB0aGlzLnVybC5wb3J0ICE9PSBudWxsKSAmJiB0aGlzLmJ1ZmZlciA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnVybC5zY2hlbWUgPT09IFwiZmlsZVwiICYmICh0aGlzLnVybC5ob3N0ID09PSBcIlwiIHx8IHRoaXMudXJsLmhvc3QgPT09IG51bGwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVybC5zY2hlbWUgPSB0aGlzLmJ1ZmZlcjtcclxuICAgIHRoaXMuYnVmZmVyID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlT3ZlcnJpZGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudXJsLnNjaGVtZSA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMV0gIT09IDQ3IHx8IHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMl0gIT09IDQ3KSB7XHJcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0YXRlID0gXCJmaWxlXCI7XHJcbiAgICB9IGVsc2UgaWYgKGlzU3BlY2lhbCh0aGlzLnVybCkgJiYgdGhpcy5iYXNlICE9PSBudWxsICYmIHRoaXMuYmFzZS5zY2hlbWUgPT09IHRoaXMudXJsLnNjaGVtZSkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gXCJzcGVjaWFsIHJlbGF0aXZlIG9yIGF1dGhvcml0eVwiO1xyXG4gICAgfSBlbHNlIGlmIChpc1NwZWNpYWwodGhpcy51cmwpKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBcInNwZWNpYWwgYXV0aG9yaXR5IHNsYXNoZXNcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFt0aGlzLnBvaW50ZXIgKyAxXSA9PT0gNDcpIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IFwicGF0aCBvciBhdXRob3JpdHlcIjtcclxuICAgICAgKyt0aGlzLnBvaW50ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVybC5jYW5ub3RCZUFCYXNlVVJMID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cmwucGF0aC5wdXNoKFwiXCIpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gXCJjYW5ub3QtYmUtYS1iYXNlLVVSTCBwYXRoXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZU92ZXJyaWRlKSB7XHJcbiAgICB0aGlzLmJ1ZmZlciA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJubyBzY2hlbWVcIjtcclxuICAgIHRoaXMucG9pbnRlciA9IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBubyBzY2hlbWVcIl0gPSBmdW5jdGlvbiBwYXJzZU5vU2NoZW1lKGMpIHtcclxuICBpZiAodGhpcy5iYXNlID09PSBudWxsIHx8ICh0aGlzLmJhc2UuY2Fubm90QmVBQmFzZVVSTCAmJiBjICE9PSAzNSkpIHtcclxuICAgIHJldHVybiBmYWlsdXJlO1xyXG4gIH0gZWxzZSBpZiAodGhpcy5iYXNlLmNhbm5vdEJlQUJhc2VVUkwgJiYgYyA9PT0gMzUpIHtcclxuICAgIHRoaXMudXJsLnNjaGVtZSA9IHRoaXMuYmFzZS5zY2hlbWU7XHJcbiAgICB0aGlzLnVybC5wYXRoID0gdGhpcy5iYXNlLnBhdGguc2xpY2UoKTtcclxuICAgIHRoaXMudXJsLnF1ZXJ5ID0gdGhpcy5iYXNlLnF1ZXJ5O1xyXG4gICAgdGhpcy51cmwuZnJhZ21lbnQgPSBcIlwiO1xyXG4gICAgdGhpcy51cmwuY2Fubm90QmVBQmFzZVVSTCA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJmcmFnbWVudFwiO1xyXG4gIH0gZWxzZSBpZiAodGhpcy5iYXNlLnNjaGVtZSA9PT0gXCJmaWxlXCIpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBcImZpbGVcIjtcclxuICAgIC0tdGhpcy5wb2ludGVyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBzcGVjaWFsIHJlbGF0aXZlIG9yIGF1dGhvcml0eVwiXSA9IGZ1bmN0aW9uIHBhcnNlU3BlY2lhbFJlbGF0aXZlT3JBdXRob3JpdHkoYykge1xyXG4gIGlmIChjID09PSA0NyAmJiB0aGlzLmlucHV0W3RoaXMucG9pbnRlciArIDFdID09PSA0Nykge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwic3BlY2lhbCBhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjtcclxuICAgICsrdGhpcy5wb2ludGVyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwicmVsYXRpdmVcIjtcclxuICAgIC0tdGhpcy5wb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgcGF0aCBvciBhdXRob3JpdHlcIl0gPSBmdW5jdGlvbiBwYXJzZVBhdGhPckF1dGhvcml0eShjKSB7XHJcbiAgaWYgKGMgPT09IDQ3KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJhdXRob3JpdHlcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwicGF0aFwiO1xyXG4gICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSByZWxhdGl2ZVwiXSA9IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmUoYykge1xyXG4gIHRoaXMudXJsLnNjaGVtZSA9IHRoaXMuYmFzZS5zY2hlbWU7XHJcbiAgaWYgKGlzTmFOKGMpKSB7XHJcbiAgICB0aGlzLnVybC51c2VybmFtZSA9IHRoaXMuYmFzZS51c2VybmFtZTtcclxuICAgIHRoaXMudXJsLnBhc3N3b3JkID0gdGhpcy5iYXNlLnBhc3N3b3JkO1xyXG4gICAgdGhpcy51cmwuaG9zdCA9IHRoaXMuYmFzZS5ob3N0O1xyXG4gICAgdGhpcy51cmwucG9ydCA9IHRoaXMuYmFzZS5wb3J0O1xyXG4gICAgdGhpcy51cmwucGF0aCA9IHRoaXMuYmFzZS5wYXRoLnNsaWNlKCk7XHJcbiAgICB0aGlzLnVybC5xdWVyeSA9IHRoaXMuYmFzZS5xdWVyeTtcclxuICB9IGVsc2UgaWYgKGMgPT09IDQ3KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJyZWxhdGl2ZSBzbGFzaFwiO1xyXG4gIH0gZWxzZSBpZiAoYyA9PT0gNjMpIHtcclxuICAgIHRoaXMudXJsLnVzZXJuYW1lID0gdGhpcy5iYXNlLnVzZXJuYW1lO1xyXG4gICAgdGhpcy51cmwucGFzc3dvcmQgPSB0aGlzLmJhc2UucGFzc3dvcmQ7XHJcbiAgICB0aGlzLnVybC5ob3N0ID0gdGhpcy5iYXNlLmhvc3Q7XHJcbiAgICB0aGlzLnVybC5wb3J0ID0gdGhpcy5iYXNlLnBvcnQ7XHJcbiAgICB0aGlzLnVybC5wYXRoID0gdGhpcy5iYXNlLnBhdGguc2xpY2UoKTtcclxuICAgIHRoaXMudXJsLnF1ZXJ5ID0gXCJcIjtcclxuICAgIHRoaXMuc3RhdGUgPSBcInF1ZXJ5XCI7XHJcbiAgfSBlbHNlIGlmIChjID09PSAzNSkge1xyXG4gICAgdGhpcy51cmwudXNlcm5hbWUgPSB0aGlzLmJhc2UudXNlcm5hbWU7XHJcbiAgICB0aGlzLnVybC5wYXNzd29yZCA9IHRoaXMuYmFzZS5wYXNzd29yZDtcclxuICAgIHRoaXMudXJsLmhvc3QgPSB0aGlzLmJhc2UuaG9zdDtcclxuICAgIHRoaXMudXJsLnBvcnQgPSB0aGlzLmJhc2UucG9ydDtcclxuICAgIHRoaXMudXJsLnBhdGggPSB0aGlzLmJhc2UucGF0aC5zbGljZSgpO1xyXG4gICAgdGhpcy51cmwucXVlcnkgPSB0aGlzLmJhc2UucXVlcnk7XHJcbiAgICB0aGlzLnVybC5mcmFnbWVudCA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJmcmFnbWVudFwiO1xyXG4gIH0gZWxzZSBpZiAoaXNTcGVjaWFsKHRoaXMudXJsKSAmJiBjID09PSA5Mikge1xyXG4gICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBcInJlbGF0aXZlIHNsYXNoXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMudXJsLnVzZXJuYW1lID0gdGhpcy5iYXNlLnVzZXJuYW1lO1xyXG4gICAgdGhpcy51cmwucGFzc3dvcmQgPSB0aGlzLmJhc2UucGFzc3dvcmQ7XHJcbiAgICB0aGlzLnVybC5ob3N0ID0gdGhpcy5iYXNlLmhvc3Q7XHJcbiAgICB0aGlzLnVybC5wb3J0ID0gdGhpcy5iYXNlLnBvcnQ7XHJcbiAgICB0aGlzLnVybC5wYXRoID0gdGhpcy5iYXNlLnBhdGguc2xpY2UoMCwgdGhpcy5iYXNlLnBhdGgubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IFwicGF0aFwiO1xyXG4gICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSByZWxhdGl2ZSBzbGFzaFwiXSA9IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVTbGFzaChjKSB7XHJcbiAgaWYgKGlzU3BlY2lhbCh0aGlzLnVybCkgJiYgKGMgPT09IDQ3IHx8IGMgPT09IDkyKSkge1xyXG4gICAgaWYgKGMgPT09IDkyKSB7XHJcbiAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gXCJzcGVjaWFsIGF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO1xyXG4gIH0gZWxzZSBpZiAoYyA9PT0gNDcpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBcImF1dGhvcml0eVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnVybC51c2VybmFtZSA9IHRoaXMuYmFzZS51c2VybmFtZTtcclxuICAgIHRoaXMudXJsLnBhc3N3b3JkID0gdGhpcy5iYXNlLnBhc3N3b3JkO1xyXG4gICAgdGhpcy51cmwuaG9zdCA9IHRoaXMuYmFzZS5ob3N0O1xyXG4gICAgdGhpcy51cmwucG9ydCA9IHRoaXMuYmFzZS5wb3J0O1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwicGF0aFwiO1xyXG4gICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBzcGVjaWFsIGF1dGhvcml0eSBzbGFzaGVzXCJdID0gZnVuY3Rpb24gcGFyc2VTcGVjaWFsQXV0aG9yaXR5U2xhc2hlcyhjKSB7XHJcbiAgaWYgKGMgPT09IDQ3ICYmIHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMV0gPT09IDQ3KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJzcGVjaWFsIGF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO1xyXG4gICAgKyt0aGlzLnBvaW50ZXI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJzcGVjaWFsIGF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO1xyXG4gICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBzcGVjaWFsIGF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiXSA9IGZ1bmN0aW9uIHBhcnNlU3BlY2lhbEF1dGhvcml0eUlnbm9yZVNsYXNoZXMoYykge1xyXG4gIGlmIChjICE9PSA0NyAmJiBjICE9PSA5Mikge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwiYXV0aG9yaXR5XCI7XHJcbiAgICAtLXRoaXMucG9pbnRlcjtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuVVJMU3RhdGVNYWNoaW5lLnByb3RvdHlwZVtcInBhcnNlIGF1dGhvcml0eVwiXSA9IGZ1bmN0aW9uIHBhcnNlQXV0aG9yaXR5KGMsIGNTdHIpIHtcclxuICBpZiAoYyA9PT0gNjQpIHtcclxuICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5hdEZsYWcpIHtcclxuICAgICAgdGhpcy5idWZmZXIgPSBcIiU0MFwiICsgdGhpcy5idWZmZXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmF0RmxhZyA9IHRydWU7XHJcblxyXG4gICAgLy8gY2FyZWZ1bCwgdGhpcyBpcyBiYXNlZCBvbiBidWZmZXIgYW5kIGhhcyBpdHMgb3duIHBvaW50ZXIgKHRoaXMucG9pbnRlciAhPSBwb2ludGVyKSBhbmQgaW5uZXIgY2hhcnNcclxuICAgIGNvbnN0IGxlbiA9IGNvdW50U3ltYm9scyh0aGlzLmJ1ZmZlcik7XHJcbiAgICBmb3IgKGxldCBwb2ludGVyID0gMDsgcG9pbnRlciA8IGxlbjsgKytwb2ludGVyKSB7XHJcbiAgICAgIGNvbnN0IGNvZGVQb2ludCA9IHRoaXMuYnVmZmVyLmNvZGVQb2ludEF0KHBvaW50ZXIpO1xyXG5cclxuICAgICAgaWYgKGNvZGVQb2ludCA9PT0gNTggJiYgIXRoaXMucGFzc3dvcmRUb2tlblNlZW5GbGFnKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZFRva2VuU2VlbkZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVuY29kZWRDb2RlUG9pbnRzID0gcGVyY2VudEVuY29kZUNoYXIoY29kZVBvaW50LCBpc1VzZXJpbmZvUGVyY2VudEVuY29kZSk7XHJcbiAgICAgIGlmICh0aGlzLnBhc3N3b3JkVG9rZW5TZWVuRmxhZykge1xyXG4gICAgICAgIHRoaXMudXJsLnBhc3N3b3JkICs9IGVuY29kZWRDb2RlUG9pbnRzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXJsLnVzZXJuYW1lICs9IGVuY29kZWRDb2RlUG9pbnRzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1ZmZlciA9IFwiXCI7XHJcbiAgfSBlbHNlIGlmIChpc05hTihjKSB8fCBjID09PSA0NyB8fCBjID09PSA2MyB8fCBjID09PSAzNSB8fFxyXG4gICAgICAgICAgICAgKGlzU3BlY2lhbCh0aGlzLnVybCkgJiYgYyA9PT0gOTIpKSB7XHJcbiAgICBpZiAodGhpcy5hdEZsYWcgJiYgdGhpcy5idWZmZXIgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvaW50ZXIgLT0gY291bnRTeW1ib2xzKHRoaXMuYnVmZmVyKSArIDE7XHJcbiAgICB0aGlzLmJ1ZmZlciA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJob3N0XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuYnVmZmVyICs9IGNTdHI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBob3N0bmFtZVwiXSA9XHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBob3N0XCJdID0gZnVuY3Rpb24gcGFyc2VIb3N0TmFtZShjLCBjU3RyKSB7XHJcbiAgaWYgKHRoaXMuc3RhdGVPdmVycmlkZSAmJiB0aGlzLnVybC5zY2hlbWUgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAtLXRoaXMucG9pbnRlcjtcclxuICAgIHRoaXMuc3RhdGUgPSBcImZpbGUgaG9zdFwiO1xyXG4gIH0gZWxzZSBpZiAoYyA9PT0gNTggJiYgIXRoaXMuYXJyRmxhZykge1xyXG4gICAgaWYgKHRoaXMuYnVmZmVyID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiBmYWlsdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvc3QgPSBwYXJzZUhvc3QodGhpcy5idWZmZXIsIGlzU3BlY2lhbCh0aGlzLnVybCkpO1xyXG4gICAgaWYgKGhvc3QgPT09IGZhaWx1cmUpIHtcclxuICAgICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cmwuaG9zdCA9IGhvc3Q7XHJcbiAgICB0aGlzLmJ1ZmZlciA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJwb3J0XCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZU92ZXJyaWRlID09PSBcImhvc3RuYW1lXCIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNOYU4oYykgfHwgYyA9PT0gNDcgfHwgYyA9PT0gNjMgfHwgYyA9PT0gMzUgfHxcclxuICAgICAgICAgICAgIChpc1NwZWNpYWwodGhpcy51cmwpICYmIGMgPT09IDkyKSkge1xyXG4gICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgICBpZiAoaXNTcGVjaWFsKHRoaXMudXJsKSAmJiB0aGlzLmJ1ZmZlciA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU92ZXJyaWRlICYmIHRoaXMuYnVmZmVyID09PSBcIlwiICYmXHJcbiAgICAgICAgICAgICAgIChpbmNsdWRlc0NyZWRlbnRpYWxzKHRoaXMudXJsKSB8fCB0aGlzLnVybC5wb3J0ICE9PSBudWxsKSkge1xyXG4gICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9zdCA9IHBhcnNlSG9zdCh0aGlzLmJ1ZmZlciwgaXNTcGVjaWFsKHRoaXMudXJsKSk7XHJcbiAgICBpZiAoaG9zdCA9PT0gZmFpbHVyZSkge1xyXG4gICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVybC5ob3N0ID0gaG9zdDtcclxuICAgIHRoaXMuYnVmZmVyID0gXCJcIjtcclxuICAgIHRoaXMuc3RhdGUgPSBcInBhdGggc3RhcnRcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlT3ZlcnJpZGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoYyA9PT0gOTEpIHtcclxuICAgICAgdGhpcy5hcnJGbGFnID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoYyA9PT0gOTMpIHtcclxuICAgICAgdGhpcy5hcnJGbGFnID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1ZmZlciArPSBjU3RyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgcG9ydFwiXSA9IGZ1bmN0aW9uIHBhcnNlUG9ydChjLCBjU3RyKSB7XHJcbiAgaWYgKGlzQVNDSUlEaWdpdChjKSkge1xyXG4gICAgdGhpcy5idWZmZXIgKz0gY1N0cjtcclxuICB9IGVsc2UgaWYgKGlzTmFOKGMpIHx8IGMgPT09IDQ3IHx8IGMgPT09IDYzIHx8IGMgPT09IDM1IHx8XHJcbiAgICAgICAgICAgICAoaXNTcGVjaWFsKHRoaXMudXJsKSAmJiBjID09PSA5MikgfHxcclxuICAgICAgICAgICAgIHRoaXMuc3RhdGVPdmVycmlkZSkge1xyXG4gICAgaWYgKHRoaXMuYnVmZmVyICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHBvcnQgPSBwYXJzZUludCh0aGlzLmJ1ZmZlcik7XHJcbiAgICAgIGlmIChwb3J0ID4gTWF0aC5wb3coMiwgMTYpIC0gMSkge1xyXG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhaWx1cmU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cmwucG9ydCA9IHBvcnQgPT09IGRlZmF1bHRQb3J0KHRoaXMudXJsLnNjaGVtZSkgPyBudWxsIDogcG9ydDtcclxuICAgICAgdGhpcy5idWZmZXIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGVPdmVycmlkZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gXCJwYXRoIHN0YXJ0XCI7XHJcbiAgICAtLXRoaXMucG9pbnRlcjtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWlsdXJlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBmaWxlT3RoZXJ3aXNlQ29kZVBvaW50cyA9IG5ldyBTZXQoWzQ3LCA5MiwgNjMsIDM1XSk7XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgZmlsZVwiXSA9IGZ1bmN0aW9uIHBhcnNlRmlsZShjKSB7XHJcbiAgdGhpcy51cmwuc2NoZW1lID0gXCJmaWxlXCI7XHJcblxyXG4gIGlmIChjID09PSA0NyB8fCBjID09PSA5Mikge1xyXG4gICAgaWYgKGMgPT09IDkyKSB7XHJcbiAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gXCJmaWxlIHNsYXNoXCI7XHJcbiAgfSBlbHNlIGlmICh0aGlzLmJhc2UgIT09IG51bGwgJiYgdGhpcy5iYXNlLnNjaGVtZSA9PT0gXCJmaWxlXCIpIHtcclxuICAgIGlmIChpc05hTihjKSkge1xyXG4gICAgICB0aGlzLnVybC5ob3N0ID0gdGhpcy5iYXNlLmhvc3Q7XHJcbiAgICAgIHRoaXMudXJsLnBhdGggPSB0aGlzLmJhc2UucGF0aC5zbGljZSgpO1xyXG4gICAgICB0aGlzLnVybC5xdWVyeSA9IHRoaXMuYmFzZS5xdWVyeTtcclxuICAgIH0gZWxzZSBpZiAoYyA9PT0gNjMpIHtcclxuICAgICAgdGhpcy51cmwuaG9zdCA9IHRoaXMuYmFzZS5ob3N0O1xyXG4gICAgICB0aGlzLnVybC5wYXRoID0gdGhpcy5iYXNlLnBhdGguc2xpY2UoKTtcclxuICAgICAgdGhpcy51cmwucXVlcnkgPSBcIlwiO1xyXG4gICAgICB0aGlzLnN0YXRlID0gXCJxdWVyeVwiO1xyXG4gICAgfSBlbHNlIGlmIChjID09PSAzNSkge1xyXG4gICAgICB0aGlzLnVybC5ob3N0ID0gdGhpcy5iYXNlLmhvc3Q7XHJcbiAgICAgIHRoaXMudXJsLnBhdGggPSB0aGlzLmJhc2UucGF0aC5zbGljZSgpO1xyXG4gICAgICB0aGlzLnVybC5xdWVyeSA9IHRoaXMuYmFzZS5xdWVyeTtcclxuICAgICAgdGhpcy51cmwuZnJhZ21lbnQgPSBcIlwiO1xyXG4gICAgICB0aGlzLnN0YXRlID0gXCJmcmFnbWVudFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXQubGVuZ3RoIC0gdGhpcy5wb2ludGVyIC0gMSA9PT0gMCB8fCAvLyByZW1haW5pbmcgY29uc2lzdHMgb2YgMCBjb2RlIHBvaW50c1xyXG4gICAgICAgICAgIWlzV2luZG93c0RyaXZlTGV0dGVyQ29kZVBvaW50cyhjLCB0aGlzLmlucHV0W3RoaXMucG9pbnRlciArIDFdKSB8fFxyXG4gICAgICAgICAgKHRoaXMuaW5wdXQubGVuZ3RoIC0gdGhpcy5wb2ludGVyIC0gMSA+PSAyICYmIC8vIHJlbWFpbmluZyBoYXMgYXQgbGVhc3QgMiBjb2RlIHBvaW50c1xyXG4gICAgICAgICAgICFmaWxlT3RoZXJ3aXNlQ29kZVBvaW50cy5oYXModGhpcy5pbnB1dFt0aGlzLnBvaW50ZXIgKyAyXSkpKSB7XHJcbiAgICAgICAgdGhpcy51cmwuaG9zdCA9IHRoaXMuYmFzZS5ob3N0O1xyXG4gICAgICAgIHRoaXMudXJsLnBhdGggPSB0aGlzLmJhc2UucGF0aC5zbGljZSgpO1xyXG4gICAgICAgIHNob3J0ZW5QYXRoKHRoaXMudXJsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN0YXRlID0gXCJwYXRoXCI7XHJcbiAgICAgIC0tdGhpcy5wb2ludGVyO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJwYXRoXCI7XHJcbiAgICAtLXRoaXMucG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuVVJMU3RhdGVNYWNoaW5lLnByb3RvdHlwZVtcInBhcnNlIGZpbGUgc2xhc2hcIl0gPSBmdW5jdGlvbiBwYXJzZUZpbGVTbGFzaChjKSB7XHJcbiAgaWYgKGMgPT09IDQ3IHx8IGMgPT09IDkyKSB7XHJcbiAgICBpZiAoYyA9PT0gOTIpIHtcclxuICAgICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBcImZpbGUgaG9zdFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodGhpcy5iYXNlICE9PSBudWxsICYmIHRoaXMuYmFzZS5zY2hlbWUgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgIGlmIChpc05vcm1hbGl6ZWRXaW5kb3dzRHJpdmVMZXR0ZXJTdHJpbmcodGhpcy5iYXNlLnBhdGhbMF0pKSB7XHJcbiAgICAgICAgdGhpcy51cmwucGF0aC5wdXNoKHRoaXMuYmFzZS5wYXRoWzBdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVybC5ob3N0ID0gdGhpcy5iYXNlLmhvc3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBcInBhdGhcIjtcclxuICAgIC0tdGhpcy5wb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgZmlsZSBob3N0XCJdID0gZnVuY3Rpb24gcGFyc2VGaWxlSG9zdChjLCBjU3RyKSB7XHJcbiAgaWYgKGlzTmFOKGMpIHx8IGMgPT09IDQ3IHx8IGMgPT09IDkyIHx8IGMgPT09IDYzIHx8IGMgPT09IDM1KSB7XHJcbiAgICAtLXRoaXMucG9pbnRlcjtcclxuICAgIGlmICghdGhpcy5zdGF0ZU92ZXJyaWRlICYmIGlzV2luZG93c0RyaXZlTGV0dGVyU3RyaW5nKHRoaXMuYnVmZmVyKSkge1xyXG4gICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICB0aGlzLnN0YXRlID0gXCJwYXRoXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmZmVyID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMudXJsLmhvc3QgPSBcIlwiO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZU92ZXJyaWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBcInBhdGggc3RhcnRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBob3N0ID0gcGFyc2VIb3N0KHRoaXMuYnVmZmVyLCBpc1NwZWNpYWwodGhpcy51cmwpKTtcclxuICAgICAgaWYgKGhvc3QgPT09IGZhaWx1cmUpIHtcclxuICAgICAgICByZXR1cm4gZmFpbHVyZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaG9zdCA9PT0gXCJsb2NhbGhvc3RcIikge1xyXG4gICAgICAgIGhvc3QgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXJsLmhvc3QgPSBob3N0O1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGVPdmVycmlkZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5idWZmZXIgPSBcIlwiO1xyXG4gICAgICB0aGlzLnN0YXRlID0gXCJwYXRoIHN0YXJ0XCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuYnVmZmVyICs9IGNTdHI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblVSTFN0YXRlTWFjaGluZS5wcm90b3R5cGVbXCJwYXJzZSBwYXRoIHN0YXJ0XCJdID0gZnVuY3Rpb24gcGFyc2VQYXRoU3RhcnQoYykge1xyXG4gIGlmIChpc1NwZWNpYWwodGhpcy51cmwpKSB7XHJcbiAgICBpZiAoYyA9PT0gOTIpIHtcclxuICAgICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBcInBhdGhcIjtcclxuXHJcbiAgICBpZiAoYyAhPT0gNDcgJiYgYyAhPT0gOTIpIHtcclxuICAgICAgLS10aGlzLnBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZU92ZXJyaWRlICYmIGMgPT09IDYzKSB7XHJcbiAgICB0aGlzLnVybC5xdWVyeSA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJxdWVyeVwiO1xyXG4gIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGVPdmVycmlkZSAmJiBjID09PSAzNSkge1xyXG4gICAgdGhpcy51cmwuZnJhZ21lbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwiZnJhZ21lbnRcIjtcclxuICB9IGVsc2UgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwicGF0aFwiO1xyXG4gICAgaWYgKGMgIT09IDQ3KSB7XHJcbiAgICAgIC0tdGhpcy5wb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgcGF0aFwiXSA9IGZ1bmN0aW9uIHBhcnNlUGF0aChjKSB7XHJcbiAgaWYgKGlzTmFOKGMpIHx8IGMgPT09IDQ3IHx8IChpc1NwZWNpYWwodGhpcy51cmwpICYmIGMgPT09IDkyKSB8fFxyXG4gICAgICAoIXRoaXMuc3RhdGVPdmVycmlkZSAmJiAoYyA9PT0gNjMgfHwgYyA9PT0gMzUpKSkge1xyXG4gICAgaWYgKGlzU3BlY2lhbCh0aGlzLnVybCkgJiYgYyA9PT0gOTIpIHtcclxuICAgICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNEb3VibGVEb3QodGhpcy5idWZmZXIpKSB7XHJcbiAgICAgIHNob3J0ZW5QYXRoKHRoaXMudXJsKTtcclxuICAgICAgaWYgKGMgIT09IDQ3ICYmICEoaXNTcGVjaWFsKHRoaXMudXJsKSAmJiBjID09PSA5MikpIHtcclxuICAgICAgICB0aGlzLnVybC5wYXRoLnB1c2goXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNTaW5nbGVEb3QodGhpcy5idWZmZXIpICYmIGMgIT09IDQ3ICYmXHJcbiAgICAgICAgICAgICAgICEoaXNTcGVjaWFsKHRoaXMudXJsKSAmJiBjID09PSA5MikpIHtcclxuICAgICAgdGhpcy51cmwucGF0aC5wdXNoKFwiXCIpO1xyXG4gICAgfSBlbHNlIGlmICghaXNTaW5nbGVEb3QodGhpcy5idWZmZXIpKSB7XHJcbiAgICAgIGlmICh0aGlzLnVybC5zY2hlbWUgPT09IFwiZmlsZVwiICYmIHRoaXMudXJsLnBhdGgubGVuZ3RoID09PSAwICYmIGlzV2luZG93c0RyaXZlTGV0dGVyU3RyaW5nKHRoaXMuYnVmZmVyKSkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5ob3N0ICE9PSBcIlwiICYmIHRoaXMudXJsLmhvc3QgIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnVybC5ob3N0ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlclswXSArIFwiOlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXJsLnBhdGgucHVzaCh0aGlzLmJ1ZmZlcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1ZmZlciA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy51cmwuc2NoZW1lID09PSBcImZpbGVcIiAmJiAoYyA9PT0gdW5kZWZpbmVkIHx8IGMgPT09IDYzIHx8IGMgPT09IDM1KSkge1xyXG4gICAgICB3aGlsZSAodGhpcy51cmwucGF0aC5sZW5ndGggPiAxICYmIHRoaXMudXJsLnBhdGhbMF0gPT09IFwiXCIpIHtcclxuICAgICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXJsLnBhdGguc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGMgPT09IDYzKSB7XHJcbiAgICAgIHRoaXMudXJsLnF1ZXJ5ID0gXCJcIjtcclxuICAgICAgdGhpcy5zdGF0ZSA9IFwicXVlcnlcIjtcclxuICAgIH1cclxuICAgIGlmIChjID09PSAzNSkge1xyXG4gICAgICB0aGlzLnVybC5mcmFnbWVudCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBcImZyYWdtZW50XCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFRPRE86IElmIGMgaXMgbm90IGEgVVJMIGNvZGUgcG9pbnQgYW5kIG5vdCBcIiVcIiwgcGFyc2UgZXJyb3IuXHJcblxyXG4gICAgaWYgKGMgPT09IDM3ICYmXHJcbiAgICAgICghaXNBU0NJSUhleCh0aGlzLmlucHV0W3RoaXMucG9pbnRlciArIDFdKSB8fFxyXG4gICAgICAgICFpc0FTQ0lJSGV4KHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMl0pKSkge1xyXG4gICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnVmZmVyICs9IHBlcmNlbnRFbmNvZGVDaGFyKGMsIGlzUGF0aFBlcmNlbnRFbmNvZGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgY2Fubm90LWJlLWEtYmFzZS1VUkwgcGF0aFwiXSA9IGZ1bmN0aW9uIHBhcnNlQ2Fubm90QmVBQmFzZVVSTFBhdGgoYykge1xyXG4gIGlmIChjID09PSA2Mykge1xyXG4gICAgdGhpcy51cmwucXVlcnkgPSBcIlwiO1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwicXVlcnlcIjtcclxuICB9IGVsc2UgaWYgKGMgPT09IDM1KSB7XHJcbiAgICB0aGlzLnVybC5mcmFnbWVudCA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXRlID0gXCJmcmFnbWVudFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBUT0RPOiBBZGQ6IG5vdCBhIFVSTCBjb2RlIHBvaW50XHJcbiAgICBpZiAoIWlzTmFOKGMpICYmIGMgIT09IDM3KSB7XHJcbiAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGMgPT09IDM3ICYmXHJcbiAgICAgICAgKCFpc0FTQ0lJSGV4KHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMV0pIHx8XHJcbiAgICAgICAgICFpc0FTQ0lJSGV4KHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMl0pKSkge1xyXG4gICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNOYU4oYykpIHtcclxuICAgICAgdGhpcy51cmwucGF0aFswXSA9IHRoaXMudXJsLnBhdGhbMF0gKyBwZXJjZW50RW5jb2RlQ2hhcihjLCBpc0MwQ29udHJvbFBlcmNlbnRFbmNvZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgcXVlcnlcIl0gPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5KGMsIGNTdHIpIHtcclxuICBpZiAoaXNOYU4oYykgfHwgKCF0aGlzLnN0YXRlT3ZlcnJpZGUgJiYgYyA9PT0gMzUpKSB7XHJcbiAgICBpZiAoIWlzU3BlY2lhbCh0aGlzLnVybCkgfHwgdGhpcy51cmwuc2NoZW1lID09PSBcIndzXCIgfHwgdGhpcy51cmwuc2NoZW1lID09PSBcIndzc1wiKSB7XHJcbiAgICAgIHRoaXMuZW5jb2RpbmdPdmVycmlkZSA9IFwidXRmLThcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQnVmZmVyKHRoaXMuYnVmZmVyKTsgLy8gVE9ETzogVXNlIGVuY29kaW5nIG92ZXJyaWRlIGluc3RlYWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmIChidWZmZXJbaV0gPCAweDIxIHx8IGJ1ZmZlcltpXSA+IDB4N0UgfHwgYnVmZmVyW2ldID09PSAweDIyIHx8IGJ1ZmZlcltpXSA9PT0gMHgyMyB8fFxyXG4gICAgICAgICAgYnVmZmVyW2ldID09PSAweDNDIHx8IGJ1ZmZlcltpXSA9PT0gMHgzRSkge1xyXG4gICAgICAgIHRoaXMudXJsLnF1ZXJ5ICs9IHBlcmNlbnRFbmNvZGUoYnVmZmVyW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVybC5xdWVyeSArPSBTdHJpbmcuZnJvbUNvZGVQb2ludChidWZmZXJbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idWZmZXIgPSBcIlwiO1xyXG4gICAgaWYgKGMgPT09IDM1KSB7XHJcbiAgICAgIHRoaXMudXJsLmZyYWdtZW50ID0gXCJcIjtcclxuICAgICAgdGhpcy5zdGF0ZSA9IFwiZnJhZ21lbnRcIjtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVE9ETzogSWYgYyBpcyBub3QgYSBVUkwgY29kZSBwb2ludCBhbmQgbm90IFwiJVwiLCBwYXJzZSBlcnJvci5cclxuICAgIGlmIChjID09PSAzNyAmJlxyXG4gICAgICAoIWlzQVNDSUlIZXgodGhpcy5pbnB1dFt0aGlzLnBvaW50ZXIgKyAxXSkgfHxcclxuICAgICAgICAhaXNBU0NJSUhleCh0aGlzLmlucHV0W3RoaXMucG9pbnRlciArIDJdKSkpIHtcclxuICAgICAgdGhpcy5wYXJzZUVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJ1ZmZlciArPSBjU3RyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5VUkxTdGF0ZU1hY2hpbmUucHJvdG90eXBlW1wicGFyc2UgZnJhZ21lbnRcIl0gPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50KGMpIHtcclxuICBpZiAoaXNOYU4oYykpIHsgLy8gZG8gbm90aGluZ1xyXG4gIH0gZWxzZSBpZiAoYyA9PT0gMHgwKSB7XHJcbiAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBUT0RPOiBJZiBjIGlzIG5vdCBhIFVSTCBjb2RlIHBvaW50IGFuZCBub3QgXCIlXCIsIHBhcnNlIGVycm9yLlxyXG4gICAgaWYgKGMgPT09IDM3ICYmXHJcbiAgICAgICghaXNBU0NJSUhleCh0aGlzLmlucHV0W3RoaXMucG9pbnRlciArIDFdKSB8fFxyXG4gICAgICAgICFpc0FTQ0lJSGV4KHRoaXMuaW5wdXRbdGhpcy5wb2ludGVyICsgMl0pKSkge1xyXG4gICAgICB0aGlzLnBhcnNlRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXJsLmZyYWdtZW50ICs9IHBlcmNlbnRFbmNvZGVDaGFyKGMsIGlzQzBDb250cm9sUGVyY2VudEVuY29kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVVSTCh1cmwsIGV4Y2x1ZGVGcmFnbWVudCkge1xyXG4gIGxldCBvdXRwdXQgPSB1cmwuc2NoZW1lICsgXCI6XCI7XHJcbiAgaWYgKHVybC5ob3N0ICE9PSBudWxsKSB7XHJcbiAgICBvdXRwdXQgKz0gXCIvL1wiO1xyXG5cclxuICAgIGlmICh1cmwudXNlcm5hbWUgIT09IFwiXCIgfHwgdXJsLnBhc3N3b3JkICE9PSBcIlwiKSB7XHJcbiAgICAgIG91dHB1dCArPSB1cmwudXNlcm5hbWU7XHJcbiAgICAgIGlmICh1cmwucGFzc3dvcmQgIT09IFwiXCIpIHtcclxuICAgICAgICBvdXRwdXQgKz0gXCI6XCIgKyB1cmwucGFzc3dvcmQ7XHJcbiAgICAgIH1cclxuICAgICAgb3V0cHV0ICs9IFwiQFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG91dHB1dCArPSBzZXJpYWxpemVIb3N0KHVybC5ob3N0KTtcclxuXHJcbiAgICBpZiAodXJsLnBvcnQgIT09IG51bGwpIHtcclxuICAgICAgb3V0cHV0ICs9IFwiOlwiICsgdXJsLnBvcnQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh1cmwuaG9zdCA9PT0gbnVsbCAmJiB1cmwuc2NoZW1lID09PSBcImZpbGVcIikge1xyXG4gICAgb3V0cHV0ICs9IFwiLy9cIjtcclxuICB9XHJcblxyXG4gIGlmICh1cmwuY2Fubm90QmVBQmFzZVVSTCkge1xyXG4gICAgb3V0cHV0ICs9IHVybC5wYXRoWzBdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGNvbnN0IHN0cmluZyBvZiB1cmwucGF0aCkge1xyXG4gICAgICBvdXRwdXQgKz0gXCIvXCIgKyBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodXJsLnF1ZXJ5ICE9PSBudWxsKSB7XHJcbiAgICBvdXRwdXQgKz0gXCI/XCIgKyB1cmwucXVlcnk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWV4Y2x1ZGVGcmFnbWVudCAmJiB1cmwuZnJhZ21lbnQgIT09IG51bGwpIHtcclxuICAgIG91dHB1dCArPSBcIiNcIiArIHVybC5mcmFnbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU9yaWdpbih0dXBsZSkge1xyXG4gIGxldCByZXN1bHQgPSB0dXBsZS5zY2hlbWUgKyBcIjovL1wiO1xyXG4gIHJlc3VsdCArPSBzZXJpYWxpemVIb3N0KHR1cGxlLmhvc3QpO1xyXG5cclxuICBpZiAodHVwbGUucG9ydCAhPT0gbnVsbCkge1xyXG4gICAgcmVzdWx0ICs9IFwiOlwiICsgdHVwbGUucG9ydDtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLnNlcmlhbGl6ZVVSTCA9IHNlcmlhbGl6ZVVSTDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnNlcmlhbGl6ZVVSTE9yaWdpbiA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtdXJsLW9yaWdpblxyXG4gIHN3aXRjaCAodXJsLnNjaGVtZSkge1xyXG4gICAgY2FzZSBcImJsb2JcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplVVJMT3JpZ2luKG1vZHVsZS5leHBvcnRzLnBhcnNlVVJMKHVybC5wYXRoWzBdKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBzZXJpYWxpemluZyBhbiBvcGFxdWUgb3JpZ2luIHJldHVybnMgXCJudWxsXCJcclxuICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJmdHBcIjpcclxuICAgIGNhc2UgXCJnb3BoZXJcIjpcclxuICAgIGNhc2UgXCJodHRwXCI6XHJcbiAgICBjYXNlIFwiaHR0cHNcIjpcclxuICAgIGNhc2UgXCJ3c1wiOlxyXG4gICAgY2FzZSBcIndzc1wiOlxyXG4gICAgICByZXR1cm4gc2VyaWFsaXplT3JpZ2luKHtcclxuICAgICAgICBzY2hlbWU6IHVybC5zY2hlbWUsXHJcbiAgICAgICAgaG9zdDogdXJsLmhvc3QsXHJcbiAgICAgICAgcG9ydDogdXJsLnBvcnRcclxuICAgICAgfSk7XHJcbiAgICBjYXNlIFwiZmlsZVwiOlxyXG4gICAgICAvLyBzcGVjIHNheXMgXCJleGVyY2lzZSB0byB0aGUgcmVhZGVyXCIsIGNocm9tZSBzYXlzIFwiZmlsZTovL1wiXHJcbiAgICAgIHJldHVybiBcImZpbGU6Ly9cIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIC8vIHNlcmlhbGl6aW5nIGFuIG9wYXF1ZSBvcmlnaW4gcmV0dXJucyBcIm51bGxcIlxyXG4gICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuYmFzaWNVUkxQYXJzZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xyXG4gIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzbSA9IG5ldyBVUkxTdGF0ZU1hY2hpbmUoaW5wdXQsIG9wdGlvbnMuYmFzZVVSTCwgb3B0aW9ucy5lbmNvZGluZ092ZXJyaWRlLCBvcHRpb25zLnVybCwgb3B0aW9ucy5zdGF0ZU92ZXJyaWRlKTtcclxuICBpZiAodXNtLmZhaWx1cmUpIHtcclxuICAgIHJldHVybiBcImZhaWx1cmVcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB1c20udXJsO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuc2V0VGhlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXJsLCB1c2VybmFtZSkge1xyXG4gIHVybC51c2VybmFtZSA9IFwiXCI7XHJcbiAgY29uc3QgZGVjb2RlZCA9IHB1bnljb2RlLnVjczIuZGVjb2RlKHVzZXJuYW1lKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY29kZWQubGVuZ3RoOyArK2kpIHtcclxuICAgIHVybC51c2VybmFtZSArPSBwZXJjZW50RW5jb2RlQ2hhcihkZWNvZGVkW2ldLCBpc1VzZXJpbmZvUGVyY2VudEVuY29kZSk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuc2V0VGhlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXJsLCBwYXNzd29yZCkge1xyXG4gIHVybC5wYXNzd29yZCA9IFwiXCI7XHJcbiAgY29uc3QgZGVjb2RlZCA9IHB1bnljb2RlLnVjczIuZGVjb2RlKHBhc3N3b3JkKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY29kZWQubGVuZ3RoOyArK2kpIHtcclxuICAgIHVybC5wYXNzd29yZCArPSBwZXJjZW50RW5jb2RlQ2hhcihkZWNvZGVkW2ldLCBpc1VzZXJpbmZvUGVyY2VudEVuY29kZSk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplSG9zdCA9IHNlcmlhbGl6ZUhvc3Q7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jYW5ub3RIYXZlQVVzZXJuYW1lUGFzc3dvcmRQb3J0ID0gY2Fubm90SGF2ZUFVc2VybmFtZVBhc3N3b3JkUG9ydDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnNlcmlhbGl6ZUludGVnZXIgPSBmdW5jdGlvbiAoaW50ZWdlcikge1xyXG4gIHJldHVybiBTdHJpbmcoaW50ZWdlcik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wYXJzZVVSTCA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xyXG4gIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8vIFdlIGRvbid0IGhhbmRsZSBibG9icywgc28gdGhpcyBqdXN0IGRlbGVnYXRlczpcclxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMuYmFzaWNVUkxQYXJzZShpbnB1dCwgeyBiYXNlVVJMOiBvcHRpb25zLmJhc2VVUkwsIGVuY29kaW5nT3ZlcnJpZGU6IG9wdGlvbnMuZW5jb2RpbmdPdmVycmlkZSB9KTtcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuY29uc3QgdXNtID0gcmVxdWlyZShcIi4vdXJsLXN0YXRlLW1hY2hpbmVcIik7XG5cbmV4cG9ydHMuaW1wbGVtZW50YXRpb24gPSBjbGFzcyBVUkxJbXBsIHtcbiAgY29uc3RydWN0b3IoY29uc3RydWN0b3JBcmdzKSB7XG4gICAgY29uc3QgdXJsID0gY29uc3RydWN0b3JBcmdzWzBdO1xuICAgIGNvbnN0IGJhc2UgPSBjb25zdHJ1Y3RvckFyZ3NbMV07XG5cbiAgICBsZXQgcGFyc2VkQmFzZSA9IG51bGw7XG4gICAgaWYgKGJhc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyc2VkQmFzZSA9IHVzbS5iYXNpY1VSTFBhcnNlKGJhc2UpO1xuICAgICAgaWYgKHBhcnNlZEJhc2UgPT09IFwiZmFpbHVyZVwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGJhc2UgVVJMXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFVSTCA9IHVzbS5iYXNpY1VSTFBhcnNlKHVybCwgeyBiYXNlVVJMOiBwYXJzZWRCYXNlIH0pO1xuICAgIGlmIChwYXJzZWRVUkwgPT09IFwiZmFpbHVyZVwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBVUkxcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fdXJsID0gcGFyc2VkVVJMO1xuXG4gICAgLy8gVE9ETzogcXVlcnkgc3R1ZmZcbiAgfVxuXG4gIGdldCBocmVmKCkge1xuICAgIHJldHVybiB1c20uc2VyaWFsaXplVVJMKHRoaXMuX3VybCk7XG4gIH1cblxuICBzZXQgaHJlZih2KSB7XG4gICAgY29uc3QgcGFyc2VkVVJMID0gdXNtLmJhc2ljVVJMUGFyc2Uodik7XG4gICAgaWYgKHBhcnNlZFVSTCA9PT0gXCJmYWlsdXJlXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIFVSTFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl91cmwgPSBwYXJzZWRVUkw7XG4gIH1cblxuICBnZXQgb3JpZ2luKCkge1xuICAgIHJldHVybiB1c20uc2VyaWFsaXplVVJMT3JpZ2luKHRoaXMuX3VybCk7XG4gIH1cblxuICBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VybC5zY2hlbWUgKyBcIjpcIjtcbiAgfVxuXG4gIHNldCBwcm90b2NvbCh2KSB7XG4gICAgdXNtLmJhc2ljVVJMUGFyc2UodiArIFwiOlwiLCB7IHVybDogdGhpcy5fdXJsLCBzdGF0ZU92ZXJyaWRlOiBcInNjaGVtZSBzdGFydFwiIH0pO1xuICB9XG5cbiAgZ2V0IHVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl91cmwudXNlcm5hbWU7XG4gIH1cblxuICBzZXQgdXNlcm5hbWUodikge1xuICAgIGlmICh1c20uY2Fubm90SGF2ZUFVc2VybmFtZVBhc3N3b3JkUG9ydCh0aGlzLl91cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXNtLnNldFRoZVVzZXJuYW1lKHRoaXMuX3VybCwgdik7XG4gIH1cblxuICBnZXQgcGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VybC5wYXNzd29yZDtcbiAgfVxuXG4gIHNldCBwYXNzd29yZCh2KSB7XG4gICAgaWYgKHVzbS5jYW5ub3RIYXZlQVVzZXJuYW1lUGFzc3dvcmRQb3J0KHRoaXMuX3VybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1c20uc2V0VGhlUGFzc3dvcmQodGhpcy5fdXJsLCB2KTtcbiAgfVxuXG4gIGdldCBob3N0KCkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuX3VybDtcblxuICAgIGlmICh1cmwuaG9zdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKHVybC5wb3J0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdXNtLnNlcmlhbGl6ZUhvc3QodXJsLmhvc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB1c20uc2VyaWFsaXplSG9zdCh1cmwuaG9zdCkgKyBcIjpcIiArIHVzbS5zZXJpYWxpemVJbnRlZ2VyKHVybC5wb3J0KTtcbiAgfVxuXG4gIHNldCBob3N0KHYpIHtcbiAgICBpZiAodGhpcy5fdXJsLmNhbm5vdEJlQUJhc2VVUkwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1c20uYmFzaWNVUkxQYXJzZSh2LCB7IHVybDogdGhpcy5fdXJsLCBzdGF0ZU92ZXJyaWRlOiBcImhvc3RcIiB9KTtcbiAgfVxuXG4gIGdldCBob3N0bmFtZSgpIHtcbiAgICBpZiAodGhpcy5fdXJsLmhvc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiB1c20uc2VyaWFsaXplSG9zdCh0aGlzLl91cmwuaG9zdCk7XG4gIH1cblxuICBzZXQgaG9zdG5hbWUodikge1xuICAgIGlmICh0aGlzLl91cmwuY2Fubm90QmVBQmFzZVVSTCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVzbS5iYXNpY1VSTFBhcnNlKHYsIHsgdXJsOiB0aGlzLl91cmwsIHN0YXRlT3ZlcnJpZGU6IFwiaG9zdG5hbWVcIiB9KTtcbiAgfVxuXG4gIGdldCBwb3J0KCkge1xuICAgIGlmICh0aGlzLl91cmwucG9ydCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzbS5zZXJpYWxpemVJbnRlZ2VyKHRoaXMuX3VybC5wb3J0KTtcbiAgfVxuXG4gIHNldCBwb3J0KHYpIHtcbiAgICBpZiAodXNtLmNhbm5vdEhhdmVBVXNlcm5hbWVQYXNzd29yZFBvcnQodGhpcy5fdXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2ID09PSBcIlwiKSB7XG4gICAgICB0aGlzLl91cmwucG9ydCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzbS5iYXNpY1VSTFBhcnNlKHYsIHsgdXJsOiB0aGlzLl91cmwsIHN0YXRlT3ZlcnJpZGU6IFwicG9ydFwiIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwYXRobmFtZSgpIHtcbiAgICBpZiAodGhpcy5fdXJsLmNhbm5vdEJlQUJhc2VVUkwpIHtcbiAgICAgIHJldHVybiB0aGlzLl91cmwucGF0aFswXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdXJsLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCIvXCIgKyB0aGlzLl91cmwucGF0aC5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHNldCBwYXRobmFtZSh2KSB7XG4gICAgaWYgKHRoaXMuX3VybC5jYW5ub3RCZUFCYXNlVVJMKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXJsLnBhdGggPSBbXTtcbiAgICB1c20uYmFzaWNVUkxQYXJzZSh2LCB7IHVybDogdGhpcy5fdXJsLCBzdGF0ZU92ZXJyaWRlOiBcInBhdGggc3RhcnRcIiB9KTtcbiAgfVxuXG4gIGdldCBzZWFyY2goKSB7XG4gICAgaWYgKHRoaXMuX3VybC5xdWVyeSA9PT0gbnVsbCB8fCB0aGlzLl91cmwucXVlcnkgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiBcIj9cIiArIHRoaXMuX3VybC5xdWVyeTtcbiAgfVxuXG4gIHNldCBzZWFyY2godikge1xuICAgIC8vIFRPRE86IHF1ZXJ5IHN0dWZmXG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLl91cmw7XG5cbiAgICBpZiAodiA9PT0gXCJcIikge1xuICAgICAgdXJsLnF1ZXJ5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dCA9IHZbMF0gPT09IFwiP1wiID8gdi5zdWJzdHJpbmcoMSkgOiB2O1xuICAgIHVybC5xdWVyeSA9IFwiXCI7XG4gICAgdXNtLmJhc2ljVVJMUGFyc2UoaW5wdXQsIHsgdXJsLCBzdGF0ZU92ZXJyaWRlOiBcInF1ZXJ5XCIgfSk7XG4gIH1cblxuICBnZXQgaGFzaCgpIHtcbiAgICBpZiAodGhpcy5fdXJsLmZyYWdtZW50ID09PSBudWxsIHx8IHRoaXMuX3VybC5mcmFnbWVudCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiI1wiICsgdGhpcy5fdXJsLmZyYWdtZW50O1xuICB9XG5cbiAgc2V0IGhhc2godikge1xuICAgIGlmICh2ID09PSBcIlwiKSB7XG4gICAgICB0aGlzLl91cmwuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0ID0gdlswXSA9PT0gXCIjXCIgPyB2LnN1YnN0cmluZygxKSA6IHY7XG4gICAgdGhpcy5fdXJsLmZyYWdtZW50ID0gXCJcIjtcbiAgICB1c20uYmFzaWNVUkxQYXJzZShpbnB1dCwgeyB1cmw6IHRoaXMuX3VybCwgc3RhdGVPdmVycmlkZTogXCJmcmFnbWVudFwiIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmhyZWY7XG4gIH1cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnZlcnNpb25zID0gcmVxdWlyZShcIndlYmlkbC1jb252ZXJzaW9uc1wiKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5jb25zdCBJbXBsID0gcmVxdWlyZShcIi4vL1VSTC1pbXBsLmpzXCIpO1xuXG5jb25zdCBpbXBsID0gdXRpbHMuaW1wbFN5bWJvbDtcblxuZnVuY3Rpb24gVVJMKHVybCkge1xuICBpZiAoIXRoaXMgfHwgdGhpc1tpbXBsXSB8fCAhKHRoaXMgaW5zdGFuY2VvZiBVUkwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1VSTCc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgfVxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnVVJMJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgXCIgKyBhcmd1bWVudHMubGVuZ3RoICsgXCIgcHJlc2VudC5cIik7XG4gIH1cbiAgY29uc3QgYXJncyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggJiYgaSA8IDI7ICsraSkge1xuICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gIH1cbiAgYXJnc1swXSA9IGNvbnZlcnNpb25zW1wiVVNWU3RyaW5nXCJdKGFyZ3NbMF0pO1xuICBpZiAoYXJnc1sxXSAhPT0gdW5kZWZpbmVkKSB7XG4gIGFyZ3NbMV0gPSBjb252ZXJzaW9uc1tcIlVTVlN0cmluZ1wiXShhcmdzWzFdKTtcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzLnNldHVwKHRoaXMsIGFyZ3MpO1xufVxuXG5VUkwucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgaWYgKCF0aGlzIHx8ICFtb2R1bGUuZXhwb3J0cy5pcyh0aGlzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGludm9jYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXJncyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggJiYgaSA8IDA7ICsraSkge1xuICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gIH1cbiAgcmV0dXJuIHRoaXNbaW1wbF0udG9KU09OLmFwcGx5KHRoaXNbaW1wbF0sIGFyZ3MpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVUkwucHJvdG90eXBlLCBcImhyZWZcIiwge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNbaW1wbF0uaHJlZjtcbiAgfSxcbiAgc2V0KFYpIHtcbiAgICBWID0gY29udmVyc2lvbnNbXCJVU1ZTdHJpbmdcIl0oVik7XG4gICAgdGhpc1tpbXBsXS5ocmVmID0gVjtcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuVVJMLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzIHx8ICFtb2R1bGUuZXhwb3J0cy5pcyh0aGlzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGludm9jYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMuaHJlZjtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVUkwucHJvdG90eXBlLCBcIm9yaWdpblwiLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpc1tpbXBsXS5vcmlnaW47XG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVUkwucHJvdG90eXBlLCBcInByb3RvY29sXCIsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzW2ltcGxdLnByb3RvY29sO1xuICB9LFxuICBzZXQoVikge1xuICAgIFYgPSBjb252ZXJzaW9uc1tcIlVTVlN0cmluZ1wiXShWKTtcbiAgICB0aGlzW2ltcGxdLnByb3RvY29sID0gVjtcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVSTC5wcm90b3R5cGUsIFwidXNlcm5hbWVcIiwge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNbaW1wbF0udXNlcm5hbWU7XG4gIH0sXG4gIHNldChWKSB7XG4gICAgViA9IGNvbnZlcnNpb25zW1wiVVNWU3RyaW5nXCJdKFYpO1xuICAgIHRoaXNbaW1wbF0udXNlcm5hbWUgPSBWO1xuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVVJMLnByb3RvdHlwZSwgXCJwYXNzd29yZFwiLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpc1tpbXBsXS5wYXNzd29yZDtcbiAgfSxcbiAgc2V0KFYpIHtcbiAgICBWID0gY29udmVyc2lvbnNbXCJVU1ZTdHJpbmdcIl0oVik7XG4gICAgdGhpc1tpbXBsXS5wYXNzd29yZCA9IFY7XG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVUkwucHJvdG90eXBlLCBcImhvc3RcIiwge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNbaW1wbF0uaG9zdDtcbiAgfSxcbiAgc2V0KFYpIHtcbiAgICBWID0gY29udmVyc2lvbnNbXCJVU1ZTdHJpbmdcIl0oVik7XG4gICAgdGhpc1tpbXBsXS5ob3N0ID0gVjtcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVSTC5wcm90b3R5cGUsIFwiaG9zdG5hbWVcIiwge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNbaW1wbF0uaG9zdG5hbWU7XG4gIH0sXG4gIHNldChWKSB7XG4gICAgViA9IGNvbnZlcnNpb25zW1wiVVNWU3RyaW5nXCJdKFYpO1xuICAgIHRoaXNbaW1wbF0uaG9zdG5hbWUgPSBWO1xuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVVJMLnByb3RvdHlwZSwgXCJwb3J0XCIsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzW2ltcGxdLnBvcnQ7XG4gIH0sXG4gIHNldChWKSB7XG4gICAgViA9IGNvbnZlcnNpb25zW1wiVVNWU3RyaW5nXCJdKFYpO1xuICAgIHRoaXNbaW1wbF0ucG9ydCA9IFY7XG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShVUkwucHJvdG90eXBlLCBcInBhdGhuYW1lXCIsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzW2ltcGxdLnBhdGhuYW1lO1xuICB9LFxuICBzZXQoVikge1xuICAgIFYgPSBjb252ZXJzaW9uc1tcIlVTVlN0cmluZ1wiXShWKTtcbiAgICB0aGlzW2ltcGxdLnBhdGhuYW1lID0gVjtcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFVSTC5wcm90b3R5cGUsIFwic2VhcmNoXCIsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzW2ltcGxdLnNlYXJjaDtcbiAgfSxcbiAgc2V0KFYpIHtcbiAgICBWID0gY29udmVyc2lvbnNbXCJVU1ZTdHJpbmdcIl0oVik7XG4gICAgdGhpc1tpbXBsXS5zZWFyY2ggPSBWO1xuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVVJMLnByb3RvdHlwZSwgXCJoYXNoXCIsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzW2ltcGxdLmhhc2g7XG4gIH0sXG4gIHNldChWKSB7XG4gICAgViA9IGNvbnZlcnNpb25zW1wiVVNWU3RyaW5nXCJdKFYpO1xuICAgIHRoaXNbaW1wbF0uaGFzaCA9IFY7XG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiBvYmpbaW1wbF0gaW5zdGFuY2VvZiBJbXBsLmltcGxlbWVudGF0aW9uO1xuICB9LFxuICBjcmVhdGUoY29uc3RydWN0b3JBcmdzLCBwcml2YXRlRGF0YSkge1xuICAgIGxldCBvYmogPSBPYmplY3QuY3JlYXRlKFVSTC5wcm90b3R5cGUpO1xuICAgIHRoaXMuc2V0dXAob2JqLCBjb25zdHJ1Y3RvckFyZ3MsIHByaXZhdGVEYXRhKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBzZXR1cChvYmosIGNvbnN0cnVjdG9yQXJncywgcHJpdmF0ZURhdGEpIHtcbiAgICBpZiAoIXByaXZhdGVEYXRhKSBwcml2YXRlRGF0YSA9IHt9O1xuICAgIHByaXZhdGVEYXRhLndyYXBwZXIgPSBvYmo7XG5cbiAgICBvYmpbaW1wbF0gPSBuZXcgSW1wbC5pbXBsZW1lbnRhdGlvbihjb25zdHJ1Y3RvckFyZ3MsIHByaXZhdGVEYXRhKTtcbiAgICBvYmpbaW1wbF1bdXRpbHMud3JhcHBlclN5bWJvbF0gPSBvYmo7XG4gIH0sXG4gIGludGVyZmFjZTogVVJMLFxuICBleHBvc2U6IHtcbiAgICBXaW5kb3c6IHsgVVJMOiBVUkwgfSxcbiAgICBXb3JrZXI6IHsgVVJMOiBVUkwgfVxuICB9XG59O1xuXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuVVJMID0gcmVxdWlyZShcIi4vVVJMXCIpLmludGVyZmFjZTtcbmV4cG9ydHMuc2VyaWFsaXplVVJMID0gcmVxdWlyZShcIi4vdXJsLXN0YXRlLW1hY2hpbmVcIikuc2VyaWFsaXplVVJMO1xuZXhwb3J0cy5zZXJpYWxpemVVUkxPcmlnaW4gPSByZXF1aXJlKFwiLi91cmwtc3RhdGUtbWFjaGluZVwiKS5zZXJpYWxpemVVUkxPcmlnaW47XG5leHBvcnRzLmJhc2ljVVJMUGFyc2UgPSByZXF1aXJlKFwiLi91cmwtc3RhdGUtbWFjaGluZVwiKS5iYXNpY1VSTFBhcnNlO1xuZXhwb3J0cy5zZXRUaGVVc2VybmFtZSA9IHJlcXVpcmUoXCIuL3VybC1zdGF0ZS1tYWNoaW5lXCIpLnNldFRoZVVzZXJuYW1lO1xuZXhwb3J0cy5zZXRUaGVQYXNzd29yZCA9IHJlcXVpcmUoXCIuL3VybC1zdGF0ZS1tYWNoaW5lXCIpLnNldFRoZVBhc3N3b3JkO1xuZXhwb3J0cy5zZXJpYWxpemVIb3N0ID0gcmVxdWlyZShcIi4vdXJsLXN0YXRlLW1hY2hpbmVcIikuc2VyaWFsaXplSG9zdDtcbmV4cG9ydHMuc2VyaWFsaXplSW50ZWdlciA9IHJlcXVpcmUoXCIuL3VybC1zdGF0ZS1tYWNoaW5lXCIpLnNlcmlhbGl6ZUludGVnZXI7XG5leHBvcnRzLnBhcnNlVVJMID0gcmVxdWlyZShcIi4vdXJsLXN0YXRlLW1hY2hpbmVcIikucGFyc2VVUkw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFN0cmVhbSA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdzdHJlYW0nKSk7XG52YXIgaHR0cCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdodHRwJykpO1xudmFyIFVybCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd1cmwnKSk7XG52YXIgd2hhdHdnVXJsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3doYXR3Zy11cmwnKSk7XG52YXIgaHR0cHMgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnaHR0cHMnKSk7XG52YXIgemxpYiA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd6bGliJykpO1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2Jsb2IvYWE4NWIyYWJmMDc3NjZmZjdiZjVjMWY2ZGFhZmIzNzI2ZjJmMmRiNS9saWIvanNkb20vbGl2aW5nL2Jsb2IuanNcblxuLy8gZml4IGZvciBcIlJlYWRhYmxlXCIgaXNuJ3QgYSBuYW1lZCBleHBvcnQgaXNzdWVcbmNvbnN0IFJlYWRhYmxlID0gU3RyZWFtLlJlYWRhYmxlO1xuXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woJ2J1ZmZlcicpO1xuY29uc3QgVFlQRSA9IFN5bWJvbCgndHlwZScpO1xuXG5jbGFzcyBCbG9iIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpc1tUWVBFXSA9ICcnO1xuXG5cdFx0Y29uc3QgYmxvYlBhcnRzID0gYXJndW1lbnRzWzBdO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cblx0XHRjb25zdCBidWZmZXJzID0gW107XG5cdFx0bGV0IHNpemUgPSAwO1xuXG5cdFx0aWYgKGJsb2JQYXJ0cykge1xuXHRcdFx0Y29uc3QgYSA9IGJsb2JQYXJ0cztcblx0XHRcdGNvbnN0IGxlbmd0aCA9IE51bWJlcihhLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhW2ldO1xuXHRcdFx0XHRsZXQgYnVmZmVyO1xuXHRcdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudC5idWZmZXIsIGVsZW1lbnQuYnl0ZU9mZnNldCwgZWxlbWVudC5ieXRlTGVuZ3RoKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmxvYikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnRbQlVGRkVSXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbSh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlbGVtZW50IDogU3RyaW5nKGVsZW1lbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaXplICs9IGJ1ZmZlci5sZW5ndGg7XG5cdFx0XHRcdGJ1ZmZlcnMucHVzaChidWZmZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbQlVGRkVSXSA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycyk7XG5cblx0XHRsZXQgdHlwZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQgJiYgU3RyaW5nKG9wdGlvbnMudHlwZSkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodHlwZSAmJiAhL1teXFx1MDAyMC1cXHUwMDdFXS8udGVzdCh0eXBlKSkge1xuXHRcdFx0dGhpc1tUWVBFXSA9IHR5cGU7XG5cdFx0fVxuXHR9XG5cdGdldCBzaXplKCkge1xuXHRcdHJldHVybiB0aGlzW0JVRkZFUl0ubGVuZ3RoO1xuXHR9XG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzW1RZUEVdO1xuXHR9XG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzW0JVRkZFUl0udG9TdHJpbmcoKSk7XG5cdH1cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0Y29uc3QgYnVmID0gdGhpc1tCVUZGRVJdO1xuXHRcdGNvbnN0IGFiID0gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhYik7XG5cdH1cblx0c3RyZWFtKCkge1xuXHRcdGNvbnN0IHJlYWRhYmxlID0gbmV3IFJlYWRhYmxlKCk7XG5cdFx0cmVhZGFibGUuX3JlYWQgPSBmdW5jdGlvbiAoKSB7fTtcblx0XHRyZWFkYWJsZS5wdXNoKHRoaXNbQlVGRkVSXSk7XG5cdFx0cmVhZGFibGUucHVzaChudWxsKTtcblx0XHRyZXR1cm4gcmVhZGFibGU7XG5cdH1cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdbb2JqZWN0IEJsb2JdJztcblx0fVxuXHRzbGljZSgpIHtcblx0XHRjb25zdCBzaXplID0gdGhpcy5zaXplO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSBhcmd1bWVudHNbMF07XG5cdFx0Y29uc3QgZW5kID0gYXJndW1lbnRzWzFdO1xuXHRcdGxldCByZWxhdGl2ZVN0YXJ0LCByZWxhdGl2ZUVuZDtcblx0XHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IDA7XG5cdFx0fSBlbHNlIGlmIChzdGFydCA8IDApIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSBNYXRoLm1heChzaXplICsgc3RhcnQsIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gTWF0aC5taW4oc3RhcnQsIHNpemUpO1xuXHRcdH1cblx0XHRpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gc2l6ZTtcblx0XHR9IGVsc2UgaWYgKGVuZCA8IDApIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5tYXgoc2l6ZSArIGVuZCwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5taW4oZW5kLCBzaXplKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMCk7XG5cblx0XHRjb25zdCBidWZmZXIgPSB0aGlzW0JVRkZFUl07XG5cdFx0Y29uc3Qgc2xpY2VkQnVmZmVyID0gYnVmZmVyLnNsaWNlKHJlbGF0aXZlU3RhcnQsIHJlbGF0aXZlU3RhcnQgKyBzcGFuKTtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW10sIHsgdHlwZTogYXJndW1lbnRzWzJdIH0pO1xuXHRcdGJsb2JbQlVGRkVSXSA9IHNsaWNlZEJ1ZmZlcjtcblx0XHRyZXR1cm4gYmxvYjtcblx0fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCbG9iLnByb3RvdHlwZSwge1xuXHRzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dHlwZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNsaWNlOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9iLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnQmxvYicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogZmV0Y2gtZXJyb3IuanNcbiAqXG4gKiBGZXRjaEVycm9yIGludGVyZmFjZSBmb3Igb3BlcmF0aW9uYWwgZXJyb3JzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgRmV0Y2hFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHBhcmFtICAgU3RyaW5nICAgICAgdHlwZSAgICAgICAgIEVycm9yIHR5cGUgZm9yIG1hY2hpbmVcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIHN5c3RlbUVycm9yICBGb3IgTm9kZS5qcyBzeXN0ZW0gZXJyb3JcbiAqIEByZXR1cm4gIEZldGNoRXJyb3JcbiAqL1xuZnVuY3Rpb24gRmV0Y2hFcnJvcihtZXNzYWdlLCB0eXBlLCBzeXN0ZW1FcnJvcikge1xuICBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgLy8gd2hlbiBlcnIudHlwZSBpcyBgc3lzdGVtYCwgZXJyLmNvZGUgY29udGFpbnMgc3lzdGVtIGVycm9yIGNvZGVcbiAgaWYgKHN5c3RlbUVycm9yKSB7XG4gICAgdGhpcy5jb2RlID0gdGhpcy5lcnJubyA9IHN5c3RlbUVycm9yLmNvZGU7XG4gIH1cblxuICAvLyBoaWRlIGN1c3RvbSBlcnJvciBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGZyb20gZW5kLXVzZXJzXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5GZXRjaEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkZldGNoRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmV0Y2hFcnJvcjtcbkZldGNoRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnRmV0Y2hFcnJvcic7XG5cbmxldCBjb252ZXJ0O1xudHJ5IHtcblx0Y29udmVydCA9IHJlcXVpcmUoJ2VuY29kaW5nJykuY29udmVydDtcbn0gY2F0Y2ggKGUpIHt9XG5cbmNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbCgnQm9keSBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiUGFzc1Rocm91Z2hcIiBpc24ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuXG4vKipcbiAqIEJvZHkgbWl4aW5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNib2R5XG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiBCb2R5KGJvZHkpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHR2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG5cdCAgICBfcmVmJHNpemUgPSBfcmVmLnNpemU7XG5cblx0bGV0IHNpemUgPSBfcmVmJHNpemUgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHNpemU7XG5cdHZhciBfcmVmJHRpbWVvdXQgPSBfcmVmLnRpbWVvdXQ7XG5cdGxldCB0aW1lb3V0ID0gX3JlZiR0aW1lb3V0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0aW1lb3V0O1xuXG5cdGlmIChib2R5ID09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIHVuZGVmaW5lZCBvciBudWxsXG5cdFx0Ym9keSA9IG51bGw7XG5cdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkudG9TdHJpbmcoKSk7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSA7IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgOyBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkpO1xuXHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkuYnVmZmVyLCBib2R5LmJ5dGVPZmZzZXQsIGJvZHkuYnl0ZUxlbmd0aCk7XG5cdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgOyBlbHNlIHtcblx0XHQvLyBub25lIG9mIHRoZSBhYm92ZVxuXHRcdC8vIGNvZXJjZSB0byBzdHJpbmcgdGhlbiBidWZmZXJcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcblx0fVxuXHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0Ym9keSxcblx0XHRkaXN0dXJiZWQ6IGZhbHNlLFxuXHRcdGVycm9yOiBudWxsXG5cdH07XG5cdHRoaXMuc2l6ZSA9IHNpemU7XG5cdHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG5cblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHRib2R5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGNvbnN0IGVycm9yID0gZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyA/IGVyciA6IG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXMudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKTtcblx0XHRcdF90aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcblx0XHR9KTtcblx0fVxufVxuXG5Cb2R5LnByb3RvdHlwZSA9IHtcblx0Z2V0IGJvZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5ib2R5O1xuXHR9LFxuXG5cdGdldCBib2R5VXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZDtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgQXJyYXlCdWZmZXJcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogUmV0dXJuIHJhdyByZXNwb25zZSBhcyBCbG9iXG4gICpcbiAgKiBAcmV0dXJuIFByb21pc2VcbiAgKi9cblx0YmxvYigpIHtcblx0XHRsZXQgY3QgPSB0aGlzLmhlYWRlcnMgJiYgdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJyc7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHRcdC8vIFByZXZlbnQgY29weWluZ1xuXHRcdFx0bmV3IEJsb2IoW10sIHtcblx0XHRcdFx0dHlwZTogY3QudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSksIHtcblx0XHRcdFx0W0JVRkZFUl06IGJ1ZlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGpzb25cbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0anNvbigpIHtcblx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoYnVmZmVyLnRvU3RyaW5nKCkpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBGZXRjaEVycm9yKGBpbnZhbGlkIGpzb24gcmVzcG9uc2UgYm9keSBhdCAke190aGlzMi51cmx9IHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnaW52YWxpZC1qc29uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyB0ZXh0XG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGJ1ZmZlciAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRidWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcyk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHQsIHdoaWxlIGF1dG9tYXRpY2FsbHkgZGV0ZWN0aW5nIHRoZSBlbmNvZGluZyBhbmRcbiAgKiB0cnlpbmcgdG8gZGVjb2RlIHRvIFVURi04IChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHRDb252ZXJ0ZWQoKSB7XG5cdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHJldHVybiBjb252ZXJ0Qm9keShidWZmZXIsIF90aGlzMy5oZWFkZXJzKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gSW4gYnJvd3NlcnMsIGFsbCBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQm9keS5wcm90b3R5cGUsIHtcblx0Ym9keTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGJvZHlVc2VkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YXJyYXlCdWZmZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRibG9iOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0anNvbjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHRleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuQm9keS5taXhJbiA9IGZ1bmN0aW9uIChwcm90bykge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQm9keS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGVsc2U6IGZ1dHVyZSBwcm9vZlxuXHRcdGlmICghKG5hbWUgaW4gcHJvdG8pKSB7XG5cdFx0XHRjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCb2R5LnByb3RvdHlwZSwgbmFtZSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2MpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBDb25zdW1lIGFuZCBjb252ZXJ0IGFuIGVudGlyZSBCb2R5IHRvIGEgQnVmZmVyLlxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS1jb25zdW1lLWJvZHlcbiAqXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVCb2R5KCkge1xuXHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoYGJvZHkgdXNlZCBhbHJlYWR5IGZvcjogJHt0aGlzLnVybH1gKSk7XG5cdH1cblxuXHR0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkID0gdHJ1ZTtcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmVycm9yKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QodGhpc1tJTlRFUk5BTFNdLmVycm9yKTtcblx0fVxuXG5cdGxldCBib2R5ID0gdGhpcy5ib2R5O1xuXG5cdC8vIGJvZHkgaXMgbnVsbFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShCdWZmZXIuYWxsb2MoMCkpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBibG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRib2R5ID0gYm9keS5zdHJlYW0oKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgYnVmZmVyXG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoYm9keSk7XG5cdH1cblxuXHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWY6IHNob3VsZCBuZXZlciBoYXBwZW5cblx0aWYgKCEoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoQnVmZmVyLmFsbG9jKDApKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgc3RyZWFtXG5cdC8vIGdldCByZWFkeSB0byBhY3R1YWxseSBjb25zdW1lIHRoZSBib2R5XG5cdGxldCBhY2N1bSA9IFtdO1xuXHRsZXQgYWNjdW1CeXRlcyA9IDA7XG5cdGxldCBhYm9ydCA9IGZhbHNlO1xuXG5cdHJldHVybiBuZXcgQm9keS5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRsZXQgcmVzVGltZW91dDtcblxuXHRcdC8vIGFsbG93IHRpbWVvdXQgb24gc2xvdyByZXNwb25zZSBib2R5XG5cdFx0aWYgKF90aGlzNC50aW1lb3V0KSB7XG5cdFx0XHRyZXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXNwb25zZSB0aW1lb3V0IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzNC51cmx9IChvdmVyICR7X3RoaXM0LnRpbWVvdXR9bXMpYCwgJ2JvZHktdGltZW91dCcpKTtcblx0XHRcdH0sIF90aGlzNC50aW1lb3V0KTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgc3RyZWFtIGVycm9yc1xuXHRcdGJvZHkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0aWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcblx0XHRcdFx0Ly8gaWYgdGhlIHJlcXVlc3Qgd2FzIGFib3J0ZWQsIHJlamVjdCB3aXRoIHRoaXMgRXJyb3Jcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyIGVycm9ycywgc3VjaCBhcyBpbmNvcnJlY3QgY29udGVudC1lbmNvZGluZ1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpczQudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRib2R5Lm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0XHRpZiAoYWJvcnQgfHwgY2h1bmsgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX3RoaXM0LnNpemUgJiYgYWNjdW1CeXRlcyArIGNodW5rLmxlbmd0aCA+IF90aGlzNC5zaXplKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBjb250ZW50IHNpemUgYXQgJHtfdGhpczQudXJsfSBvdmVyIGxpbWl0OiAke190aGlzNC5zaXplfWAsICdtYXgtc2l6ZScpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhY2N1bUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGFjY3VtLnB1c2goY2h1bmspO1xuXHRcdH0pO1xuXG5cdFx0Ym9keS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFib3J0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlc1RpbWVvdXQpO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNvbHZlKEJ1ZmZlci5jb25jYXQoYWNjdW0sIGFjY3VtQnl0ZXMpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBoYW5kbGUgc3RyZWFtcyB0aGF0IGhhdmUgYWNjdW11bGF0ZWQgdG9vIG11Y2ggZGF0YSAoaXNzdWUgIzQxNClcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBDb3VsZCBub3QgY3JlYXRlIEJ1ZmZlciBmcm9tIHJlc3BvbnNlIGJvZHkgZm9yICR7X3RoaXM0LnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYnVmZmVyIGVuY29kaW5nIGFuZCBjb252ZXJ0IHRvIHRhcmdldCBlbmNvZGluZ1xuICogcmVmOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwMTEzL3BhcnNpbmcuaHRtbCNkZXRlcm1pbmluZy10aGUtY2hhcmFjdGVyLWVuY29kaW5nXG4gKlxuICogQHBhcmFtICAgQnVmZmVyICBidWZmZXIgICAgSW5jb21pbmcgYnVmZmVyXG4gKiBAcGFyYW0gICBTdHJpbmcgIGVuY29kaW5nICBUYXJnZXQgZW5jb2RpbmdcbiAqIEByZXR1cm4gIFN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Qm9keShidWZmZXIsIGhlYWRlcnMpIHtcblx0aWYgKHR5cGVvZiBjb252ZXJ0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgcGFja2FnZSBgZW5jb2RpbmdgIG11c3QgYmUgaW5zdGFsbGVkIHRvIHVzZSB0aGUgdGV4dENvbnZlcnRlZCgpIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRjb25zdCBjdCA9IGhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcblx0bGV0IGNoYXJzZXQgPSAndXRmLTgnO1xuXHRsZXQgcmVzLCBzdHI7XG5cblx0Ly8gaGVhZGVyXG5cdGlmIChjdCkge1xuXHRcdHJlcyA9IC9jaGFyc2V0PShbXjtdKikvaS5leGVjKGN0KTtcblx0fVxuXG5cdC8vIG5vIGNoYXJzZXQgaW4gY29udGVudCB0eXBlLCBwZWVrIGF0IHJlc3BvbnNlIGJvZHkgZm9yIGF0IG1vc3QgMTAyNCBieXRlc1xuXHRzdHIgPSBidWZmZXIuc2xpY2UoMCwgMTAyNCkudG9TdHJpbmcoKTtcblxuXHQvLyBodG1sNVxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPG1ldGEuKz9jaGFyc2V0PShbJ1wiXSkoLis/KVxcMS9pLmV4ZWMoc3RyKTtcblx0fVxuXG5cdC8vIGh0bWw0XG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88bWV0YVtcXHNdKz9odHRwLWVxdWl2PShbJ1wiXSljb250ZW50LXR5cGVcXDFbXFxzXSs/Y29udGVudD0oWydcIl0pKC4rPylcXDIvaS5leGVjKHN0cik7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJlcyA9IC88bWV0YVtcXHNdKz9jb250ZW50PShbJ1wiXSkoLis/KVxcMVtcXHNdKz9odHRwLWVxdWl2PShbJ1wiXSljb250ZW50LXR5cGVcXDMvaS5leGVjKHN0cik7XG5cdFx0XHRpZiAocmVzKSB7XG5cdFx0XHRcdHJlcy5wb3AoKTsgLy8gZHJvcCBsYXN0IHF1b3RlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJlcykge1xuXHRcdFx0cmVzID0gL2NoYXJzZXQ9KC4qKS9pLmV4ZWMocmVzLnBvcCgpKTtcblx0XHR9XG5cdH1cblxuXHQvLyB4bWxcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxcXD94bWwuKz9lbmNvZGluZz0oWydcIl0pKC4rPylcXDEvaS5leGVjKHN0cik7XG5cdH1cblxuXHQvLyBmb3VuZCBjaGFyc2V0XG5cdGlmIChyZXMpIHtcblx0XHRjaGFyc2V0ID0gcmVzLnBvcCgpO1xuXG5cdFx0Ly8gcHJldmVudCBkZWNvZGUgaXNzdWVzIHdoZW4gc2l0ZXMgdXNlIGluY29ycmVjdCBlbmNvZGluZ1xuXHRcdC8vIHJlZjogaHR0cHM6Ly9oc2l2b25lbi5maS9lbmNvZGluZy1tZW51L1xuXHRcdGlmIChjaGFyc2V0ID09PSAnZ2IyMzEyJyB8fCBjaGFyc2V0ID09PSAnZ2JrJykge1xuXHRcdFx0Y2hhcnNldCA9ICdnYjE4MDMwJztcblx0XHR9XG5cdH1cblxuXHQvLyB0dXJuIHJhdyBidWZmZXJzIGludG8gYSBzaW5nbGUgdXRmLTggYnVmZmVyXG5cdHJldHVybiBjb252ZXJ0KGJ1ZmZlciwgJ1VURi04JywgY2hhcnNldCkudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKiByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaC9pc3N1ZXMvMjk2I2lzc3VlY29tbWVudC0zMDc1OTgxNDNcbiAqXG4gKiBAcGFyYW0gICBPYmplY3QgIG9iaiAgICAgT2JqZWN0IHRvIGRldGVjdCBieSB0eXBlIG9yIGJyYW5kXG4gKiBAcmV0dXJuICBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXMob2JqKSB7XG5cdC8vIER1Y2stdHlwaW5nIGFzIGEgbmVjZXNzYXJ5IGNvbmRpdGlvbi5cblx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmouYXBwZW5kICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZGVsZXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0QWxsICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouaGFzICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouc2V0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQnJhbmQtY2hlY2tpbmcgYW5kIG1vcmUgZHVjay10eXBpbmcgYXMgb3B0aW9uYWwgY29uZGl0aW9uLlxuXHRyZXR1cm4gb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdVUkxTZWFyY2hQYXJhbXMnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBVUkxTZWFyY2hQYXJhbXNdJyB8fCB0eXBlb2Ygb2JqLnNvcnQgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBXM0MgYEJsb2JgIG9iamVjdCAod2hpY2ggYEZpbGVgIGluaGVyaXRzIGZyb20pXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQmxvYihvYmopIHtcblx0cmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai50eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb2JqLnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ3N0cmluZycgJiYgL14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqLmNvbnN0cnVjdG9yLm5hbWUpICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9ialtTeW1ib2wudG9TdHJpbmdUYWddKTtcbn1cblxuLyoqXG4gKiBDbG9uZSBib2R5IGdpdmVuIFJlcy9SZXEgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgaW5zdGFuY2UgIFJlc3BvbnNlIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE1peGVkXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGluc3RhbmNlKSB7XG5cdGxldCBwMSwgcDI7XG5cdGxldCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXHQvLyBkb24ndCBhbGxvdyBjbG9uaW5nIGEgdXNlZCBib2R5XG5cdGlmIChpbnN0YW5jZS5ib2R5VXNlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2Fubm90IGNsb25lIGJvZHkgYWZ0ZXIgaXQgaXMgdXNlZCcpO1xuXHR9XG5cblx0Ly8gY2hlY2sgdGhhdCBib2R5IGlzIGEgc3RyZWFtIGFuZCBub3QgZm9ybS1kYXRhIG9iamVjdFxuXHQvLyBub3RlOiB3ZSBjYW4ndCBjbG9uZSB0aGUgZm9ybS1kYXRhIG9iamVjdCB3aXRob3V0IGhhdmluZyBpdCBhcyBhIGRlcGVuZGVuY3lcblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0gJiYgdHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgIT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyB0ZWUgaW5zdGFuY2UgYm9keVxuXHRcdHAxID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdFx0cDIgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0XHRib2R5LnBpcGUocDEpO1xuXHRcdGJvZHkucGlwZShwMik7XG5cdFx0Ly8gc2V0IGluc3RhbmNlIGJvZHkgdG8gdGVlZCBib2R5IGFuZCByZXR1cm4gdGhlIG90aGVyIHRlZWQgYm9keVxuXHRcdGluc3RhbmNlW0lOVEVSTkFMU10uYm9keSA9IHAxO1xuXHRcdGJvZHkgPSBwMjtcblx0fVxuXG5cdHJldHVybiBib2R5O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIHRoZSBvcGVyYXRpb24gXCJleHRyYWN0IGEgYENvbnRlbnQtVHlwZWAgdmFsdWUgZnJvbSB8b2JqZWN0fFwiIGFzXG4gKiBzcGVjaWZpZWQgaW4gdGhlIHNwZWNpZmljYXRpb246XG4gKiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5aW5pdC1leHRyYWN0XG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgaW5zdGFuY2UuYm9keSBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSAgIE1peGVkICBpbnN0YW5jZSAgQW55IG9wdGlvbnMuYm9keSBpbnB1dFxuICovXG5mdW5jdGlvbiBleHRyYWN0Q29udGVudFR5cGUoYm9keSkge1xuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGJvZHkgaXMgc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRcdHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYmxvYlxuXHRcdHJldHVybiBib2R5LnR5cGUgfHwgbnVsbDtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyVmlld1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gZGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0XHRyZXR1cm4gYG11bHRpcGFydC9mb3JtLWRhdGE7Ym91bmRhcnk9JHtib2R5LmdldEJvdW5kYXJ5KCl9YDtcblx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHQvLyBjYW4ndCByZWFsbHkgZG8gbXVjaCBhYm91dCB0aGlzXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQm9keSBjb25zdHJ1Y3RvciBkZWZhdWx0cyBvdGhlciB0aGluZ3MgdG8gc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEZldGNoIFN0YW5kYXJkIHRyZWF0cyB0aGlzIGFzIGlmIFwidG90YWwgYnl0ZXNcIiBpcyBhIHByb3BlcnR5IG9uIHRoZSBib2R5LlxuICogRm9yIHVzLCB3ZSBoYXZlIHRvIGV4cGxpY2l0bHkgZ2V0IGl0IHdpdGggYSBmdW5jdGlvbi5cbiAqXG4gKiByZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktdG90YWwtYnl0ZXNcbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgTnVtYmVyPyAgICAgICAgICAgIE51bWJlciBvZiBieXRlcywgb3IgbnVsbCBpZiBub3QgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gZ2V0VG90YWxCeXRlcyhpbnN0YW5jZSkge1xuXHRjb25zdCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0cmV0dXJuIDA7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHkuc2l6ZTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBib2R5Lmxlbmd0aDtcblx0fSBlbHNlIGlmIChib2R5ICYmIHR5cGVvZiBib2R5LmdldExlbmd0aFN5bmMgPT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBkZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRcdGlmIChib2R5Ll9sZW5ndGhSZXRyaWV2ZXJzICYmIGJvZHkuX2xlbmd0aFJldHJpZXZlcnMubGVuZ3RoID09IDAgfHwgLy8gMS54XG5cdFx0Ym9keS5oYXNLbm93bkxlbmd0aCAmJiBib2R5Lmhhc0tub3duTGVuZ3RoKCkpIHtcblx0XHRcdC8vIDIueFxuXHRcdFx0cmV0dXJuIGJvZHkuZ2V0TGVuZ3RoU3luYygpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogV3JpdGUgYSBCb2R5IHRvIGEgTm9kZS5qcyBXcml0YWJsZVN0cmVhbSAoZS5nLiBodHRwLlJlcXVlc3QpIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiB3cml0ZVRvU3RyZWFtKGRlc3QsIGluc3RhbmNlKSB7XG5cdGNvbnN0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdGJvZHkuc3RyZWFtKCkucGlwZShkZXN0KTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdGRlc3Qud3JpdGUoYm9keSk7XG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdGJvZHkucGlwZShkZXN0KTtcblx0fVxufVxuXG4vLyBleHBvc2UgUHJvbWlzZVxuQm9keS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbi8qKlxuICogaGVhZGVycy5qc1xuICpcbiAqIEhlYWRlcnMgY2xhc3Mgb2ZmZXJzIGNvbnZlbmllbnQgaGVscGVyc1xuICovXG5cbmNvbnN0IGludmFsaWRUb2tlblJlZ2V4ID0gL1teXFxeX2BhLXpBLVpcXC0wLTkhIyQlJicqKy58fl0vO1xuY29uc3QgaW52YWxpZEhlYWRlckNoYXJSZWdleCA9IC9bXlxcdFxceDIwLVxceDdlXFx4ODAtXFx4ZmZdLztcblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcblx0bmFtZSA9IGAke25hbWV9YDtcblx0aWYgKGludmFsaWRUb2tlblJlZ2V4LnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IGlzIG5vdCBhIGxlZ2FsIEhUVFAgaGVhZGVyIG5hbWVgKTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG5cdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0aWYgKGludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdCh2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke3ZhbHVlfSBpcyBub3QgYSBsZWdhbCBIVFRQIGhlYWRlciB2YWx1ZWApO1xuXHR9XG59XG5cbi8qKlxuICogRmluZCB0aGUga2V5IGluIHRoZSBtYXAgb2JqZWN0IGdpdmVuIGEgaGVhZGVyIG5hbWUuXG4gKlxuICogUmV0dXJucyB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAqIEByZXR1cm4gIFN0cmluZ3xVbmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZmluZChtYXAsIG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gbWFwKSB7XG5cdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4ga2V5O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBNQVAgPSBTeW1ib2woJ21hcCcpO1xuY2xhc3MgSGVhZGVycyB7XG5cdC8qKlxuICAqIEhlYWRlcnMgY2xhc3NcbiAgKlxuICAqIEBwYXJhbSAgIE9iamVjdCAgaGVhZGVycyAgUmVzcG9uc2UgaGVhZGVyc1xuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGluaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcblxuXHRcdHRoaXNbTUFQXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcblx0XHRcdGNvbnN0IHJhd0hlYWRlcnMgPSBpbml0LnJhdygpO1xuXHRcdFx0Y29uc3QgaGVhZGVyTmFtZXMgPSBPYmplY3Qua2V5cyhyYXdIZWFkZXJzKTtcblxuXHRcdFx0Zm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIGhlYWRlck5hbWVzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgcmF3SGVhZGVyc1toZWFkZXJOYW1lXSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGhlYWRlck5hbWUsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3Qgd29ycnkgYWJvdXQgY29udmVydGluZyBwcm9wIHRvIEJ5dGVTdHJpbmcgaGVyZSBhcyBhcHBlbmQoKVxuXHRcdC8vIHdpbGwgaGFuZGxlIGl0LlxuXHRcdGlmIChpbml0ID09IG51bGwpIDsgZWxzZSBpZiAodHlwZW9mIGluaXQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBtZXRob2QgPSBpbml0W1N5bWJvbC5pdGVyYXRvcl07XG5cdFx0XHRpZiAobWV0aG9kICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+XG5cdFx0XHRcdC8vIE5vdGU6IHBlciBzcGVjIHdlIGhhdmUgdG8gZmlyc3QgZXhoYXVzdCB0aGUgbGlzdHMgdGhlbiBwcm9jZXNzIHRoZW1cblx0XHRcdFx0Y29uc3QgcGFpcnMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIGluaXQpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHBhaXIgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYWlyW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYWlycy5wdXNoKEFycmF5LmZyb20ocGFpcikpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG5cdFx0XHRcdFx0aWYgKHBhaXIubGVuZ3RoICE9PSAyKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgYSBuYW1lL3ZhbHVlIHR1cGxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz5cblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaW5pdCkpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGluaXRba2V5XTtcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBpbml0aWFsaXplciBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIFJldHVybiBjb21iaW5lZCBoZWFkZXIgdmFsdWUgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIE1peGVkXG4gICovXG5cdGdldChuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbTUFQXVtrZXldLmpvaW4oJywgJyk7XG5cdH1cblxuXHQvKipcbiAgKiBJdGVyYXRlIG92ZXIgYWxsIGhlYWRlcnNcbiAgKlxuICAqIEBwYXJhbSAgIEZ1bmN0aW9uICBjYWxsYmFjayAgRXhlY3V0ZWQgZm9yIGVhY2ggaXRlbSB3aXRoIHBhcmFtZXRlcnMgKHZhbHVlLCBuYW1lLCB0aGlzQXJnKVxuICAqIEBwYXJhbSAgIEJvb2xlYW4gICB0aGlzQXJnICAgYHRoaXNgIGNvbnRleHQgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRmb3JFYWNoKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuXHRcdGxldCBwYWlycyA9IGdldEhlYWRlcnModGhpcyk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlIChpIDwgcGFpcnMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgX3BhaXJzJGkgPSBwYWlyc1tpXTtcblx0XHRcdGNvbnN0IG5hbWUgPSBfcGFpcnMkaVswXSxcblx0XHRcdCAgICAgIHZhbHVlID0gX3BhaXJzJGlbMV07XG5cblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuXHRcdFx0cGFpcnMgPSBnZXRIZWFkZXJzKHRoaXMpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIE92ZXJ3cml0ZSBoZWFkZXIgdmFsdWVzIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgIEhlYWRlciBuYW1lXG4gICogQHBhcmFtICAgU3RyaW5nICB2YWx1ZSAgSGVhZGVyIHZhbHVlXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRzZXQobmFtZSwgdmFsdWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0dmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdHRoaXNbTUFQXVtrZXkgIT09IHVuZGVmaW5lZCA/IGtleSA6IG5hbWVdID0gW3ZhbHVlXTtcblx0fVxuXG5cdC8qKlxuICAqIEFwcGVuZCBhIHZhbHVlIG9udG8gZXhpc3RpbmcgaGVhZGVyXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgICBIZWFkZXIgbmFtZVxuICAqIEBwYXJhbSAgIFN0cmluZyAgdmFsdWUgIEhlYWRlciB2YWx1ZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0YXBwZW5kKG5hbWUsIHZhbHVlKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXNbTUFQXVtrZXldLnB1c2godmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzW01BUF1bbmFtZV0gPSBbdmFsdWVdO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIENoZWNrIGZvciBoZWFkZXIgbmFtZSBleGlzdGVuY2VcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgQm9vbGVhblxuICAqL1xuXHRoYXMobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHJldHVybiBmaW5kKHRoaXNbTUFQXSwgbmFtZSkgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuICAqIERlbGV0ZSBhbGwgaGVhZGVyIHZhbHVlcyBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRkZWxldGUobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlbGV0ZSB0aGlzW01BUF1ba2V5XTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBSZXR1cm4gcmF3IGhlYWRlcnMgKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIE9iamVjdFxuICAqL1xuXHRyYXcoKSB7XG5cdFx0cmV0dXJuIHRoaXNbTUFQXTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBrZXlzLlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0a2V5cygpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXknKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiB2YWx1ZXMuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHR2YWx1ZXMoKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAndmFsdWUnKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBlbnRyaWVzLlxuICAqXG4gICogVGhpcyBpcyB0aGUgZGVmYXVsdCBpdGVyYXRvciBvZiB0aGUgSGVhZGVycyBvYmplY3QuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHRbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXkrdmFsdWUnKTtcblx0fVxufVxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnSGVhZGVycycsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhlYWRlcnMucHJvdG90eXBlLCB7XG5cdGdldDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGZvckVhY2g6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzZXQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRhcHBlbmQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoYXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRkZWxldGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRrZXlzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dmFsdWVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0ZW50cmllczogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKGhlYWRlcnMpIHtcblx0bGV0IGtpbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdrZXkrdmFsdWUnO1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhoZWFkZXJzW01BUF0pLnNvcnQoKTtcblx0cmV0dXJuIGtleXMubWFwKGtpbmQgPT09ICdrZXknID8gZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gay50b0xvd2VyQ2FzZSgpO1xuXHR9IDoga2luZCA9PT0gJ3ZhbHVlJyA/IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIGhlYWRlcnNbTUFQXVtrXS5qb2luKCcsICcpO1xuXHR9IDogZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gW2sudG9Mb3dlckNhc2UoKSwgaGVhZGVyc1tNQVBdW2tdLmpvaW4oJywgJyldO1xuXHR9KTtcbn1cblxuY29uc3QgSU5URVJOQUwgPSBTeW1ib2woJ2ludGVybmFsJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0YXJnZXQsIGtpbmQpIHtcblx0Y29uc3QgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSk7XG5cdGl0ZXJhdG9yW0lOVEVSTkFMXSA9IHtcblx0XHR0YXJnZXQsXG5cdFx0a2luZCxcblx0XHRpbmRleDogMFxuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3I7XG59XG5cbmNvbnN0IEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZih7XG5cdG5leHQoKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5cdFx0aWYgKCF0aGlzIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBvZiBgdGhpc2AgaXMgbm90IGEgSGVhZGVyc0l0ZXJhdG9yJyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9JTlRFUk5BTCA9IHRoaXNbSU5URVJOQUxdO1xuXHRcdGNvbnN0IHRhcmdldCA9IF9JTlRFUk5BTC50YXJnZXQsXG5cdFx0ICAgICAga2luZCA9IF9JTlRFUk5BTC5raW5kLFxuXHRcdCAgICAgIGluZGV4ID0gX0lOVEVSTkFMLmluZGV4O1xuXG5cdFx0Y29uc3QgdmFsdWVzID0gZ2V0SGVhZGVycyh0YXJnZXQsIGtpbmQpO1xuXHRcdGNvbnN0IGxlbiA9IHZhbHVlcy5sZW5ndGg7XG5cdFx0aWYgKGluZGV4ID49IGxlbikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IHVuZGVmaW5lZCxcblx0XHRcdFx0ZG9uZTogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMXS5pbmRleCA9IGluZGV4ICsgMTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWVzW2luZGV4XSxcblx0XHRcdGRvbmU6IGZhbHNlXG5cdFx0fTtcblx0fVxufSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0hlYWRlcnNJdGVyYXRvcicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogRXhwb3J0IHRoZSBIZWFkZXJzIG9iamVjdCBpbiBhIGZvcm0gdGhhdCBOb2RlLmpzIGNhbiBjb25zdW1lLlxuICpcbiAqIEBwYXJhbSAgIEhlYWRlcnMgIGhlYWRlcnNcbiAqIEByZXR1cm4gIE9iamVjdFxuICovXG5mdW5jdGlvbiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycykge1xuXHRjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHsgX19wcm90b19fOiBudWxsIH0sIGhlYWRlcnNbTUFQXSk7XG5cblx0Ly8gaHR0cC5yZXF1ZXN0KCkgb25seSBzdXBwb3J0cyBzdHJpbmcgYXMgSG9zdCBoZWFkZXIuIFRoaXMgaGFjayBtYWtlc1xuXHQvLyBzcGVjaWZ5aW5nIGN1c3RvbSBIb3N0IGhlYWRlciBwb3NzaWJsZS5cblx0Y29uc3QgaG9zdEhlYWRlcktleSA9IGZpbmQoaGVhZGVyc1tNQVBdLCAnSG9zdCcpO1xuXHRpZiAoaG9zdEhlYWRlcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2JqW2hvc3RIZWFkZXJLZXldID0gb2JqW2hvc3RIZWFkZXJLZXldWzBdO1xuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBIZWFkZXJzIG9iamVjdCBmcm9tIGFuIG9iamVjdCBvZiBoZWFkZXJzLCBpZ25vcmluZyB0aG9zZSB0aGF0IGRvXG4gKiBub3QgY29uZm9ybSB0byBIVFRQIGdyYW1tYXIgcHJvZHVjdGlvbnMuXG4gKlxuICogQHBhcmFtICAgT2JqZWN0ICBvYmogIE9iamVjdCBvZiBoZWFkZXJzXG4gKiBAcmV0dXJuICBIZWFkZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNMZW5pZW50KG9iaikge1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcblx0XHRpZiAoaW52YWxpZFRva2VuUmVnZXgudGVzdChuYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KG9ialtuYW1lXSkpIHtcblx0XHRcdGZvciAoY29uc3QgdmFsIG9mIG9ialtuYW1lXSkge1xuXHRcdFx0XHRpZiAoaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KHZhbCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGVhZGVyc1tNQVBdW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0gPSBbdmFsXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0ucHVzaCh2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KG9ialtuYW1lXSkpIHtcblx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXSA9IFtvYmpbbmFtZV1dO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaGVhZGVycztcbn1cblxuY29uc3QgSU5URVJOQUxTJDEgPSBTeW1ib2woJ1Jlc3BvbnNlIGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJTVEFUVVNfQ09ERVNcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBTVEFUVVNfQ09ERVMgPSBodHRwLlNUQVRVU19DT0RFUztcblxuLyoqXG4gKiBSZXNwb25zZSBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVzcG9uc2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgYm9keSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblx0XHRsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRCb2R5LmNhbGwodGhpcywgYm9keSwgb3B0cyk7XG5cblx0XHRjb25zdCBzdGF0dXMgPSBvcHRzLnN0YXR1cyB8fCAyMDA7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdHMuaGVhZGVycyk7XG5cblx0XHRpZiAoYm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGJvZHkpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMV0gPSB7XG5cdFx0XHR1cmw6IG9wdHMudXJsLFxuXHRcdFx0c3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogb3B0cy5zdGF0dXNUZXh0IHx8IFNUQVRVU19DT0RFU1tzdGF0dXNdLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGNvdW50ZXI6IG9wdHMuY291bnRlclxuXHRcdH07XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS51cmwgfHwgJyc7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXM7XG5cdH1cblxuXHQvKipcbiAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaWYgdGhlIHJlcXVlc3QgZW5kZWQgbm9ybWFsbHlcbiAgKi9cblx0Z2V0IG9rKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPj0gMjAwICYmIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cyA8IDMwMDtcblx0fVxuXG5cdGdldCByZWRpcmVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5jb3VudGVyID4gMDtcblx0fVxuXG5cdGdldCBzdGF0dXNUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXNUZXh0O1xuXHR9XG5cblx0Z2V0IGhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmhlYWRlcnM7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlc3BvbnNlXG4gICpcbiAgKiBAcmV0dXJuICBSZXNwb25zZVxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKGNsb25lKHRoaXMpLCB7XG5cdFx0XHR1cmw6IHRoaXMudXJsLFxuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcblx0XHRcdG9rOiB0aGlzLm9rLFxuXHRcdFx0cmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXNwb25zZS5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXNwb25zZS5wcm90b3R5cGUsIHtcblx0dXJsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0b2s6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdGVkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzVGV4dDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzcG9uc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdSZXNwb25zZScsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbmNvbnN0IElOVEVSTkFMUyQyID0gU3ltYm9sKCdSZXF1ZXN0IGludGVybmFscycpO1xuY29uc3QgVVJMID0gVXJsLlVSTCB8fCB3aGF0d2dVcmwuVVJMO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJmb3JtYXRcIiwgXCJwYXJzZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IHBhcnNlX3VybCA9IFVybC5wYXJzZTtcbmNvbnN0IGZvcm1hdF91cmwgPSBVcmwuZm9ybWF0O1xuXG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGBuZXcgVVJMYCB0byBoYW5kbGUgYXJiaXRyYXJ5IFVSTHNcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFN0clxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VVUkwodXJsU3RyKSB7XG5cdC8qXG4gXHRDaGVjayB3aGV0aGVyIHRoZSBVUkwgaXMgYWJzb2x1dGUgb3Igbm90XG4gXHRcdFNjaGVtZTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjFcbiBcdEFic29sdXRlIFVSTDogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi00LjNcbiAqL1xuXHRpZiAoL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8uZXhlYyh1cmxTdHIpKSB7XG5cdFx0dXJsU3RyID0gbmV3IFVSTCh1cmxTdHIpLnRvU3RyaW5nKCk7XG5cdH1cblxuXHQvLyBGYWxsYmFjayB0byBvbGQgaW1wbGVtZW50YXRpb24gZm9yIGFyYml0cmFyeSBVUkxzXG5cdHJldHVybiBwYXJzZV91cmwodXJsU3RyKTtcbn1cblxuY29uc3Qgc3RyZWFtRGVzdHJ1Y3Rpb25TdXBwb3J0ZWQgPSAnZGVzdHJveScgaW4gU3RyZWFtLlJlYWRhYmxlLnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIFJlcXVlc3QuXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dFxuICogQHJldHVybiAgQm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1JlcXVlc3QoaW5wdXQpIHtcblx0cmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGlucHV0W0lOVEVSTkFMUyQyXSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQWJvcnRTaWduYWwoc2lnbmFsKSB7XG5cdGNvbnN0IHByb3RvID0gc2lnbmFsICYmIHR5cGVvZiBzaWduYWwgPT09ICdvYmplY3QnICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihzaWduYWwpO1xuXHRyZXR1cm4gISEocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IubmFtZSA9PT0gJ0Fib3J0U2lnbmFsJyk7XG59XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5wdXQgIFVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgIGluaXQgICBDdXN0b20gb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5jbGFzcyBSZXF1ZXN0IHtcblx0Y29uc3RydWN0b3IoaW5wdXQpIHtcblx0XHRsZXQgaW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRsZXQgcGFyc2VkVVJMO1xuXG5cdFx0Ly8gbm9ybWFsaXplIGlucHV0XG5cdFx0aWYgKCFpc1JlcXVlc3QoaW5wdXQpKSB7XG5cdFx0XHRpZiAoaW5wdXQgJiYgaW5wdXQuaHJlZikge1xuXHRcdFx0XHQvLyBpbiBvcmRlciB0byBzdXBwb3J0IE5vZGUuanMnIFVybCBvYmplY3RzOyB0aG91Z2ggV0hBVFdHJ3MgVVJMIG9iamVjdHNcblx0XHRcdFx0Ly8gd2lsbCBmYWxsIGludG8gdGhpcyBicmFuY2ggYWxzbyAoc2luY2UgdGhlaXIgYHRvU3RyaW5nKClgIHdpbGwgcmV0dXJuXG5cdFx0XHRcdC8vIGBocmVmYCBwcm9wZXJ0eSBhbnl3YXkpXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlVVJMKGlucHV0LmhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29lcmNlIGlucHV0IHRvIGEgc3RyaW5nIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHBhcnNlXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlVVJMKGAke2lucHV0fWApO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQgPSB7fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFyc2VkVVJMID0gcGFyc2VVUkwoaW5wdXQudXJsKTtcblx0XHR9XG5cblx0XHRsZXQgbWV0aG9kID0gaW5pdC5tZXRob2QgfHwgaW5wdXQubWV0aG9kIHx8ICdHRVQnO1xuXHRcdG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0aWYgKChpbml0LmJvZHkgIT0gbnVsbCB8fCBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwpICYmIChtZXRob2QgPT09ICdHRVQnIHx8IG1ldGhvZCA9PT0gJ0hFQUQnKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUmVxdWVzdCB3aXRoIEdFVC9IRUFEIG1ldGhvZCBjYW5ub3QgaGF2ZSBib2R5Jyk7XG5cdFx0fVxuXG5cdFx0bGV0IGlucHV0Qm9keSA9IGluaXQuYm9keSAhPSBudWxsID8gaW5pdC5ib2R5IDogaXNSZXF1ZXN0KGlucHV0KSAmJiBpbnB1dC5ib2R5ICE9PSBudWxsID8gY2xvbmUoaW5wdXQpIDogbnVsbDtcblxuXHRcdEJvZHkuY2FsbCh0aGlzLCBpbnB1dEJvZHksIHtcblx0XHRcdHRpbWVvdXQ6IGluaXQudGltZW91dCB8fCBpbnB1dC50aW1lb3V0IHx8IDAsXG5cdFx0XHRzaXplOiBpbml0LnNpemUgfHwgaW5wdXQuc2l6ZSB8fCAwXG5cdFx0fSk7XG5cblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IGlucHV0LmhlYWRlcnMgfHwge30pO1xuXG5cdFx0aWYgKGlucHV0Qm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGlucHV0Qm9keSk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc2lnbmFsID0gaXNSZXF1ZXN0KGlucHV0KSA/IGlucHV0LnNpZ25hbCA6IG51bGw7XG5cdFx0aWYgKCdzaWduYWwnIGluIGluaXQpIHNpZ25hbCA9IGluaXQuc2lnbmFsO1xuXG5cdFx0aWYgKHNpZ25hbCAhPSBudWxsICYmICFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHNpZ25hbCB0byBiZSBhbiBpbnN0YW5jZW9mIEFib3J0U2lnbmFsJyk7XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMl0gPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRyZWRpcmVjdDogaW5pdC5yZWRpcmVjdCB8fCBpbnB1dC5yZWRpcmVjdCB8fCAnZm9sbG93Jyxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRwYXJzZWRVUkwsXG5cdFx0XHRzaWduYWxcblx0XHR9O1xuXG5cdFx0Ly8gbm9kZS1mZXRjaC1vbmx5IG9wdGlvbnNcblx0XHR0aGlzLmZvbGxvdyA9IGluaXQuZm9sbG93ICE9PSB1bmRlZmluZWQgPyBpbml0LmZvbGxvdyA6IGlucHV0LmZvbGxvdyAhPT0gdW5kZWZpbmVkID8gaW5wdXQuZm9sbG93IDogMjA7XG5cdFx0dGhpcy5jb21wcmVzcyA9IGluaXQuY29tcHJlc3MgIT09IHVuZGVmaW5lZCA/IGluaXQuY29tcHJlc3MgOiBpbnB1dC5jb21wcmVzcyAhPT0gdW5kZWZpbmVkID8gaW5wdXQuY29tcHJlc3MgOiB0cnVlO1xuXHRcdHRoaXMuY291bnRlciA9IGluaXQuY291bnRlciB8fCBpbnB1dC5jb3VudGVyIHx8IDA7XG5cdFx0dGhpcy5hZ2VudCA9IGluaXQuYWdlbnQgfHwgaW5wdXQuYWdlbnQ7XG5cdH1cblxuXHRnZXQgbWV0aG9kKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5tZXRob2Q7XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiBmb3JtYXRfdXJsKHRoaXNbSU5URVJOQUxTJDJdLnBhcnNlZFVSTCk7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0uaGVhZGVycztcblx0fVxuXG5cdGdldCByZWRpcmVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0ucmVkaXJlY3Q7XG5cdH1cblxuXHRnZXQgc2lnbmFsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5zaWduYWw7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlcXVlc3RcbiAgKlxuICAqIEByZXR1cm4gIFJlcXVlc3RcbiAgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMpO1xuXHR9XG59XG5cbkJvZHkubWl4SW4oUmVxdWVzdC5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ1JlcXVlc3QnLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXF1ZXN0LnByb3RvdHlwZSwge1xuXHRtZXRob2Q6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR1cmw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoZWFkZXJzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0cmVkaXJlY3Q6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNpZ25hbDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBSZXF1ZXN0IHRvIE5vZGUuanMgaHR0cCByZXF1ZXN0IG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICAgUmVxdWVzdCAgQSBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuICBPYmplY3QgICBUaGUgb3B0aW9ucyBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIGh0dHAucmVxdWVzdFxuICovXG5mdW5jdGlvbiBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCkge1xuXHRjb25zdCBwYXJzZWRVUkwgPSByZXF1ZXN0W0lOVEVSTkFMUyQyXS5wYXJzZWRVUkw7XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0W0lOVEVSTkFMUyQyXS5oZWFkZXJzKTtcblxuXHQvLyBmZXRjaCBzdGVwIDEuM1xuXHRpZiAoIWhlYWRlcnMuaGFzKCdBY2NlcHQnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQnLCAnKi8qJyk7XG5cdH1cblxuXHQvLyBCYXNpYyBmZXRjaFxuXHRpZiAoIXBhcnNlZFVSTC5wcm90b2NvbCB8fCAhcGFyc2VkVVJMLmhvc3RuYW1lKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBhYnNvbHV0ZSBVUkxzIGFyZSBzdXBwb3J0ZWQnKTtcblx0fVxuXG5cdGlmICghL15odHRwcz86JC8udGVzdChwYXJzZWRVUkwucHJvdG9jb2wpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBIVFRQKFMpIHByb3RvY29scyBhcmUgc3VwcG9ydGVkJyk7XG5cdH1cblxuXHRpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlICYmICFzdHJlYW1EZXN0cnVjdGlvblN1cHBvcnRlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2FuY2VsbGF0aW9uIG9mIHN0cmVhbWVkIHJlcXVlc3RzIHdpdGggQWJvcnRTaWduYWwgaXMgbm90IHN1cHBvcnRlZCBpbiBub2RlIDwgOCcpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXBzIDIuNC0yLjdcblx0bGV0IGNvbnRlbnRMZW5ndGhWYWx1ZSA9IG51bGw7XG5cdGlmIChyZXF1ZXN0LmJvZHkgPT0gbnVsbCAmJiAvXihQT1NUfFBVVCkkL2kudGVzdChyZXF1ZXN0Lm1ldGhvZCkpIHtcblx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSAnMCc7XG5cdH1cblx0aWYgKHJlcXVlc3QuYm9keSAhPSBudWxsKSB7XG5cdFx0Y29uc3QgdG90YWxCeXRlcyA9IGdldFRvdGFsQnl0ZXMocmVxdWVzdCk7XG5cdFx0aWYgKHR5cGVvZiB0b3RhbEJ5dGVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29udGVudExlbmd0aFZhbHVlID0gU3RyaW5nKHRvdGFsQnl0ZXMpO1xuXHRcdH1cblx0fVxuXHRpZiAoY29udGVudExlbmd0aFZhbHVlKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0NvbnRlbnQtTGVuZ3RoJywgY29udGVudExlbmd0aFZhbHVlKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTFcblx0aWYgKCFoZWFkZXJzLmhhcygnVXNlci1BZ2VudCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnbm9kZS1mZXRjaC8xLjAgKCtodHRwczovL2dpdGh1Yi5jb20vYml0aW5uL25vZGUtZmV0Y2gpJyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcCAyLjE1XG5cdGlmIChyZXF1ZXN0LmNvbXByZXNzICYmICFoZWFkZXJzLmhhcygnQWNjZXB0LUVuY29kaW5nJykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0LUVuY29kaW5nJywgJ2d6aXAsZGVmbGF0ZScpO1xuXHR9XG5cblx0bGV0IGFnZW50ID0gcmVxdWVzdC5hZ2VudDtcblx0aWYgKHR5cGVvZiBhZ2VudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGFnZW50ID0gYWdlbnQocGFyc2VkVVJMKTtcblx0fVxuXG5cdGlmICghaGVhZGVycy5oYXMoJ0Nvbm5lY3Rpb24nKSAmJiAhYWdlbnQpIHtcblx0XHRoZWFkZXJzLnNldCgnQ29ubmVjdGlvbicsICdjbG9zZScpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgNC4yXG5cdC8vIGNodW5rZWQgZW5jb2RpbmcgaXMgaGFuZGxlZCBieSBOb2RlLmpzXG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZFVSTCwge1xuXHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0aGVhZGVyczogZXhwb3J0Tm9kZUNvbXBhdGlibGVIZWFkZXJzKGhlYWRlcnMpLFxuXHRcdGFnZW50XG5cdH0pO1xufVxuXG4vKipcbiAqIGFib3J0LWVycm9yLmpzXG4gKlxuICogQWJvcnRFcnJvciBpbnRlcmZhY2UgZm9yIGNhbmNlbGxlZCByZXF1ZXN0c1xuICovXG5cbi8qKlxuICogQ3JlYXRlIEFib3J0RXJyb3IgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBtZXNzYWdlICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cbiAqIEByZXR1cm4gIEFib3J0RXJyb3JcbiAqL1xuZnVuY3Rpb24gQWJvcnRFcnJvcihtZXNzYWdlKSB7XG4gIEVycm9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgdGhpcy50eXBlID0gJ2Fib3J0ZWQnO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gIC8vIGhpZGUgY3VzdG9tIGVycm9yIGltcGxlbWVudGF0aW9uIGRldGFpbHMgZnJvbSBlbmQtdXNlcnNcbiAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG59XG5cbkFib3J0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQWJvcnRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYm9ydEVycm9yO1xuQWJvcnRFcnJvci5wcm90b3R5cGUubmFtZSA9ICdBYm9ydEVycm9yJztcblxuY29uc3QgVVJMJDEgPSBVcmwuVVJMIHx8IHdoYXR3Z1VybC5VUkw7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlBhc3NUaHJvdWdoXCIsIFwicmVzb2x2ZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoJDEgPSBTdHJlYW0uUGFzc1Rocm91Z2g7XG5cbmNvbnN0IGlzRG9tYWluT3JTdWJkb21haW4gPSBmdW5jdGlvbiBpc0RvbWFpbk9yU3ViZG9tYWluKGRlc3RpbmF0aW9uLCBvcmlnaW5hbCkge1xuXHRjb25zdCBvcmlnID0gbmV3IFVSTCQxKG9yaWdpbmFsKS5ob3N0bmFtZTtcblx0Y29uc3QgZGVzdCA9IG5ldyBVUkwkMShkZXN0aW5hdGlvbikuaG9zdG5hbWU7XG5cblx0cmV0dXJuIG9yaWcgPT09IGRlc3QgfHwgb3JpZ1tvcmlnLmxlbmd0aCAtIGRlc3QubGVuZ3RoIC0gMV0gPT09ICcuJyAmJiBvcmlnLmVuZHNXaXRoKGRlc3QpO1xufTtcblxuLyoqXG4gKiBGZXRjaCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgIHVybCAgIEFic29sdXRlIHVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgICBvcHRzICBGZXRjaCBvcHRpb25zXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cykge1xuXG5cdC8vIGFsbG93IGN1c3RvbSBwcm9taXNlXG5cdGlmICghZmV0Y2guUHJvbWlzZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbmF0aXZlIHByb21pc2UgbWlzc2luZywgc2V0IGZldGNoLlByb21pc2UgdG8geW91ciBmYXZvcml0ZSBhbHRlcm5hdGl2ZScpO1xuXHR9XG5cblx0Qm9keS5Qcm9taXNlID0gZmV0Y2guUHJvbWlzZTtcblxuXHQvLyB3cmFwIGh0dHAucmVxdWVzdCBpbnRvIGZldGNoXG5cdHJldHVybiBuZXcgZmV0Y2guUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gYnVpbGQgcmVxdWVzdCBvYmplY3Rcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBvcHRzKTtcblx0XHRjb25zdCBvcHRpb25zID0gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpO1xuXG5cdFx0Y29uc3Qgc2VuZCA9IChvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdDtcblx0XHRjb25zdCBzaWduYWwgPSByZXF1ZXN0LnNpZ25hbDtcblxuXHRcdGxldCByZXNwb25zZSA9IG51bGw7XG5cblx0XHRjb25zdCBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuXHRcdFx0bGV0IGVycm9yID0gbmV3IEFib3J0RXJyb3IoJ1RoZSB1c2VyIGFib3J0ZWQgYSByZXF1ZXN0LicpO1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdGlmIChyZXF1ZXN0LmJvZHkgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdHJlcXVlc3QuYm9keS5kZXN0cm95KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHJldHVybjtcblx0XHRcdHJlc3BvbnNlLmJvZHkuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cdFx0fTtcblxuXHRcdGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWJvcnRBbmRGaW5hbGl6ZSA9IGZ1bmN0aW9uIGFib3J0QW5kRmluYWxpemUoKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9O1xuXG5cdFx0Ly8gc2VuZCByZXF1ZXN0XG5cdFx0Y29uc3QgcmVxID0gc2VuZChvcHRpb25zKTtcblx0XHRsZXQgcmVxVGltZW91dDtcblxuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXHRcdFx0cmVxLmFib3J0KCk7XG5cdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRpZiAocmVxdWVzdC50aW1lb3V0KSB7XG5cdFx0XHRyZXEub25jZSgnc29ja2V0JywgZnVuY3Rpb24gKHNvY2tldCkge1xuXHRcdFx0XHRyZXFUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBuZXR3b3JrIHRpbWVvdXQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ3JlcXVlc3QtdGltZW91dCcpKTtcblx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHR9LCByZXF1ZXN0LnRpbWVvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmVxLm9uKCdyZXNwb25zZScsIGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblxuXHRcdFx0Y29uc3QgaGVhZGVycyA9IGNyZWF0ZUhlYWRlcnNMZW5pZW50KHJlcy5oZWFkZXJzKTtcblxuXHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDVcblx0XHRcdGlmIChmZXRjaC5pc1JlZGlyZWN0KHJlcy5zdGF0dXNDb2RlKSkge1xuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4yXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gaGVhZGVycy5nZXQoJ0xvY2F0aW9uJyk7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuM1xuXHRcdFx0XHRsZXQgbG9jYXRpb25VUkwgPSBudWxsO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGxvY2F0aW9uVVJMID0gbG9jYXRpb24gPT09IG51bGwgPyBudWxsIDogbmV3IFVSTCQxKGxvY2F0aW9uLCByZXF1ZXN0LnVybCkudG9TdHJpbmcoKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gZXJyb3IgaGVyZSBjYW4gb25seSBiZSBpbnZhbGlkIFVSTCBpbiBMb2NhdGlvbjogaGVhZGVyXG5cdFx0XHRcdFx0Ly8gZG8gbm90IHRocm93IHdoZW4gb3B0aW9ucy5yZWRpcmVjdCA9PSBtYW51YWxcblx0XHRcdFx0XHQvLyBsZXQgdGhlIHVzZXIgZXh0cmFjdCB0aGUgZXJyb3JuZW91cyByZWRpcmVjdCBVUkxcblx0XHRcdFx0XHRpZiAocmVxdWVzdC5yZWRpcmVjdCAhPT0gJ21hbnVhbCcpIHtcblx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgdXJpIHJlcXVlc3RlZCByZXNwb25kcyB3aXRoIGFuIGludmFsaWQgcmVkaXJlY3QgVVJMOiAke2xvY2F0aW9ufWAsICdpbnZhbGlkLXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS41XG5cdFx0XHRcdHN3aXRjaCAocmVxdWVzdC5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgdXJpIHJlcXVlc3RlZCByZXNwb25kcyB3aXRoIGEgcmVkaXJlY3QsIHJlZGlyZWN0IG1vZGUgaXMgc2V0IHRvIGVycm9yOiAke3JlcXVlc3QudXJsfWAsICduby1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0Y2FzZSAnbWFudWFsJzpcblx0XHRcdFx0XHRcdC8vIG5vZGUtZmV0Y2gtc3BlY2lmaWMgc3RlcDogbWFrZSBtYW51YWwgcmVkaXJlY3QgYSBiaXQgZWFzaWVyIHRvIHVzZSBieSBzZXR0aW5nIHRoZSBMb2NhdGlvbiBoZWFkZXIgdmFsdWUgdG8gdGhlIHJlc29sdmVkIFVSTC5cblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHQvLyBoYW5kbGUgY29ycnVwdGVkIGhlYWRlclxuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIGxvY2F0aW9uVVJMKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaXN0YW5idWwgaWdub3JlIG5leHQ6IG5vZGVqcyBzZXJ2ZXIgcHJldmVudCBpbnZhbGlkIHJlc3BvbnNlIGhlYWRlcnMsIHdlIGNhbid0IHRlc3QgdGhpcyB0aHJvdWdoIG5vcm1hbCByZXF1ZXN0XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2ZvbGxvdyc6XG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNVxuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3QuY291bnRlciA+PSByZXF1ZXN0LmZvbGxvdykge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG1heGltdW0gcmVkaXJlY3QgcmVhY2hlZCBhdDogJHtyZXF1ZXN0LnVybH1gLCAnbWF4LXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA2IChjb3VudGVyIGluY3JlbWVudClcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIG5ldyBSZXF1ZXN0IG9iamVjdC5cblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RPcHRzID0ge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuXHRcdFx0XHRcdFx0XHRmb2xsb3c6IHJlcXVlc3QuZm9sbG93LFxuXHRcdFx0XHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIgKyAxLFxuXHRcdFx0XHRcdFx0XHRhZ2VudDogcmVxdWVzdC5hZ2VudCxcblx0XHRcdFx0XHRcdFx0Y29tcHJlc3M6IHJlcXVlc3QuY29tcHJlc3MsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IHJlcXVlc3QuYm9keSxcblx0XHRcdFx0XHRcdFx0c2lnbmFsOiByZXF1ZXN0LnNpZ25hbCxcblx0XHRcdFx0XHRcdFx0dGltZW91dDogcmVxdWVzdC50aW1lb3V0LFxuXHRcdFx0XHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemVcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdGlmICghaXNEb21haW5PclN1YmRvbWFpbihyZXF1ZXN0LnVybCwgbG9jYXRpb25VUkwpKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbmFtZSBvZiBbJ2F1dGhvcml6YXRpb24nLCAnd3d3LWF1dGhlbnRpY2F0ZScsICdjb29raWUnLCAnY29va2llMiddKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMuaGVhZGVycy5kZWxldGUobmFtZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDlcblx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSAhPT0gMzAzICYmIHJlcXVlc3QuYm9keSAmJiBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcignQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW0nLCAndW5zdXBwb3J0ZWQtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDExXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT09IDMwMyB8fCAocmVzLnN0YXR1c0NvZGUgPT09IDMwMSB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzAyKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5ib2R5ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5oZWFkZXJzLmRlbGV0ZSgnY29udGVudC1sZW5ndGgnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDE1XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZldGNoKG5ldyBSZXF1ZXN0KGxvY2F0aW9uVVJMLCByZXF1ZXN0T3B0cykpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJlcGFyZSByZXNwb25zZVxuXHRcdFx0cmVzLm9uY2UoJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHNpZ25hbCkgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHR9KTtcblx0XHRcdGxldCBib2R5ID0gcmVzLnBpcGUobmV3IFBhc3NUaHJvdWdoJDEoKSk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlX29wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogcmVxdWVzdC51cmwsXG5cdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxuXHRcdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxuXHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemUsXG5cdFx0XHRcdHRpbWVvdXQ6IHJlcXVlc3QudGltZW91dCxcblx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuM1xuXHRcdFx0Y29uc3QgY29kaW5ncyA9IGhlYWRlcnMuZ2V0KCdDb250ZW50LUVuY29kaW5nJyk7XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS40OiBoYW5kbGUgY29udGVudCBjb2RpbmdzXG5cblx0XHRcdC8vIGluIGZvbGxvd2luZyBzY2VuYXJpb3Mgd2UgaWdub3JlIGNvbXByZXNzaW9uIHN1cHBvcnRcblx0XHRcdC8vIDEuIGNvbXByZXNzaW9uIHN1cHBvcnQgaXMgZGlzYWJsZWRcblx0XHRcdC8vIDIuIEhFQUQgcmVxdWVzdFxuXHRcdFx0Ly8gMy4gbm8gQ29udGVudC1FbmNvZGluZyBoZWFkZXJcblx0XHRcdC8vIDQuIG5vIGNvbnRlbnQgcmVzcG9uc2UgKDIwNClcblx0XHRcdC8vIDUuIGNvbnRlbnQgbm90IG1vZGlmaWVkIHJlc3BvbnNlICgzMDQpXG5cdFx0XHRpZiAoIXJlcXVlc3QuY29tcHJlc3MgfHwgcmVxdWVzdC5tZXRob2QgPT09ICdIRUFEJyB8fCBjb2RpbmdzID09PSBudWxsIHx8IHJlcy5zdGF0dXNDb2RlID09PSAyMDQgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwNCkge1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yIE5vZGUgdjYrXG5cdFx0XHQvLyBCZSBsZXNzIHN0cmljdCB3aGVuIGRlY29kaW5nIGNvbXByZXNzZWQgcmVzcG9uc2VzLCBzaW5jZSBzb21ldGltZXNcblx0XHRcdC8vIHNlcnZlcnMgc2VuZCBzbGlnaHRseSBpbnZhbGlkIHJlc3BvbnNlcyB0aGF0IGFyZSBzdGlsbCBhY2NlcHRlZFxuXHRcdFx0Ly8gYnkgY29tbW9uIGJyb3dzZXJzLlxuXHRcdFx0Ly8gQWx3YXlzIHVzaW5nIFpfU1lOQ19GTFVTSCBpcyB3aGF0IGNVUkwgZG9lcy5cblx0XHRcdGNvbnN0IHpsaWJPcHRpb25zID0ge1xuXHRcdFx0XHRmbHVzaDogemxpYi5aX1NZTkNfRkxVU0gsXG5cdFx0XHRcdGZpbmlzaEZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZm9yIGd6aXBcblx0XHRcdGlmIChjb2RpbmdzID09ICdnemlwJyB8fCBjb2RpbmdzID09ICd4LWd6aXAnKSB7XG5cdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVHdW56aXAoemxpYk9wdGlvbnMpKTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciBkZWZsYXRlXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnZGVmbGF0ZScgfHwgY29kaW5ncyA9PSAneC1kZWZsYXRlJykge1xuXHRcdFx0XHQvLyBoYW5kbGUgdGhlIGluZmFtb3VzIHJhdyBkZWZsYXRlIHJlc3BvbnNlIGZyb20gb2xkIHNlcnZlcnNcblx0XHRcdFx0Ly8gYSBoYWNrIGZvciBvbGQgSUlTIGFuZCBBcGFjaGUgc2VydmVyc1xuXHRcdFx0XHRjb25zdCByYXcgPSByZXMucGlwZShuZXcgUGFzc1Rocm91Z2gkMSgpKTtcblx0XHRcdFx0cmF3Lm9uY2UoJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcblx0XHRcdFx0XHQvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzUxOTgyOFxuXHRcdFx0XHRcdGlmICgoY2h1bmtbMF0gJiAweDBGKSA9PT0gMHgwOCkge1xuXHRcdFx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUluZmxhdGUoKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVJbmZsYXRlUmF3KCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIGJyXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnYnInICYmIHR5cGVvZiB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MoKSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBvdGhlcndpc2UsIHVzZSByZXNwb25zZSBhcy1pc1xuXHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KTtcblxuXHRcdHdyaXRlVG9TdHJlYW0ocmVxLCByZXF1ZXN0KTtcblx0fSk7XG59XG4vKipcbiAqIFJlZGlyZWN0IGNvZGUgbWF0Y2hpbmdcbiAqXG4gKiBAcGFyYW0gICBOdW1iZXIgICBjb2RlICBTdGF0dXMgY29kZVxuICogQHJldHVybiAgQm9vbGVhblxuICovXG5mZXRjaC5pc1JlZGlyZWN0ID0gZnVuY3Rpb24gKGNvZGUpIHtcblx0cmV0dXJuIGNvZGUgPT09IDMwMSB8fCBjb2RlID09PSAzMDIgfHwgY29kZSA9PT0gMzAzIHx8IGNvZGUgPT09IDMwNyB8fCBjb2RlID09PSAzMDg7XG59O1xuXG4vLyBleHBvc2UgUHJvbWlzZVxuZmV0Y2guUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmZXRjaDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHM7XG5leHBvcnRzLkhlYWRlcnMgPSBIZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbmV4cG9ydHMuRmV0Y2hFcnJvciA9IEZldGNoRXJyb3I7XG4iLCAiY29uc3Qgbm9kZUZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXG5jb25zdCByZWFsRmV0Y2ggPSBub2RlRmV0Y2guZGVmYXVsdCB8fCBub2RlRmV0Y2hcblxuY29uc3QgZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIC8vIFN1cHBvcnQgc2NoZW1hbGVzcyBVUklzIG9uIHRoZSBzZXJ2ZXIgZm9yIHBhcml0eSB3aXRoIHRoZSBicm93c2VyLlxuICAvLyBFeDogLy9naXRodWIuY29tLyAtPiBodHRwczovL2dpdGh1Yi5jb20vXG4gIGlmICgvXlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gJ2h0dHBzOicgKyB1cmxcbiAgfVxuICByZXR1cm4gcmVhbEZldGNoLmNhbGwodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG5mZXRjaC5wb255ZmlsbCA9IHRydWVcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmV0Y2hcbmV4cG9ydHMuZmV0Y2ggPSBmZXRjaFxuZXhwb3J0cy5IZWFkZXJzID0gbm9kZUZldGNoLkhlYWRlcnNcbmV4cG9ydHMuUmVxdWVzdCA9IG5vZGVGZXRjaC5SZXF1ZXN0XG5leHBvcnRzLlJlc3BvbnNlID0gbm9kZUZldGNoLlJlc3BvbnNlXG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBjb25zdW1lcnMgd2l0aG91dCBlc01vZHVsZUludGVyb3AuXG5leHBvcnRzLmRlZmF1bHQgPSBmZXRjaFxuIiwgImltcG9ydCB7IGNsb3NlTWFpbldpbmRvdywgc2hvd0hVRCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCBCb25qb3VyLCB7IFJlbW90ZVNlcnZpY2UgfSBmcm9tIFwiYm9uam91clwiO1xuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcblxuY2xhc3MgTGlnaHQge1xuICBwcml2YXRlIGFkZHJlc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBwb3J0OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFJlbW90ZVNlcnZpY2UpIHtcbiAgICB0aGlzLmFkZHJlc3MgPSBzZXJ2aWNlLnJlZmVyZXIuYWRkcmVzcztcbiAgICB0aGlzLnBvcnQgPSBzZXJ2aWNlLnBvcnQ7XG4gIH1cbiAgcHVibGljIGFzeW5jIHRvZ2dsZSgpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovLyR7dGhpcy5hZGRyZXNzfToke3RoaXMucG9ydH0vZWxnYXRvL2xpZ2h0c2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgbmV3U3RhdGUgPSAhZGF0YS5saWdodHNbMF0ub247XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBsaWdodHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbjogbmV3U3RhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyT2ZMaWdodHM6IDEsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxufVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbDxUPihcbi8vICAgcHJvbWlzZTogUHJvbWlzZTxUPiB8ICgoKSA9PiBQcm9taXNlPFQ+KSxcbi8vICAgb3B0aW9ucz86IHsgdGltZW91dD86IG51bWJlcjsgdGltZW91dE1lc3NhZ2U6IHN0cmluZyB9XG4vLyApOiBQcm9taXNlPFQ+IHtcbi8vICAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlPG5ldmVyPigoXywgcmVqZWN0KSA9PiB7XG4vLyAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4vLyAgICAgICByZWplY3QobmV3IEVycm9yKG9wdGlvbnM/LnRpbWVvdXRNZXNzYWdlID8/IFwiVGltZWQgb3V0XCIpKTtcbi8vICAgICB9LCBvcHRpb25zPy50aW1lb3V0ID8/IDMwMDApO1xuLy8gICB9KTtcbi8vXG4vLyAgIGNvbnN0IHVud3JhcHBlZFByb21pc2UgPSBwcm9taXNlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBwcm9taXNlKCkgOiBwcm9taXNlO1xuLy8gICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoW3Vud3JhcHBlZFByb21pc2UsIHRpbWVvdXRdKTtcbi8vIH1cbmFzeW5jIGZ1bmN0aW9uIGZpbmQoKSB7XG4gIGNvbnN0IGJvbmpvdXIgPSBCb25qb3VyKCk7XG4gIGNvbnN0IGxpZ2h0czogQXJyYXk8TGlnaHQ+ID0gW107XG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jICgpID0+XG4gICAgbmV3IFByb21pc2U8TGlnaHQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgYm9uam91ci5maW5kKHsgdHlwZTogXCJlbGdcIiB9LCAoc2VydmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IExpZ2h0KHNlcnZpY2UpO1xuICAgICAgICAgIGxpZ2h0cy5wdXNoKGxpZ2h0KVxuICAgICAgICAgIHJlc29sdmUobGlnaHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuICBhd2FpdCBzZWFyY2goKVxuICBib25qb3VyLmRlc3Ryb3koKTtcbiAgcmV0dXJuIGxpZ2h0cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzY292ZXIoKSB7XG4gIGF3YWl0IGNsb3NlTWFpbldpbmRvdyh7IGNsZWFyUm9vdFNlYXJjaDogdHJ1ZSB9KTtcbiAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQWxsKCkge1xuICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPFJlc3BvbnNlPj4gPSBbXVxuICAgIGNvbnN0IGxpZ2h0cyA9IGF3YWl0IGZpbmQoKTtcbiAgICBsaWdodHMuZm9yRWFjaChsID0+IHByb21pc2VzLnB1c2gobC50b2dnbGUoKSkpXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICB9XG4gIGF3YWl0IHRvZ2dsZUFsbCgpXG4gIGF3YWl0IHNob3dIVUQoXCJGb3VuZFwiKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxnRkFBQUEsU0FBQTtBQUFBO0FBRUEsUUFBSSxJQUFJO0FBRVIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsR0FBRyxHQUFHO0FBQy9CLFVBQUksRUFBRSxRQUFRLEdBQUcsUUFBUTtBQUN6QixVQUFJLEVBQUUsUUFBUSxHQUFHLFFBQVE7QUFDekIsYUFBTyxNQUFNO0FBQUEsSUFDZjtBQUVBLGFBQVMsU0FBVSxHQUFHO0FBQ3BCLGFBQU8sRUFBRSxZQUFZO0FBQUEsSUFDdkI7QUFBQTtBQUFBOzs7QUNaQTtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFLQSxJQUFBQSxRQUFPLFVBQVU7QUFDakIsSUFBQUEsUUFBTyxRQUFRLE9BQU87QUFDdEIsSUFBQUEsUUFBTyxRQUFRLFFBQVE7QUFDdkIsSUFBQUEsUUFBTyxRQUFRLFlBQVk7QUFRM0IsYUFBUyxRQUFTLE9BQU87QUFDdkIsVUFBSSxDQUFDLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDekIsY0FBTSxJQUFJLFVBQVUsK0JBQStCO0FBQUEsTUFDckQ7QUFFQSxhQUFPLFlBQVksS0FBSztBQUFBLElBQzFCO0FBUUEsYUFBUyxZQUFhLE9BQU87QUFDM0IsYUFBTyxZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQUEsSUFDOUI7QUFTQSxhQUFTLGFBQWMsT0FBTyxPQUFPO0FBQ25DLFVBQUksQ0FBQyxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3pCLGNBQU0sSUFBSSxVQUFVLCtCQUErQjtBQUFBLE1BQ3JEO0FBRUEsYUFBTyxpQkFBaUIsT0FBTyxLQUFLO0FBQUEsSUFDdEM7QUFTQSxhQUFTLGlCQUFrQixPQUFPLE9B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QSxJQUNIO0FBQUE7QUFBQTs7O0FDNUxBO0FBQUE7QUFBQSxZQUFRLFdBQVcsU0FBVSxNQUFNO0FBQ2pDLGNBQVE7QUFBQSxhQUNEO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUssaUJBQU87QUFBQSxhQUNaO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQUssaUJBQU87QUFBQSxhQUNaO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUssaUJBQU87QUFBQSxhQUNaO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUssaUJBQU87QUFBQSxhQUNaO0FBQUssaUJBQU87QUFBQSxhQUNaO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUssaUJBQU87QUFBQTtBQUVuQixhQUFPLGFBQWE7QUFBQSxJQUN0QjtBQUVBLFlBQVEsU0FBUyxTQUFVLE1BQU07QUFDL0IsY0FBUSxLQUFLLFlBQVk7QUFBQSxhQUNsQjtBQUFLLGlCQUFPO0FBQUEsYUFDWjtBQUFRLGlCQUFPO0FBQUEsYUFDZjtBQUFRLGlCQUFPO0FBQUEsYUFDZjtBQUFTLGlCQUFPO0FBQUEsYUFDaEI7QUFBTyxpQkFBTztBQUFBLGFBQ2Q7QUFBTyxpQkFBTztBQUFBLGFBQ2Q7QUFBVyxpQkFBTztBQUFBLGFBQ2xCO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQVEsaUJBQU87QUFBQSxhQUNmO0FBQVMsaUJBQU87QUFBQSxhQUNoQjtBQUFTLGlCQUFPO0FBQUEsYUFDaEI7QUFBTyxpQkFBTztBQUFBLGFBQ2Q7QUFBUyxpQkFBTztBQUFBLGFBQ2hCO0FBQVUsaUJBQU87QUFBQSxhQUNqQjtBQUFNLGlCQUFPO0FBQUEsYUFDYjtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFTLGlCQUFPO0FBQUEsYUFDaEI7QUFBWSxpQkFBTztBQUFBLGFBQ25CO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQU0saUJBQU87QUFBQSxhQUNiO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQU0saUJBQU87QUFBQSxhQUNiO0FBQVMsaUJBQU87QUFBQSxhQUNoQjtBQUFNLGlCQUFPO0FBQUEsYUFDYjtBQUFRLGlCQUFPO0FBQUEsYUFDZjtBQUFTLGlCQUFPO0FBQUEsYUFDaEI7QUFBYyxpQkFBTztBQUFBLGFBQ3JCO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQVMsaUJBQU87QUFBQSxhQUNoQjtBQUFNLGlCQUFPO0FBQUEsYUFDYjtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFTLGlCQUFPO0FBQUEsYUFDaEI7QUFBTSxpQkFBTztBQUFBLGFBQ2I7QUFBUSxpQkFBTztBQUFBLGFBQ2Y7QUFBUSxpQkFBTztBQUFBLGFBQ2Y7QUFBUSxpQkFBTztBQUFBLGFBQ2Y7QUFBTyxpQkFBTztBQUFBLGFBQ2Q7QUFBUSxpQkFBTztBQUFBLGFBQ2Y7QUFBUSxpQkFBTztBQUFBLGFBQ2Y7QUFBTyxpQkFBTztBQUFBLGFBQ2Q7QUFBTyxpQkFBTztBQUFBLGFBQ2Q7QUFBSyxpQkFBTztBQUFBO0FBRW5CLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDbkdBO0FBQUE7QUFLQSxZQUFRLFdBQVcsU0FBVSxPQUFPO0FBQ2xDLGNBQVE7QUFBQSxhQUNEO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUcsaUJBQU87QUFBQSxhQUNWO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQSxhQUNYO0FBQUksaUJBQU87QUFBQTtBQUVsQixhQUFPLFdBQVc7QUFBQSxJQUNwQjtBQUVBLFlBQVEsVUFBVSxTQUFVLE1BQU07QUFDaEMsY0FBUSxLQUFLLFlBQVk7QUFBQSxhQUNsQjtBQUFXLGlCQUFPO0FBQUEsYUFDbEI7QUFBVyxpQkFBTztBQUFBLGFBQ2xCO0FBQVksaUJBQU87QUFBQSxhQUNuQjtBQUFZLGlCQUFPO0FBQUEsYUFDbkI7QUFBVSxpQkFBTztBQUFBLGFBQ2pCO0FBQVcsaUJBQU87QUFBQSxhQUNsQjtBQUFZLGlCQUFPO0FBQUEsYUFDbkI7QUFBVyxpQkFBTztBQUFBLGFBQ2xCO0FBQVcsaUJBQU87QUFBQSxhQUNsQjtBQUFXLGlCQUFPO0FBQUEsYUFDbEI7QUFBVyxpQkFBTztBQUFBLGFBQ2xCO0FBQVksaUJBQU87QUFBQSxhQUNuQjtBQUFZLGlCQUFPO0FBQUEsYUFDbkI7QUFBWSxpQkFBTztBQUFBLGFBQ25CO0FBQVksaUJBQU87QUFBQSxhQUNuQjtBQUFZLGlCQUFPO0FBQUE7QUFFMUIsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUMvQ0E7QUFBQTtBQUtBLFlBQVEsV0FBVyxTQUFVLFFBQVE7QUFDbkMsY0FBUTtBQUFBLGFBQ0Q7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBRyxpQkFBTztBQUFBLGFBQ1Y7QUFBSSxpQkFBTztBQUFBLGFBQ1g7QUFBSSxpQkFBTztBQUFBLGFBQ1g7QUFBSSxpQkFBTztBQUFBLGFBQ1g7QUFBSSxpQkFBTztBQUFBLGFBQ1g7QUFBSSxpQkFBTztBQUFBLGFBQ1g7QUFBSSxpQkFBTztBQUFBO0FBRWxCLGFBQU8sWUFBWTtBQUFBLElBQ3JCO0FBRUEsWUFBUSxXQUFXLFNBQVUsTUFBTTtBQUNqQyxjQUFRLEtBQUssWUFBWTtBQUFBLGFBQ2xCO0FBQVMsaUJBQU87QUFBQSxhQUNoQjtBQUFVLGlCQUFPO0FBQUEsYUFDakI7QUFBVSxpQkFBTztBQUFBLGFBQ2pCO0FBQVksaUJBQU87QUFBQSxhQUNuQjtBQUFVLGlCQUFPO0FBQUEsYUFDakI7QUFBVSxpQkFBTztBQUFBLGFBQ2pCO0FBQVksaUJBQU87QUFBQSxhQUNuQjtBQUFZLGlCQUFPO0FBQUEsYUFDbkI7QUFBWSxpQkFBTztBQUFBLGFBQ25CO0FBQVksaUJBQU87QUFBQSxhQUNuQjtBQUFhLGlCQUFPO0FBQUEsYUFDcEI7QUFBYSxpQkFBTztBQUFBLGFBQ3BCO0FBQWEsaUJBQU87QUFBQSxhQUNwQjtBQUFhLGlCQUFPO0FBQUEsYUFDcEI7QUFBYSxpQkFBTztBQUFBLGFBQ3BCO0FBQWEsaUJBQU87QUFBQTtBQUUzQixhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQy9DQTtBQUFBO0FBQUEsUUFBSSxLQUFLO0FBQ1QsUUFBSSxFQUFFLFFBQUFDLFFBQU8sSUFBSSxRQUFRO0FBQ3pCLFFBQUksS0FBSyxRQUFRO0FBRWpCLE9BQUcsV0FBVyxTQUFVQyxLQUFJLE1BQU0sUUFBUTtBQUN4QyxlQUFTLENBQUMsQ0FBQztBQUVYLFVBQUk7QUFFSixVQUFJLEtBQUssV0FBV0EsR0FBRSxHQUFHO0FBQ3ZCLGlCQUFTLFFBQVEsSUFBSUQsUUFBTyxTQUFTLENBQUM7QUFDdEMsUUFBQUMsSUFBRyxNQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztBQUM1QixpQkFBTyxZQUFZLFNBQVMsTUFBTSxFQUFFLElBQUk7QUFBQSxRQUMxQyxDQUFDO0FBQUEsTUFDSCxXQUFXLEtBQUssV0FBV0EsR0FBRSxHQUFHO0FBQzlCLFlBQUksV0FBV0EsSUFBRyxNQUFNLEtBQUssQ0FBQztBQUU5QixZQUFJO0FBQ0osYUFBSyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUNwQyxjQUFJLE9BQU8sS0FBSyxXQUFXLFNBQVMsRUFBRTtBQUN0QyxjQUFJO0FBRUosY0FBSSxNQUFNO0FBQ1IsdUJBQVcsS0FBSyxTQUFTLFNBQVMsRUFBRTtBQUNwQyxxQkFBUyxLQUFLLFNBQVMsTUFBTSxHQUFHLENBQUMsRUFBRSxTQUFTLEtBQUs7QUFBQSxVQUNuRDtBQUVBLGNBQUksWUFBWSxFQUFFLElBQUksR0FBRztBQUN2QixxQkFBUyxPQUFPLEdBQUcsR0FBRyxTQUFTLE1BQU0sR0FBRyxDQUFDLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxVQUM1RDtBQUFBLFFBQ0Y7QUFFQSxZQUFJLFNBQVMsT0FBTyxJQUFJO0FBQ3RCLGlCQUFPLFNBQVMsU0FBUztBQUFHLHFCQUFTLFFBQVEsR0FBRztBQUFBLFFBQ2xELFdBQVcsU0FBUyxTQUFTLFNBQVMsT0FBTyxJQUFJO0FBQy9DLGlCQUFPLFNBQVMsU0FBUztBQUFHLHFCQUFTLEtBQUssR0FBRztBQUFBLFFBQy9DLFdBQVcsU0FBUyxTQUFTLEdBQUc7QUFDOUIsZUFBSyxJQUFJLEdBQUcsSUFBSSxTQUFTLFVBQVUsU0FBUyxPQUFPLElBQUk7QUFBSTtBQUMzRCxjQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDaEIsZUFBSyxJQUFJLElBQUksU0FBUyxRQUFRLElBQUksR0FBRyxLQUFLO0FBQ3hDLGlCQUFLLEtBQUssR0FBRztBQUFBLFVBQ2Y7QUFDQSxtQkFBUyxPQUFPLE1BQU0sVUFBVSxJQUFJO0FBQUEsUUFDdEM7QUFFQSxpQkFBUyxRQUFRLElBQUlELFFBQU8sU0FBUyxFQUFFO0FBQ3ZDLGFBQUssSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDcEMsY0FBSSxPQUFPLFNBQVMsU0FBUyxJQUFJLEVBQUU7QUFDbkMsaUJBQU8sWUFBYSxRQUFRLElBQUs7QUFDakMsaUJBQU8sWUFBWSxPQUFPO0FBQUEsUUFDNUI7QUFBQSxNQUNGO0FBRUEsVUFBSSxDQUFDLFFBQVE7QUFDWCxjQUFNLE1BQU0sdUJBQXVCQyxLQUFJO0FBQUEsTUFDekM7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLE9BQUcsV0FBVyxTQUFVLE1BQU0sUUFBUSxRQUFRO0FBQzVDLGVBQVMsQ0FBQyxDQUFDO0FBQ1gsZUFBUyxVQUFXLEtBQUssU0FBUztBQUVsQyxVQUFJLFNBQVMsQ0FBQztBQUNkLFVBQUk7QUFDSixVQUFJLFdBQVcsR0FBRztBQUVoQixhQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsS0FBSztBQUMzQixpQkFBTyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQUEsUUFDOUI7QUFDQSxpQkFBUyxPQUFPLEtBQUssR0FBRztBQUFBLE1BQzFCLFdBQVcsV0FBVyxJQUFJO0FBRXhCLGFBQUssSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLLEdBQUc7QUFDOUIsaUJBQU8sS0FBSyxLQUFLLGFBQWEsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFBQSxRQUN4RDtBQUNBLGlCQUFTLE9BQU8sS0FBSyxHQUFHO0FBQ3hCLGlCQUFTLE9BQU8sUUFBUSxzQkFBc0IsUUFBUTtBQUN0RCxpQkFBUyxPQUFPLFFBQVEsVUFBVSxJQUFJO0FBQUEsTUFDeEM7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQUksWUFBWTtBQUNoQixRQUFJLFlBQVk7QUFFaEIsT0FBRyxhQUFhLFNBQVVBLEtBQUk7QUFDNUIsYUFBTyxVQUFVLEtBQUtBLEdBQUU7QUFBQSxJQUMxQjtBQUVBLE9BQUcsYUFBYSxTQUFVQSxLQUFJO0FBQzVCLGFBQU8sVUFBVSxLQUFLQSxHQUFFO0FBQUEsSUFDMUI7QUFFQSxhQUFTLGlCQUFpQixRQUFRO0FBQ2hDLFVBQUksV0FBVyxHQUFHO0FBQ2hCLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSxXQUFXLEdBQUc7QUFDaEIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPLFNBQVMsT0FBTyxZQUFZLElBQUk7QUFBQSxJQUN6QztBQUVBLE9BQUcsZ0JBQWdCLFNBQVUsV0FBVyxRQUFRO0FBQzlDLFVBQUksWUFBWSxJQUFJO0FBQ2xCLGlCQUFTO0FBQUEsTUFDWCxPQUFPO0FBQ0wsaUJBQVMsaUJBQWlCLE1BQU07QUFBQSxNQUNsQztBQUVBLFVBQUksTUFBTTtBQUNWLFVBQUksV0FBVyxRQUFRO0FBQ3JCLGNBQU07QUFBQSxNQUNSO0FBQ0EsVUFBSSxPQUFPLElBQUlELFFBQU8sR0FBRztBQUV6QixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQzNDLFlBQUksT0FBTztBQUNYLFlBQUksWUFBWSxHQUFHO0FBQ2pCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLHFCQUFhO0FBRWIsYUFBSyxLQUFLLEVBQUUsT0FBUSxRQUFRO0FBQUEsTUFDOUI7QUFFQSxhQUFPLEdBQUcsU0FBUyxJQUFJO0FBQUEsSUFDekI7QUFFQSxPQUFHLE9BQU8sU0FBVSxNQUFNLE1BQU07QUFDOUIsYUFBTyxHQUFHLFNBQVMsSUFBSTtBQUN2QixhQUFPLEdBQUcsU0FBUyxJQUFJO0FBRXZCLFVBQUksU0FBUyxJQUFJQSxRQUFPLEtBQUssSUFBSSxLQUFLLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFHMUQsVUFBSTtBQUNKLFVBQUksS0FBSyxXQUFXLEtBQUssUUFBUTtBQUMvQixhQUFLLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ2hDLGlCQUFPLEtBQUssS0FBSyxLQUFLLEtBQUs7QUFBQSxRQUM3QjtBQUFBLE1BQ0YsV0FBVyxLQUFLLFdBQVcsR0FBRztBQUc1QixhQUFLLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ2hDLGlCQUFPLEtBQUssS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUs7QUFBQSxRQUMvQztBQUFBLE1BQ0YsT0FBTztBQUVMLGFBQUssSUFBSSxHQUFHLElBQUksT0FBTyxTQUFTLEdBQUcsS0FBSztBQUN0QyxpQkFBTyxLQUFLO0FBQUEsUUFDZDtBQUdBLGVBQU8sTUFBTTtBQUNiLGVBQU8sTUFBTTtBQUNiLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDaEMsaUJBQU8sSUFBSSxNQUFNLEtBQUssS0FBSyxLQUFLLElBQUk7QUFBQSxRQUN0QztBQUNBLGFBQUs7QUFBQSxNQUNQO0FBQ0EsYUFBTyxJQUFJLE9BQU8sUUFBUSxLQUFLO0FBQzdCLGVBQU8sS0FBSztBQUFBLE1BQ2Q7QUFFQSxhQUFPLEdBQUcsU0FBUyxNQUFNO0FBQUEsSUFDM0I7QUFFQSxPQUFHLE9BQU8sU0FBVSxZQUFZO0FBQzlCLFVBQUksWUFBWSxXQUFXLE1BQU0sR0FBRztBQUVwQyxVQUFJLE9BQU8sVUFBVTtBQUNyQixVQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLGNBQU0sSUFBSSxNQUFNLHdCQUF3QixNQUFNO0FBQUEsTUFDaEQ7QUFFQSxVQUFJLE9BQU8sR0FBRyxjQUFjLFNBQVMsVUFBVSxJQUFJLEVBQUUsQ0FBQztBQUV0RCxhQUFPLEdBQUcsS0FBSyxNQUFNLElBQUk7QUFBQSxJQUMzQjtBQUVBLE9BQUcsU0FBUyxTQUFVLE1BQU0sTUFBTTtBQUNoQyxVQUFJLGlCQUFpQixHQUFHLE9BQU8sR0FBRyxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBR2xELFVBQUksYUFBYSxHQUFHLFNBQVMsSUFBSTtBQUNqQyxVQUFJLGFBQWE7QUFFakIsZUFBUyxJQUFJLEdBQUcsSUFBSSxXQUFXLFFBQVEsS0FBSztBQUMxQyxZQUFJLFdBQVcsT0FBTyxLQUFNO0FBQzFCLHdCQUFjO0FBQUEsUUFDaEIsT0FBTztBQUNMLGNBQUksUUFBUSxXQUFXLEtBQUs7QUFDNUIsaUJBQU8sT0FBTztBQUNaLG9CQUFTLFNBQVMsSUFBSztBQUN2QjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLFVBQUksb0JBQW9CLEtBQUssSUFBSSxHQUFHLEtBQUssVUFBVTtBQUVuRCxhQUFPO0FBQUEsUUFDTCxnQkFBZ0IsR0FBRyxTQUFTLGNBQWM7QUFBQSxRQUMxQyxjQUFjLHFCQUFxQixJQUMvQixHQUFHLFNBQVMsY0FBYyxJQUMxQixHQUFHLFNBQVMsaUJBQWlCLENBQUM7QUFBQSxRQUNsQyxhQUFhLHFCQUFxQixJQUM5QixHQUFHLFNBQVMsaUJBQWlCLG9CQUFvQixDQUFDLElBQ2xELEdBQUcsU0FBUyxpQkFBaUIsb0JBQW9CLENBQUM7QUFBQSxRQUN0RCxrQkFBa0IsR0FBRyxTQUFTLGlCQUFpQixvQkFBb0IsQ0FBQztBQUFBLFFBQ3BFLFlBQVk7QUFBQSxRQUNaLGtCQUFrQjtBQUFBLFFBQ2xCLFVBQVUscUJBQXFCLElBQzNCLG9CQUFvQixvQkFBb0I7QUFBQSxRQUM1QyxRQUFRO0FBQUEsUUFDUixTQUFTLE9BQU87QUFDZCxpQkFBTyxtQkFBbUIsR0FBRyxPQUFPLEdBQUcsS0FBSyxPQUFPLElBQUksQ0FBQztBQUFBLFFBQzFEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxPQUFHLGFBQWEsU0FBVSxZQUFZO0FBQ3BDLFVBQUksWUFBWSxXQUFXLE1BQU0sR0FBRztBQUVwQyxVQUFJLE9BQU8sVUFBVTtBQUNyQixVQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLGNBQU0sSUFBSSxNQUFNLHdCQUF3QixNQUFNO0FBQUEsTUFDaEQ7QUFFQSxVQUFJLE9BQU8sR0FBRyxjQUFjLFNBQVMsVUFBVSxJQUFJLEVBQUUsQ0FBQztBQUV0RCxhQUFPLEdBQUcsT0FBTyxNQUFNLElBQUk7QUFBQSxJQUM3QjtBQUVBLE9BQUcsTUFBTSxTQUFVLE1BQU07QUFDdkIsVUFBSSxPQUFPLEdBQUcsU0FBUyxJQUFJO0FBQzNCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsYUFBSyxLQUFLLE1BQU8sS0FBSztBQUFBLE1BQ3hCO0FBQ0EsYUFBTyxHQUFHLFNBQVMsSUFBSTtBQUFBLElBQ3pCO0FBRUEsT0FBRyxLQUFLLFNBQVUsR0FBRyxHQUFHO0FBQ3RCLFVBQUk7QUFFSixVQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ2pCLFVBQUksR0FBRyxTQUFTLENBQUM7QUFHakIsVUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRO0FBQ3pCLGFBQUssSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRztBQUM3QixZQUFFLE1BQU0sRUFBRTtBQUFBLFFBQ1o7QUFDQSxlQUFPLEdBQUcsU0FBUyxDQUFDO0FBQUEsTUFHdEI7QUFDQSxVQUFJLE9BQU87QUFDWCxVQUFJLFFBQVE7QUFDWixVQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVE7QUFDdkIsZUFBTztBQUNQLGdCQUFRO0FBQUEsTUFDVjtBQUVBLFVBQUksU0FBUyxLQUFLLFNBQVMsTUFBTTtBQUNqQyxXQUFLLElBQUksUUFBUSxJQUFJLEtBQUssUUFBUSxFQUFFLEdBQUc7QUFDckMsYUFBSyxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ3ZCO0FBRUEsYUFBTyxHQUFHLFNBQVMsSUFBSTtBQUFBLElBQ3pCO0FBRUEsT0FBRyxVQUFVLFNBQVUsR0FBRyxHQUFHO0FBQzNCLFVBQUk7QUFFSixVQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ2pCLFVBQUksR0FBRyxTQUFTLENBQUM7QUFHakIsVUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRO0FBQ3pCLGFBQUssSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDN0IsY0FBSSxFQUFFLE9BQU8sRUFBRTtBQUFJLG1CQUFPO0FBQUEsUUFDNUI7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUdBLFVBQUksRUFBRSxXQUFXLEdBQUc7QUFDbEIsWUFBSSxJQUFJO0FBQ1IsWUFBSTtBQUNKLFlBQUk7QUFBQSxNQUNOO0FBR0EsV0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDdkIsWUFBSSxFQUFFLE9BQU87QUFBRyxpQkFBTztBQUFBLE1BQ3pCO0FBRUEsVUFBSSxPQUFPLEVBQUUsYUFBYSxFQUFFO0FBQzVCLFVBQUksU0FBUyxLQUFLLFNBQVM7QUFBUSxlQUFPO0FBRTFDLFdBQUssSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQ3RCLFlBQUksRUFBRSxPQUFPLEVBQUUsSUFBSTtBQUFLLGlCQUFPO0FBQUEsTUFDakM7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLE9BQUcsWUFBWSxTQUFVLE1BQU07QUFDN0IsYUFBTyw0REFDSixLQUFLLElBQUksS0FDUCxvREFBb0QsS0FBSyxJQUFJLEtBQzdELG1FQUNBLEtBQUssSUFBSSxLQUNULDZEQUE2RCxLQUFLLElBQUksS0FDdEUsb0RBQW9ELEtBQUssSUFBSSxLQUM3RCxzQkFBc0IsS0FBSyxJQUFJLEtBQy9CLFVBQVUsS0FBSyxJQUFJLEtBQ25CLFFBQVEsS0FBSyxJQUFJLEtBQ2pCLE9BQU8sS0FBSyxJQUFJO0FBQUEsSUFDdkI7QUFFQSxPQUFHLFdBQVcsU0FBVSxNQUFNO0FBQzVCLGFBQU8sQ0FBQyxHQUFHLFVBQVUsSUFBSTtBQUFBLElBQzNCO0FBRUEsT0FBRyxhQUFhLFNBQVUsTUFBTTtBQUM5QixhQUFPLDJEQUNKLEtBQUssSUFBSSxLQUNQLFlBQVksS0FBSyxJQUFJLEtBQ3JCLFFBQVEsS0FBSyxJQUFJLEtBQ2pCLE9BQU8sS0FBSyxJQUFJO0FBQUEsSUFDdkI7QUFFQSxPQUFHLFdBQVcsU0FBVSxRQUFRO0FBSTlCLGVBQVMsaUJBQWlCLE1BQU07QUFFaEMsVUFBSSxXQUFXLFVBQVUsV0FBVyxRQUFRO0FBQzFDLGNBQU0sSUFBSSxNQUFNLDZCQUE2QjtBQUFBLE1BQy9DO0FBRUEsYUFBTyxXQUFXLFNBQVMsY0FBYztBQUFBLElBQzNDO0FBaUJBLE9BQUcsVUFBVSxTQUFVLE1BQU0sUUFBUTtBQUNuQyxVQUFJLGFBQWEsR0FBRyxrQkFBa0I7QUFLdEMsZUFBUyxpQkFBaUIsTUFBTTtBQU1oQyxVQUFJLFFBQVEsU0FBUyxhQUFhLFNBQVMsVUFBVTtBQUNuRCxZQUFJLE1BQU0sV0FBVyxNQUFNLE9BQU8sQ0FBQyxZQUFZO0FBQzdDLGNBQUksYUFBYSxpQkFBaUIsUUFBUSxNQUFNO0FBQ2hELGlCQUFPLGVBQWU7QUFBQSxRQUN4QixDQUFDO0FBQ0QsWUFBSSxJQUFJLFdBQVcsR0FBRztBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxlQUFPLElBQUksR0FBRztBQUFBLE1BQ2hCO0FBRUEsVUFBSSxNQUFNLE9BQU8sS0FBSyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFLN0MsWUFBSSxZQUFZLFdBQVcsS0FBSyxPQUFPLENBQUMsWUFBWTtBQUNsRCxrQkFBUSxTQUFTLGlCQUFpQixRQUFRLE1BQU07QUFDaEQsY0FBSSxRQUFRLFdBQVcsVUFBVSxHQUFHLFdBQVcsUUFBUSxPQUFPLEdBQUc7QUFDL0QsbUJBQU87QUFBQSxVQUNUO0FBQUUsY0FBSSxDQUFDLE1BQU07QUFDWCxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxpQkFBTyxTQUFTLFdBQVcsR0FBRyxVQUFVLFFBQVEsT0FBTyxJQUNuRCxHQUFHLFNBQVMsUUFBUSxPQUFPO0FBQUEsUUFDakMsQ0FBQztBQUVELGVBQU8sVUFBVSxTQUFTLFVBQVUsR0FBRyxVQUFVO0FBQUEsTUFDbkQsQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUVqQixhQUFPLENBQUMsSUFBSSxTQUFTLEdBQUcsU0FBUyxNQUFNLElBQUksSUFBSTtBQUFBLElBQ2pEO0FBRUEsT0FBRyxTQUFTLFNBQVVDLEtBQUk7QUFDeEIsVUFBSSxNQUFNO0FBQ1YsTUFBQUEsSUFBRyxNQUFNLEdBQUcsRUFBRSxRQUFRLENBQUMsVUFBVTtBQUMvQixnQkFBUTtBQUNSLGVBQU8sU0FBUyxLQUFLO0FBQUEsTUFDdkIsQ0FBQztBQUNELGFBQVEsUUFBUTtBQUFBLElBQ2xCO0FBRUEsT0FBRyxXQUFXLFNBQVUsS0FBSztBQUMzQixhQUFRLEdBQUcsUUFBUSxNQUNqQixPQUFPLEtBQUssT0FDWixPQUFPLElBQUksT0FDWCxNQUFNO0FBQUEsSUFDVjtBQUFBO0FBQUE7OztBQzFhQTtBQUFBLG9GQUFBQyxTQUFBO0FBRUEsUUFBSSxTQUFTLFFBQVE7QUFDckIsUUFBSUMsVUFBUyxPQUFPO0FBR3BCLGFBQVMsVUFBVyxLQUFLLEtBQUs7QUFDNUIsZUFBUyxPQUFPLEtBQUs7QUFDbkIsWUFBSSxPQUFPLElBQUk7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFDQSxRQUFJQSxRQUFPLFFBQVFBLFFBQU8sU0FBU0EsUUFBTyxlQUFlQSxRQUFPLGlCQUFpQjtBQUMvRSxNQUFBRCxRQUFPLFVBQVU7QUFBQSxJQUNuQixPQUFPO0FBRUwsZ0JBQVUsUUFBUSxPQUFPO0FBQ3pCLGNBQVEsU0FBUztBQUFBLElBQ25CO0FBRUEsYUFBUyxXQUFZLEtBQUssa0JBQWtCLFFBQVE7QUFDbEQsYUFBT0MsUUFBTyxLQUFLLGtCQUFrQixNQUFNO0FBQUEsSUFDN0M7QUFFQSxlQUFXLFlBQVksT0FBTyxPQUFPQSxRQUFPLFNBQVM7QUFHckQsY0FBVUEsU0FBUSxVQUFVO0FBRTVCLGVBQVcsT0FBTyxTQUFVLEtBQUssa0JBQWtCLFFBQVE7QUFDekQsVUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQixjQUFNLElBQUksVUFBVSwrQkFBK0I7QUFBQSxNQUNyRDtBQUNBLGFBQU9BLFFBQU8sS0FBSyxrQkFBa0IsTUFBTTtBQUFBLElBQzdDO0FBRUEsZUFBVyxRQUFRLFNBQVUsTUFBTSxNQUFNLFVBQVU7QUFDakQsVUFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QixjQUFNLElBQUksVUFBVSwyQkFBMkI7QUFBQSxNQUNqRDtBQUNBLFVBQUksTUFBTUEsUUFBTyxJQUFJO0FBQ3JCLFVBQUksU0FBUyxRQUFXO0FBQ3RCLFlBQUksT0FBTyxhQUFhLFVBQVU7QUFDaEMsY0FBSSxLQUFLLE1BQU0sUUFBUTtBQUFBLFFBQ3pCLE9BQU87QUFDTCxjQUFJLEtBQUssSUFBSTtBQUFBLFFBQ2Y7QUFBQSxNQUNGLE9BQU87QUFDTCxZQUFJLEtBQUssQ0FBQztBQUFBLE1BQ1o7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUVBLGVBQVcsY0FBYyxTQUFVLE1BQU07QUFDdkMsVUFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QixjQUFNLElBQUksVUFBVSwyQkFBMkI7QUFBQSxNQUNqRDtBQUNBLGFBQU9BLFFBQU8sSUFBSTtBQUFBLElBQ3BCO0FBRUEsZUFBVyxrQkFBa0IsU0FBVSxNQUFNO0FBQzNDLFVBQUksT0FBTyxTQUFTLFVBQVU7QUFDNUIsY0FBTSxJQUFJLFVBQVUsMkJBQTJCO0FBQUEsTUFDakQ7QUFDQSxhQUFPLE9BQU8sV0FBVyxJQUFJO0FBQUEsSUFDL0I7QUFBQTtBQUFBOzs7QUNoRUE7QUFBQTtBQUFBLFFBQUksUUFBUTtBQUNaLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUNkLFFBQUksS0FBSztBQUNULFFBQUlDLFVBQVMsc0JBQXVCO0FBRXBDLFFBQUksYUFBYTtBQUNqQixRQUFJLGdCQUFnQixLQUFLO0FBQ3pCLFFBQUksYUFBYSxLQUFLO0FBQ3RCLFFBQUksaUJBQWlCLENBQUM7QUFDdEIsUUFBSSxVQUFVLEtBQUs7QUFDbkIsUUFBSSxjQUFjLENBQUM7QUFFbkIsUUFBSSxPQUFPLFFBQVEsTUFBTSxRQUFRLE9BQU8sQ0FBQztBQUV6QyxTQUFLLFNBQVMsU0FBVSxLQUFLLEtBQUssUUFBUTtBQUN4QyxVQUFJLENBQUM7QUFBSyxjQUFNQSxRQUFPLE1BQU0sS0FBSyxlQUFlLEdBQUcsQ0FBQztBQUNyRCxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUN0QixVQUFJLFlBQVk7QUFHaEIsVUFBSSxJQUFJLElBQUksUUFBUSxhQUFhLEVBQUU7QUFDbkMsVUFBSSxFQUFFLFFBQVE7QUFDWixZQUFJLE9BQU8sRUFBRSxNQUFNLEdBQUc7QUFFdEIsaUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsY0FBSSxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksU0FBUyxDQUFDO0FBQ3ZDLGNBQUksVUFBVTtBQUNkLG9CQUFVLE1BQU07QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFFQSxVQUFJLFlBQVk7QUFFaEIsV0FBSyxPQUFPLFFBQVEsU0FBUztBQUM3QixhQUFPO0FBQUEsSUFDVDtBQUVBLFNBQUssT0FBTyxRQUFRO0FBRXBCLFNBQUssU0FBUyxTQUFVLEtBQUssUUFBUTtBQUNuQyxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLE9BQU8sQ0FBQztBQUNaLFVBQUksWUFBWTtBQUNoQixVQUFJLE1BQU0sSUFBSTtBQUVkLFVBQUksUUFBUSxHQUFHO0FBQ2IsYUFBSyxPQUFPLFFBQVE7QUFDcEIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLE9BQU8sS0FBTTtBQUNmLFlBQUksTUFBTSxLQUFLLE9BQU8sS0FBSyxJQUFJLGFBQWEsU0FBUyxDQUFDLElBQUksS0FBTTtBQUNoRSxhQUFLLE9BQU8sUUFBUTtBQUNwQixlQUFPO0FBQUEsTUFDVDtBQUVBLGFBQU8sS0FBSztBQUNWLFlBQUksT0FBTyxLQUFNO0FBQ2YsZUFBSyxLQUFLLEtBQUssT0FBTyxLQUFLLElBQUksYUFBYSxTQUFTLENBQUMsSUFBSSxLQUFNLENBQUM7QUFDakU7QUFDQTtBQUFBLFFBQ0Y7QUFFQSxhQUFLLEtBQUssSUFBSSxTQUFTLFNBQVMsUUFBUSxTQUFTLEdBQUcsQ0FBQztBQUNyRCxrQkFBVTtBQUNWLGNBQU0sSUFBSTtBQUFBLE1BQ1o7QUFFQSxXQUFLLE9BQU8sUUFBUSxTQUFTO0FBQzdCLGFBQU8sS0FBSyxLQUFLLEdBQUc7QUFBQSxJQUN0QjtBQUVBLFNBQUssT0FBTyxRQUFRO0FBRXBCLFNBQUssaUJBQWlCLFNBQVUsR0FBRztBQUNqQyxVQUFJLE1BQU0sT0FBTyxNQUFNO0FBQU0sZUFBTztBQUNwQyxhQUFPQSxRQUFPLFdBQVcsRUFBRSxRQUFRLGFBQWEsRUFBRSxDQUFDLElBQUk7QUFBQSxJQUN6RDtBQUVBLFFBQUksU0FBUyxDQUFDO0FBRWQsV0FBTyxTQUFTLFNBQVUsR0FBRyxLQUFLLFFBQVE7QUFDeEMsVUFBSSxDQUFDO0FBQUssY0FBTUEsUUFBTyxNQUFNLE9BQU8sZUFBZSxDQUFDLENBQUM7QUFDckQsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxNQUFNLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUNqQyxVQUFJLFVBQVU7QUFDZCxhQUFPLE9BQU8sUUFBUSxNQUFNO0FBQzVCLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxPQUFPLFFBQVE7QUFFdEIsV0FBTyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ3JDLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksTUFBTSxJQUFJO0FBQ2QsVUFBSSxJQUFJLElBQUksU0FBUyxTQUFTLFNBQVMsR0FBRyxTQUFTLElBQUksR0FBRztBQUMxRCxhQUFPLE9BQU8sUUFBUSxNQUFNO0FBQzVCLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxPQUFPLFFBQVE7QUFFdEIsV0FBTyxpQkFBaUIsU0FBVSxHQUFHO0FBQ25DLGFBQU9BLFFBQU8sV0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQztBQUVBLFFBQUksU0FBUyxDQUFDO0FBRWQsV0FBTyxTQUFTLFNBQVUsR0FBRyxLQUFLLFFBQVE7QUFDeEMsVUFBSSxDQUFDO0FBQUssY0FBTSxPQUFPLGVBQWUsQ0FBQztBQUN2QyxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLFNBQVMsRUFBRSxTQUFTLEtBQUs7QUFDN0IsVUFBSSxPQUFPLEVBQUUsU0FBUyxhQUFhLGdCQUFnQjtBQUVuRCxVQUFJLGNBQWMsRUFBRSxNQUFNLEdBQUcsTUFBTTtBQUNuQyxVQUFJLGNBQWMsUUFBUSxNQUFNLFNBQVMsQ0FBQztBQUMxQyxVQUFJLGNBQWMsRUFBRSxVQUFVLFFBQVEsU0FBUyxDQUFDO0FBQ2hELFVBQUksY0FBYyxFQUFFLFFBQVEsUUFBUSxTQUFTLENBQUM7QUFDOUMsVUFBSSxjQUFjLEVBQUUsWUFBWSxRQUFRLFNBQVMsQ0FBQztBQUNsRCxVQUFJLGNBQWMsRUFBRSxZQUFZLFFBQVEsU0FBUyxFQUFFO0FBRW5ELGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxPQUFPLFFBQVE7QUFFdEIsV0FBTyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ3JDLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBQ3RCLFVBQUksSUFBSSxTQUFTO0FBQUksY0FBTSxJQUFJLE1BQU0seUJBQXlCO0FBQzlELFVBQUksUUFBUSxJQUFJLGFBQWEsU0FBUyxDQUFDO0FBRXZDLGFBQU87QUFBQSxRQUNMLElBQUksSUFBSSxhQUFhLE1BQU07QUFBQSxRQUMzQixNQUFNLFFBQVEsZ0JBQWdCLGFBQWE7QUFBQSxRQUMzQyxPQUFPLFFBQVE7QUFBQSxRQUNmLFVBQVcsU0FBUyxLQUFNLE9BQVM7QUFBQSxRQUNuQyxRQUFRLFFBQVEsU0FBVSxTQUFTLEtBQU0sRUFBRztBQUFBLFFBQzVDLFlBQWEsU0FBUyxLQUFNLE9BQVM7QUFBQSxRQUNyQyxhQUFjLFNBQVMsSUFBSyxPQUFTO0FBQUEsUUFDckMsVUFBVyxTQUFTLElBQUssT0FBUztBQUFBLFFBQ2xDLFVBQVcsU0FBUyxJQUFLLE9BQVM7QUFBQSxRQUNsQyxTQUFVLFNBQVMsSUFBSyxPQUFTO0FBQUEsUUFDakMsVUFBVyxTQUFTLElBQUssT0FBUztBQUFBLFFBQ2xDLFVBQVcsU0FBUyxJQUFLLE9BQVM7QUFBQSxRQUNsQyxPQUFPLE9BQU8sU0FBUyxRQUFRLEVBQUc7QUFBQSxRQUNsQyxXQUFXLElBQUksTUFBTSxJQUFJLGFBQWEsU0FBUyxDQUFDLENBQUM7QUFBQSxRQUNqRCxTQUFTLElBQUksTUFBTSxJQUFJLGFBQWEsU0FBUyxDQUFDLENBQUM7QUFBQSxRQUMvQyxhQUFhLElBQUksTUFBTSxJQUFJLGFBQWEsU0FBUyxDQUFDLENBQUM7QUFBQSxRQUNuRCxhQUFhLElBQUksTUFBTSxJQUFJLGFBQWEsU0FBUyxFQUFFLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFFQSxXQUFPLE9BQU8sUUFBUTtBQUV0QixXQUFPLGlCQUFpQixXQUFZO0FBQ2xDLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSSxXQUFXLFFBQVEsVUFBVSxDQUFDO0FBRWxDLGFBQVMsU0FBUyxTQUFVLE1BQU0sS0FBSyxRQUFRO0FBQzdDLFVBQUksQ0FBQztBQUFLLGNBQU1BLFFBQU8sTUFBTSxTQUFTLGVBQWUsSUFBSSxDQUFDO0FBQzFELFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksY0FBYyxLQUFLLFFBQVEsTUFBTTtBQUNyQyxXQUFLLEtBQUssS0FBSyxTQUFTLENBQUM7QUFFekIsZUFBUyxPQUFPLFFBQVEsS0FBSyxTQUFTO0FBQ3RDLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxPQUFPLFFBQVE7QUFFeEIsYUFBUyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ3ZDLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksTUFBTSxJQUFJLGFBQWEsTUFBTTtBQUNqQyxVQUFJLE9BQU8sSUFBSSxNQUFNLFNBQVMsR0FBRyxTQUFTLElBQUksR0FBRztBQUNqRCxlQUFTLE9BQU8sUUFBUSxNQUFNO0FBQzlCLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxPQUFPLFFBQVE7QUFFeEIsYUFBUyxpQkFBaUIsU0FBVSxNQUFNO0FBQ3hDLGFBQU8sS0FBSyxTQUFTO0FBQUEsSUFDdkI7QUFFQSxRQUFJLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFFeEIsUUFBSSxTQUFTLFNBQVUsTUFBTSxLQUFLLFFBQVE7QUFDeEMsVUFBSSxDQUFDO0FBQUssY0FBTUEsUUFBTyxNQUFNLElBQUksZUFBZSxJQUFJLENBQUM7QUFDckQsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsV0FBSyxPQUFPLE1BQU0sS0FBSyxTQUFTLENBQUM7QUFDakMsVUFBSSxjQUFjLEtBQUssT0FBTyxPQUFPLE1BQU07QUFDM0MsVUFBSSxPQUFPLFFBQVEsS0FBSyxPQUFPLFFBQVE7QUFDdkMsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJLE9BQU8sUUFBUTtBQUVuQixRQUFJLFNBQVMsU0FBVSxLQUFLLFFBQVE7QUFDbEMsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxNQUFNLElBQUksYUFBYSxNQUFNO0FBQ2pDLFVBQUksS0FBSyxLQUFLLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFFcEMsVUFBSSxPQUFPLFFBQVEsTUFBTTtBQUN6QixhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQUksT0FBTyxRQUFRO0FBRW5CLFFBQUksaUJBQWlCLFNBQVUsTUFBTTtBQUNuQyxhQUFPLEtBQUssZUFBZSxJQUFJLElBQUk7QUFBQSxJQUNyQztBQUVBLFFBQUksT0FBTyxRQUFRLE1BQU0sQ0FBQztBQUUxQixTQUFLLFNBQVMsU0FBVSxNQUFNLEtBQUssUUFBUTtBQUN6QyxVQUFJLENBQUM7QUFBSyxjQUFNQSxRQUFPLE1BQU0sS0FBSyxlQUFlLElBQUksQ0FBQztBQUN0RCxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLFlBQVk7QUFDaEIsZ0JBQVU7QUFDVixXQUFLLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTTtBQUNuQyxnQkFBVSxLQUFLLE9BQU87QUFDdEIsV0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU07QUFDbkMsZ0JBQVUsS0FBSyxPQUFPO0FBQ3RCLFVBQUksY0FBYyxLQUFLLFVBQVUsR0FBRyxNQUFNO0FBQzFDLGdCQUFVO0FBQ1YsVUFBSSxjQUFjLEtBQUssV0FBVyxHQUFHLE1BQU07QUFDM0MsZ0JBQVU7QUFDVixVQUFJLGNBQWMsS0FBSyxTQUFTLEdBQUcsTUFBTTtBQUN6QyxnQkFBVTtBQUNWLFVBQUksY0FBYyxLQUFLLFVBQVUsR0FBRyxNQUFNO0FBQzFDLGdCQUFVO0FBQ1YsVUFBSSxjQUFjLEtBQUssV0FBVyxHQUFHLE1BQU07QUFDM0MsZ0JBQVU7QUFFVixVQUFJLGNBQWMsU0FBUyxZQUFZLEdBQUcsU0FBUztBQUNuRCxXQUFLLE9BQU8sUUFBUSxTQUFTO0FBQzdCLGFBQU87QUFBQSxJQUNUO0FBRUEsU0FBSyxPQUFPLFFBQVE7QUFFcEIsU0FBSyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ25DLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksWUFBWTtBQUVoQixVQUFJLE9BQU8sQ0FBQztBQUNaLGdCQUFVO0FBQ1YsV0FBSyxRQUFRLEtBQUssT0FBTyxLQUFLLE1BQU07QUFDcEMsZ0JBQVUsS0FBSyxPQUFPO0FBQ3RCLFdBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxNQUFNO0FBQ3BDLGdCQUFVLEtBQUssT0FBTztBQUN0QixXQUFLLFNBQVMsSUFBSSxhQUFhLE1BQU07QUFDckMsZ0JBQVU7QUFDVixXQUFLLFVBQVUsSUFBSSxhQUFhLE1BQU07QUFDdEMsZ0JBQVU7QUFDVixXQUFLLFFBQVEsSUFBSSxhQUFhLE1BQU07QUFDcEMsZ0JBQVU7QUFDVixXQUFLLFNBQVMsSUFBSSxhQUFhLE1BQU07QUFDckMsZ0JBQVU7QUFDVixXQUFLLFVBQVUsSUFBSSxhQUFhLE1BQU07QUFDdEMsZ0JBQVU7QUFFVixXQUFLLE9BQU8sUUFBUSxTQUFTO0FBQzdCLGFBQU87QUFBQSxJQUNUO0FBRUEsU0FBSyxPQUFPLFFBQVE7QUFFcEIsU0FBSyxpQkFBaUIsU0FBVSxNQUFNO0FBQ3BDLGFBQU8sS0FBSyxLQUFLLGVBQWUsS0FBSyxLQUFLLElBQUksS0FBSyxlQUFlLEtBQUssS0FBSztBQUFBLElBQzlFO0FBRUEsUUFBSSxPQUFPLFFBQVEsTUFBTSxRQUFRLE9BQU8sQ0FBQztBQUN6QyxRQUFJLFFBQVE7QUFFWixTQUFLLFNBQVMsU0FBVSxNQUFNLEtBQUssUUFBUTtBQUN6QyxVQUFJLENBQUM7QUFBSyxjQUFNQSxRQUFPLE1BQU0sS0FBSyxlQUFlLElBQUksQ0FBQztBQUN0RCxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLE9BQU8sU0FBUztBQUFVLGVBQU9BLFFBQU8sS0FBSyxJQUFJO0FBQ3JELFVBQUksQ0FBQztBQUFNLGVBQU9BLFFBQU8sTUFBTSxDQUFDO0FBRWhDLFVBQUksWUFBWTtBQUNoQixnQkFBVTtBQUVWLFVBQUksTUFBTSxLQUFLO0FBQ2YsV0FBSyxLQUFLLEtBQUssUUFBUSxHQUFHLEdBQUc7QUFDN0IsZ0JBQVU7QUFFVixVQUFJLGNBQWMsU0FBUyxZQUFZLEdBQUcsU0FBUztBQUNuRCxXQUFLLE9BQU8sUUFBUSxTQUFTO0FBQzdCLGFBQU87QUFBQSxJQUNUO0FBRUEsU0FBSyxPQUFPLFFBQVE7QUFFcEIsU0FBSyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ25DLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBQ3RCLFVBQUksWUFBWTtBQUNoQixVQUFJLE1BQU0sSUFBSSxhQUFhLE1BQU07QUFFakMsZ0JBQVU7QUFFVixVQUFJLE9BQU8sSUFBSSxNQUFNLFFBQVEsU0FBUyxHQUFHO0FBQ3pDLGdCQUFVO0FBRVYsV0FBSyxPQUFPLFFBQVEsU0FBUztBQUM3QixhQUFPO0FBQUEsSUFDVDtBQUVBLFNBQUssT0FBTyxRQUFRO0FBRXBCLFNBQUssaUJBQWlCLFNBQVUsTUFBTTtBQUNwQyxVQUFJLENBQUM7QUFBTSxlQUFPO0FBQ2xCLGNBQVFBLFFBQU8sU0FBUyxJQUFJLElBQUksS0FBSyxTQUFTQSxRQUFPLFdBQVcsSUFBSSxLQUFLO0FBQUEsSUFDM0U7QUFFQSxRQUFJLFNBQVMsUUFBUSxRQUFRLENBQUM7QUFFOUIsV0FBTyxTQUFTLFNBQVUsTUFBTSxLQUFLLFFBQVE7QUFDM0MsVUFBSSxDQUFDO0FBQUssY0FBTUEsUUFBTyxNQUFNLE9BQU8sZUFBZSxJQUFJLENBQUM7QUFDeEQsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxZQUFZO0FBQ2hCLGdCQUFVO0FBQ1YsYUFBTyxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDbkMsZ0JBQVUsT0FBTyxPQUFPO0FBQ3hCLGFBQU8sT0FBTyxLQUFLLElBQUksS0FBSyxNQUFNO0FBQ2xDLGdCQUFVLE9BQU8sT0FBTztBQUN4QixVQUFJLGNBQWMsU0FBUyxZQUFZLEdBQUcsU0FBUztBQUNuRCxhQUFPLE9BQU8sUUFBUSxTQUFTO0FBQy9CLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxPQUFPLFFBQVE7QUFFdEIsV0FBTyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ3JDLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksWUFBWTtBQUVoQixVQUFJLE9BQU8sQ0FBQztBQUNaLGdCQUFVO0FBQ1YsV0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFDcEMsZ0JBQVUsT0FBTyxPQUFPO0FBQ3hCLFdBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxNQUFNO0FBQ25DLGdCQUFVLE9BQU8sT0FBTztBQUN4QixhQUFPLE9BQU8sUUFBUSxTQUFTO0FBQy9CLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxPQUFPLFFBQVE7QUFFdEIsV0FBTyxpQkFBaUIsU0FBVSxNQUFNO0FBQ3RDLGFBQU8sT0FBTyxlQUFlLEtBQUssR0FBRyxJQUFJLE9BQU8sZUFBZSxLQUFLLEVBQUUsSUFBSTtBQUFBLElBQzVFO0FBRUEsUUFBSSxPQUFPLFFBQVEsTUFBTSxDQUFDO0FBQzFCLFFBQUksU0FBUyxRQUFRLFFBQVE7QUFDN0IsUUFBSSxTQUFTLFFBQVEsUUFBUTtBQUU3QixTQUFLLFNBQVMsU0FBVSxNQUFNLEtBQUssUUFBUTtBQUN6QyxVQUFJLENBQUM7QUFBSyxjQUFNQSxRQUFPLE1BQU0sS0FBSyxlQUFlLElBQUksQ0FBQztBQUN0RCxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixXQUFLLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUNqQyxVQUFJLGNBQWMsS0FBSyxPQUFPLE9BQU8sTUFBTTtBQUMzQyxXQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sUUFBUTtBQUN4QyxhQUFPO0FBQUEsSUFDVDtBQUVBLFNBQUssT0FBTyxRQUFRO0FBRXBCLFNBQUssU0FBUyxTQUFVLEtBQUssUUFBUTtBQUNuQyxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLE9BQU8sS0FBSyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ3RDLFdBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxRQUFRO0FBQ3hDLGFBQU87QUFBQSxJQUNUO0FBRUEsU0FBSyxPQUFPLFFBQVE7QUFFcEIsU0FBSyxpQkFBaUIsU0FBVSxNQUFNO0FBQ3BDLGFBQU8sS0FBSyxlQUFlLElBQUksSUFBSTtBQUFBLElBQ3JDO0FBRUEsUUFBSSxPQUFPLFFBQVEsTUFBTSxDQUFDO0FBRTFCLFNBQUssU0FBUyxTQUFVLE1BQU0sS0FBSyxRQUFRO0FBQ3pDLFVBQUksQ0FBQztBQUFLLGNBQU1BLFFBQU8sTUFBTSxLQUFLLGVBQWUsSUFBSSxDQUFDO0FBQ3RELFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksY0FBYyxLQUFLLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDaEQsVUFBSSxjQUFjLEtBQUssVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUM5QyxVQUFJLGNBQWMsS0FBSyxRQUFRLEdBQUcsU0FBUyxDQUFDO0FBQzVDLFdBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxTQUFTLENBQUM7QUFFeEMsVUFBSSxNQUFNLEtBQUssT0FBTyxRQUFRO0FBQzlCLFVBQUksY0FBYyxLQUFLLE1BQU07QUFFN0IsV0FBSyxPQUFPLFFBQVEsTUFBTTtBQUMxQixhQUFPO0FBQUEsSUFDVDtBQUVBLFNBQUssT0FBTyxRQUFRO0FBRXBCLFNBQUssU0FBUyxTQUFVLEtBQUssUUFBUTtBQUNuQyxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLE1BQU0sSUFBSSxhQUFhLE1BQU07QUFFakMsVUFBSSxPQUFPLENBQUM7QUFDWixXQUFLLFdBQVcsSUFBSSxhQUFhLFNBQVMsQ0FBQztBQUMzQyxXQUFLLFNBQVMsSUFBSSxhQUFhLFNBQVMsQ0FBQztBQUN6QyxXQUFLLE9BQU8sSUFBSSxhQUFhLFNBQVMsQ0FBQztBQUN2QyxXQUFLLFNBQVMsS0FBSyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBRXpDLFdBQUssT0FBTyxRQUFRLE1BQU07QUFDMUIsYUFBTztBQUFBLElBQ1Q7QUFFQSxTQUFLLE9BQU8sUUFBUTtBQUVwQixTQUFLLGlCQUFpQixTQUFVLE1BQU07QUFDcEMsYUFBTyxJQUFJLEtBQUssZUFBZSxLQUFLLE1BQU07QUFBQSxJQUM1QztBQUVBLFFBQUksT0FBTyxRQUFRLE1BQU0sQ0FBQztBQUUxQixTQUFLLGtCQUFrQixLQUFLO0FBRTVCLFNBQUssU0FBUyxTQUFVLE1BQU0sS0FBSyxRQUFRO0FBQ3pDLFVBQUksTUFBTSxLQUFLLGVBQWUsSUFBSTtBQUVsQyxVQUFJLENBQUM7QUFBSyxjQUFNQSxRQUFPLE1BQU0sS0FBSyxlQUFlLElBQUksQ0FBQztBQUN0RCxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLEtBQUssZ0JBQWdCO0FBQ3ZCLGFBQUssUUFBUSxLQUFLO0FBQUEsTUFDcEI7QUFFQSxVQUFJLGNBQWMsTUFBTSxHQUFHLE1BQU07QUFDakMsZ0JBQVU7QUFDVixVQUFJLFdBQVcsS0FBSyxTQUFTLEdBQUcsTUFBTTtBQUN0QyxnQkFBVTtBQUNWLGFBQU8sT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQ25DLGdCQUFVLE9BQU8sT0FBTztBQUN4QixVQUFJLE1BQU0sS0FBSyxPQUFPLE1BQU07QUFDNUIsZ0JBQVVBLFFBQU8sV0FBVyxLQUFLLEtBQUs7QUFFdEMsV0FBSyxPQUFPLFFBQVE7QUFDcEIsYUFBTztBQUFBLElBQ1Q7QUFFQSxTQUFLLE9BQU8sUUFBUTtBQUVwQixTQUFLLFNBQVMsU0FBVSxLQUFLLFFBQVE7QUFDbkMsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxNQUFNLElBQUksYUFBYSxNQUFNO0FBQ2pDLGdCQUFVO0FBRVYsVUFBSSxZQUFZO0FBQ2hCLFVBQUksT0FBTyxDQUFDO0FBQ1osV0FBSyxRQUFRLElBQUksVUFBVSxNQUFNO0FBQ2pDLGdCQUFVO0FBQ1YsV0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFDcEMsZ0JBQVUsT0FBTyxPQUFPO0FBQ3hCLFdBQUssUUFBUSxJQUFJLFNBQVMsU0FBUyxRQUFRLFlBQVksR0FBRztBQUUxRCxXQUFLLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxRQUFRLEtBQUs7QUFFM0MsV0FBSyxPQUFPLFFBQVEsTUFBTTtBQUUxQixhQUFPO0FBQUEsSUFDVDtBQUVBLFNBQUssT0FBTyxRQUFRO0FBRXBCLFNBQUssaUJBQWlCLFNBQVUsTUFBTTtBQUNwQyxhQUFPLE9BQU8sZUFBZSxLQUFLLEdBQUcsSUFBSSxPQUFPLGVBQWUsS0FBSyxLQUFLLElBQUk7QUFBQSxJQUMvRTtBQUVBLFFBQUksS0FBSyxRQUFRLElBQUksQ0FBQztBQUV0QixPQUFHLFNBQVMsU0FBVSxNQUFNLEtBQUssUUFBUTtBQUN2QyxVQUFJLENBQUM7QUFBSyxjQUFNQSxRQUFPLE1BQU0sR0FBRyxlQUFlLElBQUksQ0FBQztBQUNwRCxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixVQUFJLGNBQWMsR0FBRyxNQUFNO0FBQzNCLGdCQUFVO0FBQ1YsU0FBRyxTQUFTLE1BQU0sS0FBSyxNQUFNO0FBQzdCLFNBQUcsT0FBTyxRQUFRO0FBQ2xCLGFBQU87QUFBQSxJQUNUO0FBRUEsT0FBRyxPQUFPLFFBQVE7QUFFbEIsT0FBRyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ2pDLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLGdCQUFVO0FBQ1YsVUFBSSxPQUFPLEdBQUcsU0FBUyxLQUFLLFFBQVEsQ0FBQztBQUNyQyxTQUFHLE9BQU8sUUFBUTtBQUNsQixhQUFPO0FBQUEsSUFDVDtBQUVBLE9BQUcsT0FBTyxRQUFRO0FBRWxCLE9BQUcsaUJBQWlCLFdBQVk7QUFDOUIsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJLFFBQVEsUUFBUSxPQUFPLENBQUM7QUFFNUIsVUFBTSxTQUFTLFNBQVUsTUFBTSxLQUFLLFFBQVE7QUFDMUMsVUFBSSxDQUFDO0FBQUssY0FBTUEsUUFBTyxNQUFNLE1BQU0sZUFBZSxJQUFJLENBQUM7QUFDdkQsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxjQUFjLElBQUksTUFBTTtBQUM1QixnQkFBVTtBQUNWLFNBQUcsU0FBUyxNQUFNLEtBQUssTUFBTTtBQUM3QixZQUFNLE9BQU8sUUFBUTtBQUNyQixhQUFPO0FBQUEsSUFDVDtBQUVBLFVBQU0sT0FBTyxRQUFRO0FBRXJCLFVBQU0sU0FBUyxTQUFVLEtBQUssUUFBUTtBQUNwQyxVQUFJLENBQUM7QUFBUSxpQkFBUztBQUV0QixnQkFBVTtBQUNWLFVBQUksT0FBTyxHQUFHLFNBQVMsS0FBSyxRQUFRLEVBQUU7QUFDdEMsWUFBTSxPQUFPLFFBQVE7QUFDckIsYUFBTztBQUFBLElBQ1Q7QUFFQSxVQUFNLE9BQU8sUUFBUTtBQUVyQixVQUFNLGlCQUFpQixXQUFZO0FBQ2pDLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSSxPQUFPLFFBQVEsU0FBUyxTQUFVLE1BQU07QUFDMUMsY0FBUSxLQUFLLFlBQVk7QUFBQSxhQUNsQjtBQUFLLGlCQUFPO0FBQUEsYUFDWjtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFTLGlCQUFPO0FBQUEsYUFDaEI7QUFBUyxpQkFBTztBQUFBLGFBQ2hCO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQVEsaUJBQU87QUFBQSxhQUNmO0FBQVEsaUJBQU87QUFBQSxhQUNmO0FBQU8saUJBQU87QUFBQSxhQUNkO0FBQVMsaUJBQU87QUFBQSxhQUNoQjtBQUFPLGlCQUFPO0FBQUEsYUFDZDtBQUFNLGlCQUFPO0FBQUEsYUFDYjtBQUFPLGlCQUFPO0FBQUE7QUFFckIsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJLFNBQVMsUUFBUSxTQUFTLENBQUM7QUFFL0IsV0FBTyxTQUFTLFNBQVUsR0FBRyxLQUFLLFFBQVE7QUFDeEMsVUFBSSxDQUFDO0FBQUssY0FBTUEsUUFBTyxNQUFNLE9BQU8sZUFBZSxDQUFDLENBQUM7QUFDckQsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxZQUFZO0FBRWhCLFdBQUssT0FBTyxFQUFFLE1BQU0sS0FBSyxNQUFNO0FBQy9CLGdCQUFVLEtBQUssT0FBTztBQUV0QixVQUFJLGNBQWMsTUFBTSxPQUFPLEVBQUUsSUFBSSxHQUFHLE1BQU07QUFFOUMsVUFBSSxRQUFRLEVBQUUsVUFBVSxTQUFZLElBQUksRUFBRTtBQUMxQyxVQUFJLEVBQUU7QUFBTyxpQkFBUztBQUN0QixVQUFJLGNBQWMsT0FBTyxTQUFTLENBQUM7QUFFbkMsVUFBSSxjQUFjLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUV4QyxVQUFJLE1BQU0sS0FBSyxFQUFFLElBQUk7QUFDckIsVUFBSSxPQUFPLEVBQUUsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUNsQyxnQkFBVSxJQUFJLElBQUksT0FBTztBQUV6QixhQUFPLE9BQU8sUUFBUSxTQUFTO0FBQy9CLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTyxPQUFPLFFBQVE7QUFFdEIsV0FBTyxTQUFTLFNBQVUsS0FBSyxRQUFRO0FBQ3JDLFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksSUFBSSxDQUFDO0FBQ1QsVUFBSSxZQUFZO0FBRWhCLFFBQUUsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNO0FBQ2hDLGdCQUFVLEtBQUssT0FBTztBQUN0QixRQUFFLE9BQU8sTUFBTSxTQUFTLElBQUksYUFBYSxNQUFNLENBQUM7QUFDaEQsUUFBRSxRQUFRLElBQUksYUFBYSxTQUFTLENBQUM7QUFDckMsUUFBRSxNQUFNLElBQUksYUFBYSxTQUFTLENBQUM7QUFFbkMsUUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVE7QUFDdkIsVUFBSSxFQUFFO0FBQU8sVUFBRSxTQUFTO0FBRXhCLFVBQUksTUFBTSxLQUFLLEVBQUUsSUFBSTtBQUNyQixRQUFFLE9BQU8sSUFBSSxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ25DLGdCQUFVLElBQUksSUFBSSxPQUFPO0FBRXpCLGFBQU8sT0FBTyxRQUFRLFNBQVM7QUFDL0IsYUFBTztBQUFBLElBQ1Q7QUFFQSxXQUFPLE9BQU8sUUFBUTtBQUV0QixXQUFPLGlCQUFpQixTQUFVLEdBQUc7QUFDbkMsYUFBTyxLQUFLLGVBQWUsRUFBRSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJO0FBQUEsSUFDN0U7QUFFQSxRQUFJLFdBQVcsUUFBUSxXQUFXLENBQUM7QUFFbkMsYUFBUyxTQUFTLFNBQVUsR0FBRyxLQUFLLFFBQVE7QUFDMUMsVUFBSSxDQUFDO0FBQUssY0FBTUEsUUFBTyxNQUFNLFNBQVMsZUFBZSxDQUFDLENBQUM7QUFDdkQsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxZQUFZO0FBRWhCLFdBQUssT0FBTyxFQUFFLE1BQU0sS0FBSyxNQUFNO0FBQy9CLGdCQUFVLEtBQUssT0FBTztBQUV0QixVQUFJLGNBQWMsTUFBTSxPQUFPLEVBQUUsSUFBSSxHQUFHLE1BQU07QUFDOUMsZ0JBQVU7QUFFVixVQUFJLGNBQWMsRUFBRSxVQUFVLFNBQVksSUFBSSxFQUFFLE9BQU8sTUFBTTtBQUM3RCxnQkFBVTtBQUVWLGVBQVMsT0FBTyxRQUFRLFNBQVM7QUFDakMsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLE9BQU8sUUFBUTtBQUV4QixhQUFTLFNBQVMsU0FBVSxLQUFLLFFBQVE7QUFDdkMsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxZQUFZO0FBQ2hCLFVBQUksSUFBSSxDQUFDO0FBRVQsUUFBRSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU07QUFDaEMsZ0JBQVUsS0FBSyxPQUFPO0FBRXRCLFFBQUUsT0FBTyxNQUFNLFNBQVMsSUFBSSxhQUFhLE1BQU0sQ0FBQztBQUNoRCxnQkFBVTtBQUVWLFFBQUUsUUFBUSxJQUFJLGFBQWEsTUFBTTtBQUNqQyxnQkFBVTtBQUVWLFVBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRO0FBQ3RCLFVBQUk7QUFBSSxVQUFFLFNBQVM7QUFFbkIsZUFBUyxPQUFPLFFBQVEsU0FBUztBQUNqQyxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsT0FBTyxRQUFRO0FBRXhCLGFBQVMsaUJBQWlCLFNBQVUsR0FBRztBQUNyQyxhQUFPLEtBQUssZUFBZSxFQUFFLElBQUksSUFBSTtBQUFBLElBQ3ZDO0FBRUEsWUFBUSx1QkFBdUIsS0FBSztBQUNwQyxZQUFRLHFCQUFxQixLQUFLO0FBQ2xDLFlBQVEsb0JBQW9CLEtBQUs7QUFDakMsWUFBUSxzQkFBc0IsS0FBSztBQUNuQyxZQUFRLGlCQUFpQixLQUFLO0FBQzlCLFlBQVEsb0JBQW9CLEtBQUs7QUFFakMsWUFBUSxTQUFTLFNBQVUsUUFBUSxLQUFLLFFBQVE7QUFDOUMsVUFBSSxXQUFXLENBQUM7QUFDaEIsVUFBSTtBQUFVLGNBQU1BLFFBQU8sTUFBTSxRQUFRLGVBQWUsTUFBTSxDQUFDO0FBQy9ELFVBQUksQ0FBQztBQUFRLGlCQUFTO0FBRXRCLFVBQUksWUFBWTtBQUVoQixVQUFJLENBQUMsT0FBTztBQUFXLGVBQU8sWUFBWSxDQUFDO0FBQzNDLFVBQUksQ0FBQyxPQUFPO0FBQVMsZUFBTyxVQUFVLENBQUM7QUFDdkMsVUFBSSxDQUFDLE9BQU87QUFBYSxlQUFPLGNBQWMsQ0FBQztBQUMvQyxVQUFJLENBQUMsT0FBTztBQUFhLGVBQU8sY0FBYyxDQUFDO0FBRS9DLGFBQU8sT0FBTyxRQUFRLEtBQUssTUFBTTtBQUNqQyxnQkFBVSxPQUFPLE9BQU87QUFFeEIsZUFBUyxXQUFXLE9BQU8sV0FBVyxVQUFVLEtBQUssTUFBTTtBQUMzRCxlQUFTLFdBQVcsT0FBTyxTQUFTLFFBQVEsS0FBSyxNQUFNO0FBQ3ZELGVBQVMsV0FBVyxPQUFPLGFBQWEsUUFBUSxLQUFLLE1BQU07QUFDM0QsZUFBUyxXQUFXLE9BQU8sYUFBYSxRQUFRLEtBQUssTUFBTTtBQUUzRCxjQUFRLE9BQU8sUUFBUSxTQUFTO0FBR2hDLFVBQUksWUFBWSxRQUFRLE9BQU8sVUFBVSxJQUFJLFFBQVE7QUFDbkQsZUFBTyxJQUFJLE1BQU0sR0FBRyxRQUFRLE9BQU8sS0FBSztBQUFBLE1BQzFDO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxZQUFRLE9BQU8sUUFBUTtBQUV2QixZQUFRLFNBQVMsU0FBVSxLQUFLLFFBQVE7QUFDdEMsVUFBSSxDQUFDO0FBQVEsaUJBQVM7QUFFdEIsVUFBSSxZQUFZO0FBQ2hCLFVBQUksU0FBUyxPQUFPLE9BQU8sS0FBSyxNQUFNO0FBQ3RDLGdCQUFVLE9BQU8sT0FBTztBQUV4QixlQUFTLFdBQVcsT0FBTyxXQUFXLFVBQVUsS0FBSyxNQUFNO0FBQzNELGVBQVMsV0FBVyxPQUFPLFNBQVMsUUFBUSxLQUFLLE1BQU07QUFDdkQsZUFBUyxXQUFXLE9BQU8sYUFBYSxRQUFRLEtBQUssTUFBTTtBQUMzRCxlQUFTLFdBQVcsT0FBTyxhQUFhLFFBQVEsS0FBSyxNQUFNO0FBRTNELGNBQVEsT0FBTyxRQUFRLFNBQVM7QUFFaEMsYUFBTztBQUFBLElBQ1Q7QUFFQSxZQUFRLE9BQU8sUUFBUTtBQUV2QixZQUFRLGlCQUFpQixTQUFVLFFBQVE7QUFDekMsYUFBTyxPQUFPLGVBQWUsTUFBTSxJQUNqQyxtQkFBbUIsT0FBTyxhQUFhLENBQUMsR0FBRyxRQUFRLElBQ25ELG1CQUFtQixPQUFPLFdBQVcsQ0FBQyxHQUFHLE1BQU0sSUFDL0MsbUJBQW1CLE9BQU8sZUFBZSxDQUFDLEdBQUcsTUFBTSxJQUNuRCxtQkFBbUIsT0FBTyxlQUFlLENBQUMsR0FBRyxNQUFNO0FBQUEsSUFDdkQ7QUFFQSxhQUFTLG1CQUFvQixNQUFNLEtBQUs7QUFDdEMsVUFBSSxNQUFNO0FBQ1YsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVE7QUFBSyxlQUFPLElBQUksZUFBZSxLQUFLLEVBQUU7QUFDdkUsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLFdBQVksTUFBTSxLQUFLLEtBQUssUUFBUTtBQUMzQyxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUksT0FBTyxLQUFLLElBQUksS0FBSyxNQUFNO0FBQy9CLGtCQUFVLElBQUksT0FBTztBQUFBLE1BQ3ZCO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLFdBQVksTUFBTSxLQUFLLEtBQUssUUFBUTtBQUMzQyxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLGFBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxNQUFNO0FBQ2hDLGtCQUFVLElBQUksT0FBTztBQUFBLE1BQ3ZCO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNqd0JBO0FBQUEsMEVBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksV0FBVztBQUNmLFlBQVEsU0FBUyxTQUFTLEVBQUU7QUFFNUIsSUFBQUEsUUFBTyxVQUFVO0FBRWpCLGFBQVMsT0FBUSxJQUFJO0FBQ25CLFVBQUksUUFBUTtBQUNaLGFBQU87QUFFUCxlQUFTLE1BQU8sVUFBVTtBQUN4QixjQUFNLFlBQVksSUFBSTtBQUFBLE1BQ3hCO0FBRUEsZUFBUyxJQUFLLFVBQVU7QUFDdEIsWUFBSSxRQUFRLENBQUMsUUFBUTtBQUNyQixnQkFBUTtBQUNSLFdBQUcsSUFBSTtBQUVQLGlCQUFTLEtBQU1DLFdBQVU7QUFDdkIsZ0JBQU0sS0FBS0EsU0FBUTtBQUFBLFFBQ3JCO0FBRUEsaUJBQVMsS0FBTSxLQUFLO0FBQ2xCLGNBQUksT0FBTztBQUNYLGtCQUFRLFFBQVEsR0FBRyxJQUFJLE1BQU07QUFDN0IsaUJBQU8sTUFBTTtBQUFRLHFCQUFTLE1BQU0sTUFBTSxDQUFDO0FBRTNDLG1CQUFTLFNBQVVBLFdBQVU7QUFDM0IscUJBQVMsT0FBT0EsV0FBVSxJQUFJO0FBQUEsVUFDaEM7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxhQUFTLFFBQVMsS0FBSztBQUNyQixhQUFPLE9BQU8sVUFBVSxTQUFTLEtBQUssR0FBRyxNQUFNO0FBQUEsSUFDakQ7QUFFQSxhQUFTLE9BQVE7QUFBQSxJQUFDO0FBRWxCLGFBQVMsTUFBTyxVQUFVLE1BQU07QUFDOUIsZUFBUyxNQUFNLE1BQU0sSUFBSTtBQUFBLElBQzNCO0FBRUEsYUFBUyxRQUFTLEtBQUs7QUFDckIsVUFBSSxRQUFRO0FBQUksbUJBQVcsUUFBUTtBQUFBLElBQ3JDO0FBRUEsYUFBUyxhQUFjLElBQUksR0FBRyxHQUFHO0FBQy9CLGNBQVEsU0FBUyxXQUFZO0FBQzNCLFdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDVCxDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUE7OztBQ3REQTtBQUFBLHdGQUFBQyxTQUFBO0FBQUEsUUFBSSxTQUFTO0FBQ2IsUUFBSSxRQUFRLFFBQVE7QUFDcEIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTLFFBQVE7QUFDckIsUUFBSSxLQUFLLFFBQVE7QUFFakIsUUFBSSxPQUFPLFdBQVk7QUFBQSxJQUFDO0FBRXhCLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSSxDQUFDO0FBQU0sZUFBTyxDQUFDO0FBRW5CLFVBQUksT0FBTyxJQUFJLE9BQU8sYUFBYTtBQUNuQyxVQUFJLE9BQU8sT0FBTyxLQUFLLFNBQVMsV0FBVyxLQUFLLE9BQU87QUFDdkQsVUFBSSxPQUFPLEtBQUssUUFBUTtBQUN4QixVQUFJLEtBQUssS0FBSyxNQUFNLEtBQUssU0FBUyxTQUFTLFNBQVMsZ0JBQWdCO0FBQ3BFLFVBQUksS0FBSyxFQUFDLFNBQVMsSUFBSSxLQUFVO0FBQ2pDLFVBQUksY0FBYyxDQUFDO0FBQ25CLFVBQUksWUFBWTtBQUNoQixVQUFJLFdBQVc7QUFFZixVQUFJLFNBQVMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFlBQVk7QUFDL0MsY0FBTSxJQUFJLE1BQU0sMERBQTBEO0FBQUEsTUFDNUU7QUFFQSxVQUFJLFNBQVMsS0FBSyxVQUFVLE1BQU0sYUFBYTtBQUFBLFFBQzdDO0FBQUEsUUFDQSxXQUFXLEtBQUssY0FBYztBQUFBLFFBQzlCLFVBQVUsV0FBWTtBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFFRCxhQUFPLEdBQUcsU0FBUyxTQUFVLEtBQUs7QUFDaEMsWUFBSSxJQUFJLFNBQVMsWUFBWSxJQUFJLFNBQVM7QUFBYyxlQUFLLEtBQUssU0FBUyxHQUFHO0FBQUE7QUFDekUsZUFBSyxLQUFLLFdBQVcsR0FBRztBQUFBLE1BQy9CLENBQUM7QUFFRCxhQUFPLEdBQUcsV0FBVyxTQUFVLFNBQVMsT0FBTztBQUM3QyxZQUFJO0FBQ0Ysb0JBQVUsT0FBTyxPQUFPLE9BQU87QUFBQSxRQUNqQyxTQUFTLEtBQVA7QUFDQSxlQUFLLEtBQUssV0FBVyxHQUFHO0FBQ3hCO0FBQUEsUUFDRjtBQUVBLGFBQUssS0FBSyxVQUFVLFNBQVMsS0FBSztBQUVsQyxZQUFJLFFBQVEsU0FBUztBQUFTLGVBQUssS0FBSyxTQUFTLFNBQVMsS0FBSztBQUMvRCxZQUFJLFFBQVEsU0FBUztBQUFZLGVBQUssS0FBSyxZQUFZLFNBQVMsS0FBSztBQUFBLE1BQ3ZFLENBQUM7QUFFRCxhQUFPLEdBQUcsYUFBYSxXQUFZO0FBQ2pDLFlBQUksQ0FBQztBQUFNLGlCQUFPLEdBQUcsT0FBTyxPQUFPLFFBQVEsRUFBRTtBQUM3QyxZQUFJLEtBQUssY0FBYyxPQUFPO0FBQzVCLGVBQUssT0FBTztBQUNaLHFCQUFXLFlBQVksS0FBSyxRQUFRLEdBQUk7QUFDeEMsaUJBQU8sZ0JBQWdCLEtBQUssT0FBTyxHQUFHO0FBQ3RDLGlCQUFPLHFCQUFxQixLQUFLLGFBQWEsS0FBSztBQUFBLFFBQ3JEO0FBQUEsTUFDRixDQUFDO0FBRUQsVUFBSSxPQUFPLE9BQU8sU0FBVSxJQUFJO0FBQzlCLFlBQUksQ0FBQztBQUFNLGlCQUFPLEdBQUcsSUFBSTtBQUN6QixlQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3ZCLGVBQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFZO0FBQzVDLGlCQUFPLGVBQWUsU0FBUyxFQUFFO0FBQ2pDLGFBQUcsSUFBSTtBQUFBLFFBQ1QsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUVELFdBQUssU0FBVSxLQUFLO0FBQ2xCLFlBQUk7QUFBSyxpQkFBTyxLQUFLLEtBQUssU0FBUyxHQUFHO0FBQ3RDLGFBQUssS0FBSyxPQUFPO0FBQUEsTUFDbkIsQ0FBQztBQUVELFdBQUssT0FBTyxTQUFVLE9BQU8sT0FBTyxJQUFJO0FBQ3RDLFlBQUksT0FBTyxVQUFVO0FBQVksaUJBQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLO0FBQ3BFLFlBQUksQ0FBQztBQUFJLGVBQUs7QUFDZCxZQUFJLENBQUM7QUFBTyxrQkFBUTtBQUVwQixhQUFLLE1BQU07QUFFWCxpQkFBUyxPQUFRLEtBQUs7QUFDcEIsY0FBSTtBQUFXLG1CQUFPLEdBQUc7QUFDekIsY0FBSTtBQUFLLG1CQUFPLEdBQUcsR0FBRztBQUN0QixjQUFJLFVBQVUsT0FBTyxPQUFPLEtBQUs7QUFDakMsaUJBQU8sS0FBSyxTQUFTLEdBQUcsUUFBUSxRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEVBQUU7QUFBQSxRQUNyRjtBQUFBLE1BQ0Y7QUFFQSxXQUFLLFdBQ0wsS0FBSyxVQUFVLFNBQVUsS0FBSyxPQUFPLElBQUk7QUFDdkMsWUFBSSxNQUFNLFFBQVEsR0FBRztBQUFHLGdCQUFNLEVBQUMsU0FBUyxJQUFHO0FBRTNDLFlBQUksT0FBTztBQUNYLFlBQUksU0FBUyxJQUFJLFNBQVMsS0FBSyxPQUFPO0FBQ3RDLGFBQUssS0FBSyxLQUFLLE9BQU8sRUFBRTtBQUFBLE1BQzFCO0FBRUEsV0FBSyxRQUFRLFNBQVUsR0FBR0MsT0FBTSxPQUFPLElBQUk7QUFDekMsWUFBSSxPQUFPQSxVQUFTO0FBQVksaUJBQU8sS0FBSyxNQUFNLEdBQUcsTUFBTSxNQUFNQSxLQUFJO0FBQ3JFLFlBQUksT0FBT0EsVUFBUyxZQUFZQSxTQUFRQSxNQUFLO0FBQU0saUJBQU8sS0FBSyxNQUFNLEdBQUcsTUFBTUEsT0FBTSxLQUFLO0FBQ3pGLFlBQUksT0FBTyxVQUFVO0FBQVksaUJBQU8sS0FBSyxNQUFNLEdBQUdBLE9BQU0sTUFBTSxLQUFLO0FBQ3ZFLFlBQUksQ0FBQztBQUFJLGVBQUs7QUFFZCxZQUFJLE9BQU8sTUFBTTtBQUFVLGNBQUksQ0FBQyxFQUFDLE1BQU0sR0FBRyxNQUFNQSxTQUFRLE1BQUssQ0FBQztBQUM5RCxZQUFJLE1BQU0sUUFBUSxDQUFDO0FBQUcsY0FBSSxFQUFDLE1BQU0sU0FBUyxXQUFXLEVBQUM7QUFFdEQsVUFBRSxPQUFPO0FBQ1QsYUFBSyxLQUFLLEdBQUcsT0FBTyxFQUFFO0FBQUEsTUFDeEI7QUFFQSxXQUFLLFVBQVUsU0FBVSxJQUFJO0FBQzNCLFlBQUksQ0FBQztBQUFJLGVBQUs7QUFDZCxZQUFJO0FBQVcsaUJBQU8sUUFBUSxTQUFTLEVBQUU7QUFDekMsb0JBQVk7QUFDWixzQkFBYyxRQUFRO0FBQ3RCLGVBQU8sS0FBSyxTQUFTLEVBQUU7QUFDdkIsZUFBTyxNQUFNO0FBQUEsTUFDZjtBQUVBLFdBQUssU0FBUyxXQUFZO0FBQ3hCLFlBQUksU0FBUyxLQUFLLFlBQVksQ0FBQyxFQUFFLE9BQU8sS0FBSyxTQUFTLElBQUksY0FBYztBQUN4RSxZQUFJLFVBQVU7QUFFZCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSztBQUN0QyxjQUFJLE9BQU8sT0FBTztBQUVsQixjQUFJLFlBQVk7QUFBTztBQUN2QixzQkFBWSxRQUFRO0FBQ3BCLG9CQUFVO0FBRVYsY0FBSTtBQUNGLG1CQUFPLGNBQWMsSUFBSSxJQUFJO0FBQUEsVUFDL0IsU0FBUyxLQUFQO0FBQ0EsaUJBQUssS0FBSyxXQUFXLEdBQUc7QUFBQSxVQUMxQjtBQUFBLFFBQ0Y7QUFFQSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87QUFBdUI7QUFDL0MsZUFBTyxzQkFBc0IsS0FBSyxhQUFhLGlCQUFpQixDQUFDO0FBQUEsTUFDbkU7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsbUJBQW9CO0FBQzNCLFVBQUksV0FBVyxHQUFHLGtCQUFrQjtBQUNwQyxVQUFJLFFBQVEsT0FBTyxLQUFLLFFBQVE7QUFFaEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxZQUFJLE1BQU0sU0FBUyxNQUFNO0FBQ3pCLGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ25DLGNBQUksUUFBUSxJQUFJO0FBQ2hCLGNBQUksTUFBTSxXQUFXLFVBQVUsQ0FBQyxNQUFNO0FBQVUsbUJBQU8sTUFBTTtBQUFBLFFBQy9EO0FBQUEsTUFDRjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxnQkFBaUI7QUFDeEIsVUFBSSxXQUFXLEdBQUcsa0JBQWtCO0FBQ3BDLFVBQUksUUFBUSxPQUFPLEtBQUssUUFBUTtBQUNoQyxVQUFJLE1BQU0sQ0FBQztBQUVYLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsWUFBSSxNQUFNLFNBQVMsTUFBTTtBQUN6QixpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLFFBQVEsS0FBSztBQUNuQyxjQUFJLFFBQVEsSUFBSTtBQUNoQixjQUFJLE1BQU0sV0FBVyxRQUFRO0FBQzNCLGdCQUFJLEtBQUssTUFBTSxPQUFPO0FBRXRCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNuTEE7QUFBQSwwRkFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxRQUFRLE9BQU8sVUFBVTtBQUU3QixJQUFBQSxRQUFPLFVBQVUsU0FBUyxZQUFZLE9BQU87QUFDNUMsVUFBSSxNQUFNLE1BQU0sS0FBSyxLQUFLO0FBQzFCLFVBQUksU0FBUyxRQUFRO0FBQ3JCLFVBQUksQ0FBQyxRQUFRO0FBQ1osaUJBQVMsUUFBUSxvQkFDaEIsVUFBVSxRQUNWLE9BQU8sVUFBVSxZQUNqQixPQUFPLE1BQU0sV0FBVyxZQUN4QixNQUFNLFVBQVUsS0FDaEIsTUFBTSxLQUFLLE1BQU0sTUFBTSxNQUFNO0FBQUEsTUFDL0I7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7OztBQ2hCQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJO0FBQ0osUUFBSSxDQUFDLE9BQU8sTUFBTTtBQUViLFlBQU0sT0FBTyxVQUFVO0FBQ3ZCLGNBQVEsT0FBTyxVQUFVO0FBQ3pCLGVBQVM7QUFDVCxxQkFBZSxPQUFPLFVBQVU7QUFDaEMsdUJBQWlCLENBQUMsYUFBYSxLQUFLLEVBQUUsVUFBVSxLQUFLLEdBQUcsVUFBVTtBQUNsRSx3QkFBa0IsYUFBYSxLQUFLLFdBQVk7QUFBQSxNQUFDLEdBQUcsV0FBVztBQUMvRCxrQkFBWTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQ0ksbUNBQTZCLFNBQVUsR0FBRztBQUM3QyxZQUFJLE9BQU8sRUFBRTtBQUNiLGVBQU8sUUFBUSxLQUFLLGNBQWM7QUFBQSxNQUNuQztBQUNJLHFCQUFlO0FBQUEsUUFDbEIsbUJBQW1CO0FBQUEsUUFDbkIsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsZUFBZTtBQUFBLFFBQ2YsU0FBUztBQUFBLFFBQ1QsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2Isd0JBQXdCO0FBQUEsUUFDeEIsdUJBQXVCO0FBQUEsUUFDdkIsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2IsY0FBYztBQUFBLFFBQ2QsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1Asa0JBQWtCO0FBQUEsUUFDbEIsb0JBQW9CO0FBQUEsUUFDcEIsU0FBUztBQUFBLE1BQ1Y7QUFDSSxpQ0FBNEIsV0FBWTtBQUUzQyxZQUFJLE9BQU8sV0FBVyxhQUFhO0FBQUUsaUJBQU87QUFBQSxRQUFPO0FBQ25ELGlCQUFTLEtBQUssUUFBUTtBQUNyQixjQUFJO0FBQ0gsZ0JBQUksQ0FBQyxhQUFhLE1BQU0sTUFBTSxJQUFJLEtBQUssUUFBUSxDQUFDLEtBQUssT0FBTyxPQUFPLFFBQVEsT0FBTyxPQUFPLE9BQU8sVUFBVTtBQUN6RyxrQkFBSTtBQUNILDJDQUEyQixPQUFPLEVBQUU7QUFBQSxjQUNyQyxTQUFTLEdBQVA7QUFDRCx1QkFBTztBQUFBLGNBQ1I7QUFBQSxZQUNEO0FBQUEsVUFDRCxTQUFTLEdBQVA7QUFDRCxtQkFBTztBQUFBLFVBQ1I7QUFBQSxRQUNEO0FBQ0EsZUFBTztBQUFBLE1BQ1IsRUFBRTtBQUNFLDZDQUF1QyxTQUFVLEdBQUc7QUFFdkQsWUFBSSxPQUFPLFdBQVcsZUFBZSxDQUFDLDBCQUEwQjtBQUMvRCxpQkFBTywyQkFBMkIsQ0FBQztBQUFBLFFBQ3BDO0FBQ0EsWUFBSTtBQUNILGlCQUFPLDJCQUEyQixDQUFDO0FBQUEsUUFDcEMsU0FBUyxHQUFQO0FBQ0QsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUVBLGlCQUFXLFNBQVMsS0FBSyxRQUFRO0FBQ2hDLFlBQUksV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXO0FBQ3BELFlBQUksYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNO0FBQ3hDLFlBQUksY0FBYyxPQUFPLE1BQU07QUFDL0IsWUFBSSxXQUFXLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTTtBQUNsRCxZQUFJLFVBQVUsQ0FBQztBQUVmLFlBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWE7QUFDN0MsZ0JBQU0sSUFBSSxVQUFVLG9DQUFvQztBQUFBLFFBQ3pEO0FBRUEsWUFBSSxZQUFZLG1CQUFtQjtBQUNuQyxZQUFJLFlBQVksT0FBTyxTQUFTLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLEdBQUc7QUFDMUQsbUJBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxRQUFRLEVBQUUsR0FBRztBQUN2QyxvQkFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQUEsVUFDdkI7QUFBQSxRQUNEO0FBRUEsWUFBSSxlQUFlLE9BQU8sU0FBUyxHQUFHO0FBQ3JDLG1CQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxFQUFFLEdBQUc7QUFDdkMsb0JBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQztBQUFBLFVBQ3ZCO0FBQUEsUUFDRCxPQUFPO0FBQ04sbUJBQVMsUUFBUSxRQUFRO0FBQ3hCLGdCQUFJLEVBQUUsYUFBYSxTQUFTLGdCQUFnQixJQUFJLEtBQUssUUFBUSxJQUFJLEdBQUc7QUFDbkUsc0JBQVEsS0FBSyxPQUFPLElBQUksQ0FBQztBQUFBLFlBQzFCO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFFQSxZQUFJLGdCQUFnQjtBQUNuQixjQUFJLGtCQUFrQixxQ0FBcUMsTUFBTTtBQUVqRSxtQkFBUyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsRUFBRSxHQUFHO0FBQzFDLGdCQUFJLEVBQUUsbUJBQW1CLFVBQVUsT0FBTyxrQkFBa0IsSUFBSSxLQUFLLFFBQVEsVUFBVSxFQUFFLEdBQUc7QUFDM0Ysc0JBQVEsS0FBSyxVQUFVLEVBQUU7QUFBQSxZQUMxQjtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBbkhLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFJQTtBQXlCQTtBQWtCQTtBQXNETCxJQUFBQSxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUN6SGpCO0FBQUEsb0ZBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksUUFBUSxNQUFNLFVBQVU7QUFDNUIsUUFBSSxTQUFTO0FBRWIsUUFBSSxXQUFXLE9BQU87QUFDdEIsUUFBSSxXQUFXLFdBQVcsU0FBUyxLQUFLLEdBQUc7QUFBRSxhQUFPLFNBQVMsQ0FBQztBQUFBLElBQUcsSUFBSTtBQUVyRSxRQUFJLGVBQWUsT0FBTztBQUUxQixhQUFTLE9BQU8sU0FBUyxpQkFBaUI7QUFDekMsVUFBSSxPQUFPLE1BQU07QUFDaEIsWUFBSSx5QkFBMEIsV0FBWTtBQUV6QyxjQUFJLE9BQU8sT0FBTyxLQUFLLFNBQVM7QUFDaEMsaUJBQU8sUUFBUSxLQUFLLFdBQVcsVUFBVTtBQUFBLFFBQzFDLEVBQUUsR0FBRyxDQUFDO0FBQ04sWUFBSSxDQUFDLHdCQUF3QjtBQUM1QixpQkFBTyxPQUFPLFNBQVMsS0FBSyxRQUFRO0FBQ25DLGdCQUFJLE9BQU8sTUFBTSxHQUFHO0FBQ25CLHFCQUFPLGFBQWEsTUFBTSxLQUFLLE1BQU0sQ0FBQztBQUFBLFlBQ3ZDO0FBQ0EsbUJBQU8sYUFBYSxNQUFNO0FBQUEsVUFDM0I7QUFBQSxRQUNEO0FBQUEsTUFDRCxPQUFPO0FBQ04sZUFBTyxPQUFPO0FBQUEsTUFDZjtBQUNBLGFBQU8sT0FBTyxRQUFRO0FBQUEsSUFDdkI7QUFFQSxJQUFBQSxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUMvQmpCO0FBQUEsb0ZBQUFDLFNBQUE7QUFBQTtBQUdBLElBQUFBLFFBQU8sVUFBVSxTQUFTLGFBQWE7QUFDdEMsVUFBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLE9BQU8sMEJBQTBCLFlBQVk7QUFBRSxlQUFPO0FBQUEsTUFBTztBQUN4RyxVQUFJLE9BQU8sT0FBTyxhQUFhLFVBQVU7QUFBRSxlQUFPO0FBQUEsTUFBTTtBQUV4RCxVQUFJLE1BQU0sQ0FBQztBQUNYLFVBQUksTUFBTSxPQUFPLE1BQU07QUFDdkIsVUFBSSxTQUFTLE9BQU8sR0FBRztBQUN2QixVQUFJLE9BQU8sUUFBUSxVQUFVO0FBQUUsZUFBTztBQUFBLE1BQU87QUFFN0MsVUFBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLEdBQUcsTUFBTSxtQkFBbUI7QUFBRSxlQUFPO0FBQUEsTUFBTztBQUMvRSxVQUFJLE9BQU8sVUFBVSxTQUFTLEtBQUssTUFBTSxNQUFNLG1CQUFtQjtBQUFFLGVBQU87QUFBQSxNQUFPO0FBVWxGLFVBQUksU0FBUztBQUNiLFVBQUksT0FBTztBQUNYLFdBQUssT0FBTyxLQUFLO0FBQUUsZUFBTztBQUFBLE1BQU87QUFDakMsVUFBSSxPQUFPLE9BQU8sU0FBUyxjQUFjLE9BQU8sS0FBSyxHQUFHLEVBQUUsV0FBVyxHQUFHO0FBQUUsZUFBTztBQUFBLE1BQU87QUFFeEYsVUFBSSxPQUFPLE9BQU8sd0JBQXdCLGNBQWMsT0FBTyxvQkFBb0IsR0FBRyxFQUFFLFdBQVcsR0FBRztBQUFFLGVBQU87QUFBQSxNQUFPO0FBRXRILFVBQUksT0FBTyxPQUFPLHNCQUFzQixHQUFHO0FBQzNDLFVBQUksS0FBSyxXQUFXLEtBQUssS0FBSyxPQUFPLEtBQUs7QUFBRSxlQUFPO0FBQUEsTUFBTztBQUUxRCxVQUFJLENBQUMsT0FBTyxVQUFVLHFCQUFxQixLQUFLLEtBQUssR0FBRyxHQUFHO0FBQUUsZUFBTztBQUFBLE1BQU87QUFFM0UsVUFBSSxPQUFPLE9BQU8sNkJBQTZCLFlBQVk7QUFDMUQsWUFBSSxhQUFhLE9BQU8seUJBQXlCLEtBQUssR0FBRztBQUN6RCxZQUFJLFdBQVcsVUFBVSxVQUFVLFdBQVcsZUFBZSxNQUFNO0FBQUUsaUJBQU87QUFBQSxRQUFPO0FBQUEsTUFDcEY7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7OztBQ3pDQSxJQUFBQyxpQkFBQTtBQUFBLDRGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGFBQWE7QUFFakIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsc0JBQXNCO0FBQy9DLGFBQU8sV0FBVyxLQUFLLENBQUMsQ0FBQyxPQUFPO0FBQUEsSUFDakM7QUFBQTtBQUFBOzs7QUNOQTtBQUFBLG9GQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGFBQWEsT0FBTyxXQUFXLGVBQWU7QUFDbEQsUUFBSSxnQkFBZ0I7QUFFcEIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsbUJBQW1CO0FBQzVDLFVBQUksT0FBTyxlQUFlLFlBQVk7QUFBRSxlQUFPO0FBQUEsTUFBTztBQUN0RCxVQUFJLE9BQU8sV0FBVyxZQUFZO0FBQUUsZUFBTztBQUFBLE1BQU87QUFDbEQsVUFBSSxPQUFPLFdBQVcsS0FBSyxNQUFNLFVBQVU7QUFBRSxlQUFPO0FBQUEsTUFBTztBQUMzRCxVQUFJLE9BQU8sT0FBTyxLQUFLLE1BQU0sVUFBVTtBQUFFLGVBQU87QUFBQSxNQUFPO0FBRXZELGFBQU8sY0FBYztBQUFBLElBQ3RCO0FBQUE7QUFBQTs7O0FDWkEsSUFBQUMsMEJBQUE7QUFBQSxpR0FBQUMsU0FBQTtBQUFBO0FBSUEsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxRQUFRLE1BQU0sVUFBVTtBQUM1QixRQUFJLFFBQVEsT0FBTyxVQUFVO0FBQzdCLFFBQUksV0FBVztBQUVmLElBQUFBLFFBQU8sVUFBVSxTQUFTLEtBQUssTUFBTTtBQUNqQyxVQUFJLFNBQVM7QUFDYixVQUFJLE9BQU8sV0FBVyxjQUFjLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVTtBQUNqRSxjQUFNLElBQUksVUFBVSxnQkFBZ0IsTUFBTTtBQUFBLE1BQzlDO0FBQ0EsVUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7QUFFbEMsVUFBSTtBQUNKLFVBQUksU0FBUyxXQUFZO0FBQ3JCLFlBQUksZ0JBQWdCLE9BQU87QUFDdkIsY0FBSSxTQUFTLE9BQU87QUFBQSxZQUNoQjtBQUFBLFlBQ0EsS0FBSyxPQUFPLE1BQU0sS0FBSyxTQUFTLENBQUM7QUFBQSxVQUNyQztBQUNBLGNBQUksT0FBTyxNQUFNLE1BQU0sUUFBUTtBQUMzQixtQkFBTztBQUFBLFVBQ1g7QUFDQSxpQkFBTztBQUFBLFFBQ1gsT0FBTztBQUNILGlCQUFPLE9BQU87QUFBQSxZQUNWO0FBQUEsWUFDQSxLQUFLLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLFVBQ3JDO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFFQSxVQUFJLGNBQWMsS0FBSyxJQUFJLEdBQUcsT0FBTyxTQUFTLEtBQUssTUFBTTtBQUN6RCxVQUFJLFlBQVksQ0FBQztBQUNqQixlQUFTLElBQUksR0FBRyxJQUFJLGFBQWEsS0FBSztBQUNsQyxrQkFBVSxLQUFLLE1BQU0sQ0FBQztBQUFBLE1BQzFCO0FBRUEsY0FBUSxTQUFTLFVBQVUsc0JBQXNCLFVBQVUsS0FBSyxHQUFHLElBQUksMkNBQTJDLEVBQUUsTUFBTTtBQUUxSCxVQUFJLE9BQU8sV0FBVztBQUNsQixZQUFJLFFBQVEsU0FBU0MsU0FBUTtBQUFBLFFBQUM7QUFDOUIsY0FBTSxZQUFZLE9BQU87QUFDekIsY0FBTSxZQUFZLElBQUksTUFBTTtBQUM1QixjQUFNLFlBQVk7QUFBQSxNQUN0QjtBQUVBLGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTs7O0FDbkRBO0FBQUEsd0ZBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksaUJBQWlCO0FBRXJCLElBQUFBLFFBQU8sVUFBVSxTQUFTLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ0o1QztBQUFBLHdFQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLE9BQU87QUFFWCxJQUFBQSxRQUFPLFVBQVUsS0FBSyxLQUFLLFNBQVMsTUFBTSxPQUFPLFVBQVUsY0FBYztBQUFBO0FBQUE7OztBQ0p6RTtBQUFBLHdGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJQztBQUVKLFFBQUksZUFBZTtBQUNuQixRQUFJLFlBQVk7QUFDaEIsUUFBSSxhQUFhO0FBR2pCLFFBQUksd0JBQXdCLFNBQVUsa0JBQWtCO0FBQ3ZELFVBQUk7QUFDSCxlQUFPLFVBQVUsMkJBQTJCLG1CQUFtQixnQkFBZ0IsRUFBRTtBQUFBLE1BQ2xGLFNBQVMsR0FBUDtBQUFBLE1BQVc7QUFBQSxJQUNkO0FBRUEsUUFBSSxRQUFRLE9BQU87QUFDbkIsUUFBSSxPQUFPO0FBQ1YsVUFBSTtBQUNILGNBQU0sQ0FBQyxHQUFHLEVBQUU7QUFBQSxNQUNiLFNBQVMsR0FBUDtBQUNELGdCQUFRO0FBQUEsTUFDVDtBQUFBLElBQ0Q7QUFFQSxRQUFJLGlCQUFpQixXQUFZO0FBQ2hDLFlBQU0sSUFBSSxXQUFXO0FBQUEsSUFDdEI7QUFDQSxRQUFJLGlCQUFpQixRQUNqQixXQUFZO0FBQ2QsVUFBSTtBQUVILGtCQUFVO0FBQ1YsZUFBTztBQUFBLE1BQ1IsU0FBUyxjQUFQO0FBQ0QsWUFBSTtBQUVILGlCQUFPLE1BQU0sV0FBVyxRQUFRLEVBQUU7QUFBQSxRQUNuQyxTQUFTLFlBQVA7QUFDRCxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQUEsSUFDRCxFQUFFLElBQ0E7QUFFSCxRQUFJLGFBQWEsc0JBQXVCO0FBRXhDLFFBQUksV0FBVyxPQUFPLGtCQUFrQixTQUFVLEdBQUc7QUFBRSxhQUFPLEVBQUU7QUFBQSxJQUFXO0FBRTNFLFFBQUksWUFBWSxDQUFDO0FBRWpCLFFBQUksYUFBYSxPQUFPLGVBQWUsY0FBY0EsYUFBWSxTQUFTLFVBQVU7QUFFcEYsUUFBSSxhQUFhO0FBQUEsTUFDaEIsb0JBQW9CLE9BQU8sbUJBQW1CLGNBQWNBLGFBQVk7QUFBQSxNQUN4RSxXQUFXO0FBQUEsTUFDWCxpQkFBaUIsT0FBTyxnQkFBZ0IsY0FBY0EsYUFBWTtBQUFBLE1BQ2xFLDRCQUE0QixhQUFhLFNBQVMsQ0FBQyxFQUFFLE9BQU8sVUFBVSxDQUFDLElBQUlBO0FBQUEsTUFDM0Usb0NBQW9DQTtBQUFBLE1BQ3BDLG1CQUFtQjtBQUFBLE1BQ25CLG9CQUFvQjtBQUFBLE1BQ3BCLDRCQUE0QjtBQUFBLE1BQzVCLDRCQUE0QjtBQUFBLE1BQzVCLGFBQWEsT0FBTyxZQUFZLGNBQWNBLGFBQVk7QUFBQSxNQUMxRCxZQUFZLE9BQU8sV0FBVyxjQUFjQSxhQUFZO0FBQUEsTUFDeEQsbUJBQW1CLE9BQU8sa0JBQWtCLGNBQWNBLGFBQVk7QUFBQSxNQUN0RSxvQkFBb0IsT0FBTyxtQkFBbUIsY0FBY0EsYUFBWTtBQUFBLE1BQ3hFLGFBQWE7QUFBQSxNQUNiLGNBQWMsT0FBTyxhQUFhLGNBQWNBLGFBQVk7QUFBQSxNQUM1RCxVQUFVO0FBQUEsTUFDVixlQUFlO0FBQUEsTUFDZix3QkFBd0I7QUFBQSxNQUN4QixlQUFlO0FBQUEsTUFDZix3QkFBd0I7QUFBQSxNQUN4QixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixlQUFlO0FBQUEsTUFDZixrQkFBa0IsT0FBTyxpQkFBaUIsY0FBY0EsYUFBWTtBQUFBLE1BQ3BFLGtCQUFrQixPQUFPLGlCQUFpQixjQUFjQSxhQUFZO0FBQUEsTUFDcEUsMEJBQTBCLE9BQU8seUJBQXlCLGNBQWNBLGFBQVk7QUFBQSxNQUNwRixjQUFjO0FBQUEsTUFDZCx1QkFBdUI7QUFBQSxNQUN2QixlQUFlLE9BQU8sY0FBYyxjQUFjQSxhQUFZO0FBQUEsTUFDOUQsZ0JBQWdCLE9BQU8sZUFBZSxjQUFjQSxhQUFZO0FBQUEsTUFDaEUsZ0JBQWdCLE9BQU8sZUFBZSxjQUFjQSxhQUFZO0FBQUEsTUFDaEUsY0FBYztBQUFBLE1BQ2QsV0FBVztBQUFBLE1BQ1gsdUJBQXVCLGFBQWEsU0FBUyxTQUFTLENBQUMsRUFBRSxPQUFPLFVBQVUsQ0FBQyxDQUFDLElBQUlBO0FBQUEsTUFDaEYsVUFBVSxPQUFPLFNBQVMsV0FBVyxPQUFPQTtBQUFBLE1BQzVDLFNBQVMsT0FBTyxRQUFRLGNBQWNBLGFBQVk7QUFBQSxNQUNsRCwwQkFBMEIsT0FBTyxRQUFRLGVBQWUsQ0FBQyxhQUFhQSxhQUFZLFVBQVMsb0JBQUksSUFBSSxHQUFFLE9BQU8sVUFBVSxDQUFDO0FBQUEsTUFDdkgsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsYUFBYSxPQUFPLFlBQVksY0FBY0EsYUFBWTtBQUFBLE1BQzFELFdBQVcsT0FBTyxVQUFVLGNBQWNBLGFBQVk7QUFBQSxNQUN0RCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixhQUFhLE9BQU8sWUFBWSxjQUFjQSxhQUFZO0FBQUEsTUFDMUQsWUFBWTtBQUFBLE1BQ1osU0FBUyxPQUFPLFFBQVEsY0FBY0EsYUFBWTtBQUFBLE1BQ2xELDBCQUEwQixPQUFPLFFBQVEsZUFBZSxDQUFDLGFBQWFBLGFBQVksVUFBUyxvQkFBSSxJQUFJLEdBQUUsT0FBTyxVQUFVLENBQUM7QUFBQSxNQUN2SCx1QkFBdUIsT0FBTyxzQkFBc0IsY0FBY0EsYUFBWTtBQUFBLE1BQzlFLFlBQVk7QUFBQSxNQUNaLDZCQUE2QixhQUFhLFNBQVMsR0FBRyxPQUFPLFVBQVUsQ0FBQyxJQUFJQTtBQUFBLE1BQzVFLFlBQVksYUFBYSxTQUFTQTtBQUFBLE1BQ2xDLGlCQUFpQjtBQUFBLE1BQ2pCLG9CQUFvQjtBQUFBLE1BQ3BCLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxNQUNmLGdCQUFnQixPQUFPLGVBQWUsY0FBY0EsYUFBWTtBQUFBLE1BQ2hFLHVCQUF1QixPQUFPLHNCQUFzQixjQUFjQSxhQUFZO0FBQUEsTUFDOUUsaUJBQWlCLE9BQU8sZ0JBQWdCLGNBQWNBLGFBQVk7QUFBQSxNQUNsRSxpQkFBaUIsT0FBTyxnQkFBZ0IsY0FBY0EsYUFBWTtBQUFBLE1BQ2xFLGNBQWM7QUFBQSxNQUNkLGFBQWEsT0FBTyxZQUFZLGNBQWNBLGFBQVk7QUFBQSxNQUMxRCxhQUFhLE9BQU8sWUFBWSxjQUFjQSxhQUFZO0FBQUEsTUFDMUQsYUFBYSxPQUFPLFlBQVksY0FBY0EsYUFBWTtBQUFBLElBQzNEO0FBRUEsUUFBSTtBQUNILFdBQUs7QUFBQSxJQUNOLFNBQVMsR0FBUDtBQUVHLG1CQUFhLFNBQVMsU0FBUyxDQUFDLENBQUM7QUFDckMsaUJBQVcsdUJBQXVCO0FBQUEsSUFDbkM7QUFGSztBQUlMLFFBQUksU0FBUyxTQUFTQyxRQUFPLE1BQU07QUFDbEMsVUFBSTtBQUNKLFVBQUksU0FBUyxtQkFBbUI7QUFDL0IsZ0JBQVEsc0JBQXNCLHNCQUFzQjtBQUFBLE1BQ3JELFdBQVcsU0FBUyx1QkFBdUI7QUFDMUMsZ0JBQVEsc0JBQXNCLGlCQUFpQjtBQUFBLE1BQ2hELFdBQVcsU0FBUyw0QkFBNEI7QUFDL0MsZ0JBQVEsc0JBQXNCLHVCQUF1QjtBQUFBLE1BQ3RELFdBQVcsU0FBUyxvQkFBb0I7QUFDdkMsWUFBSSxLQUFLQSxRQUFPLDBCQUEwQjtBQUMxQyxZQUFJLElBQUk7QUFDUCxrQkFBUSxHQUFHO0FBQUEsUUFDWjtBQUFBLE1BQ0QsV0FBVyxTQUFTLDRCQUE0QjtBQUMvQyxZQUFJLE1BQU1BLFFBQU8sa0JBQWtCO0FBQ25DLFlBQUksS0FBSztBQUNSLGtCQUFRLFNBQVMsSUFBSSxTQUFTO0FBQUEsUUFDL0I7QUFBQSxNQUNEO0FBRUEsaUJBQVcsUUFBUTtBQUVuQixhQUFPO0FBQUEsSUFDUjtBQUVBLFFBQUksaUJBQWlCO0FBQUEsTUFDcEIsMEJBQTBCLENBQUMsZUFBZSxXQUFXO0FBQUEsTUFDckQsb0JBQW9CLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDekMsd0JBQXdCLENBQUMsU0FBUyxhQUFhLFNBQVM7QUFBQSxNQUN4RCx3QkFBd0IsQ0FBQyxTQUFTLGFBQWEsU0FBUztBQUFBLE1BQ3hELHFCQUFxQixDQUFDLFNBQVMsYUFBYSxNQUFNO0FBQUEsTUFDbEQsdUJBQXVCLENBQUMsU0FBUyxhQUFhLFFBQVE7QUFBQSxNQUN0RCw0QkFBNEIsQ0FBQyxpQkFBaUIsV0FBVztBQUFBLE1BQ3pELG9CQUFvQixDQUFDLDBCQUEwQixXQUFXO0FBQUEsTUFDMUQsNkJBQTZCLENBQUMsMEJBQTBCLGFBQWEsV0FBVztBQUFBLE1BQ2hGLHNCQUFzQixDQUFDLFdBQVcsV0FBVztBQUFBLE1BQzdDLHVCQUF1QixDQUFDLFlBQVksV0FBVztBQUFBLE1BQy9DLG1CQUFtQixDQUFDLFFBQVEsV0FBVztBQUFBLE1BQ3ZDLG9CQUFvQixDQUFDLFNBQVMsV0FBVztBQUFBLE1BQ3pDLHdCQUF3QixDQUFDLGFBQWEsV0FBVztBQUFBLE1BQ2pELDJCQUEyQixDQUFDLGdCQUFnQixXQUFXO0FBQUEsTUFDdkQsMkJBQTJCLENBQUMsZ0JBQWdCLFdBQVc7QUFBQSxNQUN2RCx1QkFBdUIsQ0FBQyxZQUFZLFdBQVc7QUFBQSxNQUMvQyxlQUFlLENBQUMscUJBQXFCLFdBQVc7QUFBQSxNQUNoRCx3QkFBd0IsQ0FBQyxxQkFBcUIsYUFBYSxXQUFXO0FBQUEsTUFDdEUsd0JBQXdCLENBQUMsYUFBYSxXQUFXO0FBQUEsTUFDakQseUJBQXlCLENBQUMsY0FBYyxXQUFXO0FBQUEsTUFDbkQseUJBQXlCLENBQUMsY0FBYyxXQUFXO0FBQUEsTUFDbkQsZUFBZSxDQUFDLFFBQVEsT0FBTztBQUFBLE1BQy9CLG1CQUFtQixDQUFDLFFBQVEsV0FBVztBQUFBLE1BQ3ZDLGtCQUFrQixDQUFDLE9BQU8sV0FBVztBQUFBLE1BQ3JDLHFCQUFxQixDQUFDLFVBQVUsV0FBVztBQUFBLE1BQzNDLHFCQUFxQixDQUFDLFVBQVUsV0FBVztBQUFBLE1BQzNDLHVCQUF1QixDQUFDLFVBQVUsYUFBYSxVQUFVO0FBQUEsTUFDekQsc0JBQXNCLENBQUMsVUFBVSxhQUFhLFNBQVM7QUFBQSxNQUN2RCxzQkFBc0IsQ0FBQyxXQUFXLFdBQVc7QUFBQSxNQUM3Qyx1QkFBdUIsQ0FBQyxXQUFXLGFBQWEsTUFBTTtBQUFBLE1BQ3RELGlCQUFpQixDQUFDLFdBQVcsS0FBSztBQUFBLE1BQ2xDLG9CQUFvQixDQUFDLFdBQVcsUUFBUTtBQUFBLE1BQ3hDLHFCQUFxQixDQUFDLFdBQVcsU0FBUztBQUFBLE1BQzFDLHlCQUF5QixDQUFDLGNBQWMsV0FBVztBQUFBLE1BQ25ELDZCQUE2QixDQUFDLGtCQUFrQixXQUFXO0FBQUEsTUFDM0QscUJBQXFCLENBQUMsVUFBVSxXQUFXO0FBQUEsTUFDM0Msa0JBQWtCLENBQUMsT0FBTyxXQUFXO0FBQUEsTUFDckMsZ0NBQWdDLENBQUMscUJBQXFCLFdBQVc7QUFBQSxNQUNqRSxxQkFBcUIsQ0FBQyxVQUFVLFdBQVc7QUFBQSxNQUMzQyxxQkFBcUIsQ0FBQyxVQUFVLFdBQVc7QUFBQSxNQUMzQywwQkFBMEIsQ0FBQyxlQUFlLFdBQVc7QUFBQSxNQUNyRCx5QkFBeUIsQ0FBQyxjQUFjLFdBQVc7QUFBQSxNQUNuRCx3QkFBd0IsQ0FBQyxhQUFhLFdBQVc7QUFBQSxNQUNqRCx5QkFBeUIsQ0FBQyxjQUFjLFdBQVc7QUFBQSxNQUNuRCxnQ0FBZ0MsQ0FBQyxxQkFBcUIsV0FBVztBQUFBLE1BQ2pFLDBCQUEwQixDQUFDLGVBQWUsV0FBVztBQUFBLE1BQ3JELDBCQUEwQixDQUFDLGVBQWUsV0FBVztBQUFBLE1BQ3JELHVCQUF1QixDQUFDLFlBQVksV0FBVztBQUFBLE1BQy9DLHNCQUFzQixDQUFDLFdBQVcsV0FBVztBQUFBLE1BQzdDLHNCQUFzQixDQUFDLFdBQVcsV0FBVztBQUFBLElBQzlDO0FBRUEsUUFBSSxPQUFPO0FBQ1gsUUFBSSxTQUFTO0FBQ2IsUUFBSSxVQUFVLEtBQUssS0FBSyxTQUFTLE1BQU0sTUFBTSxVQUFVLE1BQU07QUFDN0QsUUFBSSxlQUFlLEtBQUssS0FBSyxTQUFTLE9BQU8sTUFBTSxVQUFVLE1BQU07QUFDbkUsUUFBSSxXQUFXLEtBQUssS0FBSyxTQUFTLE1BQU0sT0FBTyxVQUFVLE9BQU87QUFDaEUsUUFBSSxZQUFZLEtBQUssS0FBSyxTQUFTLE1BQU0sT0FBTyxVQUFVLEtBQUs7QUFDL0QsUUFBSSxRQUFRLEtBQUssS0FBSyxTQUFTLE1BQU0sT0FBTyxVQUFVLElBQUk7QUFHMUQsUUFBSSxhQUFhO0FBQ2pCLFFBQUksZUFBZTtBQUNuQixRQUFJLGVBQWUsU0FBU0MsY0FBYSxRQUFRO0FBQ2hELFVBQUksUUFBUSxVQUFVLFFBQVEsR0FBRyxDQUFDO0FBQ2xDLFVBQUksT0FBTyxVQUFVLFFBQVEsRUFBRTtBQUMvQixVQUFJLFVBQVUsT0FBTyxTQUFTLEtBQUs7QUFDbEMsY0FBTSxJQUFJLGFBQWEsZ0RBQWdEO0FBQUEsTUFDeEUsV0FBVyxTQUFTLE9BQU8sVUFBVSxLQUFLO0FBQ3pDLGNBQU0sSUFBSSxhQUFhLGdEQUFnRDtBQUFBLE1BQ3hFO0FBQ0EsVUFBSSxTQUFTLENBQUM7QUFDZCxlQUFTLFFBQVEsWUFBWSxTQUFVLE9BQU8sUUFBUSxPQUFPLFdBQVc7QUFDdkUsZUFBTyxPQUFPLFVBQVUsUUFBUSxTQUFTLFdBQVcsY0FBYyxJQUFJLElBQUksVUFBVTtBQUFBLE1BQ3JGLENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDUjtBQUdBLFFBQUksbUJBQW1CLFNBQVNDLGtCQUFpQixNQUFNLGNBQWM7QUFDcEUsVUFBSSxnQkFBZ0I7QUFDcEIsVUFBSTtBQUNKLFVBQUksT0FBTyxnQkFBZ0IsYUFBYSxHQUFHO0FBQzFDLGdCQUFRLGVBQWU7QUFDdkIsd0JBQWdCLE1BQU0sTUFBTSxLQUFLO0FBQUEsTUFDbEM7QUFFQSxVQUFJLE9BQU8sWUFBWSxhQUFhLEdBQUc7QUFDdEMsWUFBSSxRQUFRLFdBQVc7QUFDdkIsWUFBSSxVQUFVLFdBQVc7QUFDeEIsa0JBQVEsT0FBTyxhQUFhO0FBQUEsUUFDN0I7QUFDQSxZQUFJLE9BQU8sVUFBVSxlQUFlLENBQUMsY0FBYztBQUNsRCxnQkFBTSxJQUFJLFdBQVcsZUFBZSxPQUFPLHNEQUFzRDtBQUFBLFFBQ2xHO0FBRUEsZUFBTztBQUFBLFVBQ047QUFBQSxVQUNBLE1BQU07QUFBQSxVQUNOO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFFQSxZQUFNLElBQUksYUFBYSxlQUFlLE9BQU8sa0JBQWtCO0FBQUEsSUFDaEU7QUFFQSxJQUFBSixRQUFPLFVBQVUsU0FBUyxhQUFhLE1BQU0sY0FBYztBQUMxRCxVQUFJLE9BQU8sU0FBUyxZQUFZLEtBQUssV0FBVyxHQUFHO0FBQ2xELGNBQU0sSUFBSSxXQUFXLDJDQUEyQztBQUFBLE1BQ2pFO0FBQ0EsVUFBSSxVQUFVLFNBQVMsS0FBSyxPQUFPLGlCQUFpQixXQUFXO0FBQzlELGNBQU0sSUFBSSxXQUFXLDJDQUEyQztBQUFBLE1BQ2pFO0FBRUEsVUFBSSxNQUFNLGVBQWUsSUFBSSxNQUFNLE1BQU07QUFDeEMsY0FBTSxJQUFJLGFBQWEsb0ZBQW9GO0FBQUEsTUFDNUc7QUFDQSxVQUFJLFFBQVEsYUFBYSxJQUFJO0FBQzdCLFVBQUksb0JBQW9CLE1BQU0sU0FBUyxJQUFJLE1BQU0sS0FBSztBQUV0RCxVQUFJLFlBQVksaUJBQWlCLE1BQU0sb0JBQW9CLEtBQUssWUFBWTtBQUM1RSxVQUFJLG9CQUFvQixVQUFVO0FBQ2xDLFVBQUksUUFBUSxVQUFVO0FBQ3RCLFVBQUkscUJBQXFCO0FBRXpCLFVBQUksUUFBUSxVQUFVO0FBQ3RCLFVBQUksT0FBTztBQUNWLDRCQUFvQixNQUFNO0FBQzFCLHFCQUFhLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLE1BQzNDO0FBRUEsZUFBUyxJQUFJLEdBQUcsUUFBUSxNQUFNLElBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUN2RCxZQUFJLE9BQU8sTUFBTTtBQUNqQixZQUFJLFFBQVEsVUFBVSxNQUFNLEdBQUcsQ0FBQztBQUNoQyxZQUFJLE9BQU8sVUFBVSxNQUFNLEVBQUU7QUFDN0IsYUFFRyxVQUFVLE9BQU8sVUFBVSxPQUFPLFVBQVUsUUFDekMsU0FBUyxPQUFPLFNBQVMsT0FBTyxTQUFTLFNBRTNDLFVBQVUsTUFDWjtBQUNELGdCQUFNLElBQUksYUFBYSxzREFBc0Q7QUFBQSxRQUM5RTtBQUNBLFlBQUksU0FBUyxpQkFBaUIsQ0FBQyxPQUFPO0FBQ3JDLCtCQUFxQjtBQUFBLFFBQ3RCO0FBRUEsNkJBQXFCLE1BQU07QUFDM0IsNEJBQW9CLE1BQU0sb0JBQW9CO0FBRTlDLFlBQUksT0FBTyxZQUFZLGlCQUFpQixHQUFHO0FBQzFDLGtCQUFRLFdBQVc7QUFBQSxRQUNwQixXQUFXLFNBQVMsTUFBTTtBQUN6QixjQUFJLEVBQUUsUUFBUSxRQUFRO0FBQ3JCLGdCQUFJLENBQUMsY0FBYztBQUNsQixvQkFBTSxJQUFJLFdBQVcsd0JBQXdCLE9BQU8sNkNBQTZDO0FBQUEsWUFDbEc7QUFDQSxtQkFBTztBQUFBLFVBQ1I7QUFDQSxjQUFJLFNBQVUsSUFBSSxLQUFNLE1BQU0sUUFBUTtBQUNyQyxnQkFBSSxPQUFPLE1BQU0sT0FBTyxJQUFJO0FBQzVCLG9CQUFRLENBQUMsQ0FBQztBQVNWLGdCQUFJLFNBQVMsU0FBUyxRQUFRLEVBQUUsbUJBQW1CLEtBQUssTUFBTTtBQUM3RCxzQkFBUSxLQUFLO0FBQUEsWUFDZCxPQUFPO0FBQ04sc0JBQVEsTUFBTTtBQUFBLFlBQ2Y7QUFBQSxVQUNELE9BQU87QUFDTixvQkFBUSxPQUFPLE9BQU8sSUFBSTtBQUMxQixvQkFBUSxNQUFNO0FBQUEsVUFDZjtBQUVBLGNBQUksU0FBUyxDQUFDLG9CQUFvQjtBQUNqQyx1QkFBVyxxQkFBcUI7QUFBQSxVQUNqQztBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQTtBQUFBOzs7QUN2VkE7QUFBQSxnRkFBQUssU0FBQTtBQUFBO0FBRUEsUUFBSSxPQUFPO0FBQ1gsUUFBSSxlQUFlO0FBRW5CLFFBQUksU0FBUyxhQUFhLDRCQUE0QjtBQUN0RCxRQUFJLFFBQVEsYUFBYSwyQkFBMkI7QUFDcEQsUUFBSSxnQkFBZ0IsYUFBYSxtQkFBbUIsSUFBSSxLQUFLLEtBQUssS0FBSyxPQUFPLE1BQU07QUFFcEYsUUFBSSxRQUFRLGFBQWEscUNBQXFDLElBQUk7QUFDbEUsUUFBSSxrQkFBa0IsYUFBYSwyQkFBMkIsSUFBSTtBQUNsRSxRQUFJLE9BQU8sYUFBYSxZQUFZO0FBRXBDLFFBQUksaUJBQWlCO0FBQ3BCLFVBQUk7QUFDSCx3QkFBZ0IsQ0FBQyxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUFBLE1BQ3RDLFNBQVMsR0FBUDtBQUVELDBCQUFrQjtBQUFBLE1BQ25CO0FBQUEsSUFDRDtBQUVBLElBQUFBLFFBQU8sVUFBVSxTQUFTLFNBQVMsa0JBQWtCO0FBQ3BELFVBQUksT0FBTyxjQUFjLE1BQU0sT0FBTyxTQUFTO0FBQy9DLFVBQUksU0FBUyxpQkFBaUI7QUFDN0IsWUFBSSxPQUFPLE1BQU0sTUFBTSxRQUFRO0FBQy9CLFlBQUksS0FBSyxjQUFjO0FBRXRCO0FBQUEsWUFDQztBQUFBLFlBQ0E7QUFBQSxZQUNBLEVBQUUsT0FBTyxJQUFJLEtBQUssR0FBRyxpQkFBaUIsVUFBVSxVQUFVLFNBQVMsRUFBRSxFQUFFO0FBQUEsVUFDeEU7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBSSxZQUFZLFNBQVNDLGFBQVk7QUFDcEMsYUFBTyxjQUFjLE1BQU0sUUFBUSxTQUFTO0FBQUEsSUFDN0M7QUFFQSxRQUFJLGlCQUFpQjtBQUNwQixzQkFBZ0JELFFBQU8sU0FBUyxTQUFTLEVBQUUsT0FBTyxVQUFVLENBQUM7QUFBQSxJQUM5RCxPQUFPO0FBQ04sTUFBQUEsUUFBTyxRQUFRLFFBQVE7QUFBQSxJQUN4QjtBQUFBO0FBQUE7OztBQzlDQTtBQUFBLG9GQUFBRSxTQUFBO0FBQUE7QUFFQSxRQUFJLGVBQWU7QUFFbkIsUUFBSSxXQUFXO0FBRWYsUUFBSSxXQUFXLFNBQVMsYUFBYSwwQkFBMEIsQ0FBQztBQUVoRSxJQUFBQSxRQUFPLFVBQVUsU0FBUyxtQkFBbUIsTUFBTSxjQUFjO0FBQ2hFLFVBQUksWUFBWSxhQUFhLE1BQU0sQ0FBQyxDQUFDLFlBQVk7QUFDakQsVUFBSSxPQUFPLGNBQWMsY0FBYyxTQUFTLE1BQU0sYUFBYSxJQUFJLElBQUk7QUFDMUUsZUFBTyxTQUFTLFNBQVM7QUFBQSxNQUMxQjtBQUNBLGFBQU87QUFBQSxJQUNSO0FBQUE7QUFBQTs7O0FDZEE7QUFBQSxzRkFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxpQkFBaUIsaUJBQWlDO0FBQ3RELFFBQUksWUFBWTtBQUVoQixRQUFJLFlBQVksVUFBVSwyQkFBMkI7QUFFckQsUUFBSSxzQkFBc0IsU0FBUyxZQUFZLE9BQU87QUFDckQsVUFBSSxrQkFBa0IsU0FBUyxPQUFPLFVBQVUsWUFBWSxPQUFPLGVBQWUsT0FBTztBQUN4RixlQUFPO0FBQUEsTUFDUjtBQUNBLGFBQU8sVUFBVSxLQUFLLE1BQU07QUFBQSxJQUM3QjtBQUVBLFFBQUksb0JBQW9CLFNBQVMsWUFBWSxPQUFPO0FBQ25ELFVBQUksb0JBQW9CLEtBQUssR0FBRztBQUMvQixlQUFPO0FBQUEsTUFDUjtBQUNBLGFBQU8sVUFBVSxRQUNoQixPQUFPLFVBQVUsWUFDakIsT0FBTyxNQUFNLFdBQVcsWUFDeEIsTUFBTSxVQUFVLEtBQ2hCLFVBQVUsS0FBSyxNQUFNLG9CQUNyQixVQUFVLE1BQU0sTUFBTSxNQUFNO0FBQUEsSUFDOUI7QUFFQSxRQUFJLDRCQUE2QixXQUFZO0FBQzVDLGFBQU8sb0JBQW9CLFNBQVM7QUFBQSxJQUNyQyxFQUFFO0FBRUYsd0JBQW9CLG9CQUFvQjtBQUV4QyxJQUFBQSxRQUFPLFVBQVUsNEJBQTRCLHNCQUFzQjtBQUFBO0FBQUE7OztBQ2hDbkU7QUFBQSw4R0FBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxlQUFlO0FBRW5CLFFBQUksa0JBQWtCLGFBQWEsMkJBQTJCLElBQUk7QUFFbEUsUUFBSSx5QkFBeUIsU0FBU0MsMEJBQXlCO0FBQzlELFVBQUksaUJBQWlCO0FBQ3BCLFlBQUk7QUFDSCwwQkFBZ0IsQ0FBQyxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQyxpQkFBTztBQUFBLFFBQ1IsU0FBUyxHQUFQO0FBRUQsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBRUEsMkJBQXVCLDBCQUEwQixTQUFTLDBCQUEwQjtBQUVuRixVQUFJLENBQUMsdUJBQXVCLEdBQUc7QUFDOUIsZUFBTztBQUFBLE1BQ1I7QUFDQSxVQUFJO0FBQ0gsZUFBTyxnQkFBZ0IsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFdBQVc7QUFBQSxNQUMvRCxTQUFTLEdBQVA7QUFFRCxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFFQSxJQUFBRCxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNoQ2pCO0FBQUEsZ0dBQUFFLFNBQUE7QUFBQTtBQUVBLFFBQUksT0FBTztBQUNYLFFBQUksYUFBYSxPQUFPLFdBQVcsY0FBYyxPQUFPLE9BQU8sS0FBSyxNQUFNO0FBRTFFLFFBQUksUUFBUSxPQUFPLFVBQVU7QUFDN0IsUUFBSSxTQUFTLE1BQU0sVUFBVTtBQUM3QixRQUFJLHFCQUFxQixPQUFPO0FBRWhDLFFBQUksYUFBYSxTQUFVLElBQUk7QUFDOUIsYUFBTyxPQUFPLE9BQU8sY0FBYyxNQUFNLEtBQUssRUFBRSxNQUFNO0FBQUEsSUFDdkQ7QUFFQSxRQUFJLHlCQUF5QixtQ0FBb0M7QUFFakUsUUFBSSxzQkFBc0Isc0JBQXNCO0FBRWhELFFBQUksaUJBQWlCLFNBQVUsUUFBUSxNQUFNLE9BQU8sV0FBVztBQUM5RCxVQUFJLFFBQVEsV0FBVyxDQUFDLFdBQVcsU0FBUyxLQUFLLENBQUMsVUFBVSxJQUFJO0FBQy9EO0FBQUEsTUFDRDtBQUNBLFVBQUkscUJBQXFCO0FBQ3hCLDJCQUFtQixRQUFRLE1BQU07QUFBQSxVQUNoQyxjQUFjO0FBQUEsVUFDZCxZQUFZO0FBQUEsVUFDWjtBQUFBLFVBQ0EsVUFBVTtBQUFBLFFBQ1gsQ0FBQztBQUFBLE1BQ0YsT0FBTztBQUNOLGVBQU8sUUFBUTtBQUFBLE1BQ2hCO0FBQUEsSUFDRDtBQUVBLFFBQUksbUJBQW1CLFNBQVUsUUFBUSxLQUFLO0FBQzdDLFVBQUksYUFBYSxVQUFVLFNBQVMsSUFBSSxVQUFVLEtBQUssQ0FBQztBQUN4RCxVQUFJLFFBQVEsS0FBSyxHQUFHO0FBQ3BCLFVBQUksWUFBWTtBQUNmLGdCQUFRLE9BQU8sS0FBSyxPQUFPLE9BQU8sc0JBQXNCLEdBQUcsQ0FBQztBQUFBLE1BQzdEO0FBQ0EsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3pDLHVCQUFlLFFBQVEsTUFBTSxJQUFJLElBQUksTUFBTSxLQUFLLFdBQVcsTUFBTSxHQUFHO0FBQUEsTUFDckU7QUFBQSxJQUNEO0FBRUEscUJBQWlCLHNCQUFzQixDQUFDLENBQUM7QUFFekMsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDOUNqQixJQUFBQywwQkFBQTtBQUFBLHlGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGNBQWMsU0FBVSxPQUFPO0FBQ2xDLGFBQU8sVUFBVTtBQUFBLElBQ2xCO0FBRUEsSUFBQUEsUUFBTyxVQUFVLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDbEMsVUFBSSxNQUFNLEtBQUssTUFBTSxHQUFHO0FBQ3ZCLGVBQU8sSUFBSSxNQUFNLElBQUk7QUFBQSxNQUN0QjtBQUNBLFVBQUksTUFBTSxHQUFHO0FBQ1osZUFBTztBQUFBLE1BQ1I7QUFDQSxVQUFJLFlBQVksQ0FBQyxLQUFLLFlBQVksQ0FBQyxHQUFHO0FBQ3JDLGVBQU87QUFBQSxNQUNSO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQTtBQUFBOzs7QUNqQkE7QUFBQSxtRkFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxpQkFBaUI7QUFFckIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsY0FBYztBQUN2QyxhQUFPLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLO0FBQUEsSUFDdEQ7QUFBQTtBQUFBOzs7QUNOQTtBQUFBLCtFQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBRWIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsZUFBZTtBQUN4QyxVQUFJLFdBQVcsWUFBWTtBQUMzQixhQUFPLFFBQVEsRUFBRSxJQUFJLFNBQVMsR0FBRztBQUFBLFFBQ2hDLElBQUksU0FBUyxlQUFlO0FBQzNCLGlCQUFPLE9BQU8sT0FBTztBQUFBLFFBQ3RCO0FBQUEsTUFDRCxDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1I7QUFBQTtBQUFBOzs7QUNiQTtBQUFBLGdGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLFNBQVM7QUFDYixRQUFJLFdBQVc7QUFFZixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLGNBQWM7QUFDbEIsUUFBSSxPQUFPO0FBRVgsUUFBSSxXQUFXLFNBQVMsWUFBWSxHQUFHLE1BQU07QUFFN0MsV0FBTyxVQUFVO0FBQUEsTUFDaEI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0QsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ2pCakI7QUFBQSw4RUFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxZQUFZO0FBQ2hCLFFBQUksaUJBQWlCLGlCQUFpQztBQUN0RCxRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBRUosUUFBSSxnQkFBZ0I7QUFDbkIsWUFBTSxVQUFVLGlDQUFpQztBQUNqRCxjQUFRLFVBQVUsdUJBQXVCO0FBQ3pDLHNCQUFnQixDQUFDO0FBRWIseUJBQW1CLFdBQVk7QUFDbEMsY0FBTTtBQUFBLE1BQ1A7QUFDQSx1QkFBaUI7QUFBQSxRQUNoQixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDVjtBQUVBLFVBQUksT0FBTyxPQUFPLGdCQUFnQixVQUFVO0FBQzNDLHVCQUFlLE9BQU8sZUFBZTtBQUFBLE1BQ3RDO0FBQUEsSUFDRDtBQVhLO0FBYUwsUUFBSSxZQUFZLFVBQVUsMkJBQTJCO0FBQ3JELFFBQUksT0FBTyxPQUFPO0FBQ2xCLFFBQUksYUFBYTtBQUVqQixJQUFBQSxRQUFPLFVBQVUsaUJBRWQsU0FBUyxRQUFRLE9BQU87QUFDekIsVUFBSSxDQUFDLFNBQVMsT0FBTyxVQUFVLFVBQVU7QUFDeEMsZUFBTztBQUFBLE1BQ1I7QUFFQSxVQUFJLGFBQWEsS0FBSyxPQUFPLFdBQVc7QUFDeEMsVUFBSSwyQkFBMkIsY0FBYyxJQUFJLFlBQVksT0FBTztBQUNwRSxVQUFJLENBQUMsMEJBQTBCO0FBQzlCLGVBQU87QUFBQSxNQUNSO0FBRUEsVUFBSTtBQUNILGNBQU0sT0FBTyxjQUFjO0FBQUEsTUFDNUIsU0FBUyxHQUFQO0FBQ0QsZUFBTyxNQUFNO0FBQUEsTUFDZDtBQUFBLElBQ0QsSUFDRSxTQUFTLFFBQVEsT0FBTztBQUV6QixVQUFJLENBQUMsU0FBVSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBYTtBQUN6RSxlQUFPO0FBQUEsTUFDUjtBQUVBLGFBQU8sVUFBVSxLQUFLLE1BQU07QUFBQSxJQUM3QjtBQUFBO0FBQUE7OztBQ3pERDtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLHFCQUFxQixTQUFTQyxzQkFBcUI7QUFDdEQsYUFBTyxPQUFPLFNBQVMsSUFBSTtBQUFBLE1BQUMsRUFBRSxTQUFTO0FBQUEsSUFDeEM7QUFFQSxRQUFJLE9BQU8sT0FBTztBQUNsQixRQUFJLE1BQU07QUFDVCxVQUFJO0FBQ0gsYUFBSyxDQUFDLEdBQUcsUUFBUTtBQUFBLE1BQ2xCLFNBQVMsR0FBUDtBQUVELGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUVBLHVCQUFtQixpQ0FBaUMsU0FBUyxpQ0FBaUM7QUFDN0YsVUFBSSxDQUFDLG1CQUFtQixLQUFLLENBQUMsTUFBTTtBQUNuQyxlQUFPO0FBQUEsTUFDUjtBQUNBLFVBQUksT0FBTyxLQUFLLFdBQVk7QUFBQSxNQUFDLEdBQUcsTUFBTTtBQUN0QyxhQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLO0FBQUEsSUFDekI7QUFFQSxRQUFJLFFBQVEsU0FBUyxVQUFVO0FBRS9CLHVCQUFtQiwwQkFBMEIsU0FBUywwQkFBMEI7QUFDL0UsYUFBTyxtQkFBbUIsS0FBSyxPQUFPLFVBQVUsY0FBYyxTQUFTLElBQUk7QUFBQSxNQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVM7QUFBQSxJQUMvRjtBQUVBLElBQUFELFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQzlCakIsSUFBQUUsMEJBQUE7QUFBQSxtSEFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxpQ0FBaUMsK0JBQWdDLCtCQUErQjtBQUVwRyxRQUFJLFVBQVU7QUFDZCxRQUFJLGFBQWE7QUFFakIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsUUFBUTtBQUNqQyxVQUFJLFFBQVEsUUFBUSxTQUFTLFFBQVEsSUFBSSxHQUFHO0FBQzNDLGNBQU0sSUFBSSxXQUFXLG9EQUFvRDtBQUFBLE1BQzFFO0FBQ0EsVUFBSSxTQUFTO0FBQ2IsVUFBSSxLQUFLLFlBQVk7QUFDcEIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsVUFBSSxLQUFLLFFBQVE7QUFDaEIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsVUFBSSxLQUFLLFlBQVk7QUFDcEIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsVUFBSSxLQUFLLFdBQVc7QUFDbkIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsVUFBSSxLQUFLLFFBQVE7QUFDaEIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsVUFBSSxLQUFLLFNBQVM7QUFDakIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsVUFBSSxLQUFLLFFBQVE7QUFDaEIsa0JBQVU7QUFBQSxNQUNYO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFFQSxRQUFJLGtDQUFrQyxPQUFPLGdCQUFnQjtBQUM1RCxhQUFPLGVBQWVBLFFBQU8sU0FBUyxRQUFRLEVBQUUsT0FBTyxZQUFZLENBQUM7QUFBQSxJQUNyRTtBQUFBO0FBQUE7OztBQ3RDQSxJQUFBQyxvQkFBQTtBQUFBLDZHQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGlCQUFpQjtBQUVyQixRQUFJLHNCQUFzQiw0QkFBNkI7QUFDdkQsUUFBSSxRQUFRLE9BQU87QUFFbkIsSUFBQUEsUUFBTyxVQUFVLFNBQVMsY0FBYztBQUN2QyxVQUFJLHVCQUF3QixPQUFRLFVBQVUsT0FBTztBQUNwRCxZQUFJLGFBQWEsTUFBTSxPQUFPLFdBQVcsT0FBTztBQUNoRCxZQUNDLGNBQ0csT0FBTyxXQUFXLFFBQVEsY0FDMUIsT0FBTyxPQUFPLFVBQVUsV0FBVyxhQUNuQyxPQUFPLE9BQU8sVUFBVSxlQUFlLFdBQ3pDO0FBRUQsY0FBSSxRQUFRO0FBQ1osY0FBSSxJQUFJLENBQUM7QUFDVCxpQkFBTyxlQUFlLEdBQUcsY0FBYztBQUFBLFlBQ3RDLEtBQUssV0FBWTtBQUNoQix1QkFBUztBQUFBLFlBQ1Y7QUFBQSxVQUNELENBQUM7QUFDRCxpQkFBTyxlQUFlLEdBQUcsVUFBVTtBQUFBLFlBQ2xDLEtBQUssV0FBWTtBQUNoQix1QkFBUztBQUFBLFlBQ1Y7QUFBQSxVQUNELENBQUM7QUFDRCxjQUFJLFVBQVUsTUFBTTtBQUNuQixtQkFBTyxXQUFXO0FBQUEsVUFDbkI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBQUE7QUFBQTs7O0FDbkNBLElBQUFDLGdCQUFBO0FBQUEseUdBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksc0JBQXNCLDRCQUE2QjtBQUN2RCxRQUFJLGNBQWM7QUFDbEIsUUFBSSxPQUFPLE9BQU87QUFDbEIsUUFBSSxpQkFBaUIsT0FBTztBQUM1QixRQUFJLFVBQVU7QUFDZCxRQUFJLFdBQVcsT0FBTztBQUN0QixRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsU0FBUyxZQUFZO0FBQ3JDLFVBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVO0FBQ3RDLGNBQU0sSUFBSSxRQUFRLDJGQUEyRjtBQUFBLE1BQzlHO0FBQ0EsVUFBSSxXQUFXLFlBQVk7QUFDM0IsVUFBSSxRQUFRLFNBQVMsS0FBSztBQUMxQixVQUFJLGFBQWEsS0FBSyxPQUFPLE9BQU87QUFDcEMsVUFBSSxDQUFDLGNBQWMsV0FBVyxRQUFRLFVBQVU7QUFDL0MsdUJBQWUsT0FBTyxTQUFTO0FBQUEsVUFDOUIsY0FBYztBQUFBLFVBQ2QsWUFBWTtBQUFBLFVBQ1osS0FBSztBQUFBLFFBQ04sQ0FBQztBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7OztBQ3pCQTtBQUFBLDBHQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLFNBQVM7QUFDYixRQUFJLFdBQVc7QUFFZixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLGNBQWM7QUFDbEIsUUFBSSxPQUFPO0FBRVgsUUFBSSxhQUFhLFNBQVMsWUFBWSxDQUFDO0FBRXZDLFdBQU8sWUFBWTtBQUFBLE1BQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNELENBQUM7QUFFRCxJQUFBQSxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNqQmpCO0FBQUEsMEZBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksU0FBUyxLQUFLLFVBQVU7QUFDNUIsUUFBSSxnQkFBZ0IsU0FBUyxrQkFBa0IsT0FBTztBQUNyRCxVQUFJO0FBQ0gsZUFBTyxLQUFLLEtBQUs7QUFDakIsZUFBTztBQUFBLE1BQ1IsU0FBUyxHQUFQO0FBQ0QsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBRUEsUUFBSSxRQUFRLE9BQU8sVUFBVTtBQUM3QixRQUFJLFlBQVk7QUFDaEIsUUFBSSxpQkFBaUIsaUJBQWlDO0FBRXRELElBQUFBLFFBQU8sVUFBVSxTQUFTLGFBQWEsT0FBTztBQUM3QyxVQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtBQUNoRCxlQUFPO0FBQUEsTUFDUjtBQUNBLGFBQU8saUJBQWlCLGNBQWMsS0FBSyxJQUFJLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFBQSxJQUN0RTtBQUFBO0FBQUE7OztBQ3JCQTtBQUFBLGtGQUFBQyxTQUFBO0FBQUEsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUNsQixRQUFJLEtBQUs7QUFDVCxRQUFJLFVBQVU7QUFDZCxRQUFJLFFBQVE7QUFDWixRQUFJLFNBQVM7QUFFYixRQUFJLFVBQVUsS0FBSyxVQUFVO0FBRTdCLGFBQVMsVUFBVSxRQUFRLFVBQVUsU0FBUztBQUM1QyxVQUFJLE9BQU8sV0FBVyxDQUFDO0FBR3ZCLFVBQUksS0FBSyxTQUFTLEdBQUcsUUFBUSxRQUFRLElBQUksV0FBVyxVQUFVO0FBQzVELGVBQU87QUFBQSxNQUNUO0FBR0EsVUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFhLE9BQU8sV0FBVyxZQUFZLE9BQU8sYUFBYSxVQUFXO0FBQ3hGLGVBQU8sS0FBSyxTQUFTLEdBQUcsUUFBUSxRQUFRLElBQUksVUFBVTtBQUFBLE1BQ3hEO0FBV0EsYUFBTyxTQUFTLFFBQVEsVUFBVSxJQUFJO0FBQUEsSUFDeEM7QUFFQSxhQUFTLGtCQUFrQixPQUFPO0FBQ2hDLGFBQU8sVUFBVSxRQUFRLFVBQVU7QUFBQSxJQUNyQztBQUVBLGFBQVMsU0FBUyxHQUFHO0FBQ25CLFVBQUksQ0FBQyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sRUFBRSxXQUFXLFVBQVU7QUFDL0QsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLE9BQU8sRUFBRSxTQUFTLGNBQWMsT0FBTyxFQUFFLFVBQVUsWUFBWTtBQUNqRSxlQUFPO0FBQUEsTUFDVDtBQUNBLFVBQUksRUFBRSxTQUFTLEtBQUssT0FBTyxFQUFFLE9BQU8sVUFBVTtBQUM1QyxlQUFPO0FBQUEsTUFDVDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxTQUFTLEdBQUcsR0FBRyxNQUFNO0FBRTVCLFVBQUksR0FBRztBQUNQLFVBQUksT0FBTyxNQUFNLE9BQU8sR0FBRztBQUFFLGVBQU87QUFBQSxNQUFPO0FBQzNDLFVBQUksa0JBQWtCLENBQUMsS0FBSyxrQkFBa0IsQ0FBQyxHQUFHO0FBQUUsZUFBTztBQUFBLE1BQU87QUFHbEUsVUFBSSxFQUFFLGNBQWMsRUFBRSxXQUFXO0FBQUUsZUFBTztBQUFBLE1BQU87QUFFakQsVUFBSSxZQUFZLENBQUMsTUFBTSxZQUFZLENBQUMsR0FBRztBQUFFLGVBQU87QUFBQSxNQUFPO0FBRXZELFVBQUksV0FBVyxRQUFRLENBQUM7QUFDeEIsVUFBSSxXQUFXLFFBQVEsQ0FBQztBQUN4QixVQUFJLGFBQWEsVUFBVTtBQUFFLGVBQU87QUFBQSxNQUFPO0FBQzNDLFVBQUksWUFBWSxVQUFVO0FBQ3hCLGVBQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxNQUFNLENBQUMsTUFBTSxNQUFNLENBQUM7QUFBQSxNQUN0RDtBQUVBLFVBQUksT0FBTyxDQUFDLEtBQUssT0FBTyxDQUFDLEdBQUc7QUFDMUIsZUFBTyxRQUFRLEtBQUssQ0FBQyxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQUEsTUFDM0M7QUFFQSxVQUFJLFlBQVksU0FBUyxDQUFDO0FBQzFCLFVBQUksWUFBWSxTQUFTLENBQUM7QUFDMUIsVUFBSSxjQUFjLFdBQVc7QUFBRSxlQUFPO0FBQUEsTUFBTztBQUM3QyxVQUFJLGFBQWEsV0FBVztBQUMxQixZQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVE7QUFBRSxpQkFBTztBQUFBLFFBQU87QUFDM0MsYUFBSyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUM3QixjQUFJLEVBQUUsT0FBTyxFQUFFLElBQUk7QUFBRSxtQkFBTztBQUFBLFVBQU87QUFBQSxRQUNyQztBQUNBLGVBQU87QUFBQSxNQUNUO0FBRUEsVUFBSSxPQUFPLE1BQU0sT0FBTyxHQUFHO0FBQUUsZUFBTztBQUFBLE1BQU87QUFFM0MsVUFBSTtBQUNGLFlBQUksS0FBSyxXQUFXLENBQUM7QUFDckIsWUFBSSxLQUFLLFdBQVcsQ0FBQztBQUFBLE1BQ3ZCLFNBQVMsR0FBUDtBQUNBLGVBQU87QUFBQSxNQUNUO0FBRUEsVUFBSSxHQUFHLFdBQVcsR0FBRyxRQUFRO0FBQUUsZUFBTztBQUFBLE1BQU87QUFHN0MsU0FBRyxLQUFLO0FBQ1IsU0FBRyxLQUFLO0FBRVIsV0FBSyxJQUFJLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQ25DLFlBQUksR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUFFLGlCQUFPO0FBQUEsUUFBTztBQUFBLE1BQ3RDO0FBRUEsV0FBSyxJQUFJLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQ25DLGNBQU0sR0FBRztBQUNULFlBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSxHQUFHO0FBQUUsaUJBQU87QUFBQSxRQUFPO0FBQUEsTUFDeEQ7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQy9HakI7QUFBQSxzRkFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxlQUFlO0FBQ25CLFFBQUksV0FBVztBQUNmLFFBQUksVUFBVTtBQUNkLFFBQUksWUFBWTtBQUVoQixJQUFBQSxRQUFPLFVBQVU7QUFFakIsYUFBUyxPQUFRLE1BQU07QUFDckIsV0FBSyxPQUFPLGFBQWEsSUFBSTtBQUM3QixXQUFLLEtBQUssZ0JBQWdCLENBQUM7QUFDM0IsV0FBSyxXQUFXLENBQUM7QUFDakIsV0FBSyxLQUFLLEdBQUcsU0FBUyxLQUFLLGdCQUFnQixLQUFLLElBQUksQ0FBQztBQUFBLElBQ3ZEO0FBRUEsV0FBTyxVQUFVLFdBQVcsU0FBVSxTQUFTO0FBQzdDLFVBQUksT0FBTztBQUVYLFVBQUksTUFBTSxRQUFRLE9BQU87QUFBRyxnQkFBUSxRQUFRLFFBQVE7QUFBQTtBQUMvQyxpQkFBUyxPQUFPO0FBRXJCLGVBQVMsU0FBVSxRQUFRO0FBQ3pCLFlBQUksY0FBYyxLQUFLLFNBQVMsT0FBTztBQUN2QyxZQUFJLENBQUM7QUFBYSx3QkFBYyxLQUFLLFNBQVMsT0FBTyxRQUFRLENBQUM7QUFBQSxpQkFDckQsWUFBWSxLQUFLLGtCQUFrQixNQUFNLENBQUM7QUFBRztBQUN0RCxvQkFBWSxLQUFLLE1BQU07QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFFQSxXQUFPLFVBQVUsYUFBYSxTQUFVLFNBQVM7QUFDL0MsVUFBSSxPQUFPO0FBRVgsVUFBSSxNQUFNLFFBQVEsT0FBTztBQUFHLGdCQUFRLFFBQVEsVUFBVTtBQUFBO0FBQ2pELG1CQUFXLE9BQU87QUFFdkIsZUFBUyxXQUFZLFFBQVE7QUFDM0IsWUFBSSxPQUFPLE9BQU87QUFDbEIsWUFBSSxFQUFFLFFBQVEsS0FBSztBQUFXO0FBQzlCLGFBQUssU0FBUyxRQUFRLEtBQUssU0FBUyxNQUFNLE9BQU8sU0FBVSxHQUFHO0FBQzVELGlCQUFPLEVBQUUsU0FBUyxPQUFPO0FBQUEsUUFDM0IsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBRUEsV0FBTyxVQUFVLGtCQUFrQixTQUFVLE9BQU87QUFDbEQsVUFBSSxPQUFPO0FBQ1gsWUFBTSxVQUFVLFFBQVEsU0FBVSxVQUFVO0FBQzFDLFlBQUksT0FBTyxTQUFTO0FBQ3BCLFlBQUksT0FBTyxTQUFTO0FBR3BCLFlBQUksVUFBVSxTQUFTLFFBQ25CLFFBQVEsTUFBTSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsSUFBSSxLQUFLLFlBQVksS0FBSyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFDbEYsS0FBSyxZQUFZLE1BQU0sSUFBSTtBQUUvQixZQUFJLFFBQVEsV0FBVztBQUFHO0FBRzFCLFlBQUksY0FBYyxDQUFDO0FBQ25CLFlBQUksU0FBUyxPQUFPO0FBQ2xCLGtCQUFRLFFBQVEsU0FBVSxRQUFRO0FBQ2hDLGdCQUFJLE9BQU8sU0FBUztBQUFPO0FBQzNCLDBCQUFjLFlBQ1gsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssQ0FBQyxFQUMzQyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxDQUFDO0FBQUEsVUFDaEQsQ0FBQztBQUlELHNCQUNHLE9BQU8sU0FBVSxRQUFRO0FBQ3hCLG1CQUFPLE9BQU8sU0FBUztBQUFBLFVBQ3pCLENBQUMsRUFDQSxJQUFJLFNBQVUsUUFBUTtBQUNyQixtQkFBTyxPQUFPLEtBQUs7QUFBQSxVQUNyQixDQUFDLEVBQ0EsT0FBTyxPQUFPLENBQUMsRUFDZixRQUFRLFNBQVUsUUFBUTtBQUN6QiwwQkFBYyxZQUNYLE9BQU8sS0FBSyxZQUFZLFFBQVEsR0FBRyxDQUFDLEVBQ3BDLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxDQUFDO0FBQUEsVUFDNUMsQ0FBQztBQUFBLFFBQ0w7QUFFQSxhQUFLLEtBQUssUUFBUSxFQUFFLFNBQWtCLFlBQXlCLEdBQUcsU0FBVSxLQUFLO0FBQy9FLGNBQUk7QUFBSyxrQkFBTTtBQUFBLFFBQ2pCLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNIO0FBRUEsV0FBTyxVQUFVLGNBQWMsU0FBVSxNQUFNLE1BQU07QUFDbkQsVUFBSSxFQUFFLFFBQVEsS0FBSztBQUFXLGVBQU8sQ0FBQztBQUV0QyxhQUFPLEtBQUssU0FBUyxNQUFNLE9BQU8sU0FBVSxRQUFRO0FBQ2xELFlBQUksUUFBUSxDQUFDLEtBQUssUUFBUSxHQUFHLElBQUksT0FBTyxPQUFPLE9BQU8sS0FBSyxNQUFNLEdBQUcsRUFBRTtBQUN0RSxlQUFPLFNBQVMsT0FBTyxJQUFJO0FBQUEsTUFDN0IsQ0FBQztBQUFBLElBQ0g7QUFFQSxhQUFTLGtCQUFtQixHQUFHO0FBQzdCLGFBQU8sU0FBVSxHQUFHO0FBQ2xCLGVBQU8sRUFBRSxTQUFTLEVBQUUsUUFDbEIsRUFBRSxTQUFTLEVBQUUsUUFDYixVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFFQSxhQUFTLFNBQVU7QUFDakIsVUFBSSxNQUFNLENBQUM7QUFDWCxhQUFPLFNBQVUsS0FBSztBQUNwQixZQUFJLENBQUMsSUFBSSxRQUFRLEdBQUc7QUFBRyxpQkFBTztBQUM5QixZQUFJLEtBQUssR0FBRztBQUNaLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ25IQTtBQUFBLGtGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLE9BQU8sUUFBUTtBQUNuQixRQUFJLGVBQWUsUUFBUSxVQUFVO0FBQ3JDLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFDZixRQUFJLFNBQVM7QUFFYixRQUFJLE1BQU07QUFDVixRQUFJLFdBQVcsMkJBQTJCO0FBRTFDLElBQUFBLFFBQU8sVUFBVTtBQUVqQixTQUFLLFNBQVMsU0FBUyxZQUFZO0FBZ0JuQyxhQUFTLFFBQVMsTUFBTSxNQUFNLE1BQU07QUFDbEMsVUFBSSxPQUFPLFNBQVM7QUFBWSxlQUFPLElBQUksUUFBUSxNQUFNLE1BQU0sSUFBSTtBQUVuRSxtQkFBYSxLQUFLLElBQUk7QUFFdEIsV0FBSyxRQUFRO0FBQ2IsV0FBSyxjQUFjO0FBQ25CLFdBQUssY0FBYyxDQUFDO0FBQ3BCLFdBQUssT0FBTyxPQUFPLEtBQUssR0FBRztBQUUzQixVQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssTUFBTTtBQUN2QixhQUFLLFFBQVE7QUFDYixhQUFLLFlBQVk7QUFBQSxNQUNuQixPQUFPO0FBQ0wsYUFBSyxRQUFRLFlBQVksVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLEtBQUssSUFBSTtBQUN4RSxZQUFJLEtBQUs7QUFBTSxlQUFLLFFBQVEsS0FBSyxPQUFPLE1BQU0sS0FBSztBQUNuRCxhQUFLLFlBQVk7QUFBQSxNQUNuQjtBQUVBLFdBQUssV0FBVyxDQUFDO0FBRWpCLFVBQUk7QUFBTSxhQUFLLEdBQUcsTUFBTSxJQUFJO0FBRTVCLFdBQUssTUFBTTtBQUFBLElBQ2I7QUFFQSxZQUFRLFVBQVUsUUFBUSxXQUFZO0FBQ3BDLFVBQUksS0FBSztBQUFhO0FBRXRCLFVBQUksT0FBTztBQUtYLFVBQUksVUFBVSxDQUFDO0FBQ2YsVUFBSSxDQUFDLEtBQUs7QUFBVyxnQkFBUSxLQUFLLFNBQVM7QUFFM0MsV0FBSyxjQUFjLFNBQVUsUUFBUSxPQUFPO0FBQzFDLFlBQUksS0FBSyxXQUFXO0FBQ2xCLGlCQUFPLFFBQVEsUUFBUSxTQUFVLFFBQVE7QUFDdkMsZ0JBQUksT0FBTyxTQUFTLFNBQVMsT0FBTyxTQUFTLEtBQUssU0FBUyxPQUFPLFFBQVE7QUFBUztBQUNuRixvQkFBUSxPQUFPLFFBQVE7QUFDdkIsaUJBQUssTUFBTSxNQUFNLE9BQU8sTUFBTSxLQUFLO0FBQUEsVUFDckMsQ0FBQztBQUFBLFFBQ0g7QUFFQSxlQUFPLEtBQUssT0FBTyxFQUFFLFFBQVEsU0FBVSxNQUFNO0FBRTNDLG1CQUFTLE1BQU0sTUFBTSxFQUFFLFFBQVEsS0FBSyxlQUFlLEtBQUssSUFBSSxDQUFDO0FBRzdELGNBQUksVUFBVSxpQkFBaUIsTUFBTSxRQUFRLEtBQUssTUFBTSxLQUFLO0FBQzdELGNBQUksUUFBUSxXQUFXO0FBQUc7QUFFMUIsa0JBQVEsUUFBUSxTQUFVLFNBQVM7QUFDakMsZ0JBQUksS0FBSyxZQUFZLFFBQVE7QUFBTztBQUNwQyxpQkFBSyxZQUFZLE9BQU87QUFBQSxVQUMxQixDQUFDO0FBQUEsUUFDSCxDQUFDO0FBQUEsTUFDSDtBQUVBLFdBQUssTUFBTSxHQUFHLFlBQVksS0FBSyxXQUFXO0FBQzFDLFdBQUssT0FBTztBQUFBLElBQ2Q7QUFFQSxZQUFRLFVBQVUsT0FBTyxXQUFZO0FBQ25DLFVBQUksQ0FBQyxLQUFLO0FBQWE7QUFFdkIsV0FBSyxNQUFNLGVBQWUsWUFBWSxLQUFLLFdBQVc7QUFDdEQsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFFQSxZQUFRLFVBQVUsU0FBUyxXQUFZO0FBQ3JDLFdBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxLQUFLO0FBQUEsSUFDcEM7QUFFQSxZQUFRLFVBQVUsY0FBYyxTQUFVLFNBQVM7QUFDakQsV0FBSyxTQUFTLEtBQUssT0FBTztBQUMxQixXQUFLLFlBQVksUUFBUSxRQUFRO0FBQ2pDLFdBQUssS0FBSyxNQUFNLE9BQU87QUFBQSxJQUN6QjtBQUVBLFlBQVEsVUFBVSxpQkFBaUIsU0FBVSxNQUFNO0FBQ2pELFVBQUksU0FBUztBQUNiLFdBQUssU0FBUyxLQUFLLFNBQVUsR0FBRyxHQUFHO0FBQ2pDLFlBQUksU0FBUyxFQUFFLE1BQU0sSUFBSSxHQUFHO0FBQzFCLG9CQUFVO0FBQ1Ysa0JBQVE7QUFDUixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFDRCxVQUFJLENBQUM7QUFBUztBQUNkLFdBQUssU0FBUyxPQUFPLE9BQU8sQ0FBQztBQUM3QixhQUFPLEtBQUssWUFBWTtBQUN4QixXQUFLLEtBQUssUUFBUSxPQUFPO0FBQUEsSUFDM0I7QUFXQSxhQUFTLFNBQVUsTUFBTSxRQUFRO0FBQy9CLGFBQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxXQUFXLEVBQzVDLE9BQU8sU0FBVSxJQUFJO0FBQ3BCLGVBQU8sR0FBRyxTQUFTLFNBQVMsR0FBRyxRQUFRLEtBQUssU0FBUyxHQUFHLE1BQU0sSUFBSTtBQUFBLE1BQ3BFLENBQUMsRUFDQSxJQUFJLFNBQVUsSUFBSTtBQUNqQixlQUFPLEdBQUc7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNMO0FBRUEsYUFBUyxpQkFBa0IsTUFBTSxRQUFRLEtBQUssU0FBUztBQUNyRCxVQUFJLFVBQVUsT0FBTyxRQUFRLE9BQU8sT0FBTyxXQUFXLEVBQUUsT0FBTyxTQUFVLElBQUk7QUFDM0UsZUFBTyxHQUFHLE1BQU07QUFBQSxNQUNsQixDQUFDO0FBRUQsYUFBTyxRQUNKLE9BQU8sU0FBVSxJQUFJO0FBQ3BCLGVBQU8sR0FBRyxTQUFTLFNBQVMsU0FBUyxHQUFHLE1BQU0sSUFBSTtBQUFBLE1BQ3BELENBQUMsRUFDQSxJQUFJLFNBQVUsS0FBSztBQUNsQixZQUFJLFVBQVU7QUFBQSxVQUNaLFdBQVcsQ0FBQztBQUFBLFFBQ2Q7QUFFQSxnQkFDRyxPQUFPLFNBQVUsSUFBSTtBQUNwQixrQkFBUSxHQUFHLFNBQVMsU0FBUyxHQUFHLFNBQVMsVUFBVSxTQUFTLEdBQUcsTUFBTSxJQUFJLElBQUk7QUFBQSxRQUMvRSxDQUFDLEVBQ0EsUUFBUSxTQUFVLElBQUk7QUFDckIsY0FBSSxHQUFHLFNBQVMsT0FBTztBQUNyQixnQkFBSSxRQUFRLEdBQUcsS0FBSyxNQUFNLEdBQUc7QUFDN0IsZ0JBQUlDLFFBQU8sTUFBTTtBQUNqQixnQkFBSSxRQUFRLFlBQVksTUFBTSxNQUFNLE1BQU0sR0FBRyxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUM7QUFDMUQsb0JBQVEsT0FBT0E7QUFDZixvQkFBUSxPQUFPLEdBQUc7QUFDbEIsb0JBQVEsT0FBTyxHQUFHLEtBQUs7QUFDdkIsb0JBQVEsVUFBVTtBQUNsQixvQkFBUSxPQUFPLEdBQUcsS0FBSztBQUN2QixvQkFBUSxPQUFPLE1BQU07QUFDckIsb0JBQVEsV0FBVyxNQUFNO0FBQ3pCLG9CQUFRLFdBQVcsTUFBTTtBQUFBLFVBQzNCLFdBQVcsR0FBRyxTQUFTLE9BQU87QUFDNUIsb0JBQVEsU0FBUyxHQUFHO0FBQ3BCLG9CQUFRLE1BQU0sSUFBSSxPQUFPLEdBQUcsSUFBSTtBQUFBLFVBQ2xDO0FBQUEsUUFDRixDQUFDO0FBRUgsWUFBSSxDQUFDLFFBQVE7QUFBTTtBQUVuQixnQkFDRyxPQUFPLFNBQVUsSUFBSTtBQUNwQixrQkFBUSxHQUFHLFNBQVMsT0FBTyxHQUFHLFNBQVMsV0FBVyxTQUFTLEdBQUcsTUFBTSxRQUFRLElBQUk7QUFBQSxRQUNsRixDQUFDLEVBQ0EsUUFBUSxTQUFVLElBQUk7QUFDckIsa0JBQVEsVUFBVSxLQUFLLEdBQUcsSUFBSTtBQUFBLFFBQ2hDLENBQUM7QUFFSCxlQUFPO0FBQUEsTUFDVCxDQUFDLEVBQ0EsT0FBTyxTQUFVLElBQUk7QUFDcEIsZUFBTyxDQUFDLENBQUM7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNMO0FBQUE7QUFBQTs7O0FDck1BO0FBQUEsNEVBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksV0FBVztBQUNmLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUVkLElBQUFBLFFBQU8sVUFBVUM7QUFFakIsYUFBU0EsU0FBUyxNQUFNO0FBQ3RCLFVBQUksRUFBRSxnQkFBZ0JBO0FBQVUsZUFBTyxJQUFJQSxTQUFRLElBQUk7QUFDdkQsV0FBSyxVQUFVLElBQUksT0FBTyxJQUFJO0FBQzlCLFdBQUssWUFBWSxJQUFJLFNBQVMsS0FBSyxPQUFPO0FBQUEsSUFDNUM7QUFFQSxJQUFBQSxTQUFRLFVBQVUsVUFBVSxTQUFVLE1BQU07QUFDMUMsYUFBTyxLQUFLLFVBQVUsUUFBUSxJQUFJO0FBQUEsSUFDcEM7QUFFQSxJQUFBQSxTQUFRLFVBQVUsZUFBZSxTQUFVLElBQUk7QUFDN0MsV0FBSyxVQUFVLGFBQWEsRUFBRTtBQUFBLElBQ2hDO0FBRUEsSUFBQUEsU0FBUSxVQUFVLE9BQU8sU0FBVSxNQUFNLE1BQU07QUFDN0MsYUFBTyxJQUFJLFFBQVEsS0FBSyxRQUFRLE1BQU0sTUFBTSxJQUFJO0FBQUEsSUFDbEQ7QUFFQSxJQUFBQSxTQUFRLFVBQVUsVUFBVSxTQUFVLE1BQU0sSUFBSTtBQUM5QyxVQUFJLFVBQVUsSUFBSSxRQUFRLEtBQUssUUFBUSxNQUFNLElBQUk7QUFDakQsY0FBUSxLQUFLLE1BQU0sU0FBVSxTQUFTO0FBQ3BDLGdCQUFRLEtBQUs7QUFDYixZQUFJO0FBQUksYUFBRyxPQUFPO0FBQUEsTUFDcEIsQ0FBQztBQUNELGFBQU87QUFBQSxJQUNUO0FBRUEsSUFBQUEsU0FBUSxVQUFVLFVBQVUsV0FBWTtBQUN0QyxXQUFLLFVBQVUsUUFBUTtBQUN2QixXQUFLLFFBQVEsS0FBSyxRQUFRO0FBQUEsSUFDNUI7QUFBQTtBQUFBOzs7QUN0Q0E7QUFBQSxzR0FBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxjQUFjLENBQUM7QUFDbkIsSUFBQUEsUUFBTyxVQUFVO0FBRWpCLGFBQVMsS0FBSyxHQUFHO0FBQ2IsYUFBTyxJQUFJLElBQUksS0FBSztBQUFBLElBQ3hCO0FBRUEsYUFBUyxVQUFVLEdBQUc7QUFFbEIsVUFBSyxJQUFJLE1BQU8sUUFBUSxJQUFJLE9BQU8sR0FBRztBQUNsQyxlQUFPLEtBQUssTUFBTSxDQUFDO0FBQUEsTUFDdkIsT0FBTztBQUNILGVBQU8sS0FBSyxNQUFNLENBQUM7QUFBQSxNQUN2QjtBQUFBLElBQ0o7QUFFQSxhQUFTLHVCQUF1QixXQUFXLFVBQVU7QUFDakQsVUFBSSxDQUFDLFNBQVMsVUFBVTtBQUNwQixVQUFFO0FBQUEsTUFDTjtBQUNBLFlBQU0sYUFBYSxTQUFTLFdBQVcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLFNBQVM7QUFDakUsWUFBTSxhQUFhLEtBQUssSUFBSSxHQUFHLFNBQVMsSUFBSTtBQUU1QyxZQUFNLFlBQVksU0FBUyxrQkFBa0IsS0FBSyxJQUFJLEdBQUcsU0FBUyxlQUFlLElBQUksS0FBSyxJQUFJLEdBQUcsU0FBUztBQUMxRyxZQUFNLGNBQWMsU0FBUyxrQkFBa0IsS0FBSyxJQUFJLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLFlBQVksQ0FBQztBQUVwSCxhQUFPLFNBQVMsR0FBRyxNQUFNO0FBQ3JCLFlBQUksQ0FBQztBQUFNLGlCQUFPLENBQUM7QUFFbkIsWUFBSSxJQUFJLENBQUM7QUFFVCxZQUFJLEtBQUssY0FBYztBQUNuQixjQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsR0FBRztBQUNyQixrQkFBTSxJQUFJLFVBQVUsaUNBQWlDO0FBQUEsVUFDekQ7QUFFQSxjQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3BDLGNBQUksSUFBSSxjQUFjLElBQUksWUFBWTtBQUNsQyxrQkFBTSxJQUFJLFVBQVUsK0JBQStCO0FBQUEsVUFDdkQ7QUFFQSxpQkFBTztBQUFBLFFBQ1g7QUFFQSxZQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxPQUFPO0FBQ3pCLGNBQUksVUFBVSxDQUFDO0FBRWYsY0FBSSxJQUFJO0FBQVksZ0JBQUk7QUFDeEIsY0FBSSxJQUFJO0FBQVksZ0JBQUk7QUFDeEIsaUJBQU87QUFBQSxRQUNYO0FBRUEsWUFBSSxDQUFDLE9BQU8sU0FBUyxDQUFDLEtBQUssTUFBTSxHQUFHO0FBQ2hDLGlCQUFPO0FBQUEsUUFDWDtBQUVBLFlBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDcEMsWUFBSSxJQUFJO0FBRVIsWUFBSSxDQUFDLFNBQVMsWUFBWSxLQUFLLGFBQWE7QUFDeEMsaUJBQU8sSUFBSTtBQUFBLFFBQ2YsV0FBVyxTQUFTLFVBQVU7QUFDMUIsY0FBSSxJQUFJLEdBQUc7QUFDVCxpQkFBSztBQUFBLFVBQ1AsV0FBVyxNQUFNLElBQUk7QUFDbkIsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDSjtBQUVBLGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSjtBQUVBLGdCQUFZLFVBQVUsV0FBWTtBQUM5QixhQUFPO0FBQUEsSUFDWDtBQUVBLGdCQUFZLGFBQWEsU0FBVSxLQUFLO0FBQ3BDLGFBQU8sQ0FBQyxDQUFDO0FBQUEsSUFDYjtBQUVBLGdCQUFZLFVBQVUsdUJBQXVCLEdBQUcsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUNuRSxnQkFBWSxXQUFXLHVCQUF1QixHQUFHLEVBQUUsVUFBVSxLQUFLLENBQUM7QUFFbkUsZ0JBQVksV0FBVyx1QkFBdUIsSUFBSSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQ3JFLGdCQUFZLG9CQUFvQix1QkFBdUIsSUFBSSxFQUFFLFVBQVUsS0FBSyxDQUFDO0FBRTdFLGdCQUFZLFVBQVUsdUJBQXVCLElBQUksRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUNwRSxnQkFBWSxtQkFBbUIsdUJBQXVCLElBQUksRUFBRSxVQUFVLEtBQUssQ0FBQztBQUU1RSxnQkFBWSxlQUFlLHVCQUF1QixJQUFJLEVBQUUsVUFBVSxPQUFPLGlCQUFpQixHQUFHLENBQUM7QUFDOUYsZ0JBQVksd0JBQXdCLHVCQUF1QixJQUFJLEVBQUUsVUFBVSxNQUFNLGlCQUFpQixHQUFHLENBQUM7QUFFdEcsZ0JBQVksWUFBWSxTQUFVLEdBQUc7QUFDakMsWUFBTSxJQUFJLENBQUM7QUFFWCxVQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsR0FBRztBQUNyQixjQUFNLElBQUksVUFBVSwrQ0FBK0M7QUFBQSxNQUN2RTtBQUVBLGFBQU87QUFBQSxJQUNYO0FBRUEsZ0JBQVkseUJBQXlCLFNBQVUsR0FBRztBQUM5QyxZQUFNLElBQUksQ0FBQztBQUVYLFVBQUksTUFBTSxDQUFDLEdBQUc7QUFDVixjQUFNLElBQUksVUFBVSxpQkFBaUI7QUFBQSxNQUN6QztBQUVBLGFBQU87QUFBQSxJQUNYO0FBR0EsZ0JBQVksV0FBVyxZQUFZO0FBQ25DLGdCQUFZLHdCQUF3QixZQUFZO0FBRWhELGdCQUFZLGVBQWUsU0FBVSxHQUFHLE1BQU07QUFDMUMsVUFBSSxDQUFDO0FBQU0sZUFBTyxDQUFDO0FBRW5CLFVBQUksS0FBSywwQkFBMEIsTUFBTSxNQUFNO0FBQzNDLGVBQU87QUFBQSxNQUNYO0FBRUEsYUFBTyxPQUFPLENBQUM7QUFBQSxJQUNuQjtBQUVBLGdCQUFZLGdCQUFnQixTQUFVLEdBQUcsTUFBTTtBQUMzQyxZQUFNLElBQUksT0FBTyxDQUFDO0FBQ2xCLFVBQUksSUFBSTtBQUNSLGVBQVMsSUFBSSxJQUFJLElBQUksRUFBRSxZQUFZLENBQUMsT0FBTyxRQUFXLEVBQUUsR0FBRztBQUN2RCxZQUFJLElBQUksS0FBSztBQUNULGdCQUFNLElBQUksVUFBVSxvQ0FBb0M7QUFBQSxRQUM1RDtBQUFBLE1BQ0o7QUFFQSxhQUFPO0FBQUEsSUFDWDtBQUVBLGdCQUFZLGVBQWUsU0FBVSxHQUFHO0FBQ3BDLFlBQU0sSUFBSSxPQUFPLENBQUM7QUFDbEIsWUFBTSxJQUFJLEVBQUU7QUFDWixZQUFNLElBQUksQ0FBQztBQUNYLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDeEIsY0FBTSxJQUFJLEVBQUUsV0FBVyxDQUFDO0FBQ3hCLFlBQUksSUFBSSxTQUFVLElBQUksT0FBUTtBQUMxQixZQUFFLEtBQUssT0FBTyxjQUFjLENBQUMsQ0FBQztBQUFBLFFBQ2xDLFdBQVcsU0FBVSxLQUFLLEtBQUssT0FBUTtBQUNuQyxZQUFFLEtBQUssT0FBTyxjQUFjLEtBQU0sQ0FBQztBQUFBLFFBQ3ZDLE9BQU87QUFDSCxjQUFJLE1BQU0sSUFBSSxHQUFHO0FBQ2IsY0FBRSxLQUFLLE9BQU8sY0FBYyxLQUFNLENBQUM7QUFBQSxVQUN2QyxPQUFPO0FBQ0gsa0JBQU0sSUFBSSxFQUFFLFdBQVcsSUFBSSxDQUFDO0FBQzVCLGdCQUFJLFNBQVUsS0FBSyxLQUFLLE9BQVE7QUFDNUIsb0JBQU0sSUFBSSxJQUFJO0FBQ2Qsb0JBQU0sSUFBSSxJQUFJO0FBQ2QsZ0JBQUUsS0FBSyxPQUFPLGVBQWUsS0FBSyxPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQztBQUN6RCxnQkFBRTtBQUFBLFlBQ04sT0FBTztBQUNILGdCQUFFLEtBQUssT0FBTyxjQUFjLEtBQU0sQ0FBQztBQUFBLFlBQ3ZDO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBRUEsYUFBTyxFQUFFLEtBQUssRUFBRTtBQUFBLElBQ3BCO0FBRUEsZ0JBQVksVUFBVSxTQUFVLEdBQUcsTUFBTTtBQUNyQyxVQUFJLEVBQUUsYUFBYSxPQUFPO0FBQ3RCLGNBQU0sSUFBSSxVQUFVLCtCQUErQjtBQUFBLE1BQ3ZEO0FBQ0EsVUFBSSxNQUFNLENBQUMsR0FBRztBQUNWLGVBQU87QUFBQSxNQUNYO0FBRUEsYUFBTztBQUFBLElBQ1g7QUFFQSxnQkFBWSxZQUFZLFNBQVUsR0FBRyxNQUFNO0FBQ3ZDLFVBQUksRUFBRSxhQUFhLFNBQVM7QUFDeEIsWUFBSSxJQUFJLE9BQU8sQ0FBQztBQUFBLE1BQ3BCO0FBRUEsYUFBTztBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUM1TEE7QUFBQSxzRkFBQUMsU0FBQTtBQUFBO0FBRUEsSUFBQUEsUUFBTyxRQUFRLFFBQVEsU0FBUyxNQUFNLFFBQVEsUUFBUTtBQUNwRCxZQUFNLE9BQU8sT0FBTyxvQkFBb0IsTUFBTTtBQUM5QyxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxFQUFFLEdBQUc7QUFDcEMsZUFBTyxlQUFlLFFBQVEsS0FBSyxJQUFJLE9BQU8seUJBQXlCLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFBQSxNQUN6RjtBQUFBLElBQ0Y7QUFFQSxJQUFBQSxRQUFPLFFBQVEsZ0JBQWdCLE9BQU8sU0FBUztBQUMvQyxJQUFBQSxRQUFPLFFBQVEsYUFBYSxPQUFPLE1BQU07QUFFekMsSUFBQUEsUUFBTyxRQUFRLGlCQUFpQixTQUFVLE1BQU07QUFDOUMsYUFBTyxLQUFLQSxRQUFPLFFBQVE7QUFBQSxJQUM3QjtBQUVBLElBQUFBLFFBQU8sUUFBUSxpQkFBaUIsU0FBVSxTQUFTO0FBQ2pELGFBQU8sUUFBUUEsUUFBTyxRQUFRO0FBQUEsSUFDaEM7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDbEJBO0FBQUEsc0VBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksV0FBVyxRQUFRO0FBQ3ZCLFFBQUksZUFBZTtBQUVuQixRQUFJLHFCQUFxQjtBQUFBLE1BQ3ZCLGNBQWM7QUFBQSxNQUNkLGlCQUFpQjtBQUFBLElBQ25CO0FBRUEsYUFBUyxVQUFVLEtBQUs7QUFDdEIsYUFBTyxJQUFJLE1BQU0sSUFBUSxFQUFFLElBQUksU0FBVSxHQUFHO0FBQUUsZUFBTyxFQUFFLFVBQVUsS0FBSztBQUFBLE1BQUcsQ0FBQyxFQUFFLEtBQUssSUFBUTtBQUFBLElBQzNGO0FBRUEsYUFBUyxXQUFXLEtBQUs7QUFDdkIsVUFBSSxRQUFRO0FBQ1osVUFBSSxNQUFNLGFBQWEsU0FBUztBQUVoQyxhQUFPLFNBQVMsS0FBSztBQUNuQixZQUFJLE1BQU0sS0FBSyxPQUFPLFFBQVEsT0FBTyxDQUFDO0FBRXRDLFlBQUksU0FBUyxhQUFhO0FBQzFCLFlBQUksT0FBTyxHQUFHLE1BQU0sT0FBTyxPQUFPLEdBQUcsTUFBTSxLQUFLO0FBQzlDLGlCQUFPO0FBQUEsUUFDVCxXQUFXLE9BQU8sR0FBRyxLQUFLLEtBQUs7QUFDN0IsZ0JBQU0sTUFBTTtBQUFBLFFBQ2QsT0FBTztBQUNMLGtCQUFRLE1BQU07QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQUkscUJBQXFCO0FBRXpCLGFBQVMsYUFBYSxRQUFRO0FBQzVCLGFBQU8sT0FFSixRQUFRLG9CQUFvQixHQUFHLEVBRS9CO0FBQUEsSUFDTDtBQUVBLGFBQVMsU0FBUyxhQUFhLFNBQVMsbUJBQW1CO0FBQ3pELFVBQUksV0FBVztBQUNmLFVBQUksWUFBWTtBQUVoQixVQUFJLE1BQU0sYUFBYSxXQUFXO0FBQ2xDLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDNUIsWUFBSSxZQUFZLFlBQVksWUFBWSxDQUFDO0FBQ3pDLFlBQUksU0FBUyxXQUFXLFNBQVM7QUFFakMsZ0JBQVEsT0FBTztBQUFBLGVBQ1I7QUFDSCx1QkFBVztBQUNYLHlCQUFhLE9BQU8sY0FBYyxTQUFTO0FBQzNDO0FBQUEsZUFDRztBQUNIO0FBQUEsZUFDRztBQUNILHlCQUFhLE9BQU8sY0FBYyxNQUFNLFFBQVEsT0FBTyxFQUFFO0FBQ3pEO0FBQUEsZUFDRztBQUNILGdCQUFJLHNCQUFzQixtQkFBbUIsY0FBYztBQUN6RCwyQkFBYSxPQUFPLGNBQWMsTUFBTSxRQUFRLE9BQU8sRUFBRTtBQUFBLFlBQzNELE9BQU87QUFDTCwyQkFBYSxPQUFPLGNBQWMsU0FBUztBQUFBLFlBQzdDO0FBQ0E7QUFBQSxlQUNHO0FBQ0gseUJBQWEsT0FBTyxjQUFjLFNBQVM7QUFDM0M7QUFBQSxlQUNHO0FBQ0gsZ0JBQUksU0FBUztBQUNYLHlCQUFXO0FBQ1gsMkJBQWEsT0FBTyxjQUFjLFNBQVM7QUFBQSxZQUM3QyxPQUFPO0FBQ0wsMkJBQWEsT0FBTyxjQUFjLE1BQU0sUUFBUSxPQUFPLEVBQUU7QUFBQSxZQUMzRDtBQUNBO0FBQUEsZUFDRztBQUNILGdCQUFJLFNBQVM7QUFDWCx5QkFBVztBQUFBLFlBQ2I7QUFFQSx5QkFBYSxPQUFPLGNBQWMsU0FBUztBQUMzQztBQUFBO0FBQUEsTUFFTjtBQUVBLGFBQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUVBLFFBQUksc0JBQXNCO0FBRTFCLGFBQVMsY0FBYyxPQUFPLG1CQUFtQjtBQUMvQyxVQUFJLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxRQUFRO0FBQ2pDLGdCQUFRLFNBQVMsVUFBVSxLQUFLO0FBQ2hDLDRCQUFvQixtQkFBbUI7QUFBQSxNQUN6QztBQUVBLFVBQUksUUFBUTtBQUVaLFVBQUksVUFBVSxLQUFLLE1BQU0sU0FDcEIsTUFBTSxPQUFPLE9BQU8sTUFBTSxPQUFPLE9BQ2xDLE1BQU0sT0FBTyxPQUFPLE1BQU0sTUFBTSxTQUFTLE9BQU8sT0FDaEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUN2QixNQUFNLE9BQU8sbUJBQW1CLE1BQU0sR0FBRztBQUMzQyxnQkFBUTtBQUFBLE1BQ1Y7QUFFQSxVQUFJLE1BQU0sYUFBYSxLQUFLO0FBQzVCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDNUIsWUFBSSxTQUFTLFdBQVcsTUFBTSxZQUFZLENBQUMsQ0FBQztBQUM1QyxZQUFLLGVBQWUsbUJBQW1CLGdCQUFnQixPQUFPLE9BQU8sV0FDaEUsZUFBZSxtQkFBbUIsbUJBQ2xDLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxhQUFjO0FBQ3hELGtCQUFRO0FBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLGFBQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsYUFBUyxXQUFXLGFBQWEsU0FBUyxtQkFBbUI7QUFDM0QsVUFBSSxTQUFTLFNBQVMsYUFBYSxTQUFTLGlCQUFpQjtBQUM3RCxhQUFPLFNBQVMsVUFBVSxPQUFPLE1BQU07QUFFdkMsVUFBSSxTQUFTLE9BQU8sT0FBTyxNQUFNLEdBQUc7QUFDcEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsRUFBRSxHQUFHO0FBQ3RDLFlBQUk7QUFDRixjQUFJLGFBQWEsY0FBYyxPQUFPLEVBQUU7QUFDeEMsaUJBQU8sS0FBSyxXQUFXO0FBQ3ZCLGlCQUFPLFFBQVEsT0FBTyxTQUFTLFdBQVc7QUFBQSxRQUM1QyxTQUFRLEdBQU47QUFDQSxpQkFBTyxRQUFRO0FBQUEsUUFDakI7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLFFBQ0wsUUFBUSxPQUFPLEtBQUssR0FBRztBQUFBLFFBQ3ZCLE9BQU8sT0FBTztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUVBLElBQUFBLFFBQU8sUUFBUSxVQUFVLFNBQVMsYUFBYSxTQUFTLG1CQUFtQixpQkFBaUI7QUFDMUYsVUFBSSxTQUFTLFdBQVcsYUFBYSxTQUFTLGlCQUFpQjtBQUMvRCxVQUFJLFNBQVMsT0FBTyxPQUFPLE1BQU0sR0FBRztBQUNwQyxlQUFTLE9BQU8sSUFBSSxTQUFTLEdBQUc7QUFDOUIsWUFBSTtBQUNGLGlCQUFPLFNBQVMsUUFBUSxDQUFDO0FBQUEsUUFDM0IsU0FBUSxHQUFOO0FBQ0EsaUJBQU8sUUFBUTtBQUNmLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUVELFVBQUksaUJBQWlCO0FBQ25CLFlBQUksUUFBUSxPQUFPLE1BQU0sR0FBRyxPQUFPLFNBQVMsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFO0FBQ3pELFlBQUksTUFBTSxTQUFTLE9BQU8sTUFBTSxXQUFXLEdBQUc7QUFDNUMsaUJBQU8sUUFBUTtBQUFBLFFBQ2pCO0FBRUEsaUJBQVMsSUFBRSxHQUFHLElBQUksT0FBTyxRQUFRLEVBQUUsR0FBRztBQUNwQyxjQUFJLE9BQU8sU0FBUyxNQUFNLE9BQU8sV0FBVyxHQUFHO0FBQzdDLG1CQUFPLFFBQVE7QUFDZjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLFVBQUksT0FBTztBQUFPLGVBQU87QUFDekIsYUFBTyxPQUFPLEtBQUssR0FBRztBQUFBLElBQ3hCO0FBRUEsSUFBQUEsUUFBTyxRQUFRLFlBQVksU0FBUyxhQUFhLFNBQVM7QUFDeEQsVUFBSSxTQUFTLFdBQVcsYUFBYSxTQUFTLG1CQUFtQixlQUFlO0FBRWhGLGFBQU87QUFBQSxRQUNMLFFBQVEsT0FBTztBQUFBLFFBQ2YsT0FBTyxPQUFPO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxRQUFRLHFCQUFxQjtBQUFBO0FBQUE7OztBQ2hNcEM7QUFBQSxrR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBTSxXQUFXLFFBQVE7QUFDekIsUUFBTSxPQUFPO0FBRWIsUUFBTSxpQkFBaUI7QUFBQSxNQUNyQixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixLQUFLO0FBQUEsSUFDUDtBQUVBLFFBQU0sVUFBVSxPQUFPLFNBQVM7QUFFaEMsYUFBUyxhQUFhLEtBQUs7QUFDekIsYUFBTyxTQUFTLEtBQUssT0FBTyxHQUFHLEVBQUU7QUFBQSxJQUNuQztBQUVBLGFBQVMsR0FBRyxPQUFPLEtBQUs7QUFDdEIsWUFBTSxJQUFJLE1BQU07QUFDaEIsYUFBTyxNQUFNLENBQUMsSUFBSSxTQUFZLE9BQU8sY0FBYyxDQUFDO0FBQUEsSUFDdEQ7QUFFQSxhQUFTLGFBQWEsR0FBRztBQUN2QixhQUFPLEtBQUssTUFBUSxLQUFLO0FBQUEsSUFDM0I7QUFFQSxhQUFTLGFBQWEsR0FBRztBQUN2QixhQUFRLEtBQUssTUFBUSxLQUFLLE1BQVUsS0FBSyxNQUFRLEtBQUs7QUFBQSxJQUN4RDtBQUVBLGFBQVMsb0JBQW9CLEdBQUc7QUFDOUIsYUFBTyxhQUFhLENBQUMsS0FBSyxhQUFhLENBQUM7QUFBQSxJQUMxQztBQUVBLGFBQVMsV0FBVyxHQUFHO0FBQ3JCLGFBQU8sYUFBYSxDQUFDLEtBQU0sS0FBSyxNQUFRLEtBQUssTUFBVSxLQUFLLE1BQVEsS0FBSztBQUFBLElBQzNFO0FBRUEsYUFBUyxZQUFZLFFBQVE7QUFDM0IsYUFBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLE1BQU07QUFBQSxJQUNwRDtBQUVBLGFBQVMsWUFBWSxRQUFRO0FBQzNCLGVBQVMsT0FBTyxZQUFZO0FBQzVCLGFBQU8sV0FBVyxRQUFRLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVztBQUFBLElBQ2pGO0FBRUEsYUFBUywrQkFBK0IsS0FBSyxLQUFLO0FBQ2hELGFBQU8sYUFBYSxHQUFHLE1BQU0sUUFBUSxNQUFNLFFBQVE7QUFBQSxJQUNyRDtBQUVBLGFBQVMsMkJBQTJCLFFBQVE7QUFDMUMsYUFBTyxPQUFPLFdBQVcsS0FBSyxhQUFhLE9BQU8sWUFBWSxDQUFDLENBQUMsTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU87QUFBQSxJQUMzRztBQUVBLGFBQVMscUNBQXFDLFFBQVE7QUFDcEQsYUFBTyxPQUFPLFdBQVcsS0FBSyxhQUFhLE9BQU8sWUFBWSxDQUFDLENBQUMsS0FBSyxPQUFPLE9BQU87QUFBQSxJQUNyRjtBQUVBLGFBQVMsK0JBQStCLFFBQVE7QUFDOUMsYUFBTyxPQUFPLE9BQU8sMkRBQTJELE1BQU07QUFBQSxJQUN4RjtBQUVBLGFBQVMsK0NBQStDLFFBQVE7QUFDOUQsYUFBTyxPQUFPLE9BQU8seURBQXlELE1BQU07QUFBQSxJQUN0RjtBQUVBLGFBQVMsZ0JBQWdCLFFBQVE7QUFDL0IsYUFBTyxlQUFlLFlBQVk7QUFBQSxJQUNwQztBQUVBLGFBQVMsVUFBVSxLQUFLO0FBQ3RCLGFBQU8sZ0JBQWdCLElBQUksTUFBTTtBQUFBLElBQ25DO0FBRUEsYUFBUyxZQUFZLFFBQVE7QUFDM0IsYUFBTyxlQUFlO0FBQUEsSUFDeEI7QUFFQSxhQUFTLGNBQWMsR0FBRztBQUN4QixVQUFJLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZO0FBQ3JDLFVBQUksSUFBSSxXQUFXLEdBQUc7QUFDcEIsY0FBTSxNQUFNO0FBQUEsTUFDZDtBQUVBLGFBQU8sTUFBTTtBQUFBLElBQ2Y7QUFFQSxhQUFTLGtCQUFrQixHQUFHO0FBQzVCLFlBQU0sTUFBTSxJQUFJLE9BQU8sQ0FBQztBQUV4QixVQUFJLE1BQU07QUFFVixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxFQUFFLEdBQUc7QUFDbkMsZUFBTyxjQUFjLElBQUksRUFBRTtBQUFBLE1BQzdCO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGtCQUFrQixLQUFLO0FBQzlCLFlBQU0sUUFBUSxJQUFJLE9BQU8sR0FBRztBQUM1QixZQUFNLFNBQVMsQ0FBQztBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxFQUFFLEdBQUc7QUFDckMsWUFBSSxNQUFNLE9BQU8sSUFBSTtBQUNuQixpQkFBTyxLQUFLLE1BQU0sRUFBRTtBQUFBLFFBQ3RCLFdBQVcsTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLElBQUksRUFBRSxLQUFLLFdBQVcsTUFBTSxJQUFJLEVBQUUsR0FBRztBQUNsRixpQkFBTyxLQUFLLFNBQVMsTUFBTSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzlELGVBQUs7QUFBQSxRQUNQLE9BQU87QUFDTCxpQkFBTyxLQUFLLE1BQU0sRUFBRTtBQUFBLFFBQ3RCO0FBQUEsTUFDRjtBQUNBLGFBQU8sSUFBSSxPQUFPLE1BQU0sRUFBRSxTQUFTO0FBQUEsSUFDckM7QUFFQSxhQUFTLHlCQUF5QixHQUFHO0FBQ25DLGFBQU8sS0FBSyxNQUFRLElBQUk7QUFBQSxJQUMxQjtBQUVBLFFBQU0sNEJBQTRCLG9CQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQ2hGLGFBQVMsb0JBQW9CLEdBQUc7QUFDOUIsYUFBTyx5QkFBeUIsQ0FBQyxLQUFLLDBCQUEwQixJQUFJLENBQUM7QUFBQSxJQUN2RTtBQUVBLFFBQU0sZ0NBQ0osb0JBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNuRCxhQUFTLHdCQUF3QixHQUFHO0FBQ2xDLGFBQU8sb0JBQW9CLENBQUMsS0FBSyw4QkFBOEIsSUFBSSxDQUFDO0FBQUEsSUFDdEU7QUFFQSxhQUFTLGtCQUFrQixHQUFHLG9CQUFvQjtBQUNoRCxZQUFNLE9BQU8sT0FBTyxjQUFjLENBQUM7QUFFbkMsVUFBSSxtQkFBbUIsQ0FBQyxHQUFHO0FBQ3pCLGVBQU8sa0JBQWtCLElBQUk7QUFBQSxNQUMvQjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxnQkFBZ0IsT0FBTztBQUM5QixVQUFJLElBQUk7QUFFUixVQUFJLE1BQU0sVUFBVSxLQUFLLE1BQU0sT0FBTyxDQUFDLE1BQU0sT0FBTyxNQUFNLE9BQU8sQ0FBQyxFQUFFLFlBQVksTUFBTSxLQUFLO0FBQ3pGLGdCQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ3pCLFlBQUk7QUFBQSxNQUNOLFdBQVcsTUFBTSxVQUFVLEtBQUssTUFBTSxPQUFPLENBQUMsTUFBTSxLQUFLO0FBQ3ZELGdCQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ3pCLFlBQUk7QUFBQSxNQUNOO0FBRUEsVUFBSSxVQUFVLElBQUk7QUFDaEIsZUFBTztBQUFBLE1BQ1Q7QUFFQSxZQUFNLFFBQVEsTUFBTSxLQUFLLFdBQVksTUFBTSxLQUFLLGlCQUFpQjtBQUNqRSxVQUFJLE1BQU0sS0FBSyxLQUFLLEdBQUc7QUFDckIsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDMUI7QUFFQSxhQUFTLFVBQVUsT0FBTztBQUN4QixZQUFNLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDN0IsVUFBSSxNQUFNLE1BQU0sU0FBUyxPQUFPLElBQUk7QUFDbEMsWUFBSSxNQUFNLFNBQVMsR0FBRztBQUNwQixnQkFBTSxJQUFJO0FBQUEsUUFDWjtBQUFBLE1BQ0Y7QUFFQSxVQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3BCLGVBQU87QUFBQSxNQUNUO0FBRUEsWUFBTSxVQUFVLENBQUM7QUFDakIsaUJBQVcsUUFBUSxPQUFPO0FBQ3hCLFlBQUksU0FBUyxJQUFJO0FBQ2YsaUJBQU87QUFBQSxRQUNUO0FBQ0EsY0FBTSxJQUFJLGdCQUFnQixJQUFJO0FBQzlCLFlBQUksTUFBTSxTQUFTO0FBQ2pCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLGdCQUFRLEtBQUssQ0FBQztBQUFBLE1BQ2hCO0FBRUEsZUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLFNBQVMsR0FBRyxFQUFFLEdBQUc7QUFDM0MsWUFBSSxRQUFRLEtBQUssS0FBSztBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQ0EsVUFBSSxRQUFRLFFBQVEsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxNQUFNLEdBQUc7QUFDcEUsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLE9BQU8sUUFBUSxJQUFJO0FBQ3ZCLFVBQUksVUFBVTtBQUVkLGlCQUFXLEtBQUssU0FBUztBQUN2QixnQkFBUSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksT0FBTztBQUNyQyxVQUFFO0FBQUEsTUFDSjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxjQUFjLFNBQVM7QUFDOUIsVUFBSSxTQUFTO0FBQ2IsVUFBSSxJQUFJO0FBRVIsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRztBQUMzQixpQkFBUyxPQUFPLElBQUksR0FBRyxJQUFJO0FBQzNCLFlBQUksTUFBTSxHQUFHO0FBQ1gsbUJBQVMsTUFBTTtBQUFBLFFBQ2pCO0FBQ0EsWUFBSSxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQUEsTUFDeEI7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsVUFBVSxPQUFPO0FBQ3hCLFlBQU0sVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QyxVQUFJLGFBQWE7QUFDakIsVUFBSSxXQUFXO0FBQ2YsVUFBSSxVQUFVO0FBRWQsY0FBUSxTQUFTLEtBQUssT0FBTyxLQUFLO0FBRWxDLFVBQUksTUFBTSxhQUFhLElBQUk7QUFDekIsWUFBSSxNQUFNLFVBQVUsT0FBTyxJQUFJO0FBQzdCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLG1CQUFXO0FBQ1gsVUFBRTtBQUNGLG1CQUFXO0FBQUEsTUFDYjtBQUVBLGFBQU8sVUFBVSxNQUFNLFFBQVE7QUFDN0IsWUFBSSxlQUFlLEdBQUc7QUFDcEIsaUJBQU87QUFBQSxRQUNUO0FBRUEsWUFBSSxNQUFNLGFBQWEsSUFBSTtBQUN6QixjQUFJLGFBQWEsTUFBTTtBQUNyQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxZQUFFO0FBQ0YsWUFBRTtBQUNGLHFCQUFXO0FBQ1g7QUFBQSxRQUNGO0FBRUEsWUFBSSxRQUFRO0FBQ1osWUFBSSxTQUFTO0FBRWIsZUFBTyxTQUFTLEtBQUssV0FBVyxNQUFNLFFBQVEsR0FBRztBQUMvQyxrQkFBUSxRQUFRLEtBQU8sU0FBUyxHQUFHLE9BQU8sT0FBTyxHQUFHLEVBQUU7QUFDdEQsWUFBRTtBQUNGLFlBQUU7QUFBQSxRQUNKO0FBRUEsWUFBSSxNQUFNLGFBQWEsSUFBSTtBQUN6QixjQUFJLFdBQVcsR0FBRztBQUNoQixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxxQkFBVztBQUVYLGNBQUksYUFBYSxHQUFHO0FBQ2xCLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksY0FBYztBQUVsQixpQkFBTyxNQUFNLGFBQWEsUUFBVztBQUNuQyxnQkFBSSxZQUFZO0FBRWhCLGdCQUFJLGNBQWMsR0FBRztBQUNuQixrQkFBSSxNQUFNLGFBQWEsTUFBTSxjQUFjLEdBQUc7QUFDNUMsa0JBQUU7QUFBQSxjQUNKLE9BQU87QUFDTCx1QkFBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBRUEsZ0JBQUksQ0FBQyxhQUFhLE1BQU0sUUFBUSxHQUFHO0FBQ2pDLHFCQUFPO0FBQUEsWUFDVDtBQUVBLG1CQUFPLGFBQWEsTUFBTSxRQUFRLEdBQUc7QUFDbkMsb0JBQU0sU0FBUyxTQUFTLEdBQUcsT0FBTyxPQUFPLENBQUM7QUFDMUMsa0JBQUksY0FBYyxNQUFNO0FBQ3RCLDRCQUFZO0FBQUEsY0FDZCxXQUFXLGNBQWMsR0FBRztBQUMxQix1QkFBTztBQUFBLGNBQ1QsT0FBTztBQUNMLDRCQUFZLFlBQVksS0FBSztBQUFBLGNBQy9CO0FBQ0Esa0JBQUksWUFBWSxLQUFLO0FBQ25CLHVCQUFPO0FBQUEsY0FDVDtBQUNBLGdCQUFFO0FBQUEsWUFDSjtBQUVBLG9CQUFRLGNBQWMsUUFBUSxjQUFjLE1BQVE7QUFFcEQsY0FBRTtBQUVGLGdCQUFJLGdCQUFnQixLQUFLLGdCQUFnQixHQUFHO0FBQzFDLGdCQUFFO0FBQUEsWUFDSjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLGdCQUFnQixHQUFHO0FBQ3JCLG1CQUFPO0FBQUEsVUFDVDtBQUVBO0FBQUEsUUFDRixXQUFXLE1BQU0sYUFBYSxJQUFJO0FBQ2hDLFlBQUU7QUFDRixjQUFJLE1BQU0sYUFBYSxRQUFXO0FBQ2hDLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0YsV0FBVyxNQUFNLGFBQWEsUUFBVztBQUN2QyxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxnQkFBUSxjQUFjO0FBQ3RCLFVBQUU7QUFBQSxNQUNKO0FBRUEsVUFBSSxhQUFhLE1BQU07QUFDckIsWUFBSSxRQUFRLGFBQWE7QUFDekIscUJBQWE7QUFDYixlQUFPLGVBQWUsS0FBSyxRQUFRLEdBQUc7QUFDcEMsZ0JBQU0sT0FBTyxRQUFRLFdBQVcsUUFBUTtBQUN4QyxrQkFBUSxXQUFXLFFBQVEsS0FBSyxRQUFRO0FBQ3hDLGtCQUFRLGNBQWM7QUFDdEIsWUFBRTtBQUNGLFlBQUU7QUFBQSxRQUNKO0FBQUEsTUFDRixXQUFXLGFBQWEsUUFBUSxlQUFlLEdBQUc7QUFDaEQsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsY0FBYyxTQUFTO0FBQzlCLFVBQUksU0FBUztBQUNiLFlBQU0sWUFBWSx3QkFBd0IsT0FBTztBQUNqRCxZQUFNLFdBQVcsVUFBVTtBQUMzQixVQUFJLFVBQVU7QUFFZCxlQUFTLGFBQWEsR0FBRyxjQUFjLEdBQUcsRUFBRSxZQUFZO0FBQ3RELFlBQUksV0FBVyxRQUFRLGdCQUFnQixHQUFHO0FBQ3hDO0FBQUEsUUFDRixXQUFXLFNBQVM7QUFDbEIsb0JBQVU7QUFBQSxRQUNaO0FBRUEsWUFBSSxhQUFhLFlBQVk7QUFDM0IsZ0JBQU0sWUFBWSxlQUFlLElBQUksT0FBTztBQUM1QyxvQkFBVTtBQUNWLG9CQUFVO0FBQ1Y7QUFBQSxRQUNGO0FBRUEsa0JBQVUsUUFBUSxZQUFZLFNBQVMsRUFBRTtBQUV6QyxZQUFJLGVBQWUsR0FBRztBQUNwQixvQkFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLFVBQVUsT0FBTyxjQUFjO0FBQ3RDLFVBQUksTUFBTSxPQUFPLEtBQUs7QUFDcEIsWUFBSSxNQUFNLE1BQU0sU0FBUyxPQUFPLEtBQUs7QUFDbkMsaUJBQU87QUFBQSxRQUNUO0FBRUEsZUFBTyxVQUFVLE1BQU0sVUFBVSxHQUFHLE1BQU0sU0FBUyxDQUFDLENBQUM7QUFBQSxNQUN2RDtBQUVBLFVBQUksQ0FBQyxjQUFjO0FBQ2pCLGVBQU8sZ0JBQWdCLEtBQUs7QUFBQSxNQUM5QjtBQUVBLFlBQU0sU0FBUyxrQkFBa0IsS0FBSztBQUN0QyxZQUFNLGNBQWMsS0FBSyxRQUFRLFFBQVEsT0FBTyxLQUFLLG1CQUFtQixpQkFBaUIsS0FBSztBQUM5RixVQUFJLGdCQUFnQixNQUFNO0FBQ3hCLGVBQU87QUFBQSxNQUNUO0FBRUEsVUFBSSwrQkFBK0IsV0FBVyxHQUFHO0FBQy9DLGVBQU87QUFBQSxNQUNUO0FBRUEsWUFBTSxXQUFXLFVBQVUsV0FBVztBQUN0QyxVQUFJLE9BQU8sYUFBYSxZQUFZLGFBQWEsU0FBUztBQUN4RCxlQUFPO0FBQUEsTUFDVDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxnQkFBZ0IsT0FBTztBQUM5QixVQUFJLCtDQUErQyxLQUFLLEdBQUc7QUFDekQsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLFNBQVM7QUFDYixZQUFNLFVBQVUsU0FBUyxLQUFLLE9BQU8sS0FBSztBQUMxQyxlQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxFQUFFLEdBQUc7QUFDdkMsa0JBQVUsa0JBQWtCLFFBQVEsSUFBSSx3QkFBd0I7QUFBQSxNQUNsRTtBQUNBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyx3QkFBd0IsS0FBSztBQUNwQyxVQUFJLFNBQVM7QUFDYixVQUFJLFNBQVM7QUFDYixVQUFJLFlBQVk7QUFDaEIsVUFBSSxVQUFVO0FBRWQsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLFFBQVEsRUFBRSxHQUFHO0FBQ25DLFlBQUksSUFBSSxPQUFPLEdBQUc7QUFDaEIsY0FBSSxVQUFVLFFBQVE7QUFDcEIscUJBQVM7QUFDVCxxQkFBUztBQUFBLFVBQ1g7QUFFQSxzQkFBWTtBQUNaLG9CQUFVO0FBQUEsUUFDWixPQUFPO0FBQ0wsY0FBSSxjQUFjLE1BQU07QUFDdEIsd0JBQVk7QUFBQSxVQUNkO0FBQ0EsWUFBRTtBQUFBLFFBQ0o7QUFBQSxNQUNGO0FBR0EsVUFBSSxVQUFVLFFBQVE7QUFDcEIsaUJBQVM7QUFDVCxpQkFBUztBQUFBLE1BQ1g7QUFFQSxhQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFFQSxhQUFTLGNBQWMsTUFBTTtBQUMzQixVQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLGVBQU8sY0FBYyxJQUFJO0FBQUEsTUFDM0I7QUFHQSxVQUFJLGdCQUFnQixPQUFPO0FBQ3pCLGVBQU8sTUFBTSxjQUFjLElBQUksSUFBSTtBQUFBLE1BQ3JDO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGlCQUFpQixLQUFLO0FBQzdCLGFBQU8sSUFBSSxRQUFRLG9EQUFvRCxFQUFFO0FBQUEsSUFDM0U7QUFFQSxhQUFTLGtCQUFrQixLQUFLO0FBQzlCLGFBQU8sSUFBSSxRQUFRLHlCQUF5QixFQUFFO0FBQUEsSUFDaEQ7QUFFQSxhQUFTLFlBQVksS0FBSztBQUN4QixZQUFNLE9BQU8sSUFBSTtBQUNqQixVQUFJLEtBQUssV0FBVyxHQUFHO0FBQ3JCO0FBQUEsTUFDRjtBQUNBLFVBQUksSUFBSSxXQUFXLFVBQVUsS0FBSyxXQUFXLEtBQUssK0JBQStCLEtBQUssRUFBRSxHQUFHO0FBQ3pGO0FBQUEsTUFDRjtBQUVBLFdBQUssSUFBSTtBQUFBLElBQ1g7QUFFQSxhQUFTLG9CQUFvQixLQUFLO0FBQ2hDLGFBQU8sSUFBSSxhQUFhLE1BQU0sSUFBSSxhQUFhO0FBQUEsSUFDakQ7QUFFQSxhQUFTLGdDQUFnQyxLQUFLO0FBQzVDLGFBQU8sSUFBSSxTQUFTLFFBQVEsSUFBSSxTQUFTLE1BQU0sSUFBSSxvQkFBb0IsSUFBSSxXQUFXO0FBQUEsSUFDeEY7QUFFQSxhQUFTLCtCQUErQixRQUFRO0FBQzlDLGFBQU8sY0FBYyxLQUFLLE1BQU07QUFBQSxJQUNsQztBQUVBLGFBQVMsZ0JBQWdCLE9BQU8sTUFBTSxrQkFBa0IsS0FBSyxlQUFlO0FBQzFFLFdBQUssVUFBVTtBQUNmLFdBQUssUUFBUTtBQUNiLFdBQUssT0FBTyxRQUFRO0FBQ3BCLFdBQUssbUJBQW1CLG9CQUFvQjtBQUM1QyxXQUFLLGdCQUFnQjtBQUNyQixXQUFLLE1BQU07QUFDWCxXQUFLLFVBQVU7QUFDZixXQUFLLGFBQWE7QUFFbEIsVUFBSSxDQUFDLEtBQUssS0FBSztBQUNiLGFBQUssTUFBTTtBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sTUFBTSxDQUFDO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFFVixrQkFBa0I7QUFBQSxRQUNwQjtBQUVBLGNBQU1DLE9BQU0saUJBQWlCLEtBQUssS0FBSztBQUN2QyxZQUFJQSxTQUFRLEtBQUssT0FBTztBQUN0QixlQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUNBLGFBQUssUUFBUUE7QUFBQSxNQUNmO0FBRUEsWUFBTSxNQUFNLGtCQUFrQixLQUFLLEtBQUs7QUFDeEMsVUFBSSxRQUFRLEtBQUssT0FBTztBQUN0QixhQUFLLGFBQWE7QUFBQSxNQUNwQjtBQUNBLFdBQUssUUFBUTtBQUViLFdBQUssUUFBUSxpQkFBaUI7QUFFOUIsV0FBSyxTQUFTO0FBQ2QsV0FBSyxTQUFTO0FBQ2QsV0FBSyxVQUFVO0FBQ2YsV0FBSyx3QkFBd0I7QUFFN0IsV0FBSyxRQUFRLFNBQVMsS0FBSyxPQUFPLEtBQUssS0FBSztBQUU1QyxhQUFPLEtBQUssV0FBVyxLQUFLLE1BQU0sUUFBUSxFQUFFLEtBQUssU0FBUztBQUN4RCxjQUFNLElBQUksS0FBSyxNQUFNLEtBQUs7QUFDMUIsY0FBTSxPQUFPLE1BQU0sQ0FBQyxJQUFJLFNBQVksT0FBTyxjQUFjLENBQUM7QUFHMUQsY0FBTSxNQUFNLEtBQUssV0FBVyxLQUFLLE9BQU8sR0FBRyxJQUFJO0FBQy9DLFlBQUksQ0FBQyxLQUFLO0FBQ1I7QUFBQSxRQUNGLFdBQVcsUUFBUSxTQUFTO0FBQzFCLGVBQUssVUFBVTtBQUNmO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsb0JBQWdCLFVBQVUsd0JBQXdCLFNBQVMsaUJBQWlCLEdBQUcsTUFBTTtBQUNuRixVQUFJLGFBQWEsQ0FBQyxHQUFHO0FBQ25CLGFBQUssVUFBVSxLQUFLLFlBQVk7QUFDaEMsYUFBSyxRQUFRO0FBQUEsTUFDZixXQUFXLENBQUMsS0FBSyxlQUFlO0FBQzlCLGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1QsT0FBTztBQUNMLGFBQUssYUFBYTtBQUNsQixlQUFPO0FBQUEsTUFDVDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUsa0JBQWtCLFNBQVMsWUFBWSxHQUFHLE1BQU07QUFDeEUsVUFBSSxvQkFBb0IsQ0FBQyxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQzlELGFBQUssVUFBVSxLQUFLLFlBQVk7QUFBQSxNQUNsQyxXQUFXLE1BQU0sSUFBSTtBQUNuQixZQUFJLEtBQUssZUFBZTtBQUN0QixjQUFJLFVBQVUsS0FBSyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxNQUFNLEdBQUc7QUFDeEQsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxDQUFDLFVBQVUsS0FBSyxHQUFHLEtBQUssZ0JBQWdCLEtBQUssTUFBTSxHQUFHO0FBQ3hELG1CQUFPO0FBQUEsVUFDVDtBQUVBLGVBQUssb0JBQW9CLEtBQUssR0FBRyxLQUFLLEtBQUssSUFBSSxTQUFTLFNBQVMsS0FBSyxXQUFXLFFBQVE7QUFDdkYsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxLQUFLLElBQUksV0FBVyxXQUFXLEtBQUssSUFBSSxTQUFTLE1BQU0sS0FBSyxJQUFJLFNBQVMsT0FBTztBQUNsRixtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQ0EsYUFBSyxJQUFJLFNBQVMsS0FBSztBQUN2QixhQUFLLFNBQVM7QUFDZCxZQUFJLEtBQUssZUFBZTtBQUN0QixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxZQUFJLEtBQUssSUFBSSxXQUFXLFFBQVE7QUFDOUIsY0FBSSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sSUFBSTtBQUM5RSxpQkFBSyxhQUFhO0FBQUEsVUFDcEI7QUFDQSxlQUFLLFFBQVE7QUFBQSxRQUNmLFdBQVcsVUFBVSxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsUUFBUSxLQUFLLEtBQUssV0FBVyxLQUFLLElBQUksUUFBUTtBQUM1RixlQUFLLFFBQVE7QUFBQSxRQUNmLFdBQVcsVUFBVSxLQUFLLEdBQUcsR0FBRztBQUM5QixlQUFLLFFBQVE7QUFBQSxRQUNmLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLElBQUk7QUFDOUMsZUFBSyxRQUFRO0FBQ2IsWUFBRSxLQUFLO0FBQUEsUUFDVCxPQUFPO0FBQ0wsZUFBSyxJQUFJLG1CQUFtQjtBQUM1QixlQUFLLElBQUksS0FBSyxLQUFLLEVBQUU7QUFDckIsZUFBSyxRQUFRO0FBQUEsUUFDZjtBQUFBLE1BQ0YsV0FBVyxDQUFDLEtBQUssZUFBZTtBQUM5QixhQUFLLFNBQVM7QUFDZCxhQUFLLFFBQVE7QUFDYixhQUFLLFVBQVU7QUFBQSxNQUNqQixPQUFPO0FBQ0wsYUFBSyxhQUFhO0FBQ2xCLGVBQU87QUFBQSxNQUNUO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxvQkFBZ0IsVUFBVSxxQkFBcUIsU0FBUyxjQUFjLEdBQUc7QUFDdkUsVUFBSSxLQUFLLFNBQVMsUUFBUyxLQUFLLEtBQUssb0JBQW9CLE1BQU0sSUFBSztBQUNsRSxlQUFPO0FBQUEsTUFDVCxXQUFXLEtBQUssS0FBSyxvQkFBb0IsTUFBTSxJQUFJO0FBQ2pELGFBQUssSUFBSSxTQUFTLEtBQUssS0FBSztBQUM1QixhQUFLLElBQUksT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQ3JDLGFBQUssSUFBSSxRQUFRLEtBQUssS0FBSztBQUMzQixhQUFLLElBQUksV0FBVztBQUNwQixhQUFLLElBQUksbUJBQW1CO0FBQzVCLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxLQUFLLEtBQUssV0FBVyxRQUFRO0FBQ3RDLGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1QsT0FBTztBQUNMLGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLG9CQUFnQixVQUFVLHlDQUF5QyxTQUFTLGdDQUFnQyxHQUFHO0FBQzdHLFVBQUksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxJQUFJO0FBQ25ELGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1QsT0FBTztBQUNMLGFBQUssYUFBYTtBQUNsQixhQUFLLFFBQVE7QUFDYixVQUFFLEtBQUs7QUFBQSxNQUNUO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxvQkFBZ0IsVUFBVSw2QkFBNkIsU0FBUyxxQkFBcUIsR0FBRztBQUN0RixVQUFJLE1BQU0sSUFBSTtBQUNaLGFBQUssUUFBUTtBQUFBLE1BQ2YsT0FBTztBQUNMLGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLG9CQUFnQixVQUFVLG9CQUFvQixTQUFTLGNBQWMsR0FBRztBQUN0RSxXQUFLLElBQUksU0FBUyxLQUFLLEtBQUs7QUFDNUIsVUFBSSxNQUFNLENBQUMsR0FBRztBQUNaLGFBQUssSUFBSSxXQUFXLEtBQUssS0FBSztBQUM5QixhQUFLLElBQUksV0FBVyxLQUFLLEtBQUs7QUFDOUIsYUFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLO0FBQzFCLGFBQUssSUFBSSxPQUFPLEtBQUssS0FBSztBQUMxQixhQUFLLElBQUksT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQ3JDLGFBQUssSUFBSSxRQUFRLEtBQUssS0FBSztBQUFBLE1BQzdCLFdBQVcsTUFBTSxJQUFJO0FBQ25CLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxNQUFNLElBQUk7QUFDbkIsYUFBSyxJQUFJLFdBQVcsS0FBSyxLQUFLO0FBQzlCLGFBQUssSUFBSSxXQUFXLEtBQUssS0FBSztBQUM5QixhQUFLLElBQUksT0FBTyxLQUFLLEtBQUs7QUFDMUIsYUFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLO0FBQzFCLGFBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDckMsYUFBSyxJQUFJLFFBQVE7QUFDakIsYUFBSyxRQUFRO0FBQUEsTUFDZixXQUFXLE1BQU0sSUFBSTtBQUNuQixhQUFLLElBQUksV0FBVyxLQUFLLEtBQUs7QUFDOUIsYUFBSyxJQUFJLFdBQVcsS0FBSyxLQUFLO0FBQzlCLGFBQUssSUFBSSxPQUFPLEtBQUssS0FBSztBQUMxQixhQUFLLElBQUksT0FBTyxLQUFLLEtBQUs7QUFDMUIsYUFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyxhQUFLLElBQUksUUFBUSxLQUFLLEtBQUs7QUFDM0IsYUFBSyxJQUFJLFdBQVc7QUFDcEIsYUFBSyxRQUFRO0FBQUEsTUFDZixXQUFXLFVBQVUsS0FBSyxHQUFHLEtBQUssTUFBTSxJQUFJO0FBQzFDLGFBQUssYUFBYTtBQUNsQixhQUFLLFFBQVE7QUFBQSxNQUNmLE9BQU87QUFDTCxhQUFLLElBQUksV0FBVyxLQUFLLEtBQUs7QUFDOUIsYUFBSyxJQUFJLFdBQVcsS0FBSyxLQUFLO0FBQzlCLGFBQUssSUFBSSxPQUFPLEtBQUssS0FBSztBQUMxQixhQUFLLElBQUksT0FBTyxLQUFLLEtBQUs7QUFDMUIsYUFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUVqRSxhQUFLLFFBQVE7QUFDYixVQUFFLEtBQUs7QUFBQSxNQUNUO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxvQkFBZ0IsVUFBVSwwQkFBMEIsU0FBUyxtQkFBbUIsR0FBRztBQUNqRixVQUFJLFVBQVUsS0FBSyxHQUFHLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSztBQUNqRCxZQUFJLE1BQU0sSUFBSTtBQUNaLGVBQUssYUFBYTtBQUFBLFFBQ3BCO0FBQ0EsYUFBSyxRQUFRO0FBQUEsTUFDZixXQUFXLE1BQU0sSUFBSTtBQUNuQixhQUFLLFFBQVE7QUFBQSxNQUNmLE9BQU87QUFDTCxhQUFLLElBQUksV0FBVyxLQUFLLEtBQUs7QUFDOUIsYUFBSyxJQUFJLFdBQVcsS0FBSyxLQUFLO0FBQzlCLGFBQUssSUFBSSxPQUFPLEtBQUssS0FBSztBQUMxQixhQUFLLElBQUksT0FBTyxLQUFLLEtBQUs7QUFDMUIsYUFBSyxRQUFRO0FBQ2IsVUFBRSxLQUFLO0FBQUEsTUFDVDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUscUNBQXFDLFNBQVMsNkJBQTZCLEdBQUc7QUFDdEcsVUFBSSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLElBQUk7QUFDbkQsYUFBSyxRQUFRO0FBQ2IsVUFBRSxLQUFLO0FBQUEsTUFDVCxPQUFPO0FBQ0wsYUFBSyxhQUFhO0FBQ2xCLGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLG9CQUFnQixVQUFVLDRDQUE0QyxTQUFTLG1DQUFtQyxHQUFHO0FBQ25ILFVBQUksTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUN4QixhQUFLLFFBQVE7QUFDYixVQUFFLEtBQUs7QUFBQSxNQUNULE9BQU87QUFDTCxhQUFLLGFBQWE7QUFBQSxNQUNwQjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUscUJBQXFCLFNBQVMsZUFBZSxHQUFHLE1BQU07QUFDOUUsVUFBSSxNQUFNLElBQUk7QUFDWixhQUFLLGFBQWE7QUFDbEIsWUFBSSxLQUFLLFFBQVE7QUFDZixlQUFLLFNBQVMsUUFBUSxLQUFLO0FBQUEsUUFDN0I7QUFDQSxhQUFLLFNBQVM7QUFHZCxjQUFNLE1BQU0sYUFBYSxLQUFLLE1BQU07QUFDcEMsaUJBQVMsVUFBVSxHQUFHLFVBQVUsS0FBSyxFQUFFLFNBQVM7QUFDOUMsZ0JBQU0sWUFBWSxLQUFLLE9BQU8sWUFBWSxPQUFPO0FBRWpELGNBQUksY0FBYyxNQUFNLENBQUMsS0FBSyx1QkFBdUI7QUFDbkQsaUJBQUssd0JBQXdCO0FBQzdCO0FBQUEsVUFDRjtBQUNBLGdCQUFNLG9CQUFvQixrQkFBa0IsV0FBVyx1QkFBdUI7QUFDOUUsY0FBSSxLQUFLLHVCQUF1QjtBQUM5QixpQkFBSyxJQUFJLFlBQVk7QUFBQSxVQUN2QixPQUFPO0FBQ0wsaUJBQUssSUFBSSxZQUFZO0FBQUEsVUFDdkI7QUFBQSxRQUNGO0FBQ0EsYUFBSyxTQUFTO0FBQUEsTUFDaEIsV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFDekMsVUFBVSxLQUFLLEdBQUcsS0FBSyxNQUFNLElBQUs7QUFDNUMsWUFBSSxLQUFLLFVBQVUsS0FBSyxXQUFXLElBQUk7QUFDckMsZUFBSyxhQUFhO0FBQ2xCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGFBQUssV0FBVyxhQUFhLEtBQUssTUFBTSxJQUFJO0FBQzVDLGFBQUssU0FBUztBQUNkLGFBQUssUUFBUTtBQUFBLE1BQ2YsT0FBTztBQUNMLGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxvQkFBZ0IsVUFBVSxvQkFDMUIsZ0JBQWdCLFVBQVUsZ0JBQWdCLFNBQVMsY0FBYyxHQUFHLE1BQU07QUFDeEUsVUFBSSxLQUFLLGlCQUFpQixLQUFLLElBQUksV0FBVyxRQUFRO0FBQ3BELFVBQUUsS0FBSztBQUNQLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxNQUFNLE1BQU0sQ0FBQyxLQUFLLFNBQVM7QUFDcEMsWUFBSSxLQUFLLFdBQVcsSUFBSTtBQUN0QixlQUFLLGFBQWE7QUFDbEIsaUJBQU87QUFBQSxRQUNUO0FBRUEsY0FBTSxPQUFPLFVBQVUsS0FBSyxRQUFRLFVBQVUsS0FBSyxHQUFHLENBQUM7QUFDdkQsWUFBSSxTQUFTLFNBQVM7QUFDcEIsaUJBQU87QUFBQSxRQUNUO0FBRUEsYUFBSyxJQUFJLE9BQU87QUFDaEIsYUFBSyxTQUFTO0FBQ2QsYUFBSyxRQUFRO0FBQ2IsWUFBSSxLQUFLLGtCQUFrQixZQUFZO0FBQ3JDLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFDekMsVUFBVSxLQUFLLEdBQUcsS0FBSyxNQUFNLElBQUs7QUFDNUMsVUFBRSxLQUFLO0FBQ1AsWUFBSSxVQUFVLEtBQUssR0FBRyxLQUFLLEtBQUssV0FBVyxJQUFJO0FBQzdDLGVBQUssYUFBYTtBQUNsQixpQkFBTztBQUFBLFFBQ1QsV0FBVyxLQUFLLGlCQUFpQixLQUFLLFdBQVcsT0FDckMsb0JBQW9CLEtBQUssR0FBRyxLQUFLLEtBQUssSUFBSSxTQUFTLE9BQU87QUFDcEUsZUFBSyxhQUFhO0FBQ2xCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLGNBQU0sT0FBTyxVQUFVLEtBQUssUUFBUSxVQUFVLEtBQUssR0FBRyxDQUFDO0FBQ3ZELFlBQUksU0FBUyxTQUFTO0FBQ3BCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLGFBQUssSUFBSSxPQUFPO0FBQ2hCLGFBQUssU0FBUztBQUNkLGFBQUssUUFBUTtBQUNiLFlBQUksS0FBSyxlQUFlO0FBQ3RCLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsT0FBTztBQUNMLFlBQUksTUFBTSxJQUFJO0FBQ1osZUFBSyxVQUFVO0FBQUEsUUFDakIsV0FBVyxNQUFNLElBQUk7QUFDbkIsZUFBSyxVQUFVO0FBQUEsUUFDakI7QUFDQSxhQUFLLFVBQVU7QUFBQSxNQUNqQjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUsZ0JBQWdCLFNBQVMsVUFBVSxHQUFHLE1BQU07QUFDcEUsVUFBSSxhQUFhLENBQUMsR0FBRztBQUNuQixhQUFLLFVBQVU7QUFBQSxNQUNqQixXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUN6QyxVQUFVLEtBQUssR0FBRyxLQUFLLE1BQU0sTUFDOUIsS0FBSyxlQUFlO0FBQzdCLFlBQUksS0FBSyxXQUFXLElBQUk7QUFDdEIsZ0JBQU0sT0FBTyxTQUFTLEtBQUssTUFBTTtBQUNqQyxjQUFJLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLEdBQUc7QUFDOUIsaUJBQUssYUFBYTtBQUNsQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxlQUFLLElBQUksT0FBTyxTQUFTLFlBQVksS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPO0FBQy9ELGVBQUssU0FBUztBQUFBLFFBQ2hCO0FBQ0EsWUFBSSxLQUFLLGVBQWU7QUFDdEIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsYUFBSyxRQUFRO0FBQ2IsVUFBRSxLQUFLO0FBQUEsTUFDVCxPQUFPO0FBQ0wsYUFBSyxhQUFhO0FBQ2xCLGVBQU87QUFBQSxNQUNUO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFNLDBCQUEwQixvQkFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0FBRXhELG9CQUFnQixVQUFVLGdCQUFnQixTQUFTLFVBQVUsR0FBRztBQUM5RCxXQUFLLElBQUksU0FBUztBQUVsQixVQUFJLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDeEIsWUFBSSxNQUFNLElBQUk7QUFDWixlQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUNBLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxLQUFLLFNBQVMsUUFBUSxLQUFLLEtBQUssV0FBVyxRQUFRO0FBQzVELFlBQUksTUFBTSxDQUFDLEdBQUc7QUFDWixlQUFLLElBQUksT0FBTyxLQUFLLEtBQUs7QUFDMUIsZUFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyxlQUFLLElBQUksUUFBUSxLQUFLLEtBQUs7QUFBQSxRQUM3QixXQUFXLE1BQU0sSUFBSTtBQUNuQixlQUFLLElBQUksT0FBTyxLQUFLLEtBQUs7QUFDMUIsZUFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyxlQUFLLElBQUksUUFBUTtBQUNqQixlQUFLLFFBQVE7QUFBQSxRQUNmLFdBQVcsTUFBTSxJQUFJO0FBQ25CLGVBQUssSUFBSSxPQUFPLEtBQUssS0FBSztBQUMxQixlQUFLLElBQUksT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQ3JDLGVBQUssSUFBSSxRQUFRLEtBQUssS0FBSztBQUMzQixlQUFLLElBQUksV0FBVztBQUNwQixlQUFLLFFBQVE7QUFBQSxRQUNmLE9BQU87QUFDTCxjQUFJLEtBQUssTUFBTSxTQUFTLEtBQUssVUFBVSxNQUFNLEtBQ3pDLENBQUMsK0JBQStCLEdBQUcsS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLEtBQzlELEtBQUssTUFBTSxTQUFTLEtBQUssVUFBVSxLQUFLLEtBQ3hDLENBQUMsd0JBQXdCLElBQUksS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLEdBQUk7QUFDaEUsaUJBQUssSUFBSSxPQUFPLEtBQUssS0FBSztBQUMxQixpQkFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyx3QkFBWSxLQUFLLEdBQUc7QUFBQSxVQUN0QixPQUFPO0FBQ0wsaUJBQUssYUFBYTtBQUFBLFVBQ3BCO0FBRUEsZUFBSyxRQUFRO0FBQ2IsWUFBRSxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0YsT0FBTztBQUNMLGFBQUssUUFBUTtBQUNiLFVBQUUsS0FBSztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLG9CQUFnQixVQUFVLHNCQUFzQixTQUFTLGVBQWUsR0FBRztBQUN6RSxVQUFJLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDeEIsWUFBSSxNQUFNLElBQUk7QUFDWixlQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUNBLGFBQUssUUFBUTtBQUFBLE1BQ2YsT0FBTztBQUNMLFlBQUksS0FBSyxTQUFTLFFBQVEsS0FBSyxLQUFLLFdBQVcsUUFBUTtBQUNyRCxjQUFJLHFDQUFxQyxLQUFLLEtBQUssS0FBSyxFQUFFLEdBQUc7QUFDM0QsaUJBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssRUFBRTtBQUFBLFVBQ3RDLE9BQU87QUFDTCxpQkFBSyxJQUFJLE9BQU8sS0FBSyxLQUFLO0FBQUEsVUFDNUI7QUFBQSxRQUNGO0FBQ0EsYUFBSyxRQUFRO0FBQ2IsVUFBRSxLQUFLO0FBQUEsTUFDVDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUscUJBQXFCLFNBQVMsY0FBYyxHQUFHLE1BQU07QUFDN0UsVUFBSSxNQUFNLENBQUMsS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDNUQsVUFBRSxLQUFLO0FBQ1AsWUFBSSxDQUFDLEtBQUssaUJBQWlCLDJCQUEyQixLQUFLLE1BQU0sR0FBRztBQUNsRSxlQUFLLGFBQWE7QUFDbEIsZUFBSyxRQUFRO0FBQUEsUUFDZixXQUFXLEtBQUssV0FBVyxJQUFJO0FBQzdCLGVBQUssSUFBSSxPQUFPO0FBQ2hCLGNBQUksS0FBSyxlQUFlO0FBQ3RCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGVBQUssUUFBUTtBQUFBLFFBQ2YsT0FBTztBQUNMLGNBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxVQUFVLEtBQUssR0FBRyxDQUFDO0FBQ3JELGNBQUksU0FBUyxTQUFTO0FBQ3BCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksU0FBUyxhQUFhO0FBQ3hCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGVBQUssSUFBSSxPQUFPO0FBRWhCLGNBQUksS0FBSyxlQUFlO0FBQ3RCLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGVBQUssU0FBUztBQUNkLGVBQUssUUFBUTtBQUFBLFFBQ2Y7QUFBQSxNQUNGLE9BQU87QUFDTCxhQUFLLFVBQVU7QUFBQSxNQUNqQjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUsc0JBQXNCLFNBQVMsZUFBZSxHQUFHO0FBQ3pFLFVBQUksVUFBVSxLQUFLLEdBQUcsR0FBRztBQUN2QixZQUFJLE1BQU0sSUFBSTtBQUNaLGVBQUssYUFBYTtBQUFBLFFBQ3BCO0FBQ0EsYUFBSyxRQUFRO0FBRWIsWUFBSSxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQ3hCLFlBQUUsS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLFdBQVcsQ0FBQyxLQUFLLGlCQUFpQixNQUFNLElBQUk7QUFDMUMsYUFBSyxJQUFJLFFBQVE7QUFDakIsYUFBSyxRQUFRO0FBQUEsTUFDZixXQUFXLENBQUMsS0FBSyxpQkFBaUIsTUFBTSxJQUFJO0FBQzFDLGFBQUssSUFBSSxXQUFXO0FBQ3BCLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxNQUFNLFFBQVc7QUFDMUIsYUFBSyxRQUFRO0FBQ2IsWUFBSSxNQUFNLElBQUk7QUFDWixZQUFFLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUsZ0JBQWdCLFNBQVMsVUFBVSxHQUFHO0FBQzlELFVBQUksTUFBTSxDQUFDLEtBQUssTUFBTSxNQUFPLFVBQVUsS0FBSyxHQUFHLEtBQUssTUFBTSxNQUNyRCxDQUFDLEtBQUssa0JBQWtCLE1BQU0sTUFBTSxNQUFNLEtBQU07QUFDbkQsWUFBSSxVQUFVLEtBQUssR0FBRyxLQUFLLE1BQU0sSUFBSTtBQUNuQyxlQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUVBLFlBQUksWUFBWSxLQUFLLE1BQU0sR0FBRztBQUM1QixzQkFBWSxLQUFLLEdBQUc7QUFDcEIsY0FBSSxNQUFNLE1BQU0sRUFBRSxVQUFVLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSztBQUNsRCxpQkFBSyxJQUFJLEtBQUssS0FBSyxFQUFFO0FBQUEsVUFDdkI7QUFBQSxRQUNGLFdBQVcsWUFBWSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQ2xDLEVBQUUsVUFBVSxLQUFLLEdBQUcsS0FBSyxNQUFNLEtBQUs7QUFDN0MsZUFBSyxJQUFJLEtBQUssS0FBSyxFQUFFO0FBQUEsUUFDdkIsV0FBVyxDQUFDLFlBQVksS0FBSyxNQUFNLEdBQUc7QUFDcEMsY0FBSSxLQUFLLElBQUksV0FBVyxVQUFVLEtBQUssSUFBSSxLQUFLLFdBQVcsS0FBSywyQkFBMkIsS0FBSyxNQUFNLEdBQUc7QUFDdkcsZ0JBQUksS0FBSyxJQUFJLFNBQVMsTUFBTSxLQUFLLElBQUksU0FBUyxNQUFNO0FBQ2xELG1CQUFLLGFBQWE7QUFDbEIsbUJBQUssSUFBSSxPQUFPO0FBQUEsWUFDbEI7QUFDQSxpQkFBSyxTQUFTLEtBQUssT0FBTyxLQUFLO0FBQUEsVUFDakM7QUFDQSxlQUFLLElBQUksS0FBSyxLQUFLLEtBQUssTUFBTTtBQUFBLFFBQ2hDO0FBQ0EsYUFBSyxTQUFTO0FBQ2QsWUFBSSxLQUFLLElBQUksV0FBVyxXQUFXLE1BQU0sVUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBQzNFLGlCQUFPLEtBQUssSUFBSSxLQUFLLFNBQVMsS0FBSyxLQUFLLElBQUksS0FBSyxPQUFPLElBQUk7QUFDMUQsaUJBQUssYUFBYTtBQUNsQixpQkFBSyxJQUFJLEtBQUssTUFBTTtBQUFBLFVBQ3RCO0FBQUEsUUFDRjtBQUNBLFlBQUksTUFBTSxJQUFJO0FBQ1osZUFBSyxJQUFJLFFBQVE7QUFDakIsZUFBSyxRQUFRO0FBQUEsUUFDZjtBQUNBLFlBQUksTUFBTSxJQUFJO0FBQ1osZUFBSyxJQUFJLFdBQVc7QUFDcEIsZUFBSyxRQUFRO0FBQUEsUUFDZjtBQUFBLE1BQ0YsT0FBTztBQUdMLFlBQUksTUFBTSxPQUNQLENBQUMsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FDdkMsQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsRUFBRSxJQUFJO0FBQzlDLGVBQUssYUFBYTtBQUFBLFFBQ3BCO0FBRUEsYUFBSyxVQUFVLGtCQUFrQixHQUFHLG1CQUFtQjtBQUFBLE1BQ3pEO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxvQkFBZ0IsVUFBVSxxQ0FBcUMsU0FBUywwQkFBMEIsR0FBRztBQUNuRyxVQUFJLE1BQU0sSUFBSTtBQUNaLGFBQUssSUFBSSxRQUFRO0FBQ2pCLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxNQUFNLElBQUk7QUFDbkIsYUFBSyxJQUFJLFdBQVc7QUFDcEIsYUFBSyxRQUFRO0FBQUEsTUFDZixPQUFPO0FBRUwsWUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sSUFBSTtBQUN6QixlQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUVBLFlBQUksTUFBTSxPQUNMLENBQUMsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FDeEMsQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsRUFBRSxJQUFJO0FBQy9DLGVBQUssYUFBYTtBQUFBLFFBQ3BCO0FBRUEsWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO0FBQ2IsZUFBSyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLGtCQUFrQixHQUFHLHdCQUF3QjtBQUFBLFFBQ3JGO0FBQUEsTUFDRjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUsaUJBQWlCLFNBQVMsV0FBVyxHQUFHLE1BQU07QUFDdEUsVUFBSSxNQUFNLENBQUMsS0FBTSxDQUFDLEtBQUssaUJBQWlCLE1BQU0sSUFBSztBQUNqRCxZQUFJLENBQUMsVUFBVSxLQUFLLEdBQUcsS0FBSyxLQUFLLElBQUksV0FBVyxRQUFRLEtBQUssSUFBSSxXQUFXLE9BQU87QUFDakYsZUFBSyxtQkFBbUI7QUFBQSxRQUMxQjtBQUVBLGNBQU0sU0FBUyxJQUFJLE9BQU8sS0FBSyxNQUFNO0FBQ3JDLGlCQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxFQUFFLEdBQUc7QUFDdEMsY0FBSSxPQUFPLEtBQUssTUFBUSxPQUFPLEtBQUssT0FBUSxPQUFPLE9BQU8sTUFBUSxPQUFPLE9BQU8sTUFDNUUsT0FBTyxPQUFPLE1BQVEsT0FBTyxPQUFPLElBQU07QUFDNUMsaUJBQUssSUFBSSxTQUFTLGNBQWMsT0FBTyxFQUFFO0FBQUEsVUFDM0MsT0FBTztBQUNMLGlCQUFLLElBQUksU0FBUyxPQUFPLGNBQWMsT0FBTyxFQUFFO0FBQUEsVUFDbEQ7QUFBQSxRQUNGO0FBRUEsYUFBSyxTQUFTO0FBQ2QsWUFBSSxNQUFNLElBQUk7QUFDWixlQUFLLElBQUksV0FBVztBQUNwQixlQUFLLFFBQVE7QUFBQSxRQUNmO0FBQUEsTUFDRixPQUFPO0FBRUwsWUFBSSxNQUFNLE9BQ1AsQ0FBQyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsRUFBRSxLQUN2QyxDQUFDLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLElBQUk7QUFDOUMsZUFBSyxhQUFhO0FBQUEsUUFDcEI7QUFFQSxhQUFLLFVBQVU7QUFBQSxNQUNqQjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsb0JBQWdCLFVBQVUsb0JBQW9CLFNBQVMsY0FBYyxHQUFHO0FBQ3RFLFVBQUksTUFBTSxDQUFDLEdBQUc7QUFBQSxNQUNkLFdBQVcsTUFBTSxHQUFLO0FBQ3BCLGFBQUssYUFBYTtBQUFBLE1BQ3BCLE9BQU87QUFFTCxZQUFJLE1BQU0sT0FDUCxDQUFDLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxFQUFFLEtBQ3ZDLENBQUMsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEVBQUUsSUFBSTtBQUM5QyxlQUFLLGFBQWE7QUFBQSxRQUNwQjtBQUVBLGFBQUssSUFBSSxZQUFZLGtCQUFrQixHQUFHLHdCQUF3QjtBQUFBLE1BQ3BFO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGFBQWEsS0FBSyxpQkFBaUI7QUFDMUMsVUFBSSxTQUFTLElBQUksU0FBUztBQUMxQixVQUFJLElBQUksU0FBUyxNQUFNO0FBQ3JCLGtCQUFVO0FBRVYsWUFBSSxJQUFJLGFBQWEsTUFBTSxJQUFJLGFBQWEsSUFBSTtBQUM5QyxvQkFBVSxJQUFJO0FBQ2QsY0FBSSxJQUFJLGFBQWEsSUFBSTtBQUN2QixzQkFBVSxNQUFNLElBQUk7QUFBQSxVQUN0QjtBQUNBLG9CQUFVO0FBQUEsUUFDWjtBQUVBLGtCQUFVLGNBQWMsSUFBSSxJQUFJO0FBRWhDLFlBQUksSUFBSSxTQUFTLE1BQU07QUFDckIsb0JBQVUsTUFBTSxJQUFJO0FBQUEsUUFDdEI7QUFBQSxNQUNGLFdBQVcsSUFBSSxTQUFTLFFBQVEsSUFBSSxXQUFXLFFBQVE7QUFDckQsa0JBQVU7QUFBQSxNQUNaO0FBRUEsVUFBSSxJQUFJLGtCQUFrQjtBQUN4QixrQkFBVSxJQUFJLEtBQUs7QUFBQSxNQUNyQixPQUFPO0FBQ0wsbUJBQVcsVUFBVSxJQUFJLE1BQU07QUFDN0Isb0JBQVUsTUFBTTtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUVBLFVBQUksSUFBSSxVQUFVLE1BQU07QUFDdEIsa0JBQVUsTUFBTSxJQUFJO0FBQUEsTUFDdEI7QUFFQSxVQUFJLENBQUMsbUJBQW1CLElBQUksYUFBYSxNQUFNO0FBQzdDLGtCQUFVLE1BQU0sSUFBSTtBQUFBLE1BQ3RCO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGdCQUFnQixPQUFPO0FBQzlCLFVBQUksU0FBUyxNQUFNLFNBQVM7QUFDNUIsZ0JBQVUsY0FBYyxNQUFNLElBQUk7QUFFbEMsVUFBSSxNQUFNLFNBQVMsTUFBTTtBQUN2QixrQkFBVSxNQUFNLE1BQU07QUFBQSxNQUN4QjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsSUFBQUQsUUFBTyxRQUFRLGVBQWU7QUFFOUIsSUFBQUEsUUFBTyxRQUFRLHFCQUFxQixTQUFVLEtBQUs7QUFFakQsY0FBUSxJQUFJO0FBQUEsYUFDTDtBQUNILGNBQUk7QUFDRixtQkFBT0EsUUFBTyxRQUFRLG1CQUFtQkEsUUFBTyxRQUFRLFNBQVMsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUFBLFVBQy9FLFNBQVMsR0FBUDtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLGFBQ0c7QUFBQSxhQUNBO0FBQUEsYUFDQTtBQUFBLGFBQ0E7QUFBQSxhQUNBO0FBQUEsYUFDQTtBQUNILGlCQUFPLGdCQUFnQjtBQUFBLFlBQ3JCLFFBQVEsSUFBSTtBQUFBLFlBQ1osTUFBTSxJQUFJO0FBQUEsWUFDVixNQUFNLElBQUk7QUFBQSxVQUNaLENBQUM7QUFBQSxhQUNFO0FBRUgsaUJBQU87QUFBQTtBQUdQLGlCQUFPO0FBQUE7QUFBQSxJQUViO0FBRUEsSUFBQUEsUUFBTyxRQUFRLGdCQUFnQixTQUFVLE9BQU8sU0FBUztBQUN2RCxVQUFJLFlBQVksUUFBVztBQUN6QixrQkFBVSxDQUFDO0FBQUEsTUFDYjtBQUVBLFlBQU0sTUFBTSxJQUFJLGdCQUFnQixPQUFPLFFBQVEsU0FBUyxRQUFRLGtCQUFrQixRQUFRLEtBQUssUUFBUSxhQUFhO0FBQ3BILFVBQUksSUFBSSxTQUFTO0FBQ2YsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPLElBQUk7QUFBQSxJQUNiO0FBRUEsSUFBQUEsUUFBTyxRQUFRLGlCQUFpQixTQUFVLEtBQUssVUFBVTtBQUN2RCxVQUFJLFdBQVc7QUFDZixZQUFNLFVBQVUsU0FBUyxLQUFLLE9BQU8sUUFBUTtBQUM3QyxlQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxFQUFFLEdBQUc7QUFDdkMsWUFBSSxZQUFZLGtCQUFrQixRQUFRLElBQUksdUJBQXVCO0FBQUEsTUFDdkU7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxRQUFRLGlCQUFpQixTQUFVLEtBQUssVUFBVTtBQUN2RCxVQUFJLFdBQVc7QUFDZixZQUFNLFVBQVUsU0FBUyxLQUFLLE9BQU8sUUFBUTtBQUM3QyxlQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxFQUFFLEdBQUc7QUFDdkMsWUFBSSxZQUFZLGtCQUFrQixRQUFRLElBQUksdUJBQXVCO0FBQUEsTUFDdkU7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxRQUFRLGdCQUFnQjtBQUUvQixJQUFBQSxRQUFPLFFBQVEsa0NBQWtDO0FBRWpELElBQUFBLFFBQU8sUUFBUSxtQkFBbUIsU0FBVSxTQUFTO0FBQ25ELGFBQU8sT0FBTyxPQUFPO0FBQUEsSUFDdkI7QUFFQSxJQUFBQSxRQUFPLFFBQVEsV0FBVyxTQUFVLE9BQU8sU0FBUztBQUNsRCxVQUFJLFlBQVksUUFBVztBQUN6QixrQkFBVSxDQUFDO0FBQUEsTUFDYjtBQUdBLGFBQU9BLFFBQU8sUUFBUSxjQUFjLE9BQU8sRUFBRSxTQUFTLFFBQVEsU0FBUyxrQkFBa0IsUUFBUSxpQkFBaUIsQ0FBQztBQUFBLElBQ3JIO0FBQUE7QUFBQTs7O0FDaHhDQTtBQUFBO0FBQUE7QUFDQSxRQUFNLE1BQU07QUFFWixZQUFRLGlCQUFpQixNQUFNLFFBQVE7QUFBQSxNQUNyQyxZQUFZLGlCQUFpQjtBQUMzQixjQUFNLE1BQU0sZ0JBQWdCO0FBQzVCLGNBQU0sT0FBTyxnQkFBZ0I7QUFFN0IsWUFBSSxhQUFhO0FBQ2pCLFlBQUksU0FBUyxRQUFXO0FBQ3RCLHVCQUFhLElBQUksY0FBYyxJQUFJO0FBQ25DLGNBQUksZUFBZSxXQUFXO0FBQzVCLGtCQUFNLElBQUksVUFBVSxrQkFBa0I7QUFBQSxVQUN4QztBQUFBLFFBQ0Y7QUFFQSxjQUFNLFlBQVksSUFBSSxjQUFjLEtBQUssRUFBRSxTQUFTLFdBQVcsQ0FBQztBQUNoRSxZQUFJLGNBQWMsV0FBVztBQUMzQixnQkFBTSxJQUFJLFVBQVUsYUFBYTtBQUFBLFFBQ25DO0FBRUEsYUFBSyxPQUFPO0FBQUEsTUFHZDtBQUFBLE1BRUEsSUFBSSxPQUFPO0FBQ1QsZUFBTyxJQUFJLGFBQWEsS0FBSyxJQUFJO0FBQUEsTUFDbkM7QUFBQSxNQUVBLElBQUksS0FBSyxHQUFHO0FBQ1YsY0FBTSxZQUFZLElBQUksY0FBYyxDQUFDO0FBQ3JDLFlBQUksY0FBYyxXQUFXO0FBQzNCLGdCQUFNLElBQUksVUFBVSxhQUFhO0FBQUEsUUFDbkM7QUFFQSxhQUFLLE9BQU87QUFBQSxNQUNkO0FBQUEsTUFFQSxJQUFJLFNBQVM7QUFDWCxlQUFPLElBQUksbUJBQW1CLEtBQUssSUFBSTtBQUFBLE1BQ3pDO0FBQUEsTUFFQSxJQUFJLFdBQVc7QUFDYixlQUFPLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDNUI7QUFBQSxNQUVBLElBQUksU0FBUyxHQUFHO0FBQ2QsWUFBSSxjQUFjLElBQUksS0FBSyxFQUFFLEtBQUssS0FBSyxNQUFNLGVBQWUsZUFBZSxDQUFDO0FBQUEsTUFDOUU7QUFBQSxNQUVBLElBQUksV0FBVztBQUNiLGVBQU8sS0FBSyxLQUFLO0FBQUEsTUFDbkI7QUFBQSxNQUVBLElBQUksU0FBUyxHQUFHO0FBQ2QsWUFBSSxJQUFJLGdDQUFnQyxLQUFLLElBQUksR0FBRztBQUNsRDtBQUFBLFFBQ0Y7QUFFQSxZQUFJLGVBQWUsS0FBSyxNQUFNLENBQUM7QUFBQSxNQUNqQztBQUFBLE1BRUEsSUFBSSxXQUFXO0FBQ2IsZUFBTyxLQUFLLEtBQUs7QUFBQSxNQUNuQjtBQUFBLE1BRUEsSUFBSSxTQUFTLEdBQUc7QUFDZCxZQUFJLElBQUksZ0NBQWdDLEtBQUssSUFBSSxHQUFHO0FBQ2xEO0FBQUEsUUFDRjtBQUVBLFlBQUksZUFBZSxLQUFLLE1BQU0sQ0FBQztBQUFBLE1BQ2pDO0FBQUEsTUFFQSxJQUFJLE9BQU87QUFDVCxjQUFNLE1BQU0sS0FBSztBQUVqQixZQUFJLElBQUksU0FBUyxNQUFNO0FBQ3JCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksSUFBSSxTQUFTLE1BQU07QUFDckIsaUJBQU8sSUFBSSxjQUFjLElBQUksSUFBSTtBQUFBLFFBQ25DO0FBRUEsZUFBTyxJQUFJLGNBQWMsSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLGlCQUFpQixJQUFJLElBQUk7QUFBQSxNQUMxRTtBQUFBLE1BRUEsSUFBSSxLQUFLLEdBQUc7QUFDVixZQUFJLEtBQUssS0FBSyxrQkFBa0I7QUFDOUI7QUFBQSxRQUNGO0FBRUEsWUFBSSxjQUFjLEdBQUcsRUFBRSxLQUFLLEtBQUssTUFBTSxlQUFlLE9BQU8sQ0FBQztBQUFBLE1BQ2hFO0FBQUEsTUFFQSxJQUFJLFdBQVc7QUFDYixZQUFJLEtBQUssS0FBSyxTQUFTLE1BQU07QUFDM0IsaUJBQU87QUFBQSxRQUNUO0FBRUEsZUFBTyxJQUFJLGNBQWMsS0FBSyxLQUFLLElBQUk7QUFBQSxNQUN6QztBQUFBLE1BRUEsSUFBSSxTQUFTLEdBQUc7QUFDZCxZQUFJLEtBQUssS0FBSyxrQkFBa0I7QUFDOUI7QUFBQSxRQUNGO0FBRUEsWUFBSSxjQUFjLEdBQUcsRUFBRSxLQUFLLEtBQUssTUFBTSxlQUFlLFdBQVcsQ0FBQztBQUFBLE1BQ3BFO0FBQUEsTUFFQSxJQUFJLE9BQU87QUFDVCxZQUFJLEtBQUssS0FBSyxTQUFTLE1BQU07QUFDM0IsaUJBQU87QUFBQSxRQUNUO0FBRUEsZUFBTyxJQUFJLGlCQUFpQixLQUFLLEtBQUssSUFBSTtBQUFBLE1BQzVDO0FBQUEsTUFFQSxJQUFJLEtBQUssR0FBRztBQUNWLFlBQUksSUFBSSxnQ0FBZ0MsS0FBSyxJQUFJLEdBQUc7QUFDbEQ7QUFBQSxRQUNGO0FBRUEsWUFBSSxNQUFNLElBQUk7QUFDWixlQUFLLEtBQUssT0FBTztBQUFBLFFBQ25CLE9BQU87QUFDTCxjQUFJLGNBQWMsR0FBRyxFQUFFLEtBQUssS0FBSyxNQUFNLGVBQWUsT0FBTyxDQUFDO0FBQUEsUUFDaEU7QUFBQSxNQUNGO0FBQUEsTUFFQSxJQUFJLFdBQVc7QUFDYixZQUFJLEtBQUssS0FBSyxrQkFBa0I7QUFDOUIsaUJBQU8sS0FBSyxLQUFLLEtBQUs7QUFBQSxRQUN4QjtBQUVBLFlBQUksS0FBSyxLQUFLLEtBQUssV0FBVyxHQUFHO0FBQy9CLGlCQUFPO0FBQUEsUUFDVDtBQUVBLGVBQU8sTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFBQSxNQUN0QztBQUFBLE1BRUEsSUFBSSxTQUFTLEdBQUc7QUFDZCxZQUFJLEtBQUssS0FBSyxrQkFBa0I7QUFDOUI7QUFBQSxRQUNGO0FBRUEsYUFBSyxLQUFLLE9BQU8sQ0FBQztBQUNsQixZQUFJLGNBQWMsR0FBRyxFQUFFLEtBQUssS0FBSyxNQUFNLGVBQWUsYUFBYSxDQUFDO0FBQUEsTUFDdEU7QUFBQSxNQUVBLElBQUksU0FBUztBQUNYLFlBQUksS0FBSyxLQUFLLFVBQVUsUUFBUSxLQUFLLEtBQUssVUFBVSxJQUFJO0FBQ3RELGlCQUFPO0FBQUEsUUFDVDtBQUVBLGVBQU8sTUFBTSxLQUFLLEtBQUs7QUFBQSxNQUN6QjtBQUFBLE1BRUEsSUFBSSxPQUFPLEdBQUc7QUFHWixjQUFNLE1BQU0sS0FBSztBQUVqQixZQUFJLE1BQU0sSUFBSTtBQUNaLGNBQUksUUFBUTtBQUNaO0FBQUEsUUFDRjtBQUVBLGNBQU0sUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJO0FBQzlDLFlBQUksUUFBUTtBQUNaLFlBQUksY0FBYyxPQUFPLEVBQUUsS0FBSyxlQUFlLFFBQVEsQ0FBQztBQUFBLE1BQzFEO0FBQUEsTUFFQSxJQUFJLE9BQU87QUFDVCxZQUFJLEtBQUssS0FBSyxhQUFhLFFBQVEsS0FBSyxLQUFLLGFBQWEsSUFBSTtBQUM1RCxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxlQUFPLE1BQU0sS0FBSyxLQUFLO0FBQUEsTUFDekI7QUFBQSxNQUVBLElBQUksS0FBSyxHQUFHO0FBQ1YsWUFBSSxNQUFNLElBQUk7QUFDWixlQUFLLEtBQUssV0FBVztBQUNyQjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLFFBQVEsRUFBRSxPQUFPLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSTtBQUM5QyxhQUFLLEtBQUssV0FBVztBQUNyQixZQUFJLGNBQWMsT0FBTyxFQUFFLEtBQUssS0FBSyxNQUFNLGVBQWUsV0FBVyxDQUFDO0FBQUEsTUFDeEU7QUFBQSxNQUVBLFNBQVM7QUFDUCxlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ3ZNQTtBQUFBLG9GQUFBRSxTQUFBO0FBQUE7QUFFQSxRQUFNLGNBQWM7QUFDcEIsUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBRWIsUUFBTSxPQUFPLE1BQU07QUFFbkIsYUFBUyxJQUFJLEtBQUs7QUFDaEIsVUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQU07QUFDakQsY0FBTSxJQUFJLFVBQVUsdUhBQXVIO0FBQUEsTUFDN0k7QUFDQSxVQUFJLFVBQVUsU0FBUyxHQUFHO0FBQ3hCLGNBQU0sSUFBSSxVQUFVLDhEQUE4RCxVQUFVLFNBQVMsV0FBVztBQUFBLE1BQ2xIO0FBQ0EsWUFBTSxPQUFPLENBQUM7QUFDZCxlQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsVUFBVSxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ2xELGFBQUssS0FBSyxVQUFVO0FBQUEsTUFDdEI7QUFDQSxXQUFLLEtBQUssWUFBWSxhQUFhLEtBQUssRUFBRTtBQUMxQyxVQUFJLEtBQUssT0FBTyxRQUFXO0FBQzNCLGFBQUssS0FBSyxZQUFZLGFBQWEsS0FBSyxFQUFFO0FBQUEsTUFDMUM7QUFFQSxNQUFBQSxRQUFPLFFBQVEsTUFBTSxNQUFNLElBQUk7QUFBQSxJQUNqQztBQUVBLFFBQUksVUFBVSxTQUFTLFNBQVMsU0FBUztBQUN2QyxVQUFJLENBQUMsUUFBUSxDQUFDQSxRQUFPLFFBQVEsR0FBRyxJQUFJLEdBQUc7QUFDckMsY0FBTSxJQUFJLFVBQVUsb0JBQW9CO0FBQUEsTUFDMUM7QUFDQSxZQUFNLE9BQU8sQ0FBQztBQUNkLGVBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxVQUFVLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDbEQsYUFBSyxLQUFLLFVBQVU7QUFBQSxNQUN0QjtBQUNBLGFBQU8sS0FBSyxNQUFNLE9BQU8sTUFBTSxLQUFLLE9BQU8sSUFBSTtBQUFBLElBQ2pEO0FBQ0EsV0FBTyxlQUFlLElBQUksV0FBVyxRQUFRO0FBQUEsTUFDM0MsTUFBTTtBQUNKLGVBQU8sS0FBSyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxNQUNBLElBQUksR0FBRztBQUNMLFlBQUksWUFBWSxhQUFhLENBQUM7QUFDOUIsYUFBSyxNQUFNLE9BQU87QUFBQSxNQUNwQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFFRCxRQUFJLFVBQVUsV0FBVyxXQUFZO0FBQ25DLFVBQUksQ0FBQyxRQUFRLENBQUNBLFFBQU8sUUFBUSxHQUFHLElBQUksR0FBRztBQUNyQyxjQUFNLElBQUksVUFBVSxvQkFBb0I7QUFBQSxNQUMxQztBQUNBLGFBQU8sS0FBSztBQUFBLElBQ2Q7QUFFQSxXQUFPLGVBQWUsSUFBSSxXQUFXLFVBQVU7QUFBQSxNQUM3QyxNQUFNO0FBQ0osZUFBTyxLQUFLLE1BQU07QUFBQSxNQUNwQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFFRCxXQUFPLGVBQWUsSUFBSSxXQUFXLFlBQVk7QUFBQSxNQUMvQyxNQUFNO0FBQ0osZUFBTyxLQUFLLE1BQU07QUFBQSxNQUNwQjtBQUFBLE1BQ0EsSUFBSSxHQUFHO0FBQ0wsWUFBSSxZQUFZLGFBQWEsQ0FBQztBQUM5QixhQUFLLE1BQU0sV0FBVztBQUFBLE1BQ3hCO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUVELFdBQU8sZUFBZSxJQUFJLFdBQVcsWUFBWTtBQUFBLE1BQy9DLE1BQU07QUFDSixlQUFPLEtBQUssTUFBTTtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxJQUFJLEdBQUc7QUFDTCxZQUFJLFlBQVksYUFBYSxDQUFDO0FBQzlCLGFBQUssTUFBTSxXQUFXO0FBQUEsTUFDeEI7QUFBQSxNQUNBLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBRUQsV0FBTyxlQUFlLElBQUksV0FBVyxZQUFZO0FBQUEsTUFDL0MsTUFBTTtBQUNKLGVBQU8sS0FBSyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxNQUNBLElBQUksR0FBRztBQUNMLFlBQUksWUFBWSxhQUFhLENBQUM7QUFDOUIsYUFBSyxNQUFNLFdBQVc7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFFRCxXQUFPLGVBQWUsSUFBSSxXQUFXLFFBQVE7QUFBQSxNQUMzQyxNQUFNO0FBQ0osZUFBTyxLQUFLLE1BQU07QUFBQSxNQUNwQjtBQUFBLE1BQ0EsSUFBSSxHQUFHO0FBQ0wsWUFBSSxZQUFZLGFBQWEsQ0FBQztBQUM5QixhQUFLLE1BQU0sT0FBTztBQUFBLE1BQ3BCO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUVELFdBQU8sZUFBZSxJQUFJLFdBQVcsWUFBWTtBQUFBLE1BQy9DLE1BQU07QUFDSixlQUFPLEtBQUssTUFBTTtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxJQUFJLEdBQUc7QUFDTCxZQUFJLFlBQVksYUFBYSxDQUFDO0FBQzlCLGFBQUssTUFBTSxXQUFXO0FBQUEsTUFDeEI7QUFBQSxNQUNBLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBRUQsV0FBTyxlQUFlLElBQUksV0FBVyxRQUFRO0FBQUEsTUFDM0MsTUFBTTtBQUNKLGVBQU8sS0FBSyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxNQUNBLElBQUksR0FBRztBQUNMLFlBQUksWUFBWSxhQUFhLENBQUM7QUFDOUIsYUFBSyxNQUFNLE9BQU87QUFBQSxNQUNwQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFFRCxXQUFPLGVBQWUsSUFBSSxXQUFXLFlBQVk7QUFBQSxNQUMvQyxNQUFNO0FBQ0osZUFBTyxLQUFLLE1BQU07QUFBQSxNQUNwQjtBQUFBLE1BQ0EsSUFBSSxHQUFHO0FBQ0wsWUFBSSxZQUFZLGFBQWEsQ0FBQztBQUM5QixhQUFLLE1BQU0sV0FBVztBQUFBLE1BQ3hCO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUVELFdBQU8sZUFBZSxJQUFJLFdBQVcsVUFBVTtBQUFBLE1BQzdDLE1BQU07QUFDSixlQUFPLEtBQUssTUFBTTtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxJQUFJLEdBQUc7QUFDTCxZQUFJLFlBQVksYUFBYSxDQUFDO0FBQzlCLGFBQUssTUFBTSxTQUFTO0FBQUEsTUFDdEI7QUFBQSxNQUNBLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBRUQsV0FBTyxlQUFlLElBQUksV0FBVyxRQUFRO0FBQUEsTUFDM0MsTUFBTTtBQUNKLGVBQU8sS0FBSyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxNQUNBLElBQUksR0FBRztBQUNMLFlBQUksWUFBWSxhQUFhLENBQUM7QUFDOUIsYUFBSyxNQUFNLE9BQU87QUFBQSxNQUNwQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFHRCxJQUFBQSxRQUFPLFVBQVU7QUFBQSxNQUNmLEdBQUcsS0FBSztBQUNOLGVBQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxpQkFBaUIsS0FBSztBQUFBLE1BQzVDO0FBQUEsTUFDQSxPQUFPLGlCQUFpQixhQUFhO0FBQ25DLFlBQUksTUFBTSxPQUFPLE9BQU8sSUFBSSxTQUFTO0FBQ3JDLGFBQUssTUFBTSxLQUFLLGlCQUFpQixXQUFXO0FBQzVDLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNLEtBQUssaUJBQWlCLGFBQWE7QUFDdkMsWUFBSSxDQUFDO0FBQWEsd0JBQWMsQ0FBQztBQUNqQyxvQkFBWSxVQUFVO0FBRXRCLFlBQUksUUFBUSxJQUFJLEtBQUssZUFBZSxpQkFBaUIsV0FBVztBQUNoRSxZQUFJLE1BQU0sTUFBTSxpQkFBaUI7QUFBQSxNQUNuQztBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLFFBQ04sUUFBUSxFQUFFLElBQVM7QUFBQSxRQUNuQixRQUFRLEVBQUUsSUFBUztBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ2xNQTtBQUFBO0FBQUE7QUFFQSxZQUFRLE1BQU0sY0FBaUI7QUFDL0IsWUFBUSxlQUFlLDRCQUErQjtBQUN0RCxZQUFRLHFCQUFxQiw0QkFBK0I7QUFDNUQsWUFBUSxnQkFBZ0IsNEJBQStCO0FBQ3ZELFlBQVEsaUJBQWlCLDRCQUErQjtBQUN4RCxZQUFRLGlCQUFpQiw0QkFBK0I7QUFDeEQsWUFBUSxnQkFBZ0IsNEJBQStCO0FBQ3ZELFlBQVEsbUJBQW1CLDRCQUErQjtBQUMxRCxZQUFRLFdBQVcsNEJBQStCO0FBQUE7QUFBQTs7O0FDVmxELElBQUFDLGVBQUE7QUFBQSxzRkFBQUMsU0FBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBRTVELGFBQVMsZ0JBQWlCLElBQUk7QUFBRSxhQUFRLE1BQU8sT0FBTyxPQUFPLFlBQWEsYUFBYSxLQUFNLEdBQUcsYUFBYTtBQUFBLElBQUk7QUFFakgsUUFBSSxTQUFTLGdCQUFnQixRQUFRLFNBQVM7QUFDOUMsUUFBSSxPQUFPLGdCQUFnQixRQUFRLE9BQU87QUFDMUMsUUFBSSxNQUFNLGdCQUFnQixRQUFRLE1BQU07QUFDeEMsUUFBSSxZQUFZLGdCQUFnQixvQkFBcUI7QUFDckQsUUFBSSxRQUFRLGdCQUFnQixRQUFRLFFBQVE7QUFDNUMsUUFBSSxPQUFPLGdCQUFnQixRQUFRLE9BQU87QUFLMUMsUUFBTSxXQUFXLE9BQU87QUFFeEIsUUFBTSxTQUFTLE9BQU8sUUFBUTtBQUM5QixRQUFNLE9BQU8sT0FBTyxNQUFNO0FBRTFCLFFBQU0sT0FBTixNQUFXO0FBQUEsTUFDVixjQUFjO0FBQ2IsYUFBSyxRQUFRO0FBRWIsY0FBTSxZQUFZLFVBQVU7QUFDNUIsY0FBTSxVQUFVLFVBQVU7QUFFMUIsY0FBTSxVQUFVLENBQUM7QUFDakIsWUFBSSxPQUFPO0FBRVgsWUFBSSxXQUFXO0FBQ2QsZ0JBQU0sSUFBSTtBQUNWLGdCQUFNLFNBQVMsT0FBTyxFQUFFLE1BQU07QUFDOUIsbUJBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLO0FBQ2hDLGtCQUFNLFVBQVUsRUFBRTtBQUNsQixnQkFBSTtBQUNKLGdCQUFJLG1CQUFtQixRQUFRO0FBQzlCLHVCQUFTO0FBQUEsWUFDVixXQUFXLFlBQVksT0FBTyxPQUFPLEdBQUc7QUFDdkMsdUJBQVMsT0FBTyxLQUFLLFFBQVEsUUFBUSxRQUFRLFlBQVksUUFBUSxVQUFVO0FBQUEsWUFDNUUsV0FBVyxtQkFBbUIsYUFBYTtBQUMxQyx1QkFBUyxPQUFPLEtBQUssT0FBTztBQUFBLFlBQzdCLFdBQVcsbUJBQW1CLE1BQU07QUFDbkMsdUJBQVMsUUFBUTtBQUFBLFlBQ2xCLE9BQU87QUFDTix1QkFBUyxPQUFPLEtBQUssT0FBTyxZQUFZLFdBQVcsVUFBVSxPQUFPLE9BQU8sQ0FBQztBQUFBLFlBQzdFO0FBQ0Esb0JBQVEsT0FBTztBQUNmLG9CQUFRLEtBQUssTUFBTTtBQUFBLFVBQ3BCO0FBQUEsUUFDRDtBQUVBLGFBQUssVUFBVSxPQUFPLE9BQU8sT0FBTztBQUVwQyxZQUFJLE9BQU8sV0FBVyxRQUFRLFNBQVMsVUFBYSxPQUFPLFFBQVEsSUFBSSxFQUFFLFlBQVk7QUFDckYsWUFBSSxRQUFRLENBQUMsbUJBQW1CLEtBQUssSUFBSSxHQUFHO0FBQzNDLGVBQUssUUFBUTtBQUFBLFFBQ2Q7QUFBQSxNQUNEO0FBQUEsTUFDQSxJQUFJLE9BQU87QUFDVixlQUFPLEtBQUssUUFBUTtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxJQUFJLE9BQU87QUFDVixlQUFPLEtBQUs7QUFBQSxNQUNiO0FBQUEsTUFDQSxPQUFPO0FBQ04sZUFBTyxRQUFRLFFBQVEsS0FBSyxRQUFRLFNBQVMsQ0FBQztBQUFBLE1BQy9DO0FBQUEsTUFDQSxjQUFjO0FBQ2IsY0FBTSxNQUFNLEtBQUs7QUFDakIsY0FBTSxLQUFLLElBQUksT0FBTyxNQUFNLElBQUksWUFBWSxJQUFJLGFBQWEsSUFBSSxVQUFVO0FBQzNFLGVBQU8sUUFBUSxRQUFRLEVBQUU7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsU0FBUztBQUNSLGNBQU0sV0FBVyxJQUFJLFNBQVM7QUFDOUIsaUJBQVMsUUFBUSxXQUFZO0FBQUEsUUFBQztBQUM5QixpQkFBUyxLQUFLLEtBQUssT0FBTztBQUMxQixpQkFBUyxLQUFLLElBQUk7QUFDbEIsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUNBLFdBQVc7QUFDVixlQUFPO0FBQUEsTUFDUjtBQUFBLE1BQ0EsUUFBUTtBQUNQLGNBQU0sT0FBTyxLQUFLO0FBRWxCLGNBQU0sUUFBUSxVQUFVO0FBQ3hCLGNBQU0sTUFBTSxVQUFVO0FBQ3RCLFlBQUksZUFBZTtBQUNuQixZQUFJLFVBQVUsUUFBVztBQUN4QiwwQkFBZ0I7QUFBQSxRQUNqQixXQUFXLFFBQVEsR0FBRztBQUNyQiwwQkFBZ0IsS0FBSyxJQUFJLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDekMsT0FBTztBQUNOLDBCQUFnQixLQUFLLElBQUksT0FBTyxJQUFJO0FBQUEsUUFDckM7QUFDQSxZQUFJLFFBQVEsUUFBVztBQUN0Qix3QkFBYztBQUFBLFFBQ2YsV0FBVyxNQUFNLEdBQUc7QUFDbkIsd0JBQWMsS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFDckMsT0FBTztBQUNOLHdCQUFjLEtBQUssSUFBSSxLQUFLLElBQUk7QUFBQSxRQUNqQztBQUNBLGNBQU0sT0FBTyxLQUFLLElBQUksY0FBYyxlQUFlLENBQUM7QUFFcEQsY0FBTSxTQUFTLEtBQUs7QUFDcEIsY0FBTSxlQUFlLE9BQU8sTUFBTSxlQUFlLGdCQUFnQixJQUFJO0FBQ3JFLGNBQU0sT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxVQUFVLEdBQUcsQ0FBQztBQUNoRCxhQUFLLFVBQVU7QUFDZixlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFFQSxXQUFPLGlCQUFpQixLQUFLLFdBQVc7QUFBQSxNQUN2QyxNQUFNLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDekIsTUFBTSxFQUFFLFlBQVksS0FBSztBQUFBLE1BQ3pCLE9BQU8sRUFBRSxZQUFZLEtBQUs7QUFBQSxJQUMzQixDQUFDO0FBRUQsV0FBTyxlQUFlLEtBQUssV0FBVyxPQUFPLGFBQWE7QUFBQSxNQUN6RCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDZixDQUFDO0FBZ0JELGFBQVMsV0FBVyxTQUFTLE1BQU0sYUFBYTtBQUM5QyxZQUFNLEtBQUssTUFBTSxPQUFPO0FBRXhCLFdBQUssVUFBVTtBQUNmLFdBQUssT0FBTztBQUdaLFVBQUksYUFBYTtBQUNmLGFBQUssT0FBTyxLQUFLLFFBQVEsWUFBWTtBQUFBLE1BQ3ZDO0FBR0EsWUFBTSxrQkFBa0IsTUFBTSxLQUFLLFdBQVc7QUFBQSxJQUNoRDtBQUVBLGVBQVcsWUFBWSxPQUFPLE9BQU8sTUFBTSxTQUFTO0FBQ3BELGVBQVcsVUFBVSxjQUFjO0FBQ25DLGVBQVcsVUFBVSxPQUFPO0FBRTVCLFFBQUk7QUFDSixRQUFJO0FBQ0gsZ0JBQVUsUUFBUSxZQUFZO0FBQUEsSUFDL0IsU0FBUyxHQUFQO0FBQUEsSUFBVztBQUViLFFBQU0sWUFBWSxPQUFPLGdCQUFnQjtBQUd6QyxRQUFNLGNBQWMsT0FBTztBQVczQixhQUFTLEtBQUssTUFBTTtBQUNuQixVQUFJLFFBQVE7QUFFWixVQUFJLE9BQU8sVUFBVSxTQUFTLEtBQUssVUFBVSxPQUFPLFNBQVksVUFBVSxLQUFLLENBQUMsR0FDNUUsWUFBWSxLQUFLO0FBRXJCLFVBQUksT0FBTyxjQUFjLFNBQVksSUFBSTtBQUN6QyxVQUFJLGVBQWUsS0FBSztBQUN4QixVQUFJLFVBQVUsaUJBQWlCLFNBQVksSUFBSTtBQUUvQyxVQUFJLFFBQVEsTUFBTTtBQUVqQixlQUFPO0FBQUEsTUFDUixXQUFXLGtCQUFrQixJQUFJLEdBQUc7QUFFbkMsZUFBTyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFBQSxNQUNuQyxXQUFXLE9BQU8sSUFBSTtBQUFHO0FBQUEsZUFBVyxPQUFPLFNBQVMsSUFBSTtBQUFHO0FBQUEsZUFBVyxPQUFPLFVBQVUsU0FBUyxLQUFLLElBQUksTUFBTSx3QkFBd0I7QUFFdEksZUFBTyxPQUFPLEtBQUssSUFBSTtBQUFBLE1BQ3hCLFdBQVcsWUFBWSxPQUFPLElBQUksR0FBRztBQUVwQyxlQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVTtBQUFBLE1BQ2pFLFdBQVcsZ0JBQWdCO0FBQVE7QUFBQSxXQUFPO0FBR3pDLGVBQU8sT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDO0FBQUEsTUFDaEM7QUFDQSxXQUFLLGFBQWE7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLE1BQ1I7QUFDQSxXQUFLLE9BQU87QUFDWixXQUFLLFVBQVU7QUFFZixVQUFJLGdCQUFnQixRQUFRO0FBQzNCLGFBQUssR0FBRyxTQUFTLFNBQVUsS0FBSztBQUMvQixnQkFBTSxRQUFRLElBQUksU0FBUyxlQUFlLE1BQU0sSUFBSSxXQUFXLCtDQUErQyxNQUFNLFFBQVEsSUFBSSxXQUFXLFVBQVUsR0FBRztBQUN4SixnQkFBTSxXQUFXLFFBQVE7QUFBQSxRQUMxQixDQUFDO0FBQUEsTUFDRjtBQUFBLElBQ0Q7QUFFQSxTQUFLLFlBQVk7QUFBQSxNQUNoQixJQUFJLE9BQU87QUFDVixlQUFPLEtBQUssV0FBVztBQUFBLE1BQ3hCO0FBQUEsTUFFQSxJQUFJLFdBQVc7QUFDZCxlQUFPLEtBQUssV0FBVztBQUFBLE1BQ3hCO0FBQUEsTUFPQSxjQUFjO0FBQ2IsZUFBTyxZQUFZLEtBQUssSUFBSSxFQUFFLEtBQUssU0FBVSxLQUFLO0FBQ2pELGlCQUFPLElBQUksT0FBTyxNQUFNLElBQUksWUFBWSxJQUFJLGFBQWEsSUFBSSxVQUFVO0FBQUEsUUFDeEUsQ0FBQztBQUFBLE1BQ0Y7QUFBQSxNQU9BLE9BQU87QUFDTixZQUFJLEtBQUssS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLGNBQWMsS0FBSztBQUM3RCxlQUFPLFlBQVksS0FBSyxJQUFJLEVBQUUsS0FBSyxTQUFVLEtBQUs7QUFDakQsaUJBQU8sT0FBTztBQUFBLFlBRWQsSUFBSSxLQUFLLENBQUMsR0FBRztBQUFBLGNBQ1osTUFBTSxHQUFHLFlBQVk7QUFBQSxZQUN0QixDQUFDO0FBQUEsWUFBRztBQUFBLGNBQ0gsQ0FBQyxTQUFTO0FBQUEsWUFDWDtBQUFBLFVBQUM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNGO0FBQUEsTUFPQSxPQUFPO0FBQ04sWUFBSSxTQUFTO0FBRWIsZUFBTyxZQUFZLEtBQUssSUFBSSxFQUFFLEtBQUssU0FBVSxRQUFRO0FBQ3BELGNBQUk7QUFDSCxtQkFBTyxLQUFLLE1BQU0sT0FBTyxTQUFTLENBQUM7QUFBQSxVQUNwQyxTQUFTLEtBQVA7QUFDRCxtQkFBTyxLQUFLLFFBQVEsT0FBTyxJQUFJLFdBQVcsaUNBQWlDLE9BQU8sZUFBZSxJQUFJLFdBQVcsY0FBYyxDQUFDO0FBQUEsVUFDaEk7QUFBQSxRQUNELENBQUM7QUFBQSxNQUNGO0FBQUEsTUFPQSxPQUFPO0FBQ04sZUFBTyxZQUFZLEtBQUssSUFBSSxFQUFFLEtBQUssU0FBVSxRQUFRO0FBQ3BELGlCQUFPLE9BQU8sU0FBUztBQUFBLFFBQ3hCLENBQUM7QUFBQSxNQUNGO0FBQUEsTUFPQSxTQUFTO0FBQ1IsZUFBTyxZQUFZLEtBQUssSUFBSTtBQUFBLE1BQzdCO0FBQUEsTUFRQSxnQkFBZ0I7QUFDZixZQUFJLFNBQVM7QUFFYixlQUFPLFlBQVksS0FBSyxJQUFJLEVBQUUsS0FBSyxTQUFVLFFBQVE7QUFDcEQsaUJBQU8sWUFBWSxRQUFRLE9BQU8sT0FBTztBQUFBLFFBQzFDLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRDtBQUdBLFdBQU8saUJBQWlCLEtBQUssV0FBVztBQUFBLE1BQ3ZDLE1BQU0sRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUN6QixVQUFVLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDN0IsYUFBYSxFQUFFLFlBQVksS0FBSztBQUFBLE1BQ2hDLE1BQU0sRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUN6QixNQUFNLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDekIsTUFBTSxFQUFFLFlBQVksS0FBSztBQUFBLElBQzFCLENBQUM7QUFFRCxTQUFLLFFBQVEsU0FBVSxPQUFPO0FBQzdCLGlCQUFXLFFBQVEsT0FBTyxvQkFBb0IsS0FBSyxTQUFTLEdBQUc7QUFFOUQsWUFBSSxFQUFFLFFBQVEsUUFBUTtBQUNyQixnQkFBTSxPQUFPLE9BQU8seUJBQXlCLEtBQUssV0FBVyxJQUFJO0FBQ2pFLGlCQUFPLGVBQWUsT0FBTyxNQUFNLElBQUk7QUFBQSxRQUN4QztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBU0EsYUFBUyxjQUFjO0FBQ3RCLFVBQUksU0FBUztBQUViLFVBQUksS0FBSyxXQUFXLFdBQVc7QUFDOUIsZUFBTyxLQUFLLFFBQVEsT0FBTyxJQUFJLFVBQVUsMEJBQTBCLEtBQUssS0FBSyxDQUFDO0FBQUEsTUFDL0U7QUFFQSxXQUFLLFdBQVcsWUFBWTtBQUU1QixVQUFJLEtBQUssV0FBVyxPQUFPO0FBQzFCLGVBQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxXQUFXLEtBQUs7QUFBQSxNQUNqRDtBQUVBLFVBQUksT0FBTyxLQUFLO0FBR2hCLFVBQUksU0FBUyxNQUFNO0FBQ2xCLGVBQU8sS0FBSyxRQUFRLFFBQVEsT0FBTyxNQUFNLENBQUMsQ0FBQztBQUFBLE1BQzVDO0FBR0EsVUFBSSxPQUFPLElBQUksR0FBRztBQUNqQixlQUFPLEtBQUssT0FBTztBQUFBLE1BQ3BCO0FBR0EsVUFBSSxPQUFPLFNBQVMsSUFBSSxHQUFHO0FBQzFCLGVBQU8sS0FBSyxRQUFRLFFBQVEsSUFBSTtBQUFBLE1BQ2pDO0FBR0EsVUFBSSxFQUFFLGdCQUFnQixTQUFTO0FBQzlCLGVBQU8sS0FBSyxRQUFRLFFBQVEsT0FBTyxNQUFNLENBQUMsQ0FBQztBQUFBLE1BQzVDO0FBSUEsVUFBSSxRQUFRLENBQUM7QUFDYixVQUFJLGFBQWE7QUFDakIsVUFBSSxRQUFRO0FBRVosYUFBTyxJQUFJLEtBQUssUUFBUSxTQUFVLFNBQVMsUUFBUTtBQUNsRCxZQUFJO0FBR0osWUFBSSxPQUFPLFNBQVM7QUFDbkIsdUJBQWEsV0FBVyxXQUFZO0FBQ25DLG9CQUFRO0FBQ1IsbUJBQU8sSUFBSSxXQUFXLDBDQUEwQyxPQUFPLGFBQWEsT0FBTyxjQUFjLGNBQWMsQ0FBQztBQUFBLFVBQ3pILEdBQUcsT0FBTyxPQUFPO0FBQUEsUUFDbEI7QUFHQSxhQUFLLEdBQUcsU0FBUyxTQUFVLEtBQUs7QUFDL0IsY0FBSSxJQUFJLFNBQVMsY0FBYztBQUU5QixvQkFBUTtBQUNSLG1CQUFPLEdBQUc7QUFBQSxVQUNYLE9BQU87QUFFTixtQkFBTyxJQUFJLFdBQVcsK0NBQStDLE9BQU8sUUFBUSxJQUFJLFdBQVcsVUFBVSxHQUFHLENBQUM7QUFBQSxVQUNsSDtBQUFBLFFBQ0QsQ0FBQztBQUVELGFBQUssR0FBRyxRQUFRLFNBQVUsT0FBTztBQUNoQyxjQUFJLFNBQVMsVUFBVSxNQUFNO0FBQzVCO0FBQUEsVUFDRDtBQUVBLGNBQUksT0FBTyxRQUFRLGFBQWEsTUFBTSxTQUFTLE9BQU8sTUFBTTtBQUMzRCxvQkFBUTtBQUNSLG1CQUFPLElBQUksV0FBVyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxRQUFRLFVBQVUsQ0FBQztBQUM3RjtBQUFBLFVBQ0Q7QUFFQSx3QkFBYyxNQUFNO0FBQ3BCLGdCQUFNLEtBQUssS0FBSztBQUFBLFFBQ2pCLENBQUM7QUFFRCxhQUFLLEdBQUcsT0FBTyxXQUFZO0FBQzFCLGNBQUksT0FBTztBQUNWO0FBQUEsVUFDRDtBQUVBLHVCQUFhLFVBQVU7QUFFdkIsY0FBSTtBQUNILG9CQUFRLE9BQU8sT0FBTyxPQUFPLFVBQVUsQ0FBQztBQUFBLFVBQ3pDLFNBQVMsS0FBUDtBQUVELG1CQUFPLElBQUksV0FBVyxrREFBa0QsT0FBTyxRQUFRLElBQUksV0FBVyxVQUFVLEdBQUcsQ0FBQztBQUFBLFVBQ3JIO0FBQUEsUUFDRCxDQUFDO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDRjtBQVVBLGFBQVMsWUFBWSxRQUFRLFNBQVM7QUFDckMsVUFBSSxPQUFPLFlBQVksWUFBWTtBQUNsQyxjQUFNLElBQUksTUFBTSw4RUFBOEU7QUFBQSxNQUMvRjtBQUVBLFlBQU0sS0FBSyxRQUFRLElBQUksY0FBYztBQUNyQyxVQUFJLFVBQVU7QUFDZCxVQUFJLEtBQUs7QUFHVCxVQUFJLElBQUk7QUFDUCxjQUFNLG1CQUFtQixLQUFLLEVBQUU7QUFBQSxNQUNqQztBQUdBLFlBQU0sT0FBTyxNQUFNLEdBQUcsSUFBSSxFQUFFLFNBQVM7QUFHckMsVUFBSSxDQUFDLE9BQU8sS0FBSztBQUNoQixjQUFNLGlDQUFpQyxLQUFLLEdBQUc7QUFBQSxNQUNoRDtBQUdBLFVBQUksQ0FBQyxPQUFPLEtBQUs7QUFDaEIsY0FBTSx5RUFBeUUsS0FBSyxHQUFHO0FBQ3ZGLFlBQUksQ0FBQyxLQUFLO0FBQ1QsZ0JBQU0seUVBQXlFLEtBQUssR0FBRztBQUN2RixjQUFJLEtBQUs7QUFDUixnQkFBSSxJQUFJO0FBQUEsVUFDVDtBQUFBLFFBQ0Q7QUFFQSxZQUFJLEtBQUs7QUFDUixnQkFBTSxnQkFBZ0IsS0FBSyxJQUFJLElBQUksQ0FBQztBQUFBLFFBQ3JDO0FBQUEsTUFDRDtBQUdBLFVBQUksQ0FBQyxPQUFPLEtBQUs7QUFDaEIsY0FBTSxtQ0FBbUMsS0FBSyxHQUFHO0FBQUEsTUFDbEQ7QUFHQSxVQUFJLEtBQUs7QUFDUixrQkFBVSxJQUFJLElBQUk7QUFJbEIsWUFBSSxZQUFZLFlBQVksWUFBWSxPQUFPO0FBQzlDLG9CQUFVO0FBQUEsUUFDWDtBQUFBLE1BQ0Q7QUFHQSxhQUFPLFFBQVEsUUFBUSxTQUFTLE9BQU8sRUFBRSxTQUFTO0FBQUEsSUFDbkQ7QUFTQSxhQUFTLGtCQUFrQixLQUFLO0FBRS9CLFVBQUksT0FBTyxRQUFRLFlBQVksT0FBTyxJQUFJLFdBQVcsY0FBYyxPQUFPLElBQUksV0FBVyxjQUFjLE9BQU8sSUFBSSxRQUFRLGNBQWMsT0FBTyxJQUFJLFdBQVcsY0FBYyxPQUFPLElBQUksUUFBUSxjQUFjLE9BQU8sSUFBSSxRQUFRLFlBQVk7QUFDM08sZUFBTztBQUFBLE1BQ1I7QUFHQSxhQUFPLElBQUksWUFBWSxTQUFTLHFCQUFxQixPQUFPLFVBQVUsU0FBUyxLQUFLLEdBQUcsTUFBTSw4QkFBOEIsT0FBTyxJQUFJLFNBQVM7QUFBQSxJQUNoSjtBQU9BLGFBQVMsT0FBTyxLQUFLO0FBQ3BCLGFBQU8sT0FBTyxRQUFRLFlBQVksT0FBTyxJQUFJLGdCQUFnQixjQUFjLE9BQU8sSUFBSSxTQUFTLFlBQVksT0FBTyxJQUFJLFdBQVcsY0FBYyxPQUFPLElBQUksZ0JBQWdCLGNBQWMsT0FBTyxJQUFJLFlBQVksU0FBUyxZQUFZLGdCQUFnQixLQUFLLElBQUksWUFBWSxJQUFJLEtBQUssZ0JBQWdCLEtBQUssSUFBSSxPQUFPLFlBQVk7QUFBQSxJQUMvVDtBQVFBLGFBQVMsTUFBTSxVQUFVO0FBQ3hCLFVBQUksSUFBSTtBQUNSLFVBQUksT0FBTyxTQUFTO0FBR3BCLFVBQUksU0FBUyxVQUFVO0FBQ3RCLGNBQU0sSUFBSSxNQUFNLG9DQUFvQztBQUFBLE1BQ3JEO0FBSUEsVUFBSSxnQkFBZ0IsVUFBVSxPQUFPLEtBQUssZ0JBQWdCLFlBQVk7QUFFckUsYUFBSyxJQUFJLFlBQVk7QUFDckIsYUFBSyxJQUFJLFlBQVk7QUFDckIsYUFBSyxLQUFLLEVBQUU7QUFDWixhQUFLLEtBQUssRUFBRTtBQUVaLGlCQUFTLFdBQVcsT0FBTztBQUMzQixlQUFPO0FBQUEsTUFDUjtBQUVBLGFBQU87QUFBQSxJQUNSO0FBV0EsYUFBUyxtQkFBbUIsTUFBTTtBQUNqQyxVQUFJLFNBQVMsTUFBTTtBQUVsQixlQUFPO0FBQUEsTUFDUixXQUFXLE9BQU8sU0FBUyxVQUFVO0FBRXBDLGVBQU87QUFBQSxNQUNSLFdBQVcsa0JBQWtCLElBQUksR0FBRztBQUVuQyxlQUFPO0FBQUEsTUFDUixXQUFXLE9BQU8sSUFBSSxHQUFHO0FBRXhCLGVBQU8sS0FBSyxRQUFRO0FBQUEsTUFDckIsV0FBVyxPQUFPLFNBQVMsSUFBSSxHQUFHO0FBRWpDLGVBQU87QUFBQSxNQUNSLFdBQVcsT0FBTyxVQUFVLFNBQVMsS0FBSyxJQUFJLE1BQU0sd0JBQXdCO0FBRTNFLGVBQU87QUFBQSxNQUNSLFdBQVcsWUFBWSxPQUFPLElBQUksR0FBRztBQUVwQyxlQUFPO0FBQUEsTUFDUixXQUFXLE9BQU8sS0FBSyxnQkFBZ0IsWUFBWTtBQUVsRCxlQUFPLGdDQUFnQyxLQUFLLFlBQVk7QUFBQSxNQUN6RCxXQUFXLGdCQUFnQixRQUFRO0FBR2xDLGVBQU87QUFBQSxNQUNSLE9BQU87QUFFTixlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFXQSxhQUFTLGNBQWMsVUFBVTtBQUNoQyxZQUFNLE9BQU8sU0FBUztBQUd0QixVQUFJLFNBQVMsTUFBTTtBQUVsQixlQUFPO0FBQUEsTUFDUixXQUFXLE9BQU8sSUFBSSxHQUFHO0FBQ3hCLGVBQU8sS0FBSztBQUFBLE1BQ2IsV0FBVyxPQUFPLFNBQVMsSUFBSSxHQUFHO0FBRWpDLGVBQU8sS0FBSztBQUFBLE1BQ2IsV0FBVyxRQUFRLE9BQU8sS0FBSyxrQkFBa0IsWUFBWTtBQUU1RCxZQUFJLEtBQUsscUJBQXFCLEtBQUssa0JBQWtCLFVBQVUsS0FDL0QsS0FBSyxrQkFBa0IsS0FBSyxlQUFlLEdBQUc7QUFFN0MsaUJBQU8sS0FBSyxjQUFjO0FBQUEsUUFDM0I7QUFDQSxlQUFPO0FBQUEsTUFDUixPQUFPO0FBRU4sZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBUUEsYUFBUyxjQUFjLE1BQU0sVUFBVTtBQUN0QyxZQUFNLE9BQU8sU0FBUztBQUd0QixVQUFJLFNBQVMsTUFBTTtBQUVsQixhQUFLLElBQUk7QUFBQSxNQUNWLFdBQVcsT0FBTyxJQUFJLEdBQUc7QUFDeEIsYUFBSyxPQUFPLEVBQUUsS0FBSyxJQUFJO0FBQUEsTUFDeEIsV0FBVyxPQUFPLFNBQVMsSUFBSSxHQUFHO0FBRWpDLGFBQUssTUFBTSxJQUFJO0FBQ2YsYUFBSyxJQUFJO0FBQUEsTUFDVixPQUFPO0FBRU4sYUFBSyxLQUFLLElBQUk7QUFBQSxNQUNmO0FBQUEsSUFDRDtBQUdBLFNBQUssVUFBVSxPQUFPO0FBUXRCLFFBQU0sb0JBQW9CO0FBQzFCLFFBQU0seUJBQXlCO0FBRS9CLGFBQVMsYUFBYSxNQUFNO0FBQzNCLGFBQU8sR0FBRztBQUNWLFVBQUksa0JBQWtCLEtBQUssSUFBSSxLQUFLLFNBQVMsSUFBSTtBQUNoRCxjQUFNLElBQUksVUFBVSxHQUFHLHNDQUFzQztBQUFBLE1BQzlEO0FBQUEsSUFDRDtBQUVBLGFBQVMsY0FBYyxPQUFPO0FBQzdCLGNBQVEsR0FBRztBQUNYLFVBQUksdUJBQXVCLEtBQUssS0FBSyxHQUFHO0FBQ3ZDLGNBQU0sSUFBSSxVQUFVLEdBQUcsd0NBQXdDO0FBQUEsTUFDaEU7QUFBQSxJQUNEO0FBVUEsYUFBU0MsTUFBSyxLQUFLLE1BQU07QUFDeEIsYUFBTyxLQUFLLFlBQVk7QUFDeEIsaUJBQVcsT0FBTyxLQUFLO0FBQ3RCLFlBQUksSUFBSSxZQUFZLE1BQU0sTUFBTTtBQUMvQixpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFFQSxRQUFNLE1BQU0sT0FBTyxLQUFLO0FBQ3hCLFFBQU0sVUFBTixNQUFjO0FBQUEsTUFPYixjQUFjO0FBQ2IsWUFBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLFVBQVUsT0FBTyxTQUFZLFVBQVUsS0FBSztBQUUvRSxhQUFLLE9BQU8sdUJBQU8sT0FBTyxJQUFJO0FBRTlCLFlBQUksZ0JBQWdCLFNBQVM7QUFDNUIsZ0JBQU0sYUFBYSxLQUFLLElBQUk7QUFDNUIsZ0JBQU0sY0FBYyxPQUFPLEtBQUssVUFBVTtBQUUxQyxxQkFBVyxjQUFjLGFBQWE7QUFDckMsdUJBQVcsU0FBUyxXQUFXLGFBQWE7QUFDM0MsbUJBQUssT0FBTyxZQUFZLEtBQUs7QUFBQSxZQUM5QjtBQUFBLFVBQ0Q7QUFFQTtBQUFBLFFBQ0Q7QUFJQSxZQUFJLFFBQVE7QUFBTTtBQUFBLGlCQUFXLE9BQU8sU0FBUyxVQUFVO0FBQ3RELGdCQUFNLFNBQVMsS0FBSyxPQUFPO0FBQzNCLGNBQUksVUFBVSxNQUFNO0FBQ25CLGdCQUFJLE9BQU8sV0FBVyxZQUFZO0FBQ2pDLG9CQUFNLElBQUksVUFBVSwrQkFBK0I7QUFBQSxZQUNwRDtBQUlBLGtCQUFNLFFBQVEsQ0FBQztBQUNmLHVCQUFXLFFBQVEsTUFBTTtBQUN4QixrQkFBSSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssT0FBTyxjQUFjLFlBQVk7QUFDNUUsc0JBQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLGNBQ3hEO0FBQ0Esb0JBQU0sS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDO0FBQUEsWUFDNUI7QUFFQSx1QkFBVyxRQUFRLE9BQU87QUFDekIsa0JBQUksS0FBSyxXQUFXLEdBQUc7QUFDdEIsc0JBQU0sSUFBSSxVQUFVLDZDQUE2QztBQUFBLGNBQ2xFO0FBQ0EsbUJBQUssT0FBTyxLQUFLLElBQUksS0FBSyxFQUFFO0FBQUEsWUFDN0I7QUFBQSxVQUNELE9BQU87QUFFTix1QkFBVyxPQUFPLE9BQU8sS0FBSyxJQUFJLEdBQUc7QUFDcEMsb0JBQU0sUUFBUSxLQUFLO0FBQ25CLG1CQUFLLE9BQU8sS0FBSyxLQUFLO0FBQUEsWUFDdkI7QUFBQSxVQUNEO0FBQUEsUUFDRCxPQUFPO0FBQ04sZ0JBQU0sSUFBSSxVQUFVLHdDQUF3QztBQUFBLFFBQzdEO0FBQUEsTUFDRDtBQUFBLE1BUUEsSUFBSSxNQUFNO0FBQ1QsZUFBTyxHQUFHO0FBQ1YscUJBQWEsSUFBSTtBQUNqQixjQUFNLE1BQU1BLE1BQUssS0FBSyxNQUFNLElBQUk7QUFDaEMsWUFBSSxRQUFRLFFBQVc7QUFDdEIsaUJBQU87QUFBQSxRQUNSO0FBRUEsZUFBTyxLQUFLLEtBQUssS0FBSyxLQUFLLElBQUk7QUFBQSxNQUNoQztBQUFBLE1BU0EsUUFBUSxVQUFVO0FBQ2pCLFlBQUksVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLE9BQU8sU0FBWSxVQUFVLEtBQUs7QUFFbEYsWUFBSSxRQUFRLFdBQVcsSUFBSTtBQUMzQixZQUFJLElBQUk7QUFDUixlQUFPLElBQUksTUFBTSxRQUFRO0FBQ3hCLGNBQUksV0FBVyxNQUFNO0FBQ3JCLGdCQUFNLE9BQU8sU0FBUyxJQUNoQixRQUFRLFNBQVM7QUFFdkIsbUJBQVMsS0FBSyxTQUFTLE9BQU8sTUFBTSxJQUFJO0FBQ3hDLGtCQUFRLFdBQVcsSUFBSTtBQUN2QjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFTQSxJQUFJLE1BQU0sT0FBTztBQUNoQixlQUFPLEdBQUc7QUFDVixnQkFBUSxHQUFHO0FBQ1gscUJBQWEsSUFBSTtBQUNqQixzQkFBYyxLQUFLO0FBQ25CLGNBQU0sTUFBTUEsTUFBSyxLQUFLLE1BQU0sSUFBSTtBQUNoQyxhQUFLLEtBQUssUUFBUSxTQUFZLE1BQU0sUUFBUSxDQUFDLEtBQUs7QUFBQSxNQUNuRDtBQUFBLE1BU0EsT0FBTyxNQUFNLE9BQU87QUFDbkIsZUFBTyxHQUFHO0FBQ1YsZ0JBQVEsR0FBRztBQUNYLHFCQUFhLElBQUk7QUFDakIsc0JBQWMsS0FBSztBQUNuQixjQUFNLE1BQU1BLE1BQUssS0FBSyxNQUFNLElBQUk7QUFDaEMsWUFBSSxRQUFRLFFBQVc7QUFDdEIsZUFBSyxLQUFLLEtBQUssS0FBSyxLQUFLO0FBQUEsUUFDMUIsT0FBTztBQUNOLGVBQUssS0FBSyxRQUFRLENBQUMsS0FBSztBQUFBLFFBQ3pCO0FBQUEsTUFDRDtBQUFBLE1BUUEsSUFBSSxNQUFNO0FBQ1QsZUFBTyxHQUFHO0FBQ1YscUJBQWEsSUFBSTtBQUNqQixlQUFPQSxNQUFLLEtBQUssTUFBTSxJQUFJLE1BQU07QUFBQSxNQUNsQztBQUFBLE1BUUEsT0FBTyxNQUFNO0FBQ1osZUFBTyxHQUFHO0FBQ1YscUJBQWEsSUFBSTtBQUNqQixjQUFNLE1BQU1BLE1BQUssS0FBSyxNQUFNLElBQUk7QUFDaEMsWUFBSSxRQUFRLFFBQVc7QUFDdEIsaUJBQU8sS0FBSyxLQUFLO0FBQUEsUUFDbEI7QUFBQSxNQUNEO0FBQUEsTUFPQSxNQUFNO0FBQ0wsZUFBTyxLQUFLO0FBQUEsTUFDYjtBQUFBLE1BT0EsT0FBTztBQUNOLGVBQU8sc0JBQXNCLE1BQU0sS0FBSztBQUFBLE1BQ3pDO0FBQUEsTUFPQSxTQUFTO0FBQ1IsZUFBTyxzQkFBc0IsTUFBTSxPQUFPO0FBQUEsTUFDM0M7QUFBQSxNQVNBLENBQUMsT0FBTyxZQUFZO0FBQ25CLGVBQU8sc0JBQXNCLE1BQU0sV0FBVztBQUFBLE1BQy9DO0FBQUEsSUFDRDtBQUNBLFlBQVEsVUFBVSxVQUFVLFFBQVEsVUFBVSxPQUFPO0FBRXJELFdBQU8sZUFBZSxRQUFRLFdBQVcsT0FBTyxhQUFhO0FBQUEsTUFDNUQsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2YsQ0FBQztBQUVELFdBQU8saUJBQWlCLFFBQVEsV0FBVztBQUFBLE1BQzFDLEtBQUssRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUN4QixTQUFTLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDNUIsS0FBSyxFQUFFLFlBQVksS0FBSztBQUFBLE1BQ3hCLFFBQVEsRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUMzQixLQUFLLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDeEIsUUFBUSxFQUFFLFlBQVksS0FBSztBQUFBLE1BQzNCLE1BQU0sRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUN6QixRQUFRLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDM0IsU0FBUyxFQUFFLFlBQVksS0FBSztBQUFBLElBQzdCLENBQUM7QUFFRCxhQUFTLFdBQVcsU0FBUztBQUM1QixVQUFJLE9BQU8sVUFBVSxTQUFTLEtBQUssVUFBVSxPQUFPLFNBQVksVUFBVSxLQUFLO0FBRS9FLFlBQU0sT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLEVBQUUsS0FBSztBQUM1QyxhQUFPLEtBQUssSUFBSSxTQUFTLFFBQVEsU0FBVSxHQUFHO0FBQzdDLGVBQU8sRUFBRSxZQUFZO0FBQUEsTUFDdEIsSUFBSSxTQUFTLFVBQVUsU0FBVSxHQUFHO0FBQ25DLGVBQU8sUUFBUSxLQUFLLEdBQUcsS0FBSyxJQUFJO0FBQUEsTUFDakMsSUFBSSxTQUFVLEdBQUc7QUFDaEIsZUFBTyxDQUFDLEVBQUUsWUFBWSxHQUFHLFFBQVEsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDcEQsQ0FBQztBQUFBLElBQ0Y7QUFFQSxRQUFNLFdBQVcsT0FBTyxVQUFVO0FBRWxDLGFBQVMsc0JBQXNCLFFBQVEsTUFBTTtBQUM1QyxZQUFNLFdBQVcsT0FBTyxPQUFPLHdCQUF3QjtBQUN2RCxlQUFTLFlBQVk7QUFBQSxRQUNwQjtBQUFBLFFBQ0E7QUFBQSxRQUNBLE9BQU87QUFBQSxNQUNSO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFFQSxRQUFNLDJCQUEyQixPQUFPLGVBQWU7QUFBQSxNQUN0RCxPQUFPO0FBRU4sWUFBSSxDQUFDLFFBQVEsT0FBTyxlQUFlLElBQUksTUFBTSwwQkFBMEI7QUFDdEUsZ0JBQU0sSUFBSSxVQUFVLDBDQUEwQztBQUFBLFFBQy9EO0FBRUEsWUFBSSxZQUFZLEtBQUs7QUFDckIsY0FBTSxTQUFTLFVBQVUsUUFDbkIsT0FBTyxVQUFVLE1BQ2pCLFFBQVEsVUFBVTtBQUV4QixjQUFNLFNBQVMsV0FBVyxRQUFRLElBQUk7QUFDdEMsY0FBTSxNQUFNLE9BQU87QUFDbkIsWUFBSSxTQUFTLEtBQUs7QUFDakIsaUJBQU87QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUVBLGFBQUssVUFBVSxRQUFRLFFBQVE7QUFFL0IsZUFBTztBQUFBLFVBQ04sT0FBTyxPQUFPO0FBQUEsVUFDZCxNQUFNO0FBQUEsUUFDUDtBQUFBLE1BQ0Q7QUFBQSxJQUNELEdBQUcsT0FBTyxlQUFlLE9BQU8sZUFBZSxDQUFDLEVBQUUsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRXRFLFdBQU8sZUFBZSwwQkFBMEIsT0FBTyxhQUFhO0FBQUEsTUFDbkUsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2YsQ0FBQztBQVFELGFBQVMsNEJBQTRCLFNBQVM7QUFDN0MsWUFBTSxNQUFNLE9BQU8sT0FBTyxFQUFFLFdBQVcsS0FBSyxHQUFHLFFBQVEsSUFBSTtBQUkzRCxZQUFNLGdCQUFnQkEsTUFBSyxRQUFRLE1BQU0sTUFBTTtBQUMvQyxVQUFJLGtCQUFrQixRQUFXO0FBQ2hDLFlBQUksaUJBQWlCLElBQUksZUFBZTtBQUFBLE1BQ3pDO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFTQSxhQUFTLHFCQUFxQixLQUFLO0FBQ2xDLFlBQU0sVUFBVSxJQUFJLFFBQVE7QUFDNUIsaUJBQVcsUUFBUSxPQUFPLEtBQUssR0FBRyxHQUFHO0FBQ3BDLFlBQUksa0JBQWtCLEtBQUssSUFBSSxHQUFHO0FBQ2pDO0FBQUEsUUFDRDtBQUNBLFlBQUksTUFBTSxRQUFRLElBQUksS0FBSyxHQUFHO0FBQzdCLHFCQUFXLE9BQU8sSUFBSSxPQUFPO0FBQzVCLGdCQUFJLHVCQUF1QixLQUFLLEdBQUcsR0FBRztBQUNyQztBQUFBLFlBQ0Q7QUFDQSxnQkFBSSxRQUFRLEtBQUssVUFBVSxRQUFXO0FBQ3JDLHNCQUFRLEtBQUssUUFBUSxDQUFDLEdBQUc7QUFBQSxZQUMxQixPQUFPO0FBQ04sc0JBQVEsS0FBSyxNQUFNLEtBQUssR0FBRztBQUFBLFlBQzVCO0FBQUEsVUFDRDtBQUFBLFFBQ0QsV0FBVyxDQUFDLHVCQUF1QixLQUFLLElBQUksS0FBSyxHQUFHO0FBQ25ELGtCQUFRLEtBQUssUUFBUSxDQUFDLElBQUksS0FBSztBQUFBLFFBQ2hDO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBTSxjQUFjLE9BQU8sb0JBQW9CO0FBRy9DLFFBQU0sZUFBZSxLQUFLO0FBUzFCLFFBQU0sV0FBTixNQUFlO0FBQUEsTUFDZCxjQUFjO0FBQ2IsWUFBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLFVBQVUsT0FBTyxTQUFZLFVBQVUsS0FBSztBQUMvRSxZQUFJLE9BQU8sVUFBVSxTQUFTLEtBQUssVUFBVSxPQUFPLFNBQVksVUFBVSxLQUFLLENBQUM7QUFFaEYsYUFBSyxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBRTFCLGNBQU0sU0FBUyxLQUFLLFVBQVU7QUFDOUIsY0FBTSxVQUFVLElBQUksUUFBUSxLQUFLLE9BQU87QUFFeEMsWUFBSSxRQUFRLFFBQVEsQ0FBQyxRQUFRLElBQUksY0FBYyxHQUFHO0FBQ2pELGdCQUFNLGNBQWMsbUJBQW1CLElBQUk7QUFDM0MsY0FBSSxhQUFhO0FBQ2hCLG9CQUFRLE9BQU8sZ0JBQWdCLFdBQVc7QUFBQSxVQUMzQztBQUFBLFFBQ0Q7QUFFQSxhQUFLLGVBQWU7QUFBQSxVQUNuQixLQUFLLEtBQUs7QUFBQSxVQUNWO0FBQUEsVUFDQSxZQUFZLEtBQUssY0FBYyxhQUFhO0FBQUEsVUFDNUM7QUFBQSxVQUNBLFNBQVMsS0FBSztBQUFBLFFBQ2Y7QUFBQSxNQUNEO0FBQUEsTUFFQSxJQUFJLE1BQU07QUFDVCxlQUFPLEtBQUssYUFBYSxPQUFPO0FBQUEsTUFDakM7QUFBQSxNQUVBLElBQUksU0FBUztBQUNaLGVBQU8sS0FBSyxhQUFhO0FBQUEsTUFDMUI7QUFBQSxNQUtBLElBQUksS0FBSztBQUNSLGVBQU8sS0FBSyxhQUFhLFVBQVUsT0FBTyxLQUFLLGFBQWEsU0FBUztBQUFBLE1BQ3RFO0FBQUEsTUFFQSxJQUFJLGFBQWE7QUFDaEIsZUFBTyxLQUFLLGFBQWEsVUFBVTtBQUFBLE1BQ3BDO0FBQUEsTUFFQSxJQUFJLGFBQWE7QUFDaEIsZUFBTyxLQUFLLGFBQWE7QUFBQSxNQUMxQjtBQUFBLE1BRUEsSUFBSSxVQUFVO0FBQ2IsZUFBTyxLQUFLLGFBQWE7QUFBQSxNQUMxQjtBQUFBLE1BT0EsUUFBUTtBQUNQLGVBQU8sSUFBSSxTQUFTLE1BQU0sSUFBSSxHQUFHO0FBQUEsVUFDaEMsS0FBSyxLQUFLO0FBQUEsVUFDVixRQUFRLEtBQUs7QUFBQSxVQUNiLFlBQVksS0FBSztBQUFBLFVBQ2pCLFNBQVMsS0FBSztBQUFBLFVBQ2QsSUFBSSxLQUFLO0FBQUEsVUFDVCxZQUFZLEtBQUs7QUFBQSxRQUNsQixDQUFDO0FBQUEsTUFDRjtBQUFBLElBQ0Q7QUFFQSxTQUFLLE1BQU0sU0FBUyxTQUFTO0FBRTdCLFdBQU8saUJBQWlCLFNBQVMsV0FBVztBQUFBLE1BQzNDLEtBQUssRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUN4QixRQUFRLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDM0IsSUFBSSxFQUFFLFlBQVksS0FBSztBQUFBLE1BQ3ZCLFlBQVksRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUMvQixZQUFZLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDL0IsU0FBUyxFQUFFLFlBQVksS0FBSztBQUFBLE1BQzVCLE9BQU8sRUFBRSxZQUFZLEtBQUs7QUFBQSxJQUMzQixDQUFDO0FBRUQsV0FBTyxlQUFlLFNBQVMsV0FBVyxPQUFPLGFBQWE7QUFBQSxNQUM3RCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDZixDQUFDO0FBRUQsUUFBTSxjQUFjLE9BQU8sbUJBQW1CO0FBQzlDLFFBQU0sTUFBTSxJQUFJLE9BQU8sVUFBVTtBQUdqQyxRQUFNLFlBQVksSUFBSTtBQUN0QixRQUFNLGFBQWEsSUFBSTtBQVF2QixhQUFTLFNBQVMsUUFBUTtBQU16QixVQUFJLDRCQUE0QixLQUFLLE1BQU0sR0FBRztBQUM3QyxpQkFBUyxJQUFJLElBQUksTUFBTSxFQUFFLFNBQVM7QUFBQSxNQUNuQztBQUdBLGFBQU8sVUFBVSxNQUFNO0FBQUEsSUFDeEI7QUFFQSxRQUFNLDZCQUE2QixhQUFhLE9BQU8sU0FBUztBQVFoRSxhQUFTLFVBQVUsT0FBTztBQUN6QixhQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxpQkFBaUI7QUFBQSxJQUNuRTtBQUVBLGFBQVMsY0FBYyxRQUFRO0FBQzlCLFlBQU0sUUFBUSxVQUFVLE9BQU8sV0FBVyxZQUFZLE9BQU8sZUFBZSxNQUFNO0FBQ2xGLGFBQU8sQ0FBQyxFQUFFLFNBQVMsTUFBTSxZQUFZLFNBQVM7QUFBQSxJQUMvQztBQVNBLFFBQU0sVUFBTixNQUFjO0FBQUEsTUFDYixZQUFZLE9BQU87QUFDbEIsWUFBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLFVBQVUsT0FBTyxTQUFZLFVBQVUsS0FBSyxDQUFDO0FBRWhGLFlBQUk7QUFHSixZQUFJLENBQUMsVUFBVSxLQUFLLEdBQUc7QUFDdEIsY0FBSSxTQUFTLE1BQU0sTUFBTTtBQUl4Qix3QkFBWSxTQUFTLE1BQU0sSUFBSTtBQUFBLFVBQ2hDLE9BQU87QUFFTix3QkFBWSxTQUFTLEdBQUcsT0FBTztBQUFBLFVBQ2hDO0FBQ0Esa0JBQVEsQ0FBQztBQUFBLFFBQ1YsT0FBTztBQUNOLHNCQUFZLFNBQVMsTUFBTSxHQUFHO0FBQUEsUUFDL0I7QUFFQSxZQUFJLFNBQVMsS0FBSyxVQUFVLE1BQU0sVUFBVTtBQUM1QyxpQkFBUyxPQUFPLFlBQVk7QUFFNUIsYUFBSyxLQUFLLFFBQVEsUUFBUSxVQUFVLEtBQUssS0FBSyxNQUFNLFNBQVMsVUFBVSxXQUFXLFNBQVMsV0FBVyxTQUFTO0FBQzlHLGdCQUFNLElBQUksVUFBVSwrQ0FBK0M7QUFBQSxRQUNwRTtBQUVBLFlBQUksWUFBWSxLQUFLLFFBQVEsT0FBTyxLQUFLLE9BQU8sVUFBVSxLQUFLLEtBQUssTUFBTSxTQUFTLE9BQU8sTUFBTSxLQUFLLElBQUk7QUFFekcsYUFBSyxLQUFLLE1BQU0sV0FBVztBQUFBLFVBQzFCLFNBQVMsS0FBSyxXQUFXLE1BQU0sV0FBVztBQUFBLFVBQzFDLE1BQU0sS0FBSyxRQUFRLE1BQU0sUUFBUTtBQUFBLFFBQ2xDLENBQUM7QUFFRCxjQUFNLFVBQVUsSUFBSSxRQUFRLEtBQUssV0FBVyxNQUFNLFdBQVcsQ0FBQyxDQUFDO0FBRS9ELFlBQUksYUFBYSxRQUFRLENBQUMsUUFBUSxJQUFJLGNBQWMsR0FBRztBQUN0RCxnQkFBTSxjQUFjLG1CQUFtQixTQUFTO0FBQ2hELGNBQUksYUFBYTtBQUNoQixvQkFBUSxPQUFPLGdCQUFnQixXQUFXO0FBQUEsVUFDM0M7QUFBQSxRQUNEO0FBRUEsWUFBSSxTQUFTLFVBQVUsS0FBSyxJQUFJLE1BQU0sU0FBUztBQUMvQyxZQUFJLFlBQVk7QUFBTSxtQkFBUyxLQUFLO0FBRXBDLFlBQUksVUFBVSxRQUFRLENBQUMsY0FBYyxNQUFNLEdBQUc7QUFDN0MsZ0JBQU0sSUFBSSxVQUFVLGlEQUFpRDtBQUFBLFFBQ3RFO0FBRUEsYUFBSyxlQUFlO0FBQUEsVUFDbkI7QUFBQSxVQUNBLFVBQVUsS0FBSyxZQUFZLE1BQU0sWUFBWTtBQUFBLFVBQzdDO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNEO0FBR0EsYUFBSyxTQUFTLEtBQUssV0FBVyxTQUFZLEtBQUssU0FBUyxNQUFNLFdBQVcsU0FBWSxNQUFNLFNBQVM7QUFDcEcsYUFBSyxXQUFXLEtBQUssYUFBYSxTQUFZLEtBQUssV0FBVyxNQUFNLGFBQWEsU0FBWSxNQUFNLFdBQVc7QUFDOUcsYUFBSyxVQUFVLEtBQUssV0FBVyxNQUFNLFdBQVc7QUFDaEQsYUFBSyxRQUFRLEtBQUssU0FBUyxNQUFNO0FBQUEsTUFDbEM7QUFBQSxNQUVBLElBQUksU0FBUztBQUNaLGVBQU8sS0FBSyxhQUFhO0FBQUEsTUFDMUI7QUFBQSxNQUVBLElBQUksTUFBTTtBQUNULGVBQU8sV0FBVyxLQUFLLGFBQWEsU0FBUztBQUFBLE1BQzlDO0FBQUEsTUFFQSxJQUFJLFVBQVU7QUFDYixlQUFPLEtBQUssYUFBYTtBQUFBLE1BQzFCO0FBQUEsTUFFQSxJQUFJLFdBQVc7QUFDZCxlQUFPLEtBQUssYUFBYTtBQUFBLE1BQzFCO0FBQUEsTUFFQSxJQUFJLFNBQVM7QUFDWixlQUFPLEtBQUssYUFBYTtBQUFBLE1BQzFCO0FBQUEsTUFPQSxRQUFRO0FBQ1AsZUFBTyxJQUFJLFFBQVEsSUFBSTtBQUFBLE1BQ3hCO0FBQUEsSUFDRDtBQUVBLFNBQUssTUFBTSxRQUFRLFNBQVM7QUFFNUIsV0FBTyxlQUFlLFFBQVEsV0FBVyxPQUFPLGFBQWE7QUFBQSxNQUM1RCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDZixDQUFDO0FBRUQsV0FBTyxpQkFBaUIsUUFBUSxXQUFXO0FBQUEsTUFDMUMsUUFBUSxFQUFFLFlBQVksS0FBSztBQUFBLE1BQzNCLEtBQUssRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUN4QixTQUFTLEVBQUUsWUFBWSxLQUFLO0FBQUEsTUFDNUIsVUFBVSxFQUFFLFlBQVksS0FBSztBQUFBLE1BQzdCLE9BQU8sRUFBRSxZQUFZLEtBQUs7QUFBQSxNQUMxQixRQUFRLEVBQUUsWUFBWSxLQUFLO0FBQUEsSUFDNUIsQ0FBQztBQVFELGFBQVMsc0JBQXNCLFNBQVM7QUFDdkMsWUFBTSxZQUFZLFFBQVEsYUFBYTtBQUN2QyxZQUFNLFVBQVUsSUFBSSxRQUFRLFFBQVEsYUFBYSxPQUFPO0FBR3hELFVBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxHQUFHO0FBQzNCLGdCQUFRLElBQUksVUFBVSxLQUFLO0FBQUEsTUFDNUI7QUFHQSxVQUFJLENBQUMsVUFBVSxZQUFZLENBQUMsVUFBVSxVQUFVO0FBQy9DLGNBQU0sSUFBSSxVQUFVLGtDQUFrQztBQUFBLE1BQ3ZEO0FBRUEsVUFBSSxDQUFDLFlBQVksS0FBSyxVQUFVLFFBQVEsR0FBRztBQUMxQyxjQUFNLElBQUksVUFBVSxzQ0FBc0M7QUFBQSxNQUMzRDtBQUVBLFVBQUksUUFBUSxVQUFVLFFBQVEsZ0JBQWdCLE9BQU8sWUFBWSxDQUFDLDRCQUE0QjtBQUM3RixjQUFNLElBQUksTUFBTSxpRkFBaUY7QUFBQSxNQUNsRztBQUdBLFVBQUkscUJBQXFCO0FBQ3pCLFVBQUksUUFBUSxRQUFRLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxNQUFNLEdBQUc7QUFDakUsNkJBQXFCO0FBQUEsTUFDdEI7QUFDQSxVQUFJLFFBQVEsUUFBUSxNQUFNO0FBQ3pCLGNBQU0sYUFBYSxjQUFjLE9BQU87QUFDeEMsWUFBSSxPQUFPLGVBQWUsVUFBVTtBQUNuQywrQkFBcUIsT0FBTyxVQUFVO0FBQUEsUUFDdkM7QUFBQSxNQUNEO0FBQ0EsVUFBSSxvQkFBb0I7QUFDdkIsZ0JBQVEsSUFBSSxrQkFBa0Isa0JBQWtCO0FBQUEsTUFDakQ7QUFHQSxVQUFJLENBQUMsUUFBUSxJQUFJLFlBQVksR0FBRztBQUMvQixnQkFBUSxJQUFJLGNBQWMsd0RBQXdEO0FBQUEsTUFDbkY7QUFHQSxVQUFJLFFBQVEsWUFBWSxDQUFDLFFBQVEsSUFBSSxpQkFBaUIsR0FBRztBQUN4RCxnQkFBUSxJQUFJLG1CQUFtQixjQUFjO0FBQUEsTUFDOUM7QUFFQSxVQUFJLFFBQVEsUUFBUTtBQUNwQixVQUFJLE9BQU8sVUFBVSxZQUFZO0FBQ2hDLGdCQUFRLE1BQU0sU0FBUztBQUFBLE1BQ3hCO0FBRUEsVUFBSSxDQUFDLFFBQVEsSUFBSSxZQUFZLEtBQUssQ0FBQyxPQUFPO0FBQ3pDLGdCQUFRLElBQUksY0FBYyxPQUFPO0FBQUEsTUFDbEM7QUFLQSxhQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsV0FBVztBQUFBLFFBQ25DLFFBQVEsUUFBUTtBQUFBLFFBQ2hCLFNBQVMsNEJBQTRCLE9BQU87QUFBQSxRQUM1QztBQUFBLE1BQ0QsQ0FBQztBQUFBLElBQ0Y7QUFjQSxhQUFTLFdBQVcsU0FBUztBQUMzQixZQUFNLEtBQUssTUFBTSxPQUFPO0FBRXhCLFdBQUssT0FBTztBQUNaLFdBQUssVUFBVTtBQUdmLFlBQU0sa0JBQWtCLE1BQU0sS0FBSyxXQUFXO0FBQUEsSUFDaEQ7QUFFQSxlQUFXLFlBQVksT0FBTyxPQUFPLE1BQU0sU0FBUztBQUNwRCxlQUFXLFVBQVUsY0FBYztBQUNuQyxlQUFXLFVBQVUsT0FBTztBQUU1QixRQUFNLFFBQVEsSUFBSSxPQUFPLFVBQVU7QUFHbkMsUUFBTSxnQkFBZ0IsT0FBTztBQUU3QixRQUFNLHNCQUFzQixTQUFTQyxxQkFBb0IsYUFBYSxVQUFVO0FBQy9FLFlBQU0sT0FBTyxJQUFJLE1BQU0sUUFBUSxFQUFFO0FBQ2pDLFlBQU0sT0FBTyxJQUFJLE1BQU0sV0FBVyxFQUFFO0FBRXBDLGFBQU8sU0FBUyxRQUFRLEtBQUssS0FBSyxTQUFTLEtBQUssU0FBUyxPQUFPLE9BQU8sS0FBSyxTQUFTLElBQUk7QUFBQSxJQUMxRjtBQVNBLGFBQVNDLE9BQU0sS0FBSyxNQUFNO0FBR3pCLFVBQUksQ0FBQ0EsT0FBTSxTQUFTO0FBQ25CLGNBQU0sSUFBSSxNQUFNLHdFQUF3RTtBQUFBLE1BQ3pGO0FBRUEsV0FBSyxVQUFVQSxPQUFNO0FBR3JCLGFBQU8sSUFBSUEsT0FBTSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBRW5ELGNBQU0sVUFBVSxJQUFJLFFBQVEsS0FBSyxJQUFJO0FBQ3JDLGNBQU0sVUFBVSxzQkFBc0IsT0FBTztBQUU3QyxjQUFNLFFBQVEsUUFBUSxhQUFhLFdBQVcsUUFBUSxNQUFNO0FBQzVELGNBQU0sU0FBUyxRQUFRO0FBRXZCLFlBQUksV0FBVztBQUVmLGNBQU0sUUFBUSxTQUFTQyxTQUFRO0FBQzlCLGNBQUksUUFBUSxJQUFJLFdBQVcsNkJBQTZCO0FBQ3hELGlCQUFPLEtBQUs7QUFDWixjQUFJLFFBQVEsUUFBUSxRQUFRLGdCQUFnQixPQUFPLFVBQVU7QUFDNUQsb0JBQVEsS0FBSyxRQUFRLEtBQUs7QUFBQSxVQUMzQjtBQUNBLGNBQUksQ0FBQyxZQUFZLENBQUMsU0FBUztBQUFNO0FBQ2pDLG1CQUFTLEtBQUssS0FBSyxTQUFTLEtBQUs7QUFBQSxRQUNsQztBQUVBLFlBQUksVUFBVSxPQUFPLFNBQVM7QUFDN0IsZ0JBQU07QUFDTjtBQUFBLFFBQ0Q7QUFFQSxjQUFNLG1CQUFtQixTQUFTQyxvQkFBbUI7QUFDcEQsZ0JBQU07QUFDTixtQkFBUztBQUFBLFFBQ1Y7QUFHQSxjQUFNLE1BQU0sS0FBSyxPQUFPO0FBQ3hCLFlBQUk7QUFFSixZQUFJLFFBQVE7QUFDWCxpQkFBTyxpQkFBaUIsU0FBUyxnQkFBZ0I7QUFBQSxRQUNsRDtBQUVBLGlCQUFTLFdBQVc7QUFDbkIsY0FBSSxNQUFNO0FBQ1YsY0FBSTtBQUFRLG1CQUFPLG9CQUFvQixTQUFTLGdCQUFnQjtBQUNoRSx1QkFBYSxVQUFVO0FBQUEsUUFDeEI7QUFFQSxZQUFJLFFBQVEsU0FBUztBQUNwQixjQUFJLEtBQUssVUFBVSxTQUFVLFFBQVE7QUFDcEMseUJBQWEsV0FBVyxXQUFZO0FBQ25DLHFCQUFPLElBQUksV0FBVyx1QkFBdUIsUUFBUSxPQUFPLGlCQUFpQixDQUFDO0FBQzlFLHVCQUFTO0FBQUEsWUFDVixHQUFHLFFBQVEsT0FBTztBQUFBLFVBQ25CLENBQUM7QUFBQSxRQUNGO0FBRUEsWUFBSSxHQUFHLFNBQVMsU0FBVSxLQUFLO0FBQzlCLGlCQUFPLElBQUksV0FBVyxjQUFjLFFBQVEsdUJBQXVCLElBQUksV0FBVyxVQUFVLEdBQUcsQ0FBQztBQUNoRyxtQkFBUztBQUFBLFFBQ1YsQ0FBQztBQUVELFlBQUksR0FBRyxZQUFZLFNBQVUsS0FBSztBQUNqQyx1QkFBYSxVQUFVO0FBRXZCLGdCQUFNLFVBQVUscUJBQXFCLElBQUksT0FBTztBQUdoRCxjQUFJRixPQUFNLFdBQVcsSUFBSSxVQUFVLEdBQUc7QUFFckMsa0JBQU0sV0FBVyxRQUFRLElBQUksVUFBVTtBQUd2QyxnQkFBSSxjQUFjO0FBQ2xCLGdCQUFJO0FBQ0gsNEJBQWMsYUFBYSxPQUFPLE9BQU8sSUFBSSxNQUFNLFVBQVUsUUFBUSxHQUFHLEVBQUUsU0FBUztBQUFBLFlBQ3BGLFNBQVMsS0FBUDtBQUlELGtCQUFJLFFBQVEsYUFBYSxVQUFVO0FBQ2xDLHVCQUFPLElBQUksV0FBVyx3REFBd0QsWUFBWSxrQkFBa0IsQ0FBQztBQUM3Ryx5QkFBUztBQUNUO0FBQUEsY0FDRDtBQUFBLFlBQ0Q7QUFHQSxvQkFBUSxRQUFRO0FBQUEsbUJBQ1Y7QUFDSix1QkFBTyxJQUFJLFdBQVcsMEVBQTBFLFFBQVEsT0FBTyxhQUFhLENBQUM7QUFDN0gseUJBQVM7QUFDVDtBQUFBLG1CQUNJO0FBRUosb0JBQUksZ0JBQWdCLE1BQU07QUFFekIsc0JBQUk7QUFDSCw0QkFBUSxJQUFJLFlBQVksV0FBVztBQUFBLGtCQUNwQyxTQUFTLEtBQVA7QUFFRCwyQkFBTyxHQUFHO0FBQUEsa0JBQ1g7QUFBQSxnQkFDRDtBQUNBO0FBQUEsbUJBQ0k7QUFFSixvQkFBSSxnQkFBZ0IsTUFBTTtBQUN6QjtBQUFBLGdCQUNEO0FBR0Esb0JBQUksUUFBUSxXQUFXLFFBQVEsUUFBUTtBQUN0Qyx5QkFBTyxJQUFJLFdBQVcsZ0NBQWdDLFFBQVEsT0FBTyxjQUFjLENBQUM7QUFDcEYsMkJBQVM7QUFDVDtBQUFBLGdCQUNEO0FBSUEsc0JBQU0sY0FBYztBQUFBLGtCQUNuQixTQUFTLElBQUksUUFBUSxRQUFRLE9BQU87QUFBQSxrQkFDcEMsUUFBUSxRQUFRO0FBQUEsa0JBQ2hCLFNBQVMsUUFBUSxVQUFVO0FBQUEsa0JBQzNCLE9BQU8sUUFBUTtBQUFBLGtCQUNmLFVBQVUsUUFBUTtBQUFBLGtCQUNsQixRQUFRLFFBQVE7QUFBQSxrQkFDaEIsTUFBTSxRQUFRO0FBQUEsa0JBQ2QsUUFBUSxRQUFRO0FBQUEsa0JBQ2hCLFNBQVMsUUFBUTtBQUFBLGtCQUNqQixNQUFNLFFBQVE7QUFBQSxnQkFDZjtBQUVBLG9CQUFJLENBQUMsb0JBQW9CLFFBQVEsS0FBSyxXQUFXLEdBQUc7QUFDbkQsNkJBQVcsUUFBUSxDQUFDLGlCQUFpQixvQkFBb0IsVUFBVSxTQUFTLEdBQUc7QUFDOUUsZ0NBQVksUUFBUSxPQUFPLElBQUk7QUFBQSxrQkFDaEM7QUFBQSxnQkFDRDtBQUdBLG9CQUFJLElBQUksZUFBZSxPQUFPLFFBQVEsUUFBUSxjQUFjLE9BQU8sTUFBTSxNQUFNO0FBQzlFLHlCQUFPLElBQUksV0FBVyw0REFBNEQsc0JBQXNCLENBQUM7QUFDekcsMkJBQVM7QUFDVDtBQUFBLGdCQUNEO0FBR0Esb0JBQUksSUFBSSxlQUFlLFFBQVEsSUFBSSxlQUFlLE9BQU8sSUFBSSxlQUFlLFFBQVEsUUFBUSxXQUFXLFFBQVE7QUFDOUcsOEJBQVksU0FBUztBQUNyQiw4QkFBWSxPQUFPO0FBQ25CLDhCQUFZLFFBQVEsT0FBTyxnQkFBZ0I7QUFBQSxnQkFDNUM7QUFHQSx3QkFBUUEsT0FBTSxJQUFJLFFBQVEsYUFBYSxXQUFXLENBQUMsQ0FBQztBQUNwRCx5QkFBUztBQUNUO0FBQUE7QUFBQSxVQUVIO0FBR0EsY0FBSSxLQUFLLE9BQU8sV0FBWTtBQUMzQixnQkFBSTtBQUFRLHFCQUFPLG9CQUFvQixTQUFTLGdCQUFnQjtBQUFBLFVBQ2pFLENBQUM7QUFDRCxjQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksY0FBYyxDQUFDO0FBRXZDLGdCQUFNLG1CQUFtQjtBQUFBLFlBQ3hCLEtBQUssUUFBUTtBQUFBLFlBQ2IsUUFBUSxJQUFJO0FBQUEsWUFDWixZQUFZLElBQUk7QUFBQSxZQUNoQjtBQUFBLFlBQ0EsTUFBTSxRQUFRO0FBQUEsWUFDZCxTQUFTLFFBQVE7QUFBQSxZQUNqQixTQUFTLFFBQVE7QUFBQSxVQUNsQjtBQUdBLGdCQUFNLFVBQVUsUUFBUSxJQUFJLGtCQUFrQjtBQVU5QyxjQUFJLENBQUMsUUFBUSxZQUFZLFFBQVEsV0FBVyxVQUFVLFlBQVksUUFBUSxJQUFJLGVBQWUsT0FBTyxJQUFJLGVBQWUsS0FBSztBQUMzSCx1QkFBVyxJQUFJLFNBQVMsTUFBTSxnQkFBZ0I7QUFDOUMsb0JBQVEsUUFBUTtBQUNoQjtBQUFBLFVBQ0Q7QUFPQSxnQkFBTSxjQUFjO0FBQUEsWUFDbkIsT0FBTyxLQUFLO0FBQUEsWUFDWixhQUFhLEtBQUs7QUFBQSxVQUNuQjtBQUdBLGNBQUksV0FBVyxVQUFVLFdBQVcsVUFBVTtBQUM3QyxtQkFBTyxLQUFLLEtBQUssS0FBSyxhQUFhLFdBQVcsQ0FBQztBQUMvQyx1QkFBVyxJQUFJLFNBQVMsTUFBTSxnQkFBZ0I7QUFDOUMsb0JBQVEsUUFBUTtBQUNoQjtBQUFBLFVBQ0Q7QUFHQSxjQUFJLFdBQVcsYUFBYSxXQUFXLGFBQWE7QUFHbkQsa0JBQU0sTUFBTSxJQUFJLEtBQUssSUFBSSxjQUFjLENBQUM7QUFDeEMsZ0JBQUksS0FBSyxRQUFRLFNBQVUsT0FBTztBQUVqQyxtQkFBSyxNQUFNLEtBQUssUUFBVSxHQUFNO0FBQy9CLHVCQUFPLEtBQUssS0FBSyxLQUFLLGNBQWMsQ0FBQztBQUFBLGNBQ3RDLE9BQU87QUFDTix1QkFBTyxLQUFLLEtBQUssS0FBSyxpQkFBaUIsQ0FBQztBQUFBLGNBQ3pDO0FBQ0EseUJBQVcsSUFBSSxTQUFTLE1BQU0sZ0JBQWdCO0FBQzlDLHNCQUFRLFFBQVE7QUFBQSxZQUNqQixDQUFDO0FBQ0Q7QUFBQSxVQUNEO0FBR0EsY0FBSSxXQUFXLFFBQVEsT0FBTyxLQUFLLDJCQUEyQixZQUFZO0FBQ3pFLG1CQUFPLEtBQUssS0FBSyxLQUFLLHVCQUF1QixDQUFDO0FBQzlDLHVCQUFXLElBQUksU0FBUyxNQUFNLGdCQUFnQjtBQUM5QyxvQkFBUSxRQUFRO0FBQ2hCO0FBQUEsVUFDRDtBQUdBLHFCQUFXLElBQUksU0FBUyxNQUFNLGdCQUFnQjtBQUM5QyxrQkFBUSxRQUFRO0FBQUEsUUFDakIsQ0FBQztBQUVELHNCQUFjLEtBQUssT0FBTztBQUFBLE1BQzNCLENBQUM7QUFBQSxJQUNGO0FBT0EsSUFBQUEsT0FBTSxhQUFhLFNBQVUsTUFBTTtBQUNsQyxhQUFPLFNBQVMsT0FBTyxTQUFTLE9BQU8sU0FBUyxPQUFPLFNBQVMsT0FBTyxTQUFTO0FBQUEsSUFDakY7QUFHQSxJQUFBQSxPQUFNLFVBQVUsT0FBTztBQUV2QixJQUFBSCxRQUFPLFVBQVUsVUFBVUc7QUFDM0IsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsVUFBVTtBQUNsQixZQUFRLFVBQVU7QUFDbEIsWUFBUSxVQUFVO0FBQ2xCLFlBQVEsV0FBVztBQUNuQixZQUFRLGFBQWE7QUFBQTtBQUFBOzs7QUNocURyQjtBQUFBLGlHQUFBRyxTQUFBO0FBQUEsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sWUFBWSxVQUFVLFdBQVc7QUFFdkMsUUFBTUMsU0FBUSxTQUFVLEtBQUssU0FBUztBQUdwQyxVQUFJLFFBQVEsS0FBSyxHQUFHLEdBQUc7QUFDckIsY0FBTSxXQUFXO0FBQUEsTUFDbkI7QUFDQSxhQUFPLFVBQVUsS0FBSyxNQUFNLEtBQUssT0FBTztBQUFBLElBQzFDO0FBRUEsSUFBQUEsT0FBTSxXQUFXO0FBRWpCLElBQUFELFFBQU8sVUFBVSxVQUFVQztBQUMzQixZQUFRLFFBQVFBO0FBQ2hCLFlBQVEsVUFBVSxVQUFVO0FBQzVCLFlBQVEsVUFBVSxVQUFVO0FBQzVCLFlBQVEsV0FBVyxVQUFVO0FBRzdCLFlBQVEsVUFBVUE7QUFBQTtBQUFBOzs7QUNyQmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBeUM7QUFDekMscUJBQXVDO0FBQ3ZDLHlCQUFzQjtBQUV0QixJQUFNLFFBQU4sTUFBWTtBQUFBLEVBR1YsWUFBWSxTQUF3QjtBQUNsQyxTQUFLLFVBQVUsUUFBUSxRQUFRO0FBQy9CLFNBQUssT0FBTyxRQUFRO0FBQUEsRUFDdEI7QUFBQSxFQUNBLE1BQWEsU0FBUztBQUNwQixVQUFNLE1BQU0sVUFBVSxLQUFLLFdBQVcsS0FBSztBQUMzQyxVQUFNLFdBQVcsVUFBTSwwQkFBTSxHQUFHO0FBQ2hDLFVBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUNqQyxVQUFNLFdBQVcsQ0FBQyxLQUFLLE9BQU8sR0FBRztBQUNqQyxXQUFPLFVBQU0sMEJBQU0sS0FBSztBQUFBLE1BQ3RCLFFBQVE7QUFBQSxNQUNSLE1BQU0sS0FBSyxVQUFVO0FBQUEsUUFDbkIsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLElBQUk7QUFBQSxVQUNOO0FBQUEsUUFDRjtBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsTUFDbEIsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQWNBLGVBQWUsT0FBTztBQUNwQixRQUFNLGNBQVUsZUFBQUMsU0FBUTtBQUN4QixRQUFNLFNBQXVCLENBQUM7QUFDOUIsUUFBTSxTQUFTLFlBQ2IsSUFBSSxRQUFlLENBQUMsWUFBWTtBQUM5QixlQUFXLFlBQVk7QUFDckIsY0FBUSxLQUFLLEVBQUUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxZQUFZO0FBQ3pDLGNBQU0sUUFBUSxJQUFJLE1BQU0sT0FBTztBQUMvQixlQUFPLEtBQUssS0FBSztBQUNqQixnQkFBUSxLQUFLO0FBQUEsTUFDZixDQUFDO0FBQUEsSUFDSCxHQUFHLEdBQUk7QUFBQSxFQUNULENBQUM7QUFDSCxRQUFNLE9BQU87QUFDYixVQUFRLFFBQVE7QUFDaEIsU0FBTztBQUNUO0FBRUEsZUFBTyxXQUFrQztBQUN2QyxZQUFNLDRCQUFnQixFQUFFLGlCQUFpQixLQUFLLENBQUM7QUFDL0MsaUJBQWUsWUFBWTtBQUN6QixVQUFNLFdBQXFDLENBQUM7QUFDNUMsVUFBTSxTQUFTLE1BQU0sS0FBSztBQUMxQixXQUFPLFFBQVEsT0FBSyxTQUFTLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3QyxXQUFPLFFBQVEsSUFBSSxRQUFRO0FBQUEsRUFDN0I7QUFDQSxRQUFNLFVBQVU7QUFDaEIsWUFBTSxvQkFBUSxPQUFPO0FBQ3ZCOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAib2xkT2Zmc2V0IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAicmVjb3JkcyIsICJCdWZmZXIiLCAiaXAiLCAibW9kdWxlIiwgIkJ1ZmZlciIsICJCdWZmZXIiLCAibW9kdWxlIiwgImNhbGxiYWNrIiwgIm1vZHVsZSIsICJ0eXBlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJyZXF1aXJlX3NoYW1zIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAicmVxdWlyZV9pbXBsZW1lbnRhdGlvbiIsICJtb2R1bGUiLCAiRW1wdHkiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAidW5kZWZpbmVkIiwgImRvRXZhbCIsICJzdHJpbmdUb1BhdGgiLCAiZ2V0QmFzZUludHJpbnNpYyIsICJtb2R1bGUiLCAiYXBwbHlCaW5kIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImhhc1Byb3BlcnR5RGVzY3JpcHRvcnMiLCAibW9kdWxlIiwgInJlcXVpcmVfaW1wbGVtZW50YXRpb24iLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZnVuY3Rpb25zSGF2ZU5hbWVzIiwgInJlcXVpcmVfaW1wbGVtZW50YXRpb24iLCAibW9kdWxlIiwgInJlcXVpcmVfcG9seWZpbGwiLCAibW9kdWxlIiwgInJlcXVpcmVfc2hpbSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJuYW1lIiwgIm1vZHVsZSIsICJCb25qb3VyIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJyZXMiLCAibW9kdWxlIiwgInJlcXVpcmVfbGliIiwgIm1vZHVsZSIsICJmaW5kIiwgImlzRG9tYWluT3JTdWJkb21haW4iLCAiZmV0Y2giLCAiYWJvcnQiLCAiYWJvcnRBbmRGaW5hbGl6ZSIsICJtb2R1bGUiLCAiZmV0Y2giLCAiQm9uam91ciJdCn0K
