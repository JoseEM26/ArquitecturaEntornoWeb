package Actividad;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JComboBox;
import javax.swing.DefaultComboBoxModel;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class proyecto extends JFrame {

	private JPanel contentPane;
	private JTextField txtCantidad;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					proyecto frame = new proyecto();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public proyecto() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblMarca = new JLabel("Marca");
		lblMarca.setBounds(10, 11, 46, 14);
		contentPane.add(lblMarca);
		
		JLabel lblCantidad = new JLabel("Cantidad");
		lblCantidad.setBounds(10, 36, 46, 14);
		contentPane.add(lblCantidad);
		
		txtCantidad = new JTextField();
		txtCantidad.setColumns(10);
		txtCantidad.setBounds(81, 33, 86, 20);
		contentPane.add(txtCantidad);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(10, 71, 414, 179);
		contentPane.add(scrollPane);
		
		JTextArea txtS = new JTextArea();
		scrollPane.setViewportView(txtS);
		
		JComboBox cboMarca = new JComboBox();
		cboMarca.setModel(new DefaultComboBoxModel(new String[] {"Lenovo i3", "Lenovo i5", "HP Ryzen 5", "Asus i7", "Asus Gamer"}));
		cboMarca.setBounds(80, 7, 86, 22);
		contentPane.add(cboMarca);
		
		JButton btnProcesar = new JButton("Procesar");
		btnProcesar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

		//determinacion 
				double impCompra=0,impDescuento,impPago;
				int cantidad,mouse=0,funda=0,marca;
				
				marca=cboMarca.getSelectedIndex();
				cantidad=Integer.parseInt(txtCantidad.getText());
				
			//calcular impCompra
				switch(marca) {
				case 0:
					impCompra=1600.00*cantidad;
					break;
				case 1:
					impCompra=2199.00*cantidad;
					break;
				case 2:
					impCompra=1990.00*cantidad;
					break;
				case 3:
					impCompra=3550.00*cantidad;
					break;
				case 4:
					impCompra=3999.90*cantidad;
					break;
					
				}
				
			//calcular imDescuento
				switch(cantidad) {
				case 1:
				case 2:
				case 3:
					impDescuento=impCompra*0.035;
				    break;
				    
				case 4:
				case 5:
				case 6:
					impDescuento=impCompra*0.045;
				    break;
				    
				case 7:
				case 8:
				case 9:
				case 10:
					impDescuento=impCompra*0.050;
				    break;
				        
				default:
					impDescuento=impCompra*0.070;
				    break;
				}
				
				impPago=impCompra-impDescuento;
				
				
				if(impPago<10000)
					funda=1*(cantidad/2);
				else
					mouse=2*(cantidad/3);
				
				
				
				
				
		//salida
				txtS.setText("DATOS DEL IMPORTE\n\n");
				txtS.append("Importe de Compra\t:S/."+String.format("%,8.2f", impCompra )+"\n");
				txtS.append("Importe de Descuento\t:S/."+String.format("%,8.2f",impDescuento)+"\n");
				txtS.append("Importe De Pago\t:S/."+String.format("%,8.2f", impPago )+"\n");
				txtS.append("Mouse\t\t:"+mouse+"\n");
				txtS.append("Funda\t\t:"+funda+"\n");
				
				
			}
				
		
			
			
			
			});
		btnProcesar.setBounds(335, 7, 89, 23);
		contentPane.add(btnProcesar);
	}

}