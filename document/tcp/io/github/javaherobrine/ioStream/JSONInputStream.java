package io.github.javaherobrine.ioStream;
import java.io.*;
import io.github.javaherobrine.*;
import javax.script.*;
/**
 * 从JSON流里面读取Map的类，只有readObject()和close()函数是有用的
 * @author Java_Herobrine
 */
public class JSONInputStream implements ObjectInput{
	private InputStream source;
	public JSONInputStream(InputStream source) {
		this.source=source;
	}
	@Override
	public Object readObject() throws IOException{
		try {
			return JavaScript.parse(new String(source.readNBytes(IOUtils.byte4ToInt(source.readNBytes(4), 0)),"UTF-8"));
		} catch (ScriptException e) {
			System.out.println(e);
			return null;
		}
	}
	public void readFully(byte[] b) throws IOException {}
	public void readFully(byte[] b, int off, int len) throws IOException {}
	public int skipBytes(int n) throws IOException {
		return 0;
	}
	public boolean readBoolean() throws IOException {
		return false;
	}
	public byte readByte() {
		return 0;
	}
	public int readUnsignedByte() throws IOException {
		return 0;
	}
	public short readShort() throws IOException {
		return 0;
	}
	public int readUnsignedShort() throws IOException {
		return 0;
	}
	public char readChar() throws IOException {
		return 0;
	}
	public int readInt() throws IOException {
		return 0;
	}
	public long readLong() throws IOException {
		return 0;
	}
	public float readFloat() throws IOException {
		return 0;
	}
	public double readDouble() throws IOException {
		return 0;
	}
	public String readLine() throws IOException {
		return null;
	}
	public String readUTF() throws IOException {
		return null;
	}
	public int read() throws IOException {
		return 0;
	}
	public int read(byte[] b) throws IOException {
		return 0;
	}
	public int read(byte[] b, int off, int len) throws IOException {
		return 0;
	}
	public long skip(long n) throws IOException {
		return 0;
	}
	public int available() throws IOException {
		return 0;
	}
	public void close() throws IOException {
		source.close();
	}
}
