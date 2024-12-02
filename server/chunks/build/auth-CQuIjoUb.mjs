import { U as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware(() => {
  return;
});

export { auth as default };
//# sourceMappingURL=auth-CQuIjoUb.mjs.map
