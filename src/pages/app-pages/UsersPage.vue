<template>
  <q-page>
    <div class="row justify-end">
      <q-btn-group push v-if="selected.length === 0">
        <q-btn
          color="grey-1"
          text-color="black"
          push
          label="Add new"
          icon="add"
        />
      </q-btn-group>
      <q-btn-group push v-else>
        <q-btn
          color="grey-3"
          text-color="black"
          push
          label="Edit"
          icon="edit"
        />
        <q-btn
          color="grey-4"
          text-color="black"
          push
          label="Delete"
          icon="delete"
        />
      </q-btn-group>
    </div>

    <q-table
      class="my-sticky-dynamic q-mt-md"
      title="Users"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      row-key="index"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
      :pagination="pagination"
      :rows-per-page-options="[0]"
      @virtual-scroll="onScroll"
      selection="single"
      v-model:selected="selected"
    />
    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </q-page>
</template>

<script lang="ts" setup>
import { QTableProps } from 'quasar';
import { useUsersStore } from 'src/stores/users';
import { storeToRefs } from 'pinia';
import { ref, computed, nextTick } from 'vue';

const userStore = useUsersStore();
const { users } = storeToRefs(userStore);
const selected = ref([]);
const nextPage = ref(2);
const loading = ref(false);
const pagination = { rowsPerPage: 0 };

const columns: QTableProps['columns'] = [
  {
    name: 'name',
    align: 'left',
    label: 'Name',
    field: 'name',
  },
  {
    name: 'email',
    align: 'left',
    label: 'Email',
    field: 'email',
  },
  {
    name: 'gender',
    label: 'Gender',
    field: 'gender',
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
  },
];

const rows: QTableProps['rows'] = users.value;

let allRows = [];
for (let i = 0; i < 1000; i++) {
  allRows = allRows.concat(seed.slice(0).map((r) => ({ ...r })));
}
allRows.forEach((row, index) => {
  row.index = index;
});

const pageSize = 50;
const lastPage = Math.ceil(allRows.length / pageSize);

const onScroll = ({ to, ref }) => {
  const lastIndex = rows.length - 1;

  if (loading.value !== true && nextPage.value < lastPage && to === lastIndex) {
    loading.value = true;

    setTimeout(() => {
      nextPage.value++;
      nextTick(() => {
        ref.refresh();
        loading.value = false;
      });
    }, 500);
  }
};
</script>

<style lang="scss">
.my-sticky-dynamic {
  /* height or max-height is important */
  height: 410px;

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */ {
    background-color: #fff;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }
  /* this will be the loading indicator */
  thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
  }

  thead tr:first-child th {
    top: 0;
  }
}
</style>
