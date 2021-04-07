export const data = {
  title: "Satu RecyclerViewAdapter untuk semua RecyclerView",
  description:
    "Bagaimana jika kita bisa membuat Satu Adapter Saja untuk semua recyclerview yang ada di aplikasi yang kita buat ?",
  editor: "",
  created_at: "",
  updated_at: "",
  content: [
    {
      type: "p",
      body:
        "Hampir semua aplikasi Android yang saya buat tempat saya bekerja sperti<a href='https://cexup.com'>Cexup<a>, penggunaan RecyclerView sangat sering digunakan untuk menampilkan list data.",
    },
    {
      type: "p",
      body: `
        Ketika menggunakan RecyclerView saya akan membuat sebuah Class RecyclerViewAdapter, Hal ini sabenarnya hal yang wajar dan tidak ada masalah. Tetapi saya menyadari semakin banyak saya mengunakan RecyclerView maka saya akan membuat RecyclerViewAdapter dengan code yang sama berulang-ulang, cukup mengganggu dan membuang waktu ketika kita dikejar deadline :-)
        .Dari situ saya mendapat sebuah ide untuk membuat RecyclerViewAdapter yang dapat digunakan berulang.
        Saya akan menjelaskan bagaimana saya membuatnya. Jika kalian ingin langsung mencobanya silahkan cek source codenya:
      `,
    },
    {
      type: "link",
      body: "https://github.com/triandamai/singleadapter",
    },
    { type: "h2", body: "Data Model" },
    {
      type: "p",
      body:
        "Sebagai contoh saya akan gunakan recyclerview untuk menampilkan daftar Mahasiswa. Pertama Pada <code>Mahasiswa</code> Class:",
    },
    {
      type: "code",
      lang: "js",
      label: "Mahasiswa.java",
      body: `
        public class Mahasiswa{
            private String nama;
            private String nim;
        }
      `,
    },
    { type: "h2", body: "Adapter" },
    {
      type: "p",
      body: "Dan disinilah keajaiban terjadi",
    },

    {
      type: "code",
      lang: "java",
      label: "SingleAdapter.java",
      body: `public class SingleAdapter<T> extends RecyclerView.Adapter<SingleAdapter.ViewHolder> {

            private List<T> mDataset = new ArrayList<>();
      
            private int lastPosition = -1;
            private int positionAnim = 0;
    
            private onEventClick<T> onItemClick;
        
            /**
             * @+id dari layout item yang akan ditambahkan
             * <p>
             * cont: R.layout.item
             **/
            private int layoutId;
    
            private Context context;

            /**
             * konstruktor untuk inisiasi adapter ada 2 tipe :
             *
             * @param layoutId ketika diklik dan layout
             * @param event    ketika diklik dan dataset
             * @param mDataset List data
             * @see List
             * @see ArrayList
             **/
        
        
            public SingleAdapter(int layoutId, @NonNull onEventClick<T> event, List<T> mDataset) {
                if (event == null) {
                    throw new NullPointerException(TAG + " onClick null!");
                }
                if (mDataset == null) {
                    throw new NullPointerException(TAG + " data set null!");
                }
                this.layoutId = layoutId;
                this.onItemClick = event;
                this.setData(mDataset);
            }
        
        
            @NonNull
            @Override
            public SingleAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
                context = parent.getContext();
                SingleAdapterRow<T> row = (SingleAdapterRow<T>) LayoutInflater.from(parent.getContext()).inflate(layoutId, parent, false);
                return new ViewHolder(row);
        
            }
        
            @Override
            public void onBindViewHolder(@NonNull SingleAdapter.ViewHolder holder, int position) {
                holder.mrow.bindView(mDataset.get(position), this.onItemClick, position);
            }
        
            @Override
            public int getItemCount() {
                return mDataset == null ? 0 : mDataset.size();
            }
        
            public static class ViewHolder extends RecyclerView.ViewHolder {
                public SingleAdapterRow mrow;
        
                public ViewHolder(@NonNull SingleAdapterRow itemView) {
                    super((View) itemView);
                    mrow = itemView;
                }
        
        
            }`,
    },
  ],
};
