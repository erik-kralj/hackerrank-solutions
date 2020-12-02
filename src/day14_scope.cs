class Difference {
    private int[] elements;
    public int maximumDifference;

	public Difference(int[] a) {
        this.elements = a;
    }

    public void computeDifference() {
        int a = Int32.MaxValue;
        int b = 0;
        for (int i = 0; i < this.elements.Length; i++) {
            int c = this.elements[i];
            a = Math.Min(c, a);
            b = Math.Max(c, b);
        }
        this.maximumDifference = Math.Abs(a - b);
    }

}
