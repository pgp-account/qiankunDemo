<template>
  <section>
    <a-card title="Vue 微应用列表页">
      <a-table :columns="columns" :data-source="tabledata">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"> Name</span>        
      </a-table>
    </a-card>
  </section>
</template>

<script>
import fetch from "isomorphic-fetch";

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
// const tabledata = [];
export default {
  name: "List",
  data() {
    return {
      tabledata:[],
      columns,
    }
  },

  mounted(){
    const that = this;
    fetch('http://localhost:3030/vue/list')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson); 
      that.tabledata = myJson.data;
    });
  },
  
  methods: {
    // async fetchVegetable () {
    //   const result = await fetch("http://localhost:3000/vue/list", {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     // graphql 的查询风格
    //     // body: JSON.stringify({ query: `{ vegetableList (page: ${page}, pageSize: ${pageSize}) { page, pageSize, total, items { _id, name, poster, price } } }` })
    //   }).then(res => res.json());
    //   console.log(result)
      // const { vegetableList } = result.data;
      // this.data = vegetableList.items;
      // this.pageInfo = {
      //   current: vegetableList.page,
      //   pageSize: vegetableList.pageSize,
      //   total: vegetableList.total,
      //   onChange: page => this.fetchVegetable(page, 10)
      // };
    // }
  },

  // created() {
  //   this.fetchVegetable(1, 10);
  // }
}
</script>