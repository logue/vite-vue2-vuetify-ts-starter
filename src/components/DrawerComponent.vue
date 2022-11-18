<template>
  <v-list>
    <template v-for="item in items">
      <v-list-item-group :key="item.title" v-model="item.active">
        <v-divider v-if="item.title === '-'" />
        <template v-else>
          <!-- Menu Item -->
          <v-list-item
            v-if="!item.items"
            :to="item.to"
            :disabled="!item.to"
            link
          >
            <v-list-item-icon v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <!-- Sub menu -->
          <v-list-item-group
            v-else-if="item.items"
            v-model="item.active"
            :prepend-icon="item.icon"
          >
            <template #activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>
            <!-- Sub menu item -->
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
              :disabled="!subItem.to"
              link
            >
              <v-divider v-if="subItem.title === '-'" />
              <template v-else>
                <v-list-item-icon v-if="subItem.icon">
                  <v-icon>{{ subItem.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </template>
            </v-list-item>
          </v-list-item-group>
        </template>
      </v-list-item-group>
    </template>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, type SetupContext } from 'vue';
import type DrawerMenuItem from '@/interfaces/DrawerMenuItemInterface';

export default defineComponent({
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup: (_props, _context: SetupContext) => {
    /** Drawer menu items */
    const items: DrawerMenuItem[] = [
      {
        title: 'Home',
        icon: 'mdi-home',
        to: { name: 'Home' },
      },
      {
        title: '-', // Divider
      },
      {
        title: 'About',
        icon: 'mdi-information',
        to: { name: 'About' },
      },
      {
        title: 'Disabled Item',
        icon: 'mdi-cancel',
        // empty `to` value becomes to disabled item
      },
    ];

    return { items };
  },
});
</script>
