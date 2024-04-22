package semana09;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

import com.sun.org.apache.bcel.internal.generic.RETURN;

import javax.swing.JLabel;
import javax.swing.JButton;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import javax.swing.JTextField;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.UIManager;
import javax.swing.JComboBox;
import javax.swing.DefaultComboBoxModel;

import java.awt.Font;

public class Arroz extends JFrame implements ActionListener {

	// Declaración de variables
	private static final long serialVersionUID = 9206324162700448001L;
	private JPanel contentPane;
	private JLabel lblMarca;
	private JLabel lblCantidad;
	private JComboBox<String> cboMarca;
	private JTextField txtCantidad;
	private JButton btnProcesar;
	private JButton btnBorrar;
	private JScrollPane scpScroll;
	private JTextArea txtS;

	// Lanza la aplicación
	public static void main(String[] args) {
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		}
		catch (Throwable e) {
			e.printStackTrace();
		}
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Arroz frame = new Arroz();
					frame.setVisible(true);
				}
				catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	// Crea la GUI
	public Arroz() {
		setTitle("Arroz");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);

		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		lblMarca = new JLabel("Marca de arroz");
		lblMarca.setBounds(10, 11, 91, 14);
		contentPane.add(lblMarca);

		lblCantidad = new JLabel("Cantidad de bolsas");
		lblCantidad.setBounds(10, 36, 91, 14);
		contentPane.add(lblCantidad);

		cboMarca = new JComboBox<String>();
		cboMarca.setModel(new DefaultComboBoxModel<String>(new String[] {"Coste\u00F1o", "Paisana del Norte", "Tropical Superior", "Norte\u00F1o Superior"}));
		cboMarca.setBounds(111, 8, 100, 20);
		contentPane.add(cboMarca);

		txtCantidad = new JTextField();
		txtCantidad.setBounds(111, 33, 100, 20);
		contentPane.add(txtCantidad);
		txtCantidad.setColumns(10);

		btnProcesar = new JButton("Procesar");
		btnProcesar.addActionListener(this);
		btnProcesar.setBounds(335, 7, 89, 23);
		contentPane.add(btnProcesar);

		btnBorrar = new JButton("Borrar");
		btnBorrar.addActionListener(this);
		btnBorrar.setBounds(335, 32, 89, 23);
		contentPane.add(btnBorrar);

		scpScroll = new JScrollPane();
		scpScroll.setBounds(10, 61, 414, 190);
		contentPane.add(scpScroll);

		txtS = new JTextArea();
		txtS.setFont(new Font("Monospaced", Font.PLAIN, 12));
		scpScroll.setViewportView(txtS);
	}

	// Direcciona eventos de tipo ActionEvent
	public void actionPerformed(ActionEvent arg0) {
		if (arg0.getSource() == btnBorrar) {
			actionPerformedBtnBorrar(arg0);
		}
		if (arg0.getSource() == btnProcesar) {
			actionPerformedBtnProcesar(arg0);
		}
	}

	// Procesa la pulsación del botón Borrar
	protected void actionPerformedBtnBorrar(ActionEvent arg0) {
		txtCantidad.setText("");
		txtS.setText("");
		cboMarca.setSelectedIndex(0);
		txtCantidad.requestFocus();
	}
	
	//========================================================================================================================================
	int leerMarca(){
		return cboMarca.getSelectedIndex();
	}
	
	int leerCantidad() {
		return Integer.parseInt(txtCantidad.getText());
	}
	
	double CalcularImporteDeCompra(int cantidad, int marca) {
		double impCompra=0;
	
		switch(marca) {
		case 0:
			impCompra = 14.5 * cantidad;
			break;
		case 1:	
			impCompra = 12.6 * cantidad;
			break;
		case 2:
			impCompra = 10.0 * cantidad;
			break;
		default:	
			impCompra = 12.8 * cantidad;
			
	}
	return impCompra;			
	}
	
	double CalcularimporteDeDescuento(int cantidad,double impCompra) {
		double impDescuento;
		switch(cantidad) {
		case 1: 
		case 2:
		case 3:
			impDescuento = 0.09*impCompra;
			break;
		case 4:
		case 5:
		case 6:
			impDescuento = 0.11 * impCompra;
			break;
		case 7:
		case 8:
		case 9:
			impDescuento = 0.13 * impCompra;
			break;
		default:	
			impDescuento = 0.15 * impCompra;
	}		
		return impDescuento;
	}
	
	double calcularImporteDePago(double importeCompra,double importeDescuento) {
		double importePago;
		importePago = importeCompra - importeDescuento;
	
		return importePago;
	}
	
	int calcularCaramelos(int marca,int cantidad) {
		int caramelos;
		
		switch(marca) {
		case 0:
			caramelos = 3;
			break;
		case 1:
			caramelos = 2;
			break;
		case 2:	
			caramelos = 2 * cantidad;
			break;
		default:	
			caramelos = 1 * cantidad;
	}
		return caramelos;
	}
	
	
	double CalcularGomitas(double impPago) {
	double gomitas;	
		
		if(impPago < 50)
			gomitas = 5;
		else if(impPago < 100)
			gomitas = 10;
		else if(impPago < 150)
			gomitas = 15;
		else
			gomitas = 20;
	
		
		return gomitas;
	}
	
	
	void salida(double impCompra,double impDescuento,double impPago,int caramelos,int gomitas) {
		txtS.setText("Importe compra    : S/. " + impCompra + "\n");
		txtS.append ("Importe descuento : S/. " + impDescuento + "\n");
		txtS.append ("Importe pagar     : S/. " + impPago + "\n");
		txtS.append ("Caramelos         : " + caramelos + "\n");
		txtS.append ("Gomitas           : " + gomitas + "\n");
	}
	
	
	
	
	
	
	
	
	//========================================================================================================================================

	// Procesa la pulsación del botón Procesar
	protected void actionPerformedBtnProcesar(ActionEvent arg0) {
		// Declaración de variables
		int mar, can, car, gom;
		double icom, ides, ipag;

		// Entrada de datos
		mar = cboMarca.getSelectedIndex();
		can = Integer.parseInt(txtCantidad.getText());

		// Cálculo del importe compra
		icom=CalcularImporteDeCompra(can ,mar);
		
		
		
		// Cálculo del importe del descuento
		ides=CalcularimporteDeDescuento(can,icom);

		// Cálculo del importe a pagar
		ipag=calcularImporteDePago(icom,ides);

		// Cálculo de los caramelos de regalo
		car=calcularCaramelos(mar,can);
		
		// Cálculo de las gomitas de regalo
		CalcularGomitas(ipag);
			
		// Salida de resultados
		salida(icom, ides, ipag, car, gom);
	}
}